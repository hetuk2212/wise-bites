// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUDk36EHSDmATWcnLWXe4UMI2dtvhGLo8",
  authDomain: "wisebites-3ce7a.firebaseapp.com",
  projectId: "wisebites-3ce7a",
  storageBucket: "wisebites-3ce7a.firebasestorage.app",
  messagingSenderId: "459066239512",
  appId: "1:459066239512:web:84dfa6de1ab490e3efb16d",
  measurementId: "G-EBYCL6JERG"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Named exports
export { db, auth };
