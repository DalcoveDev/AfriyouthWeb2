'use client';

import { useEffect, useId, useRef, useState } from 'react';
import styles from './WhatsAppChat.module.css';

const PHONE = '250788123456';

const QUICK_TOPICS = [
  {
    label: 'Commission research',
    message: 'Hello AfriYouth, I would like to discuss commissioning a research study.',
  },
  {
    label: 'Explore a partnership',
    message: 'Hello AfriYouth, I would like to explore an institutional partnership.',
  },
  {
    label: 'Ask about programmes',
    message: 'Hello AfriYouth, I would like to ask about your programmes and cohorts.',
  },
];

function waLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    panelRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <div className={styles.root}>
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-labelledby={titleId}
          tabIndex={-1}
          className={styles.panel}
        >
          <div className={styles.header}>
            <div>
              <p className={styles.eyebrow}>WhatsApp</p>
              <h2 id={titleId} className={styles.title}>
                Chat with AfriYouth
              </h2>
            </div>
            <button
              type="button"
              className={styles.close}
              aria-label="Close WhatsApp chat"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            >
              ×
            </button>
          </div>

          <div className={styles.body}>
            <p className={styles.intro}>
              Have a question about our labs, programmes or partnerships? Send us a message
              and our Kigali team will reply within two business days.
            </p>

            <ul className={styles.topics}>
              {QUICK_TOPICS.map((topic) => (
                <li key={topic.label}>
                  <a
                    href={waLink(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.topic}
                    onClick={() => setOpen(false)}
                  >
                    <span>{topic.label}</span>
                    <span className={styles.topicArrow} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={waLink('Hello AfriYouth, I would like to learn more about your work.')}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.start}
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className={styles.startIcon} />
              Start chat on WhatsApp
            </a>

            <p className={styles.fallback}>
              Prefer email?{' '}
              <a href="mailto:info@afriyouthlabs.org">info@afriyouthlabs.org</a>
            </p>
          </div>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        onClick={() => setOpen((value) => !value)}
      >
        <WhatsAppIcon className={styles.toggleIcon} />
        <span className={styles.toggleLabel}>WhatsApp</span>
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
