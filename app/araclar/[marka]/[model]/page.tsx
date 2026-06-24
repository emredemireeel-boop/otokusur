import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVehicleBySlug, getEnginesByVehicleId, getRiskLevel, getRiskLabel, getCostLevel, categorizeIssues, getAllVehicles, brandSlug, modelSlug } from '@/lib/dataService';
import { getSeverityLabel } from '@/data/vehicle-dna';
import VehicleRiskBadge from '@/components/VehicleRiskBadge';
import { ChevronRight, AlertTriangle, CheckCircle2, XCircle, Star, Info, Fuel, Settings, TrendingUp, TrendingDown, CircleAlert, Shield } from 'lucide-react';
import { checklistData } from '@/data/checklist';

interface Props { params: Promise<{ marka: string; model: string }> }

export async function generateStaticParams() {
    return getAllVehicles().map(v => ({ marka: brandSlug(v.brand), model: modelSlug(v.model) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka, model } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) return { title: 'Araç Bulunamadı' };
    return {
        title: `${v.brand} ${v.model} Kronik Arıza ve Kusur Raporu`,
        description: `${v.brand} ${v.model} (${v.year}) — ${v.chronicIssues.length} kronik kusur, DNA skoru ${v.dnaScore}/100.`,
    };
}

export default async function ModelDetayPage({ params }: Props) {
    const { marka, model } = await params;
    const v = getVehicleBySlug(marka, model);
    if (!v) notFound();

    const risk = getRiskLevel(v.dnaScore);
    const engines = getEnginesByVehicleId(v.id);
    const categories = categorizeIssues(v.chronicIssues);
    const costLevel = getCostLevel(v.dnaScore);
    const checklistCategories = [...new Set(checklistData.map(c => c.category))];

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
                        <div className="score-ring bg-[#1A1A1C] text-white">{v.dnaScore}</div>
                        <p className="text-[9px] text-white/30 mt-1.5 font-bold uppercase tracking-wider">DNA Skoru</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* ═══════ LEFT ═══════ */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="card-elevated p-5">
                            <h2 className="label flex items-center gap-1.5 mb-3"><TrendingUp size={12} className="text-[#16A34A]" />Güçlü Yönler</h2>
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
                            <h2 className="label flex items-center gap-1.5 mb-3"><TrendingDown size={12} className="text-[#A91D3A]" />Zayıf Yönler</h2>
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

                    {/* Chronic Issues */}
                    <div className="card-elevated p-5 sm:p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle size={14} className="text-[#A91D3A]" />
                            <h2 className="text-[14px] font-bold text-[#0F0F10]">Kronik Kusurlar</h2>
                        </div>
                        <p className="text-[11px] text-[#A1A1AA] mb-5">Bu modelde sık raporlanan sorunlar</p>

                        {v.chronicIssues.length === 0 ? (
                            <p className="text-[12px] text-[#71717A] py-6 text-center">Henüz kronik kusur raporu bulunmuyor.</p>
                        ) : (
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
                        )}
                    </div>

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

                    {/* Engines */}
                    {engines.length > 0 && (
                        <div className="card-elevated p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Fuel size={14} className="text-[#A91D3A]" />
                                <h2 className="text-[14px] font-bold text-[#0F0F10]">Motor Seçenekleri</h2>
                            </div>
                            <div className="space-y-3">
                                {engines.map(eng => (
                                    <div key={eng.slug} className="border border-[#EBEBED] rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-1">
                                            <div>
                                                <h3 className="text-[13px] font-bold text-[#0F0F10]">{eng.name}</h3>
                                                <p className="text-[10px] text-[#A1A1AA] mt-0.5">{eng.fuelType} · {eng.transmission}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[18px] font-extrabold text-[#0F0F10] tracking-tight">{eng.score}</span>
                                                <p className="text-[8px] text-[#A1A1AA] font-bold uppercase">Skor</p>
                                            </div>
                                        </div>
                                        {eng.chronicIssues.length > 0 && (
                                            <div className="mt-3 pt-3 border-t border-[#F0F0F2] space-y-1.5">
                                                {eng.chronicIssues.map((ci, idx) => (
                                                    <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${ci.severity === 'high' ? 'bg-[#A91D3A]' : ci.severity === 'medium' ? 'bg-[#CA8A04]' : 'bg-[#3B82F6]'}`} />
                                                        <span className="text-[#3F3F46]">{ci.title} <span className="text-[#A1A1AA]">· {ci.reportCount} rapor</span></span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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
                                ['DNA Skoru', <span key="s" className="text-[13px] font-bold text-[#A91D3A]">{v.dnaScore}/100</span>],
                                ['Risk', <VehicleRiskBadge key="r" level={risk} size="sm" />],
                                ['Kronik Kusur', <span key="c" className="text-[13px] font-bold text-[#0F0F10]">{v.chronicIssues.length}</span>],
                                ['Bakım Maliyeti', <span key="m" className="text-[13px] font-bold text-[#0F0F10]">{costLevel}</span>],
                                ...(v.ncapStars ? [['Euro NCAP', <span key="n" className="text-[13px] font-bold text-[#0F0F10]">{v.ncapStars}★</span>]] : []),
                                ['Yıl', <span key="y" className="text-[13px] font-bold text-[#0F0F10]">{v.year}</span>],
                                ['Motor Seçeneği', <span key="e" className="text-[13px] font-bold text-[#0F0F10]">{engines.length}</span>],
                            ].map(([label, val], i) => (
                                <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#F0F0F2] last:border-0">
                                    <span className="text-[11px] text-[#71717A]">{label}</span>
                                    {val}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="card-elevated p-5">
                        <h3 className="label flex items-center gap-1.5 mb-1"><Shield size={11} className="text-[#A91D3A]" />Kontrol Listesi</h3>
                        <p className="text-[10px] text-[#A1A1AA] mb-4">Almadan önce kontrol edin</p>
                        {checklistCategories.map(cat => (
                            <div key={cat} className="mb-3">
                                <p className="text-[10px] font-bold text-[#A91D3A] uppercase tracking-[0.08em] mb-1.5">{cat}</p>
                                <div className="space-y-1">
                                    {checklistData.filter(c => c.category === cat).slice(0, 3).map(item => (
                                        <label key={item.id} className="flex items-start gap-2 text-[11px] text-[#3F3F46] cursor-pointer py-0.5">
                                            <input type="checkbox" className="mt-0.5 accent-[#A91D3A] rounded" />
                                            <span>{item.text}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

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
                </div>
            </div>

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "Product",
                name: `${v.brand} ${v.model}`, brand: { "@type": "Brand", name: v.brand },
                review: { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: v.dnaScore, bestRating: 100 }, author: { "@type": "Organization", name: "OtoKusur" } },
            }) }} />
        </article>
    );
}
