// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAowmDglqWCpIm0_yf2YAIwDICxlV0cAVs",
  authDomain: "todo-app-ad552.firebaseapp.com",
  projectId: "todo-app-ad552",
  storageBucket: "todo-app-ad552.appspot.com",
  messagingSenderId: "164762450139",
  appId: "1:164762450139:web:b5f08e4fe769745113f4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)