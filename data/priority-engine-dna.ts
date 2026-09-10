import type { VehicleEngineData } from './engine-dna';

export const priorityEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 12000,
        engines: [{
            slug: '12-tce-115-hp-6-edc',
            name: '1.2 TCe 115 HP',
            fuelType: 'Benzin',
            transmission: '6 ileri EDC',
            score: 84,
            description: 'Clio 6 ile gelen üç silindirli 1.2 TCe, 115 bg ve 190 Nm üretiyor; Türkiye ürün bilgisinde altı ileri çift kavramalı EDC ile eşleşiyor. Yeni nesil olduğu için uzun dönem arıza hükmü vermek yerine servis kampanyası, soğuk çalışma ve aktarma davranışı doğrulanmalıdır.',
            pros: ['Günlük kullanım için yeterli 190 Nm tork', 'Altı ileri EDC ile rahat şehir sürüşü', 'Önceki Clio’ya göre güncel güç ve emisyon paketi'],
            cons: ['Yeni motor-şanzıman eşleşiminde uzun dönem veri sınırlı', 'Yoğun dur-kalkta çift kavrama kullanım karakteri', 'Bakım geçmişi ve doğru yağ standardına hassasiyet'],
            chronicIssues: [
                { title: 'Soğuk çalışma ve soğutma sistemi kontrolü', description: 'Araç tamamen soğukken ilk çalıştırılmalı; düzensiz rölanti, uyarı lambası, yağ veya soğutma sıvısı izi aranmalıdır. Yeni nesil hakkında doğrulanmış yaygın arıza verisi oluşmadığı için bulgular teşhis cihazı ve servis kaydıyla doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'EDC kalkış ve güncelleme kontrolü', description: 'D-R geçişi, yokuş kalkışı ve ısınmış durumda düşük hızlı manevralar denenmelidir. Titreme varsa kavrama aşınması varsayılmadan önce yazılım sürümü, adaptasyon değerleri, takozlar ve açık servis kampanyaları kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12001,
        engines: [{
            slug: '15-ehev-122-131-hp-ecvt',
            name: '1.5 e:HEV 122/131 HP',
            fuelType: 'Hibrit',
            transmission: 'e-CVT',
            score: 89,
            description: 'Jazz e:HEV, Atkinson çevrimli 1.5 benzinli motoru iki elektrik motoruyla birleştirir ve çoğu şehir sürüşünde tekerlekleri elektrik motoru çevirir. Model yılına göre 122 veya 131 PS sistem gücü görülebildiğinden ruhsat ve şasi numarasıyla kesin sürüm doğrulanmalıdır.',
            pros: ['Şehir içinde verimli seri hibrit çalışma', 'Kavramasız ve akıcı elektrik motoru sürüşü', 'Honda’nın olgun e:HEV mimarisi'],
            cons: ['Yüksek hızda motor devrinin belirginleşmesi', 'Hibrit bileşenler için uzman teşhis ihtiyacı', '12 V akü zayıflığında yanıltıcı elektronik uyarılar'],
            chronicIssues: [
                { title: 'Hibrit batarya ve enerji akışı testi', description: 'Teşhis cihazıyla hibrit batarya hücre dengesi, sıcaklık sensörleri ve kayıtlı hata kodları okunmalı; EV, Hybrid ve Engine Drive geçişleri yol testinde izlenmelidir. Gösterge doluluk değişimi tek başına kapasite kaybı kanıtı değildir.', severity: 'medium', reportCount: 0 },
                { title: '12 V akü ve fren geri kazanım kontrolü', description: 'Beklemiş araçlarda 12 V akü yük testi yapılmalı; fren pedalı hissi, rejeneratif-mekanik fren geçişi ve disk yüzeyleri incelenmelidir. Uyarı lambası varsa önce düşük voltaj kaynağı ve güncel yazılım kontrol edilmelidir.', severity: 'low', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12002,
        engines: [{
            slug: '20-ehev-184-hp-ecvt-awd',
            name: '2.0 e:HEV 184 HP AWD',
            fuelType: 'Hibrit',
            transmission: 'e-CVT / AWD',
            score: 88,
            description: 'Altıncı nesil CR-V e:HEV, 2.0 litre benzinli motoru elektrikli tahrikle birleştirir; Türkiye verilerinde elektrik motoru 184 PS ve 335 Nm’dir. Dört tekerlekten çekiş sistemi ve hibrit bileşenler satın alma öncesinde birlikte test edilmelidir.',
            pros: ['184 PS elektrik motoruyla güçlü ara hızlanma', 'Şehir ve karma kullanımda verimli hibrit mimari', 'AWD ile artırılmış zemin tutunması'],
            cons: ['Tam gazda yükselen motor sesi', 'Büyük gövde nedeniyle lastik ve fren maliyeti', 'Hibrit ve AWD sistemi için yetkin servis gereksinimi'],
            chronicIssues: [
                { title: 'e:HEV batarya ve soğutma kontrolü', description: 'Hibrit batarya hücre değerleri, hava girişleri, sıcaklık verileri ve sistem hata geçmişi okunmalıdır. Enerji akışındaki sık geçişler sistem tasarımının parçasıdır; arıza kararı yalnızca yol testi ve üretici teşhis verisiyle verilmelidir.', severity: 'medium', reportCount: 0 },
                { title: 'AWD, lastik ve alt takım kontrolü', description: 'Dört lastiğin ölçü, marka ve aşınma oranı uyumlu olmalı; tam dönüşte ses, düz yolda çekme ve düzensiz aşınma aranmalıdır. Bulgular varsa rot geometrisi, rulmanlar, akslar ve AWD hata kayıtları birlikte incelenmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12003,
        engines: [{
            slug: '18-hybrid-122-140-hp-ecvt',
            name: '1.8 Hybrid 122/140 HP',
            fuelType: 'Hibrit',
            transmission: 'e-CVT',
            score: 90,
            description: 'Corolla Cross’un 1.8 litre tam hibrit sistemi model yılına göre 122 veya 140 HP sistem gücüyle sunuldu. e-CVT yapısında klasik kayışlı CVT ya da debriyaj bulunmadığından değerlendirme batarya sağlığı, enerji geçişleri ve bakım geçmişine odaklanmalıdır.',
            pros: ['Şehir trafiğinde düşük tüketim', 'Kavramasız, akıcı e-CVT mimarisi', 'Toyota hibrit servis ve parça ekosistemi'],
            cons: ['Tam hızlanmada belirgin motor devri', '12 V akü zayıflığında elektronik uyarılar', 'Hibrit batarya için ölçümlü sağlık kontrolü ihtiyacı'],
            chronicIssues: [
                { title: 'Hibrit sağlık kontrolü ve hava kanalı', description: 'Toyota hibrit sağlık raporu veya eşdeğer teşhisle hücre sapması, sıcaklık ve hata kayıtları incelenmeli; batarya soğutma hava girişi temiz olmalıdır. Yakıt tüketimi tek başına batarya bozulmasını göstermediği için sürüş koşulları kaydedilmelidir.', severity: 'medium', reportCount: 0 },
                { title: '12 V akü, fren ve yazılım kontrolü', description: '12 V akü yük altında ölçülmeli, rejeneratif fren geçişi ve disk yüzeyleri kontrol edilmelidir. Çok sayıda eşzamanlı uyarı görülürse parça değişiminden önce düşük voltaj beslemesi, sensörler ve servis yazılım güncellemeleri araştırılmalıdır.', severity: 'low', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12004,
        engines: [{
            slug: '25-hybrid-222-hp-ecvt-awdi',
            name: '2.5 Hybrid 222 HP AWD-i',
            fuelType: 'Hibrit',
            transmission: 'e-CVT / AWD-i',
            score: 88,
            description: 'RAV4 XA50’nin Türkiye’de öne çıkan 2.5 Hybrid AWD-i sistemi toplam 222 HP üretir ve arka aksı ayrı elektrik motoruyla destekler. Klasik şaftlı arazi sistemi değildir; satın alma kontrolü hibrit batarya, 12 V akü, dört lastik ve elektronik AWD verisine odaklanmalıdır.',
            pros: ['Güçlü ve verimli tam hibrit sistem', 'Elektrikli arka aksla AWD-i çekiş desteği', 'Kavramasız, dayanıklı e-CVT düzeni'],
            cons: ['Tam gazda yükselen motor sesi', 'ADAC verilerinde bazı model yıllarında 12 V akü kaynaklı yol yardımı', 'Ağır arazi yerine yol ve hafif zemin odaklı AWD-i'],
            chronicIssues: [
                { title: '12 V akü ve üretim güncellemesi kontrolü', description: 'ADAC 2026 raporu belirli 2016-2023 tescilli RAV4’lerde 12 V akü kaynaklı yol yardımını vurguluyor ve Toyota’nın üretim önlemlerini aktarıyor. Akü kapasitesi, şarj durumu ve şasiye bağlı servis aksiyonu kayıtla doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'Hibrit batarya ve AWD-i arka motor testi', description: 'Hücre dengesi, soğutma kanalı ve hata hafızası okunmalı; kaygan zeminde AWD-i devreye girme verisi kontrollü biçimde izlenmelidir. Dört lastiğin uyumsuz çevresi ve düşük basıncı elektrikli arka aks davranışını etkileyebilir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12005,
        engines: [{
            slug: 'b4-197-hp-mild-hybrid-8at',
            name: 'B4 197 HP Mild Hybrid',
            fuelType: 'Hibrit',
            transmission: '8 ileri otomatik',
            score: 83,
            description: 'XC40 B4, iki litrelik turbo benzinli motoru 48 V hafif hibrit destek ve sekiz ileri otomatik şanzımanla birleştirir. Sistem haricî şarj edilmez; ekspertizde soğutma, yağ sızıntısı, 12/48 V enerji yönetimi ve şanzıman davranışı birlikte değerlendirilmelidir.',
            pros: ['197 HP ile yeterli performans', '48 V destekle akıcı yeniden çalıştırma', 'Sekiz ileri otomatikle uyumlu uzun yol sürüşü'],
            cons: ['48 V sistem için uzman teşhis gereksinimi', 'Premium sınıf bakım ve parça maliyeti', 'Şehir içinde ağırlığa bağlı tüketim'],
            chronicIssues: [
                { title: '12 V ve 48 V enerji sistemi taraması', description: 'Her iki düşük voltaj/yardımcı enerji sistemi yük altında ölçülmeli; marş-jeneratör, DC/DC dönüştürücü ve enerji yönetimi hata kayıtları okunmalıdır. Çoklu elektronik uyarılar parça değişiminden önce yazılım ve akü durumuyla birlikte ele alınmalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'Soğutma, yağ sızıntısı ve 8AT testi', description: 'Motor soğukken kaçak izi, sıvı seviyesi ve turbo hortumları incelenmeli; şanzıman D-R geçişi ile sıcak/soğuk vites değişimleri denenmelidir. Sertlik varsa takoz, yazılım, adaptasyon ve bakım geçmişi beraber kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12006,
        engines: [{
            slug: '320i-170-184-hp-8at',
            name: '320i 170/184 HP',
            fuelType: 'Benzin',
            transmission: '8 ileri Steptronic',
            score: 84,
            description: 'BMW G20 320i Türkiye’de model yılına göre 1.6 litre 170 bg veya güncel ürün gamında 2.0 litre 184 bg olarak görülebilir. İlan adından karar verilmemeli; motor kodu, hacim ve güç ruhsat/şasi üzerinden doğrulanarak B48 ailesi soğutma ve 8AT kontrolleri yapılmalıdır.',
            pros: ['Dengeli güç ve arkadan itiş karakteri', 'ZF sekiz ileri otomatikle başarılı uyum', 'Yaygın servis ve ikinci el bilgi birikimi'],
            cons: ['Sürüm ve motor hacmi model yılına göre değişebilir', 'Soğutma ve yağ kaçağında premium onarım maliyeti', 'Kısa mesafede 12 V enerji yönetimi hassasiyeti'],
            chronicIssues: [
                { title: 'B48 soğutma ve yağ sızıntısı ön kontrolü', description: 'Genleşme kabı, termostat/su pompası çevresi, yağ filtre gövdesi ve motor altı kuru olmalıdır. Eksiltme varsa basınç testi ve UV inceleme yapılmalı; yüzeysel kirlenme doğrudan büyük motor arızası olarak yorumlanmamalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'ZF 8HP, takoz ve adaptasyon kontrolü', description: 'Şanzıman soğuk ve sıcak durumda D-R geçişi, düşük hız ve güçlü hızlanmada denenmelidir. Vuruntu varsa yazılım/adaptasyon, motor-şanzıman takozları, şaft bağlantıları ve yağ geçmişi sistematik biçimde incelenmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12007,
        engines: [{
            slug: 'c200-204-hp-48v-9g-4matic',
            name: 'C 200 204 HP + 48 V',
            fuelType: 'Hibrit',
            transmission: '9G-TRONIC / 4MATIC',
            score: 82,
            description: 'W206 C 200, 1.5 litre turbo benzinli motoru 48 V entegre marş jeneratörüyle destekler; Türkiye broşüründe 204 bg, 300 Nm, 9G-TRONIC ve 4MATIC olarak yer alır. Bu nedenle klasik motor kontrolüne 12/48 V teşhisi ve MBUX yazılım geçmişi eklenmelidir.',
            pros: ['204 bg ve 48 V destekle akıcı performans', 'Dokuz ileri otomatik ve 4MATIC çekiş', 'Düşük devirde elektrik destekli tepki'],
            cons: ['48 V sistem arızalarında uzman ekipman ihtiyacı', 'Yoğun elektronik mimarinin yazılım bağımlılığı', 'Bakım ve orijinal parça maliyeti'],
            chronicIssues: [
                { title: '48 V ISG ve enerji yönetimi kontrolü', description: '12 V ve 48 V batarya durumları, entegre marş jeneratörü, DC/DC dönüştürücü ve enerji yönetimi hata geçmişi okunmalıdır. Marş gecikmesi veya çoklu uyarı görülürse bileşen değişiminden önce güncelleme ve düşük voltaj beslemesi doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                { title: '9G-TRONIC, soğutma ve yazılım testi', description: 'Soğuk-sıcak vites geçişleri, D-R seçimi, motor soğutma sıvısı ve MBUX/ADAS işlevleri birlikte denenmelidir. Sertlik ya da uyarı varsa şanzıman adaptasyonu, takozlar, sensörler ve servis kampanyası kaydı ayrı ayrı kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12008,
        engines: [{
            slug: '130-kw-177-ps-elektrik-451-kwh', name: '130 kW (177 PS) Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 82,
            description: 'ATTO 2’nin önden çekişli elektrik motoru 130 kW ve 290 Nm üretir; enerji 45,1 kWh Blade LFP bataryadan gelir. 312 km WLTP ve 65 kW DC değerleri kullanım şartlarına bağlıdır; ikinci elde batarya raporu, alt gövde ve gerçek şarj oturumu esas alınmalıdır.',
            pros: ['Şehir kullanımı için canlı 130 kW motor', 'Dayanıklılık odaklı LFP hücre kimyası', 'Isı pompası ve V2L desteği'], cons: ['65 kW DC şarj uzun yolda sınırlayıcı', '312 km WLTP otoyol ve kışta azalır', 'Uzun dönem saha verisi henüz oluşmadı'],
            chronicIssues: [
                { title: '45,1 kWh batarya sağlık ve izolasyon testi', description: 'Teşhis cihazıyla kullanılabilir kapasite, hücre voltaj sapması, sıcaklık ve izolasyon kayıtları okunmalı; alt muhafaza liftte incelenmelidir. Gösterge menzili sürüş geçmişine bağlı olduğundan tek başına sağlık yüzdesi yerine geçmez.', severity: 'medium', reportCount: 0 },
                { title: '65 kW DC şarj ve 12 V sistem kontrolü', description: 'Uygun hızlı şarj istasyonunda oturum başlatma, soket kilidi ve şarj eğrisi denenmelidir. Hız sıcaklık ve doluluğa bağlıdır; bağlantı ya da elektronik uyarıda 12 V akü ve yazılım sürümü de ayrı olarak kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12009,
        engines: [{
            slug: '150-kw-204-ps-elektrik-6048-kwh', name: '150 kW (204 PS) Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 85,
            description: 'ATTO 3, 150 kW ve 310 Nm üreten önden çekişli motoru 60,48 kWh Blade LFP bataryayla birleştirir. Resmî birleşik menzil 420 km, DC şarj gücü 110 kW’tır; ekspertizde batarya sağlığı kadar güncel ADAS yazılımı da doğrulanmalıdır.',
            pros: ['150 kW ile güçlü günlük performans', '60,48 kWh LFP batarya', 'Isı pompası, V2L ve 110 kW DC şarj'], cons: ['DC hız yeni nesil rakiplerin gerisinde kalabilir', 'Önden çekişte lastik kalitesi önemli', 'Eski model yılı araçlarda ADAS yazılım sürümü kontrolü'],
            chronicIssues: [
                { title: 'Blade batarya ve 110 kW şarj kontrolü', description: 'Batarya sağlık raporu, hücre dengesi, alt muhafaza ve uygun istasyonda DC şarj oturumu kontrol edilmelidir. Şarj gücü batarya sıcaklığı ve dolulukla değiştiğinden sonuç, üreticinin ideal tepe değeriyle tek noktada kıyaslanmamalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'ADAS yazılımı ve kamera kalibrasyonu', description: 'Euro NCAP, erken 2022 model yılı ATTO 3’lerde sürüş desteği yazılımının güncellenmesini özellikle vurgular. Türkiye aracında model yılı, yazılım sürümü, kamera/radar kalibrasyonu ve servis kampanyası şasi numarasıyla doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12010,
        engines: [{
            slug: '160-kw-elektrik-87-kwh', name: '160 kW Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 84,
            description: 'SEAL U EV’nin 160 kW önden çekişli motoru 87 kWh Blade LFP bataryayla eşleşir ve resmî WLTP birleşik menzili 500 km’dir. Büyük batarya uzun yol esnekliği sağlar; satın alma kontrolünde taban darbesi, hücre dengesi, şarj ve termal yönetim ölçülmelidir.',
            pros: ['87 kWh LFP ile yüksek kullanılabilir menzil', '160 kW motorla yeterli aile performansı', 'V2L ve geniş kabin'], cons: ['Yüksek araç ağırlığı', 'Lastik ve fren maliyetinin kompakt EV’lerden yüksekliği', 'Şarj eğrisinin hava ve istasyona duyarlılığı'],
            chronicIssues: [
                { title: '87 kWh batarya ve taban muhafazası', description: 'Batarya sağlık yüzdesi, hücre voltaj farkı, sıcaklık ve izolasyon kodları üretici uyumlu cihazla okunmalı; taban muhafazası darbe ve uygunsuz kaldırma izi açısından incelenmelidir. Kozmetik çizik ile yapısal hasar ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'Şarj, ısı pompası ve yazılım testi', description: 'AC/DC şarj başlangıcı, soket kilidi, ısı pompası, iklimlendirme, ön koşullandırma ve uygulama bağlantısı denenmelidir. Beklenenden düşük hızda istasyon, doluluk ve sıcaklık etkileri elenmeden bileşen arızası kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 163,
        engines: [
            {
                slug: 'dmi-218-ps-fwd', name: 'DM-i 218 PS FWD', fuelType: 'Hibrit', transmission: 'E-CVT / FWD', score: 86,
                description: 'SEAL U DM-i önden çekişli versiyon, 1.5 litre benzinli motoru elektrikli tahrik ve 18,3 kWh Blade LFP bataryayla birleştirir; sistem gücü 218 PS’tir. Düzenli şarj kullanım ekonomisini belirgin etkiler; ekspertiz hem içten yanmalı hem yüksek voltaj sistemini kapsamalıdır.',
                pros: ['Günlük rotada elektrikli sürüş imkânı', '218 PS ile yeterli performans', 'LFP batarya ve V2L desteği'], cons: ['Şarj edilmezse tüketim avantajı azalır', 'İki enerji sistemi nedeniyle kapsamlı ekspertiz', 'Uzun dönem Türkiye verisi sınırlı'],
                chronicIssues: [
                    { title: 'DM-i geçişleri ve benzinli motor kontrolü', description: 'Araç soğukken benzinli motor çalıştırılmalı; yağ/su seviyesi, düzensiz rölanti ve yakıtın yaşlanma ihtimali incelenmelidir. EV-Hybrid geçişleri yol testinde izlenmeli, davranış teşhis verisi olmadan şanzıman arızası diye yorumlanmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: '18,3 kWh batarya ve şarj portu testi', description: 'Batarya sağlık raporu, hücre dengesi, AC/DC şarj başlangıcı, port kilidi, alt muhafaza ve termal yönetim kontrol edilmelidir. Elektrikli menzil; iklimlendirme, hız ve sıcaklığa bağlı olduğundan tek sürüş sonucu kapasite kaybını kanıtlamaz.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'dmi-324-ps-awd', name: 'DM-i 324 PS AWD', fuelType: 'Hibrit', transmission: 'E-CVT / AWD', score: 85,
                description: 'SEAL U DM-i AWD, 18,3 kWh Blade batarya ve ikinci elektrik motoruyla toplam 324 PS üretir. Performans ve çekiş artarken ağırlık, lastik uyumu ve sistem karmaşıklığı da yükselir; şarj edilebilir hibrit ve arka elektrik aksı birlikte taranmalıdır.',
                pros: ['324 PS sistem gücü', 'Çift motorlu dört tekerlekten çekiş', 'Elektrikli günlük kullanım ve uzun yol esnekliği'], cons: ['FWD sürümden daha ağır', 'Dört lastiğin eşleşmesine hassasiyet', 'Karmaşık aktarma için uzman teşhis gereksinimi'],
                chronicIssues: [
                    { title: 'AWD elektrik motoru ve lastik eşleşmesi', description: 'Ön ve arka motor hata kayıtları ile tork dağılım verisi okunmalı; dört lastiğin ölçü, model, basınç ve aşınma oranı uyumlu olmalıdır. Düzensiz lastik çevresi çekiş kontrolünü etkileyebileceğinden yol testiyle birlikte değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DM-i batarya, şarj ve termal yönetim', description: 'Hücre dengesi, kullanılabilir kapasite, izolasyon, alt muhafaza, AC/DC şarj ve soğutma sistemi test edilmelidir. Yüksek tüketim görülürse önce şarj sıklığı, sürüş modu ve sıcaklık kaydedilmeli; mekanik arıza sonucu acele verilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2070,
        engines: [{
            slug: '150-kw-204-ps-elektrik-604-kwh', name: '150 kW (204 PS) Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 86,
            description: 'BYD DOLPHIN’in Türkiye versiyonu 150 kW ve 310 Nm üreten önden çekişli motoru 60,4 kWh Blade LFP bataryayla birleştirir; resmî WLTP birleşik menzili 427 km’dir. Ekspertizde batarya raporu, alt gövde, şarj ve güncel yazılım birlikte kontrol edilmelidir.',
            pros: ['Kompakt otomobilde güçlü 150 kW motor', '60,4 kWh LFP batarya', '427 km WLTP birleşik menzil'], cons: ['Kış ve otoyolda menzil düşüşü', 'Önden çekişte lastik kalitesi önemli', 'Uzun dönem yerel saha verisi sınırlı'],
            chronicIssues: [
                { title: '60,4 kWh batarya ve alt muhafaza', description: 'Sağlık raporu, hücre voltaj dengesi, sıcaklık ve izolasyon değerleri okunmalı; batarya alt plakası darbe açısından liftte görülmelidir. Ekrandaki tahmini menzil geçmiş kullanıma göre değiştiğinden kapasite ölçümü olarak kabul edilmemelidir.', severity: 'medium', reportCount: 0 },
                { title: 'Şarj portu, 12 V akü ve yazılım', description: 'AC/DC şarj oturumu, soket kilidi, 12 V akü yük testi, ekranlar, kameralar ve sürüş destekleri denenmelidir. Birden fazla elektronik uyarıda önce düşük voltaj beslemesi ve yazılım sürümü kontrol edilmelidir.', severity: 'low', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 2082,
        engines: [{
            slug: '230-kw-313-ps-elektrik-825-kwh-rwd', name: '230 kW (313 PS) Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / RWD', score: 88,
            description: 'BYD SEAL Design, 230 kW ve 360 Nm üreten arkadan itişli elektrik motorunu 82,5 kWh Blade LFP ve Cell-to-Body yapıyla birleştirir. Güçlü şasi kadar batarya tabanının doğru kaldırılması, lastik eşleşmesi, şarj ve yazılım geçmişi de satın alma kararında önemlidir.',
            pros: ['230 kW arkadan itişli performans', '82,5 kWh Blade LFP batarya', '800 V mimari ve alçak ağırlık merkezi'], cons: ['Performans lastiği maliyeti', 'Alçak batarya tabanının darbe kontrolü', 'Soğuk ve yüksek hızda menzil kaybı'],
            chronicIssues: [
                { title: 'CTB batarya ve kaldırma noktaları kontrolü', description: 'Bataryanın gövdeye entegre yapısı nedeniyle lift kolları yalnızca tanımlı noktalara yerleştirilmelidir. Sağlık raporu, hücre dengesi, izolasyon ve alt tabandaki darbe/ezik birlikte incelenmeli; hasar uzman görüşüyle sınıflandırılmalıdır.', severity: 'medium', reportCount: 0 },
                { title: 'RWD lastik, rot ve sürüş desteği testi', description: 'Arka lastik aşınması, dört teker rot ayarı, fren ve süspansiyon sesi kontrol edilmelidir. Kamera ya da cam değişimi varsa ADAS kalibrasyonu; aralıklı uyarılarda 12 V akü ve güncel araç yazılımı ayrıca doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 2083,
        engines: [
            {
                slug: '230-kw-elektrik-rwd', name: '230 kW Elektrik RWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / RWD', score: 87,
                description: 'SEALION 7’nin arkadan itişli versiyonu 230 kW elektrik motorunu Blade LFP ve Cell-to-Body batarya yapısıyla birleştirir. Model yılı ve donanıma göre batarya kapasitesi değişebildiğinden kesin teknik değer şasi üzerinden doğrulanmalı; sağlık, taban ve şarj testi yapılmalıdır.',
                pros: ['230 kW arkadan itişli performans', 'LFP hücre kimyası', 'Euro NCAP 2025 beş yıldız'], cons: ['Büyük jant ve lastik maliyeti', 'Yüksek gövde ağırlığı', 'Yeni modelde uzun dönem veri sınırlı'],
                chronicIssues: [
                    { title: 'CTB batarya, kapasite ve taban kontrolü', description: 'Araçtaki batarya versiyonu şasi numarasıyla doğrulanmalı; sağlık yüzdesi, hücre sapması, izolasyon ve alt muhafaza incelenmelidir. Ekran menzili koşullara bağlıdır ve ölçümlü batarya raporunun yerine geçmez.', severity: 'medium', reportCount: 0 },
                    { title: 'RWD lastik ve hızlı şarj testi', description: 'Arka lastik aşınması, rot, süspansiyon ve fren kontrolünden sonra uygun istasyonda DC şarj denenmelidir. Şarj eğrisi sıcaklık ve doluluğa bağlı olduğundan düşük tek değer yerine oturum kaydı ve hata hafızası değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '390-kw-elektrik-awd', name: '390 kW Elektrik AWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / AWD', score: 86,
                description: 'SEALION 7 Excellence AWD, ön ve arka elektrik motorlarıyla toplam 390 kW güç sunan yüksek performanslı versiyondur. Güç ve ağırlık nedeniyle batarya tabanı, iki motorun hata verisi, dört lastiğin çevre uyumu, frenler ve hızlı şarj birlikte incelenmelidir.',
                pros: ['390 kW çift motorlu performans', 'Elektronik dört tekerlekten çekiş', 'Güçlü güvenlik ve sürüş destek paketi'], cons: ['Yüksek lastik ve enerji tüketimi', 'Ağır gövdenin frenlere yükü', 'Karmaşık çift motor teşhisi'],
                chronicIssues: [
                    { title: 'Çift motor ve AWD veri kontrolü', description: 'Ön/arka inverter ve motor hata hafızaları, tork dağılımı ve soğutma sıcaklıkları okunmalıdır. Dört lastiğin ölçü, marka, aşınma ve basıncı uyumlu değilse çekiş davranışı değişebilir; önce lastik şartları eşitlenmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Batarya, fren ve hızlı şarj kontrolü', description: 'Sağlık raporu, hücre dengesi, taban muhafazası, fren diskleri ve DC şarj oturumu test edilmelidir. Performanslı kullanım lastik/fren aşınmasını artırabilir; elektronik uyarılar 12 V akü ve yazılımla birlikte ele alınmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 11,
        engines: [
            {
                slug: '160-kw-elektrik-rwd', name: '160 kW Elektrik RWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / RWD', score: 88,
                description: 'Togg T10X’in arkadan itişli temel güç aktarımı 160 kW ve 350 Nm üretir; standart ve uzun menzil batarya seçenekleri bulunur. İkinci elde tam kapasite şasi numarasıyla doğrulanmalı; Trumore/OTA geçmişi, batarya raporu, şarj ve alt gövde birlikte incelenmelidir.',
                pros: ['160 kW ile dengeli günlük performans', 'Standart ve uzun menzil seçenekleri', 'Yaygın Trugo DC şarj erişimi'], cons: ['Menzilin hava, hız ve janta duyarlılığı', 'Yazılım ve bağlantı servislerine bağımlılık', 'Büyük jantlarda lastik maliyeti'],
                chronicIssues: [
                    { title: 'Batarya versiyonu, sağlık ve şarj kontrolü', description: 'Standart/uzun menzil batarya şasi numarasıyla doğrulanmalı; hücre dengesi, kullanılabilir kapasite, izolasyon, alt muhafaza ve AC/DC şarj test edilmelidir. Tahmini menzil sürüş geçmişinden etkilendiği için tek başına sağlık ölçümü değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'Trumore, OTA, ekran ve 12 V sistemi', description: 'Trumore eşleşmesi, dijital anahtar, ekranlar, kameralar, sürüş destekleri ve OTA sürümü denenmelidir. Aralıklı bağlantı veya çoklu uyarıda 12 V akü yük testi, ağ erişimi, modül hatası ve servis güncellemesi birlikte kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '320-kw-4more-elektrik-awd', name: '320 kW 4More Elektrik AWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / AWD', score: 89,
                description: 'T10X 4More, ön ve arka elektrik motorlarıyla toplam 320 kW ve 700 Nm sunan dört tekerlekten çekişli versiyondur. Yüksek performans sebebiyle iki motorun teşhis verisi, termal yönetim, lastik çevresi, frenler ve batarya sağlığı birlikte kontrol edilmelidir.',
                pros: ['320 kW ve 700 Nm çift motorlu performans', 'Elektronik dört tekerlekten çekiş', 'Euro NCAP 2025 beş yıldızlı gövde'], cons: ['Yüksek lastik ve enerji tüketimi', 'Artan ağırlık ve fren yükü', 'Yeni versiyonda uzun dönem veri bulunmaması'],
                chronicIssues: [
                    { title: '4More çift motor ve lastik eşleşmesi', description: 'Ön ve arka motor/inverter hata kayıtları ile sıcaklık verileri okunmalı; dört lastik aynı ölçü, uyumlu desen ve yakın aşınmada olmalıdır. Yol testindeki çekiş farkı lastik ve zemin etkileri elenmeden aktarma arızası sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Batarya, fren ve yazılım kontrolü', description: 'Batarya sağlık raporu, alt muhafaza, hızlı şarj, fren diskleri, OTA sürümü ve ADAS fonksiyonları birlikte test edilmelidir. Performanslı kullanım mekanik sarfı artırabileceğinden lastik/fren ölçümü kayıtla karşılaştırılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2069,
        engines: [
            {
                slug: '160-kw-elektrik-rwd', name: '160 kW Elektrik RWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / RWD', score: 90,
                description: 'Togg T10F’in arkadan itişli versiyonu 160 kW ve 350 Nm üretir; uzun menzil seçeneğinde 623 km’ye kadar WLTP değeri açıklanmıştır. Yeni modelde kesin batarya/donanım şasi numarasıyla doğrulanmalı; teslimat yazılımı, batarya, şarj ve gövde kontrolü belgelenmelidir.',
                pros: ['623 km’ye kadar açıklanan WLTP menzil', '160 kW arkadan itişli düzen', 'Verimli fastback gövde'], cons: ['Yeni modelde uzun dönem saha verisi yok', 'Menzil hız, hava ve janta duyarlı', 'Yoğun dijital donanımın yazılım bağımlılığı'],
                chronicIssues: [
                    { title: 'Batarya sürümü, sağlık ve DC şarj testi', description: 'Araçtaki batarya kapasitesi şasi numarasıyla doğrulanmalı; hücre dengesi, kullanılabilir kapasite, izolasyon, alt muhafaza ve hızlı şarj denenmelidir. 623 km üst sınırı belirli versiyon ve test koşuludur; her kullanım için garanti değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'Teslimat yazılımı ve ADAS kontrolü', description: 'Ekranlar, Trumore, dijital anahtar, kameralar, şerit/acil fren destekleri ve OTA sürümü tek tek denenmelidir. Yeni araçtaki bir bildirim kronik kusur sayılmamalı; tekrar, hata kodu ve servis çözümü kayıt altına alınmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '320-kw-4more-elektrik-awd', name: '320 kW 4More Elektrik AWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / AWD', score: 89,
                description: 'T10F 4More, çift elektrik motoruyla 320 kW ve 700 Nm üreten dört tekerlekten çekişli performans versiyonudur. Yeni güç aktarımında uzun dönem arıza istatistiği henüz yoktur; iki motor, batarya, soğutma, lastik, fren ve yazılım ölçümlü biçimde kontrol edilmelidir.',
                pros: ['320 kW ve 700 Nm performans', 'Çift motorlu dört tekerlekten çekiş', 'Euro NCAP 2025 beş yıldız'], cons: ['Yüksek performansa bağlı sarf maliyeti', 'Artan ağırlık ve enerji tüketimi', 'Uzun dönem güvenilirlik verisi henüz yok'],
                chronicIssues: [
                    { title: 'Çift motor, inverter ve termal yönetim', description: 'Ön/arka motor ve inverter hata hafızaları, tork dağılımı ve sıcaklık değerleri okunmalı; soğutma ile iklimlendirme yük altında denenmelidir. Anlık güç kısıtlaması sıcaklık ve şarj seviyesi elenmeden arıza olarak sınıflandırılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Lastik, fren, batarya ve OTA kontrolü', description: 'Dört lastiğin ölçü/aşınması, frenler, alt batarya muhafazası, hızlı şarj ve güncel OTA sürümü incelenmelidir. Performanslı kullanım sarfı hızlandırabilir; mekanik ölçüm ile dijital servis kaydı birbiriyle karşılaştırılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 3,
        engines: [
            {
                slug: '15-dynamic-force-125-hp-multidrive-s', name: '1.5 Dynamic Force 125 HP', fuelType: 'Benzin', transmission: 'Multidrive S CVT', score: 86,
                description: 'Corolla Sedan’ın 1.5 Dynamic Force benzinli motoru 125 HP güç üretir ve Türkiye’de Multidrive S sürekli değişken oranlı otomatik şanzımanla sunulur. İkinci elde soğuk çalışma, servis sıvıları, şanzıman davranışı ve kayıtlı hata geçmişi birlikte incelenmelidir.',
                pros: ['Atmosferik motorun doğrusal güç üretimi', 'Şehir kullanımında akıcı otomatik şanzıman', 'Yaygın Toyota servis ağı'], cons: ['Yüksek devirde belirgin motor sesi', 'Turbo rakiplere göre düşük alt devir torku', 'CVT bakım geçmişinin doğrulanması'],
                chronicIssues: [
                    { title: 'Multidrive S sıcak-soğuk çalışma kontrolü', description: 'Araç soğuk ve tam ısınmış halde D-R seçimi, kalkış ve sabit hızda denenmeli; uğultu, gecikme veya titremede yağ seviyesi/standardı, adaptasyon ve takozlar birlikte incelenmelidir. Tek sürüş hissi şanzıman arızası kanıtı değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'Motor yağı, soğutma ve ateşleme kontrolü', description: 'Soğuk rölanti, ateşleme sayacı, yağ ve soğutma sıvısı kaçak izi incelenmeli; bakım faturaları üretici aralığı ve doğru malzeme standardıyla karşılaştırılmalıdır. Arıza lambası varsa kod silinmeden teşhis raporu alınmalıdır.', severity: 'low', reportCount: 0 },
                ],
            },
            {
                slug: '18-hybrid-140-hp-e-cvt', name: '1.8 Hybrid 140 HP', fuelType: 'Hibrit', transmission: 'e-CVT', score: 91,
                description: 'Makyajlı E210 Corolla’nın beşinci nesil 1.8 Hybrid sistemi 140 HP toplam güç üretir ve mekanik kayışlı CVT’den farklı güç bölüştürücü e-CVT kullanır. Batarya sağlık raporu, enerji geçişleri, soğutma kanalı ve fren geri kazanımı ölçümlü biçimde kontrol edilmelidir.',
                pros: ['Şehir içinde düşük tüketim', 'Kavramasız ve akıcı e-CVT yapısı', 'Olgun Toyota hibrit mimarisi'], cons: ['Hızlanmada yükselen motor sesi', 'Hibrit batarya için uzman teşhis', 'Uzun beklemede 12 V akü hassasiyeti'],
                chronicIssues: [
                    { title: 'Hibrit batarya hücre ve soğutma testi', description: 'Üretici uyumlu cihazla hücre blok farkları, sıcaklıklar ve hata geçmişi okunmalı; batarya hava girişi temizliği kontrol edilmelidir. Gösterge doluluk seviyesinin sürüşte değişmesi normaldir ve kapasite kaybını tek başına göstermez.', severity: 'medium', reportCount: 0 },
                    { title: '12 V akü ve rejeneratif fren kontrolü', description: '12 V akü yük altında ölçülmeli; fren pedalı, rejeneratif-mekanik geçiş ve disk yüzeyleri yol testinde incelenmelidir. Çoklu elektronik uyarı varsa yüksek voltaj sisteminden önce düşük voltaj beslemesi ve yazılım sürümü doğrulanmalıdır.', severity: 'low', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 4,
        engines: [
            {
                slug: '13-tce-140-hp-edc', name: '1.3 TCe 140 HP', fuelType: 'Benzin', transmission: '7 ileri EDC', score: 85,
                description: 'Megane Sedan 1.3 TCe 140, turbo benzinli motoru yedi ileri EDC çift kavramalı şanzımanla birleştirir. Satın alma öncesinde soğuk çalışma, turbo basıncı, soğutma devresi, EDC adaptasyonları ve ısınmış durumdaki düşük hız davranışı kontrol edilmelidir.',
                pros: ['140 HP ile dengeli performans', 'EDC ile hızlı vites geçişleri', 'Yaygın servis ve parça erişimi'], cons: ['Dur-kalkta çift kavrama hassasiyeti', 'Doğru yağ ve bakım standardına ihtiyaç', 'Turbo-soğutma sisteminin uzman kontrolü'],
                chronicIssues: [
                    { title: 'EDC kavrama adaptasyonu ve ısınma testi', description: 'D-R seçimi, yokuş kalkışı ve araç ısındıktan sonra sürünme hızı denenmeli; titremede kavrama değerleri, yazılım, motor takozları ve ateşleme düzgünlüğü birlikte ölçülmelidir. Hemen kavrama değişimi kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo, soğutma ve ateşleme kontrolü', description: 'Soğuk ilk çalıştırmada düzensiz rölanti, kaçak izi ve ateşleme sayacı; yol testinde turbo basıncı ve sıcaklıklar izlenmelidir. Yağ değişim faturaları doğru standartla doğrulanmalı, hata kodları satın alma öncesi kaydedilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-blue-dci-115-hp-edc', name: '1.5 Blue dCi 115 HP', fuelType: 'Dizel', transmission: '7 ileri EDC', score: 84,
                description: 'Megane Sedan’da sunulan 1.5 Blue dCi 115 HP dizel motor, yedi ileri EDC ile düşük tüketim ve uzun yol torku sağlar. DPF, EGR, AdBlue/SCR, enjektör düzeltmeleri ile EDC bakım ve adaptasyon geçmişi aynı teşhis oturumunda incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', 'Düşük devirde güçlü dizel torku', 'Yaygın servis tecrübesi'], cons: ['Kısa mesafede DPF doluluk riski', 'AdBlue/SCR bileşen maliyeti', 'EDC kavrama kontrol ihtiyacı'],
                chronicIssues: [
                    { title: 'DPF, EGR ve SCR veri kontrolü', description: 'DPF kurum/kül değeri, son rejenerasyon mesafesi, EGR komutu ve AdBlue/SCR hata geçmişi okunmalıdır. Kısa mesafe kullanım kaynaklı doluluk ile sensör veya enjektör arızası ayrılmadan temizlik ya da parça kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Enjektör ve EDC sıcak çalışma testi', description: 'Enjektör düzeltmeleri, yakıt basıncı, soğuk çalışma ve duman gözlenmeli; araç ısındığında EDC kalkış, D-R ve yokuş davranışı denenmelidir. Titreşimde motor çalışma kalitesi ile takozlar kavramadan ayrı değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12011,
        engines: [
            {
                slug: 'turbo-tce-edc-145', name: 'Turbo TCe EDC 145', fuelType: 'Benzin', transmission: '6 ileri EDC', score: 84,
                description: 'Güncel Duster Turbo TCe EDC 145, turbo benzinli motoru altı ileri çift kavramalı otomatik şanzımanla birleştirir. Yeni güç aktarımı olduğundan kesin arıza oranı iddiası yerine soğuk çalışma, soğutma, yazılım, kavrama adaptasyonu ve servis kampanyaları doğrulanmalıdır.',
                pros: ['145 PS ile yeterli günlük performans', 'Otomatik EDC kullanım rahatlığı', 'Türkiye üretimi ve servis erişimi'], cons: ['Yeni eşleşimde uzun dönem veri sınırlı', 'Dur-kalkta çift kavrama kullanımı', 'Yazılım ve bakım geçmişinin önemi'],
                chronicIssues: [
                    { title: 'EDC kalkış ve adaptasyon kontrolü', description: 'Soğuk-sıcak D-R geçişi, yokuş kalkışı ve düşük hızlı manevra denenmeli; titreme veya uyarıda adaptasyon, yazılım, kavrama sıcaklığı ve motor takozları birlikte incelenmelidir. Tek belirtiyle parça değişimi önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo ve soğutma sistemi testi', description: 'Soğuk çalışma, yağ ve soğutma sıvısı izi, turbo basıncı ve sıcaklık değerleri kontrol edilmelidir. Yeni modelde açık servis kampanyaları şasi numarasıyla sorgulanmalı; bakım belgeleri doğru sıvı standardıyla eşleştirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'full-hybrid-e-tech-160', name: 'full hybrid E-Tech 160', fuelType: 'Hibrit', transmission: 'Çok modlu otomatik', score: 87,
                description: 'Duster full hybrid E-Tech 160, benzinli motoru elektrik motorları ve yüksek voltaj bataryasıyla birleştirerek şehir içinde elektrik destekli sürüş sağlar. Enerji geçişleri, batarya hücreleri, soğutma, fren geri kazanımı ve güncel yazılım birlikte kontrol edilmelidir.',
                pros: ['Şehir içinde elektrik destekli verimlilik', '160 PS sistem gücü', 'Haricî şarj gerektirmeyen hibrit yapı'], cons: ['Karmaşık çok modlu güç aktarımı', 'Yeni sistemde uzun dönem veri sınırlı', 'Uzman hibrit teşhisi gereksinimi'],
                chronicIssues: [
                    { title: 'Hibrit batarya ve enerji akışı testi', description: 'Batarya hücre farkları, sıcaklıklar ve sistem hata geçmişi okunmalı; EV, hibrit ve motorlu sürüş geçişleri farklı yüklerde izlenmelidir. Motorun devreye girme sıklığı tek başına arıza değildir; sıcaklık ve dolulukla değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Çok modlu aktarma ve fren kontrolü', description: 'Kalkış, geri manevra, yokuş ve ani hızlanmada aktarma davranışı; fren pedalında rejeneratif-mekanik geçiş denenmelidir. Uyarı varsa yazılım, 12 V akü ve adaptasyonlar mekanik bileşenlerden önce birlikte kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'hybrid-4x4-150', name: 'hybrid 4x4 150', fuelType: 'Hibrit', transmission: 'Otomatik / 4x4', score: 85,
                description: 'Duster hybrid 4x4 150, ön aks içten yanmalı/hibrit tahriki arka aks elektrik desteğiyle birleştiren dört çeker seçenektir. Batarya, iki aksın tork yönetimi, alt gövde, yazılım ve dört lastiğin ölçü-aşınma uyumu satın alma öncesinde birlikte değerlendirilmelidir.',
                pros: ['Elektrik destekli dört tekerlekten çekiş', '150 PS sistem gücü', 'Arazi ve düşük tutunmada esneklik'], cons: ['Yeni ve daha karmaşık aktarma yapısı', 'Dört lastiğin eşleşme gereksinimi', 'Uzun dönem saha verisinin sınırlılığı'],
                chronicIssues: [
                    { title: 'Arka elektrik motoru ve 4x4 veri kontrolü', description: 'Ön ve arka tahrik modüllerinin hata kayıtları, sıcaklıkları ve tork talepleri okunmalı; farklı zemin modları güvenli alanda denenmelidir. Dört lastiğin ölçü, desen ve aşınması uyumlu değilse çekiş davranışı yanlış yorumlanabilir.', severity: 'medium', reportCount: 0 },
                    { title: 'Batarya, alt gövde ve soğutma kontrolü', description: 'Hibrit batarya hücre dengesi, soğutma ve izolasyon verileri kontrol edilmeli; alt muhafaza ile kaldırma noktaları darbe açısından incelenmelidir. Tekil uyarı yazılım ve 12 V besleme elenmeden yüksek voltaj arızası sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'eco-g-120-lpg', name: 'Eco-G 120', fuelType: 'LPG', transmission: 'Manuel', score: 83,
                description: 'Duster Eco-G 120, fabrikasyon LPG uyumlu benzinli motorla yakıt maliyetini düşürmeyi hedefler. İkinci elde LPG tank tarihi, kaçak testi, regülatör-enjektör verileri, benzin ve LPG’de soğuk/sıcak çalışma ile supap ayarı geçmişi belgeli biçimde incelenmelidir.',
                pros: ['Fabrika çıkışlı LPG sistemi', 'Düşük kilometre yakıt maliyeti', '120 PS günlük kullanım gücü'], cons: ['LPG bileşenleri için ek periyodik kontrol', 'Bagaj/yedek lastik düzenine olası etki', 'Yeni versiyonda uzun dönem veri sınırlı'],
                chronicIssues: [
                    { title: 'LPG tankı, kaçak ve kalibrasyon kontrolü', description: 'Tank üretim tarihi, multivalf, dolum ağzı, borular ve bağlantılar yetkin ekipmanla kaçak açısından test edilmelidir. Benzin-LPG geçişi ile yakıt düzeltmeleri okunmalı; koku veya düzensizlikte araç kullanılmadan sistem kapatılmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Soğuk çalışma ve supap ayarı geçmişi', description: 'Motor sabah ilk çalıştırmada önce benzinde denenmeli; rölanti, kompresyon ve yakıt düzeltmeleri iki yakıtta karşılaştırılmalıdır. Periyodik supap kontrolü ile buji/bobin bakımı faturadan doğrulanmalı, ayarsızlık yalnızca sese göre teşhis edilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2,
        engines: [
            {
                slug: '14-fire-95-hp-manuel', name: '1.4 Fire 95 HP', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 82,
                description: 'Egea Sedan’ın atmosferik 1.4 Fire motoru 95 HP güç üretir ve altı ileri manuel şanzımanla sunulmuştur. Basit yapısına karşın ikinci elde soğuk çalışma, yağ tüketimi belirtisi, soğutma sistemi, debriyaj ve özellikle LPG eklenmişse montaj kalitesi kontrol edilmelidir.',
                pros: ['Basit atmosferik motor yapısı', 'Yaygın parça ve servis erişimi', 'Manuel şanzıman bakım kolaylığı'], cons: ['Yüklü kullanımda sınırlı performans', 'LPG dönüşüm kalitesine duyarlılık', 'Yağ-bakım geçmişinin önemi'],
                chronicIssues: [
                    { title: 'Yağ tüketimi ve soğuk çalışma kontrolü', description: 'Motor tamamen soğukken çalıştırılmalı; egzoz dumanı, karter basıncı, kaçak ve yağ seviyesi izlenmelidir. Bakım faturaları ve kullanılan yağ standardı doğrulanmalı; eksiltme iddiası ölçümlü takip veya kompresyon testiyle değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'LPG ve debriyaj kontrolü', description: 'Sonradan LPG varsa tank tarihi, kaçak, regülatör, enjektör ve yakıt düzeltmeleri kontrol edilmelidir. Debriyaj kavrama noktası, yük altında kaçırma ve vites geçişleri denenmeli; titreşimde takozlar ayrıca incelenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-multijet-130-hp-manuel', name: '1.6 MultiJet 130 HP', fuelType: 'Dizel', transmission: '6 ileri manuel', score: 85,
                description: 'Egea Sedan 1.6 MultiJet 130 HP manuel, 320 Nm torkuyla özellikle uzun yol ve yüklü kullanımda güçlü bir seçenektir. DPF/EGR, enjektör düzeltmeleri, turbo, triger-bakım kayıtları, çift kütle volan ve debriyaj yol testiyle birlikte değerlendirilmelidir.',
                pros: ['320 Nm güçlü dizel torku', 'Uzun yolda düşük tüketim', 'Yaygın servis ve parça erişimi'], cons: ['Kısa mesafede DPF doluluk riski', 'Debriyaj/volan maliyeti', 'Emisyon sistemi teşhis gereksinimi'],
                chronicIssues: [
                    { title: 'DPF, EGR ve enjektör verisi', description: 'DPF doluluk/kül değeri, son rejenerasyon mesafesi, EGR komutu ve enjektör düzeltmeleri okunmalıdır. Kısa mesafe kaynaklı kurum ile sensör, turbo veya enjektör problemi ayrılmadan temizlik ya da değişim önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Debriyaj, volan ve turbo kontrolü', description: 'Yüksek viteste yük altında debriyaj kaçırma, rölantide volan sesi ve kalkış titreşimi aranmalı; turbo basıncı ile yağ kaçak izi incelenmelidir. Motor takozları ve enjektör dengesizliği titreşim kaynağı olarak ayrıca elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-multijet-130-hp-6at', name: '1.6 MultiJet 130 HP Otomatik', fuelType: 'Dizel', transmission: '6 ileri otomatik', score: 86,
                description: 'Güncel Egea Sedan 1.6 MultiJet 130 HP otomatik, 320 Nm dizel motoru altı ileri tork konvertörlü şanzımanla eşleştirir. DPF/EGR/enjektör verileri yanında şanzıman yağı, kaçak, sıcak-soğuk geçiş ve kullanım geçmişi ölçümlü biçimde kontrol edilmelidir.',
                pros: ['320 Nm tork ve otomatik kullanım rahatlığı', 'Uzun yolda düşük tüketim', 'Tork konvertörlü altı ileri yapı'], cons: ['Dizel emisyon sistemi maliyeti', 'Şanzıman bakım kaydının önemi', 'Filo geçmişli araçlarda yoğun kullanım riski'],
                chronicIssues: [
                    { title: 'Altı ileri otomatik sıcak-soğuk testi', description: 'Şanzıman soğukken ve tam ısındığında D-R seçimi, hafif/sert hızlanma ve yokuşta denenmeli; yağ kaçakları ile hata hafızası kontrol edilmelidir. Sertlik varsa motor çalışma kalitesi ve takozlar elenmeden revizyon kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DPF, EGR ve kilometre geçmişi kontrolü', description: 'DPF rejenerasyon ve kül verisi, EGR, enjektör düzeltmeleri ile turbo basıncı okunmalı; servis faturası, muayene ve kullanım kayıtları kilometreyle karşılaştırılmalıdır. Kısa mesafe profili arıza kaydı olmadan da doluluğu artırabilir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 162,
        engines: [{
            slug: '18-hybrid-140-hp-e-cvt', name: '1.8 Hybrid 140 HP', fuelType: 'Hibrit', transmission: 'e-CVT', score: 90,
            description: 'İkinci nesil Toyota C-HR’ın Türkiye’deki 1.8 Hybrid güç aktarımı 140 HP sistem gücü sunar ve güç bölüştürücü e-CVT kullanır. İkinci elde batarya hücre raporu, soğutma girişi, enerji geçişleri, 12 V akü ve rejeneratif fren davranışı birlikte kontrol edilmelidir.',
            pros: ['Şehir içinde düşük tüketim', 'Kavramasız e-CVT akıcılığı', 'Olgun Toyota hibrit mimarisi'], cons: ['Hızlanmada motor sesinin yükselmesi', 'Batarya için uzman teşhis ihtiyacı', 'Uzun beklemede 12 V akü hassasiyeti'],
            chronicIssues: [
                { title: 'Hibrit batarya hücre ve sıcaklık testi', description: 'Üretici uyumlu cihazla hücre blok farkları, sıcaklıklar ve kayıtlı hata kodları okunmalı; soğutma hava girişi temiz olmalıdır. Gösterge doluluk değişimi sistemin normal enerji yönetimidir ve tek başına kapasite kaybı kanıtı değildir.', severity: 'medium', reportCount: 0 },
                { title: '12 V sistem ve rejeneratif fren kontrolü', description: '12 V akü yük altında ölçülmeli; fren pedalı, rejeneratif-mekanik geçiş ve disk yüzeyleri incelenmelidir. Elektronik uyarılar varsa yüksek voltaj parçası suçlanmadan önce düşük voltaj beslemesi, yazılım ve sensör kayıtları kontrol edilmelidir.', severity: 'low', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12012,
        engines: [
            {
                slug: '10-tsi-95-110-115-ps', name: '1.0 TSI 95/110/115 PS', fuelType: 'Benzin', transmission: 'Manuel / DSG', score: 83,
                description: 'Taigo’nun üç silindirli 1.0 TSI motoru model yılına göre 95, 110 veya 115 PS güçle, manuel ya da DSG şanzımanla görülebilir. Kesin güç ve şanzıman ruhsat/şasi numarasıyla doğrulanmalı; soğuk çalışma, turbo, soğutma ve DSG davranışı incelenmelidir.',
                pros: ['Günlük kullanımda düşük tüketim', 'Kompakt ve hafif turbo motor', 'DSG seçeneğiyle hızlı geçiş'], cons: ['Üç silindirli rölanti karakteri', 'DSG dur-kalk hassasiyeti', 'Güç değerinin model yılına göre değişmesi'],
                chronicIssues: [
                    { title: 'Soğuk çalışma, ateşleme ve turbo kontrolü', description: 'Motor tamamen soğukken rölanti, ateşleme sayacı, yağ-soğutma sıvısı izi ve turbo basıncı gözlenmelidir. Üç silindirli normal titreşim ile tekleme, takoz veya bobin sorunu teşhis cihazı ve karşılaştırmalı testle ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG kavrama ve yazılım kontrolü', description: 'DSG’li araçta D-R seçimi, yokuş kalkışı ve ısınmış durumda düşük hızlı manevra denenmeli; titremede adaptasyon, kavrama sıcaklığı, yazılım ve takozlar birlikte ölçülmelidir. Manuel araçta debriyaj kaçırma ayrıca kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-tsi-150-ps-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 85,
                description: 'Taigo 1.5 TSI 150 PS, silindir kapatma teknolojili turbo benzinli motoru yedi ileri DSG ile birleştirir. Güçlü performansın yanında ACT geçişleri, soğuk çalışma, soğutma devresi, turbo ve DSG adaptasyonları satın alma öncesinde birlikte değerlendirilmelidir.',
                pros: ['150 PS güçlü ara hızlanma', 'Silindir kapatmayla verimlilik', 'Hızlı DSG vites geçişleri'], cons: ['Çift kavrama kullanım hassasiyeti', 'Turbo ve soğutma kontrol ihtiyacı', 'Büyük jantlarda lastik maliyeti'],
                chronicIssues: [
                    { title: 'ACT geçişi, ateşleme ve soğutma kontrolü', description: 'Motor soğukken ve sabit hızda denenmeli; ACT silindir geçişi, ateşleme sayaçları, yağ/soğutma kaçak izi ve çalışma sıcaklığı izlenmelidir. Hafif geçiş hissi doğrudan arıza sayılmamalı; hata kaydıyla doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG sıcak kullanım ve adaptasyon testi', description: 'Yokuş kalkışı, D-R seçimi ve yoğun trafik hızları araç ısındıktan sonra denenmeli; kavrama aşınma/adaptasyon değeri ile yazılım okunmalıdır. Titreme varsa motor takozu, lastik ve ateşleme kaynakları şanzımandan ayrı elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 21,
        engines: [
            {
                slug: '12-hybrid-145-e-dcs6', name: '1.2 Hybrid 145', fuelType: 'Hibrit', transmission: '6 ileri e-DCS6', score: 84,
                description: 'Güncel Peugeot 2008 Hybrid 145, 1.2 litre turbo benzinli motoru 48 V batarya ve e-DCS6 içine entegre elektrik motoruyla birleştirir. Yeni sistemde uzun dönem veri sınırlı olduğundan enerji akışı, kavrama adaptasyonu, yazılım, 48 V ve 12 V sistemler test edilmelidir.',
                pros: ['Şehirde elektrik destekli sürüş', '145 HP sistem gücü', 'Haricî şarj gerektirmeyen hibrit'], cons: ['Yeni güç aktarımında uzun dönem veri az', 'Çift kavramalı şanzıman kontrolü', 'İki düşük voltaj sisteminin teşhis ihtiyacı'],
                chronicIssues: [
                    { title: '48 V batarya ve e-DCS6 kontrolü', description: '48 V batarya sağlık/sıcaklık verileri, enerji akışı, kavrama adaptasyonları ve hata geçmişi okunmalı; soğuk-sıcak D-R, yokuş ve düşük hız denenmelidir. Geçiş hissi yazılım ve adaptasyon görülmeden mekanik arıza sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: '12 V akü, yazılım ve soğutma testi', description: '12 V akü yük altında ölçülmeli; motorun soğuk çalışması, soğutma sıcaklığı, ekran ve ADAS fonksiyonları kontrol edilmelidir. Birden fazla elektronik uyarıda güç aktarım parçasından önce besleme voltajı ile yazılım sürümü doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '12-puretech-130-eat8', name: '1.2 PureTech 130', fuelType: 'Benzin', transmission: '8 ileri EAT8', score: 76,
                description: 'Makyaj öncesi Peugeot 2008’de yaygın 1.2 PureTech 130 HP turbo motor, sekiz ileri EAT8 tork konvertörlü otomatikle sunuldu. Motor koduna göre triger sistemi, doğru yağ standardı, yağ basıncı, servis kampanyaları ve EAT8 çalışma geçmişi özellikle doğrulanmalıdır.',
                pros: ['130 HP ile canlı performans', 'EAT8 otomatik kullanım rahatlığı', 'Yaygın servis ve parça erişimi'], cons: ['Bazı motorlarda yağ içindeki triger kayışı kontrolü', 'Doğru yağ standardına hassasiyet', 'Bakım belgesi olmayan araçta yüksek risk'],
                chronicIssues: [
                    { title: 'Triger sistemi ve yağ basıncı kontrolü', description: 'Motor koduna uygun triger tipi belirlenmeli; kayış kullanılan versiyonda fiziksel durum, yağ süzgeci/basınç geçmişi ve doğru yağ faturaları incelenmelidir. Eksik bakım kaydında yalnızca görsel bakıyla güvenli sonuç verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, soğutma ve EAT8 testi', description: 'Soğuk çalışma, turbo basıncı, yağ/soğutma kaçağı ve sıcaklık izlenmeli; EAT8 soğuk-sıcak D-R ile farklı yüklerde denenmelidir. Sert geçiş varsa motor takozu ve çalışma kalitesi elenmeden şanzıman revizyonu önerilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-bluehdi-130-eat8', name: '1.5 BlueHDi 130', fuelType: 'Dizel', transmission: '8 ileri EAT8', score: 78,
                description: 'Peugeot 2008 1.5 BlueHDi 130 HP dizel, sekiz ileri EAT8 ile özellikle uzun yolda düşük tüketim sunar. İkinci elde DPF, EGR, AdBlue/SCR, enjektör verileri, motor koduna bağlı teknik kampanyalar ve şanzıman çalışma geçmişi şasi numarasıyla incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', '130 HP ve güçlü dizel torku', 'Akıcı EAT8 otomatik'], cons: ['Kısa mesafede DPF riski', 'AdBlue/SCR bileşen maliyeti', 'Motor koduna göre kampanya kontrolü'],
                chronicIssues: [
                    { title: 'DPF, EGR ve AdBlue/SCR taraması', description: 'DPF kül/doluluk ile rejenerasyon geçmişi, EGR komutu, AdBlue basıncı ve SCR hata kayıtları okunmalıdır. Kullanım profili, sensör ve mekanik arıza ayrılmadan temizlik veya pahalı parça değişimi kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Motor kodu, kampanya ve EAT8 kontrolü', description: 'Motor kodu ile açık teknik kampanyalar şasi numarasından sorgulanmalı; soğuk çalışma ve enjektör düzeltmeleri incelenmelidir. EAT8 soğuk-sıcak denenmeli, sertlikte takozlar ve motor düzgünlüğü şanzımandan ayrı kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'e-2008-115-kw-156-hp', name: 'E-2008 115 kW (156 HP)', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 85,
                description: 'Makyajlı E-2008’in 115 kW (156 HP) önden çekişli elektrik motoru, versiyona göre yaklaşık 54 kWh brüt bataryayla eşleşir. Kesin batarya sürümü şasi numarasıyla doğrulanmalı; sağlık raporu, alt gövde, termal yönetim, AC/DC şarj ve 12 V sistem test edilmelidir.',
                pros: ['Sessiz ve akıcı elektrikli sürüş', '156 HP günlük performans', 'Şehir içinde düşük enerji maliyeti'], cons: ['Menzilin hava ve hıza duyarlılığı', 'DC şarj koşullarının değişkenliği', 'Batarya için uzman rapor ihtiyacı'],
                chronicIssues: [
                    { title: 'Batarya sağlık ve alt gövde kontrolü', description: 'Batarya kapasitesi, hücre farkları, sıcaklık ve izolasyon verileri okunmalı; alt muhafaza ve kaldırma noktaları liftte incelenmelidir. Ekran menzili kullanım geçmişine bağlıdır ve tek başına kapasite kaybı ölçümü değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'AC/DC şarj ve 12 V sistem testi', description: 'Şarj soketi kilidi, mümkünse AC ve DC oturumu, kabin ısıtma/soğutma ve 12 V akü yük testi yapılmalıdır. Düşük şarj hızı sıcaklık ve doluluk kaydedilmeden arıza sayılmamalı; yazılım güncelliği doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 20,
        engines: [
            {
                slug: '16-t-gdi-150-ps-7dct-4x2', name: '1.6 T-GDI 150 PS 4x2', fuelType: 'Benzin', transmission: '7 ileri DCT', score: 84,
                description: 'Kia Sportage NQ5’in güncel Türkiye föyündeki 1.6 T-GDI 4x2 versiyonu 150 PS ve 250 Nm üretir, yedi ileri DCT kullanır. Önceki kopya motor kayıtlarının aksine satın alma kontrolü bu doğru motor-şanzıman eşleşimi üzerinden yapılmalıdır.',
                pros: ['150 PS dengeli günlük performans', '250 Nm turbo torku', '4x2 ile daha düşük ağırlık'], cons: ['Dur-kalkta DCT ısınma hassasiyeti', 'Turbo-soğutma kontrol gereksinimi', 'Büyük jantlarda lastik maliyeti'],
                chronicIssues: [
                    { title: '7DCT kavrama sıcaklığı ve adaptasyon', description: 'Araç ısındıktan sonra D-R, yokuş kalkışı ve düşük hızlı manevra denenmeli; kavrama sıcaklığı, adaptasyon ve hata hafızası okunmalıdır. Titremede motor takozları ve ateşleme düzgünlüğü elenmeden kavrama değişimi kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'T-GDI turbo ve soğutma kontrolü', description: 'Motor soğukken rölanti, ateşleme sayacı, yağ-soğutma izi ve yol testinde turbo basıncı/sıcaklık izlenmelidir. Bakım faturaları doğru yağ standardıyla karşılaştırılmalı, açık kampanyalar şasi numarası üzerinden sorgulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-t-gdi-180-ps-7dct-4x4', name: '1.6 T-GDI 180 PS 4x4', fuelType: 'Benzin', transmission: '7 ileri DCT / AWD', score: 85,
                description: 'Sportage NQ5 1.6 T-GDI 4x4, 180 PS ve 265 Nm değerlerini yedi ileri DCT ve dört tekerlekten çekişle birleştirir. DCT sıcaklığına ek olarak AWD hata kayıtları, dört lastiğin çevre uyumu, alt takım ve aktarma yağ kaçakları kontrol edilmelidir.',
                pros: ['180 PS güçlü performans', 'Elektronik kontrollü dört çeker', 'Euro NCAP 2022 beş yıldızlı gövde'], cons: ['DCT ve AWD bakım karmaşıklığı', 'Dört eş lastik gereksinimi', 'Artan tüketim ve sarf maliyeti'],
                chronicIssues: [
                    { title: 'DCT ve AWD birlikte yol testi', description: 'D-R, yokuş ve düşük hızda kavrama davranışı; tam dönüş, farklı zemin ve hızlarda AWD uyarısı kontrol edilmelidir. Dört lastiğin ölçü, desen, basınç ve aşınması uyumlu değilse aktarma davranışı doğru yorumlanamaz.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo, alt takım ve kampanya kontrolü', description: 'Turbo basıncı, çalışma sıcaklığı, yağ/soğutma kaçakları ile alt takım ve aktarma muhafazaları incelenmelidir. Ön cam veya tampon işlemi varsa ADAS kalibrasyonu; açık kampanyalar ve bakım geçmişi şasi numarasıyla doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12013,
        engines: [{
                slug: '15-etsi-150-ps-dsg', name: '1.5 eTSI 150 PS', fuelType: 'Hibrit', transmission: '7 ileri DSG', score: 87,
            description: 'Üçüncü nesil Tiguan’ın Türkiye’deki 1.5 eTSI 150 PS motoru, 48 V hafif hibrit sistem ve yedi ileri DSG ile sunulur. Satın alma öncesinde 48 V akü/marş-jeneratör verileri, DSG adaptasyonu, silindir kapatma geçişi, soğutma ve yazılım kontrol edilmelidir.',
            pros: ['150 PS dengeli performans', '48 V sistemle süzülme ve enerji kazanımı', 'Geniş servis altyapısı'], cons: ['DSG dur-kalk hassasiyeti', '48 V bileşen teşhis ihtiyacı', 'Yeni nesilde uzun dönem veri sınırlı'],
            chronicIssues: [
                { title: '48 V eTSI ve enerji akışı kontrolü', description: '48 V akü sağlık/sıcaklık değerleri, marş-jeneratör ve enerji akışı hata kayıtları okunmalıdır. Start-stop veya süzülme çalışmıyorsa parça kararı verilmeden önce şarj durumu, 12 V sistem, yazılım ve kullanım koşulları kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                { title: 'DSG adaptasyonu ve sıcak kullanım testi', description: 'D-R seçimi, yokuş kalkışı ve araç ısındıktan sonra düşük hızlı manevra denenmeli; kavrama adaptasyonu ile sıcaklık verileri okunmalıdır. Titremede motor takozları ve ateşleme düzgünlüğü şanzımandan ayrı değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12014,
        engines: [{
            slug: '1522-kw-2069-hp-elektrik-806-kwh', name: '152,2 kW (206,9 HP) Elektrik', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 85,
            description: 'KGM Torres EVX’in önden çekişli elektrik motoru 152,2 kW (206,9 HP) ve 339 Nm üretir; 80,6 kWh LFP bataryayla eşleşir. İkinci elde batarya sağlık/hücre raporu, alt gövde, AC/DC şarj, termal yönetim, 12 V akü ve yazılım birlikte incelenmelidir.',
            pros: ['80,6 kWh LFP batarya', '206,9 HP ve 339 Nm', 'Geniş 839 litrelik bagaj'], cons: ['Yeni modelde uzun dönem veri sınırlı', 'Menzilin hava ve hıza duyarlılığı', 'Uzman batarya raporu gereksinimi'],
            chronicIssues: [
                { title: 'LFP batarya sağlık ve alt muhafaza kontrolü', description: 'Kullanılabilir kapasite, hücre farkları, sıcaklık ve izolasyon değerleri okunmalı; 80,6 kWh bataryanın alt plakası ile kaldırma noktaları liftte incelenmelidir. Ekran menzili kullanım geçmişine bağlıdır ve kapasite ölçümü değildir.', severity: 'medium', reportCount: 0 },
                { title: 'Şarj, 12 V akü ve termal yönetim testi', description: 'Soket kilidi, mümkünse AC/DC şarj, kabin iklimlendirme ve batarya sıcaklık yönetimi denenmeli; 12 V akü yük altında ölçülmelidir. Düşük şarj hızı sıcaklık/doluluk kaydedilmeden batarya arızası sayılmamalıdır.', severity: 'medium', reportCount: 0 },
            ],
        }],
    },
    {
        vehicleId: 12015,
        engines: [
            {
                slug: '12-hybrid-145-e-dcs6', name: '1.2 Hybrid 145', fuelType: 'Hibrit', transmission: '6 ileri e-DCS6', score: 84,
                description: 'Üçüncü nesil 3008 Hybrid 145, 1.2 turbo benzinli motoru 48 V batarya ve e-DCS6 içine entegre elektrik motoruyla birleştirir. Yeni güç aktarımında enerji akışı, batarya sıcaklığı, kavrama adaptasyonu, soğutma, 12 V sistem ve güncel yazılım kontrol edilmelidir.',
                pros: ['Haricî şarjsız hibrit kullanım', '145 HP sistem gücü', 'Şehirde elektrik destekli sürüş'], cons: ['Yeni sistemde uzun dönem veri sınırlı', 'e-DCS6 teşhis gereksinimi', 'Yoğun elektronik/yazılım bağımlılığı'],
                chronicIssues: [
                    { title: '48 V batarya ve e-DCS6 testi', description: '48 V sağlık/sıcaklık değerleri, enerji akışı ve kavrama adaptasyonları okunmalı; soğuk-sıcak D-R, yokuş ve düşük hız denenmelidir. Geçiş hissi yazılım, adaptasyon ve 12 V besleme görülmeden mekanik arıza sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Soğutma, ekran ve ADAS kontrolü', description: 'Motor ve hibrit soğutma sıcaklıkları, yağ-sıvı kaçak izi, panoramik ekran, kamera ve radar fonksiyonları kontrol edilmelidir. Açık kampanyalar ile güncelleme geçmişi şasi numarasıyla doğrulanmalı, cam işleminde kalibrasyon aranmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'plug-in-hybrid-195-e-dcs7', name: 'Plug-in Hybrid 195', fuelType: 'Hibrit', transmission: '7 ileri e-DCS7', score: 85,
                description: '3008 Plug-in Hybrid 195, benzinli motoru haricî şarj edilebilen yüksek voltaj bataryası ve e-DCS7 elektrik destekli şanzımanla birleştirir. Batarya sağlık raporu, AC şarj, termal yönetim, kavrama adaptasyonu ve içten yanmalı motor bakımı birlikte kontrol edilmelidir.',
                pros: ['Günlük kullanımda elektrikli sürüş', '195 HP sistem gücü', 'Uzun yol için benzinli motor esnekliği'], cons: ['İki güç sisteminin bakım karmaşıklığı', 'Şarj edilmezse tüketim avantajının azalması', 'Yeni sistemde uzun dönem veri azlığı'],
                chronicIssues: [
                    { title: 'PHEV batarya ve AC şarj testi', description: 'Batarya kullanılabilir kapasitesi, hücre farkları, izolasyon ve sıcaklıklar okunmalı; soket kilidi ile AC şarj oturumu denenmelidir. Gösterilen elektrik menzili hava ve kullanım geçmişine bağlı olduğundan sağlık raporunun yerine geçmez.', severity: 'medium', reportCount: 0 },
                    { title: 'e-DCS7, benzinli motor ve soğutma', description: 'Araç batarya dolu ve düşükken sürülmeli; elektrik-benzin geçişi, kavrama adaptasyonu, motor soğuk çalışma ve ortak termal yönetim izlenmelidir. Uzun süre benzinde bekleme yakıt/yağ durumuyla birlikte değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'e-3008-157-kw-210-hp-73-kwh', name: 'E-3008 157 kW (210 HP)', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 87,
                description: 'E-3008’in önden çekişli 157 kW (210 HP) elektrik motoru 73 kWh kullanılabilir kapasite sınıfındaki bataryayla sunulur. Satın alma öncesinde batarya sağlık ve hücre raporu, alt gövde, AC/DC şarj, termal yönetim, 12 V sistem, lastik ve yazılım kontrol edilmelidir.',
                pros: ['210 HP akıcı elektrikli performans', '73 kWh batarya', 'Yeni STLA Medium elektrik mimarisi'], cons: ['Yüksek gövde ağırlığı', 'Menzilin sıcaklık ve hıza duyarlılığı', 'Yeni platformda uzun dönem veri sınırlı'],
                chronicIssues: [
                    { title: '73 kWh batarya ve alt gövde kontrolü', description: 'Kullanılabilir kapasite, hücre farkları, sıcaklık ve izolasyon verileri okunmalı; batarya alt plakası ile kaldırma noktaları liftte incelenmelidir. Ekran menzili koşullara bağlıdır ve tek başına batarya sağlığı ölçümü sayılmaz.', severity: 'medium', reportCount: 0 },
                    { title: 'DC şarj, termal sistem ve yazılım testi', description: 'Uygun koşulda AC/DC şarj, soket kilidi ve ön koşullandırma denenmeli; 12 V akü, ekran ve ADAS yazılımı kontrol edilmelidir. Düşük tek şarj değeri sıcaklık ve doluluk oranı kaydedilmeden arıza kabul edilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 19,
        engines: [
            {
                slug: '16-t-gdi-160-ps-7dct', name: '1.6 T-GDI 160 PS', fuelType: 'Benzin', transmission: '7 ileri DCT / 4x2-4x4', score: 84,
                description: 'Makyajlı Tucson NX4 1.6 T-GDI, 160 PS turbo benzinli motoru yedi ileri DCT ile; donanıma göre 4x2 veya 4x4 sunar. DCT sıcaklığı/adaptasyonu, turbo-soğutma verileri ve dört çeker araçta lastik çevresi ile AWD hata geçmişi kontrol edilmelidir.',
                pros: ['160 PS dengeli SUV performansı', '4x2 ve 4x4 seçeneği', 'Yedi ileri DCT ile hızlı geçiş'], cons: ['Dur-kalkta DCT hassasiyeti', '4x4’te eş lastik gereksinimi', 'Turbo-soğutma kontrolü'],
                chronicIssues: [
                    { title: '7DCT sıcaklık ve adaptasyon testi', description: 'Araç ısındıktan sonra D-R, yokuş kalkışı ve düşük hızlı manevra denenmeli; kavrama sıcaklığı, adaptasyon ve hata hafızası okunmalıdır. Titremede motor takozu ve ateşleme düzgünlüğü şanzımandan ayrı değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo, soğutma ve AWD kontrolü', description: 'Turbo basıncı, motor sıcaklığı ve kaçak izleri incelenmeli; 4x4 araçta dört lastik eşleşmesi, AWD kayıtları ve tam dönüş davranışı kontrol edilmelidir. Açık kampanyalar şasi numarasıyla ayrıca sorgulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-t-gdi-hybrid-215-ps-6at', name: '1.6 T-GDI Hybrid 215 PS', fuelType: 'Hibrit', transmission: '6 ileri otomatik', score: 88,
                description: 'Tucson Hybrid, 1.6 T-GDI benzinli motor ile elektrik motorunu 215 PS sistem gücünde ve altı ileri otomatik şanzımanla birleştirir. Hibrit batarya, enerji geçişi, turbo/soğutma, fren geri kazanımı, 12 V sistem ve yazılım birlikte değerlendirilmelidir.',
                pros: ['215 PS güçlü sistem performansı', 'Şehirde elektrik destekli verimlilik', 'Tork konvertörlü otomatik sürüşü'], cons: ['Karmaşık hibrit-turbo mimarisi', 'Batarya için uzman teşhis', 'Yük altında motor sesinin artması'],
                chronicIssues: [
                    { title: 'Hibrit batarya ve enerji akışı testi', description: 'Hücre farkları, sıcaklık ve hata geçmişi okunmalı; elektrik, hibrit ve motorlu sürüş geçişleri farklı yüklerde izlenmelidir. Motorun devreye girmesi doluluk ve sıcaklığa bağlıdır; tek başına arıza işareti değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo, soğutma ve rejeneratif fren', description: 'Turbo basıncı, motor ve inverter soğutma sıcaklıkları, fren geri kazanım geçişi ve diskler kontrol edilmelidir. Çoklu elektronik uyarıda 12 V akü ile yazılım sürümü, pahalı hibrit parça kararından önce doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-crdi-136-ps-7dct', name: '1.6 CRDi 136 PS', fuelType: 'Dizel', transmission: '7 ileri DCT', score: 83,
                description: 'Tucson NX4 1.6 CRDi 136 PS dizel, yedi ileri DCT ile uzun yol verimliliğine odaklanır. DPF doluluk/rejenerasyon, EGR ve SCR kayıtları, enjektör düzeltmeleri, turbo basıncı ile DCT adaptasyon ve sıcak çalışma verileri birlikte incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', '136 PS dizel torku', 'Otomatik DCT kullanım rahatlığı'], cons: ['Kısa mesafede DPF riski', 'SCR/AdBlue maliyeti', 'DCT kavrama kontrol ihtiyacı'],
                chronicIssues: [
                    { title: 'DPF, EGR, SCR ve enjektör taraması', description: 'DPF kurum/kül ve rejenerasyon geçmişi, EGR komutu, SCR/AdBlue hataları ile enjektör düzeltmeleri okunmalıdır. Kullanım profili, sensör veya mekanik arıza ayrılmadan temizlik ya da parça değişimi önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DCT ve turbo sıcak çalışma kontrolü', description: 'Araç ısındıktan sonra D-R, yokuş ve düşük hız davranışı; turbo basıncı ve yağ kaçak izi incelenmelidir. Titremede enjektör dengesi ve takozlar elenmeden kavrama kararı verilmemeli, bakım kayıtları doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 26,
        engines: [
            {
                slug: '15-tsi-mhev-150-ps-dsg', name: '1.5 TSI mHEV 150 PS', fuelType: 'Hibrit', transmission: '7 ileri DSG', score: 87,
                description: 'Güncel Octavia 1.5 TSI mHEV 150 PS, 48 V hafif hibrit destek ve yedi ileri DSG kullanır. Satın alma öncesinde 48 V batarya/marş-jeneratör kayıtları, silindir kapatma geçişi, soğuk çalışma, soğutma ve DSG adaptasyonları birlikte incelenmelidir.',
                pros: ['150 PS performans-verim dengesi', '48 V süzülme ve enerji kazanımı', 'Geniş liftback gövde'], cons: ['DSG dur-kalk hassasiyeti', '48 V sistem teşhis ihtiyacı', 'Yazılım sürümünün önemi'],
                chronicIssues: [
                    { title: '48 V mHEV ve enerji akışı testi', description: '48 V batarya sağlık/sıcaklık değerleri, marş-jeneratör ve enerji akışı hata kayıtları okunmalıdır. Start-stop devre dışıysa yüksek maliyetli parça kararından önce 12 V akü, şarj durumu, yazılım ve ortam koşulları kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG adaptasyonu ve ACT kontrolü', description: 'D-R, yokuş kalkışı ve sıcak düşük hız manevraları denenmeli; kavrama adaptasyonu ile silindir kapatma geçişi izlenmelidir. Titremede motor takozu ve ateşleme düzgünlüğü ayrı ölçülmeden şanzıman arızası sonucu verilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '20-tsi-265-ps-dsg-rs', name: '2.0 TSI 265 PS RS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 88,
                description: 'Octavia RS’in 2.0 TSI motoru 265 PS gücü yedi ileri DSG üzerinden ön tekerleklere aktarır. Performanslı kullanım geçmişi nedeniyle motor yazılımı, turbo, soğutma, DSG bakım verileri, elektronik diferansiyel, lastik ve fren ölçümleri standart ekspertizin ötesinde incelenmelidir.',
                pros: ['265 PS güçlü performans', 'Pratik liftback gövde', 'Hızlı DSG geçişleri'], cons: ['Yüksek lastik ve fren maliyeti', 'Modifiye/yazılım riski', 'Yoğun kullanımda aktarma yükü'],
                chronicIssues: [
                    { title: 'Yazılım, turbo ve soğutma doğrulaması', description: 'ECU yazılım bütünlüğü, turbo basıncı, yakıt düzeltmeleri ve çalışma sıcaklığı loglanmalı; yağ/soğutma kaçağı aranmalıdır. Modifiye varsa donanım ve bakım faturaları görülmeden fabrika performansı ve güvenilirliği varsayılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'DSG, diferansiyel, fren ve lastik testi', description: 'DSG hata/adaptasyon ve bakım kaydı, virajda çekiş davranışı, disk kalınlığı ile dört lastiğin ölçü/aşınması kontrol edilmelidir. Kalkış titreşimi motor takozu ve ateşleme elenmeden yalnızca kavramaya bağlanmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12016,
        engines: [
            {
                slug: '15-diesel-130-hp-at8', name: '1.5 Diesel 130 HP', fuelType: 'Dizel', transmission: '8 ileri otomatik', score: 80,
                description: 'Astra L 1.5 Diesel 130 HP, sekiz ileri otomatik şanzımanla uzun yol verimliliğine odaklanır. İkinci elde DPF, EGR, AdBlue/SCR, enjektör düzeltmeleri, motor koduna bağlı teknik kampanyalar, doğru yağ bakımı ve otomatik şanzıman çalışması incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', '130 HP ve güçlü dizel torku', 'Sekiz ileri otomatik rahatlığı'], cons: ['Kısa mesafede DPF riski', 'AdBlue/SCR maliyeti', 'Motor kodu ve kampanya kontrolü'],
                chronicIssues: [
                    { title: 'DPF, EGR ve SCR sistem taraması', description: 'DPF kül/doluluk, rejenerasyon geçmişi, EGR komutu, AdBlue basıncı ve SCR hata kayıtları okunmalıdır. Kullanım profili ile sensör veya mekanik arıza ayrılmadan temizlik ya da pahalı parça değişimi önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Motor kodu, bakım ve AT8 kontrolü', description: 'Motor koduna bağlı açık kampanyalar şasi numarasıyla sorgulanmalı; soğuk çalışma, enjektör düzeltmeleri ve yağ standardı incelenmelidir. AT8 soğuk-sıcak D-R ve farklı yüklerde denenmeli, takozlar ayrıca kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'astra-electric-115-kw-156-hp', name: 'Astra Electric 115 kW (156 HP)', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 85,
                description: 'Astra Electric, 115 kW (156 HP) ve 270 Nm üreten önden çekişli elektrik motoruna sahiptir; Opel Türkiye 418 km’ye kadar WLTP menzil açıklar. Batarya kapasitesi/sağlığı, hücreler, alt gövde, AC/DC şarj, termal yönetim ve 12 V sistem kontrol edilmelidir.',
                pros: ['156 HP sessiz ve akıcı sürüş', '418 km’ye kadar açıklanan WLTP', 'Kompakt hatchback kullanım kolaylığı'], cons: ['Menzilin hız ve sıcaklığa duyarlılığı', 'Batarya için uzman rapor ihtiyacı', 'Şarj koşullarının değişkenliği'],
                chronicIssues: [
                    { title: 'Batarya sağlık ve alt gövde incelemesi', description: 'Kullanılabilir kapasite, hücre farkları, sıcaklık ve izolasyon verileri okunmalı; batarya alt plakası ile kaldırma noktaları liftte incelenmelidir. Gösterge menzili sürüş geçmişine bağlıdır ve sağlık raporunun yerine geçmez.', severity: 'medium', reportCount: 0 },
                    { title: 'AC/DC şarj, 12 V akü ve yazılım', description: 'Şarj soketi kilidi, mümkünse AC ve DC oturumu, iklimlendirme ve 12 V akü yük testi yapılmalıdır. Düşük tek şarj hızı sıcaklık/doluluk bilinmeden arıza sayılmamalı; ekran ve ADAS güncellemeleri doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 25,
        engines: [
            {
                slug: '12-hybrid-145-e-dcs6', name: '1.2 Hybrid 145', fuelType: 'Hibrit', transmission: '6 ileri e-DCS6', score: 84,
                description: 'Güncel Citroën C4 X Hybrid 145, 1.2 turbo benzinli motoru 48 V batarya ve e-DCS6 içindeki elektrik motoruyla birleştirir. Enerji akışı, batarya sıcaklığı, kavrama adaptasyonları, soğutma, 12 V akü ve sürüş destek yazılımları birlikte kontrol edilmelidir.',
                pros: ['Şehirde elektrik destekli sürüş', '145 HP sistem gücü', 'Haricî şarj gerektirmeyen yapı'], cons: ['Yeni sistemde uzun dönem veri sınırlı', 'e-DCS6 teşhis ihtiyacı', 'Yazılım ve düşük voltaj bağımlılığı'],
                chronicIssues: [
                    { title: '48 V batarya ve e-DCS6 kontrolü', description: '48 V batarya sağlık/sıcaklık değerleri, enerji akışı, kavrama adaptasyonu ve hata kayıtları okunmalı; soğuk-sıcak D-R, yokuş ve düşük hız denenmelidir. Geçiş hissi yazılım ve adaptasyon görülmeden arıza sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: '12 V sistem, soğutma ve ADAS testi', description: '12 V akü yük altında ölçülmeli; motor soğuk çalışma, soğutma sıcaklığı, ekran, kamera ve radar fonksiyonları denenmelidir. Birden fazla uyarıda besleme voltajı ve yazılım sürümü pahalı güç aktarım kararından önce doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'e-c4-x-115-kw-156-hp', name: 'ë-C4 X 115 kW (156 HP)', fuelType: 'Elektrik', transmission: 'Tek oranlı / FWD', score: 85,
                description: 'ë-C4 X’in güncel 115 kW (156 HP) önden çekişli elektrik motoru, model yılına göre değişebilen batarya paketiyle sunulur. Kesin kapasite şasi numarasıyla doğrulanmalı; sağlık/hücre raporu, alt gövde, şarj, termal yönetim, 12 V ve yazılım kontrol edilmelidir.',
                pros: ['Sessiz 156 HP elektrikli sürüş', '510 litrelik geniş bagaj', 'Konfor odaklı süspansiyon'], cons: ['Menzilin hava ve hıza duyarlılığı', 'Batarya sürümünün doğrulanması', 'Uzman yüksek voltaj kontrolü'],
                chronicIssues: [
                    { title: 'Batarya sürümü, sağlık ve alt gövde', description: 'Batarya kapasitesi şasi üzerinden belirlenmeli; kullanılabilir kapasite, hücre farkı, sıcaklık ve izolasyon okunmalıdır. Alt plaka ile kaldırma noktaları liftte incelenmeli; ekran menzili sağlık ölçümü olarak kullanılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Şarj, termal yönetim ve 12 V akü', description: 'Soket kilidi, mümkünse AC/DC şarj, ön koşullandırma ve kabin iklimlendirme denenmeli; 12 V akü yük testi yapılmalıdır. Düşük şarj hızı sıcaklık/doluluk bilinmeden arıza sayılmamalı, yazılım güncelliği doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12017,
        engines: [
            {
                slug: '13-mild-hybrid-158-ps-xtronic', name: '1.3 Mild Hybrid 158 PS', fuelType: 'Hibrit', transmission: 'X-Tronic / 4x2-4x4', score: 84,
                description: 'Qashqai J12 1.3 mild hybrid 158 PS, X-Tronic otomatik şanzımanla ve donanıma göre 4x2 ya da 4x4 sunulur. 12 V hafif hibrit desteği, soğuk çalışma, turbo-soğutma, X-Tronic bakım/çalışma verileri ve 4x4 lastik eşleşmesi kontrol edilmelidir.',
                pros: ['158 PS dengeli SUV performansı', '4x2 ve 4x4 seçeneği', 'Hafif hibrit enerji desteği'], cons: ['X-Tronic bakım geçmişinin önemi', '4x4’te eş lastik gereksinimi', 'Turbo-soğutma teşhis ihtiyacı'],
                chronicIssues: [
                    { title: 'X-Tronic bakım ve yol testi', description: 'Şanzıman sıvısı/bakım faturası, sıcaklık ve hata kayıtları incelenmeli; soğuk-sıcak D-R, sabit hız ve yük altında hızlanma denenmelidir. Devirlenme CVT karakterinden ayrılmalı; takoz ve motor düzgünlüğü ayrıca kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Mild hybrid, turbo ve 4x4 kontrolü', description: 'Hafif hibrit akü/enerji kayıtları, turbo basıncı ve soğutma sıcaklığı izlenmelidir. 4x4 araçta dört lastik ölçü/desen/aşınması uyumlu olmalı ve AWD hata hafızası okunmalıdır; açık kampanyalar şasiyle sorgulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: 'e-power-190-ps-elektrikli-cekis', name: 'e-POWER 190 PS', fuelType: 'Hibrit', transmission: 'Tek oranlı elektrikli çekiş', score: 88,
                description: 'Qashqai e-POWER’da 190 PS elektrik motoru tekerlekleri doğrudan çevirir; 1.5 benzinli motor ise elektrik üreticisi olarak çalışır. Çekiş motoru, inverter, yüksek voltaj bataryası, jeneratör motoru, soğutma ve enerji geçişleri üretici uyumlu teşhisle incelenmelidir.',
                pros: ['Elektrik motorunun akıcı 190 PS çekişi', 'Haricî şarj gerektirmeyen seri hibrit', 'Şehir içinde güçlü rejenerasyon'], cons: ['Karmaşık çift enerji sistemi', 'Yükte jeneratör motor sesinin artması', 'Uzman e-POWER teşhisi gereksinimi'],
                chronicIssues: [
                    { title: 'e-POWER batarya, motor ve inverter testi', description: 'Yüksek voltaj batarya hücre farkları/sıcaklığı, çekiş motoru ve inverter hata kayıtları okunmalı; farklı yük ve hızlarda enerji akışı izlenmelidir. Benzinli motor devrinin yol hızından bağımsız değişmesi sistem karakteridir.', severity: 'medium', reportCount: 0 },
                    { title: 'Jeneratör motoru, soğutma ve fren kontrolü', description: '1.5 motorun soğuk çalışması, jeneratör üretimi, ortak termal yönetim ve e-Pedal/rejeneratif fren geçişi kontrol edilmelidir. Çoklu uyarıda 12 V akü ve yazılım, yüksek voltajlı parça kararından önce doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
];
