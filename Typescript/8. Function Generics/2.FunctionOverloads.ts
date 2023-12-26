// Khai báo nhiều biểu diễn (overloads) cho hàm greet
function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else if (typeof value === "number") {
        return `You are ${value} years old.`;
    } else {
        throw new Error("Invalid argument type.");
    }
}

// Sử dụng hàm greet với các kiểu đối số khác nhau
const message1 = greet("Alice"); // Biểu diễn 1: string
console.log(message1); // Output: "Hello, Alice!"

const message2 = greet(25); // Biểu diễn 2: number
console.log(message2); // Output: "You are 25 years old."

// Lỗi: Kiểu đối số không phù hợp
const message3 = greet(true); // Lỗi: Argument of type 'true' is not assignable to parameter of type 'string | number'.
