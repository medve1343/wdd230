const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/_______';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing
            //displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.____`;
    let desc = data.weather[0].____;
    weatherIcon.setAttribute('____', ____);
    weatherIcon.setAttribute('____', ____);
    captionDesc.textContent = `${desc}`;
}