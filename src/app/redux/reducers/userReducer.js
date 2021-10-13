import { findUserSections } from "../../../helpers/sectionInfoHandlers/findUserSections";
import { findTodo } from "../../../helpers/todoInfoHandlers/findTodo";
import { findTodoSectionIndex } from "../../../helpers/todoInfoHandlers/findTodoSectionIndex";
import { moveTodoIntoleft } from "../../../helpers/todoInfoHandlers/moveTodoIntoleft";
import { moveTodoIntoRight } from "../../../helpers/todoInfoHandlers/moveTodoIntoRight";

export default function userReducer(users = [], action) {
  switch (action.type) {
    case "NEW_USER":
      users.push(action.payload);
      return users;
    case "NEW_APP":
      const [user] = users.filter((user) => user.userId === action.userId);
      user.apps.push(action.payload);
      return users;
    case "NEW_TODO":
      const sections = findUserSections(
        users,
        action.currentUserId,
        action.appName
      );
      sections[0].todos.push(action.payload);
      return users;
    case "MOVE_TODO_BETWEEN_SECTIONS": {
      const sections = findUserSections(users, action.userId, action.appName);
      const index = findTodoSectionIndex(
        users,
        action.userId,
        action.appName,
        action.todoId
      );
      const [section, todo] = findTodo(sections, action.todoId);
      if (action.direction === "right") {
        moveTodoIntoRight(sections, section, index, todo);
        if(index + 2 === sections.length){
          todo.right = true
        }
        todo.left = false
      }
      if (action.direction === "left") {
        moveTodoIntoleft(sections, section, index, todo);
        if(index - 1 === 0){
          todo.left = true
        }
        todo.right = false
      }
      return users;
    }
    default:
      return users;
  }
}
