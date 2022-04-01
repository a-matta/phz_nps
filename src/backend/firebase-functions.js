import { db } from "../backend/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const firebaseUpload = async (results) => {
  console.log("Results from firebaseUpload:");
  console.log(results);
  const isEmpty = Object.keys(results).length === 0;

  console.log("object is empty? :", isEmpty);
  if (!isEmpty) {
    const docRef = collection(db, "survey_results");
    try {
      await addDoc(docRef, results);
      console.log("data sent to firebase");
    } catch (error) {
      console.log("error: ", error);
    }
  }
};
