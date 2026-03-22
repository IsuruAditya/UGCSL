import { useState } from 'react';
import { submitContact } from '../hooks/useApi';
import type { ContactForm } from '../types';
import './shared.css';
import './Contact.css';

const initialForm: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' };

const subjects = ['General Enquiry', 'Admissions', 'Programs Information', 'Research Collaboration', 'Media & Press', 'Other'];

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Sri Lanka' },
  { icon: '📞', label: 'Phone', value: 'To Be Updated' },
  { icon: '✉️', label: 'Email', value: 'info@ugcsl.edu.lk' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 5:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact(form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>Contact Us</span>
          <h1 className="page-hero-title">We'd Love to Hear<br />From You</h1>
          <p>Have questions about admissions, programs, or online learning? Our team is here to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Reach out to us through any of the channels below, or fill in the form and we'll get back to you within 24 hours.</p>

              <div className="contact-details">
                {contactInfo.map((c) => (
                  <div key={c.label} className="contact-detail">
                    <div className="contact-detail-icon">{c.icon}</div>
                    <div>
                      <span className="contact-detail-label">{c.label}</span>
                      <span className="contact-detail-value">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="map-placeholder">
                <span>🗺️</span>
                <p>Colombo, Sri Lanka</p>
                <small>Interactive map coming soon</small>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              <h2>Send a Message</h2>

              {status === 'success' ? (
                <div className="form-success">
                  <span>✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-dark" onClick={() => setStatus('idle')}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+94 XX XXX XXXX" />
                    </div>
                    <div className="form-group">
                      <label>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required>
                        <option value="">Select a subject</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." rows={5} required />
                  </div>
                  {status === 'error' && (
                    <p className="form-error">Something went wrong. Please try again.</p>
                  )}
                  <button type="submit" className="btn btn-dark form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
