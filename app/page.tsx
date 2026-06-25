import Link from 'next/link';
import HeroSearch from '@/components/HeroSearch';
import VehicleCard from '@/components/VehicleCard';
import BlogCard from '@/components/BlogCard';
import { getGlobalStats, getPopularVehicles } from '@/lib/dataService';
import { guidesData } from '@/data/guides';
import { ArrowRight, Search, Shield, BarChart3, AlertTriangle, ChevronRight } from 'lucide-react';

export default function HomePage() {
    const stats = getGlobalStats();
    const popular = getPopularVehicles(6);
    const guides = guidesData.slice(0, 3);

    return (
        <>
            {/* ════════════════════════════════════════════
                HERO — Clean white, no gradient
            ════════════════════════════════════════════ */}
            <section className="border-b border-[#EBEBED]">
                <div className="container-main pt-12 pb-14 sm:pt-16 sm:pb-20">
                    {/* Label */}
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-2 bg-[#FDF0F2] text-[#A91D3A] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                            <span className="accent-dot" />
                            Türkiye&apos;nin araç kusur veritabanı
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0F0F10] leading-[1.1] tracking-tight mb-4">
                            Arabayı almadan,<br />
                            <span className="text-[#A91D3A]">kusurunu öğren.</span>
                        </h1>
                        <p className="text-[14px] sm:text-[15px] text-[#71717A] leading-relaxed max-w-md mx-auto">
                            Marka, model ve motor seçerek kronik arızaları ve risk skorunu tek sayfada inceleyin.
                        </p>
                    </div>

                    {/* Configurator */}
                    <HeroSearch />
                </div>
            </section>

            {/* ════════════════════════════════════════════
                STATS — Inline, minimal
            ════════════════════════════════════════════ */}
            <section className="bg-[#F7F7F8] border-b border-[#EBEBED]">
                <div className="container-main py-6">
                    <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
                        {[
                            { val: `${stats.totalVehicles}+`, label: 'Model' },
                            { val: `${stats.totalIssues}+`, label: 'Kronik Arıza' },
                            { val: `${stats.totalBrands}+`, label: 'Marka' },
                            { val: '25+', label: 'Kontrol Maddesi' },
                        ].map(s => (
                            <div key={s.label} className="flex items-center gap-2">
                                <span className="text-[18px] sm:text-[20px] font-extrabold text-[#0F0F10]">{s.val}</span>
                                <span className="text-[11px] text-[#A1A1AA] font-medium">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                POPULAR MODELS
            ════════════════════════════════════════════ */}
            <section className="container-main py-14 sm:py-20">
                <div className="flex items-end justify-between mb-8 sm:mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="accent-dot" />
                            <span className="text-[10px] font-bold text-[#A91D3A] uppercase tracking-[0.1em]">Popüler</span>
                        </div>
                        <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#0F0F10] tracking-tight">En Çok Araştırılan Modeller</h2>
                    </div>
                    <Link href="/araclar" className="text-[12px] font-semibold text-[#A91D3A] hidden sm:flex items-center gap-1 hover:gap-1.5 transition-all">
                        Tümünü Gör <ArrowRight size={13} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popular.map(v => <VehicleCard key={v.id} vehicle={v} />)}
                </div>
                <div className="mt-6 text-center sm:hidden">
                    <Link href="/araclar" className="btn-ghost text-[12px]">Tüm Araçları Gör <ChevronRight size={13} /></Link>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                HOW IT WORKS — Numbered steps
            ════════════════════════════════════════════ */}
            <section className="bg-[#F7F7F8] border-y border-[#EBEBED]">
                <div className="container-main py-14 sm:py-20">
                    <div className="text-center mb-10 sm:mb-12">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="accent-dot" />
                            <span className="text-[10px] font-bold text-[#A91D3A] uppercase tracking-[0.1em]">Nasıl Çalışır</span>
                        </div>
                        <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#0F0F10] tracking-tight">3 Adımda Kusurları Öğren</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { n: '01', title: 'Araç Seç', desc: 'Marka, model, yakıt tipi ve şanzıman tipini seçin.', icon: <Search size={18} /> },
                            { n: '02', title: 'Raporu İncele', desc: 'Kronik arızaları, risk skorunu ve motor bazlı sorunları görün.', icon: <BarChart3 size={18} /> },
                            { n: '03', title: 'Bilinçli Karar', desc: 'Kontrol listesiyle ekspertize hazırlıklı gidin.', icon: <Shield size={18} /> },
                        ].map(s => (
                            <div key={s.n} className="card-elevated p-6 relative">
                                <div className="absolute top-5 right-5 text-[28px] font-black text-[#F0F0F2] select-none">{s.n}</div>
                                <div className="w-10 h-10 rounded-lg bg-[#FDF0F2] flex items-center justify-center text-[#A91D3A] mb-4">{s.icon}</div>
                                <h3 className="text-[14px] font-bold text-[#0F0F10] mb-1.5">{s.title}</h3>
                                <p className="text-[12px] text-[#71717A] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                GUIDES
            ════════════════════════════════════════════ */}
            <section className="container-main py-14 sm:py-20">
                <div className="flex items-end justify-between mb-8 sm:mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="accent-dot" />
                            <span className="text-[10px] font-bold text-[#A91D3A] uppercase tracking-[0.1em]">Rehber</span>
                        </div>
                        <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#0F0F10] tracking-tight">Araç Alım Rehberleri</h2>
                    </div>
                    <Link href="/rehber" className="text-[12px] font-semibold text-[#A91D3A] hidden sm:flex items-center gap-1 hover:gap-1.5 transition-all">
                        Tümünü Gör <ArrowRight size={13} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {guides.map(g => <BlogCard key={g.slug} guide={g} />)}
                </div>
            </section>

            {/* ════════════════════════════════════════════
                CTA — Dark minimal
            ════════════════════════════════════════════ */}
            <section className="container-main pb-14 sm:pb-20">
                <div className="card-dark p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-[20px] sm:text-[24px] font-extrabold text-white tracking-tight mb-2">Almadan önce araştır.</h2>
                        <p className="text-[13px] text-[#71717A] max-w-md">İkinci el araç almadan önce modelin kronik kusurlarını ve risk skorunu incele.</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link href="/araclar" className="bg-[#A91D3A] hover:bg-[#8B1730] text-white font-semibold rounded-lg px-6 py-3 text-[13px] transition-colors flex items-center gap-2">
                            <Search size={14} /> Hemen Araştır
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
