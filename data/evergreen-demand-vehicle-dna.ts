import type { VehicleDNA } from './vehicle-dna';

type ResearchedVehicle = Omit<VehicleDNA, 'userExperiences' | 'totalReports'>;

const researchedVehicle = (vehicle: ResearchedVehicle): VehicleDNA => ({
    ...vehicle,
    userExperiences: [],
    totalReports: 0,
});

// Aynı kanonik rotayı taşıyan eski kopyalar.
export const evergreenSupersededVehicleIds = [126, 2053, 2065, 2074, 3028, 3036];

export const evergreenDemandVehicleDNAData: VehicleDNA[] = [
    researchedVehicle({
        id: 34,
        brand: 'Renault',
        model: 'Clio 4. Nesil (2012-2019)',
        year: '2012-2019',
        ncapStars: 5,
        ncapYear: '2012',
        dnaScore: 78,
        strengths: ['Türkiye ikinci elinde yüksek arz ve parça erişimi', '0.9 TCe ve 1.5 dCi ile düşük tüketim seçenekleri', 'Şehir içinde kolay kullanım ve kompakt boyut', '2012 Euro NCAP protokolünde beş yıldız'],
        weaknesses: ['EDC ve dizel emisyon sisteminde bakım geçmişinin önemi', 'Yaşa bağlı multimedya ve kartlı giriş sorunları', 'Ön takım ve kapı fitillerinde kullanım izi', 'Donanım seviyeleri arasında güvenlik ekipmanı farkları'],
        chronicIssues: [
            { id: 1, title: 'EDC kavrama, aktüatör ve adaptasyon kontrolü', severity: 'high', reportCount: 0, description: 'EDC araç soğuk ve tam ısınmış durumda D-R, yokuş kalkışı, geri manevra ve yoğun trafik hızında denenmeli; kavrama aşınma/adaptasyon değerleri ile hata hafızası okunmalıdır. Titreşimde motor takozları elenmeden kavrama değişimi önerilmemelidir.' },
            { id: 2, title: '1.5 dCi DPF, EGR, enjektör ve turbo verileri', severity: 'high', reportCount: 0, description: 'Dizelde DPF doluluk ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve istenen-gerçek turbo basıncı okunmalıdır. Kısa mesafe kullanım izi, sensör sorunu ve mekanik arıza ayrılmadan temizlik veya parça değişimi kararı verilmemelidir.' },
            { id: 3, title: '0.9 TCe soğuk çalışma ve soğutma kontrolü', severity: 'medium', reportCount: 0, description: 'Motor tamamen soğukken rölanti, ateşleme sayacı, yakıt düzeltmeleri ve turbo basıncı izlenmeli; yağ ve soğutma sıvısı kaçakları kontrol edilmelidir. Üç silindirli normal titreşim ile takoz veya ateşleme sorunu ölçümle ayrılmalıdır.' },
            { id: 4, title: 'Kartlı giriş, UCH ve 12 V akü kontrolü', severity: 'medium', reportCount: 0, description: 'Her iki kart, kapı kolları, merkezi kilit, start düğmesi ve immobilizer denenmeli; akü yük testi ile şarj voltajı ölçülmelidir. Birden fazla elektronik uyarıda UCH veya kart değişiminden önce düşük voltaj ve şase bağlantıları elenmelidir.' },
            { id: 5, title: 'Media Nav, Bluetooth ve direksiyon kumandaları', severity: 'low', reportCount: 0, description: 'Ekran soğuk açılıştan itibaren denenmeli; Bluetooth, USB, navigasyon, direksiyon kumandaları ve hoparlörler kontrol edilmelidir. Donma ya da yeniden başlama görülürse yazılım sürümü, akü beslemesi ve soketler birlikte incelenmelidir.' },
            { id: 6, title: 'Ön takım, direksiyon ve su girişleri', severity: 'medium', reportCount: 0, description: 'Bozuk zeminde z-rot, salıncak burcu, amortisör üst takozu ve direksiyon boşluğu kontrol edilmeli; kapı-bagaj fitilleri ile taban halısı nem açısından incelenmelidir. Lastik omuz aşınması görülürse jant ve gövde geometrisi ölçülmelidir.' },
        ],
        generationInfo: {
            chassisCode: 'X98 / Clio IV',
            marketScope: 'Türkiye ve Avrupa',
            summary: 'Dördüncü nesil Clio 2012’de tanıtıldı; Türkiye’de hatchback ve Sport Tourer gövde, benzinli 0.9 TCe ile yaygın 1.5 dCi motor seçenekleriyle satıldı.',
            phases: [
                { years: '2012-2016', name: 'İlk seri', summary: 'İlk tasarım, Media Nav ve geniş benzinli-dizel motor yelpazesi.' },
                { years: '2016-2019', name: 'Makyajlı seri', summary: 'Güncellenen ön tasarım, aydınlatma ve donanım seçenekleri.' },
            ],
            bodyStyles: ['5 kapı hatchback', 'Sport Tourer'],
            turkeyEngines: ['0.9 TCe 90 PS manuel', '1.2 16V benzin manuel', '1.5 dCi 75/90 PS manuel', '1.5 dCi 90 PS EDC'],
        },
        sources: [
            { title: 'Clio IV ve Renault güvenlik zaman çizelgesi', publisher: 'Renault UK', url: 'https://www.renault.co.uk/safety/timeline.html' },
            { title: 'Renault Clio IV Euro NCAP 2012 testi', publisher: 'Euro NCAP', url: 'https://news.euroncap.com/safercars/renault-clio-iv---crash-test-2012/s/0697fdec-68f1-47f7-a62b-220811f87fa9' },
            { title: 'Clio nesilleri ve güç aktarma geçmişi', publisher: 'Renault Global Media', url: 'https://media.renault.com/test-driving-new-clio-the-new-class-standard/?lang=eng' },
        ],
    }),
    researchedVehicle({
        id: 22,
        brand: 'Opel',
        model: 'Astra K (2015-2021)',
        year: '2015-2021',
        ncapStars: 5,
        ncapYear: '2015',
        dnaScore: 76,
        strengths: ['Hafifleyen K kasa ile dengeli yol tutuş', '1.4 Turbo ve 1.6 CDTI motor seçenekleri', 'IntelliLux LED ve sürüş destekleri', 'Yaygın servis ve parça ekosistemi'],
        weaknesses: ['Dizelde DPF/SCR ve zincir sesi kontrol ihtiyacı', 'Otomatik şanzımanda bakım geçmişinin önemi', 'Ekran ve kamera sisteminde yazılım hassasiyeti', 'LED far onarım maliyeti'],
        chronicIssues: [
            { id: 1, title: '1.6 CDTI zincir sesi ve yağlama kontrolü', severity: 'high', reportCount: 0, description: 'Motor tamamen soğukken zincir bölgesi dinlenmeli; yağ basıncı, doğru yağ standardı ve bakım faturaları incelenmelidir. Sesin aksesuar kayışı, enjektör veya zincir kaynağı ölçülmeden motor açma ya da zincir değişimi kararı verilmemelidir.' },
            { id: 2, title: 'DPF, EGR, SCR ve enjektör taraması', severity: 'high', reportCount: 0, description: 'Dizelde DPF kurum/kül ve rejenerasyon geçmişi, EGR komutu, AdBlue/SCR hataları ve enjektör düzeltmeleri okunmalıdır. Kullanım profili ile sensör veya mekanik arıza ayrılmadan temizlik ya da pahalı parça değişimi önerilmemelidir.' },
            { id: 3, title: '1.4 Turbo soğutma ve ateşleme kontrolü', severity: 'medium', reportCount: 0, description: 'Soğuk rölanti, ateşleme sayacı, yakıt düzeltmeleri ve turbo basıncı izlenmeli; termostat, genleşme kabı, hortumlar ve yağ kaçağı kontrol edilmelidir. Tekleme buji-bobin ve yakıt kalitesi elenmeden turbo arızasına bağlanmamalıdır.' },
            { id: 4, title: 'AT6 otomatik sıcak-soğuk geçiş testi', severity: 'medium', reportCount: 0, description: 'Otomatik şanzıman soğuk ve tam çalışma sıcaklığında D-R, düşük hız, yokuş ve yük altında denenmeli; yağ kaçağı, sıcaklık ve hata geçmişi kontrol edilmelidir. Vuruntu görülürse takoz ve motor çalışma kalitesi ayrıca elenmelidir.' },
            { id: 5, title: 'IntelliLux LED, kamera ve ön cam kalibrasyonu', severity: 'high', reportCount: 0, description: 'LED far segmentleri, otomatik uzun far, şerit kamerası ve trafik işareti tanıma güvenli ortamda denenmelidir. Ön cam veya far işlemi varsa parça kodu ile kamera/far kalibrasyon belgesi aranmalı; yalnız uyarı lambasına güvenilmemelidir.' },
            { id: 6, title: 'IntelliLink, 12 V akü ve çoklu uyarılar', severity: 'medium', reportCount: 0, description: 'Akü yük testi ve şarj sistemi ölçülmeli; ekran, Bluetooth, klima paneli, park sensörleri ve geri görüş kamerası denenmelidir. Birden fazla modül hatasında elektronik parça değişiminden önce düşük voltaj ve şase bağlantıları kontrol edilmelidir.' },
        ],
        generationInfo: {
            chassisCode: 'Astra K',
            marketScope: 'Türkiye ve Avrupa',
            summary: 'Astra K, 2015’te önceki nesle göre önemli ölçüde hafifleyen gövde, yeni motorlar ve IntelliLux LED teknolojisiyle sunuldu.',
            phases: [
                { years: '2015-2019', name: 'İlk seri', summary: '1.4 Turbo ve 1.6 CDTI ağırlıklı ilk ürün dönemi.' },
                { years: '2019-2021', name: 'Makyajlı seri', summary: 'Güncellenen motor, emisyon ve multimedya seçenekleri.' },
            ],
            bodyStyles: ['5 kapı hatchback', 'Sports Tourer'],
            turkeyEngines: ['1.4 Turbo 150 PS AT6', '1.6 CDTI 110/136 PS manuel', '1.6 CDTI 136 PS AT6', '1.2 Turbo makyajlı seri'],
        },
        sources: [
            { title: 'Astra K model tarihçesi', publisher: 'Opel Stellantis Media', url: 'https://www.media.stellantis.com/es-es/opel/press/nuevo-opel-astra-la-historia-de-un-icono-sobre-ruedas' },
            { title: 'Astra K motor ve şanzıman verileri', publisher: 'Opel Stellantis Media', url: 'https://www.media.stellantis.com/pl-pl/opel/press/opel-rozszerza-dostepnosc-adaptacyjnego-tempomatu-oferujac-go-takze-w-modelu-astra' },
            { title: 'Opel/Vauxhall Astra 2015 güvenlik sonucu', publisher: 'Euro NCAP', url: 'https://news.euroncap.com/images-and-videos/opel-vauxhall-astra----euro-ncap-results-2015/s/11ce9563-396b-4409-9409-c27fd8e8fd5f' },
        ],
    }),
    researchedVehicle({
        id: 1026,
        brand: 'Toyota',
        model: 'Corolla 11. Nesil E170 (2013-2018)',
        year: '2013-2018',
        ncapStars: 5,
        ncapYear: '2013',
        dnaScore: 86,
        strengths: ['1.6 Valvematic ve Multidrive S uyumu', 'Geniş servis ağı ve güçlü ikinci el talebi', '2013 Euro NCAP beş yıldız', 'Filo ve aile kullanımına uygun geniş sedan gövde'],
        weaknesses: ['CVT bakım geçmişinin doğrulanması gerekir', 'LPG uygulamasında montaj ve supap kontrolü önemli', 'Filo geçmişli araçlarda yoğun kullanım riski', 'Kabin ve süspansiyonda yaşa bağlı sesler'],
        chronicIssues: [
            { id: 1, title: 'Multidrive S CVT sıvısı ve basınç testi', severity: 'medium', reportCount: 0, description: 'Doğru Toyota onaylı CVT sıvısı ve değişim faturası aranmalı; şanzıman soğuk-sıcak D-R, düşük hız ve yük altında denenmelidir. Motor devrinin hızdan önce yükselmesi CVT karakteridir; titreme veya kayma veriyle ayrılmalıdır.' },
            { id: 2, title: 'Valvematic aktüatör ve rölanti kontrolü', severity: 'medium', reportCount: 0, description: 'Soğuk rölanti, gaz tepkisi, hata hafızası ve yakıt düzeltmeleri okunmalı; Valvematic aktüatör komutu ile gerçek konum karşılaştırılmalıdır. Akü voltajı, gaz kelebeği veya ateşleme elenmeden aktüatör değişimi önerilmemelidir.' },
            { id: 3, title: 'LPG montajı, supap ve kompresyon ölçümü', severity: 'high', reportCount: 0, description: 'LPG varsa tank tarihi, kaçak, regülatör, enjektör ve yakıt düzeltmeleri kontrol edilmeli; soğuk çalışma ile benzin-LPG geçişi denenmelidir. Düzensiz çalışmada supap açıklığı ve kompresyon ölçülmeden motor içi arıza hükmü verilmemelidir.' },
            { id: 4, title: 'Su pompası, termostat ve soğutma devresi', severity: 'medium', reportCount: 0, description: 'Pompa ve termostat çevresinde kurumuş antifriz izi, radyatör, fan açma sıcaklığı ve genleşme kabı basıncı kontrol edilmelidir. Eksik sıvı yalnız tamamlanmamalı; basınç testiyle kaçak kaynağı belirlenmelidir.' },
            { id: 5, title: 'Direksiyon, ön takım ve lastik geometrisi', severity: 'medium', reportCount: 0, description: 'Düz yolda çekme, direksiyon merkezleme ve bozuk zeminde ses kontrol edilmeli; salıncak burcu, z-rot, amortisör ve direksiyon bağlantıları liftte incelenmelidir. Lastik omuz aşınması jant veya gövde geometrisi ölçülmeden rot ayarına bağlanmamalıdır.' },
            { id: 6, title: 'Filo geçmişi, kilometre ve güvenlik donanımı', severity: 'high', reportCount: 0, description: 'Servis, muayene ve hasar kayıtlarındaki kilometreler karşılaştırılmalı; airbag modülü, kemer piroteknikleri ve gövde ölçümü yapılmalıdır. Düşük kilometre göstergesi direksiyon, pedal ve koltuk aşınmasıyla uyuşmuyorsa kayıt zinciri ayrıntılı incelenmelidir.' },
        ],
        generationInfo: {
            chassisCode: 'E170 / E180',
            marketScope: 'Türkiye, Avrupa ve küresel pazarlar',
            summary: 'On birinci nesil Corolla sedan 2013’te 1.33 Dual VVT-i, 1.6 Valvematic ve 1.4 D-4D seçenekleriyle; manuel ve Multidrive S aktarmalarla sunuldu.',
            phases: [
                { years: '2013-2016', name: 'İlk seri', summary: 'E170 sedanın ilk tasarım ve multimedya dönemi.' },
                { years: '2016-2018', name: 'Makyajlı seri', summary: 'Güncellenen ön tasarım, Toyota Safety Sense ve donanım seçenekleri.' },
            ],
            bodyStyles: ['4 kapı sedan'],
            turkeyEngines: ['1.33 Dual VVT-i 99 PS manuel', '1.6 Valvematic 132 PS manuel', '1.6 Valvematic 132 PS Multidrive S', '1.4 D-4D 90 PS'],
        },
        sources: [
            { title: '2013 Corolla motor ve şanzıman tanıtımı', publisher: 'Toyota Europe Newsroom', url: 'https://newsroom.toyota.eu/2019-2013-the-new-toyota-corolla-dpl-fuel-efficient-petrol-and-diesel-powertrains/' },
            { title: 'Toyota Corolla 2013 güvenlik raporu', publisher: 'Euro NCAP', url: 'https://cdn.euroncap.com/media/6051/euroncap_toyota_corolla_2013_5stars.pdf' },
        ],
    }),
    researchedVehicle({
        id: 118,
        brand: 'Honda',
        model: 'Civic 10. Nesil (FC5) (2016-2021)',
        year: '2016-2021',
        ncapStars: 5,
        ncapYear: '2017',
        dnaScore: 82,
        strengths: ['Geniş sedan kabin ve bagaj', '1.5 VTEC Turbo 182 PS performansı', '1.6 i-VTEC ECO LPG seçeneği', 'Honda Sensing bulunan paketlerde kapsamlı destekler'],
        weaknesses: ['CVT sıvısı ve bakım geçmişinin önemi', 'LPG sisteminde sızdırmazlık ve ayar ihtiyacı', 'Turbo versiyonda yağ ve soğutma kontrolü', 'Alçak gövdede alt muhafaza ve jant hasarı riski'],
        chronicIssues: [
            { id: 1, title: 'CVT sıvısı, adaptasyon ve sıcak yol testi', severity: 'high', reportCount: 0, description: 'Honda onaylı CVT sıvısı ve bakım faturası doğrulanmalı; araç soğuk ve sıcak durumda D-R, kalkış, sabit hız ve yük altında denenmelidir. Devir yükselmesi CVT karakteridir; gecikme veya titreme basınç ve hata verisiyle ayrılmalıdır.' },
            { id: 2, title: 'ECO LPG sızdırmazlık ve yakıt ayarı', severity: 'high', reportCount: 0, description: 'LPG tank tarihi, valf, dolum ağzı, borular ve bağlantılar kaçak cihazıyla kontrol edilmeli; iki yakıtta ateşleme sayacı ve yakıt düzeltmeleri karşılaştırılmalıdır. Gaz kokusunda araç kullanılmadan sistem kapatılmalıdır.' },
            { id: 3, title: '1.5 VTEC Turbo yağ, ateşleme ve soğutma', severity: 'high', reportCount: 0, description: 'Motor tamamen soğukken yağ seviyesi ve kokusu, ateşleme sayacı, yakıt düzeltmeleri ile turbo basıncı incelenmelidir. Kullanım profili ve bakım kaydı görülmeden tek bulgu üzerinden yağ seyrelmesi veya turbo arızası sonucu çıkarılmamalıdır.' },
            { id: 4, title: 'Direksiyon sistemi ve rot geometrisi', severity: 'medium', reportCount: 0, description: 'Park hızında ve bozuk zeminde direksiyon sesi, boşluk ve merkezleme kontrol edilmeli; dört lastikte iç-omuz aşınması ölçülmelidir. Direksiyon kutusu, mafsal, rot ve amortisör bağlantıları ayrı incelenmeden parça kararı verilmemelidir.' },
            { id: 5, title: 'Klima, multimedya ve 12 V akü testi', severity: 'medium', reportCount: 0, description: 'Klima soğutması, fan kademeleri, ekran, Bluetooth, geri görüş kamerası ve USB bağlantıları denenmeli; akü yük ve şarj sistemi ölçülmelidir. Çoklu elektronik uyarıda düşük voltaj elenmeden modül değişimi önerilmemelidir.' },
            { id: 6, title: 'Honda Sensing ve kaza sonrası kalibrasyon', severity: 'high', reportCount: 0, description: 'Ön cam, tampon veya süspansiyon işlemi varsa kamera/radar kalibrasyon belgesi aranmalı; mevcut sürüş destek donanımı şasi numarasıyla doğrulanmalıdır. Airbag ve kemer kayıtları ile gövde ölçümü yapılmadan güvenlik sistemi sağlam kabul edilmemelidir.' },
        ],
        generationInfo: {
            chassisCode: 'FC5',
            marketScope: 'Türkiye ve Avrupa sedan pazarı',
            summary: 'Türkiye’de FC5 adıyla bilinen onuncu nesil Civic Sedan, 1.6 i-VTEC ECO ve 1.5 VTEC Turbo motorları CVT ile birleştirdi.',
            phases: [
                { years: '2016-2019', name: 'İlk seri', summary: 'FC5 gövdenin ilk tasarımı ve motor seçenekleri.' },
                { years: '2019-2021', name: 'Makyajlı seri', summary: 'Güncellenen tampon, multimedya ve donanım detayları.' },
            ],
            bodyStyles: ['4 kapı sedan'],
            turkeyEngines: ['1.6 i-VTEC 125 PS CVT', '1.6 i-VTEC ECO LPG CVT', '1.5 VTEC Turbo 182 PS CVT'],
        },
        sources: [
            { title: 'Honda Civic Sedan teknik tanıtımı', publisher: 'Honda European Newsroom', url: 'https://hondanews.eu/es/es/cars/media/pressreleases/78536/honda-en-el-salon-de-paris-20162' },
            { title: 'Honda Civic 2017 güvenlik değerlendirmesi', publisher: 'Euro NCAP', url: 'https://www.euroncap.com/assessments/honda/civic/0677ra/' },
        ],
    }),
    researchedVehicle({
        id: 12019,
        brand: 'Seat',
        model: 'Arona KJ 1. Nesil (2017-Günümüz)',
        year: '2017-Günümüz',
        ncapStars: 5,
        ncapYear: '2017',
        dnaScore: 81,
        strengths: ['1.0 EcoTSI ile tüketim-performans dengesi', 'Kompakt boyutta 400 litre bagaj', 'Manuel ve DSG seçenekleri', '2017 Euro NCAP değerlendirmesinde güçlü yolcu koruması'],
        weaknesses: ['Kuru kavramalı DSG yoğun trafikte dikkat ister', 'Üç silindirli motor titreşimi yanlış yorumlanabilir', 'Büyük jantlarda lastik ve konfor maliyeti', '2017 Euro NCAP derecesi artık süresi dolmuş eski protokoldür'],
        chronicIssues: [
            { id: 1, title: 'DQ200 DSG kavrama ve mekatronik kontrolü', severity: 'high', reportCount: 0, description: 'DSG araç soğuk ve tam ısınmış durumda D-R, yokuş kalkışı, geri manevra ve dur-kalk hızında denenmeli; kavrama uyarlamaları, sıcaklık ve mekatronik hata geçmişi okunmalıdır. Titremede motor takozu ve ateşleme elenmeden kavrama kararı verilmemelidir.' },
            { id: 2, title: '1.0 EcoTSI ateşleme, turbo ve soğutma', severity: 'medium', reportCount: 0, description: 'Motor tamamen soğukken rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve istenen-gerçek turbo basıncı izlenmeli; su pompası, termostat ve hortumlarda kaçak izi aranmalıdır. Üç silindirli normal titreşim tekleme sayılmamalıdır.' },
            { id: 3, title: 'Triger ve doğru yağ standardı doğrulaması', severity: 'medium', reportCount: 0, description: 'Motor koduna uygun triger kontrol/değişim planı ve VW onaylı yağ standardı bakım faturalarından doğrulanmalıdır. Görsel kayış incelemesi tek başına kalan ömrü göstermez; üretim yılı ve kullanım koşulları birlikte değerlendirilmelidir.' },
            { id: 4, title: 'Front Assist, kamera ve radar kalibrasyonu', severity: 'high', reportCount: 0, description: 'Ön cam veya tampon işlemi varsa kamera/radar parça kodu ve kalibrasyon belgesi aranmalı; Front Assist, şerit ve park sistemlerinin araçta gerçekten bulunduğu VIN üzerinden doğrulanmalıdır. Uyarı lambasının sönük olması kalibrasyonu kanıtlamaz.' },
            { id: 5, title: 'Multimedya, Full Link ve 12 V akü testi', severity: 'low', reportCount: 0, description: 'Ekran, Bluetooth, USB, Full Link, direksiyon kumandaları ve geri görüş kamerası soğuk açılıştan itibaren denenmeli; akü yük testi ile şarj sistemi ölçülmelidir. Donma veya çoklu uyarıda önce besleme ve yazılım incelenmelidir.' },
            { id: 6, title: 'Ön takım, lastik omuzları ve alt gövde', severity: 'medium', reportCount: 0, description: 'Bozuk zeminde amortisör, üst takoz, salıncak burcu ve z-rot sesi dinlenmeli; lastik iç omuzları, jantlar ve düz yol geometrisi kontrol edilmelidir. Crossover kullanımı nedeniyle tampon altı ve kriko noktaları liftte darbe açısından görülmelidir.' },
        ],
        generationInfo: {
            chassisCode: 'KJ / KJ7',
            marketScope: 'Türkiye ve Avrupa',
            summary: 'SEAT Arona, MQB A0 tabanlı ilk nesil kompakt crossover’dır; 2017’den itibaren 1.0 EcoTSI ve 1.5 EcoTSI motorları manuel veya DSG aktarmalarla sunmuştur.',
            phases: [
                { years: '2017-2021', name: 'İlk seri', summary: 'İlk gövde tasarımı, 95/115 PS 1.0 EcoTSI ve üst motor seçenekleri.' },
                { years: '2021-Günümüz', name: 'Makyajlı seri', summary: 'Güncellenen ön tasarım, kabin, bağlantı ve sürüş destekleri.' },
            ],
            bodyStyles: ['5 kapı kompakt SUV'],
            turkeyEngines: ['1.0 EcoTSI 95 PS manuel', '1.0 EcoTSI 110/115 PS DSG', '1.5 EcoTSI 150 PS DSG'],
        },
        sources: [
            { title: 'SEAT Arona güç aktarma ve teknoloji tanıtımı', publisher: 'SEAT', url: 'https://www.seat.com/company/news/cars/new-seat-arona' },
            { title: 'SEAT Arona teknik özellik broşürü', publisher: 'SEAT', url: 'https://www.seat.com/content/dam/public/seat-website/car-shopping-tools/brochure-download/brochures/arona/cars-specs-brochure-KJ7-NA-december-2018.pdf' },
            { title: 'SEAT Arona 2017 güvenlik değerlendirmesi', publisher: 'Euro NCAP', url: 'https://www.euroncap.com/assessments/seat/arona/0698/' },
        ],
    }),
];
