import { useSelector } from "react-redux";
import { findCurrentUser } from "../../helpers/usersInfoHandlers/findCurrentUser";
import Button from "./Button";

export default function DropDownMenu({ show, setShow}) {
  const store = useSelector((state) => state);
  const handleClick = () => {
    setShow(!show);
  };
  let classes = "dropdown-menu" + (show ? "-show" : "");
  const user = findCurrentUser(store);
  const apps = user.apps;
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
        Choose App
      </button>
      <div className={classes} aria-labelledby="dropdownMenu">
        {Boolean(apps.length) && apps.map((app, index) => {
          return (
            <Button
              key={index}
              className="dropdown-item"
              type="button"
              name={app.appName}
            />
          );
        })}
      </div>
    </div>
  );
}
