console.log("learn array");

// ## 1. Array Literal
// element : สมาชิก
// const friends = ["Money", "Non", "Peakpoon", "Fon"];
// console.log(friends);

// Array Constructor
// const height = new Array(150, 160, 175);
// console.log(height);

// ## 2. Access, Modify, Add, Delete
// Bracket Notation with Index

// Access
// console.log(friends[0]);
// console.log(friends[-1]); // undefined
// console.log(friends[10]); // undefined

// Update
// friends[0] = "Golden";
// console.log(friends);

// friends[1] = "Michael";
// console.log(friends);

// ถ้าพยายามอัพเดตใน index ที่ไม่มีอยู่จริง === add
// friends[-1] = "Pavit";
// console.log(friends);
// console.log(friends[-1]);

// add
// friends[4] = "Git";
// console.log(friends);

// delete
// delete friends[2];
// console.log(friends);
// console.log(friends[2]);

// ## 3. basic Property and Method of Array

//  <arr>.length
// console.log(friends.length);

// friends[5] = "mix";
// console.log(friends);
// friends[friends.length] = "Mix"; // ความยาว index จะเท่ากับความยาว index ถัดไป
// console.log(friends);

// for (let i = 0; i < friends.length; i++) {
//   // 0,1,2,3,4,5 (length = 6)
//   console.log(i, friends[i]);
// }

// Method CRUD element

const animals = ["Spider", "Cat", "Elephant"];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่นแปลงค่าได้

// Method Push ทำให้ Array Mutate ไหม ? Yes (Array ยาวขึ้น)
// Method Push return อะไรกลับมา => ค่าความยาวของ Array (Array.length)
let r = animals.push("Dog");
console.log(animals);
// console.log(r); // 4

// push ทำงานได้ดีกว่า unshift เพราะ push ไปต่อท้าย แต่ unshift ต้องไปจัดเรียงลำดับ Array ใหม่ทั้งหมด

let s = animals.unshift("Snake", "Bird");
// console.log(animals);
// console.log(s); // 6

let t = animals.pop();
// console.log(animals);
// console.log(t); // ค่าที่ถูกเอาออกไป => Dog

// const = CONSTANT (mutable ?)
// constant = can't reassign
// constant = same ADDRESS

// ## 4. Loop

// 4A. for loop
// Imperative กำหนด i เอง
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// 4B. for ...in (มอง array เป็น object ประเภทหนนึ่งได้)

/*
<key>:<value> => <index>:<value>
const arr ={
    0 : "Bird",
    1 : "Cat",
    2 : "Dog"
}
*/
// ไม่ต้องกำหนด i เอง
// for (let index in animals) {
// // 1st : index = 1
// // 2nd : index = 2
// // 3rd : index = 3
// // 4th : index = 4
// // 5th : index = 5
//   console.log(index, animals[index]);
// }

// 4C. for ...of
// for (let element of animals) {
//   // 1st : element = "Snake"
//   // 2nd : element = "Bird"
//   // 3rd : element = "Spider"
//   // 4th : element = "Cat"
//   // 5th : element = "Elephant"
//   console.log(element);
// }

// Aside Topic : Higher Order Function

// Main FN
// Cook : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1,fn2,fn3 : Callback

// fn1,fn2,fn3 จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น
// fn1,fn2,fn3 (ถูกเรียกทีหลัง : callback)

// function cook(fn1, fn2, fn3) {
//   fn1();
//   fn2();
//   fn3();
// }

// // Sub FN
// function step1() {
//   console.log("1");
// }

// function step2() {
//   console.log("2");
// }

// function step3() {
//   console.log("3");
// }

// call
// cook(step1, step2, step3);

// #####
// function add(x, y) {
//   return x + y;
// }
// console.log(add(5, 6));

// function Expression : FN as a value
// const a = console.log;
// const b = alert;
// a("Hi");
// b("Hello");

// สร้าง Function รับ parameter เป็น function

// function addAndShow(x, y, showFn) {
//   let result = x + y;
//   // call ShowFn
//   showFn(`result is : ${result}`);
//   return result;
// }

// function show(result) {
//   console.log(result);
//   //   console.log("Magic Word");
// }

// addAndShow(5, 10, show);
// console.log(addAndShow(5, 6, show));

// ## 4D. for ...each
// SYNTAX : <array>.forEach(FN)
// array == Caller
// Higher order FN == forEach (รับพารามิเตอร์เป็น FN)
const items = ["Football", "Bag", "Dish"];

// Callback ถูกเรียกใช้ตามจำนวนสมาชิกใน array

// const myFunc = function () {
//   console.log("Hi");
// };

// ค่า item คือค่าของสมาชิกแต่ละตัว
// function iterateFn(item) {
//   console.log(item);
// }

// const iterateFn = (item) => console.log(item);
// const iterateFn = (element) => console.log(element);
// const iterateFn = (a, b, c) => console.log(a, b, c);
const iterateFn = (item, index, array) => console.log(index, item);

// items.forEach(iterateFn);
// 1st Loop : ("Football",0,items) => console.log("Football")
// 2nd Loop : ("Bag",1,items) => console.log("Bag")
// 3rd Loop : ("Dish",2,items) => console.log("Dish")

items.forEach((item, index, arry) => {
  console.log(`At ${index}, element = ${item}`);
});
