import { initializeApp } from 'firebase/app'
import { getFirestore,addDoc,collection,serverTimestamp, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(app)
export const storage =getStorage(app)

export const createFirebase=()=>{
    try {
        console.log("起動");
        const  docRef = addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}