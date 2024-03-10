// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUORba9mD9FfcstS_Ye0oR53_uWDeBamc",
  authDomain: "gum-projects.firebaseapp.com",
  projectId: "gum-projects",
  storageBucket: "gum-projects.appspot.com",
  messagingSenderId: "719422305806",
  appId: "1:719422305806:web:9909e14777fd3eeb072e5f",
  measurementId: "G-GZ7ZSNNXNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;