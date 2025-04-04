// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC75YqUo3luk43QKPvGINedMQGdBcE5Ch8",
  authDomain: "netfligpt-d63fd.firebaseapp.com",
  projectId: "netfligpt-d63fd",
  storageBucket: "netfligpt-d63fd.firebasestorage.app",
  messagingSenderId: "300039264508",
  appId: "1:300039264508:web:63ea255b3806bfbf0f9f79",
  measurementId: "G-0E86HJHFR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// after add firebase sdk npm install -g firebase-tools

export const auth = getAuth();