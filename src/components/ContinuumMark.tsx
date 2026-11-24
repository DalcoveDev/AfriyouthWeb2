import styles from './ContinuumMark.module.css';

const STAGES = [
  'Discover',
  'Diagnose',
  'Research',
  'Design',
  'Prototype',
  'Policy',
  'Finance',
  'Implement',
  'Measure',
  'Scale',
];

interface ContinuumMarkProps {
  inverse?: boolean;
  /** Show the stage names beneath the numbers. */
  labelled?: boolean;
  className?: string;
}

/**
 * The signature device of the site: the ten-stage Evidence-to-Impact
 * continuum drawn as a measured line, not as decoration.
 */
export default function ContinuumMark({
  inverse = false,
  labelled = true,
  className,
}: ContinuumMarkProps) {
  const classes = [styles.continuum];
  if (inverse) classes.push(styles.inverse);
  if (!labelled) classes.push(styles.unlabelled);
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <div className={styles.head}>
        <span className={styles.label}>Evidence-to-Impact continuum</span>
        <span className={styles.count}>01—10</span>
      </div>

      <ol
        className={styles.track}
        aria-label="Ten stages from community evidence to continental scale"
      >
        {STAGES.map((stage, index) => (
          <li key={stage} className={styles.stage}>
            <span className={styles.tick} aria-hidden="true" />
            <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.name}>{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
