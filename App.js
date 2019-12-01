import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as firebase from "firebase";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Asset from "expo-asset";
import Checkin from "./screens/Checkin";
import Transfers from "./screens/Transfers";

import Profile from "./screens/Profile";
import RoomService from "./screens/RoomService";

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

const BotMaterialNavigator = createMaterialBottomTabNavigator(
  {
    home: { screen: DashboardScreen },
    services: { screen: RoomService },
    transfers: { screen: Transfers },
    account: { screen: Profile }
  },
  {
    // activeColor: "green",
    inactiveColor: "white",
    // shifting: false,
    barStyle: { backgroundColor: "#2C2F32" },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: (focused, horizontal, tintColor) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "home") {
          iconName = `home`;
        } else if (routeName === "account") {
          iconName = `user`;
        } else if (routeName === "services") {
          iconName = `glass`;
        } else if (routeName === "transfers") {
          iconName = `taxi`;
        }

        return <FontAwesome name={iconName} size={20} color={"#fff"} />;
      }
    })
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen,
    LoginScreen,
    BotMaterialNavigator
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
