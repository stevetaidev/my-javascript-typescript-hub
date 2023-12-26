type Person = {
    name: string;
    age: number;
};

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
    name: "John",
};

// Các thuộc tính khác có thể bị thiếu
