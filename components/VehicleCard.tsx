import Link from 'next/link';
import type { VehicleDNA } from '@/data/vehicle-dna';
import { brandSlug, modelSlug, getRiskLevel } from '@/lib/dataService';
import VehicleRiskBadge from './VehicleRiskBadge';
import { ChevronRight, AlertTriangle } from 'lucide-react';

export default function VehicleCard({ vehicle }: { vehicle: VehicleDNA }) {
    const risk = getRiskLevel(vehicle.dnaScore);
    const href = `/araclar/${brandSlug(vehicle.brand)}/${modelSlug(vehicle.model)}`;

    return (
        <Link href={href} className="card block p-5 group" aria-label={`${vehicle.brand} ${vehicle.model}`}>
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1">{vehicle.brand}</p>
                    <h3 className="text-[14px] font-bold text-[#0F0F10] leading-snug group-hover:text-[#A91D3A] transition-colors line-clamp-2">{vehicle.model}</h3>
                </div>
                <div className="flex flex-col items-center ml-4 flex-shrink-0">
                    <span className="text-[22px] font-extrabold text-[#0F0F10] leading-none tracking-tight">{vehicle.dnaScore}</span>
                    <span className="text-[8px] font-bold text-[#A1A1AA] uppercase tracking-wider mt-0.5">Skor</span>
                </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <VehicleRiskBadge level={risk} />
                <span className="text-[10px] text-[#A1A1AA] bg-[#F7F7F8] px-2 py-0.5 rounded font-medium">{vehicle.year}</span>
            </div>

            {/* Issues count */}
            {vehicle.chronicIssues.length > 0 && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#71717A]">
                    <AlertTriangle size={11} className="text-[#A91D3A]" />
                    <span><strong className="text-[#0F0F10]">{vehicle.chronicIssues.length}</strong> kronik kusur</span>
                </div>
            )}

            {/* Action */}
            <div className="flex items-center justify-end mt-4 pt-3 border-t border-[#F0F0F2]">
                <span className="text-[11px] font-semibold text-[#A91D3A] flex items-center gap-0.5 group-hover:gap-1 transition-all">
                    Raporu İncele <ChevronRight size={12} />
                </span>
            </div>
        </Link>
    );
}
