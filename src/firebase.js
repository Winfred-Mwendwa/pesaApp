// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";
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


import { getDatabase } from "firebase/database"
export const database = getDatabase(app);

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = firebase.auth();


export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};

 export const sendPasswordResetEmail = async (email) => {
  try {
     await auth.sendPasswordResetEmail(email);
     alert("Password reset link sent!");
   } catch (err) {
     console.error(err);
     alert(err.message);
   }
 };
 export const logout = () => {
   auth.signOut();
 };

 export default firebase;