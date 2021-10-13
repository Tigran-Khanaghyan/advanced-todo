export function findTodo(sections, todoId) {
  const section = sections.find((section) => {
    return section.todos.find((todo) => todo.uid === todoId);
  });
  const todo = section.todos.find((todo) => todo.uid === todoId)
  return [section, todo];
}
