import type { MetadataRoute } from 'next';
import { getAllVehicles, getAllBrands, brandSlug, modelSlug } from '@/lib/dataService';
import { guidesData } from '@/data/guides';

const BASE_URL = 'https://otokusur.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const vehicles = getAllVehicles();
    const brands = getAllBrands();

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
        { url: `${BASE_URL}/araclar`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${BASE_URL}/rehber`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ];

    const brandPages: MetadataRoute.Sitemap = brands.map(b => ({
        url: `${BASE_URL}/araclar/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const vehiclePages: MetadataRoute.Sitemap = vehicles.map(v => ({
        url: `${BASE_URL}/araclar/${brandSlug(v.brand)}/${modelSlug(v.model)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const guidePages: MetadataRoute.Sitemap = guidesData.map(g => ({
        url: `${BASE_URL}/rehber/${g.slug}`,
        lastModified: new Date(g.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...brandPages, ...vehiclePages, ...guidePages];
}
