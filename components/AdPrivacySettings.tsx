'use client';

export default function AdPrivacySettings() {
    return <button type="button" className="underline underline-offset-4 cursor-pointer" onClick={() => {
        const api = (window as Window & { googlefc?: { callbackQueue?: Array<() => void>; showRevocationMessage?: () => void } }).googlefc;
        if (api?.showRevocationMessage) api.showRevocationMessage();
        else window.location.assign('/gizlilik#reklam-tercihleri');
    }}>Reklam gizlilik tercihleri</button>;
}
