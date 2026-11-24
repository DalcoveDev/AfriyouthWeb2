'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpStatProps {
  value: string;
  className?: string;
}

function formatCount(count: number, digits: number) {
  return String(count).padStart(digits, '0');
}

/** Counts a stat up from zero the first time it scrolls into view. */
export default function CountUpStat({ value, className }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const target = Number.parseInt(value, 10);
    if (!Number.isFinite(target)) return;

    const digits = value.length;
    const duration = 1400;
    let frame = 0;
    let started = false;

    const animate = (startTime: number) => {
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(formatCount(Math.round(target * eased), digits));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started) continue;
          started = true;
          observer.disconnect();
          setDisplay(formatCount(0, digits));
          animate(performance.now());
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
