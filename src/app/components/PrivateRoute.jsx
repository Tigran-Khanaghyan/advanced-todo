import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

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

export default PrivateRoute;
