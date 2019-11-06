import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";
import axios from "axios";
import { FIREBASEURL } from "../src/components/Utils";
class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  apicall = uid => {
    axios
      .get(
        `${FIREBASEURL}/Services.json`,
        {},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
  };
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        // console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          // console.log(user.uid);
          this.apicall(user.uid);
          this.props.navigation.navigate("DashboardScreen");
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
