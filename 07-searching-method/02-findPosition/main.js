// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

// ```js
const alphabets = ["a", "b", "a", "c", "a", "d"];
// // expexted result: [0, 2, 4]
// ```

const resultArr = [];
for (let index in alphabets) {
  if (alphabets[index] === "a") resultArr.push(+index);
}

console.log(resultArr);
