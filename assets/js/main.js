document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const backToTop = document.getElementById("back-to-top");
  const yearSpan = document.getElementById("year");
  const contactForm = document.getElementById("contact-form");

  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 260) {
      backToTop?.classList.add("show");
    } else {
      backToTop?.classList.remove("show");
    }
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("已收到您的需求，我们会尽快与您联系。（演示站点，无真实提交）");
    contactForm.reset();
  });
});

