// จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const initObj = {};

function reducerFn(acc, name) {
  // acc === {"Jack"}
  // - ยังไม่มีชื่อใน object => เพื่อชื่อเป็น key และ value เป็น 1
  // - มีชื่อใน object อยู่แล้ว => update value เพิ่มขึ้น 1
  // acc["Jack"] === acc[name]
  if (!acc[name]) {
    acc[name] = 1;
  } else {
    acc[name]++;
  }
  return acc;
}

const result = names.reduce(reducerFn, initObj);

console.log(result);
