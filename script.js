const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('.primary-nav');
const submenuToggles = document.querySelectorAll('.submenu-toggle');
const mobileBreakpoint = window.matchMedia('(max-width: 900px)');

function closeSubmenus(except = null) {
  submenuToggles.forEach((toggle) => {
    const submenu = document.getElementById(toggle.getAttribute('aria-controls'));
    if (toggle !== except && submenu) {
      toggle.setAttribute('aria-expanded', 'false');
      submenu.classList.remove('is-open');
    }
  });
}

function closeNavigation() {
  if (!menuToggle || !primaryNavigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  primaryNavigation.classList.remove('is-open');
  closeSubmenus();
}

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNavigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) closeSubmenus();
  });
}

submenuToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const submenu = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!submenu) return;

    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    closeSubmenus(toggle);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    submenu.classList.toggle('is-open', !isOpen);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});

document.addEventListener('click', (event) => {
  if (mobileBreakpoint.matches && primaryNavigation && !event.target.closest('.site-header')) {
    closeNavigation();
  }
});

mobileBreakpoint.addEventListener('change', (event) => {
  if (!event.matches) closeNavigation();
});
