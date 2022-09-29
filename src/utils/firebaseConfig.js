// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RQxhkomj1CNnvzfoIM-c1RzfEUgl99A",
  authDomain: "aquira-ecommerce-1f4a6.firebaseapp.com",
  projectId: "aquira-ecommerce-1f4a6",
  storageBucket: "aquira-ecommerce-1f4a6.appspot.com",
  messagingSenderId: "667411171883",
  appId: "1:667411171883:web:29be753dc9254ce0bb386e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
