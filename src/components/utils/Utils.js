import { Dimensions, Platform, AsyncStorage } from "react-native";

export const FIREBASEURL = `https://hotel-app1.firebaseio.com/`;
export const APIKEY = `AIzaSyDOpfqnT-cSV3HS9u5W5mLH-P-y66F0yac`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

export const getPlatform = () => {
  if (Platform.OS === "ios") {
    return "ios";
  } else {
    return "android";
  }
};
