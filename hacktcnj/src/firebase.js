// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvmVvbxCWEAuJdI0mtT0Ol004lb-2Evnc",
  authDomain: "hackathon-c1295.firebaseapp.com",
  projectId: "hackathon-c1295",
  storageBucket: "hackathon-c1295.appspot.com",
  messagingSenderId: "983494818256",
  appId: "1:983494818256:web:5fa1b7489d0edaf20d61d5",
  measurementId: "G-64RWGDT1NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
