let helloMessage = "Hello";
const apple = 4; // cannot be redefined

console.log(helloMessage)
console.log("Hello World!! via external file2")

helloMessage = "New Message";

console.log("Hello World!! via external file@")

let h = 10;
let y = 3;

console.log(x + y); //Add
console.log(x - y); //Substract
console.log(x * y); //Multiplication
console.log(x / y); //Division
console.log(x % y); //Module
console.log(x ** y); //Exponent

console.log(x ++); //Postincrement
console.log(++x); //Preincrement
console.log(x --); //Postdecrement
console.log(--x); //Predecrement

let d;
let g = 10; // Declare + assign
g = 5; // Assign

g += 5; // Assign and add. Equivalent to: g = g + 5;
g -= 5; // Assign and subtract. Equivalent to: g = g - 5;
g *= 5; // Assign and multiply. Equivalent to: g = g * 5;
g /= 5; // Assign and divide. Equivalent to: g = g / 5;


let j = 1;

console.log(j === 2);
console.log(j !== 2);
console.log(j < 2);
console.log(j <= 2);
console.log(j > 2);
console.log(j >= 2);

// Strict equality operator (same type and value)
console.log('1' === j); //false

// Loose equality operator (same value)
console.log('1'== j ); //true

// Ternary operator
let u = j > 2 ? 'yes' : 'no'; 
console.log(y) // 'no'