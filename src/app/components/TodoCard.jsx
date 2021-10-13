import Button from "./Button";

export default function TodoCard({
  type,
  title,
  description,
  uid,
  handleRightMove,
  disabled
}) {
  return (
    <div className="todo-container">
      <div className="todo-btn">
        <Button type="left" name="<" className="btn" id={uid} />
      </div>
      <div className="card w-75">
        <div className="card-header">{type}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Button name="Edit" className="btn" />
        </div>
      </div>
      <div>
        <Button
          type="right"
          name=">"
          className="btn"
          id={uid}
          onClick={handleRightMove}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
