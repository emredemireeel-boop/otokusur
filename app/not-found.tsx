import Link from 'next/link';
import { SearchX } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="container-main py-20 text-center">
            <div className="w-16 h-16 rounded-xl bg-[#FDF0F2] mx-auto mb-5 flex items-center justify-center">
                <SearchX size={28} className="text-[#A91D3A]" />
            </div>
            <h1 className="text-[22px] font-extrabold text-[#0F0F10] mb-2">Sayfa Bulunamadı</h1>
            <p className="text-[13px] text-[#71717A] max-w-sm mx-auto mb-6">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
            <div className="flex items-center justify-center gap-3">
                <Link href="/" className="btn-primary">Ana Sayfaya Dön</Link>
                <Link href="/araclar" className="btn-ghost">Araçları İncele</Link>
            </div>
        </section>
    );
}
