import Link from 'next/link';
import type { VehicleSummary } from '@/lib/dataService';
import VehicleRiskBadge from './VehicleRiskBadge';
import { ChevronRight, AlertTriangle, FileText } from 'lucide-react';

const scoreTheme = {
    low: { ring: '#16A34A', track: '#DCFCE7', text: '#15803D' },
    medium: { ring: '#CA8A04', track: '#FEF9C3', text: '#A16207' },
    high: { ring: '#DC2626', track: '#FEE2E2', text: '#B91C1C' },
} as const;

export default function VehicleCard({ vehicle }: { vehicle: VehicleSummary }) {
    const risk = vehicle.dnaScore >= 80 ? 'low' : vehicle.dnaScore >= 60 ? 'medium' : 'high';
    const theme = scoreTheme[risk];
    const angle = Math.round((vehicle.dnaScore / 100) * 360);

    return (
        <Link
            href={vehicle.href}
            className="card relative block p-5 group overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
            aria-label={`${vehicle.brand} ${vehicle.model}`}
        >
            {/* Risk accent bar */}
            <span
                className="absolute left-0 top-0 h-full w-1 opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: theme.ring }}
                aria-hidden
            />

            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1">{vehicle.brand}</p>
                    <h3 className="text-[15px] font-bold text-[#0F0F10] leading-snug group-hover:text-[#A91D3A] transition-colors line-clamp-2">{vehicle.model}</h3>
                </div>

                {/* Score gauge */}
                <div className="flex-shrink-0">
                    <div
                        className="relative w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ background: `conic-gradient(${theme.ring} ${angle}deg, ${theme.track} ${angle}deg)` }}
                    >
                        <div className="absolute inset-[3px] rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-[17px] font-extrabold leading-none tracking-tight" style={{ color: theme.text }}>{vehicle.dnaScore}</span>
                            <span className="text-[7px] font-bold text-[#A1A1AA] uppercase tracking-wider">Skor</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <VehicleRiskBadge level={risk} />
                <span className="text-[10px] text-[#71717A] bg-[#F7F7F8] px-2 py-0.5 rounded font-medium">{vehicle.year}</span>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 text-[11px] text-[#71717A]">
                {vehicle.issueCount > 0 && (
                    <span className="flex items-center gap-1.5">
                        <AlertTriangle size={12} className="text-[#A91D3A]" />
                        <strong className="text-[#0F0F10]">{vehicle.issueCount}</strong> kronik kusur
                    </span>
                )}
                {vehicle.totalReports > 0 && (
                    <span className="flex items-center gap-1.5">
                        <FileText size={12} className="text-[#A1A1AA]" />
                        <strong className="text-[#0F0F10]">{vehicle.totalReports.toLocaleString('tr-TR')}</strong> rapor
                    </span>
                )}
            </div>

            {/* Action */}
            <div className="flex items-center justify-end mt-4 pt-3 border-t border-[#F0F0F2]">
                <span className="text-[11px] font-semibold text-[#A91D3A] flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                    Raporu İncele <ChevronRight size={13} />
                </span>
            </div>
        </Link>
    );
}
