import { NextRequest, NextResponse } from 'next/server';
import { carEnginesCatalog, carModelsCatalog } from '@/data/catalog';
import { brandSlug, getAllVehicles, getEnginesByVehicleId, modelSlug } from '@/lib/dataService';

const normalize = (value: string) => value.toLocaleLowerCase('tr-TR');

export function GET(request: NextRequest) {
    const brand = request.nextUrl.searchParams.get('brand')?.trim() ?? '';
    const model = request.nextUrl.searchParams.get('model')?.trim() ?? '';
    const year = request.nextUrl.searchParams.get('year')?.trim() ?? '';
    const brandModels = carModelsCatalog[brand] ?? {};
    const models = Object.keys(brandModels).sort((a, b) => a.localeCompare(b, 'tr'));
    const generations = model ? brandModels[model] ?? [] : [];

    const matchedVehicle = brand && model
        ? getAllVehicles().find((vehicle) => {
            const selectedModel = normalize(model);
            const vehicleModel = normalize(vehicle.model);
            const brandMatches = normalize(vehicle.brand) === normalize(brand);
            const modelMatches = vehicleModel.includes(selectedModel) || selectedModel.includes(vehicleModel.split(' ')[0]);
            if (!brandMatches || !modelMatches) return false;

            if (year) {
                const selectedStart = Number.parseInt(year, 10);
                const vehicleStart = Number.parseInt(vehicle.year.match(/\d{4}/)?.[0] ?? '', 10);
                if (Number.isFinite(selectedStart) && Number.isFinite(vehicleStart)) {
                    return Math.abs(selectedStart - vehicleStart) <= 3;
                }
            }

            return true;
        }) ?? null
        : null;

    const vehicleHref = matchedVehicle
        ? `/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}`
        : null;
    const internalEngines = matchedVehicle ? getEnginesByVehicleId(matchedVehicle.id) : [];
    const externalEngines = brand && model && year ? carEnginesCatalog[brand]?.[model]?.[year] ?? [] : [];
    const engines = internalEngines.length > 0
        ? internalEngines.map((engine) => ({
            name: engine.name,
            slug: engine.slug,
            fuelType: engine.fuelType,
            transmission: engine.transmission,
            score: engine.score,
            href: vehicleHref ? `${vehicleHref}/${engine.slug}` : null,
        }))
        : externalEngines.map((engine, index) => ({
            name: engine.n,
            slug: `${engine.n}-${index}`.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9çğıöşü]+/g, '-'),
            fuelType: engine.f,
            transmission: engine.t,
            score: null,
            href: null,
        }));

    return NextResponse.json(
        {
            models,
            generations,
            engines,
            matchedVehicle: matchedVehicle && vehicleHref
                ? { name: `${matchedVehicle.brand} ${matchedVehicle.model}`, href: vehicleHref }
                : null,
            catalogHref: brand && model ? `/katalog/${brandSlug(brand)}/${modelSlug(model)}` : null,
        },
        {
            headers: {
                'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
            },
        },
    );
}
