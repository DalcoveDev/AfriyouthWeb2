'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className={styles.subscribeNotice} role="status" aria-live="polite">
        Thank you. Updates on research, programmes and partnership calls will be sent to{' '}
        <strong>{email}</strong>.
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
