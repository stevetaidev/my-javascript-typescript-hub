// Mảng chứa các số
const numbers = [10, 20, 30, 40, 50];

// Sử dụng phương thức filter() để tạo mảng mới chỉ chứa các số lớn hơn hoặc bằng 30
const filteredNumbers = numbers.filter(function (number) {
    return number >= 30;
});

console.log(filteredNumbers); 