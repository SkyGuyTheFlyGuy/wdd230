const baseURL = "https://SkyGuyTheFlyGuy.github.io/wdd230/";
const linksURL = "https://SkyGuyTheFlyGuy.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    const weeksContainer = document.getElementById('links'); // Replace with the actual ID of the container in your HTML

    // Iterate through each week's activities
    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        const weekTitle = document.createElement('strong');
        weekTitle.textContent = `Week ${week.weekNumber}: `;
        weekItem.appendChild(weekTitle);

        // Iterate through each activity in the week
        week.activities.forEach(activity => {
            const activityLink = document.createElement('a');
            activityLink.href = activity.href;
            activityLink.textContent = activity.title;
            weekItem.appendChild(activityLink);

            // Add a separator (|) between each activity, except for the last one
            if (week.activities.indexOf(activity) !== week.activities.length - 1) {
                const separator = document.createTextNode(' | ');
                weekItem.appendChild(separator);
            }
        });

        weeksContainer.appendChild(weekItem);
    });
}