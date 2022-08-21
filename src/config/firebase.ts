import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDCf4-UWISD-EmROtRQ2gncr9avSsJeQmU",
  authDomain: "z-blog-369a2.firebaseapp.com",
  projectId: "z-blog-369a2",
  storageBucket: "z-blog-369a2.appspot.com",
  messagingSenderId: "411410274070",
  appId: "1:411410274070:web:d2f757330755a3bf9ca237",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
