// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyASjO6D8RvPmY0lRjeP8Y-cx87xe3OKj1E",
  authDomain: "social-app-44673.firebaseapp.com",
  projectId: "social-app-44673",
  storageBucket: "social-app-44673.appspot.com",
  messagingSenderId: "947840864009",
  appId: "1:947840864009:web:f20526b9da897dafd10dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

