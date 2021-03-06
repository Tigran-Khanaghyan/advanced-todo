export function moveTodoIntoRight(sections, section, index, todo, todoId) {
  sections[index + 1].todos.push(todo);
  const todoIndex = section.todos.findIndex((todo) => todo.uid === todoId);
  sections[index].todos.splice(todoIndex, 1);
}
