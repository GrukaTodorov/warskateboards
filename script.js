var acc = document.getElementsByClassName("accordion");
var i;

var hamBtn = document.getElementById('hamburgerBtn'),
  hamDrawer = document.getElementById('hamDrawer');

const hamNav = document.querySelectorAll('.ham-nav a');
const burger = document.getElementById('hamburgerBtn')

function openHamburger() {
  document.body.classList.toggle('hamburger-drawer-expanded');
  
  //links animation
  hamNav.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ''
    } else {
      link.style.animation = `ham-navFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });

  //burger animation
  burger.classList.toggle('toggle');
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

hamBtn.addEventListener('click', openHamburger);