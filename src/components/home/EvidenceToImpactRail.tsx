'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import LineIcon, { type LineIconName } from '@/components/LineIcon';
import { ACCELERATOR_STAGES, type AcceleratorStage } from '@/data/homepage';
import styles from './EvidenceToImpactRail.module.css';

const STAGE_ICONS: LineIconName[] = [
  'compass',
  'pulse',
  'book',
  'pen',
  'cube',
  'building',
  'coin',
  'flag',
  'bars',
  'expand',
];

const PHASES: Array<{
  name: AcceleratorStage['phase'];
  firstStage: string;
}> = [
  { name: 'Evidence & Insight', firstStage: 'Discover' },
  { name: 'Design & Policy', firstStage: 'Design' },
  { name: 'Capital & Scale', firstStage: 'Finance' },
];

export default function EvidenceToImpactRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flowProgress, setFlowProgress] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const stationRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const rafRef = useRef<number | null>(null);

  const current = ACCELERATOR_STAGES[activeIndex] ?? ACCELERATOR_STAGES[0];

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    const stations = stationRefs.current;
    const nodes = nodeRefs.current;
    if (!track || stations.length === 0) return;

    const triggerY = window.innerHeight * 0.42;

    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < stations.length; i++) {
      const el = stations[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - triggerY);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    }

    setActiveIndex(closestIdx);

    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];
    if (firstNode && lastNode) {
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();
      const startY = firstRect.top + firstRect.height / 2;
      const endY = lastRect.top + lastRect.height / 2;
      const span = endY - startY;
      if (span > 0) {
        const raw = (triggerY - startY) / span;
        setFlowProgress(Math.max(0, Math.min(1, raw)));
      }
    }
  }, []);

  useEffect(() => {
    const onScrollOrResize = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateFromScroll();
      });
    };

    updateFromScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateFromScroll]);

  const scrollToStage = (index: number) => {
    const clamped = Math.max(0, Math.min(ACCELERATOR_STAGES.length - 1, index));
    const target = stationRefs.current[clamped];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const targetCenter = window.scrollY + rect.top + rect.height / 2;
    const desiredTop = targetCenter - window.innerHeight * 0.42;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: Math.max(0, desiredTop),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={styles.wrapper}>
      {/* Macro Phase Continuum */}
      <nav className={styles.phaseBar} aria-label="Pipeline phases">
        {PHASES.map((phase, idx) => {
          const isCurrentPhase = current.phase === phase.name;
          const targetIndex = ACCELERATOR_STAGES.findIndex(
            (s) => s.title === phase.firstStage,
          );
          const phaseActiveIdx = PHASES.findIndex(
            (p) => p.name === current.phase,
          );
          const isPassedPhase = idx < phaseActiveIdx;

          return (
            <button
              key={phase.name}
              type="button"
              onClick={() => scrollToStage(targetIndex >= 0 ? targetIndex : 0)}
              className={`${styles.phaseItem} ${
                isCurrentPhase ? styles.phaseActive : ''
              } ${isPassedPhase ? styles.phasePassed : ''}`}
            >
              <span className={styles.phaseDot} aria-hidden="true" />
              <span className={styles.phaseName}>{phase.name}</span>
              {idx < PHASES.length - 1 && (
                <span className={styles.phaseArrow} aria-hidden="true">
                  →
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Two-Column Scroll-Driven Pipeline */}
      <div className={styles.pipelineLayout}>
        {/* Sticky Active Stage Monograph */}
        <aside className={styles.spotlightCol} aria-live="polite">
          <div className={styles.detailCard}>
            <div className={styles.detailHeader}>
              <span className={styles.detailIcon} aria-hidden="true">
                <LineIcon name={STAGE_ICONS[activeIndex] ?? 'compass'} size={24} />
              </span>
              <span className={styles.detailPhase}>
                <span className={styles.detailPhaseDot} aria-hidden="true" />
                {current.phase}
              </span>
              <h3 className={styles.detailTitle}>{current.title}</h3>
            </div>

            <p className={styles.detailDesc}>{current.description}</p>

            <div className={styles.outputBox}>
              <span className={styles.outputLabel}>Stage Milestone</span>
              <p className={styles.outputValue}>{current.output}</p>
            </div>

            <div className={styles.detailFooter}>
              <div className={styles.progressMeter} aria-hidden="true">
                <div
                  className={styles.progressMeterFill}
                  style={{
                    transform: `scaleX(${
                      (activeIndex + 1) / ACCELERATOR_STAGES.length
                    })`,
                  }}
                />
              </div>

              <div className={styles.controls}>
                <button
                  type="button"
                  className={styles.navArrow}
                  disabled={activeIndex === 0}
                  onClick={() => scrollToStage(activeIndex - 1)}
                  aria-label="Previous pipeline stage"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  className={styles.navArrow}
                  disabled={activeIndex === ACCELERATOR_STAGES.length - 1}
                  onClick={() => scrollToStage(activeIndex + 1)}
                  aria-label="Next pipeline stage"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Vertical Scrollable Pipeline Conduit */}
        <div className={styles.conduitCol} ref={trackRef}>
          {/* Structural vertical rail + live scroll-filled flow line */}
          <div className={styles.conduitRail} aria-hidden="true">
            <div
              className={styles.conduitFill}
              style={{ transform: `scaleY(${flowProgress})` }}
            />
          </div>

          <div
            className={styles.stationList}
            role="list"
            aria-label="Evidence-to-Impact Pipeline Stages"
          >
            {ACCELERATOR_STAGES.map((stage, idx) => {
              const isSelected = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={stage.title}
                  ref={(el) => {
                    stationRefs.current[idx] = el;
                  }}
                  type="button"
                  role="listitem"
                  aria-current={isSelected ? 'step' : undefined}
                  onClick={() => scrollToStage(idx)}
                  className={`${styles.station} ${
                    isSelected ? styles.stationActive : ''
                  } ${isPassed ? styles.stationPassed : ''}`}
                >
                  <span
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                    className={styles.stationNode}
                    aria-hidden="true"
                  />
                  <span className={styles.stationConnector} aria-hidden="true" />

                  <span className={styles.stationBody}>
                    <span className={styles.stationMeta}>{stage.phase}</span>
                    <span className={styles.stationTitleRow}>
                      <span className={styles.stationIcon} aria-hidden="true">
                        <LineIcon name={STAGE_ICONS[idx] ?? 'compass'} size={16} />
                      </span>
                      <span className={styles.stationTitle}>{stage.title}</span>
                    </span>
                    <span className={styles.stationDesc}>
                      {stage.description}
                    </span>
                    <span className={styles.stationOutput}>
                      <span className={styles.stationOutputLabel}>
                        Milestone:
                      </span>{' '}
                      {stage.output}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
