import Button from "../../components/Button";
import Input from "../../components/Input";
import { addUser } from "../../redux/actions/usersActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedToggler } from "../../redux/actions/isLogged";
import { isUserExsist } from "../../../helpers/usersInfoHandlers/isUserExsist";
import { useHistory } from "react-router";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const users = useSelector((state) => state.users);
  const history = useHistory()

  const dispatch = useDispatch();

  const handleClick = () => {
    if (email && password) {
      const isExsist = isUserExsist(users, email, password);
      if (!isExsist) {
        dispatch(addUser({ email, password, apps:[] }));
      }
      dispatch(loggedToggler());
      history.push('/')
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
      <Button name="Sign In" onClick={handleClick} />
    </div>
  );
}

export default SignIn;
