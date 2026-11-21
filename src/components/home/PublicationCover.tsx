import Image from 'next/image';
import type { PublicationConcept } from '@/data/homepage';
import styles from './PublicationCover.module.css';

interface PublicationCoverProps {
  publication: PublicationConcept;
  compact?: boolean;
}

/** Editorial report cover combining documentary photography in the upper
    frame with a brand-toned monograph title band below. */
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
          sizes="(max-width: 620px) 100vw, (max-width: 1100px) 45vw, 280px"
          className={styles.photo}
        />
        <div className={styles.photoScrim} aria-hidden="true" />
        <span className={styles.brand}>
          AfriYouth
          <br />
          Innovation Labs
        </span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.arcs} aria-hidden="true" />
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.series}>{publication.series}</span>
        <span className={styles.category}>{publication.category}</span>
      </div>
    </div>
  );
}
