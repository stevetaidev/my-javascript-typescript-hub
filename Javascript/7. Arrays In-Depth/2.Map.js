// Mảng chứa các số
const numbers = [1, 2, 3, 4, 5];

// Sử dụng phương thức map() để tạo mảng mới chứa bình phương của từng số
const squaredNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(squaredNumbers); 
