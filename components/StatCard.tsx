import type { ReactNode } from 'react';

export default function StatCard({ icon, value, label }: { icon: ReactNode; value: string | number; label: string }) {
    return (
        <div className="card-elevated p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FDF0F2] flex items-center justify-center text-[#A91D3A] flex-shrink-0">{icon}</div>
            <div>
                <p className="text-[18px] font-extrabold text-[#0F0F10] leading-none tracking-tight">{value}</p>
                <p className="text-[10px] text-[#A1A1AA] font-medium mt-0.5">{label}</p>
            </div>
        </div>
    );
}
