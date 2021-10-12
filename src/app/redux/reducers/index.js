import { combineReducers } from "redux";
import { loggedReducer } from "./loggedReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    users: userReducer,
    isLogged: loggedReducer 
})

export default rootReducer