type Fruit = "apple" | "banana" | "cherry";
type FruitInventory = Record<Fruit, number>;

const inventory: FruitInventory = {
    apple: 10,
    banana: 5,
    cherry: 15,
};

// Kiểu dữ liệu của inventory: { apple: number; banana: number; cherry: number; }
