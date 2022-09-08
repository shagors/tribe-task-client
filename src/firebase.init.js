
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDhr-MtEfpmi3jtYRrBKyFyytAafcnWavY",
  authDomain: "tribe-task.firebaseapp.com",
  projectId: "tribe-task",
  storageBucket: "tribe-task.appspot.com",
  messagingSenderId: "771339668775",
  appId: "1:771339668775:web:dd2878572b8bd9d482ed02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;