'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export const ADSENSE_CLIENT = 'ca-pub-6387001035314883';

export default function AdSense() {
    const pathname = usePathname();
    // Utility, legal and protected pages do not request ads.
    const editorial = pathname === '/' || /^\/(araclar|ariza-rehberi|rehber)(\/|$)/.test(pathname);
    if (!editorial) return null;
    return <Script id="adsense" async strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous" />;
}
