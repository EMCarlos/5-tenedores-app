// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4pjBC3iWlI7W5toyAzvQ6TEBNtk6NIg",
  authDomain: "tenedores-78816.firebaseapp.com",
  projectId: "tenedores-78816",
  storageBucket: "tenedores-78816.appspot.com",
  messagingSenderId: "963333226819",
  appId: "1:963333226819:web:c1762dbf7c7111caadaff6",
  measurementId: "G-D2ZF4PKY09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
