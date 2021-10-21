export const addTodo = (todo, currentUserId, appName) => {
  return {
    type: "NEW_TODO",
    currentUserId,
    appName,
    payload: todo,
  };
};
