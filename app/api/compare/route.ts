import { NextRequest, NextResponse } from 'next/server';
import { brandSlug, getEnginesByVehicleId, getVehicleById, modelSlug } from '@/lib/dataService';

export function GET(request: NextRequest) {
    const ids = (request.nextUrl.searchParams.get('ids') ?? '')
        .split(',')
        .map((value) => Number.parseInt(value, 10))
        .filter(Number.isFinite)
        .slice(0, 2);

    const vehicles = ids.flatMap((id) => {
        const vehicle = getVehicleById(id);
        if (!vehicle) return [];

        return [{
            id: vehicle.id,
            brand: vehicle.brand,
            model: vehicle.model,
            year: vehicle.year,
            dnaScore: vehicle.dnaScore,
            strengths: vehicle.strengths,
            weaknesses: vehicle.weaknesses,
            chronicIssues: vehicle.chronicIssues.map(({ id: issueId, title, severity }) => ({ id: issueId, title, severity })),
            ncapStars: vehicle.ncapStars,
            href: '/araclar/' + brandSlug(vehicle.brand) + '/' + modelSlug(vehicle.model),
            engines: getEnginesByVehicleId(vehicle.id).map(({ slug, name, fuelType, transmission, score }) => ({
                slug,
                name,
                fuelType,
                transmission,
                score,
            })),
        }];
    });

    return NextResponse.json(
        { vehicles },
        { headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' } },
    );
}
