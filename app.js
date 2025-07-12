import { auth, db } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


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

window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};


if (window.location.pathname.includes("ask.html")) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("You must be logged in to ask a question.");
      window.location.href = "login.html";
    }
  });
}


if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
  window.onload = function () {
    loadQuestions(); // load all on start
  };
}


window.searchQuestions = function () {
  const tag = document.getElementById('searchInput')?.value?.trim().toLowerCase();
  loadQuestions(tag || null);
};


async function loadQuestions(tag = null) {
  const listContainer = document.getElementById("questions-list");
  if (!listContainer) return;

  listContainer.innerHTML = "Loading...";

  try {
    const qRef = collection(db, "questions");
    const qSnap = tag
      ? await getDocs(query(qRef, where("tag", "==", tag)))
      : await getDocs(qRef);

    if (qSnap.empty) {
      listContainer.innerHTML = "<li>No questions found.</li>";
      return;
    }

    listContainer.innerHTML = "";
    qSnap.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `${data.title} <small>(${data.tag})</small>`;
      listContainer.appendChild(li);
    });
  } catch (error) {
    listContainer.innerHTML = "<li>Error loading questions.</li>";
    console.error("Error loading questions:", error);
  }
}
