import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
// import { getFirestore, reduxFirestore } from "redux-firestore";
// import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
// import fbConfig from "../config/fbConfig";

const enhancer = compose(
  applyMiddleware(thunk)
  // other store enhancers if any
);
// const enhancer = compose(
//   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//   reduxFirestore(fbConfig),
//   reactReduxFirebase(fbConfig, {
//     userProfile: "users",
//     enableRedirectHandling: false
//   })
// );
const store = createStore(rootReducer, enhancer);

export default store;
