// contentLoader.js

// CARICAMENTO TESTIMONIALS
fetch('content/testimonials.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('testimonials-container');
    if (!container) return; // Se non esiste la sezione, esci

    data.testimonials.forEach(testimonial => {
      container.innerHTML += `
        <div class="service-card">
          <p>"${testimonial.quote}"</p>
          <h4>— ${testimonial.author}</h4>
        </div>
      `;
    });
  });

// CARICAMENTO SERVICES
fetch('content/services.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('services-container');
    if (!container) return;

    data.services.forEach(service => {
      const showButton = service.slug && service.details;
      container.innerHTML += `
        <div class="service-card">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          ${
            showButton
              ? `<a href="services.html#${service.slug}" class="cta-button">Learn More</a>`
              : ''
          }
        </div>
      `;
    });
  });


// CAROUSEL
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
if (track && prevBtn && nextBtn) {
  const cards = Array.from(document.querySelectorAll('.solution-card'));

  let currentIndex = 0;
  const cardWidth = cards[0].getBoundingClientRect().width;
  const totalCards = cards.length;

  // Posiziona le card
  cards.forEach((card, index) => {
    card.style.left = `${index * cardWidth}px`;
  });

  function moveToSlide(index) {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  // Next
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      moveToSlide(currentIndex);
    }
  });

  // Prev
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveToSlide(currentIndex);
    }
  });
}
