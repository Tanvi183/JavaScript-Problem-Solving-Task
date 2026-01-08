const example = "programming";

const vowelCounting = (text) => {
  let count = 0;
  const vowels = "aeiou";

  for (const x of text) {
    if (vowels.includes(x.toLowerCase())) {
      count++;
    }
  }
  
  return count;
};

const vowelCount = vowelCounting(example);
console.log(vowelCount);
