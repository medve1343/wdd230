const baseURL = "https://medve1343.github.io/wdd230/";

const linksURL = "https://medve1343.github.io/wdd230/data/links.json";
let links = document.querySelector('#links');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

  function displayLinks(data) {
    console.log(data);
    let index = 1;
    data.forEach((week) => {
        let list = document.createElement('li');
        

        list.textContent = 'Week ' + index + ': ';
        week.links.forEach((a) => {
          let temp = document.createElement('a');
          temp.setAttribute('href', a.url);
          temp.textContent = a.title + ' | ';
          
          list.appendChild(temp);
        });

        // let link = document.createElement('a');
        

        // link.setAttribute('href', data.baseURL);
        // link.textContent = week.title;

        // list.appendChild(link);

        links.appendChild(list);
        index++;
    });
  }
  
  getLinks();