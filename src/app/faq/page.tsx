import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ArrowLink from '@/components/ArrowLink';
import FaqAccordion from './FaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AfriYouth Innovation Labs',
  description:
    'Answers to common questions about AfriYouth Innovation Labs, its programs, participation pathways, and institutional partnerships.',
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        variant="split"
        title="Clarity on Programs, Participation & Partnerships"
        image="/images/faq-laptop-remote.jpg"
        imageAlt="Woman reading on a laptop at a desk at home"
        lead="Quick answers for young innovators, universities, policymakers, and institutional partners exploring how AfriYouth works."
      />

      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div className={styles.intro}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Common Questions</h2>
            <p className={styles.prose}>
              AfriYouth Innovation Labs bridges research, policy, human-centered design,
              entrepreneurship, and strategic foresight. Below are the questions we hear most
              often from prospective participants and partners.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      <section className={styles.mist}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <h3 className={styles.ctaTitle}>Still have a question?</h3>
              <p className={styles.ctaText}>
                Reach out to discuss participation, research collaboration, or institutional
                partnerships with the AfriYouth team.
              </p>
            </div>
            <ArrowLink href="/contact" inverse>
              Contact AfriYouth
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
