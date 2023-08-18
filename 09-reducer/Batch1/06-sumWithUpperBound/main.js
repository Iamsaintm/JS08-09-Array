// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

let str = "31 45 12 67 34 86 23 37 19 41";

let a = str.split(" ");

let result = a.reduce((acc, item) => {
  if (item < 40) {
    acc = acc + +item;
  }
  return acc;
}, 0);
console.log(result);
