import type { VehicleSource } from './vehicle-dna';

export interface GrowthEngineProfile {
    slug: string;
    name: string;
    fuelType: 'Benzin' | 'Dizel' | 'Elektrik' | 'Hibrit' | 'LPG';
    transmission: string;
    score: number;
    character: string;
    idealUse: string;
    checks: string[];
}

export interface GrowthVehicleProfile {
    id: number;
    brand: string;
    model: string;
    shortName: string;
    year: string;
    chassisCode: string;
    bodyStyles: string[];
    summary: string;
    identity: string;
    phases: Array<{ years: string; name: string; summary: string }>;
    strengths: string[];
    weaknesses: string[];
    vehicleChecks: Array<{ title: string; severity: 'medium' | 'high'; detail: string }>;
    engines: [GrowthEngineProfile, GrowthEngineProfile];
    sources: VehicleSource[];
    ownership: string;
    verdict: string;
}

const euroNcapSearch = (model: string) => `https://www.euroncap.com/en/search-results/?query=${encodeURIComponent(model)}`;

export const growthVehicleProfiles: GrowthVehicleProfile[] = [
    {
        id: 16001,
        brand: 'Citroen',
        model: 'C3 3. Nesil (2016-2024)',
        shortName: 'Citroën C3 III',
        year: '2016-2024',
        chassisCode: 'B618 / üçüncü nesil C3',
        bodyStyles: ['5 kapı B hatchback'],
        summary: 'Üçüncü nesil C3, 2016 sonunda pazara çıkan konfor odaklı B sınıfı hatchback’tir; Türkiye’de 1.2 PureTech benzinli ve 1.5/1.6 BlueHDi dizel seçenekler öne çıkar.',
        identity: 'Airbump’lı ilk tasarım ile 2020 makyajı aynı nesildir. PureTech motorun güç ve zamanlama düzeni, BlueHDi motorun hacmi ve EAT6/manuel eşleşmesi model yılına göre VIN üzerinden ayrılmalıdır.',
        phases: [
            { years: '2016-2020', name: 'İlk seri', summary: 'İlk tasarım; 1.2 PureTech ve 1.6 BlueHDi seçenekleri.' },
            { years: '2020-2024', name: 'Makyajlı seri', summary: 'Yenilenen ön yüz, konfor ve bağlantı donanımları; 1.5 BlueHDi dönemi.' },
        ],
        strengths: ['Yumuşak süspansiyon ve şehir konforu', 'Kompakt dış ölçüler', 'Ekonomik benzinli/dizel seçenekler', 'Güçlü kişiselleştirme ve donanım çeşitliliği', 'Yaygın Stellantis servis ve parça ağı'],
        weaknesses: ['PureTech zamanlama sistemi üretim yılı ve geçmişe göre incelenmelidir', 'Dizelde kısa mesafe DPF/EGR/AdBlue yükü', 'EAT6 ve manuelin bakım profili farklıdır', 'Dokunmatik ekran birçok işlevi toplar', 'Tavan ve gövde renk kombinasyonu onarım tespitini zorlaştırabilir'],
        vehicleChecks: [
            { title: 'PureTech yağ ve zamanlama geçmişi', severity: 'high', detail: 'Motor koduna göre kayış/zincir düzeni, doğru yağ standardı, yağ basıncı ve değişim faturaları soğuk çalıştırmayla birlikte doğrulanmalıdır.' },
            { title: 'BlueHDi emisyon sistemi', severity: 'high', detail: 'DPF basıncı, rejenerasyon aralığı, EGR, AdBlue/SCR kodları ve çalışma sıcaklığı kısa mesafe geçmişiyle birlikte okunmalıdır.' },
            { title: 'EAT6 ve debriyaj davranışı', severity: 'medium', detail: 'Otomatikte soğuk-sıcak kavrama ve geçiş; manuelde kavrama, volan ve vites seçimi uzun testte incelenmelidir.' },
            { title: 'Multimedya ve 12V akü', severity: 'medium', detail: 'Ekran, klima kumandaları, kamera, park sensörü, start-stop ve iletişim kodları akü yük testiyle birlikte değerlendirilmelidir.' },
            { title: 'Gövde ve ADAS', severity: 'high', detail: 'Direk-podye ölçümü yanında ön cam/kamera işlemi, airbag ve emniyet kemeri tarihleri kontrol edilmelidir.' },
        ],
        engines: [
            { slug: '12-puretech-82-110-eat6', name: '1.2 PureTech 82-110 PS', fuelType: 'Benzin', transmission: '5/6 ileri manuel / EAT6', score: 70, character: 'Atmosferik 82 PS ve turbo 110 PS aynı ad altında toplanmamalıdır; turbo ve otomatik kombinasyon daha canlı, bakım şartına daha duyarlıdır.', idealUse: 'Bakımı belgeli araçla şehir ve karma kullanım', checks: ['Motor koduna göre zamanlama düzeni, kayış ölçümü ve yağ süzgeci/yağ basıncı', 'Turbo sürümde hedef-gerçek basınç, ateşleme ve yakıt düzeltmeleri', 'EAT6 varsa doğru sıvı kaydı ve tam sıcak düşük hız geçişleri'] },
            { slug: '15-16-bluehdi-100-eat6', name: '1.5 / 1.6 BlueHDi 100 PS', fuelType: 'Dizel', transmission: '5/6 ileri manuel / EAT6', score: 74, character: 'Uzun yolda düşük tüketim sunan dizel aile, motor hacmi ve emisyon donanımı üretim fazına göre ayrılarak incelenmelidir.', idealUse: 'Düzenli uzun yol yapan kullanıcı', checks: ['DPF kül/kurum, rejenerasyon ve gerçek çalışma sıcaklığı', 'EGR, enjektör düzeltmeleri, turbo basıncı ve AdBlue/SCR hata geçmişi', '1.5 BlueHDi’de VIN’e bağlı üretici kampanyası ve zincir/revizyon durumu'] },
        ],
        sources: [
            { title: 'Third-generation C3 production milestone and 2016 launch', publisher: 'Citroën / Stellantis Media', url: 'https://www.media.stellantis.com/uk-en/citroen/press/third-generation-citroen-c3-celebrates-1-millionth-model-milestone' },
            { title: 'Citroën C3 safety archive', publisher: 'Euro NCAP', url: euroNcapSearch('Citroen C3') },
        ],
        ownership: 'C3’te ucuz ilan ile düşük toplam maliyet aynı şey değildir. PureTech’te doğru yağ ve zamanlama belgesi, dizelde düzenli uzun yol ve emisyon sistemi sağlığı; lastik, akü ve multimedya durumundan daha büyük bütçe etkisi yaratır.',
        verdict: 'Motor kimliği ve bakım geçmişi açık C3 III konforlu şehir otomobilidir; belgesiz PureTech zamanlama veya dizel emisyon geçmişi indirim değil eleme sebebi olabilir.',
    },
    {
        id: 16002,
        brand: 'Ford',
        model: 'Puma 2. Nesil (2019-Günümüz)',
        shortName: 'Ford Puma II',
        year: '2019-Günümüz',
        chassisCode: 'J2K / B2E; ikinci nesil Puma crossover',
        bodyStyles: ['5 kapı B-SUV/crossover'],
        summary: '2019’da tanıtılan yeni Puma, Fiesta tabanlı kompakt crossover yapısını 1.0 EcoBoost ve 48 V mild-hybrid seçeneklerle birleştirir; Türkiye’de 125 ve 155 PS sürümler görülebilir.',
        identity: '1990’lardaki Puma coupé ile karıştırılmamalıdır. MHEV rozeti tam hibrit anlamına gelmez; 48 V kayış tahrikli marş-jeneratör sistemi benzinli motora destek verir ve harici şarj edilmez.',
        phases: [
            { years: '2019-2023', name: 'İlk seri', summary: '1.0 EcoBoost ve 48 V EcoBoost Hybrid, manuel ve pazara göre 7DCT.' },
            { years: '2024-Günümüz', name: 'Makyajlı seri', summary: 'Yeni kokpit/ekran, güncellenen donanım ve güç aktarma seçenekleri.' },
        ],
        strengths: ['Çevik sürüş karakteri', 'MegaBox ile kullanışlı bagaj', '125/155 PS performans seçenekleri', 'Gelişmiş sürüş destekleri', 'Kompakt şehir ölçüleri'],
        weaknesses: ['EcoBoost zamanlama ve yağ standardı motor koduna göre doğrulanmalıdır', '48 V MHEV ek elektrik donanımı', '7DCT bulunan araçta kavrama geçmişi önemlidir', 'Büyük jantlar konfor ve lastik maliyetini etkiler', 'Ön cam/radar işleminde kalibrasyon gerekir'],
        vehicleChecks: [
            { title: 'EcoBoost yağlama ve zamanlama', severity: 'high', detail: 'Motor koduna göre kayış/zincir yapısı, doğru Ford yağ standardı, yağ basıncı ve soğuk çalışma sesi belgelerle incelenmelidir.' },
            { title: '48 V mild-hybrid sistemi', severity: 'high', detail: 'MHEV araçta kayış tahrikli starter-jeneratör, 48 V batarya, DC/DC dönüştürücü ve hata geçmişi üretici cihazıyla taranmalıdır.' },
            { title: '7DCT veya manuel güç aktarımı', severity: 'high', detail: 'DCT’de geri-yokuş-dur kalk ve kavrama verisi; manuelde debriyaj-volan sıcak testte karşılaştırılmalıdır.' },
            { title: 'Soğutma ve turbo hattı', severity: 'high', detail: 'Seviye, basınç kaçağı, termostat davranışı ve hedef-gerçek turbo basıncı yük altında kaydedilmelidir.' },
            { title: 'ADAS, gövde ve MegaBox', severity: 'medium', detail: 'Ön yapı kalibrasyonu, bagaj altı MegaBox çevresinde su/onarım izi, jant-lastik ve geometri kontrol edilmelidir.' },
        ],
        engines: [
            { slug: '10-ecoboost-125-manuel-dct', name: '1.0 EcoBoost 125 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7DCT', score: 79, character: 'Üç silindirli turbo motor Puma’nın temel seçeneğidir; MHEV olmayan ve 48 V destekli sürümler VIN’den ayrılmalıdır.', idealUse: 'Şehir-karmada canlı sürüş isteyenler', checks: ['Doğru yağ standardı, zamanlama tipi ve soğuk yağ basıncı', 'Soğutma basıncı, turbo hedef-gerçek ve misfire sayaçları', 'DCT varsa kavrama; manuelde debriyaj/volan sıcak testi'] },
            { slug: '10-ecoboost-hybrid-155-manuel', name: '1.0 EcoBoost Hybrid 155 PS', fuelType: 'Hibrit', transmission: '6 ileri manuel / pazara göre 7DCT', score: 81, character: '48 V destekli üst güç seviyesi ara hızlanmayı geliştirir; tam hibrit gibi elektrikle uzun mesafe gitmez.', idealUse: 'Performans ve verim dengesini isteyen kullanıcı', checks: ['48 V batarya sağlık/voltaj ve DC/DC hata geçmişi', 'Starter-jeneratör kayışı, gergi ve şarj davranışı', 'EcoBoost yağlama, soğutma ve turbo hattı'] },
        ],
        sources: [
            { title: 'All-new Ford Puma product overview', publisher: 'Ford Media Center', url: 'https://media.ford.com/content/fordmedia/feu/pt/pt/products/passenger-vehicles/puma.html' },
            { title: 'Ford Puma 48-volt EcoBoost Hybrid launch', publisher: 'Ford Media Center', url: 'https://media.ford.com/content/fordmedia/feu/gb/en/news/2019/10/01/ford-unpacks-new-puma-pricing-for-premium-comfort--convenience-a.html' },
        ],
        ownership: 'Puma bütçesinde 48 V sistem veya DCT için genel ekspertiz yeterli değildir. Lastik ebatları, ADAS kalibrasyonu ve doğru yağla belgeli servis geçmişi ilk bakım rezerviyle birlikte fiyatlandırılmalıdır.',
        verdict: 'Bakımı belgeli EcoBoost ve hata kaydı temiz 48 V sistemle Puma II başarılı bir B-SUV’dur; “hibrit” rozetine güvenip elektrik sistemi taranmadan alınmamalıdır.',
    },
    {
        id: 16003,
        brand: 'Skoda',
        model: 'Kamiq 1. Nesil (2019-Günümüz)',
        shortName: 'Škoda Kamiq',
        year: '2019-Günümüz',
        chassisCode: 'NW4 / MQB A0',
        bodyStyles: ['5 kapı B-SUV'],
        summary: 'Kamiq, 2019’da tanıtılan MQB A0 tabanlı şehir SUV’udur; Türkiye’de 1.0 TSI DSG ağırlıklı, pazara göre 1.5 TSI ve erken 1.6 TDI seçenekleri bulunur.',
        identity: 'Scala ile platform ve birçok güç aktarma bileşenini paylaşsa da gövde, süspansiyon ve donanım kodları farklıdır. 2023/2024 güncellemesi yeni bir nesil değildir.',
        phases: [
            { years: '2019-2023', name: 'İlk seri', summary: '1.0/1.5 TSI, erken pazarlarda 1.6 TDI ve 7 ileri DSG.' },
            { years: '2023-Günümüz', name: 'Makyajlı seri', summary: 'Tasarım, LED aydınlatma, ekran ve sürüş desteği güncellemeleri.' },
        ],
        strengths: ['Ferah kabin ve kullanışlı bagaj', 'Kompakt şehir ölçüleri', 'Yaygın VAG servis bilgisi', '1.0 TSI’da yeterli performans', 'Pratik Simply Clever ayrıntıları'],
        weaknesses: ['DQ200 kuru kavrama yoğun trafikte hassastır', 'TSI soğutma sistemi izlenmelidir', 'Dizel kısa mesafede emisyon yükü taşır', 'Akü düşük voltajı çoklu elektronik hata yaratabilir', 'Makyaj/üretim fazı ilanda karışabilir'],
        vehicleChecks: [
            { title: 'TSI soğutma modülü', severity: 'high', detail: 'Pompa-termostat çevresi, kurumuş iz, basınç ve canlı çalışma sıcaklığı motor soğukken incelenmelidir.' },
            { title: 'DQ200 kavrama ve mekatronik', severity: 'high', detail: 'Geri, yokuş, park ve sıcak dur-kalk testi kavrama uyarlaması, basınç ve kalıcı kodlarla tamamlanmalıdır.' },
            { title: 'Turbo ve ateşleme', severity: 'medium', detail: 'Yükte hedef-gerçek basınç, yakıt düzeltmesi ve misfire sayacı aynı yol kaydında değerlendirilmelidir.' },
            { title: 'ADAS ve ön yapı', severity: 'high', detail: 'Ön cam, tampon veya radar/kamera işlemi varsa kalibrasyon belgesi ve dört teker geometrisi istenmelidir.' },
            { title: 'Akü, ekran ve eCall', severity: 'medium', detail: '12 V akü yük testi, start-stop, multimedya, eCall ve ağ iletişim kodları silinmeden okunmalıdır.' },
        ],
        engines: [
            { slug: '10-tsi-115-dsg', name: '1.0 TSI 115 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 80, character: 'Kamiq’in en yaygın motorudur; model yılına göre 110/115 PS ifadesi görülebilir ve şanzıman kodu ayrıca doğrulanır.', idealUse: 'Şehir ve karma aile kullanımı', checks: ['Pompa-termostat ve doğru soğutma sıvısı', 'Turbo basıncı, ateşleme ve yakıt düzeltmeleri', 'DQ200 varsa kavrama/mekatronik tam sıcak testi'] },
            { slug: '15-tsi-150-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 82, character: 'Dört silindirli ACT’li motor daha güçlü ve rafinedir; yazılım/ACT geçişi ve DSG geçmişi birlikte değerlendirilir.', idealUse: 'Uzun yol ve performans rezervi isteyenler', checks: ['Düşük devir tereddüdü, ACT geçişi ve kampanya sorgusu', 'Soğutma modülü ve yağ/ateşleme geçmişi', 'DSG kavrama uyarlaması ve mekatronik basıncı'] },
        ],
        sources: [
            { title: 'Škoda Kamiq official engine overview', publisher: 'Škoda Storyboard', url: 'https://cdn.skoda-storyboard.com/2019/08/KAMIQ_EN_Engines_overview.pdf' },
            { title: 'Škoda Kamiq safety archive', publisher: 'Euro NCAP', url: euroNcapSearch('Skoda Kamiq') },
        ],
        ownership: 'Kamiq’te 1.0 TSI DSG yaygınlığı servis erişimini artırır fakat her aracın aynı revizyon ve kullanım geçmişine sahip olduğu anlamına gelmez. Kavrama, soğutma, akü ve kalibrasyon işlemleri belgelenmelidir.',
        verdict: 'Doğru motor-DSG kodu belirlenmiş, sıcak test ve modül taraması temiz Kamiq pratik bir şehir SUV’udur; sadece düşük kilometreye güvenilmemelidir.',
    },
    {
        id: 16004,
        brand: 'Skoda',
        model: 'Karoq 1. Nesil (2017-Günümüz)',
        shortName: 'Škoda Karoq',
        year: '2017-Günümüz',
        chassisCode: 'NU / MQB A1',
        bodyStyles: ['5 kapı C-SUV'],
        summary: 'Karoq 2017’de tanıtılan C-SUV’dur; 1.0 ve 1.5 TSI, 1.6/2.0 TDI, manuel/DSG ve pazara göre 4x4 seçenekler sunar.',
        identity: 'Yeti’nin doğrudan kasa kodu devamı değildir. 2021 sonunda tanıtılan güncelleme aynı neslin makyajıdır; motor ve DSG/4x4 eşleşmesi VIN ile ayrılır.',
        phases: [
            { years: '2017-2021', name: 'İlk seri', summary: '1.0/1.5 TSI, 1.6/2.0 TDI, DSG ve 4x4 seçenekleri.' },
            { years: '2022-Günümüz', name: 'Makyajlı seri', summary: 'Tasarım, aerodinamik, ekran ve EVO motor güncellemeleri.' },
        ],
        strengths: ['Geniş ve esnek kabin', 'Güçlü motor seçeneği yelpazesi', 'Dengeli sürüş ve konfor', 'Yaygın VAG teknik altyapısı', 'VarioFlex gibi pratik donanımlar'],
        weaknesses: ['DSG türü motor ve çekişe göre değişebilir', 'Dizelde DPF/EGR/AdBlue kontrolü gerekir', '4x4 kavrama bakımı ihmal edilebilir', 'TSI soğutma devresi takip ister', 'ADAS kalibrasyonu onarım sonrası önemlidir'],
        vehicleChecks: [
            { title: 'Şanzıman ve çekiş kimliği', severity: 'high', detail: 'DQ200/DQ381 gibi DSG ailesi ile önden/4x4 çekiş VIN’den çıkarılmalı; bakım şartı kod bazında doğrulanmalıdır.' },
            { title: 'TSI soğutma ve ACT', severity: 'high', detail: 'Pompa-termostat, yağ/ateşleme ve 1.5 TSI’da ACT geçişi soğuk-sıcak yol testinde görülmelidir.' },
            { title: 'TDI emisyon sistemi', severity: 'high', detail: 'DPF, EGR, SCR/AdBlue, enjektör ve turbo canlı verisi kullanım profiliyle birlikte değerlendirilmelidir.' },
            { title: '4x4 kavrama ve lastikler', severity: 'high', detail: 'Varsa arka kavrama yağı/pompası, dört lastik çevresi ve tam kilit dönüş davranışı incelenmelidir.' },
            { title: 'ADAS ve elektronik', severity: 'medium', detail: 'Radar-kamera kalibrasyonu, akü, ekran, park sistemi ve tüm ağ modülleri taranmalıdır.' },
        ],
        engines: [
            { slug: '15-tsi-150-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 83, character: 'Karoq için güçlü ve verimli benzinli dengedir; ACT, soğutma ve DQ200 geçmişi satın alma kararını belirler.', idealUse: 'Şehir-uzun yol karma aile kullanımı', checks: ['Pompa-termostat ve çalışma sıcaklığı', 'ACT/düşük devir yazılım davranışı ile ateşleme', 'DSG kavrama ve mekatronik tam sıcak testi'] },
            { slug: '16-20-tdi-dsg', name: '1.6 / 2.0 TDI', fuelType: 'Dizel', transmission: '6 ileri manuel / 7 ileri DSG; 4x4 pazara göre', score: 78, character: 'Yüksek yıllık kilometrede ekonomik seçeneklerdir; hacim, güç, DSG ve 4x4 donanımı aynı kabul edilmemelidir.', idealUse: 'Düzenli uzun yol ve yüksek kilometre', checks: ['DPF kül/kurum, rejenerasyon ve termostat', 'EGR, AdBlue, enjektör ve turbo basıncı', 'DSG türü ile varsa 4x4 kavrama bakım kaydı'] },
        ],
        sources: [
            { title: 'Škoda Karoq world premiere press kit', publisher: 'Škoda Storyboard', url: 'https://www.skoda-storyboard.com/en/press-kits/skoda-karoq-new-compact-suv-lots-space-state-art-technology-press-kit/' },
            { title: 'Karoq engine and transmission specifications', publisher: 'Škoda Storyboard', url: 'https://cdn.skoda-storyboard.com/2017/05/170518-SKODA-KAROQ-World-Premiere-Press_Kit.pdf' },
        ],
        ownership: 'Karoq’ta motor kadar DSG ve çekiş düzeni maliyeti değiştirir. 4x4 lastik eşitliği ve kavrama servisi, dizelde emisyon sistemi, benzinlide soğutma ve ACT kontrolü ilk bütçeye eklenmelidir.',
        verdict: 'VIN’i doğru okunmuş ve güç aktarımı belgeli Karoq kullanışlı aile SUV’udur; yanlış DSG/4x4 varsayımı pahalı bakım sürprizi yaratabilir.',
    },
    {
        id: 16005,
        brand: 'Seat',
        model: 'Ateca 1. Nesil (2016-Günümüz)',
        shortName: 'Seat Ateca',
        year: '2016-Günümüz',
        chassisCode: 'KH7 / MQB A1',
        bodyStyles: ['5 kapı C-SUV'],
        summary: 'Ateca, Seat’ın 2016’da satışa çıkan ilk SUV ailesidir; 1.0/1.4/1.5 TSI, 1.6/2.0 TDI, DSG ve 4Drive kombinasyonları bulunur.',
        identity: 'Cupra Ateca performans modeliyle standart Seat Ateca aynı satın alma profiline sahip değildir. 2020 güncellemesi aynı neslin makyajıdır; motor ve DSG kodu rozetten değil VIN’den alınır.',
        phases: [
            { years: '2016-2020', name: 'İlk seri', summary: '1.0/1.4 TSI, 1.6/2.0 TDI ve 4Drive seçenekleri.' },
            { years: '2020-Günümüz', name: 'Makyajlı seri', summary: 'Yeni tasarım/ekran, 1.5 TSI ve güncellenen emisyon sistemleri.' },
        ],
        strengths: ['Dinamik sürüş karakteri', 'Geniş motor ve çekiş seçeneği', 'Kullanışlı C-SUV kabini', 'Yaygın VAG servis altyapısı', 'Güçlü donanım seçenekleri'],
        weaknesses: ['DQ200 ile ıslak DSG ayrılmalıdır', '4Drive bakım geçmişi unutulabilir', 'Dizel emisyon sistemi kısa mesafede risklidir', 'TSI pompa-termostat takibi gerekir', 'Büyük jantlarda lastik/konfor maliyeti artar'],
        vehicleChecks: [
            { title: 'DSG kodu ve sıcak davranış', severity: 'high', detail: 'Motor/çekişe göre DQ200, DQ250 veya DQ381 olabilen şanzıman VIN’den doğrulanmalı; yağ, kavrama ve mekatronik verisi okunmalıdır.' },
            { title: '4Drive kavrama servisi', severity: 'high', detail: 'Dört çeker araçta kavrama pompası/yağı, diferansiyel, dört lastik çevresi ve tam kilit dönüş test edilmelidir.' },
            { title: 'TSI soğutma ve ACT', severity: 'high', detail: 'Termostat-pompa kaçağı, ateşleme ve 1.4/1.5 TSI ACT geçişleri soğuk-sıcak izlenmelidir.' },
            { title: 'TDI DPF/EGR/SCR', severity: 'high', detail: 'Kısa mesafe geçmişi, rejenerasyon, EGR, AdBlue ve enjektör/turbo verisi birlikte incelenmelidir.' },
            { title: 'Gövde, radar ve elektronik', severity: 'medium', detail: 'Ön yapı onarımı, kamera/radar kalibrasyonu, ekran, akü ve konfor modülleri taranmalıdır.' },
        ],
        engines: [
            { slug: '14-15-tsi-150-dsg', name: '1.4 / 1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 82, character: 'ACT’li 150 PS benzinli aile performans-verim dengesi sunar; 1.4 ve 1.5 motorlar ayrı nesil/kod olarak ele alınır.', idealUse: 'Karma kullanım ve aile seyahati', checks: ['Motor kodu, ACT ve yazılım kampanyaları', 'Pompa-termostat, yağ ve ateşleme sistemi', 'DQ200 ise kavrama/mekatronik sıcak testi'] },
            { slug: '16-20-tdi-dsg-4drive', name: '1.6 / 2.0 TDI', fuelType: 'Dizel', transmission: '6 ileri manuel / 6-7 ileri DSG; 4Drive seçeneği', score: 77, character: 'Uzun yol odaklı dizellerde 2.0 TDI 4Drive ile önden çekişli 1.6 TDI’nin şanzıman ve bakım maliyeti farklıdır.', idealUse: 'Yüksek kilometre ve düzenli uzun yol', checks: ['DPF, EGR, SCR/AdBlue ve çalışma sıcaklığı', 'Enjektör düzeltmesi ve turbo hedef-gerçek basıncı', 'DSG yağı/kavrama ile 4Drive servis kaydı'] },
        ],
        sources: [
            { title: 'New Seat Ateca technical data', publisher: 'SEAT Media Center', url: 'https://www.seat-mediacenter.com/content/dam/seat-media-center/Documents/2016/SEAT-ATECA-Product-Data-2.pdf' },
            { title: 'Seat Ateca safety archive', publisher: 'Euro NCAP', url: euroNcapSearch('Seat Ateca') },
        ],
        ownership: 'Ateca’nın işletme maliyeti 1.0 manuelden 2.0 TDI 4Drive DSG’ye kadar ciddi değişir. İlan fiyatı karşılaştırması motor-şanzıman-çekiş eşitlenmeden yapılmamalıdır.',
        verdict: 'Kodu ve bakım zinciri açık Ateca dinamik, kullanışlı bir C-SUV’dur; DSG veya 4Drive bakımını belgesiz kabul etmek toplam maliyeti büyütür.',
    },
    {
        id: 16006,
        brand: 'Renault',
        model: 'Kadjar 1. Nesil (2015-2022)',
        shortName: 'Renault Kadjar',
        year: '2015-2022',
        chassisCode: 'HA/HFE / CMF-C-D',
        bodyStyles: ['5 kapı C-SUV'],
        summary: 'Kadjar, 2015’te tanıtılan CMF-C/D tabanlı Renault C-SUV’dur; Türkiye’de 1.2/1.3 TCe ve 1.5 dCi/Blue dCi, manuel veya EDC seçenekleri yaygındır.',
        identity: 'Nissan Qashqai ile mimari paylaşımı tüm parçaların ve sorunların aynı olduğu anlamına gelmez. 2018/2019 makyajında motor, multimedya ve emisyon donanımı değişmiştir.',
        phases: [
            { years: '2015-2018', name: 'İlk seri', summary: '1.2 TCe ve 1.5 dCi ağırlığı; manuel/EDC, pazara göre 4x4.' },
            { years: '2019-2022', name: 'Makyajlı seri', summary: '1.3 TCe, Blue dCi ve yenilenen iç-dış ayrıntılar.' },
        ],
        strengths: ['Geniş aile kabini ve bagaj', 'Yüksek servis/parça erişimi', 'Ekonomik 1.5 dCi seçeneği', '1.3 TCe ile güçlü benzinli alternatif', 'Konforlu uzun yol karakteri'],
        weaknesses: ['1.2 TCe yağ tüketimi/zamanlama geçmişi kritik olabilir', 'EDC kavrama kullanım koşuluna duyarlıdır', 'Dizelde DPF/EGR ve emisyon sistemi kontrolü gerekir', 'R-Link ve akü kaynaklı elektronik sorunlar görülebilir', 'Panoramik tavan ve drenaj ek kontrol ister'],
        vehicleChecks: [
            { title: 'TCe motor ailesi ayrımı', severity: 'high', detail: '1.2 ve 1.3 TCe aynı kabul edilmemeli; yağ tüketimi, zamanlama, soğutma ve üretici aksiyonları motor koduyla doğrulanmalıdır.' },
            { title: 'EDC kavrama ve kontrol ünitesi', severity: 'high', detail: 'Geri-yokuş-dur kalk testi soğuk ve sıcak tekrarlanmalı; kavrama değerleri, sıcaklık ve hata geçmişi okunmalıdır.' },
            { title: 'dCi emisyon ve yakıt sistemi', severity: 'high', detail: 'DPF rejenerasyon, EGR, enjektör geri dönüş/düzeltme, turbo ve termostat canlı verisi incelenmelidir.' },
            { title: 'R-Link, akü ve ağ modülleri', severity: 'medium', detail: 'Multimedya, kamera, anahtarsız giriş, start-stop ve düşük voltaj izleri tüm modül taramasıyla görülmelidir.' },
            { title: 'Gövde, süspansiyon ve tavan', severity: 'medium', detail: 'Ön yapı, ADAS kalibrasyonu, burç/amortisör, lastik geometrisi ve varsa tavan drenajı kontrol edilmelidir.' },
        ],
        engines: [
            { slug: '13-tce-140-160-edc', name: '1.3 TCe 140-160 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri EDC', score: 83, character: 'Makyajlı Kadjar’ın güçlü benzinli ailesidir; güç, EDC ve emisyon donanımı model yılına göre teyit edilir.', idealUse: 'Düşük-orta yıllık kilometre ve karma kullanım', checks: ['Soğutma basıncı, yağ/ateşleme ve turbo verisi', 'EDC kavrama/mekatronik sıcak testi', 'VIN’e bağlı yazılım ve servis kampanyaları'] },
            { slug: '15-dci-blue-dci-110-115-edc', name: '1.5 dCi / Blue dCi 110-115 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / 6 ileri EDC', score: 80, character: 'Ekonomik ve yaygın dizel, düzenli uzun yolda güçlüdür; dCi ile Blue dCi emisyon donanımı aynı değildir.', idealUse: 'Düzenli uzun yol ve yüksek kilometre', checks: ['DPF rejenerasyon/termik çalışma ve EGR', 'Enjektör düzeltmeleri, yakıt basıncı ve turbo hattı', 'EDC varsa kavrama; manuelde volan/debriyaj'] },
        ],
        sources: [
            { title: 'Renault Kadjar 2015 official introduction', publisher: 'Renault Group Media', url: 'https://nl.media.renaultgroup.com/renault-onthult-de-kadjar/' },
            { title: 'Renault Kadjar platform and dCi/EDC specifications', publisher: 'Renault Group Media', url: 'https://nl.media.renaultgroup.com/de-nieuwe-renault-kadjar/' },
        ],
        ownership: 'Kadjar’da erken 1.2 TCe, geç 1.3 TCe ve 1.5 dizel ilanları fiyat olarak değil risk profiliyle ayrılmalıdır. EDC, emisyon sistemi ve R-Link/akü işlemleri için belge aranmalıdır.',
        verdict: '1.3 TCe veya bakımlı 1.5 dCi ile Kadjar mantıklı aile C-SUV’u olabilir; motor kimliği ve EDC geçmişi belirsiz araç yalnız fiyat avantajıyla seçilmemelidir.',
    },
    {
        id: 16007,
        brand: 'Nissan',
        model: 'Juke 2. Nesil F16 (2019-Günümüz)',
        shortName: 'Nissan Juke F16',
        year: '2019-Günümüz',
        chassisCode: 'F16 / CMF-B',
        bodyStyles: ['5 kapı B-SUV/crossover'],
        summary: 'İkinci nesil Juke F16, 2019’da Avrupa’da tanıtıldı; 1.0 DIG-T manuel/DCT ve sonraki yıllarda 1.6 hibrit seçenekleriyle ilk nesilden tamamen ayrılır.',
        identity: 'F15 ilk nesille karıştırılmamalıdır. F16’da 1.0 DIG-T’nin güç seviyesi ve DCT seçeneği; hibritte çok modlu güç aktarımı VIN ve üretim yılıyla doğrulanır.',
        phases: [
            { years: '2019-2023', name: 'İlk seri', summary: '1.0 DIG-T manuel/DCT; sonraki dönemde Hybrid.' },
            { years: '2024-Günümüz', name: 'Güncellenen seri', summary: 'Kabin, ekran, donanım ve renk güncellemeleri.' },
        ],
        strengths: ['Özgün tasarım', 'İlk nesle göre büyüyen kabin/bagaj', 'Çevik şehir sürüşü', '1.0 turbo veya tam hibrit seçeneği', 'Gelişmiş sürüş destekleri'],
        weaknesses: ['DCT kavrama yoğun trafikte ölçülmelidir', '1.0 turbo üç silindirli yapı bakım ister', 'Hibrit güç aktarımı özel teşhis gerektirir', 'Büyük jant-lastik maliyeti artabilir', 'ADAS kalibrasyonu kaza/cam işleminde önemlidir'],
        vehicleChecks: [
            { title: '1.0 DIG-T soğuk ve yük testi', severity: 'high', detail: 'Yağ/soğutma seviyesi, ilk çalışma, ateşleme, yakıt düzeltmesi ve hedef-gerçek turbo basıncı aynı testte kaydedilmelidir.' },
            { title: '7DCT kavrama davranışı', severity: 'high', detail: 'Geri, yokuş, park ve tam sıcak dur-kalkta titreme/gecikme; kavrama, takoz ve motor teklemesi ayrıştırılarak incelenmelidir.' },
            { title: 'Hybrid enerji ve çok modlu aktarma', severity: 'high', detail: 'Hibritte yüksek voltaj batarya sağlık/hücre farkı, inverter, soğutma ve mod geçişleri üretici cihazıyla taranmalıdır.' },
            { title: 'ADAS ve kamera/radar', severity: 'high', detail: 'Ön cam/tampon işlemi, ProPILOT donanımı ve kalibrasyon belgesi gövde geometrisiyle birlikte kontrol edilmelidir.' },
            { title: 'Akü, NissanConnect ve gövde', severity: 'medium', detail: '12 V akü, multimedya, anahtarsız sistem, park donanımı ve podye/direk güvenliği birlikte incelenmelidir.' },
        ],
        engines: [
            { slug: '10-dig-t-114-manuel-dct', name: '1.0 DIG-T 114 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DCT', score: 80, character: 'F16’nın yaygın turbo benzinlisidir; güç yazımı pazara göre değişebilir, DCT ve manuel ayrı risk profiline sahiptir.', idealUse: 'Şehir ve orta kilometreli karma kullanım', checks: ['Soğuk çalışma, yağ/soğutma ve turbo basıncı', 'Misfire/yakıt düzeltmesi ile motor takozları', 'DCT varsa kavrama ve kontrol ünitesi sıcak testi'] },
            { slug: '16-hybrid-143-multimode', name: '1.6 Hybrid 143 PS', fuelType: 'Hibrit', transmission: 'Çok modlu otomatik', score: 85, character: 'Harici şarj istemeyen tam hibrit sistem, klasik CVT veya DCT gibi değerlendirilmemelidir.', idealUse: 'Yoğun şehir içi ve düşük tüketim odağı', checks: ['Batarya sağlık, hücre farkı ve soğutma kanalı', 'Benzinli motor, inverter ve izolasyon/hata geçmişi', 'Elektrik-benzin geçişleri ve rejeneratif fren davranışı'] },
        ],
        sources: [
            { title: 'All-new second-generation Nissan Juke Europe launch', publisher: 'Nissan Global Newsroom', url: 'https://global.nissannews.com/en/releases/release-e4821df801b56439fa56662c43067301-all-new-nissan-juke-unveiled-in-europe' },
            { title: 'New Juke engineering overview', publisher: 'Nissan Technical Review', url: 'https://www.nissan-global.com/JP/TECHNICALREVIEW/PDF/NISSAN_TECHINICAL_REVIEW_86.pdf' },
        ],
        ownership: 'Juke F16’da 1.0 DCT ile hibritin bakım ve teşhis bütçeleri farklıdır. DCT kavrama veya hibrit batarya için yalnız kısa sürüş değil, canlı veri ve tam sıcak test istenmelidir.',
        verdict: 'Kimliği doğru ve sistem taraması temiz Juke F16 güçlü şehir crossover’ıdır; ilk nesil Juke sorun listesi bu araca kopyalanmamalıdır.',
    },
    {
        id: 16008,
        brand: 'Opel',
        model: 'Insignia B 2. Nesil (2017-2022)',
        shortName: 'Opel Insignia B',
        year: '2017-2022',
        chassisCode: 'Z18 / Insignia B',
        bodyStyles: ['Grand Sport liftback', 'Sports Tourer station wagon', 'Country Tourer'],
        summary: 'İkinci nesil Insignia 2017’de Grand Sport ve Sports Tourer gövdelerle üretime girdi; Türkiye’de 1.5/1.6 Turbo benzinli ile 1.6/2.0 dizel seçenekler görülür.',
        identity: 'Insignia A ile motor ve otomatik şanzıman varsayımları taşınmamalıdır. 2020 makyajı ve PSA/Stellantis geçişindeki motor/şanzıman değişimleri VIN’den doğrulanmalıdır.',
        phases: [
            { years: '2017-2019', name: 'İlk seri', summary: 'GM dönemi motorları, 6/8 ileri otomatik ve opsiyonel AWD.' },
            { years: '2020-2022', name: 'Makyajlı seri', summary: 'Yeni tasarım, aydınlatma, emisyon ve motor-şanzıman güncellemeleri.' },
        ],
        strengths: ['Geniş kabin ve bagaj', 'Konforlu uzun yol sürüşü', 'Grand Sport pratik bagaj kapağı', 'Güçlü güvenlik/aydınlatma donanımları', 'Dizelde yüksek tork seçenekleri'],
        weaknesses: ['Motor-şanzıman gamı üretim yılına göre çok değişir', 'Dizel emisyon/AdBlue sistemi maliyetli olabilir', 'Büyük jant ve adaptif donanımlar gideri artırır', 'LED/IntelliLux far onarımı pahalıdır', 'AWD ve otomatik bakımı belge ister'],
        vehicleChecks: [
            { title: 'VIN ile motor-şanzıman fazı', severity: 'high', detail: '1.5/1.6/2.0 motor, 6/8/9 ileri otomatik ve AWD kombinasyonu üretim tarihiyle birlikte servis sisteminden çıkarılmalıdır.' },
            { title: 'Dizel DPF/EGR/AdBlue', severity: 'high', detail: 'Rejenerasyon, diferansiyel basınç, EGR, NOx/AdBlue ve çalışma sıcaklığı kısa mesafe geçmişiyle değerlendirilmelidir.' },
            { title: 'Otomatik ve AWD', severity: 'high', detail: 'Doğru sıvı kaydı, soğuk-sıcak kavrama/geçiş ve varsa arka tahrik sistemi bakım/hata verisi incelenmelidir.' },
            { title: 'IntelliLux, kamera ve gövde', severity: 'high', detail: 'Far modülleri, ön cam-kamera, radar ve kalibrasyon; ön yapı onarım ölçümleriyle birlikte kontrol edilmelidir.' },
            { title: 'Elektronik ve yürüyen', severity: 'medium', detail: 'Akü/şarj, ekran, park freni, adaptif şasi varsa hata taraması; jant-lastik ve süspansiyon lift kontrolü yapılmalıdır.' },
        ],
        engines: [
            { slug: '15-16-turbo-benzin-otomatik', name: '1.5 / 1.6 Turbo Benzin', fuelType: 'Benzin', transmission: '6 ileri manuel / 6-8 ileri otomatik', score: 80, character: 'Benzinli ailede hacim, güç ve otomatik şanzıman üretim fazına göre değişir; tek bir “1.5 turbo” profili varsayılmaz.', idealUse: 'Düşük-orta kilometreli konforlu uzun yol', checks: ['VIN’den motor/şanzıman kodu ve servis kampanyası', 'Soğutma, turbo, ateşleme ve yakıt düzeltmeleri', 'Otomatikte doğru sıvı ve tam sıcak geçişler'] },
            { slug: '16-20-cdti-dizel-otomatik', name: '1.6 / 2.0 CDTI Dizel', fuelType: 'Dizel', transmission: '6 ileri manuel / 6-8-9 ileri otomatik', score: 76, character: 'Yüksek tork ve ekonomi sunar; erken/geç dizel ile AdBlue ve şanzıman donanımı ayrı incelenmelidir.', idealUse: 'Düzenli uzun yol ve yüksek yıllık kilometre', checks: ['DPF/EGR, NOx-AdBlue ve termostat verisi', 'Enjektör düzeltmesi, turbo ve yağlama geçmişi', 'Otomatik/volan ile varsa AWD bakım kayıtları'] },
        ],
        sources: [
            { title: 'Second-generation Insignia production start', publisher: 'Opel / Stellantis Media', url: 'https://www.media.stellantis.com/pl-pl/opel/press/ruszyla-produkcja-nowej-insignii-flagowego-modelu-opla' },
            { title: 'Insignia second-generation engine and transmission context', publisher: 'Opel / Stellantis Media', url: 'https://www.media.stellantis.com/em-en/opel/press/dream-team-new-top-diesel-engine-for-opel-insignia-flagship' },
        ],
        ownership: 'Insignia B’de düşük ilan fiyatı; far, dizel emisyon sistemi, büyük lastik, otomatik veya AWD masrafını gizleyebilir. Doğru üretim fazı çıkarılmadan emsal fiyat karşılaştırması yapılmamalıdır.',
        verdict: 'Belgeli uzun yol geçmişi ve doğru motor-şanzıman bakımıyla Insignia B çok iyi bir seyahat otomobilidir; kimliği veya emisyon geçmişi belirsiz örnek yüksek bütçe ister.',
    },
    {
        id: 16009,
        brand: 'BMW',
        model: '1 Serisi F20-F21 (2011-2019)',
        shortName: 'BMW 1 Serisi F20/F21',
        year: '2011-2019',
        chassisCode: 'F20 5 kapı / F21 3 kapı',
        bodyStyles: ['5 kapı hatchback', '3 kapı hatchback'],
        summary: 'İkinci nesil BMW 1 Serisi, 2011’de arkadan itişli kompakt olarak tanıtıldı; Türkiye’de 116i, 118i ve 116d seçenekleri ile sekiz ileri otomatik öne çıkar.',
        identity: '2015 makyajında yalnız tasarım değil motor ailesi de değişebilir. N13, B38/B48 benzinli ve N47/B37/B47 dizel varsayımları model adıyla değil VIN/motor koduyla doğrulanmalıdır.',
        phases: [
            { years: '2011-2015', name: 'İlk seri', summary: 'Erken 116i/118i ve N47 dizeller; ilk far/stop tasarımı.' },
            { years: '2015-2019', name: 'LCI/makyaj', summary: 'Yeni tasarım, üç/dört silindirli yeni motor ailesi ve donanım güncellemeleri.' },
        ],
        strengths: ['Arkadan itişli dengeli sürüş', 'ZF sekiz ileri otomatik seçeneği', 'Premium kompakt kabin', 'Geniş motor/donanım seçimi', 'Güçlü ikinci el ve özel servis ağı'],
        weaknesses: ['Motor ailesine özgü zamanlama/soğutma riskleri değişir', 'Run-flat lastik ve süspansiyon maliyeti', 'Yetkisiz yazılım/modifiye edilmiş örnekler', 'Dizelde kısa mesafe emisyon sistemi yükü', 'Kaza sonrası arka-ön geometri kritik'],
        vehicleChecks: [
            { title: 'Motor kodu ve zamanlama', severity: 'high', detail: 'N13/B38/B48 veya N47/B37/B47 motor ailesi VIN’den çıkarılmalı; soğuk ses, faz değerleri ve üretici aksiyonları koda göre incelenmelidir.' },
            { title: 'ZF 8HP veya manuel aktarma', severity: 'high', detail: 'Otomatikte sıvı/karter kaydı, adaptasyon ve soğuk-sıcak geçiş; manuelde debriyaj/volan ve diferansiyel sesi test edilmelidir.' },
            { title: 'Soğutma, turbo ve yağ kaçakları', severity: 'high', detail: 'Pompa-termostat, hortum, kapak/filtre gövdesi, turbo basıncı ve yağ seviyesi basınç/kaçak testiyle incelenmelidir.' },
            { title: 'Dizel DPF/EGR', severity: 'high', detail: 'Dizelde DPF basıncı/regen, EGR, çalışma sıcaklığı, enjektör ve turbo verisi okunmalıdır.' },
            { title: 'Gövde, yürüyen ve elektronik', severity: 'medium', detail: 'Şasi geometrisi, airbag, run-flat/jant, burç-amortisör ile iDrive, akü kaydı ve tüm modüller taranmalıdır.' },
        ],
        engines: [
            { slug: '116i-118i-turbo-otomatik', name: '116i / 118i Turbo Benzin', fuelType: 'Benzin', transmission: '6 ileri manuel / 8 ileri otomatik', score: 77, character: 'Rozet aynı kalsa da erken N13 ile geç B38/B48 motorların silindir, zamanlama ve bakım profili farklıdır.', idealUse: 'Sürüş keyfi ve düşük-orta yıllık kilometre', checks: ['VIN’den motor ailesi, zamanlama ve kampanyalar', 'Soğutma, turbo, ateşleme ve yağ kaçağı', 'ZF 8HP sıvı/adaptasyon ile tam sıcak geçiş'] },
            { slug: '116d-118d-dizel-otomatik', name: '116d / 118d Dizel', fuelType: 'Dizel', transmission: '6 ileri manuel / 8 ileri otomatik', score: 75, character: 'N47 ve sonraki B-serisi dizeller ayrılmalı; düzenli uzun yol geçmişi ve zamanlama/emisyon kontrolleri belirleyicidir.', idealUse: 'Uzun yol ve yüksek yıllık kilometre', checks: ['Motor koduna göre zincir ve soğuk çalışma sesi', 'DPF/EGR, termostat, enjektör ve turbo verisi', 'ZF 8HP veya manuel volan/debriyaj'] },
        ],
        sources: [
            { title: 'The new BMW 1 Series 2011 official launch', publisher: 'BMW Group PressClub', url: 'https://www.press.bmwgroup.com/united-kingdom/article/detail/T0112077EN_GB/the-new-bmw-1-series' },
            { title: 'BMW 1 Series 2015 model update', publisher: 'BMW Group PressClub', url: 'https://www.press.bmwgroup.com/united-kingdom/article/detail/T0215025EN_GB/the-new-bmw-1-series' },
        ],
        ownership: 'F20’de rozet, gerçek motoru söylemeye yetmez. Erken ve LCI araçların motor kodu; otomatik bakım, run-flat lastik, modifiye/yazılım ve şasi geometrisiyle birlikte fiyatlandırılmalıdır.',
        verdict: 'Motor kodu ve bakım zinciri açık F20/F21 keyifli premium kompakttır; yalnız “116i” adına bakarak zamanlama ve motor ailesi varsaymak ciddi hatadır.',
    },
    {
        id: 16010,
        brand: 'Mercedes-Benz',
        model: 'CLA C117 1. Nesil (2013-2019)',
        shortName: 'Mercedes-Benz CLA C117',
        year: '2013-2019',
        chassisCode: 'C117 Coupé / X117 Shooting Brake',
        bodyStyles: ['4 kapı coupé-sedan', 'Shooting Brake'],
        summary: 'İlk nesil CLA, 2013’te önden çekişli kompakt Mercedes ailesine katıldı; Türkiye’de CLA 180 benzinli/dizel ve 7G-DCT seçenekleri yaygındır.',
        identity: 'C117 dört kapılı gövde, X117 Shooting Brake’dir. CLA 180 rozeti üretim yılına göre benzinli veya dizel farklı motorlara işaret edebilir; 4MATIC ve AMG ayrı teknik profildir.',
        phases: [
            { years: '2013-2016', name: 'İlk seri', summary: 'İlk tasarım, M270 benzinli ve OM651/OM607 pazar dizelleri.' },
            { years: '2016-2019', name: 'Makyajlı seri', summary: 'Yeni tampon/aydınlatma, ekran ve donanım güncellemeleri.' },
        ],
        strengths: ['Çarpıcı aerodinamik tasarım', 'Premium kompakt iç mekân', 'Ekonomik dizel/benzinli seçenekler', '7G-DCT ile hızlı geçişler', 'Güçlü ikinci el talebi'],
        weaknesses: ['7G-DCT kavrama ve mekatronik geçmişi önemlidir', 'CLA 180 rozeti motoru tek başına göstermez', 'Çerçevesiz cam ve alçak gövde onarım maliyeti', 'Dizelde DPF/EGR/AdBlue donanımı pazara göre değişir', 'AMG görünümlü sonradan parçalar kaza tespitini zorlaştırabilir'],
        vehicleChecks: [
            { title: 'VIN ile motor ve donanım', severity: 'high', detail: 'Benzinli/dizel motor kodu, güç, 7G-DCT, 4MATIC, fabrika AMG paket ve üretim fazı datacard üzerinden doğrulanmalıdır.' },
            { title: '7G-DCT kavrama/mekatronik', severity: 'high', detail: 'Soğuk-sıcak geri, yokuş ve dur-kalk davranışı; kavrama adaptasyonu, basınç, sıcaklık ve hata geçmişiyle okunmalıdır.' },
            { title: 'Benzinli soğutma ve ateşleme', severity: 'high', detail: 'Termostat, pompa, yağ kaçakları, turbo basıncı, buji-bobin ve yakıt düzeltmeleri yük testinde görülmelidir.' },
            { title: 'Dizel emisyon ve enjektör', severity: 'high', detail: 'DPF/EGR, çalışma sıcaklığı, enjektör düzeltmesi ve varsa NOx/AdBlue sistemi taranmalıdır.' },
            { title: 'Çerçevesiz cam, gövde ve elektronik', severity: 'medium', detail: 'Cam ayarı/fitil-su, podye/direk/airbag, far-radar, akü ve COMAND/Audio modülleri kontrol edilmelidir.' },
        ],
        engines: [
            { slug: 'cla-180-16-benzin-7g-dct', name: 'CLA 180 1.6 Turbo Benzin', fuelType: 'Benzin', transmission: '6 ileri manuel / 7G-DCT', score: 79, character: 'Türkiye’de yaygın benzinli giriş seçeneğidir; motor kodu, üretim fazı ve şanzıman datacard ile doğrulanır.', idealUse: 'Düşük-orta kilometre ve şehir-uzun yol karma', checks: ['Soğutma, yağ kaçağı, turbo ve ateşleme', '7G-DCT kavrama/mekatronik sıcak testi', 'Yetkisiz yazılım ve egzoz/modifiye kontrolü'] },
            { slug: 'cla-180d-dizel-7g-dct', name: 'CLA 180 d Dizel', fuelType: 'Dizel', transmission: '6 ileri manuel / 7G-DCT', score: 76, character: 'Motor tedariki ve güç seviyesi üretim yılı/pazara göre değişebilir; yalnız rozetten parça veya bakım kararı verilmez.', idealUse: 'Düzenli uzun yol ve ekonomi', checks: ['Datacard ile motor kodu ve emisyon donanımı', 'DPF/EGR, termostat, enjektör ve turbo', '7G-DCT kavrama/servis geçmişi'] },
        ],
        sources: [
            { title: 'Mercedes-Benz: first CLA introduced in 2013', publisher: 'Mercedes-Benz Media', url: 'https://media.mercedes-benz.com/article/f0dd1cea-00b8-46d9-86be-7a398c6bb9ba' },
            { title: 'Mercedes-Benz CLA safety archive', publisher: 'Euro NCAP', url: euroNcapSearch('Mercedes-Benz CLA') },
        ],
        ownership: 'CLA C117’de kozmetik AMG dönüşümü ile fabrika donanımı ayrılmalı; far, jant, çerçevesiz cam ve premium işçilik maliyeti motor/7G-DCT rezervine eklenmelidir.',
        verdict: 'Datacard’ı ve 7G-DCT geçmişi açık CLA C117 çekici bir premium kompakttır; rozet veya dış görünüş gerçek motor ve fabrika paketinin kanıtı değildir.',
    },
    {
        id: 16011,
        brand: 'Ford',
        model: 'Mondeo Mk5 (2014-2022)',
        shortName: 'Ford Mondeo Mk5',
        year: '2014-2022',
        chassisCode: 'CD391 / Mk5 Avrupa',
        bodyStyles: ['4 kapı sedan', '5 kapı liftback', 'station wagon'],
        summary: 'Avrupa Mondeo Mk5, 2014’te satışa çıktı; Türkiye’de 1.5 EcoBoost, 1.5/2.0 TDCi, manuel, tork konvertörlü otomatik ve 2.0 dizelde PowerShift seçenekleri görülür.',
        identity: 'Kuzey Amerika Fusion ile yakın olsa da pazar motor/şanzıman ve parça kodları aynı kabul edilmemelidir. “Otomatik” ifadesi PowerShift veya tork konvertörlü farklı kutuları gizleyebilir.',
        phases: [
            { years: '2014-2018', name: 'İlk seri', summary: '1.5 EcoBoost/TDCi ve 2.0 TDCi-PowerShift ağırlıklı dönem.' },
            { years: '2019-2022', name: 'Makyajlı seri', summary: 'Yeni tasarım, 2.0 EcoBlue ve sekiz ileri otomatik/pazara göre hibrit güncellemeleri.' },
        ],
        strengths: ['Çok iyi uzun yol konforu', 'Geniş kabin ve liftback bagaj', 'Dengeli yol tutuş', 'Güçlü dizel tork seçenekleri', 'Zengin güvenlik ve konfor donanımı'],
        weaknesses: ['Şanzıman tipi ilanda sık karıştırılır', 'PowerShift bakım ve kavrama geçmişi kritiktir', 'Dizel emisyon sistemi kısa mesafeyi sevmez', 'Büyük gövde ve donanım işletme maliyetini artırır', 'SYNC ve akü/düşük voltaj sorunları görülebilir'],
        vehicleChecks: [
            { title: 'Şanzıman türü ve servis geçmişi', severity: 'high', detail: 'PowerShift ile tork konvertörlü kutu VIN/koddan ayrılmalı; doğru sıvı/filtre, kavrama ve mekatronik verisi incelenmelidir.' },
            { title: 'TDCi DPF/EGR/turbo', severity: 'high', detail: 'Rejenerasyon, basınç, sıcaklık, EGR, enjektör ve turbo verisi uzun yol/kısa mesafe geçmişiyle okunmalıdır.' },
            { title: 'EcoBoost soğutma ve yağlama', severity: 'high', detail: 'Soğutma basıncı, hortum/termostat, doğru yağ, turbo ve ateşleme yük altında değerlendirilmelidir.' },
            { title: 'SYNC, akü ve sürüş destekleri', severity: 'medium', detail: 'Akü yük/şarj, SYNC, kamera-radar, park sistemi ve ağ kodları kalibrasyon belgesiyle kontrol edilmelidir.' },
            { title: 'Gövde, süspansiyon ve lastik', severity: 'medium', detail: 'Uzun gövdede podye/direk/taban, jant-lastik, burç/amortisör ve dört teker geometri ölçülmelidir.' },
        ],
        engines: [
            { slug: '15-ecoboost-160-otomatik', name: '1.5 EcoBoost 160 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 6 ileri otomatik', score: 79, character: 'Büyük gövdede yeterli performans sunar; otomatik türü ve soğutma/yağ geçmişi VIN ile doğrulanır.', idealUse: 'Düşük-orta kilometre ve konforlu uzun yol', checks: ['Soğutma basıncı, doğru yağ ve motor kodu', 'Turbo hedef-gerçek, ateşleme ve yakıt düzeltmeleri', 'Otomatik sıvı kaydı ve sıcak geçişler'] },
            { slug: '20-tdci-150-180-powershift', name: '2.0 TDCi 150-180 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / 6 ileri PowerShift', score: 74, character: 'Mondeo’ya uygun tork sağlar; ıslak kavramalı PowerShift düzenli yağ/filtre servisi ve uzun sıcak test ister.', idealUse: 'Yüksek kilometreli uzun yol', checks: ['DPF/EGR, termostat, enjektör ve turbo', 'PowerShift yağ/filtre faturası, kavrama ve mekatronik', 'Volan, motor takozu ve AWD varsa arka tahrik'] },
        ],
        sources: [
            { title: 'Ford Mondeo Mk5 technical specifications', publisher: 'Ford Media Center', url: 'https://media.ford.com/content/dam/fordmedia/Europe/documents/productReleases/Mondeo/FordMondeo_TechnicalSpecifications_EU.pdf' },
            { title: 'Ford Mondeo 2014 European launch', publisher: 'Ford Media Center', url: 'https://media.ford.com/content/fordmedia/feu/de/de/news/2014/08/08/orderbuecher-ab-sofort-geoeffnet--der-hochmoderne-neue-ford-mond.html' },
        ],
        ownership: 'Mondeo Mk5’in cazip fiyatı büyük lastik, dizel emisyon, gelişmiş far/ADAS ve PowerShift bakımını ortadan kaldırmaz. İlk bakım bütçesi küçük sınıf araç gibi hesaplanmamalıdır.',
        verdict: 'Uzun yol geçmişi ve şanzıman servisi belgeli Mondeo Mk5 çok güçlü bir aile otomobilidir; “otomatik” türü doğrulanmadan alınmamalıdır.',
    },
    {
        id: 16012,
        brand: 'Peugeot',
        model: '308 T9 2. Nesil (2013-2021)',
        shortName: 'Peugeot 308 T9',
        year: '2013-2021',
        chassisCode: 'T9 / EMP2',
        bodyStyles: ['5 kapı hatchback', 'SW station wagon'],
        summary: 'İkinci nesil 308 T9, 2013’te EMP2 tabanıyla tanıtıldı; Türkiye’de 1.2 PureTech ve 1.6 e-HDi/BlueHDi motorlar, manuel, ETG6 ve EAT6/EAT8 seçenekleri bulunur.',
        identity: 'T7 eski nesil ve P5 yeni nesille karıştırılmamalıdır. ETG6 robotize şanzıman, EAT6 tork konvertörlü otomatik değildir; ilanlarda ikisi de “otomatik” yazılabilir.',
        phases: [
            { years: '2013-2017', name: 'İlk seri', summary: '1.2 PureTech, 1.6 e-HDi/BlueHDi; ETG6 ve EAT6 seçenekleri.' },
            { years: '2017-2021', name: 'Makyajlı seri', summary: 'Yeni ön yüz/ekran, motor-emisyon ve EAT8 güncellemeleri.' },
        ],
        strengths: ['Hafif EMP2 gövde ve dengeli sürüş', 'Ekonomik motor seçenekleri', 'i-Cockpit ve kaliteli kabin', 'SW gövdede geniş bagaj', 'EAT6 ile konforlu otomatik seçenek'],
        weaknesses: ['PureTech zamanlama ve doğru yağ geçmişi kritik', 'ETG6 ile EAT6 karıştırılabilir', 'Dizelde DPF/EGR/AdBlue masrafı', 'Dokunmatik ekrana bağlı klima işlevleri', 'Alçak profil jant-lastik maliyeti'],
        vehicleChecks: [
            { title: 'PureTech zamanlama ve yağlama', severity: 'high', detail: 'Motor kodu, kayış/zincir düzeni, doğru yağ, kayış ölçümü, yağ süzgeci/basıncı ve servis faturaları birlikte incelenmelidir.' },
            { title: 'BlueHDi emisyon sistemi', severity: 'high', detail: 'DPF, EGR, SCR/AdBlue, NOx, enjektör ve çalışma sıcaklığı üretici cihazıyla okunmalıdır.' },
            { title: 'ETG6-EAT6-EAT8 ayrımı', severity: 'high', detail: 'Şanzıman VIN’den belirlenmeli; robotizede kavrama/aktüatör, EAT kutuda sıvı ve sıcak geçişler kontrol edilmelidir.' },
            { title: 'Ekran, akü ve elektronik', severity: 'medium', detail: 'Dokunmatik ekran, klima komutları, kamera/sensör, start-stop ve düşük voltaj kodları denenmelidir.' },
            { title: 'Gövde ve yürüyen', severity: 'medium', detail: 'EMP2 gövde bağlantıları, podye/direk, airbag, jant-lastik ve süspansiyon geometrisi liftte ölçülmelidir.' },
        ],
        engines: [
            { slug: '12-puretech-110-130-eat6', name: '1.2 PureTech 110-130 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / EAT6-EAT8', score: 69, character: 'Canlı ve ekonomik turbo benzinlidir; motor kodu/zamanlama revizyonu ile doğru yağ geçmişi satın alma kararının merkezindedir.', idealUse: 'Belgeli bakımla düşük-orta kilometre', checks: ['Zamanlama düzeni, kayış ölçümü ve yağ basıncı', 'Turbo, ateşleme, yakıt düzeltmesi ve soğutma', 'EAT6/EAT8 sıvı kaydı ve sıcak geçiş'] },
            { slug: '16-bluehdi-100-120-eat6', name: '1.6 BlueHDi 100-120 PS', fuelType: 'Dizel', transmission: '5/6 ileri manuel / ETG6-EAT6', score: 76, character: 'Uzun yolda verimli dizel, şanzıman ve emisyon donanımı doğru ayrıldığında mantıklıdır; kısa mesafe geçmişi riski artırır.', idealUse: 'Düzenli uzun yol ve yüksek kilometre', checks: ['DPF/EGR, SCR-AdBlue ve çalışma sıcaklığı', 'Enjektör, turbo ve yağlama geçmişi', 'ETG6 kavrama/aktüatör veya EAT6 sıvı-geçiş kontrolü'] },
        ],
        sources: [
            { title: 'Second-generation Peugeot 308 launch and engines', publisher: 'Peugeot / Stellantis Media', url: 'https://www.media.stellantis.com/fr-fr/peugeot/press/nouvelle-peugeot-308-publication-des-tarifs-et-ouverture-des-commandes-france-le-15-juillet-1632577500-1373904900' },
            { title: 'Peugeot 308 safety archive', publisher: 'Euro NCAP', url: euroNcapSearch('Peugeot 308') },
        ],
        ownership: '308 T9’da EAT6 ile ETG6’nın piyasa değeri ve bakım profili farklıdır. PureTech veya BlueHDi’de belge eksikliği, düşük kilometre avantajını hızla silebilir.',
        verdict: 'Doğru şanzıman ve belgeli motor bakımıyla 308 T9 başarılı bir kompakt aile otomobilidir; PureTech zamanlama veya dizel emisyon geçmişi ölçülmeden karar verilmemelidir.',
    },
];
