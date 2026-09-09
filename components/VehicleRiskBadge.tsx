import type { RiskLevel } from '@/lib/dataService';

export default function VehicleRiskBadge({ level, size = 'md' }: { level: RiskLevel; size?: 'sm' | 'md' | 'lg' }) {
    const cls = level === 'low' ? 'badge-risk-low' : level === 'medium' ? 'badge-risk-medium' : 'badge-risk-high';
    const label = level === 'low' ? 'Düşük Risk' : level === 'medium' ? 'Orta Risk' : 'Yüksek Risk';
    return (
        <span className={`badge ${cls} ${size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : size === 'lg' ? 'text-[12px] px-3 py-1' : ''}`}>
            {label}
        </span>
    );
}
