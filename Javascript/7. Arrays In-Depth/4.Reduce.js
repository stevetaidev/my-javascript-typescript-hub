// cách sử dụng reduce() để tính tổng các số trong một mảng:
// Mảng chứa các số
const numbers = [1, 2, 3, 4, 5];

// Sử dụng phương thức reduce() để tính tổng các số trong mảng
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);



// Sử dụng reduce() để tính tổng giá trị của các đối tượng trong một mảng:
// Mảng chứa thông tin sản phẩm
const products = [
    { name: 'Áo', price: 25 },
    { name: 'Quần', price: 35 },
    { name: 'Giày', price: 60 },
    { name: 'Túi xách', price: 45 }
];

// Sử dụng phương thức reduce() để tính tổng giá trị của các sản phẩm
//Hàm xử lý trong reduce() nhận hai tham số: accumulator (giá trị tích lũy) và product 
//(đối tượng sản phẩm hiện tại trong mảng). Trong mỗi lần lặp, chúng ta cộng giá trị của product.price vào accumulator, và giá trị khởi tạo ban đầu là 0.

const totalPrice = products.reduce(function (accumulator, product) {
    return accumulator + product.price;
}, 0);

console.log(totalPrice); 
