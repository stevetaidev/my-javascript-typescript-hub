type Person = {
    name: string;
    age: number;
};

type ReadonlyPerson = Readonly<Person>;

const person: ReadonlyPerson = {
    name: "John",
    age: 30,
};

// Lỗi: Không thể gán giá trị mới cho thuộc tính trong ReadonlyPerson
person.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.
