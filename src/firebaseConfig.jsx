// App Init
import { initializeApp } from "firebase/app";
// Analytics
import { getAnalytics } from "firebase/analytics";
// Database Firebase
import { getFirestore } from "firebase/firestore";

//Firebase configuration
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
