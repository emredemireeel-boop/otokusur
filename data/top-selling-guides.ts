import type { Guide } from './guides';

interface EngineChoice {
    name: string;
    character: string;
    idealUse: string;
    checks: string;
}

interface TopSellerProfile {
    rank: number;
    sales: string;
    slug: string;
    title: string;
    excerpt: string;
    model: string;
    relatedVehicleIds: number[];
    identity: string;
    technicalAnalysis: string;
    engines: EngineChoice[];
    phoneQuestions: string[];
    inspectionChecks: string[];
    roadChecks: string[];
    ownership: string;
    redFlags: string[];
    verdict: string;
    sources: Array<{ title: string; url: string }>;
    faqs: Array<{ question: string; answer: string }>;
}

const updatedDate = '2026-09-28';
const odmdMarketPage = 'https://www.odmd.org.tr/web_2837_1/sortial.aspx?detail=single&language_id=1&linkpos=1&target=categorial1&type=35';

function renderModelGuide(profile: TopSellerProfile): string {
    const engineRows = profile.engines.map((engine) =>
        `| ${engine.name} | ${engine.character} | ${engine.idealUse} | ${engine.checks} |`,
    ).join('\n');

    return `## ${profile.model} Neden Bu Kadar Çok Araştırılıyor?

${profile.model}, ODMD verilerinden derlenen Ocak-Ağustos 2026 model sıralamasında ${profile.sales} satışla ${profile.rank}. sırada yer aldı. Yeni araç satışındaki yüksek adet, birkaç yıl sonra ikinci elde daha fazla ilan, daha geniş servis tecrübesi ve güçlü arama hacmi anlamına gelebilir. Fakat çok satması her motorun, şanzımanın veya her ilanın aynı ölçüde güvenli olduğu anlamına gelmez. Bu rehber model adıyla yetinmek yerine nesil, üretim fazı ve güç aktarımını ayırarak karar vermeyi amaçlar.

Satış sayısı tek başına kalite puanı değildir. Filo kullanımı, kampanya, yerli üretim, vergi dilimi, bulunabilirlik ve kurumsal alımlar sıralamayı etkileyebilir. İkinci el adayında belirleyici olan; doğru kimlik, doğrulanabilir bakım zinciri, güvenli gövde, uygun kullanım geçmişi ve sıcak-soğuk test sonucudur.

## Önce Doğru Aracı Tanımlayın

${profile.identity}

Ruhsattaki model yılı, üretim tarihi ve ilk tescil tarihi aynı kavram değildir. Makyaj geçişlerinde aynı yılda iki farklı donanım veya motor bulunabilir. Satıcıdan şasi numarasını isteyin; üretici/servis sistemi üzerinden motor kodu, şanzıman kodu, fabrika donanımı, garanti başlangıcı ve açık servis kampanyalarını doğrulayın. İlan başlığındaki “tam otomatik”, “hibrit”, “uzun menzil” veya paket adı tek başına teknik kanıt değildir.

${profile.technicalAnalysis}

## Motor ve Şanzıman Seçim Tablosu

| Seçenek | Yapı ve karakter | Kime uygun? | Satın alma kontrolü |
|---|---|---|---|
${engineRows}

Motor seçimini yalnız katalog tüketimine göre yapmayın. Bir hafta boyunca günlük rota, yıllık kilometre, dur-kalk oranı, ev/iş şarj olanağı, yolcu-yük ihtiyacı ve aracı kaç yıl tutacağınızı yazın. Kısa mesafede dizel emisyon sistemi; yoğun dur-kalkta kuru çift kavrama; uzun süre şarj edilmeden kullanılan elektrikli veya hibrit sistem farklı maliyetler doğurur. En iyi seçenek, kullanımınıza uyan ve geçmişi en iyi belgelenen kombinasyondur.

## Satıcıyı Aramadan Önce Sorulacak Sorular

${profile.phoneQuestions.map((item) => `- ${item}`).join('\n')}

Yanıtları mesajla alın ve ilan ekran görüntüsünü saklayın. “Bakımları tam” ifadesi yerine tarih, kilometre, kullanılan yağ/sıvı şartnamesi, parça numarası ve iş emri isteyin. Kilometreyi muayene, servis, sigorta/hasar, fatura ve mümkünse eski ilan kayıtlarıyla kronolojik karşılaştırın. Bağımsız ekspertize, soğuk çalıştırmaya veya üretici uyumlu cihazla taramaya izin vermeyen adaya kapora göndermeyin.

## Ekspertizde Uygulanacak Derin Kontrol

Aracı birkaç saat çalışmamış halde görün. Motor soğutma ve emme havası sıcaklıkları ortamla makul yakın olmalıdır; böylece önceden ısıtılmış araç gizlenemez. Kontak açıldığında motor, ABS, airbag, direksiyon ve sürüş destek uyarılarının yandığını, çalışınca doğru sırada söndüğünü gözleyin. Ardından modele özgü şu kontrolleri uygulayın:

${profile.inspectionChecks.map((item, index) => `${index + 1}. ${item}`).join('\n')}

Sadece genel OBD cihazına güvenmeyin. Motor, şanzıman, ABS, airbag, gövde kontrol, multimedya, radar/kamera, enerji yönetimi ve varsa yüksek voltaj modülleri taranmalıdır. Kalıcı ve bekleyen kodlar, donmuş çerçeve, hazırlık monitörleri ve düşük voltaj izleri birlikte yorumlanmalıdır. Kodların silinmiş olması, aracın arızasız olduğunu değil tanı verisinin kaybedildiğini gösterebilir.

Kaporta kontrolünde boya sayısından önce podye, direk, taban, tavan, süspansiyon bağlantıları, airbag ve emniyet kemeri sistemlerine bakın. Ön cam veya tampon değişmişse radar/kamera kalibrasyon belgesini isteyin. Lastiklerin üretim tarihi, ebat/yük endeksi ve dört köşedeki aşınma biçimi; şasi geometrisi, süspansiyon ve kilometre hakkında değerli ipucu verir.

## En Az 30 Dakikalık Yol Testi

Test rotası park manevrası, geri vites, yokuş, bozuk zemin, yoğun olmayan dur-kalk ve yasal hızda sabit sürüş içermelidir. Motor ve şanzıman tam ısındığında ilk manevraları tekrarlayın. Özellikle:

${profile.roadChecks.map((item) => `- ${item}`).join('\n')}

Ses veya titreme fark ederseniz hemen parça adı koymayın. Hız, motor devri, seçili vites, gaz oranı, sıcaklık ve yol yüzeyini kaydedin. Motor takozu titreşimi kavrama sorunu; lastik uğultusu rulman; ateşleme teklemesi şanzıman sarsıntısı sanılabilir. Doğru teşhis, belirtinin koşulunu tekrar üretmekle başlar.

## Kullanım Maliyeti ve Doğru Bütçe

${profile.ownership}

Satın alma bütçesinin tamamını araç fiyatına bağlamayın. Devir, trafik sigortası/kasko, ilk bakım, lastik, akü, sıvılar ve tespit edilen yakın dönem işlemleri için ayrıca rezerv ayırın. “Yeni değişti” denilen parçayı marka, parça numarası ve faturayla doğrulayın. Yetkisiz yazılım, emisyon sistemi iptali veya donanım kodlaması kısa vadede sorunu gizleyip muayene, güvenlik ve sonraki satış riskini büyütebilir.

## Uzak Durma Nedenleri

${profile.redFlags.map((item) => `- ${item}`).join('\n')}

Bu bulgulardan biri varsa indirim istemek yerine ileri teşhis tamamlanana kadar işlemi durdurun. Ekspertiz ücreti ödemiş olmak aracı alma zorunluluğu doğurmaz. Son teklifinizi temiz emsalden yaklaşan bakım, lastik/fren, belgeli onarım ve belirsizlik rezervini düşerek oluşturun; güvenlik sistemindeki belirsizliği fiyat pazarlığıyla normalleştirmeyin.

## Sonuç: ${profile.model} Alınır mı?

${profile.verdict}

## Kaynaklar

${profile.sources.map((source) => `- [${source.title}](${source.url})`).join('\n')}
- [ODMD otomobil ve hafif ticari araç pazar raporları](${odmdMarketPage})

Satış sıralaması Ocak-Ağustos 2026 döneminin anlık görüntüsüdür; sonraki aylarda değişebilir. Teknik donanım model yılı, pazar ve pakete göre farklılaşabileceği için satın alınacak aracın VIN ve güncel üretici belgesi esas alınmalıdır.`;
}

function buildModelGuide(profile: TopSellerProfile): Guide {
    return {
        slug: profile.slug,
        title: profile.title,
        excerpt: profile.excerpt,
        category: 'Model Satın Alma Rehberi',
        readTime: '12 dk',
        publishDate: updatedDate,
        updatedDate,
        relatedVehicleIds: profile.relatedVehicleIds,
        keyTakeaways: [
            `${profile.model} için model adından önce nesil, motor ve şanzıman kodunu VIN ile doğrulayın.`,
            profile.engines[0].checks,
            'Soğuk başlangıç ile tam sıcak yol testini aynı ekspertizde uygulayın; yalnız kısa test veya arıza kodu taraması yeterli değildir.',
            profile.redFlags[0],
        ],
        howToSteps: [
            { name: 'Kimliği doğrulayın', text: `${profile.model} için VIN, üretim tarihi, motor, şanzıman ve fabrika donanımını servis sisteminden çıkarın.` },
            { name: 'Kayıt zinciri kurun', text: 'Muayene, servis, hasar, fatura ve eski ilan kilometrelerini tarih sırasına koyun.' },
            { name: 'Soğuk kontrol yapın', text: profile.inspectionChecks[0] },
            { name: 'Tüm modülleri tarayın', text: profile.inspectionChecks[1] },
            { name: 'Uzun yol testi uygulayın', text: profile.roadChecks[0] },
            { name: 'Maliyet ve karar sınırı belirleyin', text: `Yakın bakımları fiyatlayın; ${profile.redFlags[0].toLocaleLowerCase('tr-TR')}` },
        ],
        faqs: profile.faqs,
        content: renderModelGuide(profile),
    };
}

const profiles: TopSellerProfile[] = [
    {
        rank: 1, sales: '31.643 adet', model: 'Renault Clio 5', relatedVehicleIds: [1],
        slug: 'renault-clio-5-alinir-mi-10-tce-xtronic-edc-etech',
        title: 'Renault Clio 5 Alınır mı? 1.0 TCe, X-Tronic, EDC ve E-Tech Rehberi',
        excerpt: 'Clio 5’te 1.0 TCe manuel/X-Tronic, 1.3 TCe EDC, Blue dCi ve E-Tech seçeneklerini; makyaj, ekspertiz ve kronik kontrol noktalarıyla karşılaştırın.',
        identity: 'Beşinci nesil Clio 2019’da Avrupa’da tanıtıldı, Türkiye ikinci elinde ağırlıkla 2020-2025 model yıllarıyla görülür ve 2023 makyajı aynı neslin güncellemesidir. 2026’da başlayan Clio VI ayrı otomobildir. Clio 5 ilanlarında 1.0 SCe, 1.0 TCe manuel veya X-Tronic, 1.3 TCe EDC, 1.5 Blue dCi ve E-Tech isimleri görülebilir; bunların bakım ve test yöntemi aynı değildir.',
        technicalAnalysis: 'Clio 5’in gücü, Türkiye’de üretilmesi ve yaygın servis/parça ağıdır. Zayıf nokta tek bir “Clio kroniği” değil, çok farklı aktarma seçeneklerinin ilanlarda yanlış adlandırılmasıdır. X-Tronic sürekli değişken oranlı bir otomatikken EDC çift kavramalıdır; E-Tech ise iki elektrik motoru ve çok modlu şanzıman kullanan tam hibrittir. Üçüne aynı otomatik şanzıman tavsiyesi uygulanamaz.',
        engines: [
            { name: '1.0 TCe 90/100 manuel', character: 'Üç silindirli turbo, günlük kullanımda yeterli tork ve sade manuel aktarma.', idealUse: 'Şehir-kara yolu karma, öngörülebilir bakım isteyenler.', checks: 'Soğuk rölanti, bobin/buji, turbo basıncı, yağ ve soğutma kaçakları.' },
            { name: '1.0 TCe X-Tronic', character: 'CVT karakterli otomatik; düşük hızda akıcı, tam yükte motor devri belirginleşebilir.', idealUse: 'Rahat şehir sürüşü isteyen, düzenli sıvı kaydı arayanlar.', checks: 'Doğru CVT sıvısı, soğuk-sıcak kalkış, geri manevra, oran dalgalanması ve uğultu.' },
            { name: '1.3 TCe 130/140 EDC', character: 'Güçlü turbo motor ve yedi ileri çift kavrama.', idealUse: 'Performans ve uzun yol esnekliği isteyenler.', checks: 'Termostat/soğutma, turbo, EDC kavrama-adaptasyon ve tam sıcak dur-kalk.' },
            { name: 'E-Tech 140/145', character: 'Haricî şarj istemeyen tam hibrit ve çok modlu aktarım.', idealUse: 'Şehir içinde düşük tüketim, hibrit sürüş isteyenler.', checks: 'HV batarya blokları, inverter soğutması, 12 V akü, yazılım ve rejeneratif fren.' },
        ],
        phoneQuestions: ['Motor ve şanzıman tam olarak hangisi; VIN ve servis çıktısı paylaşılabilir mi?', 'Triger/zamanlama, yağ, soğutma ve şanzıman sıvısı faturaları hangi kilometrede?', 'EDC/X-Tronic veya hibrit sistemde yazılım, kavrama, batarya ya da garanti işlemi yapıldı mı?', 'Araç filo/kiralama geçmişine sahip mi ve iki anahtar mevcut mu?'],
        inspectionChecks: ['TCe motorda yağ seviyesi, soğutma kabı, pompa-termostat çevresi, ateşleme sayacı ve hedef-gerçek turbo basıncını okuyun.', 'X-Tronic/EDC’de doğru modülü; E-Tech’te yüksek voltaj batarya, inverter, enerji akışı ve 12 V gerilim geçmişini üretici uyumlu cihazla tarayın.', 'Direksiyon, klima, multimedya, kart/anahtar, eCall ve ADAS sistemlerini tek tek deneyin.', 'Ön yapı, airbag/kemer, taban ve filo kullanımına işaret eden iç-dış aşınmayı kilometre kayıtlarıyla karşılaştırın.'],
        roadChecks: ['X-Tronic’te oran kararlılığı; EDC’de geri-yokuş-dur-kalk; E-Tech’te elektrik-motor geçişi.', '1.500-3.000 devir arasında yük altında tekleme, turbo basıncı ve soğutma sıcaklığı.', 'Fren merkezleme, direksiyon düz gidiş, ön takım ve kabin trim sesleri.', 'Sürüş sonunda sıcak marş, fan çalışması ve yeni yağ/antifriz izi.'],
        ownership: 'Manuel 1.0 TCe, karmaşıklığı azaltmak isteyenler için dengeli seçimdir. X-Tronic şehir konforu sağlar ancak sıvı geçmişi; EDC performans sunar ancak kavrama kullanımı; E-Tech şehir ekonomisi sunar ancak hibrit teşhisi ister. Filo çıkışlı araç ucuz olabilir fakat çok sürücülü kullanım, kısa bakım aralığı ve gövde onarımları daha dikkatli incelenmelidir.',
        redFlags: ['Motor/şanzıman türünün VIN ve faturayla doğrulanamaması.', 'Sıcakken EDC kavrama kaçırması, X-Tronic uğultusu veya E-Tech enerji sistemi uyarısı.', 'Soğutma eksiltme, hararet, yağ basıncı ya da turbo metal sesi geçmişi.', 'Airbag/kemer direnç hilesi, şasi onarımı veya geriye giden kilometre zinciri.'],
        verdict: 'Kullanıma uygun aktarma seçilmiş, bakım zinciri eksiksiz ve sıcak-soğuk testleri temiz Clio 5 güçlü ikinci el likiditesi sunar. En sade risk profili çoğu alıcı için manuel TCe’dedir; otomatik veya hibrit seçenekler kötü değildir, yalnız kendi sistemine özgü ölçüm yapılmadan alınmamalıdır.',
        sources: [
            { title: 'Renault Clio V Türkiye teknik broşürü', url: 'https://satinal.renault.com.tr/media/YeniCLIO_Ocak-2020.pdf' },
            { title: 'Renault Clio resmî model tarihçesi', url: 'https://www.renaultgroup.com/en/magazine/stories-en/the-renault-clio-our-history-your-stories/' },
        ],
        faqs: [
            { question: 'Clio 5 hangi yıllardır?', answer: 'Türkiye ikinci elinde ağırlıkla 2020-2025’tir. 2023 değişikliği makyaj, 2026’da başlayan Clio VI ise ayrı nesildir.' },
            { question: 'Clio 5 X-Tronic mi EDC mi?', answer: 'X-Tronic CVT, EDC çift kavramalıdır. Şehir konforu ve bakım/test ihtiyaçları farklıdır; araç kodu ve geçmişine göre seçilmelidir.' },
            { question: 'Clio 5 E-Tech şarj edilir mi?', answer: 'Tam hibrit E-Tech haricî kabloyla şarj edilmez; batarya sürüş ve rejenerasyon sırasında enerji toplar.' },
            { question: 'Clio 5 1.5 dCi alınır mı?', answer: 'Düzenli uzun yol yapan, DPF/EGR/AdBlue ve enjektör verileri sağlıklı, bakımı belgeli aday düşünülebilir; sürekli kısa mesafeye uygunluğu zayıftır.' },
            { question: 'Clio 5 alırken en önemli test nedir?', answer: 'Doğru motor-şanzıman kimliği, soğuk motor, tam sıcak aktarım testi, elektronik tarama ve güvenli gövde kontrolü birlikte gereklidir.' },
        ],
    },
    {
        rank: 2, sales: '22.009 adet', model: 'Toyota Corolla E210', relatedVehicleIds: [3],
        slug: 'toyota-corolla-e210-alinir-mi-15-benzin-18-hybrid',
        title: 'Toyota Corolla E210 Alınır mı? 1.5 Benzin ve 1.8 Hybrid Rehberi',
        excerpt: 'Corolla E210’da 1.6 Valvematic, 1.5 Dynamic Force Multidrive S ve 1.8 Hybrid e-CVT seçeneklerini nesil, batarya ve ekspertiz testleriyle karşılaştırın.',
        identity: 'On ikinci nesil Corolla Sedan E210 Türkiye’de 2019 model yılıyla yaygınlaştı. İlk dönemde 1.6 Valvematic benzinli ve 1.8 Hybrid, sonraki dönemde 1.5 Dynamic Force benzinli ile güncellenen hibrit güç seçenekleri görüldü. “Dream, Flame, Passion” gibi paketler donanımı; motor adı ve model yılı ise güç aktarımını belirler. 122 ve 140 HP hibrit ifadeleri farklı güncelleme dönemlerine aittir.',
        technicalAnalysis: 'E210’un güçlü tarafı yerli üretim, geniş servis ağı ve benzinli/hibrit alternatifidir. Toyota e-CVT, kayış-kasnaklı klasik CVT değildir; benzinli Multidrive S ise farklı prensipte kayışlı CVT’dir. Bu iki sistemi yalnız “CVT” diye aynı bakım listesine koymak hatalıdır. Hibritte batarya blok dengesi ve soğutma; benzinli CVT’de sıvı, basınç ve oran davranışı önemlidir.',
        engines: [
            { name: '1.6 Valvematic Multidrive S', character: 'İlk dönem atmosferik benzinli ve kayışlı CVT.', idealUse: 'Sade benzinli isteyen, dengeli karma kullanım yapanlar.', checks: 'Valvematic öğrenme/hata değerleri, CVT sıvısı, soğuk-sıcak kalkış ve uğultu.' },
            { name: '1.5 Dynamic Force Multidrive S', character: 'Üç silindirli atmosferik benzinli, 125 PS sınıfı ve CVT.', idealUse: 'Hibrit istemeyen şehir-kara yolu kullanıcıları.', checks: 'Soğuk çalışma, enjektör/yakıt düzeltmesi, soğutma ve CVT oran-basınç davranışı.' },
            { name: '1.8 Hybrid 122/140 e-CVT', character: 'Atkinson çevrimli motor ve güç bölüşümlü hibrit transaks.', idealUse: 'Şehir içi, taksi benzeri yoğun kullanım ve düşük tüketim önceliği.', checks: 'Batarya blok farkı, fan/kanal, inverter soğutması, izolasyon ve rejeneratif fren.' },
        ],
        phoneQuestions: ['Hibritse yıllık hibrit sistem kontrolü ve batarya raporu var mı?', 'Benzinli CVT’de sıvı hangi şartnameyle ve hangi kilometrede değişti?', 'Araç taksi, filo, kiralama veya yoğun ticari kullanım gördü mü?', 'Ön cam/tampon değişimi sonrası Toyota Safety Sense kalibrasyonu yapıldı mı?'],
        inspectionChecks: ['Hibritte batarya blok voltajı/sıcaklık farkı, fan kanalı, inverter devresi ve izolasyon kodlarını okuyun; tek bir “batarya yüzde” ekranına güvenmeyin.', 'Benzinli Multidrive S’de doğru sıvı kaydı, basınç, oran hedefi ve sıcak kalkış davranışını kontrol edin.', 'Motor soğukken yağ, su, rölanti, yakıt düzeltmesi; LPG varsa kompresyon ve supap geçmişini inceleyin.', 'Rejeneratif-hidrolik fren geçişi, 12 V akü, elektronik park freni, radar/kamera ve airbag modüllerini tarayın.'],
        roadChecks: ['Hibritte elektrikli ilk hareket, benzinli motorun devreye girişi ve enerji akışı.', 'Multidrive S’de sabit hız, tam yük, geri manevra ve sıcak kalkışta oran kararlılığı.', 'Fren geçişinde pedal tutarlılığı, düz gidiş ve lastik aşınması.', 'Bozuk zeminde ön/arka süspansiyon, kabin sesi ve direksiyon merkezleme.'],
        ownership: 'Şehir içi kilometresi yüksek kullanıcı için hibrit yakıt ve balata avantajı sağlayabilir; batarya sağlığı belgelenmelidir. Düşük kilometreli karma kullanımda 1.5 benzinli daha sade olabilir. LPG uygulanmış araçta kit markasından önce benzin sisteminin sağlığı, kalibrasyon, supap/kompresyon ve ruhsat kaydı kontrol edilir. Taksi çıkması otomatik ret nedeni değildir fakat kullanım ve bakım zinciri eksiksiz kanıtlanmalıdır.',
        redFlags: ['Hibrit batarya izolasyon hatası, aşırı blok farkı veya kapatılmış uyarı.', 'CVT’de metalik uğultu, oran dalgalanması, basınç kodu ya da yanlış sıvı.', 'Kilometre ve ticari kullanım geçmişinin gizlenmesi.', 'Airbag/şasi onarımıyla kalibrasyonsuz radar-kamera sistemi.'],
        verdict: 'Corolla E210 doğru geçmişle Türkiye’nin en öngörülebilir aile otomobillerinden biridir. Şehir ağırlığında hibrit, daha düşük kilometre ve sade kullanımda benzinli mantıklıdır. “Toyota bozulmaz” varsayımı yerine hibrit raporu, CVT geçmişi, gövde güvenliği ve gerçek kullanım türü ölçülmelidir.',
        sources: [
            { title: 'Toyota Corolla Türkiye resmî teknik bilgileri', url: 'https://www.toyota.com.tr/araba-modelleri/corolla-sedan' },
            { title: 'Toyota hibrit sistem açıklaması', url: 'https://www.toyota.com.tr/elektrikli-araclar/hibrit-arabalar/toyota-hybrid' },
        ],
        faqs: [
            { question: 'Corolla E210 hangi yıllardır?', answer: 'Türkiye’de 2019’dan günümüze uzanan on ikinci nesildir; motor ve güvenlik donanımı model yılına göre değişir.' },
            { question: 'Corolla Hybrid e-CVT kayışlı CVT mi?', answer: 'Hayır. Toyota hibrit e-CVT güç bölüşümlü transakstır; benzinli Multidrive S ile aynı mekanik yapıda değildir.' },
            { question: '122 HP ile 140 HP hibrit farkı nedir?', answer: 'Farklı sistem güncelleme dönemleridir. Aracın birleşik gücü, batarya tipi ve model yılı VIN/teknik belgeyle doğrulanmalıdır.' },
            { question: '1.5 Corolla LPG’ye uygun mu?', answer: 'Uygulama kararı motor kodu, kit, montaj ve supap takibine bağlıdır. LPG’li adayda iki yakıtta düzeltme, kompresyon ve ruhsat kontrolü yapılmalıdır.' },
            { question: 'Corolla E210 taksi çıkması alınır mı?', answer: 'Ancak kullanımın açıkça beyan edildiği, kilometre-bakım zinciri tutarlı ve batarya/mekanik/gövde testleri sağlıklı örnek değerlendirilebilir.' },
        ],
    },
    {
        rank: 3, sales: '19.938 adet', model: 'Renault Megane Sedan 4', relatedVehicleIds: [4],
        slug: 'renault-megane-sedan-4-alinir-mi-13-tce-edc-15-dci',
        title: 'Renault Megane Sedan 4 Alınır mı? 1.3 TCe EDC ve 1.5 dCi Rehberi',
        excerpt: 'Megane Sedan 4’te 1.3 TCe 140 EDC, 1.5 dCi/Blue dCi ve önceki benzinli seçenekleri; EDC, DPF, soğutma ve ekspertiz testleriyle inceleyin.',
        identity: 'Dördüncü nesil Megane Sedan 2016’da Türkiye’de üretime girdi ve 2020 çevresinde makyajlandı. Türkiye ilanlarında 1.6 SCe/CVT, 1.2 veya 1.3 TCe, 1.5 dCi/Blue dCi ve manuel/EDC kombinasyonları görülebilir. Güncel 1.3 TCe 140 EDC ile erken dönem dizel veya CVT’li aracı aynı kabul etmeyin; motor ve şanzıman kodu VIN’den çıkarılmalıdır.',
        technicalAnalysis: 'Megane Sedan geniş bagajı, uzun yol konforu ve servis erişimiyle güçlüdür. Risk profili kullanıma göre değişir: kısa mesafeli dCi’da DPF/EGR, yoğun dur-kalk görmüş EDC’de kavrama, 1.3 TCe’de soğutma ve bakım disiplini öne çıkar. Filo ve şirket aracı oranı yüksek olabildiğinden kilometre kadar sürücü sayısı ve bakım zinciri de önemlidir.',
        engines: [
            { name: '1.3 TCe 140 manuel/EDC', character: '240 Nm sınıfı turbo benzinli, performans ve sessizlik dengesi.', idealUse: 'Karma kullanım, aile ve uzun yol.', checks: 'Pompa-termostat/soğutma, ateşleme, turbo basıncı ve EDC sıcak davranışı.' },
            { name: '1.5 dCi / Blue dCi', character: 'Düşük tüketimli, yüksek torklu yaygın dizel.', idealUse: 'Düzenli uzun yol ve yüksek yıllık kilometre.', checks: 'Enjektör, turbo, çalışma sıcaklığı, EGR/DPF/SCR ve debriyaj-volan/EDC.' },
            { name: '1.6 SCe CVT', character: 'Erken dönemde atmosferik benzinli ve sürekli değişken oranlı otomatik.', idealUse: 'Sakin kullanım ve turbo istemeyenler.', checks: 'CVT sıvısı/ısı, oran kararlılığı, soğutma ve LPG varsa supap-kompresyon.' },
        ],
        phoneQuestions: ['Araç şirket, filo veya kiralama geçmişine sahip mi; sürücü ve bakım kayıtları düzenli mi?', 'EDC/CVT yağı, kavrama veya mekatronik/valf gövdesi işlemi belgeli mi?', 'dCi’da enjektör, turbo, DPF/EGR/AdBlue; TCe’de termostat/pompa işlemi oldu mu?', 'Triger veya motor koduna uygun zamanlama bakımı hangi tarihte yapıldı?'],
        inspectionChecks: ['1.3 TCe’de genleşme kabı, termostat/pompa çevresi, yağ seviyesi, misfire sayacı ve turbo hedef-gerçek basıncını inceleyin.', 'dCi’da soğuk marş, enjektör düzeltme/geri dönüş, rail basıncı, turbo, EGR, DPF kül-kurum ve rejenerasyon verisini okuyun.', 'EDC’de kavrama aşınma/uyarlama ve hata geçmişini; CVT’de oran/basınç ve doğru sıvı kaydını kontrol edin.', 'R-Link/multimedya, dijital ekran, kart, klima, elektronik park freni, radar ve airbag dahil bütün modülleri tarayın.'],
        roadChecks: ['EDC’de geri manevra, rampa, 1-2 geçişi ve tam sıcak dur-kalk.', 'Dizelde 1.500-3.000 devir turbo tepkisi, duman ve rejenerasyon belirtisi.', 'TCe’de yük altında tekleme, soğutma sıcaklığı ve gaz kesme davranışı.', 'Direksiyon, ön takım, arka aks, fren merkezleme ve yüksek hız rüzgâr/trim sesi.'],
        ownership: 'Yüksek yıllık kilometre ve düzenli uzun yol varsa belgeli dCi hâlâ anlamlıdır; kısa şehir kullanımında 1.3 TCe daha uyumludur. EDC rahatlık sunar fakat kavrama bütçesi ve kullanım biçimi hesaba katılmalıdır. Filo çıkışlı temiz araç alınabilir, ancak yağ aralıkları, hasar zinciri, iç aşınma ve kilometre bağımsız kayıtlardan doğrulanmalıdır.',
        redFlags: ['Motor/şanzıman kodu veya filo geçmişinin saklanması.', 'Sıcak EDC’de kaçırma/arıza modu ya da CVT’de metalik uğultu.', 'Dizelde emisyon sisteminin yazılımla iptali veya sürekli rejenerasyon.', 'Hararet, düşük yağ basıncı, airbag hilesi ya da taşıyıcı yapı onarımı.'],
        verdict: 'Megane Sedan 4, doğru motor kullanıma eşleştirildiğinde konforlu ve likit bir aile otomobilidir. Kısa mesafede TCe, uzun yolda dCi; otomatikte ise geçmişi ölçülmüş EDC/CVT tercih edilmelidir. Ucuz filo aracı ancak kayıt zinciri ve bağımsız test güçlü ise avantajdır.',
        sources: [
            { title: 'Renault Megane Sedan resmî ürün bilgisi', url: 'https://www.renault.com.tr/binek-araclar/megane-sedan.html' },
            { title: 'Renault Megane Sedan motor ve makyaj duyurusu', url: 'https://www.renault.com.tr/renault-haberler/renault-haberler-urun-lansman/renault-haberler-urun-lansman-yeni-megane-sedan.html' },
        ],
        faqs: [
            { question: 'Megane 4 Sedan hangi yıllardır?', answer: 'Türkiye’de 2016’dan günümüze uzanır; 2020 çevresi makyaj ve motor/donanım geçişi VIN’den doğrulanmalıdır.' },
            { question: '1.3 TCe 140 EDC alınır mı?', answer: 'Soğutma ve yağ geçmişi, EDC kavrama/uyarlama değerleri ve sıcak test normalse güçlü bir karma kullanım seçeneğidir.' },
            { question: '1.5 dCi kısa mesafeye uygun mu?', answer: 'Sürekli kısa kullanım DPF/EGR ve çalışma sıcaklığı koşullarını zorlaştırır; düzenli uzun yol kullanımında daha anlamlıdır.' },
            { question: 'Megane 4 EDC kuru kavrama mı?', answer: 'Motor ve üretim yılına göre şanzıman ailesi doğrulanmalıdır; yalnız EDC adına bakarak kavrama tipi ve bakım prosedürü söylenmemelidir.' },
            { question: 'Filo çıkması Megane alınır mı?', answer: 'Kullanım açık, kilometre/hasar/bakım zinciri tutarlı ve sıcak-soğuk testleri temizse değerlendirilebilir; fiyat farkı yakın bakımları karşılamalıdır.' },
        ],
    },
    {
        rank: 4, sales: '17.783 adet', model: 'Togg T10X', relatedVehicleIds: [11],
        slug: 'togg-t10x-ikinci-el-alinir-mi-batarya-menzil-sarj-kontrolu',
        title: 'İkinci El Togg T10X Alınır mı? Batarya, Menzil ve Şarj Kontrolü',
        excerpt: 'Togg T10X V1/V2, standart ve uzun menzil seçeneklerinde batarya sağlığı, şarj geçmişi, yazılım, Trumore devri, gövde ve garanti kontrolü.',
        identity: 'T10X 2023’te kullanıcılarla buluşan elektrikli C-SUV’dur. İkinci elde V1/V2 donanım, standart/uzun menzil batarya ve arkadan itiş; daha yeni ürünlerde farklı menzil/çekiş seçenekleri görülebilir. Yazılım ekranındaki menzil tahmini batarya kapasitesi değildir. Model yılı, batarya varyantı, fabrika opsiyonları, garanti başlangıcı ve bağlı hesap sahipliği VIN ile doğrulanmalıdır.',
        technicalAnalysis: 'Elektrikli araçta motor yağı veya DPF yoktur; buna karşılık yüksek voltaj bataryası, termal yönetim, güç elektroniği, şarj portu, 12 V sistemi, yazılım ve gövde altı koruması satın alma kararının merkezine geçer. T10X’in menzil değeri jant, batarya, yazılım, hava ve kullanım geçmişine göre değişir. Ekrandaki son tüketimden türetilen tahmini kilometreyi sağlık raporu sanmayın.',
        engines: [
            { name: 'RWD standart menzil', character: '160 kW arkadan itiş ve daha küçük batarya paketi.', idealUse: 'Ev/iş şarjı olan, günlük rotası öngörülebilir kullanıcı.', checks: 'Kullanılabilir enerji, hücre farkı, DC/AC şarj, alt batarya ve garanti.' },
            { name: 'RWD uzun menzil', character: '160 kW arkadan itiş ve daha yüksek kullanılabilir batarya.', idealUse: 'Şehirler arası kullanım ve daha geniş menzil tamponu isteyenler.', checks: 'Batarya SoH yöntemi, hızlı şarj eğrisi, termal yönetim, lastik/jant ve yazılım.' },
            { name: 'Yeni model yılı/çekiş seçenekleri', character: 'Donanım, batarya ve menzil değerleri güncellenebilir.', idealUse: 'Güncel teknoloji isteyen ve versiyonu belgeleyebilen alıcı.', checks: 'VIN, sipariş faturası, fabrika opsiyonu, yazılım sürümü ve resmî teknik belge.' },
        ],
        phoneQuestions: ['V1/V2, standart/uzun menzil, jant ve fabrika opsiyonları sipariş faturasında nasıl yazıyor?', 'Batarya veya yüksek voltaj sistemi için servis, darbe, izolasyon ya da şarj arızası kaydı var mı?', 'AC ve DC şarjda en son hangi güç/süre görüldü; şarj portu veya kablo işlemi oldu mu?', 'Trumore/dijital sahiplik, anahtarlar, şarj kablosu ve garanti devri eksiksiz yapılabilecek mi?'],
        inspectionChecks: ['Üretici uyumlu teşhisle hücre/blok voltaj-sıcaklık farkı, izolasyon, termal yönetim, HV hata ve şarj kesilme geçmişini inceleyin.', 'Batarya muhafazası, kaldırma noktaları, soğutma plakası çevresi ve alt gövdeyi darbe, ezik, sürtme veya yetkisiz açılma açısından liftte görüntüleyin.', 'AC şarjı fiilen başlatın; mümkünse DC istasyonda araç sıcaklık ve doluluk koşulları elverirken şarjın kesintisiz başladığını doğrulayın.', '12 V akü, ekranlar, kameralar, radar, eCall, koltuk/kapı modülleri, OTA/yazılım ve tüm kullanıcı profillerini kontrol edin.'],
        roadChecks: ['Düşük ve orta hızda güç teslimi, rejenerasyon kademeleri ve fren-pedal geçişi.', 'Tam tur manevrada aks/rulman sesi, düz gidiş ve eş lastik aşınması.', 'Klima/ısıtma açıkken enerji akışı, termal sistem sesi ve uyarılar.', 'ADAS, çevre görüş kamerası, şerit/mesafe sistemleri ve bağlantı işlevleri.'],
        ownership: 'Ev veya iş yerinde güvenilir şarjı olmayan kullanıcı toplam zaman ve enerji maliyetini halka açık şarj fiyatı/erişimiyle hesaplamalıdır. Lastik; EV torku ve ağırlığı nedeniyle önemli sarftır. Kasko, cam, gövde ve elektronik parça bekleme süresi teklif aşamasında sorulmalıdır. Togg’un yayımladığı garanti bilgisinde araç için 3 yıl/100.000 km, batarya için 8 yıl/160.000 km sınırı bulunur; satın alınacak aracın fiilî başlangıcı ve şartları VIN ile teyit edilmelidir.',
        redFlags: ['Batarya altında darbe, izolasyon hatası veya açıklanamayan HV onarımı.', 'AC/DC şarjın denenmesine ya da üretici teşhisine izin verilmemesi.', 'Airbag/şasi onarımıyla kalibrasyonsuz kamera-radar sistemi.', 'Trumore/dijital sahiplik, anahtar, garanti veya fatura zincirinin devredilememesi.'],
        verdict: 'Şarj düzeni kullanımınıza uyuyor, batarya-alt gövde ve yüksek voltaj raporu temiz, dijital sahiplik eksiksiz devredilebiliyorsa T10X güçlü yerli elektrikli alternatiftir. Ekrandaki menzil veya düşük kilometre yerine ölçümlü batarya, gerçek şarj testi, yazılım ve gövde güvenliği esas alınmalıdır.',
        sources: [
            { title: 'Togg T10X resmî teknik özellikleri', url: 'https://togg.com.tr/t10x' },
            { title: 'Togg garanti ve bakım SSS', url: 'https://www.togg.com.tr/faq' },
            { title: 'Euro NCAP T10X 2025 değerlendirmesi', url: 'https://www.euroncap.com/assessments/togg/t10x/1170/' },
        ],
        faqs: [
            { question: 'T10X batarya garantisi kaç yıl?', answer: 'Togg SSS sayfasında 8 yıl/160.000 km, araç garantisi 3 yıl/100.000 km olarak belirtilir; aracın başlangıç tarihi ve şartları VIN ile doğrulanmalıdır.' },
            { question: 'Ekrandaki yüzde 100 menzil batarya sağlığını gösterir mi?', answer: 'Hayır. Tahmini menzil yakın tüketim, sıcaklık ve sürüşe bağlıdır; hücre verisi, kullanılabilir enerji ve uygun SoH yöntemi gerekir.' },
            { question: 'İkinci el T10X’te DC şarj denenmeli mi?', answer: 'Mümkünse evet. Doluluk ve sıcaklık uygunken başlama, kesinti, port kilidi ve termal davranış gözlenmelidir.' },
            { question: 'Standart mı uzun menzil mi alınmalı?', answer: 'Günlük rota ve ev/iş şarjı belirler. Uzun menzil daha büyük tampon, standart menzil daha düşük satın alma maliyeti sunabilir.' },
            { question: 'T10X alırken en önemli fiziksel kontrol nedir?', answer: 'Yüksek voltaj batarya muhafazası ve alt gövde darbesi; ardından AC/DC şarj, izolasyon ve tüm modül taramasıdır.' },
        ],
    },
    {
        rank: 5, sales: '17.469 adet', model: 'Renault Duster 3', relatedVehicleIds: [12011],
        slug: 'renault-duster-3-alinir-mi-eco-g-hybrid-tce-edc',
        title: 'Renault Duster 3 Alınır mı? Eco-G, Hybrid ve TCe EDC Rehberi',
        excerpt: 'Yeni Renault Duster’da Eco-G, mild/full hybrid, TCe EDC ve 4x4 seçeneklerini; nesil doğrulama, batarya, LPG, şanzıman ve alt gövde testleriyle karşılaştırın.',
        identity: 'Üçüncü nesil Duster 2024’te yeni platformla geldi ve Türkiye’de Renault markası altında sunuldu. İlanlarda önceki Dacia Duster ile karıştırılmamalıdır. Motor gamı model yılına göre Eco-G LPG, mild hybrid, full hybrid ve daha yeni turbo TCe EDC seçenekleri içerebilir; çekiş sistemi de her motorda aynı değildir. “Yeni Duster” başlığı yerine VIN, üretim yılı ve resmî teknik belge kullanın.',
        technicalAnalysis: 'Duster’ın temel avantajı geniş kullanım alanı, yerden yükseklik ve güçlü pazar talebidir. Yeni nesilde elektronik/ADAS ve hibrit karmaşıklığı arttı. LPG’li Eco-G’de yakıt sistemi ve supap/kalibrasyon, full hybrid’de batarya ve çok modlu aktarım, 4x4’te diferansiyel/şaft ve eş lastik, EDC’de kavrama ve sıcak sürüş ayrı ayrı incelenmelidir.',
        engines: [
            { name: 'Eco-G LPG', character: 'Fabrika LPG’li turbo benzinli aile; güç değeri model yılına göre değişebilir.', idealUse: 'Yüksek kilometre, LPG erişimi ve düşük yakıt maliyeti isteyenler.', checks: 'LPG/benzin düzeltmesi, regülatör-enjektör, supap/kompresyon, tank ve ruhsat.' },
            { name: 'Mild hybrid / 4x4', character: 'Turbo benzinli motora elektrik desteği; belirli sürümlerde dört çeker.', idealUse: 'Kırsal rota, kış, hafif arazi ve manuel kontrol isteyenler.', checks: '48 V sistem, debriyaj, transfer/şaft/diferansiyel ve dört eş lastik.' },
            { name: 'Full hybrid', character: 'Benzinli motor, HV batarya ve çok modlu otomatik aktarım.', idealUse: 'Şehir içi ekonomi ve otomatik konfor.', checks: 'Batarya blokları, inverter, enerji geçişi, yazılım ve rejeneratif fren.' },
            { name: 'Turbo TCe EDC 145', character: '1.3 litre turbo ve yedi ileri otomatik olarak güncel ürün gamında yer alır.', idealUse: 'Karma kullanımda güçlü otomatik isteyenler.', checks: 'Soğutma, turbo, EDC kavrama/uyarlama ve tam sıcak dur-kalk.' },
        ],
        phoneQuestions: ['Araç Renault Duster 3 mü; motor, çekiş ve üretim ayı VIN çıktısında nasıl görünüyor?', 'Eco-G tank/sistem; hibritte batarya/yazılım; 4x4’te diferansiyel bakım kaydı var mı?', 'Alt gövde, arazi kullanımı, su geçişi veya çekme/kurtarma geçmişi var mı?', 'ADAS, ön cam/tampon veya şasi işlemi sonrası kalibrasyon belgesi mevcut mu?'],
        inspectionChecks: ['Eco-G’de iki yakıtta yakıt düzeltmesi, kompresyon, LPG kaçağı/tank tarihi ve ruhsat eşleşmesini kontrol edin.', 'Hibritte 12/48 V veya yüksek voltaj sistemini versiyona göre ayırıp batarya, DC/DC, inverter ve soğutma verisini okuyun.', '4x4 araçta alt muhafaza, şaft, diferansiyel, aks körüğü ve dört lastiğin çevre/aşınma uyumunu liftte inceleyin.', 'EDC’de kavrama; manuelde debriyaj-volan; tümünde radar/kamera, multimedya ve güvenlik modüllerini tarayın.'],
        roadChecks: ['Bozuk zemin ve kasiste süspansiyon/alt takım; 4x4’te dar dönüş ve yük aktarımı.', 'Eco-G’de benzin-LPG geçişi; hibritte elektrik-motor geçişi; EDC’de geri-yokuş-dur-kalk.', 'Yük altında turbo basıncı, soğutma ve tekleme kontrolü.', 'Fren, direksiyon merkezleme, rüzgâr sesi ve ADAS’ın güvenli işlev testi.'],
        ownership: 'Eco-G kilometre maliyetini düşürebilir ancak LPG bakımı ve tank ömrü hesaba katılır. Full hybrid şehirde, mild hybrid/4x4 değişken zemin ve uzun rota için anlamlı olabilir. Yeni nesil olduğu için uzun dönem arıza genellemesi yapmak yerine açık servis kampanyaları ve yazılım güncellemeleri VIN bazında sorgulanmalıdır. Büyük jant, dört çeker lastik eşleştirmesi ve kasko maliyeti bütçeye eklenmelidir.',
        redFlags: ['Motor/çekiş/hibrit türünün VIN ile ilan arasında uyuşmaması.', 'Alt gövde veya batarya muhafazasında ağır darbe ve su/çamur izi.', 'LPG kaçağı, düşük kompresyon ya da hibrit izolasyon/enerji uyarısı.', 'Sıcak EDC arızası, 4x4 uğultusu veya kalibrasyonsuz ADAS.'],
        verdict: 'Duster 3 kullanım amacı doğru tanımlandığında çok yönlüdür. Şehir için full hybrid/otomatik, kilometre ekonomisi için belgeli Eco-G, zorlu rota için doğru bakımlı 4x4 düşünülebilir. Yeni nesil etiketi ekspertizi azaltmaz; aktarma türü ve alt gövde kontrolü kararı belirler.',
        sources: [
            { title: 'Renault Duster Türkiye teknik bilgileri', url: 'https://www.renault.com.tr/hybrid-araclar/yeni-renault-duster/teknik-bilgiler.html' },
            { title: 'Renault Duster model sayfası', url: 'https://www.renault.com.tr/hybrid-araclar/yeni-renault-duster.html' },
        ],
        faqs: [
            { question: 'Renault Duster 3 hangi yılda başladı?', answer: 'Yeni nesil 2024’te geldi; Türkiye’de Renault markasıyla sunuldu. Üretim ve model yılı VIN’den doğrulanmalıdır.' },
            { question: 'Duster Eco-G fabrikasyon LPG mi?', answer: 'Eco-G fabrika LPG’li güç aktarma ailesidir; yine de tank, sistem, ruhsat, kaçak ve iki yakıt kalibrasyonu kontrol edilmelidir.' },
            { question: 'Duster full hybrid şarj edilir mi?', answer: 'Full hybrid sürüm haricî kablo gerektirmez; sürüş ve rejenerasyonla enerji toplar.' },
            { question: 'Her Duster 4x4 mü?', answer: 'Hayır. Çekiş motor ve versiyona bağlıdır; VIN ve fiziksel aktarma üzerinden doğrulanmalıdır.' },
            { question: 'Yeni Duster’da kronik arıza var mı?', answer: 'Uzun dönem veri henüz sınırlıdır. Kesin kronik hükmü yerine servis kampanyası, yazılım, aktarma ve alt gövde kontrolü yapılmalıdır.' },
        ],
    },
    {
        rank: 6, sales: '16.915 adet', model: 'Fiat Egea Sedan', relatedVehicleIds: [2],
        slug: 'fiat-egea-sedan-alinir-mi-14-fire-13-16-multijet-dct',
        title: 'Fiat Egea Sedan Alınır mı? 1.4 Fire ve Multijet DCT Rehberi',
        excerpt: 'Egea Sedan’da 1.4 Fire, 1.3 ve 1.6 Multijet, manuel ve DCT seçeneklerini; taksi/filo geçmişi, DPF, debriyaj, şasi ve bakım testleriyle inceleyin.',
        identity: 'Egea Sedan 2015’ten beri Türkiye’de üretilen ve çok geniş motor/donanım yelpazesi olan modeldir. 1.4 Fire 95, 1.3 Multijet 95, 1.6 Multijet 120/130, manuel ve altı ileri DCT ikinci elde yaygındır; bazı dönemlerde farklı benzinli/hibrit seçenekler de görülür. Easy/Urban/Lounge gibi paket adı motorun durumunu göstermez. Özellikle taksi ve filo geçmişi açıkça doğrulanmalıdır.',
        technicalAnalysis: 'Egea’nın avantajı parça, servis ve geniş ilan havuzudur. Aynı avantaj, yoğun ticari kullanım görmüş araç sayısını da artırır. 1.4 Fire mekanik olarak daha sade fakat performans beklentisi sınırlıdır; 1.3 Multijet ekonomiktir; 1.6 Multijet tork ve otomatik seçeneği sunar. DCT kavrama tipi, dizel emisyon sistemi ve gerçek kilometre seçimde fiyat kadar önemlidir.',
        engines: [
            { name: '1.4 Fire 95 manuel', character: 'Atmosferik, çok noktadan enjeksiyonlu ve sade manuel.', idealUse: 'Düşük-orta kilometre, şehir ve uygun LPG kurulumu düşünenler.', checks: 'Triger/devirdaim, yağ-su, ateşleme, LPG varsa kompresyon ve supap.' },
            { name: '1.3 Multijet 95 manuel', character: 'Düşük tüketimli küçük dizel ve manuel aktarma.', idealUse: 'Düzenli uzun yol, ekonomi ve düşük vergi önceliği.', checks: 'Zincir/yağlama sesi, enjektör, turbo, EGR/DPF, debriyaj ve çalışma sıcaklığı.' },
            { name: '1.6 Multijet 120/130 manuel/DCT', character: '320 Nm sınıfı güçlü dizel; manuel veya altı ileri çift kavrama.', idealUse: 'Uzun yol, yük, performans ve otomatik ihtiyacı.', checks: 'DPF/EGR/SCR, turbo-enjektör, volan; DCT’de yağ, kavrama ve sıcak test.' },
        ],
        phoneQuestions: ['Araç taksi, kiralama, şirket veya filo geçmişine sahip mi; plaka/ruhsat zinciri paylaşılabilir mi?', 'Triger/zincir, debriyaj-volan ve DCT yağ/kavrama faturaları hangi kilometrede?', 'Dizelde DPF/EGR/AdBlue iptali veya yazılım var mı; son rejenerasyon bilgisi nedir?', 'LPG varsa ruhsata işli mi; supap/kompresyon ve ayar kaydı var mı?'],
        inspectionChecks: ['Kilometreyi muayene, servis, yağ etiketi, lastik/fren faturası ve eski ilanlarla karşılaştırın; direksiyon/koltuk aşınmasını yalnız yardımcı bulgu sayın.', 'Dizelde enjektör düzeltme/geri dönüş, rail basıncı, turbo hedef-gerçek, çalışma sıcaklığı ve DPF kül-kurum/rejenerasyon verisini okuyun.', 'DCT’de sıvı faturası, kavrama/uyarlama ve sıcak hata; manuelde debriyaj-volan ve senkromeç davranışını inceleyin.', 'Podye-direk-taban, airbag/kemer, arka havuz, kapı eşikleri ve yoğun kullanım kaynaklı süspansiyon/fren aşınmasını kontrol edin.'],
        roadChecks: ['Dizelde düşük devir yük, duman, turbo tepkisi ve rejenerasyon belirtisi.', 'DCT’de geri, rampa ve sıcak dur-kalk; manuelde debriyaj kavrama ve volan sesi.', 'Direksiyon düz gidiş, ön takım, arka süspansiyon ve fren merkezleme.', 'Klima, multimedya, USB, park sensörü/kamera ve tüm cam-kilit donanımı.'],
        ownership: '1.4 Fire düşük yıllık kilometrede öngörülebilir fakat performans ve gerçek LPG maliyeti değerlendirilmelidir. 1.3 Multijet sakin ekonomi, 1.6 Multijet güçlü uzun yol sunar. Kısa mesafeli dizel, yakıt tasarrufunu DPF/EGR masrafıyla geri verebilir. Taksi çıkması düşük fiyatlı olsa bile koltuk, klima, kapı, süspansiyon ve gövde yorgunluğu için daha büyük rezerv gerekir.',
        redFlags: ['Taksi/filo veya kilometre geçmişinin gizlenmesi ve kayıtların geriye gitmesi.', 'Emisyon sisteminin iptali, yoğun duman veya DPF basınç/ısı hatası.', 'DCT’de sıcak kaçırma/arıza modu ya da debriyaj-volanda ağır titreşim.', 'Airbag hilesi, podye/direk/taban onarımı veya su alma izi.'],
        verdict: 'Egea Sedan doğru motor ve kullanım geçmişiyle düşük işletme maliyeti sunabilir. Düşük kilometrede 1.4 Fire, düzenli uzun yolda Multijet; otomatikte belgeli DCT düşünülebilir. Çok sayıda ilan arasından en ucuzu değil, geçmişi en şeffaf olanı seçmek önemlidir.',
        sources: [
            { title: 'Fiat Egea Sedan resmî teknik özellikleri', url: 'https://www.fiat.com.tr/modeller/egea/sedan' },
            { title: 'Fiat Egea Sedan kullanıcı kılavuzu ve motor kodları', url: 'https://www.fiat.com.tr/content/dam/fiat2023/tr/kullanim-kilavuzlari/egea/2024/egea-sedan-kullanim-kilavuzu-agustos-aralik-2024.pdf' },
        ],
        faqs: [
            { question: 'Egea 1.4 Fire alınır mı?', answer: 'Performans beklentisi uygun, triger/soğutma ve varsa LPG-kompresyon geçmişi temizse sade bir seçenektir.' },
            { question: '1.3 Multijet şehir içine uygun mu?', answer: 'Sürekli kısa mesafe DPF/EGR ve ısınma koşullarını zorlayabilir; düzenli uzun yol kullanımında daha anlamlıdır.' },
            { question: 'Egea DCT alınır mı?', answer: 'Doğru şanzıman yağı, kavrama/uyarlama verisi ve tam sıcak yol testi temiz, onarımlar belgeli ise değerlendirilebilir.' },
            { question: 'Egea taksi çıkması nasıl anlaşılır?', answer: 'Ruhsat/plaka zinciri, muayene ve servis kayıtları, eski ilanlar, iç aşınma ve gövde/kapı kullanım izleri birlikte değerlendirilir.' },
            { question: '1.6 Multijet 120 ve 130 farkı nedir?', answer: 'Farklı emisyon/model yılı güncellemeleridir; motor kodu, SCR/AdBlue donanımı ve şanzıman VIN’den kesinleştirilmelidir.' },
        ],
    },
    {
        rank: 7, sales: '16.709 adet', model: 'Toyota C-HR', relatedVehicleIds: [15016, 162],
        slug: 'toyota-c-hr-alinir-mi-birinci-ikinci-nesil-hybrid',
        title: 'Toyota C-HR Alınır mı? 1. ve 2. Nesil Hybrid Karşılaştırması',
        excerpt: 'Toyota C-HR birinci ve ikinci nesilde 1.8 Hybrid, e-CVT, batarya, fren, ADAS, kabin ve ekspertiz farklarını derinlemesine karşılaştırın.',
        identity: 'İlk nesil C-HR 2016-2023, ikinci nesil 2023’ten günümüze uzanır. İlk nesilde Türkiye’de 1.8 Hybrid 122 PS yaygın; bazı ithal/pazar araçlarında 1.2 turbo görülebilir. İkinci nesil Türkiye ürününde 1.8 Hybrid 140 PS ve güncellenmiş güvenlik/multimedya bulunur. Üretim ile tescil geçişi nedeniyle 2023 ilanında nesil yalnız yıl üzerinden seçilmemelidir.',
        technicalAnalysis: 'Her iki nesilde e-CVT, kayışlı klasik CVT değildir; Toyota hibrit güç bölüşümlü transakstır. İlk nesil daha geniş ikinci el havuzu ve düşük giriş fiyatı; ikinci nesil daha güçlü hibrit, yeni güvenlik ve güncel kabin sunar. Kararı yalnız 122/140 HP üzerinden değil batarya raporu, kasko, görüş/bagaj ihtiyacı ve kullanım bütçesiyle verin.',
        engines: [
            { name: '1. nesil 1.8 Hybrid 122', character: 'Dördüncü nesil Toyota hibrit sistemi ve e-CVT.', idealUse: 'Şehir içi ekonomi, daha geniş ikinci el seçeneği.', checks: 'Batarya blokları/fan, inverter, fren, 12 V ve eski kullanım yoğunluğu.' },
            { name: '1. nesil 1.2 Turbo', character: 'Pazara göre manuel/CVT ve turbo benzinli.', idealUse: 'Hibrit istemeyen, doğru ithalat/parça kaydını doğrulayabilen alıcı.', checks: 'Motor/şanzıman kimliği, turbo, kurum/soğutma, CVT sıvısı ve parça erişimi.' },
            { name: '2. nesil 1.8 Hybrid 140', character: 'Güncellenmiş beşinci nesil hibrit, lityum-iyon batarya ve e-CVT.', idealUse: 'Daha güçlü hızlanma, güncel ADAS ve yeni araç hissi.', checks: 'Batarya/inverter, OTA-yazılım, radar/kamera, 12 V ve gövde altı.' },
        ],
        phoneQuestions: ['Araç 1. mi 2. nesil; üretim tarihi ve hibrit sistem gücü VIN’de nasıl görünüyor?', 'Yıllık hibrit sağlık kontrolü ve batarya raporları mevcut mu?', 'Ön cam/tampon, radar/kamera veya airbag işlemi ve kalibrasyon raporu var mı?', 'Araç şirket/filo veya yoğun şehir kullanımı gördü mü; iki anahtar mevcut mu?'],
        inspectionChecks: ['Hibrit batarya blok voltaj/sıcaklık farkı, fan ve hava kanalı, inverter soğutma ve izolasyon kodlarını okuyun.', 'Benzinli motorun soğuk çalışması, devreye giriş/çıkış, yağ-su seviyesi ve yakıt düzeltmesini kontrol edin.', 'Rejeneratif-hidrolik fren geçişi, disk korozyonu, 12 V akü ve elektrikli park frenini test edin.', 'Radar, kamera, kör nokta, eCall, multimedya ve airbag modüllerini gövde/cam onarımıyla eşleştirin.'],
        roadChecks: ['Elektrikli ilk hareket ve benzinli motorun soğuk-sıcak devreye girişi.', 'Yük altında devir-hız uyumu; transaks/rulman uğultusu ve inverter sıcaklığı.', 'Fren geçişi, direksiyon merkezleme ve arka görüşün kullanımınıza uygunluğu.', 'ADAS sistemlerinin güvenli testi, kabin gürültüsü ve lastik yuvarlanma sesi.'],
        ownership: 'İlk nesil satın alma fiyatı ve ilan çeşitliliğiyle, ikinci nesil güncel teknoloji ve performansla öne çıkar. Hibrit tüketim avantajı şehir oranı yükseldikçe belirginleşir. Büyük jant lastiği, kasko ve gövde parçası fiyatı hesaplanmalıdır. Batarya garantisi ve hibrit kontrol şartları aracın model yılına göre resmî servis kaydından doğrulanmalıdır.',
        redFlags: ['Batarya izolasyon/hücre dengesizliği veya soğutma fanının ihmal edilmesi.', 'Nesil, güç veya ithalat bilgisinin VIN ile uyuşmaması.', 'Ön yapı/airbag onarımı ve kalibrasyonsuz ADAS.', 'Transaks uğultusu, fren uyarısı ya da açıklanamayan su/yağ eksiltme.'],
        verdict: 'Bütçe ve teknoloji beklentisine göre iki nesil de alınabilir. Bakımlı ilk nesil değer odaklı; ikinci nesil daha güçlü ve günceldir. Hibrit batarya ölçümü, fren, 12 V, ADAS ve güvenli gövde test edilmeden yalnız düşük tüketim veya Toyota itibarıyla karar verilmemelidir.',
        sources: [
            { title: 'Toyota C-HR güncel teknik özellikleri', url: 'https://www.toyota.com.tr/araba-modelleri/c-hr/ozellikler' },
            { title: 'Yeni nesil Toyota C-HR resmî tanıtımı', url: 'https://www.toyota.com.tr/haberler-ve-etkinlikler/ikonik-suv-toyota-c-hr-in-yeni-nesli-dunya-promiyeri-ile-gosterildi' },
        ],
        faqs: [
            { question: 'Toyota C-HR 1. ve 2. nesil hangi yıllardır?', answer: 'Birinci nesil 2016-2023, ikinci nesil 2023’ten günümüzedir; geçiş aracında üretim/VIN esas alınır.' },
            { question: 'C-HR e-CVT kayışlı mı?', answer: 'Hibrit e-CVT kayışlı klasik CVT değildir; motor-jeneratörlü güç bölüşümlü transakstır.' },
            { question: 'C-HR hibrit batarya nasıl kontrol edilir?', answer: 'Blok voltaj ve sıcaklık farkı, fan/kanal, izolasyon, hata geçmişi ve sürüşte enerji davranışı birlikte ölçülür.' },
            { question: '122 HP mi 140 HP mi?', answer: '140 HP ikinci nesilde daha güçlü güncel sistemdir; ancak temiz geçmişli 122 HP araç bütçe ve şehir kullanımı için mantıklı olabilir.' },
            { question: 'C-HR uzun yola uygun mu?', answer: 'Uygundur; fakat arka görüş, kabin/bagaj ihtiyacı, yüksek hız sesi ve gerçek tüketim test sürüşünde değerlendirilmelidir.' },
        ],
    },
    {
        rank: 8, sales: '15.635 adet', model: 'Hyundai i20 BC3', relatedVehicleIds: [8],
        slug: 'hyundai-i20-bc3-alinir-mi-12-mpi-14-otomatik-10-tgdi-dct',
        title: 'Hyundai i20 BC3 Alınır mı? MPI Otomatik ve 1.0 T-GDI DCT Rehberi',
        excerpt: 'Üçüncü nesil i20 BC3’te 1.2 MPI, 1.4 MPI 6AT, 1.0 T-GDI 7DCT ve model yılı farklarını; kampanya, şanzıman ve ekspertiz testleriyle inceleyin.',
        identity: 'BC3 kodlu üçüncü nesil i20 Türkiye’de 2020’den günümüze üretilir; 2023/2024 çevresinde makyaj ve donanım güncellemeleri vardır. İkinci elde 1.2 MPI manuel, 1.4 MPI altı ileri tork konvertörlü otomatik, 1.0 T-GDI yedi ileri DCT ve performans i20 N görülebilir. Güncel ürün gamındaki güç değerleri önceki yıllarla aynı olmayabilir; 90/100 PS ayrımı model yılı ve teknik belgeyle yapılmalıdır.',
        technicalAnalysis: 'i20’nin güçlü yanı yerli üretim, şehir ölçüleri ve farklı otomatik seçenekleridir. 1.4 MPI 6AT ile 1.0 T-GDI 7DCT aynı “otomatik” değildir: ilki tork konvertörlü ve daha sakin, ikincisi turbo ve kuru çift kavramalı performans/verim odaklıdır. MPI’de tüketim-performans; T-GDI/DCT’de soğutma, ateşleme, kavrama ve kullanım biçimi dengelenmelidir.',
        engines: [
            { name: '1.2 MPI manuel', character: 'Dört silindirli atmosferik ve beş ileri manuel.', idealUse: 'Sade şehir otomobili ve düşük bakım karmaşıklığı.', checks: 'Bobin/buji, soğutma, debriyaj, yakıt düzeltmesi ve varsa LPG.' },
            { name: '1.4 MPI 6AT', character: 'Atmosferik motor ve tork konvertörlü altı ileri otomatik.', idealUse: 'Akıcı düşük hız ve klasik otomatik isteyenler.', checks: 'ATF kaydı, soğuk-sıcak D-R, kilitleme, soğutma ve tüketim beklentisi.' },
            { name: '1.0 T-GDI 7DCT', character: 'Üç silindirli turbo ve kuru çift kavramalı otomatik.', idealUse: 'Daha güçlü ara hızlanma ve verim isteyen karma kullanıcı.', checks: 'Kavrama/aktüatör, sıcak dur-kalk, turbo, ateşleme, yakıt pompası kampanyası.' },
        ],
        phoneQuestions: ['Motor 90/100 PS ve şanzıman 6AT/7DCT olarak VIN’de nasıl görünüyor?', '51DT07 yakıt pompası dahil açık/uygulanmış servis kampanyası var mı?', 'DCT kavrama/aktüatör veya 6AT sıvı/valf gövdesi işlemi yapıldı mı?', 'Ön cam, radar/kamera, airbag veya şasi onarımı ve kalibrasyon belgesi mevcut mu?'],
        inspectionChecks: ['VIN’i Hyundai servis sisteminde kampanya ve bakım geçmişi için sorgulayın; belirli üretim aralıklarındaki yakıt pompası işleminin tamamlandığını doğrulayın.', 'T-GDI’da soğuk rölanti/misfire, turbo basıncı, yağ ve soğutma; MPI’de yakıt düzeltmesi ve LPG varsa kompresyonu inceleyin.', 'DCT kavrama/uyarlama ve sıcak hata verisini; 6AT’de doğru ATF kaydı, D-R gecikmesi ve kilitlemeyi kontrol edin.', 'SmartSense/radar-kamera, eCall, ekran, klima, cam-kilit, 12 V akü ve airbag modüllerini tarayın.'],
        roadChecks: ['7DCT’de geri, rampa, sürünme ve tam sıcak dur-kalk; 6AT’de D-R ve vites küçültme.', 'T-GDI’da 1.500-3.500 devir yük altında tekleme/turbo; MPI’de klima açık tam yük.', 'Direksiyon merkezleme, fren, ön takım ve arka süspansiyon sesi.', 'Şerit takip, ön çarpışma desteği, kamera/sensör ve multimedya.'],
        ownership: '1.2 manuel en sade fakat performansı sınırlı; 1.4 6AT şehirde rahat fakat tüketimi yüksek olabilir; 1.0 T-GDI DCT daha canlı ve verimli fakat yoğun dur-kalkta kavrama rezervi ister. Büyük jant-lastik, kasko ve donanım paketi fiyat farkı toplam maliyete eklenmelidir. Filo/kiralama geçmişi olan örnekte çok sürücülü kullanım ayrıca araştırılır.',
        redFlags: ['Servis kampanyası veya motor/şanzıman kimliğinin doğrulanamaması.', 'Sıcak DCT kaçırması/arıza modu ya da 6AT’de uzun D-R gecikmesi.', 'Yük altında tekleme, yakıt basıncı hatası, hararet veya açıklanamayan su eksiltme.', 'Airbag/şasi onarımı ve kalibrasyonsuz SmartSense sistemi.'],
        verdict: 'i20 BC3 şehir kullanımı için güçlü bir adaydır. Sadelik için 1.2 manuel, klasik otomatik konforu için 1.4 6AT, performans/verim için testleri temiz 1.0 T-GDI DCT seçilebilir. “Otomatik i20” demek yetmez; 6AT ile 7DCT ayrımı kararın merkezindedir.',
        sources: [
            { title: 'Hyundai i20 Türkiye teknik özellikleri', url: 'https://www.hyundai.com/tr/tr/modeller/i20/ozellikler.html' },
            { title: 'Hyundai i20 resmî dijital broşürü', url: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/marketing/brochure/product/i20/i20-dijital-brosur.pdf' },
            { title: 'Hyundai i20 kullanıcı el kitabı', url: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/marketing/manual/yeni-i20./2023/yeni-i20-kullanim-kilavuzu.pdf' },
        ],
        faqs: [
            { question: 'i20 BC3 hangi yıllardır?', answer: 'Üçüncü nesil 2020’den günümüzedir; makyaj, güç ve donanım geçişleri VIN/üretim tarihinden doğrulanır.' },
            { question: 'i20 1.4 otomatik DCT mi?', answer: 'Hayır. Yaygın 1.4 MPI altı ileri tork konvertörlü otomatik; 1.0 T-GDI ise yedi ileri DCT ile görülür.' },
            { question: 'i20 1.0 T-GDI DCT alınır mı?', answer: 'Kampanya durumu, kavrama/uyarlama, sıcak test, turbo ve ateşleme verileri normalse değerlendirilebilir.' },
            { question: 'i20 yakıt pompası kampanyası nasıl kontrol edilir?', answer: 'Üretim aralığına göre değiştiği için VIN Hyundai yetkili servis sisteminde sorgulanmalı, işlem kaydı görülmelidir.' },
            { question: '1.2 MPI mi 1.0 T-GDI mı?', answer: '1.2 sadelik, 1.0 T-GDI performans ve tork sunar. Rota, şanzıman ihtiyacı ve bakım rezervi seçimi belirler.' },
        ],
    },
    {
        rank: 9, sales: '15.554 adet', model: 'Volkswagen Taigo', relatedVehicleIds: [12012],
        slug: 'volkswagen-taigo-alinir-mi-10-15-tsi-dsg',
        title: 'Volkswagen Taigo Alınır mı? 1.0 TSI, 1.5 TSI ACT ve DSG Rehberi',
        excerpt: 'Volkswagen Taigo’da 1.0 TSI 95/110/115, 1.5 TSI ACT 150 ve DSG seçeneklerini; DQ200, soğutma, ADAS, paket ve ekspertiz testleriyle inceleyin.',
        identity: 'Taigo 2021’den beri MQB A0 tabanlı coupe-SUV olarak satılır. Türkiye’de Life, Style ve R-Line paketleri; 1.0 TSI ve 1.5 TSI ACT motorları öne çıkar. Güç değerleri 95/110/115/150 PS olarak model yılına göre değişebilir. Yedi ileri DSG’nin kodu ve kavrama tipi VIN’den doğrulanmalıdır; paket adı teknik kimlik yerine geçmez.',
        technicalAnalysis: 'Taigo’nun artısı güncel güvenlik/bağlantı, yüksek oturuş hissi ve TSI-DSG pazar talebidir. 1.0 TSI ekonomik ve yeterli; 1.5 ACT daha güçlüdür. Her ikisinde doğrudan enjeksiyon, turbo, soğutma ve elektronik yönetim; DSG’de özellikle düşük hız kavraması önemlidir. Coupe tavan nedeniyle arka baş mesafesi ve görüş kişisel test ister.',
        engines: [
            { name: '1.0 TSI 95 manuel', character: 'Üç silindirli turbo ve manuel; güç değeri model yılına göre.', idealUse: 'Sadelik, şehir-kara yolu ve DSG istemeyenler.', checks: 'Soğutma/pompa, ateşleme, turbo-wastegate, debriyaj ve yağ standardı.' },
            { name: '1.0 TSI 110/115 DSG', character: 'Turbo üç silindir ve yedi ileri çift kavrama.', idealUse: 'Şehir konforu ile tüketim dengesi isteyenler.', checks: 'DQ200 kavrama/mekatronik, akü, geri-yokuş-sıcak dur-kalk ve soğutma.' },
            { name: '1.5 TSI ACT 150 DSG', character: 'Dört silindirli turbo, aktif silindir yönetimi ve güçlü ara hızlanma.', idealUse: 'Uzun yol, yük ve performans beklentisi yüksek kullanıcı.', checks: 'ACT geçişi, ateşleme, pompa-termostat, DSG, fren-lastik ve yazılım.' },
        ],
        phoneQuestions: ['1.0/1.5 TSI güç ve DSG kodu VIN çıktısında nedir?', 'DSG kavrama, mekatronik, yazılım veya akü/enerji yönetimi işlemi oldu mu?', 'Su pompası/termostat, antifriz eksiltme veya turbo/ateşleme işlemi var mı?', 'Ön cam/radar, IQ.Light, Travel Assist veya multimedya onarım-kalibrasyonu yapıldı mı?'],
        inspectionChecks: ['TSI motorda soğuk tekleme, yakıt düzeltmesi, turbo hedef-gerçek, pompa-termostat çevresi ve antifriz seviyesini inceleyin.', 'DSG kavrama aşınma/uyarlama, hidrolik basınç ve hata geçmişini akü/şarj testiyle birlikte okuyun.', '1.5 ACT’de silindir kapatma geçişi, 1.0’da üç silindirli normal titreşim ile motor kulağı/tekleme farkını ölçün.', 'Radar/kamera, LED far, dijital kokpit, multimedya, eCall, park sistemi ve airbag modüllerini tarayın.'],
        roadChecks: ['DSG geri manevra, rampa, sürünme, 1-2 ve tam sıcak dur-kalk.', '1.0 ve 1.5 TSI’da düşük devir tam yük, ateşleme ve turbo basıncı.', 'ACT geçişi, sabit hız, gaz kesme ve motor yeniden yük alma.', 'Direksiyon merkezleme, fren, ön takım, rüzgâr sesi ve arka görüş.'],
        ownership: '1.0 TSI çoğu günlük kullanıcıya yeterli ve verimli; 1.5 TSI yük/otoyol ve performansta rahattır. Büyük R-Line jantları lastik ve konfor maliyetini yükseltebilir. DSG kullanımında frende beklemek, yokuşta gazla tutmamak ve bakımı/onarımı belgelemek önemlidir. Dijital donanımların garanti ve kalibrasyon durumu kasko teklifine yansıyabilir.',
        redFlags: ['DSG kodu ve işlem faturasının belirsizliği veya sıcak arıza modu.', 'Soğutma suyu eksiltme, hararet, zincir/kayış ya da yağ basıncı şüphesi.', 'Ön yapı hasarı ve kalibrasyonsuz radar/kamera/far.', 'Kod silme izleri, eksik hazırlık monitörleri ve açıklanamayan düşük voltaj hataları.'],
        verdict: 'Taigo doğru motor ve belgeli DSG ile modern, likit bir B-SUV olabilir. 1.0 günlük ekonomi, 1.5 performans sunar. R-Line görüntüsünden önce sıcak DSG testi, soğutma, elektronik/ADAS ve gövde güvenliği değerlendirilmelidir.',
        sources: [
            { title: 'Volkswagen Taigo Türkiye model ve motor bilgileri', url: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/taigo.html' },
            { title: 'Taigo 1.0 TSI 115 DSG resmî tüketim etiketi', url: 'https://binekarac.vw.com.tr/idhub/content/dam/onehub_pkw/importers/tr/yakit-ekonomisi-co2-emisyonu/pdf-yakit-tuketim-etiketi/24_my_taigo_style_115_ps_dsg.pdf' },
        ],
        faqs: [
            { question: 'Taigo hangi yıllardır?', answer: 'Birinci nesil 2021’den günümüze uzanır; güç ve donanım model yılına göre VIN’den doğrulanır.' },
            { question: 'Taigo DSG kuru kavrama mı?', answer: 'Yaygın yedi ileri DSG uygulamasında şanzıman kodu ve kavrama tipi VIN’den kesinleştirilmelidir; yalnız DSG adına bakılmamalıdır.' },
            { question: '1.0 TSI Taigo’ya yeter mi?', answer: 'Günlük şehir-kara yolu kullanımına çoğunlukla yeterlidir; tam yük/otoyol beklentisi olan kişi 1.5’i test etmelidir.' },
            { question: '1.5 TSI ACT ne yapar?', answer: 'Düşük yükte belirli silindirleri devreden çıkarabilir; geçişin sarsıntısızlığı ve yazılım/ateşleme sağlığı kontrol edilir.' },
            { question: 'R-Line Taigo daha mı iyi?', answer: 'Donanım ve görünüm farklıdır; büyük jant, lastik ve konfor maliyeti düşünülmeli, mekanik geçmiş paketten önce gelmelidir.' },
        ],
    },
    {
        rank: 10, sales: '13.379 adet', model: 'Peugeot 2008 P24', relatedVehicleIds: [21],
        slug: 'peugeot-2008-p24-alinir-mi-puretech-eat8-bluehdi-elektrik',
        title: 'Peugeot 2008 P24 Alınır mı? PureTech, EAT8, BlueHDi ve E-2008',
        excerpt: 'İkinci nesil Peugeot 2008’de 1.2 PureTech EAT8, 1.5 BlueHDi, Hybrid eDCS6 ve E-2008 seçeneklerini; triger, AdBlue, batarya ve ekspertiz testleriyle inceleyin.',
        identity: 'P24 kodlu ikinci nesil Peugeot 2008 2019’da tanıtıldı ve 2023’te makyajlandı. Türkiye’de 1.2 PureTech 130 EAT8, 1.5 BlueHDi 130 EAT8, E-2008 136/156 ve daha yeni 48 V Hybrid 145 eDCS6 seçenekleri görülebilir. EAT8 tork konvertörlü otomatik, eDCS6 ise hibritle bütünleşik çift kavramalıdır; ikisini yalnız “otomatik” diye birleştirmeyin.',
        technicalAnalysis: '2008’in güçlü yanı tasarım, i-Cockpit ve geniş güç aktarma seçeneğidir. Risk analizi motor koduna bağlıdır. Bazı 1.2 PureTech sürümlerinde yağ içinde çalışan zamanlama kayışı ve doğru yağ standardı kritik; 1.5 BlueHDi’da emisyon/AdBlue ve zincir-donanım güncellemeleri; E-2008’de batarya/şarj; Hybrid’de 48 V ve eDCS6 kontrol edilir. Model adından genelleme yapmak yanıltır.',
        engines: [
            { name: '1.2 PureTech 130 EAT8', character: 'Üç silindirli turbo benzinli ve sekiz ileri tork konvertörlü otomatik.', idealUse: 'Karma kullanım, performans ve klasik otomatik isteyenler.', checks: 'Motor koduna göre zamanlama kayışı/zincir, doğru yağ, yağ basıncı, turbo ve EAT8.' },
            { name: '1.5 BlueHDi 130 EAT8', character: 'Torklu dizel, EAT8 ve SCR/AdBlue emisyon sistemi.', idealUse: 'Düzenli uzun yol ve yüksek yıllık kilometre.', checks: 'AdBlue/NOx, DPF/EGR, enjektör, turbo, motor koduna göre eksantrik zinciri ve EAT8.' },
            { name: 'E-2008 136/156', character: 'Tam elektrikli; batarya ve menzil model yılıyla güncellendi.', idealUse: 'Ev/iş şarjı ve öngörülebilir rota.', checks: 'Kullanılabilir enerji, hücre/izolasyon, AC/DC şarj, termal yönetim ve alt batarya.' },
            { name: 'Hybrid 145 eDCS6', character: '48 V hibrit, elektrik motorlu altı ileri çift kavrama.', idealUse: 'Şehir verimi ile benzinli esnekliğini birleştirmek isteyenler.', checks: '48 V batarya/DC-DC, eDCS6, yazılım, soğutma ve üretim kampanyaları.' },
        ],
        phoneQuestions: ['Motor ve şanzıman kodu; zamanlama kayışı/zincir tipi VIN’de nedir?', 'PureTech’te doğru yağ faturası ve kayış/yağ süzgeci kontrolü; BlueHDi’da AdBlue/NOx/DPF işlemi var mı?', 'E-2008’de batarya raporu, AC/DC şarj ve garanti; Hybrid’de 48 V/eDCS6 işlemi mevcut mu?', 'i-Cockpit, radar/kamera, ön cam veya ekran değişimi ve kalibrasyon belgesi var mı?'],
        inspectionChecks: ['PureTech’te yağ kapağından/uygun yöntemle kayış durumu, doğru yağ faturası, yağ basıncı geçmişi, karter süzgeci riski, turbo ve soğutmayı motor koduna göre inceleyin.', 'BlueHDi’da enjektör, turbo, DPF kül-kurum, EGR, AdBlue basınç/NOx ve motor koduna özgü zamanlama güncellemelerini kontrol edin.', 'EAT8’de doğru sıvı/kaçak, D-R ve kilitleme; eDCS6’da kavrama/48 V; elektriklide batarya/şarj modüllerini ayrı tarayın.', 'i-Cockpit ekranı, multimedya, kamera/radar, eCall, park sistemi, klima ve airbag modüllerini kontrol edin.'],
        roadChecks: ['EAT8’de soğuk-sıcak D-R, vites küçültme ve kilitleme; eDCS6’da düşük hız/geçiş.', 'PureTech’te yük altında yağ basıncı/tekleme/turbo; BlueHDi’da duman ve emisyon verisi.', 'E-2008’de rejenerasyon, güç teslimi, klima açık tüketim ve şarj sonrası uyarı.', 'Direksiyon, fren, ön takım, i-Cockpit görüş ergonomisi ve ADAS.'],
        ownership: 'PureTech adayı doğru yağ ve zamanlama belgesi olmadan ucuz sayılmaz. BlueHDi kısa mesafede emisyon maliyeti yaratabilir. E-2008 ev/iş şarjı varsa işletme avantajı sağlayabilir; batarya garantisi 8 yıl/160.000 km olarak duyurulmuştur, fiilî araç şartı teyit edilir. Hybrid daha yeni olduğu için uzun dönem veri sınırlıdır; garanti/yazılım ve doğru teşhis önemlidir. EAT8 bakımını “ömürlük” varsaymayın; üretici/uzman prosedürüyle durum tespiti yapın.',
        redFlags: ['PureTech’te kayış parçalanması, düşük yağ basıncı veya belgesiz yanlış yağ kullanımı.', 'BlueHDi emisyon iptali, AdBlue/NOx arızası veya açıklanamayan zincir sesi.', 'Elektrikli batarya altında darbe, izolasyon veya AC/DC şarj arızası.', 'Şanzıman arıza modu, airbag/şasi onarımı veya kalibrasyonsuz ADAS.'],
        verdict: 'Peugeot 2008 P24 tek bir motorla değerlendirilmemelidir. Belgeli PureTech/EAT8 karma kullanımda, sağlıklı BlueHDi uzun yolda, ölçümlü E-2008 şarjı uygun kullanıcıda mantıklıdır. Motor kodu ve zamanlama yapısı kesinleşmeden 1.2 PureTech için genel “kayışlı” veya “zincirli” hükmü vermeyin.',
        sources: [
            { title: 'Peugeot 2008 Türkiye resmî model bilgileri', url: 'https://www.peugeot.com.tr/peugeot-modelleri/2008.html' },
            { title: 'Peugeot 2008 motor ve E-2008 teknik duyurusu', url: 'https://basin.peugeot.com.tr/yeni-peugeot-2008-turkiyede' },
            { title: 'Peugeot 2008 resmî teknik broşürü', url: 'https://www.peugeot.com.tr/content/dam/peugeot/turkey/b2c/bro%C5%9F%C3%BCrler/2023/agustos/2008SUV_ModelBrosuru.pdf' },
        ],
        faqs: [
            { question: 'Peugeot 2008 P24 hangi yıllardır?', answer: 'İkinci nesil 2019’dan günümüzedir; 2023 makyajı ve motor geçişleri VIN’den doğrulanır.' },
            { question: '2008 EAT8 çift kavrama mı?', answer: 'Hayır. EAT8 tork konvertörlü sekiz ileri otomatik; yeni hibritteki eDCS6 farklı, çift kavramalı sistemdir.' },
            { question: 'Her 1.2 PureTech yağ içinde kayışlı mı?', answer: 'Hayır; motor kodu ve model yılına göre yapı değişebilir. VIN ve resmî teknik belgeyle kayış/zincir kesinleştirilmelidir.' },
            { question: 'E-2008 batarya garantisi nedir?', answer: 'Peugeot duyurusunda 8 yıl/160.000 km belirtilir; satın alınacak aracın başlangıç ve kapasite koruma şartları VIN ile teyit edilmelidir.' },
            { question: '1.5 BlueHDi şehir içine uygun mu?', answer: 'Sürekli kısa mesafe DPF/EGR/SCR çalışma koşullarını zorlayabilir; düzenli uzun yol yapan kullanıcı için daha anlamlıdır.' },
        ],
    },
];

const modelGuides = profiles.map(buildModelGuide);

const hubGuide: Guide = {
    slug: 'turkiyede-en-cok-satan-10-otomobil-2026-hangisi-alinir',
    title: 'Türkiye’de En Çok Satan 10 Otomobil 2026: Hangisi Alınır?',
    excerpt: 'Ocak-Ağustos 2026 satışlarında öne çıkan Clio, Corolla, Megane, T10X, Duster, Egea, C-HR, i20, Taigo ve 2008’i kullanım ve risk açısından karşılaştırın.',
    category: 'Karşılaştırmalı Satın Alma Rehberi',
    readTime: '12 dk',
    publishDate: updatedDate,
    updatedDate,
    relatedVehicleIds: [1, 3, 4, 11, 12011, 2, 15016, 162, 8, 12012, 21],
    keyTakeaways: [
        'Çok satılan model otomatik olarak en sorunsuz model değildir; kampanya, filo ve yerli üretim satış adedini etkiler.',
        'Şehir içi için hibrit/benzinli, yüksek uzun yol kilometresi için sağlıklı dizel, düzenli şarjı olan kullanıcı için elektrikli seçenek öne çıkabilir.',
        'Aynı modelde motor ve şanzıman değişince risk profili tamamen değişebilir; VIN doğrulaması her karşılaştırmanın ilk adımıdır.',
        'Satış sıralaması Ocak-Ağustos 2026 anlık görüntüsüdür ve yıl sonunda değişebilir.',
    ],
    howToSteps: [
        { name: 'Kullanım profilini yazın', text: 'Yıllık kilometre, kısa yol oranı, şarj olanağı, yolcu-yük ve otomatik ihtiyacını belirleyin.' },
        { name: 'Üç aday seçin', text: 'Gövde ve yakıt türü ihtiyacınıza uyan üç modeli satış sırasından bağımsız kısa listeye alın.' },
        { name: 'Motoru kesinleştirin', text: 'Her adayda motor, şanzıman, nesil ve donanımı VIN ile doğrulayın.' },
        { name: 'Toplam maliyeti hesaplayın', text: 'Fiyatın yanına yakıt/enerji, kasko, lastik, bakım ve risk rezervini ekleyin.' },
        { name: 'Aynı rotada test edin', text: 'Kısa listedeki araçları aynı yol, yük ve sıcaklık koşullarında sürün.' },
        { name: 'Bağımsız ekspertiz yaptırın', text: 'Seçilen aracı soğuk motor, tam sıcak aktarım ve üretici uyumlu cihazla kontrol ettirin.' },
    ],
    faqs: [
        { question: '2026’da Türkiye’de en çok satan otomobil hangisi?', answer: 'Ocak-Ağustos 2026 model bazlı sıralamasında Renault Clio 31.643 adetle ilk sıradadır. Dönem ilerledikçe rakamlar değişebilir.' },
        { question: 'En çok satan otomobil en sorunsuz otomobil midir?', answer: 'Hayır. Satış; fiyat, kampanya, filo, üretim ve bulunabilirlikten etkilenir. Güvenilirlik motor-şanzıman ve bakım geçmişiyle değerlendirilir.' },
        { question: 'Şehir içinde hangi yakıt türü mantıklı?', answer: 'Kısa ve yoğun şehir kullanımında uygun benzinli, tam hibrit veya düzenli şarj edilebilen elektrikli çoğu kullanıcı için dizelden daha uyumludur.' },
        { question: 'İkinci elde çok satılan modelin avantajı nedir?', answer: 'İlan, parça, servis tecrübesi ve sonraki satış talebi geniş olabilir; bu durum kötü geçmişli bireysel aracı iyi yapmaz.' },
        { question: 'Bu 10 model arasında nasıl seçim yapılır?', answer: 'Önce kullanım ve gövde ihtiyacıyla üç aday seçin; sonra toplam maliyet, motor riski, test sürüşü ve bağımsız ekspertizle eleyin.' },
    ],
    content: `## 2026 Satış Sıralaması Ne Anlatıyor?

ODMD verilerinden derlenen Ocak-Ağustos 2026 model satışları, Türkiye’de hangi otomobillerin hızlı büyüyen araç parkına sahip olduğunu gösteriyor. Bu veri “en iyi otomobil” sıralaması değildir. Fiyat kampanyaları, kurumsal filo alımları, yerlilik, vergi dilimi, teslimat kapasitesi ve yeni model lansmanı sonucu güçlü biçimde etkiler.

| Sıra | Model | Ocak-Ağustos satış | En güçlü kullanım senaryosu | Ana ikinci el kontrolü |
|---|---|---:|---|---|
${profiles.map((profile) => {
    const guideLink = `/rehber/${profile.slug}`;
    const use = profile.engines[0].idealUse;
    const check = profile.engines[0].checks;
    return `| ${profile.rank} | [${profile.model}](${guideLink}) | ${profile.sales} | ${use} | ${check} |`;
}).join('\n')}

Satış adedi güçlü ikinci el likiditesi, yaygın servis bilgisi ve geniş parça ekosistemi için olumlu işaret olabilir. Öte yandan filo oranı, taksi kullanımı, çok sürücülü geçmiş ve hızlı el değiştirme olasılığı da artabilir. Bu yüzden sıralamayı aday havuzu oluşturmak için kullanın; ekspertizin yerine koymayın.

## Kullanıma Göre Kısa Liste

### Kısa Şehir İçi ve Düşük Yıllık Kilometre

Clio 1.0 TCe manuel, i20 MPI ve Egea 1.4 Fire gibi sade benzinliler; performans beklentisi doğru ayarlanırsa öngörülebilir olabilir. Corolla veya C-HR tam hibrit, şehir içi dur-kalkta elektrik desteği ve rejenerasyonla tüketim avantajı sunar. Dizel motor yalnız ucuz yakıt hesabıyla seçilmemelidir; kısa rota motoru çalışma sıcaklığına ulaştırmıyorsa DPF rejenerasyonu zorlaşabilir.

### Yüksek Yıllık Kilometre ve Uzun Yol

Megane/Egea dizel veya geçmişi sağlıklı başka bir uzun yol seçeneği tüketimde avantaj sağlayabilir. Karşılığında enjektör, turbo, EGR, DPF ve SCR/AdBlue riski fiyatlandırılır. Düzenli uzun yol görmüş, yağ ve yakıt filtresi kaydı olan araç; kilometresi daha düşük fakat sürekli kısa mesafe kullanılan dizelden daha iyi aday olabilir.

### Otomatik Şanzıman Önceliği

“Otomatik” tek teknoloji değildir. i20 1.4’te tork konvertörlü 6AT, Taigo’da çift kavramalı DSG, Clio’da X-Tronic veya EDC, Corolla benzinlide Multidrive S, hibritte e-CVT, Peugeot 2008’de EAT8 bulunabilir. Her birinin normal sürüş karakteri, sıvısı ve arıza testi farklıdır. Tam sıcak yol testi yapılmadan otomatik araç seçmeyin.

### Elektrikli Kullanıma Hazır Olanlar

T10X veya E-2008; ev/iş şarjı, günlük rota ve kasko koşulları uygunsa anlamlıdır. İkinci elde batarya sağlığı yalnız gösterge menziliyle ölçülmez. Hücre dengesi, kullanılabilir enerji, izolasyon, termal yönetim, AC/DC şarj ve alt batarya muhafazası birlikte kontrol edilir. Dijital hesap ve uygulama sahipliği satışta devredilmelidir.

### SUV Görünümü ve Aile Kullanımı

Duster geniş kullanım ve yerden yükseklik; C-HR hibrit şehir verimi; Taigo kompakt coupe-SUV sürüşü; 2008 farklı motor seçenekleri sunar. Yüksek oturma her zaman geniş arka koltuk veya büyük bagaj değildir. Çocuk koltuğu, bebek arabası ve gerçek yolcularla fiziksel prova yapın; katalog litresini tek başına kullanmayın.

## Beş Yıllık Toplam Maliyet Nasıl Hesaplanır?

Toplam maliyet = satın alma ve finansman + yakıt/enerji + periyodik bakım + lastik/fren/akü + vergi/sigorta/kasko + beklenen büyük onarım − tahmini satış değeri. Üç senaryo kurun: iyimser, gerçekçi ve kötü. Yakıt fiyatı, yıllık kilometre ve sahiplik süresi değiştiğinde seçimin hâlâ mantıklı kalıp kalmadığını görün.

Hibritte batarya, dizelde emisyon, çift kavramada kavrama/mekatronik, elektriklide batarya/şarj, turbo benzinlide soğutma-zamanlama rezervi düşünülür. Rezerv “kesin arıza olacak” anlamına gelmez; belirsizliği finansal karara dahil eder. Araç fiyatının tamamını ödeyip ilk bakım ve lastik için bütçesiz kalmak, iyi modeli kötü sahiplik deneyimine dönüştürebilir.

## İlan Eleme Protokolü

1. VIN, ruhsat, motor, şanzıman, üretim tarihi ve fabrika donanımını eşleştirin.
2. Muayene, servis, fatura, hasar ve eski ilan kilometrelerini zaman çizelgesine koyun.
3. Taksi, filo, kiralama, ithalat veya ağır kullanım geçmişini açıkça sorun.
4. Soğuk çalıştırmaya ve bağımsız ekspertize izin vermeyen ilanı eleyin.
5. Motor/şanzıman türüne uygun canlı veriyi okuyun; sadece genel hata koduna bakmayın.
6. En az 30 dakika sürüp motor/aktarım tam sıcakken geri, yokuş ve dur-kalk testini tekrarlayın.
7. Podye, direk, taban, tavan, airbag/kemer ve ADAS kalibrasyonunu dış panel boyasından önce değerlendirin.
8. Temiz emsalden acil bakım, yakın sarf, belgeli onarım ve belirsizlik rezervini düşerek teklif verin.

## Hangi Modeli Seçmelisiniz?

Tek doğru yoktur. Şehir ve likidite için Clio/i20; sedan ve aile kullanımı için Corolla/Megane/Egea; elektrikli altyapısı hazır kullanıcı için T10X; hibrit şehir SUV’u için C-HR; değişken yol için Duster; kompakt Avrupa B-SUV deneyimi için Taigo/2008 kısa listeye girebilir. Ardından model rehberindeki motor ayrımını uygulayın.

En çok satan otomobil, sizin rotanızda en düşük toplam maliyeti sunmuyorsa doğru otomobil değildir. Satış rakamını başlangıç sinyali, VIN ve ekspertizi karar kanıtı olarak kullanın.

## Kaynak ve Dönem Notu

- [ODMD otomobil ve hafif ticari araç pazar raporları](${odmdMarketPage})
- Model teknik bilgileri her ayrıntılı rehberde ilgili üreticinin resmî sayfası ve broşürüyle kaynaklandırılmıştır.

Bu liste Ocak-Ağustos 2026 döneminin anlık görüntüsüdür. Model sırası ve adetler sonraki aylarda değişebilir; teknik özelliklerde satın alınacak aracın VIN, üretim tarihi ve güncel resmî belgesi esas alınmalıdır.`,
};

export const topSellingGuides: Guide[] = [hubGuide, ...modelGuides];
