import Button from "./Button";

export default function TodoCard({type, title, description}) {
  return (
    <div className="card">
      <div className="card-header">{type}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button name="Edit" className="btn" />
      </div>
    </div>
  );
}
