import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-project-e20df.firebaseapp.com",
  projectId: "store-project-e20df",
  storageBucket: "store-project-e20df.appspot.com",
  messagingSenderId: "508178931936",
  appId: "1:508178931936:web:3b06de38bb6e531a59f085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);