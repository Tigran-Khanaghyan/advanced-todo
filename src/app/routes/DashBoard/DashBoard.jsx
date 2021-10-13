import classNames from "classnames";
import { useSelector } from "react-redux";
import { findCurrentApp } from "../../../helpers/appInfoHandlers/findCurrentApp";

import Header from "../../components/Header";
import TodoCard from "../../components/TodoCard";
import Tools from "../../components/Tools";

export default function DashBoard() {
  const store = useSelector((state) => state);
  const currentApp = findCurrentApp(store);
  let sections = null;
  if (currentApp) {
    sections = currentApp.sections;
  }

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
                  const { title, description } = todo;
                  return (
                    <div key={todo.uid}>
                      <TodoCard
                        type={section.name}
                        title={title}
                        description={description}
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
