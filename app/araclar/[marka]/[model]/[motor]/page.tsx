import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVehicleBySlug, getEnginesByVehicleId, getRiskLevel, getCostLevel, categorizeIssues, getAllVehicles, brandSlug, modelSlug } from '@/lib/dataService';
import { getSeverityLabel } from '@/data/vehicle-dna';
import VehicleRiskBadge from '@/components/VehicleRiskBadge';
import DeferredComments from '@/components/DeferredComments';
import { absoluteUrl, assessEngineSeoQuality, breadcrumbSchema, EDITORIAL_TEAM_NAME, SITE_URL } from '@/lib/seo';
import { ChevronRight, AlertTriangle, CheckCircle2, XCircle, Star, Info, Fuel, Settings, TrendingUp, TrendingDown, CircleAlert, Wrench } from 'lucide-react';

interface Props { params: Promise<{ marka: string; model: string; motor: string }> }

export async function generateStaticParams() {
    const allParams: { marka: string; model: string; motor: string }[] = [];
    getAllVehicles().forEach(v => {
        const engines = getEnginesByVehicleId(v.id);
        engines.forEach(eng => {
            allParams.push({
                marka: brandSlug(v.brand),
                model: modelSlug(v.model),
                motor: eng.slug,
            });
        });
    });
    return allParams;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka, model, motor } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) return { title: 'Araç Bulunamadı' };
    const engines = getEnginesByVehicleId(v.id);
    const eng = engines.find(e => e.slug === motor);
    if (!eng) return { title: 'Motor Bulunamadı' };
    const quality = assessEngineSeoQuality(eng);
    const title = `${v.brand} ${v.model} ${eng.name} Kronik Arıza Raporu`;
    const description = `${v.brand} ${v.model} ${eng.name} (${eng.fuelType} · ${eng.transmission}) için ${eng.chronicIssues.length} kronik motor sorunu ve ${eng.score}/100 risk skoru.`;
    const url = `/araclar/${marka}/${model}/${motor}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        authors: [{ name: EDITORIAL_TEAM_NAME, url: '/hakkimizda' }],
        robots: { index: quality.indexable, follow: true },
        openGraph: { title, description, url, type: 'article' },
    };
}

export default async function MotorDetayPage({ params }: Props) {
    const { marka, model, motor } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) notFound();

    const engines = getEnginesByVehicleId(v.id);
    const eng = engines.find(e => e.slug === motor);
    if (!eng) notFound();

    const risk = getRiskLevel(eng.score);
    const costLevel = getCostLevel(eng.score);
    const pageUrl = `/araclar/${marka}/${model}/${motor}`;
    const description = `${v.brand} ${v.model} ${eng.name} (${eng.fuelType} · ${eng.transmission}) için ${eng.chronicIssues.length} kronik motor sorunu ve ${eng.score}/100 risk skoru.`;

    // Combine vehicle + engine chronic issues
    const allIssues = [
        ...eng.chronicIssues.map((ci, idx) => ({
            id: 1000 + idx,
            title: ci.title,
            severity: ci.severity,
            reportCount: ci.reportCount,
            description: ci.description,
        })),
    ];
    const categories = categorizeIssues([...allIssues, ...v.chronicIssues]);
    const structuredData = [
        breadcrumbSchema([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Araçlar', path: '/araclar' },
            { name: v.brand, path: `/araclar/${marka}` },
            { name: v.model, path: `/araclar/${marka}/${modelSlug(v.model)}` },
            { name: eng.name },
        ]),
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': absoluteUrl(pageUrl) + '#webpage',
            url: absoluteUrl(pageUrl),
            name: `${v.brand} ${v.model} ${eng.name} kronik arıza raporu`,
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
                    { '@type': 'PropertyValue', name: 'Motor', value: eng.name },
                    { '@type': 'PropertyValue', name: 'Yakıt', value: eng.fuelType },
                    { '@type': 'PropertyValue', name: 'Şanzıman', value: eng.transmission },
                    { '@type': 'PropertyValue', name: 'OtoKusur motor risk skoru', value: `${eng.score}/100` },
                    { '@type': 'PropertyValue', name: 'İncelenen motor kusuru', value: eng.chronicIssues.length },
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
                <Link href={`/araclar/${marka}/${modelSlug(v.model)}`} className="hover:text-[#A91D3A]">{v.model}</Link>
                <ChevronRight size={10} />
                <span className="text-[#0F0F10] font-medium">{eng.name}</span>
            </nav>

            {/* ═══════ HEADER ═══════ */}
            <div className="card-dark p-6 sm:p-8 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <p className="text-[11px] text-white/40 font-medium mb-1">{v.brand} · {v.year}</p>
                        <h1 className="text-[20px] sm:text-[24px] font-extrabold text-white tracking-tight mb-2">
                            {eng.name} {v.model}
                        </h1>
                        <div className="flex items-center gap-2 flex-wrap mb-3">
                            <VehicleRiskBadge level={risk} size="lg" />
                            {v.ncapStars && (
                                <span className="badge bg-white/10 text-white/80">
                                    <Star size={11} className="text-amber-400 fill-amber-400" /> {v.ncapStars}★ NCAP
                                </span>
                            )}
                        </div>
                        {/* Engine specs */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-[10px] bg-white/8 text-white/70 px-2.5 py-1 rounded font-medium border border-white/5 flex items-center gap-1">
                                <Fuel size={9} /> {eng.fuelType}
                            </span>
                            <span className="text-[10px] bg-white/8 text-white/70 px-2.5 py-1 rounded font-medium border border-white/5 flex items-center gap-1">
                                <Settings size={9} /> {eng.transmission}
                            </span>
                            <span className="text-[10px] bg-white/8 text-white/70 px-2.5 py-1 rounded font-medium border border-white/5 flex items-center gap-1">
                                <Wrench size={9} /> {eng.chronicIssues.length} motor kusuru
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="score-ring">{eng.score}</div>
                        <p className="text-[9px] text-white/30 mt-1.5 font-bold uppercase tracking-wider">Motor Skoru</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* ═══════ LEFT ═══════ */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Engine Description (if available) */}
                    {eng.description && (
                        <div className="card-elevated p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Wrench size={14} className="text-[#A91D3A]" />
                                <h2 className="text-[14px] font-bold text-[#0F0F10]">Motor Hakkında</h2>
                            </div>
                            <p className="text-[12px] text-[#3F3F46] leading-relaxed">{eng.description}</p>
                        </div>
                    )}

                    {/* Engine Pros & Cons */}
                    {(eng.pros || eng.cons) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {eng.pros && eng.pros.length > 0 && (
                                <div className="card-elevated p-5">
                                    <h2 className="label flex items-center gap-1.5 mb-3"><TrendingUp size={12} className="text-[#16A34A]" />Motor Güçlü Yönleri</h2>
                                    <ul className="space-y-2">
                                        {eng.pros.map((s, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                                <CheckCircle2 size={13} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {eng.cons && eng.cons.length > 0 && (
                                <div className="card-elevated p-5">
                                    <h2 className="label flex items-center gap-1.5 mb-3"><TrendingDown size={12} className="text-[#A91D3A]" />Motor Zayıf Yönleri</h2>
                                    <ul className="space-y-2">
                                        {eng.cons.map((w, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                                <XCircle size={13} className="text-[#A91D3A] mt-0.5 flex-shrink-0" />
                                                <span>{w}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Vehicle Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="card-elevated p-5">
                            <h2 className="label flex items-center gap-1.5 mb-3"><TrendingUp size={12} className="text-[#16A34A]" />Araç Güçlü Yönleri</h2>
                            <ul className="space-y-2">
                                {v.strengths.map((s, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                        <CheckCircle2 size={13} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-elevated p-5">
                            <h2 className="label flex items-center gap-1.5 mb-3"><TrendingDown size={12} className="text-[#A91D3A]" />Araç Zayıf Yönleri</h2>
                            <ul className="space-y-2">
                                {v.weaknesses.map((w, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                        <XCircle size={13} className="text-[#A91D3A] mt-0.5 flex-shrink-0" />
                                        <span>{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Motor Chronic Issues */}
                    <div className="card-elevated p-5 sm:p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle size={14} className="text-[#A91D3A]" />
                            <h2 className="text-[14px] font-bold text-[#0F0F10]">Motor Kronik Kusurları</h2>
                        </div>
                        <p className="text-[11px] text-[#A1A1AA] mb-5">{eng.name} motorunda sık raporlanan sorunlar</p>

                        {eng.chronicIssues.length === 0 ? (
                            <p className="text-[12px] text-[#71717A] py-6 text-center">Bu motor için kronik kusur raporu bulunmuyor.</p>
                        ) : (
                            <div className="space-y-3">
                                {eng.chronicIssues.map((issue, idx) => (
                                    <div key={idx} className="border border-[#EBEBED] rounded-lg p-4 hover:border-[#D4D4D8] transition-colors">
                                        <div className="flex items-start justify-between mb-1.5 gap-2">
                                            <h3 className="text-[13px] font-semibold text-[#0F0F10]">{issue.title}</h3>
                                            <span className={`severity-${issue.severity} badge flex-shrink-0`}>{getSeverityLabel(issue.severity)}</span>
                                        </div>
                                        <p className="text-[12px] text-[#71717A] leading-relaxed mb-2">{issue.description}</p>
                                        <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA]">
                                            <CircleAlert size={10} /> {issue.reportCount} kullanıcı raporladı
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Vehicle-level Chronic Issues */}
                    {v.chronicIssues.length > 0 && (
                        <div className="card-elevated p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertTriangle size={14} className="text-[#CA8A04]" />
                                <h2 className="text-[14px] font-bold text-[#0F0F10]">Genel Araç Kusurları</h2>
                            </div>
                            <p className="text-[11px] text-[#A1A1AA] mb-5">{v.model} genelinde sık raporlanan sorunlar</p>
                            <div className="space-y-3">
                                {v.chronicIssues.map(issue => (
                                    <div key={issue.id} className="border border-[#EBEBED] rounded-lg p-4 hover:border-[#D4D4D8] transition-colors">
                                        <div className="flex items-start justify-between mb-1.5 gap-2">
                                            <h3 className="text-[13px] font-semibold text-[#0F0F10]">{issue.title}</h3>
                                            <span className={`severity-${issue.severity} badge flex-shrink-0`}>{getSeverityLabel(issue.severity)}</span>
                                        </div>
                                        <p className="text-[12px] text-[#71717A] leading-relaxed mb-2">{issue.description}</p>
                                        <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA]">
                                            <CircleAlert size={10} /> {issue.reportCount} kullanıcı raporladı
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Categories */}
                    {categories.length > 0 && (
                        <div className="card-elevated p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Settings size={14} className="text-[#A91D3A]" />
                                <h2 className="text-[14px] font-bold text-[#0F0F10]">Kategori Bazlı Analiz</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {categories.map(cat => (
                                    <div key={cat.name} className="bg-[#F7F7F8] rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[14px]">{cat.icon}</span>
                                            <h3 className="text-[12px] font-bold text-[#0F0F10]">{cat.name}</h3>
                                            <span className="text-[10px] bg-white text-[#71717A] px-1.5 py-0.5 rounded ml-auto font-medium">{cat.issues.length}</span>
                                        </div>
                                        <ul className="space-y-1">
                                            {cat.issues.map(i => (
                                                <li key={i.id} className="text-[11px] text-[#3F3F46] flex items-center gap-1.5">
                                                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i.severity === 'high' ? 'bg-[#A91D3A]' : i.severity === 'medium' ? 'bg-[#CA8A04]' : 'bg-[#3B82F6]'}`} />
                                                    {i.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* ═══════ SIDEBAR ═══════ */}
                <div className="space-y-5">
                    {/* Quick stats */}
                    <div className="card-elevated p-5">
                        <h3 className="label mb-4">Hızlı Bakış</h3>
                        <div className="space-y-3">
                            {[
                                ['Motor', <span key="en" className="text-[13px] font-bold text-[#0F0F10]">{eng.name}</span>],
                                ['Motor Skoru', <span key="s" className="text-[13px] font-bold text-[#A91D3A]">{eng.score}/100</span>],
                                ['Risk', <VehicleRiskBadge key="r" level={risk} size="sm" />],
                                ['Motor Kusuru', <span key="c" className="text-[13px] font-bold text-[#0F0F10]">{eng.chronicIssues.length}</span>],
                                ['Yakıt Tipi', <span key="f" className="text-[13px] font-bold text-[#0F0F10]">{eng.fuelType}</span>],
                                ['Şanzıman', <span key="t" className="text-[13px] font-bold text-[#0F0F10]">{eng.transmission}</span>],
                                ['Bakım Maliyeti', <span key="m" className="text-[13px] font-bold text-[#0F0F10]">{costLevel}</span>],
                                ...(v.ncapStars ? [['Euro NCAP', <span key="n" className="text-[13px] font-bold text-[#0F0F10]">{v.ncapStars}★</span>]] : []),
                                ['Yıl', <span key="y" className="text-[13px] font-bold text-[#0F0F10]">{v.year}</span>],
                            ].map(([label, val], i) => (
                                <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#F0F0F2] last:border-0">
                                    <span className="text-[11px] text-[#71717A]">{label}</span>
                                    {val}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Engine Options */}
                    {engines.length > 1 && (
                        <div className="card-elevated p-5">
                            <h3 className="label flex items-center gap-1.5 mb-1"><Fuel size={11} className="text-[#A91D3A]" />Diğer Motorlar</h3>
                            <p className="text-[10px] text-[#A1A1AA] mb-4">{engines.length - 1} diğer motor seçeneği</p>
                            <div className="space-y-2">
                                {engines.filter(e => e.slug !== eng.slug).map(otherEng => (
                                    <Link key={otherEng.slug} href={`/araclar/${marka}/${modelSlug(v.model)}/${otherEng.slug}`}
                                        className="block bg-[#F7F7F8] hover:bg-[#EFEFEF] rounded-lg p-3.5 transition-colors">
                                        <div className="flex items-start justify-between mb-0.5">
                                            <div>
                                                <h4 className="text-[12px] font-bold text-[#0F0F10]">{otherEng.name}</h4>
                                                <p className="text-[9px] text-[#A1A1AA] mt-0.5">{otherEng.fuelType} · {otherEng.transmission}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[16px] font-extrabold text-[#0F0F10] tracking-tight">{otherEng.score}</span>
                                                <p className="text-[7px] text-[#A1A1AA] font-bold uppercase">Skor</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Warning */}
                    <div className="warning-box">
                        <div className="flex items-start gap-2">
                            <Info size={13} className="text-[#CA8A04] mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-[11px] font-semibold text-[#854D0E] mb-0.5">Yasal Uyarı</p>
                                <p className="text-[10px] text-[#92400E]/70 leading-relaxed">Bu bilgiler kullanıcı raporlarından derlenmiştir. Satın alma öncesi bağımsız ekspertiz önerilir.</p>
                            </div>
                        </div>
                    </div>

                    {/* OtoSöz.com Tanıtım */}
                    <a href="https://otosoz.com" target="_blank" rel="noopener noreferrer"
                       className="block mt-4 group">
                        <div className="relative overflow-hidden rounded-xl border border-[#EBEBED] bg-gradient-to-r from-[#0F0F10] via-[#1A1A2E] to-[#16213E] p-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#A91D3A]/10 hover:border-[#A91D3A]/30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A91D3A] to-[#E94560] flex items-center justify-center text-white font-black text-[14px] flex-shrink-0 shadow-lg">
                                    ÖS
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[13px] font-bold text-white group-hover:text-[#E94560] transition-colors">
                                        OtoSöz.com
                                    </p>
                                    <p className="text-[11px] text-[#94A3B8] mt-0.5">
                                        Otomobil Tutkunlarının Sözlüğü 🚗
                                    </p>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#A91D3A] text-white text-[10px] font-bold px-3 py-1.5 rounded-full group-hover:bg-[#E94560] transition-colors flex-shrink-0">
                                    Keşfet
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#A91D3A]/10 rounded-full blur-2xl group-hover:bg-[#A91D3A]/20 transition-all" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Kullanıcı Yorumları (Motor bazlı) */}
            <DeferredComments vehicleId={v.id} engineSlug={eng.slug} vehicleName={`${v.brand} ${v.model} — ${eng.name}`} />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </article>
    );
}
