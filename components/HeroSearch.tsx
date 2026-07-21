'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays, Check, Database, Fuel, Gauge, Settings2, Sparkles } from 'lucide-react';
import { brandSlug, getAllVehicles, getEnginesByVehicleId, modelSlug } from '@/lib/dataService';
import type { VehicleDNA } from '@/data/vehicle-dna';
import { carEnginesCatalog, carModelsCatalog } from '@/data/catalog';

type CarModelsMap = Record<string, Record<string, string[]>>;
interface EngineRaw { n: string; f: string; t: string }
type EnginesMap = Record<string, Record<string, Record<string, EngineRaw[]>>>;

const carModelsMap: CarModelsMap = carModelsCatalog;
const enginesMap: EnginesMap = carEnginesCatalog;
const catalogModelCount = Object.values(carModelsMap).reduce((total, brandModels) => total + Object.keys(brandModels).length, 0);
const catalogEngineCount = Object.values(enginesMap).reduce(
    (brandTotal, brandModels) => brandTotal + Object.values(brandModels).reduce(
        (modelTotal, generations) => modelTotal + Object.values(generations).reduce((sum, options) => sum + options.length, 0),
        0,
    ),
    0,
);

const normalize = (value: string) => value.toLocaleLowerCase('tr-TR');

export default function HeroSearch() {
    const router = useRouter();
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [selectedEngine, setSelectedEngine] = useState('');

    const brands = useMemo(() => Object.keys(carModelsMap).sort((a, b) => a.localeCompare(b, 'tr')), []);
    const models = useMemo(() => brand ? Object.keys(carModelsMap[brand] ?? {}).sort((a, b) => a.localeCompare(b, 'tr')) : [], [brand]);
    const yearRanges = useMemo(() => brand && model ? carModelsMap[brand]?.[model] ?? [] : [], [brand, model]);

    const matchedVehicle = useMemo((): VehicleDNA | null => {
        if (!brand || !model) return null;
        const selectedModel = normalize(model);

        return getAllVehicles().find((vehicle) => {
            const vehicleModel = normalize(vehicle.model);
            const brandMatches = normalize(vehicle.brand) === normalize(brand);
            const modelMatches = vehicleModel.includes(selectedModel) || selectedModel.includes(vehicleModel.split(' ')[0]);
            if (!brandMatches || !modelMatches) return false;

            if (year) {
                const selectedStart = Number.parseInt(year, 10);
                const vehicleStart = Number.parseInt(vehicle.year.match(/\d{4}/)?.[0] ?? '', 10);
                if (Number.isFinite(selectedStart) && Number.isFinite(vehicleStart)) return Math.abs(selectedStart - vehicleStart) <= 3;
            }
            return true;
        }) ?? null;
    }, [brand, model, year]);

    const internalEngines = useMemo(() => matchedVehicle ? getEnginesByVehicleId(matchedVehicle.id) : [], [matchedVehicle]);
    const externalEngines = useMemo(() => brand && model && year ? enginesMap[brand]?.[model]?.[year] ?? [] : [], [brand, model, year]);
    const displayEngines = internalEngines.length > 0
        ? internalEngines.map((engine) => ({
            name: engine.name,
            slug: engine.slug,
            fuelType: engine.fuelType,
            transmission: engine.transmission,
            score: engine.score,
        }))
        : externalEngines.map((engine, index) => ({
            name: engine.n,
            slug: `${engine.n}-${index}`.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9çğıöşü]+/g, '-'),
            fuelType: engine.f,
            transmission: engine.t,
            score: null,
        }));

    const selectedDisplayEngine = displayEngines.find((engine) => engine.slug === selectedEngine) ?? null;
    const completedSteps = [brand, model, year, selectedEngine].filter(Boolean).length;

    const updateBrand = (value: string) => {
        setBrand(value);
        setModel('');
        setYear('');
        setSelectedEngine('');
    };

    const updateModel = (value: string) => {
        setModel(value);
        setYear('');
        setSelectedEngine('');
    };

    const updateYear = (value: string) => {
        setYear(value);
        setSelectedEngine('');
    };

    const openReport = () => {
        const internalEngine = internalEngines.find((engine) => engine.slug === selectedEngine);
        if (matchedVehicle && internalEngine) {
            router.push(`/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}/${internalEngine.slug}`);
            return;
        }
        if (matchedVehicle) {
            router.push(`/araclar/${brandSlug(matchedVehicle.brand)}/${modelSlug(matchedVehicle.model)}`);
            return;
        }
        if (brand && model) {
            router.push(`/katalog/${brandSlug(brand)}/${modelSlug(model)}`);
            return;
        }
        router.push(brand ? `/araclar?q=${encodeURIComponent(brand)}` : '/araclar');
    };

    const actionLabel = matchedVehicle && selectedEngine
        ? 'Motor kusur raporunu aç'
        : matchedVehicle
            ? 'Model raporunu incele'
            : brand && model
                ? 'Teknik katalog kaydını aç'
                : brand
                    ? `${brand} kusur raporlarını ara`
                : 'Marka seçerek başla';

    return (
        <div className="search-console" aria-label="Araç kusur raporu bulucu">
            <div className="search-console-topline">
                <div>
                    <span className="console-kicker"><Sparkles size={12} /> Akıllı araç bulucu</span>
                    <h2>Aracını tanımla</h2>
                </div>
                <span className="console-live"><span className="status-pulse" /> Canlı veri</span>
            </div>

            <div className="search-progress" aria-label={`${completedSteps} / 4 adım tamamlandı`}>
                {['Marka', 'Model', 'Nesil', 'Motor'].map((step, index) => (
                    <div className={`progress-step ${completedSteps > index ? 'is-done' : ''} ${completedSteps === index ? 'is-current' : ''}`} key={step}>
                        <span>{completedSteps > index ? <Check size={11} /> : index + 1}</span>
                        <small>{step}</small>
                    </div>
                ))}
            </div>

            <div className="search-fields">
                <label className="console-field">
                    <span>01 · Marka</span>
                    <select value={brand} onChange={(event) => updateBrand(event.target.value)} aria-label="Marka seçin">
                        <option value="">Marka seçin</option>
                        {brands.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label className="console-field">
                    <span>02 · Model</span>
                    <select value={model} onChange={(event) => updateModel(event.target.value)} disabled={!brand} aria-label="Model seçin">
                        <option value="">{brand ? 'Model seçin' : 'Önce marka seçin'}</option>
                        {models.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label className="console-field">
                    <span><CalendarDays size={11} /> 03 · Yıl / Nesil</span>
                    <select value={year} onChange={(event) => updateYear(event.target.value)} disabled={!model} aria-label="Yıl veya nesil seçin">
                        <option value="">{model ? 'Yıl aralığı seçin' : 'Model bekleniyor'}</option>
                        {yearRanges.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label className="console-field">
                    <span><Settings2 size={11} /> 04 · Motor</span>
                    <select value={selectedEngine} onChange={(event) => setSelectedEngine(event.target.value)} disabled={!year} aria-label="Motor seçin">
                        <option value="">{year ? `${displayEngines.length} seçenekten birini seçin` : 'Nesil bekleniyor'}</option>
                        {displayEngines.map((engine) => (
                            <option key={engine.slug} value={engine.slug}>{engine.name} · {engine.fuelType}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="console-result" aria-live="polite">
                {selectedDisplayEngine ? (
                    <>
                        <div className="result-spec"><Fuel size={14} /><span><small>Yakıt</small>{selectedDisplayEngine.fuelType}</span></div>
                        <div className="result-spec"><Settings2 size={14} /><span><small>Şanzıman</small>{selectedDisplayEngine.transmission}</span></div>
                        <div className="result-spec"><Gauge size={14} /><span><small>Analiz</small>{selectedDisplayEngine.score ? `${selectedDisplayEngine.score}/100` : 'Katalog kaydı'}</span></div>
                    </>
                ) : (
                    <div className="result-placeholder">
                        <Database size={15} /> Seçimin ilerledikçe teknik bilgiler burada görünür.
                    </div>
                )}
            </div>

            <button type="button" onClick={openReport} disabled={!brand} className="console-submit">
                <span>{actionLabel}</span><ArrowRight size={16} />
            </button>

            <p className="console-footnote">
                {matchedVehicle
                    ? `${matchedVehicle.brand} ${matchedVehicle.model} için doğrulanmış kusur profili bulundu.`
                    : brand && model && year
                        ? 'Bu varyant katalogda mevcut; kusur profili veri kuyruğunda.'
                    : `${brands.length} marka · ${catalogModelCount.toLocaleString('tr-TR')} model · ${catalogEngineCount.toLocaleString('tr-TR')} motor seçeneği`}
            </p>
        </div>
    );
}
