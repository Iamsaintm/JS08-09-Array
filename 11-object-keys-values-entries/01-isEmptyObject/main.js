// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

function checkEmptyObj(obj) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ key: "value" })); // false
