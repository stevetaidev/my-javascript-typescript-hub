let value = 42;

if (typeof value === "number") {
  console.log("Giá trị là một số.");
} else {
  console.log("Giá trị không phải là số.");
}



//Sử dụng hàm Number.isNaN() để kiểm tra xem giá trị có phải là NaN hay không.
let value1 = NaN;

if (Number.isNaN(value1)) {
  console.log("Giá trị là NaN.");
} else {
  console.log("Giá trị không phải là NaN.");
}
