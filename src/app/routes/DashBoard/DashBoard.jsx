import classNames from "classnames";
import { useSelector } from "react-redux";
import { findUserSections } from "../../../helpers/sectionHelpers/findUserSections";

import Header from "../../components/Header";
import Tools from "../../components/Tools";

export default function DashBoard() {
  const store = useSelector((state) => state);
  const sections = findUserSections(store);

  const classes = classNames(["section", "section-border"]);

  return (
    <main className="dashboard">
      <Header />
      <Tools />
      <div className="section-container">
        {sections &&
          sections.map((section) => {
            return (
              <section className={classes}>
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
