import Image from 'next/image';
import Link from 'next/link';
import CountUpStat from '@/components/home/CountUpStat';
import LabStoriesRail from '@/components/home/LabStoriesRail';
import PublicationCover from '@/components/home/PublicationCover';
import ArrowLink from '@/components/ArrowLink';
import ContinuumMark from '@/components/ContinuumMark';
import LineIcon, { PUBLICATION_CATEGORY_ICONS } from '@/components/LineIcon';
import PartnerOrganizations from '@/components/PartnerOrganizations';
import PartnerPillarIcon from '@/components/PartnerPillarIcon';
import Testimonials from '@/components/Testimonials';
import SocialLinks from '@/components/SocialLinks';
import { HOMEPAGE_STATS, PUBLICATION_CONCEPTS } from '@/data/homepage';
import styles from './page.module.css';

const VOICE_FEATURES = [
  {
    id: 'policy-challenge',
    index: '01',
    title: 'The Policy Innovation Challenge',
    body: 'Young analysts diagnose a real policy bottleneck with empirical evidence and pitch a working prototype to institutions at Policy Innovation Demo Day.',
    href: '/programs#policy-challenge',
    linkLabel: 'See the challenge',
    image: '/images/partnerships-meeting.jpg',
    alt: 'Young policy analysts and institutional leaders collaborating around a meeting table',
  },
  {
    id: 'e2i-accelerator',
    index: '02',
    title: 'The Evidence-to-Impact Accelerator',
    body: 'A single 10-stage continuum carrying community insight through research, human-centred design, policy, finance and scale — so strong ideas never stall at the pilot stage.',
    href: '/programs#e2i-accelerator',
    linkLabel: 'Explore the accelerator',
    image: '/images/home-design-workshop.jpg',
    alt: 'Team mapping ideas with sticky notes around a table during a design workshop',
  },
  {
    id: 'employability-academy',
    index: '03',
    title: 'The Employability Bootcamp',
    body: 'A mandatory 10-step career simulation — from ATS-ready applications and psychometric testing to case studies and salary negotiation — built for graduates entering work.',
    href: '/programs#employability-academy',
    linkLabel: 'Explore the academy',
    image: '/images/programs-tech-workshop.jpg',
    alt: 'Graduates assembling and testing technical systems at a workshop bench',
  },
];

const PARTNER_PILLARS = [
  {
    group: 'Development foundations and funders',
    icon: 'funders',
    role: 'Commission baseline studies, youth surveys and M&E frameworks, or back validated solutions along the 10-stage pipeline.',
    href: '/partnerships',
    linkLabel: 'Commission research or funding',
  },
  {
    group: 'Universities and academic partners',
    icon: 'university',
    role: 'Deploy the University Employability Programme, mandatory simulation cohorts and collaborative policy research.',
    href: '/programs#employability-academy',
    linkLabel: 'University partnerships',
  },
  {
    group: 'Public-sector and policy institutions',
    icon: 'policy',
    role: 'Co-host thematic Policy Innovation Challenges, regulatory diagnostics and Africa 2050 scenario dialogues.',
    href: '/programs#policy-challenge',
    linkLabel: 'Co-host a challenge',
  },
  {
    group: 'Young founders and venture builders',
    icon: 'founders',
    role: 'Advance community-driven ideas through human-centred design, prototyping, market validation and investor readiness.',
    href: '/our-work#venture-lab',
    linkLabel: 'Explore the Venture Lab',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — full-bleed documentary image with overlaid heading */}
      <section className={styles.hero} data-snap-root>
        <div className={styles.heroFrame}>
          <Image
            src="/images/field-engineers-greenhouse.jpg"
            alt="Three young engineers in hard hats reviewing plans on a tablet inside a greenhouse"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} aria-hidden="true" />
          <div className={styles.heroBody}>
            <div className={`container ${styles.heroContent}`}>
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
        </div>
      </section>

      {/* 2. MISSION — one statement, two supporting paragraphs */}
      <section className={styles.statement}>
        <div className={`container ${styles.statementGrid}`}>
          <h2 className={styles.statementTitle}>
            AfriYouth works with visionary institutions to help young people turn evidence into
            policy, enterprise and lasting systems change.
          </h2>

          <div className={styles.statementBody}>
            <p>
              Our mission is to empower Africa&rsquo;s youth to generate evidence, shape policy
              and build innovative solutions to the continent&rsquo;s most pressing
              socio-economic challenges.
            </p>
            <p>
              By 2050, we want an Africa where empowered young people use evidence, innovation
              and enterprise to solve complex challenges and drive inclusive, sustainable
              transformation.
            </p>
            <ArrowLink href="/about">About AfriYouth</ArrowLink>
          </div>
        </div>
      </section>

      {/* 3. LABS — five divisions as one working continuum */}
      <section className={styles.labs}>
        <div className="container">
          <header className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Five labs.
              <br />
              One continuum.
            </h2>
            <p className={styles.sectionLead}>
              Each lab carries a distinct capability. Together they form a single path from
              community evidence to continental scale.
            </p>
          </header>

          <LabStoriesRail />
        </div>
      </section>

      {/* 4. CONTINUUM — the one dark, bold moment */}
      <section className={styles.continuumBand}>
        <div className="container">
          <div className={styles.continuumTop}>
            <div className={styles.continuumCopy}>
              <h2 className={styles.continuumTitle}>
                Ten stages from community evidence to continental scale.
              </h2>
              <p className={styles.continuumLead}>
                Evidence, human-centred design, policy and finance are usually split across
                different institutions. Our Evidence-to-Impact Accelerator holds them in one
                pipeline so promising ideas do not stop at the pilot stage.
              </p>
              <ArrowLink href="/approach" inverse>
                Read our approach
              </ArrowLink>
            </div>

            <div className={styles.continuumMedia}>
              <Image
                src="/images/home-brief-evidence.jpg"
                alt="Researchers reviewing notes and devices around a shared table"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.continuumImage}
              />
            </div>
          </div>

          <div className={styles.continuumMark}>
            <ContinuumMark inverse />
          </div>
        </div>
      </section>

      {/* 5. STATS — three facts, set as a ledger */}
      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {HOMEPAGE_STATS.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <CountUpStat value={stat.value} className={styles.statValue} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RESEARCH — publication shelf */}
      <section className={styles.research}>
        <div className="container">
          <div className={styles.sectionHeadRow}>
            <div>
              <h2 className={styles.sectionTitle}>Research &amp; learning</h2>
              <p className={styles.sectionLead}>
                Our research amplifies the voices of young people — particularly young women,
                young people with disabilities, and refugees and displaced persons.
              </p>
            </div>
            <ArrowLink href="/insights">View all research</ArrowLink>
          </div>

          <div className={styles.researchGrid}>
            {PUBLICATION_CONCEPTS.map((publication) => (
              <article key={publication.id} className={styles.pubCard}>
                <Link href="/insights" className={styles.pubCover} aria-label={publication.title}>
                  <PublicationCover publication={publication} />
                </Link>
                <div className={styles.pubMeta}>
                  <span className={styles.pubCategory}>
                    <LineIcon
                      name={PUBLICATION_CATEGORY_ICONS[publication.category]}
                      size={14}
                    />
                    {publication.category}
                  </span>
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

      {/* 7. PROGRAMMES — alternating editorial features */}
      <section className={styles.voices}>
        <div className="container">
          <div className={styles.sectionHeadRow}>
            <div>
              <h2 className={styles.sectionTitle}>Empowering young innovators</h2>
              <p className={styles.sectionLead}>
                Experiential programmes rooted in co-creation — moving young people from
                empirical research to policy proposals, ventures and meaningful employment.
              </p>
            </div>
            <ArrowLink href="/programs">View all programmes</ArrowLink>
          </div>

          <div className={styles.voiceList}>
            {VOICE_FEATURES.map((feature, index) => (
              <article
                key={feature.id}
                className={`${styles.voiceRow} ${index % 2 === 1 ? styles.voiceReverse : ''}`}
              >
                <div className={styles.voiceCopy}>
                  <span className={styles.voiceIndex}>{feature.index}</span>
                  <h3 className={styles.voiceTitle}>{feature.title}</h3>
                  <p className={styles.voiceBody}>{feature.body}</p>
                  <ArrowLink href={feature.href}>{feature.linkLabel}</ArrowLink>
                </div>

                <figure className={styles.voiceFigure}>
                  <div className={styles.voiceMedia}>
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 48vw"
                      className={styles.voiceImage}
                    />
                  </div>
                  <figcaption className={styles.voiceCaption}>
                    <span>{feature.index} / Programme note</span>
                    <span>{feature.title}</span>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTNERSHIPS — a hairline ledger, not a card wall */}
      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.partnersTop}>
            <h2 className={styles.partnersTitle}>
              Collaborating with funders, institutional partners and young founders
            </h2>
            <div className={styles.partnersAside}>
              <p className={styles.partnersLead}>
                Lasting systems change happens when the young people closest to community
                challenges work alongside the institutions equipped to scale what works.
              </p>
              <p className={styles.partnersNote}>
                Our <strong>Impact &amp; Learning</strong> and{' '}
                <strong>Resource Mobilization</strong> teams also support partners with Theories
                of Change, M&amp;E systems and investment readiness.
              </p>
              <ArrowLink href="/partnerships">Explore partnership models</ArrowLink>
            </div>
          </div>

          <div className={styles.partnersGrid}>
            {PARTNER_PILLARS.map((pillar) => (
              <article key={pillar.group} className={styles.partnerCol}>
                <span className={styles.partnerIcon} aria-hidden="true">
                  <PartnerPillarIcon name={pillar.icon} />
                </span>
                <h3 className={styles.partnerGroup}>{pillar.group}</h3>
                <p className={styles.partnerRole}>{pillar.role}</p>
                <ArrowLink href={pillar.href} className={styles.partnerLink}>
                  {pillar.linkLabel}
                </ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNER ORGANIZATIONS — institutional wordmark ledger */}
      <PartnerOrganizations
        compact
        background="page"
        title="Organizations we partner with"
        lead="Universities, NGOs, foundations and enterprises that commission research, co-host challenges and host our cohorts across the continent."
        limit={8}
      />

      {/* 10. TESTIMONIALS — participant voices */}
      <Testimonials
        background="subtle"
        audience="participant"
        limit={3}
        title="What participants say"
        lead="Graduates and founders on what changes when evidence, design and financing sit in one pipeline."
      />

      {/* 11. FOLLOW — the work continues between publications */}
      <section className={styles.follow}>
        <div className={`container ${styles.followInner}`}>
          <div className={styles.followCopy}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.followTitle}>Follow the work as it happens.</h2>
            <p className={styles.followLead}>
              Field evidence, cohort milestones and policy dialogues from across the labs —
              shared where our community already is.
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
