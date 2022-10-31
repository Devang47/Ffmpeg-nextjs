import { User } from "firebase/auth";
import {
  doc,
  addDoc,
  getDoc,
  getFirestore,
  collection,
} from "firebase/firestore/lite";

import { app } from "../firebase";

const db = getFirestore(app);

export const checkIfUserExists = (email: string) =>
  new Promise(async (resolve, reject) => {
    const docRef = doc(db, "users", email);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          resolve(doc.data());
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

export const createUser = (user: User) =>
  new Promise(async (resolve, reject) => {
    try {
      const userDoc = await addDoc(
        collection(db, "users", user.email || "bug", "data"),
        {
          uid: user.uid,
          email: user.email,
          photo: user.photoURL,
          name: user.displayName,
          admin: false,
        }
      );

      resolve(userDoc);
    } catch (error) {
      reject(error);
    }
  });
