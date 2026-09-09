import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Database, SearchCheck, ShieldCheck } from 'lucide-react';
import { EDITORIAL_TEAM_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Hakkımızda — Bağımsız Araç Kusur Araştırması',
    description: 'OtoKusur’un amacı, veri yaklaşımı, yayın sınırları ve araç satın alma araştırmasına nasıl yardımcı olduğu hakkında bilgi edinin.',
    alternates: { canonical: '/hakkimizda' },
    openGraph: {
        title: 'OtoKusur Hakkında',
        description: 'Bağımsız araç kusur araştırmasının amacı, yöntemi ve sınırları.',
        url: '/hakkimizda',
    },
};

export default function HakkimizdaPage() {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'OtoKusur Hakkında',
        url: SITE_URL + '/hakkimizda',
        about: { '@id': SITE_URL + '/#organization' },
    };

    return (
        <article className="container-main py-10 sm:py-16 max-w-5xl">
            <header className="max-w-3xl mb-10">
                <span className="section-eyebrow"><SearchCheck size={12} /> Bağımsız ön araştırma</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F10] tracking-tight mt-4">
                    Bir aracı almadan önce doğru soruları sormanıza yardım ediyoruz.
                </h1>
                <p className="text-base sm:text-lg text-[#52525B] leading-8 mt-5">
                    OtoKusur; model, nesil ve motor düzeyindeki tekrar eden sorunları anlaşılır bir karar
                    desteğine dönüştürür. Amacımız bir araca “iyi” veya “kötü” etiketi yapıştırmak değil,
                    satın alma öncesinde hangi noktaların özellikle incelenmesi gerektiğini göstermektir.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" aria-label="OtoKusur ilkeleri">
                {[
                    {
                        icon: <Database size={20} />,
                        title: 'Model değil, doğru varyant',
                        text: 'Aynı kasadaki motor ve şanzıman seçeneklerinin farklı riskler taşıyabileceğini gözetiriz.',
                    },
                    {
                        icon: <BadgeCheck size={20} />,
                        title: 'Kanıt düzeyi görünür',
                        text: 'Kaynağı ve ayrıntısı yetersiz içerikleri arama motorlarına açmayan bir kalite eşiği uygularız.',
                    },
                    {
                        icon: <ShieldCheck size={20} />,
                        title: 'Ekspertizin alternatifi değil',
                        text: 'Platform bireysel aracın geçmişini veya mevcut mekanik durumunu tespit ettiğini iddia etmez.',
                    },
                ].map(item => (
                    <div className="card-elevated p-6" key={item.title}>
                        <div className="text-[#A91D3A] mb-4">{item.icon}</div>
                        <h2 className="text-base font-bold text-[#0F0F10]">{item.title}</h2>
                        <p className="text-sm text-[#52525B] leading-6 mt-2">{item.text}</p>
                    </div>
                ))}
            </section>

            <section className="card-dark p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-wider text-white/50">İçerik sorumluluğu</p>
                <h2 className="text-2xl font-extrabold text-white mt-2">{EDITORIAL_TEAM_NAME}</h2>
                <p className="text-base text-white/70 leading-7 mt-3 max-w-3xl">
                    Araç verilerini ortak bir sınıflandırma ve kalite modeliyle düzenler. Güvenlik veya yüksek
                    maliyet etkisi taşıyan iddialar, kaynak ve kapsam belirtilmeden kesin hüküm olarak yayımlanmaz.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                    <Link href="/veri-metodolojisi" className="btn-primary">Veri metodolojisi <ArrowRight size={14} /></Link>
                    <Link href="/yayin-ilkeleri" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Yayın ilkelerini oku <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
        </article>
    );
}
