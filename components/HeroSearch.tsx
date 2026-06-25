'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, X, Fuel, Settings2, Wrench, Calendar } from 'lucide-react';
import { getAllVehicles, getVehiclesByBrand, getEnginesByVehicleId, brandSlug, modelSlug } from '@/lib/dataService';
import type { VehicleDNA } from '@/data/vehicle-dna';
import carModels from '@/data/carmodels.json';
import carModelsWithEngines from '@/data/carmodels-with-engines.json';

// carmodels.json: { brand: { model: [yearRanges] } }
type CarModelsMap = Record<string, Record<string, string[]>>;
const carModelsMap: CarModelsMap = carModels as unknown as CarModelsMap;

// carmodels-with-engines.json: { brand: { model: { yearRange: [{n,f,t}] } } }
interface EngineRaw { n: string; f: string; t: string; }
type EnginesMap = Record<string, Record<string, Record<string, EngineRaw[]>>>;
const enginesMap: EnginesMap = carModelsWithEngines as unknown as EnginesMap;

export default function HeroSearch() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [selectedEngine, setSelectedEngine] = useState('');
    const router = useRouter();

    // Step 1: Brands
    const brands = useMemo(() => Object.keys(carModelsMap).sort(), []);

    // Step 2: Models for selected brand
    const models = useMemo(() => {
        if (!brand) return [];
        const brandData = carModelsMap[brand];
        return brandData ? Object.keys(brandData).sort() : [];
    }, [brand]);

    // Step 3: Year ranges for selected model
    const yearRanges = useMemo(() => {
        if (!brand || !model) return [];
        return carModelsMap[brand]?.[model] || [];
    }, [brand, model]);

    // Match against internal vehicle-dna (kusur raporu)
    const matchedVehicle = useMemo((): VehicleDNA | null => {
        if (!brand || !model) return null;
        return getAllVehicles().find(v => {
            const bMatch = v.brand.toLowerCase() === brand.toLowerCase();
            const mMatch = v.model.toLowerCase().includes(model.toLowerCase())
                || model.toLowerCase().includes(v.model.toLowerCase().split(' ')[0]);
            if (!bMatch || !mMatch) return false;
            // If year is selected, try to match year range in vehicle model name
            if (year) {
                const startYear = parseInt(year);
                const vYearMatch = v.year?.match(/(\d{4})/);
                if (vYearMatch) {
                    const vYear = parseInt(vYearMatch[1]);
                    return Math.abs(startYear - vYear) <= 3; // within 3 years
                }
            }
            return true;
        }) || null;
    }, [brand, model, year]);

    // Internal engines (from kusur raporu)
    const internalEngines = useMemo(() => matchedVehicle ? getEnginesByVehicleId(matchedVehicle.id) : [], [matchedVehicle]);

    // External engines for selected year/generation
    const externalEngines = useMemo((): EngineRaw[] => {
        if (!brand || !model || !year) return [];
        return enginesMap[brand]?.[model]?.[year] || [];
    }, [brand, model, year]);

    // Display engines — internal first, fallback to external
    const hasInternalEngines = internalEngines.length > 0;
    const displayEngines = hasInternalEngines
        ? internalEngines.map(e => ({ name: e.name, slug: e.slug, fuelType: e.fuelType, transmission: e.transmission, isInternal: true }))
        : externalEngines.map(e => ({
            name: e.n,
            slug: e.n.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'),
            fuelType: e.f,
            transmission: e.t,
            isInternal: false,
        }));

    const matchedEngine = useMemo(() => {
        if (!selectedEngine) return null;
        return internalEngines.find(e => e.slug === selectedEngine) || null;
    }, [internalEngines, selectedEngine]);

    const selectedDisplayEngine = useMemo(() => {
        if (!selectedEngine) return null;
        return displayEngines.find(e => e.slug === selectedEngine) || null;
    }, [displayEngines, selectedEngine]);

    const brandVehicles = useMemo(() => brand ? getVehiclesByBrand(brandSlug(brand)) : [], [brand]);

    const handleBrandChange = (v: string) => { setBrand(v); setModel(''); setYear(''); setSelectedEngine(''); };
    const handleModelChange = (v: string) => { setModel(v); setYear(''); setSelectedEngine(''); };
    const handleYearChange = (v: string) => { setYear(v); setSelectedEngine(''); };

    const handleSubmit = () => {
        if (matchedVehicle && matchedEngine) {
            router.push(`/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}/${matchedEngine.slug}`);
        } else if (matchedVehicle) {
            router.push(`/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}`);
        } else if (brand) {
            router.push(`/araclar/${brandSlug(brand)}`);
        } else {
            router.push('/araclar');
        }
    };

    // Steps: Marka, Model, Yıl, Motor
    const stepsDone = [brand, model, year, selectedEngine].filter(Boolean).length;

    return (
        <div className="w-full max-w-[720px] mx-auto">
            <div className="card-dark p-6 sm:p-8 shadow-2xl">
                {/* Steps indicator */}
                <div className="flex items-center gap-1.5 mb-6">
                    {['Marka', 'Model', 'Yıl', 'Motor'].map((step, i) => (
                        <div key={step} className="flex items-center gap-1.5">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold transition-all ${
                                stepsDone > i ? 'bg-[#A91D3A] text-white' : stepsDone === i ? 'bg-white/10 text-white border border-white/20' : 'bg-white/5 text-white/30'
                            }`}>
                                {stepsDone > i ? <Check size={10} /> : i + 1}
                            </div>
                            <span className={`text-[10px] font-medium hidden sm:block ${stepsDone >= i ? 'text-white/70' : 'text-white/25'}`}>{step}</span>
                            {i < 3 && <div className={`w-4 sm:w-8 h-px ${stepsDone > i ? 'bg-[#A91D3A]' : 'bg-white/10'}`} />}
                        </div>
                    ))}
                </div>

                {/* Row 1: Brand + Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                        <label htmlFor="s-brand" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Marka</label>
                        <select id="s-brand" value={brand} onChange={e => handleBrandChange(e.target.value)}
                            className="select-field select-dark w-full">
                            <option value="">Marka seçin</option>
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="s-model" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Model</label>
                        <select id="s-model" value={model} onChange={e => handleModelChange(e.target.value)}
                            className="select-field select-dark w-full" disabled={!brand}>
                            <option value="">{brand ? 'Model seçin' : '—'}</option>
                            {models.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>
                </div>

                {/* Row 2: Year + Motor */}
                {brand && model && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        {/* Year/Generation */}
                        <div>
                            <label htmlFor="s-year" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1">
                                <Calendar size={9} /> Yıl / Nesil
                            </label>
                            <select id="s-year" value={year} onChange={e => handleYearChange(e.target.value)}
                                className="select-field select-dark w-full">
                                <option value="">Yıl seçin ({yearRanges.length} nesil)</option>
                                {yearRanges.map(yr => (
                                    <option key={yr} value={yr}>{yr}</option>
                                ))}
                            </select>
                        </div>

                        {/* Motor — only after year is selected */}
                        <div>
                            <label htmlFor="s-engine" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1">
                                <Wrench size={9} /> Motor
                            </label>
                            <select id="s-engine" value={selectedEngine} onChange={e => setSelectedEngine(e.target.value)}
                                className="select-field select-dark w-full" disabled={!year}>
                                <option value="">{year ? `Motor seçin (${displayEngines.length})` : 'Önce yıl seçin'}</option>
                                {displayEngines.map(eng => (
                                    <option key={eng.slug} value={eng.slug}>
                                        {eng.name} — {eng.fuelType} · {eng.transmission}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                {/* Auto-detected info */}
                {selectedDisplayEngine && (
                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                            <div className="flex items-center gap-1 text-[9px] font-bold text-white/30 uppercase tracking-wider mb-1">
                                <Fuel size={8} /> Yakıt Tipi
                            </div>
                            <p className="text-[12px] font-semibold text-white/80">{selectedDisplayEngine.fuelType}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                            <div className="flex items-center gap-1 text-[9px] font-bold text-white/30 uppercase tracking-wider mb-1">
                                <Settings2 size={8} /> Şanzıman
                            </div>
                            <p className="text-[12px] font-semibold text-white/80">{selectedDisplayEngine.transmission}</p>
                        </div>
                    </div>
                )}

                {/* Match result */}
                {brand && model && year && (
                    <div className={`rounded-lg px-4 py-3 mb-4 text-[12px] ${matchedVehicle
                        ? 'bg-[#065F46]/20 border border-[#065F46]/30'
                        : 'bg-[#A91D3A]/15 border border-[#A91D3A]/25'
                    }`}>
                        {matchedVehicle ? (
                            <div className="flex items-center gap-2 flex-wrap">
                                <Check size={13} className="text-emerald-400" />
                                <span className="text-emerald-300 font-medium">
                                    {matchedVehicle.brand} {matchedEngine ? matchedEngine.name : ''} {matchedVehicle.model}
                                </span>
                                <span className="text-white/40">·</span>
                                <span className="text-white/60">Skor {matchedEngine ? matchedEngine.score : matchedVehicle.dnaScore}/100</span>
                                <span className="text-white/40">·</span>
                                <span className="text-white/60">
                                    {matchedEngine ? `${matchedEngine.chronicIssues.length} motor kusuru` : `${matchedVehicle.chronicIssues.length} kusur`}
                                </span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 flex-wrap">
                                <X size={13} className="text-amber-400" />
                                <span className="text-amber-300">Bu model/yıl için kusur raporu henüz yok</span>
                                {displayEngines.length > 0 && (
                                    <span className="text-white/40 ml-1">· {displayEngines.length} motor bilgisi mevcut</span>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Quick chips — raporu olan modeller */}
                {brand && !model && brandVehicles.length > 0 && (
                    <div className="mb-4">
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-2">Raporu olan modeller</p>
                        <div className="flex flex-wrap gap-1.5">
                            {brandVehicles.slice(0, 8).map(v => (
                                <button key={v.id}
                                    className="text-[11px] text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors font-medium border border-white/5 hover:border-white/15"
                                    onClick={() => router.push(`/araclar/${brandSlug(v.brand)}/${modelSlug(v.model)}`)}>
                                    {v.model.length > 22 ? v.model.substring(0, 22) + '…' : v.model}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Submit */}
                <button onClick={handleSubmit} disabled={!brand}
                    className="w-full py-3.5 rounded-lg font-semibold text-[14px] flex items-center justify-center gap-2 transition-all bg-[#A91D3A] hover:bg-[#8B1730] text-white disabled:opacity-30 disabled:cursor-not-allowed">
                    {matchedEngine ? 'Motor Kusur Raporunu İncele'
                        : matchedVehicle ? 'Motor Seçeneklerini Gör'
                        : brand ? `${brand} Araçlarını Gör`
                        : 'Marka Seçerek Başlayın'}
                    <ArrowRight size={15} />
                </button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-5 text-[11px] text-[#A1A1AA]">
                <span>{brands.length} marka</span>
                <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/40" />
                <span>{models.length > 0 ? `${models.length} model` : '1985+ model'}</span>
                <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/40" />
                <span>{getAllVehicles().length} kusur raporu</span>
            </div>
        </div>
    );
}
