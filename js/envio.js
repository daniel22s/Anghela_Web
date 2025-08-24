document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        message.classList.add('show');
        setTimeout(() => {
          message.classList.remove('show');
        }, 3000);
        form.reset();
      } else {
        alert('Error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Intenta de nuevo.');
    }
  });
});
