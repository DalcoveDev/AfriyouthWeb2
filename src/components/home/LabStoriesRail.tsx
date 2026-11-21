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
        {WORK_CHAPTERS.map((lab) => (
          <Link
            key={lab.id}
            href={`/our-work#${lab.id}`}
            className={styles.card}
            aria-label={`${lab.title} — ${lab.division}`}
          >
            <Image
              src={lab.photoSrc}
              alt={lab.photoAlt}
              fill
              sizes="(max-width: 720px) 72vw, (max-width: 1100px) 40vw, 300px"
              className={styles.image}
            />
            <span className={styles.scrim} aria-hidden="true" />
            <span className={styles.tag}>{SHORT_NAMES[lab.id] ?? lab.title}</span>
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
