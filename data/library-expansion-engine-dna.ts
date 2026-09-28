import type { EngineChronicIssue, EngineOption, VehicleEngineData } from './engine-dna';

type FuelType = EngineOption['fuelType'];
type Severity = EngineChronicIssue['severity'];

interface IssueTemplate {
    title: string;
    severity: Severity;
    detail: string;
}

interface EngineSeed {
    slug: string;
    name: string;
    fuelType: FuelType;
    transmission: string;
    score: number;
    note: string;
    issues: [keyof typeof issueLibrary, keyof typeof issueLibrary];
}

const diagnosticNote = 'Belirti tek başına parça teşhisi değildir; motor ve şanzıman koduna uygun canlı veri, mekanik ölçüm, soğuk-sıcak yol testi ve bakım faturası birlikte değerlendirilmelidir.';

const issueLibrary = {
    vagMpiAge: {
        title: 'Ateşleme, vakum ve soğutma yaşlanması', severity: 'medium',
        detail: 'MPI motorda düzensiz rölanti veya su eksiltme varsa bobin-buji, vakum kaçakları, termostat ve devirdaim geçmişi birlikte kontrol edilmelidir.',
    },
    dq200: {
        title: 'DQ200 kuru kavrama ve mekatronik kontrolü', severity: 'high',
        detail: '7 ileri kuru kavramalı S tronic bulunan araçta geri manevra, yokuş kalkışı ve sıcak dur-kalk denenmeli; kavrama uyarlama değerleri ile hata hafızası okunmalıdır.',
    },
    vagTdiEmissions: {
        title: 'TDI DPF, EGR ve çalışma sıcaklığı', severity: 'high',
        detail: 'Kısa mesafe kullanılmış dizelde DPF kül/kurum yükü, rejenerasyon geçmişi, EGR komutu ve motorun hedef sıcaklığa ulaşması canlı veriden doğrulanmalıdır.',
    },
    vagDieselHardware: {
        title: 'TDI enjektör, turbo ve çift kütleli volan', severity: 'high',
        detail: 'Soğuk çalıştırma düzeltmeleri, turbo hedef-gerçek basıncı, karter havalandırması ve rölantide volan sesi birlikte incelenmeli; motor koduna göre parça tipi doğrulanmalıdır.',
    },
    tfsiChainOil: {
        title: 'TFSI yağ tüketimi ve zamanlama sistemi', severity: 'high',
        detail: 'Özellikle erken üretim TFSI motorlarda yağ tüketim kaydı, piston/segman revizyon faturası, zincir veya kayış tipi ve soğuk ilk çalıştırmadaki faz değerleri kontrol edilmelidir.',
    },
    tfsiCooling: {
        title: 'TFSI pompa-termostat ve soğutma devresi', severity: 'high',
        detail: 'Su pompası ve termostat çevresinde kristalleşme, genleşme kabında eksilme ve motor tam sıcakken basınç kaçağı aranmalı; doğru antifriz kaydı sorgulanmalıdır.',
    },
    multitronic: {
        title: 'Multitronic kavrama, zincir ve kontrol ünitesi', severity: 'high',
        detail: 'CVT tip Multitronic bulunan araçta doğru yağ değişim kaydı, geri vitese alma süresi, sıcak kalkış titremesi ve hızlanmada devir-oran uyumu uzman cihazla incelenmelidir.',
    },
    wetStronic: {
        title: 'Islak kavramalı S tronic bakım geçmişi', severity: 'high',
        detail: 'Şanzıman kodu VIN ile belirlenmeli; tipine uygun yağ ve filtre faturaları görülmeli, tam sıcak durumda düşük hız manevrası ile seri vites küçültmeler denenmelidir.',
    },
    vagMhev48: {
        title: '48 volt marş-jeneratör ve enerji yönetimi', severity: 'high',
        detail: 'MHEV sisteminde 48 volt akü durumu, kayışlı marş-jeneratör, DC/DC dönüştürücü ve enerji yönetimi hata geçmişi üretici uyumlu teşhis cihazıyla taranmalıdır.',
    },
    vagMhev12: {
        title: '12 volt mild-hybrid marş-jeneratör sistemi', severity: 'medium',
        detail: 'Dört silindirli MHEV sisteminde 12 volt akü testi, kayışlı marş-jeneratör, enerji geri kazanımı ve düşük gerilim hata geçmişi üretici uyumlu cihazla kontrol edilmelidir.',
    },
    valvematic: {
        title: 'Valvematic aktüatör ve rölanti davranışı', severity: 'medium',
        detail: 'Valvematic motorda arıza lambası, düzensiz rölanti veya güç kaybı varsa aktüatör öğrenme değerleri, gaz kelebeği ve yağ bakım geçmişi birlikte incelenmelidir.',
    },
    toyotaMMT: {
        title: 'M-MT debriyaj ve aktüatör aşınması', severity: 'high',
        detail: 'Robotize M-MT şanzımanda debriyaj kavrama noktası, aktüatör kalibrasyonu, yokuşta geri kaçırma ve tam sıcak vites geçişleri kontrol edilmelidir.',
    },
    toyotaDiesel: {
        title: 'D-4D enjektör, turbo ve emisyon kontrolü', severity: 'high',
        detail: 'Dizel motorda enjektör düzeltmeleri, turbo basıncı, EGR ve varsa DPF değerleri okunmalı; yağ ve yakıt filtresi bakım aralıklarının belgesi görülmelidir.',
    },
    toyotaDcat: {
        title: 'D-CAT emisyon ve soğutma sistemi', severity: 'high',
        detail: '2.2 D-CAT motorda soğutma basıncı, beyaz duman, enjektör düzeltmeleri ve NOx/DPF sistemi ayrıntılı incelenmeli; geçmiş onarım faturası VIN ile eşleştirilmelidir.',
    },
    toyotaHybrid: {
        title: 'Hibrit batarya ve soğutma kanalı', severity: 'high',
        detail: 'Yüksek voltaj batarya blok farkları, izolasyon değeri, fan ve hava kanalı temizliği ile benzinli motorun devreye giriş çıkışları hibrit uyumlu cihazla test edilmelidir.',
    },
    ecvt: {
        title: 'e-CVT transaks ve inverter soğutması', severity: 'medium',
        detail: 'Toyota e-CVT klasik kayışlı CVT değildir; transaks rulman sesi, inverter soğutma devresi ve hibrit hata geçmişi sessiz ortamda yol testiyle kontrol edilmelidir.',
    },
    toyotaTurbo: {
        title: 'Turbo benzinli motor kurum ve soğutma kontrolü', severity: 'medium',
        detail: 'Doğrudan enjeksiyonlu turbo motorda soğuk rölanti, yük altında vuruntu, emme supabı kurum belirtisi, turbo basıncı ve soğutma suyu seviyesi birlikte değerlendirilmelidir.',
    },
    cvtFluid: {
        title: 'CVT yağı, basınç ve kalkış davranışı', severity: 'high',
        detail: 'CVT bulunan araçta doğru spesifikasyonlu yağ değişimi belgelenmeli; soğuk ve sıcak kalkış, geri manevra, sabit hız ve tam yükte kayma veya uğultu aranmalıdır.',
    },
    hondaVtec: {
        title: 'i-VTEC supap ayarı ve yağ bakımı', severity: 'medium',
        detail: 'Benzinli Honda motorda soğuk ses, rölanti, supap ayar kaydı, VTEC yağ kanalı ve yağ kaçakları kontrol edilmeli; LPG varsa kompresyon ve supap boşluğu ölçülmelidir.',
    },
    hondaAuto: {
        title: 'Honda otomatik şanzıman yağ ve basınç kontrolü', severity: 'high',
        detail: 'Tork konvertörlü otomatikte yalnız doğru Honda spesifikasyonlu yağ kaydı kabul edilmeli; soğuk-sıcak D-R geçişi, vuruntu ve kilitleme davranışı yol testinde denenmelidir.',
    },
    ishift: {
        title: 'i-Shift debriyaj ve aktüatör kalibrasyonu', severity: 'high',
        detail: 'Robotize i-Shift şanzımanda debriyaj aşınma değeri, aktüatör ve kalibrasyon geçmişi okunmalı; yokuş kalkışı ile sıcak düşük hız manevraları özellikle denenmelidir.',
    },
    hondaDiesel: {
        title: 'Honda dizel DPF, EGR ve zincir kontrolü', severity: 'high',
        detail: 'i-CTDi veya i-DTEC motorun koduna göre DPF varlığı, EGR, enjektör düzeltmesi, turbo basıncı ve zamanlama sesi kontrol edilmeli; iki motor ailesi birbirine karıştırılmamalıdır.',
    },
    hondaCvt: {
        title: 'Honda CVT sıvısı ve kalkış kavraması', severity: 'high',
        detail: 'CVT sisteminde doğru HCF spesifikasyonu ve değişim faturası aranmalı; kalkış titremesi, sıcak geri manevra, sabit hız uğultusu ve arıza geçmişi kontrol edilmelidir.',
    },
    hondaCooling: {
        title: 'Soğutma, klima ve yardımcı ekipman yaşı', severity: 'medium',
        detail: 'Radyatör, termostat, hortumlar, klima kompresörü ve şarj sistemi yaşa bağlı kaçak veya ses açısından soğuk başlangıçtan fan açana kadar izlenmelidir.',
    },
    crvAwd: {
        title: 'Real Time AWD ve arka diferansiyel', severity: 'medium',
        detail: 'Dört çeker CR-V’de arka diferansiyel yağı, dar dönüşte uğultu/titreme, kardan ve aks körükleri kontrol edilmeli; dört lastiğin çevre ölçüsü uyumlu olmalıdır.',
    },
} satisfies Record<string, IssueTemplate>;

const fuelBenefits: Record<FuelType, [string, string]> = {
    Benzin: ['Kısa mesafe ve karma kullanımda dizel emisyon sistemine ihtiyaç duymaz', 'Bakımlı örnekte sessiz ve öngörülebilir çalışma karakteri'],
    Dizel: ['Uzun yolda güçlü ara hızlanma ve düşük devir torku', 'Yüksek yıllık kilometrede yakıt ekonomisi potansiyeli'],
    Hibrit: ['Şehir içinde elektrik desteğiyle düşük tüketim potansiyeli', 'e-CVT düzeninde kesintisiz ve rahat güç aktarımı'],
    Elektrik: ['Sessiz sürüş ve düşük rutin mekanik bakım ihtiyacı', 'Anlık tork ve şehir içinde yüksek enerji verimliliği'],
    LPG: ['Uygun ayarlı sistemde kilometre maliyeti avantajı', 'Yaygın servis ve yakıt erişimi'],
};

function makeEngine(seed: EngineSeed): EngineOption {
    const issues = seed.issues.map((key) => {
        const issue = issueLibrary[key];
        return {
            title: issue.title,
            description: `${issue.detail} ${diagnosticNote}`,
            severity: issue.severity,
            reportCount: 0,
        };
    });

    return {
        slug: seed.slug,
        name: seed.name,
        fuelType: seed.fuelType,
        transmission: seed.transmission,
        score: seed.score,
        description: `${seed.note} Bu motor sayfası Türkiye ikinci elindeki yaygın kombinasyonu anlatır; güç, emisyon donanımı ve şanzıman üretim yılına göre değişebildiğinden kesin teknik kimlik VIN, motor kodu ve ruhsat üzerinden doğrulanmalıdır.`,
        pros: fuelBenefits[seed.fuelType],
        cons: issues.map((issue) => issue.title),
        chronicIssues: issues,
    };
}

const e = (slug: string, name: string, fuelType: FuelType, transmission: string, score: number, note: string, issues: EngineSeed['issues']): EngineSeed =>
    ({ slug, name, fuelType, transmission, score, note, issues });

const expansionEngines: Array<{ vehicleId: number; engines: [EngineSeed, EngineSeed] }> = [
    { vehicleId: 15001, engines: [
        e('16-mpi-102-manuel-tiptronic', '1.6 MPI 102 PS', 'Benzin', '5 ileri manuel / 6 ileri Tiptronic', 82, 'Atmosferik ve çok noktadan enjeksiyonlu seçenek, A3 8P’de sade yapısı nedeniyle özellikle LPG düşünen kullanıcıların aradığı motordur.', ['vagMpiAge', 'hondaCooling']),
        e('16-tdi-105-manuel-s-tronic', '1.6 TDI 105 PS', 'Dizel', '5 ileri manuel / 7 ileri S tronic', 78, 'Common-rail 1.6 TDI ekonomik karakterlidir; kullanım profili ile DPF donanımı ve şanzıman tipi satın almadan önce netleştirilmelidir.', ['vagTdiEmissions', 'dq200']),
    ] },
    { vehicleId: 15002, engines: [
        e('14-tfsi-122-150-s-tronic', '1.4 TFSI 122-150 PS', 'Benzin', '6 ileri manuel / 7 ileri S tronic', 84, 'A3 8V’nin Türkiye’de en yaygın benzinli ailesidir; güç ve silindir kapatma donanımı motor kodu ile üretim fazına göre değişir.', ['dq200', 'tfsiCooling']),
        e('16-tdi-105-116-s-tronic', '1.6 TDI 105-116 PS', 'Dizel', '5/6 ileri manuel / 7 ileri S tronic', 80, 'Düşük tüketimiyle öne çıkan 1.6 TDI, şehir içi kısa mesafeden çok düzenli uzun yol kullanımına uygun bir seçenektir.', ['vagTdiEmissions', 'dq200']),
    ] },
    { vehicleId: 15003, engines: [
        e('16-mpi-102-manuel-multitronic', '1.6 MPI 102 PS', 'Benzin', '5 ileri manuel / Multitronic', 76, 'A4 B7’nin atmosferik giriş motorudur; performans beklentisi sınırlı tutulmalı ve otomatik araçta Multitronic kimliği mutlaka doğrulanmalıdır.', ['vagMpiAge', 'multitronic']),
        e('20-tdi-140-manuel-multitronic', '2.0 TDI 140 PS', 'Dizel', '6 ileri manuel / Multitronic', 68, 'Yüksek torklu 2.0 TDI farklı motor kodlarıyla satılmıştır; yağlama, enjektör ve şanzıman riski kod bazında incelenmelidir.', ['vagDieselHardware', 'multitronic']),
    ] },
    { vehicleId: 15004, engines: [
        e('18-tfsi-120-170-multitronic', '1.8 TFSI 120-170 PS', 'Benzin', '6 ileri manuel / Multitronic', 66, 'B8’de yaygın olan 1.8 TFSI’nin güç ve revizyon durumu üretim yılına göre değişir; yağ tüketimi iddiası ölçüm ve faturayla sınanmalıdır.', ['tfsiChainOil', 'multitronic']),
        e('20-tdi-143-190-otomatik', '2.0 TDI 143-190 PS', 'Dizel', 'Manuel / Multitronic / S tronic', 78, '2.0 TDI uzun yolda güçlüdür ancak önden çekiş ve quattro araçlarda aynı isim altında farklı şanzımanlar bulunduğu unutulmamalıdır.', ['vagTdiEmissions', 'wetStronic']),
    ] },
    { vehicleId: 15005, engines: [
        e('14-tfsi-150-s-tronic', '1.4 TFSI 150 PS', 'Benzin', '7 ileri S tronic', 86, 'B9’un verimli benzinli seçeneklerinden 1.4 TFSI, silindir kapatma ve hızlı S tronic karakterini dengeli biçimde sunar.', ['dq200', 'tfsiCooling']),
        e('20-tdi-150-190-s-tronic', '2.0 TDI 150-190 PS', 'Dizel', '7 ileri S tronic', 84, 'B9 2.0 TDI’de güç, çekiş ve emisyon donanımı üretim yılına göre değişir; düzenli uzun yol görmüş belgeli araç avantajlıdır.', ['vagTdiEmissions', 'wetStronic']),
    ] },
    { vehicleId: 15006, engines: [
        e('18-20-tfsi-s-tronic', '1.8 / 2.0 TFSI', 'Benzin', 'Manuel / Multitronic / S tronic', 70, 'İlk A5’te TFSI adı birden çok motor kodunu kapsar; yağ tüketimi, zamanlama tipi ve şanzıman eşleşmesi VIN ile ayrılmalıdır.', ['tfsiChainOil', 'multitronic']),
        e('20-tdi-s-tronic', '2.0 TDI 143-190 PS', 'Dizel', 'Manuel / Multitronic / S tronic', 77, 'A5’in 2.0 TDI seçeneği ekonomik grand tourer karakteri sunar; gövde, çekiş ve şanzıman türü aynı ilanda karıştırılmamalıdır.', ['vagDieselHardware', 'wetStronic']),
    ] },
    { vehicleId: 15007, engines: [
        e('14-tfsi-150-s-tronic', '1.4 TFSI 150 PS', 'Benzin', '6 ileri manuel / 6 ileri S tronic', 84, 'Geç dönem Q3 8U’da görülen 1.4 TFSI, önden çekişli kompakt SUV kullanımında dengeli performans sağlar.', ['tfsiCooling', 'wetStronic']),
        e('20-tdi-140-184-quattro', '2.0 TDI 140-184 PS', 'Dizel', 'Manuel / S tronic; önden çekiş/quattro', 80, 'Q3 8U’nun 2.0 TDI ailesinde güç, çekiş ve şanzıman varyantı fazladır; Haldex bakımı quattro araçta ayrıca sorgulanmalıdır.', ['vagTdiEmissions', 'wetStronic']),
    ] },
    { vehicleId: 15008, engines: [
        e('15-tfsi-150-s-tronic', '35 TFSI 1.5 150 PS', 'Benzin', '7 ileri S tronic', 87, 'İkinci nesil Q3’ün 1.5 litre turbo benzinli seçeneği, ACT silindir kapatma ve kompakt SUV kullanımını birleştirir.', ['dq200', 'tfsiCooling']),
        e('20-tdi-150-200-s-tronic', '35/40 TDI 2.0 150-200 PS', 'Dizel', '7 ileri S tronic', 84, '2.0 TDI seçeneğinde güç ve quattro durumu rozete göre değişir; emisyon donanımı kısa mesafe kullanımına karşı hassastır.', ['vagTdiEmissions', 'wetStronic']),
    ] },
    { vehicleId: 15009, engines: [
        e('20-tfsi-180-225-tiptronic', '2.0 TFSI 180-225 PS', 'Benzin', 'Tiptronic / S tronic', 70, 'İlk Q5’in 2.0 TFSI motoru güçlüdür ancak erken üretimlerde yağ tüketimi ve zamanlama geçmişi satın alma kararının merkezindedir.', ['tfsiChainOil', 'tfsiCooling']),
        e('20-tdi-170-190-s-tronic', '2.0 TDI 170-190 PS', 'Dizel', '7 ileri S tronic quattro', 78, '2.0 TDI quattro kombinasyonu uzun yola uygundur; ağır gövde nedeniyle emisyon, volan ve çift kavrama durumu birlikte ölçülmelidir.', ['vagDieselHardware', 'wetStronic']),
    ] },
    { vehicleId: 15010, engines: [
        e('20-tdi-190-204-s-tronic', '40 TDI 2.0 190-204 PS', 'Dizel', '7 ileri S tronic quattro', 85, 'İkinci nesil Q5’in dört silindirli dizeli, yüksek tork ve uzun yol ekonomisini bir araya getirir; emisyon sistemi kullanım profiline bağlıdır.', ['vagTdiEmissions', 'wetStronic']),
        e('20-tfsi-245-265-s-tronic', '45 TFSI 2.0 245-265 PS', 'Benzin', '7 ileri S tronic quattro', 83, 'Güçlü 2.0 TFSI quattro seçeneği performans odaklıdır; pompa-termostat ve şanzıman bakımının eksiksiz olması önemlidir.', ['tfsiCooling', 'wetStronic']),
    ] },
    { vehicleId: 15011, engines: [
        e('20-tdi-177-190-multitronic', '2.0 TDI 177-190 PS', 'Dizel', 'Multitronic / S tronic', 74, 'A6 C7 2.0 TDI’de çekiş düzeni şanzımanı belirler; ilan metnindeki otomatik ifadesi yerine gerçek şanzıman kodu esas alınmalıdır.', ['vagTdiEmissions', 'multitronic']),
        e('30-tdi-204-320-s-tronic', '3.0 TDI 204-320 PS', 'Dizel', 'S tronic / Tiptronic quattro', 80, 'V6 3.0 TDI yüksek tork ve rafinelik sunar; güç seviyesi, quattro ve şanzıman üretim yılına göre değişir.', ['vagDieselHardware', 'wetStronic']),
    ] },
    { vehicleId: 15012, engines: [
        e('40-tdi-20-204-mhev', '40 TDI 2.0 204 PS MHEV', 'Dizel', '7 ileri S tronic', 86, 'C8 kasa A6’nın dört silindirli dizel seçeneğinde 12 volt mild-hybrid sistemi kullanılır; üretim yılı ve elektrik donanımı VIN’den doğrulanmalıdır.', ['vagTdiEmissions', 'vagMhev12']),
        e('50-tdi-30-286-mhev', '50 TDI 3.0 286 PS MHEV', 'Dizel', '8 ileri Tiptronic quattro', 84, 'V6 dizel, quattro ve hafif hibrit desteğiyle güçlü bir uzun yol kombinasyonudur; 48 volt donanımın sağlık taraması ihmal edilmemelidir.', ['vagDieselHardware', 'vagMhev48']),
    ] },
    { vehicleId: 15013, engines: [
        e('16-valvematic-132-manuel-mmt', '1.6 Valvematic 132 PS', 'Benzin', '6 ileri manuel / M-MT', 78, 'İlk Auris’in makyajlı döneminde öne çıkan Valvematic motor, manuel veya robotize M-MT şanzımanla bulunabilir.', ['valvematic', 'toyotaMMT']),
        e('14-d4d-90-manuel-mmt', '1.4 D-4D 90 PS', 'Dizel', '6 ileri manuel / M-MT', 76, 'Ekonomik 1.4 D-4D şehirler arası kullanımda verimlidir; M-MT seçeneğinin klasik tork konvertörlü otomatik olmadığı bilinmelidir.', ['toyotaDiesel', 'toyotaMMT']),
    ] },
    { vehicleId: 15014, engines: [
        e('16-valvematic-132-multidrive-s', '1.6 Valvematic 132 PS', 'Benzin', '6 ileri manuel / Multidrive S CVT', 86, 'İkinci nesil Auris’te yaygın 1.6 Valvematic, manuel veya kayışlı Multidrive S CVT ile günlük kullanıma uygun dengeli seçenektir.', ['valvematic', 'cvtFluid']),
        e('18-hybrid-136-ecvt', '1.8 Hybrid 136 PS', 'Hibrit', 'e-CVT', 90, 'Toyota hibrit sistemi atmosferik benzinli motoru iki motor-jeneratörlü güç bölüşümlü transaksla birleştirir; klasik kayışlı CVT değildir.', ['toyotaHybrid', 'ecvt']),
    ] },
    { vehicleId: 15015, engines: [
        e('18-valvematic-147-multidrive-s', '1.8 Valvematic 147 PS', 'Benzin', '6 ileri manuel / Multidrive S CVT', 82, 'Avensis T27’nin atmosferik benzinlisi geniş aile otomobili kullanımına uygundur; CVT sıvı geçmişi ve Valvematic çalışması incelenmelidir.', ['valvematic', 'cvtFluid']),
        e('20-d4d-126-manuel', '2.0 D-4D 126 PS', 'Dizel', '6 ileri manuel', 76, '2.0 D-4D uzun yol ve tork odaklıdır; kısa mesafe geçmişi olan örnekte emisyon sistemi ve enjektör verileri önem kazanır.', ['toyotaDiesel', 'hondaCooling']),
    ] },
    { vehicleId: 15016, engines: [
        e('18-hybrid-122-ecvt', '1.8 Hybrid 122 PS', 'Hibrit', 'e-CVT', 91, 'İlk nesil C-HR’da en yaygın seçenek olan 1.8 hibrit, şehir içi verim ve yumuşak sürüş odaklı güç aktarma sistemidir.', ['toyotaHybrid', 'ecvt']),
        e('12-turbo-116-cvt', '1.2 Turbo 116 PS', 'Benzin', '6 ileri manuel / Multidrive S CVT', 80, 'Bazı pazarlarda ve Türkiye ikinci elinde görülen 1.2 turbo, hibritten farklı bakım ve sürüş karakterine sahip doğrudan enjeksiyonlu seçenektir.', ['toyotaTurbo', 'cvtFluid']),
    ] },
    { vehicleId: 15017, engines: [
        e('15-hybrid-116-ecvt', '1.5 Hybrid 116 PS', 'Hibrit', 'e-CVT; önden çekiş/AWD-i pazara göre', 91, 'Yaris Cross’un ilk döneminde sunulan üç silindirli 1.5 hibrit sistem, 116 PS toplam sistem gücü ve şehir içi verim odağıyla öne çıkar.', ['toyotaHybrid', 'ecvt']),
        e('15-hybrid-130-ecvt', '1.5 Hybrid 130 PS', 'Hibrit', 'e-CVT; önden çekiş/AWD-i pazara göre', 92, '2024 güncellemesiyle ürün gamına katılan Hybrid 130, daha güçlü motor-jeneratör desteği sunar; donanım ve pazar eşleşmesi VIN’den teyit edilmelidir.', ['toyotaHybrid', 'ecvt']),
    ] },
    { vehicleId: 15018, engines: [
        e('18-vvti-129-mmt', '1.8 VVT-i 129 PS', 'Benzin', '5 ileri manuel / M-MT', 77, 'Corolla Verso’da yaygın 1.8 VVT-i aile kullanımına uygundur; otomatik ilanların çoğundaki M-MT robotize yapısı doğru anlatılmalıdır.', ['toyotaMMT', 'vagMpiAge']),
        e('22-d4d-dcat-manuel', '2.2 D-4D / D-CAT', 'Dizel', '6 ileri manuel', 66, 'Yüksek torklu 2.2 dizel, D-4D ve D-CAT varyantlarıyla bulunur; emisyon ve soğutma geçmişi belgesiz araç yüksek risklidir.', ['toyotaDcat', 'toyotaDiesel']),
    ] },
    { vehicleId: 15019, engines: [
        e('20-ivtec-156-manuel-otomatik', '2.0 i-VTEC 156 PS', 'Benzin', '6 ileri manuel / 5 ileri otomatik', 88, 'Sekizinci nesil Avrupa Accord’un atmosferik 2.0 i-VTEC motoru, doğru bakımla dengeli ve rafine bir benzinli seçenektir.', ['hondaVtec', 'hondaAuto']),
        e('22-idtec-150-180-manuel-otomatik', '2.2 i-DTEC 150-180 PS', 'Dizel', '6 ileri manuel / 5 ileri otomatik', 80, '2.2 i-DTEC yüksek torkludur; 150 ve 180 PS varyantlarının şanzıman ile emisyon donanımı aynı kabul edilmemelidir.', ['hondaDiesel', 'hondaAuto']),
    ] },
    { vehicleId: 15020, engines: [
        e('18-ivtec-140-ishift', '1.8 i-VTEC 140 PS', 'Benzin', '6 ileri manuel / i-Shift', 80, 'Avrupa Civic hatchback’in 1.8 i-VTEC seçeneği zincirli atmosferik motordur; i-Shift robotize şanzıman klasik otomatik değildir.', ['hondaVtec', 'ishift']),
        e('22-ictdi-140-manuel', '2.2 i-CTDi 140 PS', 'Dizel', '6 ileri manuel', 74, 'Honda’nın erken Avrupa dizeli 2.2 i-CTDi güçlü ara hızlanma sunar; i-DTEC ile aynı motor sanılmamalı ve yaşa bağlı dizel bileşenleri taranmalıdır.', ['hondaDiesel', 'hondaCooling']),
    ] },
    { vehicleId: 15021, engines: [
        e('14-ivtec-100-ishift', '1.4 i-VTEC 100 PS i-Shift', 'Benzin', '6 ileri i-Shift', 76, 'İkinci nesil Jazz’ın erken dönem robotize otomatiği i-Shift, debriyajı elektronik kumanda edilen manuel temelli bir şanzımandır.', ['ishift', 'hondaVtec']),
        e('14-ivtec-100-cvt', '1.4 i-VTEC 100 PS CVT', 'Benzin', 'CVT', 86, 'Makyajlı dönemde görülen CVT seçeneği i-Shift’ten farklıdır; ilan ve ruhsatta yalnız otomatik yazması ayırt etmek için yeterli değildir.', ['hondaCvt', 'hondaVtec']),
    ] },
    { vehicleId: 15022, engines: [
        e('13-ivtec-102-cvt', '1.3 i-VTEC 102 PS', 'Benzin', '6 ileri manuel / CVT', 90, 'Üçüncü nesil Jazz’ın 1.3 atmosferik motoru şehir içi verimliliğe odaklanır; CVT bakımı belgeli örnekler tercih edilmelidir.', ['hondaCvt', 'hondaVtec']),
        e('15-ivtec-130-cvt', '1.5 i-VTEC 130 PS', 'Benzin', '6 ileri manuel / CVT', 87, 'Bazı pazarlarda bulunan 1.5 i-VTEC daha güçlü seçenektir; Türkiye’deki aracın ithalat, donanım ve parça kodu VIN ile teyit edilmelidir.', ['hondaVtec', 'hondaCvt']),
    ] },
    { vehicleId: 15023, engines: [
        e('20-ivtec-150-5at', '2.0 i-VTEC 150 PS', 'Benzin', '6 ileri manuel / 5 ileri otomatik', 85, 'Üçüncü nesil CR-V’nin atmosferik benzinlisi, tork konvertörlü otomatik ve Real Time AWD kombinasyonuyla Türkiye’de yaygındır.', ['hondaAuto', 'crvAwd']),
        e('22-ictdi-idtec-manuel', '2.2 i-CTDi / i-DTEC', 'Dizel', '6 ileri manuel', 76, 'Neslin erken ve geç dönemindeki 2.2 dizeller farklı motor ailesi adları taşır; emisyon ekipmanı ve parça seçimi üretim fazına göre yapılmalıdır.', ['hondaDiesel', 'crvAwd']),
    ] },
    { vehicleId: 15024, engines: [
        e('20-ivtec-155-5at', '2.0 i-VTEC 155 PS', 'Benzin', '6 ileri manuel / 5 ileri otomatik', 87, 'Dördüncü nesil CR-V’nin atmosferik benzinlisi sade sürüş karakteri sunar; otomatik yağ geçmişi ve AWD bakımı önemlidir.', ['hondaAuto', 'crvAwd']),
        e('16-idtec-120-160-manuel-9at', '1.6 i-DTEC 120-160 PS', 'Dizel', '6 ileri manuel / 9 ileri otomatik', 82, '1.6 i-DTEC’in 120 PS önden çekiş ve 160 PS çift turbo/AWD kombinasyonları bulunur; 9 ileri otomatik her versiyonda yoktur.', ['hondaDiesel', 'crvAwd']),
    ] },
];

export const libraryExpansionEngineDNAData: VehicleEngineData[] = expansionEngines.map((entry) => ({
    vehicleId: entry.vehicleId,
    engines: entry.engines.map(makeEngine),
}));
