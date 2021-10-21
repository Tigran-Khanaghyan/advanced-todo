export const createNewSection = (section, currentUserId, appName) => {
  return {
    type: "NEW_SECTION",
    userId: currentUserId,
    appName,
    payload: section,
  };
};
