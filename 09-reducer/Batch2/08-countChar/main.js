// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = "I live in Thailand";
// // expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
let names = str.toLowerCase().split("");
// let countStr = arr.reduce((acc, item) => {}, 0);

const initObj = {};

function reducerFn(acc, name) {
  if (!acc[name]) {
    acc[name] = 1;
  } else {
    acc[name]++;
  }
  return acc;
}

const result = names.reduce(reducerFn, initObj);

console.log(result);
