
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcFe-tnuJXvvg93XBJ7T6mv-FQjaKjVJ0",
  authDomain: "shopping-7e8d4.firebaseapp.com",
  projectId: "shopping-7e8d4",
  storageBucket: "shopping-7e8d4.firebasestorage.app",
  messagingSenderId: "413090798900",
  appId: "1:413090798900:web:abf1d0c8b8fa29b5a51961",
  measurementId: "G-K53KVZXDSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
const db=getFirestore(app)

export{app,auth ,db}