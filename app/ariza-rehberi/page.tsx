import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Gauge, ShieldCheck, Wrench } from 'lucide-react';
import { brandSlug, getAllVehicles, getEnginesByVehicleId, modelSlug } from '@/lib/dataService';
import { absoluteUrl, breadcrumbSchema, EDITORIAL_TEAM_NAME } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Araç Arıza Rehberi: Motor, Şanzıman ve Elektrik Sorunları',
    description: 'Motor, şanzıman, elektrik, yürür aksam ve gövde sorunlarını kategori bazında araştırın; ilgili araçların kronik kusur raporlarına ulaşın.',
    alternates: { canonical: '/ariza-rehberi' },
    authors: [{ name: EDITORIAL_TEAM_NAME, url: '/hakkimizda' }],
    openGraph: {
        title: 'Araç Arıza Rehberi',
        description: 'Kronik araç sorunlarını sistem bazında keşfedin ve ilgili model raporlarını karşılaştırın.',
        url: '/ariza-rehberi',
        type: 'website',
    },
};

const categoryDefinitions = [
    {
        id: 'motor',
        title: 'Motor ve emisyon sistemi',
        pattern: /motor|turbo|enjektör|yağ|egr|dpf|partikül|triger|buji|silindir|hararet|antifriz|soğutma|rölanti/i,
        intro: 'Yanma, yağlama, soğutma, turbo ve emisyon sistemiyle ilişkilendirilen kayıtları birlikte inceleyin.',
        checks: ['Soğuk marş ve rölanti', 'Yağ/soğutma sıvısı izleri', 'Egzoz dumanı ve OBD kaydı'],
    },
    {
        id: 'sanziman',
        title: 'Şanzıman ve aktarma',
        pattern: /şanzıman|vites|kavrama|debriyaj|mekatronik|cvt|dsg|edc|powershift|tork konvertör/i,
        intro: 'Vites geçişi, kavrama, mekatronik ve aktarma organlarıyla ilişkilendirilen model kayıtlarını bulun.',
        checks: ['Soğuk ve sıcak vites geçişi', 'D/R konumuna geçiş gecikmesi', 'Kalkışta titreme veya kayma'],
    },
    {
        id: 'elektrik',
        title: 'Elektrik ve elektronik',
        pattern: /elektr|sensör|ekran|multimedya|yazılım|akü|far|stop|klima|merkezi kilit|cam mekaniz/i,
        intro: 'Sensör, yazılım, ekran, elektrik donanımı ve iklimlendirmeyle ilgili tekrar eden kayıtları tarayın.',
        checks: ['Gösterge uyarıları', 'OBD ve akü testi', 'Tüm düğme, ekran ve sensörler'],
    },
    {
        id: 'yurur-aksam',
        title: 'Yürür aksam ve direksiyon',
        pattern: /süspansiyon|amortisör|salıncak|direksiyon|rot |rotbaşı|aks |aks kör|rulman|fren|disk|balata/i,
        intro: 'Süspansiyon, direksiyon, aks ve fren bileşenleriyle ilişkilendirilen kayıtları model bazında karşılaştırın.',
        checks: ['Bozuk zeminde ses kontrolü', 'Direksiyon boşluğu ve hizası', 'Frenleme ve lastik aşınması'],
    },
    {
        id: 'govde',
        title: 'Gövde, iç mekân ve donanım',
        pattern: /kapı|bagaj|sunroof|cam tavan|döşeme|trim|gıcırtı|fitil|su alma|boya|pas|koltuk/i,
        intro: 'Gövde, sızdırmazlık, iç trim ve konfor donanımlarına ilişkin kayıtları tek yerde inceleyin.',
        checks: ['Kapı, bagaj ve fitiller', 'Su alma ve nem izi', 'İç trim ve hareketli donanımlar'],
    },
] as const;

export default function ArizaRehberiPage() {
    const vehicles = getAllVehicles();
    const categories = categoryDefinitions.map((definition) => {
        const entries = vehicles
            .map((vehicle) => {
                const engineIssues = getEnginesByVehicleId(vehicle.id).flatMap((engine) => engine.chronicIssues);
                const matchingIssues = [...vehicle.chronicIssues, ...engineIssues]
                    .filter((issue) => definition.pattern.test(issue.title + ' ' + issue.description));

                return {
                    vehicle,
                    matchingIssues,
                    href: '/araclar/' + brandSlug(vehicle.brand) + '/' + modelSlug(vehicle.model),
                };
            })
            .filter((entry) => entry.matchingIssues.length > 0)
            .sort((a, b) => b.matchingIssues.length - a.matchingIssues.length || b.vehicle.totalReports - a.vehicle.totalReports);

        const issueFrequency = new Map<string, { title: string; count: number }>();
        for (const entry of entries) {
            for (const issue of entry.matchingIssues) {
                const key = issue.title.toLocaleLowerCase('tr-TR');
                const existing = issueFrequency.get(key);
                issueFrequency.set(key, { title: issue.title, count: (existing?.count ?? 0) + 1 });
            }
        }

        return {
            ...definition,
            entries,
            totalRecords: entries.reduce((total, entry) => total + entry.matchingIssues.length, 0),
            commonIssues: [...issueFrequency.values()].sort((a, b) => b.count - a.count).slice(0, 5),
        };
    });

    const structuredData = [
        breadcrumbSchema([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Arıza Rehberi' },
        ]),
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Araç arıza rehberi',
            url: absoluteUrl('/ariza-rehberi'),
            description: 'Araç sorunlarını sistem bazında gruplayan ve ilgili model kusur raporlarına bağlayan araştırma merkezi.',
            mainEntity: {
                '@type': 'ItemList',
                numberOfItems: categories.length,
                itemListElement: categories.map((category, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: category.title,
                    url: absoluteUrl('/ariza-rehberi#' + category.id),
                })),
            },
        },
    ];

    return (
        <main className="container-main py-8 sm:py-12">
            <header className="max-w-3xl mb-8">
                <span className="section-eyebrow"><Wrench size={12} /> Veriden konuya</span>
                <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">Araç Arıza Rehberi</h1>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#64748B]">
                    Belirtiyi veya sistemi seçin; veri tabanımızdaki ilgili kronik kusur kayıtlarını ve model raporlarını tek akışta inceleyin.
                    Aşağıdaki sayılar arıza olasılığı değil, OtoKusur&apos;da yayımlanmış kayıtların konu dağılımıdır.
                </p>
            </header>

            <nav className="mb-10 flex flex-wrap gap-2" aria-label="Arıza kategorileri">
                {categories.map((category) => (
                    <a className="rounded-full border border-[#E4E4E7] bg-white px-3 py-2 text-xs font-semibold text-[#3F3F46] hover:border-[#A91D3A] hover:text-[#A91D3A]" href={'#' + category.id} key={category.id}>
                        {category.title} · {category.entries.length} model
                    </a>
                ))}
            </nav>

            <div className="space-y-10">
                {categories.map((category) => (
                    <section className="scroll-mt-24" id={category.id} key={category.id}>
                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-2">
                                    <Gauge size={17} className="text-[#A91D3A]" />
                                    <h2 className="text-xl font-extrabold text-[#0F172A]">{category.title}</h2>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{category.intro}</p>
                            </div>
                            <div className="text-xs text-[#71717A]">
                                <strong className="text-[#0F172A]">{category.totalRecords}</strong> konu kaydı · <strong className="text-[#0F172A]">{category.entries.length}</strong> model
                            </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-3">
                            <aside className="card-elevated p-5">
                                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#0F172A]"><ShieldCheck size={15} className="text-[#16A34A]" /> Kontrol odağı</h3>
                                <ul className="space-y-2">
                                    {category.checks.map((check) => (
                                        <li className="flex items-start gap-2 text-xs leading-relaxed text-[#52525B]" key={check}>
                                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#16A34A]" /> {check}
                                        </li>
                                    ))}
                                </ul>
                                {category.commonIssues.length > 0 && (
                                    <>
                                        <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-wide text-[#71717A]">Sık geçen kayıt başlıkları</h3>
                                        <ul className="space-y-1.5">
                                            {category.commonIssues.map((issue) => (
                                                <li className="flex items-start justify-between gap-2 text-xs text-[#52525B]" key={issue.title}>
                                                    <span>{issue.title}</span><small className="font-semibold text-[#A91D3A]">{issue.count}</small>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </aside>

                            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
                                {category.entries.slice(0, 10).map(({ vehicle, matchingIssues, href }) => (
                                    <Link className="card-elevated group p-4 transition-transform hover:-translate-y-0.5" href={href} key={href}>
                                        <div className="mb-2 flex items-start justify-between gap-3">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-wide text-[#A1A1AA]">{vehicle.brand}</span>
                                                <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#A91D3A]">{vehicle.model}</h3>
                                            </div>
                                            <span className="badge badge-risk-medium"><AlertTriangle size={10} /> {matchingIssues.length} kayıt</span>
                                        </div>
                                        <p className="line-clamp-2 text-xs leading-relaxed text-[#71717A]">
                                            {matchingIssues.slice(0, 2).map((issue) => issue.title).join(' · ')}
                                        </p>
                                        <span className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#A91D3A]">Model raporunu aç <ArrowRight size={12} /></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <aside className="warning-box mt-10">
                <p className="text-xs leading-relaxed text-[#854D0E]">
                    Bu rehber tanı koymaz ve belirli bir aracın mevcut durumunu göstermez. Satın alma kararından önce bağımsız ekspertiz ve araç özelinde servis geçmişi kontrolü gerekir.
                </p>
            </aside>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </main>
    );
}
