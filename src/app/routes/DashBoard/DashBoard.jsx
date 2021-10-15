import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCurrentApp } from "../../../helpers/appInfoHandlers/findCurrentApp";
import { findTodo } from "../../../helpers/todoInfoHandlers/findTodo";
import Button from "../../components/Button";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import TodoCard from "../../components/TodoCard";
import Tools from "../../components/Tools";
import { moveBetweenSections } from "../../redux/actions/moveBetweenSections";
import { moveSectionsAction } from "../../redux/actions/moveSectionsAction";
import { todoMove } from "../../redux/actions/todoMove";
import { newSectionName } from "../../redux/actions/newSectionName";
import { nanoid } from "nanoid";

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
    return (
      <main className="dashboard">
        <Header buttonName="Log Out" />
        <Tools />
        <div className="section-container">
          {sections.length &&
            sections.map((section, index) => {
              const { name, left, right } = section;
              return (
                <section key={index} className={classes}>
                  <div className="section-header">
                    <Button
                      name="left"
                      buttonName="<"
                      className="btn"
                      id={name}
                      onClick={handleSectionMove}
                      disabled={left}
                    />
                    <p>{section.name}</p>
                    <Button
                      name="right"
                      buttonName=">"
                      className="btn"
                      id={name}
                      onClick={handleSectionMove}
                      disabled={right}
                    />
                  </div>
                  {section.todos.map((todo) => {
                    const { title, description, uid, right, left } = todo;
                    return (
                      <div key={uid}>
                        <TodoCard
                          uid={uid}
                          type={section.name}
                          title={title}
                          description={description}
                          handleMove={handleMove}
                          right={right}
                          left={left}
                        />
                      </div>
                    );
                  })}
                </section>
              );
            })}
        </div>
      </main>
    );
  };

  return store ? <Main /> : <Loading />;
}
