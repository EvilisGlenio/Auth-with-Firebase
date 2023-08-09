// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS5LYAbESvY53q8n2eQN_fWajwftEoOsY",
  authDomain: "auth-with-firebase-e3499.firebaseapp.com",
  projectId: "auth-with-firebase-e3499",
  storageBucket: "auth-with-firebase-e3499.appspot.com",
  messagingSenderId: "858629326367",
  appId: "1:858629326367:web:af14d1eb2128515a03772a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);