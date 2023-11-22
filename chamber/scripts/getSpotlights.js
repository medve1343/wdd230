
const baseURL =
  "https://raw.githubusercontent.com/medve1343/wdd230/main/chamber/data/members.json";

async function getBusinesses() {
  const response = await fetch(baseURL);
  const data = await response.json();
  displayBusinesses(data);
}


function displayBusinesses(data) {
    let randomElement;
    let spotlight = [];
  data.forEach((element) => {
    if (element.membershipLevel == "Gold" || element.membershipLevel == "Silver") {
        spotlight.push(element);
    }
    randomElement = spotlight[(Math.floor(Math.random() * data.length))];
    

  });
  console.log(randomElement);
}

getBusinesses();