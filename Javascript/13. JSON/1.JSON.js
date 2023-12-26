// JSON.stringify(): Phương thức này chuyển đổi một đối tượng JavaScript thành một chuỗi JSON.

const person = {
    name: 'John',
    age: 30,
    isStudent: false,
};

const jsonStr = JSON.stringify(person);
console.log(jsonStr);

// JSON.parse(): Phương thức này chuyển đổi một chuỗi JSON thành một đối tượng JavaScript.

const jsonStr1 = '{"name":"John","age":30,"isStudent":false}';
const person1 = JSON.parse(jsonStr1);
console.log(person1.name); // "John"

// Kiểm tra đối tượng có phải là JSON hay không: Bạn có thể sử dụng JSON.parse() trong một khối try...catch để kiểm tra xem một chuỗi có phải là JSON hợp lệ hay không.

const jsonStr2 = '{"name":"Tai Nguyen","age":30,"isStudent":false}';

try {
    const person2 = JSON.parse(jsonStr2);
    console.log(person2.name); // "John"
} catch (error) {
    console.error('Không phải là JSON hợp lệ:', error);
}

// Xử lý dữ liệu JSON từ máy chủ:
const apiUrl = 'https://example.com/api/data.json';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi tải dữ liệu');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Xử lý dữ liệu JSON tải về từ máy chủ
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

