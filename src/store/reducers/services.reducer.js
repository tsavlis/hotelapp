import * as actionTypes from "../actions/actionTypes";

const initialState = {
  services: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SERVICES:
      return {
        ...state,
        loading: false,
        services: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
