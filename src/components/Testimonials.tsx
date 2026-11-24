import { TESTIMONIALS, type TestimonialAudience } from '@/data/testimonials';
import styles from './Testimonials.module.css';

type Background = 'page' | 'subtle' | 'ink';

interface TestimonialsProps {
  title?: string;
  lead?: string;
  background?: Background;
  audience?: TestimonialAudience;
  limit?: number;
}

function TestimonialCard({
  testimonial,
  duplicate,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  duplicate: boolean;
}) {
  return (
    <li className={styles.card} aria-hidden={duplicate || undefined}>
      <figure className={styles.figure}>
        <blockquote className={styles.quote}>
          <p>
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            {testimonial.quote}
            <span className={styles.mark} aria-hidden="true">
              ”
            </span>
          </p>
        </blockquote>
        <figcaption className={styles.caption}>
          <span className={styles.name}>{testimonial.name}</span>
          <span className={styles.role}>
            {testimonial.role}
            {testimonial.organisation ? `, ${testimonial.organisation}` : ''}
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

export default function Testimonials({
  title = 'Voices from our community',
  lead,
  background = 'page',
  audience,
  limit,
}: TestimonialsProps) {
  const testimonials = TESTIMONIALS.filter(
    (testimonial) => !audience || testimonial.audience === audience,
  ).slice(0, limit);

  const rowOne = [...testimonials, ...testimonials];
  const rowTwo = [...testimonials].reverse();
  const rowTwoLoop = [...rowTwo, ...rowTwo];

  return (
    <section
      className={[styles.section, styles[background]].filter(Boolean).join(' ')}
      aria-label={title}
    >
      <div className="container">
        <header className={styles.head}>
          <div>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.title}>{title}</h2>
          </div>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>
      </div>

      <div className={styles.rows}>
        <div className={styles.marquee}>
          <ul className={styles.track} aria-label={`${title} — row one`}>
            {rowOne.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-one-${index}`}
                testimonial={testimonial}
                duplicate={index >= testimonials.length}
              />
            ))}
          </ul>
        </div>

        <div className={styles.marquee}>
          <ul
            className={`${styles.track} ${styles.reverse}`}
            aria-label={`${title} — row two`}
          >
            {rowTwoLoop.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-two-${index}`}
                testimonial={testimonial}
                duplicate={index >= rowTwo.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
