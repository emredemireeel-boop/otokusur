# OtoKusur Google SEO ve Yapay Zekâ İçerik Planı

Güncelleme: 9 Eylül 2026

## Hedef

OtoKusur'u “araç + kronik arıza”, “motor kodu + sorunları”, “model + alınır mı” ve satın alma öncesi kontrol sorgularında Türkiye'nin en güvenilir, kaynakları görünür araştırma merkezi yapmak.

Başarı yalnızca trafik değildir. Doğru aracı bulan, raporu okuyan, karşılaştırma yapan ve ekspertize daha hazırlıklı giden kullanıcı sayısı ana sonuçtur.

## Değişmez ilke

Yapay zekâ bir araştırma ve taslak yardımcısıdır; kaynak değildir. Kaynak paketinde bulunmayan arıza, maliyet, rapor sayısı veya kullanıcı deneyimi üretilmez. İnsan kontrolü tamamlanmadan yeni model ya da motor sayfası indekslenmez.

Google'ın insan odaklı içerik ve üretken yapay zekâ ilkeleri bu yaklaşımın temelidir:

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

## İçerik mimarisi

1. Arıza konu merkezleri: motor, şanzıman, elektrik, yürür aksam, gövde.
2. Sorun rehberleri: belirti, olası neden, kontrol adımı, hangi uzmanlığa gidileceği.
3. Marka merkezleri: markanın indekslenebilir model raporlarına açılan dizinler.
4. Model raporları: nesil/yıl, genel kusurlar, güçlü-zayıf yönler, motor seçimi.
5. Motor raporları: motor kodu/adı, özgün özet, kusur belirtileri, kontrol noktaları, artılar-eksiler.
6. Karar rehberleri: kullanım senaryosuna göre seçenek karşılaştırmaları.

Her alt sayfa üst merkeze, ilgili kardeş sayfalara ve en az iki gerçek model/motor raporuna bağlanmalıdır.

## Yapay zekâ destekli yayın akışı

### 1. Fırsat seçimi

Haftalık olarak Search Console sorguları, site içi aramalar ve eksik katalog kayıtları birleştirilir. Öncelik; gösterim alan fakat düşük sırada kalan sorgulara, yüksek satın alma niyetine ve mevcut veride karşılığı olan konulara verilir.

### 2. Kaynak paketi

Her içerikten önce aşağıdaki alanlar doldurulur:

- Marka, model, nesil/yıl ve pazar
- Motor kodu veya açık motor tanımı
- Birincil kaynak URL'leri ve erişim tarihi
- Servis bülteni/geri çağırma varsa belge kimliği
- Her iddia için kaynak notu
- Bilinmeyen veya doğrulanamayan noktalar
- İçerik sorumlusu ve son kontrol tarihi

### 3. Yapay zekâ taslağı

Model yalnızca kaynak paketini kullanır. Çıktı; kısa cevap, belirtiler, kontrol adımları, riskin bağlamı, satın alma soruları ve kaynak listesini ayrı alanlarda üretir. Belirsiz noktalar kesin cümleye çevrilmez.

### 4. Otomatik kalite kapısı

Yayın öncesinde şu kontroller zorunludur:

- Rota ve kayıt kimliği tekilliği
- Kopya/klişe paragraf benzerliği
- En az bir ayrıntılı, özgün kusur açıklaması
- Model sayfasında yeterli güçlü-zayıf yön ve kusur kapsamı
- Motor sayfasında özgün özet ile karar desteği
- Çalışan iç/dış bağlantılar
- Tek canonical URL ve doğru robots kararı
- Görünür içerikle birebir uyuşan yapılandırılmış veri
- Gerçek editoryal değişiklik olmadan `dateModified` güncellenmemesi

Projede `npm run seo:audit` komutu kimlik, rota ve içerik kalite göstergelerini raporlar.

### 5. İnsan incelemesi

Bir editör teknik doğruluğu, bir ikinci kişi okunabilirliği ve iddia-kaynak eşleşmesini kontrol eder. Onaylanmayan sayfa erişilebilir kalabilir ancak `noindex,follow` olur ve sitemap'e girmez.

### 6. Yayın ve ölçüm

Yayın sonrası 7, 28 ve 90 günlük pencerelerde sorgu, gösterim, tıklama, ortalama konum, CTR ve kullanıcı davranışı izlenir. Sıralama alamayan sayfa otomatik olarak uzatılmaz; önce sorgu niyeti, özgün bilgi değeri ve iç bağlantıları yeniden değerlendirilir.

## 90 günlük uygulama sırası

### Gün 1–14: Veri güveni

- Kaynaktaki tekrar model rotalarını editoryal olarak birleştir.
- İlk 50 ticari değeri yüksek motor için kaynak paketi oluştur.
- Kalıp motor açıklamalarını kaynaklı ve motor-özel metinlerle değiştir.
- Gerçek isimli içerik sorumluları hazır olduğunda ekip sayfasına uzmanlık ve inceleme rolü ekle.

### Gün 15–35: Köşe taşı içerikler

- Motor arıza belirtileri
- Otomatik şanzıman türleri
- DPF/EGR kullanım senaryoları
- Yağ eksiltme ve hararet kontrolü
- İkinci el araç ekspertiz kontrol listesi

Her rehber ilgili arıza merkezi ve gerçek model örnekleriyle bağlanır.

### Gün 36–65: Model ve motor derinliği

- Search Console'da gösterim alan ilk 30 model sayfasını geliştir.
- Her model için “kim için uygun”, “satın almadan önce 5 kontrol” ve motorlar arası karar özeti ekle.
- Her motor için belirtiler, kullanım koşulu, kontrol yöntemi ve kaynakları görünür yap.
- Kalite eşiğini geçen sayfaları sitemap'e kademeli al.

### Gün 66–90: Otorite ve kazanım

- Kaynak gösterilebilir veri çalışmaları yayımla: örneğin veri tabanındaki kayıtların sistem dağılımı.
- Otomotiv uzmanları, ekspertiz merkezleri ve model topluluklarıyla alıntılanabilir ortak çalışmalar hazırla.
- En çok gösterim alan sayfalarda başlık/özet testleri yap; değişiklikleri en az 28 gün ölç.
- Kaliteli sayfalara gelen doğal bağlantıları ve marka dışı sorgu büyümesini raporla.

## İlk içerik kuyruğu

1. “Motor arıza lambası neden yanar?” belirti rehberi
2. “DPF tıkanıklığı belirtileri ve ekspertiz kontrolü”
3. “DSG, EDC, PowerShift ve CVT karşılaştırması”
4. “Yağ eksilten araç alınır mı?”
5. “Hararet geçmişi olan araçta ne kontrol edilir?”
6. “Soğuk marşta zincir sesi ne anlatır?”
7. “Şanzıman vuruntusu test sürüşünde nasıl anlaşılır?”
8. “Yüksek kilometrede servis geçmişi nasıl okunur?”

Bu başlıklar ancak kaynak paketi tamamlandığında yayımlanır.

## Ölçüm panosu

- Kalite eşiğini geçen ve indekslenen URL sayısı
- Marka dışı organik gösterim ve tıklama
- İlk 3 / ilk 10 sorgu sayısı
- Model ve motor sayfalarının CTR'ı
- Arıza rehberinden model raporuna geçiş oranı
- Karşılaştırma başlatma oranı
- Mobil LCP, INP ve CLS geçiş oranı
- Kaynak paketi tamamlanma ve editoryal onay süresi

## Kaçınılacak yöntemler

- Sırf URL sayısını artırmak için seri üretim sayfalar
- Yapay kullanıcı yorumu veya rapor sayısı
- Kaynaksız kesin arıza/maliyet iddiaları
- Görünmeyen içeriğe ait schema işaretlemesi
- Aynı metnin marka/model adı değiştirilerek çoğaltılması
- Sıralama garantisi, sahte güncellik ve toplu backlink satın alma

Google için ayrı bir “AI SEO hilesi” yoktur. Sağlam teknik temel, benzersiz kaynak değeri, anlaşılır sayfa yapısı ve kullanıcıya gerçek karar desteği hem klasik sonuçlar hem de yapay zekâ destekli arama deneyimleri için aynı temeldir.
