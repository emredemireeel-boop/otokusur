import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBrandInfo, getVehiclesByBrand, getRiskLevel, getAllBrands } from '@/lib/dataService';
import VehicleCard from '@/components/VehicleCard';
import { ChevronRight } from 'lucide-react';

interface Props { params: Promise<{ marka: string }> }

export async function generateStaticParams() {
    return getAllBrands().map(b => ({ marka: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka } = await params;
    const info = getBrandInfo(marka);
    if (!info) return { title: 'Marka Bulunamadı' };
    return { title: `${info.name} Kronik Arıza ve Kusur Raporu`, description: `${info.name} — ${info.vehicleCount} model analizi.` };
}

export default async function MarkaPage({ params }: Props) {
    const { marka } = await params;
    const info = getBrandInfo(marka);
    if (!info) notFound();

    const vehicles = getVehiclesByBrand(marka);
    const high = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'high').length;
    const med = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'medium').length;
    const low = vehicles.filter(v => getRiskLevel(v.dnaScore) === 'low').length;

    return (
        <section className="container-main py-6 sm:py-10">
            <nav className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#A91D3A]">Ana Sayfa</Link>
                <ChevronRight size={10} />
                <Link href="/araclar" className="hover:text-[#A91D3A]">Araçlar</Link>
                <ChevronRight size={10} />
                <span className="text-[#0F0F10] font-medium">{info.name}</span>
            </nav>

            <div className="card-elevated p-5 sm:p-6 mb-8">
                <h1 className="text-[20px] sm:text-[24px] font-extrabold text-[#0F0F10] tracking-tight mb-2">{info.name}</h1>
                <p className="text-[12px] text-[#71717A] mb-3">{info.name} markasının <strong className="text-[#0F0F10]">{info.vehicleCount}</strong> modelinin kronik kusur analizi.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="badge bg-[#FDF0F2] text-[#A91D3A]">Ort. Skor: {info.avgScore}</span>
                    <span className="badge badge-risk-low">{low} Düşük</span>
                    <span className="badge badge-risk-medium">{med} Orta</span>
                    {high > 0 && <span className="badge badge-risk-high">{high} Yüksek</span>}
                </div>
            </div>

            <h2 className="label mb-4">{info.name} Modelleri ({info.vehicleCount})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
        </section>
    );
}
