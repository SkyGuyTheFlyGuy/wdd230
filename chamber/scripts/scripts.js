const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Script to output the current year

function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
}

const year = getCurrentYear();
document.getElementById("year").innerHTML = year

// Show last modified

const lastModifiedParagraph = document.getElementById('lastModified');
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleString();

lastModifiedParagraph.textContent = lastModifiedString;

// Hamburger

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Page Visit Counter

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// Get timestamp

// Get current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;