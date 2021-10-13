import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCurrentUser } from "../../helpers/usersInfoHandlers/findCurrentUser";
import { setCurrentAppName } from "../redux/actions/currentAppName";
import Button from "./Button";

export default function DropDownMenu({ show, setShow }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShow(!show);
  };
  let classes = "dropdown-menu" + (show ? "-show" : "");
  const user = findCurrentUser(store);
  const apps = user.apps;

  const [index, setIndex] = useState(0);
  const handleAppNameClick = (index) => () => {
    setIndex(index);
    dispatch(setCurrentAppName(apps[index].appName));
  };

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
        {apps.length ? apps[index].appName : "Choose App"}
      </button>
      <div className={classes} aria-labelledby="dropdownMenu">
        {Boolean(apps.length) &&
          apps.map((app, index) => {
            return (
              <Button
                key={index}
                className="dropdown-item"
                type="button"
                buttonName={app.appName}
                onClick={handleAppNameClick(index)}
              />
            );
          })}
      </div>
    </div>
  );
}
