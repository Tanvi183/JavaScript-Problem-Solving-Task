const number = 6;

const factorial = (number) => {
  if (number < 0) {
    return;
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

const reslut = factorial(number);
console.log(reslut);
