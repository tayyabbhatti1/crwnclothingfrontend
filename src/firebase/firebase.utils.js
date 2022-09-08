// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATjSvndxhZy11wU8zSeGw2PCPTQI_FUtE",
    authDomain: "crwnclothing-db-14ac1.firebaseapp.com",
    projectId: "crwnclothing-db-14ac1",
    storageBucket: "crwnclothing-db-14ac1.appspot.com",
    messagingSenderId: "881515892558",
    appId: "1:881515892558:web:b338831ec5b99d4f93d81f",
    measurementId: "G-43YRKHQDHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider);



