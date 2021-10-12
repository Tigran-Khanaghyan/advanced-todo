import { findCurrentUser } from "../usersInfoHandlers/findCurrentUser";

export function findUserSections(store) {
  const user = findCurrentUser(store);
  const sections = user.apps.sections;
  return sections;
}
