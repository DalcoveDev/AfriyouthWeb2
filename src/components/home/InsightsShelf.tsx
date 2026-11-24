'use client';

import { useId, useState } from 'react';
import ArrowLink from '@/components/ArrowLink';
import LineIcon, { PUBLICATION_CATEGORY_ICONS } from '@/components/LineIcon';
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
  const searchId = useId();
  const [focus, setFocus] = useState<(typeof FOCUS_AREAS)[number]>('All focus areas');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const searchText = query.trim().toLowerCase();

  const filtered = PUBLICATION_CONCEPTS.filter((p) => {
    const matchesFocus = focus === 'All focus areas' || p.category === focus;
    if (!matchesFocus) return false;
    if (!searchText) return true;

    return [p.title, p.summary, p.series, p.category, p.status]
      .join(' ')
      .toLowerCase()
      .includes(searchText);
  });

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = paged ? Math.min(page, pageCount) : 1;
  const visible = paged
    ? filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    : filtered;

  const handleFocusChange = (value: (typeof FOCUS_AREAS)[number]) => {
    setFocus(value);
    setPage(1);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" strokeLinecap="round" />
          </svg>
          <label htmlFor={searchId} className={styles.srOnly}>
            Search insights
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search reports, policy, foresight"
            autoComplete="off"
            spellCheck={false}
            className={styles.searchInput}
          />
          {query && (
            <button
              type="button"
              className={styles.clearBtn}
              aria-label="Clear search"
              onClick={() => handleQueryChange('')}
            >
              ×
            </button>
          )}
        </div>

        <span className={styles.count} aria-live="polite">
          {filtered.length} of {PUBLICATION_CONCEPTS.length} series
        </span>
      </div>

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
      </div>

      {visible.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            No publications match &ldquo;{query.trim()}&rdquo;
            {focus !== 'All focus areas' ? ` in ${focus}` : ''}.
          </p>
          <button
            type="button"
            className={styles.emptyBtn}
            onClick={() => {
              handleQueryChange('');
              handleFocusChange('All focus areas');
            }}
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <div className={styles.shelf}>
          {visible.map((item) => (
            <article key={item.id} id={item.id} className={styles.publication}>
              <div className={styles.coverCol}>
                <PublicationCover publication={item} />
              </div>

              <div className={styles.meta}>
                <span className={styles.category}>
                  <LineIcon name={PUBLICATION_CATEGORY_ICONS[item.category]} size={14} />
                  {item.category}
                </span>
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
      )}

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
