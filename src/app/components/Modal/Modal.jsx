import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";
import ModalBody from "./ModalBody";

function ModifiedModal({ modal, setModal, type}) {
  const exampleModal = useRef();
  
  useEffect(() => {
    setModal(new Modal(exampleModal.current));
    // eslint-disable-next-line
  }, []);

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
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ModalBody type={type}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => modal.hide()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifiedModal;
