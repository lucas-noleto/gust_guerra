const accordionGroups = document.querySelectorAll('[data-accordion]');

accordionGroups.forEach((group) => {
  const items = group.querySelectorAll('details');

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) {
        return;
      }

      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
});

const topbar = document.querySelector('.topbar');

if (topbar) {
  const updateTopbar = () => {
    if (window.scrollY > 12) {
      topbar.classList.add('is-scrolled');
      return;
    }

    topbar.classList.remove('is-scrolled');
  };

  updateTopbar();
  window.addEventListener('scroll', updateTopbar, { passive: true });
}
