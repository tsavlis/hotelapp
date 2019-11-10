import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import * as actions from "../src/store/actions";
import { connect } from "react-redux";
import home from "../assets/hom2.jpg";
import FadeInView from "./FadeInView";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class DashboardScreen extends Component {
  render() {
    return (
      <ImageBackground style={styles.image} source={home}>
        <View style={styles.container}>
          <View
            style={{
              flex: 2,
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
              flex: 1
            }}
          >
            <View style={styles.row}>
              <View style={styles.card}>
                <Ionicons name="md-clock" size={35} color="white" />
                <Text style={styles.item}>
                  {this.props.services[0] ? this.props.services[0].name : null}
                </Text>
              </View>
              <View style={styles.card}>
                <FontAwesome name="home" size={30} color="white" />

                <Text style={styles.item}>
                  {this.props.services[1] ? this.props.services[1].name : null}
                </Text>
              </View>
              <View style={styles.card}>
                <FontAwesome name="bell" size={30} color="white" />

                <Text style={styles.item}>
                  {this.props.services[2] ? this.props.services[2].name : null}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.card}>
                <FontAwesome name="taxi" size={30} color="white" />

                <Text style={styles.item}>
                  {this.props.services[3] ? this.props.services[3].name : null}
                </Text>
              </View>
              <View style={styles.card}>
                <Ionicons name="md-chatboxes" size={30} color="white" />
                <Text style={styles.item}>
                  {this.props.services[4] ? this.props.services[4].name : null}
                </Text>
              </View>
              <View style={styles.card}>
                <FontAwesome name="map" size={30} color="white" />

                <Text style={styles.item}>
                  {this.props.services[5] ? this.props.services[5].name : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    services: state.services.services
  };
};

export default connect(
  mapStateToProps,
  actions
)(DashboardScreen);

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
    backgroundColor: "gray",
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
