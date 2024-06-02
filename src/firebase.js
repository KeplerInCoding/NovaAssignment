// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCASvMTm2A_wmLA4e7b4y4ZGCcg1dkhrzQ",
  authDomain: "corporate-website-4535c.firebaseapp.com",
  projectId: "corporate-website-4535c",
  storageBucket: "corporate-website-4535c.appspot.com",
  messagingSenderId: "679855954662",
  appId: "1:679855954662:web:c7bd61b9c40cdab14db927",
  measurementId: "G-031KXMJFSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);