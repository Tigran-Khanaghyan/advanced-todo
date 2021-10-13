export default function Button({
  type,
  name,
  className,
  onClick,
  id,
  disabled,
}) {
  return (
    <div>
      <button
        disabled={disabled}
        id={id}
        type={type}
        className={className}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
