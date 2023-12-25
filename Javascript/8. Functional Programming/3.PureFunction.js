// Hàm pure tính bình phương của một số
function square(x) {
    return x * x;
}

const result1 = square(4);
const result2 = square(4);

//Trong ví dụ này, hàm square là pure function vì nó luôn trả về cùng một kết quả cho cùng một đầu vào và không gây tác động phụ.



// Hàm không pure sử dụng biến toàn cục và thay đổi nó
let total = 0;

function addToTotal(x) {
    total += x;
}

addToTotal(5);
addToTotal(3);

// Trong ví dụ này, hàm addToTotal không pure vì nó thay đổi biến toàn cục total và không trả về kết quả. Hàm này có tác động phụ lên trạng thái bên ngoài hàm.


