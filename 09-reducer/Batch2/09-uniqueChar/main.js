// จงหา unique array element ของ alphabets

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// // expected result: ['a', 'b', 'c', 'e', 'd']

const result = alphabets.reduce((acc, char) => {
  let found = false;
  for (let c of acc) {
    if (c == char) found = true;
  }

  if (!found) acc.push(char);
  return acc;
}, []);

console.log(result);

// const set = new Set(alphabets);
// console.log(set);

// const newArr = new Array(...set);
// console.log(newArr);
