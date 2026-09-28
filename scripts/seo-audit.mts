import { engineDNAData as legacyEngineDNAData, type EngineOption } from '../data/engine-dna.ts';
import { libraryExpansionEngineDNAData } from '../data/library-expansion-engine-dna.ts';
import { libraryExpansionVehicleDNAData } from '../data/library-expansion-vehicle-dna.ts';
import { marketDemandEngineDNAData } from '../data/market-demand-engine-dna.ts';
import { marketDemandVehicleDNAData } from '../data/market-demand-vehicle-dna.ts';
import { evergreenDemandEngineDNAData } from '../data/evergreen-demand-engine-dna.ts';
import { evergreenDemandVehicleDNAData, evergreenSupersededVehicleIds } from '../data/evergreen-demand-vehicle-dna.ts';
import { guidesData } from '../data/guides.ts';
import { priorityEngineDNAData } from '../data/priority-engine-dna.ts';
import { priorityVehicleDNAData, supersededLegacyVehicleIds } from '../data/priority-vehicle-dna.ts';
import { searchDemandEngineDNAData } from '../data/search-demand-engine-dna.ts';
import { searchDemandSupersededVehicleIds, searchDemandVehicleDNAData } from '../data/search-demand-vehicle-dna.ts';
import { secondHandDemandEngineDNAData } from '../data/second-hand-demand-engine-dna.ts';
import { secondHandDemandVehicleDNAData, secondHandSupersededVehicleIds } from '../data/second-hand-demand-vehicle-dna.ts';
import { turkeySearchEngineDNAData } from '../data/turkey-search-engine-dna.ts';
import { turkeySearchVehicleDNAData } from '../data/turkey-search-vehicle-dna.ts';
import { vehicleContentEngineDNAData } from '../data/vehicle-content-engine-dna.ts';
import { vehicleContentEnrichment } from '../data/vehicle-content-enrichment.ts';
import { createSlug, vehicleDNAData as legacyVehicleDNAData, type VehicleDNA } from '../data/vehicle-dna.ts';

const supersededIds = new Set([...supersededLegacyVehicleIds, ...searchDemandSupersededVehicleIds, ...evergreenSupersededVehicleIds, ...secondHandSupersededVehicleIds]);
const secondHandIds = new Set(secondHandDemandVehicleDNAData.map((vehicle) => vehicle.id));
const marketDemandIds = new Set(marketDemandVehicleDNAData.map((vehicle) => vehicle.id));
const turkeySearchIds = new Set(turkeySearchVehicleDNAData.map((vehicle) => vehicle.id));
const evergreenIds = new Set(evergreenDemandVehicleDNAData.map((vehicle) => vehicle.id));
const searchDemandIds = new Set(searchDemandVehicleDNAData.map((vehicle) => vehicle.id));
const priorityIds = new Set(priorityVehicleDNAData.map((vehicle) => vehicle.id));
const libraryExpansionIds = new Set(libraryExpansionVehicleDNAData.map((vehicle) => vehicle.id));
const editorialIds = new Set([...libraryExpansionIds, ...marketDemandIds, ...turkeySearchIds, ...secondHandIds, ...evergreenIds, ...searchDemandIds, ...priorityIds]);
const contentEngineIds = new Set(vehicleContentEngineDNAData.map((entry) => entry.vehicleId));
const baseVehicleDNAData = [
    ...libraryExpansionVehicleDNAData,
    ...marketDemandVehicleDNAData,
    ...turkeySearchVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id)),
    ...secondHandDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id)),
    ...evergreenDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id)),
    ...searchDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id)),
    ...priorityVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id) && !searchDemandIds.has(vehicle.id)),
    ...legacyVehicleDNAData.filter((vehicle) => !editorialIds.has(vehicle.id) && !supersededIds.has(vehicle.id)),
];
const vehicleDNAData = baseVehicleDNAData.map((vehicle) => ({
    ...vehicle,
    ...vehicleContentEnrichment[vehicle.id],
}));
const engineDNAData = [
    ...vehicleContentEngineDNAData,
    ...libraryExpansionEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId)),
    ...marketDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId)),
    ...turkeySearchEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !marketDemandIds.has(entry.vehicleId)),
    ...secondHandDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId)),
    ...evergreenDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId)),
    ...searchDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId)),
    ...priorityEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId) && !searchDemandIds.has(entry.vehicleId)),
    ...legacyEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !editorialIds.has(entry.vehicleId) && !supersededIds.has(entry.vehicleId)),
];

const boilerplate = new Set([
    'Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.',
    'Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.',
    'Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.',
]);

function vehicleIsIndexable(vehicle: VehicleDNA): boolean {
    return vehicle.chronicIssues.length >= 2
        && vehicle.strengths.length >= 3
        && vehicle.weaknesses.length >= 3
        && (vehicle.totalReports >= 3 || (vehicle.sources?.length ?? 0) >= 2);
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
const buyingGuideVehicles = uniqueVehicles.filter((vehicle) => vehicle.buyingGuide).length;
const faqVehicles = uniqueVehicles.filter((vehicle) => (vehicle.faqs?.length ?? 0) >= 3).length;
const guideWordCounts = guidesData.map((guide) => guide.content.trim().split(/\s+/).length);
const deepGuides = guidesData.filter((guide) => guide.content.trim().split(/\s+/).length >= 700).length;
const faqGuides = guidesData.filter((guide) => (guide.faqs?.length ?? 0) >= 4).length;
const updatedGuides = guidesData.filter((guide) => guide.updatedDate).length;
const brands = new Set(uniqueVehicles.map((vehicle) => createSlug(vehicle.brand))).size;
const expectedSitemapUrls = 8 + brands + indexableVehicles.length + indexableEngines.length + guidesData.length;
const priorityBrandCounts = ['Audi', 'Toyota', 'Honda'].map((brand) => ({
    brand,
    vehicles: uniqueVehicles.filter((vehicle) => vehicle.brand === brand).length,
    engines: uniqueVehicles
        .filter((vehicle) => vehicle.brand === brand)
        .reduce((count, vehicle) => count + (engineDNAData.find((entry) => entry.vehicleId === vehicle.id)?.engines.length ?? 0), 0),
}));

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
    'Satın alma planı bulunan araç': buyingGuideVehicles,
    'Model SSS içeriği bulunan araç': faqVehicles,
    'Derin içerikli rehber (700+ kelime)': deepGuides,
    '4+ SSS bulunan rehber': faqGuides,
    'Güncelleme tarihi olan rehber': updatedGuides,
    'En kısa rehber kelime sayısı': Math.min(...guideWordCounts),
    'Beklenen sitemap URL': expectedSitemapUrls,
});
console.log('\nÖncelikli marka kapsamı');
console.table(priorityBrandCounts);

const failures: string[] = [];
if (vehicleIdDuplicates.length) failures.push('Tekrarlanan araç kimliği: ' + vehicleIdDuplicates.map(([id]) => id).join(', '));
if (engineRecordIdDuplicates.length) failures.push('Tekrarlanan motor-kayıt araç kimliği: ' + engineRecordIdDuplicates.map(([id]) => id).join(', '));
const missingEnrichmentVehicles = Object.keys(vehicleContentEnrichment)
    .map(Number)
    .filter((id) => !vehicleDNAData.some((vehicle) => vehicle.id === id));
if (missingEnrichmentVehicles.length) failures.push('Yayında karşılığı olmayan içerik zenginleştirme kimliği: ' + missingEnrichmentVehicles.join(', '));
if (deepGuides !== guidesData.length) failures.push('700 kelimenin altında kalan rehber sayısı: ' + (guidesData.length - deepGuides));
if (faqGuides !== guidesData.length) failures.push('Dört özgün SSS bulunmayan rehber sayısı: ' + (guidesData.length - faqGuides));
if (updatedGuides !== guidesData.length) failures.push('Güncelleme tarihi bulunmayan rehber sayısı: ' + (guidesData.length - updatedGuides));

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
