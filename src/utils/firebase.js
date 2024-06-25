// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsAV3XBr1UBd3pKxNezXVchT-LFdJ0b2M",
  authDomain: "netflixgpt-b4e2b.firebaseapp.com",
  projectId: "netflixgpt-b4e2b",
  storageBucket: "netflixgpt-b4e2b.appspot.com",
  messagingSenderId: "530092056322",
  appId: "1:530092056322:web:647eec291111b073f32c1b",
  measurementId: "G-ZSF17LKP4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();