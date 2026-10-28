(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileBreakpoint = window.matchMedia('(max-width: 70rem)');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-nav]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  const setMenuState = (open, { restoreFocus = false } = {}) => {
    if (!menuButton || !navigation) return;

    const isMobile = mobileBreakpoint.matches;
    const shouldOpen = isMobile && open;
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    menuButton.setAttribute('aria-label', shouldOpen ? 'Close navigation menu' : 'Open navigation menu');
    navigation.dataset.open = String(shouldOpen);
    navigation.inert = isMobile && !shouldOpen;

    if (restoreFocus && isMobile) menuButton.focus();
  };

  if (menuButton && navigation) {
    setMenuState(false);

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
      if (!isOpen) navigation.querySelector('a')?.focus();
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuState(false, { restoreFocus: true });
      }
    });

    document.addEventListener('click', (event) => {
      if (
        mobileBreakpoint.matches &&
        menuButton.getAttribute('aria-expanded') === 'true' &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setMenuState(false);
      }
    });

    const handleBreakpointChange = () => setMenuState(false);
    if (typeof mobileBreakpoint.addEventListener === 'function') {
      mobileBreakpoint.addEventListener('change', handleBreakpointChange);
    } else {
      mobileBreakpoint.addListener(handleBreakpointChange);
    }
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const visibleSections = new Map();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.intersectionRatio);
        else visibleSections.delete(entry.target.id);
      });

      const current = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
      if (current) setActiveLink(current[0]);
    }, { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.4, 0.7] });

    sections.forEach((section) => sectionObserver.observe(section));
  } else if (sections[0]) {
    setActiveLink(sections[0].id);
  }

  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const projectCards = Array.from(document.querySelectorAll('[data-categories]'));
  const filterStatus = document.querySelector('[data-filter-status]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      projectCards.forEach((card) => {
        const categories = card.dataset.categories.split(' ');
        const matches = selectedFilter === 'all' || categories.includes(selectedFilter);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (filterStatus) {
        const label = visibleCount === 1 ? 'project' : 'projects';
        filterStatus.textContent = `Showing ${visibleCount} ${label} for ${button.textContent.trim()}.`;
      }
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');

  if (contactForm) {
    const fields = Array.from(contactForm.querySelectorAll('input:not([name="website"]), textarea'));
    const honeypot = contactForm.querySelector('[name="website"]');
    const formStatus = contactForm.querySelector('[data-form-status]');

    const messageFor = (field) => {
      const value = field.value.trim();
      if (!value) return `${field.previousElementSibling.textContent} is required.`;
      if (field.type === 'email' && !field.validity.valid) return 'Enter a valid email address, such as name@example.com.';
      if (field.name === 'name' && value.length < 2) return 'Enter at least 2 characters for your name.';
      if (field.name === 'message' && value.length < 10) return 'Please enter a message of at least 10 characters.';
      return '';
    };

    const showFieldState = (field) => {
      const error = contactForm.querySelector(`[data-error-for="${field.name}"]`);
      const message = messageFor(field);
      field.setAttribute('aria-invalid', String(Boolean(message)));
      if (error) error.textContent = message;
      return !message;
    };

    fields.forEach((field) => {
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') showFieldState(field);
        if (formStatus) {
          formStatus.textContent = '';
          formStatus.classList.remove('is-error', 'is-ready');
        }
      });
      field.addEventListener('blur', () => showFieldState(field));
    });

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (honeypot?.value) {
        if (formStatus) {
          formStatus.textContent = 'Unable to validate this message.';
          formStatus.classList.add('is-error');
          formStatus.classList.remove('is-ready');
        }
        return;
      }

      const results = fields.map(showFieldState);
      const firstInvalid = fields.find((field, index) => !results[index]);

      if (firstInvalid) {
        if (formStatus) {
          formStatus.textContent = 'Please correct the highlighted fields.';
          formStatus.classList.add('is-error');
          formStatus.classList.remove('is-ready');
        }
        firstInvalid.focus();
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Your message is ready. This static portfolio does not send or store messages. Please email me using the contact link above.';
        formStatus.classList.add('is-ready');
        formStatus.classList.remove('is-error');
      }
    });
  }

  const revealElements = Array.from(document.querySelectorAll('.reveal'));

  if (!reduceMotion.matches && 'IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
    document.body.classList.add('reveal-ready');
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
})();
