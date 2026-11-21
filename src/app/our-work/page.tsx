import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import EditorialImageSlot from '@/components/EditorialImageSlot';
import ArrowLink from '@/components/ArrowLink';
import { WORK_CHAPTERS } from '@/data/labs';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Work | AfriYouth Innovation Labs',
  description:
    'Explore AfriYouth’s five specialized labs and supportive services across research, policy, venture incubation, strategic foresight, and career readiness.',
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title="Five Specialized Labs Uniting Research, Policy, Design & Venture Building"
        image="/images/our-work-science-lab.jpg"
        imageAlt="Researchers working with microscopes in a modern laboratory"
        lead="Each lab operates as a focused discipline while feeding into AfriYouth’s unified Evidence-to-Impact ecosystem."
      />

      {/* Understated editorial chapter index */}
      <nav className={styles.chapterNav} aria-label="Labs directory navigation">
        <div className={`container ${styles.chapterNavInner}`}>
          <ul className={styles.chapterNavList}>
            {WORK_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className={styles.chapterNavLink}>
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {WORK_CHAPTERS.map((chapter, idx) => {
        const isReversed = idx % 2 === 1;
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`${styles.chapter} ${isReversed ? styles.chapterMist : ''}`}
          >
            <div className={`container ${styles.grid}`}>
              <div className={`${styles.text} ${isReversed ? styles.textSecond : ''}`}>
                <span className="section-rule" aria-hidden="true" />
                <div className={styles.tagRow}>
                  <span className="status-tag">{chapter.status}</span>
                </div>
                <h2 className={styles.h2}>{chapter.title}</h2>
                <p className={styles.prose}>{chapter.description}</p>

                <div className={styles.flagship}>
                  <p className={styles.flagshipTitle}>{chapter.product}</p>
                </div>

                <ul className={styles.serviceList}>
                  {chapter.services.map((srv) => (
                    <li key={srv}>{srv}</li>
                  ))}
                </ul>

                <ArrowLink href="/contact">Talk to this lab</ArrowLink>
              </div>

              <div className={`${styles.image} ${isReversed ? styles.imageFirst : ''}`}>
                <EditorialImageSlot
                  aspectRatio="3/2"
                  src={chapter.photoSrc}
                  alt={chapter.photoAlt}
                  slotTitle={chapter.photoTitle}
                  artDirection={chapter.artDirection}
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* Cross-Cutting Supportive Services */}
      <section className={styles.dark}>
        <div className="container">
          <header className={styles.darkHeader}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.darkTitle}>
              Helping Partners Prove Impact &amp; Mobilize Resources
            </h2>
          </header>

          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <h3 className={styles.supportTitle}>Impact &amp; Learning Services</h3>
              <p className={styles.supportBody}>
                Many organizations implement projects without demonstrating whether they work.
                Anchored by the proposed <strong>AfriYouth Impact Dashboard</strong>, we deliver
                Theory of Change design, logical frameworks, M&amp;E systems, KPIs, baseline
                studies, outcome evaluations, learning reports, and impact storytelling.
              </p>
            </div>

            <div className={styles.supportCard}>
              <h3 className={styles.supportTitle}>Funding &amp; Investment Readiness</h3>
              <p className={styles.supportBody}>
                A cross-cutting Resource Mobilization &amp; Partnerships service covering grant
                opportunity intelligence, grant strategy, proposal development, donor mapping,
                investor readiness, pitch decks, business cases, financial modelling, and
                due-diligence preparation.
              </p>
            </div>
          </div>

          <ArrowLink href="/partnerships" inverse>
            Commission research or advisory
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
