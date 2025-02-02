// main.js

// Apri/chiudi menu hamburger
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Smooth scrolling per gli anchor links (sulla stessa pagina)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // Evita errore se il link non appartiene alla stessa pagina
  if (anchor.pathname === window.location.pathname) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
      // Chiudi il menu se aperto (solo su mobile)
      navLinks.classList.remove('show');
    });
  }
});

// Gestione form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.submit();
  });
}

// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
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
  
  // Animate lines sequentially
  typeWriter(line1, element1, speed)
    .then(() => typeWriter(line2, element2, speed))
    .then(() => {
      // Add final carets
      element1.classList.add("typewriter");
    });
});

// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
  const line2 = "Upgrade your business with us";
  const speed = 100; // Typing speed in ms
  const element1 = document.getElementById("typeLine2");
  
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
  
  // Animate lines sequentially
  typeWriter(line2, element1, speed)
    .then(() => typeWriter(line2, element2, speed))
    .then(() => {
      // Add final carets
      element1.classList.add("typewriter");
    });
});

// Update the mobile menu toggle to handle the new structure
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && 
          !e.target.closest('.nav-container') && 
          navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
      }
    });

    // Close menu after clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          menuToggle.classList.remove('active');
        }
      });
    });
  }
});

function revealSections() {
  const sections = document.querySelectorAll('.hidden');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.remove('hidden');
      section.classList.add('animate__animated', 'animate__fadeInUp'); // Aggiungi le classi Animate.css
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections(); // Inizializza all'apertura della pagina