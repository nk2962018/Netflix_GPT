// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9M7xlT8Lfzgnac-QpH_SlEEvnNa4Xzw",
  authDomain: "netflix-app-7f48b.firebaseapp.com",
  projectId: "netflix-app-7f48b",
  storageBucket: "netflix-app-7f48b.appspot.com",
  messagingSenderId: "373191459252",
  appId: "1:373191459252:web:c2f3f1620ce93de8af32e1",
  measurementId: "G-Z6WYTV9B5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();