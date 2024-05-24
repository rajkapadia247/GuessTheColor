const colorGenerator = () => {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
};

const optionsGenerator = (count: number) => {
  let options = [];
  for (let i = 0; i < count; i++) {
    options.push(colorGenerator());
  }
  return options;
};

export const optionsAndAnswerGenerator = (count: number = 3) => {
  return {
    options: optionsGenerator(count),
    answer: Math.floor(Math.random() * count),
  };
};
