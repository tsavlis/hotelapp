import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator,
  TextInput
} from "react-native";
// import * as actions from "../../store/actions";
// import { connect } from "react-redux";
import Animated, { Easing } from "react-native-reanimated";
import { Button } from "react-native-elements";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import firebase from "firebase";

const { width, height } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position
  ]);
}
class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      user: ""
    };
    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });
    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });
    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
  }

  handleChange = name => event => {
    let x = event;
    this.setState({ [name]: x, errors: false, loading: false });
  };

  renderErrors = () => {
    if (this.state.errors) {
      return (
        <Text style={{ color: "red", alignSelf: "center" }}>
          Opps..Check your Info
        </Text>
      );
    }
  };
  signIn = async () => {
    if (!this.state.email || this.state.password.length < 6) {
      this.setState({ errors: true });
      return false;
    }
    this.setState({ loading: true });
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);

      console.log(result);
      //   this.setState({ loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ errors: true, loading: false });
      return { error: true };
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
          <Image
            source={require("../assets/home1.jpeg")}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
          />
        </Animated.View>

        <View style={{ height: height / 3, justifyContent: "center" }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              height: height / 3,
              ...StyleSheet.absoluteFill,
              opacity: this.textInputOpacity,
              zIndex: this.textInputZindex,
              transform: [{ translateY: this.textInputY }],
              top: null,
              justifyContent: "center"
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeicon}>
                <Animated.Text
                  style={{
                    fontSize: 15,
                    transform: [{ rotate: concat(this.rotateCross, "deg") }]
                  }}
                >
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput
              placeholder="Email"
              style={styles.textinp}
              placeholderTextColor="black"
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={this.handleChange("email")}
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={styles.textinp}
              placeholderTextColor="black"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={this.handleChange("password")}
            ></TextInput>
            <Animated.View>
              {this.state.loading ? (
                <ActivityIndicator size="large" color="d2e8ff" />
              ) : (
                <React.Fragment>
                  <Button
                    title="Submit"
                    onPress={this.signIn}
                    disabled={this.state.loading}
                    titleStyle={{ color: "black" }}
                    buttonStyle={[
                      styles.button,
                      { borderWidth: 1, borderColor: "black" }
                    ]}
                  />
                  {this.renderErrors()}
                </React.Fragment>
              )}
            </Animated.View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    height: 65,
    marginHorizontal: 50,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    elevation: 1
  },
  textinp: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginHorizontal: 40,
    paddingLeft: 25,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "white"
  },
  closeicon: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -30,
    left: width / 2 - 20,
    elevation: 1
  }
});
