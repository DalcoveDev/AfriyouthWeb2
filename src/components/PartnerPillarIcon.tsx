interface PartnerPillarIconProps {
  name: 'funders' | 'university' | 'policy' | 'founders';
}

/** Line icons for the four home-page partnership groups, drawn in the site's square stroke style. */
export default function PartnerPillarIcon({ name }: PartnerPillarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'funders' ? (
        <>
          <ellipse cx="12" cy="6.8" rx="6.6" ry="2.6" />
          <path d="M5.4 6.8v4.2c0 1.44 2.95 2.6 6.6 2.6s6.6-1.16 6.6-2.6V6.8" />
          <path d="M5.4 11v4.2c0 1.44 2.95 2.6 6.6 2.6s6.6-1.16 6.6-2.6V11" />
          <path d="M5.4 15.2v2.4c0 1.44 2.95 2.6 6.6 2.6s6.6-1.16 6.6-2.6v-2.4" />
        </>
      ) : null}

      {name === 'university' ? (
        <>
          <path d="m2.6 8.6 9.4-4.1 9.4 4.1-9.4 4.1z" />
          <path d="M6.6 10.8v4.3c0 1.5 2.4 2.7 5.4 2.7s5.4-1.2 5.4-2.7v-4.3" />
          <path d="M21.4 8.6v5.2" />
        </>
      ) : null}

      {name === 'policy' ? (
        <>
          <path d="M2.8 9.4 12 4l9.2 5.4" />
          <path d="M4.7 9.9v7.4M9.4 9.9v7.4M14.6 9.9v7.4M19.3 9.9v7.4" />
          <path d="M2.6 17.6h18.8M3.6 20.6h16.8" />
        </>
      ) : null}

      {name === 'founders' ? (
        <>
          <path d="M12 2.6c2.7 1.7 4.3 4.5 4.3 7.9 0 1.8-.4 3.4-1.1 4.9H8.8a11 11 0 0 1-1.1-4.9c0-3.4 1.6-6.2 4.3-7.9Z" />
          <circle cx="12" cy="9" r="1.65" />
          <path d="M8.8 15.7 6.6 19.2l3-.9M15.2 15.7l2.2 3.5-3-.9M10.4 19.7h3.2L12 22.1Z" />
        </>
      ) : null}
    </svg>
  );
}
