let button = document.querySelector('#cancelBanner');

let banner = document.querySelector('.banner');

button.addEventListener("click", () => {
    banner.classList.toggle('banner-remove');
}
);

const check_today = new Date();
const this_day = check_today.getDay();

switch (this_day) {
  case 4:
    document.querySelector(".banner").style.display = "none";
    break;
  case 5:
    document.querySelector(".banner").style.display = "none";
    break;
  case 6:
    document.querySelector(".banner").style.display = "none";
    break;
  case 7:
    document.querySelector(".banner").style.display = "none";
    break;
  default:
    break;
}