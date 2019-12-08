import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import ServiceReducer from "./services.reducer";

export default combineReducers({
  auth: authReducer,
  services: ServiceReducer
});
