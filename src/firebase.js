import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCgig2CS50_ihDWUhbYwFXSwdPic6AZxek",
  authDomain: "skeleton-template.firebaseapp.com",
  projectId: "skeleton-template",
  storageBucket: "skeleton-template.appspot.com",
  messagingSenderId: "597343627954",
  appId: "1:597343627954:web:b2450a13f7157c317cb7ab",
  measurementId: "G-8N5ENTZSQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);