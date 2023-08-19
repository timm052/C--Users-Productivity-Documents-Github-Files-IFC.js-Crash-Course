// NOTE Script cannot retrive tags that are created after the script is run

// Individual - Will only return a single element
const title = document.getElementById("page-title");
const title1 = document.querySelector("h1"); // returns first item of type

console.log(title)
console.log(title1)

// Direct access to parameters
title.style.fontFamily = 'Arial'; //Best to use CSS rather than change the styles directly OR
title.classList.add("purple"); //adds a previously existing css style to the item

// Multiple
const titles = document.getElementsByTagName("h1"); //Returns HTML Collection
const titlesclass = document.getElementsByClassName("purple") //Per Class
const titlesall = document.querySelectorAll // Get all

// Multilayer search
//const titles2 = document
//    .getElementsByTagName("h1")
//    .getElementsByClassName("purple");
//
console.log(titles)

const titlesArray = Array.from(titles);
console.log(titlesArray)

for (let title of titlesArray) {
    title.style.backgroundColor = 'green'
}

const cards = document.getElementsByClassName("card");
const cardsArr = Array.from(cards);

for(let card of cardsArr) {
    console.log(card);
    const children = Array.from(card.children);
    console.log(children)
    const text = children[1];
    text.textContent = "whatever"
}

// Create HTML
const todoList = [
    "Go Shopping",
    "Cleaning",
    "Cooking"
]

const container = document.querySelector(".main-container")

const buttons = [];

for(let task of todoList) {
    task = task
    const text = document.createElement("li");
    buttons.push(text);

    text.addEventListener("mouseenter", (event) => {
        text.classList.add("grey");
    })

    text.addEventListener("mouseleave", (event) => {
        text.classList.remove("grey");
    })

    text.addEventListener("mousedown", () => {
        buttons.forEach(button => button.classList.remove("darkgrey"))
        console.log(`Selected task ${task}`);
        text.classList.add("darkgrey")
    })

    text.textContent = task;
    container.appendChild(text)
}