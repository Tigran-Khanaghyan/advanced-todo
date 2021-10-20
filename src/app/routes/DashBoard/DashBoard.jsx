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
import Section from "../../components/Section";
import { useState } from "react";
import { findHorizontalMoveDirection } from "../../../services/findHorizontalMoveDirection";

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

  const classes = classNames(["section-border", "section"]);
  let currentSectionIndex = null;
  let sectionIndex = null;
  let currentTodoIndex = null;
  let todoIndex = null;
  let counter = 0;

  const Main = () => {
    const [isSection, setIsSection] = useState(false);

    const allowTodoDrop = (event) => {
      event.preventDefault();
      if (event.target.closest("section")) {
        currentSectionIndex = event.target.closest("section").id;
      }
      if (
        event.target.dataset.section &&
        event.target.dataset.section.split("-") !== "section"
      ) {
        sectionIndex = event.target.dataset.section.split("-")[1];
        setTimeout(() => {
          setIsSection(true);
        }, 0);
      }
      if (event.target.closest("article")) {
        ++counter;
        let todo = event.target.closest("article");
        if (counter === 1) {
          currentTodoIndex = todo.dataset.todo.split("-")[2];
        }
        todoIndex = todo.dataset.todo.split("-")[2];
        setTimeout(() => {
          setIsSection(true);
        }, 0);
      }
      setIsSection(false);
    };

    const handleTodoDrop = (event) => {
      const data = event.dataTransfer.getData("todo");
      const todo = document.getElementById(data);
      let uid = todo.firstChild.id;
      const section = event.target;

      if (isSection) {
        section.append(todo);
        let buttonType = findHorizontalMoveDirection(
          currentSectionIndex,
          sectionIndex
        );
        dispatch(
          moveBetweenSections(
            buttonType,
            userId,
            appName,
            uid,
            currentTodoIndex,
            todoIndex
          )
        );
        dispatch(todoMove(todo));
        sectionIndex = null;
        currentSectionIndex = null;
        todoIndex = null;
        currentTodoIndex = null;
        counter = 0;
      }
    };

    return (
      <main className="dashboard">
        <Header buttonName="Log Out" />
        <Tools />
        <div className="section-container">
          {sections.length
            ? sections.map((section, sectionIndex) => {
                const { name, left, right } = section;
                return (
                  <div
                    className={classes}
                    key={sectionIndex}
                    data-section={`section-${sectionIndex}`}
                    id={`section-${sectionIndex}`}
                    onDragOver={allowTodoDrop}
                    onDrop={handleTodoDrop}
                  >
                    <Section
                      sectionIndex={sectionIndex}
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
