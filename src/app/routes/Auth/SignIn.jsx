import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { nanoid } from "nanoid";
import { addUser } from "../../redux/actions/usersActions";
import { loggedToggler } from "../../redux/actions/isLogged";
import { isUserExsist } from "../../../helpers/usersInfoHandlers/isUserExsist";
import { useHistory } from "react-router";
import { currentUserId } from "../../redux/actions/currentUser";
import { findUserId } from "../../../helpers/usersInfoHandlers/findUserId";
import { ErrorMessage, WarningMessage } from "../../components/Alerts";
import {
  EMAIL_IS_NOT_VALID,
  NON_EXSITING_ACCOUNT,
  PASSWORD_IS_NOT_VALID,
  SIGNIN_WARNING_MESSAGE,
  WRONG_PASSWORD,
} from "../../../constants/messages";
import validateEmail from "../../../validation/emailValidation";
import validatePassword from "../../../validation/passwordValidation";
import { findUserByEmail } from "../../../helpers/usersInfoHandlers/findUserByEmail";
import Loading from "../../components/Loading";
import Recovery from "../../components/Recovery/Recovery";
import { generateRandomCode } from "../../../services/generateRandomCode";

function SignIn() {
  let [email, setEmail] = useState("");
  const [recovery, setRecovery] = useState(false);
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [showAccountWarning, setShowAccountWarning] = useState(false);
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const dispatch = useDispatch();

  const [showWarning, setShowWarning] = useState(false);

  if (recovery) {
    setPassword();
  }

  const handleClick = () => {
    email = email.toLowerCase();
    if (email && password && !showEmailError && !showPasswordError) {
      const user = findUserByEmail(users, email, password);
      if (user) {
        setIsWrongPassword(true);
        setShowPasswordError(true);
        dispatch(currentUserId(user.email));
        return;
      }
      dispatch(loggedToggler());
      const isExsist = isUserExsist(users, email, password);
      const id = findUserId(users, email, password);
      if (!isExsist) {
        const userId = nanoid();
        dispatch(addUser({ userId, email, password, apps: [] }));
        dispatch(currentUserId(userId));
      }
      if (id) {
        setIsWrongPassword(false);
        dispatch(currentUserId(id));
      }
      history.push("/");
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
  };

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleEmail = (event) => {
    let email = event.target.value;
    let isValid = validateEmail(email);
    if (isValid) {
      setShowEmailError(false);
      setEmail(email);
    } else {
      setShowEmailError(true);
    }
  };
  const handlePassword = (event) => {
    let password = event.target.value;
    let isValid = validatePassword(password);
    if (isValid) {
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
    }
    setPassword(password);
  };
  const capcha = generateRandomCode();
  const passwordMessage = isWrongPassword
    ? WRONG_PASSWORD
    : PASSWORD_IS_NOT_VALID;

  const [showLoading, setShowLoading] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const handleRecovery = () => {
    if (!email) {
      setShowEmailError(true);
      return;
    }
    setShowLoading(true);
    dispatch(currentUserId(email));
    setTimeout(() => {
      setShowLoading(false);
      setShowRecovery(true);
    }, 1000);
  };

  return (
    <div>
      <Header buttonName={null} />
      <div className="signin-container">
        <Input
          className="input"
          type="text"
          placeholder="email"
          onChange={handleEmail}
        />
        <ErrorMessage message={EMAIL_IS_NOT_VALID} showError={showEmailError} />
        <Input
          className="input"
          value={password}
          type="password"
          placeholder="password"
          onChange={handlePassword}
        />
        <ErrorMessage message={passwordMessage} showError={showPasswordError} />
        <Button buttonName="Sign In" className="btn" onClick={handleClick} />
        <WarningMessage
          message={SIGNIN_WARNING_MESSAGE}
          showWarning={showWarning}
          setShowWarning={setShowWarning}
        />
        <Button
          buttonName="Forgot password"
          className="btn"
          onClick={handleRecovery}
        />
        <WarningMessage
          message={NON_EXSITING_ACCOUNT}
          showWarning={showAccountWarning}
          setShowWarning={setShowAccountWarning}
        />
        <Loading showLoading={showLoading} />
        <Recovery
          email={email}
          setPassword={setPassword}
          showRecovery={showRecovery}
          setShowRecovery={setShowRecovery}
          capcha={capcha}
          setRecovery={setRecovery}
          setShowLoading={setShowLoading}
          setShowAccountWarning={setShowAccountWarning}
        />
      </div>
    </div>
  );
}

export default SignIn;
