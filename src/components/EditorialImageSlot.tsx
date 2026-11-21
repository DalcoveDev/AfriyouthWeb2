import Image from 'next/image';
import styles from './EditorialImageSlot.module.css';

interface EditorialImageSlotProps {
  /** Provide a verified organizational image path (e.g. "/images/hero-lab.jpg") when ready */
  src?: string;
  alt: string;
  aspectRatio?: '16/10' | '4/5' | '3/2' | '3/4';
  slotTitle: string;
  artDirection: string;
  caption?: string;
  priority?: boolean;
}

export default function EditorialImageSlot({
  src,
  alt,
  aspectRatio = '4/5',
  slotTitle,
  artDirection,
  caption,
  priority = false,
}: EditorialImageSlotProps) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame} style={{ aspectRatio }}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={alt}>
            <div className={styles.placeholderInner}>
              <span className={styles.ratioBadge}>
                Documentary Photo Slot • {aspectRatio}
              </span>
              <p className={styles.slotTitle}>{slotTitle}</p>
              <p className={styles.artDirection}>{artDirection}</p>
              <span className={styles.verifyNotice}>
                Replace with verified AfriYouth photography
              </span>
            </div>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}