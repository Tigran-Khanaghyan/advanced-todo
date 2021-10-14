export function findUserByEmail(users,email, password) {
    email = email.toLowerCase()
    const [user] = users.filter(
        (user) => user.email === email && user.password !== password
      );
      if (user) return user
      return false;
}