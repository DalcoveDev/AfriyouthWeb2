export interface ProgramSpec {
  id: string;
  title: string;
  status: 'Proposed Flagship' | 'Proposed Initiative' | 'Program Track Concept';
  audience: string;
  purpose: string;
  process: string[];
  outcome: string;
  image: string;
  imageAlt: string;
}

export const PROGRAMS: ProgramSpec[] = [
  {
    id: 'e2i-accelerator',
    title: 'Evidence-to-Impact Accelerator',
    status: 'Proposed Flagship',
    audience: 'Multidisciplinary youth teams, community innovators, and policy entrepreneurs',
    purpose:
      'Unites community research, human-centered incubation, policy formulation, and capital mobilization inside a single 10-stage pipeline.',
    process: [
      'Discover & Diagnose through community research and root-cause analysis',
      'Design & Prototype human-centered solutions with early adopters',
      'Policy & Finance: craft institutional business cases and mobilize capital',
      'Implement, Measure & Scale validated pilots',
    ],
    outcome: 'Pilot-tested, evidence-backed ventures and policy interventions.',
    image: '/images/home-design-workshop.jpg',
    imageAlt: 'Team mapping ideas with sticky notes around a table during a design workshop',
  },
  {
    id: 'policy-challenge',
    title: 'Policy Innovation Challenge',
    status: 'Proposed Initiative',
    audience: 'Young analysts, university students, civic innovators, and researchers',
    purpose:
      'Asks young people to diagnose one of Africa’s most pressing policy bottlenecks and design an evidence-based solution.',
    process: [
      'Research real policy bottlenecks across 10 priority socio-economic themes',
      'Diagnose root causes and author a practical policy proposal',
      'Build a working prototype and pitch at Policy Innovation Demo Day',
    ],
    outcome: 'Actionable youth-authored policy prototypes pitched to institutions.',
    image: '/images/partnerships-meeting.jpg',
    imageAlt: 'Young policy analysts and institutional leaders collaborating around a meeting table',
  },
  {
    id: 'innovation-accelerator',
    title: 'AfriYouth Innovation Accelerator',
    status: 'Proposed Initiative',
    audience: 'Early-stage African youth founders building SDG-aligned ventures',
    purpose:
      'De-risks community-driven startup ideas from initial prototype to market validation and investor readiness.',
    process: [
      'Incubation: idea discovery, HCD, business modelling, and prototype testing',
      'Acceleration: market validation, financial modelling, and impact metrics',
      'Demo Day: structured presentation to funders and institutional partners',
    ],
    outcome: 'Market-validated, investor-ready youth enterprises.',
    image: '/images/circuit-board-soldering.jpg',
    imageAlt: 'Young technician soldering components onto a circuit board',
  },
  {
    id: 'employability-academy',
    title: 'Employability Bootcamp & University Employability Programme',
    status: 'Program Track Concept',
    audience: 'Recent graduates (Bootcamp) and university students (University Track)',
    purpose:
      'Bridges the transition from Education → Employability → Employment → Career Progression through mandatory experiential simulation.',
    process: [
      'Core readiness: CV, cover letter, LinkedIn, portfolio, and ATS optimization',
      'Mandatory 10-step Employability Simulation on a realistic job vacancy',
      'Structured mock interviews, case studies, salary negotiation, and feedback',
    ],
    outcome: 'Demonstrated job readiness and verified professional portfolios.',
    image: '/images/home-campus-students.jpg',
    imageAlt: 'University students walking together through a campus corridor',
  },
  {
    id: 'professional-academy',
    title: 'Professional Development Academy',
    status: 'Program Track Concept',
    audience: 'Early- and mid-career African professionals and emerging leaders',
    purpose:
      'Delivers outcome-oriented capability building across Leadership, Critical Thinking, Communication, Digital & AI Literacy, and M&E Management.',
    process: [
      'Baseline Professional Competency Assessment',
      'Practical training paired with a real-world institutional challenge',
      'Mentor feedback and verified Professional Portfolio completion',
    ],
    outcome: 'Evidence-based workplace competency validated on real challenges.',
    image: '/images/about-team-collaboration.jpg',
    imageAlt: 'Three colleagues reviewing work together on a laptop in a bright office',
  },
];
