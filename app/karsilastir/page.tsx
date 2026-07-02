import type { Metadata } from 'next';
import { Suspense } from 'react';
import ComparisonClient from '@/components/ComparisonClient';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Araç Karşılaştır — İki Aracı Yan Yana Kıyasla',
    description: 'İki farklı aracı DNA skoru, kronik kusur, risk seviyesi ve motor seçenekleri ile yan yana karşılaştırın.',
};

export default function KarsilastirPage() {
    return (
        <section className="container-main py-8 sm:py-12">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Scale size={20} className="text-[#A91D3A]" />
                    <h1 className="text-[22px] sm:text-[28px] font-extrabold text-[#0F0F10] tracking-tight">Araç Karşılaştır</h1>
                </div>
                <p className="text-[13px] text-[#71717A]">İki farklı modeli yan yana karşılaştırarak bilinçli karar verin.</p>
            </div>
            <Suspense fallback={<div className="skeleton h-96 rounded-2xl" />}>
                <ComparisonClient />
            </Suspense>
        </section>
    );
}
