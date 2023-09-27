// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-E0KGaZU3EYJi84CccgvyzOEbbdfRoo",
  authDomain: "base-de-datos-furgosander.firebaseapp.com",
  databaseURL: "https://base-de-datos-furgosander-default-rtdb.firebaseio.com",
  projectId: "base-de-datos-furgosander",
  storageBucket: "base-de-datos-furgosander.appspot.com",
  messagingSenderId: "245932047589",
  appId: "1:245932047589:web:fa94015d79b093f2da280c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db