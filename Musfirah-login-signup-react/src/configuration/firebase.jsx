// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCokuSWT8eAPVZiNrr9hnHBHE_qkacr50",
  authDomain: "react-loginsingnup-auth.firebaseapp.com",
  projectId: "react-loginsingnup-auth",
  storageBucket: "react-loginsingnup-auth.appspot.com",
  messagingSenderId: "914965929583",
  appId: "1:914965929583:web:fbe65bcf4ba5f5564cf79a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);



 export default app;
export  {auth}