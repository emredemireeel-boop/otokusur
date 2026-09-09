'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Comments = dynamic(() => import('./Comments'), {
    ssr: false,
    loading: () => (
        <div className="card-elevated mt-8 p-6 text-sm text-[#71717A]" role="status">
            Yorumlar yükleniyor…
        </div>
    ),
});

interface Props {
    vehicleId: number;
    engineSlug?: string;
    vehicleName: string;
}

export default function DeferredComments(props: Props) {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const anchor = anchorRef.current;
        if (!anchor || shouldLoad) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShouldLoad(true);
                observer.disconnect();
            },
            { rootMargin: '700px 0px' },
        );

        observer.observe(anchor);
        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <div ref={anchorRef}>
            {shouldLoad ? (
                <Comments {...props} />
            ) : (
                <div className="card-elevated mt-8 p-6 text-sm text-[#71717A]">
                    <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-[#A91D3A]" />
                        Kullanıcı deneyimleri aşağı kaydırıldığında yüklenir.
                    </div>
                </div>
            )}
        </div>
    );
}
