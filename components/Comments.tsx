'use client';

import { useState, useEffect, useCallback } from 'react';
import { addComment, getComments, likeComment, type Comment, type CommentInput } from '@/lib/commentService';
import { MessageSquare, Star, ThumbsUp, Send, User, Clock, Fuel, ChevronDown, Loader2, ShieldCheck } from 'lucide-react';

interface CommentsProps {
    vehicleId: number;
    engineSlug?: string;
    vehicleName: string;
}

// ── Star Rating Component ──────────────────────────
function StarRating({ rating, onRate, interactive = false, size = 16 }: {
    rating: number;
    onRate?: (r: number) => void;
    interactive?: boolean;
    size?: number;
}) {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    disabled={!interactive}
                    className={`transition-all duration-150 ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
                    onClick={() => onRate?.(star)}
                    onMouseEnter={() => interactive && setHover(star)}
                    onMouseLeave={() => interactive && setHover(0)}
                >
                    <Star
                        size={size}
                        className={`transition-colors ${
                            (hover || rating) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-transparent text-[#D4D4D8]'
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}

// ── Time Ago ───────────────────────────────────────
function timeAgo(date: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diff < 60) return 'Az önce';
    if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} saat önce`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} gün önce`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} ay önce`;
    return `${Math.floor(diff / 31536000)} yıl önce`;
}

// ── Comment Card ───────────────────────────────────
function CommentCard({ comment, onLike }: { comment: Comment; onLike: (id: string) => void }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) return;
        setLiked(true);
        onLike(comment.id);
    };

    const initials = comment.author
        .split(' ')
        .map(w => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className="group border-b border-[#F0F0F2] last:border-b-0 py-4 first:pt-0 transition-colors"
             style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#A91D3A] to-[#8B1730] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                    {initials || <User size={14} />}
                </div>

                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[13px] font-semibold text-[#0F0F10]">{comment.author}</span>
                            <StarRating rating={comment.rating} size={12} />
                        </div>
                        <span className="text-[10px] text-[#A1A1AA] flex items-center gap-1 flex-shrink-0">
                            <Clock size={10} />
                            {timeAgo(comment.createdAt)}
                        </span>
                    </div>

                    {/* Meta badges */}
                    {(comment.ownershipMonths || comment.fuelConsumption) && (
                        <div className="flex items-center gap-2 mt-1.5">
                            {comment.ownershipMonths && (
                                <span className="text-[10px] font-medium text-[#71717A] bg-[#F0F0F2] px-2 py-0.5 rounded-full">
                                    {comment.ownershipMonths < 12
                                        ? `${comment.ownershipMonths} aydır sahip`
                                        : `${Math.floor(comment.ownershipMonths / 12)} yıldır sahip`}
                                </span>
                            )}
                            {comment.fuelConsumption && (
                                <span className="text-[10px] font-medium text-[#71717A] bg-[#F0F0F2] px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <Fuel size={9} />
                                    {comment.fuelConsumption}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Text */}
                    <p className="text-[12px] text-[#3F3F46] mt-2 leading-relaxed">{comment.text}</p>

                    {/* Like button */}
                    <button
                        onClick={handleLike}
                        disabled={liked}
                        className={`mt-2 flex items-center gap-1.5 text-[11px] font-medium transition-all duration-200 ${
                            liked
                                ? 'text-[#A91D3A] cursor-default'
                                : 'text-[#A1A1AA] hover:text-[#A91D3A] cursor-pointer'
                        }`}
                    >
                        <ThumbsUp size={12} className={liked ? 'fill-[#A91D3A]' : ''} />
                        {(comment.likes + (liked ? 1 : 0)) > 0 && (
                            <span>{comment.likes + (liked ? 1 : 0)}</span>
                        )}
                        <span>{liked ? 'Beğenildi' : 'Faydalı'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Main Comments Component ────────────────────────
export default function Comments({ vehicleId, engineSlug, vehicleName }: CommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Form state
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [ownershipMonths, setOwnershipMonths] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');

    // Fetch approved comments
    const fetchComments = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getComments(vehicleId, engineSlug);
            setComments(data);
        } catch (err) {
            console.error('Yorumlar yüklenirken hata:', err);
        } finally {
            setLoading(false);
        }
    }, [vehicleId, engineSlug]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    // Submit comment
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!author.trim() || !text.trim() || rating === 0) return;

        setSubmitting(true);
        try {
            const input: CommentInput = {
                vehicleId,
                engineSlug,
                author: author.trim(),
                rating,
                text: text.trim(),
                ...(ownershipMonths && { ownershipMonths: parseInt(ownershipMonths) }),
                ...(fuelConsumption && { fuelConsumption: fuelConsumption.trim() }),
            };

            await addComment(input);

            // Reset form
            setAuthor('');
            setRating(0);
            setText('');
            setOwnershipMonths('');
            setFuelConsumption('');
            setShowForm(false);
            setSubmitSuccess(true);

            setTimeout(() => setSubmitSuccess(false), 6000);
        } catch (err: unknown) {
            const errorMsg = err instanceof Error ? err.message : String(err);
            console.error('Yorum eklenirken hata:', err);
            alert('HATA: ' + errorMsg);
        } finally {
            setSubmitting(false);
        }
    };

    // Like handler
    const handleLike = async (commentId: string) => {
        try {
            await likeComment(commentId);
        } catch (err) {
            console.error('Beğeni hatası:', err);
        }
    };

    const displayedComments = showAll ? comments : comments.slice(0, 5);
    const avgRating = comments.length > 0
        ? Math.round((comments.reduce((sum, c) => sum + c.rating, 0) / comments.length) * 10) / 10
        : 0;

    return (
        <div className="card-elevated overflow-hidden">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-[#EBEBED]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#FDF0F2] flex items-center justify-center text-[#A91D3A]">
                            <MessageSquare size={16} />
                        </div>
                        <div>
                            <h2 className="text-[14px] font-bold text-[#0F0F10]">Kullanıcı Yorumları</h2>
                            <div className="flex items-center gap-2 mt-0.5">
                                {comments.length > 0 ? (
                                    <>
                                        <StarRating rating={Math.round(avgRating)} size={11} />
                                        <span className="text-[11px] text-[#71717A] font-medium">
                                            {avgRating} / 5 · {comments.length} yorum
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-[11px] text-[#A1A1AA]">Henüz yorum yok</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="btn-primary text-[12px] py-2 px-4"
                    >
                        <MessageSquare size={13} />
                        Yorum Yaz
                    </button>
                </div>

                {/* Success message — moderation notice */}
                {submitSuccess && (
                    <div className="mt-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12px] font-medium px-4 py-3 rounded-lg animate-fadeIn flex items-start gap-2.5">
                        <ShieldCheck size={16} className="flex-shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                            <p className="font-semibold">Yorumunuz başarıyla alındı!</p>
                            <p className="text-[11px] mt-0.5 text-emerald-600">
                                Yorumunuz incelendikten sonra yayınlanacaktır. Teşekkür ederiz.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Comment Form */}
            {showForm && (
                <form onSubmit={handleSubmit} className="p-5 sm:p-6 bg-[#FAFAFA] border-b border-[#EBEBED] animate-fadeIn">
                    <div className="space-y-4">
                        {/* Rating */}
                        <div>
                            <label className="label">Puanınız *</label>
                            <div className="flex items-center gap-2">
                                <StarRating rating={rating} onRate={setRating} interactive size={24} />
                                {rating > 0 && (
                                    <span className="text-[12px] font-semibold text-[#A91D3A]">{rating}/5</span>
                                )}
                            </div>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="label">Adınız Soyadınız *</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="Örn: Ahmet Yılmaz"
                                className="search-input !pl-4 !text-[13px]"
                                maxLength={50}
                                required
                            />
                        </div>

                        {/* Comment text */}
                        <div>
                            <label className="label">Yorumunuz *</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={`${vehicleName} hakkındaki deneyiminizi paylaşın...`}
                                className="search-input !pl-4 !text-[13px]"
                                maxLength={1000}
                                required
                                rows={4}
                                style={{ minHeight: '100px', resize: 'vertical' }}
                            />
                            <span className="text-[10px] text-[#A1A1AA] mt-1 block">{text.length}/1000</span>
                        </div>

                        {/* Optional fields */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="label">Sahiplik Süresi (ay)</label>
                                <input
                                    type="number"
                                    value={ownershipMonths}
                                    onChange={(e) => setOwnershipMonths(e.target.value)}
                                    placeholder="Örn: 18"
                                    className="search-input !pl-4 !text-[13px]"
                                    min={1}
                                    max={360}
                                />
                            </div>
                            <div>
                                <label className="label">Gerçek Yakıt Tüketimi</label>
                                <input
                                    type="text"
                                    value={fuelConsumption}
                                    onChange={(e) => setFuelConsumption(e.target.value)}
                                    placeholder="Örn: 6.2 lt/100km"
                                    className="search-input !pl-4 !text-[13px]"
                                    maxLength={30}
                                />
                            </div>
                        </div>

                        {/* Moderation notice */}
                        <div className="flex items-center gap-2 text-[11px] text-[#71717A] bg-[#F0F0F2] px-3 py-2 rounded-lg">
                            <ShieldCheck size={13} className="flex-shrink-0 text-[#A1A1AA]" />
                            <span>Yorumunuz yayınlanmadan önce editör onayından geçecektir.</span>
                        </div>

                        {/* Submit */}
                        <div className="flex items-center gap-3 pt-1">
                            <button
                                type="submit"
                                disabled={submitting || !author.trim() || !text.trim() || rating === 0}
                                className="btn-primary text-[12px] py-2.5 px-5"
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 size={14} className="animate-spin" />
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        <Send size={13} />
                                        Yorumu Gönder
                                    </>
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="btn-ghost text-[12px] py-2.5 px-4"
                            >
                                İptal
                            </button>
                        </div>
                    </div>
                </form>
            )}

            {/* Comments List */}
            <div className="p-5 sm:p-6">
                {loading ? (
                    <div className="flex items-center justify-center py-8 gap-2 text-[#A1A1AA]">
                        <Loader2 size={16} className="animate-spin" />
                        <span className="text-[12px]">Yorumlar yükleniyor...</span>
                    </div>
                ) : comments.length === 0 ? (
                    <div className="text-center py-8">
                        <MessageSquare size={28} className="mx-auto text-[#D4D4D8] mb-2" />
                        <p className="text-[13px] font-medium text-[#71717A]">Henüz yorum yok</p>
                        <p className="text-[11px] text-[#A1A1AA] mt-1">
                            {vehicleName} hakkında ilk yorumu siz yazın!
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="space-y-0">
                            {displayedComments.map((comment) => (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                    onLike={handleLike}
                                />
                            ))}
                        </div>

                        {/* Show more */}
                        {comments.length > 5 && !showAll && (
                            <button
                                onClick={() => setShowAll(true)}
                                className="w-full mt-4 py-2.5 text-[12px] font-semibold text-[#A91D3A] bg-[#FDF0F2] rounded-lg hover:bg-[#FAE5E9] transition-colors flex items-center justify-center gap-1.5"
                            >
                                <ChevronDown size={14} />
                                Tüm Yorumları Göster ({comments.length})
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
