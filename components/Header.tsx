'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function HeaderClient() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="md:hidden p-1.5 rounded-md hover:bg-[#F7F7F8] transition-colors" onClick={() => setOpen(!open)} aria-label="Menü">
                {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            {open && (
                <div className="absolute top-14 left-0 right-0 bg-white border-b border-[#EBEBED] shadow-lg md:hidden z-50">
                    <nav className="flex flex-col p-3 gap-0.5">
                        <Link href="/araclar" className="px-4 py-2.5 rounded-md hover:bg-[#F7F7F8] text-[13px] font-medium text-[#0F0F10] transition-colors" onClick={() => setOpen(false)}>Araçlar</Link>
                        <Link href="/rehber" className="px-4 py-2.5 rounded-md hover:bg-[#F7F7F8] text-[13px] font-medium text-[#0F0F10] transition-colors" onClick={() => setOpen(false)}>Rehber</Link>
                        <div className="mt-2 px-3">
                            <Link href="/araclar" className="btn-primary w-full text-center text-[12px] py-2.5 justify-center" onClick={() => setOpen(false)}>Kusur Ara</Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
