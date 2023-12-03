// Define the URL of the JSON file
const jsonUrl = 'https://skyguytheflyguy.github.io/wdd230/testpage/data/companies.json';

// Fetch the JSON data from the defined URL
fetch(jsonUrl)
  .then(response => response.json())
  .then(data => {
    const companyList = document.getElementById('company-list');

    // Iterate through each company in the JSON file and create HTML elements to display the information
    data.companies.forEach(company => {
      const companyDiv = document.createElement('div');
      companyDiv.innerHTML = `
        <h2>${company.name}</h2>
        <p>Address: ${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        <img src="${company.image}" alt="${company.name} logo">
        <p>Membership Level: ${company.membership_level}</p>
      `;
      companyList.appendChild(companyDiv);
    });
  });