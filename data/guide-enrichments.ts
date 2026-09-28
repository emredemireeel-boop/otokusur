interface GuideEnrichment {
    updatedDate: string;
    excerpt?: string;
    replaceContent?: string;
    appendContent?: string;
    keyTakeaways: string[];
    faqs: Array<{ question: string; answer: string }>;
}

const updatedDate = '2026-09-28';

export const guideEnrichments: Record<string, GuideEnrichment> = {
    'ikinci-el-arac-almadan-once-dikkat-edilmesi-gerekenler': {
        updatedDate,
        excerpt: 'İkinci el araçta bütçe, geçmiş sorgusu, soğuk motor, test sürüşü, ekspertiz ve güvenli ödeme adımlarını doğru sırayla uygulayın.',
        keyTakeaways: ['İlanı değil araç kimliğini doğrulayın: VIN, ruhsat, motor ve şanzıman kodu aynı hikâyeyi anlatmalı.', 'Kapora vermeden önce geçmiş sorgularını; satıştan önce bağımsız ekspertiz ve uzun yol testini tamamlayın.', 'Satış bedelini noter devriyle eş zamanlı çalışan Güvenli Ödeme Sistemi üzerinden aktarın.'],
        faqs: [
            { question: 'İkinci el araca bakmaya giderken ilk ne kontrol edilir?', answer: 'Araç çalıştırılmadan VIN-ruhsat eşleşmesini, motorun gerçekten soğuk olduğunu, gösterge uyarı lambalarının kontakta yanıp çalışınca söndüğünü ve kaporta ana taşıyıcılarını kontrol edin.' },
            { question: 'Hasar kaydı çıkmaması aracın kazasız olduğunu kanıtlar mı?', answer: 'Hayır. SBM kayıtları sigorta şirketlerine bildirilen belirli ödemelerle sınırlıdır. Sigortasız onarım, eski tarihli olay veya kayda girmeyen işlem bulunabilir; fiziksel gövde ölçümü yine gerekir.' },
            { question: 'Ekspertizi satıcının önerdiği yerde yaptırmak doğru mu?', answer: 'Çıkar çatışmasını azaltmak için hizmet yeterlilik durumunu doğruladığınız ve sizin seçtiğiniz bağımsız işletmeyi tercih edin; modele özel usta kontrolünü de ayrıca yaptırın.' },
            { question: 'Kapora ne zaman verilmelidir?', answer: 'Araç ve satıcı kimliği doğrulanmadan, temel sorgular yapılmadan ve yazılı şartlar belirlenmeden kapora vermeyin. Ödemenin amacı, iade koşulu ve araç VIN’i yazılı olmalıdır.' },
        ],
        replaceContent: `## İkinci El Araç Alımında Doğru Sıra

İyi bir ikinci el araç seçimi “boyasız mı?” sorusundan ibaret değildir. Doğru süreç; ihtiyacı tanımlama, aracın kimliğini doğrulama, geçmiş kayıtlarını okuma, soğuk mekanik kontrol, uzun test sürüşü, bağımsız ekspertiz ve güvenli satış aşamalarından oluşur. Bu halkalardan biri eksik kalırsa temiz görünen otomobil pahalı bir projeye dönüşebilir.

## 1. Toplam Sahip Olma Bütçesini Kurun

İlan fiyatını bütçenin tamamı saymayın. İlk bakım, lastik, akü, triger veya zincir kontrolü, şanzıman sıvısı, zorunlu sigorta, kasko, vergi ve beklenmeyen onarım için ayrı pay bırakın. Sabit bir yüzde her araç için doğru değildir: yaygın atmosferik manuel bir otomobille karmaşık hibrit veya premium dizelin başlangıç rezervi aynı olamaz.

| Bütçe kalemi | Sorulacak soru |
|---|---|
| Satın alma | Benzer motor, şanzıman, yıl ve hasar geçmişindeki araçların gerçek aralığı ne? |
| İlk bakım | Faturası olmayan hangi sıvı, filtre, kayış ve güvenlik parçası yenilenecek? |
| Yakın dönem | Lastik, fren, akü ve muayene ne zaman masraf çıkaracak? |
| Büyük risk | Motor, otomatik şanzıman, hibrit batarya veya emisyon sistemi için ne kadar rezerv gerekir? |

## 2. İlanı Elemeden Önce Satıcıya Sorun

- Araç kimin adına kayıtlı ve satışa ruhsat sahibi mi gelecek?
- VIN/şasi numarası, plaka, ruhsat motor hacmi ve güç bilgisi paylaşılabiliyor mu?
- Araç son 8-12 saat çalıştırılmadan görülebilir mi?
- Bakım faturaları, muayene kilometreleri ve iki anahtar mevcut mu?
- Boya/değişen, airbag, şasi, hararet ve şanzıman onarımı açıkça beyan ediliyor mu?
- Ekspertiz ve modele hâkim servis seçimini alıcı yapabiliyor mu?

Bu soruların tutarlı cevaplanmaması tek başına arıza kanıtı değildir; fakat inceleme riskini yükseltir. “Ekspertize gerek yok”, “arıza lambası sensörden” veya “yağı yeni değişti, kayıt yok” ifadelerini ölçümle doğrulamadan kabul etmeyin.

## 3. Araç Kimliği ve Geçmiş Zinciri

VIN; ön cam, gövde etiketi ve ruhsatta eşleşmelidir. VIN’den üretim tarihi, motor, şanzıman ve fabrika donanımı çıkarılabiliyorsa ilandaki bilgiyle karşılaştırın. Muayene kilometreleri, servis faturaları, SBM hasar verisi ve satıcının anlatımı kronolojik bir çizgide birbirini desteklemelidir.

SBM, hasar sorgusunun 2003’ten itibaren sigorta şirketlerinin bildirdiği kasko ve trafik sigortası ödemeleriyle sınırlı olduğunu açıklar. Bu nedenle “kayıt yok” sonucu “kaza yok” anlamına gelmez. Değişen parça ve gövde ölçümü, kayıt sorgusunun yerini değil tamamlayıcısını oluşturur.

## 4. Aracı Soğukken İnceleyin

Kaputa dokunarak ve soğutma suyu sıcaklığını cihazdan okuyarak aracın önceden ısıtılmadığını doğrulayın. Kontak açıldığında motor, ABS, airbag ve diğer uyarıların yanıp motor çalışınca normal biçimde sönmesini izleyin. İlk marş süresi, zincir/volan sesi, egzoz dumanı, rölanti ve fan davranışını kaydedin.

Yağın yalnız rengine bakmayın; yeni yağ kusuru gizleyebilir, koyu yağ ise dizelde tek başına arıza değildir. Seviye, metal parçacık, yakıt/soğutma suyu karışımı, dış kaçak, yağ basıncı ve bakım aralığı birlikte yorumlanmalıdır. Genleşme kabındaki tortu veya sürekli su eksiltme basınç ve yanma gazı testi gerektirir.

## 5. Gövde ve Güvenlik Yapısını Okuyun

Boyalı bir çamurluk ile işlem görmüş podye veya direk aynı risk değildir. Panel aralığı, cıvata izi, fabrika kaynakları, şasi uçları, podye, kule, direk, tavan, taban ve bagaj havuzu incelenmelidir. Airbag kapakları, kemer üretim tarihleri ve kontrol modülü de gövdeyle birlikte değerlendirilir.

Boya kalınlığında tek bir evrensel “fabrika değeri” yoktur; marka, panel malzemesi, renk ve üretim tesisine göre değişir. Ölçüm cihazı kalibre edilmeli, aynı araç üzerindeki simetri ve dağılım yorumlanmalıdır.

## 6. Test Sürüşünü Üç Aşamaya Bölün

1. **Soğuk düşük hız:** Direksiyon, debriyaj/kavrama, D-R geçişi, kasis sesi ve fren ilk tepkisi.
2. **Isınma:** Şehir içi dur-kalk, geri manevra, yokuş, klima açık yük ve farklı vitesler.
3. **Sıcak yük:** Güvenli yolda hızlanma, sabit hız, konvertör kilitleme/DSG kavrama, frenleme ve düz gidiş.

Devir yükselip hızlanmama, sıcak D-R gecikmesi, tekrarlayan titreme, direksiyon çekmesi veya sıcaklık sapması not edilmelidir. Kısa mahalle turu, ısınınca oluşan şanzıman ve soğutma sorunlarını göstermez.

## 7. Ekspertizi Doğru Kapsamla Alın

Standart paket her modele yetmez. Boya-şasi, fren-süspansiyon ve OBD taramasına ek olarak motor koduna özel kompresyon/kaçak, enjektör geri dönüşü, DPF verisi, şanzıman adaptasyonları, hibrit batarya hücre farkı veya ADAS kalibrasyonu gerekebilir. TSE hizmet yeterlilik kaydı kontrol edilmeli; rapordaki ölçüm şartı, cihaz ve sınırlamalar okunmalıdır.

## 8. Pazarlık ve Vazgeçme Kriteri

Bakım parçası fiyat düşürür; yapısal belirsizlik ve güvenlik kusuru ise çoğu zaman vazgeçme nedenidir. Onarım maliyetini tek telefon fiyatıyla değil parça, işçilik, kalibrasyon ve olası zincir hasarıyla hesaplayın. Satıcı bağımsız kontrole izin vermiyor, VIN bilgisi tutmuyor veya arıza kodları yeni silinmiş görünüyorsa belirsizlik için ödeme yapmayın.

## 9. Noter ve Güvenli Ödeme

Ticaret Bakanlığının 27 Ağustos 2024 tarihli düzenlemesi kapsamında ikinci el taşıt bedelinin, mülkiyet ile paranın eş zamanlı el değiştirmesini sağlayan yetkili Güvenli Ödeme Sistemi üzerinden aktarılması öngörülür. Son dakika farklı hesaba havale, elden ödeme veya açıklamasız kapora taleplerini kabul etmeyin. Noter öncesi alıcı-satıcı kimliği, VIN, bedel ve ödeme referansını son kez karşılaştırın.

### Resmî kaynaklar

- [Ticaret Bakanlığı Motorlu Kara Taşıtı Ticareti](https://risk.ticaret.gov.tr/ic-ticaret/motorlu-kara-tasiti-ticareti)
- [Güvenli Ödeme Sistemi duyurusu](https://sinop.ticaret.gov.tr/duyurular/ikinci-el-arac-alim-satiminda-guvenli-odeme-sistemi-zorunlu-hale-geliyor)
- [SBM araç geçmişi sorgulama kapsamı](https://mkt.sbm.org.tr/tr/web-sorgulama)`,
    },
    'kronik-ariza-nedir': {
        updatedDate,
        excerpt: 'Kronik arıza ile yaş, bakım ve tekil kullanıcı hatasını ayırın; forum iddiasını teknik bülten, parça revizyonu ve ölçümle doğrulayın.',
        keyTakeaways: ['“Kronik” sözcüğü aynı modeldeki her aracın arızalanacağı anlamına gelmez.', 'Sorun motor, şanzıman, üretim tarihi ve parça revizyonuyla sınırlandırılmadan güvenilir risk analizi yapılamaz.', 'Forum bildirimi bir erken uyarıdır; teşhis için araç özelinde ölçüm ve bakım kanıtı gerekir.'],
        faqs: [
            { question: 'Bir sorun kaç araçta görülürse kronik sayılır?', answer: 'Her arıza için geçerli tek bir yüzde yoktur. Aynı teknik kökenin bağımsız örneklerde tekrarı, üretici bülteni veya revize parça, motor-kod/yıl kümelenmesi ve normal aşınmadan erken ortaya çıkması birlikte değerlendirilir.' },
            { question: 'Kronik arızalı model kesinlikle alınmaz mı?', answer: 'Hayır. Revize parça uygulanmış, bakım geçmişi açık ve ölçümleri normal bir araç alınabilir. Arızanın güvenlik etkisi, tekrar ihtimali ve onarım maliyeti kararın parçasıdır.' },
            { question: 'Forum yorumları güvenilir mi?', answer: 'Belirti keşfi için yararlıdır; fakat örneklem ve teşhis doğrulanmadığı için tek başına oran veya kesin neden göstermez. Teknik doküman ve araç ölçümüyle çapraz kontrol edilmelidir.' },
            { question: 'Geri çağırma kronik arıza demek midir?', answer: 'Her zaman değil. Geri çağırma üreticinin belirli VIN aralığında güvenlik veya mevzuat riski için yürüttüğü düzeltmedir. Kronik kullanıcı şikâyeti geri çağırmaya dönüşmeyebilir; geri çağırma da arıza oluşmadan uygulanabilir.' },
        ],
        replaceContent: `## Kronik Arıza Nedir?

Kronik arıza, belirli bir araç, motor, şanzıman veya üretim döneminde aynı teknik kökten gelen sorunun bağımsız örneklerde beklenenden sık ya da erken tekrarlanmasıdır. “Bu modelde bir kişi yaşadı” demek kronik arıza kanıtı değildir; “bu araçların hepsi bozulur” demek de yanlıştır.

## Kronik Sorun, Aşınma ve Kullanıcı Hatası Farkı

| Durum | Tipik işaret | Örnek değerlendirme |
|---|---|---|
| Kronik tasarım/parça zayıflığı | Aynı kod ve dönemde benzer arıza, revize parça veya bülten | Belirli motor kodunda erken zincir uzaması |
| Normal aşınma | Yaş, kilometre ve kullanım yüküyle uyumlu | Debriyaj, fren, amortisör, akü |
| Bakım ihmali | Yanlış sıvı, gecikmiş değişim, hararet veya yağsız kullanım | Turbo yağ hattı tıkanması |
| Tekil üretim/onarım kusuru | Bir araca özgü montaj ya da önceki yanlış işlem | Hatalı takılmış triger veya tesisat |
| Belirti benzerliği | Aynı sesin farklı parçalardan gelebilmesi | Kasis sesinin kutu, z-rot veya takozdan gelmesi |

Bu ayrım önemlidir çünkü çözüm değişir. Kronik tasarım zayıflığında revize parça veya yazılım gerekirken, bakım ihmali doğru servis planıyla önlenebilir. Normal aşınma ise aracın satın alma bedeline eklenmesi gereken öngörülebilir maliyettir.

## Bir İddiayı Nasıl Doğrularız?

### 1. Araç kapsamını daraltın

Marka-model tek başına yeterli değildir. Motor kodu, şanzıman kodu, üretim ayı, gövde, pazar ve yazılım seviyesi belirlenmelidir. Aynı model adı altında zincirli ve kayışlı motor ya da kuru ve ıslak kavramalı şanzıman bulunabilir.

### 2. Bağımsız sinyalleri karşılaştırın

- Üretici teknik servis bülteni veya geri çağırma kaydı
- Parça numarası/revizyon değişikliği
- Yetkili ve uzman servis teşhis örnekleri
- Birbirinden bağımsız kullanıcı raporları
- Teknik otorite, güvenlik kurumu veya dava/garanti verisi
- Aracın kendi hata kodu, canlı verisi ve mekanik ölçümü

Forumlarda aynı cümlenin kopyalanması bağımsız rapor değildir. Buna karşılık farklı kullanıcıların aynı motor kodunda, benzer kilometre ve aynı teşhis sonucunu bildirmesi araştırmaya değer bir sinyaldir.

## Risk Seviyesi Nasıl Belirlenir?

Sıklık tek başına yetmez. Bir trim sesinin sık görülmesiyle yağ basıncı kaybının nadir görülmesi aynı risk değildir.

| Boyut | Sorulacak soru |
|---|---|
| Güvenlik | Arıza fren, direksiyon, yangın veya kontrol kaybı riski yaratıyor mu? |
| Sonuç | İhmal edilirse zincirleme motor/şanzıman hasarı doğuruyor mu? |
| Tespit | Satın alma öncesi ölçümle yakalanabiliyor mu? |
| Çözüm | Revize ve kalıcı bir parça/yazılım var mı? |
| Maliyet | Parça, işçilik, kodlama ve kalibrasyon toplamı ne? |
| Tekrar | Onarım aynı eski tasarımla mı, revize çözümle mi yapıldı? |

## İkinci El Araçta Kronik Arıza Kontrolü

1. VIN’den motor ve şanzıman kodunu çıkarın.
2. Sorunun hangi üretim aralığını etkilediğini belirleyin.
3. Faturadaki parça numarasının revize çözüm olup olmadığını doğrulayın.
4. Araç tamamen soğukken ilgili belirtiyi test edin.
5. Hata kodu yanında canlı veri, adaptasyon ve mekanik ölçüm isteyin.
6. Onarım yapılmadıysa gerçek maliyet ve parça bulunabilirliğini yazılı tekliflerle hesaplayın.

## Forum Bilgisi Nasıl Okunmalı?

“Bende olmadı” bir sorunun var olmadığını; “üç kez bozuldu” bütün araçların bozulacağını göstermez. Kullanıcının motor kodu, kilometresi, bakım ürünü, kullanım biçimi ve gerçek servis teşhisi yoksa rapor yalnızca belirtidir. En yararlı forum mesajları; üretim yılı, motor/şanzıman kodu, hata kodu, ölçüm, değişen parça ve onarım sonrası sonucu birlikte verir.

## OtoKusur Risk Etiketleri Nasıl Kullanılır?

OtoKusur’daki maddeler araç özelinde kesin teşhis değil, ekspertize taşınacak kontrol noktalarıdır. Rapor sayısı sıfır olan başlıklar yayımlanmış kullanıcı oyu anlamına gelmez; teknik kaynak ve satın alma kontrolü olarak sunulur. Son karar, ilgili aracın servis geçmişi ve ölçümüyle verilmelidir.

## Ne Zaman Vazgeçilmeli?

Satıcı VIN/motor kodunu saklıyor, araç soğuk gösterilmiyor, arıza kayıtları yeni silinmiş, onarım faturası yok veya güvenlik etkili sorun için geçici yazılım/mekanik çözüm uygulanmışsa risk fiyat indiriminden büyüktür. Revize çözümü kanıtlı ve ölçümleri normal araç ise sırf modelin internette kötü ünü var diye otomatik elenmemelidir.`,
    },
    'aracta-motor-arizasi-nasil-anlasilir': {
        updatedDate,
        excerpt: 'Motor arızasını ses veya duman tahminiyle değil; soğuk çalışma, sıvı, OBD canlı veri, kompresyon ve basınç testleriyle değerlendirin.',
        keyTakeaways: ['Motoru tamamen soğukken görmek, gizlenen zincir, enjektör ve yağ basıncı belirtilerini yakalamanın ilk adımıdır.', 'Arıza kodu tek başına parça teşhisi değildir; kodun oluşma koşulu ve canlı veri gerekir.', 'Yağ basıncı, hararet, yoğun vuruntu veya yakıt kaçağı varsa sürüşe devam etmek ikincil hasarı büyütebilir.'],
        faqs: [
            { question: 'Mavi, beyaz ve siyah egzoz dumanı her zaman ne anlama gelir?', answer: 'Renk bir ipucudur, kesin teşhis değildir. Yoğun kalıcı mavi yağ yanmasını; sıcak motorda kalıcı tatlı kokulu beyaz duman soğutma suyu girişini; siyah duman zengin karışım veya hava/yakıt sorununu düşündürür. Ortam sıcaklığı ve dizel rejenerasyonu da hesaba katılır.' },
            { question: 'Motor arıza lambası yanmıyorsa motor sağlam mıdır?', answer: 'Hayır. Mekanik aşınma, düşük kompresyon, yağ tüketimi veya erken zincir sorunu eşik aşmadan kod üretmeyebilir; lamba da daha önce silinmiş olabilir.' },
            { question: 'Kompresyon testi tek başına yeterli mi?', answer: 'Hayır. Silindirler arası denge, kaçak testi, yağ basıncı, endoskop, soğutma basıncı ve canlı veriler belirtiye göre birlikte kullanılır.' },
            { question: 'Motor yeni yıkandıysa ne yapılmalı?', answer: 'Kaçak izleri gizlenebileceği için şüphe artar. Araç uzun testten sonra tekrar liftte incelenmeli; gerekirse UV boya veya basınç testi uygulanmalıdır.' },
        ],
        replaceContent: `## Motor Arızası Nasıl Anlaşılır?

Motor arızası tek bir sesten veya egzoz renginden teşhis edilmez. Aynı belirti ateşleme, yakıt, hava, yağlama, soğutma veya mekanik sıkıştırma kaynaklı olabilir. Doğru yaklaşım belirtinin ne zaman oluştuğunu kaydetmek, elektronik veriyi mekanik testlerle doğrulamak ve en ucuz parçadan başlayarak rastgele değişim yapmamaktır.

## Önce Acil Durumu Ayırın

Aşağıdaki belirtilerde motoru zorlamayın; güvenli yerde durup profesyonel yardım alın:

- Kırmızı yağ basıncı uyarısı veya metalik yatak vuruntusu
- Hızla yükselen sıcaklık, buhar veya yoğun soğutma suyu kaybı
- Yakıt kokusu ve görünür yakıt kaçağı
- Şiddetli tekleme ile yanıp sönen motor lambası
- Triger/zincir bölgesinden aniden başlayan sert mekanik ses
- Motorun kendi kendine kontrolsüz devirlenmesi

## Soğuk Çalıştırma Neden Kritik?

Araç en az 8-12 saat beklemiş olmalıdır. Kaput ve soğutma suyu sıcaklığını kontrol edin. Kontak açıldığında uyarı lambalarının test döngüsünü, marş süresini, ilk birkaç saniyedeki zincir/yağ basıncı sesini, dumanı ve rölanti toparlamasını izleyin. Satıcının aracı önceden ısıtması tek başına kusur kanıtı değildir ama soğuk testin yeniden planlanmasını gerektirir.

## Belirtiyi Sisteme Göre Okuyun

| Belirti | Olası alanlar | Doğrulama |
|---|---|---|
| Uzun marş | Akü-marş, yakıt basıncı, enjektör, kompresyon, sensör | Voltaj düşümü, rail basıncı, geri dönüş, kompresyon |
| Düzensiz rölanti | Bobin-buji, enjektör, vakum, EGR, kompresyon | Misfire sayacı, yakıt düzeltmesi, duman testi |
| Güç kaybı | Turbo, hava kaçağı, yakıt, DPF/katalizör, zamanlama | Hedef-gerçek basınç, egzoz karşı basıncı, faz verisi |
| Yağ eksiltme | Dış kaçak, PCV, turbo, supap keçesi, segman | Kaçak, vakum, endoskop, kompresyon/kaçak testi |
| Su eksiltme | Hortum-radyatör, pompa, termostat, conta | Basınç testi, UV, yanma gazı testi |

## Egzoz Dumanını Doğru Yorumlayın

Soğuk havadaki ince su buharı normal olabilir. Kalıcı mavi-gri duman yağ girişini; motor ısındıktan sonra süren yoğun beyaz duman soğutma suyu girişini; siyah duman aşırı yakıt veya yetersiz havayı düşündürür. Dizelde DPF rejenerasyonu koku, fan ve anlık tüketim değişimi yapabilir. Renk, koku, sıcaklık, yük ve sıvı seviyesi birlikte değerlendirilmelidir.

## Yağ ve Soğutma Sıvısı Kontrolü

Yağın “açık renk” olması sağlamlık kanıtı değildir; dizel yağı kısa sürede koyulaşabilir, satış öncesi yeni yağ da sorunu örtebilir. Doğru seviyede olup olmadığına, yakıt kokusuna, metalik parçacığa, kapak çevresindeki yoğun emülsiyona ve gerçek bakım şartnamesine bakın. Soğutma kabında yağ, pas, tortu, sürekli kabarcık veya sertleşen hortum daha ileri test ister.

## OBD Taraması Nasıl Yapılmalı?

Yalnız mevcut hata kodlarını okumak yetersizdir. Bekleyen ve kalıcı kodlar, donmuş kare verisi, readiness monitörleri, kodların silinmesinden beri geçen mesafe, yakıt düzeltmeleri, misfire sayacı, sıcaklık, hava kütlesi, yakıt/turbo basıncı ve motor fazı değerlendirilmelidir. “Oksijen sensörü kodu” her zaman sensörün bozuk olduğu anlamına gelmez; vakum kaçağı veya yakıt sorunu da aynı kodu üretir.

## Mekanik Testler Ne Zaman Gerekir?

### Kompresyon ve silindir kaçak testi

Silindirler arası farkı ve kaçağın emme, egzoz, segman veya conta yönünü anlamaya yardım eder. Test yöntemi, motor sıcaklığı ve akü hızı sonucu etkiler.

### Yağ basıncı testi

Gösterge lambasının sönmesi her koşulda yeterli basınç olduğunu kanıtlamaz. Özellikle zincir sesi, yatak sesi veya turbo arızasında manometreyle soğuk-sıcak ölçüm gerekebilir.

### Soğutma basıncı ve yanma gazı testi

Gözle görünmeyen kaçak ile kapak conta şüphesini ayırır. Tek test sonucu her zaman kesin değildir; sıcaklık ve kaçak izleme ile birlikte yorumlanır.

### Endoskop ve enjektör testi

Silindir içi yüzey, supap veya sıvı girişini görmeye; dizelde geri dönüş testi enjektörler arasındaki farkı belirlemeye yardımcı olur.

## Satın Alma Öncesi Motor Kontrol Sırası

1. VIN ve motor kodunu doğrulayın.
2. Fatura, yağ şartnamesi ve bakım aralığını inceleyin.
3. Tam soğuk ilk çalıştırmayı gözlemleyin.
4. Tüm modülleri ve canlı veriyi tarayın.
5. Uzun test sürüşünde düşük-yüksek yük ve sıcaklık davranışını izleyin.
6. Dönüşte kaçak, basınç, fan ve sıvıları tekrar kontrol edin.
7. Belirti varsa probleme uygun mekanik testi yaptırın.

Motor raporu “şu parça bozuk” şeklinde tahmin değil; bulgu, ölçüm, tolerans ve önerilen sonraki testleri içermelidir.`,
    },
    'sanziman-sorunu-olan-arac-alinir-mi': {
        updatedDate,
        excerpt: 'Şanzıman arızalı araçta belirtiyi motor kulağı veya yazılımla karıştırmadan kod, sıcak test, yağ ve onarım kapsamıyla karar verin.',
        keyTakeaways: ['Şanzıman tipi ve kodu VIN’den doğrulanmadan “DSG, CVT veya tam otomatik” genellemesi yapılmaz.', 'Kısa ve soğuk test yeterli değildir; birçok vuruntu, kayma veya koruma belirtisi yağ ısındığında ortaya çıkar.', 'Arızalı araç ancak teşhis, yazılı onarım teklifi ve ikincil hasar riski netse fiyatlandırılabilir.'],
        faqs: [
            { question: 'Şanzıman yağı rengine bakarak arıza anlaşılır mı?', answer: 'Tek başına hayır. Sıvının türü, seviyesi, sıcaklığı, kokusu ve içindeki metal/debris önemlidir; bazı şanzımanlarda seviye özel sıcaklık prosedürüyle ölçülür.' },
            { question: 'Vites geçiş vuruntusu kesin şanzıman arızası mı?', answer: 'Hayır. Motor/şanzıman kulağı, ateşleme, aks boşluğu, düşük voltaj veya yazılım/adaptasyon da benzer his yaratabilir. İki sistem ayrı test edilmelidir.' },
            { question: 'Yağ değişimi bozuk şanzımanı düzeltir mi?', answer: 'Bakım eksikliğinde fayda sağlayabilir fakat aşınmış kavrama, valf gövdesi veya mekanik hasarı onarmaz. Yanlış sıvı veya hatalı dolum yeni sorun da yaratabilir.' },
            { question: 'Revizyonlu şanzımanlı araç alınır mı?', answer: 'Revizyon kapsamı, kullanılan parça, işçilik faturası, garanti ve onarım sonrası adaptasyon/test kayıtları açıksa değerlendirilebilir. “Komple yapıldı” sözlü beyanı yeterli değildir.' },
        ],
        replaceContent: `## Şanzıman Sorunu Olan Araç Alınır mı?

Kesin teşhisi ve yazılı maliyeti olmayan şanzıman arızalı araç, indirimli otomobilden çok açık uçlu bir projedir. Buna karşılık sorun doğru tanımlanmış, ikincil hasar oluşmamış ve revize çözüm uygulanabiliyorsa araç ekonomik olarak değerlendirilebilir. Karar “bu tip şanzıman iyidir/kötüdür” genellemesiyle değil, şanzıman kodu ve ölçümle verilmelidir.

## Önce Şanzıman Tipini Doğrulayın

| Tip | Normal karakter | Kritik kontrol |
|---|---|---|
| Manuel | Debriyajla kesilen güç, sürücü kontrollü geçiş | Debriyaj, volan, senkromeç, rulman, kaçak |
| Tork konvertörlü otomatik | Kalkışta hidrolik kayma, kademeli geçiş | Sıvı, konvertör kilitleme, valf gövdesi, adaptasyon |
| Çift kavramalı DCT/DSG | Hızlı geçiş, düşük hızda kavrama yönetimi | Kuru/ıslak tip, kavrama aşınması, mekatronik, sıcaklık |
| CVT | Devir ve hızın klasik vites gibi eşleşmemesi | Doğru sıvı, basınç, kayış/zincir-kasnak, ısınma |
| Robotize manuel | Geçişte kısa güç kesintisi | Kavrama noktası, aktüatör, kalibrasyon, akü voltajı |

Aynı ticari ad farklı şanzıman kodlarını kapsayabilir. Örneğin kuru ve ıslak çift kavrama aynı bakım planına sahip değildir. VIN, üretim etiketi veya teşhis cihazıyla kodu doğrulayın.

## Belirtiyi Doğru Tanımlayın

- **D-R gecikmesi:** Basınç, seviye, valf gövdesi, kavrama veya konvertör.
- **Kalkış titremesi:** Kavrama kadar motor kulağı, ateşleme ve aks boşluğu.
- **Devir yükselip hızlanmama:** Kavrama/balata kayması, basınç veya mekanik aşınma.
- **Sabit hız titremesi:** Konvertör kilitleme, motor düzensizliği, lastik/aks.
- **Uğultu:** Rulman, diferansiyel, CVT kasnağı veya lastik.
- **Isınınca koruma modu:** Sıcaklık, basınç, solenoid/mekatronik veya yanlış sıvı.

Belirtinin hangi sıcaklıkta, viteste, yükte ve yol eğiminde oluştuğunu kaydetmek teşhisi hızlandırır.

## Yol Testi Protokolü

### Soğuk aşama

Araç çalışmadan sıvı kaçağına bakın. İlk D-R seçimini, gecikmeyi ve vuruntuyu gözleyin. Manuelde debriyaj kavrama noktası, pedalda titreşim ve geri vites seçimi denenir.

### Isınma aşaması

Dur-kalk, düşük hız, geri manevra ve yokuş yapın. DCT/robotize şanzımanı uzun süre gazla süründürmeyin; normal kullanımda kavrama sıcaklığını ve adaptasyonları izleyin.

### Sıcak yük aşaması

Güvenli koşullarda farklı gaz açıklıkları, yavaşlama, sabit hız ve kick-down uygulanır. Dönüşte kaçak ve sıcaklık tekrar kontrol edilir. 5 dakikalık tur, ısınınca ortaya çıkan arızayı dışlamaz.

## Teşhis Raporunda Ne Olmalı?

- Şanzıman kodu, yazılım ve üretim bilgisi
- Mevcut, bekleyen ve geçmiş hata kodları
- Sıcaklık, basınç, giriş-çıkış hızı ve kayma verileri
- Kavrama aşınma/temas ve adaptasyon değerleri
- Sıvı türü, seviye prosedürü ve içindeki metal bulgusu
- Takoz, aks, motor çalışma düzgünlüğü ve şarj voltajı
- Gerekirse karter/filtre incelemesi ve hidrolik basınç testi

Kod silmek veya adaptasyonu sıfırlamak onarım değildir. İşlem sonrası değerler kısa süreli normalleşebilir; kök neden çözülmediyse belirti geri döner.

## Onarım Maliyetini Nasıl Hesaplayın?

Sadece “kavrama fiyatı” sormayın. Volan, yağ/filtre, mekatronik/valf gövdesi, konvertör, yazılım-kodlama, işçilik, soğutma devresi ve garanti dahil yazılı kapsam alın. Şanzıman içindeki metal başka parçaları kirlettiyse yalnız arızalı modülü değiştirmek tekrar riski yaratabilir.

## Hangi Durumda Alınabilir?

- Teşhis iki uzman tarafından aynı kök nedeni gösteriyorsa
- Hasarın sınırı ve ikincil hasar riski açıklanmışsa
- Revize/orijinal parça ve işçilik kapsamı yazılıysa
- Satın alma indirimi en kötü makul senaryoyu karşılıyorsa
- Araç gövde, motor ve diğer sistemlerde ayrıca temizse

## Hangi Durumda Vazgeçilmeli?

Şanzıman kodu belirsiz, yağ içine yoğun metal yayılmış, araç hareket etmiyor, modüller iletişim kurmuyor, arıza kodları satıştan hemen önce silinmiş veya satıcı uzun sıcak teste izin vermiyorsa risk hesaplanamaz. “Sadece yağ değişecek” gibi ölçümsüz vaatleri fiyatlandırmayın.`,
    },
    'ekspertiz-raporunda-nelere-bakilir': {
        updatedDate,
        excerpt: 'Ekspertiz raporunu renklerden değil ölçüm yöntemi, tolerans, kapsam dışı alanlar ve modele özel testlerle okuyun.',
        keyTakeaways: ['Ekspertiz raporu aracın o andaki, test edilen kapsam içindeki durumunu gösterir; gelecek garantisi değildir.', 'Boya mikronu için evrensel tek aralık yoktur; panel malzemesi ve araç içi dağılım yorumlanmalıdır.', 'Standart OBD taramasını motor-şanzıman koduna özel mekanik ve canlı veri testleriyle tamamlayın.'],
        faqs: [
            { question: 'Ekspertiz raporunda yeşil renk araç kusursuz demek mi?', answer: 'Hayır. Renk kodu işletmenin sınıflandırmasıdır. Test kapsamı, tolerans, cihaz, koşul ve notlar okunmadan tek başına karar verilemez.' },
            { question: 'Boya ölçümünde kaç mikron orijinaldir?', answer: 'Her araç için geçerli tek sayı yoktur. Fabrika, panel malzemesi, renk ve daha önceki ölçüm koşulu sonucu değiştirir; aynı araçtaki panel dağılımı ve görsel/bağlantı kontrolü birlikte yorumlanır.' },
            { question: 'Dyno testi motor sağlığını kesin gösterir mi?', answer: 'Hayır. Lastik, ortam, şanzıman ve cihaz yöntemi sonucu etkiler; bazı dört çeker/hibrit araçlarda uygun olmayan test zarar verebilir. Kompresyon, kaçak ve canlı verinin yerine geçmez.' },
            { question: 'Ekspertizden sonra ayrıca ustaya göstermek gerekir mi?', answer: 'Karmaşık veya bilinen özel riskleri olan motorda evet. Genel ekspertiz; zincir fazı, DPF külü, hibrit batarya veya şanzıman adaptasyonu gibi marka özel testleri içermeyebilir.' },
        ],
        replaceContent: `## Ekspertiz Raporu Nasıl Okunur?

Ekspertiz raporu bir “geçti/kaldı” belgesi değil, belirli zamanda ve belirli kapsamda alınmış ölçümlerin özetidir. İyi rapor bulguyu, kullanılan yöntemi, toleransı, test koşulunu ve kapsam dışı alanları açıklar. Renkli kutular ve genel “motor yüzde” skoru tek başına satın alma kararı vermemelidir.

## İşletme ve Kapsam Doğrulaması

Ekspertizden önce işletmenin TSE hizmet yeterlilik belgesini ve belgenin araç/test kapsamını doğrulayın. Sipariş formunda boya-şasi, fren, süspansiyon, elektronik, yol testi, motor ve şanzıman kontrollerinden hangilerinin dahil olduğunu yazılı görün. Ticaret Bakanlığının 2024 düzenlemesi noterlerin, ibraz edilen raporda ekspertiz işletmesinin hizmet yeterlilik bilgisini TSE sistemlerinden kontrol etmesini öngörür.

## Kaporta ve Boya Bölümü

### Boya kalınlığı

“80-150 mikron kesin orijinal” gibi evrensel aralık yoktur. Metal/alüminyum/plastik panel, üretim tesisi ve renk süreci farklı sonuç verir. Cihaz kalibrasyonu, her panelde birden fazla nokta ve simetrik paneller arasındaki dağılım önemlidir.

### Değişen panel ve bağlantılar

Cıvata anahtar izi, fabrika mastik/kaynak düzeni, panel tarihi ve geometrisi birlikte değerlendirilir. Değişmiş vidalı çamurlık ile kesilip kaynaklanmış direk aynı yapısal risk değildir.

### Ana taşıyıcılar

Şasi uçları, podye, kule, direkler, tavan, marşpiyel içi, taban ve bagaj havuzu raporda ayrı gösterilmelidir. Airbag kapakları, emniyet kemerleri ve modül taraması da hasar yorumunun parçasıdır.

## Motor Raporu

| Bulgudan fazlası | Neden gerekir? |
|---|---|
| Soğuk ilk çalışma | Zincir, enjektör, yağ basıncı ve duman belirtileri sıcak motorda gizlenebilir |
| OBD canlı veri | Hata kodu olmayan sapmaları ve yeni silinmiş kayıtları görmeye yardım eder |
| Kompresyon/kaçak | Silindir sızdırmazlığını karşılaştırır; “motor yüzdesi”nden daha anlamlıdır |
| Yağ basıncı | Yatak, zincir ve turbo yağlaması için doğrudan veri sağlar |
| Soğutma basıncı | Küçük kaçak ve hararet riskini ortaya çıkarır |

Dyno sonucu; motor, şanzıman, lastik ve ölçüm koşulundan etkilenir. Tek bir güç yüzdesi motor ömrünü göstermez. Hibrit, dört çeker veya arızalı araçta üretici prosedürü bilinmeden dyno uygulanmamalıdır.

## Şanzıman ve Aktarma

Rapor şanzıman kodunu, sıvı/kaçak bulgusunu, hata-adaptasyon değerlerini ve soğuk-sıcak yol testini içermelidir. DCT’de kavrama/mekatronik; CVT’de basınç ve kayma; tork konvertörlü otomatikte kilitleme ve valf gövdesi; robotize manuelde kavrama noktası/aktüatör kontrol edilir. Dört çeker araçta transfer kutusu, diferansiyel ve dört lastiğin çevre uyumu önemlidir.

## Fren, Süspansiyon ve Lastik

Fren testindeki sağ-sol farkı; disk/balata kadar lastik, kaliper veya süspansiyondan etkilenebilir. Amortisör cihaz sonucu fiziksel kaçak, burç/rotil boşluğu ve yol testiyle yorumlanır. Lastik DOT tarihi tek başına yetmez; diş, çatlak, onarım, yük-hız sınıfı ve dört teker aşınma deseni rapora girmelidir.

## Elektronik ve Güvenlik Sistemleri

Yalnız motor modülü değil airbag, ABS/ESP, şanzıman, gövde, klima, park freni, radar ve kamera modülleri taranmalıdır. “Hata yok” sonucunda readiness ve kod silinme zamanı kontrol edilir. Ön cam/tampon değişmiş araçta ADAS kalibrasyon belgesi ve gerçek fonksiyon testi aranır.

## Hibrit ve Elektrikli Araç Ek Testleri

- Yüksek voltaj hata geçmişi ve izolasyon durumu
- Batarya hücre/blok farkları, sıcaklıklar ve sağlık tahmini
- AC/DC şarj portu ve mümkünse şarj testi
- Alt batarya muhafazası, darbe ve sıvı kaçağı
- 12 V akü ve DC-DC sistemi
- Batarya garantisi ve servis kampanyaları

Tek bir “batarya yüzde” değeri test yöntemi açıklanmadan yeterli değildir.

## Raporun Kırmızı Bayrakları

- Araç ekspertize sıcak getirildi ve bu durum yazılmadıysa
- VIN veya kilometre raporda yok/yanlışsa
- Ölçüm değerleri yerine yalnız yeşil-sarı-kırmızı kullanılmışsa
- Hata kodları açıklamasız silindiyse
- Şasi, airbag veya yol testi kapsam dışı olduğu halde sonuç genelleniyorsa
- Satıcı raporun aslı veya doğrulama numarasını paylaşmıyorsa

## Ekspertiz Sonrası Karar

Bulguları güvenlik, yakın bakım ve belirsiz risk olarak üçe ayırın. Güvenlik/yapısal kusur çoğu zaman vazgeçme nedenidir. Lastik, fren veya periyodik bakım fiyatlandırılabilir. Kaynağı bulunmamış hararet, yağ basıncı, şanzıman kayması veya airbag müdahalesi ise uzman ikinci test olmadan pazarlığa çevrilmemelidir.

### Resmî kaynaklar

- [Ticaret Bakanlığı Motorlu Kara Taşıtı Ticareti](https://risk.ticaret.gov.tr/ic-ticaret/motorlu-kara-tasiti-ticareti)
- [TSE belge sorgulama sistemi](https://basvuruportal.tse.org.tr/Genel/BelgeListesi.aspx)`,
    },
    'lpg-donusumunde-dikkat-edilmesi-gerekenler': {
        updatedDate,
        excerpt: 'LPG uyumunu yalnız marka veya atmosferik-turbo ayrımıyla değil motor kodu, enjeksiyon, supap yapısı, montaj ve kalibrasyonla değerlendirin.',
        keyTakeaways: ['LPG uyumu model adına değil motor kodu, enjeksiyon tipi, supap malzemesi ve kit stratejisine bağlıdır.', 'Montajdan önce benzin sistemi ve kompresyon sağlıklı olmalı; LPG mevcut motor kusurunu düzeltmez.', 'Kalibrasyon, sızdırmazlık, tank tarihi ve iki yakıtta OBD yakıt düzeltmeleri satın alma kontrolünün parçasıdır.'],
        faqs: [
            { question: 'Her atmosferik benzinli motor LPG’ye uygun mudur?', answer: 'Hayır. Port enjeksiyon genellikle daha kolaydır ama supap/yuva malzemesi, ayar sistemi, motor kodu ve kalibrasyon yine önemlidir.' },
            { question: 'Direkt enjeksiyonlu motora LPG takılır mı?', answer: 'Uygun motor koduna özel sistem bulunabilir; benzin katkılı çalışma, enjektör koruması, yazılım ve ekonomik geri dönüş klasik MPI’dan farklıdır.' },
            { question: 'LPG supap yakar mı?', answer: 'Yanlış/fakir ayar, yüksek egzoz sıcaklığı, hassas supap yuvası ve ihmal edilen boşluk riski artırabilir. Doğru kit tek başına yetmez; kalibrasyon ve mekanik takip gerekir.' },
            { question: 'LPG’li ikinci el araçta hangi test yapılır?', answer: 'Benzin ve LPG’de ayrı soğuk-sıcak sürüş, kaçak/sızdırmazlık, tank tarihi, yakıt düzeltmeleri, misfire, kompresyon ve supap ayar geçmişi kontrol edilir.' },
        ],
        replaceContent: `## LPG Dönüşümünde Doğru Karar Nasıl Verilir?

LPG dönüşümü yalnız yakıt fiyatı hesabı değildir. Motorun teknik uyumu, yıllık kullanım, benzin tüketmeye devam eden direkt enjeksiyon stratejisi, bakım ve olası supap maliyeti birlikte hesaplanmalıdır. “Atmosferikse olur”, “turbo ise olmaz” gibi genellemeler motor kodu düzeyinde kararın yerini tutmaz.

## Uyum Analizinde Beş Teknik Soru

1. Motor port enjeksiyonlu mu, direkt enjeksiyonlu mu, ikisini birlikte mi kullanıyor?
2. Üretici motor kodu için kit/yazılım desteği ve montaj şeması var mı?
3. Supap boşluğu mekanik mi hidrolik mi; kontrol aralığı nedir?
4. Motorun yağ tüketimi, kompresyonu, soğutması ve benzin sistemi sağlıklı mı?
5. Turbo, egzoz sıcaklığı ve tam yükte benzin katkısı nasıl yönetilecek?

## Enjeksiyon Tipine Göre Fark

| Motor yapısı | LPG yaklaşımı | Kritik konu |
|---|---|---|
| Port enjeksiyonlu MPI | Sıralı gaz fazı sistemleri yaygın | Enjektör yerleşimi, kalibrasyon, supap sağlığı |
| Direkt enjeksiyon GDI/TSI vb. | Motor koduna özel kit; benzin katkısı olabilir | Benzin enjektörü, strateji/yazılım, geri dönüş hesabı |
| Turbo benzinli | Uygun kit varsa mümkün olabilir | Tam yük karışımı, basınç, egzoz sıcaklığı |
| Hibrit benzinli | Motor koduna uygun sistemle teknik olarak mümkün olabilir | Sık dur-kalk, geçiş kalibrasyonu, garanti |
| Dizel | Klasik benzinli dönüşümü değildir; özel çift yakıt uygulaması | Mevzuat, ekonomik amaç ve uzmanlık tamamen farklıdır |

CVT veya başka bir şanzıman tipi LPG uyumunu doğrudan belirlemez; yanlış motor torku/kalibrasyonu sürüş kalitesini etkileyebilir. Asıl karar motor ve kit stratejisidir.

## Montajdan Önce Motor Sağlığı

LPG, bozuk benzin enjektörünü, düşük kompresyonu veya zayıf bobini düzeltmez. Montajdan önce:

- Benzinde soğuk/sıcak çalışma ve yol testi
- OBD hata, misfire ve yakıt düzeltmeleri
- Kompresyon; gerekirse silindir kaçak testi
- Supap boşluğu ve üretici toleransı
- Soğutma sistemi basıncı ve çalışma sıcaklığı
- Buji, bobin, vakum ve benzin basıncı

kontrol edilmelidir. Sorunlu motora LPG takmak teşhisi zorlaştırır.

## Doğru Montajın İşaretleri

Enjektör nozulları emme kanalına uygun ve eşit mesafede, hortumlar kısa/düzenli, regülatör kapasitesi motor gücüne uygun olmalıdır. Elektrik bağlantıları kes-bant yöntemiyle bırakılmamalı; sigorta, röle, topraklama ve kablo koruması düzgün yapılmalıdır. Tank, multivalf, dolum ağzı ve borular mevzuata uygun sabitlenmelidir.

## Kalibrasyon Nasıl Kontrol Edilir?

Rölantide yapılan ayar yeterli değildir. Düşük-orta-yüksek yükte benzin ve LPG yakıt düzeltmeleri karşılaştırılır. Motor fakir veya zengin çalışmamalı, tam yükte üreticinin benzin katkı stratejisi korunmalı ve geçiş sarsıntısız olmalıdır. Arıza lambasını yazılımdan bastırmak veya adaptasyonu sıfırlamak doğru kalibrasyon değildir.

## LPG’li İkinci El Araç Kontrolü

### Belge ve donanım

Tank üretim/tarih bilgisi, montaj faturası, ruhsata işleme, sızdırmazlık ve periyodik filtre kayıtlarını inceleyin. Kit ECU, enjektör ve regülatörün gerçekten faturadaki parçalarla eşleştiğini kontrol edin.

### İki yakıtta test

Araç benzinde soğuk çalıştırılmalı; benzinle yük testi yapıldıktan sonra LPG’ye geçirilmelidir. Tekleme yalnız bir yakıtta oluşuyorsa sistem ayrımı kolaylaşır. Benzin deposunu sürekli boş kullanan araçta pompa/enjektör sorunu ayrıca görülebilir.

### Mekanik sağlık

Supap ayar faturası, kompresyon, buji görünümü ve soğutma sistemi kontrol edilmelidir. “LPG’de çok iyi gidiyor” benzin sisteminin ve kompresyonun sağlam olduğunu kanıtlamaz.

## Tasarruf Hesabı

Güncel fiyatları makaleye sabitlemek yerine kendi tüketiminizi ölçün:

**Kilometre başı benzin maliyeti** ile **LPG tüketimi + eş zamanlı benzin tüketimi + ek bakım payı** arasındaki farkı hesaplayın. Montaj bedelini bu gerçek farkla bölerek geri ödeme kilometresini bulun. Kısa yıllık kilometre, direkt enjeksiyonda yüksek benzin katkısı veya yaklaşan supap masrafı geri dönüşü uzatır.

## Ne Zaman Vazgeçilmeli?

Motor koduna özel kit/yazılım yoksa, motor zaten yağ yakıyor veya kompresyon dengesizse, montaj belgesizse, tank/hatlarda korozyon-kaçak varsa ya da satıcı aracı benzinde denetmiyorsa risk yüksektir. Uyumlu motor, düzgün montaj ve ölçümlü kalibrasyon olduğunda LPG ekonomik bir seçenek olabilir.`,
    },
    'otomatik-sanziman-turleri-ve-guvenilirlik': {
        updatedDate,
        excerpt: 'Tork konvertörü, DCT/DSG, CVT ve robotize manueli çalışma biçimi, kullanım profili ve satın alma testiyle karşılaştırın.',
        keyTakeaways: ['Şanzıman teknolojisi tek başına güvenilirlik sıralaması oluşturmaz; kod, tork yükü, yazılım, kullanım ve bakım belirleyicidir.', '“Ömürlük yağ” ifadesi kontrolsüzlük anlamına gelmez; üreticinin araç, pazar ve kullanım koşuluna uygun prosedürü izlenmelidir.', 'En doğru şanzıman, sürüş profilinize uyan ve geçmişi belgeli olan kombinasyondur.'],
        faqs: [
            { question: 'En güvenilir otomatik şanzıman hangisidir?', answer: 'Tek bir teknoloji her modelde en güvenilir değildir. Belirli şanzıman kodunun motor torkuyla eşleşmesi, revizyonu, soğutması, yazılımı ve bakım geçmişi değerlendirilmelidir.' },
            { question: 'Kuru DSG/DCT alınmaz mı?', answer: 'Mutlak olarak hayır denemez. Kavrama ve mekatronik geçmişi, kullanım tipi, adaptasyonlar ve sıcak test normal olan araç değerlendirilebilir; yoğun sürünme/yokuş kullanımında aşınma ihtiyacı hesaba katılır.' },
            { question: 'CVT’de devir yükselmesi arıza mı?', answer: 'Her zaman değil. CVT hızlanmada motoru verimli devirde tutabilir; devir ve hız klasik vites gibi artmayabilir. Titreme, basınç hatası, uğultu veya gecikme ölçüm gerektirir.' },
            { question: 'Robotize manuel ile tam otomatik nasıl ayrılır?', answer: 'Robotize manuelde temel dişli ve kavrama manuel yapıdadır, aktüatörler yönetir; geçişte güç kesintisi hissedilebilir. VIN ve şanzıman kodu kesin ayrımı sağlar.' },
        ],
        replaceContent: `## Otomatik Şanzıman Türleri Nasıl Karşılaştırılır?

“Tam otomatik en sağlam, çift kavrama sorunlu” gibi bir sıralama teknik olarak eksiktir. Aynı şanzıman ailesinin farklı revizyonları, tork sınırları, yazılımı ve araç ağırlığı farklı sonuç verir. Güvenilirlik değerlendirmesi teknoloji, şanzıman kodu, motor eşleşmesi, kullanım profili ve bakım geçmişiyle yapılmalıdır.

## Tork Konvertörlü Otomatik

Motor gücünü ilk kalkışta hidrolik konvertör aktarır; modern sistemlerde seyirde kilitleme kavraması verimi artırır.

**Güçlü yönleri:** Düşük hızda yumuşaklık, yüksek tork kapasitesi, şehir içi konfor.

**Kontrol noktaları:** D-R gecikmesi, valf gövdesi/solenoid, konvertör kilitleme titremesi, soğutma ve doğru sıcaklıkta sıvı seviyesi. Çok kademeli yeni üniteler eski dört ileri otomatik kadar basit olmayabilir.

## Çift Kavramalı DCT/DSG/EDC/PowerShift

Tek ve çift vitesleri ayrı kavramalar hazırlar. Kuru kavrama daha düşük kayıp; ıslak kavrama daha yüksek ısı/tork yönetimi sunabilir, fakat genelleme kod düzeyinde doğrulanmalıdır.

**Güçlü yönleri:** Hızlı geçiş, verimlilik, doğrudan sürüş hissi.

**Kontrol noktaları:** Kavrama aşınma/temas değerleri, mekatronik, adaptasyon, sıcaklık, geri manevra ve yokuş. Aracı gazla yokuşta tutmak veya uzun yarım kavrama ısıyı artırabilir.

## CVT ve e-CVT

Klasik CVT, kasnak-kayış/zincir oranını sürekli değiştirir. Hibritlerde “e-CVT” adı verilen güç bölüştürücü sistem aynı mekanik yapı olmayabilir; ikisini eşitlemeyin.

**Güçlü yönleri:** Kesintisiz hızlanma, motoru verimli devirde tutma, şehir konforu.

**Kontrol noktaları:** Doğru CVT sıvısı, basınç, sıcaklık, kayma/titreme ve metal bulgusu. Devrin hızdan önce yükselmesi karakteristik olabilir; belirti verilerle ayrılır.

## Robotize Manuel AMT / Easytronic / Dualogic / MultiMode

Manuel dişli kutusunun debriyaj ve vitesini elektrikli/hidrolik aktüatör yönetir.

**Güçlü yönleri:** Düşük ağırlık ve tüketim, manuel altyapının sadeliği.

**Kontrol noktaları:** Kavrama aşınma noktası, aktüatör, kalibrasyon, akü voltajı ve yokuş/geri manevra. Geçişte kısa güç kesintisi sistem karakteridir; sert vuruntu veya vitese geçmeme normal değildir.

## Hibrit ve Elektrikli Güç Aktarma

Tam hibritte planet dişli güç bölüştürücü, tek/çift kavramalı hibrit şanzıman veya tork konvertörlü yapı olabilir. Elektrikli araç çoğu zaman tek oranlı redüksiyon kullanır. İnvertör, elektrik motoru, redüksiyon yağı, rulman sesi ve yüksek voltaj sistemi klasik “otomatik” kontrolüne eklenir.

## Kullanım Profiline Göre Seçim

| Kullanım | Uygun karakter | Dikkat |
|---|---|---|
| Yoğun dur-kalk/yokuş | Tork konvertörü veya uygun hibrit sistem konforlu olabilir | Soğutma ve tüketim |
| Uzun yol/yük | Tork kapasitesi yüksek ıslak DCT veya otomatik | Sıvı sıcaklığı ve bakım |
| Sakin şehir | CVT/hibrit verimli olabilir | Doğru sıvı ve batarya kontrolü |
| Ekonomi önceliği | DCT, CVT veya AMT avantaj sağlayabilir | Düşük hız karakterini kabul etmek |
| Sportif kullanım | Uygun ıslak DCT veya hızlı otomatik | Yağ sıcaklığı ve önceki kötü kullanım |

## İkinci El Test Protokolü

1. VIN’den şanzıman kodunu ve fabrika eşleşmesini doğrulayın.
2. Yağ, filtre, yazılım ve onarım faturalarını inceleyin.
3. Soğuk D-R ve ilk kalkışı gözleyin.
4. Dur-kalk, geri manevra ve yokuşla sistemi ısıtın.
5. Farklı yükte geçiş, sabit hız ve yavaşlama test edin.
6. Hata, sıcaklık, adaptasyon, kavrama/kayma ve basınç verilerini okuyun.
7. Dönüşte kaçak, koku ve soğutma sistemini yeniden inceleyin.

## Bakımda Sık Yapılan Hatalar

- Şanzıman kodunu bilmeden “uyumlu” sıvı kullanmak
- Seviye prosedüründeki sıcaklığı atlamak
- Sadece yağı değiştirip filtre/karter ve soğutmayı incelememek
- Adaptasyon sıfırlamayı onarım sanmak
- Motor kulağı veya teklemeyi şanzıman arızası saymak
- Yağ içindeki metali kaynağı bulunmadan temizlemek

## Sonuç

Teknoloji etiketi yerine somut araç geçmişini satın alın. Aynı kodda revize mekatronik takılmış, doğru yağla bakılmış araç; “daha güvenilir tip” denilen fakat bakımsız bir örnekten daha iyi olabilir. Onarım bütçesini de kavrama, volan, valf gövdesi, konvertör, kodlama ve işçilik toplamıyla değerlendirin.`,
    },
    'dizel-mi-benzinli-mi': {
        updatedDate,
        excerpt: 'Dizel-benzin kararını sabit kilometre eşiğiyle değil güzergâh, soğuk çalışma sayısı, yakıt farkı, emisyon sistemi ve bakım bütçesiyle verin.',
        keyTakeaways: ['Yıllık kilometre tek başına yeterli değildir; kısa şehir içi yolculuklar dizel DPF rejenerasyonuna uygun olmayabilir.', 'Benzinli motor da otomatik olarak sade değildir; turbo, direkt enjeksiyon ve partikül filtresi bulunabilir.', 'Kararı kendi yakıt fiyatınız, gerçek tüketim ve olası büyük bakım maliyetiyle araç bazında hesaplayın.'],
        faqs: [
            { question: 'Dizel kaç kilometreden sonra mantıklı?', answer: 'Evrensel bir eşik yoktur. Yakıt fiyat farkı, gerçek tüketim, otoyol oranı, elde tutma süresi ve dizel sistemlerin bakım riskiyle başa baş kilometresi araç özelinde hesaplanır.' },
            { question: 'Sadece şehir içinde dizel alınır mı?', answer: 'Uzun ve motoru ısıtan şehir içi rotalarda mümkün olabilir; sürekli kısa ve soğuk yolculuk DPF/EGR için uygun değildir. Aracın rejenerasyon stratejisi ayrıca önemlidir.' },
            { question: 'Benzinli motorlarda DPF yok mu?', answer: 'Bazı yeni direkt enjeksiyonlu benzinlilerde GPF/OPF partikül filtresi bulunur. Risk profili dizel DPF ile aynı değildir ama araç donanımı doğrulanmalıdır.' },
            { question: 'Dizel motor daha uzun ömürlü müdür?', answer: 'Tasarım ve kullanımına bağlıdır. Motor içi dayanıklı olsa bile enjektör, turbo ve emisyon sistemi toplam maliyeti belirler; bakım geçmişi yakıt türünden daha güçlü göstergedir.' },
        ],
        replaceContent: `## Dizel mi Benzinli mi?

Doğru cevap yıllık kilometreden önce günlük rotada gizlidir. Her gün 8 kısa marşla 20.000 km yapan sürücü ile tek seferde uzun otoyol kullanan sürücünün dizel için uygunluğu aynı değildir. Yakıt tüketimi, ilk fiyat, bakım, emisyon sistemi ve elde tutma süresi birlikte hesaplanmalıdır.

## Kullanım Profilinizi Ölçün

- Günlük tek yön mesafe ve motorun çalışma sıcaklığına ulaşma süresi
- Yıldaki şehir içi, çevre yolu ve otoyol oranı
- Soğuk marş sayısı ve uzun rölanti alışkanlığı
- Yük, römork, yokuş ve yolcu ihtiyacı
- Aracı kaç yıl tutacağınız
- Ev/iş yerinde LPG veya şarj gibi alternatif imkânlar

## Modern Dizelin Artıları ve Riskleri

Dizel, düşük tüketim ve yüksek torkla uzun yol/yüklü kullanımda avantaj sağlayabilir. Buna karşılık common-rail enjektör, turbo, EGR, DPF ve yeni araçlarda SCR/AdBlue sistemi bulunur. DPF yalnız kilometreyle değil egzoz sıcaklığı ve sürüş süresiyle rejenerasyon yapar. Kısa yolculuklar tekrarlandığında yakıta yağ karışması, sık rejenerasyon ve filtre yükü görülebilir.

İkinci elde şu veriler okunmalıdır:

- Enjektör düzeltmeleri ve gerekirse geri dönüş testi
- DPF diferansiyel basıncı, kurum/kül tahmini ve rejenerasyon mesafesi
- EGR komut-gerçek değeri ve emme kirliliği
- Turbo hedef-gerçek basıncı, vakum ve yağ hattı
- Motor çalışma sıcaklığı; düşük termostat sıcaklığı rejenerasyonu bozabilir
- SCR/AdBlue hata ve dozaj kayıtları

## Modern Benzinlinin Artıları ve Riskleri

Benzinli motor kısa mesafede daha hızlı ısınabilir ve dizel emisyon sistemlerini taşımaz; ancak “benzinli daima basittir” doğru değildir. Turbo, direkt enjeksiyon, değişken supap, zincir/kayış ve bazı yeni motorlarda GPF/OPF bulunabilir. Yüksek şehir içi tüketim, bobin-buji, karbon birikimi ve turbo/soğutma riskleri motor koduna göre incelenir.

Atmosferik port enjeksiyonlu motorlar mekanik sadelik ve LPG potansiyeli sunabilir; fakat supap uyumu, kompresyon, soğutma ve otomatik şanzıman yine kontrol edilmelidir.

## Kendi Başa Baş Hesabınızı Yapın

1. Aynı kasa/donanımda dizel ve benzinlinin gerçek satın alma farkını bulun.
2. Kendi rotanızdaki gerçek tüketimi kullanıcı verisi ve test sürüşüyle tahmin edin.
3. Güncel yakıt fiyatıyla kilometre başı maliyeti hesaplayın.
4. Dizelde enjektör, DPF, turbo ve AdBlue; benzinlide ateşleme, turbo ve olası LPG payı için bakım rezervi ekleyin.
5. Satın alma farkını yıllık net tasarrufa bölün.

Sonuç elde tutma sürenizden uzunsa dizelin tüketim avantajı ekonomik olmayabilir. İkinci el satış değerini de hesaba katın ama gelecekteki fiyatı kesin kabul etmeyin.

## Hangi Profilde Dizel Öne Çıkar?

- Düzenli uzun yol ve motoru tam ısıtan sürüş
- Yüksek yıllık kilometre ve gerçek yakıt farkı
- Yüklü/römorklu kullanımda tork ihtiyacı
- DPF/EGR bakımını takip edecek kullanıcı
- Geçmişi belgeli ve canlı verileri normal araç

## Hangi Profilde Benzinli Öne Çıkar?

- Çok sayıda kısa şehir içi yolculuk
- Düşük veya orta yıllık kilometre
- Daha sessiz/çabuk ısınan kullanım beklentisi
- Atmosferik sadelik veya uygun LPG planı
- Dizel emisyon sistemleri için uygun rota bulunmaması

## Hibrit ve LPG Alternatifini Unutmayın

Tam hibrit, yoğun dur-kalkta enerji geri kazanımı ve benzinli motoru verimli yükte çalıştırma avantajı sağlayabilir; batarya sağlık testi gerekir. LPG uygun motor kodunda ekonomik olabilir; montaj, kalibrasyon ve supap sağlığı ayrı bütçelenir. Seçenekleri yalnız katalog tüketimiyle değil aynı rotadaki toplam maliyetle kıyaslayın.

## İkinci Elde Karar Sırası

Önce kullanımınıza uygun yakıt türünü belirleyin, sonra motor-şanzıman kodlarını karşılaştırın. Bakım faturası, soğuk çalışma, canlı veri ve uzun test sonucu temiz olmayan bir dizel; düşük tüketimiyle avantaj sağlamaz. Aynı biçimde yağ yakan veya hararet geçmişli benzinli de “şehir için ideal” değildir. Araç kondisyonu çoğu zaman teorik yakıt türü üstünlüğünden daha önemlidir.`,
    },
    'yuksek-kilometreli-arac-alinir-mi': {
        updatedDate,
        excerpt: 'Yüksek kilometreyi sabit eşiklerle değil bakım zinciri, kullanım türü, motor saati, büyük onarımlar ve ölçüm sonuçlarıyla değerlendirin.',
        keyTakeaways: ['Belgeli uzun yol kilometresi, kaydı belirsiz düşük kilometreden daha güvenli olabilir.', 'Her model için aynı “kritik kilometre” yoktur; bakım planı süre, motor kodu ve kullanım koşuluna göre değişir.', 'Kilometre fiyat indirimi sağlar ama hararet, yağ basıncı, yapısal hasar veya güvenlik belirsizliğini kabul edilebilir yapmaz.'],
        faqs: [
            { question: 'Kaç kilometrenin üzeri yüksek kilometredir?', answer: 'Tek bir sınır yoktur. Yaş, motor/şanzıman, kullanım türü ve bakım planı önemlidir. Yıllık 10 bin km yapan 15 yaşındaki araçla üç yaşındaki 150 bin km otoyol aracı farklı değerlendirilir.' },
            { question: '300 bin kilometrede araç alınır mı?', answer: 'Bakım ve büyük onarımlar belgeli, gövde güvenli ve mekanik ölçümler normalse alınabilir; ancak yakın dönem sarf ve büyük parça rezervi fiyatın içine konmalıdır.' },
            { question: 'Kilometre düşürme nasıl anlaşılır?', answer: 'Muayene, servis, fatura, OBD modül sayaçları ve iç mekân aşınması kronolojik karşılaştırılır. Hiçbiri tek başına kesin değildir; tutarsızlık soruşturulur.' },
            { question: 'Yüksek kilometrede benzinli mi dizel mi?', answer: 'Yakıt türünden çok spesifik motorun ölçümü ve kullanım geçmişi önemlidir. Dizelde emisyon/yakıt sistemi; benzinlide yağ tüketimi, soğutma ve ateşleme özellikle incelenir.' },
        ],
        replaceContent: `## Yüksek Kilometreli Araç Alınır mı?

Evet, fakat kilometre sayısını aracın nasıl yaptığı ve hangi bakımların kanıtlandığı bilinmelidir. Düzenli otoyol kullanılmış, zamanında bakılmış 220 bin km araç; kısa mesafe, uzun rölanti ve kayıt belirsiz 90 bin km araçtan daha iyi olabilir. Kilometre tek başına motor sağlığını veya kalan ömrü ölçmez.

## Sabit Kilometre Eşiklerine Neden Güvenilmez?

Triger, sıvı, buji, enjektör veya şanzıman bakımı her modelde aynı kilometrede değildir; süre ve ağır kullanım koşulu da planı değiştirir. “100 binde şanzıman, 150 binde turbo biter” gibi tablolar teknik veri değildir. Üretici bakım planı, motor/şanzıman kodu ve aracın faturası esas alınmalıdır.

## Kilometre Kalitesini Okuyun

| Kullanım izi | Olası etkisi |
|---|---|
| Uzun otoyol, az soğuk marş | Debriyaj/fren ve DPF açısından daha hafif olabilir; taş izi ve yüksek toplam saat yine incelenir |
| Kısa şehir içi, çok soğuk marş | Yağ seyrelmesi, akü, DPF/EGR ve debriyaj yükü artabilir |
| Taksi/kurye/filo | Motor saati ve rölanti yüksek; koltuk/pedal ve bakım aralığı önemlidir |
| Römork/yük/yokuş | Şanzıman, soğutma, turbo ve fren ısı yükü artar |
| Uzun süre yatma | Conta, lastik, fren, yakıt ve korozyon sorunları kilometre düşükken oluşabilir |

## Kilometre Zinciri Nasıl Doğrulanır?

Muayene kayıtları, yetkili/özel servis faturaları, yağ etiketleri, lastik üretim tarihleri, önceki ilanlar ve satıcının sahiplik süresi kronolojik dizilir. Bazı modüllerde çalışma saati veya kilometre benzeri sayaçlar bulunabilir; motor ECU, şanzıman, ABS ve anahtar verileri marka özel cihazla karşılaştırılır. Pedal, direksiyon, koltuk ve kapı menteşesi aşınması yalnız destekleyici kanıttır; parça değişmiş olabilir.

## Büyük Bakımlar Yapılmış mı, Doğru mu Yapılmış?

“Motor yapıldı” olumlu ya da olumsuz tek başına bir sonuç değildir. Faturada:

- Arızanın kök nedeni ve ölçümü
- Değişen parçaların marka/numarası
- Silindir kapağı veya blok ölçüleri
- Turbo/enjektör/şanzıman revizyon kapsamı
- Soğutma ve yağ devresinin temizliği
- Garanti ve onarım sonrası test

bulunmalıdır. Hararet nedeni çözülmeden yalnız conta değiştirilmesi veya metal kirlenmesi temizlenmeden şanzıman parçası takılması tekrar riski taşır.

## Motor ve Şanzıman Testleri

Yüksek kilometrede soğuk marş, yağ basıncı, kompresyon/silindir kaçak, soğutma basıncı ve OBD canlı veri daha değerlidir. Dizelde enjektör geri dönüşü, DPF kül/kurum, turbo ve EGR; benzinlide yağ tüketimi, yakıt düzeltmesi, ateşleme ve soğutma incelenir.

Şanzıman tam ısınana kadar test edilir. Manuelde debriyaj, çift kütleli volan ve senkromeç; otomatikte sıvı, kayma, adaptasyon, kavrama/konvertör ve diferansiyel kontrol edilir.

## Şasi ve Güvenlik Kilometreden Bağımsızdır

Yüksek kilometreli ama düzgün şasili araç, kilometresi düşük fakat podye/direk işlemi ve airbag belirsiz araçtan daha güvenli seçim olabilir. Gövde, korozyon, alt şasi bağlantıları, emniyet kemerleri ve airbag modülü her araçta ayrı değerlendirilir.

## Yakın Dönem Masraf Tablosu

Satın almadan önce şu parçaları “hemen”, “12 ay” ve “belirsiz büyük risk” olarak ayırın:

- Lastik, fren, akü, sıvı ve filtreler
- Triger/zincir kontrolü, devirdaim ve yardımcı kayış
- Amortisör, burç, rotil, rulman ve direksiyon
- Debriyaj/volan veya otomatik şanzıman bakımı
- Turbo, enjektör, DPF/EGR veya katalizör
- Klima, alternatör, marş ve elektronik donanım

Fiyat avantajı bu gerçek rezervden büyük değilse yüksek kilometrenin ekonomik gerekçesi zayıflar.

## Alınabilir Durum

Kilometre kayıtları tutarlı, bakım faturaları ayrıntılı, motor-şanzıman ölçümleri normal, gövde güvenli ve beklenen masraflar fiyatlanmışsa yüksek kilometre engel değildir. Özellikle yaygın parça ve uzman desteği olan sade kombinasyonlar daha öngörülebilir olabilir.

## Vazgeçme İşaretleri

Kilometre zinciri kopuk, satıcı soğuk testten kaçınıyor, hararet/yağ basıncı geçmişi belirsiz, yoğun üfleme veya kompresyon farkı var, şanzıman ısınınca kaydırıyor, airbag/şasi müdahalesi gizleniyor ya da bakım yalnız sözlü anlatılıyorsa düşük fiyat riski karşılamayabilir.`,
    },
    'hyundai-tucson-nx4-ne-demek-hangi-yillar': {
        updatedDate,
        excerpt: 'Tucson NX4 kasa kodunu, ilk seri-makyaj ayrımını, 1.6 T-GDI 7DCT, CRDi ve Hybrid seçeneklerini satın alma testleriyle öğrenin.',
        keyTakeaways: ['NX4 kasa kodudur; motor, çekiş ve donanım bilgisini tek başına göstermez.', '7DCT, Hybrid 6AT ve CRDi için aynı kontrol listesi kullanılmaz.', 'Ön cam veya tampon işlemi varsa ADAS kalibrasyonu ile sensör fonksiyonu ayrıca doğrulanmalıdır.'],
        faqs: [
            { question: 'Tucson NX4 hangi yılda başladı?', answer: 'Dördüncü nesil 2020’de tanıtıldı; Türkiye’de ağırlıkla 2021 model yılıyla yaygınlaştı. Üretim tarihi ve model yılı VIN’den doğrulanmalıdır.' },
            { question: 'NX4 7DCT alınır mı?', answer: 'Kavrama adaptasyonları, hata geçmişi ve sıcak-soğuk düşük hız/yokuş testi normalse değerlendirilebilir. Süründürme ağırlıklı kullanım geçmişi aşınmayı artırabilir.' },
            { question: 'Tucson Hybrid batarya nasıl kontrol edilir?', answer: 'Hücre/blok voltaj farkları, sıcaklıklar, hata geçmişi, enerji geçişi, batarya soğutması ve 12 V sistem birlikte incelenir.' },
            { question: 'NX4 makyajlı kasa nasıl anlaşılır?', answer: '2024 güncellemesinde dış ayrıntılarla birlikte kokpit ve ekran düzeni değişti. Geç tescil nedeniyle yalnız ruhsat yılına değil VIN ve fiziksel donanıma bakılmalıdır.' },
        ],
        appendContent: `## Motor Seçimini Kullanıma Göre Yapın

| Seçenek | Güçlü taraf | Satın alma odağı |
|---|---|---|
| 1.6 T-GDI 7DCT | Canlı performans, yaygın kombinasyon | Kavrama ısısı/adaptasyonu, ateşleme, turbo ve soğutma |
| 1.6 CRDi 7DCT | Uzun yol tüketimi ve tork | DPF-EGR-SCR, enjektör, turbo ve kavrama |
| 1.6 T-GDI Hybrid 6AT | Şehirde enerji geri kazanımı, yumuşak aktarma | Yüksek voltaj batarya, güç elektroniği, 6AT ve 12 V sistem |

Yalnız kısa şehir içi sürüşte dizel emisyon sistemi uygun olmayabilir. Yoğun yokuş ve sürünmede kuru kavramalı sistemin sıcaklık yönetimi önem kazanır. Hibritte katalog tüketimine ek olarak batarya durumu ve garanti başlangıcı araştırılmalıdır.

## 7DCT İçin Derin Test

Araç tamamen soğukken D-R seçimi ve ilk kalkış kaydedilir. Ardından en az 20-30 dakikalık şehir içi sürüşte düşük hız, geri park, yokuş ve dur-kalk denenir. Kavrama sıcaklığı, temas/adaptasyon değerleri ve geçmiş hata sayacı okunur. Titreme varsa motorun üç/dört silindir çalışma düzgünlüğü, motor kulağı ve aks boşluğu elenmeden doğrudan kavrama teşhisi konmamalıdır.

## Dizel ve Hybrid Ayrı İncelenir

CRDi’da DPF diferansiyel basıncı, kurum-kül tahmini, son rejenerasyonlar, EGR ve SCR/AdBlue kayıtları ile gerçek çalışma sıcaklığı birlikte görülür. Hybrid’de batarya sağlık yüzdesi tek başına yeterli değildir; hücre farkı, sıcaklık dağılımı, şarj-deşarj dengesi, inverter soğutması ve fren enerji geri kazanımı yol testinde izlenir.

## Gövde, 4x4 ve ADAS

4x4 araçta dört lastiğin marka/model, ölçü, diş derinliği ve çevresi yakın olmalıdır; transfer/diferansiyel yağ kaçağı ile sıkışık dönüş sesi kontrol edilir. Ön cam, logo/radar alanı veya tampon işlem görmüşse kamera-radar kalibrasyon belgesi aranır. Şerit, kör nokta ve acil fren sistemleri güvenli koşulda fonksiyon testiyle doğrulanır.

## Vazgeçme İşaretleri

Kavrama aşırı ısı kayıtları, tekrarlayan şanzıman hatası, tamamlanamayan dizel rejenerasyonları, hibrit hücre farkı, alt batarya/darbe izi veya kalibrasyonsuz ADAS onarımı açıklığa kavuşmadan aracı fiyatlandırmayın. Temiz geçmişli araçta ise kullanım profilinize uyan motoru seçmek, kasa yılından daha önemlidir.`,
    },
    'kia-sportage-nq5-ne-demek-hangi-yillar': {
        updatedDate,
        excerpt: 'Sportage NQ5 nesil ve makyaj ayrımını; 1.6 T-GDI 7DCT, 4x4 ve hibrit sistemleri için detaylı ikinci el kontrolünü öğrenin.',
        keyTakeaways: ['NQ5 beşinci nesli tanımlar; Avrupa kısa akslı gövde ile diğer pazar türevlerini karıştırmayın.', '1.6 T-GDI 7DCT’de düşük hızlı sıcak test ve kavrama verisi zorunludur.', '4x4 lastik çevre uyumu ve ADAS kalibrasyonu, standart kaporta ekspertizinin ötesinde kontrol ister.'],
        faqs: [
            { question: 'Kia Sportage NQ5 hangi yıllardır?', answer: 'Beşinci nesil 2021’de tanıtıldı ve Avrupa/Türkiye’de 2022 model döneminde yaygınlaştı; makyaj ve donanım yılı VIN’den doğrulanmalıdır.' },
            { question: 'NQ5 150 PS ile 180 PS farkı nedir?', answer: 'Güç, çekiş ve donanım eşleşmeleri pazara göre değişebilir. Ruhsat, VIN ve motor kodu doğrulanmadan ilan bilgisiyle karar verilmemelidir.' },
            { question: 'NQ5 4x4 alırken neye bakılır?', answer: 'Dört lastik çevre/aşınma uyumu, transfer ve arka diferansiyel kaçak/sesleri ile elektronik kavrama hata geçmişi kontrol edilir.' },
            { question: '7DCT titremesi normal mi?', answer: 'Düşük hızda kavrama hissi olabilir; tekrarlayan sert titreme normal kabul edilmez. Motor kulağı ve tekleme elendikten sonra kavrama adaptasyonları incelenir.' },
        ],
        appendContent: `## NQ5’te Doğru Araç Kimliği

Avrupa için geliştirilen Sportage ile bazı diğer pazarların daha uzun gövdesi aynı görünüm altında farklı teknik bilgiler taşıyabilir. VIN çözümünde üretim tesisi, motor, çekiş, şanzıman ve fabrika donanımı görülmeli; ilandaki “4x4”, “hibrit” veya güç beyanı ruhsatla eşleştirilmelidir.

## 1.6 T-GDI Motor Kontrolü

Tam soğuk marşta rölanti, zincir/aksesuar sesi ve egzoz gözlenir. Yük altında hedef-gerçek turbo basıncı, misfire sayacı, kısa-uzun yakıt düzeltmeleri ve soğutma sıcaklığı okunur. Termostat, su pompası ve hortumlarda kurumuş antifriz; turbo/emme hattında yağ ve gevşek bağlantı aranır. Yazılım uygulanmış araç fabrika torkunda varsayılmamalıdır.

## 7DCT ve 4x4 Testi

Şanzıman soğuk D-R ile başlatılıp geri park, yokuş ve yoğun dur-kalkla ısıtılır. Kavrama aşınma/temas, sıcaklık ve mekatronik hata kayıtları okunur. 4x4’te düşük hızlı tam turda sürtünme/sıkışma hissi, transfer-diferansiyel kaçakları ve arka aktarma sesi incelenir. Farklı çevrede lastikler aktarmayı sürekli zorlayabilir.

## Elektronik Donanım ve ADAS

Çift ekran, kamera, park sensörleri, koltuk/ısıtma, bagaj kapağı ve kablosuz bağlantı tek tek denenir. Ön cam veya tampon değişiminde kamera-radar kalibrasyon çıktısı istenir; sadece arıza lambasının sönük olması geometrik kalibrasyonu kanıtlamaz. Akü voltajı düşükse çok sayıda geçici modül hatası oluşabileceği için 12 V sistem yük altında ölçülür.

## Satın Alma Kararı

Şehir içinde kompakt SUV isteyen kullanıcı için 150 PS 4x2 yeterli olabilir; 180 PS/4x4’ün ek çekişi lastik ve aktarma bakımını büyütür. Bakım faturası, yazılım geçmişi ve şanzıman sıcak testi açık değilse donanım zenginliği bu belirsizliği telafi etmez.`,
    },
    'volkswagen-passat-b9-ne-demek-hangi-yillar': {
        updatedDate,
        excerpt: 'Passat B9 Variant’ın B8’den farklarını; eTSI, eHybrid ve TDI güç aktarmalarını şarj, DSG, 48 V ve emisyon kontrolleriyle inceleyin.',
        keyTakeaways: ['Avrupa Passat B9 yalnız Variant gövdeyle sunuldu; “B9 sedan” ilanı ayrıntılı kimlik kontrolü ister.', 'eTSI hafif hibrit ile eHybrid haricen şarj edilen yüksek voltajlı sistem aynı değildir.', 'Yeni ve az kilometreli araçta bile yazılım kampanyası, şarj geçmişi, ADAS kalibrasyonu ve lastik hasarı kontrol edilmelidir.'],
        faqs: [
            { question: 'Passat B9 sedan var mı?', answer: 'Avrupa ürün gamındaki dokuzuncu nesil B9 yalnız Variant station wagon olarak sunuldu. Başka pazar veya yanlış ilan adlandırması VIN ile ayrılmalıdır.' },
            { question: '1.5 eTSI tam hibrit mi?', answer: 'Hayır. 48 V hafif hibrit sistemdir; kısa süreli elektrik desteği ve enerji geri kazanımı sağlar, tek başına uzun elektrikli sürüş hedeflemez.' },
            { question: 'Passat B9 eHybrid alırken batarya nasıl test edilir?', answer: 'Hücre farkı, sıcaklık, hata ve şarj kayıtları; AC/DC şarj, kablo/port, alt muhafaza ve batarya garanti koşulları incelenir.' },
            { question: 'B9’da DSG kontrolü gerekir mi?', answer: 'Evet. Güç aktarmaya göre DSG tipi değişir; kod, sıvı planı, adaptasyon ve sıcak-soğuk sürüş kontrol edilmelidir.' },
        ],
        appendContent: `## B9 Güç Aktarmalarını Karıştırmayın

| Sistem | Kullanım mantığı | İkinci el kontrolü |
|---|---|---|
| 1.5 eTSI | 48 V destekli benzinli, dışarıdan şarj edilmez | 12/48 V akü, DC-DC, kayışlı marş-jeneratör, DSG |
| eHybrid | Haricen şarj edilebilir, elektrikli menzil sunar | HV batarya, şarj portu, termal sistem, hibrit DSG |
| 2.0 TDI | Uzun yol ve yüksek tork | DPF, EGR, SCR/AdBlue, turbo, DSG ve 4MOTION |

Motor gücü ve çekiş seçeneği pazara göre değişebilir. VIN veri kartı ile motor/şanzıman kodu, batarya kapasitesi ve fabrika donanımı doğrulanmalıdır.

## eTSI ve eHybrid Testi

eTSI’da 48 V akü sağlık/hata kayıtları, DC-DC gerilimi, start-stop ve süzülme geçişi denenir. eHybrid’de aracı yalnız benzinle sürmek yeterli değildir: tam şarj kabulü, AC şarj, elektrik modunda yük, hücre sıcaklık/farkları ve benzin-elektrik geçişi izlenir. Alt batarya muhafazasındaki darbe, yanlış kaldırma ve soğutma kaçağı fiziksel olarak incelenir.

## Dijital Kokpit ve ADAS

MIB4 ekran, çevrim içi hizmet, kullanıcı profili, geri görüş ve tüm USB/şarj fonksiyonları denenir. Kamera-radar donanımında ön cam/tampon işlem geçmişi sorulur; kalibrasyon raporu ile hata hafızası birlikte görülür. Yazılım kampanyalarının VIN’e uygulanıp uygulanmadığı yetkili ağdan doğrulanır.

## Variant Gövde ve Yol Testi

Elektrikli bagaj, perde, arka koltuk kilitleri, tavan rayı ve bagaj havuzunda su izi kontrol edilir. Uzun dingil mesafeli gövdede lastik omuzları ve dört teker geometrisi ölçülür. TDI 4MOTION’da dört lastiğin çevresi, transfer/arka diferansiyel ve düşük hızlı tam tur davranışı incelenir.

## Kim İçin Mantıklı?

Şarj erişimi ve düzenli kısa/orta rota varsa eHybrid; daha basit şarj rutini istemeyen karma kullanımda eTSI; yüksek uzun yol ve yükte TDI düşünülebilir. Çok yeni olduğu için “sorunsuz” varsaymak yerine garanti, yazılım ve hasar kalibrasyonu kayıtlarını gelecekteki değer açısından belgeleyin.`,
    },
    'honda-civic-fe1-ne-demek-hangi-yillar': {
        updatedDate,
        excerpt: 'Honda Civic FE1’i FC5’ten ayırın; 1.5 Turbo, ECO LPG, CVT ve Honda Sensing için derin satın alma kontrolünü uygulayın.',
        keyTakeaways: ['FE1 on birinci nesil sedan kasa kodudur; FC5’ten motor, gövde ve elektronik mimari olarak ayrılır.', 'ECO ve benzinli versiyonda CVT sıvısı, turbo/soğutma ve iki yakıtta çalışma kayıtları önemlidir.', 'Honda Sensing donanımı ön cam/tampon işleminden sonra doğru kalibrasyon ister.'],
        faqs: [
            { question: 'Civic FE1 hangi yıllardır?', answer: 'Türkiye’de on birinci nesil sedan 2021 sonunda yaygınlaşmıştır. Model yılı ve üretim tarihi VIN üzerinden doğrulanmalıdır.' },
            { question: 'FE1 ECO fabrika LPG’li mi?', answer: 'Türkiye’de LPG odaklı ECO versiyon bulunur; aracın orijinal donanımı ve sonradan yapılan işlemler VIN, ruhsat ve servis faturasıyla doğrulanmalıdır.' },
            { question: 'FE1 CVT alınır mı?', answer: 'Honda şartnamesine uygun sıvı kaydı, hata/canlı veri ve sıcak-soğuk test normalse değerlendirilebilir. Uğultu, kalkış titremesi ve basınç hatası ayrıca araştırılır.' },
            { question: 'FE1’de 182 ve 129 PS farkı nasıl doğrulanır?', answer: 'Ruhsat ve ilan tek başına yeterli olmayabilir; VIN, motor kodu ve fabrika donanım kaydı esas alınmalıdır.' },
        ],
        appendContent: `## FE1’de Motor ve LPG Ayrımı

Turbo motorun güç kalibrasyonu, LPG donanımı ve emisyon ayarı versiyona göre değişir. Aracın yalnız LPG’de düzgün çalışması yeterli değildir; benzin enjektörleri ve pompa da tam yükte/ilk çalıştırmada görev yapabilir. Benzin ve LPG’de ayrı yakıt düzeltmesi, misfire ve turbo hedef-gerçek basıncı izlenmelidir.

## CVT Derin Kontrolü

Sıvı faturasında yalnız “CVT yağ” değil Honda’nın ilgili şanzıman için istediği şartname görülmelidir. Soğuk D-R, düşük hız kalkış, yokuş, sabit hız ve tam ısınmış yük testi yapılır. Devir yükselmesinin CVT karakteri ile kayma/basınç sorununu ayırmak için giriş-çıkış hızı, oran ve sıcaklık verileri okunur. Motor kulağı veya tekleme kaynaklı titreşim ayrıca elenir.

## Turbo, Yağ ve Soğutma

Doğru yağ şartnamesi, seviye ve değişim aralığı turbo yatakları ve zincirli sistem için kritiktir. Su pompası/termostat, radyatör, fan ve hortumlar basınç altında incelenir. Yazılım uygulanmış araçta artan tork ve sıcaklığın CVT/motor üzerindeki etkisi hesaba katılır; fabrika yazılımına döndürüldüğü sözlü beyanla kabul edilmez.

## Sensing ve Gövde

Ön cam, tampon, radar/kamera bölgesi değişmişse kalibrasyon çıktısı aranır. Şerit ve çarpışma destekleri arıza hafızasıyla birlikte güvenli fonksiyon testinden geçirilir. Airbag modülü, kemerler, podye, direk ve taban ölçümü; yalnız dış panel boya bilgisinden daha önemlidir.

## Karar Çerçevesi

Şehir içinde LPG ekonomisi isteyen kullanıcı ECO’yu; benzin performansı isteyen kullanıcı daha güçlü kalibrasyonu düşünebilir. Her iki durumda da CVT geçmişi, turbo/soğutma, Honda Sensing ve orijinal donanım belgesi temiz değilse düşük kilometre tek başına güvence değildir.`,
    },
    'seat-arona-10-tsi-dsg-alinir-mi-kronik-sorunlar': {
        updatedDate,
        excerpt: 'SEAT Arona 1.0 TSI DSG’de motor kodu, DQ200 kavrama-mekatronik, soğutma ve ADAS için ayrıntılı ikinci el kontrol rehberi.',
        keyTakeaways: ['1.0 TSI’ın güç ve motor kodu üretim yılına göre değişir; ilan metnini VIN ile doğrulayın.', 'DQ200 testinde soğuk ilk hareket kadar tam ısınmış geri manevra ve yokuş önemlidir.', 'Üç silindirin doğal titreşimini ateşleme veya motor kulağı arızasıyla karıştırmayın.'],
        faqs: [
            { question: 'Arona 1.0 TSI DSG alınır mı?', answer: 'Bakım ve yazılım geçmişi açık, soğutması sağlam, kavrama/mekatronik verileri ile sıcak testi normal bir araç değerlendirilebilir.' },
            { question: 'Arona DSG kuru kavrama mı?', answer: 'Türkiye’de 1.0 TSI ile DQ200 kuru çift kavrama yaygındır; kesin şanzıman kodu VIN/teşhis verisiyle doğrulanmalıdır.' },
            { question: '1.0 TSI triger kayışlı mı?', answer: 'Motor koduna göre bakım sistemi doğrulanmalıdır. Kayışın yalnız dış görünümü kalan ömrü kanıtlamaz; üretici planı ve fatura esas alınır.' },
            { question: 'Arona’da radar kalibrasyonu ne zaman gerekir?', answer: 'Ön cam, tampon/radar braketi, süspansiyon geometrisi veya ilgili parça işlem gördüğünde üretici prosedürüne göre kalibrasyon gerekebilir.' },
        ],
        appendContent: `## Motor Kodu Neden Önemli?

95, 110 ve 115 PS ilanları yalnız yazılım farkı gibi kabul edilmemelidir. Üretim tarihi, emisyon seviyesi, turbo/ateşleme parçası ve triger planı motor koduna göre kontrol edilir. Soğukta rölanti, yükte misfire, turbo hedef-gerçek basıncı ve yakıt düzeltmeleri birlikte okunur.

## Soğutma Modülü ve Kaçak Kontrolü

Su pompası-termostat çevresi, bağlantılar ve genleşme kabında kurumuş iz aranır. Araç tam ısınırken OBD sıcaklığı ile fan çalışması izlenir. Satış öncesi yeni antifriz veya motor yıkama, kaçağın çözüldüğünü kanıtlamaz; basınç testi gerekir.

## DQ200 Yol Testi ve Teşhis

İlk D-R ile başlayan sürüş geri park, yokuş ve dur-kalkla şanzıman ısınana kadar sürdürülür. Kavrama aşınma/temas değerleri, mekatronik basınç-hata geçmişi ve şanzıman sıcaklığı okunur. Tek seferlik hafif his yerine tekrarlanabilir titreme, gecikme ve koruma kaydı aranır. Adaptasyonun yeni sıfırlanması onarım değildir.

## Şehir Crossover’ında Gizli Maliyetler

Büyük jantlı araçta lastik omzu, jant eğriliği, ön takım ve dört teker geometrisi incelenir. Akü zayıflığı start-stop ve çok sayıda modül hatası yaratabilir. Full Link, kamera, klima, merkezi kilit ve iki anahtar test edilir. Ön darbe onarımında radar braketi ve kalibrasyon sonucu görülür.

## Fiyatlandırılamayan Riskler

Şanzıman hata kayıtları silinmiş, araç sıcak hazırlanmış, su eksiltme kaynağı bulunamamış veya yazılım/performans işlemi belgesizse “bakımla düzelir” varsayımı yapmayın. Motor ve DSG ölçümleri açık araçta Arona, kompakt boyut ve kullanışlı bagajıyla mantıklı olabilir.`,
    },
    'opel-astra-h-mi-astra-j-mi-farklari': {
        updatedDate,
        excerpt: 'Astra H ve J’yi motor, şanzıman, elektronik, gövde ve kullanım maliyetiyle karşılaştırın; kasa yerine doğru kombinasyonu seçin.',
        keyTakeaways: ['Astra H daha hafif ve mekanik olarak sade olabilir; Astra J daha güncel ama daha ağır ve donanımca karmaşıktır.', 'Easytronic robotize manuel, AT6 tork konvertörlü otomatikle aynı değildir.', 'Temiz H, bakımsız J’den daha iyi seçim olabilir; motor-şanzıman kodu kararı belirler.'],
        faqs: [
            { question: 'Astra H mi J mi daha sorunsuz?', answer: 'Kasa adına göre kesin cevap yoktur. Motor, şanzıman, bakım ve araç kondisyonu belirleyicidir; H’nin sadeliği ile J’nin güncel yapısı farklı maliyetler taşır.' },
            { question: 'Astra H Easytronic tam otomatik mi?', answer: 'Hayır. Debriyaj ve vites seçimlerini aktüatörlerin yaptığı robotize manuel sistemdir.' },
            { question: 'Astra J 1.4 Turbo alırken ne kontrol edilir?', answer: 'PCV/vakum, bobin-buji, turbo basıncı, soğutma, yağ kaçakları ve varsa AT6 sıcak geçişleri incelenir.' },
            { question: '1.3 CDTI H ile J’de aynı mı?', answer: 'Motor ailesi benzer olsa bile üretim, emisyon donanımı, araç ağırlığı ve kalibrasyon farklı olabilir; motor kodu üzerinden değerlendirilmelidir.' },
        ],
        appendContent: `## Toplam Kullanım Karşılaştırması

| Öncelik | Astra H | Astra J |
|---|---|---|
| Şehir ve düşük bütçe | Temiz manuel benzinli daha öngörülebilir | Ağırlık nedeniyle küçük motor daha çok çalışabilir |
| Konfor/güvenlik | Dönemine göre yeterli, kabin daha sade | Daha tok gövde, güncel donanım ve yalıtım |
| Otomatik | Easytronic veya versiyona göre klasik otomatik | AT6 ve farklı kombinasyonlar |
| Elektronik | CIM, ekran, cam/kapı | Park freni, AFL, multimedya, daha fazla modül |

## Astra H Derin Kontrolü

CIM şikâyeti için direksiyon tuşu, korna, sinyal ve anahtarlar birlikte denenir; yalnız tek bir belirtiyle modül değişimi önerilmez. Easytronic’te akü/şarj, kavrama noktası ve aktüatör hata-adaptasyonu sıcak sürüşte görülür. 1.6’da triger-devirdaim, bobin, termostat ve LPG; 1.3 CDTI’da zincir/yağ basıncı, enjektör ve turbo incelenir.

## Astra J Derin Kontrolü

1.4 Turbo’da emme kapağı/PCV, vakum kaçakları, turbo kontrolü ve soğutma basıncı önemlidir. AT6 tam ısındığında D-R, düşük vites ve sabit hız kilitleme davranışıyla test edilir. 1.3/1.6 dizelde DPF, EGR, çalışma sıcaklığı, enjektör ve turbo verileri okunur. Elektrikli park freni ile AFL farın hata geçmişi masraf hesabına eklenir.

## Gövde ve Yürüyen Aksam

İki kasada da podye-direk-airbag kontrolü temel şarttır. J’nin yüksek ağırlığı lastik, fren ve ön takım maliyetini büyütebilir; düzensiz lastik aşınması dört teker geometrisiyle incelenir. H’de yaşa bağlı tavan döşemesi, kapı tesisatı, klima ve korozyon bölgeleri eklenir.

## Kimin İçin Hangisi?

Sade manuel, kolay parça ve düşük başlangıç maliyeti arayan için bakımlı H; daha iyi kabin, güvenlik ve uzun yol hissi isteyen için doğru motorlu J öne çıkar. Otomatik istiyorsanız şanzımanın ticari adına değil koduna, sıcak testine ve faturasına göre karar verin.`,
    },
    'ford-focus-3-powershift-alinir-mi-kronik-sorunlar': {
        updatedDate,
        excerpt: 'Focus 3/3.5 PowerShift’te şanzıman kodu, kuru-ıslak kavrama ayrımı, TCM, Ti-VCT ve TDCi motor testlerini derinlemesine uygulayın.',
        keyTakeaways: ['PowerShift tek bir şanzıman değildir; kuru ve ıslak kavrama kodlarının bakım/risk profili farklıdır.', 'TCM veya kavrama teşhisinden önce akü voltajı, motor teklemesi ve takozlar elenmelidir.', 'Dizelde DPF/enjektör, benzinlide ateşleme/soğutma; her ikisinde uzun sıcak şanzıman testi gerekir.'],
        faqs: [
            { question: 'Focus 3 PowerShift alınır mı?', answer: 'Şanzıman kodu doğrulanmış, kavrama/TCM ve sıcak test verileri normal, onarım geçmişi belgeli araç değerlendirilebilir; belirsiz kombinasyonda risk fiyatlanamaz.' },
            { question: 'Tüm PowerShift şanzımanlar kuru kavrama mı?', answer: 'Hayır. Motor ve pazara göre kuru veya ıslak kavramalı farklı üniteler kullanılmıştır; VIN ve şanzıman etiketi gerekir.' },
            { question: 'PowerShift titremesi yalnız kavrama mı?', answer: 'Hayır. Motor kulağı, ateşleme/enjektör, aks veya düşük voltaj benzer his yaratabilir. Kavrama verisiyle birlikte elenmelidir.' },
            { question: 'Focus 3 ile 3.5 farkı nedir?', answer: '3.5, yaklaşık 2014 sonu makyajlı üçüncü nesil için kullanılan pazar adıdır; ön tasarım, kokpit, motor ve teknoloji seçenekleri güncellenmiştir.' },
        ],
        appendContent: `## Şanzıman Kimliğini Kesinleştirin

İlandaki “6 ileri PowerShift” yeterli değildir. Şanzıman kodu, kuru/ıslak kavrama, yağ planı ve yazılım seviyesi VIN’den çıkarılmalıdır. Islak ünitede sıvı/filtre geçmişi, kuru ünitede kavrama sızdırmazlığı ve TCM/aktüatör verisi farklı ağırlık taşır.

## TCM ve Kavrama Testi

Akü ve alternatör yük altında ölçülür; düşük voltaj TCM ve aktüatör hataları üretebilir. Soğuk D-R, geri manevra ve ilk kalkıştan sonra araç dur-kalk/yokuşta ısıtılır. Kavrama temas/aşınma, aktüatör konumu, sıcaklık ve geçmiş hata sayacı okunur. Adaptasyonun yapılabilmesi mekanik kavramanın sağlıklı olduğunu tek başına kanıtlamaz.

## 1.6 Ti-VCT ve Dizeller

Ti-VCT’de soğuk rölanti, bobin-buji, yakıt düzeltmesi, motor kulağı ve soğutma test edilir; LPG varsa iki yakıt karşılaştırılır. TDCi’da enjektör geri dönüş/düzeltme, turbo hedef-gerçek basıncı, DPF kurum-kül/rejenerasyon ve çalışma sıcaklığı görülür. Dizel düzensizliği şanzıman titremesi sanılmamalıdır.

## Elektronik ve Gövde

SYNC/multimedya, klima, cam-kilit, park sistemi ve iki anahtar denenir. Ön cam/tampon işlemi olan ADAS donanımlı araçta kalibrasyon aranır. Podye, kule, direk, taban ve airbagler; yalnız panel boya durumundan ayrı raporlanmalıdır.

## Satın Alma Matematiği

Şanzıman geçmişi belirsiz araçta yalnız kavrama fiyatı değil TCM, aktüatör, volan, keçe/yağ kirlenmesi, işçilik ve kodlama birlikte hesaplanır. Uzun sıcak teste izin verilmiyor veya arıza kodları yeni silinmişse düşük ilan fiyatını fırsat saymayın.`,
    },
    'honda-civic-fb7-ne-demek-alinir-mi': {
        updatedDate,
        excerpt: 'Civic FB7’nin 1.6 i-VTEC, LPG/ECO, 5 ileri otomatik, direksiyon ve soğutma kontrollerini ayrıntılı satın alma akışıyla öğrenin.',
        keyTakeaways: ['FB7’nin sade güç aktarması bakımsızlığı affetmez; LPG, supap ve soğutma geçmişi ölçülmelidir.', 'Beş ileri otomatikte Honda şartnameli sıvı ve uzun sıcak test temel kanıttır.', 'Düşük kilometreden önce hararet, kaza/airbag ve modifiye geçmişini eleyin.'],
        faqs: [
            { question: 'Honda Civic FB7 hangi yıllardır?', answer: 'Türkiye’de dokuzuncu nesil sedan ağırlıkla 2012-2016 dönemidir; 2016 geçiş araçlarında VIN ve gövde kontrolü yapılmalıdır.' },
            { question: 'FB7 LPG’de supap ayarı gerekir mi?', answer: 'Motorun bakım planı ve kullanımına göre supap boşluğu kontrolü önemlidir. Ses olmaması ayarın doğru olduğunu kanıtlamaz; ölçüm ve kompresyon gerekir.' },
            { question: 'FB7 otomatik şanzıman CVT mi?', answer: 'Türkiye’de FB7 1.6’da beş ileri tork konvertörlü otomatik yaygındır; FC5’te CVT öne çıkar. VIN ile doğrulayın.' },
            { question: 'FB7’de direksiyon sesi neden olur?', answer: 'Kutu, kolon/mafsal, rotiller, z-rot veya üst takoz benzer ses çıkarabilir; lift ve bozuk yol testiyle kaynak ayrılmalıdır.' },
        ],
        appendContent: `## LPG/ECO İçin Derin Test

Aracı benzinde soğuk çalıştırın; benzinle yük testi yaptıktan sonra LPG’ye geçin. İki yakıtta kısa-uzun yakıt düzeltmeleri, misfire, rölanti ve tam yük davranışı karşılaştırılır. Tank tarihi, multivalf, hat sabitlemesi ve sızdırmazlık belgeleri incelenir. Supap boşluğu faturası yoksa ölçüm; tekleme veya güç farkında kompresyon/kaçak testi yapılır.

## Beş İleri Otomatik

Şanzıman sıvısının doğru Honda şartnamesi ve düzenli değişim kaydı aranır. Soğuk D-R, 2-3 geçişi, yokuş, kick-down ve tam ısınmış sabit hız davranışı denenir. Vuruntu varsa motor/şanzıman kulağı ile motor çalışma düzgünlüğü ayrıca incelenir. Yanık koku veya metal bulgusu yalnız yağ değişimiyle geçecek varsayılmamalıdır.

## Soğutma ve Hararet Geçmişi

Radyatör, fan, termostat, devirdaim, hortumlar ve genleşme kabı basınç altında kontrol edilir. Sürekli su eksiltme, kabarcık veya sert hortumda yanma gazı testi eklenir. Yeni antifriz, kapak contası ve silindir kapağı sağlığını tek başına göstermez.

## Gövde, Direksiyon ve Klima

Ön/arka şasi, podye, direk, airbag ve kemerler ölçülür. Direksiyon sesi park ve bozuk yol testinde ayrı değerlendirilir; lastik aşınması rot geometrisiyle eşleştirilir. Klima kompresörü, fan kademeleri ve soğutma performansı uzun testte denenir.

## Karar

Modifiyesiz, iki yakıtta düzgün, hararetsiz ve otomatik bakımı belgeli FB7 öngörülebilir bir aile sedanıdır. “Honda motoru bozulmaz” söylemi, ayarsız LPG veya geçmiş hararet riskini ortadan kaldırmaz.`,
    },
    'toyota-corolla-e150-ne-demek-multimode-alinir-mi': {
        updatedDate,
        excerpt: 'Corolla E150’de 1.6 Dual VVT-i, 1.4 D-4D ve MultiMode robotize şanzımanı derin ikinci el testleriyle değerlendirin.',
        keyTakeaways: ['MultiMode klasik otomatik veya CVT değil, aktüatörlü robotize manuel şanzımandır.', 'Geçişte kısa güç kesintisi karakteristik olabilir; sert vuruntu, F/N uyarısı veya vitese geçmeme normal değildir.', '1.6 benzinde LPG/soğutma, 1.4 D-4D’de enjektör/turbo; her ikisinde su pompası ve gövde kontrol edilir.'],
        faqs: [
            { question: 'Corolla E150 hangi yıllardır?', answer: 'Türkiye’de onuncu nesil sedan ağırlıkla 2007-2012 model dönemidir; E140/E150 pazar ayrımı VIN ile netleştirilmelidir.' },
            { question: 'MultiMode yokuşta geri kayar mı?', answer: 'Manuel temelli olduğu için kavrama açıldığında geri kayma görülebilir. Yokuş davranışı ve destek sistemleri araç donanımına göre değişir; gazla kavramada tutmak aşınmayı artırır.' },
            { question: 'MultiMode kavrama değişince kalibrasyon gerekir mi?', answer: 'Evet, ilgili aktüatör/kavrama işlemlerinden sonra üretici prosedürüne uygun başlatma ve kalibrasyon gerekir; fatura ve test sonucu aranmalıdır.' },
            { question: 'E150 1.4 D-4D alınır mı?', answer: 'Enjektör, turbo, EGR, çalışma sıcaklığı ve bakım geçmişi normalse ekonomik olabilir; sürekli kısa şehir içi kullanımın etkisi ayrıca incelenmelidir.' },
        ],
        appendContent: `## MultiMode’u Doğru Test Edin

Akü ve alternatör yük altında ölçülür; düşük voltaj aktüatör hatalarını tetikleyebilir. Araç soğukken ilk kavrama, A/M geçişi ve geri manevra denenir. Şanzıman ısındıktan sonra dur-kalk, yokuş ve park manevrası tekrarlanır. Kavrama temas/aşınma değeri, aktüatör konumu, kalibrasyon ve geçmiş hata hafızası Toyota uyumlu cihazla okunur.

Vites değişiminde gazı hafif azaltmak sistemi yumuşatabilir; fakat sert darbe, vitese geçmeme, N’ye atma veya uyarı lambası karakter sayılmaz. Debriyaj, aktüatör ve ECU ayrı parçalar olduğundan onarım teklifi arıza kökünü belirtmelidir.

## 1.6 Dual VVT-i Kontrolü

Soğuk marş, yağ seviyesi/kaçak, yakıt düzeltmeleri, ateşleme ve soğutma basıncı incelenir. LPG varsa benzin-LPG karşılaştırması, kompresyon ve supap sağlığı eklenir. Su pompası çevresindeki kurumuş pembe/beyaz iz, termostat sıcaklığı ve fan davranışı kayıt altına alınır.

## 1.4 D-4D Kontrolü

Enjektör geri dönüş/düzeltme, rail basıncı, EGR, turbo hedef-gerçek verisi ve motor sıcaklığı görülür. Üretim/donanıma göre emisyon sistemi değişebileceğinden DPF varlığı VIN’den teyit edilir. Uzun yağ aralığı ve turbo hattı ihmali yalnız motor sesinden anlaşılamaz.

## Karar

MultiMode’un sürüş karakterini beğenmeyen kullanıcı, sistem sağlam olsa bile memnun kalmayabilir; test sürüşünde bunu ayırın. Bakım faturası açık manuel veya kalibrasyonu sağlıklı MultiMode E150 güçlü bir aile seçeneğidir; yalnız “Toyota sorunsuzdur” varsayımıyla ekspertizi kısaltmayın.`,
    },
    'renault-megane-2-mi-megane-3-mu-farklari': {
        updatedDate,
        excerpt: 'Megane 2 ve 3’ü 1.6 16V, 1.5 dCi, EDC, elektronik ve gövde kontrolleriyle toplam kullanım maliyeti üzerinden karşılaştırın.',
        keyTakeaways: ['Megane 2 düşük giriş maliyeti, Megane 3 daha güncel güvenlik ve kabin sunar; kondisyon kasa neslinden önemlidir.', '1.5 dCi aynı ad altında farklı güç, enjektör ve emisyon donanımları taşıyabilir.', 'EDC, klasik otomatikten farklı çift kavramalı sistemdir; sıcak düşük hız testi gerekir.'],
        faqs: [
            { question: 'Megane 2 mi Megane 3 mü daha sağlam?', answer: 'Tek başına nesille cevaplanamaz. Motor-şanzıman, kullanım ve bakım geçmişi belirleyicidir; temiz Megane 2 bakımsız Megane 3’ten daha doğru olabilir.' },
            { question: 'Megane 3 EDC alınır mı?', answer: 'Kavrama/adaptasyon, hata geçmişi ve sıcak-soğuk sürüş normal; bakım/onarım faturası açıksa değerlendirilebilir.' },
            { question: '1.5 dCi’da hangi testler önemlidir?', answer: 'Soğuk çalışma, yağ basıncı/bakımı, enjektör geri dönüşü, turbo basıncı, EGR ve donanıma göre DPF verileri birlikte incelenir.' },
            { question: 'Megane 2 kart arızası nasıl anlaşılır?', answer: 'İki kart, okuyucu, merkezi kilit, çalıştırma ve UCH hata kayıtları birlikte denenir; zayıf araç/kart pili de elenmelidir.' },
        ],
        appendContent: `## Motor Aynı Adı Taşısa da Risk Aynı Değildir

1.5 dCi güç değeri, enjektör sistemi, turbo ve DPF donanımı üretim yılına göre değişir. VIN ve motor kodu çıkarılmadan bütün dCi araçlara tek arıza listesi uygulanmamalıdır. Soğukta enjektör geri dönüşü/rail basıncı; yükte turbo hedef-gerçek; sıcakta çalışma sıcaklığı ve rejenerasyon verisi okunur.

## Megane 2’nin Yaş Riskleri

Kart/okuyucu ve UCH yanında kapı geçiş kabloları, cam krikoları, klima fanı ve su drenajı kontrol edilir. Taban ve elektronik modül çevresinde nem aranır. 1.6 16V’de bobin-buji, boğaz kelebeği, triger-devirdaim ve LPG kalibrasyonu; otomatik/robotize seçeneklerde şanzıman koduna özel sıcak test yapılır.

## Megane 3 ve EDC

EDC’de soğuk D-R, geri park, yokuş ve dur-kalkla kavrama ısıtılır; temas/aşınma, adaptasyon, sıcaklık ve geçmiş hatalar okunur. Motor kulağı ve dizel düzensizliği kavrama titremesiyle karıştırılmamalıdır. Elektronik park freni, kartlı giriş, multimedya, klima ve iki kart test edilir.

## Gövde ve Kilometre Zinciri

Filo geçmişi olabilen dizellerde muayene, servis, fatura ve modül sayaçları karşılaştırılır. Podye, direk, taban ve airbag/kemerler; dış panel boyasından ayrı değerlendirilir. Düzensiz lastik aşınması yalnız rot ayarı değil, burç veya geçmiş kaza işareti olabilir.

## Seçim

Kısıtlı bütçede sade 1.6 manuel Megane 2; daha güncel konfor isteyen kullanıcıda doğru kombinasyonlu Megane 3 mantıklıdır. Çok kısa şehir rotasında dCi yerine benzinli, uzun yolda bakım kayıtlı dCi düşünülebilir.`,
    },
    'volkswagen-passat-b7-ne-demek-b8-farklari': {
        updatedDate,
        excerpt: 'Passat B7’yi B8’den ayırın; 1.4 TSI, TDI, DSG, elektronik park freni ve gövdeyi kod bazında ayrıntılı kontrol edin.',
        keyTakeaways: ['B7, B6’nın Type 3C temelini geliştirir; B8 ise MQB tabanlı ayrı nesildir.', '1.4 TSI zincir ve yağ, TDI emisyon sistemi, DSG ise kuru/ıslak kod ayrımıyla değerlendirilir.', 'Geniş kabin ve donanım, bakımsız motor-şanzıman kombinasyonunu ekonomik yapmaz.'],
        faqs: [
            { question: 'Passat B7 hangi yıllardır?', answer: 'Volkswagen resmi arşivinde B7 2010-2014 dönemidir; tescil/model yılı geçişleri VIN’den doğrulanmalıdır.' },
            { question: 'B7 1.4 TSI zincirli mi?', answer: 'Yaygın EA111 1.4 TSI sürümlerinde zincir bulunur; kesin motor kodu ve üretim bilgisi VIN’den kontrol edilmelidir.' },
            { question: 'B7’de hangi DSG var?', answer: 'Motor ve torka göre farklı kuru/ıslak kavramalı DSG kodları bulunabilir. İlan adından değil şanzıman kodundan bakım/risk belirlenir.' },
            { question: 'B7 mi B8 mi alınır?', answer: 'B8 daha güncel platform ve teknoloji sunar; B7 daha düşük giriş maliyetli olabilir. Motor-şanzıman geçmişi ve kondisyon nesilden daha belirleyicidir.' },
        ],
        appendContent: `## 1.4 TSI Derin Kontrolü

Motor tamamen soğukken zincir/gergi sesi, eksantrik faz sapması ve yağ basıncı incelenir. Kompresyon, buji görünümü, yakıt düzeltmeleri ve turbo basıncı yük altında okunur. Yağ tüketimi beyanı seviye takibi/fatura ile doğrulanır; performans yazılımı ve fabrika dışı donanım torku artırmış olabilir.

## TDI ve Emisyon Sistemi

1.6/2.0 TDI’da enjektör düzeltmeleri/geri dönüş, turbo hedef-gerçek, DPF kurum-kül ve rejenerasyon, EGR ve çalışma sıcaklığı görülür. DPF’nin yazılımla iptal edilmiş olması sorunu çözmek yerine mevzuat, muayene ve motor yönetimi riski yaratır. SCR bulunan sürümde AdBlue sistemi eklenir.

## DSG Koduna Göre Test

DQ200 kuru ve torka uygun ıslak DSG aynı sıvı/bakım planını kullanmaz. Kod doğrulandıktan sonra soğuk D-R, geri manevra ve yokuş; tam ısınınca dur-kalk ve sabit hız test edilir. Kavrama adaptasyonu, mekatronik basınç/hata, sıcaklık ve volan sesi okunur. “Yağı değişti” doğru ürün ve prosedür faturasıyla kanıtlanmalıdır.

## Donanım ve Gövde

Elektronik park freni, Auto Hold, klima kapak motorları, RNS ekranı, park sensörü ve akü yönetimi denenir. Sunrooflu araçta drenaj ve tavan; Variant’ta bagaj havuzu kontrol edilir. DCC varsa her modda amortisör tepkisi ve hata kaydı görülür.

## B7-B8 Kararı

B8’in güncel platformu ve güvenliği daha iyi olabilir; fakat DSG/TSI/TDI kontrol ihtiyacı devam eder. B7’de daha düşük satın alma fiyatı, yaklaşan zincir, DPF, DSG veya elektronik maliyetleriyle birlikte hesaplanmalıdır.`,
    },
    'volkswagen-polo-6r-6c-ne-demek-farklari': {
        updatedDate,
        excerpt: 'Polo 6R ve 6C’yi EA111-EA211 TSI, MPI, TDI ve DQ200 DSG ayrımlarıyla kapsamlı ikinci el kontrolüne tabi tutun.',
        keyTakeaways: ['6C, beşinci nesil Polo’nun 2014 makyajıdır; ayrı bir temel nesil değildir.', '1.2 TSI adı zincirli EA111 veya kayışlı EA211’i kapsayabilir; motor kodu şarttır.', 'DQ200’de kavrama/mekatronik; TDI’da DPF/EGR; MPI’da LPG ve triger ayrı incelenir.'],
        faqs: [
            { question: 'Polo 6R ile 6C nasıl ayrılır?', answer: '6R 2009’da başlayan ilk seri, 6C 2014 güncellemesidir. Ön/arka tasarım, iç ekran ve motorlar değişir; VIN kesin ayrımı sağlar.' },
            { question: '1.2 TSI zincir mi kayış mı?', answer: 'Motor koduna bağlıdır. Erken EA111 zincirli, sonraki EA211 kayışlı sürümler bulunabilir; model yılı tek başına yeterli değildir.' },
            { question: 'Polo DSG alınır mı?', answer: 'Şanzıman kodu, kavrama/mekatronik verileri ve uzun sıcak test normal; geçmiş belgeli ise değerlendirilebilir.' },
            { question: '1.0 MPI mı TSI mı?', answer: 'MPI daha sade ama performansı sınırlı; TSI daha torklu fakat turbo ve direkt enjeksiyon kontrolleri ister. Kullanım ve kondisyon belirleyicidir.' },
        ],
        appendContent: `## Motor Koduyla Başlayın

EA111 zincirli TSI’da soğuk zincir/gergi ve faz değerleri; EA211 kayışlı TSI’da üretici triger planı, su pompası-termostat, turbo ve ateşleme incelenir. MPI motorlarda bobin-buji, triger, soğutma ve LPG varsa iki yakıt/kompresyon öne çıkar. Güç değeri yazılım geçmişiyle birlikte doğrulanır.

## DQ200 Test Protokolü

Akü/alternatör sağlığı görülür. Soğuk D-R ve ilk kalkıştan sonra geri park, yokuş ve dur-kalkla şanzıman ısınır. Kavrama temas/aşınma, sıcaklık ve mekatronik kayıtları okunur. Üç silindir titreşimi, motor kulağı ve ateşleme sorunu elenmeden kavrama değiştirme kararı verilmez.

## TDI Kontrolü

1.6 TDI ile 1.4 TDI aynı motor değildir. Enjektör dengesi/geri dönüş, turbo basıncı, EGR, DPF kurum-kül ve çalışma sıcaklığı motor koduna göre okunur. Kısa mesafe geçmişi sık rejenerasyon ve yağ seyrelmesi açısından önemlidir.

## Küçük Araçta Kaza ve Kullanım İzi

Şehir aracında tampon işlemleri olağan olabilir; yine de podye, şasi ucu, kule, direk, airbag ve kemerler ayrıca ölçülür. Jant eğriliği, lastik omzu, ön takım ve direksiyon düzlüğü yol testinde incelenir. Cam/kapı kilidi, klima, ekran ve iki anahtar denenir.

## Seçim

Kısa şehir rotasında sade MPI manuel; daha canlı sürüşte bakımlı TSI; uzun yolda emisyon sistemi sağlıklı TDI düşünülebilir. DSG konforu isteniyorsa gelecekteki kavrama/mekatronik rezervi bütçeye eklenmelidir.`,
    },
    'volkswagen-golf-7-75-dsg-alinir-mi': {
        updatedDate,
        excerpt: 'Golf 7 ve 7.5’te TSI/TDI motor kodu, DQ200/ıslak DSG, soğutma modülü, MIB ve ADAS için kapsamlı kontrol rehberi.',
        keyTakeaways: ['Golf 7.5, 2017 model güncellemesidir; motor ve multimedya gamı üretim ayına göre geçiş gösterebilir.', 'DSG kodu ve kavrama tipi motor torkuna göre değişir; tek bir DSG risk listesi doğru değildir.', 'TSI’da su pompası-termostat ve ateşleme; TDI’da DPF/EGR; tümünde elektronik/ADAS kontrol edilir.'],
        faqs: [
            { question: 'Golf 7.5 hangi yıllardır?', answer: '2017 güncellemesinden Golf VIII geçişine kadar olan makyajlı döneme verilen yaygın addır; üretim/model yılı VIN’den teyit edilir.' },
            { question: 'Golf 7 DSG kuru mu ıslak mı?', answer: 'Motor ve şanzıman koduna bağlıdır. Düşük torklu sürümlerde DQ200 kuru, daha yüksek torklu bazı sürümlerde ıslak DSG bulunabilir.' },
            { question: '1.5 TSI ACT sorunlu mu?', answer: 'Tek bir hüküm doğru değildir. Yazılım kampanyası, düşük devir davranışı, ACT geçişi, soğutma ve bakım geçmişi araç bazında kontrol edilir.' },
            { question: 'Golf 7 MIB ekranı nasıl kontrol edilir?', answer: 'Soğuk açılış, dokunmatik, Bluetooth/CarPlay, ses, geri kamera, USB ve yeniden başlama davranışı test edilir; hata kayıtları okunur.' },
        ],
        appendContent: `## TSI Ailesini Kodla Ayırın

1.2, 1.4 ve 1.5 TSI; güç, ACT ve üretim dönemine göre farklı donanım taşır. Soğuk çalışma, misfire sayacı, yakıt düzeltmesi, turbo hedef-gerçek ve yazılım seviyesi okunur. Su pompası-termostat modülü basınç testiyle incelenir; yeni antifriz veya motor yıkama kaçak onarımını kanıtlamaz.

## TDI Emisyon Sağlığı

DPF diferansiyel basıncı, kurum-kül tahmini, son rejenerasyonlar, EGR, enjektör ve turbo verileri gerçek çalışma sıcaklığıyla birlikte yorumlanır. Yazılımla DPF/EGR iptali arıza lambasını gizleyebilir; readiness ve yazılım bütünlüğü incelenir.

## DSG Koduna Özel Kontrol

Şanzıman kodu doğrulandıktan sonra sıvı/filtre planı belirlenir. Soğuk D-R, geri park, yokuş ve tam sıcak dur-kalk testi yapılır; kavrama/kayma, adaptasyon, mekatronik hata ve sıcaklık okunur. Volan, motor kulağı ve ateşleme titremesi ayrıca elenir.

## Golf 7.5 Elektroniği

MIB, dijital gösterge varsa ekran, ACC/Front Assist, elektronik park freni, Auto Hold, kamera ve park sensörleri denenir. Ön cam veya radar alanı işlemi kalibrasyon raporuyla doğrulanır. Start-stop şikâyetinde 12 V akü sağlık/uyarlaması kontrol edilir.

## Karar

Donanımdan önce motor-şanzıman kodu ve kullanım profili seçilir. Şehir içi kısa kullanımda benzinli, uzun yolda emisyon sistemi sağlıklı TDI; otomatikte ise belgeli DSG düşünülebilir. Yazılım uygulanmış, arıza kayıtları silinmiş veya sıcak teste izin verilmeyen aracı yalnız görünümü için almayın.`,
    },
    'renault-clio-3-alinir-mi-clio-4-farklari': {
        updatedDate,
        excerpt: 'Clio 3’ü Clio 4’ten ayırın; 1.2 16V, 1.5 dCi, Quickshift, elektronik direksiyon ve yaş kaynaklı riskleri ayrıntılı kontrol edin.',
        keyTakeaways: ['Clio 3’ün bazı pazarlarda Collection olarak uzayan dönemi nedeniyle yıl tek başına nesli belirlemez.', 'Quickshift klasik otomatik değil robotize manueldir; kavrama/aktüatör ve kalibrasyon ister.', '1.2 benzinli sadelik, 1.5 dCi ekonomi sunar; kullanım profili ve bakım geçmişi seçimi belirler.'],
        faqs: [
            { question: 'Clio 3 hangi yıllardır?', answer: 'Nesil 2005’te başladı; Clio IV geçişinden sonra bazı pazarlarda Collection adıyla devam ettiği için Türkiye ilanlarında 2014’e uzanan araçlar görülebilir.' },
            { question: 'Clio 3 Quickshift alınır mı?', answer: 'Kavrama noktası, aktüatör, kalibrasyon ve sıcak test normalse; sistemin geçiş karakteri kullanıcıya uygunsa değerlendirilebilir.' },
            { question: 'Clio 3 1.5 dCi’da DPF var mı?', answer: 'Üretim yılı, güç ve pazara göre değişebilir. VIN/motor kodundan doğrulanmalı; sistem varsa diferansiyel basınç ve rejenerasyon okunmalıdır.' },
            { question: 'Clio 3 mü Clio 4 mü?', answer: 'Clio 4 daha güncel güvenlik/teknoloji; Clio 3 daha düşük maliyet/sadelik sunabilir. Temiz geçmiş ve doğru kombinasyon nesilden önemlidir.' },
        ],
        appendContent: `## 1.2 16V ve 1.6 Benzinli

Triger-devirdaim faturası, soğuk rölanti, bobin-buji, boğaz kelebeği ve soğutma sistemi kontrol edilir. LPG varsa benzin-LPG yakıt düzeltmesi, kompresyon ve supap sağlığı incelenir. 1.6 otomatikte şanzıman kodu, sıvı/kaçak ve sıcak geçişler ayrıca test edilir.

## 1.5 dCi Derin Test

Motor kodu ve güç sürümüne göre enjektör sistemi ile emisyon donanımı değişebilir. Soğuk ilk marş, enjektör geri dönüş/rail basıncı, turbo hedef-gerçek, EGR ve yağlama geçmişi görülür. DPF varsa kurum-kül, çalışma sıcaklığı ve rejenerasyon kayıtları okunur.

## Quickshift ve Elektrikli Direksiyon

Quickshift’te akü/alternatör, kavrama temas noktası, aktüatör konumu ve hata geçmişi; soğuk-sıcak yokuş/geri manevrayla incelenir. Direksiyonda bir yöne destek farkı, uyarı veya ses varsa voltaj, tork sensörü, kolon ve mekanik ön takım ayrı test edilir.

## Yaş Kaynaklı Kontroller

Kapı kilidi/cam, klima fanı, kart/anahtar, bagaj ve tabanda su izi; amortisör üst takozu, z-rot, burç ve rulmanlar kontrol edilir. Triger yalnız kilometre değil zamanla da yaşlanır. Airbag/kemer ve podye-direk ölçümü dış panel boya sayısından önceliklidir.

## Seçim

Şehirde düşük kilometre yapan kullanıcı için bakımlı 1.2 manuel; düzenli uzun yolda belgeli 1.5 dCi; otomatik ihtiyacında ise Quickshift karakterini kabul eden ve onarım rezervi olan kullanıcı için uygun örnek düşünülebilir.`,
    },
    'opel-corsa-d-easytronic-alinir-mi': {
        updatedDate,
        excerpt: 'Corsa D’de 1.2/1.4 Twinport, 1.3 CDTI, Easytronic, elektrikli direksiyon ve gövdeyi ayrıntılı satın alma testleriyle inceleyin.',
        keyTakeaways: ['Easytronic robotize manueldir; geçiş karakteri, kavrama aşınması ve aktüatör arızası birbirinden ayrılmalıdır.', '1.2/1.4’te zincir-yağlama ve ateşleme; 1.3 CDTI’da enjektör, turbo ve emisyon sistemi öne çıkar.', 'Akü/alternatör zayıflığı Easytronic ve direksiyon gibi sistemlerde yanıltıcı hata üretebilir.'],
        faqs: [
            { question: 'Corsa D hangi yıllardır?', answer: 'Opel tarihçesinde dördüncü nesil 2006-2014 dönemidir; tescil geçişleri VIN’den doğrulanır.' },
            { question: 'Easytronic F arızası ne demek?', answer: 'Sistem vitese geçemediğinde genel F uyarısı verebilir; kavrama, aktüatör, sensör, tesisat veya düşük voltaj gibi farklı nedenler teşhis edilmelidir.' },
            { question: 'Corsa D 1.3 CDTI zincirli mi?', answer: 'Yaygın 1.3 CDTI zincirli zamanlama kullanır; ses, yağ basıncı ve bakım geçmişi birlikte kontrol edilir.' },
            { question: '1.4 otomatik Easytronic mi?', answer: 'Pazara ve versiyona göre farklı şanzıman olabilir. Vites kolu görünümü ve VIN/şanzıman kodu ile kesinleştirilmelidir.' },
        ],
        appendContent: `## Easytronic Teşhis Sırası

Önce 12 V akü, şarj voltajı ve topraklamalar kontrol edilir. Ardından debriyaj kavrama/temas değeri, aktüatör konumu, hidrolik/elektrik hataları ve kalibrasyon okunur. Soğuk ilk kalkış; tam sıcak geri manevra, yokuş ve dur-kalkla karşılaştırılır. F uyarısını silmek veya yalnız kalibrasyon yapmak kök nedeni çözmeyebilir.

## Twinport Benzinli Kontrolü

Soğuk zincir sesi, yağ basıncı/bakımı, Twinport/EGR sistemi, bobin-buji ve vakum kaçakları incelenir. LPG’li araç benzinde ve LPG’de yük altında test edilir; yakıt düzeltmeleri, kompresyon ve supap bakım geçmişi görülür. Termostat ve fan OBD sıcaklığıyla doğrulanır.

## 1.3 CDTI Kontrolü

Enjektör geri dönüşü, rail basıncı, turbo hedef-gerçek, EGR ve donanıma göre DPF verileri okunur. Zincir sesi yağ basıncı ve zamanlamayla doğrulanır. Sürekli kısa yol geçmişinde rejenerasyon ve yağ seyrelmesi araştırılır.

## Direksiyon, Ön Takım ve Elektrik

Elektrikli direksiyonun sağ-sol destek farkı parkta; kutu/kolon ve z-rot sesleri bozuk yolda test edilir. Klima, cam-kilit, ekran ve iki anahtar denenir. Bagaj/ayak havuzunda nem, alt gövdede korozyon ve lastik geometrisi kontrol edilir.

## Karar

Manuel benzinli en öngörülebilir kombinasyon olabilir; fakat bakımlı Easytronic veya dizel de kullanımına uygun alıcı için değerlendirilebilir. Aktüatör/kavrama faturası belirsiz, F hatası geçmişi silinmiş veya zincir/yağ basıncı şüpheli araçta fiyat indirimi tek başına koruma sağlamaz.`,
    },
    'ford-fiesta-mk7-ecoboost-powershift-alinir-mi': {
        updatedDate,
        excerpt: 'Fiesta Mk7/7.5’te 1.0 EcoBoost yağ-triger-soğutma, PowerShift TCM/kavrama ve dizel emisyon sistemi için derin kontrol rehberi.',
        keyTakeaways: ['1.0 EcoBoost’ta motor koduna uygun yağ ve zamanlama sistemi bakım kanıtı hayati önemdedir.', 'Fiesta’daki PowerShift kodu doğrulanmalı; TCM, kavrama ve düşük voltaj birlikte incelenmelidir.', 'Hararet veya yağ basıncı geçmişi olan küçük turbo motorda yüzeysel onarım kabul edilmemelidir.'],
        faqs: [
            { question: 'Fiesta Mk7 ve Mk7.5 hangi yıllardır?', answer: 'Nesil 2008-2017 dönemidir; yaklaşık 2013 makyajı Mk7.5 diye anılır. Motor/donanım geçişi VIN’den doğrulanır.' },
            { question: '1.0 EcoBoost trigeri yağın içinde mi?', answer: 'Bazı motor kodlarında yağ içinde çalışan kayış sistemi bulunur; üretim ve motor koduna göre kesin yapı, yağ şartnamesi ve değişim planı doğrulanmalıdır.' },
            { question: 'Fiesta PowerShift alınır mı?', answer: 'Kavrama/TCM geçmişi, voltaj, hata-adaptasyon ve uzun sıcak test normal; onarımlar belgeli ise değerlendirilebilir.' },
            { question: '1.25 Duratec mi 1.0 EcoBoost mu?', answer: '1.25 daha sade fakat performansı sınırlı; EcoBoost daha torklu ama yağ, zamanlama, turbo ve soğutma disiplinine daha bağımlıdır.' },
        ],
        appendContent: `## 1.0 EcoBoost’ta Kritik Zincir

Yağın içinde çalışan kayış bulunan sürümde yanlış yağ şartnamesi kayış malzemesini bozup yağ süzgecini tıkayabilir; bu da yağ basıncı ve turbo/motor hasarına ilerleyebilir. Faturada doğru Ford onayı, değişim aralığı ve zamanlama işleminin kapsamı aranır. Karter/süzgeç temizliği gerektiğinde yalnız kayış değişimi yeterli olmayabilir.

Soğutma kabı, hortumlar, termostat/devirdaim ve fan basınç altında incelenir. Hararet geçmişinde silindir kaçak/yanma gazı testi yapılır. Turbo hedef-gerçek basıncı, ateşleme ve yakıt düzeltmeleri yük altında okunur.

## PowerShift Derin Kontrolü

Şanzıman kodu ve kavrama tipi kesinleştirilir. 12 V akü/alternatör ve topraklama kontrolünden sonra TCM iletişim/hata geçmişi, kavrama temas-aşınma ve aktüatör verileri okunur. Soğuk D-R, geri manevra, yokuş ve tam sıcak dur-kalk test edilir. Motor kulağı veya tekleme titremesi ayrıca elenir.

## Atmosferik ve Dizel Seçenekler

1.25/1.4/1.6 atmosferikte triger planı, bobin-buji, soğutma ve LPG varsa iki yakıt kontrolü yapılır. TDCi’da enjektör geri dönüşü, turbo, EGR, çalışma sıcaklığı ve varsa DPF kurum-kül/rejenerasyon verileri incelenir.

## Gövde ve Donanım

SYNC/multimedya, klima, kapı kilidi, elektrikli direksiyon ve iki anahtar denenir. Bagaj/stepne havuzunda su izi, ön takım/üst takoz ve jant-lastik kontrol edilir. Podye, direk, airbag ve kemerler dış panel boyasından ayrı raporlanır.

## Sonuç

Belgeli 1.25 manuel en sade; doğru yağ ve soğutmayla bakılmış EcoBoost daha performanslı; PowerShift ise özel kontrol ve rezerv isteyen seçenektir. Kayış kalıntısı/yağ basıncı, hararet veya TCM-kavrama geçmişi belirsiz araçtan uzak durun.`,
    },
};
