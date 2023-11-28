const baseURL =
  "https://raw.githubusercontent.com/medve1343/wdd230/main/chamber/data/members.json";

async function getBusinesses() {
  const response = await fetch(baseURL);
  const data = await response.json();
  displayBusinesses(data);
}

function displayBusinesses(data) {
  data.forEach((element) => {
    // console.log(element);
    let name = document.createElement("h3");
    let street = document.createElement("p"); // fill in the blank
    let city = document.createElement("p");
    let country = document.createElement("p");
    let zip = document.createElement("p");

    let image = document.createElement("img");
    let membership = document.createElement("p");

    let phone = document.createElement("p");
    let url = document.createElement("a");

    name.innerHTML = element.name;
    image.setAttribute("src", element.imageUrl);
    console.log(element.imageUrl);
    street.innerHTML = element.address.street1;
    city.innerHTML = element.address.city;
    country.innerHTML = element.address.country;
    zip.innerHTML = element.address.zip;
    membership.innerHTML = element.membershipLevel;
    url.setAttribute("href", element.url);
    url.innerHTML = element.name + " website link";
    

    image.setAttribute('width', '200');
    image.setAttribute('height', '440');

    // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    // portrait.setAttribute('loading', 'lazy');
    // portrait.setAttribute('width', '340');
    // portrait.setAttribute('height', '440');

    let company = document.createElement("section");

    company.appendChild(image);
    company.appendChild(name);
    company.appendChild(street);
    company.appendChild(city);
    company.appendChild(country);
    company.appendChild(zip);
    company.appendChild(membership);
    company.appendChild(url);

    company.setAttribute("class", "companyCard");
    let companies = document.querySelector(".grid");
    companies.appendChild(company);

  });
}

getBusinesses();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
