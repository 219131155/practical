// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as firebase from "firebase/app"


// const firebaseConfig = {
//   apiKey: "AIzaSyAiAVpBYPe2Kp7miRv9LNTuS32lf4r1bm8",
//   authDomain: "koshawebapp.firebaseapp.com",
//   projectId: "koshawebapp",
//   storageBucket: "koshawebapp.appspot.com",
//   messagingSenderId: "230833873788",
//   appId: "1:230833873788:web:3afb29a4feac27a36abaf9",
//   measurementId: "G-C7CND2QCNC"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAdp1n4SvCou62FXEBVDu9a-Y8EKHXc-O0",
//   authDomain: "kosha-c5a7b.firebaseapp.com",
//   projectId: "kosha-c5a7b",
//   storageBucket: "kosha-c5a7b.appspot.com",
//   messagingSenderId: "112725392809",
//   appId: "1:112725392809:web:c6fd68fd1b00a3102f58b8",
//   measurementId: "G-3FX4ZQH6SH"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCPXr7ay0SgZpItRoJIBCTIGP-XkWHhiks",
//   authDomain: "ambient-shelter-332522.firebaseapp.com",
//   projectId: "ambient-shelter-332522",
//   storageBucket: "ambient-shelter-332522.appspot.com",
//   messagingSenderId: "681850660159",
//   appId: "1:681850660159:web:90580b2c33f669c9eb1f8a",
//   measurementId: "G-JHF0HDPP0P"
// };

// Initialize Firebase

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXboMxeI6NqpekCb4RZU5uG6Xs5iz7xIA",
  authDomain: "angular-ab97e.firebaseapp.com",
  projectId: "angular-ab97e",
  storageBucket: "angular-ab97e.appspot.com",
  messagingSenderId: "282789557901",
  appId: "1:282789557901:web:9fc43b3e6367b5d5d114c4",
  measurementId: "G-HLJSVN6XVQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const st = getStorage(app);