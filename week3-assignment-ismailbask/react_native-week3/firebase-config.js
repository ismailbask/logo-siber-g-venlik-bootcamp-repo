// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClLaVb3XFsvjFnSAjz6LWk9jRC3ZbN0QI",
  authDomain: "deneme-94810.firebaseapp.com",
  projectId: "deneme-94810",
  storageBucket: "deneme-94810.appspot.com",
  messagingSenderId: "996716001565",
  appId: "1:996716001565:web:cdfc5a3aecb32d2f3449f4",
  measurementId: "G-FHNWT3DMJJ"
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const fireStore = firebase.firestore();
const auth = firebase.auth();
export { fireStore, auth };
