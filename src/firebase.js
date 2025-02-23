// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration object (already provided)
const firebaseConfig = {
  apiKey: "AIzaSyCY__skewhIVaCsuIF9i7mONJEwoRtTMNU",
  authDomain: "devolution-uk.firebaseapp.com",
  databaseURL:
    "https://devolution-uk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "devolution-uk",
  storageBucket: "devolution-uk.firebasestorage.app",
  messagingSenderId: "387153651411",
  appId: "1:387153651411:web:1293178498b8494a405626",
  measurementId: "G-C3Q03EYSS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
