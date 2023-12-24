// Định nghĩa một hàm có hai tham số, name và age,
// và mặc định age là 30 nếu không có giá trị nào được truyền vào.
function greet(name, age = 30) {
    console.log(`Xin chào, ${name}! Bạn ${age} tuổi.`);
  }
  
  // Gọi hàm greet với giá trị cho name và age
  greet("Alice", 45); // Xin chào, Alice! Bạn 25 tuổi.
  greet("Bob"); // Xin chào, Bob! Bạn 30 tuổi, vì age được đặt mặc định là 30
  