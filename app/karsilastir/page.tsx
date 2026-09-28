import type { Metadata } from 'next';
import { Suspense } from 'react';
import ComparisonClient, { type CompareOption } from '@/components/ComparisonClient';
import { Scale } from 'lucide-react';
import { getAllVehicles } from '@/lib/dataService';

export const metadata: Metadata = {
    title: 'Araç Karşılaştırma — Risk ve Kronik Arıza Kıyaslama',
    description: 'İki otomobili seçtiğiniz motor ve şanzımana göre; motor skoru, kronik kontroller, model riskleri ve güçlü-zayıf yönlerle yan yana karşılaştırın.',
    alternates: { canonical: '/karsilastir' },
    openGraph: { title: 'Motor Bazlı Araç Risk ve Kusur Karşılaştırma', description: 'İki aracı seçilen motor ve şanzımana bağlı kronik kusur ve risk skorlarıyla yan yana kıyaslayın.', url: '/karsilastir' },
};

export default function KarsilastirPage() {
    const options: CompareOption[] = getAllVehicles().map(({ id, brand, model, year }) => ({ id, brand, model, year }));

    return (
        <section className="container-main py-8 sm:py-12">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Scale size={20} className="text-[#A91D3A]" />
                    <h1 className="text-[22px] sm:text-[28px] font-extrabold text-[#0F0F10] tracking-tight">Araç Karşılaştır</h1>
                </div>
                <p className="text-[13px] text-[#71717A]">İki modeli ve motorlarını seçin; model ile motora bağlı riskleri ayrı ayrı karşılaştırın.</p>
            </div>
            <Suspense fallback={<div className="skeleton h-96 rounded-2xl" />}>
                <ComparisonClient options={options} />
            </Suspense>
        </section>
    );
}
