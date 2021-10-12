export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "IS-LOGGED":
      return !state;
    default:
      return state;
  }
};
