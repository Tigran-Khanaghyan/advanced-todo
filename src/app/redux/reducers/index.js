import { combineReducers } from "redux";
import { idReducer } from "./currentUserIdReducer";
import { loggedReducer } from "./loggedReducer";
import { appNameReducer } from "./appNameReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  isLogged: loggedReducer,
  currentUser: idReducer,
  appName: appNameReducer,
});

export default rootReducer;
