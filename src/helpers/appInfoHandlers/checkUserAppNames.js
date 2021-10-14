export function checkUserAppNames(store, appName) {
  const currentUserId = store.currentUser;
  const users = store.users;
  const [user] = users.filter((user) => user.userId === currentUserId);
  const apps = user.apps;
  return apps.some((app) => app.appName === appName);
}
