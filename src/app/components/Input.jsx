export default function Input(type, onChange, placeholder) {
  return (
    <div>
      <input
        type={type}
        className="input"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
