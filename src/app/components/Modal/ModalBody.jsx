import Input from "../Input";

export default function ModalBody({ type }) {
  switch (type) {
    case "app": {
      return <Input placeholder='App name'/>;
    }
    case "todo":
      return (
        <div className="d-flex flex-column">
          <Input placeholder="Todo name"/>
          <Input placeholder="Todo discription"/>
        </div>
      );
    default:
      return <> </>;
  }
}
