import classNames from "classnames";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function DashBoard() {
  const classes = classNames(["section", "section-border"]);

  return (
    <main className="dashboard">
      <Header />
      <div className='section-container'>
        <section className={classes}>
          <div>
            <p>To Do</p>
            <Button name="Create Todo" className='btn'/>
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
      </div>
    </main>
  );
}
