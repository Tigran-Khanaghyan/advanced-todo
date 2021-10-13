export default function Input({ type, onChange, placeholder, value }) {
  return (
    <div>
      <input
        value={value}
        type={type}
        className="input"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
