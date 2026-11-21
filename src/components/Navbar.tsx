'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from './BrandLogo';
import { PROGRAMS } from '@/data/programs';
import { WORK_CHAPTERS } from '@/data/labs';
import styles from './Navbar.module.css';

type Panel = 'about' | 'work' | 'programs' | null;

const NAV_ITEMS = [{ label: 'Insights', href: '/insights' }];

const ABOUT_LINKS = [
  {
    label: 'About AfriYouth',
    href: '/about',
    description: 'An African research, innovation and policy consulting firm built around its young people.',
  },
  {
    label: 'Our Approach',
    href: '/approach',
    description: 'Five interlocking capabilities across a 10-stage Evidence-to-Impact pipeline.',
  },
  {
    label: 'Our Work',
    href: '/our-work',
    description: 'Five specialised labs feeding one unified Evidence-to-Impact ecosystem.',
  },
  {
    label: 'Partnerships',
    href: '/partnerships',
    description: 'Commission research, co-create cohorts, or deploy employability programmes.',
  },
];

const MOBILE_LINKS = [
  { label: 'About AfriYouth', href: '/about' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Insights', href: '/insights' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Frequently Asked Questions', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<Panel>(null);

  useEffect(() => {
    if (!openPanel) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenPanel(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openPanel]);

  const isActive = (href: string) => pathname === href;
  const isHome = pathname === '/';
  const isHomeOverlay = isHome && !openPanel && !menuOpen;
  const inAboutSection = ['/about', '/approach', '/partnerships'].includes(pathname);
  const inProgramsSection = pathname === '/programs';

  const toggleClass = (panel: Panel, activeSection: boolean) =>
    `${styles.navLink} ${styles.dropdownTrigger} ${
      openPanel === panel ? styles.navLinkOpen : ''
    } ${activeSection ? styles.navLinkActive : ''}`;

  const togglePanel = (panel: Exclude<Panel, null>) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };

  return (
    <header
      className={`${styles.header} ${isHomeOverlay ? styles.homeHeader : ''} ${
        isHome && (openPanel || menuOpen) ? styles.homeHeaderActive : ''
      }`}
      onMouseLeave={() => setOpenPanel(null)}
      onBlur={(event) => {
        // Keyboard equivalent of the hover-out close: once focus leaves the
        // header, the open mega menu goes away.
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpenPanel(null);
        }
      }}
    >
      {isHome && (
        <div className={styles.notice}>
          <div className={`container ${styles.noticeInner}`}>
            <span className={styles.noticeText}>
              Five labs. One 10-stage Evidence-to-Impact continuum.
            </span>
            <Link href="/approach" className={styles.noticeLink}>
              Read our approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}

      <div className={`container ${styles.inner}`}>
        <BrandLogo variant={isHomeOverlay ? 'monochrome-white' : 'color'} />

        <nav className={styles.desktopNav} aria-label="Primary Navigation">
          <ul className={styles.navList}>
            <li>
              <button
                type="button"
                className={toggleClass('about', inAboutSection)}
                aria-expanded={openPanel === 'about'}
                aria-controls="about-mega-menu"
                onMouseEnter={() => setOpenPanel('about')}
                onFocus={() => setOpenPanel('about')}
                onClick={() => togglePanel('about')}
              >
                About Us
                <span
                  className={`${styles.chevron} ${openPanel === 'about' ? styles.chevronOpen : ''}`}
                  aria-hidden="true"
                />
              </button>
            </li>

            <li>
              <button
                type="button"
                className={toggleClass('work', isActive('/our-work'))}
                aria-expanded={openPanel === 'work'}
                aria-controls="work-mega-menu"
                onMouseEnter={() => setOpenPanel('work')}
                onFocus={() => setOpenPanel('work')}
                onClick={() => togglePanel('work')}
              >
                Our Work
                <span
                  className={`${styles.chevron} ${openPanel === 'work' ? styles.chevronOpen : ''}`}
                  aria-hidden="true"
                />
              </button>
            </li>

            <li>
              <button
                type="button"
                className={toggleClass('programs', inProgramsSection)}
                aria-expanded={openPanel === 'programs'}
                aria-controls="programs-mega-menu"
                onMouseEnter={() => setOpenPanel('programs')}
                onFocus={() => setOpenPanel('programs')}
                onClick={() => togglePanel('programs')}
              >
                Programs
                <span
                  className={`${styles.chevron} ${
                    openPanel === 'programs' ? styles.chevronOpen : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </li>

            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpenPanel(null)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.utility}>
            <Link
              href="/faq"
              className={`${styles.utilityLink} ${isActive('/faq') ? styles.navLinkActive : ''}`}
              aria-current={isActive('/faq') ? 'page' : undefined}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className={`${styles.utilityLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
            <Link href="/partnerships" className={styles.partnerBtn}>
              Partner With Us
            </Link>
          </div>
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {openPanel === 'about' && (
        <div className={styles.mega} id="about-mega-menu" onMouseLeave={() => setOpenPanel(null)}>
          <div className={`container ${styles.megaInner}`}>
            <button
              type="button"
              className={styles.megaClose}
              aria-label="Close about menu"
              onClick={() => setOpenPanel(null)}
            >
              ✕
            </button>

            <div className={styles.megaRail}>
              <Link href="/about" className={styles.railTitle} onClick={() => setOpenPanel(null)}>
                About AfriYouth
                <span aria-hidden="true">→</span>
              </Link>
              <ul className={styles.railList}>
                {ABOUT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.railLink} ${isActive(link.href) ? styles.railLinkActive : ''}`}
                      onClick={() => setOpenPanel(null)}
                    >
                      {link.label}
                      <span className={styles.railArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.megaCols}>
              {ABOUT_LINKS.filter((link) => link.href !== '/about').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.megaItem}
                  onClick={() => setOpenPanel(null)}
                >
                  <span className={styles.megaItemTitle}>{link.label} →</span>
                  <span className={styles.megaItemText}>{link.description}</span>
                </Link>
              ))}
              <Link href="/faq" className={styles.megaItem} onClick={() => setOpenPanel(null)}>
                <span className={styles.megaItemTitle}>FAQs →</span>
                <span className={styles.megaItemText}>
                  Clarity on programs, participation pathways and institutional partnerships.
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {openPanel === 'work' && (
        <div className={styles.mega} id="work-mega-menu" onMouseLeave={() => setOpenPanel(null)}>
          <div className={`container ${styles.megaInner}`}>
            <button
              type="button"
              className={styles.megaClose}
              aria-label="Close our work menu"
              onClick={() => setOpenPanel(null)}
            >
              ✕
            </button>

            <div className={styles.megaRail}>
              <Link href="/our-work" className={styles.railTitle} onClick={() => setOpenPanel(null)}>
                Our Work
                <span aria-hidden="true">→</span>
              </Link>
              <ul className={styles.railList}>
                {WORK_CHAPTERS.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/our-work#${chapter.id}`}
                      className={styles.railLink}
                      onClick={() => setOpenPanel(null)}
                    >
                      {chapter.title}
                      <span className={styles.railArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.megaCols}>
              {WORK_CHAPTERS.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={`/our-work#${chapter.id}`}
                  className={styles.megaItem}
                  onClick={() => setOpenPanel(null)}
                >
                  <span className={styles.megaItemTitle}>{chapter.title} →</span>
                  <span className={`${styles.megaItemText} ${styles.clamp2}`}>
                    {chapter.description}
                  </span>
                </Link>
              ))}
              <Link
                href="/our-work"
                className={styles.megaItem}
                onClick={() => setOpenPanel(null)}
              >
                <span className={styles.megaItemTitle}>Impact &amp; Funding Advisory →</span>
                <span className={`${styles.megaItemText} ${styles.clamp2}`}>
                  Cross-cutting M&amp;E systems, learning reports, grant strategy and investment
                  readiness for partners.
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {openPanel === 'programs' && (
        <div
          className={styles.mega}
          id="programs-mega-menu"
          onMouseLeave={() => setOpenPanel(null)}
        >
          <div className={`container ${styles.megaInner}`}>
            <button
              type="button"
              className={styles.megaClose}
              aria-label="Close programs menu"
              onClick={() => setOpenPanel(null)}
            >
              ✕
            </button>

            <div className={styles.megaRail}>
              <Link href="/programs" className={styles.railTitle} onClick={() => setOpenPanel(null)}>
                Programs &amp; Initiatives
                <span aria-hidden="true">→</span>
              </Link>
              <ul className={styles.railList}>
                {PROGRAMS.map((program) => (
                  <li key={program.id}>
                    <Link
                      href={`/programs#${program.id}`}
                      className={styles.railLink}
                      onClick={() => setOpenPanel(null)}
                    >
                      {program.title}
                      <span className={styles.railArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.megaCols}>
              {PROGRAMS.map((program) => (
                <Link
                  key={program.id}
                  href={`/programs#${program.id}`}
                  className={styles.megaItem}
                  onClick={() => setOpenPanel(null)}
                >
                  <span className={styles.megaItemTitle}>{program.title} →</span>
                  <span className={`${styles.megaItemText} ${styles.clamp2}`}>
                    {program.purpose}
                  </span>
                </Link>
              ))}
              <Link
                href="/partnerships"
                className={styles.megaItem}
                onClick={() => setOpenPanel(null)}
              >
                <span className={styles.megaItemTitle}>Co-Design a Cohort →</span>
                <span className={`${styles.megaItemText} ${styles.clamp2}`}>
                  Partner with AfriYouth to launch thematic policy challenges or university
                  employability tracks.
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <nav className={styles.mobileDrawer} aria-label="Mobile Navigation">
          <ul>
            {MOBILE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/our-work"
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                Our Work
              </Link>
              <ul className={styles.mobileSub}>
                {WORK_CHAPTERS.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/our-work#${chapter.id}`}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {chapter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/programs"
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                Programs
              </Link>
              <ul className={styles.mobileSub}>
                {PROGRAMS.map((program) => (
                  <li key={program.id}>
                    <Link
                      href={`/programs#${program.id}`}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/partnerships"
                className={styles.mobileCta}
                onClick={() => setMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
