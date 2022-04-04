import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
export const firebaseUpload = async (results) => {
  console.log("result from firebaseupload");
  console.log(results);
  const isEmpty = Object.keys(results).length === 0;
  console.log("object is empty?", isEmpty);
  if (!isEmpty) {
    const docRef = collection(db, "survey-results");
    try {
      await addDoc(docRef, results);
      console.log("data sent to firebase");
    } catch (error) {
      console.log("error", error);
    }
  }
};
