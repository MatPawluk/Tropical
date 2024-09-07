const navBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");

const showNav = () => {
  nav.classList.toggle("nav--active");
  handleNavAnimation();
};

const handleNavAnimation = () => {
  let delayTime = 0;
  navItems.forEach((el) => {
    el.classList.toggle("nav-items-animation");
    el.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

navBtn.addEventListener("click", showNav);

navItems.forEach((el) => {
  el.addEventListener("click", showNav);
});
