// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

const squareArr = [];
arr.forEach((item) => {
  squareArr.push(item ** 2);
});
console.log(squareArr);

// arr.forEach(function squareArr(item, index) {
//   arr[index] = arr[index] ** 2;
// });
// console.log(arr);
