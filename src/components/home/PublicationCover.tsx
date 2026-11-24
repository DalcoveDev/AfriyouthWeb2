import Image from 'next/image';
import type { PublicationConcept } from '@/data/homepage';
import styles from './PublicationCover.module.css';

interface PublicationCoverProps {
  publication: PublicationConcept;
  compact?: boolean;
}

/**
 * Typographic monograph cover: a documentary plate above a solid colour band
 * carrying the series title. No gradients, no decorative arcs.
 */
export default function PublicationCover({
  publication,
  compact = false,
}: PublicationCoverProps) {
  return (
    <div
      className={`${styles.cover} ${styles[publication.tone]} ${
        compact ? styles.compact : ''
      }`}
    >
      <div className={styles.photoArea}>
        <Image
          src={publication.image}
          alt={publication.imageAlt}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1100px) 45vw, 300px"
          className={styles.photo}
        />
        <div className={styles.photoScrim} aria-hidden="true" />
      </div>

      <div className={styles.bottom}>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.series}>{publication.series}</span>
        <span className={styles.category}>{publication.category}</span>
      </div>
    </div>
  );
}
