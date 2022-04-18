// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4A2JMwvbEAOwTSlT3m8kXnW0F7uAlSw",
  authDomain: "dream-photostore.firebaseapp.com",
  projectId: "dream-photostore",
  storageBucket: "dream-photostore.appspot.com",
  messagingSenderId: "707314099409",
  appId: "1:707314099409:web:407c45ade48c7cb4d111f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;