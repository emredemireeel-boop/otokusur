import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBrandInfo, getVehiclesByBrand, getRiskLevel, getAllBrands, getGlobalAvgScore, getTopRiskVehicle, getTopSafeVehicle, modelSlug } from '@/lib/dataService';
import VehicleCard from '@/components/VehicleCard';
import VehicleRiskBadge from '@/components/VehicleRiskBadge';
import { ChevronRight, AlertTriangle, Shield, TrendingUp, BarChart3 } from 'lucide-react';

interface Props { params: Promise<{ marka: string }> }

export async function generateStaticParams() {
    return getAllBrands().map(b => ({ marka: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka } = await params;
    const info = getBrandInfo(marka);
    if (!info) return { title: 'Marka Bulunamadı' };
    const title = `${info.name} Kronik Arızaları, Modelleri ve Risk Skorları`;
    const description = `${info.name} için ${info.vehicleCount} araç analizi, kronik arıza raporları ve model bazlı risk skorları. Marka ortalaması: ${info.avgScore}/100.`;
    const url = `/araclar/${marka}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: 'website' },
    };
}

export default async function MarkaPage({ params }: Props) {
    const { marka } = await params;
    const info = getBrandInfo(marka);
    if (!info) notFound();

    const vehicles = getVehiclesByBrand(marka);
    const high = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'high').length;
    const med = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'medium').length;
    const low = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'low').length;
    const globalAvg = getGlobalAvgScore();
    const riskiest = getTopRiskVehicle(marka);
    const safest = getTopSafeVehicle(marka);
    const totalIssues = vehicles.reduce((s, v) => s + v.chronicIssues.length, 0);

    const highPct = Math.round((high / vehicles.length) * 100);
    const medPct = Math.round((med / vehicles.length) * 100);
    const lowPct = Math.round((low / vehicles.length) * 100);

    return (
        <section className="container-main py-6 sm:py-10">
            <nav className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#A91D3A]">Ana Sayfa</Link>
                <ChevronRight size={10} />
                <Link href="/araclar" className="hover:text-[#A91D3A]">Araçlar</Link>
                <ChevronRight size={10} />
                <span className="text-[#0F0F10] font-medium">{info.name}</span>
            </nav>

            {/* ═══════ HEADER ═══════ */}
            <div className="card-dark p-6 sm:p-8 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-[22px] sm:text-[28px] font-extrabold text-white tracking-tight mb-2">{info.name}</h1>
                        <p className="text-[13px] text-white/50 mb-3">
                            <strong className="text-white">{info.vehicleCount}</strong> model analiz edildi · <strong className="text-white">{totalIssues}</strong> kronik kusur tespit edildi
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="badge bg-white/10 text-white/80">Ort. Skor: {info.avgScore}</span>
                            <span className="badge badge-risk-low">{low} Düşük</span>
                            <span className="badge badge-risk-medium">{med} Orta</span>
                            {high > 0 && <span className="badge badge-risk-high">{high} Yüksek</span>}
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="score-ring">{info.avgScore}</div>
                        <p className="text-[9px] text-white/30 mt-1.5 font-bold uppercase tracking-wider">Marka Ort.</p>
                    </div>
                </div>
            </div>

            {/* ═══════ DASHBOARD ═══════ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Risk Distribution */}
                <div className="card-elevated p-5">
                    <div className="flex items-center gap-2 mb-3">
                        <BarChart3 size={14} className="text-[#A91D3A]" />
                        <h3 className="text-[12px] font-bold text-[#0F0F10]">Risk Dağılımı</h3>
                    </div>
                    <div className="h-4 bg-[#F0F0F2] rounded-full overflow-hidden flex mb-3">
                        {lowPct > 0 && <div className="bg-[#16A34A] h-full transition-all" style={{ width: `${lowPct}%` }} />}
                        {medPct > 0 && <div className="bg-[#CA8A04] h-full transition-all" style={{ width: `${medPct}%` }} />}
                        {highPct > 0 && <div className="bg-[#A91D3A] h-full transition-all" style={{ width: `${highPct}%` }} />}
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#16A34A]" /> Düşük {lowPct}%</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#CA8A04]" /> Orta {medPct}%</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#A91D3A]" /> Yüksek {highPct}%</span>
                    </div>
                </div>

                {/* Best Model */}
                {safest && (
                    <div className="card-elevated p-5 border-l-[3px] border-l-[#16A34A]">
                        <div className="flex items-center gap-2 mb-2">
                            <Shield size={14} className="text-[#16A34A]" />
                            <h3 className="text-[12px] font-bold text-[#0F0F10]">En Güvenilir Model</h3>
                        </div>
                        <Link href={`/araclar/${marka}/${modelSlug(safest.model)}`} className="hover:text-[#A91D3A] transition-colors">
                            <p className="text-[14px] font-bold text-[#0F0F10]">{safest.model}</p>
                        </Link>
                        <p className="text-[10px] text-[#71717A] mt-0.5">{safest.year}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[18px] font-extrabold text-[#16A34A]">{safest.dnaScore}</span>
                            <VehicleRiskBadge level={getRiskLevel(safest.dnaScore)} size="sm" />
                        </div>
                    </div>
                )}

                {/* Worst Model */}
                {riskiest && riskiest.id !== safest?.id && (
                    <div className="card-elevated p-5 border-l-[3px] border-l-[#A91D3A]">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle size={14} className="text-[#A91D3A]" />
                            <h3 className="text-[12px] font-bold text-[#0F0F10]">En Riskli Model</h3>
                        </div>
                        <Link href={`/araclar/${marka}/${modelSlug(riskiest.model)}`} className="hover:text-[#A91D3A] transition-colors">
                            <p className="text-[14px] font-bold text-[#0F0F10]">{riskiest.model}</p>
                        </Link>
                        <p className="text-[10px] text-[#71717A] mt-0.5">{riskiest.year}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[18px] font-extrabold text-[#A91D3A]">{riskiest.dnaScore}</span>
                            <VehicleRiskBadge level={getRiskLevel(riskiest.dnaScore)} size="sm" />
                        </div>
                    </div>
                )}
            </div>

            {/* Brand vs Global Average */}
            <div className="card-elevated p-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={14} className="text-[#A91D3A]" />
                    <h3 className="text-[12px] font-bold text-[#0F0F10]">{info.name} vs Genel Ortalama</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] text-[#71717A] mb-1">{info.name} Ortalaması</p>
                        <div className="h-3 bg-[#F0F0F2] rounded-full overflow-hidden mb-1">
                            <div className="h-full rounded-full bg-[#A91D3A] transition-all" style={{ width: `${info.avgScore}%` }} />
                        </div>
                        <p className="text-[13px] font-bold text-[#0F0F10]">{info.avgScore}/100</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#71717A] mb-1">Tüm Markalar Ortalaması</p>
                        <div className="h-3 bg-[#F0F0F2] rounded-full overflow-hidden mb-1">
                            <div className="h-full rounded-full bg-[#71717A] transition-all" style={{ width: `${globalAvg}%` }} />
                        </div>
                        <p className="text-[13px] font-bold text-[#71717A]">{globalAvg}/100</p>
                    </div>
                </div>
                {info.avgScore !== globalAvg && (
                    <p className="text-[11px] text-[#71717A] mt-3 pt-3 border-t border-[#F0F0F2]">
                        {info.name}, genel ortalamaya göre{' '}
                        <strong className={info.avgScore >= globalAvg ? 'text-[#16A34A]' : 'text-[#A91D3A]'}>
                            {Math.abs(info.avgScore - globalAvg)} puan {info.avgScore >= globalAvg ? 'daha yüksek' : 'daha düşük'}
                        </strong>.
                    </p>
                )}
            </div>

            {/* Model List */}
            <h2 className="label mb-4">{info.name} Modelleri ({info.vehicleCount})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
        </section>
    );
}
