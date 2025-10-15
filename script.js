// Basic interactive behavior: mobile nav + simple contact form handler
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form: simple validation and mailto fallback
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill in all fields.';
      return;
    }

    // Simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMsg.textContent = 'Please enter a valid email.';
      return;
    }

    // Prepare mailto
    const subject = encodeURIComponent(Contact from CodeWithBiswa — ${name});
    const body = encodeURIComponent(Name: ${name}\nEmail: ${email}\n\nMessage:\n${message});
    const mailto = mailto:biswa@codewithbiswa.com?subject=${subject}&body=${body};

    // Open user's email client
    window.location.href = mailto;

    // Provide feedback (won't run if mail client opens)
    formMsg.textContent = 'Opening your email client...';
    form.reset();
  });
});