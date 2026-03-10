const users = [ 
{ id: 1, name: "John", age: 25, email: "john@example.com", isActive: true, tags: ["developer", 
"javascript"] }, 
{ id: 2, name: "Jane", age: 32, email: "jane@example.com", isActive: false, tags: ["designer", 
"css"] }, 
{ id: 3, name:  "Bob", age: 41, email: "bob@example.com", isActive: true, tags: ["developer", 
"python"] }, 
{ id: 4, name: "Mary", age: 28, email: "mary@example.com", isActive: true, tags: ["manager", 
"leadership"] }, 
{ id: 5, name: "Alex", age: 19, email: "alex@example.com", isActive: false, tags: ["intern", 
"student"] } 
];
// Qno:1  Write a function that returns all active users
//       (using filter())
function getActiveUser(){
    return users
    .filter(user=>user.isActive)
    .map(user=>user.name)
}
console.log(getActiveUser());

// Qno:2 Write a function that returns an array containing just the names of all users
//      (using map())
function getUserNames(){
    return users
    .map(use=>use.name)
}
console.log(getUserNames());

//  Qno:3 Write a function that finds and returns a user by their ID
//        (using find())
function  findUserById(id){
    return users
    .find(userss=>userss.id===id)
}
console.log(findUserById(3));

// Qno:4  Write a function that checks if all users are active
//        (using some/every)
function areAllUsersActive(){
    return users
    .every(us=>us.isActive)
    // .some(us=>us.isActive)
}
console.log(areAllUsersActive());

// Qno:5  Write a function that calculates the average age of all users 
//        (using reduce())
function getAverageAge(){
    let result=users.reduce((total,val)=>total+val.age,0)
    return result/users.length;
}
console.log(getAverageAge());

// Qno:6 Write a function that returns users who are active and older than a specified age 
function getActiveUsersOlderThan(age){
    return users
    .filter(usr=>usr.isActive & usr.age>age)
    .map(user=>user.name)
}
console.log(getActiveUsersOlderThan(30));

const products = [ 
{ id: 101, name: "Laptop", price: 999.99, category: "electronics", stock: 15 }, 
{ id: 102, name: "Smartphone", price: 699.99, category: "electronics", stock: 25 }, 
{ id: 103, name: "Book", price: 19.99, category: "books", stock: 50 }, 
{ id: 104, name: "Headphones", price: 149.99, category: "electronics", stock: 10 }, 
{ id: 105, name: "T-shirt", price: 29.99, category: "clothing", stock: 100 }, 
{ id: 106, name: "Shoes", price: 79.99, category: "clothing", stock: 30 } 
];
// Qno:7 Write a function that returns all products sorted by price (low to high) 
    //    Using spread operator
function sortProductsByPrice(){
    return [...products].sort((a,b)=>a.price-b.price)
}
console.log(sortProductsByPrice());

// Qno:8 rite a function that transforms the users array into an object where the keys are the user IDs 

function transformUsersToObject(){
    return users.reduce((acc, item) => {
    acc[item.id] = item;   // use id as the key
    return acc;
  }, {});
}
console.log(transformUsersToObject());

// Qno:9 Write a function that counts how many products are in each category
function countProductsByCategory() {
    return products.reduce((ac,product)=>{ac[product.category]=(ac[product.category] || 0)+1; 
        return ac},{})
}
console.log(countProductsByCategory());

// Qno:10  Write a function that returns the emails of active users sorted by age (youngest first) 
function getActiveUserEmailsSortedByAge(){
    return users
    .filter(user=>user.isActive)
    .toSorted((a,b)=>a.age-b.age)
    .map(user=>user.email)
}
console.log(getActiveUserEmailsSortedByAge());

// Qno:11 Write a function that returns all users who have "developer" in their tags
function getDevelopers(){
    return users
    .filter(user=>user.tags.includes("developer"))
}
console.log(getDevelopers());

const orders = [ 
{ id: 1001, userId: 1, products: [101, 104], totalAmount: 1149.98, date: "2023-01-15" }, 
{ id: 1002, userId: 3, products: [102], totalAmount: 699.99, date: "2023-01-18" }, 
{ id: 1003, userId: 2, products: [103, 105], totalAmount: 49.98, date: "2023-02-02" }, 
{ id: 1004, userId: 4, products: [101, 106], totalAmount: 1079.98, date: "2023-02-10" }, 
{ id: 1005, userId: 1, products: [105, 106], totalAmount: 109.98, date: "2023-02-15" } 
]; 
// Qno:12  Write a function that returns all orders with the user's name who placed the order
function getOrdersWithUserNames(){
    return orders.map(order=>{const user=users.find(u=>u.id===order.id);
    return{...orders,
        name:user?user.name:"unknown user"
    }
})
}
console.log(getOrdersWithUserNames());