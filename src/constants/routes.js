import SignIn from "../app/routes/Auth/SignIn";
import DashBoard from "../app/routes/DashBoard/DashBoard";

export const routes = {
  home: () => ({
    path: "/",
    component: DashBoard,
  }),
  signIn: () => ({
    path: "/signin",
    component: SignIn,
  }),
};
