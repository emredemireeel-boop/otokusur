import type { ReactNode } from 'react';

export default function StatCard({ icon, value, label }: { icon: ReactNode; value: string | number; label: string }) {
    return (
        <div className="card-elevated p-4 flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FDF0F2] to-[#FAE5E9] flex items-center justify-center text-[#A91D3A] flex-shrink-0 ring-1 ring-[#FAE5E9]">{icon}</div>
            <div className="min-w-0">
                <p className="text-[19px] font-extrabold text-[#0F0F10] leading-none tracking-tight truncate">{value}</p>
                <p className="text-[10px] text-[#A1A1AA] font-medium mt-1">{label}</p>
            </div>
        </div>
    );
}
