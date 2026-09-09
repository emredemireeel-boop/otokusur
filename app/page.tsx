import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    CircleAlert,
    Database,
    FileSearch,
    Gauge,
    ScanSearch,
    ShieldCheck,
    Sparkles,
    Wrench,
} from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import VehicleCard from '@/components/VehicleCard';
import BlogCard from '@/components/BlogCard';
import FAQ from '@/components/FAQ';
import { getAllBrands, getCatalogBrandNames, getCatalogStats, getGlobalStats, getPopularVehicles, toVehicleSummary } from '@/lib/dataService';
import { guidesData } from '@/data/guides';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
};

export default function HomePage() {
    const reportStats = getGlobalStats();
    const catalogStats = getCatalogStats();
    const popular = getPopularVehicles(6);
    const popularCards = popular.map(toVehicleSummary);
    const featured = popular[0];
    const guides = guidesData.slice(0, 3);
    const brands = getAllBrands().slice(0, 16);
    const catalogBrands = getCatalogBrandNames();

    return (
        <>
            <section className="home-hero" id="arac-bul">
                <div className="hero-grid-overlay" aria-hidden />
                <div className="hero-glow hero-glow-one" aria-hidden />
                <div className="hero-glow hero-glow-two" aria-hidden />

                <div className="container-main relative z-10 hero-layout">
                    <div className="hero-copy">
                        <div className="hero-eyebrow"><span className="status-pulse" /> Türkiye&apos;nin araç kusur istihbaratı</div>
                        <h1>
                            Arabayı değil,<br />
                            <span>gerçeği</span> satın al.
                        </h1>
                        <p className="hero-lead">
                            Marka, model, nesil ve motoru seç. Kronik arızaları, risk skorunu ve ekspertizde bakman gereken kritik noktaları saniyeler içinde gör.
                        </p>

                        <div className="hero-proof-row">
                            <div><BadgeCheck size={17} /><span><strong>{reportStats.totalVehicles}+</strong> detaylı kusur raporu</span></div>
                            <div><Database size={17} /><span><strong>{catalogStats.engines.toLocaleString('tr-TR')}+</strong> motor seçeneği</span></div>
                            <div><ShieldCheck size={17} /><span><strong>Bağımsız</strong> satın alma araştırması</span></div>
                        </div>

                        {featured && (
                            <Link href={`/araclar`} className="hero-insight-card">
                                <div className="insight-icon"><ScanSearch size={19} /></div>
                                <div className="insight-content">
                                    <span>Örnek canlı içgörü</span>
                                    <strong>{featured.brand} {featured.model}</strong>
                                    <small>{featured.chronicIssues.length} kronik kusur · {featured.totalReports.toLocaleString('tr-TR')} kullanıcı raporu</small>
                                </div>
                                <div className="insight-score"><strong>{featured.dnaScore}</strong><span>/100</span></div>
                            </Link>
                        )}
                    </div>

                    <HeroSearch brands={catalogBrands} stats={catalogStats} />
                </div>

                <div className="container-main relative z-10">
                    <div className="hero-stats-rail">
                        <div><strong>{catalogStats.brands}</strong><span>marka</span></div>
                        <div><strong>{catalogStats.models.toLocaleString('tr-TR')}</strong><span>model</span></div>
                        <div><strong>{catalogStats.generations.toLocaleString('tr-TR')}</strong><span>nesil</span></div>
                        <div><strong>{reportStats.totalIssues.toLocaleString('tr-TR')}</strong><span>kronik arıza</span></div>
                        <p>Veri kütüphanesi sürekli genişliyor <ArrowRight size={14} /></p>
                    </div>
                </div>
            </section>

            <section className="brand-rail" aria-label="Popüler araç markaları">
                <div className="container-main">
                    <div className="brand-rail-inner">
                        <span className="brand-rail-label">Popüler markalar</span>
                        <div className="brand-links">
                            {brands.map((brand) => (
                                <Link href={`/araclar/${brand.slug}`} key={brand.slug}>
                                    {brand.name}<small>{brand.vehicleCount}</small>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell section-popular">
                <div className="container-main">
                    <SectionHeading
                        eyebrow="Radarımızdaki araçlar"
                        title="En çok araştırılan kusur raporları"
                        text="Türkiye ikinci el pazarında sık karşılaşılan modellerin risk profilini, motor seçeneklerini ve kronik sorunlarını inceleyin."
                        href="/araclar"
                        linkLabel="Tüm araçları keşfet"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {popularCards.map((vehicle) => <VehicleCard key={vehicle.href} vehicle={vehicle} />)}
                    </div>
                </div>
            </section>

            <section className="intelligence-section">
                <div className="container-main intelligence-grid">
                    <div className="intelligence-copy">
                        <span className="section-eyebrow light"><Sparkles size={12} /> Bir rapordan daha fazlası</span>
                        <h2>Satın alma kararının<br /><em>kontrol merkezi.</em></h2>
                        <p>OtoKusur, yüzlerce dağınık kullanıcı deneyimini ve teknik bilgiyi tek bir okunabilir risk profiline dönüştürür.</p>
                        <Link href="/karsilastir" className="intelligence-link">İki aracı karşılaştır <ArrowRight size={15} /></Link>
                    </div>

                    <div className="intelligence-cards">
                        {[
                            { icon: <Gauge size={18} />, code: '01', title: 'Risk skoru', text: 'Arıza sıklığı ve şiddetini tek bakışta karşılaştır.' },
                            { icon: <Wrench size={18} />, code: '02', title: 'Motor bazlı analiz', text: 'Aynı kasadaki farklı motorların gerçek risklerini ayır.' },
                            { icon: <FileSearch size={18} />, code: '03', title: 'Ekspertiz odağı', text: 'Ustaya hangi parçaları özellikle kontrol ettireceğini bil.' },
                            { icon: <BarChart3 size={18} />, code: '04', title: 'Model karşılaştırma', text: 'Alternatiflerini aynı veri diliyle yan yana değerlendir.' },
                        ].map((item) => (
                            <div className="intelligence-card" key={item.code}>
                                <span className="intelligence-code">{item.code}</span>
                                <div className="intelligence-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell process-section">
                <div className="container-main">
                    <div className="process-header">
                        <div>
                            <span className="section-eyebrow"><CheckCircle2 size={12} /> Net, hızlı, karar odaklı</span>
                            <h2>Üç adımda belirsizliği azalt.</h2>
                        </div>
                        <p>Aracı tanımlamaktan ekspertiz kontrol listesine kadar bütün akış, daha güvenli bir satın alma kararı için tasarlandı.</p>
                    </div>

                    <div className="process-steps">
                        {[
                            { n: '01', title: 'Aracı seç', text: 'Marka, model, üretim nesli ve motor seçeneğini belirle.', icon: <ScanSearch size={21} /> },
                            { n: '02', title: 'Riskleri oku', text: 'Kronik arızaları, maliyet etkisini ve rapor yoğunluğunu gör.', icon: <CircleAlert size={21} /> },
                            { n: '03', title: 'Hazırlıklı git', text: 'Kontrol noktalarını not al; ekspertizde doğru soruları sor.', icon: <ShieldCheck size={21} /> },
                        ].map((step, index) => (
                            <div className="process-step" key={step.n}>
                                <div className="process-number">{step.n}</div>
                                <div className="process-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                                {index < 2 && <ChevronRight className="process-arrow" size={22} aria-hidden />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell guide-section">
                <div className="container-main">
                    <SectionHeading
                        eyebrow="Editörün seçtikleri"
                        title="İkinci el araç rehberi"
                        text="Ekspertiz, motor seçimi, bütçe ve test sürüşü konularında kısa ama uygulanabilir rehberler."
                        href="/rehber"
                        linkLabel="Tüm rehberler"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                        {guides.map((guide) => <BlogCard key={guide.slug} guide={guide} />)}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container-main faq-grid">
                    <div className="faq-intro">
                        <span className="section-eyebrow"><BookOpen size={12} /> Sık sorulanlar</span>
                        <h2>Aklındaki soru muhtemelen burada.</h2>
                        <p>Skor metodolojisi, veri kaynakları ve platformun sınırları hakkında kısa cevaplar.</p>
                        <div className="faq-assurance"><ShieldCheck size={17} /> OtoKusur bağımsız bir ön araştırma platformudur.</div>
                    </div>
                    <FAQ />
                </div>
            </section>

            <section className="final-cta">
                <div className="container-main final-cta-inner">
                    <div>
                        <span>Bir sonraki aracını şansa bırakma.</span>
                        <h2>Almadan önce kusurunu öğren.</h2>
                    </div>
                    <Link href="/#arac-bul" className="final-cta-button">Aracını analiz et <ArrowRight size={17} /></Link>
                </div>
            </section>

        </>
    );
}

function SectionHeading({
    eyebrow,
    title,
    text,
    href,
    linkLabel,
}: {
    eyebrow: string;
    title: string;
    text: string;
    href: string;
    linkLabel: string;
}) {
    return (
        <div className="section-heading">
            <div>
                <span className="section-eyebrow"><span className="accent-dot" /> {eyebrow}</span>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <Link href={href}>{linkLabel} <ArrowRight size={14} /></Link>
        </div>
    );
}
