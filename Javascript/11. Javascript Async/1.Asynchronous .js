// Tạo một đoạn mã để gửi yêu cầu Ajax bất đồng bộ
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true); // Đặt tham số true để làm cho nó bất đồng bộ
xhr.send();

// Khi yêu cầu được gửi đi, chúng ta có thể đăng ký một hàm xử lý để xử lý kết quả khi nó trả về
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Khi yêu cầu hoàn thành và trả về kết quả thành công (status code 200)
        const responseData = JSON.parse(xhr.responseText);
        console.log('Dữ liệu từ máy chủ:', responseData);

        // Bây giờ, chúng ta có thể xử lý dữ liệu và cập nhật giao diện người dùng mà không chặn chương trình
    }
};

// Mã JavaScript tiếp tục thực thi sau khi yêu cầu Ajax đã được gửi đi, không cần phải chờ đợi kết thúc
console.log('Chương trình tiếp tục thực thi...');
