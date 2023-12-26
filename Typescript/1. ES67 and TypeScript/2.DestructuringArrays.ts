// Khai báo một mảng
const numbers: number[] = [1, 2, 3, 4, 5];

// Destructuring mảng
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
