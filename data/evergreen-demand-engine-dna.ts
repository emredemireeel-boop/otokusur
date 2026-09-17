import type { VehicleEngineData } from './engine-dna';

export const evergreenDemandEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 34,
        engines: [
            {
                slug: '09-tce-90-ps-manuel', name: '0.9 TCe 90 PS', fuelType: 'Benzin', transmission: '5 ileri manuel', score: 78,
                description: 'Clio 4’ün 0.9 TCe 90 PS seçeneği üç silindirli turbo benzinli motoru beş ileri manuel şanzımanla birleştirir. Soğuk çalışma, ateşleme, turbo basıncı, yağ-soğutma kaçakları, debriyaj ve motor takozları ölçümlü biçimde kontrol edilmelidir.',
                pros: ['Şehir içinde düşük tüketim potansiyeli', '90 PS ile yeterli günlük performans', 'Manuel şanzıman sadeliği'], cons: ['Üç silindir titreşiminin doğru yorumlanması gerekir', 'Turbo-soğutma bakımına duyarlı', 'Yüklü kullanımda sınırlı esneklik'],
                chronicIssues: [
                    { title: 'Soğuk rölanti, ateşleme ve turbo verisi', description: 'Araç tamamen soğukken rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve istenen-gerçek turbo basıncı izlenmelidir. Üç silindirli normal çalışma, takoz veya buji-bobin kaynaklı tekleme veri kaydı olmadan birbirine karıştırılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Yağ-soğutma kaçağı ve debriyaj testi', description: 'Yağ besleme hattı, termostat, genleşme kabı ve hortumlarda kaçak izi aranmalı; fan sıcaklığı izlenmelidir. Yüksek viteste debriyaj kaçırma, kalkış titreşimi ve motor takozları ayrı yol testiyle kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-dci-75-90-110-ps-manuel-edc', name: '1.5 dCi 75/90/110 PS', fuelType: 'Dizel', transmission: 'Manuel / EDC', score: 76,
                description: 'Clio 4’ün 1.5 dCi motoru üretim yılına göre 75, 90 veya 110 PS sürümler ve manuel/EDC aktarmalarla bulunur. Kesin güç VIN’den doğrulanmalı; DPF/EGR, enjektör, turbo, triger geçmişi ile EDC bulunan araçta kavrama verileri birlikte incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', 'Yaygın servis ve parça erişimi', 'Güçlü ikinci el talebi'], cons: ['Kısa mesafede DPF/EGR riski', 'Enjektör ve turbo maliyeti', 'EDC versiyonda ek kavrama hassasiyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF doluluk/kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Kullanım profili, sensör veya mekanik arıza ayrılmadan temizlik, enjektör ya da turbo değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Triger geçmişi ve EDC kavrama kontrolü', description: 'Triger seti ile su pompası değişim tarihi fatura üzerinden doğrulanmalı; EDC araçta D-R, yokuş, geri manevra ve sıcak düşük hız testi yapılarak kavrama uyarlamaları okunmalıdır. Manuel araçta debriyaj-volan ayrıca incelenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '12-tce-120-ps-edc', name: '1.2 TCe 120 PS', fuelType: 'Benzin', transmission: '6 ileri EDC', score: 70,
                description: 'Clio 4 1.2 TCe 120 PS, turbo benzinli motoru altı ileri EDC çift kavramayla birleştiren performanslı seçenektir. Motor kodu, yağ seviyesi ve tüketim geçmişi, kompresyon, turbo-soğutma, EDC kavrama ve yazılım durumu satın alma öncesinde ayrıntılı incelenmelidir.',
                pros: ['120 PS güçlü ara hızlanma', 'EDC ile otomatik kullanım', 'Sessiz benzinli çalışma'], cons: ['Yağ seviyesi geçmişi kritik', 'EDC kavrama maliyeti', 'İyi bakım belgesi olmayan örnekte yüksek risk'],
                chronicIssues: [
                    { title: 'Yağ tüketimi, kompresyon ve motor geçmişi', description: 'Motor tamamen soğukken yağ seviyesi, egzoz dumanı, karter basıncı ve bujiler kontrol edilmeli; kompresyon/leak-down ile servis faturaları karşılaştırılmalıdır. Tek yağ eksikliği gözlemi ölçümlü tüketim takibi olmadan motor revizyonu kanıtı değildir.', severity: 'high', reportCount: 0 },
                    { title: 'EDC kavrama, turbo ve soğutma testi', description: 'EDC sıcak-soğuk D-R, yokuş ve geri manevrada denenmeli; kavrama adaptasyonu ve hata hafızası okunmalıdır. Turbo basıncı, yağ/soğutma kaçağı ve fan davranışı yük altında izlenmeli; motor takozları ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 22,
        engines: [
            {
                slug: '14-turbo-150-ps-at6', name: '1.4 Turbo 150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / AT6', score: 78,
                description: 'Astra K 1.4 Turbo 150 PS, doğrudan enjeksiyonlu turbo benzinli motoru manuel veya altı ileri otomatikle sunar. Soğuk çalışma, ateşleme, turbo basıncı, yağ-soğutma kaçakları, doğru bakım standardı ve otomatikte sıcak-soğuk geçişler kontrol edilmelidir.',
                pros: ['150 PS dengeli performans', 'Geniş kullanım bandı', 'AT6 ile konforlu sürüş'], cons: ['Turbo ve soğutma bakımına duyarlı', 'Doğrudan enjeksiyonda kurum kontrolü', 'Otomatikte bakım geçmişinin önemi'],
                chronicIssues: [
                    { title: 'Ateşleme, turbo ve soğutma sistemi', description: 'Soğuk rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmeli; termostat, pompa, genleşme kabı ve hortumlarda kaçak aranmalıdır. Tekleme, buji-bobin ve yakıt kalitesi elenmeden turbo arızasına bağlanmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'AT6 geçiş ve motor takozu kontrolü', description: 'Otomatik araç soğuk ve çalışma sıcaklığında D-R, düşük hız, yokuş ve yük altında denenmeli; yağ kaçağı ile hata hafızası okunmalıdır. Vuruntu veya gecikmede motor takozu ve düzensiz yanma ayrıca elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-cdti-136-ps-at6', name: '1.6 CDTI 136 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / AT6', score: 73,
                description: 'Astra K 1.6 CDTI 136 PS dizel motor manuel veya AT6 otomatikle bulunur. Soğuk zincir sesi, yağlama ve bakım kayıtları; DPF/EGR/SCR, enjektör/turbo verileri ile şanzıman ve çift kütleli volan seçilen aktarmaya göre birlikte incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', '136 PS ve güçlü dizel torku', 'Manuel ve otomatik seçeneği'], cons: ['Zincir ve yağlama kontrol ihtiyacı', 'Kısa mesafede DPF riski', 'SCR/AdBlue parça maliyeti'],
                chronicIssues: [
                    { title: 'Soğuk zincir sesi ve yağ basıncı doğrulaması', description: 'Motor gece boyunca beklemişken çalıştırılmalı; zincir bölgesi, yağ basıncı ve hata kayıtları incelenmelidir. Doğru yağ standardı ve bakım faturası aranmalı; aksesuar kayışı veya enjektör sesi elenmeden zincir değişimi kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DPF, SCR, EGR ve aktarma sistemi testi', description: 'DPF kurum/kül ve rejenerasyon geçmişi, EGR komutu, SCR/AdBlue hataları ile enjektör düzeltmeleri okunmalıdır. Manuelde debriyaj-volan; AT6’da sıcak-soğuk geçiş ve yağ kaçağı kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 1026,
        engines: [
            {
                slug: '16-valvematic-132-hp-cvt-manuel', name: '1.6 Valvematic 132 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / Multidrive S', score: 86,
                description: 'Corolla E170’in 1.6 Valvematic motoru 132 PS ve 160 Nm üretir; altı ileri manuel veya Multidrive S CVT ile bulunur. Soğuk çalışma, Valvematic konum verisi, yağ-soğutma sistemi, LPG varsa yakıt ayarı ve CVT sıvısı/basıncı birlikte kontrol edilmelidir.',
                pros: ['Dayanıklı atmosferik yapı', '132 PS yeterli performans', 'Multidrive S ile akıcı sürüş'], cons: ['CVT sıvısı geçmişi önemli', 'LPG montajına göre risk değişir', 'Valvematic aktüatörü uzman teşhis ister'],
                chronicIssues: [
                    { title: 'Valvematic, ateşleme ve LPG kontrolü', description: 'Valvematic komut-gerçek konumu, ateşleme sayaçları ve yakıt düzeltmeleri okunmalı; LPG varsa kaçak, tank tarihi ve iki yakıtta çalışma karşılaştırılmalıdır. Akü veya gaz kelebeği elenmeden aktüatör değişimi önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Multidrive S sıvısı ve sıcak yol testi', description: 'Doğru CVT sıvısı faturası aranmalı; D-R, düşük hız, sabit hız ve yük altında sıcak-soğuk test yapılmalıdır. Devrin hızdan önce yükselmesi normal CVT karakteri olabilir; titreme, uğultu ve kayma veriyle ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '133-dual-vvti-99-ps-manuel', name: '1.33 Dual VVT-i 99 PS', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 84,
                description: 'Corolla E170 1.33 Dual VVT-i 99 PS, altı ileri manuel şanzımanlı giriş motorudur. Basit güç aktarımına karşın soğuk çalışma, yağ seviyesi, ateşleme, debriyaj, motor takozları ve varsa sonradan LPG uygulaması ölçümlü biçimde incelenmelidir.',
                pros: ['Basit atmosferik motor', 'Manuel şanzıman bakım kolaylığı', 'Yaygın Toyota servis ağı'], cons: ['Yüklü kullanımda sınırlı performans', 'LPG montajına duyarlılık', 'Yüksek devir kullanım ihtiyacı'],
                chronicIssues: [
                    { title: 'Yağ seviyesi, ateşleme ve kompresyon', description: 'Motor tamamen soğukken yağ seviyesi, egzoz dumanı, rölanti, ateşleme sayacı ve yakıt düzeltmeleri kontrol edilmelidir. Eksiltme iddiası kompresyon, kaçak ve ölçümlü tüketim takibi olmadan motor içi arıza kabul edilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Debriyaj, takoz ve LPG uygulaması', description: 'Yüksek viteste debriyaj kaçırma ve kalkış titreşimi denenmeli; motor takozları incelenmelidir. LPG varsa tank tarihi, kaçak, regülatör, enjektör ve benzin-LPG geçişi kontrol edilerek supap açıklığı kayıtları aranmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '14-d4d-90-ps-manuel-multimode', name: '1.4 D-4D 90 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / MultiMode', score: 79,
                description: 'Corolla E170 1.4 D-4D 90 PS dizel, altı ileri manuel veya pazara göre MultiMode robotize aktarmayla bulunabilir. Motor-şanzıman eşleşmesi VIN’den doğrulanmalı; DPF/EGR, enjektör/turbo, debriyaj ve robotize aktüatör varsa kalibrasyon kontrol edilmelidir.',
                pros: ['Uzun yolda düşük tüketim', 'Yaygın ve bilinen dizel motor', 'Manuel seçenekte sade aktarma'], cons: ['Kısa mesafede DPF/EGR riski', 'MultiMode aktüatör-kavrama hassasiyeti', 'Yaşa bağlı enjektör/turbo maliyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo verileri', description: 'DPF doluluk/kül ile rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Soğuk çalışma ile egzoz dumanı gözlenmeli; sensör sorunu mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya MultiMode aktarma kontrolü', description: 'Manuelde debriyaj-volan; MultiMode varsa aktüatör, kavrama aşınması ve kalibrasyon değerleri incelenmelidir. Soğuk-sıcak kalkış, geri manevra ve yokuş testi yapılmadan robot veya kavrama değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 118,
        engines: [
            {
                slug: '16-ivtec-eco-lpg-125-ps-cvt', name: '1.6 i-VTEC ECO 125 PS', fuelType: 'LPG', transmission: 'CVT', score: 82,
                description: 'Civic FC5 1.6 i-VTEC ECO, 125 PS atmosferik motoru CVT ve LPG sistemiyle birleştiren Türkiye’de yaygın seçenektir. LPG sızdırmazlığı ve kalibrasyonu, supap açıklığı, ateşleme, soğutma, CVT sıvısı ve sıcak-soğuk yol testi birlikte yapılmalıdır.',
                pros: ['LPG ile düşük yakıt maliyeti', 'Atmosferik motor karakteri', 'Akıcı CVT sürüşü'], cons: ['LPG bileşenleri için ek kontrol', 'Supap açıklığı bakımının önemi', 'CVT sıvısı geçmişine duyarlı'],
                chronicIssues: [
                    { title: 'LPG kaçak, kalibrasyon ve supap kontrolü', description: 'Tank tarihi, multivalf, boru ve bağlantılar kaçak cihazıyla test edilmeli; iki yakıtta ateşleme sayacı ve yakıt düzeltmeleri karşılaştırılmalıdır. Soğuk düzensiz çalışmada supap açıklığı ve kompresyon ölçülmeden motor kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'CVT sıvısı ve sıcak kullanım testi', description: 'Honda onaylı sıvı ve değişim faturası doğrulanmalı; şanzıman soğuk-sıcak D-R, düşük hız, sabit hız ve yük altında denenmelidir. Normal devir yükselmesi ile titreme, uğultu veya kayma birbirinden ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-vtec-turbo-182-hp', name: '1.5 VTEC Turbo 182 PS', fuelType: 'Benzin', transmission: 'CVT', score: 84,
                description: 'Civic FC5 1.5 VTEC Turbo 182 PS, doğrudan enjeksiyonlu turbo motoru CVT ile sunar. Soğuk çalışma, yağ seviyesi ve bakım aralığı, yakıt düzeltmeleri, turbo-soğutma sistemi, CVT sıvısı, fren-lastik ve yazılım geçmişi birlikte incelenmelidir.',
                pros: ['182 PS güçlü performans', '220 Nm turbo torku', 'CVT ile akıcı hızlanma'], cons: ['Turbo motor bakım hassasiyeti', 'CVT sıvısı geçmişi kritik', 'Performans kullanımında sarf gideri'],
                chronicIssues: [
                    { title: 'Motor yağı, yakıt düzeltmesi ve turbo testi', description: 'Motor tamamen soğukken yağ seviyesi ve kokusu, ateşleme sayacı, yakıt düzeltmeleri ile istenen-gerçek turbo basıncı izlenmelidir. Bakım ve kullanım profili görülmeden tek bulguyla yağ seyrelmesi veya turbo arızası sonucu çıkarılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'CVT, soğutma ve performans kullanım izi', description: 'CVT sıcak-soğuk D-R, sabit hız ve yük altında denenmeli; sıvı faturası, sıcaklık ve hata kayıtları incelenmelidir. Soğutma, fren yüzeyi, lastik omuzları ve motor yazılımı kontrol edilerek modifiye veya pist kullanım izi araştırılmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12019,
        engines: [
            {
                slug: '10-ecotsi-110-115-ps-dsg', name: '1.0 EcoTSI 110/115 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 80,
                description: 'SEAT Arona 1.0 EcoTSI, üretim yılına göre 110 veya 115 PS güçle yedi ileri DQ200 DSG kullanır; kesin güç VIN ve motor kodundan doğrulanmalıdır. Soğuk çalışma, turbo-soğutma, triger ve doğru yağ kayıtları ile DSG kavrama/mekatronik verileri birlikte incelenmelidir.',
                pros: ['200 Nm civarı güçlü düşük devir torku', 'Şehir ve uzun yol için dengeli tüketim', 'Hızlı DSG geçişleri'], cons: ['Kuru kavrama dur-kalk kullanımına duyarlı', 'Turbo-soğutma bakımının önemi', 'Motor yılına göre güç farkı'],
                chronicIssues: [
                    { title: 'DSG kavrama, mekatronik ve adaptasyon', description: 'Soğuk-sıcak D-R, yokuş kalkışı, geri manevra ve yoğun trafik hızında test yapılmalı; kavrama uyarlamaları, sıcaklık ve mekatronik hata geçmişi okunmalıdır. Titreşimde motor takozu veya ateşleme elenmeden kavrama değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'EcoTSI ateşleme, turbo ve soğutma kontrolü', description: 'Motor tamamen soğukken ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmeli; su pompası/termostat, hortumlar ve yağ kaçağı kontrol edilmelidir. Üç silindirli normal titreşim ile tekleme veriyle ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '10-ecotsi-95-ps-manuel', name: '1.0 EcoTSI 95 PS', fuelType: 'Benzin', transmission: '5 ileri manuel', score: 83,
                description: 'Arona 1.0 EcoTSI 95 PS, 175 Nm torklu üç silindirli turbo motoru beş ileri manuel şanzımanla birleştirir. Motor kodu, triger ve yağ bakımı, soğuk çalışma, turbo-soğutma, debriyaj, takoz ve elektronik donanımlar satın alma öncesinde kontrol edilmelidir.',
                pros: ['Manuel şanzıman sadeliği', '175 Nm günlük kullanım torku', 'Düşük ağırlık ve tüketim'], cons: ['Beş ileri oran uzun yolda devirli olabilir', 'Turbo bakımına duyarlı', 'Yüklü kullanımda performans sınırlı'],
                chronicIssues: [
                    { title: 'Soğuk çalışma, ateşleme ve turbo testi', description: 'Soğuk rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve istenen-gerçek turbo basıncı izlenmeli; yağ ve soğutma kaçakları aranmalıdır. Normal üç silindir titreşimi, motor takozu veya tekleme ayrı ölçülmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Debriyaj, triger ve bakım geçmişi', description: 'Yüksek viteste debriyaj kaçırma ile kalkış titreşimi denenmeli; motor koduna uygun triger planı ve doğru yağ standardı faturalardan doğrulanmalıdır. Yalnız görsel kayış kontrolü kalan kullanım ömrünü kanıtlamaz.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-ecotsi-150-ps-dsg', name: '1.5 EcoTSI 150 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 82,
                description: 'Arona 1.5 EcoTSI 150 PS, 250 Nm tork ve silindir kapatma teknolojisini yedi ileri DSG ile birleştirir. Türkiye’de sınırlı bulunan örneğin fabrika motoru VIN’den doğrulanmalı; yazılım, turbo-soğutma, ACT geçişi, DSG ve performans kullanım izi incelenmelidir.',
                pros: ['150 PS güçlü performans', '250 Nm tork', 'Silindir kapatma ile verimlilik'], cons: ['Türkiye’de sınırlı ikinci el arzı', 'DSG kavrama hassasiyeti', 'Modifiye/yazılım geçmişi riski'],
                chronicIssues: [
                    { title: 'VIN, ECU yazılımı ve ACT kontrolü', description: 'Motor kodu ve fabrika gücü VIN üzerinden doğrulanmalı; ECU yazılım bütünlüğü, ateşleme ve yakıt düzeltmeleri okunmalıdır. Silindir kapatma geçişinde hissedilen değişim, hata kaydı ve motor takozu görülmeden arıza kabul edilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DSG, turbo-soğutma ve performans izi', description: 'Kavrama uyarlaması, mekatronik kayıtları ve sıcak düşük hız davranışı incelenmeli; turbo basıncı ile soğutma sistemi loglanmalıdır. Lastik, fren ve yağ bakım kayıtları performans kullanımının oluşturduğu ek yük açısından değerlendirilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
];
