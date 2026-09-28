import type { Guide } from './guides';
import { growthVehicleProfiles, type GrowthVehicleProfile } from './growth-profiles.ts';

const publishDate = '2026-09-28';

const guideIdentity: Record<number, { slug: string; title: string; query: string }> = {
    16001: { slug: 'citroen-c3-3-nesil-alinir-mi-kronik-sorunlar', title: 'Citroën C3 3. Nesil Alınır mı? PureTech ve BlueHDi Rehberi', query: 'Citroën C3 kronik sorunları' },
    16002: { slug: 'ford-puma-alinir-mi-10-ecoboost-hybrid-sorunlari', title: 'Ford Puma Alınır mı? 1.0 EcoBoost Hybrid Satın Alma Rehberi', query: 'Ford Puma kronik sorunları' },
    16003: { slug: 'skoda-kamiq-alinir-mi-10-tsi-dsg-kronik-sorunlar', title: 'Škoda Kamiq Alınır mı? 1.0 TSI DSG Kronik Sorunları', query: 'Skoda Kamiq 1.0 TSI DSG' },
    16004: { slug: 'skoda-karoq-alinir-mi-15-tsi-tdi-dsg-rehberi', title: 'Škoda Karoq Alınır mı? 1.5 TSI, TDI ve DSG Rehberi', query: 'Skoda Karoq kronik sorunları' },
    16005: { slug: 'seat-ateca-alinir-mi-tsi-tdi-dsg-4drive-rehberi', title: 'Seat Ateca Alınır mı? TSI, TDI, DSG ve 4Drive Rehberi', query: 'Seat Ateca kronik sorunları' },
    16006: { slug: 'renault-kadjar-alinir-mi-tce-dci-edc-kronik-sorunlar', title: 'Renault Kadjar Alınır mı? TCe, dCi ve EDC Kronik Sorunları', query: 'Renault Kadjar kronik sorunları' },
    16007: { slug: 'nissan-juke-f16-alinir-mi-dig-t-hybrid-rehberi', title: 'Nissan Juke F16 Alınır mı? DIG-T, DCT ve Hybrid Rehberi', query: 'Nissan Juke F16 kronik sorunları' },
    16008: { slug: 'opel-insignia-b-alinir-mi-dizel-otomatik-rehberi', title: 'Opel Insignia B Alınır mı? Dizel ve Otomatik Rehberi', query: 'Opel Insignia B kronik sorunları' },
    16009: { slug: 'bmw-1-serisi-f20-alinir-mi-116i-116d-kronik-sorunlar', title: 'BMW 1 Serisi F20 Alınır mı? 116i ve 116d Kronik Sorunları', query: 'BMW F20 kronik sorunları' },
    16010: { slug: 'mercedes-cla-c117-alinir-mi-cla180-7g-dct-rehberi', title: 'Mercedes CLA C117 Alınır mı? CLA 180 ve 7G-DCT Rehberi', query: 'Mercedes CLA C117 kronik sorunları' },
    16011: { slug: 'ford-mondeo-mk5-alinir-mi-ecoboost-tdci-powershift', title: 'Ford Mondeo Mk5 Alınır mı? EcoBoost, TDCi ve PowerShift', query: 'Ford Mondeo Mk5 kronik sorunları' },
    16012: { slug: 'peugeot-308-t9-alinir-mi-puretech-bluehdi-eat6', title: 'Peugeot 308 T9 Alınır mı? PureTech, BlueHDi ve EAT6', query: 'Peugeot 308 T9 kronik sorunları' },
};

function toSlug(value: string): string {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ı/g, 'i')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function renderGuide(profile: GrowthVehicleProfile): string {
    const identity = guideIdentity[profile.id];
    const vehicleUrl = `/araclar/${toSlug(profile.brand)}/${toSlug(profile.model)}`;
    const phaseRows = profile.phases.map((phase) => `| ${phase.years} | ${phase.name} | ${phase.summary} |`).join('\n');
    const engineRows = profile.engines.map((engine) => `| ${engine.name} | ${engine.fuelType} | ${engine.transmission} | ${engine.idealUse} |`).join('\n');
    const engineSections = profile.engines.map((engine) => `### ${engine.name}: Kime Uygun?

${engine.character} Bu seçenek özellikle ${engine.idealUse.toLocaleLowerCase('tr-TR')} profiline uygundur. İlan başlığındaki hacim veya rozet, motor kodu ile üretim revizyonunu kanıtlamaz. Satıcıdan VIN, ruhsattaki güç/hacim, motor-şanzıman etiketi ve tarih-kilometre içeren bakım faturaları istenmelidir.

Satın alma öncesinde şu üç başlık ölçülmelidir:

${engine.checks.map((check) => `- ${check}.`).join('\n')}

Motor çalışırken yalnız arıza lambasının sönmesine bakmayın. Soğuk ilk marş, rölanti, egzoz, çalışma sıcaklığı, yük altındaki canlı veri ve tam sıcak tekrar testi birbirini tamamlar. Şanzımanın türü ve servis şartı da motorla birlikte doğrulanmalıdır.`).join('\n\n');

    return `## ${profile.shortName} Neden Çok Araştırılıyor?

${profile.summary} İkinci elde aynı model adı altında farklı motor, şanzıman, üretim fazı ve donanım bulunduğu için “${identity.query}” araması tek başına satın alma kararı vermeye yetmez. Güvenli seçim; doğru teknik kimlik, doğrulanabilir bakım zinciri ve bağımsız ölçümle başlar.

${profile.identity}

Bu rehber, internetteki tekil kullanıcı şikâyetlerini her araçta kesin arıza gibi sunmaz. Bir belirtiyi hangi koşulda aramanız gerektiğini, hangi verinin teşhisi desteklediğini ve satıcı beyanının hangi belgeyle doğrulanacağını gösterir. Modelin ayrıntılı araç kartı ve kusur kontrol noktaları için [${profile.shortName} DNA raporunu](${vehicleUrl}) açabilirsiniz.

## Nesil ve Üretim Fazını Doğrulayın

| Dönem | Faz | Temel ayrım |
|---|---|---|
${phaseRows}

Model yılı, üretim tarihi ve ilk tescil aynı değildir. Geçiş yıllarında eski-yeni tasarım veya iki farklı motor ailesi aynı ilan döneminde bulunabilir. VIN’i üretici/servis sisteminde sorgulatın; fabrika motoru, şanzıman kodu, üretim ayı, donanım, garanti başlangıcı ve açık servis kampanyalarını çıkarın. Sonradan takılmış makyaj tamponu, büyük ekran, jant veya paket rozeti teknik kimliği değiştirmez.

## Güçlü ve Zayıf Yönler

### Güçlü taraflar

${profile.strengths.map((item) => `- ${item}`).join('\n')}

### Satın almadan önce hesaba katılacak taraflar

${profile.weaknesses.map((item) => `- ${item}`).join('\n')}

Güçlü yönler ancak doğru kullanım profiliyle avantaj olur. Şehir içinde kısa mesafeye kullanılan dizel, yoğun yokuş ve dur-kalk gören çift kavrama veya doğru bakımı belgelenmeyen turbo motor katalogdaki verim avantajını pahalı bakıma çevirebilir. Aynı şekilde manuel veya atmosferik bir seçenek de ihmal edilmişse otomatik olarak güvenli değildir.

## Motor ve Şanzıman Seçim Tablosu

| Motor | Yakıt | Şanzıman | En uygun kullanım |
|---|---|---|---|
${engineRows}

${engineSections}

## ${profile.shortName} İçin Kritik Kontrol Noktaları

${profile.vehicleChecks.map((check, index) => `### ${index + 1}. ${check.title}

${check.detail} Satıcı açıklamasını tek başına kabul etmeyin; ölçüm sonucunu, servis iş emrini ve parça/yağ standardını aynı kronolojide karşılaştırın.`).join('\n\n')}

## Satıcıyı Aramadan Önce Sorulacak Sorular

1. Araç birkaç saat çalışmadan soğuk şekilde görülebilir mi?
2. VIN ve ruhsattaki motor gücü/hacmi paylaşılabilir mi?
3. Motor ve şanzıman son bakımı hangi tarih-kilometrede, hangi ürünlerle yapıldı?
4. Yağ veya soğutma suyu eksiltme, hararet, çekiş düşmesi ya da arıza lambası yaşandı mı?
5. Şanzıman kavrama, mekatronik, tork konvertörü, volan veya debriyaj işlemi gördü mü?
6. Üretici servis kampanyaları ve yazılım güncellemeleri tamamlandı mı?
7. DPF/AdBlue/EGR, LPG, hibrit veya 48 V donanımına fiziksel ya da yazılımsal müdahale var mı?
8. Ön cam, tampon, radar veya kamera değiştiyse kalibrasyon belgesi bulunuyor mu?
9. Şasi, podye, direk, tavan veya airbag işlemi var mı?
10. Bağımsız ekspertiz ve üretici uyumlu cihaz taramasına izin veriliyor mu?

Yanıtları mümkünse mesajla alın ve ilan ekran görüntüsünü saklayın. “Bakımları tam” yerine fatura tarihi, kilometre, parça numarası ve kullanılan sıvı standardını isteyin. Aracı önceden ısıtan, kod taramasını reddeden, ekspertizi yalnız kendi seçtiği yere zorlayan veya VIN paylaşmayan satıcıda işlem ilerletilmemelidir.

## Ekspertiz Nasıl Yapılmalı?

Aracı soğuk görmek için motor soğutma ve emme havası sıcaklıklarını kontak açıldığında ortamla karşılaştırın. Uyarı lambalarının kontakta yanıp çalışınca doğru biçimde söndüğünü kontrol edin. Motor, şanzıman, ABS, airbag, direksiyon, gövde, multimedya, radar-kamera ve varsa hibrit/48 V/4x4 modüllerini üretici uyumlu cihazla tarayın.

Kalıcı, bekleyen ve geçmiş kodlarla birlikte donmuş çerçeve verisini kaydedin. Hazırlık monitörlerinin yeni sıfırlanmış olması kodların görüşme öncesinde silindiğini düşündürebilir. Düşük akü voltajı çok sayıda iletişim hatası doğurabilir; bu yüzden akü yük testi ve şarj sistemi ölçümü olmadan bütün kodları pahalı modül arızası saymayın.

Kaportada boya parçası sayısından önce güvenlik yapısına bakın. Podye, şasi ucu, direk, taban, tavan, süspansiyon bağlantıları, airbag modülü ve emniyet kemerleri incelenmelidir. Ön cam veya tampon değişiminde ADAS kalibrasyonu; düzensiz lastik aşınmasında dört teker geometri ölçümü istenmelidir.

## En Az 30 Dakikalık Yol Testi

Test rotası soğuk kalkış, geri manevra, yokuş, bozuk zemin, şehir içi dur-kalk ve yasal hızda sabit sürüş içermelidir. Motor ve şanzıman tam çalışma sıcaklığına geldiğinde park, geri ve yokuş hareketlerini tekrar edin. Klima açık-kapalı rölantiyi; hafif-orta gaz geçişlerini; frenleme, direksiyon merkezleme ve yüksek hız titreşimini ayrı not edin.

Ses veya sarsıntıya hemen parça adı koymayın. Motor takozu kavrama, ateşleme sorunu şanzıman, lastik uğultusu rulman arızası sanılabilir. Belirtinin araç hızı, motor devri, seçili vites, sıcaklık ve gaz oranıyla ilişkisini kaydedin. Usta veya servis bu koşulu yeniden üretebilmeli ve ölçümle doğrulamalıdır.

## Bakım Geçmişi Nasıl Okunur?

Kilometreyi yalnız gösterge veya tek bir sorguyla doğrulamayın. Muayene, servis, sigorta/hasar, fatura, lastik ve mümkünse eski ilan kayıtlarını tarihe göre sıralayın. Uzun bir kayıt boşluğu kilometre düşürüldüğünü kanıtlamaz ama belirsizlik yaratır. “Yeni değişti” denilen parçanın markası, parça numarası ve faturası görülmelidir.

${profile.ownership}

Satın alma bütçesinin tamamını araç fiyatına bağlamayın. Devir, trafik sigortası/kasko, ilk bakım, doğru sıvılar, lastik, akü, fren ve yaklaşan üretici periyodu için rezerv ayırın. Güvenlik sistemi, motor içi veya şanzıman belirsizliğini küçük bir indirimle normalleştirmeyin.

## Uzak Durma Nedenleri

- VIN, motor veya şanzıman kimliğinin belgeyle doğrulanamaması.
- Soğuk çalıştırmaya ya da bağımsız ekspertize izin verilmemesi.
- Hararet, yağ basıncı, emisyon veya şanzıman uyarısının silinerek açıklanması.
- DPF/AdBlue/EGR, airbag veya güvenlik donanımında yazılımsal/fiziksel iptal.
- Podye, direk, taban veya airbag onarımının belgesiz olması.
- Servis kilometreleri arasında açıklanamayan geriye gidiş.
- Motor/şanzıman revizyonunun kapsam ve parça faturası olmaması.
- Ön yapı onarımı sonrası radar/kamera kalibrasyonunun bulunmaması.

Bu bulgulardan biri çıkarsa ekspertiz ücreti ödenmiş olsa bile satın alma zorunluluğu yoktur. Önce ileri teşhis, sonra teklif yapılır. Temiz emsalden yaklaşan bakım, lastik/fren, belgeli onarım ve belirsizlik rezervi düşülerek gerçek toplam maliyet hesaplanır.

## Sonuç: ${profile.shortName} Alınır mı?

${profile.verdict}

En iyi aday en düşük kilometre yazan veya en parlak görünen araç değildir. Kimliği doğru, bakım zinciri kronolojik, soğuk çalıştırılabilen, uzun teste ve bağımsız ölçüme izin verilen araç daha güvenli tercihtir.

## Resmî Kaynaklar

${profile.sources.map((source) => `- [${source.title}](${source.url})`).join('\n')}

Kaynaklar nesil, motor ve güvenlik bağlamını doğrular; tekil bir aracın arızalı veya arızasız olduğunu kanıtlamaz. Satın alınacak otomobil VIN, güncel üretici kaydı ve bağımsız ekspertizle değerlendirilmelidir.`;
}

export const growthGuides: Guide[] = growthVehicleProfiles.map((profile) => {
    const identity = guideIdentity[profile.id];
    return {
        slug: identity.slug,
        title: identity.title,
        excerpt: `${profile.shortName} için nesil, motor, şanzıman, kronik risk, ekspertiz ve toplam maliyet odaklı derin satın alma rehberi.`,
        category: 'Model Satın Alma Rehberi',
        readTime: '13 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [profile.id],
        keyTakeaways: [
            `${profile.shortName} için ilan adından önce VIN ile motor, şanzıman ve üretim fazını doğrulayın.`,
            `${profile.vehicleChecks[0].title} ve ${profile.vehicleChecks[1].title.toLocaleLowerCase('tr-TR')} satın alma kontrolünün öncelikli başlıklarıdır.`,
            'Soğuk çalıştırma, tam sıcak yol testi ve bütün modüllerin üretici uyumlu cihazla taranması birlikte uygulanmalıdır.',
            profile.verdict,
        ],
        faqs: [
            { question: `${profile.shortName} hangi yıllardır?`, answer: `${profile.shortName} için bu rehber ${profile.year} dönemini kapsar. Geçiş yıllarında üretim, model ve ilk tescil tarihleri VIN ile ayrılmalıdır.` },
            { question: `${profile.shortName} hangi motorla alınır?`, answer: `${profile.engines[0].name} ${profile.engines[0].idealUse.toLocaleLowerCase('tr-TR')}; ${profile.engines[1].name} ise ${profile.engines[1].idealUse.toLocaleLowerCase('tr-TR')} için değerlendirilebilir. Bakım geçmişi motor tercihinden önce gelir.` },
            { question: `${profile.shortName} otomatik şanzımanı alınır mı?`, answer: `Şanzıman kodu, doğru sıvı/bakım faturası, hata-uyarlama verisi ve tam sıcak geri-yokuş-dur kalk testi uygunsa değerlendirilebilir. “Otomatik” ifadesi tek başına şanzıman türünü göstermez.` },
            { question: `${profile.shortName} kronik sorunlu mu?`, answer: `Bir modelde risk başlığı bulunması her aracın arızalı olduğu anlamına gelmez. ${profile.vehicleChecks.slice(0, 3).map((check) => check.title).join(', ')} ölçüm ve geçmişle kontrol edilmelidir.` },
            { question: `${profile.shortName} alınır mı?`, answer: profile.verdict },
        ],
        howToSteps: [
            { name: 'VIN ile kimliği çıkarın', text: 'Üretim fazı, motor, şanzıman, fabrika donanımı ve kampanyaları üretici/servis sisteminden doğrulayın.' },
            { name: 'Aracı soğuk inceleyin', text: profile.vehicleChecks[0].detail },
            { name: 'Güç aktarımını ölçün', text: profile.vehicleChecks[1].detail },
            { name: 'Tüm modülleri tarayın', text: 'Motor, şanzıman, ABS, airbag, gövde, multimedya ve varsa ADAS/hibrit/4x4 modüllerini kodlar silinmeden okuyun.' },
            { name: 'Uzun test ve bütçe yapın', text: `${profile.vehicleChecks[2].detail} ${profile.ownership}` },
        ],
        content: renderGuide(profile),
    };
});
