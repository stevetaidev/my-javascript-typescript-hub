// Định nghĩa một interface cho một đối tượng Person
interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  // Sử dụng interface để khai báo một biến có kiểu Person
  let person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  let person2: Person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
  };
  
  // Lỗi: Biến person3 không phù hợp với kiểu Person vì thiếu thuộc tính age
  let person3: Person = {
    firstName: "Bob",
    lastName: "Johnson",
  };
  