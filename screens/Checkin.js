import React, { Component } from "react";
import { Text, View } from "react-native";
import Block from "../src/components/Block";

export default class Checkin extends Component {
  static navigationOptions = {
    title: "Checkin"
  };
  render() {
    return (
      <Block block center middle>
        <Text> Checkin </Text>
      </Block>
    );
  }
}
