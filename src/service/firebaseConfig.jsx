// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBa-843inKlSkj2cii0ontpf4uxUm5tOA",
  authDomain: "main-project-a8038.firebaseapp.com",
  projectId: "main-project-a8038",
  storageBucket: "main-project-a8038.firebasestorage.app",
  messagingSenderId: "635801609595",
  appId: "1:635801609595:web:3d5bd0a7f3e6fcbafa09de",
  measurementId: "G-DS60SGDY7W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);