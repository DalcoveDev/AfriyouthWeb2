'use client';

import { useState } from 'react';
import { STRATEGIC_DIVISIONS } from '@/data/homepage';
import EditorialImageSlot from '@/components/EditorialImageSlot';
import styles from './DivisionExplorer.module.css';

export default function DivisionExplorer() {
  const [activeId, setActiveId] = useState(STRATEGIC_DIVISIONS[0].id);
  const current =
    STRATEGIC_DIVISIONS.find((d) => d.id === activeId) ?? STRATEGIC_DIVISIONS[0];

  return (
    <div className={styles.layout}>
      {/* Left: Editorial Index List */}
      <div className={styles.indexColumn} role="tablist" aria-label="AfriYouth Strategic Divisions">
        {STRATEGIC_DIVISIONS.map((item) => {
          const isSelected = item.id === current.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`${styles.indexItem} ${isSelected ? styles.indexItemActive : ''}`}
              onClick={() => setActiveId(item.id)}
            >
              <span className={styles.indexNum}>{item.number}</span>
              <span className={styles.indexText}>
                <span className={styles.divisionTag}>{item.division}</span>
                <span className={styles.labTitle}>{item.labName}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </button>
          );
        })}
      </div>

      {/* Right: Monograph Detail Panel */}
      <article className={styles.detailPanel} role="tabpanel" aria-live="polite">
        <div className={styles.detailTop}>
          <div className={styles.metaRow}>
            <span className="status-tag">{current.status}</span>
            <span className={styles.productLabel}>{current.division}</span>
          </div>
          <h3 className={styles.panelHeading}>{current.labName}</h3>
          <p className={styles.panelSummary}>{current.summary}</p>

          <div className={styles.flagshipBlock}>
            <span className={styles.blockLabel}>Flagship Output</span>
            <p className={styles.flagshipTitle}>{current.flagshipProduct}</p>
          </div>

          <div className={styles.servicesWrap}>
            <span className={styles.blockLabel}>Key Capabilities</span>
            <ul className={styles.servicesList}>
              {current.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <EditorialImageSlot
          aspectRatio="3/2"
          src={current.photoSrc}
          alt={current.photoAlt}
          slotTitle={current.photoTitle}
          artDirection={current.photoDirection}
        />
      </article>
    </div>
  );
}