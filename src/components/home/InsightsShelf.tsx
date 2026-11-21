'use client';

import { useState } from 'react';
import ArrowLink from '@/components/ArrowLink';
import PublicationCover from './PublicationCover';
import { PUBLICATION_CONCEPTS } from '@/data/homepage';
import styles from './InsightsShelf.module.css';

const FOCUS_AREAS = [
  'All focus areas',
  'Research & Evidence',
  'Policy & Governance',
  'Strategic Foresight',
] as const;

const PAGE_SIZE = 6;

interface InsightsShelfProps {
  /** Show the library pager beneath the grid when items span multiple pages */
  paged?: boolean;
}

export default function InsightsShelf({ paged = false }: InsightsShelfProps) {
  const [focus, setFocus] = useState<(typeof FOCUS_AREAS)[number]>('All focus areas');
  const [page, setPage] = useState(1);

  const filtered =
    focus === 'All focus areas'
      ? PUBLICATION_CONCEPTS
      : PUBLICATION_CONCEPTS.filter((p) => p.category === focus);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = paged ? Math.min(page, pageCount) : 1;
  const visible = paged
    ? filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    : filtered;

  const handleFocusChange = (value: (typeof FOCUS_AREAS)[number]) => {
    setFocus(value);
    setPage(1);
  };

  return (
    <div>
      <div className={styles.filterBar}>
        <div className={styles.tabs} role="tablist" aria-label="Filter publications by focus area">
          {FOCUS_AREAS.map((area) => (
            <button
              key={area}
              type="button"
              role="tab"
              aria-selected={focus === area}
              className={`${styles.tab} ${focus === area ? styles.tabActive : ''}`}
              onClick={() => handleFocusChange(area)}
            >
              {area === 'All focus areas' ? 'All' : area}
            </button>
          ))}
        </div>
        <span className={styles.count}>
          {filtered.length} {filtered.length === 1 ? 'publication series' : 'publication series'}
        </span>
      </div>

      <div className={styles.shelf}>
        {visible.map((item) => (
          <article key={item.id} id={item.id} className={styles.publication}>
            <div className={styles.coverCol}>
              <PublicationCover publication={item} />
            </div>

            <div className={styles.meta}>
              <span className={styles.status}>{item.status}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.summary}>{item.summary}</p>
              <ArrowLink className={styles.readLink} href="/contact">
                Commission or inquire about this series
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>

      {paged && pageCount > 1 && (
        <div className={styles.pager}>
          <span className={styles.pageStatus}>
            Page <strong>{currentPage}</strong> / {pageCount}
          </span>
          <div className={styles.pageButtons}>
            <button
              type="button"
              className={styles.pageBtn}
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.pageBtn}
              aria-label="Next page"
              disabled={currentPage === pageCount}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
