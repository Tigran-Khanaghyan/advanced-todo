import classNames from "classnames";
import { useSelector } from "react-redux";
import { findCurrentApp } from "../../../helpers/appInfoHandlers/findCurrentApp";

import Header from "../../components/Header";
import Tools from "../../components/Tools";

export default function DashBoard() {
  const store = useSelector((state) => state);
  const currentApp = findCurrentApp(store);
  let sections = null
  if(currentApp){
    sections = currentApp.sections
  }

  const classes = classNames(["section", "section-border"]);

  return (
    <main className="dashboard">
      <Header />
      <Tools />
      <div className="section-container">
        {sections &&
          sections.map((section, index) => {
            return (
              <section key={index} className={classes}>
                <div>
                  <p>{section.name}</p>
                </div>
              </section>
            );
          })}
      </div>
    </main>
  );
}
