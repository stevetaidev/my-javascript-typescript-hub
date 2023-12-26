// Lấy tham chiếu đến phần tử input và phần tử p theo ID
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

// Định nghĩa hàm xử lý sự kiện onblur
function handleBlur() {
    const enteredName = nameInput.value;

    if (enteredName.trim() === "") {
        message.textContent = "Vui lòng nhập tên của bạn!";
    } else {
        message.textContent = `Xin chào, ${enteredName}!`;
    }
}

// Thêm sự kiện onblur cho phần tử input
nameInput.addEventListener("blur", handleBlur);
