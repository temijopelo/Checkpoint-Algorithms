function algoFunction(sentence) {
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  const vowels = "aeiouAEIOU";

  let previousChar = " ";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === ".") {
      break;
    }

    length++;

    if (vowels.includes(char)) {
      vowelCount++;
    }

    if (char === " " || char === ".") {
      if (previousChar !== " " && previousChar !== ".") {
        wordCount++;
      }
    }

    previousChar = char;
  }

  if (previousChar !== " " && previousChar !== ".") {
    wordCount++;
  }

  return {
    length: length,
    wordCount: wordCount,
    vowelCount: vowelCount,
  };
}

let sentence = "Hello World, It's Temi";
let result = algoFunction(sentence);

console.log("Length:", result.length);
console.log("Word Count:", result.wordCount);
console.log("Vowel count:", result.vowelCount);
