'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllVehicles, getEnginesByVehicleId, getRiskLevel, getRiskLabel, brandSlug, modelSlug } from '@/lib/dataService';
import type { VehicleDNA } from '@/data/vehicle-dna';
import VehicleRiskBadge from './VehicleRiskBadge';
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Star, Fuel, Settings, Scale } from 'lucide-react';

function VehicleSelector({ label, selectedId, onChange }: {
    label: string;
    selectedId: number | null;
    onChange: (id: number | null) => void;
}) {
    const allVehicles = getAllVehicles();
    const brands = useMemo(() => [...new Set(allVehicles.map(v => v.brand))].sort(), [allVehicles]);
    const [selectedBrand, setSelectedBrand] = useState('');

    const models = useMemo(() => {
        if (!selectedBrand) return [];
        return allVehicles.filter(v => v.brand === selectedBrand);
    }, [selectedBrand, allVehicles]);

    return (
        <div className="space-y-3">
            <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em]">{label}</p>
            <select
                className="select-field"
                value={selectedBrand}
                onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    onChange(null);
                }}
            >
                <option value="">Marka Seçin</option>
                {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <select
                className="select-field"
                value={selectedId ?? ''}
                onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
                disabled={!selectedBrand}
            >
                <option value="">Model Seçin</option>
                {models.map(m => <option key={m.id} value={m.id}>{m.model} ({m.year})</option>)}
            </select>
        </div>
    );
}

function ScoreBar({ score, label, color }: { score: number; label: string; color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#71717A]">{label}</span>
                <span className="text-[13px] font-bold" style={{ color }}>{score}/100</span>
            </div>
            <div className="h-2 bg-[#F0F0F2] rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${score}%`, backgroundColor: color }}
                />
            </div>
        </div>
    );
}

function ComparisonColumn({ vehicle, engines }: { vehicle: VehicleDNA; engines: ReturnType<typeof getEnginesByVehicleId> }) {
    const risk = getRiskLevel(vehicle.dnaScore);
    return (
        <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="text-center mb-5">
                <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1">{vehicle.brand}</p>
                <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#0F0F10] tracking-tight leading-snug mb-2">{vehicle.model}</h3>
                <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
                    <VehicleRiskBadge level={risk} size="sm" />
                    <span className="text-[10px] text-[#A1A1AA] bg-[#F7F7F8] px-2 py-0.5 rounded font-medium">{vehicle.year}</span>
                    {vehicle.ncapStars && (
                        <span className="text-[10px] text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded font-medium flex items-center gap-0.5">
                            <Star size={9} className="fill-amber-500 text-amber-500" /> {vehicle.ncapStars}★
                        </span>
                    )}
                </div>
                <div className="inline-flex flex-col items-center">
                    <span className="text-[32px] font-extrabold text-[#0F0F10] tracking-tight leading-none">{vehicle.dnaScore}</span>
                    <span className="text-[8px] font-bold text-[#A1A1AA] uppercase tracking-wider mt-0.5">DNA Skoru</span>
                </div>
            </div>

            {/* Strengths */}
            <div className="mb-4">
                <p className="text-[10px] font-bold text-[#16A34A] uppercase tracking-[0.08em] mb-2 flex items-center gap-1">
                    <CheckCircle2 size={10} /> Güçlü Yönler
                </p>
                <ul className="space-y-1.5">
                    {vehicle.strengths.slice(0, 4).map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#3F3F46]">
                            <CheckCircle2 size={11} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{s}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Weaknesses */}
            <div className="mb-4">
                <p className="text-[10px] font-bold text-[#A91D3A] uppercase tracking-[0.08em] mb-2 flex items-center gap-1">
                    <XCircle size={10} /> Zayıf Yönler
                </p>
                <ul className="space-y-1.5">
                    {vehicle.weaknesses.slice(0, 4).map((w, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#3F3F46]">
                            <XCircle size={11} className="text-[#A91D3A] mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{w}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chronic Issues */}
            <div className="mb-4">
                <p className="text-[10px] font-bold text-[#CA8A04] uppercase tracking-[0.08em] mb-2 flex items-center gap-1">
                    <AlertTriangle size={10} /> Kronik Kusurlar ({vehicle.chronicIssues.length})
                </p>
                <div className="space-y-1.5">
                    {vehicle.chronicIssues.slice(0, 4).map(issue => (
                        <div key={issue.id} className="flex items-center gap-1.5 text-[11px]">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${issue.severity === 'high' ? 'bg-[#A91D3A]' : issue.severity === 'medium' ? 'bg-[#CA8A04]' : 'bg-[#3B82F6]'}`} />
                            <span className="text-[#3F3F46] line-clamp-1">{issue.title}</span>
                        </div>
                    ))}
                    {vehicle.chronicIssues.length > 4 && (
                        <p className="text-[9px] text-[#A1A1AA] pl-3">+{vehicle.chronicIssues.length - 4} daha...</p>
                    )}
                </div>
            </div>

            {/* Engines */}
            <div className="mb-4">
                <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-2 flex items-center gap-1">
                    <Fuel size={10} /> Motor Seçenekleri ({engines.length})
                </p>
                <div className="space-y-1.5">
                    {engines.slice(0, 3).map(eng => (
                        <div key={eng.slug} className="bg-[#F7F7F8] rounded-lg p-2.5">
                            <p className="text-[11px] font-semibold text-[#0F0F10]">{eng.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[9px] text-[#71717A] flex items-center gap-0.5"><Fuel size={8} /> {eng.fuelType}</span>
                                <span className="text-[9px] text-[#71717A] flex items-center gap-0.5"><Settings size={8} /> {eng.transmission}</span>
                                <span className="text-[9px] font-bold text-[#0F0F10] ml-auto">{eng.score}</span>
                            </div>
                        </div>
                    ))}
                    {engines.length > 3 && (
                        <p className="text-[9px] text-[#A1A1AA] text-center">+{engines.length - 3} motor daha</p>
                    )}
                </div>
            </div>

            {/* CTA */}
            <Link
                href={`/araclar/${brandSlug(vehicle.brand)}/${modelSlug(vehicle.model)}`}
                className="btn-primary w-full text-center justify-center text-[12px] py-2.5"
            >
                Detaylı Rapor <ArrowRight size={12} />
            </Link>
        </div>
    );
}

export default function ComparisonClient() {
    const [leftId, setLeftId] = useState<number | null>(null);
    const [rightId, setRightId] = useState<number | null>(null);
    const allVehicles = getAllVehicles();

    const leftVehicle = useMemo(() => leftId ? allVehicles.find(v => v.id === leftId) : null, [leftId, allVehicles]);
    const rightVehicle = useMemo(() => rightId ? allVehicles.find(v => v.id === rightId) : null, [rightId, allVehicles]);

    const leftEngines = useMemo(() => leftId ? getEnginesByVehicleId(leftId) : [], [leftId]);
    const rightEngines = useMemo(() => rightId ? getEnginesByVehicleId(rightId) : [], [rightId]);

    const bothSelected = leftVehicle && rightVehicle;

    return (
        <div>
            {/* Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="card-elevated p-5">
                    <VehicleSelector label="1. Araç" selectedId={leftId} onChange={setLeftId} />
                </div>
                <div className="card-elevated p-5">
                    <VehicleSelector label="2. Araç" selectedId={rightId} onChange={setRightId} />
                </div>
            </div>

            {/* Comparison */}
            {bothSelected ? (
                <div className="space-y-6">
                    {/* Score Comparison Bar */}
                    <div className="card-dark p-6 sm:p-8">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Scale size={16} className="text-[#A91D3A]" />
                            <h2 className="text-[16px] font-bold text-white">Skor Karşılaştırması</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ScoreBar
                                score={leftVehicle.dnaScore}
                                label={`${leftVehicle.brand} ${leftVehicle.model}`}
                                color={leftVehicle.dnaScore >= 80 ? '#16A34A' : leftVehicle.dnaScore >= 60 ? '#CA8A04' : '#A91D3A'}
                            />
                            <ScoreBar
                                score={rightVehicle.dnaScore}
                                label={`${rightVehicle.brand} ${rightVehicle.model}`}
                                color={rightVehicle.dnaScore >= 80 ? '#16A34A' : rightVehicle.dnaScore >= 60 ? '#CA8A04' : '#A91D3A'}
                            />
                        </div>

                        {/* Winner indication */}
                        {leftVehicle.dnaScore !== rightVehicle.dnaScore && (
                            <div className="mt-5 pt-4 border-t border-white/10 text-center">
                                <p className="text-[11px] text-white/50">
                                    <span className="text-white font-bold">
                                        {leftVehicle.dnaScore > rightVehicle.dnaScore
                                            ? `${leftVehicle.brand} ${leftVehicle.model}`
                                            : `${rightVehicle.brand} ${rightVehicle.model}`}
                                    </span>
                                    {' '}DNA skorunda{' '}
                                    <span className="text-[#16A34A] font-bold">
                                        {Math.abs(leftVehicle.dnaScore - rightVehicle.dnaScore)} puan
                                    </span>
                                    {' '}daha yüksek
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Quick Stats Comparison */}
                    <div className="card-elevated overflow-hidden">
                        <div className="grid grid-cols-3 text-center border-b border-[#EBEBED]">
                            <div className="p-3 bg-[#F7F7F8] text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Özellik</div>
                            <div className="p-3 bg-[#F7F7F8] text-[10px] font-bold text-[#0F0F10] uppercase tracking-wider border-x border-[#EBEBED] line-clamp-1">{leftVehicle.brand} {leftVehicle.model}</div>
                            <div className="p-3 bg-[#F7F7F8] text-[10px] font-bold text-[#0F0F10] uppercase tracking-wider line-clamp-1">{rightVehicle.brand} {rightVehicle.model}</div>
                        </div>
                        {[
                            { label: 'DNA Skoru', left: `${leftVehicle.dnaScore}/100`, right: `${rightVehicle.dnaScore}/100`, leftBetter: leftVehicle.dnaScore > rightVehicle.dnaScore, rightBetter: rightVehicle.dnaScore > leftVehicle.dnaScore },
                            { label: 'Risk Seviyesi', left: getRiskLabel(getRiskLevel(leftVehicle.dnaScore)), right: getRiskLabel(getRiskLevel(rightVehicle.dnaScore)), leftBetter: leftVehicle.dnaScore > rightVehicle.dnaScore, rightBetter: rightVehicle.dnaScore > leftVehicle.dnaScore },
                            { label: 'Kronik Kusur', left: `${leftVehicle.chronicIssues.length}`, right: `${rightVehicle.chronicIssues.length}`, leftBetter: leftVehicle.chronicIssues.length < rightVehicle.chronicIssues.length, rightBetter: rightVehicle.chronicIssues.length < leftVehicle.chronicIssues.length },
                            { label: 'Motor Seçeneği', left: `${leftEngines.length}`, right: `${rightEngines.length}`, leftBetter: false, rightBetter: false },
                            { label: 'NCAP', left: leftVehicle.ncapStars ? `${leftVehicle.ncapStars}★` : '—', right: rightVehicle.ncapStars ? `${rightVehicle.ncapStars}★` : '—', leftBetter: (leftVehicle.ncapStars || 0) > (rightVehicle.ncapStars || 0), rightBetter: (rightVehicle.ncapStars || 0) > (leftVehicle.ncapStars || 0) },
                            { label: 'Yıl', left: leftVehicle.year, right: rightVehicle.year, leftBetter: false, rightBetter: false },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-3 text-center border-b border-[#F0F0F2] last:border-0">
                                <div className="p-3 text-[11px] text-[#71717A] font-medium">{row.label}</div>
                                <div className={`p-3 text-[12px] font-bold border-x border-[#F0F0F2] ${row.leftBetter ? 'text-[#16A34A] bg-[#F0FDF4]' : 'text-[#0F0F10]'}`}>{row.left}</div>
                                <div className={`p-3 text-[12px] font-bold ${row.rightBetter ? 'text-[#16A34A] bg-[#F0FDF4]' : 'text-[#0F0F10]'}`}>{row.right}</div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Side-by-Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="card-elevated p-5">
                            <ComparisonColumn vehicle={leftVehicle} engines={leftEngines} />
                        </div>
                        <div className="card-elevated p-5">
                            <ComparisonColumn vehicle={rightVehicle} engines={rightEngines} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card-elevated p-12 text-center">
                    <Scale size={40} className="text-[#D4D4D8] mx-auto mb-4" />
                    <h3 className="text-[16px] font-bold text-[#0F0F10] mb-2">İki Araç Seçin</h3>
                    <p className="text-[12px] text-[#71717A] max-w-sm mx-auto">
                        Karşılaştırmak istediğiniz iki aracı yukarıdan seçin. DNA skoru, kronik kusurlar, güçlü ve zayıf yönler yan yana gösterilecek.
                    </p>
                </div>
            )}
        </div>
    );
}
