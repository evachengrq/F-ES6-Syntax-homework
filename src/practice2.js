const inject = (items, sections) => {
  let result = [];
  for (const section of sections) {
    let content = section.content;
    let index = section.index;
    let extra = sections.indexOf(section);
    items.splice(index + extra, 0, content); 
  }
  result = [...items];
  return result;
}

export { inject };
