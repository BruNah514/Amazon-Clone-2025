
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCK3DhrYiiyxxHH0yu1-1WlS22DHOVUVeY",
  authDomain: "clone-2-7765d.firebaseapp.com",
  projectId: "clone-2-7765d",
  storageBucket: "clone-2-7765d.firebasestorage.app",
  messagingSenderId: "94434511085",
  appId: "1:94434511085:web:229d884dc7b18301bda4e4",
  measurementId: "G-P759J2R3ZN",
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()