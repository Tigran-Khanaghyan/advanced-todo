export function findUserSections(users, currentUserId, appName) {
  const [user] = users.filter((user) => user.userId === currentUserId);
  const apps = user.apps;
  const [app] = apps.filter((app) => app.appName === appName);
  return app.sections;
}
