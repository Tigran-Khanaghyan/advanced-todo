export function replaceSection(
  users,
  userId,
  currentApp,
  sectionName,
  section
) {
  const appName = currentApp.appName;
  const [currentUser] = users.filter((user) => user.userId === userId);
  const apps = currentUser.apps;
  const [userCurrentApp] = apps.filter((app) => app.appName === appName);
  const sections = userCurrentApp.sections;
  const movedSectionIndex = sections.findIndex(
    (section) => section.name === sectionName
  );
  sections[movedSectionIndex] = section;
  return movedSectionIndex;
}
