import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import firebase from "firebase";
import axios from "axios";
import { FIREBASEURL } from "../src/components/Utils";
import LottieView from "lottie-react-native";

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

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
          console.log(user);
          this.apicall(user.uid);
          this.props.navigation.navigate("DashboardScreen", {
            user: user.email
          });
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: "black"
          }}
          source={require("../assets/197-glow-loading.json")}
        />
        <Text style={{ color: "white", fontSize: 36 }}>Getting Ready...</Text>
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
});
