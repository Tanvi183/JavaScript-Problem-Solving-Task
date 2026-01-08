const number = [15, 1, 19, 23];

const findMax = (num) => {
  const maxNumber = Math.max(...num);
  return maxNumber;
};

const result = findMax(number);
console.log(result);
