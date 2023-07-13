//Destructuring arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); //output: 1,2,3
//Destructuring objects
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age); //output: John 30

//math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

//app.js
import { add, subtract } from "./math.js";
console.log(add(2, 3)); //output: 5
console.log(subtract(5, 3)); //output:2
