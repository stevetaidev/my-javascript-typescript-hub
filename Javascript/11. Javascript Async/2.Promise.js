// Hàm giả lập việc tải dữ liệu từ máy chủ sau 2 giây
//Chúng ta định nghĩa một hàm fetchData giả lập việc tải dữ liệu từ máy chủ sau 2 giây và trả về một Promise. 

function fetchData() {
    // Trong trường hợp ngẫu nhiên, Promise có thể được giải quyết (resolve) hoặc bị từ chối (reject).

    return new Promise((resolve, reject) => {
        // Set điều kiện để tạo ra Promise 
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve('Dữ liệu từ máy chủ đã được tải xong.');
            } else {
                reject('Lỗi: Không thể tải dữ liệu từ máy chủ.');
            }
        }, 2000);
    });
}

// Sử dụng Promise
fetchData()
    //Chúng ta gọi fetchData() và sau đó sử dụng .then() để đăng ký một hàm xử lý được gọi khi Promise được giải quyết thành công. 

    .then((result) => {
        console.log(result); // In kết quả sau khi hoàn thành
    })
    .catch((error) => {
        console.error(error); // Xử lý lỗi nếu có
    });


//Khi gọi fetchData(), chương trình không chờ đợi việc tải dữ liệu mà tiếp tục thực thi lệnh "Chương trình tiếp tục thực thi..." mà không bị chặn.
console.log('Chương trình tiếp tục thực thi...'); // Chương trình tiếp tục thực thi mà không chờ fetchData()

