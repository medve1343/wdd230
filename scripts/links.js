const baseURL = "https://medve1343.github.io/wdd230/";

const linksURL = "https://medve1343.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

  function displayLinks(data) {
    data.forEach((week) => {
        let list = document.createElement('li');
        let link = document.createElement('a');
        

        link.setAttribute('href', data.baseURL);
        link.textContent = week.title;
        list.appendChild(link);
    });
  }
  
  getLinks();