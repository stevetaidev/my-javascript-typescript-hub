const products = {
    apple: { name: "Apple", price: 1 },
    banana: { name: "Banana", price: 0.5 },
    orange: { name: "Orange", price: 0.75 },
};

// Sử dụng Object.keys và forEach để lặp qua và in ra tên và giá của từng sản phẩm
Object.keys(products).forEach((productKey) => {
    const product = products[productKey];
    console.log(`${product.name}: $${product.price}`);
});
console.log("--")
// Sử dụng Object.keys và map để tạo một mảng mới chứa các giá sản phẩm
const productPrices = Object.keys(products).map((productKey) => {
    return products[productKey].price;
});

console.log("Prices:", productPrices); // In ra mảng giá sản phẩm
console.log("--")

// Sử dụng Object.keys và filter để lọc ra các sản phẩm có giá nhỏ hơn $1
const cheapProducts = Object.keys(products).filter((productKey) => {
    return products[productKey].price < 1;
});

console.log("Cheap Products:", cheapProducts); // In ra danh sách sản phẩm giá rẻ

// Sử dụng Object.keys và reduce để tính tổng giá của tất cả sản phẩm
const totalPrice = Object.keys(products).reduce((total, productKey) => {
    return total + products[productKey].price;
}, 0);

console.log("Total Price:", totalPrice); // In ra tổng giá của tất cả sản phẩm
