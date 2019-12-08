import React, { Component } from "react";
import { Text, View } from "react-native";
import Block from "../src/components/Block";
import firebase from "firebase";
import "firebase/firestore";
import { Button } from "react-native-elements";

const dbh = firebase.firestore();

export default class Profile extends Component {
  componentDidMount() {
    dbh
      .collection("users")
      .doc("8wI1FSb9B8Q29Qwmp1r2wRPNkVY2")
      .get()
      .then(doc => {
        console.log(doc);
      });
  }

  logout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <Block block center middle>
        <Text> Profile </Text>
        <Button title="logout" onPress={this.logout} />
      </Block>
    );
  }
}
