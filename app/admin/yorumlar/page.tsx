'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAllComments, deleteComment, type Comment, type CommentStatus } from '@/lib/commentService';
import { Shield, Trash2, Star, Clock, Fuel, User, Loader2, Filter, MessageSquare, Gauge, CalendarDays, Wrench } from 'lucide-react';

function timeAgo(date: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diff < 60) return 'Az önce';
    if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} saat önce`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} gün önce`;
    return `${Math.floor(diff / 2592000)} ay önce`;
}

function statusBadge(status: CommentStatus) {
    switch (status) {
        case 'pending':
            return <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">⏳ Bekliyor</span>;
        case 'approved':
            return <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">✅ Onaylı</span>;
        case 'rejected':
            return <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700">❌ Reddedildi</span>;
    }
}

export default function AdminYorumlar() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    // Fetch comments
    const fetchComments = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getAllComments();
            setComments(data);
        } catch (err) {
            console.error('Admin yorum yükleme hatası:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    // Actions
    const handleDelete = async (id: string) => {
        if (!confirm('Bu yorumu kalıcı olarak silmek istediğinize emin misiniz?')) return;
        setActionLoading(id);
        try {
            await deleteComment(id);
            await fetchComments();
        } catch (err) {
            console.error('Silme hatası:', err);
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F7F8]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#A91D3A] to-[#8B1730] text-white">
                <div className="max-w-5xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-3">
                        <Shield size={24} />
                        <div>
                            <h1 className="text-[18px] font-bold">Yorum Moderasyonu</h1>
                            <p className="text-[12px] text-white/70">Yayındaki yorumları görüntüleyin ve gerektiğinde kaldırın</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-6">
                <div className="flex items-center justify-end mb-6">
                    <button
                        onClick={fetchComments}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-semibold bg-white text-[#71717A] hover:bg-[#F0F0F2] border border-[#EBEBED] transition-all"
                    >
                        <Filter size={12} />
                        Yenile
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="card-elevated p-4 text-center">
                        <p className="text-[24px] font-bold text-[#0F0F10]">{comments.length}</p>
                        <p className="text-[11px] text-[#71717A] font-medium">Toplam Kayıt</p>
                    </div>
                    <div className="card-elevated p-4 text-center">
                        <p className="text-[24px] font-bold text-emerald-600">{comments.filter(c => c.status === 'approved').length}</p>
                        <p className="text-[11px] text-[#71717A] font-medium">Yayında</p>
                    </div>
                    <div className="card-elevated p-4 text-center">
                        <p className="text-[24px] font-bold text-amber-600">{comments.filter(c => c.status !== 'approved').length}</p>
                        <p className="text-[11px] text-[#71717A] font-medium">Eski Gizli Kayıt</p>
                    </div>
                </div>

                {/* Comments list */}
                {loading ? (
                    <div className="flex items-center justify-center py-12 gap-2 text-[#A1A1AA]">
                        <Loader2 size={18} className="animate-spin" />
                        <span className="text-[13px]">Yorumlar yükleniyor...</span>
                    </div>
                ) : comments.length === 0 ? (
                    <div className="card-elevated p-12 text-center">
                        <MessageSquare size={32} className="mx-auto text-[#D4D4D8] mb-3" />
                        <p className="text-[14px] font-medium text-[#71717A]">Bu filtrede yorum bulunamadı</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {comments.map((comment) => (
                            <div key={comment.id} className="card-elevated p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        {/* Author + Status */}
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A91D3A] to-[#8B1730] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                                                {comment.author.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || <User size={12} />}
                                            </div>
                                            <span className="text-[13px] font-bold text-[#0F0F10]">{comment.author}</span>
                                            {statusBadge(comment.status)}
                                            <div className="flex items-center gap-0.5">
                                                {[1,2,3,4,5].map(s => (
                                                    <Star key={s} size={11}
                                                        className={s <= comment.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex items-center gap-3 mt-2 text-[10px] text-[#A1A1AA]">
                                            <span className="flex items-center gap-1">
                                                <Clock size={10} /> {timeAgo(comment.createdAt)}
                                            </span>
                                            <span>Araç ID: {comment.vehicleId}</span>
                                            {comment.engineSlug && <span>Motor: {comment.engineSlug}</span>}
                                            {comment.ownershipMonths && <span>{comment.ownershipMonths} ay sahiplik</span>}
                                            {comment.fuelConsumption && (
                                                <span className="flex items-center gap-1"><Fuel size={9} />{comment.fuelConsumption}</span>
                                            )}
                                            {comment.mileageKm && <span className="flex items-center gap-1"><Gauge size={9} />{comment.mileageKm.toLocaleString('tr-TR')} km</span>}
                                            {comment.vehicleYear && <span className="flex items-center gap-1"><CalendarDays size={9} />{comment.vehicleYear} model</span>}
                                            {comment.engineDetail && <span className="flex items-center gap-1"><Wrench size={9} />{comment.engineDetail}</span>}
                                        </div>

                                        {/* Text */}
                                        <p className="text-[12px] text-[#3F3F46] mt-3 leading-relaxed bg-[#FAFAFA] p-3 rounded-lg border border-[#F0F0F2]">
                                            {comment.text}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button
                                            onClick={() => handleDelete(comment.id)}
                                            disabled={actionLoading === comment.id}
                                            className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                                        >
                                            {actionLoading === comment.id ? <Loader2 size={12} className="animate-spin" /> : <Trash2 size={12} />}
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
