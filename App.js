import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as firebase from "firebase";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Asset from "expo-asset";
import Checkin from "./screens/Checkin";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { firebaseConfig } from "./src/config/config";

firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  state = {
    fontloaded: false,
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    // const images = [require("./assets/hom3.jpg")];

    await Font.loadAsync({
      regu1: require("./assets/Fonts/Courgette-Regular.ttf")
    });
    // const cacheImages = images.map(image => {
    //   return Asset.fromModule(image).downloadAsync();
    // });

    // return Promise.all(cacheImages);
  };
  render() {
    if (!this.state.fontloaded && !this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() =>
            this.setState({ isLoadingComplete: true, fontloaded: true })
          }
        />
      );
    } else {
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
    }
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen,
    LoginScreen,
    DashboardScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const Stack = createStackNavigator({
  main: AppSwitchNavigator,
  Checkin
});

const AppNavigator = createAppContainer(Stack);
