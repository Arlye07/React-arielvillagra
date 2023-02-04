import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC31MHcNfMu1MTdENueOmXxb_Pckz5z9Qs",
  authDomain: "coderreact-f1ad5.firebaseapp.com",
  projectId: "coderreact-f1ad5",
  storageBucket: "coderreact-f1ad5.appspot.com",
  messagingSenderId: "719248162066",
  appId: "1:719248162066:web:2444f105568a87f009c7cb",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig); //FirebaseApp
const db = getFirestore(app)//Firestore
export const productsCollection = collection (db, "productos") //ColllectionReference
//console.log(app)
export const ventasCollection = collection(db,"ventas")