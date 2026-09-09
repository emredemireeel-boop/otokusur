import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Bot, CheckCircle2, FileSearch, RefreshCw } from 'lucide-react';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Yayın İlkeleri, Yapay Zeka ve Düzeltme Politikası',
    description: 'OtoKusur içeriklerinin nasıl araştırıldığını, yapay zekanın hangi sınırlar içinde kullanıldığını ve düzeltmelerin nasıl ele alındığını inceleyin.',
    alternates: { canonical: '/yayin-ilkeleri' },
};

const principles = [
    {
        icon: <FileSearch size={19} />,
        title: 'Kaynak önce gelir',
        text: 'Model yılı, motor kodu, geri çağırma, güvenlik ve teknik iddialarda mümkün olduğunda üretici dokümanı ve diğer birincil kaynaklar önceliklendirilir.',
    },
    {
        icon: <CheckCircle2 size={19} />,
        title: 'Yayın için kalite eşiği',
        text: 'Özgün özet, yeterli karar desteği ve ayrıntılı kusur açıklaması bulunmayan motor sayfaları indekslenmez ve sitemap’e alınmaz.',
    },
    {
        icon: <Bot size={19} />,
        title: 'Yapay zeka yardımcıdır',
        text: 'Yapay zeka sınıflandırma, tekrar tespiti ve taslak düzenlemede kullanılabilir; rapor sayısı, maliyet veya teknik gerçek üretmesine izin verilmez.',
    },
    {
        icon: <RefreshCw size={19} />,
        title: 'Düzeltmeler izlenir',
        text: 'Yeni kanıt, üretici revizyonu veya hatalı varyant eşleşmesi tespit edildiğinde içerik yeniden değerlendirilir ve anlamlı değişiklik tarihi güncellenir.',
    },
];

export default function YayinIlkeleriPage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'OtoKusur Yayın İlkeleri',
        url: SITE_URL + '/yayin-ilkeleri',
        isPartOf: { '@id': SITE_URL + '/#website' },
        publisher: { '@id': SITE_URL + '/#organization' },
    };

    return (
        <article className="container-main py-10 sm:py-16 max-w-5xl">
            <header className="max-w-3xl mb-10">
                <span className="section-eyebrow"><CheckCircle2 size={12} /> Şeffaf yayın standardı</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F10] tracking-tight mt-4">
                    Önce kanıt, sonra yorum, en son yayın.
                </h1>
                <p className="text-base sm:text-lg text-[#52525B] leading-8 mt-5">
                    OtoKusur’un hedefi en fazla sayfayı üretmek değil, araç araştırırken gerçekten işe yarayan
                    sayfaları yayımlamaktır. Aşağıdaki kurallar tüm model, motor ve rehber içerikleri için geçerlidir.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map(principle => (
                    <div className="card-elevated p-6" key={principle.title}>
                        <div className="text-[#A91D3A] mb-3">{principle.icon}</div>
                        <h2 className="text-lg font-bold text-[#0F0F10]">{principle.title}</h2>
                        <p className="text-base text-[#52525B] leading-7 mt-2">{principle.text}</p>
                    </div>
                ))}
            </section>

            <section className="mt-10 card-elevated p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-[#0F0F10]">Bir kusur kaydı neleri açıklamalı?</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                    {[
                        'Belirti ve sürücünün fark edebileceği işaretler',
                        'Etkilenen nesil, yıl, motor ve şanzıman',
                        'Muhtemel neden ve doğrulama yöntemi',
                        'Güvenlik ve maliyet etkisi',
                        'Ekspertizde kontrol edilecek nokta',
                        'Kaynak, erişim tarihi ve kanıt düzeyi',
                    ].map(item => (
                        <li className="flex gap-2 text-sm text-[#3F3F46]" key={item}>
                            <CheckCircle2 size={16} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <aside className="warning-box mt-6">
                <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="text-[#CA8A04] mt-0.5 flex-shrink-0" />
                    <div>
                        <h2 className="text-sm font-bold text-[#854D0E]">Düzeltme bildirimi</h2>
                        <p className="text-sm text-[#92400E]/80 leading-6 mt-1">
                            Bir araç veya motor sayfasında yanlış varyant, yıl ya da teknik bilgi görürseniz ilgili
                            sayfadaki yorum alanından ayrıntılı bildirim bırakabilirsiniz. Bildirim yayımlanmadan önce
                            moderasyon kuyruğunda değerlendirilir.
                        </p>
                    </div>
                </div>
            </aside>

            <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/veri-metodolojisi" className="btn-primary">Metodolojiyi incele <ArrowRight size={14} /></Link>
                <Link href="/araclar" className="inline-flex items-center gap-2 text-sm font-semibold text-[#A91D3A]">
                    Araç raporlarına dön <ArrowRight size={14} />
                </Link>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        </article>
    );
}
