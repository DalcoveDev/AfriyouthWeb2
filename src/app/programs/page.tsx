import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProgramDirectory from '@/components/programs/ProgramDirectory';
import layout from '@/styles/editorial.module.css';

export const metadata: Metadata = {
  title: 'Programs | AfriYouth Innovation Labs',
  description:
    'Explore AfriYouth’s proposed flagship programs including the Evidence-to-Impact Accelerator, Policy Innovation Challenge, and Employability Academy.',
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Practical Pathways From Evidence to Sustainable Action"
        image="/images/programs-tech-workshop.jpg"
        imageAlt="Students assembling electronics components at a workshop bench"
        lead="Every AfriYouth initiative is designed around experiential problem-solving—replacing passive training with real-world challenges, policy prototyping, and measurable outcomes."
      />
      <section className={layout.section}>
        <div className="container">
          <ProgramDirectory />
        </div>
      </section>
    </>
  );
}