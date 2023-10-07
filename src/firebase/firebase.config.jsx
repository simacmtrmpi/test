// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-zytk2S9ZMuW3H4YDpVmuUnmHBvURk8",
  authDomain: "f-international-007.firebaseapp.com",
  projectId: "f-international-007",
  storageBucket: "f-international-007.appspot.com",
  messagingSenderId: "1097123234283",
  appId: "1:1097123234283:web:49926bc318af9f1623d9ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
