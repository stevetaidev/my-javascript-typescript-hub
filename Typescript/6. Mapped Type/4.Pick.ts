type Person = {
    name: string;
    age: number;
    city: string;
};

type PersonNameAndAge = Pick<Person, "name" | "age">;

const personData: PersonNameAndAge = {
    name: "John",
    age: 30,
};

// Chỉ có thuộc tính name và age được chấp nhận
