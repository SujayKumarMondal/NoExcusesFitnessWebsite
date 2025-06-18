const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  navToggle.firstElementChild.classList.contains("fa-bars")
    ? navToggle.firstElementChild.classList.replace("fa-bars", "fa-xmark")
    : navToggle.firstElementChild.classList.replace("fa-xmark", "fa-bars");
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    // Toggle current item
    item.classList.toggle('active');
  });
});