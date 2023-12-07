import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq8M9LDJgCipbcprtEoxCudpCBHNeQbt4",
  authDomain: "medexpress-1ae2e.firebaseapp.com",
  projectId: "medexpress-1ae2e",
  storageBucket: "medexpress-1ae2e.appspot.com",
  messagingSenderId: "43334291452",
  appId: "1:43334291452:web:a48f4d0e7ac9cf8c5aac79"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;