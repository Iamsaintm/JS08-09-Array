// const array = [1, 2, 30, 400];
// const newArr = array.map((x) => x * 2);
// // result: [2, 4, 60, 800]

// const array = [1, 2, 3, 4];
// const newArr = array.map((x) => `${x}`);
// // result: ["1", "2", "3", "4"]

// const array = [1, "1", 2, {}];
// const newArr = array.map((x) => typeof x);
// // result: ["number", "string", "number", "object"]

// const array = ["apple", "banana", "orange"];
// const newArr = array.map((x) => x.toUpperCase());
// // result: ["APPLE", "BANANA", "ORANGE"]

// const array = [1, 3, 4, 5, 6, 7, 8];
// const newArr = array.map((x) => (x % 2 == 0 ? "even" : "odd"));
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// const array = [1, -3, 2, 8, -4, 5];
// const newArr = array.map((x) => (x > 0 ? x : (x = -x)));
// // result: [1, 3, 2, 8, 4, 5]

// const array = [100, 200.25, 300.84, 400.3];
// const newArr = array.map((x) => String(x.toFixed(2)));
// // result: ["100.00", "200.25", "300.84", "400.30"]

// const array = [0, 5, 10, 7, 6, 5, 0];
// const month = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const newArr = array.map((x) => month[x]);
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// const array = [1, 16, 81, 256, 625, 1296];
// const newArr = array.map((x) => x ** (1 / 4));
// // result: [1, 2, 3, 4, 5, 6]

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const newArr = array.map((x) => x.name);
// // result: ["apple", "banana", "watermelon"]

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const newArr = array.map((x) => x.age);
// // result: [14, 18, 32]

// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// const newArr = array.map((x) => x.name + " " + x.surname);
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// const newArr = array.map((x) => {
//   x.age = 2021 - x.birth.slice(0, 4);
//   return x;
// });
// ได้ทั้ง 2 วิธี
//   Object.assign(x, { [`age`]: 2021 - x.birth.slice(0, 4) })
// );

// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const newArr = array.map(function (obj) {
  const day = obj.birth.slice(-2);
  const monthIndex = obj.birth.slice(-5, -3) - 1;
  const year = obj.birth.slice(0, 4);
  const resultString = `<tr> <td>${obj.name}</td> <td>${day} ${months[
    monthIndex
  ].toLowerCase()} ${year}</td> </tr>`;
  return resultString;
});

// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
