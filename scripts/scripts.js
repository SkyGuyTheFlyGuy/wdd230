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

// Check if passwords match

const p1 = document.querySelector("#pass");
const p2 = document.querySelector("#pass2");
const message = document.querySelector("#formmessage");

// p2.addEventListener("focusout", checkSame);

function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "❗ Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}

// Increment range 

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// range.addEventListener('change', displayRatingValue);
// range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// Show weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=85ebe9973bb65ef9e671cf5de43fe539&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}