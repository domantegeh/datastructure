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

const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  "favorite drink": "Es Teh",
  "favorite food": "Bakso",
  isVegan: false,
};
const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];
console.log(restaurant);
console.log(name);
console.log(favoriteDrink);

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

let evenNumber = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNumber.push(i);
  }
}
console.log(evenNumber);

// spread operator
console.log({ ...user });
console.log(...myArray);
console.log(...month);

// destructuring object and array
const firstName = user.firstName;
const lastName = user.lastName;
console.log("Hello, my name is " + firstName + " " + lastName + ".");
const { age: localAge } = user;
console.log("I am " + localAge + " years old.");
[firstArray, secondArray] = myArray;
console.log(firstArray);
console.log(secondArray);
let a = 1;
let b = 2;
console.log("Before swapped : [" + a + ", " + b + "]");
[a, b] = [b, a];
console.log("After swapped : [" + a + ", " + b + "]");

// map
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);
capital.set("New Delhi", "India");
console.log(capital.get("London"));
console.log(capital);
console.log(capital.size);

const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get("JPY");
console.log(currency);
console.log(priceInJPY);
console.log(priceInIDR);

// set
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
numberSet.delete(4);
console.log(numberSet);
