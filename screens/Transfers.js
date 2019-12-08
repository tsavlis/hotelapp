import React, { Component } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { Button, Input } from "react-native-elements";

import * as actions from "../src/store/actions";
import { connect } from "react-redux";
import Block from "../src/components/Block";
import firebase from "firebase/app";
import "firebase/firestore";
const dbh = firebase.firestore();

class Transfers extends Component {
  state = {
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    content: "",
    loading: false
  };
  addToFirestore = () => {
    const { userInfo, auth } = this.props;
    this.setState({ loading: true });
    dbh
      .collection("projects")
      .add({
        title: this.state.title,
        content: this.state.content,
        authorFirstName: userInfo.firstName.stringValue,
        authorLastName: userInfo.lastName.stringValue,
        authorId: auth.uid,
        createdAt: new Date()
      })
      .then(resp => {
        console.log("done", resp);
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };
  handleChange = name => event => {
    this.setState({ [name]: event });
  };
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="bluegray" />
        </View>
      );
    }
    return (
      <Block block center middle>
        <View style={{ width: "80%", padding: 10, margin: 10 }}>
          <Input
            placeholder="Title"
            label="Title"
            value={this.state.title}
            id={"title"}
            onChangeText={this.handleChange("title")}
          />
        </View>

        <View style={{ width: "80%", padding: 10, margin: 10 }}>
          <Input
            placeholder="Content"
            label="Content"
            value={this.state.content}
            id={"content"}
            style={{ width: "80%", padding: 10, margin: 10 }}
            onChangeText={this.handleChange("content")}
          />
        </View>

        <Button onPress={this.addToFirestore} title="Create new Task" />
      </Block>
    );
  }
}
const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.auth.auth,
    userInfo: state.auth.userInfo.fields
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
