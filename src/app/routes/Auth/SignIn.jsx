import Button from "../../components/Button";
import Input from "../../components/Input";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/usersActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const handleClick = () => {
      if (email && password) {
      setUser({ user, password });
      dispatch(addUser(user))
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
      <Input type="text" placeholder="email" onChange={e => handleEmail(e)} />
      <Input type="password" placeholder="password" onChange={handlePassword} />
      <Button name="Sign In" onClick={handleClick} />
    </div>
  );
}

const mapStateToProps = state => ({
    user: state.user
  });

export default connect(mapStateToProps, { addUser })(SignIn);
