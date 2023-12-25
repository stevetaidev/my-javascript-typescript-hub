// 1. Thêm mới thuộc tính vào đối tượng:

const person = {
    name: "Alice",
    age: 25
};

// Thêm thuộc tính "gender" vào đối tượng
person.gender = "Female";

console.log(person);


// 2. Cập nhật giá trị của thuộc tính đã tồn tại:

const person1 = {
    name: "Alice",
    age: 25
};

// Cập nhật giá trị của thuộc tính "age"
person1.age = 26;

console.log(person1);

// 3. Thêm hoặc cập nhật thuộc tính dựa trên điều kiện:

const person3 = {
    name: "Alice",
    age: 30
};

const newAge = 35;

// Nếu tuổi mới (newAge) lớn hơn tuổi hiện tại, thì cập nhật thuộc tính "age"
if (newAge > person3.age) {
    person3.age = newAge;
}

console.log(person3);
// Output (nếu newAge > age): { name: 'Alice', age: 26 }
