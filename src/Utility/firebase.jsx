
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'

//* needed for authontication
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

//! Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVca3zrMdc7qHesn8C-TRALDfElu5tNn4",
  authDomain: "clone-482b5.firebaseapp.com",
  projectId: "clone-482b5",
  storageBucket: "clone-482b5.appspot.com",
  messagingSenderId: "301505419793",
  appId: "1:301505419793:web:dcbd92c4203a879095afb0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
