import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import firebase from "firebase";
import home from "../assets/home1.jpeg";
class DashboardScreen extends Component {
  render() {
    return (
      <ImageBackground style={styles.image} source={home}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome Johny</Text>

          {/* <Button title="" onPress={() => firebase.auth().signOut()} /> */}
        </View>
      </ImageBackground>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  subttext: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white"
  }
});
