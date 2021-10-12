import classNames from "classnames";

import Header from "../../components/Header";
import Tools from "../../components/Tools";

export default function DashBoard() {
  const classes = classNames(["section", "section-border"]);

  return (
    <main className="dashboard">
      <Header />
      <Tools/>
      <div className='section-container'>
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
      </div>
    </main>
  );
}
