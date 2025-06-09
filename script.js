document.addEventListener('DOMContentLoaded', function() {
  // Show contact form when "Learn More" is clicked
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) contactForm.classList.remove('hidden');
    });
  }

  // Open pickAI.html in a new tab when "View Project" is clicked
  const viewCVBtn = document.getElementById('viewCVBtn');
  if (viewCVBtn) {
    viewCVBtn.addEventListener('click', () => {
      window.open('pickAI.html', '_blank');
    });
  }

  // Close contact form when "Close" button is clicked
  const closeFormBtn = document.getElementById('closeForm');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) contactForm.classList.add('hidden');
    });
  }

  // Handle contact form submission
  const contactFormElement = document.getElementById('contactFormElement');
  if (contactFormElement) {
    contactFormElement.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out!');
      const contactForm = document.getElementById('contactForm');
      if (contactForm) contactForm.classList.add('hidden');
      contactFormElement.reset();
    });
  }
});
