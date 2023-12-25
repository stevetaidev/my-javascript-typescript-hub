// Shorthand Properties:

const firstName = "John";
const lastName = "Doe";
const age = 25;

// Sử dụng shorthand properties để tạo đối tượng person
const person = { firstName, lastName, age };

console.log(person); // In ra { firstName: 'John', lastName: 'Doe' }


// Sử dụng shorthand methods để định nghĩa đối tượng calculator
const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    }
};


// In ra kết quả
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3)); 
