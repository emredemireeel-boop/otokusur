import type { NextConfig } from "next";

const securityHeaders = [
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
    compress: true,
    turbopack: {
        root: process.cwd(),
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            // Hyundai i20: yinelenen/eski nesil ve motor URL'lerini tek kanonik yapıda koru.
            {
                source: '/araclar/hyundai/i20-3-nesil-bc3-2020-2025',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-2020-gunumuz',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-bc3-2020-2025/14-mpi-100-hp-benzin-manuel-otomatik',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz/14-mpi-100-ps-benzin-6at',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-2020-gunumuz/14-mpi-100-hp-benzin-otomatik',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz/14-mpi-100-ps-benzin-6at',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-bc3-2020-2025/10-t-gdi-100-hp-benzin-dct',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz/10-t-gdi-100-ps-benzin-7dct',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-2020-gunumuz/10-tgdi-100-hp-benzin-dct',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz/10-t-gdi-100-ps-benzin-7dct',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-3-nesil-bc3-2020-2025/:invalid(14-crdi-90-hp-dizel-manuel|16-t-gdi-177-hp-benzin-dct)',
                destination: '/araclar/hyundai/i20-3-nesil-bc3-2020-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/14-mpi-100-hp-benzin-manuel-otomatik',
                destination: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/14-mpi-100-ps-benzin-4at',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/10-t-gdi-100-hp-benzin-dct',
                destination: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/10-t-gdi-100-120-ps-benzin-5mt-7dct',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/14-crdi-90-hp-dizel-manuel',
                destination: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/14-crdi-90-ps-dizel-6mt',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-2-nesil-gb-2014-2020/16-t-gdi-177-hp-benzin-dct',
                destination: '/araclar/hyundai/i20-2-nesil-gb-2014-2020',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-1-nesil-pb-2008-2014/:motor(14-litre-benzin-manuel|14-litre-benzin-otomatik)',
                destination: '/araclar/hyundai/i20-1-nesil-pb-2008-2014/14-mpi-100-ps-benzin-5mt-4at',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/i20-1-nesil-pb-2008-2014/:invalid(16-litre-dizel-manuel|16-litre-dizel-otomatik)',
                destination: '/araclar/hyundai/i20-1-nesil-pb-2008-2014',
                permanent: true,
            },
            // Araştırma katmanıyla yenilenen BYD ve Togg sayfaları.
            // Eski otomatik motor URL'leri hatalı içerik taşımak yerine kanonik model sayfasına gider.
            {
                source: '/araclar/togg/t10x-1-nesil-2023-2025/:motor*',
                destination: '/araclar/togg/t10x-1-nesil-2023-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/togg/t10x/:motor*',
                destination: '/araclar/togg/t10x-1-nesil-2023-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/togg/t10f-standart-menzil/:motor*',
                destination: '/araclar/togg/t10f-1-nesil-2025-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/byd/seal-u-dm-i-2024-2025/:motor*',
                destination: '/araclar/byd/seal-u-dm-i-2024-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/byd/dolphin-design-paket/:motor*',
                destination: '/araclar/byd/dolphin-2024-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/byd/seal-sedan-design/:motor*',
                destination: '/araclar/byd/seal-2024-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/byd/sealion-7/:motor*',
                destination: '/araclar/byd/sealion-7-2025-gunumuz',
                permanent: true,
            },
            // Çok satan modellerde değişen nesil adlarını ve kopya kayıtları tek kanoniğe taşı.
            {
                source: '/araclar/toyota/corolla-12-nesil-2019-2025/:motor*',
                destination: '/araclar/toyota/corolla-12-nesil-e210-2019-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/renault/megane-4-nesil-2016-2025/:motor*',
                destination: '/araclar/renault/megane-sedan-4-nesil-2016-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/renault/duster-evolution-turbo/:motor*',
                destination: '/araclar/renault/duster-3-nesil-2024-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/fiat/egea-1-nesil-2015-2025/:motor*',
                destination: '/araclar/fiat/egea-sedan-1-nesil-2015-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/toyota/c-hr-2-nesil-2024-2025/:motor*',
                destination: '/araclar/toyota/c-hr-2-nesil-2023-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/peugeot/2008-2-nesil-p24-2019-2025/:motor*',
                destination: '/araclar/peugeot/2008-2-nesil-p24-2019-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/peugeot/e-3008-gt-2024/:motor*',
                destination: '/araclar/peugeot/3008-3-nesil-2024-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/hyundai/tucson-4-nesil-2021-gunumuz/:motor*',
                destination: '/araclar/hyundai/tucson-nx4-4-nesil-2020-2025',
                permanent: true,
            },
            {
                source: '/araclar/skoda/octavia-nx-4-nesil-2020-2025/:motor*',
                destination: '/araclar/skoda/octavia-nx-4-nesil-2020-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/citroen/c4-x-1-nesil-2022-2025/:motor*',
                destination: '/araclar/citroen/c4-x-1-nesil-2022-gunumuz',
                permanent: true,
            },
            // Arama talebi yüksek modeller: eski/kopya URL'leri yeni araştırılmış kanonik sayfalara taşı.
            {
                source: '/araclar/fiat/egea-cross-16-multijet-otomatik/:motor*',
                destination: '/araclar/fiat/egea-cross-1-nesil-2020-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/dacia/sandero-stepway-2021-2025/:motor*',
                destination: '/araclar/dacia/sandero-stepway-3-nesil-2021-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/tesla/model-y-long-range/:motor*',
                destination: '/araclar/tesla/yeni-model-y-juniper-2025-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/opel/corsa-f-2019-2025/:motor*',
                destination: '/araclar/opel/corsa-f-2020-2025',
                permanent: true,
            },
            {
                source: '/araclar/opel/corsa-12-turbo-otomatik/:motor*',
                destination: '/araclar/opel/corsa-f-2020-2025',
                permanent: true,
            },
            {
                source: '/araclar/ford/focus-4-15-dizel-trend-x/:motor*',
                destination: '/araclar/ford/focus-4-nesil-mk4-2018-2025',
                permanent: true,
            },
            {
                source: '/araclar/honda/civic-11-nesil-fe1-2021-2025/:invalid(16-i-dtec-120-hp-dizel-otomatik|15-ehev-hibrit-hibrit-e-cvt)',
                destination: '/araclar/honda/civic-11-nesil-fe1-2021-2025',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/polo-aw-6-nesil-2017-2025/16-tdi-120-hp-dizel-dsg',
                destination: '/araclar/volkswagen/polo-aw-6-nesil-2017-2025/16-tdi-95-ps-dizel-dsg',
                permanent: true,
            },
            {
                source: '/araclar/opel/corsa-f-2020-2025/15-bluehdi-130-hp-dizel-eat8',
                destination: '/araclar/opel/corsa-f-2020-2025/15-dizel-102-ps-manuel',
                permanent: true,
            },
            {
                source: '/araclar/ford/focus-4-nesil-mk4-2018-2025/14-benzinli-benzin-otomatik',
                destination: '/araclar/ford/focus-4-nesil-mk4-2018-2025/15-ti-vct-123-ps-6at',
                permanent: true,
            },
            {
                source: '/araclar/ford/focus-4-nesil-mk4-2018-2025/16-dizel-dizel-manuel',
                destination: '/araclar/ford/focus-4-nesil-mk4-2018-2025/15-ecoblue-120-ps-8at',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/passat-variant-b9-15-etsi/18-litre-hibrit-otomatik',
                destination: '/araclar/volkswagen/passat-variant-b9-15-etsi/15-ehybrid-204-ps-dsg',
                permanent: true,
            },
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.otokusur.com' }],
                destination: 'https://otokusur.com/:path*',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            { source: '/(.*)', headers: securityHeaders },
            {
                source: '/:path*\\.(svg|jpg|png|webp|avif)',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
        ];
    },
    poweredByHeader: false,
};

export default nextConfig;
