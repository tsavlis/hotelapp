import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOpfqnT-cSV3HS9u5W5mLH-P-y66F0yac",
  authDomain: "hotel-app1.firebaseapp.com",
  databaseURL: "https://hotel-app1.firebaseio.com",
  projectId: "hotel-app1",
  storageBucket: "hotel-app1.appspot.com",
  messagingSenderId: "785988958114",
  appId: "1:785988958114:web:bf2e8a87baf17de12664fb",
  measurementId: "G-F9WP0G20W7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var docRef = db.collection("Partners").doc("Hotel_Test");
const output = {};

export default class App extends React.Component {
  componentDidMount() {
    console.log(
      db
        .collection("Roles")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
        })
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
