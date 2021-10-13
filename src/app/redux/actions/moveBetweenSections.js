export const moveBetweenSections = (
  buttonType,
  currentUserId,
  appName,
  uid
) => {
  return {
    type: "MOVE_TODO_BETWEEN_SECTIONS",
    userId: currentUserId,
    appName,
    todoId: uid,
    direction: buttonType,
  };
};
