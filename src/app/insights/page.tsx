import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ArrowLink from '@/components/ArrowLink';
import InsightsShelf from '@/components/home/InsightsShelf';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights & Evidence | AfriYouth Innovation Labs',
  description:
    'AfriYouth Evidence Reports, Policy Solutions Series, and Africa 2050 Futures Series—knowledge frameworks for African transformation.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        variant="split"
        title="Research Reports, Policy Solutions & Strategic Foresight"
        image="/images/insights-library-research.jpg"
        imageAlt="Two students reading and taking notes together in a library"
        lead="AfriYouth’s intellectual architecture translates empirical field evidence and 2050 scenario planning into clear resources for policymakers, institutions, and innovators."
      />

      <section className={styles.section}>
        <div className="container">
          <InsightsShelf paged />
        </div>
      </section>

      <section className={styles.mist}>
        <div className={`container ${styles.split}`}>
          <div>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>
              Africa’s Youth Workforce in 2050: Four Possible Futures
            </h2>
            <p className={styles.prose}>
              Featured within the proposed <strong>Africa 2050 Futures Series</strong> from our
              Strategic Foresight &amp; Futures Lab, this analytical format uses horizon
              scanning, PESTLE/STEEPV frameworks, and emerging-technology analysis to equip
              governments and youth institutions for 2030, 2040, and 2050 scenarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.h3}>Commissioned &amp; Upcoming Publications</h3>
            <p className={styles.cardBody}>
              Downloadable PDFs and full datasets will be added to this library once each
              research study or policy brief completes peer review and organizational release.
            </p>
            <ArrowLink href="/contact" inverse>
              Commission a research study
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
