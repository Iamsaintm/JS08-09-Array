// จงหาค่ามากสุดและน้อยสุดใน arr

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
let min = arr.reduce((acc, item) => {
  if (acc > item) {
    acc = item;
  }
  return acc;
});
let max = arr.reduce((acc, item) => {
  if (acc < item) {
    acc = item;
  }
  return acc;
});
console.log(min);
console.log(max);
