import { combineReducers } from "redux";
import { idReducer } from "./currentUserIdReducer";
import { loggedReducer } from "./loggedReducer";
import { appNameReducer } from "./appNameReducer";
import userReducer from "./userReducer";
import { currentAppReducer } from "./currentAppReducer";
import { moveTodoReducer } from "./movedTodoReducer";
import { sectionNameReducer } from "./sectionNameReducer";
import { coordinatesReducer } from "./coordinatesReducer";

const rootReducer = combineReducers({
  users: userReducer,
  isLogged: loggedReducer,
  currentUser: idReducer,
  currentApp: currentAppReducer,
  appName: appNameReducer,
  movedTodo: moveTodoReducer,
  sectionName: sectionNameReducer,
  coordinates: coordinatesReducer,
});

export default rootReducer;
