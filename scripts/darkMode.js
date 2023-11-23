let dark = document.querySelector('#dark-mode');

let body = document.body;

dark.addEventListener('click', () => {
    if (dark.textContent.includes("Dark Mode🕶️")) {
        dark.textContent = "Light Mode🔆";
    }
    else {
        dark.textContent = "Dark Mode🕶️";
    }
    console.log('CLIIIIICk');
    body.classList.toggle("dark")
})