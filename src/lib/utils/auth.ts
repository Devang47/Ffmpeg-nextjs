import { app } from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { formatError } from ".";
import { useAppStore } from "~/context/use-app-store";
import { toast } from "react-hot-toast";
import { toastErrorConfig } from "../constants";
import { checkIfUserExists, createUser } from "./firestore";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      useAppStore.setState({ user: user });

      resolve(user);

      //   This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential?.accessToken;
    } catch (error) {
      reject(error);
    }
  });

export const signOutUser = () =>
  new Promise(async (resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve("Success");
      })
      .catch((error) => {
        toast(error.message, toastErrorConfig);
      });
  });

export const checkIfSignedIn = () =>
  new Promise(async (resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user === null) {
          return reject(null);
        }

        resolve(user);
      },
      (error) => {
        reject(error);
      }
    );
  });
