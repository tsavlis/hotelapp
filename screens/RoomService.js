import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import * as actions from "../src/store/actions";
import { connect } from "react-redux";
import Block from "../src/components/Block";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

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
class RoomService extends Component {
  render() {
    return (
      <Block center middle margin={50}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Checkin")}
          >
            <Ionicons name="md-clock" size={35} color="white" />
            <Text style={styles.item}>
              {this.props.services[0] ? this.props.services[0].name : null}
            </Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps, actions)(RoomService);
