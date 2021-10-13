export const moveTodoReducer = (state = null, action) => {
  switch (action.type) {
    case "TODO_MOVE":
      return action.payload;
    default:
      return state;
  }
};
