import Input from "../Input";

export default function Cell({ onChange}) {
  return (
    <div className="recovery-cell">
      <Input onChange={onChange} className="cell-input" maxLength="1" />
    </div>
  );
}
