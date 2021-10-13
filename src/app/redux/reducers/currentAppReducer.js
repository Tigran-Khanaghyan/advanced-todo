export const currentAppReducer = (state = null, action) => {
  switch (action.type) {
    case "CURRENT_APP":
      return action.payload;
    default:
      return state;
  }
};
