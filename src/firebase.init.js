// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxKI7E_KhBasxpCLRjL281foxLA_qwFw",
  authDomain: "ema-john-simple-c2f3d.firebaseapp.com",
  projectId: "ema-john-simple-c2f3d",
  storageBucket: "ema-john-simple-c2f3d.appspot.com",
  messagingSenderId: "698678144793",
  appId: "1:698678144793:web:e9d5671dd1d35d02965f88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
