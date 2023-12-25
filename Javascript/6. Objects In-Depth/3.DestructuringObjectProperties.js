// Định nghĩa một đối tượng person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Sử dụng destructuring để trích xuất các thuộc tính từ đối tượng person
const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

// Destructuring với biến khác tên
const person1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 25
};

// Destructuring và đổi tên biến
const { firstName: fName, lastName: lName, age: personAge } = person1;

console.log(fName);       // In ra "Alice"
console.log(lName);       // In ra "Johnson"
console.log(personAge);   // In ra 25
