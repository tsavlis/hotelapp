import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDGQhciFsPE3QhGFPMH2UnKQ0vEPGXp-y8",
  authDomain: "hotelservicesapp.firebaseapp.com",
  databaseURL: "https://hotelservicesapp.firebaseio.com",
  projectId: "hotelservicesapp",
  storageBucket: "hotelservicesapp.appspot.com",
  messagingSenderId: "799278474513",
  appId: "1:799278474513:web:275d8b1fe3b0a89d15d8b0",
  measurementId: "G-19V7SF2393"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
