// Hàm nhận một hàm làm đối số:

// Hàm nhận một hàm làm đối số và áp dụng nó cho từng phần tử trong mảng
function mapArray(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = mapArray(numbers, (x) => x * 2);

console.log(doubled);
// Trong ví dụ này, mapArray là một higher-order function
// vì nó nhận một hàm (ở đây là lambda function (x) => x * 2)
//và áp dụng nó cho từng phần tử trong mảng.

// 2. Hàm trả về một hàm:

// Hàm trả về một hàm khác
function multiplyBy(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));

// Trong ví dụ này, multiplyBy là một higher-order function
// vì nó trả về một hàm khác (hàm ẩn danh) dựa trên đối số factor.


