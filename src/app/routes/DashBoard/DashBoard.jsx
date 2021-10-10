import classNames from "classnames";

export default function DashBoard() {
  const classes = classNames(["section", 'section-border']);

  return (
    <main className="dashboard">
      <section className={classes}>
        <div>
          <p>To Do</p>
        </div>
      </section>
      <section className={classes}>
        <div>
          <p>In Progress</p>
        </div>
      </section>
      <section className={classes}>
        <div>
          <p>Done</p>
        </div>
      </section>
    </main>
  );
}
