import { useDispatch } from "react-redux";
import { loggedToggler } from "../redux/actions/isLogged";
import Button from "./Button";

export default function Header() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(loggedToggler());
  };

  return (
    <div className="header">
      Advanced Todo App
      <Button
        onClick={logOutHandler}
        buttonName="Log Out"
        className="btn btn-logOut"
      />
    </div>
  );
}
