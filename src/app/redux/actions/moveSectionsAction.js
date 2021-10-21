export const moveSectionsAction = (
  userId,
  buttonType,
  currentApp,
  sectionName
) => {
  return {
    type: "MOVE_SECTION",
    buttonType,
    currentApp,
    sectionName,
    userId,
  };
};
