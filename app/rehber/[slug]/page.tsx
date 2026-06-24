import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidesData } from '@/data/guides';
import { ChevronRight, Clock, BookOpen, ArrowLeft } from 'lucide-react';

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
    return { title: guide.title, description: guide.excerpt };
}

export default async function RehberDetailPage({ params }: Props) {
    const { slug } = await params;
    const guide = guidesData.find(g => g.slug === slug);
    if (!guide) notFound();

    const html = guide.content
        .replace(/^### (.*$)/gm, '<h3 class="text-base font-bold text-[#111827] mt-5 mb-2">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="text-lg font-bold text-[#111827] mt-7 mb-2">$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#111827]">$1</strong>')
        .replace(/^- (.*$)/gm, '<li class="flex items-start gap-2 text-xs text-[#374151] py-0.5"><span class="text-[#DC2626] mt-1">•</span><span>$1</span></li>')
        .replace(/^(\d+)\. (✅ )?(.*$)/gm, '<li class="flex items-start gap-2 text-xs text-[#374151] py-0.5"><span class="text-[#DC2626] font-semibold min-w-[20px]">$1.</span><span>$2$3</span></li>')
        .replace(/\n\n/g, '</p><p class="text-sm text-[#374151] leading-relaxed mb-3">')
        .replace(/\|.*\|/g, (match) => `<div class="text-xs text-[#6B7280] bg-[#F9FAFB] px-3 py-1.5 rounded">${match}</div>`);

    return (
        <article className="container-main py-6 sm:py-10 max-w-3xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-5 flex-wrap" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#DC2626]">Ana Sayfa</Link>
                <ChevronRight size={12} />
                <Link href="/rehber" className="hover:text-[#DC2626]">Rehber</Link>
                <ChevronRight size={12} />
                <span className="text-[#111827] font-medium line-clamp-1">{guide.title}</span>
            </nav>

            <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[11px] font-semibold text-[#DC2626] bg-[#FEF2F2] px-2 py-0.5 rounded-md">{guide.category}</span>
                    <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1"><Clock size={10} />{guide.readTime}</span>
                    <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1"><BookOpen size={10} />{guide.publishDate}</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-tight">{guide.title}</h1>
                <p className="text-sm text-[#6B7280] mt-2">{guide.excerpt}</p>
            </div>

            <div className="card-static p-5 sm:p-7">
                <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-[#374151] leading-relaxed mb-3">${html}</p>` }} />
            </div>

            <div className="mt-6 flex items-center justify-between">
                <Link href="/rehber" className="text-xs font-semibold text-[#DC2626] flex items-center gap-1 hover:gap-2 transition-all">
                    <ArrowLeft size={14} /> Tüm Rehberler
                </Link>
                <Link href="/araclar" className="btn-primary text-xs py-2 px-4">Kusur Raporu Ara</Link>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "Article",
                headline: guide.title, description: guide.excerpt,
                author: { "@type": "Organization", name: "OtoKusur" },
                datePublished: guide.publishDate,
                publisher: { "@type": "Organization", name: "OtoKusur" },
            }) }} />
        </article>
    );
}
