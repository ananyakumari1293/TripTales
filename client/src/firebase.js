import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSWoOk9s74XZ7olCkb8okfQgUvrNlFIas",
  authDomain: "triptales-e8457.firebaseapp.com",
  projectId: "triptales-e8457",
  storageBucket: "triptales-e8457.firebasestorage.app",
  messagingSenderId: "684218204341",
  appId: "1:684218204341:web:042ff91141eb8787233efc",
  measurementId: "G-DP5KC92E5C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();

export default app;