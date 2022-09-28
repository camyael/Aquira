// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_amgCTpUjTKOIf03i0hAYUodQN8y4GnY",
  authDomain: "aquira-reactjs.firebaseapp.com",
  projectId: "aquira-reactjs",
  storageBucket: "aquira-reactjs.appspot.com",
  messagingSenderId: "582580569763",
  appId: "1:582580569763:web:f3be32fdf6afc103c26116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
