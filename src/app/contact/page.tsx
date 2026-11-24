import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import LineIcon, { type LineIconName } from '@/components/LineIcon';
import ContactInquiryForm from '@/components/forms/ContactInquiryForm';
import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | AfriYouth Innovation Labs',
  description:
    'Contact AfriYouth Innovation Labs in Kigali, Rwanda for research commissions, university employability partnerships, or institutional collaborations.',
};

const DETAILS: Array<{ label: string; value: string; icon: LineIconName }> = [
  {
    label: 'Office location',
    value: 'Kigali Innovation City, Gasabo District, KG 7 Ave — Kigali, Rwanda',
    icon: 'pin',
  },
  {
    label: 'Official email',
    value: 'info@afriyouthlabs.org · partnerships@afriyouthlabs.org',
    icon: 'mail',
  },
  {
    label: 'Research & programs desk',
    value: 'research@afriyouthlabs.org · programs@afriyouthlabs.org',
    icon: 'mail',
  },
  {
    label: 'Telephone & office hours',
    value: '+250 788 123 456 · Monday – Friday, 08:30 – 17:30 CAT (Kigali)',
    icon: 'phone',
  },
  {
    label: 'Next steps',
    value:
      'Partnership, research, and cohort inquiries are reviewed by our Kigali team within two business days to align on scope, community context, and evidence objectives.',
    icon: 'flag',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        variant="split"
        title="Start a Conversation With AfriYouth Innovation Labs"
        image="/images/contact-conversation.jpg"
        imageAlt="Two colleagues talking together at a reception desk"
        lead="Reach out to our Kigali headquarters regarding research and policy advisory, cohort partnerships, university employability programmes, or institutional collaborations."
      />

      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div className={styles.rail}>
            <span className="section-rule" aria-hidden="true" />
            <h2 className={styles.h2}>Kigali Headquarters &amp; Direct Channels</h2>
            <p className={styles.prose}>
              Reach our coordination and research desk in Kigali, Rwanda directly via the
              channels below, or submit a structured inquiry through the thematic routing form.
            </p>

            <dl className={styles.details}>
              {DETAILS.map((d) => (
                <div key={d.label} className={styles.detail}>
                  <dt className={styles.detailLabel}>
                    <span className={styles.detailIcon} aria-hidden="true">
                      <LineIcon name={d.icon} size={16} />
                    </span>
                    {d.label}
                  </dt>
                  <dd className={styles.detailValue}>{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.follow}>
              <h3 className={styles.followTitle}>Follow AfriYouth</h3>
              <p className={styles.followLead}>
                Programme updates, field evidence and policy dialogue across our channels.
              </p>
              <SocialLinks dense />
            </div>
          </div>

          <div className={styles.formPanel}>
            <ContactInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
