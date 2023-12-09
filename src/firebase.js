// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAA-9dSqtixo0F1JC8iy94BFlhQoYQbau8",
  authDomain: "link-loom.firebaseapp.com",
  databaseURL: "https://link-loom-default-rtdb.firebaseio.com",
  projectId: "link-loom",
  storageBucket: "link-loom.appspot.com",
  messagingSenderId: "890040436040",
  appId: "1:890040436040:web:02d8338a02cba0f0e59f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const store = getFirestore(app)



// kelvin gregg
// usememory
// usecallback
