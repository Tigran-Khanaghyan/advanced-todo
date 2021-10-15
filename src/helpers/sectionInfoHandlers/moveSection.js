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
      console.log(index, sections.length);
      if (index === sections.length - 2) {
        section.right = true;
      } else {
        section.right = false;
        section.left = false
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
        section.left = true;
      } else {
        section.left = false;
        section.right = false
      }
      return section;
    }
    default:
      return false;
  }
}
