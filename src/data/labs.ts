export interface WorkChapter {
  id: string;
  division: string;
  title: string;
  status: string;
  product: string;
  description: string;
  services: string[];
  photoTitle: string;
  photoSrc: string;
  photoAlt: string;
  artDirection: string;
}

export const WORK_CHAPTERS: WorkChapter[] = [
  {
    id: 'venture-lab',
    division: '01 • Innovation & Entrepreneurship',
    title: 'Youth Innovation & Venture Lab',
    status: 'Core Practice & Proposed Accelerator',
    product: 'AfriYouth Innovation Accelerator (Incubation → Acceleration → Demo Day)',
    description:
      'Guides community-driven ideas from early discovery and human-centered design through technical prototyping, market validation, and investor readiness.',
    services: [
      'Idea discovery & Human-Centered Design',
      'Prototype development & market validation',
      'Business-model & incubation cohorts',
      'Pitch preparation & investor readiness',
    ],
    photoTitle: 'Venture Prototyping & Hardware Engineering',
    photoSrc: '/images/circuit-board-soldering.jpg',
    photoAlt: 'Close-up of a young technician soldering components onto a circuit board',
    artDirection: 'Young African builders testing hardware electronics or renewable energy prototypes.',
  },
  {
    id: 'research-lab',
    division: '02 • Research & Evidence',
    title: 'Research & Evidence Lab',
    status: 'Core Practice',
    product: 'AfriYouth Evidence Reports',
    description:
      'Generates high-integrity socio-economic and youth research so governments, NGOs, and innovators make decisions anchored in real African field evidence.',
    services: [
      'Applied policy & socio-economic research',
      'Youth surveys, baseline & endline studies',
      'Impact assessments & programme evaluations',
      'Political-economy & evidence synthesis',
    ],
    photoTitle: 'Applied Field Research & Survey Work',
    photoSrc: '/images/our-work-science-lab.jpg',
    photoAlt: 'Researchers working with microscopes and field samples in a modern laboratory',
    artDirection: 'Researchers collecting field data and facilitating community focus dialogues.',
  },
  {
    id: 'policy-lab',
    division: '03 • Policy & Governance',
    title: 'Policy & Governance Lab',
    status: 'Core Practice & Proposed Challenge',
    product: 'AfriYouth Policy Solutions Series',
    description:
      'Translates empirical field research into actionable public policies, regulatory improvements, and institutional reforms.',
    services: [
      'Policy analysis, review & design',
      'Regulatory & governance diagnostics',
      'Public-sector innovation & stakeholder mapping',
      'Policy dialogue & implementation support',
    ],
    photoTitle: 'Policy Dialogue & Institutional Reform',
    photoSrc: '/images/youth-vr-workstation.jpg',
    photoAlt: 'Young professional wearing a VR headset at a desk, taking notes beside a laptop',
    artDirection: 'Youth policy fellows discussing policy briefs with institutional stakeholders.',
  },
  {
    id: 'foresight-lab',
    division: '04 • Foresight & Futures',
    title: 'Strategic Foresight & Futures Lab',
    status: 'Strategic Differentiator',
    product: 'Africa 2050 Futures Series',
    description:
      'Explores 2030, 2040, and 2050 disruptions across workforce demographics, climate, and emerging technologies so today’s choices remain future-ready.',
    services: [
      'Scenario planning & horizon scanning',
      'PESTLE / STEEPV systems analysis',
      'Future-of-work & technology studies',
      '2030 / 2040 / 2050 strategic modelling',
    ],
    photoTitle: '2050 Scenario Planning Workshop',
    photoSrc: '/images/youth-vr-workshop.jpg',
    photoAlt: 'Young person wearing a VR headset at a workbench with electronics and cables',
    artDirection: 'Strategic foresight facilitators mapping future workforce scenarios.',
  },
  {
    id: 'career-academy',
    division: '05 • Leadership & Capacity Building',
    title: 'Career & Professional Development Academy',
    status: 'Proposed Academy Structure',
    product: 'Employability Bootcamp, University Programme & Professional Skills Academy',
    description:
      'Replaces passive certificate training with mandatory 10-step experiential career simulations and outcome-oriented competency portfolios.',
    services: [
      'Mandatory 10-step Employability Simulation',
      'CV, LinkedIn, ATS & portfolio optimization',
      'Leadership, systems thinking & M&E skills',
      'Digital & responsible AI workplace literacy',
    ],
    photoTitle: 'Experiential Career Simulation & Mentorship',
    photoSrc: '/images/electronics-repair.jpg',
    photoAlt: 'Young woman soldering a circuit board under a desk lamp',
    artDirection: 'Graduates completing case studies and mock interviews in a mentoring studio.',
  },
];
