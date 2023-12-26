// URL của tài nguyên JSON bạn muốn tải
const apiUrl = 'https://example.com/api/data.json';

// Sử dụng Fetch API để tải dữ liệu từ URL
fetch(apiUrl)
    .then(response => {
        // Kiểm tra trạng thái của phản hồi HTTP
        if (!response.ok) {
            throw new Error('Lỗi khi tải dữ liệu');
        }
        // Chuyển đổi phản hồi thành đối tượng JSON
        return response.json();
    })
    .then(data => {
        // Xử lý dữ liệu đã tải
        console.log(data);
        // Hiển thị dữ liệu trên trang web (ví dụ: bằng cách thêm nó vào một phần tử HTML)
        const resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Lỗi:', error);
    });
