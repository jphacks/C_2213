import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
const config = {
    apiKey: import.meta.env.VITE_FB_APIKEY,
    authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
    databaseURL: import.meta.env.BASE_URL,
    projectId: import.meta.env.VITE_FB_PROJECTID,
    storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FB_APPID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
}
export const app = initializeApp(config)
export const auth = getAuth(app);
export const getFBDB = getFirestore(app)