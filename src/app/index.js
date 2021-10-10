import { Switch, Route } from "react-router-dom";
import { routes } from "../constants/routes";

function App() {
  return (
    <Switch>
      <Route
        exact
        path={routes.signIn().path}
        component={routes.signIn().component}
      />
      <Route path={routes.home().path} component={routes.home().component} />
    </Switch>
  );
}

export default App;
