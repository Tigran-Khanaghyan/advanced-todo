export default function userReducer(users = [], action) {
  switch (action.type) {
    case "NEW-USER":
      users.push(action.payload);
      return users;
    default:
      return users;
  }
}
