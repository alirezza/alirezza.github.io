// JS-Datei: your-javascript-file.js
// Diese Datei enthält das JavaScript für die interaktiven Funktionen der Webseite

// Menü-Animation
function toggleMenu() {
  var menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

// Animationsübergänge
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.scroll-reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Weitere JavaScript-Funktionen für die Lightbox-Galerie, Formularüberprüfung usw. hier einfügen
