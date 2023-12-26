type PartialPerson = {
    name?: string;
    age?: number;
};

type RequiredPerson = Required<PartialPerson>;

const requiredPerson: RequiredPerson = {
    name: "John",
    age: 30,
};

// Thuộc tính name và age là bắt buộc
