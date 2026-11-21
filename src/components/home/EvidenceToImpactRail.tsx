'use client';

import { useState } from 'react';
import { ACCELERATOR_STAGES } from '@/data/homepage';
import styles from './EvidenceToImpactRail.module.css';

const PHASES = [
  { name: 'I. Evidence & Insight', range: [1, 3] },
  { name: 'II. Design & Policy', range: [4, 6] },
  { name: 'III. Capital & Scale', range: [7, 10] },
];

export default function EvidenceToImpactRail() {
  const [activeStep, setActiveStep] = useState(1);
  const current =
    ACCELERATOR_STAGES.find((s) => s.step === activeStep) ?? ACCELERATOR_STAGES[0];

  const handleStepChange = (step: number) => {
    if (step >= 1 && step <= 10) setActiveStep(step);
  };

  return (
    <div className={styles.wrapper}>
      {/* Macro Phase Headers */}
      <div className={styles.phaseBar}>
        {PHASES.map((phase) => {
          const isCurrentPhase =
            activeStep >= phase.range[0] && activeStep <= phase.range[1];
          return (
            <div
              key={phase.name}
              className={`${styles.phaseItem} ${isCurrentPhase ? styles.phaseActive : ''}`}
            >
              <span>{phase.name}</span>
              <span className={styles.phaseRange}>
                Stages 0{phase.range[0]}–{phase.range[1] < 10 ? `0${phase.range[1]}` : phase.range[1]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Horizontal Scrubber Track */}
      <div className={styles.rail} role="tablist" aria-label="Evidence-to-Impact 10-Stage Process">
        {ACCELERATOR_STAGES.map((stage) => {
          const isSelected = stage.step === activeStep;
          const isPassed = stage.step < activeStep;
          return (
            <button
              key={stage.step}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`${styles.node} ${isSelected ? styles.nodeSelected : ''} ${
                isPassed ? styles.nodePassed : ''
              }`}
              onClick={() => handleStepChange(stage.step)}
            >
              <span className={styles.nodeDot} />
              <span className={styles.nodeCode}>{stage.code}</span>
              <span className={styles.nodeTitle}>{stage.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Monograph Display */}
      <div className={styles.detailCard} role="tabpanel" aria-live="polite">
        <div className={styles.detailLeft}>
          <span className={styles.detailPhase}>{current.phase}</span>
          <h3 className={styles.detailTitle}>
            Stage {current.code}: {current.title}
          </h3>
          <p className={styles.detailDesc}>{current.description}</p>
        </div>

        <div className={styles.detailRight}>
          <div className={styles.outputBox}>
            <span className={styles.outputLabel}>Stage Milestone</span>
            <p className={styles.outputValue}>{current.output}</p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navArrow}
              disabled={activeStep === 1}
              onClick={() => handleStepChange(activeStep - 1)}
              aria-label="Previous stage"
            >
              ← Prev
            </button>
            <button
              type="button"
              className={styles.navArrow}
              disabled={activeStep === 10}
              onClick={() => handleStepChange(activeStep + 1)}
              aria-label="Next stage"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}