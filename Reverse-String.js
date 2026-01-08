const example = "hello";

const reverseString = (x) => {
  const result = x.split("").reverse().join("");
  
  return result;
};

const textReverse = reverseString(example);
console.log(textReverse);
