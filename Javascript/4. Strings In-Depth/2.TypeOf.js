let value = "Hello, World!";

if (typeof value === "string") {
  console.log("Giá trị là một chuỗi.");
} else {
  console.log("Giá trị không phải là chuỗi.");
}


// Sử dụng hàm instanceof để kiểm tra xem giá trị có phải là một đối tượng chuỗi (String) hoặc một chuỗi (primitive string) không.

let value1 = "Hello, World!";

if (value1 instanceof String) {
  console.log("Giá trị là một đối tượng chuỗi.");
} else if (typeof value1 === "string") {
  console.log("Giá trị là một chuỗi nguyên thủy.");
} else {
  console.log("Giá trị không phải là chuỗi.");
}
