export interface TrimLevel {
    name: string;
    availability: ('standard' | 'optional' | 'unavailable')[];
}

export interface VehicleTrimData {
    vehicleId: number;
    features: string[];
    trims: TrimLevel[];
}

export const trimDNAData: VehicleTrimData[] = [
    // ══════════════════════════════════════════════════════
    // Renault Clio 5. Nesil (2020-2025) — id: 1
    // Paketler: Equilibre → Evolution → Techno Esprit Alpine
    // Kaynak: Renault Türkiye resmi fiyat listesi & konfigüratör
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 1,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "7\" Dijital Gösterge Paneli",
            "9.3\" Multimedya & Kablosuz CarPlay",
            "Anahtarsız Giriş ve Çalıştırma",
            "Şerit Takip Asistanı",
            "Kör Nokta Uyarı Sistemi",
            "Cam Tavan"
        ],
        trims: [
            {
                name: "Equilibre",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Evolution",
                availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "optional"]
            },
            {
                name: "Techno Esprit Alpine",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Fiat Egea Sedan Makyajlı — id: 2
    // Paketler: Easy → Urban → Lounge → Limited
    // Kaynak: Fiat Türkiye resmi katalog & bayii listeleri
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 2,
        features: [
            "16\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "7\" Renkli TFT Gösterge Paneli",
            "10.25\" Tablet Ekran & CarPlay",
            "Kör Nokta Uyarı Sistemi",
            "Kablosuz Şarj",
            "Isıtmalı Ön Koltuklar",
            "Anahtarsız Giriş ve Çalıştırma"
        ],
        trims: [
            {
                name: "Easy",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Urban",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Lounge",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard"]
            },
            {
                name: "Limited",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Toyota Corolla 12. Nesil E210 (2019-2025) — id: 3
    // Paketler: Vision Plus → Dream → Flame → Passion X-Pack
    // Kaynak: Toyota Türkiye resmi fiyat listesi & broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 3,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "12.3\" Dijital Gösterge Paneli",
            "10.5\" Multimedya & CarPlay",
            "Kör Nokta Uyarı Sistemi",
            "Panoramik Cam Tavan",
            "Koltuk Isıtma",
            "Kablosuz Şarj"
        ],
        trims: [
            {
                name: "Vision Plus",
                availability: ["unavailable", "standard", "standard", "standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Dream",
                availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Flame",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "optional", "unavailable", "standard"]
            },
            {
                name: "Passion X-Pack",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Renault Megane 4 (2016-2022) — id: 4
    // Paketler: Joy → Touch → Icon
    // Kaynak: Renault Türkiye eski katalog & kullanıcı forumları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 4,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Pure Vision LED Farlar",
            "Geri Görüş Kamerası",
            "Hayalet Ekran (HUD)",
            "R-Link / Easy Link Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Cam Tavan",
            "Masajlı Sürücü Koltuğu"
        ],
        trims: [
            {
                name: "Joy",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Touch",
                availability: ["standard", "standard", "unavailable", "standard", "unavailable", "standard", "standard", "optional", "unavailable"]
            },
            {
                name: "Icon",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Honda Civic FC5 (2016-2021) — id: 5
    // Paketler: Elegance → Executive
    // Kaynak: Honda Türkiye resmi site & bayii bilgileri
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 5,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "7\" Dijital Gösterge",
            "Apple CarPlay / Android Auto",
            "Anahtarsız Giriş & Çalıştırma",
            "Sunroof",
            "Isıtmalı Deri Koltuklar"
        ],
        trims: [
            {
                name: "Elegance",
                availability: ["standard", "standard", "unavailable", "standard", "standard", "standard", "standard", "standard", "unavailable"]
            },
            {
                name: "Executive",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Volkswagen Golf 7 (2012-2020) — id: 6
    // Paketler: Comfortline → Highline → R-Line
    // Kaynak: VW Türkiye bayii & kullanıcı forumları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 6,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "12.3\" Digital Cockpit",
            "8\" Discover Pro Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Park Asistanı (Otomatik Park)",
            "Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Comfortline",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Highline",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard", "optional"]
            },
            {
                name: "R-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Dacia Duster (2018-2024) — id: 7
    // Paketler: Essential → Expression → Journey → Extreme
    // Kaynak: Dacia Türkiye resmi site & kullanıcı karşılaştırmaları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 7,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "Multimedya Ekran & CarPlay",
            "Kör Nokta Uyarı Sistemi",
            "Anahtarsız Giriş",
            "4x4 Çekiş (Motor opsiyonu)",
            "Koltuk Isıtma",
            "360 Derece Kamera"
        ],
        trims: [
            {
                name: "Essential",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "optional", "unavailable", "unavailable"]
            },
            {
                name: "Expression",
                availability: ["standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable", "optional", "unavailable", "unavailable"]
            },
            {
                name: "Journey",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "optional", "optional", "unavailable"]
            },
            {
                name: "Extreme",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Hyundai i20 3. Nesil BC3 (2020-2025) — id: 8
    // Paketler: Jump → Style → Elite
    // Kaynak: Hyundai Türkiye resmi fiyat listesi & broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 8,
        features: [
            "16\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Ön Farlar & Stoplar",
            "Geri Görüş Kamerası",
            "10.25\" Dijital Gösterge Paneli",
            "8\" Multimedya & Apple CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip & Çarpışma Önleme",
            "Hız Sabitleyici & Sınırlayıcı",
            "Sunroof"
        ],
        trims: [
            {
                name: "Jump",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "unavailable", "standard", "standard", "unavailable", "standard", "unavailable", "standard", "standard", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Peugeot 2008 2. Nesil P24 (2019-2025) — id: 9
    // Paketler: Active → Allure → GT
    // Kaynak: Peugeot Türkiye resmi site & broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 9,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "3D i-Cockpit Dijital Gösterge",
            "10\" Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı Sistemi",
            "Isıtmalı Direksiyon",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Active",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Allure",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable", "optional"]
            },
            {
                name: "GT",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Opel Astra K (2015-2021) — id: 10
    // Paketler: Enjoy → Dynamic → Excellence
    // Kaynak: Opel Türkiye resmi katalog
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 10,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "IntelliLux LED Matrix Farlar",
            "Geri Görüş Kamerası",
            "8\" Dijital Gösterge",
            "Navi 900 IntelliLink Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip Asistanı",
            "Isıtmalı Ön Koltuklar",
            "AGR Ergonomik Koltuk"
        ],
        trims: [
            {
                name: "Enjoy",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Dynamic",
                availability: ["standard", "standard", "unavailable", "standard", "standard", "standard", "standard", "standard", "optional", "unavailable"]
            },
            {
                name: "Excellence",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Togg T10X — id: 11
    // Paketler: Standart → İleri
    // Kaynak: Togg resmi web sitesi
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 11,
        features: [
            "19\" Alaşım Jantlar",
            "Çift Bölgeli Otomatik Klima",
            "Full LED Adaptif Farlar",
            "360° Kamera Sistemi",
            "12.3\" Dijital Gösterge",
            "12.3\" Multimedya & OTA Güncelleme",
            "Kablosuz Şarj",
            "Elektrikli Ön Koltuklar & Isıtma",
            "Head-Up Display",
            "ADAS Sürüş Destek Paketi"
        ],
        trims: [
            {
                name: "Standart Menzil",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "standard"]
            },
            {
                name: "Uzun Menzil",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Chery Omoda 5 (2023-2025) — id: 12
    // Paketler: Comfort → Premium
    // Kaynak: Chery Türkiye resmi site & bayii bilgileri
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 12,
        features: [
            "18\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Farlar",
            "360° Kamera Sistemi",
            "7\" Dijital Gösterge",
            "10.25\" Multimedya & CarPlay",
            "Kablosuz Şarj",
            "Elektrikli Bagaj Kapağı",
            "Panoramik Cam Tavan",
            "ADAS Sürüş Destek Paketi"
        ],
        trims: [
            {
                name: "Comfort",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Premium",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Volkswagen Polo AW 6. Nesil (2017-2025) — id: 13
    // Paketler: Comfortline → Highline → R-Line
    // Kaynak: VW Türkiye bayii & resmi konfigüratör
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 13,
        features: [
            "16\" Alaşım Jantlar",
            "Dijital Klima (Climatronic)",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "Digital Cockpit (Dijital Gösterge)",
            "8\" Discover Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip Asistanı",
            "Park Mesafe Kontrolü (Ön+Arka)",
            "Ambiyans Aydınlatma"
        ],
        trims: [
            {
                name: "Comfortline",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Highline",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"]
            },
            {
                name: "R-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Ford Focus 4. Nesil Mk4 (2018-2025) — id: 14
    // Paketler: Trend X → Titanium → ST-Line
    // Kaynak: Ford Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 14,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "12.3\" Dijital Gösterge",
            "13.2\" SYNC 4 Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Koruma & Kör Nokta Asistanı",
            "Isıtmalı Ön Koltuklar",
            "B&O Ses Sistemi"
        ],
        trims: [
            {
                name: "Trend X",
                availability: ["unavailable", "standard", "standard", "standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Titanium",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"]
            },
            {
                name: "ST-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // BMW 320i F30 (2012-2019) — id: 15
    // Paketler: Standart → Luxury Line → Sport Line → M Sport
    // Kaynak: BMW Türkiye resmi site & bayii bilgileri
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 15,
        features: [
            "18\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar (Adaptive)",
            "Geri Görüş Kamerası",
            "iDrive Multimedya & Nav Pro",
            "Deri Döşeme",
            "Harman/Kardon Ses Sistemi",
            "Head-Up Display",
            "Park Asistanı (Otopark)",
            "Sunroof"
        ],
        trims: [
            {
                name: "Standart",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "optional"]
            },
            {
                name: "Luxury Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional", "optional", "standard"]
            },
            {
                name: "M Sport",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional", "optional", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Mercedes-Benz C180 W205 (2014-2021) — id: 16
    // Paketler: Style → Avantgarde → AMG Line
    // Kaynak: Mercedes-Benz Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 16,
        features: [
            "18\" Alaşım Jantlar",
            "Thermatic Çift Bölgeli Klima",
            "Multibeam LED Farlar",
            "Geri Görüş Kamerası",
            "12.3\" Dijital Gösterge",
            "MBUX Multimedya & Nav",
            "Anahtarsız Giriş & Go",
            "ARTICO Deri Döşeme",
            "Burmester Ses Sistemi",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Style",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Avantgarde",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional"]
            },
            {
                name: "AMG Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Hyundai Tucson NX4 4. Nesil (2020-2025) — id: 19
    // Paketler: Smart → Style → Elite → Style+
    // Kaynak: Hyundai Türkiye resmi fiyat listesi
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 19,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar (Parametrik Tasarım)",
            "360° Kamera Sistemi",
            "10.25\" Dijital Gösterge",
            "10.25\" Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı & Güvenli Çıkış",
            "Isıtmalı Ön Koltuklar & Direksiyon",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Smart",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            },
            {
                name: "Style+",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Kia Sportage NQ5 5. Nesil (2021-2025) — id: 20
    // Paketler: Vision → Dream → GT-Line
    // Kaynak: Kia Türkiye resmi site & broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 20,
        features: [
            "18\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar (Gündüz Farı DRL)",
            "360° Kamera Sistemi",
            "12.3\" Dijital Gösterge",
            "12.3\" Multimedya & CarPlay",
            "Kablosuz Şarj",
            "Kör Nokta Uyarı & Güvenli Çıkış",
            "Ventilasyonlu (Soğutmalı) Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Vision",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Dream",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "optional"]
            },
            {
                name: "GT-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Peugeot 308 2. Nesil (2013-2021) — id: 21
    // Paketler: Active → Allure → GT Line
    // Kaynak: Peugeot Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 21,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "i-Cockpit Dijital Gösterge",
            "9.7\" Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı Sistemi",
            "Deri Direksiyon & Vites Topuzu",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Active",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Allure",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard", "optional"]
            },
            {
                name: "GT Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Skoda Octavia NX 4. Nesil (2020-2025) — id: 26
    // Paketler: Ambition → Style → L&K (Laurin & Klement)
    // Kaynak: Skoda Türkiye resmi site & broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 26,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar (Matrix)",
            "Geri Görüş Kamerası",
            "10.25\" Virtual Cockpit",
            "10\" Columbus Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Canton Ses Sistemi",
            "Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Ambition",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard", "optional"]
            },
            {
                name: "L&K",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Seat Leon KL 4. Nesil (2020-2025) — id: 29
    // Paketler: Style → Xcellence → FR
    // Kaynak: Seat Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 29,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "10.25\" Digital Cockpit",
            "10\" SEAT Connect Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip Asistanı",
            "Park Asistanı (Otopark)",
            "Beats Ses Sistemi"
        ],
        trims: [
            {
                name: "Style",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Xcellence",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "unavailable"]
            },
            {
                name: "FR",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Tesla Model Y (2020-2025) — id: 30
    // Paketler: Standart Menzil → Long Range → Performance
    // Kaynak: Tesla Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 30,
        features: [
            "20\" Alaşım Jantlar",
            "Dijital Klima (Heat Pump)",
            "Full LED Farlar (Adaptive)",
            "360° Kamera & Otopilot Kameraları",
            "15.4\" Dokunmatik Ekran",
            "Premium Bağlantı & OTA Güncelleme",
            "Kablosuz Şarj (Çift)",
            "Premium Ses Sistemi (14 Hoparlör)",
            "Elektrikli & Isıtmalı Tüm Koltuklar",
            "Cam Tavan (Standart)"
        ],
        trims: [
            {
                name: "Standart Menzil",
                availability: ["unavailable", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Long Range",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Performance",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Tofaş Şahin / Doğan (1988-2002) — id: 101
    // Paketler: Şahin → Şahin S → Doğan L → Doğan SLX
    // Kaynak: Tofaş arşiv & kullanıcı toplulukları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 101,
        features: [
            "Çelik Jant",
            "Sis Farı",
            "Renkli Camlar",
            "Gövde Rengi Tamponlar",
            "Hidrolik Direksiyon",
            "Klima",
            "Otomatik Ön Camlar",
            "Merkezi Kilit",
            "Kadife Koltuk Döşemesi"
        ],
        trims: [
            {
                name: "Şahin",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Şahin S",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Doğan L",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "standard", "standard", "standard"]
            },
            {
                name: "Doğan SLX",
                availability: ["standard", "standard", "standard", "standard", "standard", "optional", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Fiat Linea (2007-2015) — id: 102
    // Paketler: Active → Active Plus → Emotion → Lounge
    // Kaynak: Fiat arşiv & ikinci el platformları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 102,
        features: [
            "15\" Alaşım Jantlar",
            "Manuel / Dijital Klima",
            "Sis Farları",
            "Park Sensörleri",
            "Blue&Me Multimedya",
            "Deri Direksiyon",
            "Elektrikli Aynalar (Isıtmalı)",
            "Hız Sabitleyici",
            "Koltuk Yükseklik Ayarı"
        ],
        trims: [
            {
                name: "Active",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Active Plus",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Emotion",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Lounge",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Renault Symbol (2013-2021) — id: 103
    // Paketler: Joy → Touch → Icon
    // Kaynak: Renault Türkiye arşiv
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 103,
        features: [
            "15\" Alaşım Jantlar",
            "Manuel / Dijital Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "7\" Multimedya Ekran",
            "Bluetooth & USB",
            "Hız Sınırlayıcı",
            "Yokuş Kalkış Desteği",
            "Elektrikli Ön Camlar (4'lü)"
        ],
        trims: [
            {
                name: "Joy",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "standard", "standard", "unavailable"]
            },
            {
                name: "Touch",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Icon",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Hyundai Accent Era (2006-2012) — id: 104
    // Paketler: Team → Select → Prime
    // Kaynak: Hyundai arşiv & ikinci el platformları
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 104,
        features: [
            "14\" Alaşım Jantlar",
            "Klima",
            "Sis Farları",
            "Merkezi Kilit (Uzaktan Kumanda)",
            "CD Çalar & AUX",
            "Deri Direksiyon",
            "Elektrikli Aynalar",
            "ABS & Çift Airbag",
            "Yol Bilgisayarı"
        ],
        trims: [
            {
                name: "Team",
                availability: ["unavailable", "unavailable", "unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Select",
                availability: ["unavailable", "standard", "standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable"]
            },
            {
                name: "Prime",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Volkswagen Golf 7 (2012-2020) — id: 122
    // Paketler: Comfortline → Highline → R-Line
    // (Farklı vehicleId altında tekrar — 122 doğru ID)
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 122,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "12.3\" Digital Cockpit",
            "8\" Discover Pro Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Park Asistanı (Otomatik Park)",
            "Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Comfortline",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Highline",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard", "optional"]
            },
            {
                name: "R-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Dacia Duster (2010-2024) — id: 123
    // Paketler: Essential → Expression → Journey → Extreme
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 123,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "Multimedya Ekran & CarPlay",
            "Kör Nokta Uyarı Sistemi",
            "Anahtarsız Giriş",
            "4x4 Çekiş (Motor opsiyonu)",
            "Koltuk Isıtma",
            "360 Derece Kamera"
        ],
        trims: [
            {
                name: "Essential",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "optional", "unavailable", "unavailable"]
            },
            {
                name: "Expression",
                availability: ["standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable", "optional", "unavailable", "unavailable"]
            },
            {
                name: "Journey",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "optional", "optional", "unavailable"]
            },
            {
                name: "Extreme",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Hyundai i20 2. Nesil GB (2014-2020) — id: 31
    // Paketler: Jump → Style → Elite
    // Kaynak: Hyundai Türkiye arşiv broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 31,
        features: [
            "15\" Alaşım Jantlar",
            "Manuel / Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "Süpervizyon Gösterge Paneli",
            "7\" Multimedya & Apple CarPlay",
            "Anahtarsız Giriş",
            "Şerit Takip Uyarı Sistemi",
            "Hız Sabitleyici",
            "Sunroof"
        ],
        trims: [
            {
                name: "Jump",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Hyundai i20 3. Nesil (2020-Günümüz) — id: 1004
    // Paketler: Jump → Style → Elite
    // Kaynak: Hyundai Türkiye resmi fiyat listesi 2024
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 1004,
        features: [
            "16\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Ön Farlar & Stoplar",
            "Geri Görüş Kamerası",
            "10.25\" Dijital Gösterge Paneli",
            "8\" Multimedya & Apple CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Hyundai SmartSense Güvenlik Paketi",
            "Hız Sabitleyici & Sınırlayıcı",
            "Sunroof"
        ],
        trims: [
            {
                name: "Jump",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "unavailable", "standard", "standard", "unavailable", "standard", "unavailable", "standard", "standard", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Audi A3 (2020-2025) — id: 1001
    // Paketler: Advanced → S line
    // Kaynak: Audi Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 1001,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar (Adaptif opsiyonel)",
            "Geri Görüş Kamerası",
            "Audi Virtual Cockpit (10.25\")",
            "10.1\" MMI Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Audi Pre Sense (Çarpışma Önleme)",
            "Park Asistanı (Arka Sensör)",
            "Ambiyans Aydınlatma"
        ],
        trims: [
            {
                name: "Advanced",
                availability: ["standard", "standard", "standard", "optional", "standard", "standard", "unavailable", "standard", "standard", "unavailable"]
            },
            {
                name: "S line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Citroen C4 X (2022-2025) — id: 25
    // Paketler: Feel → Shine → Shine Pack
    // Kaynak: Citroen Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 25,
        features: [
            "18\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "5.5\" Dijital Gösterge",
            "10\" Multimedya & Kablosuz CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip & Kör Nokta Uyarı",
            "Advanced Comfort Koltuklar",
            "Çift Renkli Gövde"
        ],
        trims: [
            {
                name: "Feel",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Shine",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            },
            {
                name: "Shine Pack",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Honda Civic 11. Nesil FL (2021-2025) — id: 118
    // Paketler: Elegance+ → Executive+
    // Kaynak: Honda Türkiye resmi site 2024
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 118,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası (Geniş Açı)",
            "10.2\" Dijital Gösterge",
            "9\" Multimedya & Kablosuz CarPlay",
            "Honda SENSING Güvenlik Paketi",
            "LaneWatch (Sağ Yan Ayna Kamerası)",
            "Deri Koltuk Döşemesi",
            "Ambiyans Aydınlatma"
        ],
        trims: [
            {
                name: "Elegance+",
                availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Executive+",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Nissan Qashqai J11 (2014-2021) — id: 18
    // Paketler: Visia → Acenta → Tekna
    // Kaynak: Nissan Türkiye resmi broşür
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 18,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar",
            "360° Kamera Sistemi",
            "7\" TFT Gösterge Paneli",
            "7\" NissanConnect Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip & Kör Nokta Uyarı",
            "Panoramik Cam Tavan",
            "Deri Koltuk Döşemesi"
        ],
        trims: [
            {
                name: "Visia",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Acenta",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Tekna",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Fiat Doblo 3. ve 4. Nesil (2010-2023) — id: 106
    // Paketler: Easy → Combi → Premio → Trekking
    // Kaynak: Fiat Türkiye arşiv
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 106,
        features: [
            "15\" Alaşım Jantlar",
            "Manuel / Dijital Klima",
            "Sis Farları",
            "Geri Park Sensörü",
            "5\" Multimedya Ekran",
            "Bluetooth & USB",
            "Sürgülü Kapı (Çift)",
            "Hız Sınırlayıcı",
            "3. Sıra Koltuk (7 Kişilik)"
        ],
        trims: [
            {
                name: "Easy",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Combi",
                availability: ["unavailable", "standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Premio",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            },
            {
                name: "Trekking",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Skoda Superb B8 3. Nesil (2015-2023) — id: 27
    // Paketler: Ambition → Style → L&K
    // Kaynak: Skoda Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 27,
        features: [
            "18\" Alaşım Jantlar",
            "3 Bölgeli Dijital Klima",
            "Full LED Farlar (Matrix)",
            "Geri Görüş Kamerası",
            "10.25\" Virtual Cockpit",
            "9.2\" Columbus Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Canton Ses Sistemi",
            "Elektrikli & Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Ambition",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard", "optional"]
            },
            {
                name: "L&K",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // Ford Tourneo Courier (2014-2023) — id: 108
    // Paketler: Deluxe → Titanium → Titanium Plus
    // Kaynak: Ford Türkiye resmi site
    // ══════════════════════════════════════════════════════
    {
        vehicleId: 108,
        features: [
            "15\" Alaşım Jantlar",
            "Manuel / Otomatik Klima",
            "Sis Farları",
            "Geri Görüş Kamerası",
            "6\" SYNC Multimedya",
            "Bluetooth & USB",
            "Hız Sabitleyici",
            "Park Sensörleri (Arka)",
            "Sürgülü Kapı (Çift)"
        ],
        trims: [
            {
                name: "Deluxe",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard"]
            },
            {
                name: "Titanium",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Titanium Plus",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // ▼ YENİ ARAÇLAR — Trim Verileri ▼
    // ══════════════════════════════════════════════════════

    // Toyota C-HR 2. Nesil (2024-2025) — id: 162
    // Paketler: Flame → Passion → Passion X-Sport → GR Sport
    {
        vehicleId: 162,
        features: [
            "18\" Alaşım Jantlar",
            "Çift Bölgeli Otomatik Klima",
            "Full LED Farlar (Adaptif)",
            "360° Kamera Sistemi",
            "12.3\" Dijital Gösterge",
            "12.3\" Multimedya & Kablosuz CarPlay",
            "JBL Premium Ses Sistemi",
            "Toyota Safety Sense 3 (Gelişmiş ADAS)",
            "Isıtmalı Direksiyon",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Flame",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Passion",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "standard", "unavailable", "standard"]
            },
            {
                name: "Passion X-Sport",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard", "unavailable", "optional"]
            },
            {
                name: "GR Sport",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // BYD Seal U DM-i (2024-2025) — id: 163
    // Paketler: Comfort → Design
    {
        vehicleId: 163,
        features: [
            "19\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "360° Kamera Sistemi",
            "15.6\" Döner Dokunmatik Ekran",
            "Kablosuz Şarj",
            "Havalandırmalı & Isıtmalı Ön Koltuklar",
            "V2L (Araçtan Cihaza Güç Aktarımı)",
            "AWD (Dört Tekerlekten Çekiş)",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Comfort (FWD)",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable", "standard"]
            },
            {
                name: "Design (AWD)",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Hyundai Bayon (2021-2025) — id: 164
    // Paketler: Jump → Style → Elite
    {
        vehicleId: 164,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Ön Farlar",
            "Geri Görüş Kamerası",
            "10.25\" Dijital Gösterge Paneli",
            "8\" Multimedya & Apple CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı Sistemi",
            "Kablosuz Şarj",
            "Ambiyans Aydınlatma"
        ],
        trims: [
            {
                name: "Jump",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "unavailable", "standard", "standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Ford Puma (2020-2025) — id: 165
    // Paketler: Titanium → ST-Line X
    {
        vehicleId: 165,
        features: [
            "19\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Matrix LED Farlar",
            "Geri Görüş Kamerası",
            "12.8\" Dijital Gösterge",
            "12\" SYNC 4 Multimedya & CarPlay",
            "Kablosuz Şarj",
            "B&O Premium Ses Sistemi",
            "Panoramik Cam Tavan",
            "MegaBox Bagaj (Suya Dayanıklı)"
        ],
        trims: [
            {
                name: "Titanium",
                availability: ["unavailable", "standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable", "standard"]
            },
            {
                name: "ST-Line X",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Opel Corsa F (2019-2025) — id: 166
    // Paketler: Edition → GS → Ultimate
    {
        vehicleId: 166,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "7\" Dijital Gösterge",
            "10\" Multimedya & CarPlay",
            "Anahtarsız Giriş",
            "Kör Nokta Uyarı Sistemi",
            "Isıtmalı Ön Koltuklar & Direksiyon",
            "Siyah Tavan (Bi-Tone)"
        ],
        trims: [
            {
                name: "Edition",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "GS",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard", "standard", "standard"]
            },
            {
                name: "Ultimate",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════
    // ▼ MEVCUT ARAÇLAR — Eksik Trim Verileri ▼
    // ══════════════════════════════════════════════════════

    // Dacia Sandero Stepway (2021-2025) — id: 109
    // Paketler: Essential → Expression → Extreme
    {
        vehicleId: 109,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "8\" Multimedya & CarPlay",
            "Anahtarsız Giriş",
            "Hız Sabitleyici & Sınırlayıcı",
            "ECO-G (Fabrika LPG) Seçeneği",
            "Koltuk Yükseklik Ayarı (Sürücü)"
        ],
        trims: [
            {
                name: "Essential",
                availability: ["unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "optional", "unavailable"]
            },
            {
                name: "Expression",
                availability: ["standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "standard", "optional", "standard"]
            },
            {
                name: "Extreme",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "standard"]
            }
        ]
    },

    // Renault Clio 4. Nesil (2012-2019) — id: 34
    // Paketler: Joy → Touch → Icon
    {
        vehicleId: 34,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "R-Link / MediaNav Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Hız Sınırlayıcı",
            "Ön Park Sensörleri",
            "Cam Tavan"
        ],
        trims: [
            {
                name: "Joy",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Touch",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "optional"]
            },
            {
                name: "Icon",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // Peugeot 208 2. Nesil (2019-2025) — id: 114
    // Paketler: Active → Allure → GT
    {
        vehicleId: 114,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar (Aslan Pençesi DRL)",
            "Geri Görüş Kamerası",
            "3D i-Cockpit Dijital Gösterge",
            "10\" Multimedya & Kablosuz CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Şerit Takip Asistanı",
            "Ambiyans Aydınlatma",
            "Çift Renkli Gövde"
        ],
        trims: [
            {
                name: "Active",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Allure",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "optional"]
            },
            {
                name: "GT",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Volkswagen Passat B8 (2015-2023) — id: 126
    // Paketler: Impression → Comfortline → Highline → R-Line
    {
        vehicleId: 126,
        features: [
            "18\" Alaşım Jantlar",
            "3 Bölgeli Dijital Klima",
            "LED Farlar (IQ.Light Matrix)",
            "Geri Görüş Kamerası (360°)",
            "12.3\" Digital Cockpit",
            "9.2\" Discover Pro Multimedya",
            "Anahtarsız Giriş & Çalıştırma (Keyless)",
            "ACC (Adaptif Hız Sabitleyici)",
            "Massaj Fonksiyonu (Sürücü Koltuğu)",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Impression",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Comfortline",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Highline",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional"]
            },
            {
                name: "R-Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional", "optional"]
            }
        ]
    },

    // Ford Focus 3. Nesil (2011-2018) — id: 125
    // Paketler: Trend X → Titanium → Titanium X
    {
        vehicleId: 125,
        features: [
            "17\" Alaşım Jantlar",
            "Dijital Klima",
            "Bi-Xenon / LED Farlar",
            "Geri Görüş Kamerası",
            "8\" SYNC 2 Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Park Asistanı (Otomatik)",
            "Sony Premium Ses Sistemi",
            "Deri Koltuk Döşemesi",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Trend X",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Titanium",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable", "optional"]
            },
            {
                name: "Titanium X",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // Skoda Octavia A7 3. Nesil (2013-2020) — id: 110
    // Paketler: Ambition → Style → L&K
    {
        vehicleId: 110,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası",
            "Virtual Cockpit (Dijital Gösterge)",
            "8\" Columbus Multimedya",
            "Anahtarsız Giriş & Çalıştırma",
            "Canton Ses Sistemi",
            "Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Ambition",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard", "optional"]
            },
            {
                name: "L&K",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // Hyundai Tucson 3. Nesil TL (2015-2020) — id: 127
    // Paketler: Style → Elite → Elite Plus
    {
        vehicleId: 127,
        features: [
            "17\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "LED Farlar",
            "Geri Görüş Kamerası",
            "7\" Gösterge Paneli",
            "8\" Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı Sistemi",
            "Elektrikli Arka Bagaj Kapağı",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Style",
                availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"]
            },
            {
                name: "Elite Plus",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Peugeot 3008 2. Nesil P84 (2016-2023) — id: 124
    // Paketler: Active → Allure → GT Line → GT
    {
        vehicleId: 124,
        features: [
            "18\" Alaşım Jantlar",
            "Çift Bölgeli Dijital Klima",
            "Full LED Farlar",
            "360° Kamera Sistemi",
            "12.3\" i-Cockpit Dijital Gösterge",
            "8\" Multimedya & CarPlay",
            "Anahtarsız Giriş & Çalıştırma",
            "Kör Nokta Uyarı Sistemi",
            "Isıtmalı Ön Koltuklar",
            "Panoramik Cam Tavan"
        ],
        trims: [
            {
                name: "Active",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Allure",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "optional"]
            },
            {
                name: "GT Line",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            },
            {
                name: "GT",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Honda City 7. Nesil (2021-2025) — id: 23
    // Paketler: Elegance → Executive
    {
        vehicleId: 23,
        features: [
            "16\" Alaşım Jantlar",
            "Dijital Klima",
            "Full LED Farlar",
            "Geri Görüş Kamerası (Geniş Açı)",
            "7\" Dijital Gösterge",
            "8\" Multimedya & CarPlay",
            "Honda SENSING Güvenlik Paketi",
            "Şerit Takip & Çarpışma Önleme",
            "Hız Sabitleyici (ACC)",
            "LaneWatch (Sağ Kör Nokta Kamerası)"
        ],
        trims: [
            {
                name: "Elegance",
                availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "standard", "standard", "standard", "unavailable"]
            },
            {
                name: "Executive",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Chery Tiggo 7 Pro (2023-2025) — id: 28
    // Paketler: Comfort → Premium
    {
        vehicleId: 28,
        features: [
            "18\" Alaşım Jantlar",
            "Dijital Klima",
            "LED Farlar",
            "360° Kamera Sistemi",
            "7\" Dijital Gösterge",
            "10.25\" Multimedya & CarPlay",
            "Kablosuz Şarj",
            "Elektrikli Bagaj Kapağı",
            "Panoramik Cam Tavan",
            "ADAS Sürüş Destek Paketi"
        ],
        trims: [
            {
                name: "Comfort",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "standard"]
            },
            {
                name: "Premium",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Hyundai i30 2. Nesil GD (2012-2017) — id: 32
    // Paketler: Team → Style → Elite
    {
        vehicleId: 32,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Gündüz Farları",
            "Geri Görüş Kamerası",
            "Süpervizyon Gösterge Paneli",
            "7\" Multimedya & CarPlay",
            "Anahtarsız Giriş",
            "Şerit Takip Uyarı Sistemi",
            "Hız Sabitleyici",
            "Sunroof"
        ],
        trims: [
            {
                name: "Team",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Style",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "standard", "unavailable"]
            },
            {
                name: "Elite",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "optional"]
            }
        ]
    },

    // Renault Megane 2 (2002-2008) — id: 107
    // Paketler: Authentique → Expression → Privilege → Dynamique
    {
        vehicleId: 107,
        features: [
            "16\" Alaşım Jantlar",
            "Klima (Manuel / Dijital)",
            "Sis Farları",
            "Park Sensörleri (Arka)",
            "Multimedya & CD Çalar",
            "Deri Direksiyon",
            "Elektrikli Aynalar (Isıtmalı)",
            "Hız Sabitleyici",
            "Otomatik Ön Camlar (4'lü)"
        ],
        trims: [
            {
                name: "Authentique",
                availability: ["unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Expression",
                availability: ["unavailable", "standard", "standard", "unavailable", "standard", "unavailable", "standard", "unavailable", "standard"]
            },
            {
                name: "Privilege",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            },
            {
                name: "Dynamique",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Chery Omoda 5 (duplicate fix for id 17 — existing id 12 already covers)
    // id: 17 is separate vehicle entry
    {
        vehicleId: 17,
        features: [
            "18\" Alaşım Jantlar",
            "Otomatik Klima",
            "LED Farlar",
            "360° Kamera Sistemi",
            "7\" Dijital Gösterge",
            "10.25\" Multimedya & CarPlay",
            "Kablosuz Şarj",
            "Elektrikli Bagaj Kapağı",
            "Panoramik Cam Tavan",
            "ADAS Sürüş Destek Paketi"
        ],
        trims: [
            {
                name: "Comfort",
                availability: ["standard", "standard", "standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Premium",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // Honda Civic FD6 (2006-2012) — id: 105
    // Paketler: Dream → Elegance → Executive
    {
        vehicleId: 105,
        features: [
            "16\" Alaşım Jantlar",
            "Otomatik Klima",
            "Sis Farları",
            "Geri Park Sensörleri",
            "CD Çalar / AUX / USB",
            "Deri Direksiyon",
            "Sunroof",
            "Deri Koltuk Döşemesi",
            "Hız Sabitleyici"
        ],
        trims: [
            {
                name: "Dream",
                availability: ["unavailable", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable"]
            },
            {
                name: "Elegance",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard"]
            },
            {
                name: "Executive",
                availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"]
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════════
    // YENİ EKLENEN ARAÇLARIN DONANIM VERİLERİ (id: 1010-1029)
    // ══════════════════════════════════════════════════════════════════════

    // Toyota Yaris 4. Nesil Hibrit — id: 1010
    {
        vehicleId: 1010,
        features: ["LED Farlar", "7\" Dokunmatik Ekran", "Toyota Safety Sense 2.0", "Otomatik Klima", "Geri Görüş Kamerası", "Akıllı Giriş ve Çalıştırma", "17\" Alaşım Jantlar", "Kablosuz Şarj"],
        trims: [
            { name: "Dream", availability: ["standard", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Passion", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Premiere", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Toyota Yaris 3. Nesil — id: 1011
    {
        vehicleId: 1011,
        features: ["Klima", "CD/MP3 Çalar", "Elektrikli Aynalar", "ABS + EBD", "Direksiyon Airbag", "Merkezi Kilit", "Yolcu Airbag", "Sis Farları"],
        trims: [
            { name: "Terra", availability: ["unavailable", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"] },
            { name: "Sol", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Luna", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Renault Megane 3 — id: 1012
    {
        vehicleId: 1012,
        features: ["16\" Alaşım Jantlar", "Klima", "Bluetooth", "Hız Sabitleyici", "Elektrikli Aynalar", "Yol Bilgisayarı", "Arka Park Sensörü", "Deri Direksiyon"],
        trims: [
            { name: "Joy", availability: ["unavailable", "standard", "unavailable", "unavailable", "standard", "standard", "unavailable", "unavailable"] },
            { name: "Touch", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Privilege", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Fiat Grande Punto — id: 1013
    {
        vehicleId: 1013,
        features: ["Klima", "Radyo CD", "Elektrikli Ön Camlar", "ABS", "Çift Airbag", "Merkezi Kilit", "Sis Farları", "Alaşım Jantlar"],
        trims: [
            { name: "Active", availability: ["unavailable", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"] },
            { name: "Dynamic", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Emotion", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Opel Astra H — id: 1014
    {
        vehicleId: 1014,
        features: ["Klima", "CD Çalar", "ABS + ESP", "Elektrikli Aynalar", "Ön + Yan Airbag", "Yol Bilgisayarı", "16\" Alaşım Jantlar", "Xenon Farlar"],
        trims: [
            { name: "Essentia", availability: ["standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Edition", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Cosmo", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Hyundai Accent Blue — id: 1015
    {
        vehicleId: 1015,
        features: ["Klima", "Bluetooth + USB", "Geri Görüş Kamerası", "Alaşım Jantlar", "Elektrikli Aynalar", "Hız Sabitleyici", "Deri Koltuk", "Navigasyon"],
        trims: [
            { name: "Mode", availability: ["standard", "standard", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Mode Plus", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"] },
            { name: "Elite", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Skoda Fabia 3. Nesil — id: 1016
    {
        vehicleId: 1016,
        features: ["Klima", "6.5\" Dokunmatik Ekran", "LED Gündüz Farı", "Elektrikli Aynalar", "Hız Sabitleyici", "Arka Park Sensörü", "Alaşım Jantlar", "Otomatik Klima"],
        trims: [
            { name: "Active", availability: ["standard", "unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Ambition", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Style", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Seat Ibiza 5. Nesil — id: 1017
    {
        vehicleId: 1017,
        features: ["Full LED Farlar", "8\" Dokunmatik Ekran", "Apple CarPlay / Android Auto", "Otomatik Klima", "Geri Görüş Kamerası", "Hız Sabitleyici", "17\" Alaşım Jantlar", "Dijital Gösterge"],
        trims: [
            { name: "Reference", availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Style", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"] },
            { name: "FR", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Nissan Juke F15 — id: 1018
    {
        vehicleId: 1018,
        features: ["Klima", "5\" Ekran", "Bluetooth", "Hız Sabitleyici", "Alaşım Jantlar", "Geri Görüş Kamerası", "Deri Direksiyon", "Navigasyon"],
        trims: [
            { name: "Visia", availability: ["standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Acenta", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable"] },
            { name: "Tekna", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Honda HR-V 2. Nesil — id: 1019
    {
        vehicleId: 1019,
        features: ["Otomatik Klima", "7\" Dokunmatik Ekran", "Magic Seat", "Honda Sensing", "LED Farlar", "Geri Görüş Kamerası", "Akıllı Giriş", "Elektrikli Cam Tavan"],
        trims: [
            { name: "S", availability: ["standard", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Executive", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Executive Premium", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Kia Picanto 3. Nesil — id: 1020
    {
        vehicleId: 1020,
        features: ["Klima", "8\" Dokunmatik Ekran", "Apple CarPlay / Android Auto", "Geri Görüş Kamerası", "Elektrikli Aynalar", "15\" Alaşım Jantlar", "Hız Sabitleyici", "LED Gündüz Farı"],
        trims: [
            { name: "Concept", availability: ["standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard"] },
            { name: "Cool", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard"] },
            { name: "Prestige", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Hyundai i10 3. Nesil — id: 1021
    {
        vehicleId: 1021,
        features: ["Klima", "8\" Dokunmatik Ekran", "Apple CarPlay / Android Auto", "Geri Görüş Kamerası", "Elektrikli Aynalar", "15\" Alaşım Jantlar", "Hız Sabitleyici", "LED Gündüz Farı"],
        trims: [
            { name: "Jump", availability: ["standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable", "standard"] },
            { name: "Style", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "unavailable", "standard"] },
            { name: "Elite", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // VW Jetta 6. Nesil — id: 1022
    {
        vehicleId: 1022,
        features: ["Otomatik Klima", "5.8\" Dokunmatik Ekran", "Bluetooth", "Hız Sabitleyici", "Arka Park Sensörü", "16\" Alaşım Jantlar", "Deri Direksiyon", "Xenon Farlar"],
        trims: [
            { name: "Trendline", availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Comfortline", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Highline", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Renault Fluence — id: 1023
    {
        vehicleId: 1023,
        features: ["Klima", "Bluetooth + USB", "Elektrikli Aynalar", "ABS + ESP", "Ön + Yan Airbag", "Hız Sabitleyici", "Arka Park Sensörü", "Navigasyon"],
        trims: [
            { name: "Joy", availability: ["standard", "standard", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Touch", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Privilege", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Ford Fiesta Mk7.5 — id: 1024
    {
        vehicleId: 1024,
        features: ["Klima", "Ford SYNC", "Bluetooth", "Hız Sabitleyici", "ESP", "15\" Alaşım Jantlar", "Arka Park Sensörü", "Otomatik Farlar"],
        trims: [
            { name: "Trend", availability: ["standard", "standard", "standard", "unavailable", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Titanium", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Dacia Logan 3. Nesil — id: 1025
    {
        vehicleId: 1025,
        features: ["Manuel Klima", "8\" Media Display", "Apple CarPlay / Android Auto", "LED Farlar", "Geri Görüş Kamerası", "Elektrikli Aynalar", "Hız Sabitleyici", "Arka Park Sensörü"],
        trims: [
            { name: "Essential", availability: ["standard", "unavailable", "unavailable", "unavailable", "unavailable", "standard", "unavailable", "unavailable"] },
            { name: "Comfort", availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "standard", "standard"] },
            { name: "Prestige", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Toyota Corolla 11. Nesil E170 — id: 1026
    {
        vehicleId: 1026,
        features: ["Otomatik Klima", "6.1\" Dokunmatik Ekran", "Bluetooth", "Geri Görüş Kamerası", "Toyota Safety Sense", "16\" Alaşım Jantlar", "Deri Koltuk", "Hız Sabitleyici"],
        trims: [
            { name: "Life", availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "unavailable", "unavailable"] },
            { name: "Dream", availability: ["standard", "standard", "standard", "standard", "unavailable", "standard", "unavailable", "standard"] },
            { name: "Advance", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Peugeot 301 — id: 1027
    {
        vehicleId: 1027,
        features: ["Manuel Klima", "7\" Dokunmatik Ekran", "Bluetooth", "Elektrikli Aynalar", "ABS + ESP", "Arka Park Sensörü", "15\" Alaşım Jantlar", "Hız Sabitleyici"],
        trims: [
            { name: "Access", availability: ["standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Active", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Allure", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Citroen C-Elysée — id: 1028
    {
        vehicleId: 1028,
        features: ["Manuel Klima", "7\" Dokunmatik Ekran", "Bluetooth", "Elektrikli Aynalar", "ABS + ESP", "Arka Park Sensörü", "15\" Alaşım Jantlar", "Hız Sabitleyici"],
        trims: [
            { name: "Live", availability: ["standard", "unavailable", "standard", "standard", "standard", "unavailable", "unavailable", "unavailable"] },
            { name: "Feel", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Shine", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    },

    // Ford Tourneo Courier Yeni Nesil — id: 1029
    {
        vehicleId: 1029,
        features: ["Otomatik Klima", "8\" SYNC 4 Ekran", "Apple CarPlay / Android Auto", "Geri Görüş Kamerası", "Ford Co-Pilot360", "17\" Alaşım Jantlar", "Kayan Kapılar", "Kablosuz Şarj"],
        trims: [
            { name: "Trend", availability: ["unavailable", "standard", "standard", "unavailable", "unavailable", "unavailable", "standard", "unavailable"] },
            { name: "Titanium", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "unavailable"] },
            { name: "Titanium X", availability: ["standard", "standard", "standard", "standard", "standard", "standard", "standard", "standard"] }
        ]
    }
];
