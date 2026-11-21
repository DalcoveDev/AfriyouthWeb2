import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ArrowLink from '@/components/ArrowLink';
import EvidenceToImpactRail from '@/components/home/EvidenceToImpactRail';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Approach | AfriYouth Innovation Labs',
  description:
    'Discover how AfriYouth integrates Research, Policy, Human-Centered Design, Entrepreneurship, and Foresight across 10 Evidence-to-Impact stages.',
};

const CAPABILITIES = [
  {
    name: 'Research',
    detail: 'Empirical diagnostics, socio-economic surveys, and political-economy insight that establish what is actually happening on the ground.',
  },
  {
    name: 'Policy',
    detail: 'Regulatory analysis, governance diagnostics, and institutional reform proposals that translate field evidence into public decisions.',
  },
  {
    name: 'Human-Centered Design',
    detail: 'Participatory discovery and prototyping directly alongside the communities and institutions that will use the solution.',
  },
  {
    name: 'Entrepreneurship',
    detail: 'Business-model architecture, market validation, and investor readiness so promising interventions endure beyond grant cycles.',
  },
  {
    name: 'Strategic Foresight',
    detail: 'Horizon scanning, PESTLE/STEEPV systems analysis, and 2030–2050 scenario planning to stress-test today’s choices.',
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        variant="split"
        title="Connecting Research, Policy, Human-Centered Design, Entrepreneurship & Foresight"
        image="/images/approach-strategy-board.jpg"
        imageAlt="Two colleagues mapping a strategy framework on a chalkboard"
        lead="Traditional ecosystems fragment youth empowerment into isolated training, startup incubation, or academic research. AfriYouth unites them in one Evidence-to-Impact continuum."
      />

      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div className={styles.intro}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Five Interlocking Capabilities</h2>
            <p className={styles.prose}>
              Our competitive advantage lies in refusing to separate evidence from action.
              Every engagement draws across five capabilities so solutions remain grounded,
              fundable, and policy-relevant.
            </p>
            <p className={styles.continuum}>
              Think → Research → Design → Build → Influence → Scale
            </p>
          </div>

          <ol className={styles.capabilities}>
            {CAPABILITIES.map((c) => (
              <li key={c.name} className={styles.capability}>
                <h3 className={styles.capabilityName}>{c.name}</h3>
                <p className={styles.capabilityDetail}>{c.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.dark}>
        <div className="container">
          <div className={styles.darkHeader}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.darkTitle}>
              The Evidence-to-Impact Accelerator Pipeline
            </h2>
            <p className={styles.darkLead}>
              Rather than running disconnected research studies, startup cohorts, and training
              workshops, our flagship ten-stage pipeline carries an idea from initial community
              discovery through continental scale.
            </p>
          </div>
          <EvidenceToImpactRail />
        </div>
      </section>

      <section className={styles.bridgeSection}>
        <div className={`container ${styles.bridgeGrid}`}>
          <div>
            <span className="section-rule section-rule-blue" aria-hidden="true" />
            <h2 className={styles.bridgeTitle}>
              From Methodology to Applied Labs and Programmes
            </h2>
            <p className={styles.bridgeBody}>
              This ten-stage architecture is executed through our five specialized labs and
              translated into experiential cohorts for young innovators, universities, and
              institutional partners.
            </p>
          </div>
          <div className={styles.bridgeLinks}>
            <ArrowLink href="/our-work">Explore the five specialized labs</ArrowLink>
            <ArrowLink href="/programs">View flagship programme tracks</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
