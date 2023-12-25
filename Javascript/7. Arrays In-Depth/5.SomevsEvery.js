// Mảng chứa các số
const numbers = [1, 2, 3, 4, 5];

// Kiểm tra xem có số nào lớn hơn 3 không
const hasNumberGreaterThan3 = numbers.some(function (number) {
    return number > 3;
});

console.log(hasNumberGreaterThan3);

// Kiểm tra xem tất cả số đều lớn hơn 3 không
const allNumbersGreaterThan3 = numbers.every(function (number) {
    return number > 3;
});

console.log(allNumbersGreaterThan3);
