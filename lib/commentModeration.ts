import type { CommentInput } from './commentService';

const exactBlockedTokens = new Set([
    'amk', 'aq', 'oc', 'amina', 'aminakoyayim', 'aminakoyim', 'orospu', 'orosbucocugu',
    'pic', 'ibne', 'pezevenk', 'yarrak', 'got', 'gotveren', 'siktir', 'sikeyim',
    'sikerim', 'sikik', 'sikko', 'bok', 'boktan', 'kahpe', 'kaltak', 'yavsak',
    'dangalak', 'gerizekali', 'salak', 'aptal',
]);

const turkishAsciiMap: Record<string, string> = {
    ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u',
};

function normalizeForModeration(value: string): string {
    return value
        .toLocaleLowerCase('tr-TR')
        .replace(/[çğıöşü]/g, (letter) => turkishAsciiMap[letter] ?? letter)
        .replace(/0/g, 'o')
        .replace(/[1!]/g, 'i')
        .replace(/3/g, 'e')
        .replace(/4/g, 'a')
        .replace(/5/g, 's')
        .replace(/7/g, 't')
        .replace(/(.)\1{2,}/g, '$1$1')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

export function containsBlockedLanguage(value: string): boolean {
    const normalized = normalizeForModeration(value);
    if (!normalized) return false;

    const tokens = normalized.split(/\s+/);
    if (tokens.some((token) => exactBlockedTokens.has(token))) return true;

    // Nokta/boşlukla gizlenen kısa küfür kısaltmaları: a.m.k, a q, o.ç vb.
    const compact = tokens.join('');
    return /(?:^| )(?:a m k|a q|o c)(?: |$)/.test(` ${normalized} `)
        || /(?:^|\d)(?:amk|aq|oc)(?:$|\d)/.test(compact)
        || /^(?:amk|aq|oc)$/.test(compact);
}

function normalizeWhitespace(value: string): string {
    return value.replace(/\s+/g, ' ').trim();
}

export function validateAndCleanComment(input: CommentInput): CommentInput {
    const author = normalizeWhitespace(input.author).slice(0, 50);
    const text = normalizeWhitespace(input.text).slice(0, 1000);
    const engineDetail = input.engineDetail ? normalizeWhitespace(input.engineDetail).slice(0, 80) : undefined;
    const fuelConsumption = input.fuelConsumption ? normalizeWhitespace(input.fuelConsumption).slice(0, 30) : undefined;

    if (author.length < 2) throw new Error('Lütfen adınızı yazın.');
    if (text.length < 10) throw new Error('Yorumunuz en az 10 karakter olmalıdır.');
    if (!Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) throw new Error('Lütfen 1-5 arasında puan verin.');
    if (containsBlockedLanguage(`${author} ${text} ${engineDetail ?? ''}`)) {
        throw new Error('Yorum küfür, hakaret veya argo içeremez. Lütfen metni düzenleyin.');
    }
    if (/https?:\/\/|www\.|\b(?:t\.me|wa\.me)\b/i.test(text)) {
        throw new Error('Yorumlara bağlantı veya iletişim adresi eklenemez.');
    }

    const ownershipMonths = input.ownershipMonths && input.ownershipMonths >= 1 && input.ownershipMonths <= 600
        ? Math.round(input.ownershipMonths)
        : undefined;
    const mileageKm = input.mileageKm && input.mileageKm >= 1 && input.mileageKm <= 2_000_000
        ? Math.round(input.mileageKm)
        : undefined;
    const currentYear = new Date().getFullYear() + 1;
    const vehicleYear = input.vehicleYear && input.vehicleYear >= 1950 && input.vehicleYear <= currentYear
        ? Math.round(input.vehicleYear)
        : undefined;

    return {
        vehicleId: input.vehicleId,
        engineSlug: input.engineSlug,
        author,
        rating: input.rating,
        text,
        ownershipMonths,
        fuelConsumption,
        mileageKm,
        vehicleYear,
        engineDetail,
    };
}
