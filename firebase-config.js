// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJDfWwo9LQ5qkGQr5QLXNwTbcvptDujXA",
  authDomain: "webchat-12db4.firebaseapp.com",
  projectId: "webchat-12db4",
  storageBucket: "webchat-12db4.appspot.com",
  messagingSenderId: "805958973593",
  appId: "1:805958973593:web:7284ca1b0b98e1d58c6008"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
