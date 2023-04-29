// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUHdE4oAwpITRQSznclB0G8j2DrMiLfGU",
    authDomain: "my-shopping-10720.firebaseapp.com",
    projectId: "my-shopping-10720",
    storageBucket: "my-shopping-10720.appspot.com",
    messagingSenderId: "983553151329",
    appId: "1:983553151329:web:6b1b31ed514bbc63e97520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;