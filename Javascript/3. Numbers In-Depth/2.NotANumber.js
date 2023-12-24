let result = "Hello" / 2; // Kết quả là NaN vì không thể chia một chuỗi cho một số
console.log(result); 

let num = parseInt("abc"); // num sẽ có giá trị NaN vì chuỗi "abc" không thể chuyển đổi thành số.
console.log(num); 

// Sử dụng isNaN() là một cách để kiểm tra xem một giá trị có phải là NaN hay không. Ví dụ:

let value = "abc";
if (isNaN(value)) {
  console.log("Giá trị không phải là số hợp lệ");
} else {
  console.log("Giá trị là số hợp lệ");
}
