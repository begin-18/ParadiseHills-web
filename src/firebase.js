// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPbvSwZ32qRhEMoOs6-rHnekQXrFy94qc",
  authDomain: "web-project-81ddb.firebaseapp.com",
  projectId: "web-project-81ddb",
  storageBucket: "web-project-81ddb.appspot.com",
  messagingSenderId: "247549911504",
  appId: "1:247549911504:web:7a3f8ed82eb9d1920ed9d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};