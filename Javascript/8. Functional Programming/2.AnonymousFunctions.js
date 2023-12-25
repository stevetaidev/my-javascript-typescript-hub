// Sử dụng function keyword:

// Anonymous function sử dụng `function` keyword
const greet = function (name) {
    console.log(`Hello, ${name}!`);
};

greet("Alice");

// Sử dụng lambda expression (arrow function):
// Anonymous function sử dụng lambda expression
const add = (x, y) => x + y;

console.log(add(3, 5));



// Truyền hàm vô danh vào một hàm khác
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (x) {
    return x * x;
});

console.log(squaredNumbers); 
