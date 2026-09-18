import type { VehicleEngineData } from './engine-dna';

// Mevcut yüksek talep sayfalarında kalıp açıklama taşıyan motor kayıtlarının
// ölçümlü satın alma kontrolü ve karar desteğiyle yenilenmiş sürümleri.
export const vehicleContentEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 1,
        engines: [
            {
                slug: '10-tce-90-100-ps-manuel-xtronic',
                name: '1.0 TCe 90/100 PS',
                fuelType: 'Benzin',
                transmission: '6 ileri manuel / X-Tronic',
                score: 83,
                description: 'Clio 5’in üç silindirli 1.0 TCe motoru model yılına göre 90 veya 100 PS güçle, manuel ya da X-Tronic otomatik olarak görülebilir. Kesin güç ve aktarım VIN’den doğrulanmalı; soğuk çalışma, ateşleme, turbo-soğutma verileri ve seçilen şanzımanın sıcak yol davranışı birlikte incelenmelidir.',
                pros: ['Şehir kullanımına uygun düşük tüketim', 'Turbo torkuyla yeterli günlük esneklik', 'Manuel ve X-Tronic seçeneği'],
                cons: ['Üç silindirli rölanti karakteri', 'X-Tronic bakım geçmişi gerekli', 'Turbo-soğutma sisteminin ölçümlü kontrolü'],
                chronicIssues: [
                    { title: 'Soğuk çalışma, ateşleme ve turbo kontrolü', description: 'Motor gece boyunca beklemişken rölanti, ateşleme sayaçları, yakıt düzeltmeleri, yağ-soğutma sıvısı seviyesi ve istenen-gerçek turbo basıncı incelenmelidir. Üç silindirli normal titreşim, bobin-buji veya takoz sorunu ölçümle ayrılmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Manuel veya X-Tronic aktarma testi', description: 'Manuelde debriyaj kavrama noktası ve yük altında kaçırma; X-Tronic’te doğru sıvı kaydı, soğuk-sıcak D-R, yokuş ve hızlanma davranışı kontrol edilmelidir. Devir yükselmesi CVT karakterinden ayrılmadan kayma kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Termostat, pompa ve kaçak incelemesi', description: 'Motor soğukken sıvı seviyesi kaydedilmeli; termostat, pompa, genleşme kabı ve hortum çevresinde kurumuş antifriz izi aranmalıdır. Eksiltme varsa yalnız sıvı tamamlanmamalı, basınç testiyle kaçak kaynağı belirlenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '13-tce-130-140-ps-edc',
                name: '1.3 TCe 130/140 PS',
                fuelType: 'Benzin',
                transmission: '7 ileri EDC',
                score: 85,
                description: 'Clio 5’in 1.3 TCe motoru model yılına göre 130 veya 140 PS olarak EDC çift kavramalı şanzımanla bulunur. Performanslı kullanım ihtimali nedeniyle motor yazılımı, soğuk çalışma, turbo basıncı, soğutma devresi, EDC adaptasyonları ve tam ısınmış düşük hız davranışı birlikte kontrol edilmelidir.',
                pros: ['B sınıfında güçlü ara hızlanma', 'Yedi ileri EDC ile hızlı geçişler', 'Uzun yolda rahat ve esnek karakter'],
                cons: ['Dur-kalkta çift kavrama hassasiyeti', 'Agresif kullanımda artan tüketim ve sarf', 'Turbo-soğutma geçmişinin önemi'],
                chronicIssues: [
                    { title: 'EDC kavrama, adaptasyon ve sıcak yol testi', description: 'Soğuk D-R, geri manevra ve yokuş testinden sonra araç tam ısındığında dur-kalk tekrarlanmalı; kavrama uyarlamaları, sıcaklık ve hata hafızası okunmalıdır. Titreşimde takoz ve ateşleme düzgünlüğü elenmeden kavrama kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, ateşleme ve motor yazılımı doğrulaması', description: 'Ateşleme sayaçları, yakıt düzeltmeleri ve turbo hedef-gerçek basıncı yük altında kaydedilmeli; ECU yazılımı ile servis geçmişi kontrol edilmelidir. Sonradan performans yazılımı bulunan araç fabrika güç ve dayanıklılık koşullarında varsayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Soğutma devresi ve yağ kaçağı kontrolü', description: 'Termostat, pompa, hortumlar ve genleşme kabı çevresinde kaçak izi aranmalı; fan çalışma sıcaklığı izlenmelidir. Yağ veya su eksiltme beyanı ölçümlü takip ve basınç testi olmadan normal kabul edilmemelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '15-blue-dci-85-115-ps-manuel',
                name: '1.5 Blue dCi 85/115 PS',
                fuelType: 'Dizel',
                transmission: '6 ileri manuel',
                score: 81,
                description: 'Clio 5’in 1.5 Blue dCi motoru Türkiye ilk dönem ürün gamında 85 ve 115 PS güç seçenekleriyle yer aldı. İkinci elde kesin motor kodu VIN’den doğrulanmalı; DPF, EGR, SCR/AdBlue, enjektör düzeltmeleri, turbo basıncı, debriyaj-volan ve kısa mesafe kullanım geçmişi birlikte incelenmelidir.',
                pros: ['Uzun yolda düşük yakıt tüketimi', '115 PS sürümde güçlü dizel torku', 'Altı ileri manuel aktarma'],
                cons: ['Kısa mesafede DPF doluluk riski', 'SCR/AdBlue ve EGR teşhis ihtiyacı', 'Debriyaj-volan maliyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR ve SCR/AdBlue taraması', description: 'DPF kurum-kül, diferansiyel basınç ve rejenerasyon geçmişi; EGR komutu ve SCR/AdBlue hata kayıtları okunmalıdır. Kısa mesafe kaynaklı doluluk, sensör veya mekanik arızadan ayrılmadan temizlik ya da parça değişimi yapılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Enjektör, turbo ve soğuk çalışma testi', description: 'Motor tamamen soğukken ilk marş, rölanti ve duman gözlenmeli; enjektör düzeltmeleri, yakıt basıncı ile istenen-gerçek turbo basıncı kaydedilmelidir. Kızdırma, akü ve kaçaklar elenmeden enjektör veya turbo kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Debriyaj, volan ve kilometre zinciri', description: 'Yüksek viteste kaçırma, kalkış titreşimi ve rölanti volan sesi kontrol edilmeli; motor takozları ayrıca incelenmelidir. Servis, muayene ve bakım kilometreleri kronolojik karşılaştırılarak yoğun kullanım geçmişi araştırılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-e-tech-140-145-ps-hibrit',
                name: '1.6 E-Tech 140/145 PS',
                fuelType: 'Hibrit',
                transmission: 'Çok modlu hibrit otomatik',
                score: 86,
                description: 'Clio 5 E-Tech, 1.6 atmosferik benzinli motoru iki elektrik motoru, yüksek voltaj bataryası ve çok modlu hibrit aktarım ile birleştirir; model yılına göre 140 veya 145 PS olarak anılır. Batarya hücreleri, enerji geçişleri, soğutma, yazılım, 12 V akü ve rejeneratif fren davranışı uzman teşhisiyle değerlendirilmelidir.',
                pros: ['Şehir içinde elektrik destekli düşük tüketim', 'Haricî şarj gerektirmeyen tam hibrit yapı', 'Kavramasız elektrikli ilk hareket karakteri'],
                cons: ['Karmaşık hibrit güç aktarımı', 'Uzman teşhis cihazı gereksinimi', 'Yük altında benzinli motor sesinin artması'],
                chronicIssues: [
                    { title: 'Hibrit batarya hücre ve sıcaklık raporu', description: 'Hücre blok farkları, sıcaklık sensörleri, izolasyon ve kayıtlı hata kodları okunmalı; soğutma hava girişi kontrol edilmelidir. Gösterge doluluk seviyesinin sık değişmesi sistemin enerji yönetimidir ve tek başına kapasite kaybı değildir.', severity: 'medium', reportCount: 0 },
                    { title: 'Çok modlu aktarım ve yazılım kontrolü', description: 'Soğuk-sıcak kalkış, geri manevra ve farklı yüklerde benzinli-elektrikli geçişler izlenmeli; tahrik sistemi yazılımı ile servis güncellemeleri doğrulanmalıdır. Geçiş sesi veya hissi hata kaydı görülmeden mekanik arıza sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: '12 V akü, fren ve ortak soğutma sistemi', description: '12 V akü yük altında ölçülmeli; rejeneratif-mekanik fren geçişi, disk yüzeyleri, motor ve güç elektroniği soğutma sıcaklıkları incelenmelidir. Çoklu uyarıda yüksek voltaj parçasından önce besleme ve yazılım elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
];
