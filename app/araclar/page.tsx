import type { Metadata } from 'next';
import { Suspense } from 'react';
import VehicleListClient from '@/components/VehicleListClient';

export const metadata: Metadata = {
    title: 'Araçlar — Kronik Kusur Veritabanı',
    description: 'Marka ve model bazlı araç kusurlarını, kronik arızalarını ve risk skorlarını inceleyin. 239+ araç modeli analiz edildi.',
};

export default function AraclarPage() {
    return (
        <section className="container-main py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">Araç Kusur Veritabanı</h1>
                <p className="text-sm text-[#64748B]">Marka, model veya yakıt tipine göre filtrele. Her aracın kronik arızalarını ve risk skorunu öğren.</p>
            </div>
            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{Array.from({length:6}).map((_,i)=><div key={i} className="skeleton h-48 rounded-2xl"/>)}</div>}>
                <VehicleListClient />
            </Suspense>
        </section>
    );
}
