import { findUserSections } from "../../../helpers/sectionInfoHandlers/findUserSections";

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
    default:
      return users;
  }
}
