// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRQjQFmyT5SE8WuLUP6Ie9f2tCkZa0xIs",
  authDomain: "phzbackend.firebaseapp.com",
  projectId: "phzbackend",
  storageBucket: "phzbackend.appspot.com",
  messagingSenderId: "777932483090",
  appId: "1:777932483090:web:00fdc9d08bb235ec9006cb",
  measurementId: "G-N2RW9QJL8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
export const db = getFirestore(app);
=======
export const db = getFirestore(app); //initialize the database function.
>>>>>>> 924058c (added firebase as database)
