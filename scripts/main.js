document.addEventListener("DOMContentLoaded", function () {
  /* --- Hamburger Menu Toggle --- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });
    // Close menu when clicking outside on mobile
    document.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 768 &&
        !e.target.closest(".nav-container") &&
        navLinks.classList.contains("show")
      ) {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      }
    });
    // Close menu after clicking a navigation link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("show");
          menuToggle.classList.remove("active");
        }
      });
    });
  }

  /* --- Smooth Scrolling for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // Only if the link is for the same page
    if (anchor.pathname === window.location.pathname) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  /* --- Typewriter Effect --- */
  function typeWriter(text, element, speed) {
    return new Promise((resolve) => {
      let i = 0;
      element.innerHTML = "";
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          resolve();
        }
      }
      type();
    });
  }
  const speed = 100;
  const typeLine1Elem = document.getElementById("typeLine1");
  if (typeLine1Elem) {
    const line1 = "Fai crescere il tuo business con noi";
    typeWriter(line1, typeLine1Elem, speed).then(() => {
      typeLine1Elem.classList.add("typewriter");
    });
  }
  const typeLine2Elem = document.getElementById("typeLine2");
  if (typeLine2Elem) {
    const line2 = "Upgrade your business with us";
    typeWriter(line2, typeLine2Elem, speed).then(() => {
      typeLine2Elem.classList.add("typewriter");
    });
  }

  /* --- Reveal Sections on Scroll --- */
  function revealSections() {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.remove("hidden");
        section.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();

  /* --- Contact Form Submission Handling --- */
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.submit();
    });
  }

  /* --- Carousel --- */
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  if (track && prevBtn && nextBtn) {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    if (cards.length > 0) {
      let currentIndex = 0;
      const cardWidth = cards[0].getBoundingClientRect().width;
      const totalCards = cards.length;
      // Position cards side by side
      cards.forEach((card, index) => {
        card.style.left = `${index * cardWidth}px`;
      });
      function moveToSlide(index) {
        track.style.transform = `translateX(-${index * cardWidth}px)`;
      }
      nextBtn.addEventListener("click", function () {
        if (currentIndex < totalCards - 1) {
          currentIndex++;
          moveToSlide(currentIndex);
        }
      });
      prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          moveToSlide(currentIndex);
        }
      });
    }
  }
});
