// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGGFPDeZdQDSf6PXJpEUUdTro97a9tW2o",
  authDomain: "my-portfolio-79acc.firebaseapp.com",
  projectId: "my-portfolio-79acc",
  storageBucket: "my-portfolio-79acc.firebasestorage.app",
  messagingSenderId: "932647817649",
  appId: "1:932647817649:web:f4d48142e7e1f7535e6d90",
  measurementId: "G-CNX08MBZ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);