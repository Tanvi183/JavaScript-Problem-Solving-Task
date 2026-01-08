const example = "madam";
const example2 = "hello";

const isPalindrome = (x) => {
  const left = x.toLowerCase().replace(/[^a-z0-9]/g, "");

  const right = left.split("").reverse().join("");

  return left === right;
};

const textReverse = isPalindrome(example);
console.log(textReverse);
