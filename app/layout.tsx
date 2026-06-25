import type { Metadata } from "next";
import Link from "next/link";
import { HeaderClient } from "@/components/Header";
import Logo from "@/components/Logo";
import "./globals.css";

export const metadata: Metadata = {
    title: { default: "OtoKusur — Arabayı Almadan Kusurunu Öğren", template: "%s | OtoKusur" },
    description: "OtoKusur, araçların kronik arızalarını, sık görülen sorunlarını ve model bazlı risklerini tek yerde gösterir.",
    keywords: ["araç kusur", "kronik arıza", "ikinci el araç", "araç raporu", "araç DNA", "ekspertiz"],
    authors: [{ name: "OtoKusur" }],
    openGraph: { type: "website", locale: "tr_TR", url: "https://otokusur.com", siteName: "OtoKusur" },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

/* ═══════════════════════════════════════════════════════
   HEADER — Minimal, corporate
═══════════════════════════════════════════════════════ */
function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-[#EBEBED]">
            <div className="container-main flex items-center justify-between h-14">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Logo size="sm" variant="light" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/araclar" className="text-[13px] font-medium text-[#71717A] hover:text-[#0F0F10] transition-colors">Araçlar</Link>
                    <Link href="/rehber" className="text-[13px] font-medium text-[#71717A] hover:text-[#0F0F10] transition-colors">Rehber</Link>
                    <div className="w-px h-4 bg-[#EBEBED]" />
                    <Link href="/araclar" className="btn-primary text-[12px] py-2 px-4">Kusur Ara</Link>
                </nav>

                <HeaderClient />
            </div>
        </header>
    );
}

/* ═══════════════════════════════════════════════════════
   FOOTER — Dark, corporate
═══════════════════════════════════════════════════════ */
function Footer() {
    return (
        <footer className="bg-[#0F0F10] text-white">
            <div className="container-main py-12 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="mb-4">
                            <Logo size="sm" variant="dark" />
                        </div>
                        <p className="text-[13px] text-[#71717A] leading-relaxed max-w-xs">
                            Araçların kronik arızalarını, model bazlı risklerini ve motor sorunlarını gösterir. Almadan önce araştır.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-3">Keşfet</h4>
                        <ul className="space-y-2">
                            <li><Link href="/araclar" className="text-[13px] text-[#71717A] hover:text-white transition-colors">Araçlar</Link></li>
                            <li><Link href="/rehber" className="text-[13px] text-[#71717A] hover:text-white transition-colors">Rehber</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-3">Yasal</h4>
                        <ul className="space-y-2">
                            <li><span className="text-[13px] text-[#71717A]">Gizlilik Politikası</span></li>
                            <li><span className="text-[13px] text-[#71717A]">Kullanım Şartları</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#1A1A1C] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-[11px] text-[#52525B]">© {new Date().getFullYear()} OtoKusur. Tüm hakları saklıdır.</p>
                    <p className="text-[11px] text-[#3F3F46]">Bilgiler genel amaçlıdır. Satın alma öncesi ekspertiz önerilir.</p>
                </div>
            </div>
        </footer>
    );
}
