import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import "firebase/firestore";
import firebase from "firebase";
import { YellowBox } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import * as Font from "expo-font";
import Checkin from "./screens/Checkin";
import Transfers from "./screens/Transfers";

import Profile from "./screens/Profile";
import RoomService from "./screens/RoomService";

import { Provider } from "react-redux";
import store from "./src/store/store";
import Channels from "./components/Channels";
import LoadAssets from "./components/LoadAssets";
const channels = [
  {
    id: "Room Service",
    title: "Need a glass of campaigne?",
    subtitle: "In your room with the press of a button!",
    type: "Room Service",
    cover: require("./assets/covers/roomservice.jpg")
  },
  {
    id: "Yaughts",
    title: "Spectacular boats",
    subtitle: "Looking for some sea adventures?",
    type: "Boats",
    cover: require("./assets/covers/boat.jpg")
  },
  {
    id: "luxury cars",
    title: "Rent a car with private chauffer",
    subtitle: "In need of some transportation?",
    type: "Cars",
    cover: require("./assets/covers/driver.jpg")
  },
  {
    id: "live concert",
    title: "Upcoming events",
    subtitle: "Lets get the party started!",
    type: "Party",
    cover: require("./assets/covers/partyevent.jpg")
  },
  {
    id: "Shopping assistants",
    title: "Shopping assistants",
    subtitle: "Need a second opinion and someone to carry your bags?",
    type: "Shopping",
    cover: require("./assets/covers/shopassistant.jpg")
  },
  {
    id: "Sunset",
    title: "Amazing views",
    subtitle: "best views in town hand-picked for you!",
    type: "Sunset places",
    cover: require("./assets/covers/sunset.jpg")
  },
  {
    id: "Relaxation",
    title: "Relax therapy by proffesionals in your place",
    subtitle: "Ready for some stress-free experiences?",
    type: "Relaxation",
    cover: require("./assets/covers/therapy.jpg")
  },
  {
    id: "Activities",
    title: "Yoga groups",
    subtitle: "Want to do some activities?",
    type: "Activities",
    cover: require("./assets/covers/yoga.jpg")
  },
  {
    id: "WaterSports",
    title: "Surfing,Wind Surfing..",
    subtitle: "Select your gear and go with the current!",
    type: "WaterSports",
    cover: require("./assets/covers/watersport.jpg")
  },
  {
    id: "Children",
    title: "Children activities, Babysit",
    subtitle: "Best experiences for children",
    type: "Children",
    cover: require("./assets/covers/children.jpg")
  },
  {
    id: "Fitness",
    title: "Personal Trainers",
    subtitle: "Need to stay in shape?",
    type: "Fitness",
    cover: require("./assets/covers/personal.jpg")
  },
  {
    id: "Wine",
    title: "Wine Tasting",
    subtitle: "Try out our local and amazing flavors!!",
    type: "Wine",
    cover: require("./assets/covers/winetasting.jpg")
  },
  {
    id: "Restaurants",
    title: "Make your reservation now",
    subtitle: "Pick your cuisine and book your table!",
    type: "Restaurants",
    cover: require("./assets/covers/restaurants.jpg")
  }
];
console.disableYellowBox = true;

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
  componentDidMount() {}
  addToFirestore = () => {
    // dbh
    //   .collection("projects")
    //   .add({
    //     title: "Clean room",
    //     content: "room is very dirty",
    //     authorFirstName: "thanos",
    //     authorLastName: "tsavlis",
    //     authorId: "12344",
    //     createdAt: new Date()
    //   })
    //   .then(resp => {
    //     console.log("done", resp);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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

// const Stack = createStackNavigator({
//   main: AppSwitchNavigator,
//   Checkin
// });

const AppNavigator = createAppContainer(AppSwitchNavigator);
