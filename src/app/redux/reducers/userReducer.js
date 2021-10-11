export default function userReducer(state = [], action) {
  switch (action.type) {
    case "NEW-USER":
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}
