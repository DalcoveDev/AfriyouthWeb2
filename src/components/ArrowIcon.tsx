interface ArrowIconProps {
  className?: string;
}

/** Diagonal arrow: reads as "open / continue", and is less templated than a chevron. */
export default function ArrowIcon({ className }: ArrowIconProps = {}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      width={14}
      height={14}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
