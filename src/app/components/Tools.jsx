import { useState } from "react";
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import { WarningMessage } from "./Alerts";
import ModifiedModal from "./Modal/Modal";
import { useSelector } from "react-redux";
import { findCurrentUser } from "../../helpers/usersInfoHandlers/findCurrentUser";
import { TODO_WARNING_MESSAGE } from "../../constants/messages";

export default function Tools() {
  const [modal, setModal] = useState(null);
  const [modalType, setModalType] = useState();
  const [show, setShow] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [showSectionWarning, setShowSectionWarning] = useState(false);

  const store = useSelector((state) => state);
  const user = findCurrentUser(store);

  const handleNewAppClick = () => {
    setModalType("app");
    modal.show();
  };
  const handleCreateTodoClick = () => {
    if (user.apps.length === 0) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
      return;
    }
    setModalType("todo");
    modal.show();
  };
  const handleCreateSectionClick = () => {
    if (user.apps.length === 0) {
      setShowSectionWarning(true);
      setTimeout(() => {
        setShowSectionWarning(false);
      }, 2000);
      return;
    }
    setModalType("section");
    modal.show();
  };

  return (
    <div className="tools">
      <DropDownMenu show={show} setShow={setShow} />
      <Button
        type="button"
        buttonName="New App +"
        className="btn"
        onClick={handleNewAppClick}
      />
      <div>
        <Button
          type="button"
          buttonName="Create Section +"
          className="btn"
          onClick={handleCreateSectionClick}
        />
        <WarningMessage
          showWarning={showSectionWarning}
          setShowWarning={setShowSectionWarning}
          message={TODO_WARNING_MESSAGE}
        />
      </div>

      <div>
        <Button
          type="button"
          buttonName="Create Todo +"
          className="btn"
          onClick={handleCreateTodoClick}
        />
        <WarningMessage
          showWarning={showWarning}
          setShowWarning={setShowWarning}
          message={TODO_WARNING_MESSAGE}
        />
      </div>
      <ModifiedModal
        modal={modal}
        setModal={setModal}
        type={modalType}
        classes="modal fade"
      />

      <></>
    </div>
  );
}
