// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
    // authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    // databaseURL: "process.env.REACT_APP_FIREBASE_DATABASE_URL",
    // projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
    // storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
    // messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    // appId: "process.env.REACT_APP_FIREBASE_APP_ID",
    // measurementId: "process.env.REACT_APP_FIREBASE_MEASUREMENT_ID"
    apiKey: "AIzaSyBDbYQtdOXgl-BjJ1bVxs_E2l98X31ePEo",
    authDomain: "kepler-voice-66041.firebaseapp.com",
    databaseURL: "https://kepler-voice-66041-default-rtdb.firebaseio.com/",
    projectId: "kepler-voice-66041",
    storageBucket: "kepler-voice-66041.appspot.com",
    messagingSenderId: "119302657112",
    appId: "1:119302657112:web:4005c69b48df596ed4e62d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;