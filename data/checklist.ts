export interface ChecklistItem {
    id: string;
    category: string;
    text: string;
    importance: 'critical' | 'important' | 'recommended';
}

export const checklistData: ChecklistItem[] = [
    { id: 'c1', category: 'Belgeler', text: 'Ruhsat bilgileri ile araç eşleşiyor mu?', importance: 'critical' },
    { id: 'c2', category: 'Belgeler', text: 'Araç üzerinde haciz veya rehin var mı?', importance: 'critical' },
    { id: 'c3', category: 'Belgeler', text: 'Muayene geçerlilik tarihi kontrol edildi mi?', importance: 'critical' },
    { id: 'c4', category: 'Belgeler', text: 'Kilometre geçmişi servis kayıtlarıyla tutarlı mı?', importance: 'critical' },
    { id: 'c5', category: 'Dış Görünüm', text: 'Boya ölçümü yapıldı mı?', importance: 'critical' },
    { id: 'c6', category: 'Dış Görünüm', text: 'Panel aralıkları eşit mi?', importance: 'important' },
    { id: 'c7', category: 'Dış Görünüm', text: 'Lastik aşınması düzenli mi?', importance: 'important' },
    { id: 'c8', category: 'Dış Görünüm', text: 'Cam ve far durumu kontrol edildi mi?', importance: 'recommended' },
    { id: 'c9', category: 'Motor', text: 'Soğuk marş yapıldı mı?', importance: 'critical' },
    { id: 'c10', category: 'Motor', text: 'Motor yağ seviyesi ve rengi kontrol edildi mi?', importance: 'critical' },
    { id: 'c11', category: 'Motor', text: 'Antifriz seviyesi ve rengi kontrol edildi mi?', importance: 'important' },
    { id: 'c12', category: 'Motor', text: 'Egzoz dumanı rengi normal mi?', importance: 'important' },
    { id: 'c13', category: 'Motor', text: 'Motor altında sızıntı var mı?', importance: 'critical' },
    { id: 'c14', category: 'Şanzıman', text: 'Vites geçişleri yumuşak mı?', importance: 'critical' },
    { id: 'c15', category: 'Şanzıman', text: 'Dur-kalk trafikte test edildi mi?', importance: 'important' },
    { id: 'c16', category: 'Şanzıman', text: 'Geri viteste gecikme var mı?', importance: 'important' },
    { id: 'c17', category: 'Fren & Süspansiyon', text: 'Fren performansı yeterli mi?', importance: 'critical' },
    { id: 'c18', category: 'Fren & Süspansiyon', text: 'Süspansiyondan ses geliyor mu?', importance: 'important' },
    { id: 'c19', category: 'Fren & Süspansiyon', text: 'Direksiyon oyunu var mı?', importance: 'important' },
    { id: 'c20', category: 'Elektronik', text: 'Gösterge panelinde uyarı var mı?', importance: 'critical' },
    { id: 'c21', category: 'Elektronik', text: 'Klima soğutuyor mu?', importance: 'important' },
    { id: 'c22', category: 'Elektronik', text: 'Tüm cam krikoları çalışıyor mu?', importance: 'recommended' },
    { id: 'c23', category: 'Elektronik', text: 'OBD arıza kodu taratıldı mı?', importance: 'critical' },
    { id: 'c24', category: 'Test Sürüşü', text: 'En az 15 dakika test sürüşü yapıldı mı?', importance: 'critical' },
    { id: 'c25', category: 'Test Sürüşü', text: 'Şehir dışı hızlarda test yapıldı mı?', importance: 'important' },
];
