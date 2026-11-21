import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ArrowLink from '@/components/ArrowLink';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Partnerships | AfriYouth Innovation Labs',
  description:
    'Collaborate with AfriYouth Innovation Labs across applied research, policy innovation challenges, university employability, and impact measurement.',
};

const MODELS = [
  {
    title: 'Research, Evaluation & Foresight Commissioning',
    detail:
      'Partner with our Research & Evidence Lab and Foresight Lab for baseline and endline studies, youth surveys, impact assessments, political-economy diagnostics, and Africa 2050 scenario planning.',
    deliverables: 'Evidence Reports · Baseline & Endline Studies · Africa 2050 Horizon Scans',
  },
  {
    title: 'Policy Innovation Challenge & Accelerator Co-Creation',
    detail:
      'Co-host thematic Policy Innovation Challenges or Evidence-to-Impact Accelerator cohorts in youth employment, AI, climate, health, education, agriculture, or urban governance.',
    deliverables: 'Policy Proposals · Validated Working Prototypes · Policy Innovation Demo Day',
  },
  {
    title: 'University & Graduate Employability Partnerships',
    detail:
      'Deploy the University Employability Programme or graduate bootcamps featuring mandatory 10-step Employability Simulations and outcome-oriented professional competency portfolios.',
    deliverables: '10-Step Employability Simulation · Competency Assessments · Graduate Portfolios',
  },
  {
    title: 'Impact Measurement & Resource Mobilization Support',
    detail:
      'Engage our Impact & Learning Services and Funding Readiness team for Theory of Change design, M&E frameworks, grant strategy, donor mapping, and investor preparation.',
    deliverables: 'AfriYouth Impact Dashboard · M&E Frameworks · Investment Readiness Packages',
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        variant="split"
        title="Institutional Collaboration for Measurable African Impact"
        image="/images/partnerships-meeting.jpg"
        imageAlt="Professionals collaborating around a meeting table in a bright office"
        lead="We partner with development foundations, academic institutions, public-sector bodies, and private enterprises—anchoring every engagement in shared evidence goals and transparent outcome measurement."
      />

      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div className={styles.rail}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Four Collaboration Pathways</h2>
            <p className={styles.prose}>
              Every partnership begins with clear shared evidence goals, community relevance,
              and transparent outcome measurement.
            </p>
            <ArrowLink href="/contact">Initiate a partnership discussion</ArrowLink>
          </div>

          <ol className={styles.pathways}>
            {MODELS.map((m) => (
              <li key={m.title} className={styles.pathway}>
                <h3 className={styles.pathwayTitle}>{m.title}</h3>
                <p className={styles.pathwayDetail}>{m.detail}</p>
                <p className={styles.deliverables}>{m.deliverables}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.advisory}>
        <div className={`container ${styles.advisoryGrid}`}>
          <div className={styles.advisoryCol}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.advisoryTitle}>Impact &amp; Learning Services</h2>
            <p className={styles.advisoryBody}>
              Many organizations implement projects but struggle to demonstrate whether they
              actually work. Anchored by the proposed <strong>AfriYouth Impact Dashboard</strong>,
              we design Theories of Change, logical frameworks, M&amp;E systems, KPIs, baseline
              and outcome evaluations, learning reports, and impact storytelling.
            </p>
          </div>

          <div className={styles.advisoryCol}>
            <span className="section-rule section-rule-blue" aria-hidden="true" />
            <h2 className={styles.advisoryTitle}>Resource Mobilization &amp; Investment Readiness</h2>
            <p className={styles.advisoryBody}>
              A cross-cutting commercial advisory service supporting partners and ventures with
              grant opportunity intelligence, grant strategy, proposal development, donor mapping,
              pitch deck development, business cases, financial modelling, and due-diligence
              preparation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
