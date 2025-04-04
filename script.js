document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded Successfully!");

  // Select all sections to animate on scroll
  const sections = document.querySelectorAll(
    ".skills, .education, .projects, .contact"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; // Trigger animation earlier

    sections.forEach((section) => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on page load

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Highlight active navigation link while scrolling
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  const highlightNav = () => {
    let index = sections.length;
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) navLinks[index].classList.add("active");
  };

  window.addEventListener("scroll", highlightNav);

  // Add hover effect to buttons
  const buttons = document.querySelectorAll(
    ".btn_cv, .contact_deatails button"
  );
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
