'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArrowLink from '@/components/ArrowLink';
import { PROGRAMS } from '@/data/programs';
import styles from './ProgramDirectory.module.css';

const STATUS_FILTERS = [
  'All',
  'Proposed Flagship',
  'Proposed Initiative',
  'Program Track Concept',
] as const;

const SIMULATION_STEPS = [
  'Analyse the job description',
  'Research the organization',
  'Customize the CV',
  'Write a tailored cover letter',
  'Submit formal application',
  'Complete a psychometric test',
  'Attend a structured interview',
  'Complete a practical case study',
  'Negotiate salary and terms',
  'Receive structured mentor feedback',
];

export default function ProgramDirectory() {
  const [selected, setSelected] = useState<(typeof STATUS_FILTERS)[number]>('All');

  const items =
    selected === 'All'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.status === selected);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <span className="section-rule" aria-hidden="true" />
          <h2 className={styles.heading}>Five Proposed Programme Tracks</h2>
          <p className={styles.lead}>
            Each track is structured to move participants from theoretical knowledge to applied
            evidence, working prototypes, and measurable career or venture outcomes.
          </p>
        </div>
        <p className={styles.accuracyNote}>
          <strong>Portfolio Status:</strong> These programmes represent AfriYouth’s strategic
          portfolio architecture. Cohort dates and application windows are published upon formal
          partner and organizational verification.
        </p>
      </header>

      <div className={styles.filterBar} role="group" aria-label="Filter programs by status">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            type="button"
            aria-pressed={selected === status}
            className={`${styles.filterBtn} ${selected === status ? styles.filterActive : ''}`}
            onClick={() => setSelected(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {items.map((prog) => (
          <article key={prog.id} id={prog.id} className={styles.row}>
            <div className={styles.left}>
              <div className={styles.photoFrame}>
                <Image
                  src={prog.image}
                  alt={prog.imageAlt}
                  fill
                  sizes="(max-width: 960px) 100vw, 44vw"
                  className={styles.photo}
                />
              </div>
              <span className={styles.status}>{prog.status}</span>
              <h3 className={styles.title}>{prog.title}</h3>
              <p className={styles.purpose}>{prog.purpose}</p>
              <p className={styles.audience}>
                <strong>Intended Audience:</strong> {prog.audience}
              </p>
            </div>

            <div className={styles.right}>
              <span className={styles.subLabel}>Participation &amp; Learning Process</span>
              <ul className={styles.processList}>
                {prog.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className={styles.outcome}>
                <strong>Intended Outcome:</strong> {prog.outcome}
              </div>
              <ArrowLink className={styles.inquireLink} href="/contact">
                Inquire about program co-design or launch dates
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>

      {/* Mandatory Experiential Learning Spotlight (from official organizational document) */}
      <div className={styles.simulationSection}>
        <div className={styles.simulationIntro}>
          <span className="section-rule" aria-hidden="true" />
          <h2 className={styles.simulationTitle}>
            Mandatory Experiential Learning: The 10-Step Employability Simulation
          </h2>
          <p className={styles.simulationLead}>
            Instead of passive <strong>Training → Certificate</strong> workshops, our Career
            &amp; Professional Development Academy requires every participant to move through a
            rigorous cycle:
          </p>
          <p className={styles.simulationChain}>
            Learn → Practice → Apply → Receive feedback → Improve → Demonstrate
          </p>
          <p className={styles.simulationLead}>
            In the Employability Simulation, participants receive a realistic job vacancy and
            complete all ten stages of a competitive hiring process before graduation.
          </p>
        </div>

        <ol className={styles.simulationList}>
          {SIMULATION_STEPS.map((step, idx) => (
            <li key={step} className={styles.simulationStep}>
              <span className={styles.stepNum}>{String(idx + 1).padStart(2, '0')}</span>
              <span className={styles.stepText}>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
