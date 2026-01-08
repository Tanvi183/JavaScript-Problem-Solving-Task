const example = [1, 2, 5, 3, 4];

const sumArray = (array) => {
  let sum = 0;

  for (const num of array) {
    sum += num;
  }

  return sum;
};
const total = sumArray(example);

console.log(total);
