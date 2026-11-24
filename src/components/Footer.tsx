import Link from 'next/link';
import ArrowLink from './ArrowLink';
import BrandLogo from './BrandLogo';
import FooterNewsletter from './FooterNewsletter';
import SocialLinks from './SocialLinks';
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
          <p className={styles.statement}>Creating impact together.</p>
          <p className={styles.creed}>
            Research, human-centred design and enterprise in one continuum — built with
            Africa&rsquo;s young people.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <BrandLogo variant="monochrome-white" showTagline />
            <p className={styles.summary}>
              An African research, innovation and policy organisation turning
              community-driven ideas into practical, evidence-based solutions.
            </p>
            <p className={styles.location}>Kigali, Rwanda</p>
            <div className={styles.social}>
              <h3 className={styles.socialTitle}>Follow</h3>
              <SocialLinks tone="inverse" variant="icons" />
            </div>
          </div>

          <nav aria-label="Footer organisation links">
            <h3 className={styles.colTitle}>Organisation</h3>
            <ul className={styles.primaryList}>
              {PRIMARY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer engagement links">
            <h3 className={styles.colTitle}>Engage</h3>
            <ul className={styles.secondaryList}>
              {SECONDARY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <p className={styles.philosophy}>
              Think → Research → Design → Build → Influence → Scale
            </p>
          </nav>

          <div className={styles.connect}>
            <h3 className={styles.colTitle}>Stay in the loop</h3>
            <p className={styles.connectBody}>
              New Evidence Reports, Africa 2050 foresight briefs and cohort announcements,
              twice a term.
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
          <span className={styles.legal}>
            <a href="mailto:info@afriyouthlabs.org?subject=Privacy%2C%20accessibility%20or%20safeguarding%20question">
              Privacy, accessibility &amp; safeguarding
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
