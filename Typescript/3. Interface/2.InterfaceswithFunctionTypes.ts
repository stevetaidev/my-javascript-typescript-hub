// Định nghĩa một interface cho một kiểu hàm
interface Calculate {
    (x: number, y: number): number;
  }
  
  // Khai báo một biến có kiểu là interface Calculate
  let add: Calculate;
  
  // Gán hàm vào biến add
  add = function (x, y) {
    return x + y;
  };
  
  // Sử dụng biến add để tính tổng
  let sum = add(5, 3); // Kết quả là 8
  
  // Lỗi: Không thể gán hàm có kiểu khác với biến add
  add = function (a, b, c) {
    return a + b + c;
  };
  