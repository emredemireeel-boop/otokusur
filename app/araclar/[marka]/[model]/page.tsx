import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidesData } from '@/data/guides';
import { getVehicleBySlug, getEnginesByVehicleId, getTrimsByVehicleId, getRiskLevel, getAllVehicles, brandSlug, modelSlug } from '@/lib/dataService';
import VehicleRiskBadge from '@/components/VehicleRiskBadge';
import TrimComparisonTable from '@/components/TrimComparisonTable';
import DeferredComments from '@/components/DeferredComments';
import { absoluteUrl, assessVehicleSeoQuality, breadcrumbSchema, EDITORIAL_TEAM_NAME, SITE_UPDATED_AT, SITE_URL } from '@/lib/seo';
import { ArrowRight, BookOpen, CalendarRange, CheckCircle2, ChevronRight, ExternalLink, Fuel, Settings, ShieldCheck, Star, TrendingDown, TrendingUp, Wrench, XCircle, AlertTriangle } from 'lucide-react';

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
    const chassis = v.generationInfo ? ` ${v.generationInfo.chassisCode} kasa kodu, nesil yılları,` : '';
    const guideDetail = v.buyingGuide ? ' ikinci el satın alma rehberi,' : '';
    const description = `${v.brand} ${v.model} için${chassis}${guideDetail} ${engines.length} motor seçeneği, kronik arıza kontrolleri ve ${v.dnaScore}/100 risk skoru.`;
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
    const relatedGuides = guidesData.filter(guide => guide.relatedVehicleIds?.includes(v.id)).slice(0, 3);
    const hasReportedIssues = v.chronicIssues.some(issue => issue.reportCount > 0);
    const generationFamilies = ['i20', 'Clio', 'Civic', 'Corolla', 'Focus', 'Passat', 'Astra', 'Corsa', 'Megane', 'Polo', 'Tucson', 'Sportage', 'Qashqai', 'Arona'];
    const generationFamily = generationFamilies.find(family => v.model.toLocaleLowerCase('tr-TR').startsWith(family.toLocaleLowerCase('tr-TR')));
    const relatedGenerations = generationFamily
        ? getAllVehicles().filter(candidate =>
            candidate.brand === v.brand
            && candidate.model.toLocaleLowerCase('tr-TR').startsWith(generationFamily.toLocaleLowerCase('tr-TR')),
        )
        : [];
    const pageUrl = `/araclar/${marka}/${model}`;
    const chassis = v.generationInfo ? ` ${v.generationInfo.chassisCode} kasa kodu, nesil yılları,` : '';
    const guideDetail = v.buyingGuide ? ' ikinci el satın alma rehberi,' : '';
    const description = `${v.brand} ${v.model} için${chassis}${guideDetail} ${engines.length} motor seçeneği, kronik arıza kontrolleri ve ${v.dnaScore}/100 risk skoru.`;
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
            dateModified: SITE_UPDATED_AT,
            citation: v.sources?.map(source => source.url),
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
                    { '@type': 'PropertyValue', name: hasReportedIssues ? 'İncelenen genel kronik kusur' : 'İncelenen genel kontrol başlığı', value: v.chronicIssues.length },
                    { '@type': 'PropertyValue', name: 'İncelenen motor seçeneği', value: engines.length },
                ],
            },
        },
        ...(v.faqs?.length ? [{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: v.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }] : []),
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

            {/* Nesil rehberi */}
            {v.generationInfo && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="nesil-rehberi">
                    <div className="flex items-center gap-2 mb-3">
                        <CalendarRange size={16} className="text-[#A91D3A]" />
                        <h2 id="nesil-rehberi" className="text-[16px] font-bold text-[#0F0F10]">Nesil ve model yılı rehberi</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge bg-[#FCE8EC] text-[#8F1831]">Kasa kodu: {v.generationInfo.chassisCode}</span>
                        <span className="badge bg-[#F1F5F9] text-[#475569]">Pazar: {v.generationInfo.marketScope}</span>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-[#3F3F46] leading-relaxed mb-5">{v.generationInfo.summary}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                        {v.generationInfo.phases.map(phase => (
                            <div key={`${phase.years}-${phase.name}`} className="rounded-xl border border-[#EBEBED] bg-[#FAFAFA] p-4">
                                <p className="text-[10px] font-bold uppercase tracking-wide text-[#A91D3A] mb-1">{phase.years}</p>
                                <h3 className="text-[13px] font-bold text-[#0F0F10] mb-1.5">{phase.name}</h3>
                                <p className="text-[11px] text-[#71717A] leading-relaxed">{phase.summary}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <h3 className="text-[11px] font-bold text-[#0F0F10] mb-2">Gövde türevleri</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {v.generationInfo.bodyStyles.map(body => <span key={body} className="text-[10px] rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[#475569]">{body}</span>)}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold text-[#0F0F10] mb-2">Türkiye motor seçenekleri</h3>
                            <ul className="space-y-1.5">
                                {v.generationInfo.turkeyEngines.map(engine => (
                                    <li key={engine} className="flex items-start gap-2 text-[10px] text-[#52525B]">
                                        <CheckCircle2 size={11} className="text-[#16A34A] mt-0.5 flex-shrink-0" /> {engine}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {relatedGenerations.length > 1 && generationFamily && (
                <nav className="card-elevated p-4 sm:p-5 mb-6" aria-label={`${v.brand} ${generationFamily} nesilleri`}>
                    <h2 className="text-[12px] font-bold text-[#0F0F10] mb-3">Tüm {v.brand} {generationFamily} nesilleri ve gövdeleri</h2>
                    <div className="flex flex-wrap gap-2">
                        {relatedGenerations.map(generation => {
                            const href = `/araclar/${brandSlug(generation.brand)}/${modelSlug(generation.model)}`;
                            const current = generation.id === v.id;
                            return current ? (
                                <span key={generation.id} aria-current="page" className="rounded-lg bg-[#A91D3A] px-3 py-2 text-[10px] font-semibold text-white">
                                    {generation.model}
                                </span>
                            ) : (
                                <Link key={generation.id} href={href} className="rounded-lg border border-[#EBEBED] bg-white px-3 py-2 text-[10px] font-semibold text-[#3F3F46] hover:border-[#A91D3A]/30 hover:text-[#A91D3A]">
                                    {generation.model}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}

            {/* Araç güçlü ve zayıf yönleri */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" aria-label="Araç değerlendirmesi">
                <div className="card-elevated p-5">
                    <h2 className="label flex items-center gap-1.5 mb-3"><TrendingUp size={12} className="text-[#16A34A]" />Güçlü yönleri</h2>
                    <ul className="space-y-2">
                        {v.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                <CheckCircle2 size={13} className="text-[#16A34A] mt-0.5 flex-shrink-0" /><span>{strength}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-elevated p-5">
                    <h2 className="label flex items-center gap-1.5 mb-3"><TrendingDown size={12} className="text-[#A91D3A]" />Zayıf yönleri</h2>
                    <ul className="space-y-2">
                        {v.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start gap-2 text-[12px] text-[#3F3F46]">
                                <XCircle size={13} className="text-[#A91D3A] mt-0.5 flex-shrink-0" /><span>{weakness}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

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
                <div className="card-elevated p-5 sm:p-6 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle size={14} className="text-[#CA8A04]" />
                        <h2 className="text-[14px] font-bold text-[#0F0F10]">{hasReportedIssues ? 'Genel Araç Uyarıları' : 'Satın Alma Kontrol Başlıkları'}</h2>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] mb-4">{hasReportedIssues ? `Tüm ${v.model} motorları için incelenen genel sorunlar` : 'Uzun dönem arıza hükmü değil; kaynaklardan türetilen ekspertiz ve teslimat kontrol noktaları'}</p>
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

            {/* Modele özel ikinci el satın alma rehberi */}
            {v.buyingGuide && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="satin-alma-rehberi">
                    <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck size={16} className="text-[#A91D3A]" />
                        <h2 id="satin-alma-rehberi" className="text-[16px] font-bold text-[#0F0F10]">{v.brand} {v.model} ikinci el satın alma rehberi</h2>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-[#3F3F46] leading-relaxed mb-5">{v.buyingGuide.summary}</p>

                    <div className="rounded-xl border border-[#DDEADF] bg-[#F7FCF8] p-4 mb-5">
                        <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#15803D] mb-2">Kimler için uygun?</h3>
                        <ul className="space-y-2">
                            {v.buyingGuide.idealFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-[11px] text-[#3F3F46] leading-relaxed">
                                    <CheckCircle2 size={12} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h3 className="text-[13px] font-bold text-[#0F0F10] mb-3">Satın almadan önce uygulanacak kontrol sırası</h3>
                    <ol className="space-y-3 mb-5">
                        {v.buyingGuide.inspectionSteps.map((step, index) => (
                            <li key={step.title} className="flex gap-3 rounded-xl border border-[#EBEBED] bg-[#FAFAFA] p-4">
                                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#A91D3A] text-[10px] font-extrabold text-white">{index + 1}</span>
                                <div>
                                    <h4 className="text-[12px] font-bold text-[#0F0F10] mb-1">{step.title}</h4>
                                    <p className="text-[11px] text-[#71717A] leading-relaxed">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="rounded-xl border border-[#F1D5DB] bg-[#FFF9FA] p-4">
                        <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#8F1831] mb-1.5">OtoKusur değerlendirmesi</h3>
                        <p className="text-[11px] sm:text-[12px] text-[#3F3F46] leading-relaxed">{v.buyingGuide.finalVerdict}</p>
                    </div>
                </section>
            )}

            {/* Modele özel sık sorulan sorular */}
            {v.faqs && v.faqs.length > 0 && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="model-sss">
                    <div className="flex items-center gap-2 mb-1">
                        <BookOpen size={15} className="text-[#A91D3A]" />
                        <h2 id="model-sss" className="text-[15px] font-bold text-[#0F0F10]">{v.brand} {v.model} hakkında sık sorulan sorular</h2>
                    </div>
                    <p className="text-[10px] text-[#A1A1AA] mb-4">Kasa, motor, şanzıman ve ekspertiz hakkında kısa yanıtlar</p>
                    <div className="divide-y divide-[#EBEBED] border-y border-[#EBEBED]">
                        {v.faqs.map((faq, index) => (
                            <details key={faq.question} className="group py-3.5" open={index === 0}>
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[12px] font-semibold text-[#0F0F10] marker:content-none">
                                    <span>{faq.question}</span>
                                    <span aria-hidden="true" className="text-[17px] font-light text-[#A91D3A] transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="pt-2.5 pr-7 text-[11px] text-[#71717A] leading-relaxed">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            )}

            {/* Resmî güvenlik kampanyaları */}
            {v.safetyCampaigns && v.safetyCampaigns.length > 0 && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="guvenlik-kampanyalari">
                    <div className="flex items-center gap-2 mb-1">
                        <ShieldCheck size={15} className="text-[#A91D3A]" />
                        <h2 id="guvenlik-kampanyalari" className="text-[14px] font-bold text-[#0F0F10]">Resmî güvenlik kampanyaları</h2>
                    </div>
                    <p className="text-[11px] text-[#71717A] leading-relaxed mb-4">Geri çağırma kaydı kronik arıza oranı değildir. Yalnızca belirtilen üretim aralığındaki bazı şasi numaraları kapsama girebilir; kesin sonuç VIN sorgusuyla alınır.</p>
                    <div className="space-y-3">
                        {v.safetyCampaigns.map(campaign => (
                            <div key={campaign.campaignCode} className="rounded-xl border border-[#F1D5DB] bg-[#FFF9FA] p-4">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-[12px] font-bold text-[#0F0F10]">{campaign.title}</h3>
                                    <span className="badge bg-[#FCE8EC] text-[#8F1831]">{campaign.campaignCode}</span>
                                </div>
                                <p className="text-[10px] font-semibold text-[#52525B] mb-1">Etkilenen üretim: {campaign.affectedProduction}</p>
                                <p className="text-[11px] text-[#71717A] leading-relaxed mb-2">{campaign.description}</p>
                                <p className="text-[11px] text-[#3F3F46] leading-relaxed mb-3"><strong>Ne yapılmalı:</strong> {campaign.action}</p>
                                <a href={campaign.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#A91D3A] hover:underline">
                                    Resmî kaydı aç <ExternalLink size={10} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {v.sources && v.sources.length > 0 && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="kaynaklar">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={14} className="text-[#A91D3A]" />
                        <h2 id="kaynaklar" className="text-[14px] font-bold text-[#0F0F10]">Doğrulama kaynakları</h2>
                    </div>
                    <ul className="space-y-2">
                        {v.sources.map(source => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-3 rounded-lg border border-[#EBEBED] p-3 hover:border-[#A91D3A]/30">
                                    <span>
                                        <span className="block text-[11px] font-semibold text-[#0F0F10] group-hover:text-[#A91D3A]">{source.title}</span>
                                        <span className="block text-[9px] text-[#A1A1AA] mt-0.5">{source.publisher}</span>
                                    </span>
                                    <ExternalLink size={11} className="text-[#A1A1AA] mt-0.5 flex-shrink-0" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="text-[9px] text-[#A1A1AA] mt-3">Son editoryal kontrol: {SITE_UPDATED_AT}</p>
                </section>
            )}

            {relatedGuides.length > 0 && (
                <section className="card-elevated p-5 sm:p-6 mb-6" aria-labelledby="ilgili-rehberler">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={14} className="text-[#A91D3A]" />
                        <h2 id="ilgili-rehberler" className="text-[14px] font-bold text-[#0F0F10]">Bu araçla ilgili rehberler</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {relatedGuides.map(guide => (
                            <Link key={guide.slug} href={`/rehber/${guide.slug}`} className="group rounded-xl border border-[#EBEBED] p-4 hover:border-[#A91D3A]/30">
                                <span className="block text-[10px] font-semibold text-[#A91D3A] mb-1">{guide.category}</span>
                                <span className="block text-[12px] font-bold text-[#0F0F10] group-hover:text-[#A91D3A]">{guide.title}</span>
                                <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#71717A]">Rehberi aç <ArrowRight size={10} /></span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Kullanıcı Yorumları */}
            <DeferredComments vehicleId={v.id} vehicleName={`${v.brand} ${v.model}`} />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </article>
    );
}
