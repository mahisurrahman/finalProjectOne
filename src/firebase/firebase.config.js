// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// VITE_apiKey=AIzaSyCe-Q9WNxZiSlqo-pu5vVraUQdQhLoViBM
// VITE_authDomain=finalprojectone-89d00.firebaseapp.com
// VITE_projectId=finalprojectone-89d00
// VITE_storageBucket=finalprojectone-89d00.appspot.com
// VITE_messagingSenderId=656546512022
// VITE_appId=1:656546512022:web:5b05fa95d83a820d8d16b7


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);