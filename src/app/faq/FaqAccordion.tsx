'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

const FAQS = [
  {
    q: 'What makes AfriYouth Innovation Labs different from a typical startup incubator or NGO?',
    a: 'Most youth organizations focus solely on training, incubators on startups, think tanks on policy, and consultancies on clients. AfriYouth connects all four through Research, Policy, Human-Centered Design, Entrepreneurship, and Strategic Foresight.',
  },
  {
    q: 'Who can participate in AfriYouth’s future cohorts and academies?',
    a: 'AfriYouth’s inclusive model serves adolescents and young innovators of all genders and backgrounds, university students (University Employability Programme), recent graduates (Employability Bootcamp), and institutional partners.',
  },
  {
    q: 'Are the Evidence-to-Impact Accelerator and Policy Innovation Challenge currently open for applications?',
    a: 'These initiatives are presented as proposed flagship programs within AfriYouth’s strategic portfolio. Specific cohort launch dates and application portals will be announced only upon official organizational verification.',
  },
  {
    q: 'Can institutions commission AfriYouth for research or M&E advisory?',
    a: 'Yes. Through the Research & Evidence Lab, Policy & Governance Lab, and Impact & Learning Services, AfriYouth is structured to deliver applied policy research, baseline/endline studies, M&E systems, and funding readiness support.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {FAQS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.q} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className={styles.questionText}>{item.q}</span>
              <span className={styles.toggle} aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && <p className={styles.answer}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
