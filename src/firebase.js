// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB795aWuPn5wX1I_U1ZG566lPYJXhGdbdY",
  authDomain: "clone-43a60.firebaseapp.com",
  projectId: "clone-43a60",
  storageBucket: "clone-43a60.appspot.com",
  messagingSenderId: "572172878588",
  appId: "1:572172878588:web:0914fa54443937743fcd79",
  measurementId: "G-FQYMR4ERJC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
