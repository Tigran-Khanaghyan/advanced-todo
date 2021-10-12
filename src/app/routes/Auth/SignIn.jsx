import Button from "../../components/Button";
import Input from "../../components/Input";
import { addUser } from "../../redux/actions/usersActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedToggler } from "../../redux/actions/isLogged";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleClick = () => {
      if (email && password) {;
      dispatch(addUser({email, password}))
      dispatch(loggedToggler())
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

export default SignIn 