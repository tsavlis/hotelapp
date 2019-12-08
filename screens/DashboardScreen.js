import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import * as actions from "../src/store/actions";
import { connect } from "react-redux";
import home from "../assets/home.jpg";
import TexT from "../src/components/Text";
import FadeInView from "./FadeInView";
import Card from "../src/components/Card";
import firebase from "firebase/app";
import "firebase/firestore";

import { firebaseConfig } from "../src/config/config";
firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();

class DashboardScreen extends Component {
  componentDidMount() {
    dbh
      .collection("users")
      .doc(this.props.auth.uid)
      .get()
      .then(doc => {
        this.props.getInfoForUser(doc._document.proto);
        console.log(doc._document.proto.fields);
      });
  }
  render() {
    const { auth } = this.props;
    return (
      <ImageBackground style={styles.image} source={home}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1.7,
              justifyContent: "space-evenly"
            }}
          >
            {auth ? (
              <Text style={styles.text}>Hi {auth.email}</Text>
            ) : (
              <Text style={styles.text}>Hi Guest</Text>
            )}

            <Card center middle shadow style={{ flex: 0.1 }}>
              <TexT medium height={40}>
                10 August - 16 August
              </TexT>
              <TexT gray caption>
                Your reservation
              </TexT>
            </Card>

            <FadeInView
              duration={2000}
              style={{
                width: 250,
                height: 50,
                backgroundColor: "white"
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  textAlign: "center",
                  margin: 10,
                  color: "white",
                  fontFamily: "regu1"
                }}
              >
                Explore..
              </Text>
            </FadeInView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getInfoForUser: user => dispatch(actions.getInfoForUser(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

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
    fontSize: 26,
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
