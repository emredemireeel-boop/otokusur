import type { VehicleEngineData } from './engine-dna';

export const secondHandDemandEngineDNAData: VehicleEngineData[] = [
    {
        vehicleId: 1014,
        engines: [
            {
                slug: '16-twinport-115-ps-manuel-otomatik', name: '1.6 Twinport 115 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / 4 ileri otomatik', score: 78,
                description: 'Astra H 1.6 Twinport 115 PS atmosferik benzinli motor, manuel veya klasik dört ileri otomatikle Türkiye ikinci elinde yaygındır. Soğuk çalışma, bobin-buji, yağ ve soğutma kaçakları, triger-devirdaim kaydı, LPG varsa yakıt ayarı ve otomatik sıvısı birlikte kontrol edilmelidir.',
                pros: ['Yaygın parça ve servis bilgisi', 'Atmosferik motor karakteri', 'Manuel ve klasik otomatik seçeneği'],
                cons: ['Yaşa bağlı soğutma kaçakları', 'LPG montajına göre risk değişir', 'Dört ileri otomatik tüketimi artırır'],
                chronicIssues: [
                    { title: 'Ateşleme, Twinport ve soğutma kontrolü', description: 'Motor tamamen soğukken rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve emme sistemi kontrol edilmeli; termostat, pompa, genleşme kabı ve hortumlarda kaçak izi aranmalıdır. Bobin-buji ve vakum kaçağı elenmeden motor içi arıza kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Triger, LPG ve otomatik şanzıman geçmişi', description: 'Triger-devirdaim faturası tarih ve kilometreyle doğrulanmalı; LPG varsa kaçak, tank tarihi ve iki yakıtta çalışma karşılaştırılmalıdır. Otomatik araç sıcak-soğuk D-R ve yük altında denenerek doğru sıvı kaydı aranmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '13-cdti-90-hp-dizel-manuel', name: '1.3 CDTI 90 PS', fuelType: 'Dizel', transmission: '6 ileri manuel', score: 72,
                description: 'Astra H 1.3 CDTI 90 PS, düşük tüketimli altı ileri manuel dizel seçenektir. Yaşı nedeniyle soğuk zincir sesi ve yağlama kaydı; EGR, enjektör, turbo, debriyaj-volan ile üretim ve donanıma göre emisyon sistemi satın alma öncesinde ölçümlü incelenmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Altı ileri manuel', 'Yaygın motor ve parça bilgisi'],
                cons: ['Zincir ve yağ bakımına duyarlı', 'EGR-turbo yaşlanması', 'Şehir içi kullanım dizeli zorlar'],
                chronicIssues: [
                    { title: 'Soğuk zincir sesi ve yağlama doğrulaması', description: 'Motor gece boyunca bekledikten sonra ilk çalıştırma dinlenmeli; yağ basıncı davranışı, doğru yağ standardı ve bakım faturaları incelenmelidir. Enjektör veya aksesuar kayışı sesi ayrılmadan zincir değişimi kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'EGR, enjektör, turbo ve debriyaj-volan', description: 'EGR komutu, enjektör düzeltmeleri, yakıt basıncı ve turbo basıncı okunmalı; soğuk duman gözlenmelidir. Yüksek viteste debriyaj kaçırma, çift kütleli volan sesi ve motor takozları ayrıca kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 121,
        engines: [
            {
                slug: '14-turbo-140-ps-manuel-at6', name: '1.4 Turbo 140 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / AT6', score: 75,
                description: 'Astra J 1.4 Turbo 140 PS, turbo benzinli motoru altı ileri manuel veya tork konvertörlü otomatikle sunar. PCV-vakum sistemi, ateşleme, turbo ve soğutma, doğru yağ kaydı; manuelde debriyaj-volan, otomatikte sıcak-soğuk geçişler kontrol edilmelidir.',
                pros: ['140 PS ve güçlü ara hızlanma', 'Manuel veya klasik otomatik', 'Yaygın ikinci el arzı'],
                cons: ['PCV ve soğutma kontrolü önemli', 'Ağır kasada şehir içi tüketim', 'AT6 bakım geçmişi gerekli'],
                chronicIssues: [
                    { title: 'PCV, ateşleme, turbo ve soğutma', description: 'Soğuk rölanti, karter vakumu, ateşleme sayacı, yakıt düzeltmeleri ve turbo basıncı izlenmeli; termostat, pompa ve genleşme kabında kaçak aranmalıdır. Islık veya tekleme vakum kaçağı ve bobin elenmeden turboya bağlanmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya AT6 aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ve volan sesi; otomatikte soğuk-sıcak D-R, düşük hız, yokuş ve yük altı geçişleri denenmelidir. Vuruntuda motor takozları ve düzensiz yanma ayrıca elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '13-cdti-95-ps-manuel', name: '1.3 CDTI 95 PS', fuelType: 'Dizel', transmission: '5 ileri manuel', score: 70,
                description: 'Astra J 1.3 CDTI 95 PS, ekonomik ancak ağır gövdede sakin karakterli dizel-manuel seçenektir. Soğuk zincir sesi, doğru yağ, DPF/EGR, enjektör-turbo verileri, debriyaj ve çift kütleli volan ile gerçek kullanım profili birlikte değerlendirilmelidir.',
                pros: ['Düşük tüketim', 'Yaygın Fiat-GM dizel altyapısı', 'Manuel aktarma'],
                cons: ['Ağır kasada sınırlı performans', 'Zincir ve yağ bakımı kritik', 'Kısa mesafede DPF/EGR riski'],
                chronicIssues: [
                    { title: 'Zincir sesi, yağ basıncı ve bakım kaydı', description: 'Gece boyunca beklemiş motorda ilk çalıştırma dinlenmeli; doğru yağ standardı, değişim aralığı ve yağ basıncı davranışı incelenmelidir. Enjektör ve aksesuar sesleri ayrılmadan zincir değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DPF, EGR, enjektör, turbo ve volan', description: 'DPF doluluk-kül ile rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Debriyaj kaçırma, volan sesi ve takozlar yol testinde ayrıca değerlendirilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-cdti-136-ps-manuel-at6', name: '1.6 CDTI 136 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / AT6', score: 73,
                description: 'Makyajlı Astra J’de görülen 1.6 CDTI 136 PS, güçlü dizel torku manuel veya AT6 ile birleştirir. Soğuk zincir sesi ve yağlama, DPF/EGR, enjektör-turbo, emisyon donanımı ve seçilen şanzımanın bakım kayıtları satın alma öncesinde incelenmelidir.',
                pros: ['136 PS güçlü dizel torku', 'Uzun yolda düşük tüketim', 'Manuel ve otomatik seçeneği'],
                cons: ['Zincir sesi kontrolü gerekir', 'Emisyon sistemi maliyeti', 'AT6 bakım geçmişine duyarlı'],
                chronicIssues: [
                    { title: 'Soğuk zincir, yağlama ve motor sesi', description: 'Motor gece boyunca beklemişken zincir bölgesi dinlenmeli; doğru yağ standardı, basınç davranışı ve bakım faturası kontrol edilmelidir. Enjektör veya aksesuar kayışı sesi elenmeden zincir işlemi kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DPF-EGR ve manuel/AT6 aktarma testi', description: 'DPF kurum-kül, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Manuelde debriyaj-volan; AT6’da sıcak-soğuk geçiş, sıcaklık, yağ kaçağı ve hata hafızası incelenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 125,
        engines: [
            {
                slug: '16-ti-vct-125-ps-manuel-powershift', name: '1.6 Ti-VCT 125 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / 6 ileri PowerShift', score: 76,
                description: 'Focus 3 1.6 Ti-VCT 125 PS atmosferik benzinli motor, manuel veya altı ileri kuru kavramalı PowerShift ile bulunur. Soğuk çalışma, ateşleme ve soğutma sistemi; otomatikte kavrama, TCM, adaptasyon ve düşük hız davranışı ayrıntılı kontrol edilmelidir.',
                pros: ['Atmosferik motor karakteri', '125 PS günlük kullanıma yeterli', 'Manuel ve otomatik seçeneği'],
                cons: ['Kuru kavramalı PowerShift kontrolü kritik', 'Ağır gövdede şehir içi tüketim', 'Soğutma ve ateşleme bakımı önemli'],
                chronicIssues: [
                    { title: 'PowerShift kavrama, TCM ve adaptasyon', description: 'Otomatik araç soğuk ve sıcak durumda D-R, yokuş, geri manevra ve dur-kalk hızında denenmeli; kavrama uyarlamaları, TCM haberleşmesi, sıcaklık ve hata geçmişi okunmalıdır. Titreşimde motor takozu elenmeden kavrama kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Ti-VCT ateşleme ve soğutma kontrolü', description: 'Soğuk rölanti, ateşleme sayaçları ve yakıt düzeltmeleri izlenmeli; termostat, pompa, genleşme kabı ve hortumlarda kaçak aranmalıdır. Buji-bobin veya vakum kaçağı elenmeden düzensiz çalışma mekanik arıza sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-tdci-95-115-ps-manuel', name: '1.6 TDCi 95/115 PS', fuelType: 'Dizel', transmission: '6 ileri manuel', score: 78,
                description: 'Focus 3 1.6 TDCi, 95 ve 115 PS güç seçenekleriyle altı ileri manuel olarak yaygındır; kesin güç VIN’den doğrulanmalıdır. DPF/EGR, enjektör düzeltmeleri, turbo yağ hattı ve basıncı, debriyaj-volan ile bakım geçmişi birlikte incelenmelidir.',
                pros: ['Düşük uzun yol tüketimi', 'Yaygın servis ve parça bilgisi', 'Altı ileri manuel'],
                cons: ['Kısa mesafede DPF riski', 'Turbo yağlama geçmişi önemli', 'Yaşa bağlı enjektör-volan maliyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo verileri', description: 'DPF kurum-kül, diferansiyel basınç ve rejenerasyon geçmişi; EGR komutu, enjektör düzeltmeleri ile istenen-gerçek turbo basıncı okunmalıdır. Sensör, hortum ve bakım kaynakları ayrılmadan parça değişimi yapılmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Yağlama, debriyaj ve çift kütleli volan', description: 'Doğru yağ standardı ile değişim aralığı faturalardan doğrulanmalı; turbo yağ hattı ve kaçaklar görülmelidir. Yüksek viteste kaçırma, kalkış titreşimi, volan sesi ve motor takozları yol testinde ayrı değerlendirilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '15-tdci-120-ps-manuel-powershift', name: '1.5 TDCi 120 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / PowerShift', score: 77,
                description: 'Makyajlı Focus 3.5’in 1.5 TDCi 120 PS motoru manuel veya altı ileri PowerShift ile sunuldu. DPF/EGR, enjektör-turbo ve soğutma verileri; otomatikte şanzıman kodu, yağ bakımı, kavrama-adaptasyon ve sıcak yol testi doğrulanmalıdır.',
                pros: ['120 PS ve güçlü dizel torku', 'Düşük tüketim', 'Manuel ve otomatik seçeneği'],
                cons: ['DPF/EGR kullanım profiline duyarlı', 'PowerShift tipi VIN’den doğrulanmalı', 'Bakım gecikmesi maliyetli olabilir'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo kontrolü', description: 'DPF doluluk-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri, yakıt basıncı ve turbo basıncı okunmalıdır. Duman veya çekiş kaybında sensör ve kaçaklar mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'PowerShift kodu, sıvısı ve kavrama testi', description: 'Şanzıman kodu VIN’den doğrulanmalı; ilgili PowerShift tipinin doğru yağ faturası aranmalıdır. Soğuk-sıcak D-R, düşük hız, yokuş ve yük testinde adaptasyon, sıcaklık ve hata geçmişi incelenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 107,
        engines: [
            {
                slug: '15-dci-80-100-105-ps-manuel', name: '1.5 dCi 80/100/105 PS', fuelType: 'Dizel', transmission: '5 / 6 ileri manuel', score: 72,
                description: 'Mégane 2’nin 1.5 dCi motoru üretim yılı ve motor koduna göre 80, 100 veya 105 PS olarak bulunur; kesin sürüm VIN’den doğrulanmalıdır. Soğuk çalışma, enjektör düzeltmeleri, yakıt basıncı, turbo-yağlama, EGR ve debriyaj-volan ayrıntılı incelenmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Türkiye’de yaygın parça erişimi', 'Sedan ve hatchback seçeneği'],
                cons: ['Motor koduna göre güç ve donanım farkı', 'Yağlama-turbo geçmişi kritik', 'Yaşa bağlı enjektör maliyeti'],
                chronicIssues: [
                    { title: 'Enjektör, yakıt basıncı ve soğuk çalışma', description: 'Motor tamamen soğukken ilk marş süresi, rölanti ve egzoz dumanı gözlenmeli; enjektör düzeltmeleri ile ray basıncı okunmalıdır. Kızdırma, akü ve kompresyon elenmeden enjektör değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, yağlama, EGR ve volan kontrolü', description: 'Doğru yağ ve değişim aralığı faturalardan doğrulanmalı; turbo yağ hattı, kaçaklar, EGR komutu ve basınç değerleri incelenmelidir. Debriyaj kaçırma, volan sesi ve takozlar yol testinde ayrıca kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-16v-115-ps-manuel-otomatik', name: '1.6 16V 115 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / otomatik', score: 76,
                description: 'Mégane 2 1.6 16V 115 PS atmosferik benzinli motor, manuel ve farklı pazarlara göre otomatik aktarmalarla bulunur. Triger-devirdaim kaydı, bobin-buji, boğaz kelebeği, yağ-soğutma kaçakları, LPG uygulaması ve şanzıman tipi kontrol edilmelidir.',
                pros: ['Atmosferik ve bilinen motor', 'Yaygın parça-servis erişimi', 'LPG ile kullanılabilen yapı'],
                cons: ['Bobin ve ateşleme kontrolü', 'Triger faturası kritik', 'Otomatik tipine göre bakım değişir'],
                chronicIssues: [
                    { title: 'Bobin, buji, gaz kelebeği ve rölanti', description: 'Soğuk çalışma, ateşleme sayaçları, yakıt düzeltmeleri ve gaz kelebeği konumu okunmalı; bobinler ve bujiler ayrı test edilmelidir. Vakum kaçağı veya kirli kelebeğin etkisi elenmeden motor içi arıza kararı verilmemelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Triger, LPG ve şanzıman doğrulaması', description: 'Triger-devirdaim değişimi tarih ve kilometre faturasıyla doğrulanmalı; LPG varsa kaçak ile iki yakıtta çalışma karşılaştırılmalıdır. Otomatikte şanzıman kodu, sıvı kaydı ve sıcak-soğuk geçişler incelenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 1012,
        engines: [
            {
                slug: '15-dci-110-hp-edc-manuel', name: '1.5 dCi 110 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / EDC', score: 78,
                description: 'Mégane 3 1.5 dCi 110 PS, altı ileri manuel veya EDC çift kavramalı aktarmayla Türkiye’de yaygındır. DPF/EGR, enjektör ve turbo değerleri; manuelde debriyaj-volan, EDC’de kavrama-adaptasyon ile sıcak-soğuk yol testi birlikte yapılmalıdır.',
                pros: ['Düşük tüketim', '110 PS dengeli performans', 'Manuel ve EDC seçeneği'],
                cons: ['Kısa mesafede DPF riski', 'EDC kavrama geçmişi önemli', 'Enjektör-turbo maliyeti'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF kurum-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ile istenen-gerçek turbo basıncı okunmalıdır. Sensör, hortum ve bakım kaynakları mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya EDC aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ve volan sesi; EDC’de soğuk-sıcak D-R, geri manevra, yokuş ve dur-kalk davranışı test edilmelidir. Kavrama uyarlaması, sıcaklık ve hata hafızası okunmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-16v-110-hp-benzin-manuel', name: '1.6 16V 110 PS', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 80,
                description: 'Mégane 3 1.6 16V 110 PS, atmosferik benzinli ve altı ileri manuel seçenektir. Soğuk çalışma, ateşleme, gaz kelebeği, yağ-soğutma sistemi, triger-devirdaim kaydı, debriyaj-takozlar ve varsa LPG sistemi ölçümlü biçimde incelenmelidir.',
                pros: ['Atmosferik motor sadeliği', 'Altı ileri manuel', 'Yaygın bakım ve parça ağı'],
                cons: ['LPG montajına göre risk değişir', 'Triger kaydı gerekir', 'Turbo dizelden daha yüksek tüketim'],
                chronicIssues: [
                    { title: 'Ateşleme, rölanti ve soğutma sistemi', description: 'Motor soğukken ateşleme sayaçları, yakıt düzeltmeleri ve gaz kelebeği izlenmeli; termostat, pompa, radyatör ve hortumlarda kaçak aranmalıdır. Bobin-buji ve vakum kaçağı elenmeden mekanik arıza sonucu çıkarılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Triger, debriyaj ve LPG kontrolü', description: 'Triger-devirdaim faturası doğrulanmalı; debriyaj kaçırma, kalkış titreşimi ve motor takozları yol testinde incelenmelidir. LPG varsa tank tarihi, kaçak, iki yakıtta düzeltme ve supap açıklığı kaydı aranmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '14-tce-130-ps-manuel', name: '1.4 TCe 130 PS', fuelType: 'Benzin', transmission: '6 ileri manuel', score: 74,
                description: 'Mégane 3 1.4 TCe 130 PS, turbo benzinli performans seçeneğidir ve Türkiye’de dizel kadar yaygın değildir. Motor kodu VIN’den doğrulanmalı; soğuk çalışma, yağ seviyesi, ateşleme, turbo ve soğutma, debriyaj ile olası yazılım geçmişi incelenmelidir.',
                pros: ['130 PS canlı performans', 'Altı ileri manuel', 'Sessiz benzinli çalışma'],
                cons: ['İkinci el arzı sınırlı', 'Turbo ve soğutma bakımı önemli', 'Modifiye geçmişi riski'],
                chronicIssues: [
                    { title: 'Yağ, ateşleme, turbo ve soğutma', description: 'Soğuk yağ seviyesi, ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmeli; termostat, pompa ve hortumlarda kaçak aranmalıdır. Buji-bobin veya basınç kaçağı elenmeden turbo değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'ECU yazılımı, debriyaj ve kullanım izi', description: 'ECU yazılım bütünlüğü, motor kodu ve fabrika gücü doğrulanmalı; yüksek viteste debriyaj kaçırma ile takozlar denenmelidir. Fren, lastik ve bakım kayıtları performans veya modifiye kullanım izi açısından değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 119,
        engines: [
            {
                slug: '16-i-vtec-125-ps-manuel-5at', name: '1.6 i-VTEC 125 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / 5 ileri otomatik', score: 84,
                description: 'Civic FB7 1.6 i-VTEC 125 PS atmosferik motor, beş ileri manuel veya beş ileri tork konvertörlü otomatikle sunulur. Ateşleme ve soğutma, motor takozları, supap açıklığı, varsa LPG, otomatikte Honda şartnameli sıvı ve sıcak-soğuk geçişler kontrol edilmelidir.',
                pros: ['Atmosferik motor karakteri', 'Klasik tork konvertörlü otomatik', 'Güçlü servis ve ikinci el ağı'],
                cons: ['LPG ayarı ve supap takibi önemli', 'Beş ileri otomatik tüketimi artırır', 'Alçak gövdede alt takım kontrolü'],
                chronicIssues: [
                    { title: 'Ateşleme, supap ve soğutma kontrolü', description: 'Motor tamamen soğukken rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve supap sesi kontrol edilmeli; radyatör, fan, termostat ve pompa incelenmelidir. Buji-bobin veya ayar elenmeden kompresyon sorunu sonucu çıkarılmamalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Beş ileri otomatik sıvısı ve yol testi', description: 'Honda şartnamesine uygun şanzıman sıvısı faturası aranmalı; araç soğuk-sıcak D-R, düşük hız ve yük altında denenmelidir. Vuruntuda motor takozları ve motorun çalışma düzgünlüğü şanzımandan ayrı değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '16-i-vtec-eco-lpg-125-ps-5at', name: '1.6 i-VTEC ECO LPG 125 PS', fuelType: 'LPG', transmission: '5 ileri otomatik', score: 82,
                description: 'Civic FB7 1.6 i-VTEC ECO, 125 PS atmosferik motoru LPG ve beş ileri otomatikle birleştiren yaygın seçenektir. Tank ve hat sızdırmazlığı, benzin-LPG ayarı, supap açıklığı, ateşleme-soğutma ile otomatik şanzıman sıvısı birlikte incelenmelidir.',
                pros: ['LPG ile düşük yakıt maliyeti', 'Atmosferik motor', 'Klasik otomatik kullanım kolaylığı'],
                cons: ['LPG bileşenleri ek kontrol ister', 'Supap açıklığı takibi önemli', 'Şanzıman sıvısı geçmişi gerekir'],
                chronicIssues: [
                    { title: 'LPG kaçak, kalibrasyon ve supap açıklığı', description: 'Tank tarihi, multivalf, boru ve bağlantılar kaçak cihazıyla kontrol edilmeli; iki yakıtta ateşleme sayacı ile yakıt düzeltmeleri karşılaştırılmalıdır. Düzensiz çalışmada supap açıklığı ve kompresyon ölçülmeden motor kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Otomatik şanzıman ve soğutma sistemi', description: 'Şanzıman sıvısı faturası doğrulanıp soğuk-sıcak D-R ve yük testi yapılmalıdır. Radyatör, fan, termostat, pompa ve genleşme kabı kontrol edilmeli; hararet geçmişi basınç testiyle araştırılmalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 115,
        engines: [
            {
                slug: '16-dual-vvti-124-ps-manuel-multimode', name: '1.6 Dual VVT-i 124 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / MultiMode', score: 82,
                description: 'Corolla E150 1.6 Dual VVT-i 124 PS, beş ileri manuel veya MultiMode robotize aktarmayla bulunur. Soğuk çalışma, yağ-ateşleme ve soğutma, LPG varsa yakıt ayarı; MultiMode’da kavrama aşınması, aktüatör ve kalibrasyon birlikte kontrol edilmelidir.',
                pros: ['Atmosferik motor', 'Yaygın servis ve parça ağı', 'Manuel seçenekte sade aktarma'],
                cons: ['MultiMode sürüş ve bakımına duyarlı', 'LPG montajına göre risk değişir', 'Yaşa bağlı soğutma bakımı'],
                chronicIssues: [
                    { title: 'MultiMode aktüatör, kavrama ve kalibrasyon', description: 'Robotize araç soğuk-sıcak kalkış, geri manevra, yokuş ve düşük hızda denenmeli; kavrama aşınma noktası, aktüatör değerleri ve kalibrasyon okunmalıdır. Normal vites kesintisi ile arıza ölçümle ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Ateşleme, LPG ve soğutma kontrolü', description: 'Soğuk rölanti, yağ seviyesi, ateşleme sayaçları ve yakıt düzeltmeleri izlenmeli; LPG varsa kaçak ve iki yakıtta çalışma karşılaştırılmalıdır. Pompa, termostat ve radyatör kaçak açısından incelenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '14-d4d-90-ps-manuel-multimode', name: '1.4 D-4D 90 PS', fuelType: 'Dizel', transmission: '5 ileri manuel / MultiMode', score: 76,
                description: 'Corolla E150 1.4 D-4D 90 PS dizel, beş ileri manuel veya MultiMode robotize aktarmayla sunulmuştur. Soğuk çalışma, enjektör, turbo ve EGR verileri; debriyaj, aktüatör-kalibrasyon, yağ bakımı ve üretim yılına göre emisyon donanımı incelenmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Bilinen Toyota dizel motoru', 'Manuel seçenekte sade kullanım'],
                cons: ['Enjektör-turbo yaşlanması', 'MultiMode ek kontrol ister', 'Kısa mesafe dizel için uygun değil'],
                chronicIssues: [
                    { title: 'Enjektör, turbo, EGR ve soğuk çalışma', description: 'İlk marş, duman ve üfleme gözlenmeli; enjektör düzeltmeleri, yakıt basıncı, EGR komutu ve turbo basıncı okunmalıdır. Sensör veya hortum kaçağı elenmeden enjektör ya da turbo değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya MultiMode aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ve volan sesi; MultiMode’da kavrama aşınması, aktüatör ve kalibrasyon değerleri incelenmelidir. Soğuk-sıcak kalkış ve yokuş testi yapılmadan robot değişimi kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12020,
        engines: [
            {
                slug: '14-tsi-122-ps-dsg', name: '1.4 TSI 122 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 68,
                description: 'Passat B7 1.4 TSI 122 PS, turbo direkt enjeksiyonlu motoru manuel veya yedi ileri DSG ile sunar. Soğuk zincir sesi, yağ tüketimi, kompresyon, ateşleme, turbo-soğutma ve DQ200 kavrama-mekatronik geçmişi satın alma öncesinde ayrıntılı ölçülmelidir.',
                pros: ['122 PS ve 200 Nm günlük kullanım torku', 'Düşük vergi hacmi', 'Manuel ve DSG seçeneği'],
                cons: ['Zincir ve yağ kontrolü kritik', 'Kuru kavramalı DSG hassasiyeti', 'Ağır gövdede yüklü performans sınırlı'],
                chronicIssues: [
                    { title: 'Zincir, yağ tüketimi ve kompresyon', description: 'Motor gece boyunca beklemişken ilk çalıştırma sesi, yağ seviyesi ve egzoz dumanı izlenmeli; kompresyon ve karter basıncı ölçülmelidir. Zincir veya motor revizyonu kararı yalnız ses ya da tek seviye gözlemine dayanmamalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'DQ200 kavrama, mekatronik ve turbo', description: 'DSG araç soğuk-sıcak D-R, yokuş, geri manevra ve dur-kalkta denenmeli; kavrama uyarlamaları ve hata hafızası okunmalıdır. Ateşleme, turbo basıncı ve motor takozu elenmeden titreme kavramaya bağlanmamalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-tdi-105-ps-manuel-dsg', name: '1.6 TDI 105 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / 7 ileri DSG', score: 72,
                description: 'Passat B7 1.6 TDI 105 PS, 250 Nm torklu ekonomik dizel motordur ve manuel ya da DQ200 DSG ile bulunur. DPF/EGR, enjektör, turbo ve soğutma verileri; manuelde debriyaj-volan, DSG’de kavrama-mekatronik ve adaptasyon kontrol edilmelidir.',
                pros: ['Uzun yolda düşük tüketim', '250 Nm tork', 'Yaygın servis bilgisi'],
                cons: ['Ağır gövdede performans sınırlı', 'Kısa mesafede DPF/EGR riski', 'DQ200 ek kontrol gerektirir'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF kurum-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri, yakıt ve turbo basıncı okunmalıdır. Sensör, kaçak ve kullanım profili ayrılmadan temizlik veya parça değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya DQ200 aktarma testi', description: 'Manuelde debriyaj kaçırma ve volan sesi; DSG’de soğuk-sıcak D-R, geri manevra, yokuş ile kavrama uyarlamaları kontrol edilmelidir. Motor takozu ve motor çalışma düzgünlüğü ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '20-tdi-140-170-ps-dsg', name: '2.0 TDI 140/170 PS', fuelType: 'Dizel', transmission: '6 ileri manuel / 6 ileri DSG', score: 76,
                description: 'Passat B7 2.0 TDI, resmi motor gamında 140 ve 170 PS başta olmak üzere farklı çıkışlarla bulunur; güç ve motor kodu VIN’den doğrulanmalıdır. DPF/EGR, enjektör, turbo, soğutma ve ıslak kavramalı DSG’nin yağ-bakım geçmişi incelenmelidir.',
                pros: ['Güçlü dizel torku', 'Uzun yol ve yüklü kullanım performansı', 'Islak kavramalı DSG seçeneği'],
                cons: ['Emisyon sistemi maliyeti', 'DSG yağ bakımı kritik', 'Motor koduna göre donanım farkı'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör, turbo ve soğutma', description: 'DPF kurum-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ile turbo basıncı okunmalı; termostat ve soğutma sıcaklığı izlenmelidir. Sensör veya kaçak mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Islak kavramalı DSG yağ ve mekatronik testi', description: 'Şanzıman kodu ile doğru yağ-filtre değişim faturası doğrulanmalı; soğuk-sıcak D-R, düşük hız ve yük altında geçişler denenmelidir. Kavrama uyarlamaları, sıcaklık ve mekatronik hata geçmişi okunmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 111,
        engines: [
            {
                slug: '12-tsi-90-105-110-ps-manuel-dsg', name: '1.2 TSI 90/105/110 PS', fuelType: 'Benzin', transmission: '5/6 ileri manuel / 7 ileri DSG', score: 72,
                description: 'Polo 6R/6C 1.2 TSI motoru üretim yılı ve motor ailesine göre 90, 105 veya 110 PS olarak bulunur; zincirli EA111 ile kayışlı EA211 yapısı VIN ve motor kodundan ayrılmalıdır. Soğuk çalışma, yağ-turbo-soğutma ve DQ200 DSG ölçümlü kontrol edilmelidir.',
                pros: ['Kompakt gövdede güçlü tork', 'Manuel ve DSG seçeneği', 'Resmi gamda farklı güç seçenekleri'],
                cons: ['Motor ailesi karıştırılmamalı', 'Erken sürümde zincir kontrolü', 'DQ200 yoğun trafikte hassas'],
                chronicIssues: [
                    { title: 'Motor kodu, zincir/kayış ve soğuk çalışma', description: 'VIN üzerinden motor kodu doğrulanmalı; EA111 zincirli ve EA211 kayışlı yapının bakım planı ayrı değerlendirilmelidir. Motor gece boyunca beklemişken ses, ateşleme, yakıt düzeltmeleri, yağ seviyesi ve turbo basıncı kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                    { title: 'DQ200 kavrama, mekatronik ve soğutma', description: 'DSG araç soğuk-sıcak D-R, geri manevra, yokuş ve dur-kalkta denenmeli; kavrama uyarlamaları ve hata geçmişi okunmalıdır. Su pompası, termostat ve hortumlar kaçak açısından ayrıca incelenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-tdi-90-105-ps-manuel-dsg', name: '1.6 TDI 90/105 PS', fuelType: 'Dizel', transmission: '5 ileri manuel / 7 ileri DSG', score: 74,
                description: 'Polo 6R 1.6 TDI, resmi motor gamında 90 ve 105 PS başta olmak üzere farklı güçlerle bulunur; kesin sürüm VIN’den doğrulanmalıdır. DPF/EGR, enjektör-turbo verileri; manuelde debriyaj-volan, DSG’de DQ200 kavrama ve mekatronik kontrol edilmelidir.',
                pros: ['Düşük yakıt tüketimi', '230-250 Nm tork', 'Manuel ve DSG seçeneği'],
                cons: ['Kısa mesafede DPF riski', 'Enjektör-turbo yaşlanması', 'DQ200 ek kontrol ister'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF kurum-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ile yakıt ve turbo basıncı okunmalıdır. Sensör, hortum veya kullanım kaynakları mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya DQ200 aktarma testi', description: 'Manuelde debriyaj kaçırma ve volan sesi; DSG’de soğuk-sıcak D-R, geri manevra, yokuş ve kavrama uyarlamaları kontrol edilmelidir. Motor takozları ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '10-tsi-95-110-ps-manuel-dsg', name: '1.0 TSI 95/110 PS', fuelType: 'Benzin', transmission: '5/6 ileri manuel / 7 ileri DSG', score: 78,
                description: 'Makyajlı Polo 6C 1.0 TSI motoru resmi gamda 95 ve 110 PS güçlerle bulunur. Üç silindirli normal karakter ile tekleme ayrılmalı; doğru yağ ve triger planı, turbo-soğutma, ateşleme; DSG’de kavrama ve mekatronik verileri birlikte incelenmelidir.',
                pros: ['Düşük hacimde güçlü tork', 'Makyajlı 6C ile güncel motor', 'Manuel ve DSG seçeneği'],
                cons: ['Üç silindir titreşimi yanlış yorumlanabilir', 'Turbo-soğutma bakımı önemli', 'DSG düşük hız kullanımına duyarlı'],
                chronicIssues: [
                    { title: 'Ateşleme, turbo, triger ve soğutma', description: 'Soğuk rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmeli; motor koduna uygun triger planı doğrulanmalıdır. Pompa, termostat ve hortumlarda kaçak aranmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG kavrama ve üç silindirli motor ayrımı', description: 'DSG sıcak-soğuk düşük hızda test edilmeli; kavrama uyarlamaları ve hata geçmişi okunmalıdır. Normal üç silindir titreşimi, motor takozu, tekleme ve kavrama titremesi ayrı ayrı değerlendirilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 122,
        engines: [
            {
                slug: '12-tsi-105-110-ps-manuel-dsg', name: '1.2 TSI 105/110 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 77,
                description: 'Golf 7 1.2 TSI, üretim yılına göre 105 veya 110 PS güçle manuel ya da DQ200 DSG kullanır. Motor kodu, triger ve doğru yağ kaydı; soğuk ateşleme, turbo-soğutma, su pompası ile DSG kavrama-mekatronik verileri birlikte incelenmelidir.',
                pros: ['Günlük kullanımda yeterli tork', 'Manuel ve DSG seçeneği', 'EA211 ailesiyle düşük tüketim'],
                cons: ['DQ200 yoğun trafikte hassas', 'Su pompası-termostat kontrolü', 'Güç değeri üretim yılına göre değişir'],
                chronicIssues: [
                    { title: 'Ateşleme, turbo, triger ve soğutma', description: 'Motor kodu ile triger planı doğrulanmalı; soğuk rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmelidir. Pompa-termostat modülü ve hortumlar kaçak açısından incelenmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DQ200 kavrama ve mekatronik testi', description: 'DSG soğuk-sıcak D-R, yokuş, geri manevra ve dur-kalkta denenmeli; kavrama uyarlamaları, sıcaklık ve hata geçmişi okunmalıdır. Motor takozu veya tekleme ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '14-tsi-122-125-140-150-ps-manuel-dsg', name: '1.4 TSI 122/125/140/150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 80,
                description: 'Golf 7 1.4 TSI resmi gamda 122, 125 ve ACT dahil 140/150 PS sürümlerle bulunur; güç, motor kodu ve silindir kapatma donanımı VIN’den doğrulanmalıdır. Ateşleme, turbo-soğutma, ACT geçişi ve DQ200 DSG ayrıntılı test edilmelidir.',
                pros: ['Geniş güç ve donanım seçeneği', 'Güçlü ara hızlanma', 'ACT sürümünde verimlilik'],
                cons: ['Motor sürümü VIN’den doğrulanmalı', 'DQ200 kavrama kontrolü', 'Pompa-termostat kaçak riski'],
                chronicIssues: [
                    { title: 'Motor kodu, ACT, turbo ve soğutma', description: 'Fabrika gücü ile ACT donanımı doğrulanmalı; ateşleme, yakıt düzeltmesi ve turbo basıncı okunmalıdır. Silindir kapatma geçişi, pompa-termostat ve hortum kaçakları yol testiyle değerlendirilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG, ECU yazılımı ve kullanım izi', description: 'Kavrama uyarlamaları, mekatronik kayıtları ve sıcak düşük hız davranışı incelenmeli; ECU yazılım bütünlüğü doğrulanmalıdır. Fren, lastik ve bakım kayıtları performans kullanım izi açısından görülmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-tdi-105-110-115-ps-manuel-dsg', name: '1.6 TDI 105/110/115 PS', fuelType: 'Dizel', transmission: '5/6 ileri manuel / 7 ileri DSG', score: 78,
                description: 'Golf 7 1.6 TDI motoru üretim yılına göre 105, 110 veya 115 PS olarak manuel ya da DQ200 DSG ile bulunur. DPF/EGR, enjektör-turbo ve soğutma; manuelde debriyaj-volan, DSG’de kavrama-mekatronik ve adaptasyon incelenmelidir.',
                pros: ['Düşük uzun yol tüketimi', 'Geniş ikinci el arzı', '250 Nm civarı tork'],
                cons: ['Kısa mesafede DPF riski', 'DQ200 ek kontrol ister', 'Emisyon sensörleri maliyetli olabilir'],
                chronicIssues: [
                    { title: 'DPF, EGR, enjektör ve turbo taraması', description: 'DPF kurum-kül, diferansiyel basınç ve rejenerasyon geçmişi; EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Sensör, kaçak ve kullanım profili mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya DSG aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ve volan sesi; DSG’de soğuk-sıcak D-R, geri manevra, yokuş ve kavrama uyarlamaları incelenmelidir. Motor takozları ve motor çalışma düzgünlüğü ayrıca kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '10-tsi-110-115-ps-manuel-dsg', name: '1.0 TSI 110/115 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 79,
                description: 'Makyajlı Golf 7.5’te görülen 1.0 TSI, üretim yılına göre 110 veya 115 PS güçle manuel ya da DSG kullanır. Üç silindirin normal karakteri ile tekleme ayrılmalı; doğru yağ-triger, ateşleme, turbo-soğutma ve DSG kavrama verileri kontrol edilmelidir.',
                pros: ['Düşük hacim ve tüketim', 'Günlük kullanıma yeterli turbo torku', 'Manuel ve DSG seçeneği'],
                cons: ['Üç silindir titreşimi yanlış yorumlanabilir', 'DQ200 düşük hız kullanımına duyarlı', 'Yüklü kullanımda performans sınırlı'],
                chronicIssues: [
                    { title: 'Ateşleme, triger, turbo ve soğutma', description: 'Soğuk rölanti, ateşleme sayaçları, yakıt düzeltmeleri ve turbo basıncı izlenmeli; motor koduna uygun triger ve yağ planı doğrulanmalıdır. Pompa-termostat ve hortumlarda kaçak aranmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'DSG ile motor titreşiminin ayrılması', description: 'DSG sıcak-soğuk düşük hızda denenip kavrama uyarlamaları okunmalıdır. Normal üç silindir titreşimi, takoz, tekleme ve kavrama titremesi ayrı değerlendirilmeden parça kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '15-tsi-130-150-ps-manuel-dsg', name: '1.5 TSI 130/150 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / 7 ileri DSG', score: 81,
                description: 'Golf 7.5 1.5 TSI Evo ACT, resmi gamda 130 ve 150 PS güçlerle bulunur. Motor kodu ile fabrika yazılımı doğrulanmalı; soğuk çalışma, ACT geçişi, ateşleme, turbo-soğutma ve DQ200 DSG’nin kavrama-mekatronik durumu incelenmelidir.',
                pros: ['130/150 PS güçlü performans', 'ACT ile verimlilik', 'Makyajlı kasanın güncel motoru'],
                cons: ['Soğuk düşük devir davranışı kontrol ister', 'DQ200 bakım ve kullanımına duyarlı', 'Yazılım-modifiye geçmişi riski'],
                chronicIssues: [
                    { title: 'Soğuk çalışma, ACT ve ECU yazılımı', description: 'Motor tamamen soğukken düşük devir gaz tepkisi, ateşleme ve yakıt düzeltmeleri izlenmeli; ACT geçişi ile ECU yazılım bütünlüğü kontrol edilmelidir. Yazılım güncellemeleri servis kaydından doğrulanmalıdır.', severity: 'medium', reportCount: 0 },
                    { title: 'Turbo-soğutma ve DSG kontrolü', description: 'İstenen-gerçek turbo basıncı, pompa-termostat ve kaçaklar incelenmeli; DSG sıcak-soğuk D-R, yokuş ve dur-kalkta denenmelidir. Kavrama uyarlamaları ve mekatronik hata geçmişi okunmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 2017,
        engines: [
            {
                slug: '12-16v-75-ps-manuel-quickshift', name: '1.2 16V 75 PS', fuelType: 'Benzin', transmission: '5 ileri manuel / Quickshift', score: 78,
                description: 'Clio 3 1.2 16V 75 PS, şehir kullanımına odaklı atmosferik benzinli motordur; manuel ve pazara göre Quickshift robotize aktarmayla bulunur. Soğuk ateşleme, triger-devirdaim, soğutma ve LPG; robotizede kavrama-aktüatör kontrol edilmelidir.',
                pros: ['Basit atmosferik motor', 'Şehir içinde ekonomik kullanım', 'Yaygın parça erişimi'],
                cons: ['Yüklü kullanımda sınırlı performans', 'Triger faturası gerekir', 'Quickshift ek kontrol ister'],
                chronicIssues: [
                    { title: 'Ateşleme, triger ve soğutma sistemi', description: 'Soğuk rölanti, buji-bobin ve yakıt düzeltmeleri kontrol edilmeli; triger-devirdaim faturası doğrulanmalıdır. Termostat, pompa, radyatör ve hortumlar kaçak açısından incelenmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Quickshift veya manuel aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ve takozlar; Quickshift’te soğuk-sıcak kalkış, geri manevra, aktüatör ve kavrama aşınma noktası kontrol edilmelidir. Normal vites kesintisi arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '15-dci-65-70-85-105-ps-manuel', name: '1.5 dCi 65/70/85/105 PS', fuelType: 'Dizel', transmission: '5 / 6 ileri manuel', score: 76,
                description: 'Clio 3 1.5 dCi motoru üretim yılı ve koda göre 65, 70, 85 veya 105 PS güçlerle bulunur; kesin sürüm VIN’den doğrulanmalıdır. Soğuk çalışma, enjektör ve turbo, EGR-DPF donanımı, yağlama, debriyaj-volan ile kilometre geçmişi incelenmelidir.',
                pros: ['Çok düşük yakıt tüketimi', 'Geniş Renault servis bilgisi', 'Farklı güç seçenekleri'],
                cons: ['Motor kodu doğrulaması gerekir', 'Enjektör-turbo geçmişi önemli', 'Kısa mesafe dizel için uygun değil'],
                chronicIssues: [
                    { title: 'Enjektör, yakıt basıncı ve soğuk çalışma', description: 'Motor tamamen soğukken ilk marş, rölanti ve duman gözlenmeli; enjektör düzeltmeleri ile ray basıncı okunmalıdır. Kızdırma, akü ve kompresyon elenmeden enjektör değişimi önerilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Turbo, EGR-DPF ve debriyaj-volan', description: 'Turbo basıncı, yağ hattı, EGR komutu ve araçta varsa DPF rejenerasyon geçmişi okunmalıdır. Debriyaj kaçırma, volan sesi ve takozlar yol testinde ayrıca incelenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-16v-110-ps-manuel-otomatik', name: '1.6 16V 110 PS', fuelType: 'Benzin', transmission: '6 ileri manuel / otomatik', score: 79,
                description: 'Clio 3 1.6 16V yaklaşık 110 PS güçle daha performanslı atmosferik seçenektir; aktarma ve güç pazara göre VIN’den doğrulanmalıdır. Triger-devirdaim, bobin-buji, yağ-soğutma, LPG ve seçilen şanzımanın bakım geçmişi kontrol edilmelidir.',
                pros: ['Canlı atmosferik performans', 'Bilinen Renault motor ailesi', 'Manuel ve otomatik seçenekler'],
                cons: ['1.2 motordan daha yüksek tüketim', 'Triger kaydı kritik', 'Otomatik tipine göre risk değişir'],
                chronicIssues: [
                    { title: 'Ateşleme, triger, LPG ve soğutma', description: 'Soğuk rölanti, ateşleme sayaçları ve yakıt düzeltmeleri izlenmeli; triger-devirdaim kaydı aranmalıdır. LPG varsa kaçak ve iki yakıtta çalışma; soğutmada pompa-termostat kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Şanzıman tipi ve sıcak yol testi', description: 'Aktarma kodu VIN’den doğrulanmalı; manuelde debriyaj, otomatik veya robotizede soğuk-sıcak D-R, yokuş ve düşük hız davranışı incelenmelidir. Takozlar ayrıca elenmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 12021,
        engines: [
            {
                slug: '12-14-twinport-manuel-easytronic', name: '1.2 / 1.4 Twinport', fuelType: 'Benzin', transmission: '5 ileri manuel / Easytronic', score: 76,
                description: 'Corsa D 1.2 ve 1.4 Twinport atmosferik benzinli motorlar manuel veya Easytronic robotize aktarmayla bulunur. Motor kodu VIN’den doğrulanmalı; zincir/dağıtım, ateşleme, soğutma ve LPG; Easytronic’te kavrama, aktüatör ve kalibrasyon incelenmelidir.',
                pros: ['Atmosferik motor karakteri', 'Yaygın parça ve servis', 'Şehir kullanımına uygun'],
                cons: ['Easytronic ek kontrol ister', 'Ateşleme ve soğutma yaşlanması', '1.2 yüklü kullanımda zayıf kalabilir'],
                chronicIssues: [
                    { title: 'Ateşleme, dağıtım ve soğutma kontrolü', description: 'Motor soğukken rölanti, buji-bobin, yakıt düzeltmeleri ve motor sesi incelenmeli; doğru yağ kaydı aranmalıdır. Termostat, pompa, genleşme kabı ve hortumlar kaçak açısından kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Easytronic kavrama ve aktüatör testi', description: 'Robotize araç soğuk-sıcak kalkış, geri manevra, yokuş ve düşük hızda denenmeli; kavrama aşınma noktası, aktüatör ve kalibrasyon okunmalıdır. Akü voltajı ve takozlar ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '13-cdti-75-90-95-ps-manuel-easytronic', name: '1.3 CDTI 75/90/95 PS', fuelType: 'Dizel', transmission: '5/6 ileri manuel / Easytronic', score: 71,
                description: 'Corsa D 1.3 CDTI resmi nesilde ecoFLEX dahil farklı güçlerle bulunur; güç ve aktarma VIN’den doğrulanmalıdır. Soğuk zincir sesi, doğru yağ, EGR-DPF, enjektör-turbo; manuelde debriyaj-volan, Easytronic’te kavrama-aktüatör kontrol edilmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Yaygın Fiat-GM dizel altyapısı', 'Farklı güç seçenekleri'],
                cons: ['Zincir ve yağlama kritik', 'Kısa mesafede EGR-DPF riski', 'Easytronic maliyeti'],
                chronicIssues: [
                    { title: 'Zincir, yağlama, EGR-DPF ve turbo', description: 'Gece boyunca beklemiş motorda zincir bölgesi dinlenmeli; doğru yağ faturası aranmalıdır. EGR komutu, DPF doluluk-rejenerasyon, enjektör düzeltmeleri ve turbo basıncı okunmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Manuel veya Easytronic aktarma kontrolü', description: 'Manuelde debriyaj kaçırma ile volan sesi; Easytronic’te kavrama aşınması, aktüatör, kalibrasyon ve sıcak-soğuk kalkış incelenmelidir. Akü-şarj sistemi ayrıca ölçülmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
    {
        vehicleId: 112,
        engines: [
            {
                slug: '125-14-duratec-manuel-otomatik', name: '1.25 / 1.4 Duratec', fuelType: 'Benzin', transmission: '5 ileri manuel / otomatik', score: 78,
                description: 'Fiesta Mk7’nin 1.25 ve 1.4 atmosferik benzinli motorları sade günlük kullanım seçenekleridir; motor ve aktarma kodu VIN’den doğrulanmalıdır. Soğuk ateşleme, triger-devirdaim, soğutma, motor takozları, LPG ve otomatik varsa sıvı-geçişler kontrol edilmelidir.',
                pros: ['Atmosferik ve bilinen yapı', 'Yaygın parça erişimi', 'Şehir kullanımına uygun'],
                cons: ['Yüklü kullanımda sınırlı performans', 'Triger kaydı gerekir', 'LPG montaj kalitesine duyarlı'],
                chronicIssues: [
                    { title: 'Ateşleme, triger, soğutma ve LPG', description: 'Motor soğukken rölanti, buji-bobin ve yakıt düzeltmeleri kontrol edilmeli; triger-devirdaim faturası aranmalıdır. LPG varsa kaçak ve iki yakıtta çalışma; pompa-termostat ile hortumlar ayrıca incelenmelidir.', severity: 'medium', reportCount: 0 },
                    { title: 'Debriyaj, takoz ve otomatik aktarma', description: 'Manuelde debriyaj kaçırma ile takozlar; otomatik varsa şanzıman kodu, doğru sıvı ve sıcak-soğuk D-R davranışı kontrol edilmelidir. Vuruntu tek başına şanzıman revizyonu kanıtı sayılmamalıdır.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '10-ecoboost-100-125-140-ps-manuel-powershift', name: '1.0 EcoBoost 100/125/140 PS', fuelType: 'Benzin', transmission: '5/6 ileri manuel / PowerShift', score: 68,
                description: 'Makyajlı Fiesta Mk7.5’in 1.0 EcoBoost motoru 100, 125 ve 140 PS güçlerle; manuel veya bazı sürümlerde PowerShift ile bulunur. Yağ içinde triger, doğru yağ standardı, süzgeç-basınç, turbo-soğutma ve otomatikte kavrama-TCM kritik kontroldür.',
                pros: ['Düşük hacimde güçlü performans', 'Geniş güç seçenekleri', 'Manuelde düşük tüketim'],
                cons: ['Yağ içi triger bakımı kritik', 'Soğutma sistemi hassasiyeti', 'PowerShift ek risk ve kontrol'],
                chronicIssues: [
                    { title: 'Yağ içi triger, yağ basıncı ve soğutma', description: 'Ford onaylı yağ ve bakım faturaları doğrulanmalı; kayış durumu yalnız görsel değil süzgeç ile yağ basıncı açısından değerlendirilmelidir. Termostat, pompa, hortumlar ve turbo soğutması kaçak yönünden incelenmelidir.', severity: 'high', reportCount: 0 },
                    { title: 'PowerShift, TCM ve motor titreşimi', description: 'Otomatik araç soğuk-sıcak D-R, yokuş, geri manevra ve dur-kalkta denenmeli; kavrama uyarlamaları ile TCM hata geçmişi okunmalıdır. Üç silindir titreşimi, takoz ve tekleme ayrıca elenmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
            {
                slug: '16-ti-vct-manuel-powershift', name: '1.6 Ti-VCT', fuelType: 'Benzin', transmission: '5 ileri manuel / 6 ileri PowerShift', score: 73,
                description: 'Fiesta Mk7/Mk7.5 1.6 Ti-VCT atmosferik motor, pazara göre manuel veya DPS6 PowerShift ile sunulur; fabrika gücü VIN’den doğrulanmalıdır. Ateşleme, soğutma ve triger; otomatikte kuru kavrama, TCM, adaptasyon ve düşük hız davranışı kontrol edilmelidir.',
                pros: ['Atmosferik motor ve canlı performans', 'Manuel veya otomatik seçenek', 'Yaygın Ford servis bilgisi'],
                cons: ['PowerShift kontrolü kritik', 'Şehir içi tüketim', 'Pazar ve güç farkı VIN gerektirir'],
                chronicIssues: [
                    { title: 'PowerShift kavrama, TCM ve adaptasyon', description: 'Şanzıman soğuk ve sıcak durumda D-R, yokuş, geri manevra ve dur-kalkta denenmeli; kavrama uyarlamaları, TCM iletişimi ve hata geçmişi okunmalıdır. Motor takozu elenmeden kavrama kararı verilmemelidir.', severity: 'high', reportCount: 0 },
                    { title: 'Ti-VCT ateşleme, triger ve soğutma', description: 'Soğuk rölanti, ateşleme sayaçları ve yakıt düzeltmeleri izlenmeli; triger-devirdaim kaydı aranmalıdır. Termostat, pompa, genleşme kabı ve hortumlar kaçak açısından kontrol edilmelidir.', severity: 'medium', reportCount: 0 },
                ],
            },
            {
                slug: '14-16-tdci-manuel', name: '1.4 / 1.6 TDCi', fuelType: 'Dizel', transmission: '5 ileri manuel', score: 75,
                description: 'Fiesta Mk7’nin 1.4 ve 1.6 TDCi dizelleri düşük tüketimli manuel seçeneklerdir; hacim, güç ve emisyon donanımı VIN’den doğrulanmalıdır. Soğuk çalışma, enjektör, turbo, EGR-DPF, yağlama, debriyaj-volan ve gerçek kullanım profili birlikte incelenmelidir.',
                pros: ['Düşük yakıt tüketimi', 'Manuel şanzıman', 'Yaygın dizel servis bilgisi'],
                cons: ['Kısa mesafede DPF/EGR riski', 'Turbo yağlama geçmişi önemli', 'Yaşa bağlı enjektör maliyeti'],
                chronicIssues: [
                    { title: 'Enjektör, turbo, EGR ve DPF taraması', description: 'Soğuk ilk marş ve duman gözlenmeli; enjektör düzeltmeleri, yakıt basıncı, EGR komutu, turbo basıncı ve varsa DPF rejenerasyon geçmişi okunmalıdır. Sensör-kaçak mekanik arızadan ayrılmalıdır.', severity: 'high', reportCount: 0 },
                    { title: 'Yağlama, debriyaj, volan ve takozlar', description: 'Doğru yağ standardı ve değişim aralığı faturalardan doğrulanmalı; turbo yağ hattı görülmelidir. Yüksek viteste debriyaj kaçırma, volan sesi ve motor takozları yol testinde kontrol edilmelidir.', severity: 'high', reportCount: 0 },
                ],
            },
        ],
    },
];
