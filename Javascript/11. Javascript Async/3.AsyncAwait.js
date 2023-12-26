// Hàm giả lập việc tải dữ liệu từ máy chủ sau 2 giây
function fetchData() {
    return new Promise((resolve, reject) => {
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

// Hàm bất đồng bộ sử dụng async/await
async function main() {
    console.log('Bắt đầu tải dữ liệu...');

    try {
        const result = await fetchData(); // Chờ cho đến khi fetchData() hoàn thành
        console.log(result); // In kết quả sau khi hoàn thành
    } catch (error) {
        console.error(error); // Xử lý lỗi nếu có
    }

    console.log('Hoàn thành tải dữ liệu.');
}

// Gọi hàm bất đồng bộ
main();

console.log('Chương trình tiếp tục thực thi...'); // Chương trình tiếp tục thực thi mà không chờ fetchData()
