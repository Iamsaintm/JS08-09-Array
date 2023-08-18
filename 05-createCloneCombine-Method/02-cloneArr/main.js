// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว
let arr = [1, 2, 3, 4];
const clone = (arr) => {
  return arr.slice();
};
console.log(clone(arr));
