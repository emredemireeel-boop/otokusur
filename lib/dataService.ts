import { vehicleDNAData, createSlug } from '@/data/vehicle-dna';
import type { VehicleDNA, ChronicIssue } from '@/data/vehicle-dna';
import { engineDNAData } from '@/data/engine-dna';
import type { EngineOption } from '@/data/engine-dna';
import { trimDNAData } from '@/data/trim-dna';
import type { VehicleTrimData } from '@/data/trim-dna';
import { carEnginesCatalog, carModelsCatalog } from '@/data/catalog';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface BrandInfo {
    name: string;
    slug: string;
    vehicleCount: number;
    avgScore: number;
    totalIssues: number;
}

export interface VehicleSummary {
    id: number;
    brand: string;
    model: string;
    year: string;
    dnaScore: number;
    totalReports: number;
    issueCount: number;
    fuelTypes: string[];
    href: string;
}

// ── Slugs ──────────────────────────────────────────────
export { createSlug };

export function brandSlug(brand: string): string {
    return createSlug(brand);
}

export function modelSlug(model: string): string {
    return createSlug(model);
}

// Some imported batches contain the same public route more than once.
// Preserve the historically visible first record until an editorial merge.
const uniqueVehicleDNAData = Array.from(
    vehicleDNAData.reduce((vehicles, vehicle) => {
        const routeKey = `${brandSlug(vehicle.brand)}/${modelSlug(vehicle.model)}`;
        if (!vehicles.has(routeKey)) vehicles.set(routeKey, vehicle);
        return vehicles;
    }, new Map<string, VehicleDNA>()).values(),
);

// ── Risk Level ─────────────────────────────────────────
export function getRiskLevel(score: number): RiskLevel {
    if (score >= 80) return 'low';
    if (score >= 60) return 'medium';
    return 'high';
}

export function getRiskLabel(level: RiskLevel): string {
    switch (level) {
        case 'low': return 'Düşük Risk';
        case 'medium': return 'Orta Risk';
        case 'high': return 'Yüksek Risk';
    }
}

export function getRiskColor(level: RiskLevel): string {
    switch (level) {
        case 'low': return '#22C55E';
        case 'medium': return '#F59E0B';
        case 'high': return '#EF4444';
    }
}

export function getCostLevel(score: number): string {
    if (score >= 85) return 'Düşük';
    if (score >= 70) return 'Orta';
    if (score >= 55) return 'Yüksek';
    return 'Çok Yüksek';
}

// ── Data Access ────────────────────────────────────────
export function getAllVehicles(): VehicleDNA[] {
    return uniqueVehicleDNAData;
}

export function getVehicleBySlug(bSlug: string, mSlug: string): VehicleDNA | undefined {
    return uniqueVehicleDNAData.find(v =>
        brandSlug(v.brand) === bSlug && modelSlug(v.model) === mSlug
    );
}

export function getVehiclesByBrand(bSlug: string): VehicleDNA[] {
    return uniqueVehicleDNAData.filter(v => brandSlug(v.brand) === bSlug);
}

export function getAllBrands(): BrandInfo[] {
    const brandMap = new Map<string, VehicleDNA[]>();
    uniqueVehicleDNAData.forEach(v => {
        const key = v.brand;
        if (!brandMap.has(key)) brandMap.set(key, []);
        brandMap.get(key)!.push(v);
    });

    return Array.from(brandMap.entries()).map(([name, vehicles]) => ({
        name,
        slug: brandSlug(name),
        vehicleCount: vehicles.length,
        avgScore: Math.round(vehicles.reduce((s, v) => s + v.dnaScore, 0) / vehicles.length),
        totalIssues: vehicles.reduce((s, v) => s + v.chronicIssues.length, 0),
    })).sort((a, b) => b.vehicleCount - a.vehicleCount);
}

export function getBrandInfo(bSlug: string): BrandInfo | undefined {
    const brands = getAllBrands();
    return brands.find(b => b.slug === bSlug);
}

export function getEnginesByVehicleId(vehicleId: number): EngineOption[] {
    const entry = engineDNAData.find(e => e.vehicleId === vehicleId);
    return entry?.engines || [];
}

export function getTrimsByVehicleId(vehicleId: number): VehicleTrimData | undefined {
    return trimDNAData.find(t => t.vehicleId === vehicleId);
}

// ── Fuel Type Extraction ───────────────────────────────
export function getVehicleFuelTypes(vehicleId: number): string[] {
    const engines = getEnginesByVehicleId(vehicleId);
    const types = new Set(engines.map(e => e.fuelType));
    return Array.from(types);
}

// ── Search & Filter ────────────────────────────────────
export interface VehicleFilters {
    query?: string;
    brand?: string;
    fuelType?: string;
    riskLevel?: RiskLevel;
    yearMin?: number;
    yearMax?: number;
}

export function searchVehicles(query: string): VehicleDNA[] {
    const q = query.toLowerCase().trim();
    if (!q) return uniqueVehicleDNAData;
    return uniqueVehicleDNAData.filter(v =>
        v.brand.toLowerCase().includes(q) ||
        v.model.toLowerCase().includes(q) ||
        v.year.includes(q)
    );
}

export function filterVehicles(filters: VehicleFilters): VehicleDNA[] {
    let results = uniqueVehicleDNAData;

    if (filters.query) {
        const q = filters.query.toLowerCase().trim();
        results = results.filter(v =>
            v.brand.toLowerCase().includes(q) ||
            v.model.toLowerCase().includes(q) ||
            v.year.includes(q)
        );
    }

    if (filters.brand) {
        results = results.filter(v => brandSlug(v.brand) === filters.brand);
    }

    if (filters.fuelType) {
        results = results.filter(v => {
            const fuelTypes = getVehicleFuelTypes(v.id);
            return fuelTypes.includes(filters.fuelType!);
        });
    }

    if (filters.riskLevel) {
        results = results.filter(v => getRiskLevel(v.dnaScore) === filters.riskLevel);
    }

    return results;
}

// ── Categorize Issues ──────────────────────────────────
export interface FaultCategory {
    name: string;
    icon: string;
    issues: ChronicIssue[];
}

const categoryKeywords: Record<string, string[]> = {
    'Motor': ['motor', 'turbo', 'yağ', 'egr', 'dpf', 'enjektör', 'benzin', 'dizel', 'devirdaim', 'soğutma', 'krank', 'triger', 'katalitik', 'rölanti', 'marş', 'akü', 'start-stop'],
    'Şanzıman': ['şanzıman', 'dsg', 'dct', 'cvt', 'vites', 'debriyaj', 'kavrama', 'mekatronik', 'edc', 'otomatik'],
    'Elektronik': ['ekran', 'multimedya', 'yazılım', 'sensör', 'kamera', 'bluetooth', 'sos', 'elektrik', 'tesisat', 'gösterge'],
    'Süspansiyon': ['amortisör', 'süspansiyon', 'takoz', 'z-rot', 'rot', 'direksiyon', 'bilyalı'],
    'Kaporta & Boya': ['boya', 'vernik', 'pas', 'kaporta', 'krom', 'çürüme', 'kapı', 'tampon'],
    'Konfor & Ses': ['ses', 'gıcırtı', 'tıkırtı', 'trim', 'yalıtım', 'rüzgar', 'koltuk', 'klima'],
};

export function categorizeIssues(issues: ChronicIssue[]): FaultCategory[] {
    const categories: FaultCategory[] = [];
    const used = new Set<number>();

    for (const [catName, keywords] of Object.entries(categoryKeywords)) {
        const catIssues = issues.filter((issue) => {
            if (used.has(issue.id)) return false;
            const text = `${issue.title} ${issue.description}`.toLowerCase();
            return keywords.some(kw => text.includes(kw));
        });
        catIssues.forEach(i => used.add(i.id));
        if (catIssues.length > 0) {
            categories.push({ name: catName, icon: getCategoryIcon(catName), issues: catIssues });
        }
    }

    // Uncategorized
    const remaining = issues.filter(i => !used.has(i.id));
    if (remaining.length > 0) {
        categories.push({ name: 'Diğer', icon: '🔧', issues: remaining });
    }

    return categories;
}

function getCategoryIcon(cat: string): string {
    switch (cat) {
        case 'Motor': return '⚙️';
        case 'Şanzıman': return '🔄';
        case 'Elektronik': return '💻';
        case 'Süspansiyon': return '🛞';
        case 'Kaporta & Boya': return '🎨';
        case 'Konfor & Ses': return '🔇';
        default: return '🔧';
    }
}

// ── Stats ──────────────────────────────────────────────
export function getGlobalStats() {
    const total = uniqueVehicleDNAData.length;
    const totalIssues = uniqueVehicleDNAData.reduce((s, v) => s + v.chronicIssues.length, 0);
    const brands = new Set(uniqueVehicleDNAData.map(v => v.brand)).size;
    return { totalVehicles: total, totalIssues, totalBrands: brands };
}

export function getCatalogStats() {
    const catalog = carModelsCatalog;
    const engineCatalog = carEnginesCatalog;
    let models = 0;
    let generations = 0;
    let engines = 0;

    for (const brandModels of Object.values(catalog)) {
        for (const yearRanges of Object.values(brandModels)) {
            models += 1;
            generations += yearRanges.length;
        }
    }

    for (const brandModels of Object.values(engineCatalog)) {
        for (const generationsMap of Object.values(brandModels)) {
            for (const engineOptions of Object.values(generationsMap)) engines += engineOptions.length;
        }
    }

    return {
        brands: Object.keys(catalog).length,
        models,
        generations,
        engines,
    };
}

// ── Popular Vehicles ───────────────────────────────
export function getPopularVehicles(count = 8): VehicleDNA[] {
    return [...uniqueVehicleDNAData]
        .sort((a, b) => b.totalReports - a.totalReports || b.chronicIssues.length - a.chronicIssues.length)
        .slice(0, count);
}

// ── Vehicle by ID ──────────────────────────────────
export function getVehicleById(id: number): VehicleDNA | undefined {
    return uniqueVehicleDNAData.find(v => v.id === id);
}

// ── Global Average Score ───────────────────────────
export function getGlobalAvgScore(): number {
    if (uniqueVehicleDNAData.length === 0) return 0;
    return Math.round(uniqueVehicleDNAData.reduce((s, v) => s + v.dnaScore, 0) / uniqueVehicleDNAData.length);
}

// ── Brand Top Risk / Safe Vehicles ─────────────────
export function getTopRiskVehicle(bSlug: string): VehicleDNA | undefined {
    const vehicles = getVehiclesByBrand(bSlug);
    if (vehicles.length === 0) return undefined;
    return vehicles.reduce((min, v) => v.dnaScore < min.dnaScore ? v : min, vehicles[0]);
}

export function getTopSafeVehicle(bSlug: string): VehicleDNA | undefined {
    const vehicles = getVehiclesByBrand(bSlug);
    if (vehicles.length === 0) return undefined;
    return vehicles.reduce((max, v) => v.dnaScore > max.dnaScore ? v : max, vehicles[0]);
}

// ── Unique Brands List (for comparison selectors) ──
export function getUniqueBrands(): string[] {
    return [...new Set(uniqueVehicleDNAData.map(v => v.brand))].sort();
}

export function getModelsByBrand(brandName: string): VehicleDNA[] {
    return uniqueVehicleDNAData.filter(v => v.brand === brandName);
}

export function toVehicleSummary(vehicle: VehicleDNA): VehicleSummary {
    return {
        id: vehicle.id,
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
        dnaScore: vehicle.dnaScore,
        totalReports: vehicle.totalReports,
        issueCount: vehicle.chronicIssues.length,
        fuelTypes: getVehicleFuelTypes(vehicle.id),
        href: `/araclar/${brandSlug(vehicle.brand)}/${modelSlug(vehicle.model)}`,
    };
}

export function getVehicleSummaries(): VehicleSummary[] {
    return uniqueVehicleDNAData.map(toVehicleSummary);
}

export function getCatalogBrandNames(): string[] {
    return Object.keys(carModelsCatalog).sort((a, b) => a.localeCompare(b, 'tr'));
}
