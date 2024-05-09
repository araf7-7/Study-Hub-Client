// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGPFS07nNq4I-W-lqyIEWaHewUtCgq3y8",
  authDomain: "assignment-11-6ac64.firebaseapp.com",
  projectId: "assignment-11-6ac64",
  storageBucket: "assignment-11-6ac64.appspot.com",
  messagingSenderId: "383016906016",
  appId: "1:383016906016:web:bccdceb8ba4a0fb5e9fb45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 