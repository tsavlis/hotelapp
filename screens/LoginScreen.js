import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import firebase from "firebase";
class LoginScreen extends Component {
  signIn = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword("tns@gmail.com", "111111");

      console.log(result);
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In " onPress={this.signIn} />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
