/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

const arr = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const obj = {
  name: "Petras",
  surname: "Vilkelis",
  emailAddress: "petrasvilkelis@gmail.com",
  age: 19,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

obj.drivingLicense = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete obj.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const obj2 = {
  name: "John",
  surname: "Doe",
  emailAddress: "johndoe@gmail.com",
  age: 23,
};

console.log(
  obj.emailAddress !== obj2.emailAddress
);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

const totalShoppingCart = 51;

const totalCost =
  totalShoppingCart > 50
    ? totalShoppingCart
    : totalShoppingCart + 10;

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

const totalShoppingCart = 51;

const blackFridayDiscout = 0.2;

let totalShopping;

if (totalShoppingCart > 50) {
  totalShopping =
    totalShoppingCart * blackFridayDiscout;
} else {
  totalShopping =
    totalShoppingCart * blackFridayDiscout + 10;
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car = {
  brand: "Toyota",
  model: "Corolla",
  licensePlate: "BFG-235",
};

const car1 = Object.assign({}, car);
const car2 = Object.assign({}, car);
const car3 = Object.assign({}, car);
const car4 = Object.assign({}, car);
const car5 = Object.assign({}, car);

car1.licensePlate = "HDD-325";
car2.licensePlate = "SDF-365";
car3.licensePlate = "SUF-544";
car4.licensePlate = "HDF-345";
car5.licensePlate = "SDF-373";

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [
  car,
  car1,
  car2,
  car3,
  car4,
  car5,
];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(
  typeof car,
  typeof car.licensePlate,
  typeof car.brand
);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = [
  {
    brand: "BMW",
    model: "X5",
    licensePlate: "SGF-568",
  },
  {
    brand: "Wolkswagen",
    model: "Golf",
    licensePlate: "OWR-785",
  },
  {
    brand: "Tesla",
    model: "X",
    licensePlate: "JFE-673",
  },
];

const totalCars =
  carsForRent.length + carsForSale.length;

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (const tempCar of carsForSale) {
  console.log(tempCar);
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
