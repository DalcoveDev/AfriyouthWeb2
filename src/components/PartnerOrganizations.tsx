import { PARTNER_ORGANIZATIONS } from '@/data/partners';
import styles from './PartnerOrganizations.module.css';

type Background = 'page' | 'subtle' | 'ink';

interface PartnerOrganizationsProps {
  title?: string;
  lead?: string;
  background?: Background;
  compact?: boolean;
  limit?: number;
}

export default function PartnerOrganizations({
  title = 'Organizations we partner with',
  lead,
  background = 'page',
  compact = false,
  limit,
}: PartnerOrganizationsProps) {
  const organizations = limit ? PARTNER_ORGANIZATIONS.slice(0, limit) : PARTNER_ORGANIZATIONS;
  const loop = [...organizations, ...organizations];

  return (
    <section
      className={[
        styles.section,
        compact ? styles.compact : '',
        styles[background],
      ]
        .filter(Boolean)
        .join(' ')}
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

      <div className={styles.marquee}>
        <ul className={styles.track} aria-label="Partner organizations">
          {loop.map((organisation, index) => (
            <li
              key={`${organisation.name}-${index}`}
              className={styles.card}
              aria-hidden={index >= organizations.length || undefined}
            >
              <span className={styles.name}>{organisation.name}</span>
              <span className={styles.category}>{organisation.category}</span>
              <span className={styles.location}>{organisation.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
