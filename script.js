// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const bodyElement = document.body;

// Prüfe gespeicherten Dark Mode im LocalStorage
if(localStorage.getItem('darkMode') === 'enabled'){
  bodyElement.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode');
  if(bodyElement.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navigation-Hervorhebung und Sichtbarkeits-Animation
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('nav ul li a');

const observerOptions = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
