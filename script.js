// script.js

// Dark mode toggle with persistence
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
} else {
  toggleBtn.textContent = 'Dark Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Back to top button logic
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scrollspy for nav links active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPos = window.pageYOffset + 80; // offset for sticky header

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.removeAttribute('aria-current');
    if (link.getAttribute('href') === '#' + current) {
      link.setAttribute('aria-current', 'page');
    }
  });
});