// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDOUv9W4bAwKXVTd_Fg0DhqTB2HdVEHSU",
  authDomain: "controle-de-gastos-81146.firebaseapp.com",
  projectId: "controle-de-gastos-81146",
  storageBucket: "controle-de-gastos-81146.appspot.com",
  messagingSenderId: "409050067657",
  appId: "1:409050067657:web:fe86f1c2e9acb7ed2b5318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);