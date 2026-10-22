import type { Metadata } from 'next';
import AdPrivacySettings from '@/components/AdPrivacySettings';

export const metadata: Metadata = {
    title: 'Gizlilik ve Çerez Politikası',
    description: 'OtoKusur reklamları, çerezler, yorumlar ve veri tercihleri hakkında bilgi.',
    alternates: { canonical: '/gizlilik' },
};

export default function PrivacyPage() {
    return <article className="container-main py-12 max-w-3xl space-y-8 text-[#52525B] leading-8">
        <header><h1 className="text-3xl font-bold text-[#0F0F10]">Gizlilik ve çerez politikası</h1><p>Son güncelleme: 22 Ekim 2026</p></header>
        <section><h2 className="text-xl font-bold text-[#0F0F10]">Site kullanımı</h2><p>OtoKusur araç araştırması için bilgi sunar. Sunucu, sayfaları iletmek ve güvenliği sağlamak için IP adresi, istenen adres, tarayıcı bilgisi ve erişim zamanı gibi teknik kayıtları işleyebilir. Araç aramalarına kimlik, ödeme veya sağlık bilgisi yazmayın.</p></section>
        <section><h2 className="text-xl font-bold text-[#0F0F10]">Yorumlar ve iletişim</h2><p>Yorum gönderdiğinizde girdiğiniz içerik, ad ve araç bilgileri yorumların saklanması ve moderasyonu için Firebase altyapısıyla işlenir. Onaylanan yorumlar herkese açık olabilir. Yorumlarda kişisel veya üçüncü kişilere ait özel bilgi paylaşmayın. Gizlilik ve yorum kaldırma talepleri için <a className="underline" href="mailto:labspuding@gmail.com">labspuding@gmail.com</a> adresine yazabilirsiniz.</p></section>
        <section><h2 className="text-xl font-bold text-[#0F0F10]">Google AdSense reklamları</h2><p>Sitede Google AdSense reklam altyapısı kullanılır. Google ve reklam ortakları; reklam sunumu, ölçümü, dolandırıcılığın önlenmesi ve izin verildiğinde kişiselleştirme için çerezler, benzer depolama teknolojileri ve cihaz tanımlayıcılarını kullanabilir. IP adresinden yaklaşık konum çıkarılabilir; reklam etkileşimleri ve teknik bilgiler işlenebilir. Reklamların gösterilmesi Google’ın onayına ve hizmet kullanılabilirliğine bağlıdır.</p><p><a className="underline" href="https://business.safety.google/privacy/" rel="noopener noreferrer" target="_blank">Google’ın iş ortaklığı hizmetlerindeki veri kullanımı</a> ve <a className="underline" href="https://policies.google.com/technologies/ads" rel="noopener noreferrer" target="_blank">Google reklam teknolojileri</a> hakkında bilgi alabilirsiniz.</p></section>
        <section id="reklam-tercihleri"><h2 className="text-xl font-bold text-[#0F0F10]">Reklam ve çerez tercihleri</h2><p>Google izin mesajı sunulduğunda rıza vermeyebilir veya seçenekleri yönetebilirsiniz. Uygun bölgelerde reklam gizlilik tercihlerinizi yeniden açmak için aşağıdaki düğmeyi kullanın. Form hizmet tarafından sunulmuyorsa tarayıcı ayarlarından çerezleri silebilir ya da engelleyebilir, <a className="underline" href="https://myadcenter.google.com/">Google Reklam Merkezim</a> üzerinden Google reklam tercihlerinizi yönetebilirsiniz.</p><AdPrivacySettings /></section>
        <section><h2 className="text-xl font-bold text-[#0F0F10]">Saklama ve haklar</h2><p>Verilerin saklanması işleme amacına, hizmet sağlayıcıların politikalarına ve geçerli yükümlülüklere göre değişir. Google ve Firebase kendi altyapılarında veri işleyebilir. Bilgi alma, düzeltme ve silme talepleriniz için destek adresine başvurabilirsiniz; talebinizi değerlendirip gerekli kimlik doğrulamasından sonra yanıtlarız. Bu politika hizmet veya veri uygulamaları değiştiğinde güncellenir.</p></section>
    </article>;
}
