import Button from "./Button";
import TodoCard from "./TodoCard";

export default function Section({
  name,
  handleSectionMove,
  left,
  section,
  right,
  handleMove,
}) {
  const handleDrag = (event) => {
    const data = event.target.dataset.todo;
    event.dataTransfer.setData("todo", data);
  };

  return (
    <section>
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
      {section.todos.map((todo) => {
        const { title, description, uid, right, left } = todo;
        return (
          <div
            key={uid}
            onDragStart={handleDrag}
            draggable={true}
            data-todo="todo"
            id="todo"
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
          </div>
        );
      })}
    </section>
  );
}
