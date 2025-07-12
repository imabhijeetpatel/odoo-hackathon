// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJDfWwo9LQ5qkGQr5QLXNwTbcvptDujXA",
  authDomain: "webchat-12db4.firebaseapp.com",
  projectId: "webchat-12db4",
  storageBucket: "webchat-12db4.firebasestorage.app",
  messagingSenderId: "805958973593",
  appId: "1:805958973593:web:7284ca1b0b98e1d58c6008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Replace these values with your Firebase project's config

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
