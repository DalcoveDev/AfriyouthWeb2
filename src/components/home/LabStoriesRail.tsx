'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WORK_CHAPTERS } from '@/data/labs';
import styles from './LabStoriesRail.module.css';

const SHORT_NAMES: Record<string, string> = {
  'venture-lab': 'Venture Lab',
  'research-lab': 'Research Lab',
  'policy-lab': 'Policy Lab',
  'foresight-lab': 'Foresight Lab',
  'career-academy': 'Career Academy',
};

const DISCIPLINES: Record<string, string> = {
  'venture-lab': 'Innovation & Entrepreneurship',
  'research-lab': 'Research & Evidence',
  'policy-lab': 'Policy & Governance',
  'foresight-lab': 'Foresight & Futures',
  'career-academy': 'Leadership & Capacity',
};

export default function LabStoriesRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[next] as HTMLElement | undefined;
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    setIndex(next);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const nearest = children.reduce(
      (best, child, childIndex) => {
        const distance = Math.abs(child.offsetLeft - track.scrollLeft);
        return distance < best.distance ? { index: childIndex, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setIndex(nearest.index);
  };

  return (
    <div className={styles.wrap}>
      <div
        ref={trackRef}
        className={styles.track}
        onScroll={handleScroll}
        role="region"
        aria-label="AfriYouth labs and divisions"
      >
        {WORK_CHAPTERS.map((lab, labIndex) => (
          <Link
            key={lab.id}
            href={`/our-work#${lab.id}`}
            className={styles.card}
            aria-label={`${lab.title} — ${lab.division}`}
          >
            <span className={styles.media}>
              <Image
                src={lab.photoSrc}
                alt={lab.photoAlt}
                fill
                sizes="(max-width: 720px) 78vw, (max-width: 1100px) 42vw, 310px"
                className={styles.image}
              />
            </span>

            <span className={styles.meta}>
              <span className={styles.row}>
                <span className={styles.num}>{String(labIndex + 1).padStart(2, '0')}</span>
                <span className={styles.name}>{SHORT_NAMES[lab.id] ?? lab.title}</span>
              </span>
              <span className={styles.discipline}>
                {DISCIPLINES[lab.id] ?? lab.division}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous labs"
            onClick={() => goTo(Math.max(0, index - 1))}
            disabled={index === 0}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next labs"
            onClick={() => goTo(Math.min(WORK_CHAPTERS.length - 1, index + 1))}
            disabled={index === WORK_CHAPTERS.length - 1}
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {WORK_CHAPTERS.map((lab, dotIndex) => (
            <button
              key={lab.id}
              type="button"
              className={`${styles.dot} ${index === dotIndex ? styles.dotActive : ''}`}
              aria-label={`Show ${SHORT_NAMES[lab.id] ?? lab.title}`}
              aria-current={index === dotIndex}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
