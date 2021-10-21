export function checkSectionsNames(users, currentUserId, appName, sectionName) {
  const [user] = users.filter((user) => user.userId === currentUserId);
  const apps = user.apps;
  const [app] = apps.filter((app) => app.appName === appName);
  const sections = app.sections;
  const isSame = sections.find(
    (section) => section.name.trim() === sectionName.trim()
  );
  return isSame;
}
