import type { VehicleDNA } from './vehicle-dna';
import { growthVehicleProfiles } from './growth-profiles.ts';

export const growthVehicleDNAData: VehicleDNA[] = growthVehicleProfiles.map((profile) => ({
    id: profile.id,
    brand: profile.brand,
    model: profile.model,
    year: profile.year,
    dnaScore: Math.round(profile.engines.reduce((sum, engine) => sum + engine.score, 0) / profile.engines.length),
    strengths: profile.strengths,
    weaknesses: profile.weaknesses,
    chronicIssues: profile.vehicleChecks.map((check, index) => ({
        id: profile.id * 100 + index + 1,
        title: check.title,
        severity: check.severity,
        reportCount: 0,
        description: `${check.detail} Bu madde her araçta kesin arıza bulunduğu anlamına gelmez; ${profile.shortName} için satın alma öncesi ölçüm ve belge kontrol noktasıdır.`,
    })),
    userExperiences: [],
    totalReports: 0,
    generationInfo: {
        chassisCode: profile.chassisCode,
        marketScope: `Türkiye ikinci el pazarında ${profile.year} dönemi`,
        summary: profile.summary,
        phases: profile.phases,
        bodyStyles: profile.bodyStyles,
        turkeyEngines: profile.engines.map((engine) => `${engine.name} — ${engine.transmission}`),
    },
    sources: profile.sources,
    buyingGuide: {
        summary: `${profile.identity} ${profile.ownership}`,
        idealFor: profile.strengths.slice(0, 3),
        inspectionSteps: [
            { title: 'VIN ve teknik kimlik', description: `Kasa kodunu, üretim fazını, motoru, şanzımanı ve fabrika donanımını doğrulayın. ${profile.identity}` },
            ...profile.vehicleChecks.slice(0, 4).map((check) => ({ title: check.title, description: check.detail })),
            { title: 'Uzun yol testi ve maliyet', description: `Aracı tam çalışma sıcaklığına çıkarın; soğuk-sıcak belirtileri karşılaştırın. ${profile.ownership}` },
        ],
        finalVerdict: profile.verdict,
    },
    faqs: [
        { question: `${profile.shortName} hangi yılları kapsar?`, answer: `Bu sayfa ${profile.year} dönemini kapsar. Model yılı, üretim ve ilk tescil tarihi farklı olabileceği için VIN ve üretici kaydı doğrulanmalıdır.` },
        { question: `${profile.shortName} hangi motorlarla alınabilir?`, answer: `Türkiye ikinci elinde öne çıkan seçenekler ${profile.engines.map((engine) => engine.name).join(' ve ')}. Şanzıman ve güç değeri VIN’den teyit edilmelidir.` },
        { question: `${profile.shortName} alırken en önemli kontrol nedir?`, answer: `${profile.vehicleChecks.slice(0, 3).map((check) => check.title).join(', ')} başlıkları soğuk-sıcak test ve üretici cihazı verisiyle birlikte incelenmelidir.` },
        { question: `${profile.shortName} alınır mı?`, answer: profile.verdict },
    ],
}));
