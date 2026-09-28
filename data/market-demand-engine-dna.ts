import type { VehicleEngineData } from './engine-dna';

export const marketDemandEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 14001,
        engines: [
            {
                slug: '10-tsi-95-ps-manuel', name: '1.0 TSI 95 PS', fuelType: 'Benzin', transmission: '5 ileri manuel', score: 82,
                description: 'T-Cross’un EA211 ailesindeki üç silindirli giriş motorudur. Sade manuel eşleşmesi şehir içi kullanımda DSG riskini istemeyenlere uygundur; soğutma modülü, doğru yağ, turbo basıncı ve ateşleme geçmişi satın alma öncesi doğrulanmalıdır.',
                pros: ['DSG’ye göre daha sade güç aktarımı', 'Şehir içi için yeterli alt devir torku', 'Yaygın servis ve parça bilgisi'], cons: ['Yüklü uzun yolda performans sınırlı', 'Üç silindir titreşimi herkese hitap etmeyebilir', 'Turbo ve direkt enjeksiyon bakımı ister'],
                chronicIssues: [
                    { title: 'Termostat-su pompası kaçağı', severity: 'high', reportCount: 0, description: 'Soğutma modülü ve bağlantılar soğukken incelenmeli; seviye düşmesi basınç testi ve canlı sıcaklık eğrisiyle doğrulanmalıdır. Hararet veya sürekli eksiltme küçük kaçak diye kabul edilmemelidir.' },
                    { title: 'Ateşleme ve yakıt düzeltmesi', severity: 'medium', reportCount: 0, description: 'Yükte tekleme bobin-buji, yakıt kalitesi, enjektör veya hava kaçağından çıkabilir. Misfire sayacı ile kısa-uzun yakıt düzeltmesi aynı koşulda okunmalıdır.' },
                    { title: 'Turbo aktüatörü ve basınç kaçağı', severity: 'medium', reportCount: 0, description: 'Islık veya güç kaybında hedef-gerçek basınç, wastegate/aktüatör ve hortum-intercooler hattı incelenmeden turbo değişimi kararı verilmemelidir.' },
                ],
            },
            {
                slug: '10-tsi-110-115-ps-dsg', name: '1.0 TSI 110-115 PS', fuelType: 'Benzin', transmission: '7 ileri DSG / pazara göre 6 ileri manuel', score: 78,
                description: 'Türkiye ikinci elinde en çok aranan T-Cross eşleşmelerindendir. Güç değeri model yılına göre 110 veya 115 PS olabilir. Motor kontrollerine ek olarak DQ200 kuru kavramanın soğuk-sıcak davranışı ve mekatronik verisi gerekir.',
                pros: ['95 PS sürüme göre daha rahat performans', 'DSG ile hızlı ve ekonomik oranlar', 'Karma kullanımda dengeli tüketim'], cons: ['Kuru kavramada dur-kalk aşınması', 'Mekatronik/kavrama masrafı', 'Güç sürümü ilanlarda karışabilir'],
                chronicIssues: [
                    { title: 'DQ200 kavrama titremesi', severity: 'high', reportCount: 0, description: 'Geri, yokuş ve sıcak dur-kalkta titreme; kavrama, takoz veya motor teklemesiyle ilişkili olabilir. Uyarlama değerleri ve uzun sürüş olmadan teşhis konulmamalıdır.' },
                    { title: 'Mekatronik basınç ve hata geçmişi', severity: 'high', reportCount: 0, description: 'Vites seçmeme veya arıza modu varsa basınç, sıcaklık, kalıcı kod ve akü voltajı birlikte incelenmelidir. Kod silmek kalıcı onarım değildir.' },
                    { title: 'Soğutma ve turbo hattı', severity: 'medium', reportCount: 0, description: 'Termostat-pompa çevresi ile turbo hedef-gerçek basıncı kontrol edilmelidir; su veya güç kaybı tek parça tahminiyle geçiştirilmemelidir.' },
                ],
            },
            {
                slug: '15-tsi-150-ps-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 80,
                description: 'Pazara göre sunulan dört silindirli ACT’li üst benzinli seçenektir. Güçlü performans sağlar; düşük devir yazılım davranışı, silindir kapama geçişi, soğutma sistemi ve DSG kodu/uyarlaması incelenmelidir.',
                pros: ['Güçlü ara hızlanma', 'ACT ile sakin kullanım verimliliği', 'Dört silindirli rafinelik'], cons: ['Türkiye’de daha az örnek', 'DSG ve ACT ek karmaşıklığı', 'Lastik/fren maliyetinin artabilmesi'],
                chronicIssues: [
                    { title: 'Düşük devir tereddüdü ve yazılım', severity: 'medium', reportCount: 0, description: 'Soğuk düşük devir silkelemesi yazılım, ateşleme veya ACT geçişiyle ilişkili olabilir. VIN kampanyası ve misfire/yakıt verisi yol testinde görülmelidir.' },
                    { title: 'DSG kavrama ve mekatronik', severity: 'high', reportCount: 0, description: 'Şanzıman kodu doğrulanıp geri-yokuş-dur kalk testi tam sıcakken tekrarlanmalı; uyarlama, basınç ve hata kaydı okunmalıdır.' },
                    { title: 'Soğutma devresi', severity: 'high', reportCount: 0, description: 'Pompa-termostat modülü, hortum ve genleşme kabı basınç testiyle değerlendirilerek geçmiş eksiltme veya hararet dışlanmalıdır.' },
                ],
            },
        ],
    },
    {
        vehicleId: 14002,
        engines: [
            {
                slug: '10-tsi-95-ps-manuel', name: '1.0 TSI 95 PS', fuelType: 'Benzin', transmission: '5 ileri manuel', score: 82,
                description: 'Arona’nın sade şanzımanlı giriş turbo benzinlisidir. Şehir içi ve sakin kullanımda yeterlidir; VIN’den güç doğrulanmalı, soğutma modülü, ateşleme, turbo basıncı, debriyaj ve motor takozları kontrol edilmelidir.',
                pros: ['Sade manuel şanzıman', 'Ekonomik şehir içi kullanım', 'Yaygın EA211 servis bilgisi'], cons: ['Yüklü performans sınırlı', 'Turbo/direkt enjeksiyon karmaşıklığı', 'Debriyaj kullanım geçmişine bağlı aşınma'],
                chronicIssues: [
                    { title: 'Soğutma modülü', severity: 'high', reportCount: 0, description: 'Termostat-su pompası çevresi, kurumuş sıvı izi ve sıcaklık eğrisi basınç testiyle incelenmelidir.' },
                    { title: 'Ateşleme/yakıt düzeltmesi', severity: 'medium', reportCount: 0, description: 'Tekleme veya düzensiz rölanti için bobin-buji, enjektör, vakum ve misfire verileri birlikte değerlendirilmelidir.' },
                    { title: 'Debriyaj ve motor takozu', severity: 'medium', reportCount: 0, description: 'Kalkış titremesi debriyaj kadar takoz veya motor düzensizliğinden çıkabilir; yokuş ve sıcak kalkışta ayrıştırılmalıdır.' },
                ],
            },
            {
                slug: '10-tsi-110-115-ps-dsg', name: '1.0 TSI 110-115 PS DSG', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 77,
                description: 'Arona’da performans-konfor dengesi sunan yaygın kombinasyondur. Model yılına göre 110/115 PS ayrımı yapılmalı; DQ200 kavrama, mekatronik, akü voltajı ve motor soğutma sistemi tam sıcak testle incelenmelidir.',
                pros: ['Canlı şehir içi performansı', 'Hızlı DSG geçişleri', 'Karma kullanım ekonomisi'], cons: ['Kuru kavrama dur-kalk hassasiyeti', 'Mekatronik onarım maliyeti', 'Soğutma modülü takibi'],
                chronicIssues: [
                    { title: 'Kavrama uyarlaması ve titreme', severity: 'high', reportCount: 0, description: 'Geri, yokuş ve dur-kalkta soğuk-sıcak test; kavrama aşınma/temas verisiyle birlikte yapılmalıdır.' },
                    { title: 'Mekatronik hata/basınç', severity: 'high', reportCount: 0, description: 'Arıza modu, geç seçim veya vuruntu için basınç, sıcaklık, akü ve kalıcı kodlar silinmeden okunmalıdır.' },
                    { title: 'TSI turbo-soğutma', severity: 'medium', reportCount: 0, description: 'Su eksiltme ve güç kaybında pompa/termostat, basınç kaçağı ve hedef-gerçek turbo verisi birlikte incelenmelidir.' },
                ],
            },
            {
                slug: '16-tdi-95-ps-manuel-dsg', name: '1.6 TDI 95 PS', fuelType: 'Dizel', transmission: '5 ileri manuel / 7 ileri DSG', score: 75,
                description: 'Erken dönem ve pazara göre bulunan dizel seçenektir. Uzun yol tüketimi güçlüdür; kısa mesafe geçmişinde DPF/EGR, çalışma sıcaklığı, enjektör ve turbo yanında varsa DQ200 mutlaka kontrol edilmelidir.',
                pros: ['Düşük uzun yol tüketimi', 'Yeterli alt devir torku', 'VAG dizel servis bilgisi'], cons: ['DPF/EGR kısa mesafe riski', 'Enjektör-turbo maliyeti', 'DSG varsa ek kavrama riski'],
                chronicIssues: [
                    { title: 'DPF rejenerasyon ve termostat', severity: 'high', reportCount: 0, description: 'Diferansiyel basınç, kül/kurum, rejenerasyon aralığı ve gerçek çalışma sıcaklığı birlikte okunmalıdır.' },
                    { title: 'EGR ve emme sistemi', severity: 'medium', reportCount: 0, description: 'Hava kütlesi, EGR hedef-gerçek ve emme kaçakları ölçülmeden çekiş düşüklüğü için parça kararı verilmemelidir.' },
                    { title: 'Enjektör/turbo', severity: 'high', reportCount: 0, description: 'Soğuk çalışma, enjektör düzeltme/geri dönüş ve turbo basınç hattı yol kaydında değerlendirilmelidir.' },
                ],
            },
        ],
    },
    {
        vehicleId: 14003,
        engines: [
            {
                slug: '10-tsi-110-115-ps-manuel-dsg', name: '1.0 TSI 110-115 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 81,
                description: 'Scala’nın Türkiye’de yaygın ve yeterli turbo benzinlisidir. Güç değeri/yıl, manuel-DSG ayrımı VIN’den doğrulanmalı; soğutma, turbo-ateşleme, DSG kavrama ve elektronik sistem birlikte kontrol edilmelidir.',
                pros: ['Kasa için yeterli performans', 'Ekonomik karma kullanım', 'Manuel veya DSG seçeneği'], cons: ['DSG’de kavrama riski', 'Soğutma modülü takibi', 'Üç silindir sesi/titreşimi'],
                chronicIssues: [
                    { title: 'Pompa-termostat kaçağı', severity: 'high', reportCount: 0, description: 'Soğukta seviye ve modül çevresi, basınç testi ve canlı sıcaklıkla kontrol edilmelidir. Kurumuş iz veya eksiltme varsa doğru antifriz ve fan çalışması da doğrulanmalıdır.' },
                    { title: 'DSG kavrama/mekatronik', severity: 'high', reportCount: 0, description: 'DSG’li araçta geri-yokuş-sıcak dur-kalk ve uyarlama/basınç verisi birlikte incelenmelidir.' },
                    { title: 'Turbo ve ateşleme', severity: 'medium', reportCount: 0, description: 'Yükte misfire, yakıt düzeltmesi ve hedef-gerçek basınç kaydıyla kaçak/bobin/aktüatör ayrılmalıdır.' },
                ],
            },
            {
                slug: '15-tsi-150-ps-dsg', name: '1.5 TSI 150 PS', fuelType: 'Benzin', transmission: '7 ileri DSG', score: 82,
                description: 'Scala’ya güçlü ara hızlanma sağlayan ACT’li dört silindirli seçenektir. Düşük devir/yazılım davranışı, ACT geçişleri, soğutma ve DSG kodu ile kavrama-mekatronik geçmişi satın alma öncesi görülmelidir.',
                pros: ['Güçlü ve rafine performans', 'ACT verimliliği', 'Uzun yolda rahatlık'], cons: ['DSG bakım/onarım maliyeti', 'ACT/yazılım kontrolü', '1.0 TSI’dan yüksek işletme gideri'],
                chronicIssues: [
                    { title: 'Düşük devir tereddüdü', severity: 'medium', reportCount: 0, description: 'Yazılım, ateşleme ve ACT geçişi kontrollü sürüşte karşılaştırılmalı; kampanyalar VIN’den sorgulanmalıdır.' },
                    { title: 'DSG sıcak davranışı', severity: 'high', reportCount: 0, description: 'Tam sıcak park/yokuş/dur-kalk testiyle kavrama uyarlaması ve mekatronik kodları birlikte okunmalıdır.' },
                    { title: 'Soğutma sistemi', severity: 'high', reportCount: 0, description: 'Termostat-pompa, hortum ve genleşme kabı basınç altında kaçak ve doğru sıcaklık yönünden incelenmelidir.' },
                ],
            },
            {
                slug: '16-tdi-115-ps-manuel-dsg', name: '1.6 TDI 115 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / 7 ileri DSG', score: 77,
                description: 'Scala’nın erken dönem uzun yol odaklı dizelidir. DPF/EGR ve termostat geçmişi, enjektör/turbo verisi, manuelde volan-debriyaj veya DSG’de kavrama/mekatronik tam sıcak sürüşle kontrol edilmelidir.',
                pros: ['Düşük uzun yol tüketimi', '250 Nm tork', 'Manuel/DSG seçeneği'], cons: ['Kısa mesafeye uygun olmaması', 'Emisyon sistemi masrafı', 'Dizel donanımın sonraki yıllarda azalması'],
                chronicIssues: [
                    { title: 'DPF kül/kurum ve rejenerasyon', severity: 'high', reportCount: 0, description: 'Basınç, kül/kurum, son rejenerasyon ve termostat sıcaklığı beraber okunmalıdır.' },
                    { title: 'Enjektör ve turbo hattı', severity: 'high', reportCount: 0, description: 'Düzeltme/geri dönüş, rail basıncı ve turbo hedef-gerçek değeri kontrollü yükte kaydedilmelidir.' },
                    { title: 'Volan veya DSG', severity: 'high', reportCount: 0, description: 'Manuelde volan sesi/kavrama, DSG’de sıcak düşük hız uyarlaması güç aktarım koduna göre incelenmelidir.' },
                ],
            },
        ],
    },
    {
        vehicleId: 14004,
        engines: [
            {
                slug: '12-125-mpi-manuel', name: '1.2 / 1.25 MPI', fuelType: 'Benzin', transmission: '5 ileri manuel', score: 84,
                description: 'Stonic’in pazara ve yıla göre adlandırılan sade atmosferik giriş motorudur. Performansı temel seviyededir; LPG varsa belge/kalibrasyon, supap-kompresyon, ateşleme, soğutma ve debriyaj durumu incelenmelidir.',
                pros: ['Sade atmosferik yapı', 'Manuel şanzıman', 'Ekonomik bakım potansiyeli'], cons: ['Yüklü performans sınırlı', 'LPG ayarına hassasiyet', 'Otoyol ara hızlanması zayıf'],
                chronicIssues: [
                    { title: 'LPG kalibrasyonu/supap', severity: 'high', reportCount: 0, description: 'İki yakıtta düzeltme, kompresyon/kaçak ve motor koduna uygun supap boşluğu ölçümü yapılmalıdır. Tank tarihi, montaj belgesi ve yüksek yükte karışım davranışı da kontrol edilmelidir.' },
                    { title: 'Bobin-buji ve rölanti', severity: 'medium', reportCount: 0, description: 'Misfire sayacı, buji görünümü, bobin ve vakum/gaz kelebeği kontrol edilmelidir.' },
                    { title: 'Debriyaj ve takoz', severity: 'medium', reportCount: 0, description: 'Yokuşta kaçırma ve sıcak kalkış titremesi motor takozuyla birlikte değerlendirilmelidir.' },
                ],
            },
            {
                slug: '14-mpi-manuel-otomatik', name: '1.4 MPI', fuelType: 'Benzin', transmission: '6 ileri manuel / klasik otomatik (yıla göre)', score: 83,
                description: 'İlk yıllarda sunulan atmosferik benzinli seçenektir. Turbo karmaşıklığı olmadan dengeli kullanım sunar; LPG/kompresyon, ateşleme, soğutma ve varsa klasik otomatikte sıcak geçiş-sıvı geçmişi kontrol edilmelidir.',
                pros: ['Sade çok nokta enjeksiyon', 'Klasik otomatik seçeneği', 'LPG için araştırılabilir temel yapı'], cons: ['Turbo kadar güçlü tork sunmaması', 'LPG’de supap takibi', 'Otomatikte tüketim artışı'],
                chronicIssues: [
                    { title: 'LPG ve kompresyon', severity: 'high', reportCount: 0, description: 'Benzin/LPG yük testi, yakıt düzeltmesi ve kompresyon yapılmadan yalnız rölantiye göre karar verilmemelidir.' },
                    { title: 'Otomatik sıvı/sıcak geçiş', severity: 'medium', reportCount: 0, description: 'Varsa otomatik tam sıcak D-R, vites ve kilitleme testine alınmalı; doğru sıvı faturası aranmalıdır.' },
                    { title: 'Soğutma/ateşleme', severity: 'medium', reportCount: 0, description: 'Çalışma sıcaklığı, fan, bobin-buji ve misfire verisi özellikle LPG’li araçta birlikte incelenmelidir.' },
                ],
            },
            {
                slug: '10-tgdi-100-120-ps-dct', name: '1.0 T-GDI 100-120 PS', fuelType: 'Benzin', transmission: '6 ileri manuel/iMT / 7DCT (yıla göre)', score: 79,
                description: 'Stonic’in turbo direkt enjeksiyonlu güçlü motorudur; güç, mild-hybrid ve şanzıman model yılına göre değişir. Turbo-ateşleme, 48V varsa enerji sistemi ve DCT kavrama davranışı VIN’e uygun incelenmelidir.',
                pros: ['Canlı performans ve tork', 'Karma kullanım verimliliği', 'DCT veya manuel seçeneği'], cons: ['Turbo/direkt enjeksiyon karmaşıklığı', 'DCT düşük hız hassasiyeti', 'Mild-hybridde ek elektrik sistemi'],
                chronicIssues: [
                    { title: 'DCT kavrama ısısı', severity: 'high', reportCount: 0, description: 'Geri-yokuş-park ve tam sıcak dur-kalkta uyarlama, sıcaklık ve hata geçmişi okunmalıdır.' },
                    { title: 'Turbo/ateşleme', severity: 'medium', reportCount: 0, description: 'Hedef-gerçek basınç, misfire ve yakıt düzeltmesi yük altında birlikte kaydedilmelidir.' },
                    { title: '48V/12V enerji sistemi', severity: 'medium', reportCount: 0, description: 'Mild-hybrid araçta akü sağlığı, DC-DC, kayış marş-jeneratörü ve düşük gerilim kodları kontrol edilmelidir.' },
                ],
            },
        ],
    },
    {
        vehicleId: 14005,
        engines: [
            {
                slug: '10-tce-90-100-ps-manuel', name: '1.0 TCe 90-100 PS', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 82,
                description: 'Captur II’nin şehir içi odaklı üç silindirli turbo giriş motorudur. Güç ve LPG/Eco-G uygulaması pazara göre değişebilir; soğutma, turbo, ateşleme, doğru yağ ve debriyaj durumu VIN’e göre kontrol edilmelidir.',
                pros: ['Sade manuel eşleşme', 'Şehir içi yeterli tork', 'Düşük tüketim potansiyeli'], cons: ['Yüklü performans sınırlı', 'Turbo ve üç silindir titreşimi', 'Güç/yakıt sürümü karışıklığı'],
                chronicIssues: [
                    { title: 'Ateşleme ve turbo basıncı', severity: 'medium', reportCount: 0, description: 'Misfire, yakıt düzeltmesi ve hedef-gerçek basınç yük altında kaydedilerek bobin, kaçak ve aktüatör ayrılmalıdır.' },
                    { title: 'Soğutma devresi', severity: 'high', reportCount: 0, description: 'Seviye, hortum/modül çevresi, fan ve çalışma sıcaklığı basınç testiyle doğrulanmalıdır.' },
                    { title: 'Debriyaj/takoz', severity: 'medium', reportCount: 0, description: 'Kalkış titremesi debriyaj, takoz veya motor teklemesinden ayrılmalı; sıcak yokuş testi yapılmalıdır.' },
                ],
            },
            {
                slug: '13-tce-130-160-ps-edc', name: '1.3 TCe 130-160 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri EDC (yıla göre)', score: 80,
                description: 'Captur II’de farklı güç sürümleri bulunan dört silindirli turbo direkt enjeksiyonlu motordur. Soğutma/termostat, ateşleme-yakıt, turbo ve EDC kavrama-mekatronik geçmişi motor/şanzıman koduyla incelenmelidir.',
                pros: ['Güçlü tork ve ara hızlanma', 'EDC ile konfor', 'Uzun yolda rahat performans'], cons: ['EDC kavrama/mekatronik maliyeti', 'Soğutma devresi takibi', 'Güç sürümleri/yazılım farkı'],
                chronicIssues: [
                    { title: 'Termostat/soğutma kaçağı', severity: 'high', reportCount: 0, description: 'Motor soğukken sıvı seviyesi, modül ve turbo hatları basınç ve sıcaklık eğrisiyle incelenmelidir. Fan kademesi, kalorifer ve geçmiş hararet kaydı birlikte doğrulanmalıdır.' },
                    { title: 'EDC sıcak kavrama', severity: 'high', reportCount: 0, description: 'Geri, yokuş, park ve sıcak dur-kalkta kavrama/ısı/hata verisiyle test yapılmalıdır.' },
                    { title: 'Ateşleme-yakıt/turbo', severity: 'medium', reportCount: 0, description: 'Yükte misfire, rail/yakıt düzeltmesi ve hedef-gerçek turbo basıncı birlikte değerlendirilmelidir.' },
                ],
            },
            {
                slug: 'etech-hybrid-140-160', name: 'E-Tech Hybrid 140-160', fuelType: 'Hibrit', transmission: 'Çok modlu debriyajsız hibrit şanzıman', score: 82,
                description: 'Model yılına göre 1.6 litrelik 140/145 PS veya yeni 1.8 litrelik 160 PS tam hibrit sürümleri kapsayan genel başlıktır. Sistemler aynı kabul edilmemeli; VIN’den nesil belirlenip batarya, çok modlu şanzıman, yazılım ve 12V sistem üretici cihazıyla test edilmelidir.',
                pros: ['Şehir içinde elektrikli sürüş ve düşük tüketim', 'Priz gerektirmeyen tam hibrit kullanım', 'Rejeneratif frenleme'], cons: ['Uzman cihaz/servis ihtiyacı', 'Sistem nesilleri arasında teknik fark', '12V akü/yazılımın çoklu uyarı üretebilmesi'],
                chronicIssues: [
                    { title: 'Yüksek voltaj batarya dengesi', severity: 'high', reportCount: 0, description: 'SoH tek başına değil hücre/blok farkı, sıcaklık, hata geçmişi ve soğuk-sıcak şarj/deşarj davranışıyla okunmalıdır.' },
                    { title: 'Çok modlu şanzıman geçişleri', severity: 'high', reportCount: 0, description: 'Benzinli motorun devreye girişi, oran seçimi ve arıza geçmişi üretici yazılımıyla uzun sürüşte izlenmelidir.' },
                    { title: '12V akü ve yazılım', severity: 'medium', reportCount: 0, description: 'Düşük 12V gerilim çoklu hibrit/iletişim uyarısı yaratabilir; akü yükü, DC-DC ve yazılım kampanyaları kontrol edilmelidir.' },
                ],
            },
        ],
    },
];
