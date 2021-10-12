import Button from "../../components/Button";
import Input from "../../components/Input";
import { nanoid } from "nanoid";
import { addUser } from "../../redux/actions/usersActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedToggler } from "../../redux/actions/isLogged";
import { isUserExsist } from "../../../helpers/usersInfoHandlers/isUserExsist";
import { useHistory } from "react-router";
import { currentUserId } from "../../redux/actions/currentUser";
import { findUserId } from "../../../helpers/usersInfoHandlers/findUserId";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    if (email && password) {
      dispatch(loggedToggler());
      const isExsist = isUserExsist(users, email, password);
      const id = findUserId(users, email, password);
      console.log(id)
      if (!isExsist) {
        const userId = nanoid();
        dispatch(addUser({ userId, email, password, apps: [] }));
        dispatch(currentUserId(userId));
      }
      if (id) {
        dispatch(currentUserId(id));
      }
      history.push("/");
    }
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signin-container">
      <Input type="text" placeholder="email" onChange={handleEmail} />
      <Input type="password" placeholder="password" onChange={handlePassword} />
      <Button name="Sign In" classname="btn" onClick={handleClick} />
    </div>
  );
}

export default SignIn;
