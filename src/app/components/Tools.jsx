import { useState } from "react";
import Button from "./Button";
import ModifiedModal from "./Modal/Modal";

export default function Tools() {
  const [modal, setModal] = useState(null);
  const [modalType, setModalType] = useState();

  const handleNewAppClick = () => {
    setModalType("app");
    modal.show();
  };
  const handleCreateTodoClick = () => {
    setModalType("todo");
    modal.show();
  };

  return (
    <div className="tools">
      <Button
        type="button"
        name="New App +"
        className="btn"
        onClick={handleNewAppClick}
      />
      <Button
        type="button"
        name="Create Todo"
        className="btn"
        onClick={handleCreateTodoClick}
      />
      <ModifiedModal modal={modal} setModal={setModal} type={modalType} />
      <></>
    </div>
  );
}
