import Link from 'next/link';
import ArrowLink from '@/components/ArrowLink';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page isn&rsquo;t in the record.</h1>
        <p className={styles.lead}>
          The page you were looking for has moved, or the link is incomplete. Start from the
          homepage, or go straight to the work.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <ArrowLink href="/our-work">Explore our work</ArrowLink>
        </div>
        <nav aria-label="Helpful links" className={styles.links}>
          <Link href="/about">About AfriYouth</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </section>
  );
}
