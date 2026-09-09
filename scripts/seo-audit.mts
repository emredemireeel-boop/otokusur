import { engineDNAData, type EngineOption } from '../data/engine-dna.ts';
import { guidesData } from '../data/guides.ts';
import { createSlug, vehicleDNAData, type VehicleDNA } from '../data/vehicle-dna.ts';

const boilerplate = new Set([
    'Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.',
    'Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.',
    'Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.',
]);

function vehicleIsIndexable(vehicle: VehicleDNA): boolean {
    return vehicle.chronicIssues.length >= 2
        && vehicle.strengths.length >= 3
        && vehicle.weaknesses.length >= 3
        && vehicle.totalReports >= 3;
}

function engineIsIndexable(engine: EngineOption): boolean {
    return (engine.description?.trim().length ?? 0) >= 120
        && ((engine.pros?.length ?? 0) >= 2 || (engine.cons?.length ?? 0) >= 2)
        && engine.chronicIssues.length >= 2
        && engine.chronicIssues.some((issue) => issue.description.trim().length >= 100 && !boilerplate.has(issue.description.trim()));
}

function duplicateValues(values: Array<string | number>) {
    const counts = new Map<string | number, number>();
    for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
    return [...counts.entries()].filter(([, count]) => count > 1);
}

const uniqueVehicles = Array.from(
    vehicleDNAData.reduce((map, vehicle) => {
        const route = createSlug(vehicle.brand) + '/' + createSlug(vehicle.model);
        if (!map.has(route)) map.set(route, vehicle);
        return map;
    }, new Map<string, VehicleDNA>()).values(),
);
const sourceRouteDuplicates = vehicleDNAData.length - uniqueVehicles.length;
const vehicleIdDuplicates = duplicateValues(vehicleDNAData.map((vehicle) => vehicle.id));
const engineRecordIdDuplicates = duplicateValues(engineDNAData.map((entry) => entry.vehicleId));
const indexableVehicles = uniqueVehicles.filter(vehicleIsIndexable);
const engines = engineDNAData.flatMap((entry) => entry.engines);
const indexableEngines = indexableVehicles.flatMap((vehicle) =>
    (engineDNAData.find((entry) => entry.vehicleId === vehicle.id)?.engines ?? []).filter(engineIsIndexable),
);
const missingEngineDescriptions = engines.filter((engine) => !engine.description?.trim()).length;
const missingDecisionSupport = engines.filter((engine) => !(engine.pros?.length || engine.cons?.length)).length;
const boilerplateIssueDescriptions = engines.flatMap((engine) => engine.chronicIssues)
    .filter((issue) => boilerplate.has(issue.description.trim())).length;
const brands = new Set(uniqueVehicles.map((vehicle) => createSlug(vehicle.brand))).size;
const expectedSitemapUrls = 8 + brands + indexableVehicles.length + indexableEngines.length + guidesData.length;

console.log('OtoKusur SEO kalite denetimi');
console.table({
    'Kaynak araç kaydı': vehicleDNAData.length,
    'Benzersiz model rotası': uniqueVehicles.length,
    'Birleştirilen tekrar rota': sourceRouteDuplicates,
    'İndekslenebilir model': indexableVehicles.length,
    'Toplam motor profili': engines.length,
    'İndekslenebilir motor': indexableEngines.length,
    'Açıklaması eksik motor': missingEngineDescriptions,
    'Artı/eksi analizi eksik motor': missingDecisionSupport,
    'Kalıp kusur açıklaması': boilerplateIssueDescriptions,
    'Beklenen sitemap URL': expectedSitemapUrls,
});

const failures: string[] = [];
if (vehicleIdDuplicates.length) failures.push('Tekrarlanan araç kimliği: ' + vehicleIdDuplicates.map(([id]) => id).join(', '));
if (engineRecordIdDuplicates.length) failures.push('Tekrarlanan motor-kayıt araç kimliği: ' + engineRecordIdDuplicates.map(([id]) => id).join(', '));

if (failures.length) {
    console.error('\nEngelleyici veri sorunları:');
    for (const failure of failures) console.error('- ' + failure);
    process.exitCode = 1;
} else {
    console.log('\nEngelleyici rota/kimlik çakışması bulunmadı.');
}

if (sourceRouteDuplicates > 0) {
    console.warn('Uyarı: Kaynakta ' + sourceRouteDuplicates + ' tekrar model rotası var; yayında ilk kayıt korunarak tekilleştiriliyor.');
}
