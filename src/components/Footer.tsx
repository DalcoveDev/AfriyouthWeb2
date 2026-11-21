import Link from 'next/link';
import ArrowLink from './ArrowLink';
import BrandLogo from './BrandLogo';
import FooterNewsletter from './FooterNewsletter';
import styles from './Footer.module.css';

const PRIMARY_LINKS = [
  { label: 'About AfriYouth', href: '/about' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Labs & Divisions', href: '/our-work' },
  { label: 'Programs & Initiatives', href: '/programs' },
  { label: 'Insights & Evidence', href: '/insights' },
];

const SECONDARY_LINKS = [
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Frequently Asked Questions', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default async function Footer() {
  'use cache';

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <BrandLogo variant="monochrome-white" showTagline />
          <p className={styles.creed}>Creating impact together.</p>
        </div>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.colTitle}>Organization</h3>
            <ul className={styles.primaryList}>
              {PRIMARY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Engage</h3>
            <ul className={styles.secondaryList}>
              {SECONDARY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <p className={styles.summary}>
              An African research, innovation and policy organisation turning
              community-driven ideas into practical, evidence-based solutions.
            </p>
            <p className={styles.philosophy}>
              Think → Research → Design → Build → Influence → Scale
            </p>
          </div>

          <div className={styles.connect}>
            <span className={styles.connectRule} aria-hidden="true" />
            <h3 className={styles.connectTitle}>Stay Connected</h3>
            <p className={styles.connectBody}>
              Subscribe to receive new Evidence Reports, Africa 2050 foresight briefs, and
              cohort announcements, or partner with our labs.
            </p>
            <FooterNewsletter />
            <div className={styles.partnerRow}>
              <ArrowLink href="/partnerships" inverse>
                Explore institutional partnerships
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} AfriYouth Innovation Labs.</span>
          <span>Fueling Innovators for Sustainable Development.</span>
          <span className={styles.legal}>
            <Link href="/faq">Privacy</Link> · <Link href="/faq">Accessibility</Link> ·{' '}
            <Link href="/contact">Safeguarding</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
