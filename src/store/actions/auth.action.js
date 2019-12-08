import * as actionTypes from "./actionTypes";
// import axios from "axios";
// import { headers } from "../../config/config";
// import { getEnviroment } from "../../config/config";
// import AsyncStorage from "react-native";

// // let user = JSON.parse(users);
// export const authLoginStart = () => {
//   return {
//     type: actionTypes.AUTH_LOGIN_START
//   };
// };

// export const authLoginSuccess = auth => {
//   return {
//     type: actionTypes.AUTH_LOGIN_SUCCESS,
//     auth
//   };
// };

// export const authLoginFail = error => {
//   return {
//     type: actionTypes.AUTH_LOGIN_FAIL,
//     error
//   };
// };

// export const authLogin = (username, password) => {
//   return dispatch => {
//     dispatch(authLoginStart());
//     axios
//       .post(
//         getEnviroment("dev").authUrl + `/token`,

//         {
//           email: username,
//           password: password
//         },
//         {
//           headers: { "Content-Type": "application/json" }
//         }
//       )
//       .then(response => {
//         dispatch(authLoginSuccess(response.data));
//       })
//       .catch(error => {
//         dispatch(authLoginFail(error.response.data));
//       });
//   };
// };

// export const authRefreshToken = (token, refresh) => {
//   return dispatch => {
//     axios
//       .put(
//         getEnviroment("dev").authUrl + `/refreshToken`,

//         {
//           bearerToken: token,
//           refreshToken: refresh
//         }
//       )
//       .then(response => {
//         dispatch(authLoginSuccess(response.data));
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(authLoginFail(error.response));
//       });
//   };
// };
export const getInfoForUser = userinfo => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.GET_USER_INFO,
      payload: userinfo
    });
  };
};
export const handleAuthUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.AUTH_HANDLE_USER,
      payload: user
    });
  };
};
