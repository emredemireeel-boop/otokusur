'use client';
import { useState, useMemo } from 'react';
import { getAllBrands } from '@/lib/dataService';
import { Filter, X } from 'lucide-react';

interface Props {
    selectedBrand: string; selectedFuel: string; selectedRisk: string;
    onBrandChange: (v: string) => void; onFuelChange: (v: string) => void;
    onRiskChange: (v: string) => void; onClear: () => void;
}

export default function SearchFilters({ selectedBrand, selectedFuel, selectedRisk, onBrandChange, onFuelChange, onRiskChange, onClear }: Props) {
    const [showMobile, setShowMobile] = useState(false);
    const brands = useMemo(() => getAllBrands(), []);
    const hasFilters = selectedBrand || selectedFuel || selectedRisk;

    const content = (
        <div className="space-y-4">
            <div>
                <label htmlFor="f-brand" className="label">Marka</label>
                <select id="f-brand" value={selectedBrand} onChange={e => onBrandChange(e.target.value)} className="select-field text-[12px]">
                    <option value="">Tüm Markalar</option>
                    {brands.map(b => <option key={b.slug} value={b.slug}>{b.name} ({b.vehicleCount})</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="f-fuel" className="label">Yakıt Tipi</label>
                <select id="f-fuel" value={selectedFuel} onChange={e => onFuelChange(e.target.value)} className="select-field text-[12px]">
                    <option value="">Tümü</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Hibrit">Hibrit</option>
                    <option value="Elektrik">Elektrik</option>
                    <option value="LPG">LPG</option>
                </select>
            </div>
            <div>
                <label htmlFor="f-risk" className="label">Risk Seviyesi</label>
                <select id="f-risk" value={selectedRisk} onChange={e => onRiskChange(e.target.value)} className="select-field text-[12px]">
                    <option value="">Tümü</option>
                    <option value="low">Düşük Risk</option>
                    <option value="medium">Orta Risk</option>
                    <option value="high">Yüksek Risk</option>
                </select>
            </div>
            {hasFilters && (
                <button onClick={onClear} className="w-full flex items-center justify-center gap-1.5 text-[11px] text-[#A91D3A] font-medium hover:bg-[#FDF0F2] rounded-md py-2 transition-colors">
                    <X size={12} /> Temizle
                </button>
            )}
        </div>
    );

    return (
        <>
            <aside className="hidden lg:block w-52 flex-shrink-0">
                <div className="card-elevated p-4 sticky top-20">
                    <h3 className="label flex items-center gap-1.5 mb-4"><Filter size={11} />Filtreler</h3>
                    {content}
                </div>
            </aside>
            <button className="lg:hidden fixed bottom-5 right-5 z-40 btn-primary shadow-lg rounded-full w-11 h-11 flex items-center justify-center p-0" onClick={() => setShowMobile(true)} aria-label="Filtreler">
                <Filter size={16} />
            </button>
            {showMobile && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setShowMobile(false)} />
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 max-h-[70vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[14px] font-bold">Filtreler</h3>
                            <button onClick={() => setShowMobile(false)} className="p-1"><X size={16} /></button>
                        </div>
                        {content}
                        <button onClick={() => setShowMobile(false)} className="btn-primary w-full mt-4 justify-center">Uygula</button>
                    </div>
                </div>
            )}
        </>
    );
}
