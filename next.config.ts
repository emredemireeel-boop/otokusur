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
            // Evergreen talep kümesi: popüler eski nesillerde hatalı motor ve birleşik model URL'leri.
            {
                source: '/araclar/renault/clio-4-nesil-2012-2019/10-tce-90-hp-benzin-manuel-x-tronic',
                destination: '/araclar/renault/clio-4-nesil-2012-2019/09-tce-90-ps-manuel',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-4-nesil-2012-2019/15-dci-110-hp-dizel-manuel-edc',
                destination: '/araclar/renault/clio-4-nesil-2012-2019/15-dci-75-90-110-ps-manuel-edc',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-4-nesil-2012-2019/13-tce-140-hp-benzin-edc',
                destination: '/araclar/renault/clio-4-nesil-2012-2019/12-tce-120-ps-edc',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-4-nesil-2012-2019/16-e-tech-140-hp-hibrit-otomatik',
                destination: '/araclar/renault/clio-4-nesil-2012-2019',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-k-2015-2021/12-puretech-130-hp-benzin-eat8',
                destination: '/araclar/opel/astra-k-2015-2021/14-turbo-150-ps-at6',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-k-2015-2021/15-bluehdi-130-hp-dizel-eat8',
                destination: '/araclar/opel/astra-k-2015-2021/16-cdti-136-ps-at6',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-k-kasa-16-dizel-otomatik/:motor*',
                destination: '/araclar/opel/astra-k-2015-2021',
                permanent: true,
            },
            {
                source: '/araclar/seat-vw/arona-t-cross-10-tsi/:motor*',
                destination: '/araclar/seat/arona-kj-1-nesil-2017-gunumuz',
                permanent: true,
            },
            {
                source: '/araclar/skoda-seat/kamiq-arona/:motor*',
                destination: '/araclar/seat/arona-kj-1-nesil-2017-gunumuz',
                permanent: true,
            },
            // İkinci el arama talebi: hatalı nesil/motor kayıtlarını araştırılmış kanoniğe taşı.
            {
                source: '/araclar/renault/megane-2/:motor*',
                destination: '/araclar/renault/megane-2-2002-2008',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-j-kasa-13-dizel/:motor*',
                destination: '/araclar/opel/astra-j-kasa-2009-2015',
                permanent: true,
            },
            {
                source: '/araclar/honda/civic-fb7/:motor*',
                destination: '/araclar/honda/civic-9-nesil-fb7-2012-2016',
                permanent: true,
            },
            {
                source: '/araclar/toyota/corolla-e150-kasa/:motor*',
                destination: '/araclar/toyota/corolla-e140e150-2007-2012',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-j-kasa/:motor*',
                destination: '/araclar/opel/astra-j-kasa-2009-2015',
                permanent: true,
            },
            {
                source: '/araclar/renault/megane-2-2002-2008/1-0-tce-90-hp',
                destination: '/araclar/renault/megane-2-2002-2008',
                permanent: true,
            },
            {
                source: '/araclar/renault/megane-2-2002-2008/1-5-dci-110-hp',
                destination: '/araclar/renault/megane-2-2002-2008/15-dci-80-100-105-ps-manuel',
                permanent: true,
            },
            {
                source: '/araclar/toyota/corolla-e140e150-2007-2012/:invalid(1-5-dynamic-force-125-hp|1-8-hybrid-122-hp)',
                destination: '/araclar/toyota/corolla-e140e150-2007-2012',
                permanent: true,
            },
            {
                source: '/araclar/honda/civic-9-nesil-fb7-2012-2016/1-5-vtec-turbo-182-hp',
                destination: '/araclar/honda/civic-9-nesil-fb7-2012-2016',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-j-kasa-2009-2015/1-4-t-150-hp',
                destination: '/araclar/opel/astra-j-kasa-2009-2015/14-turbo-140-ps-manuel-at6',
                permanent: true,
            },
            {
                source: '/araclar/opel/astra-j-kasa-2009-2015/1-6-cdti-136-hp',
                destination: '/araclar/opel/astra-j-kasa-2009-2015/16-cdti-136-ps-manuel-at6',
                permanent: true,
            },
            {
                source: '/araclar/ford/focus-3-35-2011-2018/1-4-benzinli',
                destination: '/araclar/ford/focus-3-35-2011-2018/16-ti-vct-125-ps-manuel-powershift',
                permanent: true,
            },
            {
                source: '/araclar/ford/focus-3-35-2011-2018/1-6-dizel',
                destination: '/araclar/ford/focus-3-35-2011-2018/16-tdci-95-115-ps-manuel',
                permanent: true,
            },
            // Polo 6R/6C, Golf 7, Clio 3, Corsa D ve Fiesta Mk7 kanonikleştirmeleri.
            {
                source: '/araclar/ford/fiesta-7-nesil-mk75-2013-2017/:motor*',
                destination: '/araclar/ford/fiesta-6-nesil-mk7-2008-2017',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/polo-5-nesil-6r6c-2009-2017/1-0-tsi-110-hp',
                destination: '/araclar/volkswagen/polo-5-nesil-6r6c-2009-2017/10-tsi-95-110-ps-manuel-dsg',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/polo-5-nesil-6r6c-2009-2017/1-5-tsi-150-hp',
                destination: '/araclar/volkswagen/polo-5-nesil-6r6c-2009-2017',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/golf-7-2012-2020/1-0-tsi-110-hp',
                destination: '/araclar/volkswagen/golf-7-2012-2020/10-tsi-110-115-ps-manuel-dsg',
                permanent: true,
            },
            {
                source: '/araclar/volkswagen/golf-7-2012-2020/1-5-tsi-150-hp',
                destination: '/araclar/volkswagen/golf-7-2012-2020/15-tsi-130-150-ps-manuel-dsg',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-3-nesil-2005-2014/16-litre-dizel-manuel',
                destination: '/araclar/renault/clio-3-nesil-2005-2014/15-dci-65-70-85-105-ps-manuel',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-3-nesil-2005-2014/14-litre-benzin-manuel',
                destination: '/araclar/renault/clio-3-nesil-2005-2014',
                permanent: true,
            },
            {
                source: '/araclar/ford/fiesta-6-nesil-mk7-2008-2017/1-4-benzinli',
                destination: '/araclar/ford/fiesta-6-nesil-mk7-2008-2017/125-14-duratec-manuel-otomatik',
                permanent: true,
            },
            {
                source: '/araclar/ford/fiesta-6-nesil-mk7-2008-2017/1-6-dizel',
                destination: '/araclar/ford/fiesta-6-nesil-mk7-2008-2017/14-16-tdci-manuel',
                permanent: true,
            },
            // Clio 5'in eski kalıp motor sayfalarını araştırılmış motor profillerine taşı.
            {
                source: '/araclar/renault/clio-5-nesil-2020-2025/10-tce-90-hp-benzin-manuel-x-tronic',
                destination: '/araclar/renault/clio-5-nesil-2020-2025/10-tce-90-100-ps-manuel-xtronic',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-5-nesil-2020-2025/15-dci-110-hp-dizel-manuel-edc',
                destination: '/araclar/renault/clio-5-nesil-2020-2025/15-blue-dci-85-115-ps-manuel',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-5-nesil-2020-2025/13-tce-140-hp-benzin-edc',
                destination: '/araclar/renault/clio-5-nesil-2020-2025/13-tce-130-140-ps-edc',
                permanent: true,
            },
            {
                source: '/araclar/renault/clio-5-nesil-2020-2025/16-e-tech-140-hp-hibrit-otomatik',
                destination: '/araclar/renault/clio-5-nesil-2020-2025/16-e-tech-140-145-ps-hibrit',
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
