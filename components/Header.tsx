'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function HeaderClient() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <button
                className="mobile-menu-button md:hidden"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={open}
                aria-controls="mobile-navigation"
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {open && (
                <div className="mobile-menu-backdrop md:hidden" onClick={() => setOpen(false)}>
                    <nav
                        id="mobile-navigation"
                        className="mobile-menu-panel"
                        aria-label="Mobil menü"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <p className="mobile-menu-eyebrow">Keşfet</p>
                        <Link href="/araclar" onClick={() => setOpen(false)}>Araç Kütüphanesi</Link>
                        <Link href="/karsilastir" onClick={() => setOpen(false)}>Araç Karşılaştır</Link>
                        <Link href="/rehber" onClick={() => setOpen(false)}>Satın Alma Rehberi</Link>
                        <Link href="/#arac-bul" className="mobile-menu-cta" onClick={() => setOpen(false)}>
                            Aracını analiz et <ArrowUpRight size={16} />
                        </Link>
                        <p className="mobile-menu-note">263 araç kusur raporu · 16.000+ motor seçeneği</p>
                    </nav>
                </div>
            )}
        </>
    );
}
