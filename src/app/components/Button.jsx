export default function Button({
  name,
  buttonName,
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
        name={name}
        className={className}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </div>
  );
}
