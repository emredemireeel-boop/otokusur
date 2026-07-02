import Link from 'next/link';
import type { Guide } from '@/data/guides';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ guide }: { guide: Guide }) {
    return (
        <Link
            href={`/rehber/${guide.slug}`}
            className="card relative flex flex-col h-full p-5 group overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
        >
            {/* Top accent line */}
            <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#A91D3A] group-hover:w-full transition-all duration-300" aria-hidden />

            <div className="flex items-center gap-2 mb-3">
                <span className="badge bg-[#FDF0F2] text-[#A91D3A]">{guide.category}</span>
                <span className="text-[10px] text-[#A1A1AA] flex items-center gap-1"><Clock size={10} />{guide.readTime}</span>
            </div>
            <h3 className="text-[15px] font-bold text-[#0F0F10] mb-2 group-hover:text-[#A91D3A] transition-colors leading-snug line-clamp-2">{guide.title}</h3>
            <p className="text-[12px] text-[#71717A] line-clamp-2 leading-relaxed mb-4">{guide.excerpt}</p>
            <span className="mt-auto pt-3 border-t border-[#F0F0F2] text-[11px] font-semibold text-[#A91D3A] flex items-center gap-1">
                Devamını Oku <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
        </Link>
    );
}
