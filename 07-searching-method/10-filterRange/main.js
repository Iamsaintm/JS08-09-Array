// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

arr = [1, 2, 3, 4, 5];
function filterRange(arr, a, b) {
  newArr = arr.filter((item) => item > arr[a] && item < arr[b]);
  return newArr;
}

console.log(filterRange(arr, 1, 4));
