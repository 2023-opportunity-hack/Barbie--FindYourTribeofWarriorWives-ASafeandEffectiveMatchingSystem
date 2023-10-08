// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnYIDGEohS-0B5hbsv7sMqyOJdTmS7mZo",
    authDomain: "warrior-wives.firebaseapp.com",
    projectId: "warrior-wives",
    storageBucket: "warrior-wives.appspot.com",
    messagingSenderId: "908234378811",
    appId: "1:908234378811:web:9b015d350f56561989961e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };