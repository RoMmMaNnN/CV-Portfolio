import React, { useState, FormEvent } from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/Contact.module.css';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Formspree endpoint - Get your form ID from https://formspree.io/
      // Sign up, create a form, and replace 'your-form-id' with your actual ID
      // Example: 'mzbqdeko' would make the URL 'https://formspree.io/f/mzbqdeko'
      const response = await fetch('https://formspree.io/f/xeeaknav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact - Roman Kriuchkov">
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Let&apos;s connect</h3>
              <p>
                I&apos;m open to collaborations, apprenticeships, and backend development opportunities.
                If you&apos;d like to discuss a project or just network, feel free to reach out!
              </p>
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>roman.kriuchkov7@gmail.com</span>
                </div>
                <div className={styles.contactMethod}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Belfast, United Kingdom</span>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/RoMmMaNnN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/roman-kriuchkov-259972367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
