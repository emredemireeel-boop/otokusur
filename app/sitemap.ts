import type { MetadataRoute } from 'next';
import { guidesData } from '@/data/guides';
import { getAllBrands, getAllVehicles, getEnginesByVehicleId, brandSlug, modelSlug } from '@/lib/dataService';
import { assessEngineSeoQuality, assessVehicleSeoQuality, SITE_UPDATED_AT, SITE_URL } from '@/lib/seo';

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
    const vehicles = getAllVehicles().filter(vehicle => assessVehicleSeoQuality(vehicle).indexable);
    const contentUpdatedAt = new Date(SITE_UPDATED_AT);

    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: contentUpdatedAt },
        { url: SITE_URL + '/araclar', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/karsilastir', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/rehber', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/ariza-rehberi', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/veri-metodolojisi', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/hakkimizda', lastModified: contentUpdatedAt },
        { url: SITE_URL + '/yayin-ilkeleri', lastModified: contentUpdatedAt },
    ];

    const brandPages: MetadataRoute.Sitemap = getAllBrands().map(brand => ({
        url: SITE_URL + '/araclar/' + brand.slug,
        lastModified: contentUpdatedAt,
    }));

    const vehiclePages: MetadataRoute.Sitemap = vehicles.map(vehicle => ({
        url: SITE_URL + '/araclar/' + brandSlug(vehicle.brand) + '/' + modelSlug(vehicle.model),
        lastModified: contentUpdatedAt,
    }));

    const motorPages: MetadataRoute.Sitemap = vehicles.flatMap(vehicle =>
        getEnginesByVehicleId(vehicle.id)
            .filter(engine => assessEngineSeoQuality(engine).indexable)
            .map(engine => ({
                url: SITE_URL + '/araclar/' + brandSlug(vehicle.brand) + '/' + modelSlug(vehicle.model) + '/' + engine.slug,
                lastModified: contentUpdatedAt,
            })),
    );

    const guidePages: MetadataRoute.Sitemap = guidesData.map(guide => ({
        url: SITE_URL + '/rehber/' + guide.slug,
        lastModified: new Date(guide.updatedDate ?? guide.publishDate),
    }));

    const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
    for (const entry of [...staticPages, ...brandPages, ...vehiclePages, ...motorPages, ...guidePages]) {
        byUrl.set(entry.url, entry);
    }

    return Array.from(byUrl.values());
}
