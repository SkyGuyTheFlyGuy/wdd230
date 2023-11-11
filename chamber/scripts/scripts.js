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