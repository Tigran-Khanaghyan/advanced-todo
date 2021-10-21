import { addNewSection } from "../../../helpers/sectionInfoHandlers/addNewSection";
import { findUserSections } from "../../../helpers/sectionInfoHandlers/findUserSections";
import { moveSection } from "../../../helpers/sectionInfoHandlers/moveSection";
import { replaceSection } from "../../../helpers/sectionInfoHandlers/replaceSection";
import { moveTodo } from "../../../services/moveTodo";

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
    case "MOVE_TODO": {
      moveTodo(
        users,
        action.userId,
        action.appName,
        action.todoId,
        action.direction,
        action.currentIndex,
        action.index
      );
      return users;
    }
    case "NEW_SECTION":
      const appSections = findUserSections(
        users,
        action.userId,
        action.appName
      );
      addNewSection(appSections, action.payload);
      return users;
    case "MOVE_SECTION":
      const section = moveSection(
        action.buttonType,
        action.currentApp,
        action.sectionName
      );
      replaceSection(
        users,
        action.userId,
        action.currentApp,
        action.sectionName,
        section
      );
      return users;
    default:
      return users;
  }
}
