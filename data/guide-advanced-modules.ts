interface ModelGuideProfile {
    identity: string;
    phoneQuestions: string[];
    coldChecks: string[];
    roadChecks: string[];
    walkAway: string[];
    scenario: string;
}

const modelProfiles: Record<string, ModelGuideProfile> = {
    'hyundai-tucson-nx4-ne-demek-hangi-yillar': {
        identity: 'NX4 adı dördüncü nesli belirtir; üretim yılı, makyaj dönemi, 4x2/4x4 sistemi ve 1.6 T-GDI, CRDi ya da hibrit güç aktarması VIN veri kartından ayrılmalıdır.',
        phoneQuestions: ['Hibritte yüksek voltaj batarya/soğutma kampanyası ve sağlık raporu var mı?', 'DCT ise kavrama veya mekatronik işlemi; dizelse DPF rejenerasyon geçmişi var mı?', 'Ön cam, radar ya da kamera değiştiyse ADAS kalibrasyonu belgelendi mi?'],
        coldChecks: ['Soğuk marşta zincir, turbo ve yüksek basınç yakıt sesini dinleyin.', '7DCT’de soğuk D-R ve ilk kalkış; hibritte benzinli motorun devreye girişini izleyin.', 'Tüm modülleri tarayıp kod silme sonrası hazırlık ve akü voltajını kontrol edin.'],
        roadChecks: ['Dur-kalk ve yokuşta DCT kavrama titremesi', '80-110 km/s sabit hızda rüzgâr/aktarma uğultusu', 'Şerit takip, kör nokta ve adaptif hız sabitleyicinin güvenli koşulda uyarı işlevi'],
        walkAway: ['Açıklanamayan hararet veya su eksiltme', 'ADAS arızasıyla birlikte ön yapı onarımı', 'Hibrit yüksek voltaj sisteminde darbe ya da izolasyon hatası'],
        scenario: 'Şehir içinde kullanılacak iki adaydan düşük kilometreli DCT’nin kavrama verisi sınırda, biraz daha yüksek kilometreli hibritin batarya raporu ve servis zinciri tam ise kilometre tek başına ilk aracı üstün yapmaz.',
    },
    'kia-sportage-nq5-ne-demek-hangi-yillar': {
        identity: 'NQ5 beşinci nesil Sportage kodudur. Türkiye’de 1.6 T-GDI, dizel ve hibrit/48V kombinasyonları donanım yılına göre değişebildiği için motor, DCT ve çekiş sistemi VIN ile doğrulanmalıdır.',
        phoneQuestions: ['7DCT kavrama/mekatronik güncellemesi veya onarımı oldu mu?', '48V ya da tam hibritte akü ve DC-DC kayıtları mevcut mu?', 'Panoramik tavan drenajı, ekran veya kamera için servis işlemi yapıldı mı?'],
        coldChecks: ['12V akü zayıflığının oluşturduğu geçici modül hatalarını ayırın.', 'Turbo-soğutma hatlarını ve genleşme kabını motor soğukken inceleyin.', 'DCT sıcaklığı, kavrama uyarlaması ve tüm ADAS hata geçmişini okuyun.'],
        roadChecks: ['Park manevrası ve rampada kavrama davranışı', 'Bozuk yolda büyük jant ve süspansiyon sesi', 'Hibritte rejeneratif ve hidrolik fren geçişinin tutarlılığı'],
        walkAway: ['Yüksek voltaj izolasyon hatası', 'Şasi onarımıyla uyumsuz radar/kamera kalibrasyonu', 'Sıcakken belirgin DCT kaçırma veya arıza modu'],
        scenario: 'Aynı fiyatta gösterişli büyük jantlı fakat lastikleri bitmiş araçla, küçük jantlı ve bakımı belgeli araç karşılaştırılırken dört lastik ve süspansiyon maliyeti teklif hesabına eklenmelidir.',
    },
    'volkswagen-passat-b9-ne-demek-hangi-yillar': {
        identity: 'Avrupa B9, 2024 model yılıyla ağırlıkla Variant gövdeye geçen nesildir. İlanlarda B8.5 ile karıştırılabildiğinden VIN, gövde ve MQB evo donanımı doğrulanmalıdır.',
        phoneQuestions: ['eTSI’de 48V akü, kayış marş-jeneratörü veya yazılım işlemi var mı?', 'PHEV ise şarj kablosu ve batarya garanti/sağlık kaydı mevcut mu?', 'DSG yağ bakımı ve üretici kampanyaları tamamlandı mı?'],
        coldChecks: ['12V/48V sistem voltajlarını ve enerji yönetimi kodlarını okuyun.', 'DSG’nin soğuk kavramasıyla motorun yeniden çalışmasını ayrı ayrı izleyin.', 'Dijital kokpit, bilgi-eğlence ve çevrimiçi servisleri tüm kullanıcı profilleriyle deneyin.'],
        roadChecks: ['Düşük hız DSG ve start-stop geçişi', 'Sabit hızda silindir kapama/eTSI geçişlerinin sarsıntısızlığı', 'Travel Assist, radar ve direksiyon algısının güvenli kontrolü'],
        walkAway: ['VIN’in B8.5/B9 beyanıyla uyuşmaması', 'PHEV batarya altında darbe ve izolasyon hatası', 'Eksik dijital anahtar veya mülkiyeti devredilemeyen bağlı hesap'],
        scenario: 'Yeni nesilde düşük kilometre tek başına yeterli değildir; yazılım kampanyaları tamamlanmış, iki anahtarlı ve tüm dijital hesapları devredilebilen araç kullanım riskini azaltır.',
    },
    'honda-civic-fe1-ne-demek-hangi-yillar': {
        identity: 'FE1 Türkiye’de on birinci nesil sedan aramasında kullanılır; 1.5 VTEC Turbo, Eco/LPG uygulaması ve donanım seviyesi ruhsatla birlikte VIN üzerinden okunmalıdır.',
        phoneQuestions: ['LPG sistemi fabrika/ithalatçı uygulaması mı; supap ve yakıt ayarı kaydı var mı?', 'CVT sıvısı hangi ürünle, hangi kilometrede değişti?', 'Ön radar/kamera veya direksiyon sistemiyle ilgili kampanya tamamlandı mı?'],
        coldChecks: ['Yağ seviyesi, yakıt kokusu, soğutma ve turbo hatlarına bakın.', 'Benzin ve LPG’de yakıt düzeltmesi/misfire verisini karşılaştırın.', 'CVT sıvı sıcaklığı, oran hedefi ve kalıcı kodları okuyun.'],
        roadChecks: ['Hafif ve tam gazda CVT oranının tutarlılığı', 'Direksiyon merkezleme ve yapışma hissi', 'LPG geçişi, yokuş yükü ve sıcak yeniden çalışma'],
        walkAway: ['Airbag/ADAS hilesi', 'CVT’de metalik uğultu ve basınç kodu', 'LPG’de düşük kompresyon veya açıklanamayan supap işlemi'],
        scenario: 'LPG tasarrufu ancak benzin sisteminin de sağlıklı, kalibrasyonun doğru ve supap takibinin belgeli olmasıyla anlamlıdır; sadece kilometre başına yakıt hesabı karar verdirmez.',
    },
    'seat-arona-10-tsi-dsg-alinir-mi-kronik-sorunlar': {
        identity: 'Arona’da 1.0 TSI güç sürümü, motor kodu, 5/6 ileri manuel veya DQ200 7 ileri DSG ve makyaj dönemi VIN’den çıkarılmalıdır.',
        phoneQuestions: ['DSG kavrama, mekatronik veya yazılım işlemi oldu mu?', 'Su pompası/termostat modülü ve soğutma sıvısı kaydı var mı?', 'Akü değişiminde enerji yönetimi tanıtımı yapıldı mı?'],
        coldChecks: ['1.0 TSI’da soğuk tekleme, wastegate sesi ve soğutma kaçağını araştırın.', 'DSG kavrama değerleri ile hata geçmişini silinmeden okuyun.', 'Ekran, SOS/eCall ve park sensörü dahil tüm modülleri tarayın.'],
        roadChecks: ['Geri manevra, rampa ve yoğun dur-kalk DSG testi', '1.500-2.500 devir yük altında tekleme/basınç kontrolü', 'Bozuk zeminde ön takım ve bagaj trim sesi'],
        walkAway: ['Sıcakken kavrama kaçırması', 'Soğutma suyu eksiltme ile hararet geçmişi', 'Şasi onarımı ve airbag hata geçmişi'],
        scenario: 'DSG’li adayın şehir içi rahatlığı, yoğun dur-kalkta kavrama maliyetiyle; manuel adayın daha sade yapısı ise kullanım konforuyla birlikte tartılmalıdır.',
    },
    'opel-astra-h-mi-astra-j-mi-farklari': {
        identity: 'Astra H ve J ayrı platform ve ağırlık sınıfıdır; kasa adı motorun güvenilirliğini tek başına belirlemez. Motor kodu, şanzıman ve donanım VIN’den ayrılmalıdır.',
        phoneQuestions: ['Benzinlide LPG-supap/termostat; dizelde DPF-enjektör geçmişi nedir?', 'Easytronic veya otomatik şanzımanda hangi bakım/onarım yapıldı?', 'CIM, direksiyon veya elektrik modülü işlemi oldu mu?'],
        coldChecks: ['H’de CIM/direksiyon, J’de elektronik ve soğutma modüllerini tarayın.', 'Motor koduna göre triger/zincir ve yağ basıncı geçmişini inceleyin.', 'LPG varsa benzin ve gazda kompresyon/yakıt düzeltmesini karşılaştırın.'],
        roadChecks: ['Kasa ağırlığına göre motor performansı ve debriyaj yükü', 'Şanzıman tipine özgü sıcak-soğuk geçiş', 'Direksiyon merkezleme, ön takım ve fren davranışı'],
        walkAway: ['Hararet veya yağ basıncı geçmişi', 'Robotize şanzımanda kalibrasyon dışı ağır vuruntu', 'Taşıyıcı yapı/airbag onarımının gizlenmesi'],
        scenario: 'Daha yeni J her zaman daha iyi değildir; kullanımınız sade 1.6 manuel gerektiriyorsa bakımlı H, geçmişi belirsiz turbo-dizel otomatik J’den daha öngörülebilir olabilir.',
    },
    'ford-focus-3-powershift-alinir-mi-kronik-sorunlar': {
        identity: 'Focus Mk3/Mk3.5 içinde birden çok PowerShift ailesi vardır; ıslak/kuru kavrama ayrımı motor ve şanzıman koduyla yapılmadan tavsiye verilemez.',
        phoneQuestions: ['Şanzıman kodu, kavrama/TCM/mekatronik faturası nedir?', '1.0 EcoBoost ise doğru yağ ve triger sistemi geçmişi belgeli mi?', 'Dizelde DPF, enjektör ve turbo işlemi oldu mu?'],
        coldChecks: ['Akü-şarj voltajıyla TCM haberleşmesini birlikte test edin.', 'Soğuk D-R ve ilk kalkışı kaydedip sıcak testte tekrarlayın.', 'Motor koduna göre yağ basıncı, soğutma ve emisyon canlı verisini okuyun.'],
        roadChecks: ['Yokuş ve geri manevrada kavrama titremesi', 'Sabit hızda konvertör/kavrama benzeri devir dalgası', 'Tam ısındığında dur-kalk ve yeniden çalışma'],
        walkAway: ['Şanzıman kodunun/faturasının belirsizliği', 'TCM haberleşme kaybı veya arıza modu', 'Hararet ya da yağ basıncı uyarısı geçmişi'],
        scenario: '“PowerShift yeni yapıldı” sözü; parça numarası, iş emri, yazılım-kalibrasyon ve garanti belgesi olmadan değer taşımaz. Onarım sonrası uzun test şarttır.',
    },
    'honda-civic-fb7-ne-demek-alinir-mi': {
        identity: 'FB7 Türkiye’de dokuzuncu nesil sedan için kullanılan koddur; 1.6 i-VTEC manuel/klasik otomatik, fabrika Eco/LPG ve donanım düzeyi VIN ile doğrulanmalıdır.',
        phoneQuestions: ['Supap ayarı, LPG filtre/kalibrasyon ve kompresyon kaydı var mı?', 'Otomatik şanzıman sıvısı Honda şartnamesiyle değişti mi?', 'Direksiyon, motor kulağı veya klima işlemi yapıldı mı?'],
        coldChecks: ['İlk marş, supap sesi, motor kulağı titreşimi ve klima yükünü gözleyin.', 'Benzin/LPG yakıt düzeltmesi ile misfire sayacını kıyaslayın.', 'Otomatikte soğuk-sıcak D-R ve 2-3 geçişini deneyin.'],
        roadChecks: ['LPG’de yük altında tekleme', 'Direksiyon düz gidiş ve arka lastik aşınması', 'Yüksek hızda yol sesi, fren ve şanzıman kilitlemesi'],
        walkAway: ['Düşük kompresyon veya yanmış supap bulgusu', 'Hararet geçmişi', 'Airbag/kemer işlemiyle ağır gövde onarımı'],
        scenario: 'Fabrika çıkışlı Eco etiketi bakım gereksinimini ortadan kaldırmaz; LPG faturası ve düzenli supap ayarı, etiketten daha değerlidir.',
    },
    'toyota-corolla-e150-ne-demek-multimode-alinir-mi': {
        identity: 'E140/E150 ailesinde gövde-pazar ve makyaj farkları bulunur. 1.6 benzinli, 1.4 D-4D ve M/M robotize şanzıman VIN ile kesinleştirilmelidir.',
        phoneQuestions: ['M/M’de aktüatör, kavrama ve kalibrasyon faturası var mı?', '1.4 D-4D’de enjektör, turbo, EGR/DPF geçmişi nedir?', 'Benzinli/LPG’de yağ tüketimi ve supap kontrolü yapıldı mı?'],
        coldChecks: ['M/M akü voltajı, kavrama temas noktası ve aktüatör kodlarını okuyun.', 'Dizelde enjektör düzeltmesi ve çalışma sıcaklığını izleyin.', 'Soğutma, yağ seviyesi ve gövde altını araç soğukken inceleyin.'],
        roadChecks: ['Robotize vites kesintisini gerçek arızadan ayıran farklı gaz kullanımları', 'Yokuş-kalkış ve geri manevra', 'Fren, direksiyon ve arka süspansiyon sesi'],
        walkAway: ['Kalibrasyon yapılamayan veya sürekli N’ye düşen M/M', 'Kilometre/servis zinciri uyuşmazlığı', 'Hararet veya ağır yapısal onarım'],
        scenario: 'M/M’nin normal vites kesintisini otomatik konforu bekleyerek “arıza” saymak da, aşırı vuruntuyu karakter diye kabul etmek de yanlıştır; bilen uzmanla sürüş gerekir.',
    },
    'renault-megane-2-mi-megane-3-mu-farklari': {
        identity: 'Megane 2 ve 3 farklı elektronik mimari ve güvenlik düzeylerindedir. 1.5 dCi enjektör/turbo/DPF ayrıntıları motor kodu ve emisyon yılına göre değişir.',
        phoneQuestions: ['dCi’de yağ aralığı, enjektör/turbo ve DPF geçmişi nedir?', 'EDC/otomatik ya da manuel debriyaj-volan işlemi oldu mu?', 'Kart, direksiyon kilidi, cam ve klima elektroniklerinde işlem var mı?'],
        coldChecks: ['Soğuk dCi marşını, enjektör düzeltmesini ve rail basıncını kaydedin.', 'Karter havalandırması, turbo hortumu ve yağ kaçağını inceleyin.', 'UCH, kart ve direksiyon kilidi dahil tüm modülleri tarayın.'],
        roadChecks: ['Alt devir turbo tepkisi ve duman', 'Volan/kavrama veya EDC sıcak davranışı', 'Ön takım, direksiyon ve elektrikli park freni işlevi'],
        walkAway: ['Düşük yağ basıncı veya metal talaşı bulgusu', 'Açıklanamayan enjektör/turbo zinciri', 'Kart/immobilizer ve VIN uyuşmazlığı'],
        scenario: 'Megane 3 daha yeni ve güvenli olabilir; fakat kısa mesafede kullanılacak bakımsız dCi yerine bakımı kanıtlı benzinli Megane 2 toplam maliyette daha doğru olabilir.',
    },
    'volkswagen-passat-b7-ne-demek-b8-farklari': {
        identity: 'B7, B6 tabanlı kapsamlı yenileme; B8 ise MQB tabanlı yeni nesildir. TSI/TDI ve DSG kodları model adından bağımsız doğrulanmalıdır.',
        phoneQuestions: ['DSG kodu ve yağ/kavrama-mekatronik geçmişi nedir?', 'TSI’da zincir veya kayış sistemi ve yağ tüketimi kaydı var mı?', 'TDI’da EGR, DPF, AdBlue ve su pompası işlemi oldu mu?'],
        coldChecks: ['Motor koduna göre zamanlama ve yağ basıncı kontrolü yapın.', 'DSG hata, uyarlama ve sıcaklık verilerini silinmeden okuyun.', 'B8’de radar, dijital ekran ve elektronik park freni modüllerini tarayın.'],
        roadChecks: ['DSG geri-yokuş-dur kalk testi', 'Sabit hızda volan/konvertör benzeri titreşim', 'ADAS, direksiyon ve fren merkezleme'],
        walkAway: ['Motor/şanzıman kodu beyanıyla VIN uyuşmazlığı', 'Yağ basıncı veya hararet geçmişi', 'Ağır ön yapı onarımı ve kalibrasyonsuz radar'],
        scenario: 'Donanımlı fakat geçmişi kopuk B8 yerine, doğru motor-DSG bakımı belgeli B7 daha öngörülebilir olabilir; nesil farkı bakım kanıtının önüne geçmez.',
    },
    'volkswagen-polo-6r-6c-ne-demek-farklari': {
        identity: '6R ilk dönem, 6C makyajlı dönem için kullanılan yaygın kodlardır. Motor ailesi ve DSG sürümü üretim tarihine göre ayrılmalıdır.',
        phoneQuestions: ['TSI zamanlama sistemi ve su pompası geçmişi nedir?', 'DQ200 kavrama/mekatronik işlemi belgeli mi?', 'Dizelde DPF/EGR ve şehir içi kullanım oranı nedir?'],
        coldChecks: ['Soğuk motor sesi ve yakıt düzeltmelerini okuyun.', 'DSG’de kavrama uyarlaması, akü voltajı ve hata geçmişini inceleyin.', 'Klima, kapı kilidi, cam ve multimedya donanımını tek tek deneyin.'],
        roadChecks: ['Rampa/geri manevrada DSG', '1.0/1.2 TSI yük altında tekleme', 'Ön takım, direksiyon ve küçük jant/büyük jant konfor farkı'],
        walkAway: ['Sıcakken DSG arıza modu', 'Yağ basıncı/zincir senkron hatası', 'Kilometre ve servis kayıtlarının geriye gitmesi'],
        scenario: '6C görünüm avantajı sunar; ancak motor-şanzıman geçmişi temiz 6R, sadece makyaj yılı daha yeni diye seçilen bakımsız 6C’den daha mantıklıdır.',
    },
    'volkswagen-golf-7-75-dsg-alinir-mi': {
        identity: 'Golf 7.5 bir makyajdır; motor kodu, ACT/GPF donanımı, DQ200 veya ıslak DSG ailesi VIN üzerinden çıkarılmalıdır.',
        phoneQuestions: ['DSG kodu ile kavrama/mekatronik ve yağ geçmişi nedir?', '1.5 TSI ACT’de yazılım veya düşük devir silkeleme işlemi yapıldı mı?', 'Dizelde DPF, EGR ve AdBlue sistemi orijinal mi?'],
        coldChecks: ['Kod silme izini hazırlık monitörleri ve kalıcı kodlarla kontrol edin.', 'Su pompası/termostat modülü ve turbo hattını inceleyin.', 'DSG’yi soğukken başlayıp tam sıcaklığa kadar canlı veriyle izleyin.'],
        roadChecks: ['1-2 ve geri kavrama, rampa manevrası', 'ACT devreye girişinde düşük devir davranışı', 'ACC/Front Assist ve elektronik park freni işlevi'],
        walkAway: ['Sürekli kavrama kaçırma veya basınç hatası', 'Emisyon sisteminin yazılımla iptali', 'Ön şasi/airbag onarımıyla ADAS uyumsuzluğu'],
        scenario: '“7.5 daha sorunsuz” genellemesi yerine belirli motor, DSG kodu ve üretim tarihini değerlendirin; aynı görünüşte iki aracın risk profili farklı olabilir.',
    },
    'renault-clio-3-alinir-mi-clio-4-farklari': {
        identity: 'Clio 3 ve 4 ayrı platform dönemleridir; 1.5 dCi güç/emisyon sürümü ile Clio 4 EDC ve benzinli motor kodu VIN’den doğrulanmalıdır.',
        phoneQuestions: ['dCi enjektör/turbo ve triger faturaları mevcut mu?', 'Clio 4 EDC kavrama/mekatronik işlemi oldu mu?', 'Kart, klima kompresörü veya direksiyon sistemi onarıldı mı?'],
        coldChecks: ['dCi soğuk marş, enjektör düzeltmesi ve yağ beslemesini inceleyin.', 'Benzinlide ateşleme/yakıt düzeltmesi ve soğutma sıcaklığını okuyun.', 'EDC varsa soğuk-sıcak kavrama verisini karşılaştırın.'],
        roadChecks: ['Volan/kavrama veya EDC dur-kalk davranışı', 'Ön takım-direksiyon ve arka aks sesi', 'Klima yükü ve elektrik donanımı'],
        walkAway: ['Düşük yağ basıncı veya turbo metal sesi', 'EDC arıza modu', 'Şasi, airbag veya kilometre manipülasyonu'],
        scenario: 'Daha modern Clio 4 güvenlik ve tüketimde avantajlı olabilir; fakat bütçe sınırlıysa bakımı belgeli atmosferik-manuel Clio 3 daha sade risk sunabilir.',
    },
    'opel-corsa-d-easytronic-alinir-mi': {
        identity: 'Corsa D’de 1.2/1.4 Twinport, 1.3 CDTI, manuel, Easytronic ve bazı pazarlarda klasik otomatik bulunur; vites kolu görüntüsü yerine VIN/şanzıman kodu kullanın.',
        phoneQuestions: ['Easytronic aktüatör, kavrama ve adaptasyon faturası var mı?', 'Benzinlide zincir/termostat; dizelde DPF-enjektör geçmişi nedir?', 'Direksiyon desteği veya gövde kontrol modülü işlemi oldu mu?'],
        coldChecks: ['Akü voltajı düşükken Easytronic tanısı koymayın; önce şarj sistemini ölçün.', 'Kavrama temas noktası, aktüatör kodu ve kalibrasyon durumunu okuyun.', 'Motor tipine göre soğuk zincir, yakıt ve emisyon verisini kontrol edin.'],
        roadChecks: ['Geri, rampa ve dur-kalk Easytronic davranışı', 'Manuel modda her vitesin seçilmesi', 'Direksiyon desteği ve ön takım sesi'],
        walkAway: ['Sürekli F arızası/N’ye düşme', 'Kalibrasyon tamamlanmayan aktüatör', 'Hararet, yağ basıncı veya ağır gövde hasarı'],
        scenario: 'Easytronic’in vites değişiminde gaz kesmesi normal olabilir; şiddetli kavrama titremesi ve vitesi seçememe normal karakter değildir.',
    },
    'ford-fiesta-mk7-ecoboost-powershift-alinir-mi': {
        identity: 'Fiesta Mk7/Mk7.5 içinde 1.25-1.4 atmosferik, 1.0 EcoBoost, TDCi ve farklı otomatik uygulamalar bulunur. Motor ve PowerShift kodu VIN’den belirlenmelidir.',
        phoneQuestions: ['EcoBoost yağ şartnamesi ve triger sistemi faturası var mı?', 'PowerShift kavrama/TCM ve kalibrasyon işlemi belgeli mi?', 'Dizelde turbo, enjektör ve DPF geçmişi nedir?'],
        coldChecks: ['EcoBoost’ta soğuk yağ basıncı, soğutma ve kayış/zincir durumunu motora göre inceleyin.', 'TCM haberleşmesiyle akü/şarj sistemini birlikte test edin.', 'Soğuk ilk kalkışı sıcak dur-kalk sonunda yeniden karşılaştırın.'],
        roadChecks: ['Geri/yokuş PowerShift titremesi', 'Turbo motor yük altında basınç ve ateşleme', 'Direksiyon, üst takoz ve SYNC/elektrik donanımı'],
        walkAway: ['Yağ basıncı uyarısı veya kayış kalıntısı', 'TCM arıza modu', 'Hararet ve ağır şasi geçmişi'],
        scenario: 'Ucuz PowerShift ancak doğrulanmış onarım ve uzun testle anlamlıdır; tahmini kavrama/TCM masrafı aracın fiyat farkını aşabiliyorsa manuel alternatif daha güvenlidir.',
    },
};

function buildModelModule(profile: ModelGuideProfile): string {
    return `## Uygulamalı Satın Alma Protokolü

### 1. İlan Kimliğini Doğrulayın

${profile.identity} İlan başlığındaki motor veya paket adı kanıt sayılmaz. Ruhsat, VIN çözümü, motor etiketi ve fiziksel donanım aynı kombinasyonu göstermelidir. Üretim tarihiyle ilk tescil tarihinin farklı olabileceğini hesaba katın; makyaj geçişlerinde yalnız model yılına güvenmeyin.

Satıcıyla görüşmeden önce şu üç sorunun cevabını yazılı alın:

${profile.phoneQuestions.map((item) => `- ${item}`).join('\n')}

Servis faturasında tarih, kilometre, parça numarası ve işlemi yapan işletme görünmelidir. “Yetkili serviste yapıldı” sözü, VIN bazlı iş emri veya faturayla desteklenmiyorsa bakım kanıtı değildir. İlanı ekran görüntüsüyle saklayın; kapora için acele ettiren, VIN paylaşmayan veya bağımsız kontrole izin vermeyen aday elenir.

### 2. Soğuk Araç ve Cihaz Kontrolü

Aracı en az birkaç saat çalışmamış halde görün. Soğutma suyu ve emme havası sıcaklığı ortamla makul yakınlıkta olmalıdır. Kontak açıldığında tüm güvenlik uyarıları yanmalı, çalışma sonrası doğru sırada sönmelidir. Ardından şu modele özgü adımları uygulayın:

${profile.coldChecks.map((item) => `- ${item}`).join('\n')}

Arıza kodunun bulunmaması sağlamlık garantisi değildir. Kalıcı ve bekleyen kodlar, hazırlık monitörleri, donmuş çerçeve ve modüllerin son silinme/gerilim izleri beraber yorumlanmalıdır. Evrensel OBD cihazı tüm üretici modüllerini okuyamayacağı için modele uygun teşhis yazılımı kullanılmalıdır.

### 3. Test Sürüşü ve Sıcak Tekrar

En az 30 dakikalık rota; park manevrası, bozuk yüzey, şehir içi dur-kalk, yokuş ve yasal hızda sabit sürüş içermelidir. Özellikle şunları kaydedin:

${profile.roadChecks.map((item) => `- ${item}`).join('\n')}

Sürüşün sonunda motor ve şanzıman sıcakken D-R/ilk hareket, sıcak marş ve araç altındaki yeni kaçak tekrar kontrol edilir. Ses veya titreme duyulursa tahminle parça yazmak yerine koşulu kaydedin: hız, vites, devir, motor sıcaklığı, gaz ve yol yüzeyi. Bu bilgi doğru teşhisi hızlandırır.

### 4. Karar Sınırı

Şu bulgular fiyat pazarlığı değil, ileri teşhis tamamlanana kadar işlemi durdurma nedenidir:

${profile.walkAway.map((item) => `- ${item}`).join('\n')}

**Örnek karar:** ${profile.scenario} Son teklif; temiz emsalden acil güvenlik, yakın bakım, belgeli onarım ve belirsizlik payı düşülerek verilir. Ekspertiz ücretini ödemiş olmak aracı alma zorunluluğu doğurmaz.`;
}

const foundationalModules: Record<string, string> = {
    'kronik-ariza-nedir': `## Bir Sorunun Gerçekten Kronik Olduğu Nasıl Kanıtlanır?

Forumda aynı şikâyeti birkaç kez okumak kronik arıza kanıtı değildir. Önce model yılı, motor ve şanzıman kodu aynı araçları ayırın. Ardından kanıtı beş basamakta puanlayın: tekil kullanıcı anlatısı; birbirinden bağımsız çoklu kullanıcı kaydı; uzman servis teşhisi; üretici teknik bülteni veya güncellenmiş parça; geri çağırma ya da resmî kampanya. Üst basamaklar sorunun varlığını güçlendirir fakat her aracın arızalanacağını yine göstermez.

### Sıklık ile Sonucu Ayırın

| Boyut | Sorulacak soru |
|---|---|
| Maruziyet | Kaç araçtan kaçı, hangi yaş ve kilometrede etkileniyor? |
| Şiddet | Yolda bırakıyor mu, güvenliği etkiliyor mu, ikincil hasar yaratıyor mu? |
| Yakalanabilirlik | Test sürüşü, canlı veri veya ölçümle satıştan önce görülebiliyor mu? |
| Onarılabilirlik | Güncel parça ve kalıcı prosedür var mı, tekrar ediyor mu? |
| Maliyet | Parça, işçilik, programlama ve yan hasar toplamı ne? |

Sık görülen ucuz bir sensör ile nadir fakat motoru kullanılamaz hale getiren yağ basıncı sorunu aynı risk değildir. Satın alma rezervi oluştururken **olasılık × sonuç × tespit zorluğu** birlikte değerlendirilmelidir.

### Araç Başında Doğrulama Formu

1. Şikâyetin etkilediği kesin motor/şanzıman kodunu yazın.
2. Aracın üretim tarihi riskli seriyle örtüşüyor mu kontrol edin.
3. Güncellenmiş parça veya yazılım varsa fatura/parça numarasını görün.
4. Belirtinin oluştuğu koşulu yeniden üretin: soğuk, sıcak, yük, yokuş veya rejenerasyon.
5. Arıza kodu yanında canlı veri ve mekanik ölçüm alın.
6. Onarım yapılmışsa kök nedenin giderildiğini ve son test sonucunu isteyin.

Örneğin “zincir değişti” faturası tek başına yeterli değildir; gergi-kızak kapsamı, yağ basıncı, doğru parça revizyonu ve onarım sonrası faz değerleri görülmelidir. “Mekatronik yapıldı” denildiğinde ünite, kavrama, yazılım ve adaptasyonun hangisinin yapıldığı ayrılmalıdır.

### İnternet Araştırmasında Yanılma Tuzakları

Arıza yaşayan kullanıcı daha çok paylaşım yaptığı için forumlar sıklığı olduğundan yüksek gösterebilir. Öte yandan garanti dışı sessiz onarımlar resmî istatistikte görünmeyebilir. Farklı pazarlardaki yakıt, motor gücü ve emisyon donanımı Türkiye aracıyla aynı olmayabilir. Tarihsiz içerik, başka nesle ait video ve satış bağlantılı “kesin çözüm” iddiaları ayrı tutulmalıdır.

En sağlam karar cümlesi “bu model kronik sorunlu/sorunsuz” değil, “bu üretim dönemindeki bu sistem için şu kanıtlar var; bu araçta belirtilen testlerin sonucu şu” biçimindedir. Böylece marka efsanesi yerine incelenen otomobil hakkında karar verirsiniz.`,
    'aracta-motor-arizasi-nasil-anlasilir': `## Belirtiden Teşhise Motor Kontrol Akışı

Motor teşhisi sesi dinleyip parça adı söylemek değildir. Önce şikâyetin koşulu kaydedilir: motor soğuk mu, sıcak mı, rölantide mi, yükte mi; yakıt seviyesi, ortam sıcaklığı ve arıza lambası ne durumda? Sonra elektronik veri, sıvılar ve mekanik ölçüm birbirini doğrular.

### Soğuk Başlangıç Protokolü

Satıcıdan aracı çalıştırmamasını isteyin. OBD’de soğutma ve emme havası sıcaklığı ortamla yakın olmalı. Kontak açıldığında motor ve yağ uyarıları görünmeli; marş süresi, ilk 30 saniyedeki zincir/itici/enjektör sesi ve egzoz kaydedilmelidir. Rölanti yükselip kademeli düşebilir; sürekli tekleme, metalik vuruntu, yağ basıncı gecikmesi veya yoğun kalıcı duman normal kabul edilmez.

### Canlı Veriyi Bir Sistem Olarak Okuyun

- Kısa ve uzun yakıt düzeltmesi, hava kaçağı ile yakıt basıncı sorununu ayırmaya yardımcı olur.
- Misfire sayacı tekleyen silindiri gösterir; bobin, buji, enjektör ve kompresyon hâlâ ayrı test ister.
- Hedef-gerçek turbo basıncı; vakum, aktüatör, kaçak ve turbo kararından önce karşılaştırılır.
- Soğutma sıcaklığının yükselme eğrisi termostatı; ani basınç ve gaz bulgusu yanma kaçağını düşündürür.
- Dizelde rail basıncı, enjektör düzeltmesi, DPF diferansiyel basıncı ve rejenerasyon geçmişi birlikte değerlendirilir.

Kodların yakın zamanda silinmesi hazırlık monitörlerini tamamlanmamış bırakabilir. “Arıza yok” ekranının yanında kalıcı/bekleyen kod, donmuş çerçeve ve monitör durumu görülmelidir.

### Mekanik Doğrulama Ne Zaman Gerekir?

Kompresyon testi silindirler arası farkı; kaçak testi havanın supap, segman veya soğutma yönünden kaçışını; yağ basıncı ölçümü yağlama sistemini; soğutma basıncı ve yanma gazı testi hararet/conta şüphesini değerlendirir. Tek ölçüm cihaz kalibrasyonu, motor sıcaklığı ve prosedür yazılmadan yorumlanmamalıdır.

### Ustaya Sorulacak Beş Soru

1. Ölçtüğümüz belirti tam olarak hangi koşulda oluştu?
2. Hangi veri normal aralığın dışında ve referans nedir?
3. Parça değişmeden önce hangi test kök nedeni doğrular?
4. Bu arıza başka hangi parçaya zarar vermiş olabilir?
5. Onarım sonrası başarı hangi ölçümle kanıtlanacak?

Yağ basıncı uyarısı, ağır metalik vuruntu, yakıt kaçağı, hararet veya soğutma sisteminde yoğun basınç varsa test sürüşüne devam edilmez. Küçük ses diye aracı zorlamak onarım maliyetini büyütebilir.`,
    'sanziman-sorunu-olan-arac-alinir-mi': `## Şanzıman Arızasında Onarım mı, Vazgeçme mi?

Önce şanzımanın tam kodunu ve tipini belirleyin. Aynı modelde tork konvertörlü, CVT, kuru/ıslak çift kavrama veya robotize manuel bulunabilir; “otomatik” tanımı teşhis için yetersizdir. Şikâyeti soğuk ve tam sıcak halde, D-R geçişi, geri manevra, rampa, düşük hız ve sabit hız kilitlemesi gibi tekrarlanabilir koşullarda kaydedin.

### Masraf Teklifi Nasıl Okunur?

| Teklif kalemi | Yazılı olması gereken ayrıntı |
|---|---|
| Teşhis | Kodlar, canlı veri, basınç/uyarlama ölçümü ve test sürüşü sonucu |
| Parça | Yeni/revizyon/çıkma, üretici ve parça numarası |
| İşçilik | Sökme-takma, yıkama, soğutucu hat kontrolü ve programlama |
| Sarf | Doğru sıvı, filtre/karter, conta ve bağlantı elemanları |
| Garanti | Süre, kilometre, kapsam ve hariç tutulan durumlar |

“Komple şanzıman” denilen işte diferansiyel, konvertör, mekatronik veya kavramanın kapsama girip girmediğini sorun. Metal kirlenmesi varsa soğutucu ve hat temizlenmeden takılan ünite tekrar zarar görebilir. Sadece adaptasyon sıfırlamak aşınmış parçayı onarmaz; geçici düzelme alım kararı için kanıt değildir.

### Riskli ve Yönetilebilir Durumu Ayırın

Yağ karteri sızıntısı veya belgeli periyodik bakım gibi öngörülebilir işler fiyatlandırılabilir. Basınç kaybı, metal talaşı, birden fazla oran hatası, arıza modu, yanık sıvı ve kaynağı belirsiz vuruntu yüksek belirsizlik taşır. Aracın piyasa değeri düşük, parça erişimi zayıf ve uzman sayısı azsa aynı arıza ekonomik olarak daha ağırdır.

### Onarım Sonrası Kabul Testi

Şanzıman soğukken başlayıp tam çalışma sıcaklığına ulaşmalı; tüm vitesler, geri, rampa ve dur-kalk denenmelidir. Kaçak kontrolü, hata taraması, uyarlama sonucu ve gerekiyorsa basınç/sıcaklık kaydı alınır. Birkaç kilometrelik test, ısınınca ortaya çıkan valf gövdesi veya kavrama sorununu göstermeyebilir.

Satın alma ancak kesin teşhis, yazılı toplam maliyet, parça erişimi ve onarım sonrası garanti netse düşünülebilir. Satıcı “fiyattan düşeriz” diyor fakat arızanın sınırı bilinmiyorsa indirim riskin tamamını karşılamaz.`,
    'ekspertiz-raporunda-nelere-bakilir': `## Ekspertiz Raporunu Satır Satır Okuma Yöntemi

Raporun ilk sayfasındaki “uygun/iyi” ifadesi yerine kapsam, ölçüm koşulu ve ham bulgulara bakın. VIN, plaka, kilometre, motor-şanzıman ve kontrol zamanı araçla eşleşmelidir. Motor sıcak getirildiyse soğuk çalışma değerlendirilmemiştir; lift veya yol testi yoksa rapor bunu açıkça söylemelidir.

### Kaporta Haritası

Boya kalınlığında tek evrensel sınır yoktur; panel malzemesi ve fabrika toleransı değişir. Aynı aracın simetrik panelleri, ölçüm dağılımı, cıvata ve kaynak izleriyle birlikte yorumlanır. Sökülebilir panelde kozmetik onarım ile direk, podye, kule, şasi kolu, tavan ve tabandaki işlem ayrı risk sınıfına yazılmalıdır.

### Mekanik ve Elektronik Bölüm

“Motor yüzde 90” gibi cihaz üretimli oranlar; kompresyon, yağ basıncı ve kaçak testinin yerine geçmez. OBD bölümünde sadece kod listesi değil kalıcı/bekleyen kodlar, hazırlık monitörleri ve taranan modüller görünmelidir. Akü düşükse oluşan iletişim kodları not edilmeli, fakat silinmeden önce kaydedilmelidir.

Fren testinde sağ-sol farkı, lastik durumu ve test cihazı koşulu; süspansiyonda mekanik boşluk ile amortisör cihaz sonucu beraber okunur. Dyno ölçümü lastik basıncı, sıcaklık, şanzıman, dört çeker sistemi ve cihaz kalibrasyonundan etkilenebilir; motor garantisi gibi sunulmamalıdır.

### Rapordaki Belirsiz İfadeler

“Kontrol edilemedi”, “terleme”, “hafif ses”, “arıza silindi” veya “müşteri istemedi” satırları kapatılmadan satın alma kararı verilmez. Her biri için şu beş soruyu yazılı sorun: bulgu nerede, nasıl ölçüldü, güvenlik etkisi ne, hangi ileri test gerekir, tahmini müdahale zamanı nedir?

### Teslim Almadan Önce

Aracın rapor sonrası parça değiştirilmediğini VIN, kilometre ve fotoğraflarla doğrulayın. Raporu imzalayan işletmenin unvanı, tarih-saat, cihaz ve teknisyen bilgisi saklanmalıdır. Ekspertiz; geçmiş sorgusu, model uzmanı ve uzun test sürüşünü tamamlar, onların yerine geçmez. Satıcıyla ilişkili merkezi değil sizin seçtiğiniz merkezi kullanmak çıkar çatışmasını azaltır.`,
    'lpg-donusumunde-dikkat-edilmesi-gerekenler': `## LPG’li Aracı Teknik Olarak Nasıl Değerlendirirsiniz?

Önce motor kodunun LPG’ye valf malzemesi, enjeksiyon tipi ve üretici politikası bakımından uygunluğunu araştırın. “Bu model LPG’ye uyumlu” cümlesi aynı modeldeki tüm motorları kapsamayabilir. Direkt enjeksiyonlu sistemlerde benzin katkı oranı ve kit mimarisi, çok nokta enjeksiyonlu motordan farklıdır.

### Montaj Kalitesi Kontrolü

- Tank üretim tarihi, ruhsat kaydı ve montaj belgesi eşleşmeli.
- Dolum ağzı, multivalf ve hatlar ezilme/sürtünme/ısı kaynağından korunmalı.
- Regülatör su bağlantısı ve enjektör hortum uzunlukları düzgün olmalı.
- Kablo ekleri bant yığını değil otomotiv koşullarına uygun yapılmalı.
- Manifold delme/enjektör yerleşimi silindirler arasında dengeli olmalı.
- Bagajda gaz kokusu veya sabun testiyle kaçak şüphesi varsa araç kullanılmamalı.

### Kalibrasyon Testi

Motor tamamen benzinde sağlıklı değilse LPG ayarı yapılmaz. Önce benzin basıncı, buji-bobin, oksijen sensörü, vakum kaçağı ve kompresyon doğrulanır. Sonra benzin ve LPG’de aynı devir-yük noktalarında kısa/uzun yakıt düzeltmeleri karşılaştırılır. Rölantide iyi çalışan sistem yüksek yükte fakir kalabilir; kontrollü yol kaydı gerekir.

### Supap Sağlığı

Supap boşluğu ayarlanabilen motorda üretici/uzman aralığına göre ölçüm kaydı istenir. Zor soğuk çalışma, tekleme veya güç kaybı varsa kompresyon ve kaçak testi yapılır. Katkı sistemi bulunması yanlış kalibrasyonu telafi eden garanti değildir. Uzun süre yalnız LPG kullanılmış araçta benzin enjektörleri ve pompa da ayrıca denenmelidir.

### Ekonomi Hesabı

Gerçek tasarruf = benzinde aynı rotanın maliyeti − LPG tüketimi − LPG ile tüketilen benzin − ek bakım/amortisman. LPG litre tüketimi genellikle benzinle bire bir aynı değildir. Yıllık kilometre düşükse kit, tank yenileme ve ek bakım süresi ekonomik avantajı erteleyebilir.

Satın almada hem soğuk hem sıcak durumda yakıt geçişi, tam yük, sıcak marş ve arıza kodları kontrol edilir. Ruhsata işlenmemiş, sızıntılı, motor arıza lambası yanan veya kompresyonu dengesiz araçta önce sorun giderilmelidir.`,
    'otomatik-sanziman-turleri-ve-guvenilirlik': `## Otomatik Şanzımanı Kullanımınıza Göre Seçin

Güvenilirlik yalnız teknoloji adı değildir; belirli şanzıman kodu, motor torku, yazılım, soğutma, bakım ve kullanım biçiminin sonucudur. Aynı “DSG”, “CVT” veya “EDC” adı altında farklı donanımlar bulunabilir.

| Kullanım | Öne çıkan ihtiyaç | Kontrol odağı |
|---|---|---|
| Yoğun dur-kalk | Isı ve kavrama yönetimi | Düşük hız, rampa, sıcak test |
| Uzun yol/çekme | Soğutma ve oran dayanımı | Sıcaklık, sıvı, üretici çekme limiti |
| Kısa şehir içi | Sık D-R ve park manevrası | Kavrama/aktüatör, akü voltajı |
| Performans | Tork kapasitesi ve bakım | Kod, yazılım, yağ geçmişi |

### Türlere Göre Normal ve Anormal Davranış

Tork konvertörlü otomatikte hafif kremalaşma normal olabilir; uzun D-R gecikmesi, kaydırma veya kilitleme titremesi değildir. CVT’de motor devrinin hızdan bağımsız yükselmesi karakterdir; oran dalgalanması, metalik uğultu ve basınç hatası anormaldir. Robotize manuelde vites kesintisi beklenebilir; vitesi seçememe, sürekli N’ye düşme veya aşırı kavrama titremesi beklenmez. Çift kavramalı sistemde doğrudan his normal olabilir; arıza modu ve sıcak kaçırma normal değildir.

### Satın Alma Testi

1. VIN’den şanzıman kodu ve sıvı şartnamesini çıkarın.
2. Soğuk D-R geçiş süresi ve ilk kalkışı gözleyin.
3. Geri manevra, tam tur, rampa ve dur-kalk deneyin.
4. Orta yükte tüm oranları, gaz kesme ve kick-down davranışını görün.
5. Tam sıcaklıkta aynı manevraları tekrarlayın.
6. Hata, uyarlama, basınç ve sıcaklık verisini uygun cihazla okuyun.
7. Liftte kaçak, aks, takoz ve soğutma hattını inceleyin.

### Bakım Belgesini Doğrulayın

Faturada yalnız “şanzıman yağı” değil kullanılan ürün, miktar, filtre/karter, kilometre ve prosedür yazmalıdır. Makineyle basınçlı değişim her şanzıman için doğru değildir; üretici prosedürü esas alınır. Adaptasyon sıfırlaması onarım değil, belirli işlemler sonrası gereken kalibrasyon adımıdır.

Son karar, şanzımanın normal karakterini bilerek uzun sıcak test ve yazılı arıza maliyetiyle verilir. İnternetteki tek bir “ömürlük yağ” veya “hepsi sorunlu” cümlesi teknik karar değildir.`,
    'dizel-mi-benzinli-mi': `## Kendi Rotanızla Yakıt Türü Kararı Verin

Karşılaştırmayı katalog tüketimiyle değil aynı rota, yıllık kilometre ve sahiplik süresiyle yapın. Bir hafta boyunca her yolculuğun mesafesini, ortalama hızını, motorun tam ısınıp ısınmadığını ve yükü kaydedin. Kısa yolculuk oranı yüksekse modern dizelin DPF rejenerasyonu ve EGR çalışma koşulları zorlaşabilir.

### Beş Yıllık Hesap Formülü

Toplam kullanım maliyeti = satın alma fiyat farkı + finansman farkı + yakıt/enerji + periyodik bakım + vergi/sigorta farkı + beklenen büyük bakım − satış değeri farkı. Dizel tüketimde avantaj sağlasa bile enjektör, turbo, DPF/SCR riski ve fiyat farkı hesaba katılmadan “kaç kilometrede amorti eder?” sorusu cevaplanamaz.

Üç senaryo kurun: yakıt fiyatları sabit oranlı; dizel-benzin farkı daralıyor; yıllık kilometreniz yüzde 30 düşüyor. Karar yalnız iyimser senaryoda mantıklıysa dayanıklı değildir.

### Kullanım Profilleri

- **Günde iki kez 5 km şehir içi:** Sade benzinli veya uygun hibrit çoğunlukla daha rahat çalışır; dizel çalışma sıcaklığına ulaşamayabilir.
- **Yılda 30 bin km, düzenli otoyol:** Uygun dizel tüketim avantajı sağlayabilir; bakım ve emisyon sistemi kaydı şarttır.
- **Karma kullanım ve evde şarj:** PHEV ancak düzenli şarj edilirse anlamlıdır; boş bataryayla taşınan ağırlığı unutmayın.
- **Yüksek yük/yokuş:** Motor torku kadar soğutma, şanzıman oranı ve gerçek tüketim önemlidir.

### İkinci El Kontrol Farkı

Benzinlide ateşleme, yakıt düzeltmesi, yağ tüketimi ve direkt enjeksiyon/turbo; dizelde enjektör geri dönüşü, rail basıncı, turbo, EGR, DPF diferansiyel basıncı, kül tahmini ve rejenerasyon geçmişi incelenir. Emisyon iptali kısa vadede masrafı gizleyebilir fakat muayene, çevre, yazılım ve motor riski yaratır.

Kararı verirken aynı bütçedeki araçların yaş ve bakım kalitesini de karşılaştırın. Bütçeniz dizelde çok daha yaşlı ve geçmişi belirsiz araca yetiyorsa teorik yakıt tasarrufu, ilk büyük onarımda kaybolabilir.`,
    'yuksek-kilometreli-arac-alinir-mi': `## Yüksek Kilometreyi Doğru Okuma Rehberi

Kilometre bir aşınma göstergesidir fakat kullanım biçimini tek başına anlatmaz. Uzun yolda düzenli ısınmış 200 bin km ile sürekli soğuk çalıştırılmış 80 bin km motor aynı yıpranmayı göstermeyebilir. Motor saati okunabiliyorsa ortalama hız = kilometre / motor saati hesabı kullanım hakkında ek ipucu verir; veri her araçta güvenilir veya erişilebilir değildir.

### Bakım Zaman Çizelgesi Kurun

Muayene, servis iş emri, yağ/lastik/akü faturası ve eski ilan kilometresini tarihe göre sıralayın. Kayıtların düzenli artması, kilometrenin gerçekliğini güçlendirir. Uzun boşluk, ani düşüş veya yıllarca aynı değer açıklama gerektirir. İç aşınma yalnız yardımcı bulgudur; direksiyon ve koltuk yenilenebilir.

### Yaşa ve Kilometreye Bağlı Dört Bütçe

1. **Periyodik:** Yağ, filtre, buji ve sıvılar.
2. **Ağır bakım:** Triger/zincir değerlendirmesi, devirdaim, şanzıman ve diferansiyel sıvısı.
3. **Aşınma:** Debriyaj/volan, amortisör, burç, rulman, fren, klima.
4. **Büyük risk:** Turbo, enjektör, DPF, otomatik şanzıman, hibrit batarya veya motor içi.

Faturası olmayan kalemi “yapılmıştır” kabul etmeyin. Parçayı hemen değiştirmek de her zaman doğru değildir; önce motor koduna ve üretici prosedürüne uygun durum tespiti yapılmalıdır.

### Mekanik Sağlık Paketi

Soğuk marş, yağ basıncı, kompresyon/kaçak ihtiyacı, karter basıncı, soğutma basıncı, yakıt düzeltmesi veya dizel enjektör verisi motor türüne göre seçilir. Şanzıman tam sıcaklıkta; süspansiyon lift ve yol testinde; gövde korozyon ve önceki onarım açısından incelenir. Yüksek kilometrede küçük kaçakların toplamı da önemlidir.

### Değerleme

Temiz emsal fiyatından yaklaşan ağır bakım, aşınmış parçalar ve belirsizlik rezervini düşürün. Ancak airbag hilesi, VIN/kilometre manipülasyonu, ağır taşıyıcı hasar veya hararet geçmişi “fiyatı düşerse alınır” sınıfında değildir. Belgeli, doğru kullanılmış ve testleri iyi yüksek kilometreli araç alınabilir; düşük kilometre etiketi bakım kanıtından değerli değildir.`,
};

export const guideAdvancedModules: Record<string, string> = {
    ...foundationalModules,
    ...Object.fromEntries(Object.entries(modelProfiles).map(([slug, profile]) => [slug, buildModelModule(profile)])),
};
