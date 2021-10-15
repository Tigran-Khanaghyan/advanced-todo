import { todoLeftRightToggler } from "../todoInfoHandlers/todoLeftRightToggler";

export function moveSection(buttonType, currentApp, sectionName) {
  const sections = currentApp.sections;
  switch (buttonType) {
    case "right": {
      const sectionInfo = [];
      sections.forEach((section, index) => {
        if (section.name.trim() === sectionName.trim()) {
          sectionInfo.push({ section, index });
        }
      });
      const [{ section, index }] = sectionInfo;
      let temp = sections[index];
      sections[index] = sections[index + 1];
      sections[index + 1] = temp;

      if (index === sections.length - 2) {
        section.right = true;
        todoLeftRightToggler(section, "right", true);
        sections[index].right = false;
        todoLeftRightToggler(sections[index], "right", false);
      } else if (index === 0) {
        sections[index].left = true;
        todoLeftRightToggler(sections[index], "left", true);
        sections[index + 1].left = false;
        todoLeftRightToggler(sections[index + 1], "left", false);
      } else {
        section.right = false;
        todoLeftRightToggler(section, "right", false);
        section.left = false;
        todoLeftRightToggler(section, "left", false);
      }

      return section;
    }
    case "left": {
      const sectionInfo = [];
      sections.forEach((section, index) => {
        if (section.name.trim() === sectionName.trim()) {
          sectionInfo.push({ section, index });
        }
      });
      const [{ section, index }] = sectionInfo;
      let temp = sections[index];
      sections[index] = sections[index - 1];
      sections[index - 1] = temp;

      if (index - 1 === 0) {
        sections[index - 1].left = true;
        todoLeftRightToggler(sections[index - 1], "left", true);
        sections[index].left = false;
        todoLeftRightToggler(sections[index], "left", false);
      } else if (index === sections.length - 1) {
        sections[index].right = true;
        todoLeftRightToggler(sections[index], "right", true);
        sections[index - 1].right = false;
        todoLeftRightToggler(sections[index - 1], "right", false);
      } else {
        section.left = false;
        todoLeftRightToggler(section, "left", false);
        section.right = false;
        todoLeftRightToggler(section, "right", false);
      }
      return section;
    }
    default:
      return false;
  }
}
