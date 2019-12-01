import React, { Component } from "react";
import { Text, View } from "react-native";
import Block from "../src/components/Block";
export default class Profile extends Component {
  render() {
    return (
      <Block block center middle>
        <Text> Profile </Text>
      </Block>
    );
  }
}
