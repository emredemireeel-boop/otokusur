import Link from 'next/link';
import type { Guide } from '@/data/guides';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ guide }: { guide: Guide }) {
    return (
        <Link href={`/rehber/${guide.slug}`} className="card block p-5 group">
            <div className="flex items-center gap-2 mb-3">
                <span className="badge bg-[#FDF0F2] text-[#A91D3A]">{guide.category}</span>
                <span className="text-[10px] text-[#A1A1AA] flex items-center gap-1"><Clock size={10} />{guide.readTime}</span>
            </div>
            <h3 className="text-[14px] font-bold text-[#0F0F10] mb-2 group-hover:text-[#A91D3A] transition-colors leading-snug line-clamp-2">{guide.title}</h3>
            <p className="text-[12px] text-[#71717A] line-clamp-2 leading-relaxed mb-4">{guide.excerpt}</p>
            <span className="text-[11px] font-semibold text-[#A91D3A] flex items-center gap-1">
                Devamını Oku <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
        </Link>
    );
}
