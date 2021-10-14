import { useDispatch } from "react-redux";
import { currentUserId } from "../redux/actions/currentUser";
import { loggedToggler } from "../redux/actions/isLogged";
import Button from "./Button";

export default function Header({buttonName}) {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(loggedToggler());
    dispatch(currentUserId(null))
  };

  return (
    <div className="header">
      Advanced Todo App
      <Button
        onClick={logOutHandler}
        buttonName={buttonName}
        className="btn btn-logOut"
      />
    </div>
  );
}
