// Định nghĩa một lớp (class) cơ sở (base class)
class Animal {
    // Thuộc tính (property) của lớp cơ sở
    name: string;
  
    // Constructor của lớp cơ sở
    constructor(name: string) {
      this.name = name;
    }
  
    // Phương thức (method) của lớp cơ sở
    makeSound() {
      console.log(`${this.name} is making a sound.`);
    }
  }
  
  // Định nghĩa lớp (class) dẫn xuất (derived class) từ lớp cơ sở
  class Dog extends Animal {
    // Thuộc tính của lớp dẫn xuất
    breed: string;
  
    // Constructor của lớp dẫn xuất
    constructor(name: string, breed: string) {
      super(name); // Gọi constructor của lớp cơ sở
      this.breed = breed;
    }
  
    // Phương thức của lớp dẫn xuất
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Tạo đối tượng từ lớp cơ sở
  const cat = new Animal("Whiskers");
  cat.makeSound(); // Output: "Whiskers is making a sound."
  
  // Tạo đối tượng từ lớp dẫn xuất
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.makeSound(); // Output: "Buddy is making a sound."
  dog.bark(); // Output: "Buddy is barking."
  