const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle('active');

});
close.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});