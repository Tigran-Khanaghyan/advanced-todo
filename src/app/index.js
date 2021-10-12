import { useSelector } from "react-redux";
import SignIn from "./routes/Auth/SignIn";
import DashBoard from "./routes/DashBoard/DashBoard";

function App() {
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <>
   {isLogged ? <DashBoard/> : <SignIn/>}
   </>
  );
}

export default App;
