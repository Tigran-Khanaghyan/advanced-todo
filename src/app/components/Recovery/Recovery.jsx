import { useState } from "react";
import { useSelector } from "react-redux";
import { WRONG_CAPCHA } from "../../../constants/messages";
import { recoverUserPassword } from "../../../helpers/usersInfoHandlers/recoverUserPassword";
import { ErrorMessage } from "../Alerts";
import Capcha from "./Capcha";
import Cell from "./Cell";

export default function Recovery({
  capcha,
  showRecovery,
  setPassword,
  setShowRecovery,
  setShowLoading,
  setShowAccountWarning,
}) {
  const typedCapcha = [];
  const randomCode = capcha.join("");
  const store = useSelector((state) => state);
  const email = store.currentUser;
  const users = store.users;

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [showError, setShowError] = useState(false);

  const handleOneValue = (event) => {
    setOne(event.target.value);
  };
  const handleTwoValue = (event) => {
    setTwo(event.target.value);
  };
  const handleThreeValue = (event) => {
    setThree(event.target.value);
  };
  const handleFourValue = (event) => {
    setFour(event.target.value);
  };
  const handleFiveValue = (event) => {
    setFive(event.target.value);
  };
  const handleSixValue = (event) => {
    const six = event.target.value;
    typedCapcha.push(one, two, three, four, five, six);

    if (typedCapcha.join("").toUpperCase() === capcha.join("")) {
      const recoverypassword = recoverUserPassword(users, email);
      if (recoverypassword) {
        setShowRecovery(false);
        setShowError(false);
        setShowLoading(true);
        setTimeout(() => {
          setShowLoading(false);
          setPassword(recoverypassword);
        }, 1000);
      } else {
        setShowRecovery(false);
        setShowAccountWarning(true);
        setTimeout(() => {
          setShowAccountWarning(false);
        }, 1500);
      }
    } else {
      setShowError(true);
    }
  };
  const classes = showRecovery ? "recovery" : "recovery-hide";
  return (
    <>
      <div className={classes}>
        <Capcha randomCode={randomCode} />
        <div className="recovery-cell-container">
          <Cell onChange={handleOneValue} />
          <Cell onChange={handleTwoValue} />
          <Cell onChange={handleThreeValue} />
          <Cell onChange={handleFourValue} />
          <Cell onChange={handleFiveValue} />
          <Cell onChange={handleSixValue} />
        </div>
      </div>
      <ErrorMessage message={WRONG_CAPCHA} showError={showError} />
    </>
  );
}
