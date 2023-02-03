// App Init
import { initializeApp } from "firebase/app";
// Analytics
import { getAnalytics } from "firebase/analytics";
// Database Firebase
import { getDatabase, ref, set } from "firebase/database";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",
  authDomain: "reel-talent-5ef72.firebaseapp.com",
  projectId: "reel-talent-5ef72",
  databaseURL: "https://reel-talent-5ef72-default-rtdb.firebaseio.com/",
  storageBucket: "reel-talent-5ef72.appspot.com",
  messagingSenderId: "80043393311",
  appId: "1:80043393311:web:43f2be04b4bbe841a0702a",
  measurementId: "G-3RJ1S1E46Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
// Create a new reference

// export const blogRef = database.ref();

function writerUserDate(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);

  set(reference, {
    username: name,
    email: email,
    profile_picutre: imageUrl,
  });
}

writerUserDate("BobbyToday", "Tyrone", "updatedbobby@reeltalent.us", "myimg");

console.log(database.ref());
