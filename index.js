// object
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`I am ${user.age} years old`);
console.log(`I am from ${user["home world"]}`);

user.age = 20;
user.country = "USA";
console.log(user);

delete user["home world"];
console.log(user);

// array
let myArray = ["Chocolate", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[3]);
console.log("The length of myArray is " + myArray.length + ".");

myArray.pop();
myArray.push("JavaScript");
console.log(myArray);

myArray.shift();
myArray.unshift("Apple");
console.log(myArray);

delete myArray[2];
console.log(myArray);

const month = ["January", "February", "March", "April", "May", "June"];
console.log(month);

month.splice(2, 1);
console.log(month);

month.splice(2, 0, "March");
console.log(month);

console.log([...user]);
console.log(...myArray);
console.log(...month);
