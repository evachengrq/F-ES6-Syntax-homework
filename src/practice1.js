const parseData = (input) => {
    const {data, column} = input;
    const result = [];
    for (const person of data) {
      let entity = {};
      let index = 0;
      for (const key of column) {
        entity[key.name] = person[index];
        index++;
      }
      result.push(entity);
    }
  
    return result;
  }
  export { parseData };
