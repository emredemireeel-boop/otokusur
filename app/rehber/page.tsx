import type { Metadata } from 'next';
import { guidesData } from '@/data/guides';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
    title: 'Araç Alım Rehberi — İkinci El Araç İpuçları',
    description: 'İkinci el araç almadan önce bilmeniz gerekenler, kronik arıza rehberleri, ekspertiz ipuçları ve daha fazlası.',
};

export default function RehberPage() {
    return (
        <section className="container-main py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">Araç Alım Rehberleri</h1>
                <p className="text-sm text-[#64748B]">
                    İkinci el araç almadan önce bilmeniz gerekenler, kronik arıza bilgileri, ekspertiz ipuçları ve daha fazlası.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guidesData.map(g => <BlogCard key={g.slug} guide={g} />)}
            </div>
        </section>
    );
}
