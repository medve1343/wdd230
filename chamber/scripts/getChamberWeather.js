const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const first = document.querySelector("#firstDay");
const second = document.querySelector("#secondDay");
const third = document.querySelector("#thirdDay");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=47.4878173&lon=19.0316768&appid=e2a0ea60aba434d86831049a22c1e575";

const urlforecast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=47.4878173&lon=19.0316768&appid=e2a0ea60aba434d86831049a22c1e575";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); //testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function apiForecastFetch() {
  try {
    const response = await fetch(urlforecast);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); //testing
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiForecastFetch();

apiFetch();

function displayForecast(data) {
  let firstDay = [];
  let secondDay = [];
  let thirdDay = [];

  let index = 0;
  data.list.forEach((element) => {
    if (index >= 0 && index < 8) {
      // console.log(element);
      // console.log(index);
      firstDay.push(Math.round(element.main.temp - 273.15, 2));
      index++;
    }
    if (index >= 8 && index < 16) {
      // console.log(element);
      // console.log(index);
      secondDay.push(Math.round(element.main.temp - 273.15, 2));
      index++;
    }
    if (index >= 16 && index < 24) {
      // console.log(element);
      // console.log(index);
      thirdDay.push(Math.round(element.main.temp - 273.15, 2));
      index++;
    }
  });

  const day = new Date();
  const today = day.getDay();

  let dayOne = `Max: ${Math.max(...firstDay)} Min: ${Math.min(...firstDay)}`;
  let dayTwo = `Max: ${Math.max(...secondDay)} Min: ${Math.min(...secondDay)}`;
  let dayThree = `Max: ${Math.max(...thirdDay)} Min: ${Math.min(...thirdDay)}`;

  switch (today) {
    case 1:
      dayOne = "Tuesday " + dayOne;
      dayTwo = "Wednesday " + dayTwo;
      dayThree = "Thursday " + dayThree;
      break;
    case 2:
      dayOne = "Wednesday " + dayOne;
      dayTwo = "Thursday " + dayTwo;
      dayThree = "Friday " + dayThree;
      break;
    case 3:
      dayOne = "Thursday " + dayOne;
      dayTwo = "Friday " + dayTwo;
      dayThree = "Saturday " + dayThree;
      break;
    case 4:
      dayOne = "Friday " + dayOne;
      dayTwo = "Saturday " + dayTwo;
      dayThree = "Sunday " + dayThree;
      break;
    case 5:
      dayOne = "Saturday " + dayOne;
      dayTwo = "Sunday " + dayTwo;
      dayThree = "Monday " + dayThree;
      break;
    case 6:
      dayOne = "Sunday " + dayOne;
      dayTwo = "Monday " + dayTwo;
      dayThree = "Tuesday " + dayThree;
      break;
    case 7:
      dayOne = "Monday " + dayOne;
      dayTwo = "Tuesday " + dayTwo;
      dayThree = "Wednesday " + dayThree;
      break;
    default:
      break;
  }

  first.innerHTML = dayOne;
  second.innerHTML = dayTwo;
  third.innerHTML = dayThree;
  // console.log(dayOne);
  // console.log(dayTwo);
  // console.log(dayThree);
}

function displayResults(data) {
  let celsius = parseFloat(data.main.temp);
  celsius = celsius - 273.15;
  currentTemp.innerHTML = `${Math.round(celsius, 2)}   &deg;C    `;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc} `;
}
