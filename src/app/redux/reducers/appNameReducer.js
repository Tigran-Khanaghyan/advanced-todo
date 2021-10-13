export const appNameReducer = (state = null, action) => {
  switch (action.type) {
    case "CURRENT_APP_NAME":
      return action.payload
    default:
      return state;
  }
};
