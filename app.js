// app.js
import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to home
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Redirect to login if user not signed in (for ask.html)
if (window.location.pathname.includes("ask.html")) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("You must be logged in to ask a question.");
      window.location.href = "login.html";
    }
  });
}
