export function addNewSection(sections, section) {
  sections.splice(-2, 0, section);
  return sections;
}
