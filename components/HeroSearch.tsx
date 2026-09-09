'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays, Check, Database, Fuel, Gauge, Settings2, Sparkles } from 'lucide-react';

interface FinderStats {
    brands: number;
    models: number;
    generations: number;
    engines: number;
}

interface FinderEngine {
    name: string;
    slug: string;
    fuelType: string;
    transmission: string;
    score: number | null;
    href: string | null;
}

interface FinderResponse {
    models: string[];
    generations: string[];
    engines: FinderEngine[];
    matchedVehicle: { name: string; href: string } | null;
    catalogHref: string | null;
}

interface Props {
    brands: string[];
    stats: FinderStats;
}

export default function HeroSearch({ brands, stats }: Props) {
    const router = useRouter();
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [selectedEngine, setSelectedEngine] = useState('');
    const [models, setModels] = useState<string[]>([]);
    const [yearRanges, setYearRanges] = useState<string[]>([]);
    const [displayEngines, setDisplayEngines] = useState<FinderEngine[]>([]);
    const [matchedVehicle, setMatchedVehicle] = useState<FinderResponse['matchedVehicle']>(null);
    const [catalogHref, setCatalogHref] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!brand) return;

        const controller = new AbortController();
        const params = new URLSearchParams({ brand });
        if (model) params.set('model', model);
        if (year) params.set('year', year);

        setLoading(true);
        fetch('/api/catalog?' + params.toString(), { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error('Katalog verisi alınamadı');
                return response.json() as Promise<FinderResponse>;
            })
            .then((data) => {
                setModels(data.models);
                setYearRanges(data.generations);
                setDisplayEngines(data.engines);
                setMatchedVehicle(data.matchedVehicle);
                setCatalogHref(data.catalogHref);
            })
            .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === 'AbortError') return;
                setModels([]);
                setYearRanges([]);
                setDisplayEngines([]);
                setMatchedVehicle(null);
                setCatalogHref(null);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [brand, model, year]);

    const selectedDisplayEngine = displayEngines.find((engine) => engine.slug === selectedEngine) ?? null;
    const completedSteps = [brand, model, year, selectedEngine].filter(Boolean).length;

    const updateBrand = (value: string) => {
        setBrand(value);
        setModel('');
        setYear('');
        setSelectedEngine('');
        setModels([]);
        setYearRanges([]);
        setDisplayEngines([]);
        setMatchedVehicle(null);
        setCatalogHref(null);
    };

    const updateModel = (value: string) => {
        setModel(value);
        setYear('');
        setSelectedEngine('');
        setYearRanges([]);
        setDisplayEngines([]);
        setMatchedVehicle(null);
        setCatalogHref(null);
    };

    const updateYear = (value: string) => {
        setYear(value);
        setSelectedEngine('');
        setDisplayEngines([]);
    };

    const openReport = () => {
        if (selectedDisplayEngine?.href) {
            router.push(selectedDisplayEngine.href);
            return;
        }
        if (matchedVehicle) {
            router.push(matchedVehicle.href);
            return;
        }
        if (catalogHref) {
            router.push(catalogHref);
            return;
        }
        router.push(brand ? '/araclar?q=' + encodeURIComponent(brand) : '/araclar');
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
                    <select value={model} onChange={(event) => updateModel(event.target.value)} disabled={!brand || loading} aria-label="Model seçin">
                        <option value="">{loading && brand && !model ? 'Modeller yükleniyor…' : brand ? 'Model seçin' : 'Önce marka seçin'}</option>
                        {models.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label className="console-field">
                    <span><CalendarDays size={11} /> 03 · Yıl / Nesil</span>
                    <select value={year} onChange={(event) => updateYear(event.target.value)} disabled={!model || loading} aria-label="Yıl veya nesil seçin">
                        <option value="">{loading && model && !year ? 'Nesiller yükleniyor…' : model ? 'Yıl aralığı seçin' : 'Model bekleniyor'}</option>
                        {yearRanges.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label className="console-field">
                    <span><Settings2 size={11} /> 04 · Motor</span>
                    <select value={selectedEngine} onChange={(event) => setSelectedEngine(event.target.value)} disabled={!year || loading} aria-label="Motor seçin">
                        <option value="">{loading && year ? 'Motorlar yükleniyor…' : year ? `${displayEngines.length} seçenekten birini seçin` : 'Nesil bekleniyor'}</option>
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
                        <div className="result-spec"><Gauge size={14} /><span><small>Analiz</small>{selectedDisplayEngine.score !== null ? `${selectedDisplayEngine.score}/100` : 'Katalog kaydı'}</span></div>
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
                    ? `${matchedVehicle.name} için ayrıntılı kusur profili bulundu.`
                    : brand && model && year
                        ? 'Bu varyant katalogda mevcut; ayrıntılı kusur profili henüz yayımlanmadı.'
                    : `${stats.brands} marka · ${stats.models.toLocaleString('tr-TR')} model · ${stats.engines.toLocaleString('tr-TR')} motor seçeneği`}
            </p>
        </div>
    );
}
