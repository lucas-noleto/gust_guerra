document.documentElement.classList.add('js-reveal');

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

const revealItems = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const processTrack = document.querySelector('[data-process]');

revealItems.forEach((item, index) => {
  item.style.setProperty('--reveal-index', index % 6);
});

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.16,
  });

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (processTrack && !reduceMotion) {
  const updateProcessProgress = () => {
    const rect = processTrack.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.68;
    const travel = rect.height + viewportAnchor;
    const progress = Math.min(Math.max((viewportAnchor - rect.top) / travel, 0), 1);

    processTrack.style.setProperty('--process-progress', `${Math.round(progress * 100)}%`);
  };

  updateProcessProgress();
  window.addEventListener('scroll', updateProcessProgress, { passive: true });
  window.addEventListener('resize', updateProcessProgress);
}
