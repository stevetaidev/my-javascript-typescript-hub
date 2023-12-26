// Hàm generic (sử dụng T làm tham số kiểu)
function identity<T>(arg: T): T {
    return arg;
}

// Sử dụng hàm generic với kiểu dữ liệu cụ thể
let result1: number = identity<number>(5); // Kiểu dữ liệu số
let result2: string = identity<string>("Hello"); // Kiểu dữ liệu chuỗi

// TypeScript có thể suy luận kiểu dữ liệu tự động
let result3 = identity(10); // Kiểu dữ liệu tự động là số (number)
let result4 = identity("World"); // Kiểu dữ liệu tự động là chuỗi (string)

