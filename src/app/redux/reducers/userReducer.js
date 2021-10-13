import { findUserSections } from "../../../helpers/sectionInfoHandlers/findUserSections";
import { findTodo } from "../../../helpers/todoInfoHandlers/findTodo";
import { findTodoSectionIndex } from "../../../helpers/todoInfoHandlers/findTodoSectionIndex";
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
      moveTodoIntoRight(sections, section, index, todo);
      return users;
    }
    default:
      return users;
  }
}
