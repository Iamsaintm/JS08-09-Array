// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

let n = "background-color";
function camelCase(string) {
  stringArray = string.split("-");
  result = stringArray.reduce((acc, item) => {
    capletter = item[0].toUpperCase();
    subArray = item.split("");
    subArray.splice(0, 1, capletter);
    newStr = subArray.join("");
    acc += newStr;
    return acc;
  }, "");
  return result;
}
console.log(camelCase(n));
