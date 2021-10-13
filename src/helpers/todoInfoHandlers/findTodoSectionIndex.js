export function findTodoSectionIndex(users, userId, appName, uniqeId) {
  const [user] = users.filter((user) => user.userId === userId);
  const apps = user.apps;
  const [app] = apps.filter((app) => app.appName === appName);
  const sections = app.sections;
  const index = sections.findIndex((section) => {
    return section.todos.find((todo) => todo.uid === uniqeId);
  });
  return index;
}
