export default function Input({
  type,
  onChange,
  placeholder,
  value,
  className,
  disabled = false,
  maxLength,
}) {
  return (
    <div>
      <input
        maxLength={maxLength}
        disabled={disabled}
        value={value}
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
