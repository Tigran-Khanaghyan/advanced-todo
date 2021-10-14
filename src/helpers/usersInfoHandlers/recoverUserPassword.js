export function recoverUserPassword(users, email) {
    email = email.toLowerCase()
    const [user] = users.filter(
        (user) => user.email === email
      );
      if (user) return user.password
      return false;
}