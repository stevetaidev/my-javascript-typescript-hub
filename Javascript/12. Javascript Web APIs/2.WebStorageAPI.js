// Lưu trữ dữ liệu trong LocalStorage:

// Lưu trữ một chuỗi trong LocalStorage
localStorage.setItem('username', 'john_doe');

// Lưu trữ một số nguyên
localStorage.setItem('userAge', 30);

// Lưu trữ một mảng JSON
const favoriteColors = ['red', 'green', 'blue'];
localStorage.setItem('colors', JSON.stringify(favoriteColors));

// Truy xuất dữ liệu từ LocalStorage:

// Lấy dữ liệu từ LocalStorage
const username = localStorage.getItem('username');
const userAge = localStorage.getItem('userAge');
const colors = JSON.parse(localStorage.getItem('colors'));

console.log(username);
console.log(userAge);
console.log(colors);

// Xóa dữ liệu từ LocalStorage:

// Xóa một mục từ LocalStorage
localStorage.removeItem('userAge');

// Xóa toàn bộ dữ liệu trong LocalStorage
localStorage.clear();

