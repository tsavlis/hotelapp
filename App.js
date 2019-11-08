import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as firebase from "firebase";
import * as Font from "expo-font";
import { AppLoading, SplashScreen } from "expo";

import { firebaseConfig } from "./src/config/config";
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    fontloaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      regu1: require("./assets/Fonts/Courgette-Regular.ttf")
    });
    this.setState({ fontloaded: true });
  }
  render() {
    if (!this.state.fontloaded) {
      return <AppLoading />;
    } else {
      return <AppNavigator />;
    }
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
