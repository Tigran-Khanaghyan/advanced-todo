import { findUserSections } from "../helpers/sectionInfoHandlers/findUserSections";
import { findTodo } from "../helpers/todoInfoHandlers/findTodo";
import { findTodoSectionIndex } from "../helpers/todoInfoHandlers/findTodoSectionIndex";
import { moveInsightSection } from "../helpers/todoInfoHandlers/moveTodoInsightSection";
import { moveTodoIntoleft } from "../helpers/todoInfoHandlers/moveTodoIntoleft";
import { moveTodoIntoRight } from "../helpers/todoInfoHandlers/moveTodoIntoRight";

export function moveTodo(
  users,
  userId,
  appName,
  todoId,
  direction,
  currentIndex,
  todoIndex
) {
  const sections = findUserSections(users, userId, appName);
  const index = findTodoSectionIndex(users, userId, appName, todoId);
  const [section, todo] = findTodo(sections, todoId);
  if (direction === "right") {
    moveTodoIntoRight(sections, section, index, todo, todoId);
    if (index + 2 === sections.length) {
      todo.right = true;
    }
    todo.left = false;
  } else if (direction === "left") {
    moveTodoIntoleft(sections, section, index, todo, todoId);
    if (index - 1 === 0) {
      todo.left = true;
    }
    todo.right = false;
  } else {
    moveInsightSection(section, currentIndex, todoIndex);
  }
}
