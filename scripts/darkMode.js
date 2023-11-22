let dark = document.querySelector('#dark-mode');

let body = document.body;

dark.addEventListener('click', () => {
    console.log('CLIIIIICk');
    body.classList.toggle("dark")
})