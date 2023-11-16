// Script to output the current year

function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  }

  const year = getCurrentYear();
  document.getElementById("year").innerHTML = year

// Show last modified

// Get a reference to the <p> element where you want to display the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');

// Get the lastModified date from the document and format it as a string
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleString();

// Display the last modified date in the <p> element
lastModifiedParagraph.textContent = lastModifiedString;

// Dark mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "blue";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
    modeButton.textContent = "🕶️";
  }
});

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
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);