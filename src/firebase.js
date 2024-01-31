import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlKHEGhhdNUJWFLw1Zpi8vw6Sp-R2cBZk",
  authDomain: "react-crud-blogs.firebaseapp.com",
  projectId: "react-crud-blogs",
  storageBucket: "react-crud-blogs.appspot.com",
  messagingSenderId: "307978159346",
  appId: "1:307978159346:web:ee7d5bd1c47da21ea8fc6b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
