import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as firebase from "firebase";
import { firebaseConfig } from "./src/config/config";
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  componentDidMount() {
    // this.apicall();
  }
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
