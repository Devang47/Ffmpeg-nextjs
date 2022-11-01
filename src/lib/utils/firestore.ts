import { User } from "firebase/auth";
import {
  doc,
  addDoc,
  getDoc,
  getFirestore,
  collection,
  updateDoc,
  increment,
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
      incrementValue("CREATE_USER_REQUESTS");

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

export const incrementValue = (field: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const metricsRef = doc(db, "metrics", "data");

      const dataObj: any = {};
      dataObj[field] = increment(1);

      await updateDoc(metricsRef, {
        ...dataObj,
      });

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

export const getMetrics = () =>
  new Promise(async (resolve, reject) => {
    const docRef = doc(db, "metrics", "data");

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
