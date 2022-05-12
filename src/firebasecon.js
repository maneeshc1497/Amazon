import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO-WP7tM8J75zN6RjONy6BCL9iKUPcA_k",
    authDomain: "clone-a9c96.firebaseapp.com",
    projectId: "clone-a9c96",
    storageBucket: "clone-a9c96.appspot.com",
    messagingSenderId: "535879308613",
    appId: "1:535879308613:web:9c9b51f07acde6a5bf5a2c",
    measurementId: "G-TS2D2L2VJY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db= firebaseApp.firestore();  
  export const auth= firebase.auth();  
  
  