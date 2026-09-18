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
    },
    {
        slug: 'opel-astra-h-mi-astra-j-mi-farklari',
        title: 'Opel Astra H mi Astra J mi? Kasa Kodları, Motorlar ve Farkları',
        excerpt: 'Astra H ve Astra J yılları, kasa farkları, 1.6 benzin, 1.4 Turbo, 1.3 CDTI ve şanzıman kontrol listesi.',
        category: 'Kasa Karşılaştırma Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [1014, 121, 22],
        content: `## Astra H ve Astra J Hangi Yıllar?

**Astra H**, 2004'te başlayan üçüncü Astra neslidir. **Astra J** ise 2009'da tanıtılan dördüncü nesildir. Türkiye'de model yılları bir süre örtüşebildiği için ilandaki kasa adı tek başına yeterli değildir; VIN, ruhsat ve gövde ayrıntıları birlikte doğrulanmalıdır.

| Başlık | Astra H | Astra J |
|---|---|---|
| Ana dönem | 2004-2010 | 2009-2015 |
| Türkiye'de yaygın benzinli | 1.6 Twinport | 1.4 Turbo, 1.6 atmosferik |
| Türkiye'de yaygın dizel | 1.3 CDTI | 1.3 CDTI, 1.6 CDTI |
| Karakter | Daha hafif ve mekanik | Daha tok, ağır ve donanımlı |
| Kritik aktarma | Easytronic / klasik otomatik | Manuel / AT6 |

## Astra H Alırken Ne Kontrol Edilir?

- CIM modülü, korna, sinyal, direksiyon tuşları ve iki anahtar.
- 1.6 Twinport'ta ateşleme, triger-devirdaim ve soğutma kaçakları.
- 1.3 CDTI'da soğuk zincir sesi, doğru yağ, EGR, enjektör ve turbo.
- Easytronic'te kavrama aşınma noktası, aktüatör ve kalibrasyon.
- Ön takım, cam krikoları, klima fanı ve su-nem izi.

Ayrıntılı kontrol başlıkları için [Astra H kusur raporunu](/araclar/opel/astra-h-kasa-2004-2010) açın.

## Astra J Alırken Ne Kontrol Edilir?

- 1.4 Turbo'da PCV-vakum, ateşleme, turbo ve soğutma sistemi.
- Dizelde zincir sesi, DPF/EGR, enjektör ve turbo verileri.
- AT6'da soğuk-sıcak D-R ve yük altında geçişler.
- Elektrikli park freni, AFL far, klima ve multimedya.
- Lastik omuzları, arka aks ve dört teker geometrisi.

Ayrıntılı motor ayrımları için [Astra J kusur raporuna](/araclar/opel/astra-j-kasa-2009-2015) geçin.

## Hangisi Daha Mantıklı?

Daha düşük satın alma maliyeti ve mekanik sadelik isteyen, temiz geçmişli bir örnek bulabilen kullanıcı için Astra H değerlendirilebilir. Daha güncel güvenlik, kabin ve yol hissi isteyen kullanıcı için Astra J öne çıkar; fakat motor-şanzıman ve donanım sayısının artması kontrol bütçesini de büyütür. Kararı kasa adına değil, motor kodu, bakım faturası, soğuk çalışma ve ölçümlü ekspertiz sonucuna göre verin.

### Kaynaklar

- [Opel Astra nesil tarihçesi](https://www.media.stellantis.com/es-es/opel/press/nuevo-opel-astra-la-historia-de-un-icono-sobre-ruedas)
- [Astra H teknik tarihçesi](https://www.media.stellantis.com/it-it/opel/press/opel-astra-alta-tecnologia-e-dinamismo-nel-segmento-delle-automobili-compatte)
- [Astra J Euro NCAP 2009 sonucu](https://news.euroncap.com/safercars/opelvauxhall-astra--euro-ncap-results-2009/s/6da839fe-af83-4e04-a58a-1b961796b015)`,
    },
    {
        slug: 'ford-focus-3-powershift-alinir-mi-kronik-sorunlar',
        title: 'Ford Focus 3 PowerShift Alınır mı? 1.6 Ti-VCT ve TDCi Kontrolü',
        excerpt: 'Focus 3 ve 3.5 farkları, PowerShift şanzıman tipi, 1.6 Ti-VCT, 1.6 TDCi ve 1.5 TDCi satın alma kontrolü.',
        category: 'Model Satın Alma Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [125],
        content: `## Focus 3 ve Focus 3.5 Ne Demek?

Türkiye'de **Focus 3**, 2011'de başlayan üçüncü nesil; **Focus 3.5** ise 2014 sonundaki kapsamlı makyaj için kullanılan addır. Ford'un resmi teknik belgelerinde motor ve şanzıman seçenekleri pazara ve üretim yılına göre değişir. Bu yüzden ilandaki “PowerShift” ifadesiyle yetinmeyin; VIN ve şanzıman kodunu doğrulayın.

## PowerShift Alınır mı?

Bakımı belgeli, kavrama-adaptasyon değerleri normal ve sıcak-soğuk testte sorun göstermeyen bir araç değerlendirilebilir. Ancak bütün PowerShift şanzımanlar aynı değildir: motorla eşleşen kuru veya ıslak kavrama yapısı, yağ bakım planını ve risk profilini değiştirir.

### Yol Testi Sırası

1. Araç soğukken D-R seçimi ve ilk kalkış.
2. Isındıktan sonra dur-kalk, geri manevra ve yokuş.
3. Sabit hız ve yük altında vites geçişleri.
4. Kavrama uyarlamaları, sıcaklık ve TCM hata hafızası.
5. Motor takozu, ateşleme veya dizel düzensizliğinin ayrıca elenmesi.

## 1.6 Ti-VCT Kontrolü

Soğuk rölanti, buji-bobin, yakıt düzeltmeleri ve soğutma sistemi kontrol edilmelidir. PowerShift eşleşmesinde kavrama ile TCM taraması atlanmamalıdır. Manuel araçta debriyaj, takoz ve beş ileri şanzıman yol testi yapılır.

## 1.6 ve 1.5 TDCi Kontrolü

DPF kurum-kül ve rejenerasyon geçmişi, EGR komutu, enjektör düzeltmeleri ve turbo basıncı okunmalıdır. Manuelde debriyaj-volan; otomatikte doğru PowerShift tipi ve yağ faturası doğrulanmalıdır. Yalnız kısa test sürüşü, ısındıktan sonra ortaya çıkan aktarma sorunlarını göstermeyebilir.

Tüm motor sayfaları için [Focus 3 ve 3.5 kusur raporunu](/araclar/ford/focus-3-35-2011-2018) inceleyin.

### Kaynaklar

- [Ford Focus resmi teknik özellikleri](https://media.ford.com/content/dam/fordmedia/Europe/documents/productReleases/Focus/FordFocus_TechSpecs_EU.pdf)
- [2014 Focus motor ve teknoloji güncellemesi](https://media.ford.com/content/fordmedia/feu/gb/en/news/2014/02/24/new-ford-focus--advanced-technology--fine-craftsmanship-improved.html)
- [Ford Focus Euro NCAP 2011 değerlendirmesi](https://news.euroncap.com/images-and-videos/ford-focus---crash-test-2011-and-advanced-rewards/s/cd46e5db-e9d9-44ba-b703-adfaaa645d14)`,
    },
    {
        slug: 'honda-civic-fb7-ne-demek-alinir-mi',
        title: 'Honda Civic FB7 Ne Demek? Hangi Yıllar, Alınır mı?',
        excerpt: 'Civic FB7 kasa kodu, 2012-2016 yılları, 1.6 i-VTEC, ECO LPG ve beş ileri otomatik satın alma kontrolü.',
        category: 'Kasa Kodu Rehberi',
        readTime: '9 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [119, 118],
        content: `## Civic FB7 Ne Demek?

**FB7**, Türkiye'de 2012-2016 arasında üretilen dokuzuncu nesil Civic Sedan için kullanılan kasa kodudur. FC5 ise onu izleyen 2016-2021 dönemindeki onuncu nesildir. İlanda yalnız “Civic 2016” yazıyorsa gövde ve VIN kontrol edilmeden nesil varsayılmamalıdır.

| Başlık | Civic FB7 | Civic FC5 |
|---|---|---|
| Türkiye dönemi | 2012-2016 | 2016-2021 |
| Yaygın motor | 1.6 i-VTEC 125 PS | 1.6 i-VTEC / 1.5 Turbo |
| Otomatik | 5 ileri tork konvertörlü | CVT |
| LPG | ECO ve sonradan uygulamalar | ECO LPG seçenekleri |

## FB7 Alınır mı?

Bakım ve hasar geçmişi doğrulanmış, LPG sistemi sızdırmaz ve doğru ayarlı, otomatik sıvısı belgeli bir FB7 değerlendirilebilir. “Atmosferik Honda motoru sorun çıkarmaz” veya “LPG mutlaka motora zarar verir” gibi iki uç genelleme yerine ölçüm yapılmalıdır.

## 1.6 i-VTEC ve LPG Kontrolü

- Motor tamamen soğukken rölanti, ateşleme sayacı ve yakıt düzeltmeleri.
- LPG tank tarihi, multivalf, hatlar ve kaçak testi.
- Benzin ve LPG'de ayrı çalışma, geçiş sıcaklığı ve kalibrasyon.
- Supap açıklığı ile kompresyon ölçümü; yalnız motor sesine göre karar vermeme.
- Radyatör, fan, termostat, pompa ve hararet geçmişi.

## Beş İleri Otomatik Nasıl Test Edilir?

Honda şartnamesine uygun sıvı ve değişim faturası aranır. Şanzıman soğuk ve tam ısınmış halde D-R, düşük hız, yokuş ve yük altında denenir. Vuruntu veya titreşim varsa motor takozu ve motor çalışma düzgünlüğü şanzımandan ayrı kontrol edilir.

Direksiyon kutusu-mafsal, ön takım, klima kompresörü, alt gövde, airbag ve kemer sistemi de ekspertize eklenmelidir. Ayrıntılı motor sayfaları için [Civic FB7 kusur raporunu](/araclar/honda/civic-9-nesil-fb7-2012-2016) açın.

### Kaynaklar

- [Honda Türkiye 2012 çevre ve üretim raporu](https://www.honda.com.tr/assets/files/cevreraporu2012.pdf)
- [2012 Civic küresel tanıtımı](https://global.honda/en/newsroom/worldnews/2011/4110420New-York-International-Auto-Show.html)
- [Honda Civic 2012 Euro NCAP sonucu](https://news.euroncap.com/safercars/euro-ncap-announces-new-crash-tests-results--jeep-compass-disappoints--honda-civic-impresses/s/7c769ae3-910a-4fe4-8e5d-023f7dd62c1d)`,
    },
    {
        slug: 'toyota-corolla-e150-ne-demek-multimode-alinir-mi',
        title: 'Toyota Corolla E150 Ne Demek? MultiMode Alınır mı?',
        excerpt: 'Corolla E150 kasa yılları, 1.6 Dual VVT-i, 1.4 D-4D ve MultiMode robotize şanzıman kontrol listesi.',
        category: 'Kasa Kodu Rehberi',
        readTime: '9 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [115, 1026],
        content: `## Corolla E150 Ne Demek?

**E150**, Türkiye'de 2007-2012 dönemindeki onuncu nesil Corolla sedan için kullanılan yaygın kasa adıdır. Küresel kaynaklarda E140/E150 ayrımı pazara ve gövdeye göre görülebildiğinden ilan başlığından çok VIN ve üretim bilgisine güvenilmelidir.

## Yaygın Motorlar

- **1.6 Dual VVT-i 124 PS:** Atmosferik benzinli; manuel veya MultiMode.
- **1.4 D-4D 90 PS:** Turbo dizel; manuel veya MultiMode.

Toyota'nın dönem teknik verileri 1.6 Dual VVT-i için 124 PS, 1.4 D-4D için 90 PS değerini ve iki motorda MultiMode seçeneğini doğrular.

## MultiMode Otomatik mi?

MultiMode, tork konvertörlü klasik otomatik veya CVT değildir; debriyaj ve vites seçimini aktüatörlerin yaptığı robotize manuel yapıdır. Vites geçişinde hissedilen kısa güç kesintisi sistem karakterinin parçası olabilir. Aşınma veya arıza, kavrama noktası ve aktüatör verileriyle ayrılmalıdır.

### MultiMode Kontrolü

1. Soğuk ve sıcak kalkış.
2. Geri manevra ve yokuş davranışı.
3. Kavrama aşınma noktası ve aktüatör değerleri.
4. Kalibrasyon ve hata hafızası.
5. Akü-şarj sistemi; düşük voltajın robot sisteme etkisi.

## Motor Kontrolü

1.6 benzinde ateşleme, yağ, soğutma ve LPG ayarı; 1.4 D-4D'de soğuk çalışma, enjektör düzeltmeleri, EGR ve turbo basıncı incelenmelidir. Su pompası çevresinde kurumuş antifriz izi, ön takım, lastik geometrisi ve kilometre zinciri ayrıca kontrol edilir.

Motor bazlı ayrıntılar için [Corolla E150 kusur raporunu](/araclar/toyota/corolla-e140e150-2007-2012) inceleyin.

### Kaynaklar

- [Toyota'nın onuncu nesil Corolla Avrupa tanıtımı](https://newsroom.toyota.eu/all-new-corolla-setting-new-standards-in-its-class/)
- [Toyota 1.6 Dual VVT-i ve 1.4 D-4D teknik tablosu](https://newsroom.toyota.eu/download/684420/ap-807155.pdf)
- [Toyota Corolla nesil tarihçesi](https://global.toyota/en/detail/13824046)`,
    },
    {
        slug: 'renault-megane-2-mi-megane-3-mu-farklari',
        title: 'Renault Megane 2 mi Megane 3 mü? 1.5 dCi ve EDC Farkları',
        excerpt: 'Megane 2 ve Megane 3 yılları, kasa farkları, 1.5 dCi, 1.6 16V, EDC ve ikinci el kontrol listesi.',
        category: 'Kasa Karşılaştırma Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [107, 1012],
        content: `## Megane 2 ve Megane 3 Hangi Yıllar?

Mégane II Avrupa'da 2002'de başladı; Bursa'da Sport Sedan üretimi 2003'te devreye girdi. Mégane III üretimi Avrupa'da 2008'de başladı ve Türkiye ikinci elinde çoğunlukla 2009-2015 model yıllarıyla görülür.

| Başlık | Megane 2 | Megane 3 |
|---|---|---|
| Yaygın dönem | 2002-2008 | 2009-2015 |
| Benzinli | 1.6 16V 115 PS | 1.6 16V 110 PS, 1.4 TCe |
| Dizel | 1.5 dCi 80/100/105 PS | 1.5 dCi 90/110 PS |
| Otomatik odağı | Versiyona göre klasik/robotize | 1.5 dCi EDC yaygın |
| Elektronik | Kart-Okuyucu ve UCH | Kart, park freni, daha güncel multimedya |

## Megane 2 Kontrolü

Kart okuyucu, UCH, cam krikoları, kapı tesisatı ve su girişi özellikle denenmelidir. 1.5 dCi'da enjektör düzeltmeleri, yakıt ve turbo basıncı; 1.6 16V'de bobin-buji, boğaz kelebeği ve triger-devirdaim kaydı önemlidir.

[Megane 2 ayrıntılı kusur ve motor raporu](/araclar/renault/megane-2-2002-2008)

## Megane 3 Kontrolü

1.5 dCi'da DPF kurum-kül, rejenerasyon geçmişi, EGR, enjektör ve turbo verileri okunmalıdır. EDC'li araç soğuk ve tam ısınmış durumda geri manevra, yokuş ve dur-kalkta denenmeli; kavrama uyarlamaları ile hata hafızası incelenmelidir. 1.6 16V manuelde LPG, triger ve debriyaj kontrolü öne çıkar.

[Megane 3 ayrıntılı kusur ve motor raporu](/araclar/renault/megane-3-nesil-2009-2015)

## Hangisi Seçilir?

Daha düşük bütçe ve geniş parça arzında Megane 2; daha güncel kabin, yol hissi ve güvenlikte Megane 3 öne çıkar. Fakat temiz Megane 2, bakımsız Megane 3'ten daha doğru seçim olabilir. Soğuk çalışma, elektronik tarama, kilometre zinciri ve gövde ölçümü yapılmadan yalnız kasa yılına göre karar verilmemelidir.

### Kaynaklar

- [Renault Group Mégane II tarihçesi](https://www.renaultgroup.com/en/2020-Universal-Registration-Document/62/)
- [Oyak Renault Bursa üretim tarihçesi](https://www.renaultgroup.com/en/group/locations/bursa-plant-oyak)
- [Renault Palencia Mégane III üretim tarihçesi](https://www.renaultgroup.com/en/group/locations/palencia-plant/)
- [Mégane II Euro NCAP sonucu](https://cdn.euroncap.com/media/9939/euroncap_renault_m%C3%A9gane_2002_5stars.pdf)`,
    },
    {
        slug: 'volkswagen-passat-b7-ne-demek-b8-farklari',
        title: 'Volkswagen Passat B7 Ne Demek? B8 ile Farkları ve Motorları',
        excerpt: 'Passat B7 yılları, B8 farkları, 1.4 TSI, 1.6 TDI, 2.0 TDI, DSG ve ikinci el satın alma kontrolü.',
        category: 'Kasa Kodu Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-17',
        updatedDate: '2026-09-17',
        relatedVehicleIds: [12020, 6, 2088],
        content: `## Passat B7 Ne Demek?

**B7**, Volkswagen'in 2010 Paris Otomobil Fuarı'nda tanıttığı ve resmi arşivinde 2010-2014 dönemiyle sınıflandırdığı Passat neslidir. Fabrika tipi 3C'dir. 2014/2015'te yerini MQB tabanlı B8'e bırakmıştır.

| Başlık | Passat B7 | Passat B8 |
|---|---|---|
| Ana dönem | 2010-2014 | 2014/2015-2023 |
| Teknik temel | B6'nın kapsamlı gelişimi, Type 3C | MQB platformu |
| Yaygın motorlar | 1.4 TSI, 1.6 TDI, 2.0 TDI | 1.4/1.5 TSI, 1.6/2.0 TDI |
| Gövde | Sedan, Variant, Alltrack | Sedan ve Variant |

## Resmi B7 Motorları

Volkswagen arşivi 1.4 TSI 122 PS, 1.6 TDI 105 PS, 2.0 TDI 140 PS ve 170/177 PS gibi seçenekleri doğrular. İlanlardaki güç ve donanım bilgisi VIN ile kontrol edilmelidir; yazılım uygulanmış araç fabrika gücünde varsayılmamalıdır.

## B7 Alırken Kritik Kontroller

- 1.4 TSI'da motor tamamen soğukken zincir sesi, yağ seviyesi, kompresyon ve turbo basıncı.
- 1.6/2.0 TDI'da DPF kurum-kül, rejenerasyon, EGR, enjektör ve turbo verileri.
- DSG kodu: kuru ve ıslak kavramalı sistemlerin bakım gereksinimi aynı değildir.
- Soğuk-sıcak D-R, geri manevra, yokuş, dur-kalk ve yük altında yol testi.
- Elektronik park freni, Auto Hold, RNS ekranı, klima ve akü-şarj sistemi.
- Ön takım, DCC varsa modlar, lastik omuzları ve dört teker geometrisi.

“DSG sorunlu” veya “2.0 TDI daima daha sağlam” gibi genellemeler yerine motor-şanzıman kodu ve bakım faturası üzerinden ilerleyin. Tüm kontrol başlıkları için [Passat B7 kusur ve motor raporunu](/araclar/volkswagen/passat-b7-2010-2014) açın.

### Kaynaklar

- [Volkswagen resmi Passat B7 tarihçesi](https://www.volkswagen-newsroom.com/en/passat-b7-20102014-20036)
- [Volkswagen resmi Passat B7 motor tablosu](https://www.volkswagen-newsroom.com/en/engine-versions-passat-b7-profile-20038)
- [Volkswagen Passat Euro NCAP 2010 sonucu](https://news.euroncap.com/safercars/choose-a-car/all/VW-Passat----Euro-NCAP-Results-2010/s/e5ab9547-3ab3-4293-a064-b2313363fcff)`,
    },
    {
        slug: 'volkswagen-polo-6r-6c-ne-demek-farklari',
        title: 'Volkswagen Polo 6R ve 6C Ne Demek? Motor ve DSG Farkları',
        excerpt: 'Polo 6R ve 6C yılları, 1.2 TSI motor ailesi, 1.0 TSI, 1.6 TDI ve DQ200 DSG satın alma kontrolü.',
        category: 'Kasa Kodu Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-18',
        updatedDate: '2026-09-18',
        relatedVehicleIds: [111],
        content: `## Polo 6R ve 6C Hangi Yıllar?

Volkswagen'in resmi arşivinde beşinci nesil Polo 2009-2017 dönemidir. **6R**, 2009'da başlayan ilk seri; **6C** ise 2014 büyük güncellemesinden sonraki makyajlı seridir.

| Başlık | Polo 6R | Polo 6C |
|---|---|---|
| Dönem | 2009-2014 | 2014-2017 |
| Benzinli odağı | 1.2/1.4 MPI, 1.2 TSI | 1.0 MPI, 1.0 TSI, 1.2 TSI |
| Dizel odağı | 1.6 TDI | 1.4 TDI |
| Güvenlik | 2009 Euro NCAP beş yıldız | Güncellenen yardımcı sistemler |

## 1.2 TSI'da En Kritik Ayrım

“1.2 TSI” tek motor demek değildir. Üretim yılına ve motor koduna göre zincirli **EA111** ile kayışlı **EA211** aileleri görülebilir. Triger tipi, bakım planı ve güç değeri VIN ile doğrulanmadan yalnız ilan yılına güvenilmemelidir.

## DSG Nasıl Kontrol Edilir?

Polo'da sık görülen yedi ileri DQ200 kuru kavramalı DSG; soğuk ve sıcak durumda D-R, geri manevra, yokuş ve dur-kalkta denenmelidir. Kavrama uyarlamaları, sıcaklık ve mekatronik hata hafızası okunur. Motor takozu ve ateşleme düzgünlüğü elenmeden her titreşim kavrama arızası sayılmaz.

## Dizel ve Diğer Kontroller

1.6/1.4 TDI'da DPF kurum-kül, rejenerasyon geçmişi, EGR, enjektör ve turbo verileri; MPI motorlarda ateşleme, triger ve LPG; tüm araçlarda direksiyon, ön takım, cam-kilit ve akü sistemi incelenmelidir.

Ayrıntılı motor sayfaları için [Polo 6R/6C kusur raporunu](/araclar/volkswagen/polo-5-nesil-6r6c-2009-2017) açın.

### Kaynaklar

- [Volkswagen Polo V resmi tarihçesi](https://www.volkswagen-newsroom.com/en/polo-5-20092017-20044)
- [Polo V resmi motor tablosu](https://www.volkswagen-newsroom.com/en/engine-versions-polo-5-profile-20047)
- [Polo 2009 Euro NCAP sonucu](https://news.euroncap.com/safercars/vw%20polo%20-%20%20euro%20ncap%20results%202009/s/7fd70be8-a365-409a-a05d-753900f20f4b)`,
    },
    {
        slug: 'volkswagen-golf-7-75-dsg-alinir-mi',
        title: 'Volkswagen Golf 7 ve 7.5 DSG Alınır mı? Motor Kontrolü',
        excerpt: 'Golf 7 ve 7.5 yılları, 1.2-1.4-1.5 TSI, 1.6 TDI, DQ200 DSG ve satın alma kontrol listesi.',
        category: 'Model Satın Alma Rehberi',
        readTime: '11 dk',
        publishDate: '2026-09-18',
        updatedDate: '2026-09-18',
        relatedVehicleIds: [122],
        content: `## Golf 7 ve Golf 7.5 Farkı

Golf 7, 2012'de MQB platformuyla tanıtıldı. 2017 model güncellemesi Türkiye'de **Golf 7.5** olarak bilinir. İçten yanmalı ana üretim 2019'da sona yaklaşırken e-Golf 2020 sonuna kadar üretildi; bu yüzden bazı ilanlarda 2020 model yılı görülür.

## Motor Seçenekleri Nasıl Ayrılır?

- **1.2 TSI 105/110 PS:** Düşük tüketim, DQ200 eşleşmesi yaygın.
- **1.4 TSI 122/125/140/150 PS:** ACT ve güç farkı VIN ile doğrulanmalı.
- **1.0 TSI 110/115 PS:** Makyajlı kasada üç silindirli seçenek.
- **1.5 TSI 130/150 PS:** Golf 7.5'te Evo ACT motor.
- **1.6 TDI 105/110/115 PS:** Kullanım yılına göre güç ve emisyon donanımı değişir.

## DSG Kontrol Listesi

1. Şanzıman kodunu VIN ile doğrulayın.
2. Soğuk D-R ve ilk kalkışı deneyin.
3. Isındıktan sonra geri manevra, yokuş ve dur-kalk yapın.
4. Kavrama uyarlamaları, sıcaklık ve mekatronik kayıtlarını okuyun.
5. Motor takozu, tekleme ve lastik kaynaklı titreşimi ayrıca eleyin.

## TSI ve TDI Kontrolü

TSI'da motor koduna uygun triger planı, ateşleme, turbo basıncı, su pompası-termostat modülü ve yazılım geçmişi önemlidir. TDI'da DPF kurum-kül, rejenerasyon, EGR, enjektör ve turbo verileri okunur. MIB ekranı, ACC/Front Assist, kamera-radar kalibrasyonu, elektronik park freni ve lastik geometrisi de atlanmamalıdır.

Motor bazlı ayrıntılar için [Golf 7 kusur raporunu](/araclar/volkswagen/golf-7-2012-2020) inceleyin.

### Kaynaklar

- [Volkswagen Golf VII resmi tarihçesi](https://www.volkswagen-newsroom.com/en/golf-7-20122019-20035)
- [Golf VII resmi motor dönemleri](https://www.volkswagen-newsroom.com/en/vehicle-data-golf-7-profile-20039)
- [Golf 2012 Euro NCAP sonucu](https://news.euroncap.com/images-and-videos/vw-golf---crash-test-2012/s/900e6a35-47d9-4cf3-a7c4-1f92672eccea)`,
    },
    {
        slug: 'renault-clio-3-alinir-mi-clio-4-farklari',
        title: 'Renault Clio 3 Alınır mı? Clio 4 ile Farkları ve Motorları',
        excerpt: 'Clio 3 yılları, 1.2 16V, 1.5 dCi, 1.6 otomatik, Quickshift ve Clio 4 ile ikinci el farkları.',
        category: 'Model Satın Alma Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-18',
        updatedDate: '2026-09-18',
        relatedVehicleIds: [2017, 100],
        content: `## Clio 3 Hangi Yıllar?

Renault'nun üçüncü nesil Clio'su 2005'te tanıtıldı. Avrupa üretimi 2012'de Clio IV ile yer değiştirmeye başlasa da bazı pazarlarda Clio Collection adıyla daha uzun süre satıldığı için Türkiye ilanlarında **2005-2014** aralığı görülebilir. Model yılı kadar VIN, üretim tarihi ve donanım doğrulaması önemlidir.

| Başlık | Clio 3 | Clio 4 |
|---|---|---|
| Ana dönem | 2005-2014 | 2012-2019 |
| Benzinli odağı | 1.2 16V, 1.6 16V | 0.9 TCe, 1.2 TCe |
| Dizel odağı | 1.5 dCi 65-105 PS | 1.5 dCi 75-110 PS |
| Otomatik seçenek | Quickshift veya 1.6 klasik otomatik | EDC ağırlıklı |
| Karakter | Daha sade ve ekonomik | Daha güncel güvenlik ve multimedya |

## Hangi Motor Daha Mantıklı?

**1.2 16V**, şehir kullanımında sade yapısıyla öne çıkar; performans beklentisi sınırlı tutulmalıdır. **1.5 dCi**, uzun yol ve düşük tüketim için tercih edilir ancak enjektör, turbo, EGR ve bakım geçmişi ölçülmeden alınmamalıdır. **1.6 16V** daha canlıdır; otomatik versiyonda yağ kaçağı, soğutma ve geçiş davranışı ayrıca incelenir.

## Quickshift Alınır mı?

Quickshift, klasik tork konvertörlü otomatik değildir; debriyajı ve vites seçimini aktüatörlerin yönettiği robotize manuel sistemdir. Vites değişimindeki kısa güç kesintisi karakteristik olabilir. Soğuk-sıcak kalkış, geri manevra, yokuş, kavrama noktası, aktüatör ve hata hafızası görülmeden karar verilmemelidir.

## Clio 3 Ekspertiz Listesi

- Motor tamamen soğukken ilk çalışma, rölanti ve egzoz dumanı.
- Triger-devirdaim faturası; yalnız kilometre beyanına güvenmeme.
- 1.5 dCi'da enjektör düzeltmeleri, turbo basıncı, EGR ve yağ hattı.
- Direksiyon destek sistemi, ön takım, amortisör üst takozları ve lastik aşınması.
- Camlar, merkezi kilit, kart/anahtar, klima fanı ve akü-şarj testi.
- Airbag ve kemer sistemiyle birlikte şasi, podye ve taban ölçümü.

Motor bazlı ayrıntılar için [Clio 3 kusur raporunu](/araclar/renault/clio-3-nesil-2005-2014), sonraki nesil için [Clio 4 raporunu](/araclar/renault/clio-4-nesil-2012-2019) inceleyin.

### Kaynaklar

- [Renault Group Clio nesil tarihçesi](https://www.renaultgroup.com/en/magazine/stories-en/the-renault-clio-our-history-your-stories/)
- [Renault Group Clio'nun gelişim öyküsü](https://www.renaultgroup.com/en/magazine/our-group-news/the-clio-story-at-22-its-come-of-age/)
- [Renault Clio resmi tarihçe arşivi](https://imprensa.renaultgroup.com/historia-do-renault-clio/?lang=por)`,
    },
    {
        slug: 'opel-corsa-d-easytronic-alinir-mi',
        title: 'Opel Corsa D Alınır mı? Easytronic ve 1.3 CDTI Kontrolü',
        excerpt: 'Corsa D yılları, 1.2-1.4 Twinport, 1.3 CDTI, Easytronic şanzıman ve ikinci el kontrol listesi.',
        category: 'Model Satın Alma Rehberi',
        readTime: '10 dk',
        publishDate: '2026-09-18',
        updatedDate: '2026-09-18',
        relatedVehicleIds: [12021],
        content: `## Corsa D Hangi Yıllar?

Opel'in resmi model tarihçesinde dördüncü nesil Corsa, **2006-2014** dönemindedir. Türkiye ikinci elinde 1.2 ve 1.4 Twinport benzinli ile 1.3 CDTI dizel motorlar; manuel, Easytronic ve bazı versiyonlarda klasik otomatik seçenekler görülür. Şanzıman tipi ilan başlığından değil VIN ve fiziksel donanımdan doğrulanmalıdır.

## Motorlara Göre Kontrol

### 1.2 ve 1.4 Twinport

Motor tamamen soğukken zincir sesi, yağ seviyesi ve kaçaklar kontrol edilir. Ateşleme bobini, bujiler, boğaz kelebeği, yakıt düzeltmeleri ve soğutma sıcaklığı canlı veriden izlenir. LPG'li araçta test hem benzinde hem LPG'de yapılır; tank tarihi ve sızdırmazlık belgesi görülür.

### 1.3 CDTI

Soğuk çalışma, enjektör düzeltmeleri, turbo hedef-gerçek basıncı, EGR ve DPF doluluk verileri okunmalıdır. Sürekli kısa mesafe kullanılmış araçta rejenerasyon geçmişi özellikle önemlidir. Zincir sesi duyulursa yalnız sesle teşhis koymak yerine yağ basıncı ve mekanik zamanlama birlikte incelenir.

## Easytronic Alınır mı?

Easytronic, debriyaj ve vites kumandasını aktüatörlerin yaptığı robotize manuel sistemdir. Kavrama sarf malzemesidir; aktüatör ve elektronik arızayla karıştırılmamalıdır.

1. Soğuk ve tam ısınmış kalkışı deneyin.
2. Geri manevra, yokuş ve dur-kalk testi yapın.
3. Kavrama aşınma/temas noktası ve adaptasyon değerlerini okuyun.
4. Aktüatör hata kayıtlarını ve akü voltajını kontrol edin.
5. Onarım sonrası kalibrasyon belgesini isteyin.

Direksiyon desteği, ön takım, klima, cam-kilit sistemi, bagajda su izi, alt gövde ve airbag sistemi de ekspertize eklenmelidir. Tüm motor sayfaları için [Corsa D kusur raporunu](/araclar/opel/corsa-d-2006-2014) açın.

### Kaynaklar

- [Opel resmi Corsa nesil tarihçesi](https://www.media.stellantis.com/pl-pl/opel/press/40-lecie-opla-corsy-historia-sukcesu-w-szesciu-aktach)
- [Opel Corsa D'nin 20. yıl arşivi](https://www.media.stellantis.com/em-en/opel/press/everybody-s-darling-20-years-of-opel-corsa-d)`,
    },
    {
        slug: 'ford-fiesta-mk7-ecoboost-powershift-alinir-mi',
        title: 'Ford Fiesta Mk7 Alınır mı? EcoBoost ve PowerShift Kontrolü',
        excerpt: 'Fiesta Mk7 ve Mk7.5 yılları, 1.0 EcoBoost, 1.25-1.4 benzinli, TDCi ve PowerShift satın alma kontrolü.',
        category: 'Model Satın Alma Rehberi',
        readTime: '11 dk',
        publishDate: '2026-09-18',
        updatedDate: '2026-09-18',
        relatedVehicleIds: [112],
        content: `## Fiesta Mk7 ve Mk7.5 Ne Demek?

Türkiye'de **Fiesta Mk7** adı, 2008'de başlayan ve 2017'ye kadar süren nesil için yaygın kullanılır. 2013 civarındaki büyük makyaj “Mk7.5” diye anılır; ayrı bir nesil değildir. Model yılı geçişlerinde donanım ve motor farklılaşabildiği için VIN doğrulaması gerekir.

## Motor Seçenekleri

- **1.25 ve 1.4 Duratec:** Atmosferik benzinli, manuel ağırlıklı; bazı pazarlarda klasik otomatik.
- **1.0 EcoBoost 100/125/140 PS:** Turbo ve direkt enjeksiyonlu üç silindirli motor.
- **1.6 Ti-VCT:** Bazı otomatik/PowerShift eşleşmelerinde görülür.
- **1.4 ve 1.6 TDCi:** Dizel seçenekler; kullanım yılına göre emisyon donanımı değişir.

## 1.0 EcoBoost Kontrolü

Motor kodu ve üretim tarihine uygun triger sistemi/bakım planı VIN ile doğrulanmalıdır. Kullanılan yağın Ford şartnamesi, değişim aralığı ve faturaları önemlidir. Motor tamamen soğukken çalışma, yağ basıncı, soğutma sistemi, genleşme kabı, hortumlar, turbo hedef-gerçek basıncı ve ateşleme verileri incelenir. Hararet veya eksik yağ geçmişi küçük motorlarda özellikle ciddiye alınmalıdır.

## PowerShift Nasıl Test Edilir?

“PowerShift” tek bir donanım veya bakım yöntemi anlamına gelmez; şanzıman kodu VIN ile belirlenmelidir. Kuru kavramalı Fiesta uygulamasında soğuk ve sıcak D-R, geri manevra, yokuş, düşük hız ve yoğun dur-kalk testi yapılır. Kavrama uyarlamaları, aktüatör/TCM kayıtları ve akü voltajı okunur. Titremeyi motor takozu veya teklemeden ayırmadan parça teşhisi konulmamalıdır.

## Diğer Kritik Noktalar

Direksiyon, ön takım, amortisör üst takozu, kapı kilitleri, multimedya/SYNC, klima, bagaj su izi ve akü-şarj sistemi denenir. Dizelde enjektör, EGR, turbo ve varsa DPF verileri; otomatikte bakım-onarım faturaları görülür. Şasi, podye, airbag ve emniyet kemeri kontrolü her motor seçeneğinde zorunludur.

Motor bazlı ayrıntılar için [Fiesta Mk7 kusur raporunu](/araclar/ford/fiesta-6-nesil-mk7-2008-2017) inceleyin.

### Kaynaklar

- [Ford Fiesta EcoBoost ve PowerShift teknik özellikleri](https://media.ford.com/content/dam/fordmedia/Europe/gb/2013/11/FIESTA_SALES_POWERSHIFTtechspec.pdf)
- [Ford New Fiesta 2014 resmi teknik tanıtımı](https://media.ford.com/content/fordmedia/fsa/br/pt/news/2013/04/21/ford-new-fiesta-2014--esportividade--tecnologia--seguranca-e-eco.html)
- [Ford Fiesta Euro NCAP 2012 sonuç duyurusu](https://news.euroncap.com/safercars/euro-ncap-releases-results-for-15-cars-dacia-budgets-on-safety/s/f911f1a0-c5e0-4b6a-af69-9b143954d4e4)`,
    }
];
