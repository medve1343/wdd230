let button = document.querySelector('#cancelBanner');

let banner = document.querySelector('.banner');

button.addEventListener("click", () => {
    banner.classList.toggle('banner-remove');
}
);