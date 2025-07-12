import { auth } from './firebase-config.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ SIGN UP FUNCTION
window.register = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
};

// ✅ LOGIN FUNCTION
window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

// ✅ AUTH CHECK FOR ask.html
if (window.location.pathname.includes("ask.html")) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("You must be logged in to ask a question.");
      window.location.href = "login.html";
    }
  });
}
