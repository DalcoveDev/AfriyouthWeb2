import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'color' | 'monochrome-white';
  showTagline?: boolean;
}

/**
 * Brand mark extracted from the official AfriYouth logo lockup in the brand
 * guidelines (page 3): the celebration figure with raised arms.
 * Colour version for light surfaces, white version for dark surfaces.
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
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        flexShrink: 0,
      }}
    >
      <Image
        src={isWhite ? '/brand/afriyouth-mark-white.svg' : '/brand/afriyouth-mark.svg'}
        alt=""
        width={27}
        height={42}
        priority
        style={{ height: '42px', width: 'auto' }}
      />

      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '0.95rem',
          lineHeight: 1.04,
          letterSpacing: '-0.01em',
          color: isWhite ? '#FFFFFF' : 'var(--ink-primary)',
        }}
      >
        <span>Afri</span>
        <span>Youth</span>
        <span
          style={{ color: isWhite ? 'var(--color-accent-inverse)' : 'var(--color-accent)' }}
        >
          Innovation
        </span>
        <span>Labs</span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.66rem',
              letterSpacing: '0.02em',
              marginTop: '4px',
              color: isWhite ? 'rgba(255,255,255,0.75)' : 'var(--ink-muted)',
            }}
          >
            Fueling Innovators for Sustainable Development
          </span>
        )}
      </span>
    </Link>
  );
}
