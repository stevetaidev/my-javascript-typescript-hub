// Lấy tham chiếu đến phần tử select và phần tử p theo ID
const colorSelect = document.getElementById("colorSelect");
const message = document.getElementById("message");

// Định nghĩa hàm xử lý sự kiện onchange
function handleChange() {
    const selectedColor = colorSelect.value;
    message.textContent = `Bạn đã chọn màu ${selectedColor}.`;
}

// Thêm sự kiện onchange cho phần tử select
colorSelect.addEventListener("change", handleChange);
