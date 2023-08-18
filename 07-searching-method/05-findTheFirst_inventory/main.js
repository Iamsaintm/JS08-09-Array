// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries

// ```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
// // expected result: { name: 'cherries', quantity: 5 }
// ```

let result = inventory.find((item) => {
  if (item.name == "cherries") return true;
});
console.log(result);
