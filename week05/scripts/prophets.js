const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }

    
}

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        console.log(prophet);
        // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let birthday = document.createElement('p');
    let birthplace = document.createElement('p');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    
    console.log(prophet.birthdate);
    birthday.textContent = `${prophet.birthdate}`;
    birthplace.textContent = `${prophet.birthplace}`;

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
    });
}

getProphetData();

