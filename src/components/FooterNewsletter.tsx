'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

const INBOX = 'info@afriyouthlabs.org';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const address = email.trim();
    if (!address) return;

    const subject = 'Newsletter subscription request';
    const body = `Please add this address to the AfriYouth Innovation Labs updates list:\r\n\r\n${address}`;
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className={styles.subscribeNotice} role="status" aria-live="polite">
        Your email app should now open to confirm the subscription for{' '}
        <strong>{email}</strong>. If nothing opened, write to{' '}
        <a href={`mailto:${INBOX}`}>{INBOX}</a>.
      </p>
    );
  }

  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      <label htmlFor="footer-email" className={styles.srOnly}>
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className={styles.subscribeInput}
      />
      <button type="submit" className={styles.subscribeBtn}>
        Subscribe
      </button>
    </form>
  );
}
