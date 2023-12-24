function createCounter() {
    let count = 0; // Biến count được đóng gói bởi hàm createCounter

    function increment() {
        count++; // Hàm increment có thể truy cập và thay đổi biến count từ bên ngoài
        console.log(count);
    }

    return increment; // Trả về hàm increment
}

const counter1 = createCounter(); // Tạo một bộ đếm mới
const counter2 = createCounter(); // Tạo một bộ đếm khác

counter1(); // In ra 1
counter1(); // In ra 2

counter2(); // In ra 1 (không ảnh hưởng đến bộ đếm của counter1)
