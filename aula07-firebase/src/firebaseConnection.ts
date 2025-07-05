// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh50P_ld6q0rDNCIc_jCrzHk5SCwjQ5TM",
    authDomain: "aula-firebase-3f889.firebaseapp.com",
    projectId: "aula-firebase-3f889",
    storageBucket: "aula-firebase-3f889.firebasestorage.app",
    messagingSenderId: "51145337244",
    appId: "1:51145337244:web:d7aa2dfb3de5222a95c059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};