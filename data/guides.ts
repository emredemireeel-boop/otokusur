export interface Guide {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
    publishDate: string;
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
        title: 'Dizel mi Benzinli mi? 2025 Gerçekleri',
        excerpt: 'Dizel ve benzinli motor karşılaştırması: yakıt maliyeti, bakım, dayanıklılık ve çevresel etki.',
        category: 'Satın Alma Rehberi',
        readTime: '6 dk',
        publishDate: '2025-06-25',
        content: `## Dizel mi Benzinli mi?

2025'te bu soru her zamankinden daha karmaşık. Emisyon normları, yakıt fiyatları ve elektrikli araç geçişi dengeleri değiştirdi.

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

### 2025 Gerçeği

Şehir içi kullanım ağırlıklıysa **benzinli + LPG** en ekonomik çözüm. Uzun yol ağırlıklıysa **dizel** hala mantıklı. Ancak dizel alırken DPF, EGR ve enjektör bakım geçmişini mutlaka sorgulayın.`
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
    }
];

