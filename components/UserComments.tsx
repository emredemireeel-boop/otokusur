'use client';
import { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Star, Send, User, ThumbsUp, Clock } from 'lucide-react';

interface Comment {
    id: string;
    vehicleId: string;
    name: string;
    surname: string;
    rating: number;
    text: string;
    date: string;
    likes: number;
}

interface UserCommentsProps {
    vehicleId: string;
    vehicleName: string;
}

export default function UserComments({ vehicleId, vehicleName }: UserCommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

    const storageKey = `otokusur_comments_${vehicleId}`;
    const likesKey = `otokusur_liked_${vehicleId}`;

    // Load comments from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored) setComments(JSON.parse(stored));
            const storedLikes = localStorage.getItem(likesKey);
            if (storedLikes) setLikedIds(new Set(JSON.parse(storedLikes)));
        } catch { /* ignore */ }
    }, [storageKey, likesKey]);

    const saveComments = useCallback((newComments: Comment[]) => {
        setComments(newComments);
        localStorage.setItem(storageKey, JSON.stringify(newComments));
    }, [storageKey]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !surname.trim() || !text.trim() || rating === 0) return;

        setIsSubmitting(true);

        setTimeout(() => {
            const newComment: Comment = {
                id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
                vehicleId,
                name: name.trim(),
                surname: surname.trim(),
                rating,
                text: text.trim(),
                date: new Date().toISOString(),
                likes: 0,
            };

            saveComments([newComment, ...comments]);
            setName('');
            setSurname('');
            setRating(0);
            setText('');
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 400);
    };

    const handleLike = (commentId: string) => {
        if (likedIds.has(commentId)) return;
        const updated = comments.map(c =>
            c.id === commentId ? { ...c, likes: c.likes + 1 } : c
        );
        saveComments(updated);
        const newLiked = new Set(likedIds);
        newLiked.add(commentId);
        setLikedIds(newLiked);
        localStorage.setItem(likesKey, JSON.stringify([...newLiked]));
    };

    const formatDate = (iso: string) => {
        const d = new Date(iso);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        const diffHour = Math.floor(diffMs / 3600000);
        const diffDay = Math.floor(diffMs / 86400000);

        if (diffMin < 1) return 'Az önce';
        if (diffMin < 60) return `${diffMin} dk önce`;
        if (diffHour < 24) return `${diffHour} saat önce`;
        if (diffDay < 7) return `${diffDay} gün önce`;
        return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const getInitials = (n: string, s: string) => {
        return (n.charAt(0) + s.charAt(0)).toUpperCase();
    };

    const avgRating = comments.length > 0
        ? (comments.reduce((sum, c) => sum + c.rating, 0) / comments.length).toFixed(1)
        : null;

    return (
        <div className="card-elevated p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#A91D3A]" />
                    <h2 className="text-[14px] font-bold text-[#0F0F10]">Kullanıcı Yorumları</h2>
                </div>
                {comments.length > 0 && (
                    <div className="flex items-center gap-1.5">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-[13px] font-bold text-[#0F0F10]">{avgRating}</span>
                        <span className="text-[10px] text-[#A1A1AA]">({comments.length} yorum)</span>
                    </div>
                )}
            </div>
            <p className="text-[11px] text-[#A1A1AA] mb-5">{vehicleName} hakkında deneyimlerinizi paylaşın</p>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="bg-[#F7F7F8] rounded-xl p-4 sm:p-5 border border-[#EBEBED]">
                    {/* Name fields */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                            <label htmlFor="comment-name" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1 block">
                                Ad
                            </label>
                            <input
                                id="comment-name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Adınız"
                                maxLength={30}
                                className="w-full px-3 py-2.5 rounded-lg border border-[#EBEBED] bg-white text-[12px] font-medium text-[#0F0F10] placeholder:text-[#A1A1AA] outline-none focus:border-[#A91D3A] transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="comment-surname" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1 block">
                                Soyad
                            </label>
                            <input
                                id="comment-surname"
                                type="text"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                                placeholder="Soyadınız"
                                maxLength={30}
                                className="w-full px-3 py-2.5 rounded-lg border border-[#EBEBED] bg-white text-[12px] font-medium text-[#0F0F10] placeholder:text-[#A1A1AA] outline-none focus:border-[#A91D3A] transition-colors"
                                required
                            />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                        <label className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1.5 block">
                            Puan
                        </label>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="p-0.5 transition-transform hover:scale-110"
                                    aria-label={`${star} yıldız`}
                                >
                                    <Star
                                        size={20}
                                        className={`transition-colors ${
                                            star <= (hoverRating || rating)
                                                ? 'text-amber-400 fill-amber-400'
                                                : 'text-[#D4D4D8]'
                                        }`}
                                    />
                                </button>
                            ))}
                            {rating > 0 && (
                                <span className="text-[11px] text-[#71717A] ml-2 font-medium">
                                    {['', 'Çok Kötü', 'Kötü', 'Orta', 'İyi', 'Çok İyi'][rating]}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Comment text */}
                    <div className="mb-3">
                        <label htmlFor="comment-text" className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.08em] mb-1 block">
                            Yorumunuz
                        </label>
                        <textarea
                            id="comment-text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Bu araçla ilgili deneyiminizi paylaşın..."
                            maxLength={500}
                            rows={3}
                            className="w-full px-3 py-2.5 rounded-lg border border-[#EBEBED] bg-white text-[12px] font-medium text-[#0F0F10] placeholder:text-[#A1A1AA] outline-none focus:border-[#A91D3A] transition-colors resize-none leading-relaxed"
                            required
                        />
                        <p className="text-[9px] text-[#A1A1AA] text-right mt-0.5">{text.length}/500</p>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={!name.trim() || !surname.trim() || !text.trim() || rating === 0 || isSubmitting}
                        className="w-full py-2.5 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-2 transition-all bg-[#A91D3A] hover:bg-[#8B1730] text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Gönderiliyor...
                            </span>
                        ) : (
                            <>
                                <Send size={12} />
                                Yorum Gönder
                            </>
                        )}
                    </button>
                </div>
            </form>

            {/* Success message */}
            {showSuccess && (
                <div className="mb-4 rounded-lg px-4 py-3 bg-[#ECFDF5] border border-[#A7F3D0] text-[12px] text-[#065F46] font-medium flex items-center gap-2 animate-fadeIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Yorumunuz başarıyla eklendi!
                </div>
            )}

            {/* Comments list */}
            {comments.length === 0 ? (
                <div className="text-center py-8">
                    <MessageSquare size={28} className="text-[#D4D4D8] mx-auto mb-2" />
                    <p className="text-[12px] text-[#71717A] mb-1">Henüz yorum yok</p>
                    <p className="text-[10px] text-[#A1A1AA]">İlk yorumu siz bırakın!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {comments.map(comment => (
                        <div key={comment.id} className="border border-[#EBEBED] rounded-lg p-4 hover:border-[#D4D4D8] transition-colors">
                            {/* Comment header */}
                            <div className="flex items-center justify-between mb-2.5">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A91D3A] to-[#8B1730] flex items-center justify-center text-[10px] font-bold text-white">
                                        {getInitials(comment.name, comment.surname)}
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-semibold text-[#0F0F10]">
                                            {comment.name} {comment.surname}
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <div className="flex items-center">
                                                {[1, 2, 3, 4, 5].map(s => (
                                                    <Star
                                                        key={s}
                                                        size={10}
                                                        className={s <= comment.rating ? 'text-amber-400 fill-amber-400' : 'text-[#E4E4E7]'}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-[9px] text-[#A1A1AA] flex items-center gap-0.5">
                                                <Clock size={8} />
                                                {formatDate(comment.date)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comment text */}
                            <p className="text-[12px] text-[#3F3F46] leading-relaxed mb-2.5">{comment.text}</p>

                            {/* Like button */}
                            <button
                                onClick={() => handleLike(comment.id)}
                                disabled={likedIds.has(comment.id)}
                                className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md transition-all ${
                                    likedIds.has(comment.id)
                                        ? 'bg-[#FDF0F2] text-[#A91D3A] cursor-default'
                                        : 'text-[#A1A1AA] hover:bg-[#F7F7F8] hover:text-[#71717A]'
                                }`}
                            >
                                <ThumbsUp size={10} className={likedIds.has(comment.id) ? 'fill-[#A91D3A]' : ''} />
                                {comment.likes > 0 ? `Faydalı (${comment.likes})` : 'Faydalı'}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
