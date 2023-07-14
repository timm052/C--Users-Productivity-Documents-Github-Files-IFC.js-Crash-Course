// Arrays

// Ordered List of Entites
// Arrays can be editied without reassignment
const colours = [
    "Blue",
    "Black",
    "Yellow"
];

const firstColour = colours[0]
console.log(colours)
console.log(firstColour)
console.log(colours)

colours.push("Yellow")
colours.push("Red") // Add to end of list
colours.unshift("Green") // Add to start of list
colours.splice(1, 0, "Apple", "Bannana") // Add or relace items in Array
console.log(colours.includes("Green"))
console.log(colours.indexOf("Purple"))
console.log(colours)

// Object Example
const truck = {
    name: 'Big truck',
    age: 16,
    weight: 200
}

const boat = {
    name: 'Big boat',
    age: 2,
    weight: 2000
}

const plane = {
    name: 'Big plane',
    age: 10,
    weight: 1000
}

const plane2 = {
    name: 'Bigger plane',
    age: 10,
    weight: 10000
}

const transportMode = [truck, boat, plane, plane2]

const isBig = (type) => {
    return type.weight > 500;
}

const bigBoys = transportMode.filter(isBig);
const firstBig = transportMode.find(isBig);

console.log(bigBoys);
console.log(firstBig);

// Mapping

const lPlanes = (type) => type.name.includes("plane");

const planes = transportMode.map(lPlanes);
console.log(planes)

// Empty an Array
transportMode.length = 0
console.log(transportMode)