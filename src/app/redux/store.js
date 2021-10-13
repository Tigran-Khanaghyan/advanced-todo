import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadStore, saveStore } from "../../services/localStorage";
import rootReducer from "./reducers";

const initialState = loadStore();

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => {
  saveStore({
    users: store.getState().users,
    isLogged: store.getState().isLogged,
    currentUser: store.getState().currentUser,
    currentApp: store.getState().currentApp,
    appName: store.getState().appName,
    movedTodo: store.getState().movedTodo,
  });
});

export default store;
