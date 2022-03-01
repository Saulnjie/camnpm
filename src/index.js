const JonFuncExample = (arr = words) => {
  let word = randomEntry(arr);
  return `Jon almost ${word} this weekend`;
};

export const randomEntry = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const words = [
  "drank",
  "drove",
  "died",
  "ate",
  "fell",
  "became",
  "broke",
  "blew",
];

console.warn("JonFuncExample >>>", JonFuncExample(words));

export default JonFuncExample;
