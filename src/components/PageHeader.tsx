import Image from 'next/image';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  /**
   * 'immersion' (default): full-width documentary frame with bottom-weighted editorial scrim.
   * 'split': asymmetric editorial split header (typographic column + un-scrimmed documentary image).
   */
  variant?: 'immersion' | 'split';
}

export default function PageHeader({
  title,
  lead,
  image,
  imageAlt,
  variant = 'immersion',
}: PageHeaderProps) {
  if (variant === 'split') {
    return (
      <section className={styles.splitHero}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.splitCopy}>
            <span className={styles.splitRule} aria-hidden="true" />
            <h1 className={styles.splitTitle}>{title}</h1>
            <p className={styles.splitLead}>{lead}</p>
          </div>
          <div className={styles.splitMedia}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 48vw"
              className={styles.splitImage}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.frame}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1410px) 100vw, 1410px"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.body}>
          <span className={styles.heroRule} aria-hidden="true" />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </div>
      </div>
    </section>
  );
}
