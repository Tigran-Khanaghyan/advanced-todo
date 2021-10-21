import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCurrentUser } from "../../helpers/usersInfoHandlers/findCurrentUser";
import { setCurrentAppName } from "../redux/actions/currentAppName";
import Button from "./Button";
import { ReactComponent as DeleteIcon } from "../../assets/images/Icons/delete.svg";
import { deleteApp } from "../redux/actions/appActions";

export default function DropDownMenu({ show, setShow }) {
  const [appName, setAppName] = useState("");

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShow(!show);
  };
  const user = findCurrentUser(store);
  const apps = user.apps;
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);
  const handleAppNameClick = (index) => () => {
    setIndex(index);
    dispatch(setCurrentAppName(apps[index].appName));
  };

  const handleAppDelete = (index) => {
    dispatch(deleteApp(apps, index));
    dispatch(setCurrentAppName(null));
    setAppName(appName);
    setIndex(index);
  };
  const classes = "dropdown-menu" + (show ? "-show" : "");

  return (
    <div className="dropdown">
      <button
        onClick={handleClick}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {apps.length ? store.appName : "Choose App"}
      </button>
      <div className={classes} aria-labelledby="dropdownMenu">
        {apps.length
          ? apps.map((app, index) => {
              return (
                <div key={index}>
                  <div className="d-inline-flex" key={index}>
                    <div>
                      <Button
                        className="dropdown-item"
                        type="button"
                        buttonName={app.appName}
                        onClick={handleAppNameClick(index)}
                      />
                    </div>
                    <div onClick={() => handleAppDelete(apps, index)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
