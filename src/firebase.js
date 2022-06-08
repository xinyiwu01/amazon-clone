//import firebase from "firebase";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh_Cy3YU5PRjkgGgkxEclnbkl5A8GOqhM",
  authDomain: "clone-3133c.firebaseapp.com",
  projectId: "clone-3133c",
  storageBucket: "clone-3133c.appspot.com",
  messagingSenderId: "122335483577",
  appId: "1:122335483577:web:c29c9bec0a0ab202cc2d68",
  measurementId: "G-9NZBLD1GKG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth};