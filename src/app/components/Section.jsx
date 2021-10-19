import Button from "./Button";
import DragAndDrop from "./DragAndDrop";
import TodoCard from "./TodoCard";

export default function Section({
  name,
  handleSectionMove,
  left,
  section,
  right,
  handleMove,
  elems
}) {
  return (
    <section id={name}>
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
          <div key={uid}>
            <DragAndDrop
              child={
                <TodoCard
                  uid={uid}
                  type={section.name}
                  title={title}
                  description={description}
                  handleMove={handleMove}
                  right={right}
                  left={left}
                />
              }
              elems={elems}
            />
          </div>
        );
      })}
    </section>
  );
}
