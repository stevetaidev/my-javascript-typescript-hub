// Định nghĩa một kiểu Union với hai kiểu khác nhau
type Shape = Square | Circle;

interface Square {
    kind: "square";
    size: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

// Hàm kiểm tra kiểu dữ liệu sử dụng type guards
function isSquare(shape: Shape): shape is Square {
    return shape.kind === "square";
}

// Sử dụng type guards để kiểm tra và truy xuất thuộc tính cụ thể
function getArea(shape: Shape): number {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
}

const square: Square = { kind: "square", size: 5 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log(getArea(square)); // Output: 25 (Square)
console.log(getArea(circle)); // Output: 28.274333882308138 (Circle)
