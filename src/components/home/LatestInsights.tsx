'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './LatestInsights.module.css';

const TABS = [
  'All',
  'Research & Evidence',
  'Policy & Governance',
  'Strategic Foresight',
] as const;

type Tab = (typeof TABS)[number];

interface EditorialDispatch {
  id: string;
  category: Exclude<Tab, 'All'>;
  format: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
}

const DISPATCHES: EditorialDispatch[] = [
  {
    id: 'dispatch-field-evidence',
    category: 'Research & Evidence',
    format: 'Research Methodology · Evidence Lab',
    title: 'Grounded Youth & Socio-Economic Field Diagnostics Across Ten Themes',
    summary:
      'Baseline surveys, political-economy analysis, and programme evaluations that anchor institutional decisions in lived community realities.',
    href: '/our-work#research-lab',
    image: '/images/insights-library-research.jpg',
    imageAlt: 'Two young researchers reviewing notes and reference texts in a library',
  },
  {
    id: 'dispatch-policy-demo',
    category: 'Policy & Governance',
    format: 'Policy Challenge · Demo Day Format',
    title: 'From Policy Bottleneck to Public-Sector Prototype and Institutional Pitch',
    summary:
      'How multidisciplinary youth cohorts move from empirical diagnosis to regulatory proposals and working policy prototypes.',
    href: '/programs#policy-challenge',
    image: '/images/youth-vr-workstation.jpg',
    imageAlt: 'Young analyst reviewing digital models beside a laptop',
  },
  {
    id: 'dispatch-foresight-2050',
    category: 'Strategic Foresight',
    format: 'Horizon Scan · Africa 2050 Series',
    title: 'Stress-Testing Today’s Workforce and Governance Choices Against 2050 Scenarios',
    summary:
      'Using PESTLE/STEEPV systems mapping and emerging-technology analysis to prepare institutions for demographic and climate shifts.',
    href: '/our-work#foresight-lab',
    image: '/images/youth-vr-workshop.jpg',
    imageAlt: 'Innovator testing a virtual scenario in a prototyping studio',
  },
  {
    id: 'dispatch-impact-learning',
    category: 'Research & Evidence',
    format: 'Impact & Learning · M&E Advisory',
    title: 'Designing Theories of Change and Outcome Dashboards That Prove What Works',
    summary:
      'Practical monitoring, evaluation, and learning frameworks that help development partners measure lasting socio-economic transformation.',
    href: '/our-work',
    image: '/images/electronics-repair.jpg',
    imageAlt: 'Young engineer inspecting precision electronics under a work lamp',
  },
];

export default function LatestInsights() {
  const [tab, setTab] = useState<Tab>('All');

  const visible = DISPATCHES.filter(
    (item) => tab === 'All' || item.category === tab,
  );

  return (
    <div>
      <div className={styles.bar}>
        <div className={styles.tabs} role="tablist" aria-label="Filter latest dispatches">
          {TABS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              className={`${styles.tab} ${tab === item ? styles.tabActive : ''}`}
              onClick={() => setTab(item)}
            >
              {item === 'All' ? 'All latest' : item.split(' & ')[0]}
            </button>
          ))}
        </div>

        <Link href="/insights" className={styles.viewAll}>
          View all <ArrowIcon />
        </Link>
      </div>

      <div className={styles.grid}>
        {visible.map((item) => (
          <article key={item.id} className={styles.card}>
            <Link href={item.href} className={styles.coverLink} aria-label={item.title}>
              <div className={styles.photoFrame}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 25vw"
                  className={styles.photo}
                />
              </div>
            </Link>
            <div className={styles.meta}>
              <span className={styles.status}>{item.format}</span>
              <h3 className={styles.title}>
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <p className={styles.summary}>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
