import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCurrentApp } from "../../../helpers/appInfoHandlers/findCurrentApp";
import { findTodo } from "../../../helpers/todoInfoHandlers/findTodo";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Tools from "../../components/Tools";
import { moveBetweenSections } from "../../redux/actions/moveBetweenSections";
import { moveSectionsAction } from "../../redux/actions/moveSectionsAction";
import { todoMove } from "../../redux/actions/todoMove";
import { newSectionName } from "../../redux/actions/newSectionName";
import { nanoid } from "nanoid";
import DragAndDrop from "../../components/DragAndDrop";
import Section from "../../components/Section";

export default function DashBoard() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentApp = findCurrentApp(store);
  let sections = [];
  if (currentApp) {
    sections = currentApp.sections;
  }

  const userId = store.currentUser;
  const appName = store.appName;

  const handleMove = (event) => {
    const uid = event.target.id;
    const buttonType = event.target.name;
    const todo = findTodo(sections, uid);
    dispatch(moveBetweenSections(buttonType, userId, appName, uid));
    dispatch(todoMove(todo));
  };
  const handleSectionMove = (event) => {
    const buttonType = event.target.name;
    const sectionName = event.target.id;
    const randomId = nanoid();
    dispatch(moveSectionsAction(userId, buttonType, currentApp, sectionName));
    dispatch(newSectionName(randomId));
  };

  const classes = classNames(["section", "section-border"]);

  const Main = () => {
    const allowDrop = (event) => {
      event.preventDefault();
    };
    const handleDrop = (event) => {
      const data = event.dataTransfer.getData("todo");
      console.log(data);
      const element = document.getElementById(data);
      const section = event.target;
      section.append(element);
    };
    return (
      <main className="dashboard">
        <Header buttonName="Log Out" />
        <Tools />
        <div className="section-container">
          {sections.length
            ? sections.map((section, index) => {
                const { name, left, right } = section;
                return (
                  <div
                    className={classes}
                    key={index}
                    onDragOver={allowDrop}
                    onDrop={handleDrop}
                  >
                    <Section
                      index={index}
                      name={name}
                      handleSectionMove={handleSectionMove}
                      left={left}
                      section={section}
                      right={right}
                      handleMove={handleMove}
                      classes={classes}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </main>
    );
  };

  return store ? <Main /> : <Loading />;
}
