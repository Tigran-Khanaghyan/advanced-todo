export const sectionNameReducer = (state = null, action) => {
  switch (action.type) {
    case "NEW_SECTION_NAME":
      return action.payload;
    default:
      return state;
  }
};
