import Button from "./Button";

export default function TodoCard({
  type,
  title,
  description,
  uid,
  handleMove,
  right,
  left,
}) {
  return (
    <div className="todo-container">
      <div className="todo-btn">
        <Button
          name="left"
          buttonName="<"
          className="btn"
          id={uid}
          onClick={handleMove}
          disabled={left}
        />
      </div>
      <div className="card w-75">
        <div className="card-header">{type}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Button buttonName="Edit" className="btn" />
        </div>
      </div>
      <div>
        <Button
          name="right"
          buttonName=">"
          className="btn"
          id={uid}
          onClick={handleMove}
          disabled={right}
        />
      </div>
    </div>
  );
}
