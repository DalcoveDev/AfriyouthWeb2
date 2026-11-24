import Image from 'next/image';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  /**
   * Retained for call-site compatibility. Every route now uses the same
   * editorial opening so the site reads as one publication.
   */
  variant?: 'immersion' | 'split';
}

export default function PageHeader({ title, lead, image, imageAlt }: PageHeaderProps) {
  return (
    <section className={styles.opening}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </div>

        <figure className={styles.figure}>
          <div className={styles.media}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1320px) 100vw, 1320px"
              className={styles.image}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
