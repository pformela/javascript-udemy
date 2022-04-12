"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arr = [2, 3, 4];
const [x, y, z] = arr;

const [first, , third] = restaurant.categories;
// console.log(first, third);

const { name, categories, mainMenu } = restaurant;
console.log(name, categories, mainMenu);

// taking out object parameters and renaming them
// = [] - default value if doesnt exist
const {
  name: restaurantName,
  categories: tags = [],
  mainMenu: menu,
} = restaurant;
console.log(restaurantName, tags, menu);

// mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);
