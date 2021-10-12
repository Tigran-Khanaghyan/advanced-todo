export default function Button({ type, name, className, onClick, }) {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
