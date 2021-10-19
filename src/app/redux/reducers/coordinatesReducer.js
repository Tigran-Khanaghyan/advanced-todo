export const coordinatesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ELEMENTS-CCORDINATES":
      state.current = action.payload;
      return state;
    default:
      return state;
  }
};
