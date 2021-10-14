import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import ModalBody from "./ModalBody";
import Button from "../Button";
import { useSelector } from "react-redux";
import { addApp } from "../../redux/actions/appActions";
import { useDispatch } from "react-redux";
import { sections } from "../../../constants/sections";
import { setCurrentAppName } from "../../redux/actions/currentAppName";
import { nanoid } from "nanoid";
import { addTodo } from "../../redux/actions/todoActions";
import { setCurrentApp } from "../../redux/actions/currentApp";
import { todoMove } from "../../redux/actions/todoMove";
import { checkUserAppNames } from "../../../helpers/appInfoHandlers/checkUserAppNames";
import { checkSectionsNames } from "../../../helpers/sectionInfoHandlers/checkSectionsNames";
import { WarningMessage, SectionWarningMessage } from "../Alerts";
import {
  SAME_NAMES_WARNING,
  SAME_SECTIONS_NAME,
} from "../../../constants/messages";
import { createNewSection } from "../../redux/actions/createNewSection";
import { newSectionName } from "../../redux/actions/newSectionName";

function ModifiedModal({ modal, setModal, type }) {
  const exampleModal = useRef();
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const currentUserId = store.currentUser;
  const currentAppName = store.appName;
  const users = store.users;
  const todoId = nanoid();

  const [appName, setAppName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const app = { appName: appName, sections: sections };
  const todo = { title, description, right: false, left: true, uid: todoId };

  const [sectionName, setSectionName] = useState();
  const section = { name: sectionName, todos: [] };

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
    // eslint-disable-next-line
  }, []);

  const [showWarning, setShowWarning] = useState();
  const [showSectionWarning, setShowSectionWarning] = useState(false);

  const handleSaveChanges = () => {
    if (type === "app") {
      const namesAreTheSame = checkUserAppNames(store, appName);
      if (namesAreTheSame) {
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 3000);
        return;
      }
      dispatch(setCurrentApp(app));
      dispatch(addApp(app, currentUserId));
      dispatch(setCurrentAppName(appName));
      setAppName("");
    } else if (type === "todo") {
      dispatch(addTodo(todo, currentUserId, currentAppName));
      dispatch(todoMove(todo));
      setTitle("");
      setDescription("");
    } else if (type === "section") {
      const namesAreTheSame = checkSectionsNames(
        users,
        currentUserId,
        currentAppName,
        sectionName
      );
      if (namesAreTheSame) {
        setShowSectionWarning(true);
        setTimeout(() => {
          setShowSectionWarning(false);
        }, 2000);
        return;
      }
      dispatch(createNewSection(section, currentUserId, currentAppName));
      dispatch(newSectionName(sectionName));
      setSectionName("");
    }
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
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                type={type}
                sectionName={sectionName}
                setSectionName={setSectionName}
              />
            </div>
            <div className="modal-footer">
              <Button
                buttonName="Close"
                type="button"
                className="btn btn-secondary"
                onClick={() => modal.hide()}
              />
              <Button
                onClick={handleSaveChanges}
                buttonName="Save changes"
                type="button"
                className="btn btn-primary"
              />
            </div>
            <WarningMessage
              message={SAME_NAMES_WARNING}
              showWarning={showWarning}
              setShowWarning={setShowWarning}
            />
            <SectionWarningMessage
              showSectionWarning={showSectionWarning}
              setShowSectionWarning={setShowSectionWarning}
              sectionMessage={SAME_SECTIONS_NAME}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifiedModal;
