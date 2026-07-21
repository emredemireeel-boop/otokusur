import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BatteryCharging, CalendarDays, ChevronRight, Database, Fuel, Info, Settings2 } from 'lucide-react';
import { carEnginesCatalog, carModelsCatalog } from '@/data/catalog';
import { brandSlug, modelSlug } from '@/lib/dataService';

type ModelsMap = Record<string, Record<string, string[]>>;
interface EngineOption { n: string; f: string; t: string }
type EnginesMap = Record<string, Record<string, Record<string, EngineOption[]>>>;
interface Props { params: Promise<{ marka: string; model: string }> }

const models: ModelsMap = carModelsCatalog;
const engines: EnginesMap = carEnginesCatalog;

function getCatalogEntry(marka: string, model: string) {
    for (const [brandName, brandModels] of Object.entries(models)) {
        if (brandSlug(brandName) !== marka) continue;
        for (const [modelName, generations] of Object.entries(brandModels)) {
            if (modelSlug(modelName) === model) return { brandName, modelName, generations };
        }
    }
    return null;
}

export async function generateStaticParams() {
    const curatedBrands = new Set(['BYD', 'Togg']);
    return Object.entries(models).flatMap(([brand, brandModels]) => curatedBrands.has(brand)
        ? Object.keys(brandModels).map((model) => ({ marka: brandSlug(brand), model: modelSlug(model) }))
        : []);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka, model } = await params;
    const entry = getCatalogEntry(marka, model);
    if (!entry) return { title: 'Katalog Kaydı Bulunamadı', robots: { index: false, follow: true } };
    const title = `${entry.brandName} ${entry.modelName} Yıl ve Motor Seçenekleri`;
    const description = `${entry.brandName} ${entry.modelName} için üretim nesilleri, yakıt ve şanzıman seçenekleri. Bu sayfa teknik katalog kaydıdır; kronik kusur raporu değildir.`;
    return {
        title,
        description,
        alternates: { canonical: `/katalog/${marka}/${model}` },
        robots: { index: false, follow: true },
        openGraph: { title, description, url: `/katalog/${marka}/${model}` },
    };
}

export default async function CatalogDetailPage({ params }: Props) {
    const { marka, model } = await params;
    const entry = getCatalogEntry(marka, model);
    if (!entry) notFound();

    const modelEngines = engines[entry.brandName]?.[entry.modelName] ?? {};
    const totalEngines = Object.values(modelEngines).reduce((sum, options) => sum + options.length, 0);

    return (
        <article className="catalog-detail-page">
            <div className="container-main">
                <nav className="catalog-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Ana Sayfa</Link><ChevronRight size={11} />
                    <Link href="/araclar">Araçlar</Link><ChevronRight size={11} />
                    <span>{entry.brandName} {entry.modelName}</span>
                </nav>

                <header className="catalog-detail-hero">
                    <span className="catalog-tag"><Database size={12} /> Teknik katalog kaydı</span>
                    <p>{entry.brandName}</p>
                    <h1>{entry.modelName}</h1>
                    <div className="catalog-meta">
                        <span><CalendarDays size={14} /> {entry.generations.length} nesil</span>
                        <span><Settings2 size={14} /> {totalEngines} motor seçeneği</span>
                    </div>
                </header>

                <aside className="catalog-disclaimer">
                    <Info size={18} />
                    <div><strong>Bu bir kronik kusur raporu değil.</strong><p>Bu model teknik araç kataloğunda mevcut. Doğrulanmış kronik arıza profili yayımlandığında ayrıntılı risk skoru ve ekspertiz kontrol noktaları eklenecek.</p></div>
                </aside>

                <section className="catalog-generations">
                    <div className="catalog-section-title">
                        <span>Üretim nesilleri</span>
                        <h2>Yıl ve motor seçenekleri</h2>
                    </div>

                    <div className="catalog-generation-list">
                        {entry.generations.map((generation) => {
                            const options = modelEngines[generation] ?? [];
                            return (
                                <div className="catalog-generation" key={generation}>
                                    <div className="catalog-generation-head">
                                        <CalendarDays size={17} />
                                        <div><small>Model yılı / nesil</small><strong>{generation}</strong></div>
                                    </div>
                                    {options.length > 0 ? (
                                        <div className="catalog-engine-grid">
                                            {options.map((option, index) => (
                                                <div className="catalog-engine" key={`${option.n}-${index}`}>
                                                    <div className="catalog-engine-icon">{option.f === 'Elektrik' ? <BatteryCharging size={18} /> : <Fuel size={18} />}</div>
                                                    <div><strong>{option.n}</strong><span>{option.f} · {option.t}</span></div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : <p className="catalog-pending">Bu neslin motor seçenekleri veri kuyruğunda.</p>}
                                </div>
                            );
                        })}
                    </div>
                </section>

                <div className="catalog-actions">
                    <Link href="/#arac-bul"><ArrowLeft size={14} /> Başka araç seç</Link>
                    <Link href="/veri-metodolojisi">Veri metodolojisini incele</Link>
                </div>
            </div>
        </article>
    );
}
