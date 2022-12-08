const header = document.querySelector('.header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.hasAttribute('data-visible')
    ? nav.setAttribute('aria-expanded', false)
    : nav.setAttribute('aria-expanded', true);
  nav.toggleAttribute('data-visible');
  header.toggleAttribute('data-overlay');
});
