export const moveBetweenSections = (
  buttonType,
  currentUserId,
  appName,
  uid,
  currentIndex,
  index
) => {
  return {
    type: "MOVE_TODO",
    direction: buttonType,
    userId: currentUserId,
    appName,
    todoId: uid,
    currentIndex,
    index,
  };
};
