const data = [
  {
    name: "TO DO",
    childs: [
      {
        name: "My task 1",
        description: "My tasks description 1",
      },
      {
        name: "My task 2",
        description: "My tasks description 2",
      },
    ],
  },
  {
    name: "In Progress",
    childs: [
      {
        name: "My task 2",
        description: "My task description 2",
      },
    ],
  },
  {
    name: "Done",
    childs: [],
  },
];

export default function Exemple() {
  const handleDrag = (e) => {
    window.localStorage.setItem("dragId", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = window.localStorage.getItem("dragId");
    const el = document.getElementById(id);
    const target = e.target;
    if (target.dataset.behavior) {
      target.appendChild(el);
    }
  };

  return (
    <div className="container">
      <div className="d-flex">
        {!!data.length &&
          data.map((col, colIndex) => (
            <div className="col p-2 d-flex" key={colIndex}>
              <div className="flex-fill border p-4" role="presentation">
                <h3 className="mb-4">{col.name}</h3>
                <div
                  className="border p-4"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  data-behavior="parent"
                >
                  {!!col.childs.length &&
                    col.childs.map((child, childIndex) => (
                      <div
                        className="border mb-4"
                        draggable={true}
                        key={`${colIndex}-${childIndex}`}
                        id={`${colIndex}-${childIndex}`}
                        onDrag={handleDrag}
                      >
                        <p>
                          <strong>{child.name}</strong>
                        </p>
                        <p>{child.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
