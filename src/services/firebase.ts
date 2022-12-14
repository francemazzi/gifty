//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz0lYGKHc4FVl_pFPNyZslGwKwG_1xPPU",
  authDomain: "gifty-3d5c2.firebaseapp.com",
  projectId: "gifty-3d5c2",
  storageBucket: "gifty-3d5c2.appspot.com",
  messagingSenderId: "548170585376",
  appId: "1:548170585376:web:645e054f9cea2daa053345",
  measurementId: "G-VK41EVEW3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analyticsFirebase = getAnalytics(app);

//autenticatore
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const auth = getAuth(app);
auth.languageCode = "it";
export const db = getFirestore(app);
// export const db = getDatabase(app);
export const storage = getStorage(app);
export default firebaseConfig;
export { app, analyticsFirebase };
