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
    }
];
