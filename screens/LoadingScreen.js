import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import firebase from "firebase";
import LottieView from "lottie-react-native";
import * as actions from "../src/store/actions";
import { connect } from "react-redux";
class LoadingScreen extends Component {
  async componentDidMount() {
    await this.props.getServices();
    this.animation.play();
    setTimeout(() => {
      this.checkIfLoggedIn();
    }, 1500);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        // console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          //console.log(user);
          this.props.navigation.navigate("home", {
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
        <Text style={{ color: "#00fff7", fontSize: 36, fontFamily: "regu1" }}>
          Getting Ready...
        </Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    services: state.services
  };
};

export default connect(mapStateToProps, actions)(LoadingScreen);

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
