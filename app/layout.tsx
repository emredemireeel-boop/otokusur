import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight, Database, ShieldCheck } from "lucide-react";
import { HeaderClient } from "@/components/Header";
import Logo from "@/components/Logo";
import "./globals.css";

const siteUrl = "https://otokusur.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "OtoKusur | Araç Kronik Arıza ve Kusur Veritabanı",
        template: "%s | OtoKusur",
    },
    description: "İkinci el araç almadan önce kronik arızaları, motor sorunlarını, model bazlı risk skorlarını ve ekspertiz kontrol noktalarını inceleyin.",
    applicationName: "OtoKusur",
    category: "automotive",
    keywords: [
        "araç kronik arızaları",
        "araba kusurları",
        "ikinci el araç",
        "motor sorunları",
        "araç risk skoru",
        "ekspertiz kontrol listesi",
        "hangi araba alınır",
    ],
    authors: [{ name: "OtoKusur", url: siteUrl }],
    creator: "OtoKusur",
    publisher: "OtoKusur",
    alternates: { canonical: "/" },
    formatDetection: { address: false, email: false, telephone: false },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: siteUrl,
        siteName: "OtoKusur",
        title: "OtoKusur | Arabayı Almadan Kusurunu Öğren",
        description: "Türkiye'nin araç kronik arıza, motor sorunu ve model bazlı risk veritabanı.",
    },
    twitter: {
        card: "summary_large_image",
        title: "OtoKusur | Arabayı Almadan Kusurunu Öğren",
        description: "Kronik arızaları, motor sorunlarını ve model bazlı riskleri satın almadan önce görün.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0b0d10",
    colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OtoKusur",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        description: "Araç kronik arızaları ve model bazlı risk analizi platformu.",
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "OtoKusur",
        url: siteUrl,
        inLanguage: "tr-TR",
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/araclar?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <html lang="tr">
            <body className="min-h-screen flex flex-col">
                <a href="#main-content" className="skip-link">İçeriğe geç</a>
                <Header />
                <main id="main-content" className="flex-1">{children}</main>
                <Footer />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            </body>
        </html>
    );
}

function Header() {
    return (
        <header className="site-header">
            <div className="container-main flex items-center justify-between h-[72px]">
                <Link href="/" className="flex items-center" aria-label="OtoKusur ana sayfa">
                    <Logo size="sm" variant="light" />
                </Link>

                <nav className="hidden md:flex items-center gap-1" aria-label="Ana menü">
                    <Link href="/araclar" className="nav-link">Araç Kütüphanesi</Link>
                    <Link href="/karsilastir" className="nav-link">Karşılaştır</Link>
                    <Link href="/rehber" className="nav-link">Satın Alma Rehberi</Link>
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <span className="header-status"><span className="status-pulse" /> Veri tabanı aktif</span>
                    <Link href="/#arac-bul" className="btn-primary header-cta">
                        Kusur Ara <ArrowUpRight size={14} />
                    </Link>
                </div>

                <HeaderClient />
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="footer-shell">
            <div className="container-main py-14 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
                    <div className="lg:col-span-5">
                        <Logo size="sm" variant="dark" />
                        <p className="footer-copy mt-5 max-w-md">
                            İkinci el araç kararlarını söylentilerle değil; model, motor ve kronik kusur verileriyle verin.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="footer-chip"><Database size={13} /> 16.000+ motor seçeneği</span>
                            <span className="footer-chip"><ShieldCheck size={13} /> Bağımsız araştırma</span>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-7">
                        <h2 className="footer-title">Keşfet</h2>
                        <ul className="footer-links">
                            <li><Link href="/araclar">Araçlar</Link></li>
                            <li><Link href="/karsilastir">Karşılaştır</Link></li>
                            <li><Link href="/rehber">Rehber</Link></li>
                            <li><Link href="/veri-metodolojisi">Veri metodolojisi</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="footer-title">Önemli not</h2>
                        <p className="text-[13px] leading-6 text-white/45">
                            OtoKusur bir ön araştırma aracıdır; bireysel aracın durumunu göstermez. Satın alma öncesinde bağımsız ekspertiz yaptırın.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} OtoKusur. Tüm hakları saklıdır.</p>
                    <p>Veriyle daha bilinçli otomobil kararları.</p>
                </div>
            </div>
        </footer>
    );
}
