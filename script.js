const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle('active');

});

function toggleToc() {
  const tocContainer = document.querySelector('.toc-container');
  tocContainer.classList.toggle('open');
}