import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import firebase from "firebase";
import home from "../assets/home1.jpeg";
import FadeInView from "./FadeInView";
class DashboardScreen extends Component {
  render() {
    return (
      <ImageBackground style={styles.image} source={home}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1.7,
              justifyContent: "space-evenly"
            }}
          >
            <Text style={styles.text}>
              Hi {this.props.navigation.getParam("user", "default value")}
            </Text>
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
                  fontSize: 28,
                  textAlign: "center",
                  margin: 10,
                  color: "white",
                  fontFamily: "regu1"
                }}
              >
                Get Started...
              </Text>
            </FadeInView>
          </View>
          <View
            style={{
              flex: 1.3
            }}
          >
            <View style={styles.row}>
              <View style={styles.card}>
                <Text style={styles.item}>Checkin</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.item}>Room Service</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.item}>Spa</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.card}>
                <Text style={styles.item}>Suggestions</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.item}>Transfers</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.item}>Other</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default DashboardScreen;

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
    color: "#82898c"
  },
  card: {
    backgroundColor: "#eeece3",
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
    justifyContent: "space-evenly",
    marginBottom: 10
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
