// Định nghĩa một interface cho một đối tượng Person với thuộc tính tùy chọn
interface Person {
    firstName: string;
    lastName?: string; // Thuộc tính lastName là tùy chọn
    age?: number; // Thuộc tính age là tùy chọn
  }
  
  // Khai báo một biến có kiểu là interface Person
  let person1: Person = {
    firstName: "John",
  };
  
  let person2: Person = {
    firstName: "Alice",
    lastName: "Smith",
  };
  
  let person3: Person = {
    firstName: "Bob",
    age: 30,
  };
  