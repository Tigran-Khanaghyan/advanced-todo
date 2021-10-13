import { findCurrentUser } from "../usersInfoHandlers/findCurrentUser";

export function findCurrentApp(store) {
  const appName = store.appName
  const user = findCurrentUser(store);
  const apps = user.apps
  const [currentApp] = apps.filter((app) => app.appName === appName)
  return currentApp;
}
