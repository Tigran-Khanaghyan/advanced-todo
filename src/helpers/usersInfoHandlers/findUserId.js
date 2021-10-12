export function findUserId(users, email, password) {
  const user = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (user.length === 1) return user[0].userId;
  return false;
}
