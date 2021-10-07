// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXqtpBOMEJpTnjRmUsbIecx_OQ7-iEcBs",
  authDomain: "mern-lama-shop.firebaseapp.com",
  projectId: "mern-lama-shop",
  storageBucket: "mern-lama-shop.appspot.com",
  messagingSenderId: "111343301714",
  appId: "1:111343301714:web:e1b422edad8af468979b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
