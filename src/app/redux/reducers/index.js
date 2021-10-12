import { combineReducers } from "redux";
import { idReducer } from "./currentUserIdReducer";
import { loggedReducer } from "./loggedReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    users: userReducer,
    isLogged: loggedReducer, 
    currentUser: idReducer
})

export default rootReducer