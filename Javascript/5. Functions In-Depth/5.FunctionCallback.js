function fetchData(callback) {
    setTimeout(function () {
        const data = "Dữ liệu được tải từ máy chủ";
        callback(data); // Gọi callback với dữ liệu khi tải hoàn thành
    }, 2000); // Giả lập việc tải dữ liệu trong 2 giây
}

function processData(data) {
    console.log("Dữ liệu đã được xử lý: " + data);
}

fetchData(processData); // Truyền processData vào làm callback function
