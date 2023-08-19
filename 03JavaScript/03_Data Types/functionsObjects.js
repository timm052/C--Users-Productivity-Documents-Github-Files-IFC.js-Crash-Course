// java script is losely typed and dynamic (reassign variables to other types)

const randomNumber = 2.23; // Numbers
const randomText = "Hi There"; // Text
const randomBool = true; // Boolean
let randomUndefined = undefined; //Undefined
const randomNull = null;

console.log(typeof randomText);

// Objects
const ansoni = {
  name: "Ansoni",
  age: [27, 89, 94]
};

const steve = {
  name: "Steve",
  age: [27, 89, 94]
};

console.log(ansoni);
console.log(ansoni.age);
console.log(ansoni.age[0]);
console.log(ansoni["age"][1]);

ansoni.relation = steve;
console.log(ansoni);

const dogBreed = null;
const jumpHeight = null;

const dogJump = {
  dogBreed,
  jumpHeight
};

const jackRussel = { ...dogJump };
jackRussel.dogBreed = "jack";
jackRussel.jumpHeight = 12;

console.log(dogJump);
console.log(jackRussel);

// Arrays

// FUNCTIONS
// Method 1
function sum(valueA, valueB) {
  return valueA + valueB;
}

const valueA = 10;
const valueB = 25;

console.log(sum(valueA, valueB));

// Method 2
const mult = function (valueA, valueB) {
  return valueA * valueB;
};

// Method 3 one argument
const mod = (valueA, valueB) => valueA * valueB;

// OO Example
const tony = {
  age: 23,
  name: "Tony",
  city: "Boom Town USA"
};

// Default Variable Values
const greet = (city = "places unknown", name = "stranger") => {
  const message = `Hi ${name} from ${city}!`;
  console.log(message);
};

greet(tony.city, tony.name);

import { adding } from './addObject.js';

const objects = [];

adding('Object 1', 'IfcBuildingElementProxy', objects);
adding('Object 4', 'IfcWall', objects);
adding('Object 5', 'IfcSlab', objects);
adding('Object 8', 'IfcWallStandardCase', objects);
adding('Object 30', 'IfcWall', objects);
adding('Object 8', 'IfcBuildingElementProxy', objects);
adding('Object 47', 'IfcBuildingElementProxy', objects);
adding('Object 3', 'IfcSystem', objects);

console.log(objects);