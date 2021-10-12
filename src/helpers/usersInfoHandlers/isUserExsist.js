export function isUserExsist(users, email, password) {
  const isExsist = users.find(
    (user) => user.email === email && user.password === password
  );
  if (isExsist) {
    return true;
  }
  return false;
}
