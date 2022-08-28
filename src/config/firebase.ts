import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY!;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID!;
const SENDER_ID = process.env.REACT_APP_FIREBASE_SENDER_ID!;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID!;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "z-blog-369a2.firebaseapp.com",
  projectId: PROJECT_ID,
  storageBucket: "z-blog-369a2.appspot.com",
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
