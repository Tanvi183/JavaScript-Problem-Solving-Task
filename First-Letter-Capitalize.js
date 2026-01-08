const example = "hello world";

const wordCapitalize = (text) => {
  let words = text.split(" ");
  let result = [];

  for (const word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
};

const result = wordCapitalize(example);
console.log(result);
