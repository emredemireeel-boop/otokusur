'use client';

import { useState } from 'react';
import { Check, Copy, Printer } from 'lucide-react';

export default function GuideActions() {
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    };

    return (
        <div className="mt-4 flex flex-wrap gap-2 print:hidden" aria-label="Makale araçları">
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-white px-3 py-2 text-xs font-semibold text-[#3F3F46] hover:border-[#A91D3A] hover:text-[#A91D3A]" onClick={() => window.print()} type="button">
                <Printer size={14} /> Kontrol listesini yazdır
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-white px-3 py-2 text-xs font-semibold text-[#3F3F46] hover:border-[#A91D3A] hover:text-[#A91D3A]" onClick={copyLink} type="button">
                {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Bağlantı kopyalandı' : 'Bağlantıyı kopyala'}
            </button>
        </div>
    );
}
