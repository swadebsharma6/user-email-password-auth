// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8UOZVMJS9jwF5N71YHDcikrJok6s9UJI",
  authDomain: "user-email-password-auth-1543a.firebaseapp.com",
  projectId: "user-email-password-auth-1543a",
  storageBucket: "user-email-password-auth-1543a.appspot.com",
  messagingSenderId: "529037404267",
  appId: "1:529037404267:web:742cc4a2574605bdcb692e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
