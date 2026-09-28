import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    getDocs,
    serverTimestamp,
    Timestamp,
    limit,
    doc,
    updateDoc,
    deleteDoc,
    increment,
} from "firebase/firestore";
import { db } from "./firebase";
import { validateAndCleanComment } from "./commentModeration";

// ── Types ──────────────────────────────────────────
export type CommentStatus = "pending" | "approved" | "rejected";

export interface Comment {
    id: string;
    vehicleId: number;
    engineSlug?: string;
    author: string;
    rating: number;           // 1-5 yıldız
    text: string;
    ownershipMonths?: number;
    fuelConsumption?: string;
    mileageKm?: number;
    vehicleYear?: number;
    engineDetail?: string;
    likes: number;
    status: CommentStatus;
    createdAt: Date;
}

export interface CommentInput {
    vehicleId: number;
    engineSlug?: string;
    author: string;
    rating: number;
    text: string;
    ownershipMonths?: number;
    fuelConsumption?: string;
    mileageKm?: number;
    vehicleYear?: number;
    engineDetail?: string;
}

// ── Collection Reference ───────────────────────────
const COLLECTION = "comments";

// ── Add Comment (argo filtresinden sonra doğrudan yayında) ───────────────
export async function addComment(input: CommentInput): Promise<string> {
    const cleaned = validateAndCleanComment(input);
    // Firestore undefined kabul etmez — temizle
    const cleanData: Record<string, unknown> = {
        vehicleId: cleaned.vehicleId,
        author: cleaned.author,
        rating: cleaned.rating,
        text: cleaned.text,
        likes: 0,
        status: "approved" as CommentStatus,
        createdAt: serverTimestamp(),
    };

    // Opsiyonel alanları sadece değer varsa ekle
    if (cleaned.engineSlug) cleanData.engineSlug = cleaned.engineSlug;
    if (cleaned.ownershipMonths) cleanData.ownershipMonths = cleaned.ownershipMonths;
    if (cleaned.fuelConsumption) cleanData.fuelConsumption = cleaned.fuelConsumption;
    if (cleaned.mileageKm) cleanData.mileageKm = cleaned.mileageKm;
    if (cleaned.vehicleYear) cleanData.vehicleYear = cleaned.vehicleYear;
    if (cleaned.engineDetail) cleanData.engineDetail = cleaned.engineDetail;

    const docRef = await addDoc(collection(db, COLLECTION), cleanData);
    return docRef.id;
}

// ── Get APPROVED Comments (public) ─────────────────
export async function getComments(
    vehicleId: number,
    engineSlug?: string,
    maxResults: number = 50
): Promise<Comment[]> {
    const constraints = [
        where("vehicleId", "==", vehicleId),
        where("status", "==", "approved"),   // Sadece onaylananlar
        orderBy("createdAt", "desc"),
        limit(maxResults),
    ];

    if (engineSlug) {
        constraints.splice(2, 0, where("engineSlug", "==", engineSlug));
    }

    const q = query(collection(db, COLLECTION), ...constraints);
    const snapshot = await getDocs(q);

    return snapshot.docs.map((d) => docToComment(d));
}

// ── Get ALL Comments (admin) ───────────────────────
export async function getAllComments(
    statusFilter?: CommentStatus,
    maxResults: number = 200
): Promise<Comment[]> {
    const constraints: ReturnType<typeof where | typeof orderBy | typeof limit>[] = [
        orderBy("createdAt", "desc"),
        limit(maxResults),
    ];

    if (statusFilter) {
        constraints.unshift(where("status", "==", statusFilter));
    }

    const q = query(collection(db, COLLECTION), ...constraints);
    const snapshot = await getDocs(q);

    return snapshot.docs.map((d) => docToComment(d));
}

// ── Approve / Reject Comment (admin) ───────────────
export async function moderateComment(
    commentId: string,
    newStatus: "approved" | "rejected"
): Promise<void> {
    const docRef = doc(db, COLLECTION, commentId);
    await updateDoc(docRef, { status: newStatus });
}

// ── Delete Comment (admin) ─────────────────────────
export async function deleteComment(commentId: string): Promise<void> {
    const docRef = doc(db, COLLECTION, commentId);
    await deleteDoc(docRef);
}

// ── Like Comment ───────────────────────────────────
export async function likeComment(commentId: string): Promise<void> {
    const docRef = doc(db, COLLECTION, commentId);
    await updateDoc(docRef, { likes: increment(1) });
}

// ── Get Average Rating (approved only) ─────────────
export async function getAverageRating(
    vehicleId: number,
    engineSlug?: string
): Promise<{ average: number; count: number }> {
    const constraints = [
        where("vehicleId", "==", vehicleId),
        where("status", "==", "approved"),
    ];
    if (engineSlug) {
        constraints.push(where("engineSlug", "==", engineSlug));
    }

    const q = query(collection(db, COLLECTION), ...constraints);
    const snapshot = await getDocs(q);

    if (snapshot.empty) return { average: 0, count: 0 };

    const ratings = snapshot.docs.map((d) => d.data().rating as number);
    const sum = ratings.reduce((a, b) => a + b, 0);
    return {
        average: Math.round((sum / ratings.length) * 10) / 10,
        count: ratings.length,
    };
}

// ── Helper: Firestore doc → Comment ────────────────
function docToComment(d: import("firebase/firestore").QueryDocumentSnapshot): Comment {
    const data = d.data();
    return {
        id: d.id,
        vehicleId: data.vehicleId,
        engineSlug: data.engineSlug,
        author: data.author,
        rating: data.rating,
        text: data.text,
        ownershipMonths: data.ownershipMonths,
        fuelConsumption: data.fuelConsumption,
        mileageKm: data.mileageKm,
        vehicleYear: data.vehicleYear,
        engineDetail: data.engineDetail,
        likes: data.likes || 0,
        status: data.status || "pending",
        createdAt: data.createdAt instanceof Timestamp
            ? data.createdAt.toDate()
            : new Date(),
    };
}
