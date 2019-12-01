import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import * as actions from "../src/store/actions";
import { connect } from "react-redux";
import Block from "../src/components/Block";
class Transfers extends Component {
  render() {
    return (
      <Block block center middle>
        <Text> Transfers </Text>
      </Block>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    services: state.services.services
  };
};

export default connect(mapStateToProps, actions)(Transfers);

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40
    // marginTop: 150
  },
  item: {
    fontFamily: "regu1",
    color: "white",
    marginTop: 5
  },
  card: {
    backgroundColor: "#2d669d",
    height: 100,
    width: "33%",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
    // marginBottom: 10
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  text: {
    fontSize: 30,
    fontFamily: "regu1",
    color: "white"
    // marginBottom: 150
  },
  subttext: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white"
  }
};
