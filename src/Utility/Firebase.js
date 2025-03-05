
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBDmb8eZ3EBB0pwVNrt6f-hvA0wNEvcBH0",
  authDomain: "clone-25-361fd.firebaseapp.com",
  projectId: "clone-25-361fd",
  storageBucket: "clone-25-361fd.firebasestorage.app",
  messagingSenderId: "1045825901734",
  appId: "1:1045825901734:web:0244081a6efe53cd361067",
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()