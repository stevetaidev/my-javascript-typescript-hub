// Function Declarations

/*
Function Declarations là cách thông thường và đơn giản nhất để tạo một hàm trong JavaScript.

Một Function Declaration bắt đầu với từ khoá function, sau đó là tên của hàm, danh sách các tham số trong dấu ngoặc đơn, và cuối cùng là mã thực thi của hàm.

Hàm được khai báo bằng Function Declaration có thể được gọi trước khi nó được định nghĩa trong mã, một tính năng được gọi là "hoisting."

*/

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  

greet("Tai Nguyen"); // Gọi hàm greet với tham số "Alice"
  
/*
Function Expressions:

Function Expressions là một cách khác để tạo hàm bằng cách gán hàm cho một biến hoặc một biểu thức.

Trong một Function Expression, bạn không cần phải đặt tên cho hàm nếu bạn không muốn.

Function Expressions thường được sử dụng để tạo hàm vô danh (anonymous functions) hoặc để gán hàm cho biến.
*/

const greet1 = function(name1) {
    console.log(`Hello, ${name1}!`);
  };
  
  greet("Bob"); // Gọi hàm greet với tham số "Bob"
  
// Hoặc bạn có thể tạo hàm vô danh bằng Function Expression và truyền nó trực tiếp vào một hàm khác hoặc biểu thức khác:

// Định nghĩa một hàm calculate nhận 3 tham số: a, b và operation
function calculate(a, b, operation) {
    // Gọi hàm operation với a và b, sau đó trả về kết quả
    return operation(a, b);
  }
  
  // Định nghĩa một hàm add nhận 2 tham số: x và y, và thực hiện phép cộng
  function add(x, y) {
    return x + y;
  }
  
  // Gọi hàm calculate với tham số 5, 3 và hàm add
  const result = calculate(5, 3, add);
  
  // In ra kết quả
  console.log(result); // Kết quả là 8 nhờ phép cộng 5 + 3
  