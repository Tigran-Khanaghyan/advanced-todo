export function todoLeftRightToggler(section, direction, bool) {
  const todos = section.todos;
  if (todos.length === 0) {
    return 10;
  }
  todos.forEach((todo) => {
    if (direction === "left") {
      if (bool === true) {
        todo.left = true;
      }
      if (bool === false) {
        todo.left = false;
      }
    }
    if (direction === "right") {
      if (bool === true) {
        todo.right = true;
      }
      if (bool === false) {
        todo.right = false;
      }
    }
  });
}
