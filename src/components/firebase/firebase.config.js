// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhcTMwVcz_4mYx0DqzePH9FKxsihGG2S4",
  authDomain: "advisoropedia-assignment.firebaseapp.com",
  projectId: "advisoropedia-assignment",
  storageBucket: "advisoropedia-assignment.appspot.com",
  messagingSenderId: "796523398077",
  appId: "1:796523398077:web:60694e7928832ec9d788d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;