import Input from "../Input";

export default function ModalBody({
  type,
  setAppName,
  appName = "",
  title = "",
  setTitle,
  description = "",
  setDescription,
  sectionName = "",
  setSectionName,
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
  const handleSectioName = (event) => {
    setSectionName(event.target.value);
  };

  switch (type) {
    case "app": {
      return (
        <Input
          value={appName}
          onChange={handleAppName}
          placeholder="App name"
          className="input"
        />
      );
    }
    case "todo":
      return (
        <div className="d-flex flex-column">
          <Input
            placeholder="Todo name"
            value={title}
            onChange={handleTitle}
            className="input"
          />
          <Input
            className="input"
            placeholder="Todo discription"
            value={description}
            onChange={handleDescription}
          />
        </div>
      );
    case "section":
      return (
        <Input
          value={sectionName}
          onChange={handleSectioName}
          placeholder="Section name"
          className="input"
        />
      );
    default:
      return <> </>;
  }
}
