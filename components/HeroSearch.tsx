'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, X, Fuel, Settings2, Car } from 'lucide-react';
import { getAllVehicles, getVehiclesByBrand, getEnginesByVehicleId, brandSlug, modelSlug } from '@/lib/dataService';
import type { VehicleDNA } from '@/data/vehicle-dna';
import carModels from '@/data/carmodels.json';

type CarModelsMap = Record<string, string[]>;
const carModelsMap: CarModelsMap = carModels as CarModelsMap;

export default function HeroSearch() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [transmission, setTransmission] = useState('');
    const router = useRouter();

    const brands = useMemo(() => Object.keys(carModelsMap).sort(), []);
    const models = useMemo(() => brand ? (carModelsMap[brand] || []).sort() : [], [brand]);

    const matchedVehicle = useMemo((): VehicleDNA | null => {
        if (!brand || !model) return null;
        return getAllVehicles().find(v => {
            const bMatch = v.brand.toLowerCase() === brand.toLowerCase();
            const mMatch = v.model.toLowerCase().includes(model.toLowerCase()) || model.toLowerCase().includes(v.model.toLowerCase().split(' ')[0]);
            return bMatch && mMatch;
        }) || null;
    }, [brand, model]);

    const engines = useMemo(() => matchedVehicle ? getEnginesByVehicleId(matchedVehicle.id) : [], [matchedVehicle]);
    const fuelTypes = useMemo(() => [...new Set(engines.map(e => e.fuelType))].sort(), [engines]);
    const transmissions = useMemo(() => {
        const f = fuelType ? engines.filter(e => e.fuelType === fuelType) : engines;
        return [...new Set(f.map(e => e.transmission))].sort();
    }, [engines, fuelType]);

    const matchedEngine = useMemo(() => {
        let f = engines;
        if (fuelType) f = f.filter(e => e.fuelType === fuelType);
        if (transmission) f = f.filter(e => e.transmission === transmission);
        return f.length === 1 ? f[0] : null;
    }, [engines, fuelType, transmission]);

    const brandVehicles = useMemo(() => brand ? getVehiclesByBrand(brandSlug(brand)) : [], [brand]);

    const handleBrandChange = (v: string) => { setBrand(v); setModel(''); setFuelType(''); setTransmission(''); };
    const handleModelChange = (v: string) => { setModel(v); setFuelType(''); setTransmission(''); };
    const handleFuelChange = (v: string) => { setFuelType(v); setTransmission(''); };

    const handleSubmit = () => {
        if (matchedVehicle) router.push(`/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}`);
        else if (brand) router.push(`/araclar/${brandSlug(brand)}`);
        else router.push('/araclar');
    };

    const stepsDone = [brand, model, fuelType, transmission].filter(Boolean).length;

    return (
        <div className="w-full max-w-[680px] mx-auto">
            {/* Dark configurator card */}
            <div className="card-dark p-6 sm:p-8 shadow-2xl">
                {/* Steps indicator */}
                <div className="flex items-center gap-2 mb-6">
                    {['Marka', 'Model', 'Yakıt', 'Şanzıman'].map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
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

                {/* Row 2: Fuel + Transmission (conditional) */}
                {matchedVehicle && fuelTypes.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <div>
                            <label htmlFor="s-fuel" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1 ">
                                <Fuel size={9} /> Yakıt Tipi
                            </label>
                            <select id="s-fuel" value={fuelType} onChange={e => handleFuelChange(e.target.value)}
                                className="select-field select-dark w-full">
                                <option value="">Tümü ({fuelTypes.length})</option>
                                {fuelTypes.map(f => <option key={f} value={f}>{f}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="s-trans" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1">
                                <Settings2 size={9} /> Şanzıman
                            </label>
                            <select id="s-trans" value={transmission} onChange={e => setTransmission(e.target.value)}
                                className="select-field select-dark w-full" disabled={transmissions.length === 0}>
                                <option value="">Tümü ({transmissions.length})</option>
                                {transmissions.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                )}

                {/* Match result */}
                {brand && model && (
                    <div className={`rounded-lg px-4 py-3 mb-4 text-[12px] ${matchedVehicle
                        ? 'bg-[#065F46]/20 border border-[#065F46]/30'
                        : 'bg-[#A91D3A]/15 border border-[#A91D3A]/25'
                    }`}>
                        {matchedVehicle ? (
                            <div className="flex items-center gap-2 flex-wrap">
                                <Check size={13} className="text-emerald-400" />
                                <span className="text-emerald-300 font-medium">{matchedVehicle.brand} {matchedVehicle.model}</span>
                                <span className="text-white/40">·</span>
                                <span className="text-white/60">Skor {matchedVehicle.dnaScore}/100</span>
                                <span className="text-white/40">·</span>
                                <span className="text-white/60">{matchedVehicle.chronicIssues.length} kusur</span>
                                {matchedEngine && (
                                    <>
                                        <span className="text-white/40">·</span>
                                        <span className="text-white/60">🔧 {matchedEngine.name} ({matchedEngine.score})</span>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <X size={13} className="text-red-400" />
                                <span className="text-red-300">Bu model için rapor yok</span>
                                {brandVehicles.length > 0 && (
                                    <span className="text-white/40 ml-1">· {brand}: {brandVehicles.length} model mevcut</span>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Quick chips */}
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
                    {matchedVehicle ? 'Kusur Raporunu İncele' : brand ? `${brand} Araçlarını Gör` : 'Marka Seçerek Başlayın'}
                    <ArrowRight size={15} />
                </button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-5 text-[11px] text-[#A1A1AA]">
                <span>{Object.keys(carModelsMap).length} marka</span>
                <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/40" />
                <span>{Object.values(carModelsMap).flat().length}+ model</span>
                <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/40" />
                <span>{getAllVehicles().length} kusur raporu</span>
            </div>
        </div>
    );
}
