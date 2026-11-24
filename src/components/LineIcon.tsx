export type LineIconName =
  | 'compass'
  | 'pulse'
  | 'book'
  | 'pen'
  | 'cube'
  | 'building'
  | 'coin'
  | 'flag'
  | 'bars'
  | 'expand'
  | 'lightbulb'
  | 'eye'
  | 'people'
  | 'pin'
  | 'mail'
  | 'phone';

interface LineIconProps {
  name: LineIconName;
  size?: number;
  className?: string;
}

/** Square-stroke line icons shared across the site's editorial sections. */
export default function LineIcon({ name, size = 20, className }: LineIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'compass' ? (
        <>
          <circle cx="12" cy="12" r="8.6" />
          <path d="m16 8-2.2 5.8L8 16l2.2-5.8Z" />
        </>
      ) : null}

      {name === 'pulse' ? (
        <path d="M2.8 12h3.8l2.1-5.4 3.1 10.8 2.2-5.4h7.2" />
      ) : null}

      {name === 'book' ? (
        <>
          <path d="M12 6.4C10.2 4.9 7.8 4.3 4.4 4.7v13.6c3.4-.4 5.8.2 7.6 1.7 1.8-1.5 4.2-2.1 7.6-1.7V4.7c-3.4-.4-5.8.2-7.6 1.7Z" />
          <path d="M12 6.4v13.6" />
        </>
      ) : null}

      {name === 'pen' ? (
        <>
          <path d="m12 2.8 7.2 7.2-8.4 9.8-5.6 1.4 1.4-5.6Z" />
          <path d="m10.6 8.2 5.2 5.2" />
        </>
      ) : null}

      {name === 'cube' ? (
        <>
          <path d="m12 2.8 8 4.5v9.4l-8 4.5-8-4.5V7.3Z" />
          <path d="m4 7.3 8 4.6 8-4.6M12 11.9v9.3" />
        </>
      ) : null}

      {name === 'building' ? (
        <>
          <path d="M2.8 9.4 12 4l9.2 5.4" />
          <path d="M4.7 9.9v7.4M9.4 9.9v7.4M14.6 9.9v7.4M19.3 9.9v7.4" />
          <path d="M2.6 17.6h18.8M3.6 20.6h16.8" />
        </>
      ) : null}

      {name === 'coin' ? (
        <>
          <circle cx="12" cy="12" r="8.4" />
          <path d="M14.6 8.9c-.6-.7-1.5-1.1-2.6-1.1-1.6 0-2.8.9-2.8 2.1 0 3.1 5.6 1.6 5.6 4.7 0 1.2-1.2 2.2-2.8 2.2-1.2 0-2.2-.5-2.8-1.3" />
          <path d="M12 6.3v11.4" />
        </>
      ) : null}

      {name === 'flag' ? (
        <>
          <path d="M5.6 21V3.2" />
          <path d="M5.6 4h11.8l-2.1 4 2.1 4H5.6" />
        </>
      ) : null}

      {name === 'bars' ? (
        <>
          <path d="M3.6 20.2h16.8" />
          <path d="M6.6 17V11M12 17V5.4M17.4 17v-8" />
        </>
      ) : null}

      {name === 'expand' ? (
        <>
          <path d="M9 3.8H3.8V9M15 3.8h5.2V9M9 20.2H3.8V15M15 20.2h5.2V15" />
          <path d="m3.8 3.8 5 5M20.2 3.8l-5 5M3.8 20.2l5-5M20.2 20.2l-5-5" />
        </>
      ) : null}

      {name === 'lightbulb' ? (
        <>
          <path d="M9.4 18.2h5.2M10.4 21h3.2" />
          <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.2 1.1 2v.4h5v-.4c0-.8.4-1.5 1.1-2A6 6 0 0 0 12 3Z" />
        </>
      ) : null}

      {name === 'eye' ? (
        <>
          <path d="M2.8 12S6.2 6.6 12 6.6 21.2 12 21.2 12 17.8 17.4 12 17.4 2.8 12 2.8 12Z" />
          <circle cx="12" cy="12" r="2.6" />
        </>
      ) : null}

      {name === 'people' ? (
        <>
          <circle cx="9" cy="8.4" r="3" />
          <path d="M3.4 19.6c0-3 2.5-5.4 5.6-5.4s5.6 2.4 5.6 5.4" />
          <path d="M15.6 5.6a3 3 0 0 1 0 5.6M17.2 14.4c2.1.5 3.6 2.4 3.6 4.7" />
        </>
      ) : null}

      {name === 'pin' ? (
        <>
          <path d="M12 21s6.6-6.1 6.6-11a6.6 6.6 0 1 0-13.2 0C5.4 14.9 12 21 12 21Z" />
          <circle cx="12" cy="10" r="2.4" />
        </>
      ) : null}

      {name === 'mail' ? (
        <>
          <rect x="3" y="5.4" width="18" height="13.2" />
          <path d="m3.6 6.2 8.4 6 8.4-6" />
        </>
      ) : null}

      {name === 'phone' ? (
        <path d="M6.8 3.4h3l1.6 4-2 1.4a13.4 13.4 0 0 0 5.8 5.8l1.4-2 4 1.6v3c0 1-.8 1.8-1.8 1.8A16.8 16.8 0 0 1 5 5.2c0-1 .8-1.8 1.8-1.8Z" />
      ) : null}
    </svg>
  );
}

export const PUBLICATION_CATEGORY_ICONS = {
  'Research & Evidence': 'book',
  'Policy & Governance': 'building',
  'Strategic Foresight': 'eye',
} as const satisfies Record<string, LineIconName>;
