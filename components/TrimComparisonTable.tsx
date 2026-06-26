'use client';

import { useState } from 'react';
import type { VehicleTrimData } from '@/data/trim-dna';
import { Package, ChevronDown, ChevronUp, Check, X, CircleDot, Info } from 'lucide-react';

interface TrimComparisonTableProps {
    trimData: VehicleTrimData;
    vehicleName: string;
}

const statusConfig = {
    standard: {
        icon: <Check size={14} strokeWidth={3} />,
        label: 'Standart',
        bgClass: 'bg-emerald-50',
        textClass: 'text-emerald-600',
        dotClass: 'bg-emerald-500',
    },
    optional: {
        icon: <CircleDot size={14} strokeWidth={2.5} />,
        label: 'Opsiyonel',
        bgClass: 'bg-amber-50',
        textClass: 'text-amber-600',
        dotClass: 'bg-amber-500',
    },
    unavailable: {
        icon: <X size={14} strokeWidth={3} />,
        label: 'Yok',
        bgClass: 'bg-zinc-50',
        textClass: 'text-zinc-300',
        dotClass: 'bg-zinc-300',
    },
};

export default function TrimComparisonTable({ trimData, vehicleName }: TrimComparisonTableProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [highlightedTrim, setHighlightedTrim] = useState<number | null>(null);

    const { features, trims } = trimData;

    // Find the "best" trim (the one with most standard features)
    const bestTrimIdx = trims.reduce((bestIdx, trim, idx) => {
        const currentCount = trim.availability.filter(a => a === 'standard').length;
        const bestCount = trims[bestIdx].availability.filter(a => a === 'standard').length;
        return currentCount > bestCount ? idx : bestIdx;
    }, 0);

    return (
        <div className="card-elevated overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-[#FAFAFA] transition-colors text-left"
            >
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FDF0F2] flex items-center justify-center text-[#A91D3A]">
                        <Package size={16} />
                    </div>
                    <div>
                        <h2 className="text-[14px] font-bold text-[#0F0F10]">Donanım Paketi Karşılaştırması</h2>
                        <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                            {trims.length} paket · {features.length} özellik karşılaştırması
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-[#A91D3A] bg-[#FDF0F2] px-2 py-1 rounded-full hidden sm:block">
                        {trims.map(t => t.name).join(' → ')}
                    </span>
                    {isExpanded ? <ChevronUp size={16} className="text-[#A1A1AA]" /> : <ChevronDown size={16} className="text-[#A1A1AA]" />}
                </div>
            </button>

            {/* Table */}
            {isExpanded && (
                <div className="border-t border-[#EBEBED]">
                    {/* Legend */}
                    <div className="flex items-center gap-4 px-5 sm:px-6 py-3 bg-[#FAFAFA] border-b border-[#EBEBED]">
                        {Object.entries(statusConfig).map(([key, config]) => (
                            <div key={key} className="flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
                                <span className="text-[10px] text-[#71717A] font-medium">{config.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Scrollable Table */}
                    <div className="overflow-x-auto trim-table-scroll">
                        <table className="w-full min-w-[500px]">
                            {/* Column Headers */}
                            <thead>
                                <tr className="border-b border-[#EBEBED]">
                                    <th className="text-left text-[11px] font-semibold text-[#71717A] uppercase tracking-wider py-3.5 px-5 sm:px-6 bg-white sticky left-0 z-10 min-w-[160px]">
                                        Özellik
                                    </th>
                                    {trims.map((trim, idx) => (
                                        <th
                                            key={idx}
                                            className={`text-center py-3.5 px-3 min-w-[100px] transition-colors cursor-pointer ${
                                                highlightedTrim === idx ? 'bg-[#FDF0F2]' : 'bg-white hover:bg-[#FAFAFA]'
                                            } ${idx === bestTrimIdx ? 'relative' : ''}`}
                                            onMouseEnter={() => setHighlightedTrim(idx)}
                                            onMouseLeave={() => setHighlightedTrim(null)}
                                        >
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`text-[12px] font-bold ${
                                                    idx === bestTrimIdx ? 'text-[#A91D3A]' : 'text-[#0F0F10]'
                                                }`}>
                                                    {trim.name}
                                                </span>
                                                {idx === bestTrimIdx && (
                                                    <span className="text-[8px] font-bold bg-[#A91D3A] text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                                        En Dolu
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Feature Rows */}
                            <tbody>
                                {features.map((feature, fIdx) => (
                                    <tr
                                        key={fIdx}
                                        className={`border-b border-[#F0F0F2] last:border-b-0 transition-colors ${
                                            fIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                                        } hover:bg-[#F5F5F7]`}
                                        style={{
                                            animation: `trimRowFadeIn 0.3s ease-out ${fIdx * 0.03}s both`,
                                        }}
                                    >
                                        {/* Feature Name — Sticky */}
                                        <td className={`text-[12px] font-medium text-[#3F3F46] py-3 px-5 sm:px-6 sticky left-0 z-10 ${
                                            fIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                                        }`}>
                                            <span className="flex items-center gap-1.5">
                                                {feature}
                                            </span>
                                        </td>

                                        {/* Availability Cells */}
                                        {trims.map((trim, tIdx) => {
                                            const status = trim.availability[fIdx] || 'unavailable';
                                            const config = statusConfig[status];
                                            return (
                                                <td
                                                    key={tIdx}
                                                    className={`text-center py-3 px-3 transition-colors ${
                                                        highlightedTrim === tIdx ? 'bg-[#FDF0F2]/50' : ''
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-center" title={config.label}>
                                                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${config.bgClass} ${config.textClass} transition-transform hover:scale-110`}>
                                                            {config.icon}
                                                        </span>
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>

                            {/* Summary Footer */}
                            <tfoot>
                                <tr className="border-t-2 border-[#EBEBED] bg-[#FAFAFA]">
                                    <td className="text-[11px] font-bold text-[#71717A] py-3.5 px-5 sm:px-6 sticky left-0 z-10 bg-[#FAFAFA] uppercase tracking-wider">
                                        Standart Özellik
                                    </td>
                                    {trims.map((trim, tIdx) => {
                                        const standardCount = trim.availability.filter(a => a === 'standard').length;
                                        const percentage = Math.round((standardCount / features.length) * 100);
                                        return (
                                            <td key={tIdx} className="text-center py-3.5 px-3">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className={`text-[14px] font-extrabold ${
                                                        tIdx === bestTrimIdx ? 'text-[#A91D3A]' : 'text-[#0F0F10]'
                                                    }`}>
                                                        {standardCount}/{features.length}
                                                    </span>
                                                    {/* Mini progress bar */}
                                                    <div className="w-12 h-1 rounded-full bg-[#EBEBED] overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-700 ${
                                                                tIdx === bestTrimIdx ? 'bg-[#A91D3A]' : 'bg-[#71717A]'
                                                            }`}
                                                            style={{ width: `${percentage}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Info Footer */}
                    <div className="px-5 sm:px-6 py-3 bg-[#FAFAFA] border-t border-[#EBEBED] flex items-start gap-2">
                        <Info size={12} className="text-[#A1A1AA] mt-0.5 flex-shrink-0" />
                        <p className="text-[10px] text-[#A1A1AA] leading-relaxed">
                            Donanım bilgileri resmi fiyat listeleri ve bayii kataloglarından derlenmiştir. Üretim dönemine göre farklılık gösterebilir.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
