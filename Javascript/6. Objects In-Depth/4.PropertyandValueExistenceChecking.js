// 1. Kiểm tra sự tồn tại của thuộc tính (property existence):

const person = {
    name: "Alice",
    age: 25
};

// Sử dụng "in" để kiểm tra sự tồn tại của thuộc tính
if ("name" in person) {
    console.log("Thuộc tính 'name' tồn tại trong đối tượng person.");
} else {
    console.log("Thuộc tính 'name' không tồn tại trong đối tượng person.");
}

if ("gender" in person) {
    console.log("Thuộc tính 'gender' tồn tại trong đối tượng person.");
} else {
    console.log("Thuộc tính 'gender' không tồn tại trong đối tượng person.");
}

// 2. Kiểm tra giá trị của thuộc tính(value existence):

const person1 = {
    name: "Watson",
    age: 30
};

// Kiểm tra xem giá trị của thuộc tính "age" có tồn tại và không null/undefined không
if (person1.age !== undefined && person1.age !== null) {
    console.log("Thuộc tính 'age' có giá trị và không phải là null hoặc undefined.");
} else {
    console.log("Thuộc tính 'age' không có giá trị hoặc là null hoặc undefined.");
}

// Kiểm tra xem giá trị của thuộc tính "gender" có tồn tại và không null/undefined không
if (person1.gender !== undefined && person1.gender !== null) {
    console.log("Thuộc tính 'gender' có giá trị và không phải là null hoặc undefined.");
} else {
    console.log("Thuộc tính 'gender' không có giá trị hoặc là null hoặc undefined.");
}
