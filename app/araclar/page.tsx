import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import VehicleListClient from '@/components/VehicleListClient';
import { getAllBrands } from '@/lib/dataService';

export const metadata: Metadata = {
    title: 'Araç Kronik Arıza ve Kusur Veritabanı',
    description: '263+ detaylı araç raporunu marka, yakıt ve risk seviyesine göre filtreleyin. Kronik arızaları, motor sorunlarını ve risk skorlarını karşılaştırın.',
    alternates: { canonical: '/araclar' },
    openGraph: {
        title: 'Araç Kronik Arıza ve Kusur Veritabanı',
        description: 'Model ve motor bazında kronik arıza raporlarını keşfedin.',
        url: '/araclar',
        type: 'website',
    },
};

export default function AraclarPage() {
    const brands = getAllBrands();
    const brandDirectorySchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'OtoKusur marka dizini',
        numberOfItems: brands.length,
        itemListElement: brands.map((brand, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: brand.name,
            url: `https://otokusur.com/araclar/${brand.slug}`,
        })),
    };

    return (
        <section className="container-main py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">Araç Kusur Veritabanı</h1>
                <p className="text-sm text-[#64748B]">Marka, model veya yakıt tipine göre filtrele. Her aracın kronik arızalarını ve risk skorunu öğren.</p>
            </div>

            <nav className="card-elevated p-5 sm:p-6 mb-8" aria-label="Tüm araç markaları">
                <div className="flex items-end justify-between gap-4 mb-4">
                    <div>
                        <h2 className="text-lg font-extrabold text-[#0F172A]">Tüm markalar</h2>
                        <p className="text-xs text-[#64748B] mt-1">Marka sayfasından modellere ve motor bazlı kusur raporlarına ulaşın.</p>
                    </div>
                    <span className="text-xs font-bold text-[#A91D3A]">{brands.length} marka</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                        <Link
                            key={brand.slug}
                            href={`/araclar/${brand.slug}`}
                            className="rounded-full border border-[#E4E4E7] bg-white px-3 py-2 text-xs font-semibold text-[#3F3F46] transition-colors hover:border-[#A91D3A] hover:text-[#A91D3A]"
                        >
                            {brand.name} <span className="text-[#A1A1AA]">{brand.vehicleCount}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{Array.from({length:6}).map((_,i)=><div key={i} className="skeleton h-48 rounded-2xl"/>)}</div>}>
                <VehicleListClient />
            </Suspense>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandDirectorySchema) }} />
        </section>
    );
}
