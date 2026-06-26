import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCd_XwGo1WDxI9paRjf1vhGKNtyFwnygH8",
    authDomain: "otokusur-web.firebaseapp.com",
    projectId: "otokusur-web",
    storageBucket: "otokusur-web.firebasestorage.app",
    messagingSenderId: "1063088879696",
    appId: "1:1063088879696:web:d639e9417409347c51b955",
    measurementId: "G-0086290DEF"
};

// Singleton pattern — prevent re-initialization in HMR / SSR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore — yorumlar için kullanılacak
export const db = getFirestore(app);

// Analytics — sadece tarayıcıda çalışır (SSR-safe)
export const initAnalytics = async () => {
    if (typeof window !== "undefined" && await isSupported()) {
        return getAnalytics(app);
    }
    return null;
};

export default app;
