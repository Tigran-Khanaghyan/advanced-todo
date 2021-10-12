import Input from "../Input";

export default function ModalBody({ type, setAppName, appName }) {
  const handleAppName = (event) => {
    setAppName(event.target.value);
  };

  switch (type) {
    case "app": {
      return (
        <Input
          value={appName}
          onChange={handleAppName}
          placeholder="App name"
        />
      );
    }
    case "todo":
      return (
        <div className="d-flex flex-column">
          <Input placeholder="Todo name" />
          <Input placeholder="Todo discription" />
        </div>
      );
    default:
      return <> </>;
  }
}
