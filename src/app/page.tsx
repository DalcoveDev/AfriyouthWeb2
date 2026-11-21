import Image from 'next/image';
import Link from 'next/link';
import LabStoriesRail from '@/components/home/LabStoriesRail';
import LatestInsights from '@/components/home/LatestInsights';
import PublicationCover from '@/components/home/PublicationCover';
import ArrowLink from '@/components/ArrowLink';
import { PUBLICATION_CONCEPTS } from '@/data/homepage';
import styles from './page.module.css';

const VOICE_FEATURES = [
  {
    id: 'policy-challenge',
    title: 'The Policy Innovation Challenge',
    body: 'Young analysts diagnose a real policy bottleneck with empirical evidence and pitch a working prototype to institutions at Policy Innovation Demo Day.',
    href: '/programs#policy-challenge',
    linkLabel: 'See the challenge',
    image: '/images/partnerships-meeting.jpg',
    alt: 'Young policy analysts and institutional leaders collaborating around a meeting table',
  },
  {
    id: 'e2i-accelerator',
    title: 'The Evidence-to-Impact Accelerator',
    body: 'A single 10-stage continuum carrying community insight through research, human-centred design, policy, finance and scale—so strong ideas never stall at the pilot stage.',
    href: '/programs#e2i-accelerator',
    linkLabel: 'Explore the accelerator',
    image: '/images/home-design-workshop.jpg',
    alt: 'Team mapping ideas with sticky notes around a table during a design workshop',
  },
  {
    id: 'employability-academy',
    title: 'The Employability Bootcamp',
    body: 'A mandatory 10-step career simulation—from ATS-ready applications and psychometric testing to case studies and salary negotiation—built for graduates entering work.',
    href: '/programs#employability-academy',
    linkLabel: 'Explore the academy',
    image: '/images/programs-tech-workshop.jpg',
    alt: 'Graduates assembling and testing technical systems at a workshop bench',
  },
];

const FOCUS_CARDS = [
  {
    title: 'Programs',
    body: 'Five proposed programme tracks that move young people from evidence and design to employment, enterprise and scale.',
    href: '/programs',
    label: 'Explore our programs',
    icon: 'network',
  },
  {
    title: 'Our Labs',
    body: 'Five integrated labs spanning research, policy, venture-building, strategic foresight and professional development.',
    href: '/our-work',
    label: 'Explore our labs',
    icon: 'globe',
  },
  {
    title: 'Focus Areas',
    body: 'Youth employment, education, digital transformation, artificial intelligence, agriculture, climate, health and entrepreneurship.',
    href: '/approach',
    label: 'Explore focus areas',
    icon: 'people',
  },
] as const;

const PARTNER_PILLARS = [
  {
    group: 'Development Foundations & Funders',
    role: 'Commission baseline studies, youth surveys, and M&E frameworks, or back validated solutions along the 10-stage Evidence-to-Impact pipeline.',
    href: '/partnerships',
    linkLabel: 'Commission research or funding',
  },
  {
    group: 'Universities & Academic Partners',
    role: 'Deploy the University Employability Programme, mandatory 10-step Employability Simulations, and collaborative policy research cohorts.',
    href: '/programs#employability-academy',
    linkLabel: 'Explore university partnerships',
  },
  {
    group: 'Public-Sector & Policy Institutions',
    role: 'Co-host thematic Policy Innovation Challenges, regulatory diagnostics, and Africa 2050 scenario dialogues grounded in field evidence.',
    href: '/programs#policy-challenge',
    linkLabel: 'Co-host a policy challenge',
  },
  {
    group: 'Young Founders & Venture Builders',
    role: 'Advance community-driven ideas through human-centred design, technical prototyping, market validation, and investor readiness.',
    href: '/our-work#venture-lab',
    linkLabel: 'Explore the Venture Lab',
  },
] as const;

function FocusIcon({ name }: { name: (typeof FOCUS_CARDS)[number]['icon'] }) {
  if (name === 'network') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="7" cy="22" r="3" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="25" cy="22" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 10v6M14 18l-5 2M18 18l5 2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="16" cy="16" rx="5" ry="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 16h22M7 10h18M7 22h18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="22" cy="13" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3 27c0-4 3.6-7 8-7s8 3 8 7M19 27c0-3 2.4-5.5 6-5.5s5 2.5 5 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — contained documentary image with overlaid navigation */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroFrame}`}>
          <Image
            src="/images/field-engineers-greenhouse.jpg"
            alt="Three young engineers in hard hats reviewing plans on a tablet inside a greenhouse"
            fill
            priority
            sizes="(max-width: 1410px) 100vw, 1410px"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} aria-hidden="true" />
          <div className={styles.heroBody}>
            <h1 className={styles.heroTitle}>
              Fueling innovators for sustainable development.
            </h1>
            <p className={styles.heroLead}>
              An African research, human-centred design and policy lab working with young
              people to turn community evidence into lasting systems change.
            </p>
            <ArrowLink href="/our-work" inverse>
              What we do
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* 2. IMPACT BRIEF — dark feature panel */}
      <section className={styles.briefSection}>
        <div className={`container ${styles.brief}`}>
          <div className={styles.briefCopy}>
            <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
            <h2 className={styles.briefTitle}>What we&rsquo;ve learned about turning evidence into impact.</h2>
            <p className={styles.briefBody}>
              Our Evidence-to-Impact Accelerator connects community research, human-centred
              design, policy development and finance in one 10-stage pipeline, so promising
              ideas do not stop at the pilot stage.
            </p>
            <ArrowLink href="/approach" inverse>
              Read our approach
            </ArrowLink>
          </div>

          <div className={styles.briefMedia}>
            <Image
              src="/images/home-brief-evidence.jpg"
              alt="Researchers reviewing notes and devices around a shared table"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.briefImage}
            />
          </div>
        </div>
      </section>

      {/* 3. COMMITMENT — statement and long-horizon goals */}
      <section className={styles.statement}>
        <div className={`container ${styles.statementGrid}`}>
          <div>
            <span className={`${styles.rule} ${styles.ruleBlue}`} aria-hidden="true" />
            <h2 className={styles.statementTitle}>
              AfriYouth Innovation Labs works with visionary institutions to help young
              people across Africa turn evidence into policy, enterprise and lasting
              systems change.
            </h2>
          </div>

          <div className={styles.statementRight}>
            <span className={`${styles.rule} ${styles.rulePink}`} aria-hidden="true" />
            <p>
              Our mission is to empower Africa&rsquo;s youth to generate evidence, shape
              policy and develop innovative solutions to the continent&rsquo;s most pressing
              socio-economic challenges through research, human-centred design and
              entrepreneurship.
            </p>
            <p>
              By 2050, we want an Africa where empowered young people use evidence,
              innovation and enterprise to solve complex challenges, shape policy and drive
              inclusive, sustainable transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LABS — carousel of the five divisions */}
      <section className={styles.labs}>
        <div className="container">
          <header className={styles.sectionHead}>
            <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
            <h2 className={styles.sectionTitle}>Five labs. One continuum.</h2>
            <p className={styles.sectionLead}>
              Each lab carries a distinct capability, and together they form a single path
              from community evidence to continental scale.
            </p>
          </header>

          <LabStoriesRail />
        </div>
      </section>

      {/* 5. COMMITMENT TRACKER — photo and stat collage */}
      <section className={styles.commitment}>
        <div className="container">
          <div className={styles.commitmentTop}>
            <div>
              <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
              <h2 className={styles.commitmentTitle}>Tracking towards our 2050 commitment</h2>
              <p className={styles.commitmentLead}>
                An integrated lab, a ten-stage method and a 2050 horizon: the three
                structural commitments that organise everything we build with young people
                and their institutions.
              </p>
              <ArrowLink href="/about" inverse>
                Learn more about AfriYouth
              </ArrowLink>
            </div>

            <div className={styles.commitmentMedia}>
              <Image
                src="/images/home-futures-vr.jpg"
                alt="Young man exploring a virtual reality scenario with colleagues at a workshop"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.commitmentImage}
              />
            </div>
          </div>

          <div className={styles.commitmentGrid}>
            <div className={styles.tilePhoto}>
              <Image
                src="/images/home-agriculture-greenhouse.jpg"
                alt="Farmer inspecting a melon crop inside a greenhouse"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                className={styles.tileImage}
              />
            </div>
            <div className={`${styles.statTile} ${styles.statMint}`}>
              <span className={styles.statValue}>10</span>
              <span className={styles.statLabel}>
                Stages, from community discovery to continental scale
              </span>
            </div>
            <div className={styles.tilePhoto}>
              <Image
                src="/images/about-team-collaboration.jpg"
                alt="Three young African colleagues reviewing field research together on a laptop"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                className={styles.tileImage}
              />
            </div>

            <div className={`${styles.statTile} ${styles.statWhite}`}>
              <span className={styles.statValue}>05</span>
              <span className={styles.statLabel}>Integrated labs working as one continuum</span>
            </div>
            <div className={styles.tilePhoto}>
              <Image
                src="/images/home-engineering-lab.jpg"
                alt="Young woman scientist adjusting a microscope in a laboratory"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                className={styles.tileImage}
              />
            </div>
            <div className={`${styles.statTile} ${styles.statPink}`}>
              <span className={styles.statValue}>2050</span>
              <span className={styles.statLabel}>
                Foresight horizon shaping today&rsquo;s decisions
              </span>
            </div>
          </div>

          <div className={styles.focusGrid}>
            {FOCUS_CARDS.map((card) => (
              <article key={card.title} className={styles.focusCard}>
                <span className={styles.focusIcon}>
                  <FocusIcon name={card.icon} />
                </span>
                <h3 className={styles.focusTitle}>{card.title}</h3>
                <p className={styles.focusBody}>{card.body}</p>
                <ArrowLink href={card.href} inverse>
                  {card.label}
                </ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESEARCH — overhanging publication shelf */}
      <section className={styles.research}>
        <div className="container">
          <div className={styles.researchHead}>
            <div>
              <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
              <h2 className={`${styles.sectionTitle} ${styles.inverse}`}>Research &amp; Learning</h2>
              <p className={styles.researchLead}>
                Our research amplifies the voices of young people by highlighting their
                lived experiences and perspectives — particularly young women, young people
                with disabilities, and refugees and displaced persons.
              </p>
            </div>
            <ArrowLink href="/insights" inverse>
              View all research
            </ArrowLink>
          </div>

          <div className={styles.researchGrid}>
            {PUBLICATION_CONCEPTS.map((publication) => (
              <article key={publication.id} className={styles.pubCard}>
                <Link href="/insights" className={styles.pubCover} aria-label={publication.title}>
                  <PublicationCover publication={publication} />
                </Link>
                <div className={styles.pubMeta}>
                  <h3 className={styles.pubTitle}>
                    <Link href="/insights">{publication.title}</Link>
                  </h3>
                  <span className={styles.pubStatus}>{publication.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VOICES — alternating flagship programme features */}
      <section className={styles.voices}>
        <div className="container">
          <div className={styles.voicesHead}>
            <div>
              <span className={`${styles.rule} ${styles.ruleBlue}`} aria-hidden="true" />
              <h2 className={styles.voicesTitle}>Empowering Young Innovators</h2>
              <p className={styles.sectionLead}>
                Experiential programmes rooted in co-creation—moving young people from empirical
                research to policy proposals, ventures, and meaningful employment.
              </p>
            </div>
            <ArrowLink href="/programs">
              View all programs
            </ArrowLink>
          </div>

          <div className={styles.voiceList}>
            {VOICE_FEATURES.map((feature, index) => (
              <article
                key={feature.id}
                className={`${styles.voiceRow} ${index % 2 === 1 ? styles.voiceReverse : ''}`}
              >
                <div className={styles.voiceCopy}>
                  <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
                  <h3 className={styles.voiceTitle}>{feature.title}</h3>
                  <p className={styles.voiceBody}>{feature.body}</p>
                  <ArrowLink href={feature.href}>
                    {feature.linkLabel}
                  </ArrowLink>
                </div>

                <div className={styles.voiceMedia}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 46vw"
                    className={styles.voiceImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FUNDERS, FOUNDERS & INSTITUTIONAL PARTNERSHIPS */}
      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.partnersTop}>
            <div className={styles.partnersIntro}>
              <span className={`${styles.rule} ${styles.ruleSignal}`} aria-hidden="true" />
              <h2 className={styles.partnersTitle}>
                Collaborating with funders, institutional partners and young founders
              </h2>
              <p className={styles.partnersLead}>
                Lasting systems change happens when the young people closest to community
                challenges work alongside the institutions equipped to scale what works.
              </p>
            </div>

            <div className={styles.partnersCtaBox}>
              <p className={styles.partnersCtaNote}>
                Our <strong>Impact &amp; Learning</strong> and{' '}
                <strong>Resource Mobilization</strong> teams also support partners with Theories
                of Change, M&amp;E systems, and investment readiness.
              </p>
              <div className={styles.partnersActions}>
                <ArrowLink href="/partnerships">
                  Explore partnership models
                </ArrowLink>
              </div>
            </div>
          </div>

          <div className={styles.partnersGrid}>
            {PARTNER_PILLARS.map((pillar) => (
              <article key={pillar.group} className={styles.partnerCol}>
                <h3 className={styles.partnerGroup}>
                  <span className={styles.partnerTag}>{pillar.group}</span>
                </h3>
                <p className={styles.partnerRole}>{pillar.role}</p>
                <ArrowLink href={pillar.href} className={styles.partnerLink}>
                  {pillar.linkLabel}
                </ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LATEST — filterable publication feed */}
      <section className={styles.latest}>
        <div className="container">
          <header className={styles.latestHead}>
            <span className={`${styles.rule} ${styles.ruleBlue}`} aria-hidden="true" />
            <h2 className={styles.latestTitle}>Latest from AfriYouth</h2>
          </header>

          <LatestInsights />
        </div>
      </section>
    </>
  );
}
