import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import EditorialImageSlot from '@/components/EditorialImageSlot';
import ArrowLink from '@/components/ArrowLink';
import ArrowIcon from '@/components/ArrowIcon';
import AfricaFootprintMap from '@/components/about/AfricaFootprintMap';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About | AfriYouth Innovation Labs',
  description:
    'AfriYouth Innovation Labs is an African research, innovation and policy consulting firm identifying, nurturing and advancing promising ideas from Africa’s young innovators.',
};

const DIVISIONS = [
  {
    id: 'research-lab',
    division: 'Research & Evidence',
    products: 'Evidence Reports, Surveys, Impact Studies',
  },
  {
    id: 'policy-lab',
    division: 'Policy & Governance',
    products: 'Policy Lab, Policy Papers, Policy Innovation Challenges',
  },
  {
    id: 'venture-lab',
    division: 'Innovation & Entrepreneurship',
    products: 'Innovation Accelerator, HCD Lab',
  },
  {
    id: 'foresight-lab',
    division: 'Foresight & Futures',
    products: 'Africa 2030/2050 Scenarios, Futures Studies',
  },
  {
    id: 'career-academy',
    division: 'Leadership & Capacity Building',
    products: 'Employability Skills Lab, Professional Skills Academy, Impact & Learning Services',
  },
];

const STRIP_PHOTOS = [
  {
    src: '/images/youth-vr-workshop.jpg',
    alt: 'Young innovator wearing a VR headset at a workbench of electronics',
  },
  {
    src: '/images/field-engineers-greenhouse.jpg',
    alt: 'Young engineers in hard hats reviewing plans inside a greenhouse',
  },
  {
    src: '/images/circuit-board-soldering.jpg',
    alt: 'Young technician soldering components onto a circuit board',
  },
  {
    src: '/images/electronics-repair.jpg',
    alt: 'Young woman repairing electronics under a desk lamp',
  },
  {
    src: '/images/youth-vr-workstation.jpg',
    alt: 'Young professional in a VR headset taking notes beside a laptop',
  },
];

const STANDARD_MODELS = [
  { model: 'Youth organizations', focus: 'focus on training.' },
  { model: 'Incubators', focus: 'focus on startups.' },
  { model: 'Think tanks', focus: 'focus on research and policy.' },
  { model: 'Consulting firms', focus: 'focus on clients.' },
];

const BRAND_CORNERSTONES = [
  {
    title: 'Innovation',
    description:
      'Advancing creative, evidence-backed approaches to complex socio-economic bottlenecks.',
  },
  {
    title: 'Youth Empowerment',
    description:
      'Equipping young people of all backgrounds with the agency to diagnose problems and lead change.',
  },
  {
    title: 'Sustainability',
    description:
      'Designing interventions and venture models aligned with the SDGs and long-term viability.',
  },
  {
    title: 'Global Impact',
    description:
      'Connecting locally grounded African research and policy solutions to international development agendas.',
  },
  {
    title: 'Human-Centered Design',
    description:
      'Co-creating prototypes directly alongside the communities and institutions that will live with them.',
  },
  {
    title: 'Leadership Development',
    description:
      'Instilling critical thinking, analytical rigor, and entrepreneurial leadership for an Africa 2050 horizon.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="An African Innovation & Policy Lab Built Around Its Young People"
        image="/images/about-team-collaboration.jpg"
        imageAlt="Three colleagues reviewing work together on a laptop in a bright office"
        lead="By 2030, Africa will have the largest workforce in the world. AfriYouth Innovation Labs exists to give young people the ability and capacity to solve African problems—empowering their future independence and self-reliance."
      />

      {/* 1. Who We Are */}
      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>A Research, Innovation &amp; Policy Consulting Firm</h2>
            <p className={styles.prose}>
              AfriYouth Innovation Labs identifies, nurtures, and advances promising ideas from
              Africa’s young innovators to address the Sustainable Development Goals (SDGs).
            </p>
            <p className={styles.prose}>
              Through human-centered design, applied research, and innovation, we transform
              community-driven ideas into practical and scalable solutions that contribute to
              the socio-economic transformation of Africa and beyond.
            </p>

            <div className={styles.philosophyCard}>
              <p className={styles.philosophyChain}>
                Think <span aria-hidden="true">→</span> Research <span aria-hidden="true">→</span>{' '}
                Design <span aria-hidden="true">→</span> Build <span aria-hidden="true">→</span>{' '}
                Influence <span aria-hidden="true">→</span> Scale
              </p>
            </div>

            <ArrowLink href="/our-work">Explore our work</ArrowLink>
          </div>

          <EditorialImageSlot
            aspectRatio="3/2"
            src="/images/electronics-repair.jpg"
            alt="Young woman soldering a circuit board under a desk lamp"
            slotTitle="About Page Documentary Portrait"
            artDirection="Documentary photograph of young African professionals collaborating over field notebooks or prototypes in a bright workspace."
          />
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className={styles.dark}>
        <div className={`container ${styles.mvGrid}`}>
          <div>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.darkTitle}>
              Generating evidence. Shaping policy. Developing solutions.
            </h2>
            <p className={styles.darkProse}>
              To empower Africa’s youth to generate evidence, shape policy, and develop
              innovative solutions to Africa’s most pressing socio-economic challenges through
              research, human-centered design, and entrepreneurship.
            </p>
          </div>

          <div>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.darkTitle}>
              Inclusive &amp; sustainable transformation by 2050.
            </h2>
            <p className={styles.darkProse}>
              To build an Africa where empowered young people use evidence, innovation, and
              entrepreneurship to solve complex challenges, shape policies and drive inclusive
              and sustainable socio-economic transformation by 2050.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Where We Work — Rwanda Operational Footprint & Continental Map */}
      <section className={styles.section} id="where-we-work">
        <div className={`container ${styles.footprintSplit}`}>
          <div className={styles.footprintCopy}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Where We Work: Rooted in Rwanda, Built for Africa</h2>
            <p className={styles.prose}>
              AfriYouth Innovation Labs currently operates out of <strong>Kigali, Rwanda</strong>—working
              alongside young innovators, university students, researchers, and public-interest
              institutions to generate field evidence, co-design prototypes, and build career
              readiness.
            </p>

            <dl className={styles.footprintMeta}>
              <div className={styles.footprintRow}>
                <dt>Current Operational Hub</dt>
                <dd>Kigali Innovation City, Gasabo District, KG 7 Ave — Kigali, Rwanda</dd>
              </div>
              <div className={styles.footprintRow}>
                <dt>Active Focus in Rwanda</dt>
                <dd>
                  Youth Innovation &amp; Venture Lab, Applied Socio-Economic Research, Policy
                  Innovation Challenges, and Graduate Employability Simulations
                </dd>
              </div>
              <div className={styles.footprintRow}>
                <dt>Direct Desk &amp; Inquiries</dt>
                <dd>info@afriyouthlabs.org · partnerships@afriyouthlabs.org · +250 788 123 456</dd>
              </div>
            </dl>

            <ArrowLink href="/contact">Connect with our Kigali team</ArrowLink>
          </div>

          <div className={styles.footprintMapCol}>
            <AfricaFootprintMap />
          </div>
        </div>
      </section>

      {/* 4. Competitive Advantage */}
      <section className={styles.mist}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>What Makes AfriYouth Genuinely Unique</h2>
            <p className={styles.prose}>
              Most organizations keep research, policy, design, and venture building separate.
              AfriYouth connects the disciplines the sector usually divides.
            </p>
          </header>

          <div className={styles.modelGrid}>
            {STANDARD_MODELS.map((item) => (
              <div key={item.model} className={styles.modelCard}>
                <span className={styles.modelLabel}>Most {item.model}</span>
                <p className={styles.modelFocus}>{item.focus}</p>
              </div>
            ))}

            <div className={styles.modelCardAccent}>
              <div>
                <p className={styles.accentTitle}>
                  Research + Policy + Human-Centered Design + Entrepreneurship + Foresight
                </p>
                <p className={styles.accentBody}>
                  Five capabilities in one continuum—so evidence, design, and financing never
                  drift apart.
                </p>
              </div>
              <ArrowLink href="/approach" inverse>
                Explore our 10-stage methodology
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Five Strategic Divisions */}
      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Five Strategic Divisions</h2>
            <p className={styles.prose}>
              Our portfolio consolidates research, policy, innovation, foresight, and capacity
              building into five divisions—supported by cross-cutting Resource Mobilization &amp;
              Partnerships advisory.
            </p>
          </header>

          <ul className={styles.divisionList}>
            {DIVISIONS.map((item) => (
              <li key={item.division} className={styles.divisionRow}>
                <div className={styles.divisionBody}>
                  <h3 className={styles.divisionName}>{item.division}</h3>
                  <p className={styles.divisionProducts}>{item.products}</p>
                </div>
                <Link
                  href={`/our-work#${item.id}`}
                  className={styles.rowArrow}
                  aria-label={`Explore ${item.division} on Our Work`}
                >
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.sectionFooter}>
            <ArrowLink href="/programs">View flagship programs</ArrowLink>
          </div>
        </div>
      </section>

      {/* 6. Brand Cornerstones */}
      <section className={styles.mist}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Six Cornerstones of Our Identity</h2>
            <p className={styles.prose}>
              Grounded in AfriYouth’s official brand guidelines, these six principles define our
              voice, our programmes, and our long-term commitment.
            </p>
          </header>

          <ul className={styles.cornerstoneGrid}>
            {BRAND_CORNERSTONES.map((item) => (
              <li key={item.title} className={styles.cornerstoneItem}>
                <h3 className={styles.cornerstoneTitle}>{item.title}</h3>
                <p className={styles.cornerstoneDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Documentary Strip */}
      <section className={styles.strip} aria-label="AfriYouth programme photography">
        <div className={styles.stripTrack}>
          {STRIP_PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.stripItem}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 64vw, 20vw"
                className={styles.stripImage}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* 8. Governance & Team */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.governanceCard}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Leadership &amp; Advisory Structure</h2>
            <p className={styles.prose}>
              Coordinated from our Kigali headquarters, AfriYouth Innovation Labs is governed by
              an executive leadership team, five specialized lab directors, visiting policy and
              foresight fellows, and an independent advisory council ensuring methodological rigor
              and youth accountability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
