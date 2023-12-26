const person = {
    name: "John",
    age: 30,
};

type PersonType = typeof person; // Đây là kiểu của thành phần person

const john: PersonType = {
    name: "John",
    age: 30,
};

// Hoặc bạn có thể trích xuất kiểu của một thành phần của đối tượng
type AgeType = typeof person.age;

const johnAge: AgeType = 30;
