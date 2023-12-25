// Khai báo một mảng
const colors = ['red', 'green', 'blue'];

// Sử dụng destructuring để trích xuất giá trị từ mảng
const [firstColor, secondColor, thirdColor] = colors;

// In giá trị đã trích xuất
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

const colors1 = ['red', 'green', 'blue'];

const [firstColor1, ...restColors] = colors1;

console.log(firstColor1);
console.log(restColors);
