// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuab9iXFuK8zRQbT1gaRFnMYiZY-FDCXI",
  authDomain: "tiktok---jornada-2ad6e.firebaseapp.com",
  projectId: "tiktok---jornada-2ad6e",
  storageBucket: "tiktok---jornada-2ad6e.appspot.com",
  messagingSenderId: "481644502031",
  appId: "1:481644502031:web:866215384823d92d51577a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;