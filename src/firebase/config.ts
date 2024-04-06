// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL9Q2J0khLo8IRGyOk0RAjp1endfZimfQ",
  authDomain: "image-gallery-91824.firebaseapp.com",
  projectId: "image-gallery-91824",
  storageBucket: "image-gallery-91824.appspot.com",
  messagingSenderId: "182068556533",
  appId: "1:182068556533:web:313a8838170ee12efb0bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth, storage,db};