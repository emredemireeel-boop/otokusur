import type { Guide } from './guides';

const publishDate = '2026-09-28';

export const queryOpportunityGuides: Guide[] = [
    {
        slug: 'honda-civic-kasa-kodlari-hangi-yillar-es7-fd6-fb7-fc5-fe1',
        title: 'Honda Civic Kasa Kodları ve Yılları: ES7, FD6, FB7, FC5, FE1',
        excerpt: 'Honda Civic kasa kodları hangi yılları kapsıyor? ES7, FD6, FB7, FC5 ve FE1 adlarını Türkiye pazarı, geçiş yılları ve doğru VIN kontrolüyle açıklıyoruz.',
        category: 'Kasa Kodu Rehberi',
        readTime: '11 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [13001, 105, 119, 118, 5],
        keyTakeaways: [
            'ES7, FD6, FB7, FC5 ve FE1 adları Türkiye ilan dilinde nesilleri ayırmak için kullanılsa da kesin kimlik VIN ve üretici kaydıyla doğrulanır.',
            'FD7, FB7’nin başka yazımı veya dokuzuncu neslin genel adı değildir; pazara ve motor seçeneğine bağlı bir varyant kodu olarak görülür.',
            'Takvim yılı, model yılı ve ilk tescil tarihi farklı olabilir; geçiş yıllarında yalnız ilan başlığıyla karar verilmez.',
            'Kronik sorun araştırması kasa kodundan sonra motor, şanzıman, üretim fazı ve kullanım geçmişine göre daraltılmalıdır.',
        ],
        faqs: [
            { question: 'Honda Civic ES7 hangi yıllar?', answer: 'Türkiye ilanlarında ES7 adı çoğunlukla 2001-2006 model yedinci nesil Civic sedanı anlatır. Pazar ve üretim ayına göre sınır örnekler olabileceği için VIN ve araç etiketi kontrol edilmelidir.' },
            { question: 'Honda Civic FD6 hangi yıllar?', answer: 'Türkiye’de FD6 denildiğinde genel olarak 2006-2011 üretim dönemindeki sekizinci nesil Civic Sedan anlaşılır; bazı ilanlarda tescil veya model yılı nedeniyle 2012 ifadesi görülebilir.' },
            { question: 'Honda Civic FB7 hangi yıllar?', answer: 'FB7, Türkiye’de yaygın olarak 2012-2016 dokuzuncu nesil Civic Sedan için kullanılır. 1.6 i-VTEC, manuel veya beş ileri otomatik ve ECO/LPG örnekleri yaygındır.' },
            { question: 'Honda Civic FC5 ve FE1 hangi yıllar?', answer: 'FC5 Türkiye’de 2016-2021 onuncu nesil sedan; FE1 ise 2021’de gelen on birinci nesil sedan için kullanılan addır. Model yılı geçişlerinde VIN ile doğrulama gerekir.' },
            { question: 'FD7 ile FB7 aynı araç mı?', answer: 'Hayır. FB7 Türkiye’de dokuzuncu nesil sedanın yerleşik kodudur. FD7 bazı pazarlarda sekizinci neslin belirli motor veya varyantlarında görülebilir; her FD7 ilanını FB7 kabul etmek yanlıştır.' },
        ],
        howToSteps: [
            { name: 'İlan bilgisini ayırın', text: 'Satıcıdan model yılı, üretim tarihi, ilk tescil tarihi, motor hacmi ve şasi numarasını ayrı ayrı isteyin.' },
            { name: 'VIN ile kimliği doğrulayın', text: 'Üretici veya yetkili servis kaydından kasa, motor, şanzıman, fabrika donanımı ve açık kampanyaları kontrol edin.' },
            { name: 'Doğru araç raporuna geçin', text: 'Kasa kodu kesinleşince OtoKusur’daki ilgili nesil ve motor raporunu açın; komşu neslin sorun listesini kullanmayın.' },
            { name: 'Geçmiş ve ekspertizi eşleştirin', text: 'Servis faturası, muayene kilometresi, hasar kaydı, soğuk çalıştırma, cihaz taraması ve yol testini birlikte değerlendirin.' },
        ],
        content: `## Honda Civic Kasa Kodları Neden Karışıyor?

Türkiye’de ikinci el Civic ilanları yalnız nesil adıyla değil **ES7, FD6, FB7, FC5 ve FE1** gibi kodlarla aranıyor. Bu kısa adlar doğru kullanıldığında aradığınız gövdeyi hızla buldurur; yanlış kullanıldığında ise farklı motor, şanzıman ve kronik sorun listelerini birbirine karıştırır. En temel kural şudur: kasa kodu bir pazarlama paketi değildir ve aracın tüm teknik kimliğini tek başına anlatmaz.

Honda aynı nesli farklı ülkelerde sedan, hatchback ve coupe gövdelerle; farklı motor ve homologasyon kodlarıyla satabildi. Türkiye ilan kültürü bu geniş aileden birkaç kodu neslin adı gibi benimsedi. Bu yüzden aşağıdaki tablo pratik bir arama sözlüğüdür; aracın üzerindeki tip etiketi ve VIN kaydı ise nihai kanıttır.

## Civic Kasa Kodu ve Yıl Tablosu

| Türkiye’de kullanılan ad | Nesil | Yaygın model dönemi | Kısa tanım |
|---|---:|---|---|
| ES7 / VTEC II | 7. nesil | 2001-2006 | 1.6 benzinli sedan ağırlıklı, manuel ve dört ileri otomatik |
| FD6 | 8. nesil | 2006-2011; bazı ilanlarda 2012 | Türkiye üretimi sedan, 1.6 i-VTEC ve LPG dönüşümlü/ECO örnekler yaygın |
| FB7 | 9. nesil | 2012-2016 | 1.6 i-VTEC sedan, manuel veya beş ileri otomatik |
| FC5 | 10. nesil | 2016-2021 | 1.6 i-VTEC/ECO ve 1.5 VTEC Turbo seçenekli sedan |
| FE1 | 11. nesil | 2021 ve sonrası | 1.5 VTEC Turbo, CVT ve Türkiye’de ECO seçeneği bulunan sedan |

Honda’nın resmî tarihçesi yedinci neslin 2000’de küresel olarak tanıtıldığını, sekizinci neslin 2006 model yılıyla geldiğini, dokuzuncu neslin 2012 model olarak sunulduğunu ve onuncu neslin 2016 model yılıyla başladığını doğrular. Türkiye’de tescil, stok ve üretim takvimi nedeniyle ilanlardaki başlangıç-bitiş yılları birkaç ay örtüşebilir. Bu, iki neslin aynı olduğu anlamına gelmez.

## ES7 ve “VTEC II” Ne Demek?

ES7, Türkiye’de çoğunlukla 2001-2006 yedinci nesil Civic sedan için kullanılan koddur. “VTEC II” veya “VTEC 2” ise Honda’nın resmî nesil adı değildir; piyasada bu kasayı önceki Civic’ten ayırmak için yerleşmiş bir lakaptır. VTEC de tek bir motor kodu değil, supap zamanlaması ve kaldırmasını çalışma koşuluna göre yöneten Honda teknolojilerinin genel adıdır.

Bu nedenle ilanda yalnız “VTEC 2” yazması motorun tam kimliğini kanıtlamaz. Motor etiketi, ruhsat hacmi, güç değeri, LPG montaj tarihi ve şanzıman tipi ayrıca kontrol edilmelidir. Ayrıntılı alım kontrolü için [Honda Civic VTEC II (ES7) rehberine](/rehber/honda-civic-vtec-2-es7-alinir-mi-kronik-sorunlar) geçebilirsiniz.

## FD6 Hangi Yıllar? 2012 İlanları Neden Var?

FD6, Türkiye’de sekizinci nesil Civic Sedan ile özdeşleşmiştir. Küresel sekizinci nesil 2006 model yılıyla başladı; Türkiye ikinci elinde yaygın dönem 2006-2011’dir. Bir aracın trafiğe 2012’de çıkmış olması, ilk tescil tarihinin 2012 olması veya ilanın satıcı tarafından “2012” yazılması onu otomatik olarak FB7 yapmaz. Gövde tasarımı, VIN, model yılı ve tip etiketi birlikte okunmalıdır.

FD6’da ön makyaj-makyaj ayrımı, donanım, otomatik şanzıman geçmişi, LPG kalibrasyonu ve gövde onarımı satın alma kararını doğrudan etkiler. Sadece “FD6 sorunsuzdur” genellemesi güvenli değildir. Aynı kasadaki iki araçtan belgeli bakımlı olan, düşük kilometre yazan fakat geçmişi belirsiz örnekten daha iyi olabilir.

## FD7 Nedir? En Çok Yapılan Hata

“FD7 hangi yıllar?” sorgusunun tek satırlık güvenli cevabı yoktur. FD7, bazı pazarlarda sekizinci nesil sedan ailesinin belirli motor/varyant kodlarında görülebilir; **FB7’nin eş anlamlısı veya FD6’dan sonraki neslin adı değildir**. Türkiye’de ilan başlıklarında FD7 ifadesi bazen hatalı biçimde kullanıldığı için aracın motoru, pazar kökeni ve VIN’i görülmeden yıl aralığı vermek yanıltıcı olur.

İlanda “FD7 2012” görürseniz önce aracın sekizinci nesil gövde mi, dokuzuncu nesil FB7 mi olduğunu fotoğrafla ve VIN kaydıyla doğrulayın. Bu konu için hazırlanan [FD7, FD6 ve FB7 farkları rehberi](/rehber/honda-civic-fd7-ne-demek-fd6-fb7-farki) yanlış ilan etiketlerini ayıklamak üzere daha ayrıntılı bir kontrol akışı sunar.

## FB7 Hangi Yıllar?

Türkiye’de FB7, genel olarak 2012-2016 model yıllarındaki dokuzuncu nesil Civic Sedanı anlatır. En yaygın kombinasyon 1.6 i-VTEC motor ile manuel veya beş ileri otomatik şanzımandır; fabrika çıkışı ya da sonradan LPG’li araçlar bulunur. Honda’nın 2011 tarihli küresel duyurusu 2012 Civic’i dokuzuncu nesil olarak tanımlar.

FB7 alırken boya/vernik durumu, LPG ayarı ve supap boşluğu takibi, motor takozları, otomatik şanzıman sıvı geçmişi, ön takım ve klima performansı kontrol edilmelidir. Bunlar her araçta kesin arıza var demek değildir; aday aracı hangi koşullarda incelemeniz gerektiğini gösteren risk başlıklarıdır. Mevcut [Honda Civic FB7 ne demek, alınır mı?](/rehber/honda-civic-fb7-ne-demek-alinir-mi) sayfasında motor ve ekspertiz ayrıntıları bulunur.

## FC5 ve FE1 Nasıl Ayırt Edilir?

FC5, Türkiye’de 2016-2021 onuncu nesil Civic Sedan için yaygın addır. 1.6 atmosferik i-VTEC/ECO ile 1.5 VTEC Turbo seçenekleri aynı gövde adı altında farklı satın alma kontrolleri gerektirir. CVT davranışı, LPG sistemi, turbo motorun yağ ve soğutma geçmişi birbirinin yerine okunamaz.

FE1 ise 2021’de başlayan on birinci nesil sedanı anlatır. Türkiye ürün gamındaki 1.5 VTEC Turbo ve ECO versiyonlarda güç, yakıt sistemi ve fabrika donanımı VIN üzerinden doğrulanmalıdır. Sürüş destekleri bulunan araçlarda ön cam, kamera veya tampon işlemi sonrası kalibrasyon kaydı önemlidir. Ayrıntılar için [Honda Civic FE1 hangi yıllar?](/rehber/honda-civic-fe1-ne-demek-hangi-yillar) rehberi kullanılabilir.

## Kasa Kodunu Doğrulamak İçin 7 Kontrol

1. Ruhsattaki model yılı ile ilk tescil tarihini ayrı okuyun.
2. Şasi numarasını kaporta üzerindeki, ön camdaki ve belgelerdeki kayıtlarla eşleştirin.
3. Yetkili servis/üretici sisteminden model, motor, şanzıman ve fabrika donanımını sorgulatın.
4. Motor üzerindeki kimlik ve etiketlerde kazıma, sökme veya uyumsuzluk olup olmadığına baktırın.
5. İlan fotoğrafındaki gövdeyi makyaj dönemi ve nesil referansıyla karşılaştırın.
6. OBD taramasında tüm modüllerin araç kimliğiyle tutarlı olduğundan emin olun.
7. Geçiş yılı diye açıklanan belirsizliği sözle değil belgeyle çözün.

Kasa doğrulandıktan sonra kronik sorun aramasını “Civic kronik” seviyesinde bırakmayın. Örneğin “FB7 1.6 otomatik LPG 2014” gibi motor, şanzıman, yakıt ve yılı içeren sorgu daha doğru sonuç verir. Ekspertize de aynı teknik kimliği yazılı iletin; aksi halde genel kontrol paketi modele özgü zayıf noktaları atlayabilir.

## Kaynaklar

- [Honda: 2000 Civic tam model değişimi ve yedinci nesil](https://global.honda/en/newsroom/worldnews/2000/4000913.html)
- [Honda: 2001 Civic ailesi ve 1.6 VTEC teknik bilgisi](https://global.honda/en/newsroom/news/2001/4010220-eng.html)
- [Honda: 2006 model sekizinci nesil Civic](https://global.honda/en/newsroom/worldnews/2005/4050831.html)
- [Honda: 2012 Civic ve dokuzuncu nesil](https://global.honda/en/newsroom/worldnews/2011/4110217Civic.html)
- [Honda: 2016 model onuncu nesil Civic Sedan](https://global.honda/en/newsroom/news/2015/4150917eng.html)

Yıl sınırları ülke, üretim ayı ve tescil uygulamasına göre örtüşebilir. Satın alınacak tekil araçta VIN, uygunluk/tescil kaydı ve üretici verisi esas alınmalıdır.`,
    },
    {
        slug: 'honda-civic-vtec-2-es7-alinir-mi-kronik-sorunlar',
        title: 'Honda Civic VTEC II (ES7) Alınır mı? Kronik Sorunlar ve Yıllar',
        excerpt: 'VTEC 2 hangi kasa ve hangi yıllar? Honda Civic ES7’nin motor, otomatik şanzıman, LPG, hararet, ön takım ve kaporta kontrollerini derinlemesine inceleyin.',
        category: 'Model Satın Alma Rehberi',
        readTime: '12 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [13001],
        keyTakeaways: [
            'VTEC II resmî Honda model adı değil; Türkiye’de çoğunlukla 2001-2006 Civic ES7 sedan için kullanılan piyasa lakabıdır.',
            'ES7’de kilometreden önce hararet ve LPG geçmişi, gövde doğruluğu, otomatik şanzıman bakımı ve soğuk çalışma görülmelidir.',
            'VTEC teknolojisi tek başına motor kodunu veya aracın sorunsuz olduğunu kanıtlamaz.',
            'Modifiyesiz, belgeli ve soğuk çalıştırılabilen örnek; ucuz fakat geçmişi belirsiz araçtan daha değerlidir.',
        ],
        faqs: [
            { question: 'Honda Civic VTEC 2 hangi yıllar?', answer: 'Türkiye ikinci el dilinde VTEC 2 adı çoğunlukla 2001-2006 model yedinci nesil Civic sedan/ES7 için kullanılır. Geçiş araçlarında VIN doğrulaması yapılmalıdır.' },
            { question: 'VTEC II ile ES7 aynı mı?', answer: 'Piyasa kullanımında çoğu zaman aynı araç kastedilir; fakat VTEC II resmî model veya şasi kodu değildir. ES7 ifadesi de araç üzerindeki etiketten doğrulanmalıdır.' },
            { question: 'ES7 otomatik şanzıman alınır mı?', answer: 'Doğru sıvıyla belgeli bakım, soğuk-sıcak sorunsuz D/R kavraması ve vuruntusuz geçiş varsa değerlendirilebilir. Test ve bakım kaydı olmadan yalnız kısa sürüş yeterli değildir.' },
            { question: 'Honda Civic ES7 LPG’ye uygun mu?', answer: 'Doğru montaj ve kalibrasyonla kullanılabilir; supap boşluğu, kompresyon, benzin sistemi ve yakıt düzeltmeleri düzenli kontrol edilmelidir.' },
            { question: 'VTEC 2 alırken en önemli kusur nedir?', answer: 'Tek bir kusur yoktur. Hararet geçmişi ve gövde güvenliği en kritik eleme başlıklarıdır; LPG, şanzıman, ön takım ve elektrik kontrolleri bunları tamamlar.' },
        ],
        howToSteps: [
            { name: 'Aracı soğuk görün', text: 'Satıcıdan aracı çalıştırmamasını isteyin; motor sıcaklığı, ilk marş, duman, ses ve rölantiyi kaydedin.' },
            { name: 'Motor ve LPG’yi ölçün', text: 'Kompresyon/silindir denge testi, soğutma sistemi basıncı, yakıt düzeltmeleri ve supap boşluğu geçmişini inceleyin.' },
            { name: 'Şanzımanı tam ısıtın', text: 'D/R kavrama süresi, düşük hız geçişleri, yokuş ve sıcak tekrar testinde gecikme veya vuruntu arayın.' },
            { name: 'Gövde ve yürüyeni kontrol edin', text: 'Podye, direk, taban, airbag, şasi geometrisi, ön takım ve lastik aşınmasını liftte doğrulayın.' },
            { name: 'Toplam maliyet çıkarın', text: 'İlk bakım, triger/bakım geçmişi, lastik, akü, LPG ve yakın mekanik işlemleri fiyata ekleyerek karar verin.' },
        ],
        content: `## VTEC 2 Ne Demek?

“Honda Civic VTEC 2” veya “VTEC II”, Türkiye’de çoğunlukla **2001-2006 yedinci nesil Civic sedanı**, yani ilanlarda ES7 diye aranan kasayı anlatır. Ancak bu ifade Honda’nın resmî nesil adı değildir. Honda yedinci nesli 2000’de küresel olarak duyurdu; Avrupa ailesinde 1.4 ve 1.6 SOHC VTEC motor seçenekleri sundu. Türkiye’de kullanıcıların önceki nesilden ayırmak için benimsediği VTEC 2 adı zamanla ilan kategorisine dönüştü.

VTEC’in açılımı değişken supap zamanlaması ve kaldırmasının elektronik kontrolüdür. Honda’nın kendi teknoloji tarihçesi sistemin düşük devir kullanılabilirliği ile yüksek devir performansını aynı motorda birleştirmek için geliştirildiğini açıklar. Fakat “VTEC var” demek motor kodunu, gücü, LPG uyumunu veya bakım durumunu söylemez. Satın alırken motor etiketi ve VIN esastır.

## VTEC II / ES7 Kimlik Kartı

| Başlık | Türkiye ikinci elindeki yaygın karşılık |
|---|---|
| Nesil | Yedinci nesil Civic |
| Dönem | 2001-2006 model yılları ağırlıklı |
| Gövde | 4 kapı sedan |
| Yaygın motor | 1.6 litre benzinli VTEC ailesi |
| Şanzıman | 5 ileri manuel veya 4 ileri otomatik |
| Yakıt | Benzin; sonradan LPG dönüşümü çok yaygın |

Yirmi yaşını aşmış bir ES7’de fabrika çıkışındaki teorik güvenilirlikten daha önemli olan, aracın nasıl yaşlandığıdır. Aynı model ve kilometrede iki araç; hararet, LPG ayarı, kaza, parça kalitesi ve bakım disiplini nedeniyle tamamen farklı risk taşır.

## Motor, Hararet ve Yağ Kontrolü

Aracı mutlaka birkaç saat çalışmamış halde görün. Kontağı açınca motor, ABS ve airbag lambalarının yandığını; çalışınca normal biçimde söndüğünü kontrol edin. İlk marş uzunsa, rölanti dalgalanıyorsa, egzozda kalıcı mavi/beyaz duman varsa veya soğutma kabında yağ izi görülüyorsa teşhis tamamlanmadan pazarlık yapmayın.

ES7’de geçmişte yaşanmış hararet; silindir kapak contası, kapak eğriliği, radyatör, termostat, fan müşürü/motoru veya hortum sorunlarıyla ilişkili olabilir. Motor sıcakken genleşme kabında kabarcık görmek tek başına hüküm değildir; soğutma sistemi basınç testi, yanma gazı testi ve kompresyon/silindir kaçak ölçümüyle doğrulanmalıdır. “Conta yeni yapıldı” sözü; faturada işlem kapsamı, taşlama/ölçüm ve değişen parçalar yoksa güvence sayılmaz.

Yağ kapağında kısa mesafe kullanımından oluşabilen nem ile soğutma suyu karışmasını ayırmak gerekir. Karter, krank keçeleri, kapak contası ve şanzıman çevresindeki sızıntılar liftte görülmelidir. Motor numarası ve ruhsat uyumu da kontrol planının parçasıdır.

## LPG’li ES7 Nasıl İncelenir?

LPG, tek başına aracı kötü yapmaz; kötü montaj ve yanlış karışım uzun süreli risk yaratır. Montaj projesi/ruhsat kaydı, tank tarihi, regülatör ve enjektör markası, filtre değişimleri ve ayar faturaları istenmelidir. Motor hem benzinde hem LPG’de tam soğuk ve tam sıcak çalıştırılmalı; geçiş anında stop, tekleme veya belirgin güç farkı olmamalıdır.

Üretici uyumlu cihazla kısa ve uzun dönem yakıt düzeltmelerine, misfire sayaçlarına, oksijen sensörü davranışına ve soğutma sıcaklığına bakın. Supap boşluğu bakımının ne zaman yapıldığı sorulmalı; düzensiz rölanti veya düşük kompresyon doğrudan “LPG supap yakmış” diye yorumlanmadan ölçülmelidir. Benzin deposunu sürekli boş kullanan araçlarda pompa ve enjektör sistemi de ihmal edilmiş olabilir.

## Otomatik Şanzımanda Kritik Test

Dört ileri otomatik, doğru bakım görmüşse kullanılabilir; fakat yaş, yanlış sıvı ve ertelenmiş bakım riskini artırır. Motor soğukken frene basılı D ve R konumuna geçin. Kavrama makul ve tutarlı olmalı; uzun bekleme, sert vuruntu veya gaz vermeden hareket edememe ileri inceleme gerektirir.

En az 25-30 dakikalık sürüşte düşük hız geçişlerini, hafif ve orta gazı, yokuşu ve geri manevrayı deneyin. Tam ısınınca aynı D/R testini tekrarlayın. Yağın rengi/kokusu yardımcı ipucudur ama laboratuvar sonucu değildir; bakım faturası ve doğru Honda şartnamesi aranmalıdır. “Yağı hiç değişmedi, fabrika yağı” ifadesi avantaj değil, belirsizliktir.

Manuel araçta kavrama noktası, yük altında kaçırma, vites senkromeçleri ve aks sesleri kontrol edilmelidir. Debriyaj sertliği tek başına baskı-balata teşhisi koydurmaz; hidrolik ve pedal mekanizması da incelenir.

## Ön Takım, Direksiyon ve Frenler

Yaşlı ES7’lerde salıncak burcu, rotil, z-rot, amortisör üst takozu ve motor kulağı gibi kauçuk/parçalar birlikte yorulabilir. Tek bir sesi susturmak yerine liftte tüm aksı yük altında kontrol etmek daha doğrudur. Düz yolda direksiyon bırakıldığında çekme, frenlemede yön değiştirme veya düzensiz lastik aşınması varsa dört teker geometri ölçümü isteyin.

Direksiyon pompası/sistemi, hortum ve kaçaklar; tam turda ses ve direksiyon hissiyle değerlendirilir. Fren disk kalınlığı ve salınımı, balata, hortum, kaliper ve fren hidroliği birlikte incelenmelidir. ABS lambasının sönmesi sensörlerin tüm hızlarda doğru veri verdiğini garanti etmez; canlı teker hızlarını kontrol etmek faydalıdır.

## Kaporta, Kaza ve Yaşlanma

Bu yaşta boya veya değişen panel tek başına ret sebebi değildir. Önemli olan direk, podye, şasi ucu, taban, tavan, süspansiyon bağlantıları ve airbag sistemidir. Kaynak izleri, dikiş macunu farkı, emniyet kemeri üretim tarihleri ve airbag modülü taraması gövde ölçümüyle birlikte yorumlanmalıdır.

Su alma; bagaj havuzu, stepne yuvası, kapı altları ve paspas altında korozyon/elektrik sorunu doğurabilir. Klima kompresörü, fan kademeleri, camlar, merkezi kilit, ayna, silecek ve aydınlatmalar tek tek denenmelidir. Sonradan alarm, ses sistemi veya far tesisatı eklenmiş araçlarda kablo ekleri ve sigorta düzeni özellikle görülmelidir.

## Satıcıya Sorulacak 10 Net Soru

1. Aracı sabah soğuk görebilir miyim?
2. Hararet, conta veya radyatör işlemi oldu mu; faturası var mı?
3. LPG montaj tarihi, tank tarihi ve son ayar ne zaman?
4. Supap boşluğu ve kompresyon ölçümü yapıldı mı?
5. Otomatik şanzıman sıvısı hangi ürünle, hangi kilometrede değişti?
6. Triger/bakım bileşenleri ve devirdaim geçmişi belgeli mi?
7. Airbag açması veya şasi-direk işlemi var mı?
8. Motor ya da şanzıman değişti/revize edildi mi?
9. Muayene kilometreleri ve servis faturaları görülebilir mi?
10. Bağımsız ekspertiz ve üretici uyumlu cihaz taramasına izin var mı?

Kaçamak yanıt, motoru önceden ısıtma, arıza kodlarını görüşmeden hemen önce silme veya ekspertizi satıcının seçtiği tek yere zorlama ciddi uyarıdır. Kapora vermeden önce kimlik ve geçmiş doğrulanmalıdır.

## Sonuç: VTEC 2 Alınır mı?

Bakımlı, gövdesi güvenli, hararet geçmişi olmayan veya doğru onarımı belgelenmiş, LPG ayarı ve şanzıman bakımı doğrulanabilen ES7 hâlâ sade ve kullanılabilir bir ikinci el olabilir. Ancak “Honda motoru ölmez” sözü ekspertizin yerini tutmaz. Yaşı gereği birden çok küçük masrafın aynı anda çıkabileceği düşünülerek ilk bakım ve arıza rezervi ayrılmalıdır.

En iyi aday; en parlak görünen veya en düşük kilometre yazan değil, **kimliği doğru, geçmişi kronolojik, soğuk çalıştırılabilen ve ölçüme izin verilen** araçtır.

## Kaynaklar

- [Honda: yedinci nesil Civic’in 2000 küresel tanıtımı](https://global.honda/en/newsroom/worldnews/2000/4000913.html)
- [Honda: 2001 Civic motor ve gövde ailesi](https://global.honda/en/newsroom/news/2001/4010220-eng.html)
- [Honda: VTEC teknolojisinin çalışma ilkesi](https://global.honda/en/tech/engine/car/B16A_integra_vtec/)

Bu rehber model ailesi için risk temelli kontrol listesi sunar; her araçta bu arızaların bulunduğu anlamına gelmez. Tekil araç kararı ölçüm, belge ve bağımsız ekspertizle verilmelidir.`,
    },
    {
        slug: 'honda-civic-fd7-ne-demek-fd6-fb7-farki',
        title: 'Honda Civic FD7 Ne Demek? FD6 ve FB7 ile Karıştırmayın',
        excerpt: 'FD7 hangi yıllar sorusunun neden tek cevabı olmadığını, FD6 ve FB7 farkını, ilan hatalarını ve VIN ile doğru kasa tespitini açıklıyoruz.',
        category: 'Kasa Kodu Rehberi',
        readTime: '9 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [105, 119],
        keyTakeaways: [
            'FD7, FB7’nin başka yazımı değildir ve dokuzuncu nesil Civic’in Türkiye’deki genel kodu sayılmaz.',
            'FD6/FD7 aynı sekizinci nesil sedan ailesinde pazara veya motora bağlı farklı varyant kodları olarak görülebilir.',
            'Türkiye’de 2012-2016 dokuzuncu nesil sedan için yerleşik arama adı FB7’dir.',
            'İlandaki kodu VIN, motor hacmi, model yılı ve gövdeyle doğrulamadan parça veya kronik sorun araştırması yapılmamalıdır.',
        ],
        faqs: [
            { question: 'Honda Civic FD7 hangi yıllar?', answer: 'FD7 için Türkiye pazarına uygulanabilen tek ve bağımsız bir nesil yıl aralığı vermek doğru değildir. Kod bazı pazarlarda sekizinci nesil sedanın belirli varyantlarında görülür; VIN ile doğrulanmalıdır.' },
            { question: 'FD7 ile FB7 aynı mı?', answer: 'Hayır. FB7 Türkiye’de 2012-2016 dokuzuncu nesil Civic Sedanı anlatır. FD7 ifadesi sekizinci nesil ailesindeki bazı varyantlarda veya hatalı ilanlarda görülebilir.' },
            { question: 'FD6 ile FD7 arasındaki temel fark nedir?', answer: 'Fark çoğu durumda bağımsız kasa neslinden ziyade motor, pazar veya tip varyantıdır. Fotoğraf ve ilan başlığı yerine araç üzerindeki kod ve üretici kaydı esas alınmalıdır.' },
            { question: '2012 Civic FD7 olur mu?', answer: 'Yalnız model yılına bakarak karar verilmez. 2012 ilk tescilli sekizinci nesil bir araç, dokuzuncu nesil FB7 veya hatalı etiketlenmiş ilan olabilir; VIN ve gövde doğrulanmalıdır.' },
            { question: 'FD7 için hangi kronik sorun listesi kullanılmalı?', answer: 'Önce araç nesli, motoru ve şanzımanı kesinleştirilmelidir. Sekizinci nesilse FD6 ailesinin uygun motor/şanzıman kontrolleri; dokuzuncu nesilse FB7 kontrolleri kullanılmalıdır.' },
        ],
        howToSteps: [
            { name: 'Gövdeyi nesil olarak tanıyın', text: 'Aracın sekizinci nesil FD gövde mi, dokuzuncu nesil FB gövde mi olduğunu ön-arka tasarım ve iç mekânla kontrol edin.' },
            { name: 'Belge tarihlerini ayırın', text: 'Model yılı, üretim tarihi ve ilk tescil tarihini ayrı ayrı okuyun; yalnız ilandaki yıla güvenmeyin.' },
            { name: 'VIN ve motoru doğrulayın', text: 'Şasi numarasıyla üretici kaydındaki tip, motor hacmi, motor kodu, şanzıman ve pazar bilgisini eşleştirin.' },
            { name: 'Doğru kontrol listesini kullanın', text: 'Kimlik kesinleşince FD6 veya FB7’ye ait motor-şanzıman odaklı ekspertiz planını uygulayın.' },
        ],
        content: `## Kısa Cevap: FD7 Bir Sonraki Civic Nesli Değildir

İkinci el ilanlarında “FD7 hangi yıllar?” sorusu sık aranıyor; ancak sorunun içinde yaygın bir varsayım hatası var. **FD7, FD6’dan sonra gelen dokuzuncu neslin adı değildir.** Türkiye’de 2012-2016 dokuzuncu nesil Civic Sedan için yaygın ve yerleşik kod FB7’dir. FD7 ise bazı ülke ve motor varyantlarında sekizinci nesil sedan ailesi içinde görülebilen bir tanımlamadır.

Bu yüzden “FD7 = 2012-2016” yazmak hem parça seçiminde hem kronik sorun araştırmasında yanlış yönlendirebilir. İlan sahibi kodu alışkanlıkla, motor hacmine bakmadan veya FB7 ile karıştırarak yazmış olabilir. Kesin cevap aracın VIN kaydından gelir.

## FD6, FD7 ve FB7 Fark Tablosu

| İfade | Güvenli anlamı | Türkiye’de yaygın dönem | En önemli uyarı |
|---|---|---|---|
| FD6 | Sekizinci nesil Civic Sedan’ın Türkiye’de yaygın 1.6 varyant adı | 2006-2011; bazı 2012 tesciller | Model yılı ile ilk tescili karıştırmayın |
| FD7 | Bazı pazarlarda FD sedan ailesindeki motor/tip varyantı | Tek başına sabit yıl aralığı verilmez | FB7’nin diğer adı değildir |
| FB7 | Dokuzuncu nesil Civic Sedan’ın Türkiye’de yerleşik kodu | 2012-2016 | Motor, şanzıman ve ECO/LPG yine ayrıca doğrulanır |

Honda, 2005’te 2006 model sekizinci nesil Civic’i; 2011’de ise 2012 model dokuzuncu nesli duyurdu. Resmî nesil ayrımı nettir. Karışıklık, global şasi/tip kodlarının Türkiye’de neslin tamamını anlatan lakaplar gibi kullanılmasından doğar.

## Neden “FD7 Hangi Yıllar?” Sorusuna Tek Yıl Verilemiyor?

Bir üretici aynı gövde ailesini farklı ülkelerde farklı motor, direksiyon konumu, emisyon standardı ve donanımla homologe edebilir. Şasi/tip kodundaki son karakter, her zaman “bir sonraki kasa” anlamına gelmez. FD ailesinde de kod, pazar ve motor varyantı ilişkisi görülebilir.

Türkiye’de yaygın 1.6 sedan için FD6 adı yerleşmiştir. FD7 ifadesi daha sınırlı veya ithal bir varyantta görülebileceği gibi, satıcının yanlış yazımı da olabilir. Aracın fotoğrafı sekizinci nesil, ilan başlığı FB7, açıklaması FD7 ise başlığı düzeltmeye çalışmak yerine VIN istemek gerekir.

## 2012 Model Yılı Neden Özellikle Karışıyor?

Nesil değişimlerinin olduğu yıllarda üç tarih farklılaşabilir:

- Üretim tarihi: aracın fabrikada tamamlandığı tarih.
- Model yılı: uygunluk/tescil sistemindeki teknik yıl bilgisi.
- İlk tescil tarihi: aracın ilk kez trafiğe kaydedildiği tarih.

2011 sonunda üretilen yeni nesil bir otomobil 2012 model olabilir; önceki nesilden stokta kalan bir araç 2012’de ilk kez tescil edilebilir. Dolayısıyla “ruhsatta 2012 yazıyor, kesin FB7” veya “2012’de satılmış, kesin FD7” çıkarımı güvenli değildir. Gövde nesli ve VIN birlikte okunmalıdır.

## Fotoğraftan İlk Eleme Nasıl Yapılır?

FD6 olarak bilinen sekizinci nesil sedan; ileri uzanan ön cam çizgisi, çift katmanlı gösterge düzeni ve dönemin özgün sedan formuyla tanınır. FB7 dokuzuncu nesil ise farklı ön-arka tasarım, kokpit ve gövde oranlarına sahiptir. Fotoğraf ilk elemede faydalıdır fakat parça değişimi, makyaj uygulaması veya yetersiz açı nedeniyle kesin kanıt değildir.

Önce aracın neslini görsel olarak belirleyin, sonra şu verileri isteyin:

1. 17 karakterli VIN’in kişisel bilgileri kapatılmış fotoğrafı.
2. Ruhsattaki model yılı, motor hacmi, güç ve tip bilgisi.
3. Kapı içi veya motor bölmesindeki üretici/tip etiketi.
4. Motor kodu ve şanzıman türü.
5. Yetkili servis sistemindeki model tanımı ve üretim bilgisi.

Belgelerdeki VIN ile gövde üzerindeki numara uyuşmuyorsa işlem durdurulmalıdır. Motor değişimi varsa ruhsat ve fatura uyumu ayrıca incelenir.

## Yanlış Kod Hangi Masrafı Doğurur?

Yanlış nesil seçimi yalnız isim sorunu değildir. FD6/FD ailesi ile FB7’nin gövde, elektronik, iç trim ve bazı mekanik parçaları farklıdır. İnternetten kodla sipariş verilen far, tampon, sensör, filtre veya süspansiyon parçası uyumsuz çıkabilir. Daha önemlisi, ekspertizde yanlış kronik sorun listesi uygulanabilir.

Örneğin otomatik şanzıman sıvısı, LPG kalibrasyonu, motor takozu ve ön takım her iki araçta da kontrol başlığı olabilir; ancak üretim fazı, parça revizyonu, elektronik mimari ve gövde zayıf noktaları aynı değildir. “Civic zaten aynı motor” varsayımı, aracın gerçek motor kodunu ve bakım şartını görünmez kılar.

## FD Ailesi İçin Satın Alma Kontrolü

Araç sekizinci nesil FD sedan olarak doğrulandıysa soğuk ilk marş, hararet/soğutma geçmişi, LPG ayarı ve supap boşluğu takibi, motor kulakları, otomatik şanzımanın soğuk-sıcak davranışı, direksiyon/ön takım ve gövde geometrisi incelenmelidir. Ön panel, podye, direk, taban ve airbag sistemindeki onarım; kozmetik boyadan çok daha önemlidir.

Otomatikte D/R kavrama süresi, düşük hız geçişleri ve sıcak tekrar testi yapılmalıdır. Şanzıman sıvısının “kırmızı görünmesi” bakım kanıtı değildir; doğru ürün ve kilometreyi gösteren fatura aranır. LPG’li araçta benzin ve gazda yakıt düzeltmeleri, kompresyon ve soğuk çalışma karşılaştırılır.

## FB7 İçin Satın Alma Kontrolü

Araç dokuzuncu nesil FB7 olarak doğrulandıysa boya/vernik durumu, LPG/ECO sisteminin bakımı, supap boşluğu, motor takozları, otomatik şanzıman geçmişi, klima ve ön takım kontrol edilmelidir. [Honda Civic FB7 ne demek, alınır mı?](/rehber/honda-civic-fb7-ne-demek-alinir-mi) rehberi bu araç için ayrıntılı yol testi ve ekspertiz planı verir.

FD6 araştırması yaparken FB7 sayfasından, FB7 araştırırken FD6 forum listesinden rastgele sorun aktarmayın. Kullanıcı şikâyetleri teşhis başlangıcıdır; aynı belirti farklı parçadan çıkabilir. Arıza kodu, canlı veri, basınç/kompresyon ölçümü ve fiziksel kontrol birlikte gerekir.

## İlanda FD7 Yazıyorsa Satıcıya Sorulacaklar

- FD7 kodunu hangi belgeye dayanarak yazdınız?
- Araç hangi ülkede ilk kez satıldı ve Türkiye’ye nasıl girdi?
- Motor hacmi, motor kodu ve şanzıman nedir?
- VIN ile yetkili servis sorgusuna izin veriyor musunuz?
- Üretim, model ve ilk tescil tarihleri nedir?
- Parça siparişlerinde hangi tip kodu kullanıldı?
- Motor veya gövde üzerinde değişim/revizyon var mı?

Satıcının terimi yanlış kullanması tek başına aracı kötü yapmaz; fakat kimlik bilgisini belgeleyememesi risktir. Kimliği belirsiz araca kapora göndermeyin ve yalnız ilan ekran görüntüsüyle yedek parça almayın.

## Sonuç

FD7’yi bağımsız bir Türkiye kasa nesli gibi tarihlendirmek yerine, önce aracın sekizinci nesil FD ailesinde mi yoksa dokuzuncu nesil FB7’de mi olduğunu doğrulayın. Türkiye için pratik sıra **FD6 (sekizinci nesil) → FB7 (dokuzuncu nesil) → FC5 (onuncu nesil)** şeklindedir. FD7 etiketi bu sıraya yeni bir nesil eklemez.

Doğru kod; doğru kronik sorun sayfasını, doğru parçayı ve doğru ekspertiz planını seçtirir. VIN doğrulaması birkaç dakika sürer; yanlış nesil varsayımının maliyeti çok daha büyüktür.

## Kaynaklar

- [Honda: 2006 model sekizinci nesil Civic duyurusu](https://global.honda/en/newsroom/worldnews/2005/4050831.html)
- [Honda: sekizinci nesil Civic Sedan’ın küresel tanıtımı](https://global.honda/en/newsroom/worldnews/2005/c051113.html)
- [Honda: 2012 Civic ve dokuzuncu nesil duyurusu](https://global.honda/en/newsroom/worldnews/2011/4110217Civic.html)

Kodların pazar ve motor varyantına göre değişebileceği unutulmamalıdır. Bu sayfadaki yıl tablosu ilan aramasını kolaylaştırır; tekil araç için üretici VIN kaydı kesin referanstır.`,
    },
    {
        slug: 'volkswagen-ne-demek-vw-acilimi-model-adlari',
        title: 'Volkswagen Ne Demek? VW Açılımı ve Model Adlarının Anlamları',
        excerpt: 'Volkswagen kelimesinin Türkçe anlamını, VW kısaltmasını, marka ile Volkswagen Grubu farkını ve Polo, Golf, Passat gibi model adlarını doğru okumayı öğrenin.',
        category: 'Otomobil Sözlüğü',
        readTime: '9 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [111, 122, 12020, 126, 13],
        keyTakeaways: [
            'Volkswagen Almancada “halkın otomobili” anlamına gelir; VW markanın yaygın kısaltmasıdır.',
            'Volkswagen binek otomobil markası ile çok markalı Volkswagen Grubu aynı kapsamda değildir.',
            'Polo, Golf veya Passat adı tek başına kasa, motor ve şanzımanı göstermez; nesil ve teknik kod ayrıca gerekir.',
            'Markanın 1930’lardaki kuruluş tarihi Nazi rejimi ve zorla çalıştırma geçmişinden ayrı anlatılamaz.',
        ],
        faqs: [
            { question: 'Volkswagen ne demek?', answer: 'Volkswagen Almanca “Volk” (halk) ve “Wagen” (otomobil/araç) sözcüklerinden oluşur; Türkçede “halkın otomobili” olarak çevrilir.' },
            { question: 'VW neyin kısaltması?', answer: 'VW, Volkswagen adının V ve W harflerinden oluşan yaygın marka kısaltmasıdır.' },
            { question: 'Volkswagen ile Volkswagen Grubu aynı mı?', answer: 'Hayır. Volkswagen bir otomobil markasıdır; Volkswagen Grubu ise birden fazla otomotiv markası ve faaliyeti barındıran şirketler topluluğudur.' },
            { question: 'Golf, Polo ve Passat adları motoru gösterir mi?', answer: 'Hayır. Bunlar model ailelerinin ticari adlarıdır. Motor, şanzıman, gövde ve nesil için ek teknik bilgi gerekir.' },
            { question: 'Volkswagen kasa kodu nasıl anlaşılır?', answer: 'İlan lakabını VIN, üretici etiketi ve servis sistemiyle doğrulayın. Polo 6R/6C, Golf 7/7.5 ve Passat B7/B8 gibi ifadeler aynı türde kodlama değildir.' },
        ],
        howToSteps: [
            { name: 'Model ailesini belirleyin', text: 'Önce aracın Polo, Golf, Passat veya başka bir Volkswagen ailesinde olduğunu netleştirin.' },
            { name: 'Nesil ve üretim fazını bulun', text: 'Model yılı, gövde görünümü ve VIN ile nesil/makyaj dönemini doğrulayın.' },
            { name: 'Motor ve şanzımanı ayırın', text: 'TSI, MPI, TDI, eTSI, DSG veya manuel bilgisini motor-şanzıman koduyla teyit edin.' },
            { name: 'Doğru satın alma rehberine geçin', text: 'Kasa ve güç aktarımı kesinleşince o kombinasyona özgü bakım ve arıza kontrol listesini uygulayın.' },
        ],
        content: `## Volkswagen Kelimesinin Türkçe Anlamı

**Volkswagen**, Almancada “halkın otomobili” anlamına gelir. “Volk” halk, “Wagen” ise otomobil/araç karşılığındadır. **VW** de Volkswagen adının V ve W harflerinden oluşan yaygın kısaltmasıdır. Dolayısıyla “Volkswagen ne demek?” sorusunun kısa cevabı budur; fakat markanın tarihini ve araç adlarını anlamak için birkaç önemli ayrım gerekir.

Volkswagen’in resmî tarih sayfası, şirketin köklerini 1930’ların Almanya’sındaki “halk otomobili” projesine dayandırır. Geliştirme 1934’te başladı, şirket 1937’de kuruldu ve 1938’de Volkswagenwerk adını aldı. Bu başlangıç Nazi rejiminin prestij projesi, savaş sanayisi ve zorla çalıştırma geçmişiyle bağlantılıdır. Savaş sonrası İngiliz yönetimi altında 1945 sonunda sivil otomobil üretimi başladı. Tarihi yalnız başarılı modellerle anlatmak, bu bağlamı eksik bırakır.

## Volkswagen Marka mı, Grup mu?

Günlük konuşmada “Volkswagen” iki farklı kapsam için kullanılabilir:

- **Volkswagen binek otomobil markası:** Polo, Golf, Passat, Tiguan ve ID. ailesi gibi modelleri sunan marka.
- **Volkswagen Grubu:** Birden fazla otomotiv markası, finansal hizmet ve endüstriyel faaliyeti kapsayan şirket yapısı.

Bir araç ilanında yalnız “VW Grup motoru” yazması, parçanın her markada aynı olduğu anlamına gelmez. Aynı temel motor ailesi; yazılım, güç, emisyon sistemi, soğutma, şanzıman veya üretim revizyonuna göre farklılaşabilir. Parça ve bakım kararı motor kodu, şanzıman kodu ve VIN üzerinden verilmelidir.

## Volkswagen Model Adları Nasıl Okunur?

Polo, Golf, Passat veya Tiguan birer **ticari model ailesi adıdır**. Bunlar aracın tam teknik kimliği değildir. Örneğin iki “Polo” arasında farklı nesil, motor ve şanzıman bulunabilir; iki “Passat 1.6 TDI DSG” bile üretim yılına ve yazılım/parça revizyonuna göre aynı olmayabilir.

İkinci el aramasında adı şu sırayla tamamlayın:

1. Model ailesi: Polo, Golf, Passat, Tiguan.
2. Nesil veya üretim fazı: Polo 6R/6C, Golf 7/7.5, Passat B7/B8.
3. Motor: hacim, yakıt, güç ve mümkünse motor kodu.
4. Şanzıman: manuel, tork konvertörlü, DSG; kod ve kavrama tipi.
5. Model yılı ve üretim ayı.
6. Donanım ve gövde: hatchback, sedan, Variant, Alltrack vb.

Bu sıra “Volkswagen kronik arıza” gibi çok geniş bir sorguyu, satın alma kararında işe yarayan teknik profile dönüştürür.

## Polo, Golf ve Passat Ne Anlatır?

### Polo

Polo, 1975’te başlayan küçük sınıf model ailesidir. Volkswagen’in 50. yıl açıklamasına göre altı nesil boyunca hatchback, coupe, Derby adlı notchback, estate, CrossPolo, GTI ve R WRC gibi farklı türevler üretildi. Beşinci nesil 2009-2017 dönemidir; 2014’teki büyük güncelleme 6C adıyla bilinir. Altıncı nesil 2017’de MQB platformuna geçti.

### Golf

Golf, 1970’lerde Volkswagen’in önden çekişli yeni model kuşağının merkezine yerleşen kompakt aile oldu. İlanlarda “Golf 7” nesli, “Golf 7.5” ise bu neslin makyajlı/güncellenmiş fazını anlatır. “7.5” ayrı bir resmî nesil sayısından çok piyasa kolaylığıdır. Motor ve şanzıman, Golf adından ayrıca doğrulanır.

### Passat

Passat orta sınıf model ailesidir. İlanlarda B7, B8 ve B9 gibi nesil adları yaygındır. Volkswagen arşivi B7’yi 2010-2014 dönemi olarak tanımlar ve Şubat 2015’te B8’in yerini aldığını belirtir. Türkiye’de ilk tescil ve model yılı geçişleri nedeniyle sınır ilanlar görülebilir.

## Kodların Hepsi Aynı Şeyi mi Gösteriyor?

Hayır. “Polo 6C”, “Golf 7.5” ve “Passat B8” aynı sistemle kurulmuş ifadeler değildir:

- Polo 6R/6C, fabrika tipi ve büyük ürün güncellemesiyle ilişkili kullanılır.
- Golf 7/8 nesil sayısıdır; 7.5 piyasanın makyajlı faz adıdır.
- Passat B7/B8/B9, nesli ayıran yerleşik aile adlandırmasıdır.
- TSI, TDI, MPI motor/yanma ve besleme ailesini; DSG şanzıman ailesini anlatır.

Bu etiketler satın alma için başlangıçtır. Örneğin “DSG” tek bir şanzıman değildir; dişli sayısı, kavrama yapısı, tork kapasitesi ve kodu değişebilir. “TSI” da tek bir motor kodu değildir. Yalnız rozet üzerinden bakım aralığı veya kronik arıza hükmü verilmez.

## Volkswagen Alırken Doğru Arama Şablonu

Bir aracı araştırırken şu biçimi kullanın:

**Marka + model + nesil/faz + model yılı + motor/güç + şanzıman + belirti**

Örnekler:

- Volkswagen Polo 6C 2016 1.2 TSI DSG soğuk titreme
- Golf 7.5 1.0 TSI manuel bakım geçmişi
- Passat B8 1.6 TDI DSG mekatronik kontrolü
- Tiguan ikinci nesil 1.5 TSI ACT motor kodu

Arama sonucundaki forum deneyimini doğrudan teşhis kabul etmeyin. Aynı sarsıntı motor takozu, ateşleme, kavrama adaptasyonu veya başka bir nedenden kaynaklanabilir. Belirtiyi koşuluyla kaydedin ve üretici uyumlu cihaz verisiyle doğrulayın.

## İlanlarda En Çok Karıştırılan Terimler

| İlan ifadesi | Ne anlama gelebilir? | Ne kanıtlamaz? |
|---|---|---|
| Full paket | Satıcının donanım yorumu | Fabrika donanımını |
| 6C kasa | 2014 güncellemeli Polo V | Motor/şanzıman sağlığını |
| Golf 7.5 | Golf VII’nin güncellenmiş fazı | Tek bir model yılı veya motoru |
| B8 | Passat nesil ailesi | Tüm B8’lerin aynı şanzımana sahip olduğunu |
| TSI | Turbo/direct injection benzinli motor ailesi | Motor kodunu ve revizyonu |
| DSG | Çift kavramalı şanzıman ailesi | Kavrama tipi, kodu ve bakım durumunu |

Donanımı VIN dökümüyle, motor ve şanzımanı kod etiketi/servis kaydıyla, bakım geçmişini faturayla doğrulayın. “Yetkili servis bakımlı” denilen araç için iş emri tarih-kilometre dökümü istenmelidir.

## Hangi Rehbere Gitmelisiniz?

Polo 6R ve 6C ayrımı için [Volkswagen Polo 6R/6C farkları](/rehber/volkswagen-polo-6r-6c-ne-demek-farklari), Passat kuşakları için [Passat B7 ve B8 farkları](/rehber/volkswagen-passat-b7-ne-demek-b8-farklari) ve yeni kuşak için [Passat B9 hangi yıllar?](/rehber/volkswagen-passat-b9-ne-demek-hangi-yillar) sayfalarını kullanabilirsiniz. Toplu görünüm için [Volkswagen kasa kodları sözlüğü](/rehber/volkswagen-kasa-kodlari-sozlugu-polo-golf-passat) doğru başlangıç noktasıdır.

## Kaynaklar

- [Volkswagen Newsroom: Volkswagen marka tarihi](https://www.volkswagen-newsroom.com/en/history-3693)
- [Volkswagen Newsroom: Beetle ve “people’s car” projesinin tarihçesi](https://www.volkswagen-newsroom.com/en/the-volkswagen-beetle-a-success-story-2341/download)
- [Volkswagen Newsroom: Polo’nun 50 yılı ve altı nesli](https://www.volkswagen-newsroom.com/en/press-releases/50-years-of-the-volkswagen-polo-small-on-the-outside-big-on-the-inside-and-successful-worldwide-19232)
- [Volkswagen Newsroom: Passat B7 tarihçesi](https://www.volkswagen-newsroom.com/en/passat-b7-20102014-20036)

Model adı ve ilan lakabı teknik kimliğin yalnız bir bölümüdür. Satın alınacak araçta VIN, üretici kaydı, uygunluk/tescil belgesi ve fiziksel ekspertiz birlikte değerlendirilmelidir.`,
    },
    {
        slug: 'volkswagen-kasa-kodlari-sozlugu-polo-golf-passat',
        title: 'Volkswagen Kasa Kodları Sözlüğü: Polo, Golf ve Passat',
        excerpt: 'Polo 6R/6C/AW, Golf 6/7/7.5/8 ve Passat B7/B8/B9 hangi yıllar? Kasa, nesil, makyaj ve motor kodlarını karıştırmadan doğru aracı bulun.',
        category: 'Kasa Kodu Rehberi',
        readTime: '12 dk',
        publishDate,
        updatedDate: publishDate,
        relatedVehicleIds: [111, 122, 13, 12020, 126, 6],
        keyTakeaways: [
            'Polo 6C ayrı bir altıncı nesil değil, Polo V’in 2014 büyük güncellemesidir; altıncı nesil 2017’de başlayan AW ailesidir.',
            'Golf 7.5 ifadesi Golf VII’nin makyajlı fazını anlatır; bağımsız sekizinci nesil değildir.',
            'Passat B7 2010-2014/15, B8 onu izleyen nesil, B9 ise 2023’te tanıtılan dokuzuncu nesildir.',
            'Kasa kodu motor veya şanzıman kodu değildir; doğru arıza araştırması için VIN ile tüm teknik kimlik çıkarılmalıdır.',
        ],
        faqs: [
            { question: 'Polo 6C hangi yıllar?', answer: 'Volkswagen’in resmî arşivine göre Polo V 2009-2017 dönemidir; 2014 büyük güncellemesiyle Type 6C adı kullanıldı. Pratikte 6C, 2014-2017 makyajlı Polo V’tir.' },
            { question: 'Polo 6R ile 6C farkı nedir?', answer: '6R beşinci neslin 2009’da başlayan ilk fazı, 6C ise 2014 büyük ürün güncellemesidir. Tasarım, motor ailesi ve bazı güvenlik/elektronik donanımlar değişmiştir.' },
            { question: 'Golf 7.5 hangi yıllar?', answer: 'Golf 7.5, Golf VII’nin 2017 güncellemesi için kullanılan piyasa adıdır. Türkiye’de kabaca 2017-2020 ilanlarında görülür; üretim ayı ve pazar VIN ile doğrulanmalıdır.' },
            { question: 'Passat B8 ne demek?', answer: 'B8, B7’den sonra gelen sekizinci Passat nesil ailesini anlatır. Volkswagen arşivinde B7 üretiminin Şubat 2015’te bitip B8’in yerini aldığı belirtilir.' },
            { question: 'Kasa kodundan DSG tipi anlaşılır mı?', answer: 'Hayır. Aynı kasa ailesinde farklı motor ve DSG varyantları bulunabilir. Şanzıman kodu VIN/etiket ve üretici servis kaydıyla ayrıca doğrulanmalıdır.' },
        ],
        howToSteps: [
            { name: 'Aileyi ve gövdeyi seçin', text: 'Polo, Golf veya Passat ile hatchback, sedan, Variant/Alltrack gibi gövdeyi belirleyin.' },
            { name: 'Nesil-fazı doğrulayın', text: 'Model yılı, üretim ayı, tasarım ayrıntıları ve VIN ile 6R/6C, 7/7.5 veya B7/B8 ayrımını yapın.' },
            { name: 'Güç aktarım kimliğini çıkarın', text: 'Motor kodu, güç, yakıt, şanzıman kodu ve çekiş bilgisini servis kaydıyla doğrulayın.' },
            { name: 'Revizyon ve kampanyaları sorgulayın', text: 'VIN’e bağlı servis kampanyası, yazılım ve parça revizyonlarını üretici kaydından inceleyin.' },
            { name: 'Özel ekspertiz uygulayın', text: 'Doğru motor-şanzıman kombinasyonu için soğuk çalıştırma, tam modül taraması ve uzun yol testi yaptırın.' },
        ],
        content: `## Volkswagen Kasa Kodu Nasıl Okunur?

Volkswagen ilanlarında “Polo 6C”, “Golf 7.5” veya “Passat B8” yazıldığında bunların aynı tür kodlar olduğu sanılır. Değildir. Bazısı fabrika tipi, bazısı nesil adı, bazısı da makyaj dönemini anlatan piyasa ifadesidir. Bu sözlük, Türkiye’de en çok karşılaşılan Polo, Golf ve Passat terimlerini aynı tabloda toplar.

Kasa kodu motor kodu değildir. Aynı nesilde MPI, TSI, TDI, manuel ve farklı DSG türleri bulunabilir. Kronik sorun veya bakım araştırması yapmadan önce şu beşli kesinleşmelidir: **model ailesi + nesil/faz + model yılı/üretim ayı + motor kodu + şanzıman kodu**.

## Hızlı Yıl ve Kod Tablosu

| Model ailesi | Türkiye’de yaygın ifade | Yaklaşık dönem | Teknik anlam |
|---|---|---|---|
| Polo | 6R | 2009-2014 | Beşinci neslin ilk fazı |
| Polo | 6C | 2014-2017 | Beşinci neslin büyük güncellemesi |
| Polo | AW / Polo VI | 2017 ve sonrası | Altıncı nesil; 2021’de güncelleme |
| Golf | Golf 6 | 2008-2012 | Altıncı nesil |
| Golf | Golf 7 | 2012-2016 | Yedinci neslin ilk fazı |
| Golf | Golf 7.5 | 2017-2020 | Yedinci neslin güncellenmiş fazı |
| Golf | Golf 8 | 2020 ve sonrası | Sekizinci nesil |
| Passat | B7 | 2010-2014/2015 geçişi | B6’nın kapsamlı geliştirilmiş ardılı |
| Passat | B8 | 2014/2015-2023 | Sekizinci nesil aile |
| Passat | B9 | 2023’te tanıtılan yeni nesil | Avrupa’da Variant ağırlıklı dokuzuncu nesil |

Tablodaki sınırlar ilan taraması içindir. Üretim, model ve ilk tescil tarihi aynı olmayabilir; ülkeye geliş ve stok geçişi birkaç ay örtüşme yaratabilir.

## Polo 6R ve 6C Ne Demek?

Volkswagen’in resmî arşivi Polo V’i 2009-2017 olarak verir ve fabrika kodunu 6R olarak kaydeder. 2014’teki büyük ürün güncellemesinde Type 6C adı kullanılmıştır. Bu nedenle **Polo 6C altıncı nesil değildir**; beşinci neslin makyajlı/güncellenmiş fazıdır.

6R’nin ilk yıllarında 1.2/1.4 MPI, 1.2 TSI ve 1.6 TDI gibi seçenekler; 6C döneminde 1.0 MPI/TSI, güncel 1.2 TSI ve 1.4 TDI gibi seçenekler öne çıktı. Türkiye ürün gamı yıl ve pakete göre değişir. Motoru yalnız hacimle ayırmak yeterli değildir; aynı hacimde farklı güç ve kod bulunabilir.

Polo VI 2017’de MQB platformuna geçen altıncı nesildir ve AW ailesi olarak anılır. 2021’de yapılan güncelleme onu yedinci nesil yapmaz. İlanlarda “yeni kasa” sözü teknik kanıt değildir.

Polo satın alma kararında ayrıntılı motor-şanzıman kontrolü için mevcut [Polo 6R ve 6C farkları](/rehber/volkswagen-polo-6r-6c-ne-demek-farklari) sayfası kullanılmalıdır.

## Golf 7 ve Golf 7.5 Ne Demek?

Golf VII, 2012’de başlayan MQB tabanlı yedinci nesildir. 2017’de yapılan kapsamlı güncelleme Türkiye ilanlarında **Golf 7.5** diye adlandırılır. 7.5 ifadesi ayrı bir nesil numarası değil, ilk seri ile makyajlı fazı kolay ayıran piyasa dilidir. İç-dış tasarım, multimedya, aydınlatma, sürüş destekleri ve motor gamı değişebilir.

Golf 7/7.5 araştırırken şu ayrımlar yapılmalıdır:

- 1.0, 1.2, 1.4 ve 1.5 TSI aynı motor değildir.
- 1.6 ve 2.0 TDI güç/emisyon donanımına göre ayrılır.
- Manuel ve DSG geçmişi ayrı kontrol edilir.
- DSG etiketi tek başına kavrama tipi veya şanzıman kodunu söylemez.
- Makyaj görüntüsü sonradan parça değişimiyle taklit edilebilir; VIN gerekir.

Golf 8, 2020 çevresinde pazara giren bağımsız sekizinci nesildir. Golf 7.5 ile Golf 8 arasında “yarım nesil” mantığı kurulmaz.

## Passat B7 Ne Demek?

Volkswagen arşivi B7’yi 2010-2014 dönemi ve Type 3C ailesi olarak açıklar; üretimin Şubat 2015’te sona erdiğini ve B8’in yerini aldığını belirtir. Türkiye ilanlarında 2011-2014 ağırlığı görülmesi normaldir. B7, tasarım ve teknoloji olarak B6’nın kapsamlı geliştirilmiş devamıdır; yine de ilan ve parça aramasında ayrı dönem olarak ele alınır.

B7 araştırmasında 1.4 TSI, 1.6 TDI, 2.0 TDI; manuel/DSG; sedan/Variant/Alltrack ayrımı gerekir. Motor zincir/kayış düzeni, emisyon sistemi ve şanzıman kontrolü motor koduna göre yapılır. Genel “B7 kronikleri” listesi tüm kombinasyonlara uygulanamaz.

## Passat B8 Ne Demek?

B8, B7’den sonra gelen Passat nesil ailesidir. Avrupa lansmanı 2014’te yapıldı; B7 üretiminin 2015 başındaki sonuna paralel olarak pazara yayıldı. Türkiye’de 2015-2023 aralığı pratik referanstır. MQB mimarisi, farklı elektronik sistem ve motor-şanzıman kombinasyonları nedeniyle B7’nin yalnız makyajı değildir.

“Passat B8” ifadesi tek başına 1.6 TDI veya DSG demek değildir. 1.4/1.5 TSI, 1.6/2.0 TDI ve pazara göre hibrit seçenekler; farklı güç ve şanzımanlar bulunabilir. AdBlue/SCR, DPF, EGR, turbo, soğutma, DSG ve sürüş destekleri araç kimliğine göre incelenir. [Passat B7 ve B8 farkları](/rehber/volkswagen-passat-b7-ne-demek-b8-farklari) sayfası ayrıntılı karşılaştırmayı verir.

## Passat B9 Ne Demek?

Volkswagen yeni Passat’ı dokuzuncu nesil olarak 2023’te tanıttı. Avrupa’da Variant gövde odağı önemlidir; farklı pazarlardaki “Passat” adları aynı otomobil olmayabilir. Türkiye’de bir ilanı B9 diye değerlendirirken gövde, pazar, motor/hibrit sistemi ve model yılı VIN ile doğrulanmalıdır. Güncel nesil özeti için [Passat B9 hangi yıllar?](/rehber/volkswagen-passat-b9-ne-demek-hangi-yillar) rehberine bakabilirsiniz.

## TSI, TDI, MPI ve DSG Kasa Kodu Değildir

Bu rozetler sıkça kasa adıyla karıştırılır:

- **MPI:** Çok noktalı benzin enjeksiyonu ailesi.
- **TSI:** Turbo beslemeli, doğrudan enjeksiyonlu benzinli motor ailesi; tek bir motor kodu değildir.
- **TDI:** Turbo dizel motor ailesi; hacim, güç ve emisyon donanımı değişir.
- **eTSI:** Hafif hibrit destekli TSI uygulaması; yüksek voltajlı tam hibrit ile aynı değildir.
- **DSG:** Çift kavramalı şanzıman ailesi; dişli sayısı, ıslak/kuru kavrama ve tork kapasitesi değişebilir.

İlan başlığında “1.2 TSI DSG” yazması yetmez. Motor ve şanzıman kodu, üretim tarihi, servis kampanyaları, yazılım/parça revizyonları ve bakım faturaları istenmelidir.

## VIN ile Doğrulama Kontrol Listesi

1. VIN’i ruhsat, ön cam ve gövde üzerindeki kalıcı işaretlerle eşleştirin.
2. Yetkili servis/üretici sisteminden üretim tarihi ve fabrika donanımını alın.
3. Motor ve şanzıman kodunu etiket ve kayıtla doğrulayın.
4. Açık servis kampanyası veya tamamlanmış aksiyon olup olmadığını sorun.
5. Makyajlı görünüme çevrilmiş araçlarda far, tampon, radar/kamera ve kodlamayı kontrol edin.
6. DSG için yalnız “bakımlı” sözü değil; ürün şartnamesi, tarih ve kilometre gösteren fatura isteyin.
7. Dizelde DPF/EGR/SCR yazılım iptali veya fiziksel müdahaleyi tarama ve görsel kontrolle araştırın.

## Yol Testi ve Cihaz Taraması

Aracı soğuk çalıştırın; motor, şanzıman, ABS, airbag, gövde, multimedya ve sürüş destek modüllerini üretici uyumlu cihazla tarayın. Kod silme geçmişini düşündüren hazırlık monitörleri ve düşük voltaj izleri not edilmelidir. Yol testi en az 25-30 dakika sürmeli; dur-kalk, yokuş, geri vites, sabit hız ve tam sıcak tekrar manevraları içermelidir.

Sarsıntıya hemen “DSG mekatronik”, motor ışığına hemen “turbo” adı koymayın. Ateşleme, akü/şarj, sensör, motor takozu, adaptasyon veya yazılım benzer belirti oluşturabilir. Teşhis, belirtinin oluştuğu koşul ve ölçüm verisiyle yapılır.

## Kaynaklar

- [Volkswagen: Polo V (2009-2017), 6R ve 2014 Type 6C güncellemesi](https://www.volkswagen-newsroom.com/en/polo-5-20092017-20044)
- [Volkswagen: Polo’nun 50 yılı ve altı nesli](https://www.volkswagen-newsroom.com/en/press-releases/50-years-of-the-volkswagen-polo-small-on-the-outside-big-on-the-inside-and-successful-worldwide-19232)
- [Volkswagen: Golf VII (2012-2019) arşivi](https://www.volkswagen-newsroom.com/en/golf-7-20122019-20035)
- [Volkswagen: Passat B7 (2010-2014) arşivi](https://www.volkswagen-newsroom.com/en/passat-b7-20102014-20036)
- [Volkswagen: dokuzuncu nesil Passat](https://www.volkswagen-newsroom.com/en/passat-17451)

Yıl aralıkları Avrupa/Türkiye ilan taraması için pratik referanstır. Tekil aracın teknik kimliği ve uygun parçası VIN ile üretici kaydından doğrulanmalıdır.`,
    },
    {
        slug: 'arac-kac-model-model-yili-uretim-tarihi-ilk-tescil-farki',
        title: 'Araç Kaç Model? Model Yılı, Üretim Tarihi ve İlk Tescil Farkı',
        excerpt: 'Bir aracın kaç model olduğu nasıl anlaşılır? Model yılı, üretim tarihi ve ilk tescil arasındaki farkı ruhsat, VIN, uygunluk belgesi ve geçiş yılı örnekleriyle öğrenin.',
        category: 'Satın Alma Rehberi',
        readTime: '11 dk',
        publishDate,
        updatedDate: publishDate,
        keyTakeaways: [
            'Model yılı, üretim tarihi ve ilk tescil tarihi aynı kavram değildir; ilanda üçü birbirinin yerine kullanılmamalıdır.',
            'Türkiye’de tescil mevzuatı model yılı için imal/uygunluk belgesi tarihini esas alan kurallar içerir.',
            'Geçiş yıllarında aynı takvim yılı içinde eski ve yeni kasa bulunabilir; “kaç model” sorusu VIN ve belgeyle cevaplanır.',
            'Ruhsat, uygunluk/tescil kaydı, VIN, üretici etiketi ve servis sistemi birbiriyle eşleşmeden kapora verilmemelidir.',
        ],
        faqs: [
            { question: 'Bir araç kaç model nasıl anlaşılır?', answer: 'Ruhsattaki model yılı, ilk tescil tarihi ve VIN/üretici kaydındaki üretim bilgisini ayrı ayrı kontrol edin. İlan başlığı veya plaka yılı tek başına yeterli değildir.' },
            { question: 'Üretim yılı ile model yılı farklı olabilir mi?', answer: 'Evet. Üretim planı ve uygunluk işlemlerine göre yakın tarihler farklı görünebilir. Türkiye tescil kaydı ve uygunluk belgesi esas alınmalı, farkın belgesi istenmelidir.' },
            { question: 'İlk tescil tarihi model yılı mıdır?', answer: 'Hayır. İlk tescil aracın ilk kez trafiğe kaydedildiği tarihtir. Stokta bekleyen bir aracın model yılı daha eski olabilir.' },
            { question: 'Ruhsatta yazan model yılı kesin mi?', answer: 'Resmî işlem için ruhsat/tescil kaydı temel belgedir; yine de VIN, uygunluk belgesi ve üretici kaydıyla uyuşmazlık varsa satıştan önce yetkili kurumlar üzerinden düzeltilmelidir.' },
            { question: 'Aynı model yılında iki farklı kasa olur mu?', answer: 'Evet. Nesil veya makyaj geçişlerinde eski kasa stokları ile yeni kasa aynı model/tescil döneminde pazarda bulunabilir. Fotoğraf, VIN ve üretim fazı kontrol edilmelidir.' },
        ],
        howToSteps: [
            { name: 'Üç tarihi ayrı isteyin', text: 'Satıcıdan üretim tarihi, ruhsattaki model yılı ve ilk tescil tarihini birbirinden ayrı paylaşmasını isteyin.' },
            { name: 'Belgeleri eşleştirin', text: 'Ruhsat, VIN, uygunluk/tescil kaydı, üretici etiketi ve servis sistemindeki bilgileri karşılaştırın.' },
            { name: 'Nesil ve üretim fazını bulun', text: 'Makyaj veya kasa geçişinde gövde, donanım ve motoru üretici katalog/arşiviyle doğrulayın.' },
            { name: 'Geçmişi kronolojik okuyun', text: 'İlk tescilden bugüne muayene, servis, sigorta ve fatura kilometrelerini tarih sırasına koyun.' },
            { name: 'Uyumsuzluğu çözmeden ödeme yapmayın', text: 'Belge ile araç kimliği çelişiyorsa noter/üretici/yetkili kurum doğrulaması tamamlanana kadar kapora ve satış işlemini durdurun.' },
        ],
        content: `## “Kaç Model?” Sorusu Aslında Üç Ayrı Tarih Soruyor

İkinci el araç bakarken “araç kaç model?” denildiğinde çoğu kişi tek bir yıl bekler. Oysa bir otomobilin **üretim tarihi**, **model yılı** ve **ilk tescil tarihi** farklı kavramlardır. Bu ayrım özellikle yıl sonunda üretilen, stokta bekleyen, ithal edilen veya kasa/makyaj geçişine denk gelen araçlarda önemlidir.

İlan başlığındaki yıl, satış temsilcisinin söylediği “çıkış yılı” veya plakanın alındığı tarih tek başına aracın model yılını kanıtlamaz. Doğru cevap ruhsat/tescil kaydı, uygunluk belgesi, VIN ve üretici verisi birlikte okunarak verilir.

## Üretim Tarihi, Model Yılı ve İlk Tescil Nedir?

| Terim | Ne anlatır? | Nereden kontrol edilir? |
|---|---|---|
| Üretim/imal tarihi | Aracın üretimde tamamlandığı zaman | Üretici etiketi, uygunluk belgesi, VIN/servis kaydı |
| Model yılı | Tescil sistemindeki teknik model yılı | Ruhsat, ARTES/tescil ve uygunluk belgesi |
| İlk tescil tarihi | Aracın ilk kez trafiğe kaydedildiği gün | Ruhsat ve resmî tescil kaydı |
| İlan yılı | Satıcının ilana girdiği bilgi | Kanıt değildir; belgelerle doğrulanır |

31 Ocak 2018 tarihli Karayolları Trafik Yönetmeliği değişikliği, model yılı olarak tam aracın imal tarihini; çok aşamalı tamamlanan araçlarda ise ilgili uygunluk belgesindeki tarihi esas alan hükümler içerir. Aynı düzenleme ilk tescil süreçlerinde uygunluk belgesi verilerinin ARTES’e kaydını da açıklar. Güncel işlemde yürürlükteki mevzuat ve resmî tescil kaydı esas alınmalıdır.

## İlk Tescil Neden Daha Geç Olabilir?

Bir araç üretildikten sonra fabrikadan limana, distribütör stokuna ve bayiye gider. Satılmadan bekleyebilir, ithalat ve uygunluk işlemleri zaman alabilir veya filo teslimi sonraki döneme sarkabilir. Bu nedenle 2024’te üretilen/model yılı kaydı 2024 olan bir aracın ilk tescili 2025 olabilir.

Bu durum tek başına kusur değildir; fakat satıcı aracı “2025 model” diye fiyatlandırıyorsa ruhsattaki model yılı görülmelidir. İlk tescilin geç olması garanti başlangıcı, bekleme koşulları, lastik/akü yaşı ve bakım takvimi açısından ayrıca değerlendirilir. Lastiğin DOT tarihi ve akü testi aracın kullanılmadan geçirdiği zamanı gösterebilir.

## Üretim Tarihi ile Model Yılı Neden Karıştırılır?

İnternette VIN’in belirli karakterinden model yılı okuyan tablolar bulunur. Bunlar bazı pazar ve üretici sistemlerinde işe yarasa da her araçta, özellikle Avrupa/Türkiye tescilinde tek başına evrensel kanıt kabul edilmemelidir. VIN çözümlemesi üretici veritabanı, uygunluk belgesi ve resmî kayıtla desteklenmelidir.

Kapı içi etiketteki ay/yıl üretim bilgisini gösterebilir; ruhsat ise resmî model yılını içerir. Aralarında açıklanabilir yakın fark bulunabilir. Bir-iki yıllık büyük veya mantıksız uyumsuzlukta “normaldir” sözüyle yetinmeyin; yetkili servis, distribütör, noter veya ilgili tescil kanalı üzerinden yazılı doğrulama isteyin.

## Kasa Geçiş Yılında Aynı Yıl İki Farklı Araç Olabilir

Model yılı, neslin tek başına adı değildir. Üreticiler yeni kasayı yıl ortasında tanıtabilir; eski kasa stokları aynı dönemde satılmaya devam edebilir. Örnek olarak Türkiye ilanlarında 2012 Honda Civic denildiğinde son dönem FD6 ile yeni nesil FB7’nin karışması, 2015 Volkswagen Passat denildiğinde B7’nin son tescilleri ile B8’in ilk araçlarının yan yana gelmesi mümkündür.

Aynı durum makyajlarda da görülür. 2014 Polo ilanı 6R ilk faz veya 6C güncellenmiş faz olabilir. “Model yılı doğruysa kasa da kesindir” çıkarımı yanlıştır. Şu bilgiler birlikte aranır:

- Ön/arka tasarım ve iç mekân ayrıntıları.
- VIN ve fabrika tip kodu.
- Üretim ayı.
- Motor ve şanzıman kodu.
- Üretici katalog/arşivindeki geçiş tarihi.
- Servis sistemindeki parça ve kampanya kaydı.

## Ruhsatta Hangi Alanlara Bakılır?

Ruhsatta plaka ve model yılının yanında VIN/şasi numarası, motor bilgisi, marka, tip ve ticari adın araçla eşleşmesi gerekir. Şasi numarasını yalnız ön camdan değil, gövdedeki kalıcı işaret ve üretici etiketiyle karşılaştırın. Kazınmış, yeniden işlenmiş, okunamayan veya belgede farklı numara varsa ekspertiz sürecini durdurun ve resmî doğrulama alın.

Motor değişmişse ruhsat ve işlem belgeleri uyumlu olmalıdır. Renk, yakıt veya tip bilgisindeki tutarsızlık da “sonra düzeltilir” diye geçiştirilmemelidir. Noter satışına ulaşmış olmak teknik kimlik incelemesini gereksiz kılmaz.

## VIN Sorgusu Ne Sağlar, Ne Sağlamaz?

Üretici/yetkili servis VIN sorgusu üretim tarihi, model/tip, fabrika motor-şanzıman ve donanım, garanti başlangıcı, servis aksiyonu gibi bilgiler sağlayabilir. Fakat her özel servis işlemini, kazayı veya kilometreyi tek başına göstermez. Bu nedenle VIN sonucu şu kaynaklarla kronolojik eşleştirilmelidir:

1. Muayene tarih ve kilometreleri.
2. Yetkili/özel servis iş emirleri ve faturalar.
3. Hasar ve sigorta kayıtları.
4. Lastik, cam, emniyet kemeri ve parça üretim tarihleri.
5. Eski ilan veya filo teslim kayıtları varsa bunlar.

Bir kaynağın temiz çıkması aracın geçmişinin tamamen temiz olduğunu kanıtlamaz. Birbirinden bağımsız kayıtların aynı hikâyeyi anlatması güveni artırır.

## İlan Sahtekârlığına Karşı Kontrol

Satıcı “2021 çıkışlı, 2022 model sayılır” gibi belirsiz ifade kullanıyorsa hangi tarihi söylediğini sorun. İlan ekran görüntüsünü saklayın ve model yılını ruhsat fotoğrafıyla doğrulayın. Kişisel veriler kapatılabilir; VIN doğrulaması için gerekli bölüm kontrollü biçimde paylaşılabilir.

Şu durumlarda kapora göndermeyin:

- Ruhsat görülmeden daha yeni model yılı iddiası.
- VIN vermeme veya ekspertizde VIN sorgusunu reddetme.
- Gövde nesliyle ilan yılının uyuşmaması.
- Üretim etiketi sökülmüş, değiştirilmiş veya okunamıyor olması.
- Motor/şasi bilgisinin belgeyle eşleşmemesi.
- “Gümrükte böyle yazılmış” denilip belge sunulmaması.

Ödeme ve noter öncesinde araç üzerindeki rehin/haciz, sahiplik ve kimlik kontrolleri ayrıca yapılmalıdır. Yıl farkı pazarlık konusu olmadan önce hukuki ve teknik kimlik sorunu çözülmelidir.

## Model Yılı Fiyatı Nasıl Etkiler?

Piyasa çoğu zaman daha yeni model yılına prim verir; ancak gerçek değer sadece yıldan oluşmaz. Nesil/makyaj, motor-şanzıman, donanım, güvenlik, kilometre, bakım, kaza ve lastik gibi kalemler birlikte değerlendirilir. İlk tescili yeni ama model yılı eski bir stok aracı, gerçek kimliği gizlenmeden emsaliyle karşılaştırılmalıdır.

Geçiş yılında yeni kasa olması otomatik olarak daha iyi araç demek değildir. İlk üretim serisinin servis kampanyaları veya önceki kasanın olgunlaşmış parça revizyonları olabilir. Aday aracın VIN’e bağlı kampanyaları ve güncellemeleri kontrol edilmelidir.

## Satın Alma Öncesi 10 Dakikalık Belge Akışı

1. Ruhsat fotoğrafından model yılı, ilk tescil, VIN, tip ve motor bilgisini not edin.
2. Üretici etiketindeki VIN ve üretim tarihini karşılaştırın.
3. Yetkili servis/üretici sisteminden araç kimlik dökümü isteyin.
4. Nesil ve makyajı resmî model arşiviyle eşleştirin.
5. Muayene ve servis kilometrelerini tarih sırasına koyun.
6. Uyumsuzluk varsa satıcıdan yazılı belge isteyin.
7. Çözülmeyen farkta kapora ve noter işlemini durdurun.

Bu kontrol, ekspertizin yerine geçmez. Kimlik doğrulandıktan sonra araç soğuk çalıştırma, gövde güvenliği, tam modül taraması ve yol testinden geçirilmelidir.

## Kaynaklar

- [Resmî Gazete: 31 Ocak 2018 Karayolları Trafik Yönetmeliği değişikliği](https://resmigazete.gov.tr/eskiler/2018/01/20180131-1.htm)
- [Resmî Gazete: 19 Nisan 2020 araç tip onayı ve imal tarihi tanımları](https://resmigazete.gov.tr/eskiler/2020/04/20200419-1.htm)

Mevzuat ve tescil uygulamaları zamanla değişebilir. İşlem tarihinde Türkiye Noterler Birliği, ilgili kamu kaydı ve aracın üretici/distribütör belgesi esas alınmalıdır.`,
    },
];
