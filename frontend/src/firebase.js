// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "auth-dc580.firebaseapp.com",
    projectId: "auth-dc580",
    storageBucket: "auth-dc580.firebasestorage.app",
    messagingSenderId: "3493343744",
    appId: "1:3493343744:web:2fc5325d7bbd5c342e9ee5",
    measurementId: "G-H8X693PCRZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app