const baseURL = "https://medve1343.github.io/wdd230/";

const linksURL = "https://medve1343.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

  function displayLinks(data) {
    data.forEach(week => {
        console.log(week);        
    });
  }
  
  getLinks();