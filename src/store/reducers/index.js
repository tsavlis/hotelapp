import { combineReducers } from "redux";

import ServiceReducer from "./services.reducer";

export default combineReducers({
  //auth: authReducer,
  services: ServiceReducer
});
