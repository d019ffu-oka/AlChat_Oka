import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "あなたのAPIキー",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx-default-rtdb.firebaseio.com/",
  projectId: "xxxx",
  storageBucket: "xxxx.firebasestorage.app",
  messagingSenderId: "xxxxxxxx",
  appId: "xxxxxxxx"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);