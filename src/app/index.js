import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../constants/routes";
import DashBoard from "./routes/DashBoard/DashBoard";

function App() {
  
  function PrivateRoute({ children, ...rest }) {
    const isLogged = useSelector((state) => state.isLogged);
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                exact: true,
                pathname: "/signin",
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }
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
    </Switch>
  );
}

export default App;
