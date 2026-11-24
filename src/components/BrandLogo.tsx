import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandLogo.module.css';

interface BrandLogoProps {
  variant?: 'color' | 'monochrome-white';
  showTagline?: boolean;
}

/**
 * Official AfriYouth lockup from the brand guidelines: the celebration mark
 * beside the four-line wordmark, with "Innovation" carried in brand blue and
 * the tagline set in Gilroy beneath.
 */
export default function BrandLogo({
  variant = 'color',
  showTagline = false,
}: BrandLogoProps) {
  const isWhite = variant === 'monochrome-white';

  return (
    <Link
      href="/"
      aria-label="AfriYouth Innovation Labs — Home"
      className={`${styles.logo} ${isWhite ? styles.inverse : ''}`}
    >
      <Image
        src={isWhite ? '/brand/afriyouth-mark-white.svg' : '/brand/afriyouth-mark.svg'}
        alt=""
        width={27}
        height={42}
        priority
        className={styles.mark}
      />

      <span className={styles.wordmark}>
        <span className={styles.line}>Afri</span>
        <span className={styles.line}>Youth</span>
        <span className={`${styles.line} ${styles.innovation}`}>Innovation</span>
        <span className={styles.line}>Labs</span>
        {showTagline && (
          <span className={styles.tagline}>Fueling Innovators for Sustainable Development</span>
        )}
      </span>
    </Link>
  );
}
