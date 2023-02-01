import {initializeApp} from "firebase/app";

const firebaseConfig ={
    apiKey:"",
    authDomain:"comision-12.firebaseapp.com",
}

const app = initializeApp(firebaseConfig)//FirebaseApp
const db = getFirestore(app)//Firestore