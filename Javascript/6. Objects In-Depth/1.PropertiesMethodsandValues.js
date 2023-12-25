// Định nghĩa một đối tượng "car" với các thuộc tính và phương thức
const car = {
    // Thuộc tính (properties)
    brand: "Toyota",
    model: "Camry",
    year: 2020,

    // Phương thức (method)
    start: function () {
        console.log("Khởi động xe");
    },

    stop: function () {
        console.log("Tắt máy xe");
    }
};

// Truy cập và in ra các thuộc tính của đối tượng
console.log("Hãng xe: " + car.brand);
console.log("Mẫu xe: " + car.model);
console.log("Năm sản xuất: " + car.year);

// Gọi các phương thức của đối tượng
car.start();
car.stop(); 