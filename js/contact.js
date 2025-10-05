// ======= CONTACT FORM =======
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  try {
    await emailjs.send("service_fxt7qz8", "template_sbw9tbr", {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    });
    showNotification('Message sent successfully!', 'success');
    contactForm.reset();
  } catch (error) {
    console.error(error);
    showNotification('Failed to send message. Please try again.', 'error');
  } finally {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
});

// ======= NOTIFICATION SYSTEM =======
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#3b82f6'
  };

  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: '500',
    backgroundColor: colors[type] || colors.info,
    zIndex: '9999',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease'
  });

  document.body.appendChild(notification);
  setTimeout(() => (notification.style.transform = 'translateX(0)'), 100);
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}
