'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

const faqData: FAQItem[] = [
    {
        q: 'OtoKusur nedir?',
        a: 'OtoKusur, Türkiye\'de satılan araçların kronik arızalarını, motor bazlı sorunlarını ve risk skorlarını bir araya getiren bağımsız bir araç kusur veritabanıdır. İkinci el araç almadan önce modelin bilinen sorunlarını araştırmanızı sağlar.'
    },
    {
        q: 'Kronik arıza ne demek?',
        a: 'Kronik arıza, belirli bir araç modelinde tasarım, üretim veya malzeme kaynaklı olarak tekrar tekrar ortaya çıkan sorunlardır. Rastgele arızalardan farklı olarak, aynı modelin birçok aracında görülen sistemik sorunlardır.'
    },
    {
        q: 'DNA skoru nasıl hesaplanır?',
        a: 'DNA skoru, aracın kronik arıza sayısı, arızaların şiddet seviyesi, kullanıcı raporları, motor güvenilirliği ve genel kullanıcı memnuniyeti gibi faktörler gözetilerek 0-100 arasında hesaplanır. Yüksek skor, düşük risk anlamına gelir.'
    },
    {
        q: 'Veriler nereden geliyor?',
        a: 'Veriler; Türk otomobil forumları (DonanımHaber, Otopark, marka fan kulüpleri), kullanıcı raporları, teknik servis kayıtları ve uluslararası güvenilirlik raporlarından derlenmektedir.'
    },
    {
        q: 'Ekspertiz yerine kullanılabilir mi?',
        a: 'Hayır. OtoKusur, satın alma öncesi araştırma aracıdır. Belirli bir aracın bireysel durumunu değerlendirmez. Her zaman bağımsız ekspertiz yaptırmanızı öneriyoruz. OtoKusur, ekspertiz sırasında hangi noktalara dikkat edilmesi gerektiğini bilmenize yardımcı olur.'
    },
    {
        q: 'Hangi markalar ve modeller destekleniyor?',
        a: 'Katalogda 40+ marka, 1.900+ model, 3.500+ üretim nesli ve 16.000+ motor seçeneği bulunmaktadır. Detaylı kronik kusur raporları ise Türkiye ikinci el pazarında en sık araştırılan araçlardan başlayarak sürekli genişletilmektedir.'
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-2">
            {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="border border-[#EBEBED] rounded-lg overflow-hidden transition-colors hover:border-[#D4D4D8]"
                    >
                        <button
                            className="w-full flex items-center justify-between p-4 text-left"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            aria-expanded={isOpen}
                        >
                            <span className="text-[13px] font-semibold text-[#0F0F10] pr-4">{item.q}</span>
                            <ChevronDown
                                size={16}
                                className={`text-[#A1A1AA] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="px-4 pb-4 text-[12px] text-[#71717A] leading-relaxed">{item.a}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
