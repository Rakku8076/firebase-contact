// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJXsVzuCDSRDCZLoclbNAnv2Ra7mMPWvg",
  authDomain: "vite-contact-bb1b7.firebaseapp.com",
  projectId: "vite-contact-bb1b7",
  storageBucket: "vite-contact-bb1b7.firebasestorage.app",
  messagingSenderId: "748477463350",
  appId: "1:748477463350:web:0725efa6d0f047ad785197"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);