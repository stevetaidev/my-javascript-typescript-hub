type Person = {
    name: string;
    age: number;
    city: string;
};

type PersonWithoutCity = Omit<Person, "city">;

const personData: PersonWithoutCity = {
    name: "John",
    age: 30,
};

// Thuộc tính city đã bị loại bỏ
