const peoples = ["sana", "ullah", "tanvi", "hridoy", "moni", "hridoy", "ullah"];
const numbers = [2, 5, 6, 1, 8, 9, 2, 5];

const noDuplicate = (items) => {
  const unique = [];

  for (const item of items) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }

  return unique;
};

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
