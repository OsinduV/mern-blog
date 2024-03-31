// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-885a9.firebaseapp.com",
  projectId: "mern-blog-885a9",
  storageBucket: "mern-blog-885a9.appspot.com",
  messagingSenderId: "131761182179",
  appId: "1:131761182179:web:c9f6cbbe45f6e3989cbcd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
