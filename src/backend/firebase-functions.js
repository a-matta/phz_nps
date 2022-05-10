import { db } from "../backend/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

export const firebaseUpload = (results) => {
  console.log("Results from firebaseUpload:");
  console.log(results);
  const isEmpty = Object.keys(results).length === 0;

  console.log("object is empty? :", isEmpty);
  if (!isEmpty) {
    try {
      axios.post(
        "https://us-central1-promoterscore-14480.cloudfunctions.net/api/data",
        results
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  }
};
