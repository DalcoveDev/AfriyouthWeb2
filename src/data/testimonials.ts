/**
 * Participant and partner testimonials.
 * Illustrative voices for the testimony ledger — replace with consented,
 * attributed quotes before launch.
 */
export type TestimonialAudience = 'participant' | 'partner';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organisation?: string;
  audience: TestimonialAudience;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The Policy Innovation Challenge changed how I use evidence. We left with a proposal that a ministry actually asked to pilot.',
    name: 'Aline Uwase',
    role: 'Policy Innovation Challenge participant',
    organisation: 'University of Rwanda graduate',
    audience: 'participant',
  },
  {
    quote:
      'The Employability Bootcamp simulation was the first time a programme made me practise a salary negotiation instead of just reading about it.',
    name: 'Kevin Nshuti',
    role: 'Employability Bootcamp graduate',
    organisation: 'Kigali, Rwanda',
    audience: 'participant',
  },
  {
    quote:
      'Our team came in with a community idea and left with a tested prototype and a clear path to financing.',
    name: 'Diane Mukamana',
    role: 'Founder, Evidence-to-Impact Accelerator cohort',
    organisation: 'AfriGreen AgriTech',
    audience: 'participant',
  },
  {
    quote:
      'AfriYouth treats evidence as a shared asset, not a deliverable. That changed how our grantees plan and report.',
    name: 'Grace Achieng',
    role: 'Programme Director',
    organisation: 'East Africa Skills Coalition',
    audience: 'partner',
  },
  {
    quote:
      'They ran a baseline that our board could actually use. The findings now shape our graduate employability strategy.',
    name: 'Dr. Samuel Habimana',
    role: 'Dean of Employability',
    organisation: 'Kigali Polytechnic University',
    audience: 'partner',
  },
  {
    quote:
      'The Africa 2050 scenarios gave our policy team a shared language for long-term planning across three countries.',
    name: 'Fatou Diallo',
    role: 'Research Lead',
    organisation: 'Sahel Education Fund',
    audience: 'partner',
  },
];
