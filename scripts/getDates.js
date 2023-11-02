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