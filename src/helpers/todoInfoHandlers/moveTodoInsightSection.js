export function moveInsightSection(section, currentIndex, index) {
  let todos = section.todos;
  let temp = todos[currentIndex];
  todos[currentIndex] = todos[index];
  todos[index] = temp;
}
