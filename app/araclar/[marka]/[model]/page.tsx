import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVehicleBySlug, getEnginesByVehicleId, getTrimsByVehicleId, getRiskLevel, getAllVehicles, brandSlug, modelSlug } from '@/lib/dataService';
import VehicleRiskBadge from '@/components/VehicleRiskBadge';
import TrimComparisonTable from '@/components/TrimComparisonTable';
import DeferredComments from '@/components/DeferredComments';
import { absoluteUrl, assessVehicleSeoQuality, breadcrumbSchema, EDITORIAL_TEAM_NAME, SITE_URL } from '@/lib/seo';
import { ChevronRight, Star, ArrowRight, Fuel, Settings, AlertTriangle, Wrench } from 'lucide-react';

interface Props { params: Promise<{ marka: string; model: string }> }

export async function generateStaticParams() {
    return getAllVehicles().map(v => ({ marka: brandSlug(v.brand), model: modelSlug(v.model) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka, model } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) return { title: 'Araç Bulunamadı' };
    const engines = getEnginesByVehicleId(v.id);
    const quality = assessVehicleSeoQuality(v);
    const title = `${v.brand} ${v.model} Kronik Arızaları ve Motor Seçenekleri`;
    const description = `${v.brand} ${v.model} (${v.year}) için ${engines.length} motor seçeneği, ${v.chronicIssues.length} genel kronik kusur ve ${v.dnaScore}/100 risk skoru.`;
    const url = `/araclar/${marka}/${model}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        authors: [{ name: EDITORIAL_TEAM_NAME, url: '/hakkimizda' }],
        robots: { index: quality.indexable, follow: true },
        openGraph: { title, description, url, type: 'article' },
    };
}

export default async function ModelDetayPage({ params }: Props) {
    const { marka, model } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) notFound();

    const risk = getRiskLevel(v.dnaScore);
    const engines = getEnginesByVehicleId(v.id);
    const trimData = getTrimsByVehicleId(v.id);
    const pageUrl = `/araclar/${marka}/${model}`;
    const description = `${v.brand} ${v.model} (${v.year}) için ${engines.length} motor seçeneği, ${v.chronicIssues.length} genel kronik kusur ve ${v.dnaScore}/100 risk skoru.`;
    const structuredData = [
        breadcrumbSchema([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Araçlar', path: '/araclar' },
            { name: v.brand, path: `/araclar/${marka}` },
            { name: v.model },
        ]),
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': absoluteUrl(pageUrl) + '#webpage',
            url: absoluteUrl(pageUrl),
            name: `${v.brand} ${v.model} kronik arızaları ve motor seçenekleri`,
            description,
            isPartOf: { '@id': SITE_URL + '/#website' },
            author: { '@type': 'Organization', name: EDITORIAL_TEAM_NAME, url: absoluteUrl('/hakkimizda') },
            about: {
                '@type': 'Vehicle',
                name: `${v.brand} ${v.model}`,
                brand: { '@type': 'Brand', name: v.brand },
                model: v.model,
                vehicleModelDate: v.year,
                additionalProperty: [
                    { '@type': 'PropertyValue', name: 'OtoKusur risk skoru', value: `${v.dnaScore}/100` },
                    { '@type': 'PropertyValue', name: 'İncelenen genel kronik kusur', value: v.chronicIssues.length },
                    { '@type': 'PropertyValue', name: 'İncelenen motor seçeneği', value: engines.length },
                ],
            },
        },
    ];

    return (
        <article className="container-main py-6 sm:py-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] mb-6 flex-wrap" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#A91D3A]">Ana Sayfa</Link>
                <ChevronRight size={10} />
                <Link href="/araclar" className="hover:text-[#A91D3A]">Araçlar</Link>
                <ChevronRight size={10} />
                <Link href={`/araclar/${marka}`} className="hover:text-[#A91D3A]">{v.brand}</Link>
                <ChevronRight size={10} />
                <span className="text-[#0F0F10] font-medium">{v.model}</span>
            </nav>

            {/* ═══════ HEADER ═══════ */}
            <div className="card-dark p-6 sm:p-8 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <p className="text-[11px] text-white/40 font-medium mb-1">{v.brand} · {v.year}</p>
                        <h1 className="text-[20px] sm:text-[24px] font-extrabold text-white tracking-tight mb-3">{v.model}</h1>
                        <div className="flex items-center gap-2 flex-wrap">
                            <VehicleRiskBadge level={risk} size="lg" />
                            {v.ncapStars && (
                                <span className="badge bg-white/10 text-white/80">
                                    <Star size={11} className="text-amber-400 fill-amber-400" /> {v.ncapStars}★ NCAP
                                </span>
                            )}
                            <span className="badge bg-white/10 text-white/60">{engines.length} motor</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="score-ring">{v.dnaScore}</div>
                        <p className="text-[9px] text-white/30 mt-1.5 font-bold uppercase tracking-wider">DNA Skoru</p>
                    </div>
                </div>
            </div>

            {/* Motor Selection */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Wrench size={16} className="text-[#A91D3A]" />
                    <h2 className="text-[18px] font-bold text-[#0F0F10]">Motor Seçin</h2>
                </div>
                <p className="text-[13px] text-[#71717A] mb-5">Detaylı kusur raporunu görmek için bir motor seçin</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {engines.map(eng => {
                        const engRisk = getRiskLevel(eng.score);
                        return (
                            <Link key={eng.slug} href={`/araclar/${marka}/${modelSlug(v.model)}/${eng.slug}`}
                                className="card-elevated p-5 hover:shadow-lg hover:border-[#A91D3A]/20 transition-all group cursor-pointer border border-transparent">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-[15px] font-bold text-[#0F0F10] group-hover:text-[#A91D3A] transition-colors">{eng.name}</h3>
                                        <p className="text-[11px] text-[#A1A1AA] mt-0.5">{v.brand} {v.model}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[22px] font-extrabold text-[#0F0F10] tracking-tight">{eng.score}</span>
                                        <p className="text-[8px] text-[#A1A1AA] font-bold uppercase">Skor</p>
                                    </div>
                                </div>

                                {/* Specs */}
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <span className="text-[10px] bg-[#F7F7F8] text-[#3F3F46] px-2 py-1 rounded font-medium flex items-center gap-1">
                                        <Fuel size={9} /> {eng.fuelType}
                                    </span>
                                    <span className="text-[10px] bg-[#F7F7F8] text-[#3F3F46] px-2 py-1 rounded font-medium flex items-center gap-1">
                                        <Settings size={9} /> {eng.transmission}
                                    </span>
                                    <VehicleRiskBadge level={engRisk} size="sm" />
                                </div>

                                {/* Issues preview */}
                                {eng.chronicIssues.length > 0 && (
                                    <div className="space-y-1.5 mb-3">
                                        {eng.chronicIssues.slice(0, 2).map((ci, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ci.severity === 'high' ? 'bg-[#A91D3A]' : ci.severity === 'medium' ? 'bg-[#CA8A04]' : 'bg-[#3B82F6]'}`} />
                                                <span className="text-[#3F3F46]">{ci.title}</span>
                                            </div>
                                        ))}
                                        {eng.chronicIssues.length > 2 && (
                                            <p className="text-[9px] text-[#A1A1AA] pl-3">+{eng.chronicIssues.length - 2} daha...</p>
                                        )}
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#A91D3A] group-hover:gap-2.5 transition-all">
                                    Kusur Raporunu Gör <ArrowRight size={12} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
                {engines.length === 0 && (
                    <div className="card-elevated p-5 text-[12px] text-[#71717A]">
                        Bu modelin motor bazlı kusur raporları editoryal doğrulama aşamasında.
                        Genel araç uyarılarını inceleyebilir veya{' '}
                        <Link href={`/katalog/${marka}/${model}`} className="font-semibold text-[#A91D3A]">
                            teknik katalog kaydına bakabilirsiniz
                        </Link>.
                    </div>
                )}
            </div>

            {/* ═══════ TRIM COMPARISON ═══════ */}
            {trimData && (
                <div className="mb-8">
                    <TrimComparisonTable trimData={trimData} vehicleName={`${v.brand} ${v.model}`} />
                </div>
            )}

            {/* Vehicle-level Quick Info */}
            {v.chronicIssues.length > 0 && (
                <div className="card-elevated p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle size={14} className="text-[#CA8A04]" />
                        <h2 className="text-[14px] font-bold text-[#0F0F10]">Genel Araç Uyarıları</h2>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] mb-4">Tüm {v.model} motorları için geçerli genel sorunlar</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {v.chronicIssues.map(issue => (
                            <div key={issue.id} className="bg-[#F7F7F8] rounded-lg p-3.5">
                                <h3 className="text-[12px] font-semibold text-[#0F0F10] mb-1">{issue.title}</h3>
                                <p className="text-[10px] text-[#71717A] leading-relaxed">{issue.description.substring(0, 120)}...</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Kullanıcı Yorumları */}
            <DeferredComments vehicleId={v.id} vehicleName={`${v.brand} ${v.model}`} />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </article>
    );
}
