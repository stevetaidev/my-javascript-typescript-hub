// Định nghĩa một đối tượng có cấu trúc lồng nhau
const person = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA"
    }
};

// Sử dụng nested spread operator để sao chép và kết hợp đối tượng lồng nhau
const updatedPerson = {
    ...person,
    address: {
        ...person.address,
        state: "NY"
    }
};

console.log(updatedPerson);

