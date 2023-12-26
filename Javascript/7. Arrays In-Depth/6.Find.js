// Mảng chứa danh sách người dùng
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
];

// Sử dụng phương thức find() để tìm người dùng có id là 3
const userWithId3 = users.find(function (user) {
    return user.id === 3;
});

console.log(userWithId3); 