import { Switch, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import DashBoard from "./routes/DashBoard/DashBoard";
import Example from './Exemple'

function App() {
  return (
    <Switch>
      <PrivateRoute exact path={routes.home().path}>
        <DashBoard />
      </PrivateRoute>
      <Route
        exact
        path={routes.signIn().path}
        component={routes.signIn().component}
      />
      <Route path='/onpath' component={Example}/>
    </Switch>
  );
}

export default App;
