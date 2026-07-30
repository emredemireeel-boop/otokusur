import type { MetadataRoute } from 'next';
import { getAllVehicles, getEnginesByVehicleId, getAllBrands, brandSlug, modelSlug } from '@/lib/dataService';
import { guidesData } from '@/data/guides';

const BASE_URL = 'https://otokusur.com';
const CONTENT_LAST_UPDATED = new Date('2026-07-31');

// Keep sitemap output stable between deployments so search engines can trust
// the lastmod signal instead of seeing every URL as changed on every request.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
    const vehicles = getAllVehicles();
    const brands = getAllBrands();

    // ── Statik Sayfalar ────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'daily', priority: 1 },
        { url: `${BASE_URL}/araclar`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'daily', priority: 0.9 },
        { url: `${BASE_URL}/karsilastir`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/rehber`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${BASE_URL}/veri-metodolojisi`, lastModified: new Date('2026-07-21'), changeFrequency: 'monthly', priority: 0.6 },
    ];

    // ── Marka Sayfaları ────────────────────────────
    const brandPages: MetadataRoute.Sitemap = brands.map(b => ({
        url: `${BASE_URL}/araclar/${b.slug}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ── Model Sayfaları ────────────────────────────
    const vehiclePages: MetadataRoute.Sitemap = vehicles.map(v => ({
        url: `${BASE_URL}/araclar/${brandSlug(v.brand)}/${modelSlug(v.model)}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // ── Motor Sayfaları ────────────────────────────
    const motorPages: MetadataRoute.Sitemap = [];
    for (const v of vehicles) {
        const engines = getEnginesByVehicleId(v.id);
        for (const eng of engines) {
            motorPages.push({
                url: `${BASE_URL}/araclar/${brandSlug(v.brand)}/${modelSlug(v.model)}/${eng.slug}`,
                lastModified: CONTENT_LAST_UPDATED,
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            });
        }
    }

    // ── Rehber Sayfaları ───────────────────────────
    const guidePages: MetadataRoute.Sitemap = guidesData.map(g => ({
        url: `${BASE_URL}/rehber/${g.slug}`,
        lastModified: new Date(g.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...brandPages, ...vehiclePages, ...motorPages, ...guidePages];
}
