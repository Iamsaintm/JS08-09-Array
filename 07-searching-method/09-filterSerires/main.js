// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// ```js
// const array = [9, 17, 23, 5];
// const newArr = array.filter((item) => item > 10);
// // ค่าที่มากกว่า 10

// const array = [1, 2, 3, 4];
// const newArr = array.filter((item) => item % 2 !== 0);
// // ค่าที่เป็นเลขคี่

// const array = [1, "1", 2, {}];
// const newArr = array.filter((item) => typeof item == "number");
// // ค่าที่ประเภทข้อมูลเป็น Number

// const array = ["apple", "banana", "orange", "pineapple", "watermeon"];
// const newArr = array.filter((item) => item.length > 6);
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว

// const array = [1, -3, 2, 8, -4, 5];
// const newArr = array.filter((item) => item > 0);
// // ค่าที่เป็นเลขบวก

// const array = [1, 3, 4, 5, 6, 7, 8];
// const newArr = array.filter((item) => item % 3 === 0);
// // ค่าที่หาร 3 ลงตัว

// const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// const newArr = array.filter((item) => item.slice(0, 1) == "E");
// // ค่าที่ขึ้นต้นด้วยตัว E

// const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// const newArr = array.filter((item) => item == item.toUpperCase());
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

// const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// const newArr = array.filter((item) => item.toLowerCase().includes("buri"));
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];
// const newArr = array.filter((item) => item.age >= 18);
// // อายุไม่น้อยกว่า 18

// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];
// Deleted by Array.filter
// const newArr = array.filter((item) => item.id != 4);
// // id ไม่เท่ากับ 4

// const array = [
//   { name: "John", birth: "2001-07-31" },
//   { name: "Jack", birth: "1990-06-24" },
//   { name: "Jim", birth: "1984-12-13" },
//   { name: "Jeff", birth: "1996-02-05" },
//   { name: "Joe", birth: "2002-06-13" },
// ];
// const newArr = array.filter((item) => item.birth.slice(5, 7) == "06");
// // เกิดเดือน 6

// ```
