import type { EngineChronicIssue, VehicleEngineData } from './engine-dna';
import { growthVehicleProfiles } from './growth-profiles.ts';

export const growthEngineDNAData: VehicleEngineData[] = growthVehicleProfiles.map((profile) => ({
    vehicleId: profile.id,
    engines: profile.engines.map((engine) => ({
        slug: engine.slug,
        name: engine.name,
        fuelType: engine.fuelType,
        transmission: engine.transmission,
        score: engine.score,
        description: `${engine.character} ${engine.idealUse} için değerlendirilebilir; ancak motor, şanzıman ve üretim revizyonu VIN üzerinden doğrulanmalı, bakım beyanı tarih-kilometre ve parça/yağ standardı yazan faturalarla desteklenmelidir.`,
        pros: [engine.idealUse, ...profile.strengths.slice(0, 2)],
        cons: [profile.weaknesses[0], profile.weaknesses[1], profile.weaknesses[2]],
        chronicIssues: engine.checks.map((check, index): EngineChronicIssue => ({
            title: check.split(',')[0],
            severity: index === 0 ? 'high' : 'medium',
            reportCount: 0,
            description: `${check}. Belirti görülürse doğrudan parça adı koymak yerine canlı veri, fiziksel ölçüm, bakım faturası ve soğuk-sıcak karşılaştırmasıyla neden doğrulanmalıdır.`,
        })),
    })),
}));
