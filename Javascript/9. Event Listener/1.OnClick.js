// Lấy phần tử button và phần tử p theo ID
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Định nghĩa hàm sẽ được thực hiện khi người dùng nhấp vào nút
function changeMessage() {
    message.textContent = "Xin chào JavaScript!";
}

// Gán hàm changeMessage cho sự kiện onclick của nút
button.onclick = changeMessage;
