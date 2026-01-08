const example = [1, 2, 5, 3, 4, 12, 20, 25];

const evenArray = (array) => {
  let even = [];

  for (const num of array) {
    if (num % 2 === 0) { 
      even.push(num);
    }
  }

  return even;
};

const evenNumber = evenArray(example);
console.log(evenNumber);