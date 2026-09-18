import type { VehicleDNA } from './vehicle-dna';

type VehicleContentEnrichment = Pick<VehicleDNA, 'buyingGuide' | 'faqs'>
    & Partial<Pick<VehicleDNA, 'generationInfo' | 'sources'>>;

// Mevcut ve yüksek talep gören model sayfalarına eklenen özgün karar desteği.
// Buradaki metinler motor sayfalarının yerine geçmez; kullanıcıyı doğru motor
// raporuna ve ölçümlü ekspertize yönlendiren model bazlı bir kontrol katmanıdır.
export const vehicleContentEnrichment: Record<number, VehicleContentEnrichment> = {
    1: {
        generationInfo: {
            chassisCode: 'Clio V / BJA-B7A',
            marketScope: 'Türkiye ve Avrupa',
            summary: 'Beşinci nesil Clio 2019’da tanıtıldı ve Türkiye’de ağırlıklı olarak 2020-2025 model yıllarıyla görüldü. 2023 makyajı aynı neslin tasarım, donanım ve ürün gamı güncellemesidir; Clio VI ile karıştırılmamalıdır.',
            phases: [
                { years: '2020-2022', name: 'İlk seri', summary: '1.0 SCe/TCe, 1.3 TCe, Blue dCi ve E-Tech dâhil geniş ilk dönem motor gamı.' },
                { years: '2023-2025', name: 'Makyajlı seri', summary: 'Yenilenen ön yüz, esprit Alpine dâhil güncel donanımlar ve pazara göre daralan motor seçenekleri.' },
            ],
            bodyStyles: ['5 kapı hatchback'],
            turkeyEngines: ['1.0 SCe 72 PS manuel', '1.0 TCe 90/100 PS manuel veya X-Tronic', '1.3 TCe 130/140 PS EDC', '1.5 Blue dCi 85/115 PS', '1.6 E-Tech 140/145 tam hibrit'],
        },
        sources: [
            { title: 'Clio V Türkiye teknik ve donanım broşürü', publisher: 'Renault Türkiye', url: 'https://satinal.renault.com.tr/media/YeniCLIO_Ocak-2020.pdf' },
            { title: 'Clio 2019 güvenlik değerlendirmesi', publisher: 'Euro NCAP', url: 'https://www.euroncap.com/en/results/renault/clio/35877' },
            { title: 'Clio nesilleri ve model tarihçesi', publisher: 'Renault Group', url: 'https://www.renaultgroup.com/en/magazine/stories-en/the-renault-clio-our-history-your-stories/' },
        ],
        buyingGuide: {
            summary: 'Clio 5; şehir içi ölçüleri, düşük tüketimli motor seçenekleri ve güçlü ikinci el talebiyle mantıklı bir B hatchback olabilir. Doğru seçim, ilan başlığından çok motor-şanzıman kodu, servis faturaları, elektronik tarama ve soğuk/sıcak yol testinin birlikte değerlendirilmesine bağlıdır.',
            idealFor: ['Şehir içinde kolay kullanılan ve ekonomik bir hatchback arayanlar', 'Servis ve parça erişimini önemseyen kullanıcılar', 'Motor seçimini kullanım profiline göre yapmaya hazır alıcılar'],
            inspectionSteps: [
                { title: 'Motor ve şanzıman kodunu doğrulayın', description: '1.0 TCe manuel ile X-Tronic, 1.3 TCe EDC ve E-Tech aynı kontrol listesiyle incelenemez. VIN, ruhsat ve servis kaydındaki motor-şanzıman bilgilerini ilan metniyle karşılaştırın.' },
                { title: 'Aracı tamamen soğukken çalıştırın', description: 'Rölanti, ilk marş, egzoz, ateşleme sayaçları, yakıt düzeltmeleri ve yağ-soğutma sıvısı seviyesi görülmelidir. Satıcının aracı önceden ısıtmış olması önemli bir kontrol fırsatını ortadan kaldırır.' },
                { title: 'Otomatiği iki sıcaklıkta deneyin', description: 'X-Tronic veya EDC araçta soğuk D-R seçimi, geri manevra ve yokuş; tam ısındıktan sonra dur-kalk ve yük altında hızlanma denenmelidir. Titremede motor takozu ve ateşleme düzgünlüğü elenmeden şanzıman kararı verilmemelidir.' },
                { title: 'Elektronik ve 12 V sistemi tarayın', description: 'Easy Link ekran, Bluetooth, kamera, park sensörleri, kartlar ve start-stop denenmeli; 12 V akü yük testi yapılmalıdır. Birden fazla geçici uyarı düşük voltajdan çıkabileceği için modül değişiminden önce besleme kontrol edilir.' },
                { title: 'Gövde ve güvenlik geçmişini ölçün', description: 'Podye, direk, şasi uçları ve taban ölçülmeli; airbag modülü ile kemer piroteknikleri taranmalıdır. Ön cam veya tampon işlemi varsa mevcut ADAS donanımının kalibrasyon kaydı aranır.' },
            ],
            finalVerdict: 'Kayıtlı bakımı bulunan 1.0 TCe manuel günlük kullanım için sade bir tercih; otomatik isteyenler için X-Tronic veya EDC ise ancak kodu ve sıcak yol testi doğrulanınca değerlendirilebilir. Çok kısa mesafeli kullanımda dizel yerine benzinli veya hibrit seçenek genellikle daha uyumludur.',
        },
        faqs: [
            { question: 'Clio 5 hangi yılları kapsar?', answer: 'Beşinci nesil Türkiye ikinci elinde ağırlıklı olarak 2020-2025 model yıllarıyla görülür. 2023’teki değişiklik makyajdır; 2026’da başlayan Clio VI ayrı nesildir.' },
            { question: 'Clio 5 X-Tronic mi EDC mi?', answer: 'X-Tronic sürekli değişken oranlı, EDC ise çift kavramalı bir aktarmadır. Bakım ve test yöntemleri farklıdır; tercih kullanım biçimi kadar şanzıman kodu ve geçmişine göre yapılmalıdır.' },
            { question: 'Clio 5 dizel kısa mesafeye uygun mu?', answer: 'Sürekli kısa mesafe DPF ve EGR sisteminin sağlıklı rejenerasyon koşullarını zorlaştırabilir. Dizel adayda doluluk, rejenerasyon ve kullanım geçmişi teşhis cihazıyla incelenmelidir.' },
            { question: 'Clio 5 alırken en önemli kontrol nedir?', answer: 'Tek bir kontrol yeterli değildir. Soğuk motor, sıcak şanzıman yol testi, 12 V akü-elektronik taraması ve güvenlik/gövde ölçümünün birlikte yapılması gerekir.' },
        ],
    },
    2: {
        buyingGuide: {
            summary: 'Egea Sedan; geniş bagajı, yaygın servis ağı ve yüksek parça bulunabilirliğiyle aile, filo ve uzun yol kullanımında güçlü bir adaydır. İkinci elde asıl farkı motor seçimi, kilometre zinciri, kullanım tipi ve bakım kayıtlarının güvenilirliği yaratır.',
            idealFor: ['Geniş bagajlı ve erişilebilir maliyetli sedan arayan aileler', 'Uzun yol yapan ve MultiJet verimliliğinden yararlanacak kullanıcılar', 'Bakım ve kilometre geçmişini belge üzerinden doğrulayabilen alıcılar'],
            inspectionSteps: [
                { title: 'Filo ve kilometre geçmişini araştırın', description: 'Servis faturası, TÜVTÜRK kilometreleri, hasar kaydı ve kullanıcı değişimleri kronolojik karşılaştırılmalıdır. Direksiyon, pedal ve koltuk aşınması gösterge kilometresiyle uyuşmuyorsa kayıt zinciri derinleştirilir.' },
                { title: 'Motoru kullanımınıza göre seçin', description: '1.4 Fire şehir ve düşük yıllık kilometrede sade yapı sunarken 1.6 MultiJet uzun yol ve yükte daha güçlüdür. Dizel kısa mesafede kullanılmışsa DPF, EGR ve rejenerasyon geçmişi mutlaka okunmalıdır.' },
                { title: 'Dizel verilerini canlı okuyun', description: 'DPF kurum-kül, diferansiyel basınç, son rejenerasyon, EGR komutu, enjektör düzeltmeleri ve turbo hedef-gerçek basıncı birlikte incelenir. Tek uyarı veya duman üzerinden parça değişimi kararı verilmez.' },
                { title: 'Aktarma ve alt takımı yük altında deneyin', description: 'Manuelde debriyaj-volan, otomatikte soğuk-sıcak D-R ve geçişler; bozuk zeminde ön takım ile direksiyon kontrol edilir. Ticari veya yoğun kullanım izi varsa fren, lastik ve amortisör ölçümleri daha kritik hâle gelir.' },
                { title: 'ADAS ve gövde onarımını eşleştirin', description: 'Makyajlı araçlarda kamera tabanlı desteklerin gerçekten bulunduğu VIN ile doğrulanmalı; ön cam/tampon onarımında kalibrasyon kaydı aranmalıdır. Airbag, kemer ve şasi ölçümü yalnız boya kontrolünün yerine geçmez.' },
            ],
            finalVerdict: 'Düşük yıllık kilometrede bakımlı 1.4 Fire; düzenli uzun yolda 1.6 MultiJet mantıklı olabilir. En ucuz ilan yerine kilometresi, bakım faturası ve kullanım biçimi birbiriyle tutarlı araç tercih edilmelidir.',
        },
        faqs: [
            { question: 'Egea 1.4 Fire mı 1.6 MultiJet mi?', answer: 'Şehir içi ve düşük kilometrede 1.4 Fire daha sade; uzun yol ve yüklü kullanımda 1.6 MultiJet daha güçlüdür. Dizelin emisyon sistemi ve geçmişi ek kontrol gerektirir.' },
            { question: 'Egea otomatik alınır mı?', answer: 'Altı ileri otomatik, doğru bakım geçmişi ve sıcak-soğuk yol testi olumluysa değerlendirilebilir. Yağ kaçağı, D-R gecikmesi ve yük altında geçiş davranışı görülmelidir.' },
            { question: 'Egea’da kilometre nasıl doğrulanır?', answer: 'Muayene, servis, fatura, hasar ve mümkünse filo kayıtları tarih sırasıyla karşılaştırılır. Kabin aşınması yalnız destekleyici bulgudur; resmi kayıtların yerine geçmez.' },
            { question: 'Egea dizelde DPF nasıl kontrol edilir?', answer: 'Teşhis cihazıyla kurum-kül değeri, diferansiyel basınç ve rejenerasyon geçmişi okunur. Yalnız arıza lambasının sönük olması DPF’nin sağlıklı olduğunu kanıtlamaz.' },
        ],
    },
    3: {
        buyingGuide: {
            summary: 'Corolla E210, benzinli Multidrive S ve tam hibrit e-CVT seçenekleriyle dayanıklılık kadar doğru kullanım profilinin de önemli olduğu bir sedandır. Hibrit sistemde batarya verisi; benzinde şanzıman bakımı ve her iki versiyonda kaza-güvenlik geçmişi satın alma kararının merkezindedir.',
            idealFor: ['Şehir içinde verimlilik ve akıcı sürüş isteyenler', 'Uzun süre kullanmayı ve düzenli bakım yaptırmayı planlayan aileler', 'Hibrit sistemi ölçümlü raporla değerlendirecek alıcılar'],
            inspectionSteps: [
                { title: 'Benzinli ve hibriti karıştırmayın', description: '1.5 Multidrive S mekanik CVT ailesindedir; 1.8 Hybrid e-CVT güç bölüştürücü hibrit aktarımıdır. Yağ, test ve arıza yorumları birbirine uygulanmamalı; tam versiyon VIN’den doğrulanmalıdır.' },
                { title: 'Hibrit sağlık raporu alın', description: 'Hücre blok gerilim farkları, batarya sıcaklıkları, soğutma fanı ve kayıtlı kodlar üretici uyumlu cihazla okunur. Gösterge doluluğunun sürüşte hızlı değişmesi tek başına kapasite kaybı değildir.' },
                { title: 'Multidrive S’yi sıcak-soğuk deneyin', description: 'D-R seçimi, düşük hız, yokuş ve yük altında hızlanma iki sıcaklıkta test edilir. CVT’de devir ile hızın farklı artması karakter olabilir; titreme, gecikme veya kayma veriyle ayrılmalıdır.' },
                { title: 'LPG varsa motor sağlığını ölçün', description: 'Tank tarihi, kaçak, montaj, yakıt düzeltmeleri ve benzin-LPG geçişi incelenir. Düzensiz çalışmada supap açıklığı ve kompresyon ölçülmeden motor içi arıza veya sorunsuzluk hükmü verilmez.' },
                { title: 'Toyota Safety Sense ve gövdeyi kontrol edin', description: 'Ön cam, tampon veya süspansiyon işlemi varsa kamera/radar kalibrasyon belgesi aranır. Airbag, kemer piroteknikleri ve gövde ölçümüyle birlikte lastik geometrisi kontrol edilir.' },
            ],
            finalVerdict: 'Yoğun şehir kullanımında sağlık raporu temiz 1.8 Hybrid güçlü bir seçenektir; daha geleneksel kullanım isteyenler 1.5 Multidrive S’ye yönelebilir. İki versiyonda da servis geçmişi, doğru sıvı ve kaza sonrası kalibrasyon belgesi fiyat avantajından daha değerlidir.',
        },
        faqs: [
            { question: 'Corolla Hybrid bataryası nasıl kontrol edilir?', answer: 'Hücre blok farkları, sıcaklıklar, hata geçmişi ve soğutma sistemi üretici uyumlu cihazla ölçülür. Yalnız test sürüşü veya gösterge doluluğu sağlık raporu yerine geçmez.' },
            { question: 'Corolla e-CVT klasik CVT mi?', answer: 'Hayır. Hibrit e-CVT, güç bölüştürücü hibrit mimarisidir; 1.5 benzinlideki Multidrive S ile aynı mekanik düzen ve bakım yorumuna sahip değildir.' },
            { question: 'Corolla E210 LPG’ye uygun mu?', answer: 'Uygunluk motor kodu, sistem kalitesi ve bakım disiplinine bağlıdır. Montaj belgesi, yakıt düzeltmeleri, supap açıklığı ve kompresyon kontrol edilmeden genelleme yapılmamalıdır.' },
            { question: 'Corolla E210’in makyajlı kasası hangi yılda başladı?', answer: 'Türkiye ürün gamında 2023 model dönemiyle güncellenen hibrit sistem, multimedya ve güvenlik donanımları öne çıktı. Geçiş araçlarında donanım VIN üzerinden doğrulanmalıdır.' },
        ],
    },
    4: {
        buyingGuide: {
            summary: 'Megane Sedan IV, geniş bagajı ve Türkiye üretimi sayesinde güçlü servis-parça erişimi sunar. 1.3 TCe EDC ve 1.5 Blue dCi EDC arasında karar verirken yıllık kilometre, kısa mesafe oranı ve belgeli şanzıman/emisyon sistemi geçmişi belirleyicidir.',
            idealFor: ['Geniş bagajlı C sınıfı sedan isteyen aileler', 'Uzun yolda düşük tüketimi önemseyen kullanıcılar', 'EDC ve motor verilerini uzman cihazla kontrol ettirecek alıcılar'],
            inspectionSteps: [
                { title: 'Motor kodu ve model yılını eşleştirin', description: 'Megane Sedan ürün gamı yıllar içinde 1.6 atmosferik, dCi, Blue dCi ve 1.3 TCe seçenekleri taşıdı. İlandaki güç, emisyon donanımı ve şanzıman bilgisi VIN/ruhsat ile doğrulanmalıdır.' },
                { title: 'EDC’yi tam ısındıktan sonra test edin', description: 'D-R, geri manevra, yokuş ve dur-kalk testi hem soğuk hem sıcak yapılır; kavrama adaptasyonu, sıcaklık ve hata hafızası okunur. Takoz ve motor düzensizliği elenmeden kavrama kararı verilmez.' },
                { title: 'Dizel emisyon verilerini okuyun', description: 'DPF kurum-kül ve rejenerasyon, EGR komutu, enjektör düzeltmeleri ile Blue dCi’da AdBlue/SCR geçmişi incelenir. Sürekli kısa mesafe kullanım mekanik arıza olmadan da sistemi zorlayabilir.' },
                { title: 'TCe’de ateşleme ve soğutmayı ölçün', description: 'Motor tamamen soğukken rölanti, ateşleme sayacı, yakıt düzeltmesi ve yağ-soğutma kaçağı kontrol edilir; yol testinde turbo hedef-gerçek basıncı izlenir. Yazılım uygulanmış araç fabrika değerinde varsayılmaz.' },
                { title: 'Elektronik, yürüyen ve gövdeyi tarayın', description: 'R-Link/Easy Link, kartlar, park freni, kamera ve klima denenir; lastik omuzları ile ön takım ölçülür. Airbag, kemer ve şasi kayıtları boya ölçümüyle birlikte değerlendirilir.' },
            ],
            finalVerdict: 'Kısa ve karma kullanımda kayıtlı 1.3 TCe; yüksek yıllık kilometre ve düzenli uzun yolda geçmişi temiz Blue dCi daha uygun olabilir. EDC’de yalnız kısa test sürüşüne güvenmeyin; sıcak veri ve adaptasyon ölçümü olmadan karar vermeyin.',
        },
        faqs: [
            { question: 'Megane Sedan 1.3 TCe mi 1.5 Blue dCi mı?', answer: 'Düşük-orta kilometre ve şehir kullanımında 1.3 TCe; düzenli uzun yol ve yüksek kilometrede Blue dCi avantajlı olabilir. Dizelin DPF/SCR, benzinin turbo-soğutma geçmişi ölçülmelidir.' },
            { question: 'Megane EDC nasıl kontrol edilir?', answer: 'Soğuk ve sıcak D-R, geri manevra, yokuş ve dur-kalk testi yapılır; kavrama uyarlamaları, sıcaklık ve hata hafızası okunur. Titremenin takoz veya motor kaynaklı olmadığı da doğrulanır.' },
            { question: 'Megane Sedan makyajlı kasa hangi dönem?', answer: '2021 model dönemiyle tasarım, multimedya ve ürün gamı güncellemeleri öne çıkar. Geçiş araçlarında donanım ve motor bilgisi VIN üzerinden kontrol edilmelidir.' },
            { question: '1.5 Blue dCi kısa mesafede kullanılır mı?', answer: 'Kullanılabilir ancak sürekli kısa mesafe DPF rejenerasyonu ve SCR sistemini zorlayabilir. Aday araçta gerçek kullanım ve rejenerasyon geçmişi incelenmelidir.' },
        ],
    },
    11: {
        buyingGuide: {
            summary: 'T10X satın alırken klasik içten yanmalı ekspertize ek olarak yüksek voltaj bataryası, alt muhafaza, şarj geçmişi, 12 V sistem, yazılım ve hesap sahipliği birlikte incelenmelidir. Menzil ekranı tek başına batarya sağlığı değildir; ölçümlü rapor ve kontrollü şarj oturumu gerekir.',
            idealFor: ['Evde veya işte düzenli şarj erişimi bulunan kullanıcılar', 'Geniş elektrikli SUV ve dijital ekosistem isteyen aileler', 'Yazılım, batarya ve servis kayıtlarını birlikte doğrulayacak alıcılar'],
            inspectionSteps: [
                { title: 'Versiyon ve batarya paketini doğrulayın', description: 'V1/V2 donanım, standart/uzun menzil ve RWD/4More ayrımları VIN ile servis kaydından eşleştirilir. İlandaki menzil veya güç bilgisi tek başına versiyon kanıtı değildir.' },
                { title: 'Batarya sağlık ve alt gövde raporu alın', description: 'Hücre dengesi, sıcaklık, izolasyon ve kayıtlı hata geçmişi okunur; batarya muhafazası ile kaldırma noktaları liftte darbe açısından incelenir. Ekrandaki tahmini menzil geçmiş kullanıma ve iklime bağlıdır.' },
                { title: 'AC ve DC şarjı deneyin', description: 'Soket kilidi, kablo iletişimi, mümkünse AC ve uygun koşullarda DC oturumu test edilir. Şarj hızı batarya sıcaklığı ile doluluk oranı kaydedilmeden karşılaştırılmaz.' },
                { title: 'Trumore, hesap ve OTA geçmişini kontrol edin', description: 'Araç-hesap devri, dijital anahtar, uygulama komutları, navigasyon, ekranlar ve güncel yazılım sürümü denenir. Servis kayıtlarıyla açık kampanya ve tamamlanan güncellemeler eşleştirilir.' },
                { title: '12 V, ADAS, lastik ve frenleri ölçün', description: '12 V akü yük testi; kamera-radar ve çevre görüş işlevleri; lastik eşleşmesi, rot ve disk yüzeyleri kontrol edilir. Rejenerasyon nedeniyle az kullanılan mekanik frenlerde yüzey durumu ayrıca önemlidir.' },
            ],
            finalVerdict: 'Batarya ve şarj raporu temiz, hesap devri yapılabilir, yazılımı güncel ve alt gövdesi hasarsız T10X değerlendirilebilir. Satın alma fiyatı kadar ev/iş şarjı, lastik ölçüsü ve kullanım rotasının gerçek tüketim üzerindeki etkisi de hesaba katılmalıdır.',
        },
        faqs: [
            { question: 'T10X batarya sağlığı nasıl ölçülür?', answer: 'Hücre dengesi, sıcaklıklar, izolasyon ve kayıtlı hata verileri uygun teşhisle okunur; alt muhafaza fiziksel olarak incelenir. Gösterge menzili tek başına sağlık yüzdesi değildir.' },
            { question: 'T10X ikinci elde Trumore hesabı nasıl kontrol edilir?', answer: 'Araç sahipliği ve hesap devri satış sürecinde doğrulanmalı; dijital anahtar, uzaktan komutlar ve bağlantılı hizmetler yeni kullanıcıyla test edilmelidir.' },
            { question: 'T10X DC şarj hızı neden değişir?', answer: 'Batarya sıcaklığı, doluluk oranı, istasyon kapasitesi ve termal yönetim şarj eğrisini değiştirir. Tek bir düşük değer, koşullar kaydedilmeden arıza kanıtı değildir.' },
            { question: 'T10X alırken klasik ekspertiz yeterli mi?', answer: 'Hayır. Gövde ve yürüyen kontrollerine ek olarak yüksek voltaj bataryası, şarj, yazılım, 12 V sistem ve hesap sahipliği konusunda elektrikli araç uzmanlığı gerekir.' },
        ],
    },
    19: {
        buyingGuide: {
            summary: 'Tucson NX4; benzinli DCT, dizel DCT ve tam hibrit otomatik seçenekleri nedeniyle versiyona göre tamamen farklı satın alma kontrolü gerektirir. Motor ve çekiş tipi doğrulanmadan yapılan genel ekspertiz, DCT sıcaklığı, emisyon sistemi, hibrit batarya veya AWD lastik uyumu gibi önemli başlıkları kaçırabilir.',
            idealFor: ['Geniş kabinli ve güçlü donanımlı C-SUV arayan aileler', 'Motor seçimini şehir-uzun yol oranına göre yapacak kullanıcılar', 'DCT, hibrit veya AWD verilerini uzman cihazla ölçtürecek alıcılar'],
            inspectionSteps: [
                { title: 'Motor, şanzıman ve çekişi VIN’den doğrulayın', description: '1.6 T-GDI, CRDi ve Hybrid seçenekleri; 7DCT veya 6AT ile 4x2/4x4 düzenlerini kullanabilir. İlan başlığındaki güç ve çekiş bilgisi ruhsat, VIN ve servis kaydıyla eşleştirilmelidir.' },
                { title: '7DCT’yi sıcak kullanımda sınayın', description: 'DCT araçta soğuk D-R, yokuş, geri manevra ve düşük hız denenir; ardından tam ısınmışken dur-kalk tekrarlanır. Kavrama sıcaklığı, adaptasyon ve hata hafızası okunurken takoz ve motor düzgünlüğü ayrıca elenir.' },
                { title: 'Dizel emisyon veya hibrit batarya verisini okuyun', description: 'CRDi’da DPF, EGR, SCR ve enjektör; Hybrid’de hücre farkı, sıcaklık, enerji akışı ve rejeneratif fren incelenir. İki motor tipine aynı teşhis kontrol listesi uygulanmamalıdır.' },
                { title: 'AWD ve lastik çevresini kontrol edin', description: '4x4 araçta dört lastiğin ölçü, desen, aşınma ve mümkünse üretim tarihi uyumlu olmalıdır. Tam dönüş davranışı, AWD hata geçmişi, alt gövde ve aktarma yağ kaçakları incelenir.' },
                { title: 'ADAS ve kabin elektroniğini deneyin', description: 'Kamera-radar, şerit desteği, çevre görüş, park sensörleri, multimedya ve klima tek tek denenir. Ön cam veya tampon işlemi varsa kalibrasyon belgesi, birden fazla uyarıda 12 V akü testi aranır.' },
            ],
            finalVerdict: 'Şehir ağırlığında sağlık raporu temiz Hybrid; karma kullanımda T-GDI; düzenli uzun yolda CRDi uygun olabilir. DCT veya AWD adayında sıcak yol testi ve dört eş lastik doğrulaması yapılmadan yalnız düşük kilometreye güvenilmemelidir.',
        },
        faqs: [
            { question: 'Tucson NX4 hangi motor daha mantıklı?', answer: 'Şehir ağırlığında Hybrid, karma kullanımda T-GDI, düzenli uzun yolda CRDi düşünülebilir. Kesin seçim yıllık kilometre, kısa mesafe oranı ve bakım geçmişine göre yapılmalıdır.' },
            { question: 'Tucson 7DCT nasıl kontrol edilir?', answer: 'Soğuk ve tam ısınmış D-R, yokuş, geri manevra ve dur-kalk denenir; kavrama sıcaklığı, adaptasyon ve hata hafızası okunur. Takoz ve motor düzensizliği ayrıca elenir.' },
            { question: 'Tucson Hybrid bataryası nasıl test edilir?', answer: 'Hücre gerilim farkları, sıcaklıklar, hata geçmişi ve enerji akışı üretici uyumlu cihazla okunur. Rejeneratif fren ve benzinli-elektrikli geçişler yol testinde izlenir.' },
            { question: 'Tucson 4x4’te lastikler neden önemli?', answer: 'Farklı çevre ve aşınmadaki lastikler AWD sisteminde sürekli hız farkı oluşturabilir. Dört lastiğin aynı ölçüde ve yakın aşınmada olması gerekir.' },
        ],
    },
    20: {
        buyingGuide: {
            summary: 'Sportage NQ5 geniş iç mekân, güncel güvenlik donanımları ve 1.6 T-GDI motorlarıyla güçlü bir aile SUV’sidir. İkinci elde 7DCT’nin sıcak düşük hız davranışı, 4x4 aktarma-lastik uyumu, turbo-soğutma verileri ve kaza sonrası ADAS kalibrasyonu birlikte değerlendirilmelidir.',
            idealFor: ['Geniş ve donanımlı aile SUV’si arayanlar', '150 PS 4x2 ile 180 PS 4x4 farkını ihtiyacına göre seçenler', 'DCT kullanım ve bakım disiplinini uygulayacak kullanıcılar'],
            inspectionSteps: [
                { title: '150 PS 4x2 ve 180 PS 4x4 ayrımını yapın', description: 'Güç, çekiş, donanım ve model yılı ilan metniyle değil VIN ve ürün kaydıyla doğrulanmalıdır. 4x4 araçta yalnız motor gücü değil AWD bileşenleri ve lastik eşleşmesi de maliyeti etkiler.' },
                { title: '7DCT’yi kavrama ısındıktan sonra deneyin', description: 'D-R, yokuş, geri manevra ve yoğun trafik hızı soğuk ve sıcak durumda tekrarlanır. Kavrama sıcaklığı/adaptasyonu okunur; titremenin motor takozu veya ateşleme kaynaklı olmadığı doğrulanır.' },
                { title: 'Turbo ve soğutma verilerini kaydedin', description: 'Motor tamamen soğukken rölanti, ateşleme sayacı ve sıvı seviyeleri; yol testinde istenen-gerçek turbo basıncı ile çalışma sıcaklığı izlenir. Yağ ve soğutma kaçakları liftte de görülür.' },
                { title: '4x4, alt takım ve lastikleri birlikte inceleyin', description: 'Dört lastiğin ölçü ve aşınması karşılaştırılır; tam dönüş, AWD hata hafızası ve alt muhafaza kontrol edilir. Jant darbesi, omuz aşınması veya uyumsuz lastik varsa geometri ölçümü yapılır.' },
                { title: 'Kamera-radar ve donanımı doğrulayın', description: 'Şerit, acil fren, kör nokta, çevre kamera ve park destekleri donanıma göre test edilir. Ön cam, tampon veya süspansiyon onarımında kalibrasyon belgesi ve açık kampanya sorgusu istenir.' },
            ],
            finalVerdict: 'Bakımı belgeli, sıcak DCT testi temiz ve ADAS geçmişi doğrulanmış Sportage NQ5 iyi bir aile otomobili olabilir. 4x4’e ihtiyaç yoksa 4x2 daha düşük lastik ve aktarma karmaşıklığı sunar; ihtiyaç varsa AWD avantajı doğru lastik bakımıyla korunmalıdır.',
        },
        faqs: [
            { question: 'Sportage NQ5 7DCT alınır mı?', answer: 'Bakım kaydı, adaptasyon verileri ve soğuk-sıcak yol testi olumluysa değerlendirilebilir. Yoğun sürünme trafiğinde yarım kavrama kullanımından kaçınmak gerekir.' },
            { question: 'Sportage 150 PS ile 180 PS farkı nedir?', answer: 'Türkiye gamında 150 PS seçenek ağırlıklı 4x2, 180 PS seçenek ise 4x4 düzeniyle görülür. Model yılı ve donanım VIN üzerinden doğrulanmalıdır.' },
            { question: 'Sportage 4x4 lastikleri aynı mı olmalı?', answer: 'Dört lastiğin ölçü, desen ve aşınmasının uyumlu olması aktarma sisteminin doğru çalışması için önemlidir. Belirgin çevre farkı bulunan lastikler birlikte kullanılmamalıdır.' },
            { question: 'Sportage NQ5 alırken ADAS neden kontrol edilmeli?', answer: 'Ön cam veya tampon onarımı kamera-radar hizasını etkileyebilir. Uyarı lambası olmasa bile kalibrasyon belgesi ve işlev testi aranmalıdır.' },
        ],
    },
    21: {
        buyingGuide: {
            summary: 'Peugeot 2008 P24; PureTech benzinli, BlueHDi dizel, 48 V Hybrid ve E-2008 elektrikli seçenekleriyle tek bir teknik kontrol listesine sığmaz. Motor yılı ve kodu doğrulandıktan sonra triger/yağ sistemi, emisyon sistemi, hibrit/elektrik bataryası ve EAT8/e-DCS6 aktarımı ayrı değerlendirilmelidir.',
            idealFor: ['Şehir içinde kompakt fakat yüksek oturumlu araç isteyenler', 'Motor teknolojisini kullanım profiline göre seçebilen alıcılar', 'Bakım standardı ve yazılım kayıtlarını belgeyle doğrulatacak kullanıcılar'],
            inspectionSteps: [
                { title: 'Motor neslini ve kodunu kesinleştirin', description: 'PureTech, BlueHDi, Hybrid 145 ve E-2008 aynı kasa altında farklı yıllarda sunuldu. Yağ, triger, batarya ve şanzıman yorumu ancak üretim tarihi ile motor kodu belirlendikten sonra yapılır.' },
                { title: 'PureTech bakım ve yağlama geçmişini inceleyin', description: 'İlgili motor koduna uygun yağ standardı, değişim faturaları, triger sistemi ve yağ basıncı geçmişi uzman tarafından doğrulanır. Güncel 48 V hibrit motor önceki PureTech uygulamalarıyla otomatik olarak aynı kabul edilmez.' },
                { title: 'Dizel veya elektrik sistemini veriden değerlendirin', description: 'BlueHDi’da DPF, EGR, AdBlue/SCR ve enjektör; E-2008’de hücre dengesi, kullanılabilir kapasite, izolasyon, termal yönetim ve şarj geçmişi okunur. Ekran menzili sağlık raporu değildir.' },
                { title: 'Aktarmayı sıcak-soğuk test edin', description: 'EAT8’de D-R ve yük altında geçişler; e-DCS6’da 48 V enerji akışı ve kavrama adaptasyonu; elektriklide tek oranlı aktarım sesi incelenir. Takoz ve motor düzgünlüğü ayrı kontrol edilir.' },
                { title: 'i-Cockpit ve ADAS ergonomisini deneyin', description: 'Sürücü kendi oturuşunda gösterge görüşünü kontrol etmeli; ekran, klima, kamera-radar ve park sistemleri denenmelidir. Ön cam veya tampon işlemi varsa kalibrasyon kaydı aranır.' },
            ],
            finalVerdict: '2008’in doğru versiyonu kullanım biçimine göre seçildiğinde güçlü bir kompakt SUV olabilir. PureTech’te bakım standardı, BlueHDi’da kısa mesafe geçmişi, Hybrid’de 48 V/e-DCS6 verisi ve E-2008’de batarya-şarj raporu satın alma öncesi vazgeçilmezdir.',
        },
        faqs: [
            { question: 'Peugeot 2008 PureTech alırken neye bakılır?', answer: 'Motor koduna uygun yağ standardı, bakım faturaları, triger sistemi durumu ve yağ basıncı geçmişi uzman tarafından kontrol edilmelidir. Motor nesilleri birbirine genellenmemelidir.' },
            { question: '2008 EAT8 ile e-DCS6 aynı mı?', answer: 'Hayır. EAT8 tork konvertörlü otomatik, e-DCS6 ise 48 V hibrit sistemle bütünleşik çift kavramalı aktarımdır. Test ve bakım yöntemleri farklıdır.' },
            { question: 'E-2008 bataryası nasıl kontrol edilir?', answer: 'Kullanılabilir kapasite, hücre farkları, sıcaklık, izolasyon ve hata geçmişi okunur; alt gövde ve AC/DC şarj denenir. Tahmini menzil tek başına yeterli değildir.' },
            { question: 'Peugeot 2008 dizel kısa mesafeye uygun mu?', answer: 'Sürekli kısa mesafe DPF rejenerasyonu ve SCR sistemini zorlayabilir. Aday araçta kurum-kül, rejenerasyon ve AdBlue hata geçmişi ölçülmelidir.' },
        ],
    },
    12012: {
        buyingGuide: {
            summary: 'Volkswagen Taigo, Polo temelli MQB A0 altyapısını coupe SUV gövdeyle birleştirir. 1.0 TSI veya 1.5 TSI motor ile manuel/DSG seçimine göre soğuk çalışma, turbo-soğutma, silindir kapatma ve DQ200 kavrama kontrolleri önem kazanır.',
            idealFor: ['Kompakt ölçülü fakat SUV oturuşlu otomobil isteyenler', 'TSI-DSG bakım ve kullanım disiplinine dikkat edecek alıcılar', 'Şehir ve uzun yol arasında dengeli kullanım yapanlar'],
            inspectionSteps: [
                { title: 'Güç ve şanzıman seçeneğini doğrulayın', description: '1.0 TSI farklı model yıllarında 95, 110 veya 115 PS; manuel ya da DSG olarak görülebilir. 1.5 TSI 150 PS ve donanım bilgisi VIN/servis kaydıyla eşleştirilir.' },
                { title: 'TSI’ı tamamen soğukken inceleyin', description: 'Rölanti, ateşleme sayacı, yakıt düzeltmesi, turbo hedef-gerçek basıncı ve yağ-soğutma kaçağı kontrol edilir. Üç silindirli 1.0 TSI’ın normal titreşimi tekleme veya takoz sorunundan veriyle ayrılır.' },
                { title: 'DSG’yi sıcak düşük hızda sınayın', description: 'Soğuk D-R ve yokuş testinden sonra araç ısıtılarak geri manevra ve dur-kalk tekrarlanır. Kavrama uyarlamaları, sıcaklık ve mekatronik kayıtları okunur; yalnız sürüş hissiyle revizyon kararı verilmez.' },
                { title: '1.5 TSI ACT geçişini değerlendirin', description: 'Sabit hızda silindir kapatma geçişi, ateşleme verileri ve yazılım kaydı izlenir. Hafif geçiş hissi tek başına arıza değildir; sürekli sarsıntı ateşleme, takoz ve adaptasyonla birlikte araştırılır.' },
                { title: 'Front Assist ve gövde geometrisini kontrol edin', description: 'Ön cam veya tampon işlemi varsa kamera-radar kalibrasyonu aranır; lastik omuzları, jant ve dört teker geometrisi ölçülür. Ekran, Full Link, park sistemi ve 12 V akü de denenir.' },
            ],
            finalVerdict: 'Şehir ağırlığında 1.0 TSI, daha güçlü ara hızlanma isteyenler için 1.5 TSI uygundur; DSG seçilecekse sıcak düşük hız testi zorunludur. Temiz servis kaydı ve doğru lastik-geometri durumu, yalnız donanım seviyesinden daha değerlidir.',
        },
        faqs: [
            { question: 'Taigo 1.0 TSI mı 1.5 TSI mı?', answer: '1.0 TSI günlük ve şehir kullanımında yeterli-ekonomik; 1.5 TSI daha güçlü ara hızlanma sunar. Yıllık kilometre, yük ve performans beklentisi belirleyicidir.' },
            { question: 'Taigo DSG nasıl kontrol edilir?', answer: 'Soğuk ve sıcak D-R, geri manevra, yokuş ve dur-kalk denenir; kavrama adaptasyonu, sıcaklık ve mekatronik hata geçmişi okunur.' },
            { question: 'Taigo 6R veya 6C mi?', answer: 'Hayır. 6R/6C kodları beşinci nesil Polo için kullanılır. Taigo’nun platform/gövde kimliği ayrıdır ve model sayfasında CS/MQB A0 olarak belirtilir.' },
            { question: 'Taigo’da ön cam değişimi neden önemli?', answer: 'Kamera tabanlı sürüş destekleri ön cam işlemi sonrasında kalibrasyon gerektirebilir. Parça kodu ve kalibrasyon belgesi kontrol edilmelidir.' },
        ],
    },
    12017: {
        buyingGuide: {
            summary: 'Qashqai J12’de 1.3 mild hybrid X-Tronic ile e-POWER aynı “hibrit” başlığı altında görünse de çalışma biçimleri farklıdır. Mild hybridde benzinli motor tekerleklere mekanik olarak bağlıyken e-POWER’da tekerlekleri elektrik motoru çevirir; bu yüzden ekspertiz kontrolü güç ünitesine göre ayrılmalıdır.',
            idealFor: ['Güncel güvenlik donanımlı aile crossover’ı arayanlar', 'Mild hybrid ile e-POWER farkını kullanımına göre değerlendirenler', 'CVT veya elektrikli çekiş verilerini uzman teşhisle doğrulatacak alıcılar'],
            inspectionSteps: [
                { title: 'Mild hybrid ve e-POWER ayrımını doğrulayın', description: '1.3 mild hybrid 158 PS’de X-Tronic ve donanıma göre 4x4 bulunabilir; e-POWER’da 190 PS elektrik motoru tekerlekleri çevirir. İlandaki “elektrikli” ifadesi e-POWER’ın haricî şarj edilen EV olduğu anlamına gelmez.' },
                { title: 'X-Tronic bakım ve sıcaklık geçmişini inceleyin', description: 'Mild hybridde doğru sıvı/bakım faturası, sıcaklık ve hata kayıtları görülür; soğuk-sıcak D-R ile yük altında hızlanma denenir. CVT devirlenmesi kayma kanıtı sayılmadan veriyle karşılaştırılır.' },
                { title: 'e-POWER enerji akışını test edin', description: 'Çekiş motoru, inverter, yüksek voltaj bataryası ve jeneratör motorunun hata-sıcaklık verileri okunur. Motor devrinin yol hızından bağımsız değişebilmesi sistem karakteridir; anormal ses ve titreşim ayrıca araştırılır.' },
                { title: '4x4 ve lastik eşleşmesini kontrol edin', description: 'Mild hybrid 4x4 araçta dört lastiğin ölçü ve aşınması uyumlu olmalı; AWD hata hafızası ile tam dönüş davranışı incelenmelidir. Alt gövde ve aktarma bağlantıları liftte görülür.' },
                { title: 'ProPILOT, kamera ve 12 V sistemi deneyin', description: 'Donanıma göre ProPILOT, şerit, acil fren, çevre kamera ve park destekleri test edilir. Cam/tampon işlemi varsa kalibrasyon; çoklu uyarıda 12 V akü ve yazılım geçmişi doğrulanır.' },
            ],
            finalVerdict: 'Düzenli otoyol ve geleneksel sürüş hissinde mild hybrid; şehirde elektrik motoru tepkisi isteyen fakat şarj etmeyecek kullanıcıda e-POWER daha uygun olabilir. Her iki seçenekte de güç ünitesi, bakım ve yazılım kayıtları yalnız kısa test sürüşünden daha belirleyicidir.',
        },
        faqs: [
            { question: 'Qashqai e-POWER elektrikli otomobil mi?', answer: 'Tekerlekleri elektrik motoru çevirir ancak enerji için benzinli jeneratör motoru kullanır; haricî şarj edilmez ve benzin gerektirir.' },
            { question: 'Qashqai mild hybrid ile e-POWER farkı nedir?', answer: 'Mild hybridde benzinli motor tekerleklere mekanik güç verir ve elektrik desteği alır. e-POWER’da tekerlekleri yalnız elektrik motoru çevirir.' },
            { question: 'Qashqai X-Tronic nasıl kontrol edilir?', answer: 'Doğru sıvı ve bakım faturası aranır; soğuk-sıcak D-R, sabit hız ve yük altında hızlanma denenir. Sıcaklık ile hata geçmişi teşhis cihazından okunur.' },
            { question: 'Qashqai e-POWER bataryası nasıl test edilir?', answer: 'Hücre farkları, sıcaklık ve hata kayıtları okunur; çekiş motoru, inverter, jeneratör ve soğutma sistemiyle birlikte enerji akışı yol testinde izlenir.' },
        ],
    },
};
