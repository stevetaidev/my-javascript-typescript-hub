// Định nghĩa một đối tượng ban đầu
const person = {
    name: "Alice",
    age: 30,
    gender: "Female"
};

// Sử dụng Rest operator để tạo một bản sao và thay đổi hoặc ghi đè các thuộc tính
const updatedPerson = {
    ...person,
    age: 31,         // Ghi đè giá trị "age"
    nationality: "US",
    isMarried: true  // Thêm thuộc tính mới
};

console.log(updatedPerson);

