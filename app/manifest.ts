import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'OtoKusur',
        short_name: 'OtoKusur',
        description: 'Araç kronik arıza, motor sorunu ve ekspertiz araştırma platformu.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#A91D3A',
        lang: 'tr',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    };
}
