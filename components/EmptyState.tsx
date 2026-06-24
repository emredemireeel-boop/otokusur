import { SearchX } from 'lucide-react';
import Link from 'next/link';

export default function EmptyState({ title = 'Sonuç bulunamadı', description = 'Arama kriterlerinize uygun araç bulunamadı.' }: { title?: string; description?: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 rounded-xl bg-[#FDF0F2] flex items-center justify-center mb-4">
                <SearchX size={24} className="text-[#A91D3A]" />
            </div>
            <h3 className="text-[15px] font-bold text-[#0F0F10] mb-1">{title}</h3>
            <p className="text-[12px] text-[#71717A] max-w-xs mb-5">{description}</p>
            <Link href="/araclar" className="btn-ghost text-[12px]">Tüm Araçları Gör</Link>
        </div>
    );
}
