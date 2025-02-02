// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // 1) Typewriter text (Italian)
  const line1 = "Fai crescere il tuo business con noi";
  const speed = 100; // Typing speed in ms
  const element1 = document.getElementById("typeLine1");

  function typeWriter(text, element, speed) {
    return new Promise(resolve => {
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

  // 2) Typewriter text (English)
  const line2 = "Upgrade your business with us";
  const element2 = document.getElementById("typeLine2");

  // Animate lines sequentially if both lines/elements exist
  if (element1 && element2) {
    typeWriter(line1, element1, speed)
      .then(() => typeWriter(line2, element2, speed))
      .then(() => {
        // Add final caret
        element1.classList.add("typewriter");
      });
  } else if (element1) {
    // If only the first line/element is on this page
    typeWriter(line1, element1, speed).then(() => {
      element1.classList.add("typewriter");
    });
  } else if (element2) {
    // If only the second line/element is on this page
    typeWriter(line2, element2, speed).then(() => {
      element2.classList.add("typewriter");
    });
  }

  // 3) Hamburger Menu Logic
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // Click hamburger => toggle nav
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('active'); // For an "X" icon if you want
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (
        window.innerWidth <= 768 &&
        !e.target.closest('.nav-container') && 
        navLinks.classList.contains('show')
      ) {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
      }
    });

    // Close menu after clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          menuToggle.classList.remove('active');
        }
      });
    });
  }

  // 4) Smooth scrolling for anchor links (same page)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Only if link is on the same page
    if (anchor.pathname === window.location.pathname) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        }
        // Also close menu if open
        navLinks?.classList.remove('show');
        menuToggle?.classList.remove('active');
      });
    }
  });

  // 5) Contact form handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent successfully!');
      contactForm.submit();
    });
  }

  // 6) Reveal sections on scroll
  function revealSections() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.remove('hidden');
        section.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }
  window.addEventListener('scroll', revealSections);
  revealSections(); // On load
});
