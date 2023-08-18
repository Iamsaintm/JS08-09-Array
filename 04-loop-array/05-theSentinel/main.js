// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

const number = [];
let num = "";
do {
  let num = prompt("Number") || "";
  isEmpty = num.trim() === "";
  isNan = isNaN(num);
  if (!(isEmpty || isNan)) {
    number.push(num);
  }
} while (!(isEmpty || isNan));

let sum = 0;
number.forEach((item) => {
  sum += +item;
});

console.log(sum);
