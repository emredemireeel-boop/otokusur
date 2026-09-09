'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { BrandInfo, VehicleSummary } from '@/lib/dataService';
import VehicleCard from '@/components/VehicleCard';
import SearchFilters from '@/components/SearchFilters';
import EmptyState from '@/components/EmptyState';
import { Search } from 'lucide-react';

interface Props {
    vehicles: VehicleSummary[];
    brands: BrandInfo[];
}

export default function VehicleListClient({ vehicles: allVehicles, brands }: Props) {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [brand, setBrand] = useState('');
    const [fuel, setFuel] = useState('');
    const [risk, setRisk] = useState('');

    const vehicles = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase('tr-TR');

        return allVehicles.filter((vehicle) => {
            const riskLevel = vehicle.dnaScore >= 80 ? 'low' : vehicle.dnaScore >= 60 ? 'medium' : 'high';
            const searchableName = `${vehicle.brand} ${vehicle.model}`.toLocaleLowerCase('tr-TR');
            if (normalizedQuery && !searchableName.includes(normalizedQuery)) return false;
            if (brand && !vehicle.href.startsWith(`/araclar/${brand}/`)) return false;
            if (fuel && !vehicle.fuelTypes.includes(fuel)) return false;
            if (risk && riskLevel !== risk) return false;
            return true;
        });
    }, [allVehicles, query, brand, fuel, risk]);

    return (
        <div className="flex gap-5">
            <SearchFilters
                brands={brands}
                selectedBrand={brand}
                selectedFuel={fuel}
                selectedRisk={risk}
                onBrandChange={setBrand}
                onFuelChange={setFuel}
                onRiskChange={setRisk}
                onClear={() => { setBrand(''); setFuel(''); setRisk(''); }}
            />
            <div className="flex-1 min-w-0">
                <div className="relative mb-5">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Marka veya model ara..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        aria-label="Araç ara"
                        id="listing-search"
                    />
                </div>

                <p className="text-xs text-[#6B7280] mb-3">
                    <strong className="text-[#111827]">{vehicles.length}</strong> araç bulundu
                </p>

                {vehicles.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
                    </div>
                )}
            </div>
        </div>
    );
}
