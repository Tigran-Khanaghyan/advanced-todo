import Input from "../Input";

export default function ModalBody({
  type,
  setAppName,
  appName = "",
  title = "",
  setTitle,
  description = "",
  setDescription,
}) {
  const handleAppName = (event) => {
    setAppName(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
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
          <Input placeholder="Todo name" value={title} onChange={handleTitle} />
          <Input
            placeholder="Todo discription"
            value={description}
            onChange={handleDescription}
          />
        </div>
      );
    default:
      return <> </>;
  }
}
