import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidesData } from '@/data/guides';
import GuideContent from '@/components/GuideContent';
import { absoluteUrl, breadcrumbSchema, EDITORIAL_TEAM_NAME, SITE_URL } from '@/lib/seo';
import { ChevronRight, Clock, BookOpen, ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return guidesData.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const guide = guidesData.find(g => g.slug === slug);
    if (!guide) return { title: 'Rehber Bulunamadı' };
    const url = '/rehber/' + guide.slug;
    return {
        title: guide.title,
        description: guide.excerpt,
        alternates: { canonical: url },
        authors: [{ name: EDITORIAL_TEAM_NAME, url: '/hakkimizda' }],
        openGraph: {
            title: guide.title,
            description: guide.excerpt,
            url,
            type: 'article',
            publishedTime: guide.publishDate,
            modifiedTime: guide.updatedDate ?? guide.publishDate,
            authors: [EDITORIAL_TEAM_NAME],
        },
    };
}

export default async function RehberDetailPage({ params }: Props) {
    const { slug } = await params;
    const guide = guidesData.find(g => g.slug === slug);
    if (!guide) notFound();

    const pageUrl = '/rehber/' + guide.slug;
    const modifiedDate = guide.updatedDate ?? guide.publishDate;
    const structuredData = [
        breadcrumbSchema([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Rehber', path: '/rehber' },
            { name: guide.title },
        ]),
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': absoluteUrl(pageUrl) + '#article',
            mainEntityOfPage: absoluteUrl(pageUrl),
            url: absoluteUrl(pageUrl),
            headline: guide.title,
            description: guide.excerpt,
            author: {
                '@type': 'Organization',
                name: EDITORIAL_TEAM_NAME,
                url: absoluteUrl('/hakkimizda'),
            },
            datePublished: guide.publishDate,
            dateModified: modifiedDate,
            publisher: { '@id': SITE_URL + '/#organization' },
        },
    ];

    return (
        <article className="container-main py-6 sm:py-10 max-w-3xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-5 flex-wrap" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#DC2626]">Ana Sayfa</Link>
                <ChevronRight size={12} />
                <Link href="/rehber" className="hover:text-[#DC2626]">Rehber</Link>
                <ChevronRight size={12} />
                <span className="text-[#111827] font-medium line-clamp-1">{guide.title}</span>
            </nav>

            <header className="mb-5">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[11px] font-semibold text-[#DC2626] bg-[#FEF2F2] px-2 py-0.5 rounded-md">{guide.category}</span>
                    <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1"><Clock size={10} />{guide.readTime}</span>
                    <time dateTime={guide.publishDate} className="text-[11px] text-[#9CA3AF] flex items-center gap-1">
                        <BookOpen size={10} />Yayın: {guide.publishDate}
                    </time>
                    {guide.updatedDate && (
                        <time dateTime={guide.updatedDate} className="text-[11px] text-[#9CA3AF]">Güncelleme: {guide.updatedDate}</time>
                    )}
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-tight">{guide.title}</h1>
                <p className="text-sm text-[#6B7280] mt-2">{guide.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#52525B]">
                    <ShieldCheck size={14} className="text-[#A91D3A]" />
                    <span>Hazırlayan: <Link href="/hakkimizda" className="font-semibold text-[#111827] hover:text-[#A91D3A]">{EDITORIAL_TEAM_NAME}</Link></span>
                    <span aria-hidden>·</span>
                    <Link href="/yayin-ilkeleri" className="font-semibold text-[#A91D3A]">Yayın ilkeleri</Link>
                </div>
            </header>

            <div className="card-static p-5 sm:p-7">
                <GuideContent content={guide.content} />
            </div>

            <div className="mt-6 flex items-center justify-between">
                <Link href="/rehber" className="text-xs font-semibold text-[#DC2626] flex items-center gap-1 hover:gap-2 transition-all">
                    <ArrowLeft size={14} /> Tüm Rehberler
                </Link>
                <Link href="/araclar" className="btn-primary text-xs py-2 px-4">Kusur Raporu Ara</Link>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </article>
    );
}
