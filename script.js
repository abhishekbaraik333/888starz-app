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

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle clicked item
    });
  });
});