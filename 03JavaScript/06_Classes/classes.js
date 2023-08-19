// Object Oriented Programming - OOP
// Classes more powerful than Objects

class Person {
  // Constructor is executed everytime a class is created
  // Creates variables for class
  #address;

  constructor(name, address) {
    this.name = name;
    this.#address = address; // Hidden Variable
  }

  #logData(message) {
    console.log(message);
  }

  greet() {
    const message = `Hi, my name is ${this.name} and i live at ${
      this.#address
    }.`;
    this.#logData(message);
  }
}

// Static elements belong to the calss and can be used affect all instances
class Dimentions {
  static color() {}

  drawDimention() {}
}

const ansoni = new Person("Tony", "2 Apple Town, USA");
ansoni.greet();

const steve = new Person("Steve");
steve.greet();

// Principles of OOP
// 1. Encapsulation - Logic is contained within objects
// 2. Abstraction - Hidding unnessacery details # can be used to create hidden variables that can only be used in the class

// favour Composition over inhertance

// But try to avoid 1 level of inheritance max
// 3. Inheritance
// 4. Polymorphism

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  move() {
    console.log(`The ${this.name} moved`);
  }
}

class Fish extends Animal {
  constructor(name, species, waterType) {
    super(name, species);
    this.waterType = waterType;
  }

  move() {
    console.log(`The ${this.name} swum`);
  }
}

class Bird extends Animal {
  constructor(name, species, featherType) {
    super(name, species);
    this.featherType = featherType;
  }

  fly() {
    console.log(`The ${this.name} flew`);
  }
}

const tuna = new Fish("tuna", "thunnini", "salt");
const cockatoo = new Bird("cockatoo", "cacatuidae", "white");

tuna.move();
cockatoo.move();
cockatoo.fly();

const animals = [tuna, cockatoo];
for (const animal of animals) {
  animal.move();
}

// Composition

class runner {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`The ${this.name} ran`);
  }
}

class slither {
  constructor(name) {
    this.name = name;
  }

  slith() {
    console.log(`The ${this.name} slithered`);
  }
}

class Cat extends Animal {
  constructor(name, species, size) {
    super(name, species);
    this.size = size;
    this.runner = new runner(this.name);
  }

  move() {
    this.runner.run();
  }
}

class Snake extends Animal {
  #shade;

  constructor(name, species, shade) {
    super(name, species);
    this.#shade = shade;
    this.slither = new slither(this.name);
  }

  move() {
    this.slither.slith(this.name);
  }

  // getters allow private variables to be exposed as read only
  get shade() {
    return this.#shade;
  }

  // setters allow private variables to be changed
  set shade(value) {
    return console.log("error write protected");
  }
}

const lion = new Cat("lion", "panthera leo", "big lad");
const snek = new Snake("snek", "danger noodle", "green");

animals.push(lion, snek);

for (const item of animals) {
  item.move();
}

console.log(snek.shade);
snek.shade = "sad";
console.log(snek.shade);
