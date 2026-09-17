import type { VehicleEngineData } from './engine-dna';

export const searchDemandEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 1013,
        engines: [
            {
                slug: '13-multijet-75-90-hp-dizel-dualogic-manuel', name: '1.3 MultiJet 75/90 HP', fuelType: 'Dizel', transmission: 'Manuel / Dualogic', score: 72,
                description: 'Grande Punto’nun 1.3 MultiJet dizeli 75 ve 90 HP sürümleriyle düşük tüketim sağlar; manuel ve bazı pazarlarda Dualogic robotize seçenekle görülür. Zincir sesi, turbo, enjektör, EGR/DPF verileri ve Dualogic bulunan araçta robot-kavrama ölçümleri birlikte incelenmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Yaygın parça ve usta erişimi', 'Şehir kullanımı için yeterli dizel torku'], cons: ['Kısa mesafede EGR/DPF kurum riski', 'Yüksek kilometrede zincir ve turbo kontrolü', 'Dualogic versiyonda ek aktarma riski'],
                chronicIssues: [
                    { title: 'Zincir sesi, enjektör ve turbo kontrolü', description: 'Motor tamamen soğukken zincir bölgesi dinlenmeli; enjektör düzeltmeleri, yakıt basıncı, turbo basıncı ve yağ kaçağı verileri okunmalıdır. Tek ses veya duman gözlemi, kompresyon ve servis geçmişi olmadan motor revizyonu kararı için yeterli değildir.', severity: 'high', reportCount: 0 },
                    { title: 'EGR/DPF ve Dualogic ayrıntılı teşhisi', description: 'EGR komutu, DPF doluluk/rejenerasyon geçmişi ve kullanım profili incelenmeli; Dualogic varsa pompa basıncı, robot hata kodu ve kavrama kalibrasyonu ayrıca okunmalıdır. Manuel araç Dualogic kusuru taşımıyormuş gibi açıkça ayrılmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '14-8v-77-hp-benzin-manuel', name: '1.4 FIRE 8V 77 HP', fuelType: 'Benzin', transmission: 'Manuel / Dualogic', score: 76,
                description: '1.4 FIRE 8V 77 HP, Grande Punto/Punto gamındaki atmosferik ve görece basit benzinli seçenektir; manuel veya Dualogic ile bulunabilir. Soğuk çalışma, yağ-soğutma sistemi, ateşleme, LPG montajı ve varsa robotize şanzıman ayrı ayrı kontrol edilmelidir.',
                pros: ['Basit atmosferik motor yapısı', 'Yaygın servis ve parça', 'LPG dönüşümüne elverişli kullanım'], cons: ['Yüklü kullanımda sınırlı performans', 'LPG montaj kalitesine duyarlılık', 'Dualogic seçenekte ek bakım ihtiyacı'],
                chronicIssues: [
                    { title: 'Ateşleme, gaz kelebeği ve LPG ayarı', description: 'Soğuk rölanti, ateşleme sayacı ve yakıt düzeltmeleri okunmalı; LPG varsa tank tarihi, kaçak, regülatör ve benzin-LPG geçişi test edilmelidir. Normal bakım eksikliği ile motor içi arıza, kompresyon ve emisyon ölçümü yapılmadan karıştırılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Soğutma devresi ve Dualogic kontrolü', description: 'Termostat, fan açma sıcaklığı, kaçak ve genleşme kabı basıncı kontrol edilmeli; Dualogic varsa hidrolik basınç ile kavrama kalibrasyonu okunmalıdır. Manuel versiyonda debriyaj, vites halatı ve motor takozları ayrı yol testiyle incelenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '14-t-jet-120-hp-manuel', name: '1.4 T-Jet 120 HP', fuelType: 'Benzin', transmission: '5/6 ileri manuel', score: 78,
                description: 'Grande Punto 1.4 T-Jet 120 HP, turbo benzinli performans seçeneğidir ve ikinci elde yazılım/modifiye geçmişi özellikle önem taşır. Turbo basıncı, yağlama, soğutma, ateşleme, debriyaj ve motor kontrol ünitesinin fabrika yazılımına uygunluğu birlikte doğrulanmalıdır.',
                pros: ['120 HP güçlü ara hızlanma', 'Dayanıklı FIRE tabanlı turbo mimari', 'Sportif sürüş potansiyeli'], cons: ['Modifiye edilmiş örneklerde yüksek risk', 'Turbo ve debriyaj sarf maliyeti', 'Doğru yağ/soğutma bakımına ihtiyaç'],
                chronicIssues: [
                    { title: 'Turbo basıncı, yağlama ve yazılım kontrolü', description: 'İstenen-gerçek turbo basıncı, yakıt düzeltmeleri ve vuruntu değerleri loglanmalı; yağ besleme/dönüş hattı ile kaçaklar incelenmelidir. ECU yazılımı fabrika dışıysa donanım ve bakım belgeleri olmadan güç ve güvenilirlik varsayılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Debriyaj, takoz ve soğutma testi', description: 'Yüksek viteste debriyaj kaçırma, kalkış titreşimi ve motor takozları kontrol edilmeli; fan, termostat ve soğutma basıncı yük altında izlenmelidir. Performans kullanımı izleri fren ve lastik ölçümleriyle beraber değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2052,
        engines: [
            {
                slug: '14-fire-95-hp-manuel', name: '1.4 FIRE 95 HP', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 81,
                description: 'Egea Cross 1.4 FIRE 95 HP, atmosferik benzinli motoru altı ileri manuel şanzımanla birleştiren basit güç aktarımıdır. Soğuk çalışma, yağ tüketimi belirtisi, soğutma, debriyaj ve varsa sonradan LPG montajının güvenliği satın alma öncesinde ölçümlü biçimde kontrol edilmelidir.',
                pros: ['Basit atmosferik mekanik', 'Yaygın parça ve servis', 'Manuel şanzıman bakım kolaylığı'], cons: ['Yüklü kullanımda sınırlı performans', 'Şehir içinde yüksek tüketim ihtimali', 'LPG dönüşüm kalitesine duyarlılık'],
                chronicIssues: [
                    { title: 'Yağ seviyesi, kompresyon ve soğuk çalışma', description: 'Araç tamamen soğukken çalıştırılmalı; egzoz dumanı, karter basıncı, kaçak ve yağ seviyesi izlenmelidir. Eksiltme iddiası bakım faturası, kompresyon ve ölçümlü tüketim takibi olmadan motor içi arıza şeklinde kesinleştirilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'LPG, debriyaj ve motor takozları', description: 'LPG varsa tank tarihi, kaçak, regülatör, enjektör ve yakıt düzeltmeleri kontrol edilmeli; debriyaj kaçırma ve kalkış titreşimi yol testinde denenmelidir. Titreşimin takoz, ateşleme veya debriyaj kaynağı ayrı ayrı belirlenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-litre-dizel-otomatik', name: '1.6 MultiJet 130 HP', fuelType: 'Dizel', transmission: '6 ileri otomatik', score: 85,
                description: 'Egea Cross 1.6 MultiJet 130 HP otomatik 320 Nm tork sunar ve altı ileri tork konvertörlü şanzıman kullanır. DPF/EGR/enjektör/turbo verileriyle şanzımanın yağ, sıcaklık, geçiş ve kullanım geçmişi aynı ekspertizde kontrol edilmelidir.',
                pros: ['320 Nm güçlü dizel torku', 'Uzun yolda düşük tüketim', 'Tork konvertörlü otomatik rahatlığı'], cons: ['Kısa mesafede DPF doluluk riski', 'Emisyon sistemi parça maliyeti', 'Filo geçmişli araçlarda yoğun kullanım riski'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF kurum/kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Kullanım profili, sensör veya mekanik arıza ayrılmadan temizlik ya da pahalı parça değişimi önerilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Altı ileri otomatik sıcak-soğuk testi', description: 'Şanzıman soğuk ve tam ısınmış durumda D-R, hafif/sert hızlanma ve yokuşta denenmeli; yağ kaçağı, sıcaklık ve hata hafızası kontrol edilmelidir. Sert geçişte motor takozu ve çalışma kalitesi ayrıca elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 109,
        engines: [
            {
                slug: '10-tce-90-hp-cvt', name: 'TCe 90 CVT', fuelType: 'Benzin', transmission: 'CVT / 4x2', score: 82,
                description: 'Sandero Stepway TCe 90, 999 cc üç silindirli turbo benzinli motoru CVT otomatikle birleştirir; resmî Türkiye verisinde 142 Nm tork yer alır. Soğuk çalışma, turbo-soğutma, CVT sıvısı/sıcaklığı, 12 V akü ve yazılım birlikte kontrol edilmelidir.',
                pros: ['Şehir içinde otomatik kullanım rahatlığı', '142 Nm turbo torku', 'Yaygın Renault-Dacia servis ağı'], cons: ['CVT bakım geçmişinin önemi', 'Üç silindirli motor karakteri', 'Turbo-soğutma kontrol ihtiyacı'],
                chronicIssues: [
                    { title: 'CVT sıvısı, sıcaklık ve yol testi', description: 'Soğuk-sıcak D-R, sabit hız ve yük altında hızlanma denenmeli; doğru sıvı ve bakım faturası ile sıcaklık/hata kayıtları incelenmelidir. Hızlanmada motor devrinin yükselmesi CVT çalışma karakteridir ve tek başına kayma sayılmaz.', severity: 'medium', reportCount: 0 },
                    { title: 'TCe ateşleme, turbo ve soğutma', description: 'Motor soğukken rölanti ve ateşleme sayaçları; yükte turbo basıncı, yağ/soğutma sıvısı izi ve sıcaklık izlenmelidir. Üç silindirli normal titreşim, takoz veya ateşleme sorunu hata verisi olmadan birbirine karıştırılmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '10-eco-g-100-hp-lpg-manuel', name: 'Eco-G 100', fuelType: 'LPG', transmission: '6 ileri manuel', score: 83,
                description: 'Sandero Stepway Eco-G 100, fabrikasyon benzin/LPG sistemini altı ileri manuel şanzımanla sunar. Tank ve valf tarihleri, kaçak, regülatör/enjektör, benzin-LPG geçişi, yakıt düzeltmeleri, soğuk çalışma ve debriyaj ölçümlü biçimde kontrol edilmelidir.',
                pros: ['Fabrika çıkışlı LPG ekonomisi', 'İki yakıtla kullanım esnekliği', 'Yaygın servis altyapısı'], cons: ['LPG bileşenleri için ek periyodik kontrol', 'Tank hacminin yükleme düzenine etkisi', 'Yanlış ayarda supap/ateşleme yükü'],
                chronicIssues: [
                    { title: 'LPG kaçak, tank ve kalibrasyon kontrolü', description: 'Tank üretim tarihi, multivalf, dolum ağzı, borular ve bağlantılar kaçak cihazıyla test edilmelidir. Benzin-LPG geçişi ile yakıt düzeltmeleri okunmalı; koku varsa araç kullanılmadan LPG sistemi kapatılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Soğuk çalışma, ateşleme ve debriyaj', description: 'Araç sabah ilk çalıştırmada benzinde denenmeli; iki yakıtta rölanti, ateşleme sayacı ve düzeltmeler karşılaştırılmalıdır. Debriyaj kaçırma, kalkış titreşimi ve motor takozları ayrıca kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12018,
        engines: [
            {
                slug: 'premium-long-range-rwd', name: 'Premium Long Range RWD', fuelType: 'Elektrik', transmission: 'Tek oranlı / Arkadan itiş', score: 89,
                description: '2025 Yeni Model Y Premium Long Range arkadan itiş, Tesla Türkiye sayfasında WLTP tahmini 609 km menzil ve 250 kW azami Supercharger gücüyle listelenir. İkinci elde batarya/garanti ekranı, DC-AC şarj, lastik-geometri, alt gövde ve tüm kamera destekli sistemler birlikte test edilmelidir.',
                pros: ['609 km WLTP tahmini menzil', '250 kW azami hızlı şarj', 'Geniş şarj ağı ve yazılım desteği'], cons: ['Büyük jantlarda lastik maliyeti', 'Onarımda uzman gövde/elektrik ihtiyacı', 'Menzilin hava ve hıza duyarlılığı'],
                chronicIssues: [
                    { title: 'Yüksek voltaj batarya, garanti ve şarj testi', description: 'Araç ekranındaki batarya/garanti bilgisi, servis kayıtları ve varsa uyarılar doğrulanmalı; AC ve mümkünse DC şarj başlatılarak soket, kilit, ön koşullandırma ve şarj eğrisi denenmelidir. Gösterge menzili tek başına batarya sağlık ölçümü kabul edilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Kamera kalibrasyonu, lastik ve gövde geometrisi', description: 'Kamera görüşü ile sürüş destek uyarıları kontrol edilmeli; dört lastiğin ölçüleri, üretim tarihleri ve iç-omuz aşınması incelenmelidir. Alt batarya muhafazası ve şasi ölçümü yapılmadan geçmiş darbe yalnızca kozmetik boya raporuyla değerlendirilmemelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: 'performance-awd', name: 'Performance AWD', fuelType: 'Elektrik', transmission: 'Çift motor / Dört çeker', score: 87,
                description: 'Yeni Model Y Performance çift motorlu dört çeker güç aktarımı ve performans odaklı şasi-lastik paketi sunar. Satın alma öncesinde batarya ve iki tahrik ünitesi uyarıları, DC şarj, lastik/fren aşınması, süspansiyon, alt gövde ve yazılım özelliklerinin araç hesabına geçişi incelenmelidir.',
                pros: ['Çok güçlü hızlanma', 'Dört çeker çekiş', 'Güncel güvenlik ve yazılım donanımı'], cons: ['Lastik ve fren sarf maliyeti', 'Performans kullanımında hızlı aşınma', 'Onarımda uzman ekipman gereksinimi'],
                chronicIssues: [
                    { title: 'Çift motor, batarya ve güç sınırı kontrolü', description: 'Tahrik veya yüksek voltaj uyarıları taranmalı; soğuk ve sıcak kullanımda güç kısıtlaması, rejeneratif fren ve enerji tüketimi izlenmelidir. Batarya sağlığı yalnız tahmini menzilden çıkarılmamalı, servis teşhisi ve şarj davranışıyla doğrulanmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Performans lastiği, fren ve süspansiyon incelemesi', description: 'Dört lastiğin aynı teknik özellikte olması, iç omuz aşınması, jant darbesi, fren yüzeyi ve süspansiyon boşlukları kontrol edilmelidir. Rot ayarı yapılmadan önce alt takım ve gövde geometrisi ölçülmeli; titreşim yalnız balansla açıklanmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 5,
        engines: [
            {
                slug: '15-vtec-turbo-182-hp-benzin-cvt', name: '1.5 VTEC Turbo 182 PS', fuelType: 'Benzin', transmission: 'CVT', score: 86,
                description: 'Civic FE1’in 182 PS 1.5 VTEC Turbo seçeneği CVT ile sunulan erken dönem güç seçeneğidir. Soğuk çalışma, yağ seviyesi ve bakım aralığı, turbo-soğutma, yakıt düzeltmeleri, CVT sıvısı ve sıcak-soğuk yol testi servis kayıtlarıyla birlikte değerlendirilmelidir.',
                pros: ['182 PS güçlü performans', 'Akıcı CVT sürüşü', 'Geniş iç mekân'], cons: ['CVT bakım geçmişine duyarlılık', 'Turbo motor için doğru yağ gereksinimi', 'Yoğun kullanımda fren-lastik gideri'],
                chronicIssues: [
                    { title: 'Motor yağı, yakıt düzeltmesi ve turbo kontrolü', description: 'Araç tamamen soğukken yağ seviyesi ve kokusu, ateşleme sayacı, kısa-uzun yakıt düzeltmeleri ile turbo basıncı incelenmelidir. Tek bir yağ kokusu gözlemiyle teşhis konmamalı; kullanım profili, yazılım kampanyaları ve düzenli bakım faturaları birlikte aranmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'CVT sıvısı, sıcaklık ve hızlanma testi', description: 'CVT soğuk ve çalışma sıcaklığında D-R geçişi, düşük hız, sabit hız ve yük altında denenmeli; doğru sıvı değişim belgesi, kaçak, sıcaklık ve hata hafızası kontrol edilmelidir. Devrin hızdan önce yükselmesi CVT karakteri olabilir; titreşim ve kayma ölçülerek ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-vtec-turbo-eco-129-ps-lpg-cvt', name: '1.5 VTEC Turbo ECO 129 PS', fuelType: 'LPG', transmission: 'CVT', score: 84,
                description: 'Civic Sedan’ın Türkiye’ye özel ECO seçeneği 1.5 litre turbo motor, CVT ve LPG sistemini bir arada kullanır. LPG tank/valf tarihi, kaçak, iki yakıtta düzeltmeler, turbo-soğutma, CVT sıvısı ve Honda servis yazılımı satın alma öncesinde birlikte kontrol edilmelidir.',
                pros: ['Fabrika çözümlü LPG ekonomisi', 'Turbo torku ve CVT konforu', 'Türkiye servis ağı'], cons: ['LPG sistemi için ek periyodik kontrol', 'CVT ve turbo bakım hassasiyeti', 'Bagaj yerleşimine LPG etkisi'],
                chronicIssues: [
                    { title: 'LPG sızdırmazlığı ve iki yakıtta kalibrasyon', description: 'Tank tarihi, multivalf, boru ve bağlantılar kaçak cihazıyla test edilmeli; motor benzin ve LPG’de ayrı çalıştırılarak ateşleme sayacı ile yakıt düzeltmeleri karşılaştırılmalıdır. Koku veya kaçak şüphesinde araç kullanılmadan sistem kapatılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, soğutma ve CVT eş zamanlı testi', description: 'Turbo basıncı, yağ/soğutma kaçağı ve fan davranışı kontrol edilmeli; CVT soğuk-sıcak D-R ile yük altında denenmelidir. Hızlanma zayıflığında LPG ayarı, motor performansı ve şanzıman davranışı veri kaydı olmadan birbirine karıştırılmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 24,
        engines: [
            {
                slug: '10-tsi-110-hp-benzin-dsg', name: '1.0 TSI 110 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 82,
                description: 'Polo AW’nin 1.0 TSI 110 PS seçeneği turbo benzinli motoru yedi ileri çift kavramalı DSG ile birleştirir. Soğuk çalışma, turbo-soğutma, triger ve bakım belgeleriyle DSG kavrama/mekatronik verileri hem soğuk hem sıcak yol testinde incelenmelidir.',
                pros: ['Canlı turbo performansı', 'Düşük hacimde iyi tork', 'Hızlı DSG geçişleri'], cons: ['Kuru kavrama şehir trafiğine duyarlı', 'Turbo-soğutma bakım hassasiyeti', 'İyi örneklerde yüksek ikinci el fiyatı'],
                chronicIssues: [
                    { title: 'DSG kavrama ve mekatronik teşhisi', description: 'Soğuk-sıcak D-R, dur-kalk, geri manevra ve yokuşta kalkış test edilmeli; kavrama aşınma/uyarlama değerleri, yağ kaçağı ve mekatronik hata hafızası okunmalıdır. Titreşimde motor takozu ve ateşleme kaynakları elenmeden kavrama değişimi kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'TSI ateşleme, turbo ve soğutma kontrolü', description: 'Motor soğukken rölanti ve ateşleme sayaçları, yük altında istenen-gerçek turbo basıncı ile yakıt düzeltmeleri izlenmelidir. Su pompası/termostat çevresi, yağ kaçakları ve doğru spesifikasyonlu bakım kayıtları fiziksel olarak doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-tsi-150-hp-benzin-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 83,
                description: 'Polo AW’nin bazı Avrupa donanım ve üretim yıllarında bulunan 1.5 TSI 150 PS seçeneği güçlü ara hızlanma ile silindir kapatma teknolojisini birleştirir. Türkiye’deki aracın fabrika çıkış motor/donanımı VIN ile doğrulanmalı; TSI ve DSG kontrolleri birlikte yapılmalıdır.',
                pros: ['150 PS güçlü performans', 'Silindir kapatma ile verimlilik', 'Hızlı DSG geçişleri'], cons: ['Türkiye’de sınırlı bulunabilirlik', 'Kuru kavrama kullanım hassasiyeti', 'Geçmiş yazılım/modifiye riski'],
                chronicIssues: [
                    { title: 'VIN, yazılım ve motor donanımı doğrulaması', description: 'Motor kodu, fabrika donanımı ve pazar geçmişi VIN/etiket ve servis kaydıyla doğrulanmalı; ECU yazılımı ile egzoz donanımının orijinalliği kontrol edilmelidir. İlan başlığı veya ruhsat hacmi tek başına 150 PS versiyonu doğrulamaz.', severity: 'high', reportCount: 0 },
                    { title: 'Soğuk sürüş, DSG kavrama ve soğutma', description: 'Motor soğukken düşük devir davranışı ve ateşleme verileri; DSG’de D-R, dur-kalk ve geri manevra denenmelidir. Soğutma devresi kaçakları, yağ seviyesi ve kavrama uyarlamaları birlikte incelenmeli; yazılım güncelleme geçmişi sorgulanmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-tdi-95-ps-dizel-dsg', name: '1.6 TDI 95 PS', fuelType: 'Dizel', transmission: '5 ileri manuel / 7 ileri DSG', score: 80,
                description: 'Polo AW 1.6 TDI Türkiye ve Avrupa pazarında üretim yılına göre manuel veya DSG ile görülebilir; güç ve şanzıman VIN üzerinden doğrulanmalıdır. DPF/EGR, AdBlue bulunan versiyonlarda SCR sistemi, enjektör/turbo ve DSG kontrolleri kullanım profiliyle birlikte yapılmalıdır.',
                pros: ['Uzun yolda düşük tüketim', 'Yeterli dizel torku', 'Yaygın VAG servis bilgisi'], cons: ['Kısa mesafede DPF doluluk riski', 'Emisyon sistemi maliyeti', 'DSG versiyonda ek kavrama riski'],
                chronicIssues: [
                    { title: 'DPF, EGR, SCR ve enjektör taraması', description: 'DPF kurum/kül ile rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. AdBlue/SCR donanımı varsa seviye ve hata kayıtları ayrıca incelenmeli; şehir içi kullanım izi mekanik arıza gibi yorumlanmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Şanzıman ve çift kütleli volan kontrolü', description: 'Manuel araçta kavrama ve çift kütleli volan sesi; DSG’de kavrama uyarlaması, mekatronik hata kaydı ve sıcak-soğuk manevralar kontrol edilmelidir. Motor titreşimi ile aktarma vuruntusu takozlar ölçülmeden birbirine bağlanmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 10,
        engines: [
            {
                slug: '12-puretech-130-hp-benzin-eat8', name: '1.2 Turbo 130 PS', fuelType: 'Benzin', transmission: '8 ileri otomatik', score: 73,
                description: 'Corsa F’nin 1.2 litre turbo 130 PS ve sekiz ileri otomatik seçeneğinde üretim tarihi, motor kodu ve bakım kampanyaları VIN ile doğrulanmalıdır. Motor yağı standardı, triger sistemi, yağ basıncı, vakum devresi, soğutma ve otomatik şanzıman sıcak-soğuk test edilmelidir.',
                pros: ['130 PS canlı performans', 'Konforlu sekiz ileri otomatik', 'Kompakt boyut ve yaygın servis'], cons: ['Triger sistemi bakım geçmişine duyarlı', 'Doğru yağ standardı kritik', 'İhmalde pahalı motor hasarı riski'],
                chronicIssues: [
                    { title: 'Triger sistemi, yağ süzgeci ve vakum kontrolü', description: 'Üretim tarihi ve motor koduna uygun servis prosedürü izlenmeli; trigerin durum ve değişim faturası, doğru yağ standardı, yağ basıncı ile karter/vakum pompası süzgeçleri kontrol edilmelidir. Görsel bakı tek başına yeterli sayılmamalı, kampanya kaydı VIN üzerinden sorgulanmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'EAT8 sıcak-soğuk geçiş ve kaçak testi', description: 'Şanzıman soğuk ve tam çalışma sıcaklığında D-R, düşük hız, yokuş ve yük altında denenmeli; yağ kaçağı, sıcaklık ve hata hafızası kontrol edilmelidir. Vuruntuda motor takozu veya düzensiz motor çalışması elenmeden şanzıman revizyonu önerilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-dizel-102-ps-manuel', name: '1.5 Dizel 102 PS', fuelType: 'Dizel', transmission: '6 ileri manuel', score: 77,
                description: 'Corsa F 1.5 dizel 102 PS seçeneği altı ileri manuel şanzımanla sunulmuştur. DPF/EGR ve SCR-AdBlue verileri, enjektör düzeltmeleri, turbo, zincir/ses kontrolleri, debriyaj-volan ve bakım kampanyaları üretim yılı ile VIN üzerinden birlikte doğrulanmalıdır.',
                pros: ['Uzun yolda düşük tüketim', 'Yeterli dizel torku', 'Manuel şanzıman sadeliği'], cons: ['Kısa mesafede DPF riski', 'SCR/AdBlue sistemi maliyeti', 'Dizel motor bakım hassasiyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR, SCR ve motor içi ses kontrolü', description: 'DPF kurum/kül ve rejenerasyon geçmişi, EGR komutu, AdBlue/SCR hata kayıtları ile enjektör düzeltmeleri okunmalıdır. Soğuk motor sesi üretim kampanyaları ve servis bültenleriyle eşleştirilmeli; veri olmadan zincir veya motor içi arıza kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, debriyaj ve çift kütleli volan', description: 'İstenen-gerçek turbo basıncı, yağ kaçağı ve hortumlar yük altında kontrol edilmeli; kavrama kaçırma, kalkış titreşimi ve volan sesi soğuk-sıcak denenmelidir. Takoz titreşimi ile volan sesi ayrı fiziksel muayeneyle belirlenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '12-hybrid-136-145-ps-edct6', name: '1.2 Hybrid 136/145 PS', fuelType: 'Hibrit', transmission: '6 ileri e-DCT', score: 81,
                description: 'Corsa’nın 48V hibrit seçeneği üretim yılına göre 136 veya 145 PS sistem gücüyle ve elektrik motorunu barındıran altı ileri e-DCT ile sunulur. VIN üzerinden güç doğrulanmalı; 48V akü, DC-DC, soğutma, kavrama, yazılım ve benzinli motor bakımı birlikte kontrol edilmelidir.',
                pros: ['Şehir içinde elektrik destekli verimlilik', 'Otomatik kullanım rahatlığı', 'Güncel 48V teknoloji'], cons: ['Yeni sistem için uzman teşhis ihtiyacı', 'Kavrama ve 48V bileşenleri birlikte çalışır', 'Gerçek tüketim kullanım biçimine bağlı'],
                chronicIssues: [
                    { title: '48V akü, DC-DC ve hibrit hata taraması', description: '12V ve 48V akü sağlıkları, DC-DC şarj davranışı, hibrit sistem hata hafızası ve yazılım kampanyaları okunmalıdır. Enerji akış ekranının çalışması tek başına sistem sağlığını göstermez; soğuk ve sıcak yol testiyle destek geçişleri izlenmelidir.', severity: 'high', reportCount: 0 },
                    { title: 'e-DCT kavrama ve benzinli motor kontrolü', description: 'D-R, sürünme, geri manevra ve yokuş kalkışı sıcak-soğuk denenmeli; kavrama uyarlaması ve şanzıman sıcaklığı kontrol edilmelidir. Motor tarafında doğru yağ, triger sistemi ve soğutma kayıtları VIN’e uygun servis prosedürüyle doğrulanmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: 'corsa-elektrik-115-kw-156-ps', name: 'Corsa Elektrik 115 kW (156 PS)', fuelType: 'Elektrik', transmission: 'Tek oranlı', score: 84,
                description: 'Corsa Elektrik’in 115 kW/156 PS seçeneği 51 kWh sınıfındaki batarya ve tek oranlı ön çekiş sistemi kullanır. Batarya garantisi ve sağlık verisi, AC/DC şarj, termal yönetim, 12V akü, alt gövde, fren-lastik aşınması ve yazılım kampanyaları birlikte kontrol edilmelidir.',
                pros: ['Sessiz ve seri şehir sürüşü', 'Rejeneratif fren', 'Yerel emisyonsuz kullanım'], cons: ['Menzil hava ve hıza duyarlı', 'Şarj altyapısına bağımlılık', 'Batarya onarımında uzman servis gereksinimi'],
                chronicIssues: [
                    { title: 'Batarya sağlık, termal yönetim ve şarj testi', description: 'Batarya sağlık/garanti ekranı ve servis teşhisi incelenmeli; AC ve mümkünse DC şarj başlatılarak soket kilidi, güç, ön koşullandırma ve sıcaklık davranışı denenmelidir. Gösterge menzili tek başına batarya kapasite testi olarak kullanılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: '12V akü, yazılım ve alt gövde kontrolü', description: '12V akü yük testi, hata hafızası ve güncelleme/kampanya kayıtları kontrol edilmeli; batarya muhafazası darbe, ezik ve onarım izi açısından liftte incelenmelidir. Rejenerasyon nedeniyle az kullanılan mekanik frenlerde disk yüzeyi ayrıca değerlendirilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 14,
        engines: [
            {
                slug: '15-ti-vct-123-ps-6at', name: '1.5 Ti-VCT 123 PS', fuelType: 'Benzin', transmission: '6 ileri otomatik', score: 81,
                description: 'Türkiye’de Focus Mk4’ün yaygın atmosferik seçeneği 1.5 Ti-VCT 123 PS motoru altı ileri tork konvertörlü otomatikle birleştirir. Soğuk çalışma, ateşleme, yakıt düzeltmeleri, yağ-soğutma, motor takozları ve şanzıman geçişleri bakım geçmişiyle birlikte kontrol edilmelidir.',
                pros: ['Atmosferik motor karakteri', 'Tork konvertörlü otomatik konforu', 'Yaygın servis ve parça'], cons: ['Turbo seçeneklere göre sakin performans', 'Şehir içinde tüketim artabilir', 'Takoz ve ateşleme titreşimi ayırt edilmeli'],
                chronicIssues: [
                    { title: 'Soğuk çalışma, ateşleme ve yağ seviyesi', description: 'Araç tamamen soğukken rölanti, ateşleme sayaçları ve yakıt düzeltmeleri okunmalı; yağ seviyesi, kaçak, soğutma sıvısı ve fan davranışı kontrol edilmelidir. Titreşimde bobin-buji, motor takozu ve şanzıman yükü ölçülmeden birbirine bağlanmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Altı ileri otomatik sıcak-soğuk testi', description: 'Şanzıman soğuk ve çalışma sıcaklığında D-R, hafif/sert hızlanma, yokuş ve geri manevrada denenmeli; yağ kaçağı, sıcaklık ve hata kayıtları incelenmelidir. Motorun düzensiz çalışması veya takoz boşluğu elenmeden şanzıman kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-ecoblue-120-ps-8at', name: '1.5 EcoBlue 120 PS', fuelType: 'Dizel', transmission: '8 ileri otomatik', score: 79,
                description: 'Focus Mk4 1.5 EcoBlue 120 PS dizel, sekiz ileri otomatikle uzun yol verimliliği sunar. DPF/EGR/SCR, enjektör ve turbo verileri; triger/bakım kayıtları ile şanzıman sıcaklığı, geçiş kalitesi ve yağ kaçağı aynı ekspertizde incelenmelidir.',
                pros: ['Uzun yolda düşük tüketim', '120 PS ve güçlü dizel torku', 'Sekiz ileri otomatik konforu'], cons: ['Kısa mesafede emisyon sistemi riski', 'AdBlue/SCR bakım maliyeti', 'Filo geçmişli araçlarda yoğun kullanım'],
                chronicIssues: [
                    { title: 'DPF, EGR, SCR ve enjektör verileri', description: 'DPF kurum/kül ve son rejenerasyonlar, EGR komutu, SCR/AdBlue hataları, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Kullanım profili ve sensör arızası ayrılmadan DPF temizliği veya pahalı parça değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: '8AT geçiş, sıcaklık ve bakım kontrolü', description: 'Soğuk-sıcak D-R, düşük hız, yükte hızlanma ve yokuş test edilmeli; şanzıman sıcaklığı, hata hafızası ve yağ kaçağı kontrol edilmelidir. Vuruntunun motor takozu, düzensiz yanma veya aktarma kaynaklı olduğu ölçümle ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '10-ecoboost-125-ps-8at', name: '1.0 EcoBoost 125 PS mHEV', fuelType: 'Hibrit', transmission: '8 ileri otomatik', score: 78,
                description: 'Focus Mk4’ün 1.0 EcoBoost 125 PS seçeneği üretim yılına göre hafif hibrit destek ve otomatik şanzımanla bulunabilir. Motor kodu ve donanım VIN ile doğrulanmalı; doğru yağ, triger sistemi, soğutma, 48V donanım varsa akü/DC-DC ve şanzıman birlikte kontrol edilmelidir.',
                pros: ['Küçük hacimde yeterli performans', 'Hafif hibritte şehir verimliliği', 'Sekiz ileri otomatik rahatlığı'], cons: ['Motor koduna özel bakım şartı', 'Soğutma ve yağ standardı kritik', '48V sistemde ek teşhis ihtiyacı'],
                chronicIssues: [
                    { title: 'Motor kodu, yağ ve triger sistemi doğrulaması', description: 'VIN’den motor kodu ve üretim tarihi belirlenmeli; doğru yağ standardı, triger sistemi ve değişim prosedürü servis kaydıyla doğrulanmalıdır. Yağ basıncı, soğutma kaçağı ve aşırı ısınma geçmişi incelenmeden motor sağlığı yalnız sürüş hissiyle değerlendirilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: '48V sistem ve otomatik şanzıman testi', description: 'Hafif hibrit araçta 12V/48V akü, DC-DC ve hata hafızası; tüm araçlarda D-R, düşük hız ve sıcak geçişler kontrol edilmelidir. Kalkış titreşiminin motor, takoz, elektrik desteği veya şanzıman kaynağı veri olmadan kesinleştirilmemelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2088,
        engines: [
            {
                slug: '15-etsi-150-ps-dsg', name: '1.5 eTSI 150 PS', fuelType: 'Hibrit', transmission: '7 ileri DSG', score: 86,
                description: 'Passat B9’un Türkiye’de öne çıkan 1.5 eTSI 150 PS seçeneği 48V hafif hibrit sistemi ve yedi ileri DSG kullanır. 12V/48V aküler, DC-DC, silindir kapatma, turbo-soğutma, kavrama/mekatronik ve yazılım kampanyaları sıcak-soğuk test edilmelidir.',
                pros: ['150 PS dengeli performans', '48V destekli verimlilik', 'Geniş Variant gövde'], cons: ['DSG bakım ve kullanım hassasiyeti', '48V sistem için uzman teşhis', 'Büyük gövdede lastik/fren maliyeti'],
                chronicIssues: [
                    { title: '48V akü, DC-DC ve enerji yönetimi', description: '12V ve 48V akü sağlıkları, DC-DC şarj davranışı, enerji yönetimi hata hafızası ve yazılım kampanyaları okunmalıdır. Start-stop veya süzülme işlevinin çalışması tek başına sistem sağlığını kanıtlamaz; soğuk-sıcak yol testi gerekir.', severity: 'high', reportCount: 0 },
                    { title: 'DSG kavrama, mekatronik ve TSI kontrolü', description: 'D-R, dur-kalk, geri manevra ve yokuşta kalkış denenmeli; kavrama uyarlamaları, mekatronik hataları ve sıcaklık izlenmelidir. Motor tarafında istenen-gerçek turbo basıncı, ateşleme ve soğutma verileri birlikte okunmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '15-ehybrid-204-ps-dsg', name: '1.5 eHybrid 204 PS', fuelType: 'Hibrit', transmission: '6 ileri DSG', score: 85,
                description: 'Passat B9 1.5 eHybrid 204 PS, benzinli motoru haricen şarj edilebilen yüksek voltaj sistemiyle birleştirir. Batarya/garanti, AC/DC şarj donanımı, termal yönetim, iki güç kaynağı arasındaki geçiş, kavrama ve fren sistemi uzman teşhisle kontrol edilmelidir.',
                pros: ['Günlük kullanımda elektrikli sürüş', '204 PS sistem gücü', 'Uzun yol için benzinli esneklik'], cons: ['İki güç sisteminin bakım karmaşıklığı', 'Şarj edilmeyen kullanımda tüketim artışı', 'Yüksek voltaj onarım maliyeti'],
                chronicIssues: [
                    { title: 'Yüksek voltaj batarya ve şarj doğrulaması', description: 'Batarya sağlık/garanti bilgisi, hücre sapmaları ve yüksek voltaj hata kayıtları okunmalı; AC ve destekliyorsa DC şarj başlatılarak soket kilidi, güç ve termal yönetim izlenmelidir. Gösterge menzili tek başına kapasite ölçümü sayılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Hibrit geçiş, DSG ve fren sistemi testi', description: 'Elektrik, hibrit ve benzinli çalışma modlarında geçişler; D-R, yokuş ve geri manevra sıcak-soğuk denenmelidir. Rejeneratif ve mekanik fren geçişi, disk yüzeyi ile kavrama uyarlamaları birlikte kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '20-tdi-193-ps-4motion-dsg', name: '2.0 TDI 193 PS 4MOTION', fuelType: 'Dizel', transmission: '7 ileri DSG / 4MOTION', score: 84,
                description: 'Passat B9’un 2.0 TDI 193 PS 4MOTION seçeneği güçlü dizel motoru DSG ve dört tekerlekten çekişle birleştirir. DPF/EGR/SCR, turbo-enjektör, kavrama/mekatronik, arka aktarma ve dört lastik çevresi birlikte ve servis geçmişi üzerinden incelenmelidir.',
                pros: ['193 PS ve güçlü tork', '4MOTION çekiş', 'Uzun yol verimliliği'], cons: ['Emisyon sistemi parça maliyeti', 'DSG ve 4MOTION ek bakım gideri', 'Kısa mesafeye uygun olmayan dizel yapı'],
                chronicIssues: [
                    { title: 'DPF, SCR, EGR ve turbo taraması', description: 'DPF kurum/kül ile rejenerasyon geçmişi, EGR komutu, SCR/AdBlue hataları, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Sensör, kullanım profili ve mekanik arıza ayrılmadan temizlik ya da parça değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DSG, 4MOTION ve eş lastik kontrolü', description: 'DSG sıcak-soğuk manevralarda test edilmeli; kavrama/mekatronik verileri, arka aktarma yağ kaçağı ve ses kontrol edilmelidir. Dört lastiğin ölçü, marka/model, aşınma ve çevre farkı uyumlu olmalı; farklı çevre aktarmaya sürekli yük bindirebilir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
];
