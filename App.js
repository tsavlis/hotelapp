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

import Channels from "./components/Channels";
import LoadAssets from "./components/LoadAssets";
const channels = [
  {
    id: "killing-eve",
    title: "Killing Eve",
    subtitle: "Sorry baby, xoxo",
    type: "Drama",
    cover: require("./assets/covers/killing-eve.jpg")
  },
  {
    id: "atlanta",
    title: "Atlanta",
    subtitle: "Can Earn work his way to success?",
    type: "Comedy",
    cover: require("./assets/covers/atlanta.jpg")
  },
  {
    id: "years-and-years",
    title: "Years and years",
    subtitle: "Can a family survive the future?",
    type: "Drama",
    cover: require("./assets/covers/years-and-years.jpg")
  },
  {
    id: "gentleman-jack",
    title: "Gentleman Jack",
    subtitle: "The true story of a remarkable woman in search of a wife",
    type: "Period Drama",
    cover: require("./assets/covers/gentleman-jack.jpg")
  },
  {
    id: "london-kills",
    title: "London Kills",
    subtitle: "A Met Police murder squad face intense cases",
    type: "Crime Drama",
    cover: require("./assets/covers/london-kills.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  },
  {
    id: "minding-the-gap",
    title: "Minding the Gap: An American Stakeboarding Story",
    subtitle: "A coming-of-age saga",
    type: "Film",
    cover: require("./assets/covers/minding-the-gap.jpg")
  }
];

firebase.initializeApp(firebaseConfig);
class Load extends React.Component {
  render() {
    return <Channels {...{ channels }} />;
  }
}
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
    return (
      <LoadAssets assets={channels.map(channel => channel.cover)}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </LoadAssets>
    );
  }
}

const BotMaterialNavigator = createMaterialBottomTabNavigator(
  {
    home: { screen: DashboardScreen },
    services: { screen: Load },
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
