document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const yearSpan = document.querySelector('#year');

  // 1. Mobilni izbornik (Hamburger)
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav__menu--open');

      // Promijeni tekst gumba (opcionalno)
      const textSpan = navToggle.querySelector('.nav__toggle-text');
      if(textSpan) textSpan.textContent = isExpanded ? 'Izbornik' : 'Zatvori';
    });
  }

  // 2. Zatvori izbornik kad se klikne na link (jer je one-page site)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('nav__menu--open')) {
        navMenu.classList.remove('nav__menu--open');
        navToggle.setAttribute('aria-expanded', 'false');
        if(navToggle.querySelector('.nav__toggle-text')) {
          navToggle.querySelector('.nav__toggle-text').textContent = 'Izbornik';
        }
      }
    });
  });

  // 3. Automatska godina u footeru
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
