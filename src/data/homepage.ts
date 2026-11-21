export interface DivisionItem {
  id: string;
  number: string;
  division: string;
  labName: string;
  summary: string;
  flagshipProduct: string;
  status: string;
  services: string[];
  photoTitle: string;
  photoDirection: string;
  photoSrc: string;
  photoAlt: string;
}

export const STRATEGIC_DIVISIONS: DivisionItem[] = [
  {
    id: 'research',
    number: '01',
    division: 'Research & Evidence',
    labName: 'Research & Evidence Lab',
    summary:
      'Generating rigorous, grounded evidence on Africa’s emerging socio-economic challenges to inform institutional decisions and community solutions.',
    flagshipProduct: 'AfriYouth Evidence Reports (Organizational & Institutional Studies)',
    status: 'Core Practice',
    services: [
      'Applied policy research',
      'Socio-economic & youth surveys',
      'Baseline and endline studies',
      'Impact assessments & programme evaluations',
      'Political-economy & stakeholder analysis',
      'Policy briefs & evidence synthesis',
    ],
    photoTitle: 'Field Researchers & Community Survey Dialogue',
    photoSrc: '/images/field-engineers-greenhouse.jpg',
    photoAlt: 'Three young engineers in hard hats reviewing plans on a tablet inside a greenhouse',
    photoDirection:
      'Documentary horizontal frame: young African researchers interviewing community members or reviewing field data tablets outdoors in natural daylight.',
  },
  {
    id: 'policy',
    number: '02',
    division: 'Policy & Governance',
    labName: 'Policy & Governance Lab',
    summary:
      'Translating empirical research into actionable public policies, regulatory improvements, and institutional reforms across African contexts.',
    flagshipProduct: 'AfriYouth Policy Solutions Series & Policy Innovation Challenges',
    status: 'Core Practice & Proposed Challenge',
    services: [
      'Policy analysis, review & design',
      'Regulatory analysis & governance diagnostics',
      'Public-sector innovation',
      'Stakeholder mapping',
      'Policy dialogue facilitation',
      'Policy implementation support',
    ],
    photoTitle: 'Youth & Policymakers in Governance Roundtable',
    photoSrc: '/images/youth-vr-workstation.jpg',
    photoAlt: 'Young professional wearing a VR headset at a desk, taking notes beside a laptop',
    photoDirection:
      'Documentary scene: young policy analysts presenting briefs at a wooden roundtable with institutional leaders, uncluttered and authentic.',
  },
  {
    id: 'venture',
    number: '03',
    division: 'Innovation & Entrepreneurship',
    labName: 'Youth Innovation & Venture Lab',
    summary:
      'Building on AfriYouth’s original incubation foundation—guiding community-driven ideas from discovery and human-centered design to market validation and investor readiness.',
    flagshipProduct: 'AfriYouth Innovation Accelerator (Incubation → Acceleration → Demo Day)',
    status: 'Core Practice & Proposed Accelerator',
    services: [
      'Idea discovery & Human-Centered Design',
      'Prototype development & market validation',
      'Business-model development',
      'Incubation & acceleration',
      'Pitch preparation & investor readiness',
      'Impact measurement',
    ],
    photoTitle: 'Hardware, Solar & Electronics Prototyping Lab',
    photoSrc: '/images/circuit-board-soldering.jpg',
    photoAlt: 'Close-up of a young technician soldering components onto a circuit board',
    photoDirection:
      'Brand-guide Page 5 style: young African engineers testing circuits, renewable solar panels, or VR digital prototypes in a practical workshop.',
  },
  {
    id: 'foresight',
    number: '04',
    division: 'Foresight & Futures',
    labName: 'Strategic Foresight & Futures Lab',
    summary:
      'Differentiating AfriYouth from conventional hubs by anticipating 2030, 2040, and 2050 workforce, technology, and governance disruptions before they arrive.',
    flagshipProduct: 'Africa 2050 Futures Series',
    status: 'Strategic Capability',
    services: [
      'Scenario planning & horizon scanning',
      'PESTLE / STEEPV analysis',
      'Future-of-work studies',
      'Emerging technology analysis',
      '2030 / 2040 / 2050 strategic scenarios',
    ],
    photoTitle: 'Strategic Foresight & Systems Mapping Workshop',
    photoSrc: '/images/youth-vr-workshop.jpg',
    photoAlt: 'Young person wearing a VR headset at a workbench with electronics and cables',
    photoDirection:
      'Editorial photograph: small multidisciplinary cohort mapping 2050 scenarios on wall boards in a sunlit studio.',
  },
  {
    id: 'academy',
    number: '05',
    division: 'Leadership & Capacity Building',
    labName: 'Career & Professional Development Academy',
    summary:
      'Moving beyond passive certificates through mandatory experiential simulations—equipping graduates and university students for employment and leadership.',
    flagshipProduct: 'Employability Bootcamp, University Programme & Impact Learning Services',
    status: 'Proposed Academy Track',
    services: [
      '10-step Employability Simulation',
      'ATS, CV, cover letter & portfolio development',
      'Leadership, critical thinking & M&E skills',
      'Digital & responsible AI literacy',
      'AfriYouth Impact Dashboard & M&E advisory',
    ],
    photoTitle: 'Practical Career Simulation & Mentorship Session',
    photoSrc: '/images/electronics-repair.jpg',
    photoAlt: 'Young woman soldering a circuit board under a desk lamp',
    photoDirection:
      'Natural candid photography: young African graduates practicing case studies and interviews with mentors.',
  },
];

export const HOMEPAGE_STATS = [
  { value: '10', label: 'Stages, from community discovery to continental scale' },
  { value: '05', label: 'Integrated labs working as one continuum' },
  { value: '2050', label: 'Foresight horizon shaping today’s decisions' },
];

export interface AcceleratorStage {
  step: number;
  code: string;
  title: string;
  phase: 'Evidence & Insight' | 'Design & Policy' | 'Capital & Scale';
  description: string;
  output: string;
}

export const ACCELERATOR_STAGES: AcceleratorStage[] = [
  {
    step: 1,
    code: '01',
    title: 'Discover',
    phase: 'Evidence & Insight',
    description: 'Identify the problem directly through community-grounded research.',
    output: 'Community Problem Brief',
  },
  {
    step: 2,
    code: '02',
    title: 'Diagnose',
    phase: 'Evidence & Insight',
    description: 'Understand root causes using systems and political-economy analysis.',
    output: 'Systems Root-Cause Map',
  },
  {
    step: 3,
    code: '03',
    title: 'Research',
    phase: 'Evidence & Insight',
    description: 'Generate and analyse rigorous empirical evidence to anchor decisions.',
    output: 'Evidence Synthesis',
  },
  {
    step: 4,
    code: '04',
    title: 'Design',
    phase: 'Design & Policy',
    description: 'Develop a human-centered solution shaped around lived user realities.',
    output: 'HCD Solution Blueprint',
  },
  {
    step: 5,
    code: '05',
    title: 'Prototype',
    phase: 'Design & Policy',
    description: 'Build, test, and refine the practical solution with early adopters.',
    output: 'Validated Working Prototype',
  },
  {
    step: 6,
    code: '06',
    title: 'Policy',
    phase: 'Design & Policy',
    description: 'Develop actionable policy recommendations and institutional business cases.',
    output: 'Policy Brief & Business Case',
  },
  {
    step: 7,
    code: '07',
    title: 'Finance',
    phase: 'Capital & Scale',
    description: 'Connect validated ventures and reforms to funders, investors, and partners.',
    output: 'Resource Mobilization Package',
  },
  {
    step: 8,
    code: '08',
    title: 'Implement',
    phase: 'Capital & Scale',
    description: 'Pilot the solution in real community or institutional environments.',
    output: 'Structured Field Pilot',
  },
  {
    step: 9,
    code: '09',
    title: 'Measure',
    phase: 'Capital & Scale',
    description: 'Evaluate outcomes, learning, and measurable socio-economic impact.',
    output: 'Impact & Learning Report',
  },
  {
    step: 10,
    code: '10',
    title: 'Scale',
    phase: 'Capital & Scale',
    description: 'Replicate and scale what works for long-term transformation across Africa.',
    output: 'Continental Scale Pathway',
  },
];

export interface PublicationConcept {
  id: string;
  series: string;
  category: 'Research & Evidence' | 'Policy & Governance' | 'Strategic Foresight';
  title: string;
  status: string;
  summary: string;
  tone: 'blue' | 'pink' | 'ink' | 'lavender';
  image: string;
  imageAlt: string;
}

export const PUBLICATION_CONCEPTS: PublicationConcept[] = [
  {
    id: 'evidence-reports',
    series: 'AfriYouth Evidence Reports',
    category: 'Research & Evidence',
    title: 'Applied Socio-Economic & Youth Field Assessments',
    status: 'Flagship Publication Format',
    summary:
      'Rigorous baseline studies, youth surveys, and programme evaluations designed to give institutions clear evidence on what works.',
    tone: 'blue',
    image: '/images/home-campus-students.jpg',
    imageAlt: 'University students walking together through a campus corridor',
  },
  {
    id: 'policy-solutions',
    series: 'AfriYouth Policy Solutions Series',
    category: 'Policy & Governance',
    title: 'Actionable Policy Reforms & Governance Diagnostics',
    status: 'Core Intellectual Product',
    summary:
      'Concise, evidence-backed policy briefs translating youth and community research into public-sector innovation and regulatory reform.',
    tone: 'pink',
    image: '/images/contact-conversation.jpg',
    imageAlt: 'Two policy colleagues reviewing documents together in an office',
  },
  {
    id: 'africa-2050',
    series: 'Africa 2050 Futures Series',
    category: 'Strategic Foresight',
    title: 'Africa’s Youth Workforce in 2050: Four Possible Futures',
    status: 'Proposed Flagship Study',
    summary:
      'Long-horizon scenario planning and emerging-technology analysis preparing young people and decision-makers for the next 25 years.',
    tone: 'ink',
    image: '/images/faq-laptop-remote.jpg',
    imageAlt: 'Researcher analyzing scenario models on a laptop at a desk',
  },
  {
    id: 'impact-learning',
    series: 'AfriYouth Impact & Learning Reports',
    category: 'Research & Evidence',
    title: 'Monitoring, Evaluation & Learning for Youth Programmes',
    status: 'Advisory Publication Format',
    summary:
      'Practical measurement frameworks, impact dashboards and learning reports that help institutions see what changed, for whom, and why.',
    tone: 'lavender',
    image: '/images/circuit-board-soldering.jpg',
    imageAlt: 'Young technician testing precision electronics in a practical lab',
  },
];