import { Platform } from "react-native";

export const FIREBASEURL = `https://hotelservicesapp.firebaseio.com`;
export const APIKEY = `AIzaSyDGQhciFsPE3QhGFPMH2UnKQ0vEPGXp-y8`;
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
