import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import ModalBody from "./ModalBody";
import Button from "../Button";

function ModifiedModal({ modal, setModal, type }) {
  const exampleModal = useRef();
  const [appName, setAppName] = useState();
  

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
    // eslint-disable-next-line
  }, []);

  const handleSaveChanges = () => {

  }

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
