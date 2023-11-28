
const baseURL =
  "https://raw.githubusercontent.com/medve1343/wdd230/main/chamber/data/members.json";

  const display = document.querySelector(".spotLightsArticle");

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

    
    

  });
  let randomSpotLight = [];
  for(let i = 0; i< 3;i++) {
    let randnum = Math.floor(Math.random() * spotlight.length);
    randomSpotLight.push([spotlight[randnum]]);
    spotlight.splice(randnum,1);
  }

  // console.log(randomSpotLight);

  randomSpotLight.forEach((member) => {
    let onemember = member[0]; 
    let spotMember = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let url = document.createElement('a');
    let img = document.createElement('img');

    // console.log(onemember);

    h2.innerHTML = onemember.name;
    img.setAttribute("src", onemember.imageUrl);
    img.setAttribute("alt", `An image of ${onemember.name}`);

    img.setAttribute('width', '150');
    img.setAttribute('height', '70');

    url.setAttribute("href", onemember.url);
    url.innerHTML = onemember.name;

    p.innerHTML = `Membership Level: ${onemember.membershipLevel}`;

    spotMember.appendChild(h2);
    spotMember.appendChild(p);
    spotMember.appendChild(img);
    spotMember.appendChild(url);

    display.appendChild(spotMember);
  })
}




getBusinesses();