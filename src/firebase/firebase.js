
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIHA4IhUWD0apADvLoJvI_d2a9L17NP7Q",
  authDomain: "react-patricio-49905.firebaseapp.com",
  projectId: "react-patricio-49905",
  storageBucket: "react-patricio-49905.appspot.com",
  messagingSenderId: "318977059019",
  appId: "1:318977059019:web:c007ff6d656da74716934e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);