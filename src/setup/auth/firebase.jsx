// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",
  authDomain: "reel-talent-5ef72.firebaseapp.com",
  projectId: "reel-talent-5ef72",
  storageBucket: "reel-talent-5ef72.appspot.com",
  messagingSenderId: "80043393311",
  appId: "1:80043393311:web:43f2be04b4bbe841a0702a",
  measurementId: "G-3RJ1S1E46Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
