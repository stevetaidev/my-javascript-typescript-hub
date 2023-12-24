let str = "Hello, World!";
console.log(str.length); // In ra 13 (độ dài của chuỗi)
// Truy cập vào ký tự đầu tiên (chỉ số 0)
console.log(str[0]); 

// Truy cập vào ký tự thứ 8 (chỉ số 7)
console.log(str[7]); 

// Truy cập vào ký tự cuối cùng (chỉ số length - 1)
console.log(str[str.length - 1]); 

console.log(str[20]); // In ra undefined (vì chỉ số 20 nằm ngoài phạm vi của chuỗi)
