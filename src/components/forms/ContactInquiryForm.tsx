'use client';

import { useState } from 'react';
import styles from './ContactInquiryForm.module.css';

const INBOX = 'info@afriyouthlabs.org';

function buildMailto(fields: {
  name: string;
  organization: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}) {
  const subject = `AfriYouth inquiry — ${fields.topic}`;
  const body = [
    `Name: ${fields.name}`,
    `Organization: ${fields.organization || '—'}`,
    `Email: ${fields.email}`,
    `Telephone / WhatsApp: ${fields.phone || '—'}`,
    `Inquiry pathway: ${fields.topic}`,
    '',
    'Message:',
    fields.message,
  ].join('\r\n');

  return `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [mailto, setMailto] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const link = buildMailto({
      name: String(data.get('name') ?? ''),
      organization: String(data.get('organization') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      topic: String(data.get('topic') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    setMailto(link);
    setSubmitted(true);
    window.location.href = link;
  };

  if (submitted) {
    return (
      <div className={styles.confirmation} role="status" aria-live="polite">
        <h3>Your Email App Should Now Open</h3>
        <p>
          Your inquiry has been prepared and addressed to our Kigali coordination desk (
          <code>{INBOX}</code>). Send the email from your mail app and our research and
          partnerships team will respond within two business days.
        </p>
        <p>
          If nothing opened,{' '}
          <a href={mailto}>open the prepared inquiry</a> or email{' '}
          <a href={`mailto:${INBOX}`}>{INBOX}</a> directly.
        </p>
        <button
          type="button"
          className={`btn btn-ghost-inverse ${styles.resetBtn}`}
          onClick={() => setSubmitted(false)}
        >
          Edit inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.intro}>
        <span className="section-rule" aria-hidden="true" />
        <p className={styles.introText}>
          Tell us who you are and what you are exploring—we route every inquiry directly to the
          relevant lab lead at our Kigali, Rwanda headquarters (<strong>{INBOX}</strong>).
        </p>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="e.g. Aline Uwase"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-org">Organization / Institution</label>
        <input
          id="contact-org"
          name="organization"
          type="text"
          autoComplete="organization"
          placeholder="e.g. University of Rwanda, Development Foundation, or Venture"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="aline.uwase@organization.org"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone">Telephone / WhatsApp (Optional)</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+250 788 000 000"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-topic">Inquiry Pathway</label>
        <select id="contact-topic" name="topic">
          <option>Institutional Partnership / Cohort Co-Creation</option>
          <option>Commission Applied Research, M&amp;E, or Foresight</option>
          <option>University Employability Programme Inquiry</option>
          <option>Youth Innovation &amp; Policy Challenge Information</option>
          <option>Resource Mobilization &amp; Investment Readiness</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Share context on your inquiry, goals, or collaboration timeline in Rwanda or across Africa..."
        />
      </div>

      <button type="submit" className={`btn btn-accent ${styles.submitBtn}`}>
        Submit inquiry
      </button>
    </form>
  );
}
