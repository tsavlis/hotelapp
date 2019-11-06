import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import "@firebase/firestore";
import axios from "axios";
import { FIREBASEURL } from "./src/components/utils/Utils.js";
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

export default class App extends React.Component {
  state = { user: "1" };
  apicall = () => {
    axios
      .get(
        `${FIREBASEURL}/Services.json`,

        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    firebase
      .auth()
      .signInWithEmailAndPassword("tns@gmail.com", "111111")
      .then(response => {
        console.log("2");
        this.setState({ user: response.user.uid });
        this.apicall();
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text> {this.state.user}</Text>
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
