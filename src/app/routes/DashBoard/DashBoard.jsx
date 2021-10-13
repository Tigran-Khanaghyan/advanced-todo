import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCurrentApp } from "../../../helpers/appInfoHandlers/findCurrentApp";
import { findTodo } from "../../../helpers/todoInfoHandlers/findTodo";

import Header from "../../components/Header";
import TodoCard from "../../components/TodoCard";
import Tools from "../../components/Tools";
import { moveBetweenSections } from "../../redux/actions/moveBetweenSections";
import { todoMove } from "../../redux/actions/todoMove";

export default function DashBoard() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentApp = findCurrentApp(store);
  let sections = null;
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

  const classes = classNames(["section", "section-border"]);

  return (
    <main className="dashboard">
      <Header />
      <Tools />
      <div className="section-container">
        {sections &&
          sections.map((section, index) => {
            return (
              <section key={index} className={classes}>
                <div className="section-header">
                  <p>{section.name}</p>
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
}
