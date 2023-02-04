// App Init
import { initializeApp } from "firebase/app";
// Analytics
import { getAnalytics } from "firebase/analytics";
// Database Firebase
import { getFirestore, collection, getDoc } from "firebase/firestore";

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

const db = getFirestore();
// export const blogRef = database.ref();

const postCol = collection(db, "posts");
console.log(postCol);
// getDoc(postCol).then((snapShot) => {
//   console.log(snapShot);
// });

// const blogRef = db.collection("posts");

// blogRef.get().then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
// });

// export const database = getDatabase(app);

// function writerUserDate(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   const reference = ref(db, "users/" + userId);

//   set(reference, {
//     username: name,
//     email: email,
//     profile_picutre: imageUrl,
//   });
// }

// writerUserDate("BobbyToday", "Tyrone", "updatedbobby@reeltalent.us", "myimg");
