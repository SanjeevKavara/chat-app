// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";



 const firebaseConfig = {
    apiKey: "AIzaSyCHyhvM8g8Mh1E86ph4_RlcR7zyl0f90yI",
    authDomain: "chat-app-40cf3.firebaseapp.com",
    projectId: "chat-app-40cf3",
    storageBucket: "chat-app-40cf3.appspot.com",
    messagingSenderId: "861028917578",
    appId: "1:861028917578:web:e17db8079a1ece6029a1b3"
  };  
  
  

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);