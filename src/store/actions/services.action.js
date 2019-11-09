import * as actionTypes from "./actionTypes";
import axios from "axios";
import { FIREBASEURL } from "../../components/Utils";

export const getServiceSuccess = Services => {
  return {
    type: actionTypes.GET_SERVICES,
    payload: Services
  };
};

export const getServices = () => {
  return dispatch => {
    axios
      .get(
        `${FIREBASEURL}/Services.json`,
        {},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response.data);
        dispatch(getServiceSuccess(response.data));
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };
};
