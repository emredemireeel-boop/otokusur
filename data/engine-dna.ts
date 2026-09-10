export interface EngineChronicIssue {
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
  reportCount: number;
}

export interface EngineOption {
  slug: string;
  name: string;
  fuelType: "Benzin" | "Dizel" | "Elektrik" | "Hibrit" | "LPG";
  transmission: string;
  score: number;
  description?: string;
  pros?: string[];
  cons?: string[];
  chronicIssues: EngineChronicIssue[];
}

export interface VehicleEngineData {
  vehicleId: number;
  engines: EngineOption[];
}

export const engineDNAData: VehicleEngineData[] = [
  {
    vehicleId: 1,
    engines: [
      {
        slug: "10-tce-90-hp-benzin-manuel-x-tronic",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-dci-110-hp-dizel-manuel-edc",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "13-tce-140-hp-benzin-edc",
        name: "1.3 TCe 140 HP",
        fuelType: "Benzin",
        transmission: "EDC",
        score: 92,
        description: "B segmentinde bir araca göre 'ateşli hatchback' hissiyatı veren, 140 beygir gücü ve 260 Nm torkuyla öne çıkan oldukça seri bir motordur. Islak kavramalı (Wet-Clutch) 7 ileri EDC şanzımanla gelmesi, eski nesil kuru tip şanzımanlara göre daha dayanıklı olmasını sağlar. Doğru kullanıldığında şaşırtıcı derecede tutumludur ancak performansı zorlandığında yakıt tüketimi artar.",
        pros: [
          "Sınıfının çok üzerinde hızlanma ve esneklik (260 Nm tork)",
          "Islak kavramalı 7 ileri EDC şanzımanın artan dayanıklılığı",
          "Sakin kullanımda (şehir dışı 5-6L) ekonomik olabilmesi"
        ],
        cons: [
          "Agresif ve şehir içi yoğun kullanımda yakıt tüketiminin (8-9L) artması",
          "Zamanla termostat bloğunda oluşabilen soğutma sıvısı kaçakları",
          "Dur-kalk trafikte veya 1-2 vites geçişlerinde hafif kararsızlık hissi"
        ],
        chronicIssues: [
          {
            title: "Termostat Bloğu Su Kaçağı",
            description:
              "Genellikle 80.000 - 100.000 km bandında termostat gövdesinden soğutma sıvısı (antifriz) kaçağı yaşanabilmektedir. Düzenli sıvı kontrolü yapılmalı, eksiltme varsa gövde değiştirilmelidir.",
            severity: "medium",
            reportCount: 12,
          },
          {
            title: "EDC Şanzıman Düşük Hız Kararsızlığı",
            description:
              "Yoğun dur-kalk trafikte ve özellikle 1. ile 2. vites geçişlerinde sarsıntı veya kararsızlık yaşatabilir. Yazılım güncellemesi ve adaptasyon işlemi ile genellikle hafifletilir.",
            severity: "low",
            reportCount: 15,
          },
          {
            title: "Devirdaim Pompası Aşınması",
            description:
              "Kullanım koşullarına ve kayış gerginliğine bağlı olarak bazı serilerde devirdaim pompası erken aşınma gösterebilir. Ağır bakımlarda mutlaka kontrol edilmelidir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-e-tech-140-hp-hibrit-otomatik",
        name: "1.6 E-Tech 140 HP",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Yazılım güncellemeleri gereksinimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Vites geçişlerinde kararsızlık",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2,
    engines: [
      {
        slug: "14-fire-95-hp-benzin-manuel",
        name: "1.4 Fire 95 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 90,
        chronicIssues: [
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "13-multijet-95-hp-dizel-manuel",
        name: "1.3 Multijet 95 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 95,
        chronicIssues: [
          {
            title: "EGR tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Baskı balata ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-multijet-120-hp-dizel-manuel-dct",
        name: "1.6 Multijet 120 HP",
        fuelType: "Dizel",
        transmission: "Manuel / DCT",
        score: 85,
        chronicIssues: [
          {
            title: "Volant arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "DCT kavrama ısınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-t4-hibrit-130-hp-hibrit-dct",
        name: "1.5 T4 Hibrit 130 HP",
        fuelType: "Hibrit",
        transmission: "DCT",
        score: 87,
        chronicIssues: [
          {
            title: "Elektrik motoru geçiş sarsıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 3,
    engines: [
      {
        slug: "15-dynamic-force-125-hp-benzin-multidrive-s",
        name: "1.5 Dynamic Force 125 HP",
        fuelType: "Benzin",
        transmission: "Multidrive S",
        score: 94,
        chronicIssues: [
          {
            title: "CVT şanzıman ısınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yüksek devirde ses",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "18-hybrid-122-hp-hibrit-e-cvt",
        name: "1.8 Hybrid 122 HP",
        fuelType: "Hibrit",
        transmission: "e-CVT",
        score: 98,
        chronicIssues: [
          {
            title: "Batarya kapasite düşüşü (Uzun vadede)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "EGR valfi kirlenmesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-valvematic-132-hp-benzin-manuel-multidrive-s",
        name: "1.6 Valvematic 132 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Multidrive S",
        score: 96,
        chronicIssues: [
          {
            title: "Krank keçesi terlemesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 4,
    engines: [
      {
        slug: "10-tce-90-hp-benzin-manuel-x-tronic",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-dci-110-hp-dizel-manuel-edc",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "13-tce-140-hp-benzin-edc",
        name: "1.3 TCe 140 HP",
        fuelType: "Benzin",
        transmission: "EDC",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama ısınması (Şehir içi)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yağ eksiltme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-e-tech-140-hp-hibrit-otomatik",
        name: "1.6 E-Tech 140 HP",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Yazılım güncellemeleri gereksinimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Vites geçişlerinde kararsızlık",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 5,
    engines: [
      {
        slug: "15-vtec-turbo-182-hp-benzin-cvt",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Yağa benzin karışması (Bazı seriler)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-i-dtec-120-hp-dizel-otomatik",
        name: "1.6 i-DTEC 120 HP",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Şanzıman yağı değişim hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-ehev-hibrit-hibrit-e-cvt",
        name: "1.5 e:HEV Hibrit",
        fuelType: "Hibrit",
        transmission: "e-CVT",
        score: 95,
        chronicIssues: [
          {
            title: "Akü ömrü kısallığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Kış aylarında düşük yakıt verimliliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 6,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 7,
    engines: [
      {
        slug: "10-tce-90-hp-benzin-manuel-x-tronic",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-dci-110-hp-dizel-manuel-edc",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "13-tce-140-hp-benzin-edc",
        name: "1.3 TCe 140 HP",
        fuelType: "Benzin",
        transmission: "EDC",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama ısınması (Şehir içi)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Yağ eksiltme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-e-tech-140-hp-hibrit-otomatik",
        name: "1.6 E-Tech 140 HP",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Yazılım güncellemeleri gereksinimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Vites geçişlerinde kararsızlık",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 8,
    engines: [
      {
        slug: "12-mpi-79-84-ps-benzin-manuel",
        name: "1.2 MPI 79/84 PS",
        fuelType: "Benzin",
        transmission: "5 İleri Manuel",
        score: 88,
        description:
          "Dört silindirli atmosferik 1.2 MPI, üçüncü nesil i20'nin en sade benzinli seçeneğidir. Türkiye broşürlerinde ilk yıllarda 79 PS, Avrupa teknik verilerinde 84 PS olarak görülebilir; bu fark pazar ve homologasyon döneminden kaynaklanır. Şehir içi kullanım ve düşük bakım karmaşıklığı önceliklidir, performans beklentisi sınırlı tutulmalıdır.",
        pros: [
          "Turbo ve DCT bulunmayan sade aktarma yapısı",
          "Şehir içinde yumuşak gaz tepkisi ve öngörülebilir bakım",
        ],
        cons: [
          "Yüklü araçta ve uzun rampada sınırlı ara hızlanma",
          "Beş ileri şanzıman nedeniyle otoyolda daha yüksek motor devri",
        ],
        chronicIssues: [
          {
            title: "Ateşleme teklemesi kontrolü",
            description:
              "Düzensiz rölanti veya yük altında tekleme varsa buji, bobin, yakıt düzeltmeleri ve boğaz kelebeği birlikte kontrol edilmelidir. Bu belirti tek başına motora özgü kronik arıza kanıtı değildir; çoğu vakada bakım geçmişi ve yanlış buji aralığı belirleyicidir.",
            severity: "low",
            reportCount: 5,
          },
          {
            title: "LPG uygulanmış araçlarda supap ayarı",
            description:
              "Sonradan LPG uygulanmış örneklerde soğuk çalışma, kompresyon ve supap boşluğu kontrol edilmelidir. Fakir karışım veya ihmal edilmiş ayar supap yuvası aşınmasını hızlandırabilir; LPG dönüşümünün markası, kalibrasyonu ve servis kayıtları önemlidir.",
            severity: "medium",
            reportCount: 5,
          },
        ],
      },
      {
        slug: "14-mpi-100-ps-benzin-6at",
        name: "1.4 MPI 100 PS",
        fuelType: "Benzin",
        transmission: "6 İleri Tam Otomatik",
        score: 87,
        description:
          "Türkiye'de özellikle otomatik i20 alıcılarının sık karşılaştığı 1.4 MPI, 100 PS gücünü altı ileri tork konvertörlü şanzımanla aktarır. Turbo ve kuru çift kavrama kullanmaması sakin kullanımda mekanik sadelik sağlar. Buna karşılık yoğun şehir trafiğinde yakıt tüketimi 1.0 T-GDI seçeneğinin üzerine çıkabilir.",
        pros: [
          "Tork konvertörlü 6AT ile düşük hızda akıcı çalışma",
          "Turbo besleme olmadan sade ve yaygın servis bilgisi",
        ],
        cons: [
          "Yoğun şehir trafiğinde görece yüksek yakıt tüketimi",
          "Tam yüklü kullanımda sınırlı ara hızlanma",
        ],
        chronicIssues: [
          {
            title: "6AT geçiş kalitesi ve yağ durumu",
            description:
              "Soğuk veya sıcak kullanımda belirgin vuruntu varsa şanzıman yağı seviyesi/durumu, adaptasyon değerleri ve motor takozları beraber incelenmelidir. Tork konvertörlü yapıda hafif vites hissi ile arıza kaynaklı sert vuruntu birbirinden ayrılmalıdır.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "LPG ve katalizör kontrolü",
            description:
              "LPG'li araçta arıza lambası, yakıt düzeltmesi ve katalizör verimi OBD üzerinden kontrol edilmelidir. Yanlış karışım ayarı uzun vadede supap ve katalizörü zorlayabilir; bu risk fabrika çıkışlı benzin kullanımında aynı anlamı taşımaz.",
            severity: "medium",
            reportCount: 5,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-ps-benzin-7dct",
        name: "1.0 T-GDI 100 PS",
        fuelType: "Benzin",
        transmission: "7 İleri DCT",
        score: 80,
        description:
          "Üç silindirli turbo 1.0 T-GDI, 172 Nm torku ve yedi ileri kuru çift kavramalı DCT ile atmosferik seçeneklerden daha canlı ara hızlanma sunar. Bu kombinasyon 2020 sonrası Türkiye gamında kullanıldı. Alım öncesinde soğuk-sıcak kalkış davranışı ile iki resmî kampanyanın VIN durumu mutlaka kontrol edilmelidir.",
        pros: [
          "Düşük devirden gelen 172 Nm tork ve güçlü ara hızlanma",
          "Yedi oran sayesinde uzun yolda düşük devir",
        ],
        cons: [
          "Kuru kavramalı DCT'nin yoğun sürünme trafiğine hassas olması",
          "MPI motorlara göre daha karmaşık turbo ve direkt enjeksiyon sistemi",
        ],
        chronicIssues: [
          {
            title: "41DT05 DCT/TCU yazılım kampanyası",
            description:
              "28 Mart 2023-15 Ocak 2024 üretimli belirli 7DCT araçlar için şanzıman veya TCU hatasının beklenmeyen yavaşlamaya neden olabilmesi sebebiyle 41DT05 kodlu kampanya yayımlandı. Yazılım durumunu ve kapsamı yalnızca VIN sorgusu kesinleştirir.",
            severity: "high",
            reportCount: 0,
          },
          {
            title: "51DT07 yakıt pompası kampanyası",
            description:
              "1 Nisan 2021-3 Aralık 2022 üretimli belirli i20/Bayon araçlarında yakıt pompası çarkının genleşip pompayı durdurabilmesi ve motorun güç kaybetmesi riski için 51DT07 kampanyası bulunur. Aracın işlem geçmişi yetkili servisten doğrulanmalıdır.",
            severity: "high",
            reportCount: 0,
          },
        ],
      },
      {
        slug: "10-t-gdi-90-ps-benzin-manuel-7dct",
        name: "1.0 T-GDI 90 PS",
        fuelType: "Benzin",
        transmission: "6 İleri Manuel / 7 İleri DCT",
        score: 82,
        description:
          "Makyajlı BC3 PE'nin güncel Türkiye gamında 1.0 T-GDI motor 90 PS ve 172 Nm ile sunulur. Hyundai Türkiye yakıt/emisyon belgeleri hem altı ileri manuel hem yedi ileri DCT seçeneğini listeler. Uzun dönem arıza verisi daha eski 100 PS sürüm kadar olgunlaşmadığı için değerlendirme özellikle bakım kaydı ve test sürüşüne dayanmalıdır.",
        pros: [
          "172 Nm tork ile 1.2 MPI'den daha güçlü ara hızlanma",
          "Manuel veya 7DCT şanzıman seçebilme",
        ],
        cons: [
          "Yeni model yıllarında uzun dönem arıza verisinin sınırlı olması",
          "7DCT seçeneğinde sürünme ve yokuş kullanımına dikkat gerektirmesi",
        ],
        chronicIssues: [
          {
            title: "7DCT ısınma uyarısı kullanım kontrolü",
            description:
              "Hyundai kullanım kılavuzu, aracı yokuşta gazla tutmanın veya uzun süre süründürmenin kavrama ve şanzımana zarar verebileceğini belirtir. Uyarı tekrarlıyorsa kavrama adaptasyonu ve TCU hata kayıtları yetkili ekipmanla kontrol edilmelidir.",
            severity: "medium",
            reportCount: 0,
          },
          {
            title: "Doğrudan enjeksiyon bakım kontrolü",
            description:
              "Soğuk çalıştırmada uzun marş, tekleme veya yakıt kokusu varsa düşük-yüksek basınç yakıt değerleri ve enjektör düzeltmeleri incelenmelidir. Belirti yoksa yalnızca motorun direkt enjeksiyonlu olması arıza varlığı anlamına gelmez.",
            severity: "low",
            reportCount: 0,
          },
        ],
      },
      {
        slug: "16-t-gdi-204-ps-benzin-6mt-i20-n",
        name: "1.6 T-GDI 204 PS (i20 N)",
        fuelType: "Benzin",
        transmission: "6 İleri Manuel",
        score: 83,
        description:
          "i20 N, üçüncü nesil BC3'ün ayrı bir nesil değil yüksek performans türevidir. Avrupa'da 2021-2024 döneminde sunulan 1.6 T-GDI motor 204 PS ve 275 Nm üretir; yalnızca altı ileri manuel şanzımanla eşleşir. Standart i20'den farklı fren, süspansiyon ve soğutma parçaları nedeniyle bakım geçmişi özellikle önemlidir.",
        pros: [
          "204 PS güç, mekanik sınırlı kaydırmalı diferansiyel ve güçlü şasi",
          "Altı ileri manuel şanzımanla doğrudan sürüş deneyimi",
        ],
        cons: [
          "Standart i20'ye göre pahalı lastik, fren ve performans parçaları",
          "Pist veya sert kullanım görmüş örneklerde daha ayrıntılı ekspertiz ihtiyacı",
        ],
        chronicIssues: [
          {
            title: "51DT07 yakıt pompası kampanyası",
            description:
              "1 Haziran 2021-4 Ocak 2023 üretimli belirli i20 N araçlarında yakıt pompası çarkının genleşmesi güç kaybı veya motorun durması riskini doğurabilir. 51DT07 kampanya durumunun VIN ile yetkili serviste doğrulanması gerekir.",
            severity: "high",
            reportCount: 0,
          },
          {
            title: "Performans kullanımı sonrası sarf kontrolü",
            description:
              "Pist ve sert kullanım fren diski/balata, ön lastik, debriyaj ve motor yağı sıcaklık yükünü artırır. Satın alma öncesinde standart ekspertize ek olarak fren kalınlığı, eşit lastik aşınması, soğutma sistemi ve yağ bakım aralıkları incelenmelidir.",
            severity: "medium",
            reportCount: 0,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 901,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 902,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 10,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 11,
    engines: [
      {
        slug: "v1-standart-menzil-elektrik-tek-vites",
        name: "V1 Standart Menzil",
        fuelType: "Elektrik",
        transmission: "Tek Vites",
        score: 87,
        chronicIssues: [
          {
            title: "Ekran arayüzü donmaları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Mobil uygulama senkronizasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Şarj istasyonu tanıma hataları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "v2-uzun-menzil-elektrik-tek-vites",
        name: "V2 Uzun Menzil",
        fuelType: "Elektrik",
        transmission: "Tek Vites",
        score: 88,
        chronicIssues: [
          {
            title: "Yazılımsal hatalar",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Kamera sensör buğulanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 12,
    engines: [
      {
        slug: "16-tgdi-183-hp-benzin-7-dct",
        name: "1.6 TGDI 183 HP",
        fuelType: "Benzin",
        transmission: "7-DCT",
        score: 82,
        chronicIssues: [
          {
            title: "Şanzıman kararsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Yüksek yakıt tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Yazılım hataları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "phev-hibrit-hibrit-dht",
        name: "PHEV Hibrit",
        fuelType: "Hibrit",
        transmission: "DHT",
        score: 85,
        chronicIssues: [
          {
            title: "Batarya menzil tutarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Şarj uyumluluğu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 13,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 14,
    engines: [
      {
        slug: "14-benzinli-benzin-otomatik",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Yakıt pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-dizel-dizel-manuel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Enjektörler",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 15,
    engines: [
      {
        slug: "14-benzinli-benzin-otomatik",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Yakıt pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-dizel-dizel-manuel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Enjektörler",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 16,
    engines: [
      {
        slug: "14-benzinli-benzin-otomatik",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Yakıt pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-dizel-dizel-manuel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektörler",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 17,
    engines: [
      {
        slug: "16-tgdi-183-hp-benzin-7-dct",
        name: "1.6 TGDI 183 HP",
        fuelType: "Benzin",
        transmission: "7-DCT",
        score: 82,
        chronicIssues: [
          {
            title: "Şanzıman kararsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yakıt tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Yazılım hataları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "phev-hibrit-hibrit-dht",
        name: "PHEV Hibrit",
        fuelType: "Hibrit",
        transmission: "DHT",
        score: 85,
        chronicIssues: [
          {
            title: "Batarya menzil tutarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Şarj uyumluluğu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 18,
    engines: [
      {
        slug: "14-benzinli-benzin-otomatik",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Yakıt pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-dizel-dizel-manuel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Enjektörler",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 19,
    engines: [
      {
        slug: "14-mpi-100-hp-benzin-manuel-otomatik",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "Katalitik konvertör hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-hp-benzin-dct",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 86,
        chronicIssues: [
          {
            title: "Kuru tip DCT kavrama titremesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Turbo selenoid valfi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-crdi-90-hp-dizel-manuel",
        name: "1.4 CRDi 90 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 92,
        chronicIssues: [
          {
            title: "DPF rejenerasyon sıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Enjektör kirlenmesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-t-gdi-177-hp-benzin-dct",
        name: "1.6 T-GDI 177 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 84,
        chronicIssues: [
          {
            title: "Şanzıman aşırı ısınma uyarısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Kavrama ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 20,
    engines: [
      {
        slug: "14-mpi-100-hp-benzin-manuel-otomatik",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "Katalitik konvertör hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-hp-benzin-dct",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 86,
        chronicIssues: [
          {
            title: "Kuru tip DCT kavrama titremesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo selenoid valfi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-crdi-90-hp-dizel-manuel",
        name: "1.4 CRDi 90 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 92,
        chronicIssues: [
          {
            title: "DPF rejenerasyon sıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektör kirlenmesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-t-gdi-177-hp-benzin-dct",
        name: "1.6 T-GDI 177 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 84,
        chronicIssues: [
          {
            title: "Şanzıman aşırı ısınma uyarısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Kavrama ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 21,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 22,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 23,
    engines: [
      {
        slug: "15-vtec-turbo-182-hp-benzin-cvt",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Yağa benzin karışması (Bazı seriler)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-i-dtec-120-hp-dizel-otomatik",
        name: "1.6 i-DTEC 120 HP",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Şanzıman yağı değişim hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "15-ehev-hibrit-hibrit-e-cvt",
        name: "1.5 e:HEV Hibrit",
        fuelType: "Hibrit",
        transmission: "e-CVT",
        score: 95,
        chronicIssues: [
          {
            title: "Akü ömrü kısallığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Kış aylarında düşük yakıt verimliliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 24,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 25,
    engines: [
      {
        slug: "12-puretech-130-hp-benzin-eat8",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Vakum pompası tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "15-bluehdi-130-hp-dizel-eat8",
        name: "1.5 BlueHDi 130 HP",
        fuelType: "Dizel",
        transmission: "EAT8",
        score: 82,
        chronicIssues: [
          {
            title: "AdBlue deposu arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "EGR valfi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "AdBlue pompası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 26,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 27,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 28,
    engines: [
      {
        slug: "16-tgdi-183-hp-benzin-7-dct",
        name: "1.6 TGDI 183 HP",
        fuelType: "Benzin",
        transmission: "7-DCT",
        score: 82,
        chronicIssues: [
          {
            title: "Şanzıman kararsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yüksek yakıt tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Yazılım hataları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "phev-hibrit-hibrit-dht",
        name: "PHEV Hibrit",
        fuelType: "Hibrit",
        transmission: "DHT",
        score: 85,
        chronicIssues: [
          {
            title: "Batarya menzil tutarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Şarj uyumluluğu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 29,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 30,
    engines: [
      {
        slug: "rwd-elektrik-tek-vites",
        name: "RWD",
        fuelType: "Elektrik",
        transmission: "Tek Vites",
        score: 92,
        chronicIssues: [
          {
            title: "Boya kalitesi problemleri",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Ekran donmaları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Süspansiyon burçları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "long-range-dual-motor-elektrik-tek-vites",
        name: "Long Range Dual Motor",
        fuelType: "Elektrik",
        transmission: "Tek Vites",
        score: 90,
        chronicIssues: [
          {
            title: "Şarj kapağı sensörü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Isı pompası arızası (Soğuk havada)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "performance-elektrik-tek-vites",
        name: "Performance",
        fuelType: "Elektrik",
        transmission: "Tek Vites",
        score: 88,
        chronicIssues: [
          {
            title: "Lastik aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Fren diski eğrilmesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 31,
    engines: [
      {
        slug: "12-mpi-84-ps-benzin-5mt",
        name: "1.2 MPI 84 PS",
        fuelType: "Benzin",
        transmission: "5 İleri Manuel",
        score: 89,
        description:
          "Dört silindirli atmosferik 1.2 MPI, ikinci nesil i20'nin giriş benzinlisidir. Türkiye ve Avrupa broşürlerinde 84 PS güçle, beş ileri manuel şanzımanla yer alır. Turbo ve çift kavrama içermeyen yapısı bakım sadeliği sağlar; otoyol ve tam yüklü kullanımda performansı sınırlıdır.",
        pros: [
          "Sade atmosferik motor ve manuel şanzıman",
          "Yaygın parça, servis bilgisi ve düşük mekanik karmaşıklık",
        ],
        cons: [
          "Tam yüklü araçta zayıf ara hızlanma",
          "Beşinci viteste otoyol hızında yüksek devir",
        ],
        chronicIssues: [
          {
            title: "Ateşleme sistemi ve rölanti kontrolü",
            description:
              "Soğukta düzensiz çalışma veya yük altında tekleme varsa buji aralığı, bobinler, yakıt düzeltmeleri ve boğaz kelebeği incelenmelidir. Düzenli bakım görmüş ve belirti vermeyen araçta koruyucu amaçla parça değiştirmek gerekmez.",
            severity: "low",
            reportCount: 5,
          },
          {
            title: "Debriyaj kavrama noktası",
            description:
              "Kavrama noktası çok yukarıdaysa, kalkışta titreme veya yük altında devir yükselip hız artmıyorsa debriyaj seti kontrol edilmelidir. Motorun doğal düşük torku ile aşınmış debriyaj belirtisi test sürüşünde ayrı değerlendirilmelidir.",
            severity: "medium",
            reportCount: 5,
          },
        ],
      },
      {
        slug: "14-mpi-100-ps-benzin-4at",
        name: "1.4 MPI 100 PS",
        fuelType: "Benzin",
        transmission: "4 İleri Tam Otomatik",
        score: 86,
        description:
          "1.4 MPI, ikinci nesil i20'nin Türkiye'de yaygın tork konvertörlü otomatik seçeneğidir. 100 PS motor, dört ileri otomatikle sakin ve akıcı şehir içi sürüşe odaklanır. Şanzımanın oran sayısı az olduğu için otoyol devri ve yakıt tüketimi daha yeni altı-yedi ileri alternatiflerden yüksektir.",
        pros: [
          "Düşük hızda akıcı tork konvertörlü otomatik",
          "Turbo ve kuru kavrama içermeyen sade aktarma",
        ],
        cons: [
          "Dört ileri oran nedeniyle yüksek devir ve tüketim",
          "Yüklü kullanımda sınırlı ara hızlanma",
        ],
        chronicIssues: [
          {
            title: "4AT geçiş vuruntusu kontrolü",
            description:
              "D-R geçişinde gecikme veya sıcak kullanımda sert vuruntu varsa yağ seviyesi/durumu, solenoid hata kayıtları ve motor-şanzıman takozları birlikte kontrol edilmelidir. Dört ileri şanzımanın hissedilen normal geçişi arızayla karıştırılmamalıdır.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "LPG'li araçlarda karışım ve supap kontrolü",
            description:
              "Sonradan LPG uygulanmış araçlarda benzin ve LPG yakıt düzeltmeleri, kompresyon ve supap boşlukları kontrol edilmelidir. Hatalı kalibrasyon arıza lambası, düzensiz rölanti ve katalizör yükü oluşturabilir.",
            severity: "medium",
            reportCount: 5,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-120-ps-benzin-5mt-7dct",
        name: "1.0 T-GDI 100/120 PS",
        fuelType: "Benzin",
        transmission: "5 İleri Manuel / 7 İleri DCT",
        score: 80,
        description:
          "Üç silindirli 1.0 T-GDI, GB nesline 2016 model yılı döneminde 100 ve 120 PS seçenekleriyle eklendi; 2018 makyajında 100 PS motorla yedi ileri DCT de sunuldu. Atmosferik motorlardan daha güçlü ara hızlanma sağlar. DCT ve fren vakum hortumu kampanya geçmişi VIN üzerinden kontrol edilmelidir.",
        pros: [
          "Atmosferik seçeneklere göre güçlü düşük devir torku",
          "100/120 PS ve manuel/7DCT alternatifleri",
        ],
        cons: [
          "Turbo ve direkt enjeksiyon nedeniyle daha karmaşık sistem",
          "7DCT'nin yoğun sürünme trafiğinde ısı yönetimi ihtiyacı",
        ],
        chronicIssues: [
          {
            title: "61DT02 fren vakum hortumu kampanyası",
            description:
              "18 Ağustos 2015-21 Eylül 2020 üretimli belirli 1.0 T-GDI araçlarda yanlış yönlendirilmiş vakum hortumu çatlayarak fren desteğini azaltabilir. 61DT02 kodlu güvenlik kampanyasının tamamlanma durumu VIN ile yetkili servisten öğrenilmelidir.",
            severity: "high",
            reportCount: 0,
          },
          {
            title: "7DCT kalkış titremesi kontrolü",
            description:
              "DCT'li araçta soğuk ve tam ısınmış halde ileri-geri manevra, yokuş kalkışı ve düşük hız sürüşü denenmelidir. Sürekli titreme varsa kavrama aşınma/adaptasyon değerleri ile TCU hata kayıtları incelenmelidir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-crdi-90-ps-dizel-6mt",
        name: "1.4 CRDi 90 PS",
        fuelType: "Dizel",
        transmission: "6 İleri Manuel",
        score: 85,
        description:
          "1.4 CRDi, 90 PS ve yaklaşık 240 Nm torkuyla ikinci nesil i20'nin Türkiye'deki ekonomik uzun yol seçeneğidir. Altı ileri manuel şanzımanla sunulmuştur. Düzenli uzun yol yapan kullanıcı için verimli olabilir; kısa mesafeli şehir kullanımında DPF rejenerasyonu ve EGR kurumlanması yakından izlenmelidir.",
        pros: [
          "240 Nm tork ve düşük uzun yol tüketimi",
          "Altı ileri manuel şanzıman",
        ],
        cons: [
          "Kısa mesafede DPF rejenerasyonunun tamamlanmama riski",
          "Yaş ve kilometreyle enjektör, turbo ve volan maliyeti",
        ],
        chronicIssues: [
          {
            title: "DPF doluluğu ve EGR kurumlanması",
            description:
              "Kısa mesafe geçmişi olan araçta rejenerasyon sıklığı, DPF diferansiyel basıncı, EGR komutu ve kül hesabı teşhis cihazıyla okunmalıdır. Sadece arıza lambasını silmek veya zorla rejenerasyon yapmak kök nedeni çözmez.",
            severity: "high",
            reportCount: 7,
          },
          {
            title: "Turbo basınç hortumu kaçak kontrolü",
            description:
              "İvmelenmede ıslık, yağlı hortum çevresi veya basınç sapması varsa turbo hortumları ve kelepçeler kaçak testine alınmalıdır. Hafif yağ buharı tek başına turbo arızası kanıtı değildir; mil boşluğu ve hedef-gerçek basınç birlikte değerlendirilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 32,
    engines: [
      {
        slug: "14-mpi-100-hp-benzin-manuel-otomatik",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "Katalitik konvertör hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-hp-benzin-dct",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 86,
        chronicIssues: [
          {
            title: "Kuru tip DCT kavrama titremesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo selenoid valfi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-crdi-90-hp-dizel-manuel",
        name: "1.4 CRDi 90 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 92,
        chronicIssues: [
          {
            title: "DPF rejenerasyon sıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Enjektör kirlenmesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-t-gdi-177-hp-benzin-dct",
        name: "1.6 T-GDI 177 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 84,
        chronicIssues: [
          {
            title: "Şanzıman aşırı ısınma uyarısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Kavrama ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 33,
    engines: [
      {
        slug: "10-tsi-110-hp-benzin-dsg",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Mekatronik arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "15-tsi-150-hp-benzin-dsg",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "DSG mekatronik basınç tüpü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-tdi-120-hp-dizel-dsg",
        name: "1.6 TDI 120 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 85,
        chronicIssues: [
          {
            title: "EGR valfi arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Su pompası sızıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Enjektör arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "20-tdi-150-hp-dizel-dsg",
        name: "2.0 TDI 150 HP",
        fuelType: "Dizel",
        transmission: "DSG",
        score: 91,
        chronicIssues: [
          {
            title: "DPF dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "AdBlue sistemi sorunları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 34,
    engines: [
      {
        slug: "10-tce-90-hp-benzin-manuel-x-tronic",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "15-dci-110-hp-dizel-manuel-edc",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "13-tce-140-hp-benzin-edc",
        name: "1.3 TCe 140 HP",
        fuelType: "Benzin",
        transmission: "EDC",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama ısınması (Şehir içi)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Yağ eksiltme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-e-tech-140-hp-hibrit-otomatik",
        name: "1.6 E-Tech 140 HP",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Yazılım güncellemeleri gereksinimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Vites geçişlerinde kararsızlık",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 11101,
    engines: [
      {
        slug: "1-6-karb-rat-rl-80-hp",
        name: "1.6 Karbüratörlü 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 65,
        chronicIssues: [
          {
            title: "Karbüratör Ayarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Yağ Yakma ve Üfleme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-4-i-e-71-hp",
        name: "1.4 i.e. 71 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 68,
        chronicIssues: [
          {
            title: "Rölanti Motoru Arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-6-i-e-96-hp",
        name: "1.6 i.e. 96 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 70,
        chronicIssues: [
          {
            title: "Rölanti Dalgalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 102,
    engines: [
      {
        slug: "1-4-fire-95-hp",
        name: "1.4 Fire 95 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 90,
        chronicIssues: [
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-3-multijet-95-hp",
        name: "1.3 Multijet 95 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 95,
        chronicIssues: [
          {
            title: "EGR tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Baskı balata ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 103,
    engines: [
      {
        slug: "1-0-tce-90-hp",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-5-dci-110-hp",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 104,
    engines: [
      {
        slug: "1-4-mpi-100-hp",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "Katalitik konvertör hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-0-t-gdi-100-hp",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 86,
        chronicIssues: [
          {
            title: "Kuru tip DCT kavrama titremesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 105,
    engines: [
      {
        slug: "1-5-vtec-turbo-182-hp",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 106,
    engines: [
      {
        slug: "1-4-fire-95-hp",
        name: "1.4 Fire 95 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 90,
        chronicIssues: [
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-3-multijet-95-hp",
        name: "1.3 Multijet 95 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 95,
        chronicIssues: [
          {
            title: "EGR tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Baskı balata ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 107,
    engines: [
      {
        slug: "1-0-tce-90-hp",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-5-dci-110-hp",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 108,
    engines: [
      {
        slug: "1-4-benzinli",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-6-dizel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 109,
    engines: [
      {
        slug: "1-4-benzinli",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-6-dizel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 110,
    engines: [
      {
        slug: "1-0-tsi-110-hp",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "DSG Kavrama",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Mekatronik",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-5-tsi-150-hp",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "DSG Kavrama",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "ACT Sistem sarsıntısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 111,
    engines: [
      {
        slug: "1-0-tsi-110-hp",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-5-tsi-150-hp",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 112,
    engines: [
      {
        slug: "1-4-benzinli",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-6-dizel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 113,
    engines: [
      {
        slug: "1-2-dig-t-115-hp",
        name: "1.2 DIG-T 115 HP",
        fuelType: "Benzin",
        transmission: "X-Tronic",
        score: 78,
        chronicIssues: [
          {
            title: "Aşırı yağ eksiltme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Motor revizyon ihtiyacı (Sekman kırma)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-5-dci-110-hp",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 90,
        chronicIssues: [
          {
            title: "Partikül filtresi tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 114,
    engines: [
      {
        slug: "1-2-puretech-130-hp",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 115,
    engines: [
      {
        slug: "1-5-dynamic-force-125-hp",
        name: "1.5 Dynamic Force 125 HP",
        fuelType: "Benzin",
        transmission: "Multidrive S",
        score: 94,
        chronicIssues: [
          {
            title: "CVT şanzıman ısınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Yüksek devirde ses",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-8-hybrid-122-hp",
        name: "1.8 Hybrid 122 HP",
        fuelType: "Hibrit",
        transmission: "e-CVT",
        score: 98,
        chronicIssues: [
          {
            title: "Batarya kapasite düşüşü (Uzun vadede)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 116,
    engines: [
      {
        slug: "1-6-karb-rat-rl-80-hp",
        name: "1.6 Karbüratörlü 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 64,
        chronicIssues: [
          {
            title: "Hararet (Ağır Yük)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-6-i-e-96-hp",
        name: "1.6 i.e. 96 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 69,
        chronicIssues: [
          {
            title: "Rölanti Dalgalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 117,
    engines: [
      {
        slug: "1-3-karb-rat-rl-65-hp",
        name: "1.3 Karbüratörlü 65 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 60,
        chronicIssues: [
          {
            title: "Yağ Kaçakları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 118,
    engines: [
      {
        slug: "1-5-vtec-turbo-182-hp",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 119,
    engines: [
      {
        slug: "1-5-vtec-turbo-182-hp",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 120,
    engines: [
      {
        slug: "1-0-tce-90-hp",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-5-dci-110-hp",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 121,
    engines: [
      {
        slug: "1-4-t-150-hp",
        name: "1.4 T 150 HP",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 82,
        chronicIssues: [
          {
            title: "Sekman kırma",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Piston çatlatma",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-6-cdti-136-hp",
        name: "1.6 CDTI 136 HP",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Zincir sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 122,
    engines: [
      {
        slug: "1-0-tsi-110-hp",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-5-tsi-150-hp",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 123,
    engines: [
      {
        slug: "1-4-benzinli",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-6-dizel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 124,
    engines: [
      {
        slug: "1-2-puretech-130-hp",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 125,
    engines: [
      {
        slug: "1-4-benzinli",
        name: "1.4 Benzinli",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Ateşleme bobini",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-6-dizel",
        name: "1.6 Dizel",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 88,
        chronicIssues: [
          {
            title: "DPF rejenerasyonu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 126,
    engines: [
      {
        slug: "1-0-tsi-110-hp",
        name: "1.0 TSI 110 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 88,
        chronicIssues: [
          {
            title: "Kavrama titremesi (DSG)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-5-tsi-150-hp",
        name: "1.5 TSI 150 HP",
        fuelType: "Benzin",
        transmission: "DSG",
        score: 89,
        chronicIssues: [
          {
            title: "Soğuk marşta titreme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 127,
    engines: [
      {
        slug: "1-4-mpi-100-hp",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 93,
        chronicIssues: [
          {
            title: "Katalitik konvertör hassasiyeti",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-0-t-gdi-100-hp",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "DCT",
        score: 86,
        chronicIssues: [
          {
            title: "Kuru tip DCT kavrama titremesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 101,
    engines: [
      {
        slug: "1-6-karb-rat-rl-80-hp",
        name: "1.6 Karbüratörlü 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 65,
        chronicIssues: [
          {
            title: "Karbüratör Ayarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yağ Yakma ve Üfleme",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-4-i-e-71-hp",
        name: "1.4 i.e. 71 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 68,
        chronicIssues: [
          {
            title: "Rölanti Motoru Arızası",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-6-i-e-96-hp",
        name: "1.6 i.e. 96 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 70,
        chronicIssues: [
          {
            title: "Rölanti Dalgalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 11102,
    engines: [
      {
        slug: "1-6-karb-rat-rl-80-hp",
        name: "1.6 Karbüratörlü 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 65,
        chronicIssues: [
          {
            title: "Karbüratör Ayarsızlığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-6-i-e-96-hp",
        name: "1.6 i.e. 96 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 70,
        chronicIssues: [
          {
            title: "Rölanti Motoru ve Kelebek Sensörü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 11103,
    engines: [
      {
        slug: "1-6-karb-rat-rl-80-hp",
        name: "1.6 Karbüratörlü 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 64,
        chronicIssues: [
          {
            title: "Hararet (Ağır Yük)",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-6-i-e-96-hp",
        name: "1.6 i.e. 96 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 69,
        chronicIssues: [
          {
            title: "Rölanti Dalgalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 11104,
    engines: [
      {
        slug: "1-3-karb-rat-rl-65-hp",
        name: "1.3 Karbüratörlü 65 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 60,
        chronicIssues: [
          {
            title: "Yağ Kaçakları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 150,
    engines: [
      {
        slug: "1-4-benzinli-72-hp",
        name: "1.4 Benzinli 72 HP",
        fuelType: "LPG",
        transmission: "Manuel (4/5 İleri)",
        score: 50,
        chronicIssues: [
          {
            title: "Karbüratör Tıkanması",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Ateşleme Bobini Yanması",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-4-tx-72-hp",
        name: "1.4 TX 72 HP",
        fuelType: "LPG",
        transmission: "Manuel (5 İleri)",
        score: 55,
        chronicIssues: [
          {
            title: "Sübap İtici Sesi",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Meksefe Platin Arızası",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 151,
    engines: [
      {
        slug: "1-4-broadway-72-hp",
        name: "1.4 Broadway 72 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 58,
        chronicIssues: [
          {
            title: "Hararet (Termostat Müşürü)",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Rölanti Ayarsızlığı",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-6-fairway-80-hp",
        name: "1.6 Fairway 80 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 62,
        chronicIssues: [
          {
            title: "Radyatör Sızıntısı",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Karbüratör Memesi Tıkanıklığı",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 152,
    engines: [
      {
        slug: "1-4-70-s",
        name: "1.4 70 S (Karbüratörlü)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 55,
        chronicIssues: [
          {
            title: "Karbüratör Boğulması",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Distribütör Oksitlenmesi",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-4-70-sx-ie",
        name: "1.4 70 SX i.e. (Enjeksiyonlu)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 60,
        chronicIssues: [
          {
            title: "Rölanti Sensörü (Adım Motoru) Arızası",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Benzin Pompası Arızası",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 153,
    engines: [
      {
        slug: "1-6-gli-114-hp",
        name: "1.6 GLi 114 HP (Efsane Motor)",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Distribütör O-Ring Terlemesi",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Eski Nesil LPG Kurum Yapması",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "1-3-xl-75-hp",
        name: "1.3 XL 75 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 85,
        chronicIssues: [
          {
            title: "Subap Ayarı Gereksinimi",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 154,
    engines: [
      {
        slug: "1-5-gls-92-hp",
        name: "1.5 GLS 92 HP",
        fuelType: "LPG",
        transmission: "Manuel / Otomatik",
        score: 70,
        chronicIssues: [
          {
            title: "Rölanti Motoru Kirlenmesi",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "LPG Patlatma Sorunu",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-3-ls-75-hp",
        name: "1.3 LS 75 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 65,
        chronicIssues: [
          {
            title: "Performans Düşüklüğü (Yokuşlarda)",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 155,
    engines: [
      {
        slug: "1-5-karburatorlu-72-hp",
        name: "1.5 Karbüratörlü 72 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 55,
        chronicIssues: [
          {
            title: "Subap Sesi (Şakırtı)",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Karbüratör Ayar Tutmaması",
            description:
              "Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 156,
    engines: [
      {
        slug: "1-0-tce-90-hp",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / X-Tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Erken debriyaj aşınması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 7,
          },
          {
            title: "Turbo valfi sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "1-5-dci-110-hp",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 92,
        chronicIssues: [
          {
            title: "EGR valfi tıkanıklığı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Partikül filtresi dolumu",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 157,
    engines: [
      {
        slug: "1-4-fire-95-hp",
        name: "1.4 Fire 95 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 90,
        chronicIssues: [
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Performans eksikliği",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "1-3-multijet-95-hp",
        name: "1.3 Multijet 95 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 95,
        chronicIssues: [
          {
            title: "EGR tıkanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Baskı balata ömrü",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 158,
    engines: [
      {
        slug: "1-2-puretech-130-hp",
        name: "1.2 PureTech 130 HP",
        fuelType: "Benzin",
        transmission: "EAT8",
        score: 80,
        chronicIssues: [
          {
            title: "Triger kayışı parçalanması",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "Yüksek yağ tüketimi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 159,
    engines: [
      {
        slug: "1-5-vtec-turbo-182-hp",
        name: "1.5 VTEC Turbo 182 HP",
        fuelType: "Benzin",
        transmission: "CVT",
        score: 94,
        chronicIssues: [
          {
            title: "Direksiyon kutusu tıkırtısı",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 160,
    engines: [
      {
        slug: "1-4-t-150-hp",
        name: "1.4 T 150 HP",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 82,
        chronicIssues: [
          {
            title: "Sekman kırma",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
          {
            title: "Piston çatlatma",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "1-6-cdti-136-hp",
        name: "1.6 CDTI 136 HP",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Zincir sesi",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 161,
    engines: [
      {
        slug: "1-3-karb-rat-rl-65-hp",
        name: "1.3 Karbüratörlü 65 HP",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 60,
        chronicIssues: [
          {
            title: "Yağ Kaçakları",
            description:
              "Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 1001,
    engines: [
      {
        slug: "1-5-tfsi-150-hp",
        name: "1.5 TFSI 150 HP",
        fuelType: "Benzin",
        transmission: "S tronic",
        score: 85,
        chronicIssues: [
          {
            title: "Kavrama ısınması",
            description: "Sıkışık trafikte kavrama ısınması uyarısı.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 1002,
    engines: [
      {
        slug: "10-sce-73-hp-benzin-manuel",
        name: "1.0 SCe 73 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Rölanti Dalgalanması",
            description: "Boğaz kelebeği kirliliği kaynaklı titreme.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Yağ Eksiltme (Yüksek KM)",
            description:
              "Bazı yüksek kilometreli araçlarda periyodik yağ eksiltmesi gözlemlenmiştir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 1003,
    engines: [
      {
        slug: "14-mpi-100-hp-benzin-otomatik",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Tam Otomatik",
        score: 82,
        chronicIssues: [
          {
            title: "Ateşleme Bobini Hassasiyeti",
            description:
              "Özellikle LPG'li kullanımlarda bobin ömrü kısalabilmektedir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "125-mpi-84-hp-benzin-manuel",
        name: "1.25 MPI 84 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj Kavrama Titremesi",
            description:
              "Yoğun trafikte ısınan debriyaj balatası ilk kalkışlarda hafif titreme yapabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 1005,
    engines: [
      {
        slug: "16-tgdi-180-hp-benzin-dct",
        name: "1.6 T-GDI 180 HP",
        fuelType: "Benzin",
        transmission: "Çift Kavrama (DCT)",
        score: 85,
        chronicIssues: [
          {
            title: "Şanzıman Isınması",
            description:
              "Uzun süreli yokuş kalkışlarında ve trafikte kavrama ısınma uyarısı verebilir.",
            severity: "high",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-crdi-136-hp-dizel-dct",
        name: "1.6 CRDi 136 HP",
        fuelType: "Dizel",
        transmission: "Çift Kavrama (DCT)",
        score: 88,
        chronicIssues: [
          {
            title: "EGR / DPF Tıkanıklığı",
            description:
              "Sürekli şehir içi kullanımlarda dizel partikül filtresi dolabilmektedir.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2001,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2002,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2003,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2004,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2005,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2006,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2007,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2008,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2009,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 64,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 63,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2010,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2011,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2012,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2013,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2014,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 85,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 82,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 82,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 83,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2015,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2016,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2017,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2018,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2019,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2020,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2021,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2022,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2023,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2024,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2025,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2026,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2027,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2028,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2029,
    engines: [
      {
        slug: "12-mpi-78-85-ps-benzin-5mt",
        name: "1.2 MPI 78/85 PS",
        fuelType: "Benzin",
        transmission: "5 İleri Manuel",
        score: 88,
        description:
          "Birinci nesil i20'nin dört silindirli giriş motoru ilk seride yaklaşık 78 PS, 2012 makyajı döneminde 85 PS olarak listelenir. Türkiye'de i20, i20 Troy ve Yeni i20 Troy adları altında yaygın satılmıştır. Sade atmosferik yapı şehir kullanımı için uygundur; yüksek hız ve tam yükte performans beklentisi sınırlı olmalıdır.",
        pros: [
          "Turbo içermeyen sade ve yaygın mekanik yapı",
          "Parça ve servis erişiminin güçlü olması",
        ],
        cons: [
          "Yüklü araçta zayıf ara hızlanma",
          "Yaşı ilerleyen araçlarda kauçuk ve ateşleme parçalarının kontrol ihtiyacı",
        ],
        chronicIssues: [
          {
            title: "Ateşleme ve rölanti kontrolü",
            description:
              "Soğuk çalışmada tekleme veya düzensiz rölanti varsa buji, bobin, boğaz kelebeği ve emme kaçağı incelenmelidir. Bu yaş grubunda bakım geçmişi modelden daha belirleyicidir; rastgele parça değişimi yerine hata kodu ve yakıt düzeltmesi okunmalıdır.",
            severity: "low",
            reportCount: 6,
          },
          {
            title: "Debriyaj ve motor takozu ayrımı",
            description:
              "Kalkış titremesi hem debriyaj yüzeyinden hem yorgun motor takozundan kaynaklanabilir. El freni yük testi yerine güvenli test sürüşü, takoz gözlemi ve kavrama kaçırma kontrolüyle iki ihtimal ayrılmalıdır.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-mpi-100-ps-benzin-5mt-4at",
        name: "1.4 MPI 100 PS",
        fuelType: "Benzin",
        transmission: "5 İleri Manuel / 4 İleri Otomatik",
        score: 86,
        description:
          "1.4 litrelik atmosferik benzinli motor 100 PS güçle, pazara ve yıla göre beş ileri manuel veya dört ileri tork konvertörlü otomatikle sunuldu. Türkiye'de Troy ailesinin yaygın seçeneklerinden biridir. Otomatik versiyon sağlam ve akıcı karakterlidir ancak dört oran nedeniyle tüketim ve otoyol devri yüksektir.",
        pros: [
          "Sade atmosferik motor ve yaygın yedek parça",
          "4AT seçeneğinde düşük hızda akıcı çalışma",
        ],
        cons: [
          "Dört ileri otomatikte yüksek yakıt tüketimi",
          "LPG uygulanmış araçlarda montaj ve ayar kalitesine bağımlılık",
        ],
        chronicIssues: [
          {
            title: "4AT geçiş ve yağ kontrolü",
            description:
              "D-R geçişinde uzun gecikme, sıcak kullanımda sert vuruntu veya kaçırma varsa otomatik şanzıman yağının seviyesi/durumu ve hata kayıtları kontrol edilmelidir. Normal oran değişimi hissi, sürekli vuruntu veya kaymayla karıştırılmamalıdır.",
            severity: "medium",
            reportCount: 8,
          },
          {
            title: "LPG'li araçlarda kompresyon ve karışım",
            description:
              "Sonradan LPG uygulanmış araçta benzin/LPG yakıt düzeltmeleri, kompresyon ve supap boşluğu ölçülmelidir. Fakir karışım ve uzun süre ihmal edilmiş ayar, supap yuvası ile katalizör üzerinde ek ısı yükü oluşturabilir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "11-crdi-75-ps-dizel-6mt",
        name: "1.1 CRDi 75 PS",
        fuelType: "Dizel",
        transmission: "6 İleri Manuel",
        score: 82,
        description:
          "Üç silindirli 1.1 CRDi, 2012 makyajlı Yeni i20 Troy döneminde Türkiye servis kayıtlarında yer alan ekonomik dizel seçenektir. Altı ileri manuel şanzıman ve düşük tüketim odaklı karakter sunar. Yaşı ilerleyen dizelde DPF kullanım geçmişi, enjektör dengesi ve turbo yağ hattı ayrıntılı kontrol edilmelidir.",
        pros: [
          "Düşük yakıt tüketimi ve altı ileri şanzıman",
          "Şehirler arası kullanımda yeterli ekonomi",
        ],
        cons: [
          "Üç silindir nedeniyle belirgin dizel titreşimi",
          "Kısa mesafede DPF ve EGR bakım riski",
        ],
        chronicIssues: [
          {
            title: "DPF rejenerasyon geçmişi",
            description:
              "Kısa mesafe kullanılan araçta DPF diferansiyel basıncı, son rejenerasyon mesafesi ve kül hesabı teşhis cihazıyla kontrol edilmelidir. Sık rejenerasyon yalnızca filtreden değil termostat, enjektör veya basınç sensöründen de kaynaklanabilir.",
            severity: "high",
            reportCount: 7,
          },
          {
            title: "Enjektör dengesi ve soğuk çalışma",
            description:
              "Soğukta uzun marş, beyaz duman veya düzensiz çalışma varsa enjektör düzeltme ve geri dönüş değerleri ölçülmelidir. Motorun üç silindirli doğal titreşimi, arızalı enjektör veya takoz belirtisinden ayrı değerlendirilmelidir.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-crdi-90-ps-dizel-6mt",
        name: "1.4 CRDi 90 PS",
        fuelType: "Dizel",
        transmission: "6 İleri Manuel",
        score: 84,
        description:
          "Dört silindirli 1.4 CRDi 90 PS, birinci nesil i20 ve Troy ailesinin Türkiye'deki güçlü dizel seçeneğidir; resmî bakım kayıtlarında otomatik değil manuel şanzımanla yer alır. Torku ve düşük tüketimi avantajdır. Yaşlı örneklerde DPF/EGR, turbo hortumları, enjektör ve debriyaj-volan birlikte incelenmelidir.",
        pros: [
          "1.1 CRDi'ye göre daha güçlü tork ve dört silindirli çalışma",
          "Altı ileri manuel ile düşük uzun yol tüketimi",
        ],
        cons: [
          "Kısa mesafeli kullanımda DPF/EGR doluluğu",
          "Yüksek kilometrede dizel yakıt sistemi ve turbo maliyeti",
        ],
        chronicIssues: [
          {
            title: "DPF ve EGR kontrolü",
            description:
              "Arıza lambası, çekiş düşüşü veya sık fan çalışması varsa DPF basıncı ve EGR komutu canlı veriden incelenmelidir. Zorla rejenerasyon öncesinde termostat, enjektör ve basınç sensörü gibi doluluğu artıran nedenler dışlanmalıdır.",
            severity: "high",
            reportCount: 7,
          },
          {
            title: "Turbo hortumu ve yağ kaçağı ayrımı",
            description:
              "Turbo çevresinde yağ terlemesi görüldüğünde hortum/kelepçe kaçağı, karter havalandırması ve turbo mil durumu ayrı kontrol edilmelidir. Hafif yağ filmi tek başına turbo değişimi gerektirmez; hedef ve gerçek basınç değerleri yol testinde karşılaştırılmalıdır.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2030,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 88,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 88,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2031,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2032,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2033,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2034,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2035,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2036,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-lpg-manuel",
        name: "1.4 Litre LPG'li (Manuel)",
        fuelType: "LPG",
        transmission: "Manuel",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2037,
    engines: [
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 83,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 84,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 87,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2038,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 70,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-manuel",
        name: "1.4 Litre Benzinli (Manuel)",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 70,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2039,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2040,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2041,
    engines: [
      {
        slug: "16-litre-dizel-manuel",
        name: "1.6 Litre Dizel (Manuel)",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2042,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 89,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-lpg-otomatik",
        name: "1.4 Litre LPG'li (Otomatik)",
        fuelType: "LPG",
        transmission: "Otomatik",
        score: 89,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2043,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2044,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2045,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 67,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2046,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2047,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2048,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2049,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2050,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2051,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2052,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2053,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2054,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2055,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2056,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2057,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2058,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2059,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2060,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2061,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 76,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2062,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2063,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2064,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 70,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2065,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2066,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2067,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2068,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2069,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2070,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2071,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2072,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 75,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2073,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 90,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2074,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2075,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2076,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2077,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 87,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2078,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 87,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2079,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 83,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2080,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 71,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2081,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2082,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2083,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2084,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 72,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2085,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 79,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2086,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 77,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2087,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 80,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2088,
    engines: [
      {
        slug: "18-litre-hibrit-otomatik",
        name: "1.8 Litre Hibrit (Otomatik)",
        fuelType: "Hibrit",
        transmission: "Otomatik",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2089,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2090,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 74,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2091,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 73,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2092,
    engines: [
      {
        slug: "elektrikli-motor-otomatik",
        name: "Elektrikli Motor (Otomatik)",
        fuelType: "Elektrik",
        transmission: "Otomatik",
        score: 78,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2093,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 87,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 87,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2094,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 89,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2095,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 82,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2096,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 85,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 88,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2097,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2098,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 83,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 83,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2099,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2100,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 86,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 89,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2101,
    engines: [
      {
        slug: "14-litre-benzin-otomatik",
        name: "1.4 Litre Benzinli (Otomatik)",
        fuelType: "Benzin",
        transmission: "Otomatik",
        score: 84,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 2102,
    engines: [
      {
        slug: "16-litre-dizel-otomatik",
        name: "1.6 Litre Dizel (Otomatik)",
        fuelType: "Dizel",
        transmission: "Otomatik",
        score: 81,
        chronicIssues: [
          {
            title: "Debriyaj/Kavrama Hassasiyeti",
            description:
              "Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 3001,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Peugeot 206 (1.4) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3002,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Peugeot 406 (2.0) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3003,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Opel Astra G (1.4 / 1.6) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3004,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Chevrolet Aveo (1.2) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3005,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Fiat Linea (1.4 / 1.3 M.jet) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3006,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Ford Fiesta (1.4) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3007,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Hyundai Accent Admire (1.3) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3008,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Renault Symbol (1.5 dCi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3009,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Fiat Linea (1.3 / 1.6 M.jet) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3010,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Mitsubishi Colt (1.3) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3011,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Renault Fluence (1.5 dCi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3012,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Opel Astra J Kasa (1.3 Dizel) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3013,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Renault Grand Scenic (1.5 dCi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3014,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Fiat Egea (1.3/1.6 M.jet, 1.4 Fire) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3015,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Ford Focus MK3 (1.6 TDCi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3016,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Citroen C4 (1.6 BlueHDi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3017,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Citroen C3 (1.2 Puretech) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3018,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Fiat Doblo (1.6 M.jet) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3019,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Renault Megane 4 (1.5 dCi) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3020,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Citroen C3 (1.2 Puretech) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3021,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Renault Clio 5 (1.0 TCe - Icon Paket) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3022,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Opel Insignia (1.6 Dizel) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3023,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Seat Leon (1.6 TDI) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3024,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Fiat Egea Sedan (1.6 Multijet Lounge) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3025,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Honda City (1.5 Executive) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3026,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Opel / Hyundai Corsa / i20 (1.2T / 1.0T) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3027,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Fiat Egea Cross (1.6 Multijet Otomatik) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3028,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Opel Astra K Kasa (1.6 Dizel Otomatik) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3029,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Opel Corsa (1.2 Turbo Otomatik) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3030,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Opel / Peugeot Astra / 308 (1.2 Puretech) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3031,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Citroen C4X (1.2 Turbo) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3032,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Ford Focus 4 (1.5 Dizel - Trend X) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3033,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Toyota Corolla (1.8 Hybrid - Dream) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3034,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Skoda Scala (1.0 TSI - Elite/Premium) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3035,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Dacia / Renault Duster / Megane 4 (1.3 TCe) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3036,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Seat / VW Arona / T-Cross (1.0 TSI) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3037,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Ford Puma (1.0 Titanium) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3038,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Toyota Corolla (1.5 Drive/Dream) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3039,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Citroen C3 Aircross (1.2 Plus) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3040,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "DS Automobiles DS 9 (1.6 Puretech) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3041,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Peugeot 508 GT (1.5 Dizel) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3042,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description: "Skoda Octavia (1.5 e-TEC) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3043,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "Volkswagen Passat Variant B9 (1.5 eTSI) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 3044,
    engines: [
      {
        name: "Standart Motor",
        slug: "standart-motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: Math.floor(Math.random() * 20) + 70,
        description:
          "DS Automobiles DS 7 Crossback (1.5 Dizel) için standart motor seçeneği.",
        pros: ["Uygun maliyetli bakım"],
        cons: ["Performans sınırlı"],
        chronicIssues: [],
      },
    ],
  },
  {
    vehicleId: 4001,
    engines: [
      {
        slug: "standart-motor",
        name: "Standart Motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 60,
        description: "Bu araç için genel geçerli standart motor.",
        chronicIssues: [
          {
            title: "Genel Yağ Eksiltme",
            description: "Yaşına bağlı yağ eksiltme.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 4002,
    engines: [
      {
        slug: "standart-motor",
        name: "Standart Motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 60,
        description: "Bu araç için genel geçerli standart motor.",
        chronicIssues: [
          {
            title: "Genel Yağ Eksiltme",
            description: "Yaşına bağlı yağ eksiltme.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 4004,
    engines: [
      {
        slug: "standart-motor",
        name: "Standart Motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 60,
        description: "Bu araç için genel geçerli standart motor.",
        chronicIssues: [
          {
            title: "Genel Yağ Eksiltme",
            description: "Yaşına bağlı yağ eksiltme.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 4005,
    engines: [
      {
        slug: "standart-motor",
        name: "Standart Motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 60,
        description: "Bu araç için genel geçerli standart motor.",
        chronicIssues: [
          {
            title: "Genel Yağ Eksiltme",
            description: "Yaşına bağlı yağ eksiltme.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 4006,
    engines: [
      {
        slug: "standart-motor",
        name: "Standart Motor",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 60,
        description: "Bu araç için genel geçerli standart motor.",
        chronicIssues: [
          {
            title: "Genel Yağ Eksiltme",
            description: "Yaşına bağlı yağ eksiltme.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════
  // ▼ YENİ ARAÇLAR — Motor Verileri ▼
  // ═══════════════════════════════════════════════
  {
    vehicleId: 162,
    engines: [
      {
        slug: "18-hibrit-140-hp-e-cvt",
        name: "1.8 Hibrit 140 HP",
        fuelType: "Hibrit",
        transmission: "e-CVT",
        score: 90,
        description: "Toyota'nın 5. nesil hibrit sistemi. Sessiz, ekonomik ve kanıtlanmış güvenilirlik.",
        pros: [
          "Şehir içi 4-5 lt/100km tüketim mümkün",
          "Pürüzsüz ve sessiz sürüş deneyimi",
          "Bakım maliyetleri düşük (triger zincir, CVT bakımsız)"
        ],
        cons: [
          "Sportif sürüşte CVT'nin gürültüsü artıyor",
          "Tek motor seçeneği — alternatif yok"
        ],
        chronicIssues: [
          {
            title: "Düşük Hızda Motor Devreye Girme Gürültüsü",
            description: "Düşük akü seviyesinde benzin motorunun beklenmedik zamanlarda devreye girip kısa süreli gürültü yapması.",
            severity: "low",
            reportCount: 5,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 163,
    engines: [
      {
        slug: "15-dmi-phev-218-hp-e-cvt",
        name: "1.5 DM-i PHEV 218 HP",
        fuelType: "Hibrit",
        transmission: "e-CVT (Çift Motor)",
        score: 78,
        description: "BYD'nin DM-i (Dual Mode Intelligence) şarj edilebilir hibrit sistemi. 18.3 kWh batarya, ~80 km saf elektrik menzil.",
        pros: [
          "Düzenli şarjla günlük kullanımda neredeyse sıfır yakıt",
          "Hibrit modda bile 5-6 lt/100km",
          "218 HP kombinasyon güç yeterli performans"
        ],
        cons: [
          "Batarya boşaldıktan sonra benzin motoru biraz gürültülü",
          "AC şarj hızı sınırlı (3.3 kW)",
          "Uzun dönem güvenilirlik bilinmiyor"
        ],
        chronicIssues: [
          {
            title: "EV/HEV Mod Geçiş Sarsıntısı",
            description: "Elektrikten benzin motoruna geçiş anında nadiren hissedilen hafif sarsıntı. Yazılım güncellemeleri ile azaltılıyor.",
            severity: "low",
            reportCount: 8,
          },
          {
            title: "Batarya Şarj Yönetimi Uyarıları",
            description: "Aşırı sıcak veya soğuk havalarda batarya şarj hızının düşürülmesi ve bilgilendirme uyarıları.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 164,
    engines: [
      {
        slug: "14-mpi-100-hp-benzin-6at",
        name: "1.4 MPI 100 HP",
        fuelType: "Benzin",
        transmission: "Tam Otomatik (6AT)",
        score: 82,
        description: "Kappa 1.4 MPI atmosferik motor. Basit, güvenilir, LPG uyumlu. Tork konvertörlü 6AT şanzıman sorunsuz.",
        pros: [
          "LPG takılabilir (Fabrika garantisi korunur)",
          "Sorunsuz 6AT şanzıman (DCT yok)",
          "Bakım maliyetleri düşük"
        ],
        cons: [
          "100 HP otobanda yetersiz kalabilir",
          "Yakıt tüketimi T-GDI'ye göre yüksek"
        ],
        chronicIssues: [
          {
            title: "Yüksek Yakıt Tüketimi",
            description: "Şehir içi 8-9 lt/100km tüketim. Atmosferik motor+otomatik şanzıman kombinasyonu nedeniyle beklentilerin üzerinde.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
      {
        slug: "10-t-gdi-100-hp-benzin-dct",
        name: "1.0 T-GDI 100 HP",
        fuelType: "Benzin",
        transmission: "Çift Kavrama (DCT)",
        score: 70,
        description: "Kappa 1.0 T-GDI turbolu motor + 7 ileri DCT şanzıman. Düşük tüketim ama DCT problemleri mevcut.",
        pros: [
          "Şehir içi 5.5-6.5 lt/100km",
          "Düşük emisyon değerleri",
          "Canlı performans (turbo etkisi)"
        ],
        cons: [
          "DCT şanzıman ısınma ve titreme sorunu",
          "LPG takmak önerilmiyor (direkt enjeksiyon)",
          "Turbo bakım maliyetleri"
        ],
        chronicIssues: [
          {
            title: "DCT Kavrama Titremesi ve Isınma",
            description: "Dur-kalkta kavrama titremesi ve trafikte DCT ısınma uyarısı. Hyundai'nin bilinen DCT sorunu; yazılım güncellemeleri kısmen iyileştiriyor.",
            severity: "high",
            reportCount: 18,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 165,
    engines: [
      {
        slug: "10-ecoboost-125-hp-mhev-benzin-otomatik",
        name: "1.0 EcoBoost 125 HP mHEV",
        fuelType: "Hibrit",
        transmission: "7 İleri Powershift (DCT)",
        score: 78,
        description: "Ford'un 1.0 EcoBoost motoru hafif hibrit (48V) desteğiyle. Düşük tüketim ama triger kayışı bakımı kritik.",
        pros: [
          "5.5-6.5 lt/100km karma tüketim",
          "mHEV ile yumuşak start-stop ve torque fill",
          "Ödüllü EcoBoost motor mimarisi"
        ],
        cons: [
          "Triger kayışı (wet belt) 60.000 km'de değişim şart",
          "Powershift DCT düşük hızda titreme yapabilir"
        ],
        chronicIssues: [
          {
            title: "Triger Kayışı (Wet Belt) Bakım Zorunluluğu",
            description: "Yağ içinde çalışan triger kayışı 60.000 km'de mutlaka değiştirilmeli. İhmal edilirse kayış kopması ve motor hasarı riski çok yüksek.",
            severity: "high",
            reportCount: 14,
          },
          {
            title: "Powershift Titremesi",
            description: "1. ve 2. viteslerde düşük hızda vites geçişlerinde titreme. Kavrama adaptasyonu sıfırlama ve yazılım güncellemesi gerekebilir.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "10-ecoboost-155-hp-mhev-benzin-otomatik",
        name: "1.0 EcoBoost 155 HP mHEV",
        fuelType: "Hibrit",
        transmission: "7 İleri Powershift (DCT)",
        score: 80,
        description: "Daha güçlü EcoBoost versiyonu. ST-Line paketlerde tercih edilen performans odaklı seçenek.",
        pros: [
          "155 HP ile canlı ve eğlenceli performans",
          "Aynı verimli mHEV teknolojisi",
          "ST-Line ile sportif sürüş deneyimi"
        ],
        cons: [
          "Aynı triger kayışı riski mevcut",
          "Fiyat farkı yüksek"
        ],
        chronicIssues: [
          {
            title: "Triger Kayışı (Wet Belt) Bakım Zorunluluğu",
            description: "125 HP ile aynı motor ailesi — aynı triger kayışı riski. 60.000 km'de değişim şart.",
            severity: "high",
            reportCount: 12,
          },
        ],
      },
    ],
  },
  {
    vehicleId: 166,
    engines: [
      {
        slug: "12-puretech-75-hp-benzin-manuel",
        name: "1.2 PureTech 75 HP",
        fuelType: "Benzin",
        transmission: "Manuel (5 İleri)",
        score: 68,
        description: "PSA 1.2 PureTech atmosferik motor. Basit ve ekonomik ama triger kayışı riski mevcut.",
        pros: [
          "Düşük sigorta ve bakım maliyeti",
          "Sade ve öğrenmesi kolay manuel vites",
          "LPG takılabilir (atmosferik versiyon)"
        ],
        cons: [
          "75 HP şehirlerarası yetersiz",
          "Triger kayışı (wet belt) kopma riski",
          "Manuel vites dışında seçenek yok bu güçte"
        ],
        chronicIssues: [
          {
            title: "PureTech Triger Kayışı Kopması",
            description: "PSA grubunun bilinen sorunu. Yağ banyosunda çalışan triger kayışı 60.000 km'den önce kontrol ve değişim yapılmazsa motor hasarı riski. Stellantis geri çağırma kampanyası mevcut.",
            severity: "high",
            reportCount: 20,
          },
        ],
      },
      {
        slug: "12-puretech-100-hp-benzin-eat8",
        name: "1.2 PureTech 100 HP",
        fuelType: "Benzin",
        transmission: "Tam Otomatik (EAT8)",
        score: 74,
        description: "Turbolu 1.2 PureTech + Aisin 8 ileri tam otomatik şanzıman. Konforlu ama triger riski devam ediyor.",
        pros: [
          "EAT8 pürüzsüz ve konforlu",
          "Şehir içi 6-7 lt/100km",
          "8 ileri şanzıman sayesinde otobanda düşük devir"
        ],
        cons: [
          "Triger kayışı riski devam ediyor",
          "LPG takılması önerilmiyor (turbo + direkt enjeksiyon)"
        ],
        chronicIssues: [
          {
            title: "PureTech Triger Kayışı Kopması",
            description: "Aynı motor ailesi — aynı triger kayışı riski. 60.000 km'de kontrol ve değişim şart.",
            severity: "high",
            reportCount: 18,
          },
          {
            title: "EAT8 Şanzıman Sarsıntısı",
            description: "Soğuk havalarda ilk birkaç vites geçişinde hafif sarsıntı. Şanzıman yağı ısındıktan sonra düzeliyor.",
            severity: "low",
            reportCount: 5,
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // YENİ EKLENEN ARAÇLARIN MOTOR VERİLERİ (id: 1010-1029)
  // ══════════════════════════════════════════════════════════════════════

  // ─── Toyota Yaris 4. Nesil Hibrit (id: 1010) ───
  {
    vehicleId: 1010,
    engines: [
      {
        slug: "15-hybrid-116-hp-e-cvt",
        name: "1.5 Hybrid 116 HP",
        fuelType: "Hibrit",
        transmission: "e-CVT (Sürekli Değişken)",
        score: 88,
        description: "Toyota'nın 4. nesil hibrit sistemi. 1.5 litre 3 silindirli Atkinson çevrim benzinli motor + elektrik motoru kombinasyonu. Şehir içinde %80'e varan elektrikli sürüş oranı ile 3.5-4.5 lt/100km tüketim sağlıyor.",
        pros: [
          "Şehir içi tüketim 3.5-4.5 lt/100km (gerçek dünya verisi)",
          "V-kayışı, marş motoru, alternatör yok — düşük bakım maliyeti",
          "Toyota'nın kanıtlanmış hibrit güvenilirliği"
        ],
        cons: [
          "Otobanda hibrit avantajı azalır (6-7 lt/100km)",
          "3 silindirli motor yüksek devirlerde sert seslenir",
          "CVT karakter — sportif sürüş beklenmemeli"
        ],
        chronicIssues: [
          {
            title: "12V Akü Boşalması",
            description: "Uzun süre park edilen araçlarda 12V akü boşalarak 'Ready' moduna geçişi engelleyebiliyor. Fabrikasyon akü ömrü 2-3 yıl ile sınırlı kalabiliyor.",
            severity: "medium",
            reportCount: 12,
          },
          {
            title: "Hibrit Batarya Soğutma Fanı Tozlanması",
            description: "Arka koltuk altındaki soğutma fanının tozlanması invertör ısınma uyarılarına neden olabiliyor. Periyodik temizlik gerekli.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },

  // ─── Toyota Yaris 3. Nesil (id: 1011) ───
  {
    vehicleId: 1011,
    engines: [
      {
        slug: "133-dual-vvt-i-99-hp-mmt-manuel",
        name: "1.33 Dual VVT-i 99 HP",
        fuelType: "Benzin",
        transmission: "Manuel / MMT",
        score: 72,
        description: "Atmosferik 1.33 litre 4 silindirli Dual VVT-i motor. Güvenilir ve basit mekanik yapı. MMT şanzımanlı versiyonlarda baskı balata ömrü kısa olabiliyor.",
        pros: [
          "Atmosferik yapı — turbo riski yok",
          "Toyota güvenilirlik geleneği",
          "LPG uyumluluğu iyi"
        ],
        cons: [
          "MMT şanzımanda baskı balata çabuk aşınır",
          "99 HP güç otobanda yetersiz kalabilir",
          "Motor sesi kabine fazla yansır"
        ],
        chronicIssues: [
          {
            title: "MMT Baskı Balata Erken Aşınması",
            description: "MMT şanzımanlarda baskı balata ömrü 40.000-60.000 km ile sınırlı kalabiliyor. Sıkışık trafikte bu süre daha da kısalır.",
            severity: "high",
            reportCount: 14,
          },
          {
            title: "Motor Takoz Aşınması",
            description: "Motor takozlarının aşınması ile rölantide kabin titreşimi artıyor.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "14-d4d-90-hp-dizel-manuel",
        name: "1.4 D-4D 90 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 65,
        description: "1.4 litre turbolu dizel motor. Ekonomik ama bakım hassasiyeti yüksek. Şehir içi kullanımda EGR/DPF tıkanma riski belirgin.",
        pros: [
          "Yakıt ekonomisi (4-5 lt/100km şehir dışı)",
          "Düşük devirde iyi tork",
          "Uzun yol kullanımında verimli"
        ],
        cons: [
          "Şehir içi kullanımda DPF tıkanıyor",
          "EGR valfi sık bakım gerektiriyor",
          "Enjektör geri dönüş kaçağı riski"
        ],
        chronicIssues: [
          {
            title: "EGR Valfi Tıkanıklığı",
            description: "Şehir içi kullanımda EGR valfi kurum bağlayarak motor arıza ışığına neden oluyor.",
            severity: "high",
            reportCount: 11,
          },
          {
            title: "DPF Dolumu ve Rejenerasyon Sorunu",
            description: "Kısa mesafe kullanımda DPF rejenerasyon yapamıyor ve araç güç moduna geçiyor.",
            severity: "high",
            reportCount: 10,
          },
        ],
      },
    ],
  },

  // ─── Renault Megane 3 (id: 1012) ───
  {
    vehicleId: 1012,
    engines: [
      {
        slug: "15-dci-110-hp-edc-manuel",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 75,
        description: "Efsanevi K9K motor ailesi. Ekonomik ve güçlü ama EDC şanzımanla eşlendiğinde şanzıman güvenilirlik riski artıyor. Manuel şanzımanlı modeller çok daha güvenilir.",
        pros: [
          "K9K motor kanıtlanmış dayanıklılık",
          "4.5-5.5 lt/100km gerçek dünya tüketimi",
          "Manuel versiyonda çok düşük arıza oranı"
        ],
        cons: [
          "EDC şanzıman kavrama/mekatronik riski",
          "Enjektör hassasiyeti (kalitesiz yakıt)",
          "Turbo bakımı düzenli yapılmazsa boşluk riski"
        ],
        chronicIssues: [
          {
            title: "EDC Şanzıman Sarsıntısı",
            description: "Çift kavramalı EDC şanzımanda 1→2 ve 3→4 geçişlerde sarsıntı. 'Vites kutusunu kontrol ettirin' hatası. Kavrama seti veya mekatronik onarım maliyeti 15.000-40.000₺.",
            severity: "high",
            reportCount: 16,
          },
          {
            title: "Enjektör Aşınması",
            description: "Yüksek kilometreli araçlarda enjektör aşınması, rölanti titremi ve güç kaybı. Kalitesiz yakıt süreci hızlandırır.",
            severity: "high",
            reportCount: 13,
          },
          {
            title: "Turbo Arızası",
            description: "Yağ değişimi aksatılan araçlarda turbo boşluk yapması. Islık sesi ilk belirtidir.",
            severity: "high",
            reportCount: 10,
          },
        ],
      },
      {
        slug: "16-16v-110-hp-benzin-manuel",
        name: "1.6 16V 110 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 70,
        description: "Atmosferik 1.6 benzinli motor. Basit ve güvenilir yapı. LPG uyumluluğu iyi ama performans ve yakıt ekonomisi dizel versiyona göre geride.",
        pros: [
          "Atmosferik — turbo riski yok",
          "LPG takılabilir",
          "Bakım maliyeti düşük"
        ],
        cons: [
          "Yakıt tüketimi dizele göre yüksek (7-9 lt/100km)",
          "Performans yetersiz hissedilebilir",
          "Otomatik şanzıman seçeneği yok"
        ],
        chronicIssues: [
          {
            title: "Rölanti Dengesizliği ve Gaz Kelebeği Kirlenmesi",
            description: "Zamanla gaz kelebeği kirlenerek rölantide dalgalanma ve tekleme yapıyor. Temizlik ile çözülüyor.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },

  // ─── Fiat Grande Punto (id: 1013) ───
  {
    vehicleId: 1013,
    engines: [
      {
        slug: "13-multijet-75-90-hp-dizel-dualogic-manuel",
        name: "1.3 Multijet 75/90 HP",
        fuelType: "Dizel",
        transmission: "Manuel / Dualogic",
        score: 62,
        description: "Fiat'ın yaygın 1.3 Multijet dizel motoru. Ekonomik ama Dualogic şanzımanla eşlendiğinde güvenilirlik düşüyor. Manuel tercih edilmeli.",
        pros: [
          "Düşük yakıt tüketimi (4.5-5.5 lt/100km)",
          "Yaygın yedek parça",
          "Düşük devirde yeterli tork"
        ],
        cons: [
          "Dualogic şanzıman ciddi arıza riski",
          "EGR tıkanma riski (şehir içi)",
          "Turbo kanatçık problemi yüksek km'de"
        ],
        chronicIssues: [
          {
            title: "Dualogic Şanzıman Arızası",
            description: "Vites geçişlerinde vuruntu, 'N' konumunda takılma. Mekatronik ve robot bakımı düzenli yapılmazsa ciddi arıza çıkar.",
            severity: "high",
            reportCount: 14,
          },
          {
            title: "EGR Valfi Tıkanması",
            description: "Şehir içi kullanımda EGR valfi kurum bağlıyor. Temizlik veya değişim gerekiyor.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "14-8v-77-hp-benzin-manuel",
        name: "1.4 8V 77 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 68,
        description: "Basit ve güvenilir atmosferik benzinli motor. LPG'ye uygun. Ama 77 HP bu kasada güç yetersizliği hissettirebilir.",
        pros: [
          "Basit mekanik — bakımı ucuz",
          "LPG'ye çok uygun",
          "Düşük sigorta maliyeti"
        ],
        cons: [
          "77 HP güç yetersiz (özellikle AC açıkken)",
          "Yakıt tüketimi turbo dizele göre yüksek",
          "Ateşleme sistemi bakımı gerekli"
        ],
        chronicIssues: [
          {
            title: "Ateşleme Bobini Arızası",
            description: "Ateşleme bobinleri zamanla arızalanarak tekleme ve performans kaybına neden oluyor.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },

  // ─── Opel Astra H (id: 1014) ───
  {
    vehicleId: 1014,
    engines: [
      {
        slug: "13-cdti-90-hp-dizel-manuel",
        name: "1.3 CDTi 90 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 63,
        description: "Fiat 1.3 Multijet tabanlı küçük dizel motor. Ekonomik ama triger zinciri uzama riski ciddi. 80.000-120.000 km arasında zincir seti kontrolü şart.",
        pros: [
          "Çok ekonomik (4.5-5.5 lt/100km)",
          "Küçük silindir hacmi — düşük vergi",
          "Manuel şanzıman güvenilir"
        ],
        cons: [
          "Triger zinciri uzama riski (ciddi motor hasarı)",
          "EGR ve DPF tıkanma sorunu",
          "Turbo basınç kayıpları yüksek km'de"
        ],
        chronicIssues: [
          {
            title: "Triger Zinciri Uzaması",
            description: "Z13DTH motorda triger zinciri zamanla uzayarak ses yapıyor. İhmal edilirse zincir atlayıp motor ağır hasar görebilir. 80.000-120.000 km arasında değişim önerilir.",
            severity: "high",
            reportCount: 13,
          },
          {
            title: "EGR ve DPF Tıkanması",
            description: "Şehir içi kullanımda EGR kurum bağlar, DPF dolar. Motor arıza ışığı ve güç kaybı.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "16-16v-115-hp-benzin-manuel-otomatik",
        name: "1.6 16V 115 HP",
        fuelType: "Benzin",
        transmission: "Manuel / Otomatik",
        score: 72,
        description: "Z16XER kodlu atmosferik benzinli motor. Güvenilir ve LPG uyumlu. Yağ soğutucu kontasına dikkat edilmeli.",
        pros: [
          "Atmosferik yapı — basit ve güvenilir",
          "LPG'ye çok uygun",
          "Yedek parça bol ve ucuz"
        ],
        cons: [
          "Yağ soğutucu arızası riski",
          "Yakıt tüketimi şehir içinde yüksek (8-10 lt/100km)",
          "Gaz kelebeği kirlenmesi"
        ],
        chronicIssues: [
          {
            title: "Yağ Soğutucu Conta Arızası",
            description: "Yağ soğutucusundaki conta bozularak yağ ve su karışabilir. Yedek su deposunda kahverengi/sütlü görüntü alarm işaretidir.",
            severity: "high",
            reportCount: 15,
          },
          {
            title: "Rölanti Dengesizliği",
            description: "Gaz kelebeğinin kirlenmesi ve krank sensörü sorunları rölanti dalgalanmasına neden oluyor.",
            severity: "low",
            reportCount: 7,
          },
        ],
      },
    ],
  },

  // ─── Hyundai Accent Blue (id: 1015) ───
  {
    vehicleId: 1015,
    engines: [
      {
        slug: "16-crdi-128-hp-dct-manuel",
        name: "1.6 CRDi 128 HP",
        fuelType: "Dizel",
        transmission: "Manuel / 7 DCT",
        score: 68,
        description: "Performanslı ve ekonomik dizel motor. Manuel versiyonda güvenilir ama 7 ileri DCT şanzımanda kavrama ve volan sorunları ciddi risk oluşturuyor.",
        pros: [
          "128 HP / 260 Nm — sınıfında güçlü",
          "Manuel versiyonda 4.5-5.5 lt/100km",
          "Otobanda rahat performans"
        ],
        cons: [
          "DCT şanzımanda kavrama/volan riski (yüksek maliyet)",
          "EGR ve DPF bakımı düzenli olmalı",
          "Enjektör hassasiyeti yüksek km'de"
        ],
        chronicIssues: [
          {
            title: "DCT Kavrama ve Volan Arızası",
            description: "7 ileri DCT şanzımanda kavrama ve volan kaynaklı vuruntu, titreme. 40.000 km'de bile volan değişimi gerekebiliyor. Ciddi masraf kalemi.",
            severity: "high",
            reportCount: 16,
          },
          {
            title: "EGR Valfi Tıkanması",
            description: "Şehir içi kullanımda EGR valfi kurum bağlıyor. Motor arıza ışığı ve çekiş düşüklüğü.",
            severity: "medium",
            reportCount: 10,
          },
        ],
      },
      {
        slug: "14-cvvt-100-hp-benzin-otomatik-manuel",
        name: "1.4 CVVT 100 HP",
        fuelType: "Benzin",
        transmission: "Manuel / 4AT",
        score: 70,
        description: "Atmosferik 1.4 benzinli motor. Basit ve güvenilir. 4 ileri otomatik şanzıman teknolojik olarak eski ama dayanıklı.",
        pros: [
          "Basit atmosferik yapı",
          "LPG'ye uygun",
          "4AT şanzıman dayanıklı (DCT riski yok)"
        ],
        cons: [
          "100 HP güç sınırlı",
          "4AT eski teknoloji (yakıt tüketimi artar)",
          "Ateşleme sistemi bakımı gerekli"
        ],
        chronicIssues: [
          {
            title: "Ateşleme Bobini ve Buji Sorunu",
            description: "Ateşleme bobini ve buji arızaları rölanti dalgalanmasına ve performans kaybına neden oluyor.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
    ],
  },

  // ─── Skoda Fabia 3. Nesil (id: 1016) ───
  {
    vehicleId: 1016,
    engines: [
      {
        slug: "10-tsi-95-110-hp-dsg-manuel",
        name: "1.0 TSI 95/110 HP",
        fuelType: "Benzin",
        transmission: "Manuel / 7 DSG",
        score: 78,
        description: "EA211 Evo motor ailesi. Yeni nesil 1.0 TSI üç silindirli turbo. DSG ile performans odaklı, manuel ile ekonomi odaklı. Eski 1.2 TSI'daki zincir sorunu bu motorda çözülmüştür.",
        pros: [
          "EA211 Evo — eski 1.2 TSI zincir sorunu yok",
          "Manuel ile 5 lt/100km tüketim",
          "Sınıfına göre sportif hissiyat"
        ],
        cons: [
          "DSG şanzıman mekatronik/kavrama riski devam ediyor",
          "3 silindirli rölanti titreşimi mevcut",
          "Motor takozu aşınması zamanla artar"
        ],
        chronicIssues: [
          {
            title: "DSG (DQ200) Mekatronik Arızası",
            description: "Kuru kavramalı 7 DSG şanzımanda mekatronik ünite ve kavrama sorunları. Sarsıntı, acil işletim modu ve yüksek onarım maliyeti.",
            severity: "high",
            reportCount: 13,
          },
        ],
      },
      {
        slug: "12-tsi-90-hp-dsg-manuel-ea111",
        name: "1.2 TSI 90 HP (EA111)",
        fuelType: "Benzin",
        transmission: "Manuel / 7 DSG",
        score: 58,
        description: "ESKİ NESİL EA111 kodlu 1.2 TSI motor. Zamanlama zinciri uzama riski nedeniyle dikkatli olunmalı. 2014-2015 model yıllarında bu motor kullanılmıştır.",
        pros: [
          "Yeterli performans (90 HP)",
          "Ekonomik tüketim"
        ],
        cons: [
          "Zamanlama zinciri uzama riski (motor hasarı!)",
          "Plastik gergi mekanizması zayıf",
          "Soğuk çalıştırmada şıkırtı sesi alarm işareti"
        ],
        chronicIssues: [
          {
            title: "Zamanlama Zinciri Uzaması (EA111)",
            description: "Plastik gergi mekanizması ve zamanlama zinciri erken aşınıyor. Soğuk çalıştırmada metalik şıkırtı duyuluyorsa acil müdahale gerekir. Zincir atlama = motor hasarı.",
            severity: "high",
            reportCount: 11,
          },
        ],
      },
    ],
  },

  // ─── Seat Ibiza 5. Nesil (id: 1017) ───
  {
    vehicleId: 1017,
    engines: [
      {
        slug: "10-ecotsi-95-110-hp-dsg-manuel",
        name: "1.0 EcoTSI 95/110 HP",
        fuelType: "Benzin",
        transmission: "Manuel / 7 DSG",
        score: 77,
        description: "VW Grubu EA211 Evo 1.0 litre 3 silindirli turbo motor. Fabia ile aynı motor ailesi. Sportif sürüş ile ekonomiyi dengeleyen başarılı bir motor.",
        pros: [
          "Manuel ile 5 lt/100km gerçek dünya tüketimi",
          "Sportif karakter (özellikle 110 HP versiyonu)",
          "EA211 Evo güvenilirliği"
        ],
        cons: [
          "3 silindirli rölanti titreşimi",
          "DSG şanzıman kavrama/mekatronik riski",
          "Supap arkası karbon birikimi riski"
        ],
        chronicIssues: [
          {
            title: "Supap Arkası Karbon Birikimi",
            description: "Doğrudan enjeksiyonlu TSI motorlarda supap arkalarında karbon birikmesi. Rölanti düzensizliği ve performans kaybı. Ceviz kabuğu kumlama gerekebilir.",
            severity: "medium",
            reportCount: 6,
          },
          {
            title: "Motor Takozu Aşınması",
            description: "3 silindirli doğası gereği motor takozları zamanla aşınarak kabin titreşimi artıyor.",
            severity: "medium",
            reportCount: 10,
          },
        ],
      },
    ],
  },

  // ─── Nissan Juke F15 (id: 1018) ───
  {
    vehicleId: 1018,
    engines: [
      {
        slug: "12-dig-t-115-hp-cvt-manuel",
        name: "1.2 DIG-T 115 HP",
        fuelType: "Benzin",
        transmission: "Manuel / CVT (Xtronic)",
        score: 45,
        description: "⚠️ DİKKAT: Bu motor ciddi güvenilirlik riski taşır. Yağ eksiltme sorunu ve triger zinciri erken uzaması ile tanınır. İkinci el alırken bu motor seçeneğinden uzak durulması veya çok detaylı ekspertiz yaptırılması şiddetle önerilir.",
        pros: [
          "115 HP kompakt SUV'da yeterli performans",
          "Turbo benzinli — dinamik sürüş"
        ],
        cons: [
          "CİDDİ yağ eksiltme sorunu",
          "Triger zinciri erken uzama riski (motor hasarı!)",
          "CVT şanzıman bakım hassasiyeti",
          "Bu motor seçeneği ile ikinci el alırken çok dikkatli olunmalı"
        ],
        chronicIssues: [
          {
            title: "Yağ Eksiltme ve Motor Hasarı Riski",
            description: "1.2 DIG-T motorda aşırı yağ tüketimi. Yağ seviyesi düzenli kontrol edilmezse motor kuru çalışarak hasar görebilir. Juke F15'in en ciddi sorunu.",
            severity: "high",
            reportCount: 17,
          },
          {
            title: "Triger Zinciri Uzaması",
            description: "Triger zincirinin erken uzayarak sente atlatması. Motor hasarına kadar gidebilen ciddi bir risk.",
            severity: "high",
            reportCount: 12,
          },
        ],
      },
      {
        slug: "15-dci-110-hp-dizel-manuel",
        name: "1.5 dCi 110 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 74,
        description: "Renault'dan alınan K9K motor. 1.2 DIG-T'ye göre çok daha güvenilir. Ekonomik ve yeterli performanslı. DPF bakımına dikkat edilmeli.",
        pros: [
          "K9K motor kanıtlanmış güvenilirlik",
          "Ekonomik tüketim (5-6 lt/100km)",
          "Manuel şanzıman dayanıklı"
        ],
        cons: [
          "Şehir içi kullanımda DPF tıkanma riski",
          "EGR bakımı düzenli yapılmalı"
        ],
        chronicIssues: [
          {
            title: "DPF Tıkanması",
            description: "Ağırlıklı şehir içi kullanımda DPF dolarak motor arıza ışığı yakıyor. Uzun yol kullanımı gerekli.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },

  // ─── Honda HR-V 2. Nesil (id: 1019) ───
  {
    vehicleId: 1019,
    engines: [
      {
        slug: "15-i-vtec-130-hp-cvt-manuel",
        name: "1.5 i-VTEC 130 HP",
        fuelType: "Benzin",
        transmission: "Manuel / CVT",
        score: 79,
        description: "Honda'nın kanıtlanmış 1.5 i-VTEC atmosferik motoru. Güvenilir ve dayanıklı. CVT şanzımanla ekonomik, manuel ile sportif.",
        pros: [
          "Honda i-VTEC güvenilirlik geleneği",
          "Atmosferik — turbo riski yok",
          "CVT ile ekonomik tüketim (6-7 lt/100km)"
        ],
        cons: [
          "CVT karakter — sportif sürüş yetersiz",
          "130 HP SUV için sınırda",
          "LPG takılması önerilmez (CVT eşleşme sorunu)"
        ],
        chronicIssues: [
          {
            title: "Arka Süspansiyon Burç Aşınması",
            description: "Türkiye yol koşullarında arka burçlar çabuk aşınarak 'tok' sesler çıkarıyor. Burç değişimi gerekli.",
            severity: "medium",
            reportCount: 10,
          },
        ],
      },
    ],
  },

  // ─── Kia Picanto 3. Nesil (id: 1020) ───
  {
    vehicleId: 1020,
    engines: [
      {
        slug: "10-mpi-67-hp-manuel",
        name: "1.0 MPI 67 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 72,
        description: "Basit ve ekonomik atmosferik 3 silindirli motor. Şehir içi kullanım için ideal. Otobanda güç yetersiz kalabilir.",
        pros: [
          "Çok düşük yakıt tüketimi (4-5 lt/100km)",
          "Basit mekanik — bakımı ucuz",
          "Sigorta ve vergi maliyeti çok düşük"
        ],
        cons: [
          "67 HP otobanda çok yetersiz",
          "Klimayı açınca güç belirgin düşer",
          "3 silindirli rölanti titreşimi"
        ],
        chronicIssues: [
          {
            title: "Soğuk Havada Marş Sorunu",
            description: "Fabrikasyon akülerin kışın yetersiz kalarak marş basmama sorunu. Akü değişimi ile çözülüyor.",
            severity: "medium",
            reportCount: 8,
          },
        ],
      },
      {
        slug: "12-mpi-84-hp-amt-manuel",
        name: "1.2 MPI 84 HP",
        fuelType: "Benzin",
        transmission: "Manuel / AMT",
        score: 74,
        description: "4 silindirli 1.2 atmosferik motor. 1.0'a göre daha rahat performans. AMT şanzıman robotize yapıda olduğu için geçişlerde hafif hissettirme olabilir.",
        pros: [
          "4 silindirli — 3 silindire göre daha az titreşim",
          "84 HP şehir içinde yeterli",
          "LPG'ye uygun"
        ],
        cons: [
          "AMT şanzıman vites geçişlerinde hissettiriyor",
          "Otobanda hala güç yetersiz kalabilir"
        ],
        chronicIssues: [
          {
            title: "Dokunmatik Ekran Arızası",
            description: "2020-2023 modellerde ekran tepkisizliği veya 'hayalet dokunuş' sorunu. Yazılım güncelleme veya ekran değişimi.",
            severity: "medium",
            reportCount: 12,
          },
        ],
      },
    ],
  },

  // ─── Hyundai i10 3. Nesil (id: 1021) ───
  {
    vehicleId: 1021,
    engines: [
      {
        slug: "10-mpi-67-hp-manuel-amt",
        name: "1.0 MPI 67 HP",
        fuelType: "Benzin",
        transmission: "Manuel / AMT",
        score: 71,
        description: "Kappa motor ailesi. 3 silindirli atmosferik. Picanto ile aynı platform. Basit ve ekonomik.",
        pros: [
          "Çok düşük tüketim",
          "Basit mekanik",
          "Düşük işletme maliyeti"
        ],
        cons: [
          "67 HP çok sınırlı",
          "AMT geçişlerde hissettiriyor",
          "3 silindirli titreşim"
        ],
        chronicIssues: [
          {
            title: "Katalizör Bozulması",
            description: "Ateşleme sistemi kaynaklı sorunlar katalizörün aşırı ısınarak iç yapısının dağılmasına yol açabiliyor.",
            severity: "high",
            reportCount: 9,
          },
        ],
      },
      {
        slug: "12-mpi-84-hp-manuel-amt",
        name: "1.2 MPI 84 HP",
        fuelType: "Benzin",
        transmission: "Manuel / AMT",
        score: 74,
        description: "4 silindirli 1.2 Kappa motor. Daha dengeli performans ve düşük titreşim. A segmentinde rahat bir sürüş deneyimi.",
        pros: [
          "4 silindirli — düşük titreşim",
          "84 HP şehir içinde yeterli",
          "LPG'ye uygun"
        ],
        cons: [
          "AMT geçişlerde hafif hissettirme",
          "Otobanda sınırlı"
        ],
        chronicIssues: [
          {
            title: "Şanzıman Keçe Yağ Sızıntısı",
            description: "Manuel şanzımanda keçelerden yağ sızıntısı. Keçe değişimi ile çözülüyor ama tekrarlayabiliyor.",
            severity: "medium",
            reportCount: 6,
          },
        ],
      },
    ],
  },

  // ─── Volkswagen Jetta 6. Nesil (id: 1022) ───
  {
    vehicleId: 1022,
    engines: [
      {
        slug: "12-tsi-105-hp-dsg-manuel",
        name: "1.2 TSI 105 HP",
        fuelType: "Benzin",
        transmission: "Manuel / 7 DSG",
        score: 65,
        description: "EA111 (eski) ve EA211 (yeni) kodlu 1.2 TSI motor. 2014 öncesi üretim EA111 kodlu versiyonlarda zamanlama zinciri riski mevcut. EA211'de bu sorun çözülmüştür.",
        pros: [
          "Ekonomik tüketim (5.5-7 lt/100km)",
          "EA211 versiyonunda zincir sorunu yok",
          "Sedan kasada yeterli performans"
        ],
        cons: [
          "EA111 versiyonunda zincir uzama riski!",
          "DSG mekatronik/kavrama riski",
          "Sedan kasaya göre motor güçsüz kalabilir"
        ],
        chronicIssues: [
          {
            title: "EA111 Zamanlama Zinciri",
            description: "2011-2014 üretim yıllarında EA111 kodlu motorda zamanlama zinciri ve plastik gergi erken aşınır. Motor hasarı riski.",
            severity: "high",
            reportCount: 11,
          },
          {
            title: "DSG Mekatronik Arızası",
            description: "7 ileri kuru kavramalı DSG şanzımanda mekatronik ünite ve kavrama sorunları.",
            severity: "high",
            reportCount: 14,
          },
        ],
      },
      {
        slug: "14-tsi-122-150-hp-dsg",
        name: "1.4 TSI 122/150 HP",
        fuelType: "Benzin",
        transmission: "7 DSG",
        score: 75,
        description: "EA211 kodlu 1.4 TSI motor. Jetta'nın en performanslı benzinli motoru. Aktif Silindir Yönetimi (ACT) bazı versiyonlarda mevcut.",
        pros: [
          "Yeterli performans ve esneklik",
          "ACT ile ekonomik sürüş mümkün",
          "EA211 güvenilirliği"
        ],
        cons: [
          "DSG şanzıman riski devam ediyor",
          "Yedek parça fiyatları yüksek",
          "Supap arkası karbon birikimi"
        ],
        chronicIssues: [
          {
            title: "DSG Kavrama Aşınması",
            description: "Kuru kavramalı DSG şanzımanda özellikle şehir içi yoğun kullanımda kavrama erken aşınabiliyor.",
            severity: "medium",
            reportCount: 10,
          },
        ],
      },
    ],
  },

  // ─── Renault Fluence (id: 1023) ───
  {
    vehicleId: 1023,
    engines: [
      {
        slug: "15-dci-90-110-hp-edc-manuel",
        name: "1.5 dCi 90/110 HP",
        fuelType: "Dizel",
        transmission: "Manuel / EDC",
        score: 68,
        description: "Megane 3 ile aynı K9K motor ve EDC şanzıman platformu. Aynı güvenilirlik profili. Manuel tercih daha güvenli.",
        pros: [
          "K9K motor ekonomisi (4.5-5.5 lt/100km)",
          "Manuel versiyonda güvenilir",
          "Yaygın yedek parça"
        ],
        cons: [
          "EDC şanzımanda Megane 3 ile aynı sorunlar",
          "Enjektör hassasiyeti yüksek km'de",
          "Turbo bakımı kritik"
        ],
        chronicIssues: [
          {
            title: "EDC Şanzıman Kavrama Arızası",
            description: "Megane 3 ile aynı EDC sorunları. Vites geçişlerinde sarsıntı ve 'Vites kutusunu kontrol ettirin' hatası.",
            severity: "high",
            reportCount: 14,
          },
          {
            title: "Enjektör Aşınması",
            description: "Yüksek km'de enjektör geri iadesinde sorun. Rölanti titremi ve soğuk çalıştırma zorluğu.",
            severity: "high",
            reportCount: 12,
          },
        ],
      },
    ],
  },

  // ─── Ford Fiesta Mk7.5 (id: 1024) ───
  {
    vehicleId: 1024,
    engines: [
      {
        slug: "10-ecoboost-100-125-hp-powershift-manuel",
        name: "1.0 EcoBoost 100/125 HP",
        fuelType: "Benzin",
        transmission: "Manuel / PowerShift",
        score: 65,
        description: "Yılın Motoru ödüllü 1.0 EcoBoost. Motor olarak başarılı ama PowerShift şanzımanla eşlendiğinde güvenilirlik ciddi düşüyor. Manuel tercih edilmeli.",
        pros: [
          "3x Yılın Motoru ödülü",
          "Manuel ile 5 lt/100km tüketim",
          "Sportif karakter"
        ],
        cons: [
          "PowerShift şanzıman CİDDİ arıza riski",
          "Soğutma sıvısı kaçağı riski (geri çağırma)",
          "3 silindirli titreşim mevcut"
        ],
        chronicIssues: [
          {
            title: "PowerShift (DPS6) Şanzıman Arızası",
            description: "Ford'un en büyük skandalı. Kuru kavramalı PowerShift şanzımanda titreme, sarsıntı, vuruntu ve ani güç kesintisi. Dünya genelinde milyonlarca geri çağırma.",
            severity: "high",
            reportCount: 18,
          },
          {
            title: "Soğutma Sıvısı Kaçağı",
            description: "1.0 EcoBoost motorlarda soğutma sıvısı kaçağı ve motor aşırı ısınma riski. Ford geri çağırma yapmıştır.",
            severity: "high",
            reportCount: 11,
          },
        ],
      },
    ],
  },

  // ─── Dacia Logan 3. Nesil (id: 1025) ───
  {
    vehicleId: 1025,
    engines: [
      {
        slug: "10-tce-90-hp-benzin-cvt-manuel",
        name: "1.0 TCe 90 HP",
        fuelType: "Benzin",
        transmission: "Manuel / CVT",
        score: 73,
        description: "Renault kaynaklı 1.0 litre 3 silindirli turbo motor. Logan'ın ana motor seçeneği. Ekonomik ama 3 silindirli titreşim mevcut.",
        pros: [
          "Turbo ile yeterli performans",
          "Ekonomik tüketim (5.5-6.5 lt/100km)",
          "LPG fabrika seçeneği mevcut"
        ],
        cons: [
          "3 silindirli rölanti titreşimi",
          "CVT karakter sportif değil",
          "Motor sesi kabin yalıtımı düşük olduğu için fazla gelir"
        ],
        chronicIssues: [
          {
            title: "Motor Sesleri ve Titreşim",
            description: "3 silindirli motorun doğası gereği rölantide titreşim. Motor takozu aşınmasıyla zamanla artar.",
            severity: "medium",
            reportCount: 7,
          },
        ],
      },
      {
        slug: "10-sce-65-hp-benzin-manuel",
        name: "1.0 SCe 65 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 62,
        description: "Atmosferik 1.0 litre 3 silindirli motor. En giriş seviyesi. Şehir içi kullanım için tasarlanmış, otobanda çok yetersiz.",
        pros: [
          "Çok düşük fiyat ve bakım maliyeti",
          "Basit mekanik — turbo yok",
          "Sigorta ve vergi çok düşük"
        ],
        cons: [
          "65 HP çok yetersiz (özellikle AC ile)",
          "Otobanda çok zorlanır",
          "Ses yalıtımı olmadığı için motor sesi çok fazla"
        ],
        chronicIssues: [
          {
            title: "Güç Yetersizliği ve Zorlanma",
            description: "65 HP bu kasa için sınırda. Klima açıkken veya yokuşlarda zorlanma belirgin. Mekanik bir arıza değil ama kullanıcı memnuniyetsizliği yüksek.",
            severity: "low",
            reportCount: 8,
          },
        ],
      },
    ],
  },

  // ─── Toyota Corolla 11. Nesil E170 (id: 1026) ───
  {
    vehicleId: 1026,
    engines: [
      {
        slug: "16-valvematic-132-hp-cvt-manuel",
        name: "1.6 Valvematic 132 HP",
        fuelType: "Benzin",
        transmission: "Manuel / CVT (Multidrive S)",
        score: 80,
        description: "Toyota'nın güvenilir 1.6 Valvematic motoru. Atmosferik yapı ile düşük bakım maliyeti. CVT şanzıman konforlu ama sportif değil.",
        pros: [
          "Toyota güvenilirliği — düşük arıza oranı",
          "Atmosferik yapı — turbo riski yok",
          "Manuel ile LPG'ye uygun"
        ],
        cons: [
          "CVT şanzıman sportif değil",
          "Yakıt tüketimi dizele göre yüksek (7-9 lt/100km)",
          "CVT'de lastik sesi etkisi"
        ],
        chronicIssues: [
          {
            title: "CVT Hızlanma Gecikmesi",
            description: "CVT doğası gereği ani hızlanmalarda devir yükselir ama hız gecikmeli gelir. Sportif sürüş arayanlar için hayal kırıklığı.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },

  // ─── Peugeot 301 (id: 1027) ───
  {
    vehicleId: 1027,
    engines: [
      {
        slug: "12-puretech-82-hp-benzin-manuel",
        name: "1.2 PureTech 82 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 58,
        description: "⚠️ PSA'nın EB2 1.2 PureTech motoru. Triger kayışı kopma riski ile tanınır. PSA geri çağırma kampanyası başlatmıştır. 60.000 km'de mutlaka kontrol şart.",
        pros: [
          "Ekonomik tüketim (5.5-6.5 lt/100km)",
          "Düşük vergi ve sigorta",
          "Basit yapı (turbo yok)"
        ],
        cons: [
          "TRİGER KAYIŞI KOPMA RİSKİ (motor hasarı!)",
          "82 HP sedan için sınırlı",
          "PSA geri çağırma kapsamında kontrol gerekli"
        ],
        chronicIssues: [
          {
            title: "Triger Kayışı Kopma Riski",
            description: "EB2 motor ailesinde triger kayışının beklenenden erken kopması. Motor hasarına kadar gidebilir. PSA geri çağırma kapsamında. 60.000 km'de kontrol ve değişim şart.",
            severity: "high",
            reportCount: 16,
          },
        ],
      },
      {
        slug: "16-bluehdi-100-hp-dizel-manuel",
        name: "1.6 BlueHDi 100 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 72,
        description: "PSA'nın güvenilir 1.6 BlueHDi dizel motoru. Ekonomik ve yeterli performanslı. DPF ve EGR bakımına dikkat edilmeli.",
        pros: [
          "Çok ekonomik (4-5 lt/100km)",
          "Yeterli tork (254 Nm)",
          "Uzun yol kullanımında verimli"
        ],
        cons: [
          "Şehir içi kullanımda DPF tıkanma riski",
          "EGR bakımı düzenli yapılmalı",
          "Yedek parça fiyatları ortalama üstü"
        ],
        chronicIssues: [
          {
            title: "DPF ve EGR Tıkanması",
            description: "Şehir içi kullanımda DPF dolması ve EGR tıkanması. Motor arıza ışığı ve güç modu. Uzun yol kullanımı ile DPF kendini temizleyebilir.",
            severity: "medium",
            reportCount: 10,
          },
        ],
      },
    ],
  },

  // ─── Citroen C-Elysée (id: 1028) ───
  {
    vehicleId: 1028,
    engines: [
      {
        slug: "12-puretech-82-hp-benzin-manuel",
        name: "1.2 PureTech 82 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 57,
        description: "Peugeot 301 ile aynı EB2 1.2 PureTech motor. Aynı triger kayışı kopma riski mevcut. PSA geri çağırma kapsamı.",
        pros: [
          "Ekonomik tüketim",
          "Düşük vergi",
          "Basit yapı"
        ],
        cons: [
          "TRİGER KAYIŞI KOPMA RİSKİ",
          "82 HP güç sınırlı",
          "Geri çağırma kapsamında kontrol gerekli"
        ],
        chronicIssues: [
          {
            title: "Triger Kayışı Kopma Riski",
            description: "301 ile aynı motor — aynı triger kayışı riski. EB2 motor ailesinde 60.000 km kontrol şart. Kayış kopması motor hasarı demek.",
            severity: "high",
            reportCount: 15,
          },
        ],
      },
      {
        slug: "16-bluehdi-100-hp-dizel-manuel",
        name: "1.6 BlueHDi 100 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 71,
        description: "301 ile aynı 1.6 BlueHDi dizel. Ekonomik ve güvenilir. DPF/EGR bakımı önemli.",
        pros: [
          "Ekonomik dizel tüketim",
          "Yeterli tork",
          "Uzun yolda verimli"
        ],
        cons: [
          "DPF/EGR bakımı gerekli",
          "Şehir içi DPF dolma riski"
        ],
        chronicIssues: [
          {
            title: "EGR ve DPF Sorunları",
            description: "Şehir içi kullanımda EGR tıkanması ve DPF doluluk sorunları. Motor arıza ışığı ve güç kaybı.",
            severity: "medium",
            reportCount: 9,
          },
        ],
      },
    ],
  },

  // ─── Ford Tourneo Courier Yeni Nesil (id: 1029) ───
  {
    vehicleId: 1029,
    engines: [
      {
        slug: "10-ecoboost-125-hp-benzin-manuel",
        name: "1.0 EcoBoost 125 HP",
        fuelType: "Benzin",
        transmission: "Manuel",
        score: 74,
        description: "Ford'un ödüllü 1.0 EcoBoost motoru yeni Courier'da da kullanılıyor. Hafif ticari bir araç için yeterli performans. Soğutma sistemi takibi önemli.",
        pros: [
          "Yılın Motoru ödüllü EcoBoost",
          "125 HP yeterli performans",
          "Ekonomik tüketim"
        ],
        cons: [
          "EcoBoost soğutma hassasiyeti devam edebilir",
          "3 silindirli titreşim",
          "Yeni model — uzun vadeli güvenilirlik bilinmiyor"
        ],
        chronicIssues: [
          {
            title: "EcoBoost Soğutma Hassasiyeti",
            description: "Ford'un geçmiş EcoBoost modellerinde bilinen soğutma sistemi hassasiyeti. Yeni nesilde iyileştirme yapılsa da takip edilmeli.",
            severity: "medium",
            reportCount: 5,
          },
        ],
      },
      {
        slug: "15-ecoblue-100-hp-dizel-manuel",
        name: "1.5 EcoBlue 100 HP",
        fuelType: "Dizel",
        transmission: "Manuel",
        score: 77,
        description: "Ford'un yeni nesil 1.5 EcoBlue dizel motoru. Hafif ticari kullanım için ideal tork (250 Nm) ve ekonomi dengesi.",
        pros: [
          "Yeterli tork (250 Nm) — yüklü sürüşte rahat",
          "Ekonomik dizel tüketim (5-6 lt/100km)",
          "Yeni nesil — emisyon standartları güncel"
        ],
        cons: [
          "DPF/SCR bakımı gerekli",
          "AdBlue tüketimi maliyet ekliyor",
          "Yeni model — servis deneyimi sınırlı"
        ],
        chronicIssues: [
          {
            title: "SYNC 4 Yazılım Hataları",
            description: "Yeni SYNC 4 multimedya sisteminde yazılım hataları ve ekran donmaları. OTA güncelleme ile düzeltilmesi bekleniyor.",
            severity: "low",
            reportCount: 6,
          },
        ],
      },
    ],
  },
];
