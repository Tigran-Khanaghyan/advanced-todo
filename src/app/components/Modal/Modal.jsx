import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import ModalBody from "./ModalBody";
import Button from "../Button";
import { useSelector } from "react-redux";
import { addApp } from "../../redux/actions/appActions";
import { useDispatch } from "react-redux";

function ModifiedModal({ modal, setModal, type }) {
  const exampleModal = useRef();
  const store = useSelector((store) => store);
  console.log(store);
  const dispatch = useDispatch();
  const currentUserId = store.currentUser;
  console.log(currentUserId);

  const [appName, setAppName] = useState();
  const app = { appName: appName, sections: [] };

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
    // eslint-disable-next-line
  }, []);

  const handleSaveChanges = () => {
    dispatch(addApp(app, currentUserId));
    setAppName("");
    modal.hide();
  };

  return (
    <>
      <div
        className="modal fade"
        ref={exampleModal}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <ModalBody
                appName={appName}
                setAppName={setAppName}
                type={type}
              />
            </div>
            <div className="modal-footer">
              <Button
                name="Close"
                type="button"
                className="btn btn-secondary"
                onClick={() => modal.hide()}
              />
              <Button
                onClick={handleSaveChanges}
                name="Save changes"
                type="button"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifiedModal;
