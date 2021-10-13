export const moveBetweenSections = (
  buttonType,
  currentUserId,
  appName,
  uid
) => {
  return {
    type: "MOVE_TODO_BETWEEN_SECTIONS",
    direction: buttonType,
    userId: currentUserId,
    appName,
    todoId: uid,
  };
};
