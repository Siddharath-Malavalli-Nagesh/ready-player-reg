// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0vhGRQn6e0DplQqUQz7czTbPUs3w8aM",
  authDomain: "ready-player-one-8e43e.firebaseapp.com",
  projectId: "ready-player-one-8e43e",
  storageBucket: "ready-player-one-8e43e.firebasestorage.app",
  messagingSenderId: "1029961612713",
  appId: "1:1029961612713:web:fde4e98288e4bac63d58b8",
  measurementId: "G-KRK9MSH7TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);