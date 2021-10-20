import Button from "./Button";
import TodoCard from "./TodoCard";

export default function Section({
  name,
  handleSectionMove,
  left,
  section,
  right,
  handleMove,
  sectionIndex,
}) {
  const handleDrag = (event) => {
    const data = event.target.dataset.todo;
    event.dataTransfer.setData("todo", data);
  };

  return (
    <section id={sectionIndex}>
      <div className="section-header">
        <Button
          name="left"
          buttonName="<"
          className="btn"
          id={name}
          onClick={handleSectionMove}
          disabled={left}
        />
        <p>{section.name}</p>
        <Button
          name="right"
          buttonName=">"
          className="btn"
          id={name}
          onClick={handleSectionMove}
          disabled={right}
        />
      </div>
      {!!section.todos.length &&
        section.todos.map((todo, todoIndex) => {
          const { title, description, uid, right, left } = todo;
          return (
            <article
              key={uid}
              onDragStart={handleDrag}
              draggable={true}
              data-todo={`todo-${sectionIndex}-${todoIndex}`}
              id={`todo-${sectionIndex}-${todoIndex}`}
            >
              <TodoCard
                uid={uid}
                type={section.name}
                title={title}
                description={description}
                handleMove={handleMove}
                right={right}
                left={left}
              />
            </article>
          );
        })}
    </section>
  );
}
