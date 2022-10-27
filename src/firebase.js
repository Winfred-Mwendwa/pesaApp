// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDf0oxsjZ1s9WMwSZAH7aLy8v1uiLDRmgs",
    authDomain: "pesaapp-871d6.firebaseapp.com",
    databaseURL: "https://pesaapp-871d6-default-rtdb.firebaseio.com",
    projectId: "pesaapp-871d6",
    storageBucket: "pesaapp-871d6.appspot.com",
    messagingSenderId: "142545972197",
    appId: "1:142545972197:web:600e23abdd98d368ac9d0c",
    measurementId: "G-6SBWF37JQC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase } from "firebase/database"
export const database = getDatabase(app);