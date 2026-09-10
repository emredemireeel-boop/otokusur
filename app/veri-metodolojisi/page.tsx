import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, BookOpenCheck, Database, ShieldCheck } from 'lucide-react';
import { getCatalogStats, getGlobalStats } from '@/lib/dataService';

export const metadata: Metadata = {
    title: 'Veri Kaynakları ve Risk Skoru Metodolojisi',
    description: 'OtoKusur araç kataloğunun, kronik arıza raporlarının ve risk skorlarının nasıl oluşturulduğunu; kaynak ve kalite ilkelerini inceleyin.',
    alternates: { canonical: '/veri-metodolojisi' },
    openGraph: {
        title: 'OtoKusur Veri Kaynakları ve Metodolojisi',
        description: 'Katalog verisi, kronik kusur raporları ve risk skorları için şeffaf veri ilkeleri.',
        url: '/veri-metodolojisi',
        type: 'article',
    },
};

const sources = [
    {
        name: 'Togg resmi ürün ve medya sayfaları',
        scope: 'T10X ve T10F model, motor gücü ve çekiş bilgileri',
        href: 'https://togg.com.tr/t10f',
    },
    {
        name: 'BYD Türkiye resmi model kütüphanesi',
        scope: 'Türkiye model gamı, elektrikli ve DM-i güç aktarımı bilgileri',
        href: 'https://www.bydauto.com.tr/teknik-brosurler',
    },
    {
        name: 'Renault, Honda ve Toyota Türkiye',
        scope: 'Türkiye nesil, motor ve donanım doğrulaması',
        href: 'https://www.renault.com.tr/hybrid-araclar/yeni-clio/teknik-bilgiler.html',
    },
    {
        name: 'Volvo, BMW ve Mercedes-Benz teknik sayfaları',
        scope: 'Şasi nesli, güç aktarımı ve model yılı doğrulaması',
        href: 'https://www.media.volvocars.com/tr/tr-tr/models/xc40/2022/specifications',
    },
    {
        name: 'Euro NCAP',
        scope: 'Bağımsız çarpışma testi, güvenlik donanımı ve model kapsamı',
        href: 'https://www.euroncap.com/',
    },
    {
        name: 'ADAC Pannenstatistik 2026',
        scope: 'Model yılına göre yol yardım ve arıza istatistikleri',
        href: 'https://www.adac.de/rund-ums-fahrzeug/unfall-schaden-panne/adac-pannenstatistik-2026/',
    },
    {
        name: 'TÜV Report 2026',
        scope: 'Periyodik muayene kusurlarına dayalı bağımsız saha görünümü',
        href: 'https://www.tuev-verband.de/fileadmin/user_upload/Content_local/2025_TUEV-Verband_TUEV-Report_2026_Praesentation.pdf',
    },
];

export default function MethodologyPage() {
    const catalog = getCatalogStats();
    const reports = getGlobalStats();

    return (
        <article className="methodology-page">
            <header className="methodology-hero">
                <div className="container-main">
                    <span><ShieldCheck size={13} /> Şeffaf veri ilkeleri</span>
                    <h1>Skorun arkasında<br />ne var?</h1>
                    <p>Bir katalog kaydıyla doğrulanmış kronik kusur raporunu bilinçli olarak ayırıyoruz. Burada hangi veriyi, nasıl değerlendirdiğimizi açıkça görebilirsiniz.</p>
                    <div className="methodology-stats">
                        <div><strong>{catalog.models.toLocaleString('tr-TR')}</strong><small>katalog modeli</small></div>
                        <div><strong>{catalog.engines.toLocaleString('tr-TR')}</strong><small>motor seçeneği</small></div>
                        <div><strong>{reports.totalVehicles}</strong><small>detaylı kusur raporu</small></div>
                    </div>
                </div>
            </header>

            <div className="container-main methodology-body">
                <section>
                    <span className="section-eyebrow"><Database size={12} /> İki ayrı veri katmanı</span>
                    <h2>Katalog, kusur raporu değildir.</h2>
                    <div className="methodology-columns">
                        <div>
                            <Database size={20} />
                            <h3>Araç kataloğu</h3>
                            <p>Marka, model, üretim nesli, yakıt ve şanzıman seçeneklerini içerir. Arama akışının doğru aracı bulmasını sağlar.</p>
                        </div>
                        <div>
                            <BookOpenCheck size={20} />
                            <h3>Kusur profili</h3>
                            <p>Tekrarlayan arızalar, şiddet, rapor yoğunluğu ve motor özelindeki sorunlar incelendikten sonra yayımlanır.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <span className="section-eyebrow"><BadgeCheck size={12} /> Risk skoru</span>
                    <h2>100 puanlık skor nasıl okunur?</h2>
                    <p className="methodology-lead">Skor; kusur sayısını tek başına sıralamaz. Sorunun şiddeti, tekrar sıklığı, maliyet etkisi, motor güvenilirliği ve kullanıcı raporu yoğunluğu birlikte değerlendirilir. Yüksek skor, daha düşük göreli risk anlamına gelir.</p>
                    <div className="score-scale">
                        <div className="is-low"><strong>80–100</strong><span>Düşük göreli risk</span></div>
                        <div className="is-mid"><strong>60–79</strong><span>Orta göreli risk</span></div>
                        <div className="is-high"><strong>0–59</strong><span>Yüksek göreli risk</span></div>
                    </div>
                </section>

                <section>
                    <span className="section-eyebrow"><BookOpenCheck size={12} /> Kanıt hiyerarşisi</span>
                    <h2>Forum bildirimi sinyaldir; tek başına hüküm değildir.</h2>
                    <div className="methodology-columns">
                        <div>
                            <BookOpenCheck size={20} />
                            <h3>Sinyal katmanı</h3>
                            <p>DonanımHaber, Otopark, marka fan kulüpleri, kullanıcı raporları ve paylaşılmış servis kayıtları; tekrar eden başlıkları bulmamıza yardım eder. Aynı gönderinin kopyaları ayrı vaka sayılmaz.</p>
                        </div>
                        <div>
                            <BadgeCheck size={20} />
                            <h3>Doğrulama katmanı</h3>
                            <p>Üretici teknik belgeleri ve kampanyaları, resmî geri çağırmalar, Euro NCAP ile ADAC/TÜV gibi bağımsız raporlar kullanılır. Doğrulanmış vaka adedi yoksa sayı uydurulmaz; başlık satın alma kontrol noktası olarak açıkça yazılır.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <span className="section-eyebrow"><ArrowUpRight size={12} /> Son katalog kaynakları</span>
                    <h2>Kaynağı görünür tutuyoruz.</h2>
                    <div className="source-list">
                        {sources.map((source) => (
                            <a href={source.href} target="_blank" rel="noreferrer" key={source.name}>
                                <span><strong>{source.name}</strong><small>{source.scope}</small></span>
                                <ArrowUpRight size={16} />
                            </a>
                        ))}
                    </div>
                </section>

                <aside className="methodology-note">
                    <ShieldCheck size={20} />
                    <div><strong>Önemli sınır</strong><p>OtoKusur, belirli bir ikinci el aracın geçmişini veya mevcut mekanik durumunu tespit etmez. Satın alma öncesinde bağımsız ekspertiz yaptırın.</p></div>
                </aside>

                <Link href="/araclar" className="methodology-cta">Araç raporlarını keşfet <ArrowUpRight size={15} /></Link>
            </div>
        </article>
    );
}
