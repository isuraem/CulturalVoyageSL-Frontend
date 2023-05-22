// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDEKh_LAIrTfGblaWdyIXMEOn6lv5ed09M",
  authDomain: "culturalvoyagesl-4a682.firebaseapp.com",
  projectId: "culturalvoyagesl-4a682",
  storageBucket: "culturalvoyagesl-4a682.appspot.com",
  messagingSenderId: "488167291814",
  appId: "1:488167291814:web:5b8f6e12bf4d48babb6d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };


