'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import VehicleRiskBadge from './VehicleRiskBadge';
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Star, Fuel, Scale } from 'lucide-react';

export interface CompareOption {
    id: number;
    brand: string;
    model: string;
    year: string;
}

interface CompareEngine {
    slug: string;
    name: string;
    fuelType: string;
    transmission: string;
    score: number;
    description?: string;
    pros: string[];
    cons: string[];
    chronicIssues: Array<{ title: string; severity: 'low' | 'medium' | 'high'; description: string }>;
}

interface CompareVehicle extends CompareOption {
    dnaScore: number;
    strengths: string[];
    weaknesses: string[];
    chronicIssues: Array<{ id: number; title: string; severity: 'low' | 'medium' | 'high' }>;
    ncapStars?: number;
    href: string;
    engines: CompareEngine[];
}

const riskLevel = (score: number) => score >= 80 ? 'low' : score >= 60 ? 'medium' : 'high';
const riskLabel = (score: number) => score >= 80 ? 'Düşük Risk' : score >= 60 ? 'Orta Risk' : 'Yüksek Risk';

function VehicleSelector({ label, selectedId, onChange, options, engines, selectedEngineSlug, onEngineChange, engineLoading }: {
    label: string;
    selectedId: number | null;
    onChange: (id: number | null) => void;
    options: CompareOption[];
    engines: CompareEngine[];
    selectedEngineSlug: string;
    onEngineChange: (slug: string) => void;
    engineLoading: boolean;
}) {
    const brands = useMemo(() => [...new Set(options.map(v => v.brand))].sort((a, b) => a.localeCompare(b, 'tr')), [options]);
    const [selectedBrand, setSelectedBrand] = useState('');

    const models = useMemo(() => {
        if (!selectedBrand) return [];
        return options.filter(v => v.brand === selectedBrand);
    }, [selectedBrand, options]);

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
            <select
                className="select-field"
                value={selectedEngineSlug}
                onChange={(e) => onEngineChange(e.target.value)}
                disabled={!selectedId || engineLoading || engines.length === 0}
            >
                <option value="">
                    {engineLoading ? 'Motorlar yükleniyor...' : engines.length === 0 && selectedId ? 'Motor verisi yok — model bazlı' : 'Motor Seçin'}
                </option>
                {engines.map((engine) => (
                    <option key={engine.slug} value={engine.slug}>
                        {engine.name} · {engine.transmission}
                    </option>
                ))}
            </select>
            {selectedId && engines.length > 0 && !selectedEngineSlug && !engineLoading && (
                <p className="text-[10px] text-[#A91D3A] font-medium flex items-center gap-1">
                    <AlertTriangle size={10} /> Motor seçimi karşılaştırma için gereklidir.
                </p>
            )}
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

function ComparisonColumn({ vehicle, selectedEngine }: { vehicle: CompareVehicle; selectedEngine: CompareEngine | null }) {
    const risk = riskLevel(vehicle.dnaScore);
    const detailHref = selectedEngine ? `${vehicle.href}/${selectedEngine.slug}` : vehicle.href;
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

            {selectedEngine && (
                <div className="mb-5 rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] p-4">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="text-[9px] font-bold text-[#A91D3A] uppercase tracking-[0.08em]">Seçilen Motor</p>
                            <h4 className="text-[14px] font-bold text-[#0F0F10] mt-0.5">{selectedEngine.name}</h4>
                            <p className="text-[10px] text-[#71717A] mt-1">{selectedEngine.fuelType} · {selectedEngine.transmission}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-[24px] font-extrabold text-[#0F0F10]">{selectedEngine.score}</span>
                            <p className="text-[8px] font-bold text-[#A1A1AA] uppercase">Motor Skoru</p>
                        </div>
                    </div>
                    {selectedEngine.description && (
                        <p className="text-[10px] text-[#52525B] leading-relaxed mt-3">{selectedEngine.description}</p>
                    )}
                    <div className="grid grid-cols-1 gap-2 mt-3">
                        {selectedEngine.pros.slice(0, 3).map((item) => (
                            <div key={item} className="flex items-start gap-1.5 text-[10px] text-[#166534]">
                                <CheckCircle2 size={10} className="mt-0.5 flex-shrink-0" /> {item}
                            </div>
                        ))}
                        {selectedEngine.cons.slice(0, 3).map((item) => (
                            <div key={item} className="flex items-start gap-1.5 text-[10px] text-[#991B1B]">
                                <XCircle size={10} className="mt-0.5 flex-shrink-0" /> {item}
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#E4E4E7]">
                        <p className="text-[9px] font-bold text-[#CA8A04] uppercase tracking-[0.08em] mb-2">
                            Motora Bağlı Kontroller ({selectedEngine.chronicIssues.length})
                        </p>
                        <div className="space-y-1.5">
                            {selectedEngine.chronicIssues.map((issue) => (
                                <div key={issue.title} className="flex items-start gap-1.5 text-[10px] text-[#3F3F46]">
                                    <span className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${issue.severity === 'high' ? 'bg-[#A91D3A]' : issue.severity === 'medium' ? 'bg-[#CA8A04]' : 'bg-[#3B82F6]'}`} />
                                    <span>{issue.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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

            {/* CTA */}
            <Link
                href={detailHref}
                className="btn-primary w-full text-center justify-center text-[12px] py-2.5"
            >
                {selectedEngine ? 'Motor Raporunu Aç' : 'Detaylı Rapor'} <ArrowRight size={12} />
            </Link>
        </div>
    );
}

export default function ComparisonClient({ options }: { options: CompareOption[] }) {
    const [leftId, setLeftId] = useState<number | null>(null);
    const [rightId, setRightId] = useState<number | null>(null);
    const [leftEngineSlug, setLeftEngineSlug] = useState('');
    const [rightEngineSlug, setRightEngineSlug] = useState('');
    const [vehicles, setVehicles] = useState<CompareVehicle[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ids = [leftId, rightId].filter((id): id is number => id !== null);
        if (ids.length === 0) {
            setVehicles([]);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        fetch('/api/compare?ids=' + ids.join(','), { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error('Karşılaştırma verisi alınamadı');
                return response.json() as Promise<{ vehicles: CompareVehicle[] }>;
            })
            .then((data) => setVehicles(data.vehicles))
            .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === 'AbortError') return;
                setVehicles([]);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [leftId, rightId]);

    const leftVehicle = leftId ? vehicles.find(v => v.id === leftId) ?? null : null;
    const rightVehicle = rightId ? vehicles.find(v => v.id === rightId) ?? null : null;
    const leftEngines = leftVehicle?.engines ?? [];
    const rightEngines = rightVehicle?.engines ?? [];
    const leftEngine = leftEngines.find((engine) => engine.slug === leftEngineSlug) ?? null;
    const rightEngine = rightEngines.find((engine) => engine.slug === rightEngineSlug) ?? null;

    const bothVehiclesSelected = Boolean(leftVehicle && rightVehicle);
    const motorsReady = (leftEngines.length === 0 || Boolean(leftEngine))
        && (rightEngines.length === 0 || Boolean(rightEngine));
    const bothSelected = Boolean(leftVehicle && rightVehicle && motorsReady);
    const leftComparisonScore = leftEngine?.score ?? leftVehicle?.dnaScore ?? 0;
    const rightComparisonScore = rightEngine?.score ?? rightVehicle?.dnaScore ?? 0;

    const handleLeftVehicleChange = (id: number | null) => {
        setLeftId(id);
        setLeftEngineSlug('');
    };

    const handleRightVehicleChange = (id: number | null) => {
        setRightId(id);
        setRightEngineSlug('');
    };

    return (
        <div>
            {/* Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="card-elevated p-5">
                    <VehicleSelector
                        label="1. Araç"
                        selectedId={leftId}
                        onChange={handleLeftVehicleChange}
                        options={options}
                        engines={leftEngines}
                        selectedEngineSlug={leftEngineSlug}
                        onEngineChange={setLeftEngineSlug}
                        engineLoading={loading && Boolean(leftId) && !leftVehicle}
                    />
                </div>
                <div className="card-elevated p-5">
                    <VehicleSelector
                        label="2. Araç"
                        selectedId={rightId}
                        onChange={handleRightVehicleChange}
                        options={options}
                        engines={rightEngines}
                        selectedEngineSlug={rightEngineSlug}
                        onEngineChange={setRightEngineSlug}
                        engineLoading={loading && Boolean(rightId) && !rightVehicle}
                    />
                </div>
            </div>

            {/* Comparison */}
            {bothSelected && leftVehicle && rightVehicle ? (
                <div className="space-y-6">
                    {/* Score Comparison Bar */}
                    <div className="card-dark p-6 sm:p-8">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Scale size={16} className="text-[#A91D3A]" />
                            <h2 className="text-[16px] font-bold text-white">Seçilen Motor Skoru Karşılaştırması</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ScoreBar
                                score={leftComparisonScore}
                                label={`${leftVehicle.brand} ${leftVehicle.model}${leftEngine ? ` · ${leftEngine.name}` : ''}`}
                                color={leftComparisonScore >= 80 ? '#16A34A' : leftComparisonScore >= 60 ? '#CA8A04' : '#A91D3A'}
                            />
                            <ScoreBar
                                score={rightComparisonScore}
                                label={`${rightVehicle.brand} ${rightVehicle.model}${rightEngine ? ` · ${rightEngine.name}` : ''}`}
                                color={rightComparisonScore >= 80 ? '#16A34A' : rightComparisonScore >= 60 ? '#CA8A04' : '#A91D3A'}
                            />
                        </div>

                        {/* Winner indication */}
                        {leftComparisonScore !== rightComparisonScore && (
                            <div className="mt-5 pt-4 border-t border-white/10 text-center">
                                <p className="text-[11px] text-white/50">
                                    <span className="text-white font-bold">
                                        {leftComparisonScore > rightComparisonScore
                                            ? `${leftVehicle.brand} ${leftEngine?.name ?? leftVehicle.model}`
                                            : `${rightVehicle.brand} ${rightEngine?.name ?? rightVehicle.model}`}
                                    </span>
                                    {' '}seçilen motor skorunda{' '}
                                    <span className="text-[#16A34A] font-bold">
                                        {Math.abs(leftComparisonScore - rightComparisonScore)} puan
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
                            { label: 'Model DNA Skoru', left: `${leftVehicle.dnaScore}/100`, right: `${rightVehicle.dnaScore}/100`, leftBetter: leftVehicle.dnaScore > rightVehicle.dnaScore, rightBetter: rightVehicle.dnaScore > leftVehicle.dnaScore },
                            { label: 'Seçilen Motor', left: leftEngine?.name ?? 'Model bazlı', right: rightEngine?.name ?? 'Model bazlı', leftBetter: false, rightBetter: false },
                            { label: 'Motor Skoru', left: leftEngine ? `${leftEngine.score}/100` : '—', right: rightEngine ? `${rightEngine.score}/100` : '—', leftBetter: leftComparisonScore > rightComparisonScore, rightBetter: rightComparisonScore > leftComparisonScore },
                            { label: 'Motor Risk Seviyesi', left: leftEngine ? riskLabel(leftEngine.score) : '—', right: rightEngine ? riskLabel(rightEngine.score) : '—', leftBetter: leftComparisonScore > rightComparisonScore, rightBetter: rightComparisonScore > leftComparisonScore },
                            { label: 'Model Kusuru', left: `${leftVehicle.chronicIssues.length}`, right: `${rightVehicle.chronicIssues.length}`, leftBetter: leftVehicle.chronicIssues.length < rightVehicle.chronicIssues.length, rightBetter: rightVehicle.chronicIssues.length < leftVehicle.chronicIssues.length },
                            { label: 'Motor Kontrolü', left: `${leftEngine?.chronicIssues.length ?? 0}`, right: `${rightEngine?.chronicIssues.length ?? 0}`, leftBetter: (leftEngine?.chronicIssues.length ?? 0) < (rightEngine?.chronicIssues.length ?? 0), rightBetter: (rightEngine?.chronicIssues.length ?? 0) < (leftEngine?.chronicIssues.length ?? 0) },
                            { label: 'Yakıt', left: leftEngine?.fuelType ?? '—', right: rightEngine?.fuelType ?? '—', leftBetter: false, rightBetter: false },
                            { label: 'Şanzıman', left: leftEngine?.transmission ?? '—', right: rightEngine?.transmission ?? '—', leftBetter: false, rightBetter: false },
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
                            <ComparisonColumn vehicle={leftVehicle} selectedEngine={leftEngine} />
                        </div>
                        <div className="card-elevated p-5">
                            <ComparisonColumn vehicle={rightVehicle} selectedEngine={rightEngine} />
                        </div>
                    </div>
                </div>
            ) : bothVehiclesSelected ? (
                <div className="card-elevated p-10 text-center border border-[#F3D5DB]">
                    <Fuel size={36} className="text-[#A91D3A] mx-auto mb-3" />
                    <h3 className="text-[16px] font-bold text-[#0F0F10] mb-2">Motorları Seçin</h3>
                    <p className="text-[12px] text-[#71717A] max-w-md mx-auto">
                        Kronik kusurlar motor ve şanzıman kombinasyonuna göre değişir. İki aracın motorunu da seçtiğinizde model ve motor riskleri ayrı ayrı karşılaştırılacak.
                    </p>
                </div>
            ) : loading ? (
                <div className="skeleton h-96 rounded-2xl" role="status" aria-label="Karşılaştırma yükleniyor" />
            ) : (
                <div className="card-elevated p-12 text-center">
                    <Scale size={40} className="text-[#D4D4D8] mx-auto mb-4" />
                    <h3 className="text-[16px] font-bold text-[#0F0F10] mb-2">İki Araç Seçin</h3>
                    <p className="text-[12px] text-[#71717A] max-w-sm mx-auto">
                        Önce iki aracı, ardından motor ve şanzıman seçeneklerini seçin. Model ve motora bağlı kronik kusurlar ayrı ayrı gösterilecek.
                    </p>
                </div>
            )}
        </div>
    );
}
