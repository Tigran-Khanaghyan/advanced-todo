export default function Button({
  name,
  buttonName,
  className,
  onClick,
  id,
  disabled,
  type,
}) {
  return (
    <div>
      <button
        type={type}
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
