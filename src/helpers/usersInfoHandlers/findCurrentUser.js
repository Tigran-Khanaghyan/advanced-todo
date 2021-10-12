export function findCurrentUser(store) {
  const currentUserId = store.currentUser;
  const users = store.users;

  const [user] = users.filter((user) => user.userId === currentUserId);
  return user;
}
