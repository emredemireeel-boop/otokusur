export interface Guide {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
    publishDate: string;
    updatedDate?: string;
    relatedVehicleIds?: number[];
}

export const guidesData: Guide[] = [
    {
        slug: 'ikinci-el-arac-almadan-once-dikkat-edilmesi-gerekenler',
        title: 'İkinci El Araç Almadan Önce Dikkat Edilmesi Gerekenler',
        excerpt: 'İkinci el araç alırken nelere dikkat etmelisiniz? Doğru araç seçiminden ekspertiz kontrolüne kadar kapsamlı rehber.',
        category: 'Satın Alma Rehberi',
        readTime: '8 dk',
        publishDate: '2025-01-15',
        content: `## İkinci El Araç Alırken Nelere Dikkat Etmelisiniz?

İkinci el araç almak, doğru adımlar atılmadığında büyük maliyetlere yol açabilir. Bu rehberde, satın alma öncesi yapmanız gereken kontrolleri adım adım anlatıyoruz.

### 1. Bütçenizi Belirleyin

Araç fiyatının yanı sıra sigorta, kasko, bakım ve olası tamir masraflarını da hesaba katın. Genel kural olarak, araç fiyatının %10-15'i kadar ek bütçe ayırmanız önerilir.

### 2. Araştırma Yapın

Almayı düşündüğünüz modelin **kronik arızalarını**, sık görülen sorunlarını ve kullanıcı deneyimlerini araştırın. OtoKusur üzerinden modelin DNA raporuna bakarak risk seviyesini öğrenebilirsiniz.

### 3. Araç Geçmişini Sorgulayın

- Kilometre manipülasyonu kontrolü
- Hasar kaydı sorgulaması
- Servis bakım geçmişi
- Muayene geçmişi
- Plaka ve ruhsat kontrolü

### 4. Dış Görünüm Kontrolü

- Boya ölçümü yaptırın
- Panel aralıklarını kontrol edin
- Lastik aşınma düzenine bakın
- Far ve stop lambaları
- Cam çatlakları ve fitil durumu

### 5. İç Mekan Kontrolü

- Koltuk ve döşeme durumu
- Klima çalışması
- Tüm elektrik aksamı (cam, ayna, kilitler)
- Gösterge paneli uyarı ışıkları
- Multimedya ve kamera sistemi

### 6. Motor ve Mekanik Kontrol

- Motor çalışma sesi (soğukken ve sıcakken)
- Egzoz dumanı rengi
- Yağ ve antifriz seviyesi
- Kayış ve hortum durumu
- Sızıntı kontrolü

### 7. Test Sürüşü

- Soğuk marş yapın
- Şehir içi ve şehir dışı sürüş deneyin
- Fren performansını test edin
- Şanzıman geçişlerini dinleyin
- Süspansiyon seslerini kontrol edin

### 8. Ekspertiz Yaptırın

Mutlaka bağımsız bir ekspertiz merkezinde detaylı kontrol yaptırın. Ekspertiz masrafı, olası büyük arızaların yanında çok küçük bir yatırımdır.

### 9. Fiyat Pazarlığı

Tespit ettiğiniz sorunları pazarlık aracı olarak kullanın. Piyasa değerini kasko değeri ve ilan karşılaştırması ile belirleyin.

### 10. Yasal Süreç

- Noter satışını mutlaka yapın
- Araç üzerinde haciz/rehin kontrolü
- Trafik cezası borcu sorgulaması
- Sigorta ve kasko transferi`
    },
    {
        slug: 'kronik-ariza-nedir',
        title: 'Kronik Arıza Nedir? Araçlarda Kronik Sorunları Anlamak',
        excerpt: 'Kronik arıza kavramını, nasıl ortaya çıktığını ve araç satın alırken neden önemli olduğunu açıklıyoruz.',
        category: 'Teknik Bilgi',
        readTime: '5 dk',
        publishDate: '2025-02-10',
        content: `## Kronik Arıza Nedir?

Kronik arıza, belirli bir araç modelinde **tasarım, üretim veya malzeme kaynaklı** olarak tekrar tekrar ortaya çıkan sorunlardır. Bu arızalar rastgele değil, sistemik bir yapıya sahiptir.

### Kronik Arıza vs Normal Arıza

| Özellik | Normal Arıza | Kronik Arıza |
|---------|-------------|-------------|
| Sıklık | Nadir | Çok yaygın |
| Sebep | Kullanım/bakım | Tasarım/üretim |
| Etkilenen araç | Tek araç | Aynı model tüm araçlar |
| Çözüm | Onarım yeterli | Revize parça/güncelleme gerekli |

### Kronik Arızalar Nasıl Ortaya Çıkar?

1. **Tasarım Hataları**: Mühendislik aşamasında fark edilmeyen zayıf noktalar
2. **Malzeme Seçimi**: Maliyet düşürmek için kullanılan düşük kaliteli malzemeler
3. **Üretim Toleransları**: Seri üretimde oluşan montaj hataları
4. **Yazılım Sorunları**: Özellikle modern araçlarda yazılım kaynaklı kronik hatalar

### Neden Önemlidir?

- Satın aldığınız aracın **gelecekte yaşayacağı sorunları** önceden bilirsiniz
- **Bakım maliyetlerini** daha doğru tahmin edebilirsiniz
- **Pazarlık gücünüz** artar
- **Doğru model seçimi** yapabilirsiniz

### OtoKusur'da Kronik Arıza Verileri

OtoKusur, her araç modeli için kullanıcı raporları ve teknik analizlerden derlenen kronik arıza verilerini sunar. Her arıza için:
- **Şiddet seviyesi** (Düşük / Orta / Yüksek)
- **Rapor sayısı** (kaç kullanıcı bildirdi)
- **Detaylı açıklama** ve çözüm önerileri`
    },
    {
        slug: 'aracta-motor-arizasi-nasil-anlasilir',
        title: 'Araçta Motor Arızası Nasıl Anlaşılır?',
        excerpt: 'Motor arızasının belirtileri, kontrol yöntemleri ve dikkat edilmesi gereken uyarı işaretleri hakkında bilgi edinin.',
        category: 'Teknik Bilgi',
        readTime: '6 dk',
        publishDate: '2025-03-05',
        content: `## Motor Arızası Belirtileri

Motor, aracın kalbidir. Erken teşhis, büyük masraflardan kurtarır. İşte dikkat etmeniz gereken belirtiler:

### Görsel Belirtiler

- **Egzoz dumanı**: Beyaz duman (antifriz sızıntısı), mavi duman (yağ yakma), siyah duman (zengin karışım)
- **Motor altında sızıntı**: Yağ, antifriz veya yakıt sızıntısı
- **Gösterge uyarıları**: Motor arıza lambası, yağ basınç uyarısı, sıcaklık uyarısı

### İşitsel Belirtiler

- **Tıkırtı sesi**: Supap ayarı veya hidrolik lifter sorunu
- **Vuruntu sesi**: Piston veya krank mili problemi (ciddi)
- **Islık sesi**: Turbo kaçağı veya kayış gevşemesi
- **Gürültülü rölanti**: Enjektör veya bujiye sorunu

### Performans Belirtileri

- Güç kaybı ve hızlanma problemi
- Rölantide titreme
- Yakıt tüketiminde artış
- Yağ tüketiminde artış
- Zor marş veya marş atmama

### Motor Kontrol Listesi

1. ✅ Yağ seviyesi ve rengi (açık altın rengi olmalı)
2. ✅ Antifriz seviyesi ve rengi
3. ✅ Kayış ve hortum durumu
4. ✅ Hava filtresi temizliği
5. ✅ Bujilerin durumu
6. ✅ Egzoz emisyon kontrolü
7. ✅ OBD arıza kodu okutma

### Ne Zaman Servise Gitmeli?

- Motor arıza lambası yandığında
- Anormal sesler duyduğunuzda
- Performans kaybı hissettiğinizde
- Yağ veya antifriz tüketimi başladığında`
    },
    {
        slug: 'sanziman-sorunu-olan-arac-alinir-mi',
        title: 'Şanzıman Sorunu Olan Araç Alınır mı?',
        excerpt: 'Şanzıman arızaları, belirtileri, tamir maliyetleri ve ikinci el araçta şanzıman kontrolü hakkında detaylı rehber.',
        category: 'Satın Alma Rehberi',
        readTime: '7 dk',
        publishDate: '2025-04-20',
        content: `## Şanzıman Sorunları: Bilmeniz Gerekenler

Şanzıman arızası, araç alım sürecinde en çok korkulan konulardan biridir. Haklı olarak — çünkü şanzıman tamiri en pahalı onarımlardan biridir.

### Şanzıman Türleri ve Riskleri

#### Manuel Şanzıman
- **Risk**: Düşük
- **Sorunlar**: Debriyaj aşınması, vites kolaylığı kaybı
- **Maliyet**: Genellikle uygun

#### Otomatik (Torque Converter)
- **Risk**: Orta
- **Sorunlar**: Yağ kaçağı, konvertör aşınması
- **Maliyet**: Orta-yüksek

#### DSG / DCT (Çift Kavramalı)
- **Risk**: Yüksek
- **Sorunlar**: Kavrama seti, mekatronik ünite
- **Maliyet**: Çok yüksek (20.000-60.000 TL)

#### CVT (Sürekli Değişken)
- **Risk**: Orta
- **Sorunlar**: Kayış/zincir aşınması, ısınma
- **Maliyet**: Yüksek

### Şanzıman Arızası Belirtileri

- Vites geçişlerinde sarsıntı veya gecikme
- Kayma hissi (devir yükselir ama araç hızlanmaz)
- Anormal sesler (vınlama, çıtırtı)
- Şanzıman uyarı lambası
- Dur-kalk trafikte titreme
- Geri viteste gecikme

### Şanzıman Kontrolü Nasıl Yapılır?

1. Soğuk marşta ilk vites geçişini dinleyin
2. Dur-kalk trafikte 1-2 vites geçişlerini test edin
3. Hızlı hızlanma ve yavaşlamada performansı kontrol edin
4. Yokuş kalkışında kayma olup olmadığına bakın
5. Şanzıman yağ rengine bakın (pembe/kırmızı olmalı, kahverengi kötü işaret)

### Sonuç: Alınır mı?

Şanzıman sorunu olan araç **düşük fiyata** alınabilir ancak:
- Tamir maliyetini fiyattan düşürün
- Kronik bir sorunsa (DSG mekatronik gibi) tekrarlama riskini bilin
- OtoKusur'dan modelin şanzıman kronik arıza geçmişini kontrol edin`
    },
    {
        slug: 'ekspertiz-raporunda-nelere-bakilir',
        title: 'Ekspertiz Raporunda Nelere Bakılır?',
        excerpt: 'Ekspertiz raporunun içeriği, hangi kontrollerin yapıldığı ve raporu nasıl okumanız gerektiğini anlattık.',
        category: 'Satın Alma Rehberi',
        readTime: '6 dk',
        publishDate: '2025-05-15',
        content: `## Ekspertiz Raporu Nedir?

Ekspertiz raporu, aracın mekanik, elektrik, kaporta ve genel durumunu gösteren profesyonel bir değerlendirme belgesidir.

### Ekspertiz Raporunda Neler Kontrol Edilir?

#### 1. Boya Ölçümü
- Her panelin boya kalınlığı ölçülür
- Fabrika değerleri (90-150 mikron) ile karşılaştırılır
- Boyalı, değişen veya orijinal panel belirlenir

| Mikron Aralığı | Durum |
|----------------|-------|
| 80-150 | Orijinal boya |
| 150-300 | Boyalı (rötuşlu) |
| 300-500 | Boyalı (hasar sonrası) |
| 500+ | Macunlu veya çift kat boya |

#### 2. Kaporta Kontrolü
- Panel aralıkları
- Vida ve cıvata kontrolleri
- Kaynak izleri
- Şase ve havuz kontrolü

#### 3. Mekanik Kontrol
- Motor durumu ve sesler
- Şanzıman performansı
- Fren sistemi
- Süspansiyon durumu
- Direksiyon sistemi

#### 4. Elektronik Kontrol
- OBD arıza kodu tarama
- Tüm uyarı lambaları
- Sensör kontrolleri
- Multimedya ve kamera

#### 5. İç Mekan
- Koltuk ve döşeme
- Klima performansı
- Cam mekanizmaları
- Güneşlik ve ayna

### Ekspertiz Raporunu Nasıl Okumalısınız?

- **Yeşil**: Orijinal, sorunsuz
- **Sarı**: Boyalı ama kabul edilebilir
- **Kırmızı**: Değişen parça veya ciddi hasar

### Ekspertiz Ne Kadara Mal Olur?

2025 itibarıyla kapsamlı ekspertiz ücreti 1.500-4.000 TL arasında değişmektedir. Bu yatırım, potansiyel onbinlerce liralık sürprizlerin önüne geçer.

### OtoKusur Önerisi

Ekspertiz yaptırmadan önce OtoKusur'dan aracın **kronik arıza raporunu** inceleyin. Böylece ekspertiz sırasında hangi noktalara özel dikkat edilmesi gerektiğini bilirsiniz.`
    },
    {
        slug: 'lpg-donusumunde-dikkat-edilmesi-gerekenler',
        title: 'LPG Dönüşümünde Dikkat Edilmesi Gerekenler',
        excerpt: 'LPG dönüşümü yaparken motor uyumluluğu, marka seçimi ve bakım gereksinimleri hakkında bilmeniz gerekenler.',
        category: 'Teknik Bilgi',
        readTime: '7 dk',
        publishDate: '2025-06-10',
        content: `## LPG Dönüşümü: Bilmeniz Gereken Her Şey

LPG dönüşümü, yakıt maliyetlerini %40-50 oranında düşürebilir. Ancak her motor LPG'ye uygun değildir ve yanlış dönüşüm ciddi motor hasarına yol açabilir.

### Hangi Motorlar LPG'ye Uygundur?

#### Uygun Motorlar
- **Atmosferik benzinli motorlar** — en uygun adaylar
- **Port enjeksiyonlu (MPI)** motorlar — ideal
- **Düşük sıkıştırma oranına sahip motorlar** — sorunsuz çalışır

#### Dikkatli Olunması Gerekenler
- **Turbo benzinli motorlar** — bazıları uygun ama uzman görüşü şart
- **Doğrudan enjeksiyonlu (TSI/GDI)** — özel LPG sistemi gerektirir
- **CVT şanzımanlı araçlar** — bazı uyumluluk sorunları olabilir

#### Uygun Olmayanlar
- **Dizel motorlar** — LPG dönüşümü yapılmaz
- **Hibrit araçlar** — genellikle önerilmez

### LPG Marka Seçimi

| Marka | Tip | Fiyat Aralığı | Özellik |
|-------|-----|---------------|---------|
| BRC | Sıralı | Orta-Yüksek | İtalyan kalitesi, yaygın servis |
| Landi Renzo | Sıralı | Orta-Yüksek | Güvenilir, iyi performans |
| Prins | Sıralı | Yüksek | Premium, doğrudan enjeksiyon uyumu |
| Atiker | Sıralı | Orta | Yerli üretim, uygun fiyat |
| Lovato | Sıralı | Orta | İtalyan, güvenilir |

### Dönüşüm Sonrası Dikkat Edilecekler

1. İlk 1.000 km benzinle karışık kullanın
2. 10.000 km'de bir LPG filtresi değiştirin
3. Supap ayarını düzenli kontrol ettirin
4. Kış aylarında benzinle çalıştırıp LPG'ye geçin
5. Beyin ayarını yetkili serviste yaptırın

### Maliyet Hesaplama

- Dönüşüm maliyeti: 8.000-20.000 TL (2025 fiyatları)
- Amortisman süresi: Genellikle 15.000-25.000 km
- Yıllık tasarruf: Ortalama 10.000-20.000 TL (kullanıma bağlı)

### OtoKusur Önerisi

LPG dönüşümü düşünüyorsanız, önce OtoKusur'dan aracınızın motorunun LPG uyumluluğunu ve kronik sorunlarını kontrol edin. Bazı motorlarda LPG ile supap yanması riski daha yüksektir.`
    },
    {
        slug: 'otomatik-sanziman-turleri-ve-guvenilirlik',
        title: 'Otomatik Şanzıman Türleri ve Güvenilirlik Karşılaştırması',
        excerpt: 'Torque converter, DSG, CVT, EDC, PowerShift — hangi şanzıman daha güvenilir? Detaylı karşılaştırma.',
        category: 'Teknik Bilgi',
        readTime: '8 dk',
        publishDate: '2025-07-01',
        content: `## Otomatik Şanzıman Türleri: Hangisi Güvenilir?

Otomatik şanzıman seçimi, araç alımında en kritik kararlardan biridir. Yanlış şanzıman seçimi onbinlerce liralık tamir masrafına yol açabilir.

### 1. Torque Converter (Geleneksel Otomatik)

- **Nasıl Çalışır**: Hidrolik sıvı ile güç aktarımı
- **Güvenilirlik**: ★★★★☆ (Yüksek)
- **Avantajlar**: Dayanıklı, konforlu, bakımı basit
- **Dezavantajlar**: Yakıt tüketimi yüksek, ağır
- **Örnekler**: Toyota, Honda, BMW ZF, Aisin

### 2. DSG / DCT (Çift Kavramalı)

- **Nasıl Çalışır**: İki ayrı kavrama seti ile hızlı vites geçişi
- **Güvenilirlik**: ★★☆☆☆ (Düşük-Orta)
- **Avantajlar**: Hızlı geçiş, sportif hissiyat, ekonomik
- **Dezavantajlar**: Kavrama ve mekatronik arızaları, pahalı tamir
- **Risk Modelleri**: VW DSG (DQ200 kuru tip), Hyundai/Kia 7DCT, Renault EDC, Ford PowerShift

### 3. CVT (Sürekli Değişken)

- **Nasıl Çalışır**: Kayış/zincir sistemi ile kademesiz geçiş
- **Güvenilirlik**: ★★★☆☆ (Orta)
- **Avantajlar**: Çok ekonomik, yumuşak sürüş
- **Dezavantajlar**: Sportif değil, ısınma sorunu, lastik sesi etkisi
- **Örnekler**: Toyota Multidrive, Nissan Xtronic, Honda CVT

### 4. Robotize Manuel (AMT/Dualogic)

- **Nasıl Çalışır**: Manuel şanzımanın otomatikleştirilmiş hali
- **Güvenilirlik**: ★★☆☆☆ (Düşük-Orta)
- **Avantajlar**: Ucuz, ekonomik
- **Dezavantajlar**: Vites geçişlerinde sarsıntı, düşük konfor
- **Örnekler**: Fiat Dualogic, Opel Easytronic

### Güvenilirlik Sıralaması

1. **Torque Converter** — En güvenilir (Toyota, Aisin, ZF)
2. **CVT** — İyi bakımla uzun ömürlü (Toyota CVT en güvenilir)
3. **DSG/DCT Islak Kavrama** — Kuru tipe göre daha güvenilir (DQ250, DQ381)
4. **DSG/DCT Kuru Kavrama** — Risk yüksek (DQ200, PowerShift, 7DCT)
5. **Robotize Manuel** — En düşük konfor ve güvenilirlik

### OtoKusur Önerisi

OtoKusur'da her motor seçeneğinin şanzıman bilgisi ve kronik arızaları detaylı gösterilir. Otomatik şanzıman almadan önce mutlaka modelin motor raporunu inceleyin.`
    },
    {
        slug: 'dizel-mi-benzinli-mi',
        title: 'Dizel mi Benzinli mi? Kullanıma Göre Karar Rehberi',
        excerpt: 'Dizel ve benzinli motor karşılaştırması: yakıt maliyeti, bakım, dayanıklılık ve çevresel etki.',
        category: 'Satın Alma Rehberi',
        readTime: '6 dk',
        publishDate: '2025-06-25',
        updatedDate: '2026-09-09',
        content: `## Dizel mi Benzinli mi?

Bu karar yalnızca yakıt tüketimine göre verilmemeli. Yıllık kilometre, sürüş güzergâhı, bakım geçmişi ve emisyon sistemlerinin kullanım biçimine uygunluğu birlikte değerlendirilmeli.

### Dizel Motor Avantajları

- Düşük yakıt tüketimi (özellikle uzun yolda)
- Yüksek tork — yüklü sürüşte rahat
- Uzun yol kullanımında ekonomik
- İkinci el değeri genellikle yüksek

### Dizel Motor Dezavantajları

- DPF (partikül filtresi) tıkanma riski — şehir içinde ciddi sorun
- EGR tıkanması — bakım maliyeti
- Enjektör hassasiyeti — kalitesiz yakıttan etkilenir
- Turbo arızası riski
- Yüksek bakım maliyeti
- Emisyon kısıtlamaları artıyor

### Benzinli Motor Avantajları

- Basit mekanik — düşük bakım maliyeti
- DPF/EGR sorunu yok
- LPG dönüşümü mümkün
- Şehir içi kullanıma uygun
- Atmosferik versiyonlar çok güvenilir

### Benzinli Motor Dezavantajları

- Uzun yolda dizele göre yüksek tüketim
- Düşük tork (özellikle atmosferik)
- Turbo benzinli motorlarda (TSI, EcoBoost vb.) ek riskler

### Ne Zaman Dizel?

- Yılda **25.000 km üzeri** kullanım
- Ağırlıklı **şehir dışı/otoyol** kullanımı
- Ağır yük taşıma ihtiyacı
- Uzun yol seyahati sık

### Ne Zaman Benzinli?

- Yılda **25.000 km altı** kullanım
- Ağırlıklı **şehir içi** kullanım
- LPG dönüşümü düşünülüyorsa
- Düşük bakım maliyeti öncelikse

### Karar Özeti

Kısa mesafeli ve yoğun şehir içi kullanımda benzinli seçenekler genellikle daha az emisyon sistemi riski taşır. Düzenli uzun yol yapan ve yıllık kilometresi yüksek sürücüler için dizel hâlâ değerlendirilebilir. LPG düşünülüyorsa motor uyumluluğu ayrıca doğrulanmalıdır. Her durumda DPF, EGR, enjektör ve bakım geçmişini araç özelinde sorgulayın.`
    },
    {
        slug: 'yuksek-kilometreli-arac-alinir-mi',
        title: 'Yüksek Kilometreli Araç Alınır mı?',
        excerpt: 'Yüksek kilometreli araç alırken nelere dikkat edilmeli? Hangi km aralıkları riskli? Hangi markalar dayanıklı?',
        category: 'Satın Alma Rehberi',
        readTime: '7 dk',
        publishDate: '2025-07-05',
        content: `## Yüksek Kilometreli Araç: Risk mi Fırsat mı?

Yüksek kilometreli araçlar genellikle düşük fiyatlı olduğu için cazip görünür. Ama bilmeden alırsanız, kazandığınızdan fazlasını tamire harcayabilirsiniz.

### Yüksek Kilometre Nedir?

| Kilometre Aralığı | Risk Seviyesi | Durum |
|-------------------|---------------|-------|
| 0-50.000 km | Düşük | Neredeyse yeni |
| 50.000-100.000 km | Düşük-Orta | İyi bakımlıysa sorunsuz |
| 100.000-150.000 km | Orta | Kritik parça kontrolleri gerekli |
| 150.000-200.000 km | Orta-Yüksek | Büyük bakımlar yapılmış mı? |
| 200.000+ km | Yüksek | Detaylı kontrol şart |

### Kritik Kilometre Eşikleri

#### 60.000-80.000 km
- Triger kayışı/zinciri kontrolü
- Debriyaj seti kontrolü
- Amortisör kontrolü

#### 100.000-120.000 km
- Triger kayışı değişimi (mutlaka!)
- Su pompası kontrolü
- Bujiler ve ateşleme sistemi
- Şanzıman yağı değişimi

#### 150.000-180.000 km
- Turbo kontrol (dizel araçlarda)
- Enjektör kontrol (dizel araçlarda)
- Süspansiyon komple kontrol
- Hidrolik direksiyon sistemi

### Hangi Markalar Yüksek Kilometreye Dayanıklı?

1. **Toyota** — 300.000+ km sorunsuz kullanım yaygın
2. **Honda** — i-VTEC motorlar çok dayanıklı
3. **Mercedes (eski dizel)** — OM motor serisi efsanevi
4. **Volvo** — 2.0 D motorlar güvenilir

### Hangi Araçlardan Kaçınmalı?

- DSG/DCT şanzımanlı yüksek km araçlar
- DPF/EGR sorunlu dizel araçlar (şehir içi kullanılmışsa)
- Triger zinciri sorunu olan motorlar (1.2 TSI EA111, 1.3 CDTi vb.)

### OtoKusur Önerisi

Yüksek kilometreli araç almadan önce OtoKusur'dan modelin kronik arıza raporunu inceleyin. Hangi km'de hangi sorunların çıkacağını önceden bilmek, ekspertizde neye bakmanız gerektiğini gösterir.`
    },
    {
        slug: 'hyundai-tucson-nx4-ne-demek-hangi-yillar',
        title: 'Hyundai Tucson NX4 Ne Demek? Hangi Yıllar ve Motorlar?',
        excerpt: 'Tucson NX4 kasa kodu, üretim yılları, makyaj farkları, 1.6 T-GDI, Hybrid ve CRDi motor seçenekleri için ayrıntılı rehber.',
        category: 'Kasa Kodu Rehberi',
        readTime: '8 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [19],
        content: `## Tucson NX4 Ne Demek?

**NX4**, Hyundai Tucson'un 2020 yılında tanıtılan dördüncü neslinin kasa/proje kodudur. Türkiye'de ilk araçlar ağırlıklı olarak 2021 model yılıyla görüldüğü için ilanlarda “2020”, “2021” veya “2021-günümüz” başlangıçlarıyla karşılaşılabilir. Kasa kodu motoru değil, araç neslini tanımlar.

## NX4 Hangi Yılları Kapsar?

| Dönem | Açıklama |
|---|---|
| 2020-2024 | İlk seri NX4, parametrik ön aydınlatmalı tasarım |
| 2024 ve sonrası | Makyajlı NX4, yenilenen kabin ve bağlantı sistemi |

Makyaj tarihi ile ruhsattaki model yılı aynı şey değildir. Özellikle geç tescil edilen araçta üretim etiketi, VIN ve donanım kodları birlikte kontrol edilmelidir.

## Türkiye'deki Başlıca Motorlar

- **1.6 T-GDI 160 PS 7DCT:** Turbo benzinli; 4x2 veya donanıma göre 4x4 bulunabilir.
- **1.6 T-GDI Hybrid 215 PS 6AT:** Elektrik destekli tam hibrit ve tork konvertörlü otomatik.
- **1.6 CRDi 136 PS 7DCT:** Uzun yol odaklı dizel; DPF, EGR ve SCR kontrolü gerekir.

## İkinci Elde En Kritik Kontroller

1. 7DCT araçta sıcak-soğuk D-R, yokuş kalkışı ve düşük hızlı manevra.
2. Dizelde DPF doluluğu, rejenerasyon geçmişi, AdBlue/SCR ve enjektör değerleri.
3. Hibritte hücre farkları, batarya sıcaklığı, enerji geçişi ve 12 V akü.
4. 4x4 araçta dört lastiğin ölçü, desen ve aşınma uyumu.
5. Ön cam veya tampon değişiminden sonra kamera-radar kalibrasyonu.

NX4'e özel motor ve kontrol başlıklarının tamamı için [Hyundai Tucson NX4 kusur raporunu](/araclar/hyundai/tucson-nx4-4-nesil-2020-2025) inceleyebilirsiniz.

### Kaynaklar

- [Hyundai Tucson basın kiti](https://www.hyundai.news/eu/models/suv/tucson/press-kit.html)
- [Hyundai Tucson motor seçenekleri](https://www.hyundai.news/eu/models/suv/tucson/press-kit/the-new-tucson-europes-best-selling-compact-suv-just-got-better.html)
- [Hyundai Tucson teknik verileri](https://www.hyundai.news/newsroom/dam/eu/press-kits/20200915_all-new_tucson/15092020_Technical_Data_all-new_Tucson.pdf)`,
    },
    {
        slug: 'kia-sportage-nq5-ne-demek-hangi-yillar',
        title: 'Kia Sportage NQ5 Ne Demek? Hangi Yıllar ve Motorlar?',
        excerpt: 'Sportage NQ5 kasa kodu, beşinci nesil üretim dönemi, 1.6 T-GDI motorlar, 7DCT ve 4x4 kontrolleri.',
        category: 'Kasa Kodu Rehberi',
        readTime: '7 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [20],
        content: `## Sportage NQ5 Ne Demek?

**NQ5**, beşinci nesil Kia Sportage'ın kasa kodudur. Avrupa pazarı için daha kompakt ölçülerle özel bir türev geliştirilmiş, model 2021'de tanıtılıp 2022 döneminde yaygınlaşmıştır. İlan başlığındaki NQ5 ifadesi tek başına motor, çekiş veya donanım paketini göstermez.

## NQ5 Hangi Yılları Kapsar?

| Dönem | Açıklama |
|---|---|
| 2021-2024 | Beşinci neslin ilk seri tasarımı |
| 2025 ve sonrası | Makyajlı seri; dış tasarım, ekran ve destek sistemleri güncellendi |

Türkiye'deki araçlarda üretim yılı, ilk tescil ve makyaj dönemi farklı görünebilir. Doğru ayrım VIN, üretim etiketi, ön-arka tasarım ve donanım kodlarıyla yapılmalıdır.

## Yaygın Türkiye Motorları

- **1.6 T-GDI 150 PS 7DCT 4x2:** Günlük kullanım ve tüketim dengesi.
- **1.6 T-GDI 180 PS 7DCT 4x4:** Daha yüksek güç ve elektronik kontrollü dört çeker.

Pazara ve model yılına göre hibrit seçenekler de bulunabilir; ilan metni yerine ruhsat ve şasi numarası esas alınmalıdır.

## NQ5 Alırken Neye Bakılır?

- 7DCT'de kavrama sıcaklığı, adaptasyon, geri manevra ve yokuş kalkışı.
- 4x4 araçta aynı ölçü ve yakın aşınmada dört lastik.
- Turbo basıncı, ateşleme sayaçları, yağ ve soğutma kaçakları.
- Ön cam/tampon işlemi sonrası ADAS kalibrasyonu.
- Multimedya, kamera, radar ve açık servis kampanyaları.

Ayrıntılı motor ayrımları için [Kia Sportage NQ5 kusur ve motor raporuna](/araclar/kia/sportage-nq5-5-nesil-2021-2025) geçebilirsiniz.

### Kaynaklar

- [Kia Avrupa NQ5 tanıtımı](https://press.kia.com/ie/en/home/media-resouces/press-releases/2021/Kia-reveals-first-sketches.html)
- [Kia Sportage NQ5 Avrupa lansmanı](https://press.kia.com/at/at/home/press-releases/2021/der-neue-kia-sportage.html)`,
    },
    {
        slug: 'volkswagen-passat-b9-ne-demek-hangi-yillar',
        title: 'Volkswagen Passat B9 Ne Demek? B8 ile Farkları ve Motorlar',
        excerpt: 'Passat B9 kasa kodu, Variant gövde, B8 farkları, 1.5 eTSI, eHybrid ve 2.0 TDI motor seçenekleri.',
        category: 'Kasa Kodu Rehberi',
        readTime: '8 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [2088],
        content: `## Passat B9 Ne Demek?

**B9**, Volkswagen Passat'ın dokuzuncu neslini ifade eder. Avrupa'da 2024 model döneminde satışa çıkan bu nesil yalnız **Variant**, yani station wagon gövdeyle sunuldu. Sedan ilanı B9 olarak yazılmışsa araç kimliği özellikle doğrulanmalıdır.

## B8 ve B9 Arasındaki Temel Farklar

| Başlık | Passat B8 | Passat B9 |
|---|---|---|
| Üretim dönemi | 2014/2015-2023 | 2024 ve sonrası |
| Gövde | Sedan ve Variant | Avrupa'da yalnız Variant |
| Platform | MQB | Güncellenmiş MQB evo |
| Kokpit | Önceki MIB nesilleri | MIB4, 12,9 inç standart ekran |
| Elektrifikasyon | GTE PHEV seçeneği | eTSI ve yeni nesil eHybrid |

B9'un dingil mesafesi B8'e göre 50 mm, toplam uzunluğu 144 mm artmıştır. Bu fark özellikle arka yaşam alanı ve bagaj kullanımına yansır.

## Başlıca B9 Motorları

- **1.5 eTSI 150 PS DSG:** 48 V hafif hibrit.
- **1.5 eHybrid 204 PS:** Haricen şarj edilebilir hibrit.
- **2.0 TDI 193 PS 4MOTION DSG:** Dizel ve dört çeker.

## Satın Alma Kontrolü

eTSI'da 12/48 V aküler ile DC-DC sistemi; eHybrid'de yüksek voltaj batarya ve şarj; TDI'da DPF/EGR/SCR incelenmelidir. Her versiyonda DSG uyarlamaları, MIB4 ekranı, kamera-radar kalibrasyonu ve dört lastik ölçümü önemlidir.

Motor sayfaları ve ayrıntılı kontrol listesi için [Volkswagen Passat B9 kusur raporunu](/araclar/volkswagen/passat-variant-b9-15-etsi) açabilirsiniz.

### Kaynaklar

- [Volkswagen B9 ön satış duyurusu](https://www.volkswagen-newsroom.com/en/press-releases/configurator-open-pre-sales-of-the-all-new-passat-have-now-started-17924)
- [Passat B9 tasarım ve ölçüler](https://www.volkswagen-newsroom.com/en/the-new-passat-international-media-drive-18257/stylish-driving-new-design-from-scratch-yet-still-a-passat-18264)
- [Passat B9 güç aktarımları](https://www.volkswagen-newsroom.com/en/the-new-passat-international-media-drive-18257/classic-driving-tsi-and-tdi-front-and-all-wheel-drive-18261)`,
    },
    {
        slug: 'honda-civic-fe1-ne-demek-hangi-yillar',
        title: 'Honda Civic FE1 Ne Demek? FC5 Farkları ve Motor Seçenekleri',
        excerpt: 'Civic FE1 kasa kodu, on birinci nesil yılları, FC5 ile ayrımı, Turbo ECO LPG ve CVT satın alma kontrolleri.',
        category: 'Kasa Kodu Rehberi',
        readTime: '8 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [5, 118],
        content: `## Civic FE1 Ne Demek?

**FE1**, Türkiye'de on birinci nesil Honda Civic Sedan için kullanılan kasa kodudur. 2021 sonunda pazara giren FE1; kendisinden önceki onuncu nesil **FC5** ile karıştırılmamalıdır. Kasa kodu motor ve paket adı değildir.

## FC5 ile FE1 Nasıl Ayrılır?

| Başlık | Civic FC5 | Civic FE1 |
|---|---|---|
| Nesil | 10. nesil | 11. nesil |
| Türkiye dönemi | 2016-2021 | 2021-2025 |
| Tasarım | Keskin, C sütununa uzanan stop | Daha yatay ve sade sedan çizgisi |
| Kokpit | Önceki Honda Connect düzeni | Yatay petek havalandırma ve yeni ekran |
| Sürüş desteği | Pakete göre Honda Sensing | Daha güncel Honda Sensing mimarisi |

## FE1 Motorları

Türkiye'de 1.5 VTEC Turbo motorun 182 PS benzinli ve 129 PS ECO LPG odaklı sürümleri CVT ile görülür. Motor gücü, LPG donanımı ve paket bilgisi VIN ile doğrulanmalıdır.

## FE1 Alırken Kritik Kontroller

- Honda onaylı CVT sıvısı, değişim faturası ve sıcak-soğuk yol testi.
- ECO'da LPG tank tarihi, kaçak, iki yakıtta düzeltme ve ateşleme.
- Turbo basıncı, doğru yağ, soğutma ve bakım aralığı.
- Ön cam/tampon işlemi varsa Honda Sensing kalibrasyonu.
- Alt gövde, jant-lastik ve düz yol geometrisi.

On birinci nesil için [Civic FE1 ayrıntılı kusur raporunu](/araclar/honda/civic-11-nesil-fe1-2021-2025), önceki nesil için [Civic FC5 raporunu](/araclar/honda/civic-10-nesil-fc5-2016-2021) inceleyebilirsiniz.

### Kaynaklar

- [Honda Civic Türkiye model bilgileri](https://www.honda.com.tr/otomobil/modeller/honda-civic-sedan)
- [Honda Civic teknik broşürü](https://www.honda.com.tr/assets/files/yeni-civic-sedan-SVcS3.pdf)
- [Honda Civic güvenlik değerlendirmesi](https://www.euroncap.com/assessments/honda/civic/0945/)`,
    },
    {
        slug: 'seat-arona-10-tsi-dsg-alinir-mi-kronik-sorunlar',
        title: 'SEAT Arona 1.0 TSI DSG Alınır mı? Kontrol Listesi',
        excerpt: 'SEAT Arona 1.0 EcoTSI motor, DQ200 DSG, kasa kodu, kronik sorun iddiaları ve ikinci el satın alma kontrol listesi.',
        category: 'Model Satın Alma Rehberi',
        readTime: '9 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [12019],
        content: `## SEAT Arona 1.0 TSI DSG Alınır mı?

Bakımı belgeli, kavrama ve mekatronik verileri normal, soğutma sistemi sağlam bir Arona 1.0 EcoTSI DSG; kompakt boyut, 400 litrelik bagaj ve tüketim-performans dengesiyle değerlendirilebilir. Karar yalnız kısa test sürüşüne veya “DSG sorunlu/sorunsuz” genellemesine dayanmamalıdır.

## Arona Kasa Kodu ve Yılları

Arona'nın ilk nesil kasa kodu **KJ/KJ7**'dir. 2017'de başlayan nesil 2021'de makyajlandı. 1.0 EcoTSI motor üretim yılına göre 95, 110 veya 115 PS olarak; manuel ya da DSG ile bulunabilir.

## 1.0 EcoTSI Kontrolü

- Araç tamamen soğukken rölanti ve ateşleme sayacı.
- İstenen-gerçek turbo basıncı ve yakıt düzeltmeleri.
- Su pompası, termostat ve soğutma devresinde kaçak.
- Motor koduna uygun triger planı ve VW onaylı yağ faturası.
- Üç silindirin normal titreşimi ile tekleme/takoz ayrımı.

## DSG Nasıl Test Edilir?

1. Soğukken D-R seçimi ve ilk kalkış.
2. Isındıktan sonra dur-kalk ve geri manevra.
3. Yokuşta kavrama ve geri kaçırma davranışı.
4. Kavrama uyarlamaları, sıcaklık ve hata hafızası.
5. Motor takozu ve ateşleme düzgünlüğünün ayrıca kontrolü.

DQ200 kuru kavrama yapısı nedeniyle aracı gazla yokuşta tutmak veya uzun süre yarım kavramada süründürmek ısıyı artırabilir. Normal çalışma hissi ile arıza, ölçüm ve uzman yol testiyle ayrılmalıdır.

## Diğer Kontroller

Ön cam/tampon işleminde radar-kamera kalibrasyonu; multimedya ve Full Link; 12 V akü; ön takım, jant ve lastik omuzları kontrol edilmelidir. Donanım paketlerinin farklı olabileceği unutulmamalı, ilan metni VIN ile doğrulanmalıdır.

Tüm kusur başlıkları ve motor ayrımları için [SEAT Arona KJ model raporuna](/araclar/seat/arona-kj-1-nesil-2017-gunumuz) geçebilirsiniz.

### Kaynaklar

- [SEAT Arona teknik broşürü](https://www.seat.com/content/dam/public/seat-website/car-shopping-tools/brochure-download/brochures/arona/cars-specs-brochure-KJ7-NA-december-2018.pdf)
- [SEAT Arona güç aktarma seçenekleri](https://www.seat.com/company/news/cars/new-seat-arona)
- [SEAT Arona Euro NCAP değerlendirmesi](https://www.euroncap.com/assessments/seat/arona/0698/)`,
    }
];
