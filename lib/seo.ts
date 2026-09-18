import type { EngineOption } from '@/data/engine-dna';
import type { VehicleDNA } from '@/data/vehicle-dna';

export const SITE_URL = 'https://otokusur.com';
export const SITE_NAME = 'OtoKusur';
export const EDITORIAL_TEAM_NAME = 'OtoKusur Araştırma Ekibi';
export const SITE_UPDATED_AT = '2026-09-18';

const ENGINE_BOILERPLATE = new Set([
    'Bu motorda sık görülen kronik bir sorundur. Çözümü için servise veya ustaya başvurulması önerilir.',
    'Zamanla vites geçişlerinde ve kalkışlarda hafif silkeleme yaşanabilir.',
    'Türkiye şartlarında bu motorlarda sık rastlanan kronik bir sorundur. Çözümü için usta veya servis desteği şarttır.',
]);

export interface SeoQualityAssessment {
    indexable: boolean;
    score: number;
    reasons: string[];
}

export function assessVehicleSeoQuality(vehicle: VehicleDNA): SeoQualityAssessment {
    const hasEvidence = vehicle.totalReports >= 3 || (vehicle.sources?.length ?? 0) >= 2;
    const checks = [
        { ok: vehicle.chronicIssues.length >= 2, reason: 'En az iki araç kusuru bulunmalı.' },
        { ok: vehicle.strengths.length >= 3, reason: 'Yeterli güçlü yön analizi bulunmalı.' },
        { ok: vehicle.weaknesses.length >= 3, reason: 'Yeterli zayıf yön analizi bulunmalı.' },
        { ok: hasEvidence, reason: 'Asgari kullanıcı raporu veya en az iki doğrulama kaynağı bulunmalı.' },
    ];
    const passed = checks.filter(check => check.ok).length;

    return {
        indexable: checks.every(check => check.ok),
        score: Math.round((passed / checks.length) * 100),
        reasons: checks.filter(check => !check.ok).map(check => check.reason),
    };
}

export function assessEngineSeoQuality(engine: EngineOption): SeoQualityAssessment {
    const hasSummary = (engine.description?.trim().length ?? 0) >= 120;
    const hasDecisionSupport = (engine.pros?.length ?? 0) >= 2 || (engine.cons?.length ?? 0) >= 2;
    const hasDetailedIssue = engine.chronicIssues.some(issue =>
        issue.description.trim().length >= 100 && !ENGINE_BOILERPLATE.has(issue.description.trim()),
    );
    const hasUsefulIssueSet = engine.chronicIssues.length >= 2;
    const checks = [
        { ok: hasSummary, reason: 'Özgün motor özeti eksik.' },
        { ok: hasDecisionSupport, reason: 'Karar desteği sağlayan artı/eksi analizi eksik.' },
        { ok: hasDetailedIssue, reason: 'En az bir ayrıntılı ve özgün kusur açıklaması eksik.' },
        { ok: hasUsefulIssueSet, reason: 'Yeterli motor kusuru bulunmuyor.' },
    ];
    const passed = checks.filter(check => check.ok).length;

    return {
        indexable: checks.every(check => check.ok),
        score: Math.round((passed / checks.length) * 100),
        reasons: checks.filter(check => !check.ok).map(check => check.reason),
    };
}

export function absoluteUrl(path: string): string {
    return new URL(path, SITE_URL).toString();
}

export function breadcrumbSchema(items: Array<{ name: string; path?: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            ...(item.path ? { item: absoluteUrl(item.path) } : {}),
        })),
    };
}

export function isKnownEngineBoilerplate(description: string): boolean {
    return ENGINE_BOILERPLATE.has(description.trim());
}
