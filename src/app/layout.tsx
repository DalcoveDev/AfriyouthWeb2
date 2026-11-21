import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* Figtree is the typeface used across the design language this site follows:
   one geometric sans for display, UI and long-form copy. */
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AfriYouth Innovation Labs | Fueling Innovators for Sustainable Development',
  description:
    'An African research, innovation, and policy consulting organization empowering youth to generate evidence, shape policy, and build scalable solutions for sustainable development.',
  keywords: [
    'AfriYouth Innovation Labs',
    'African Youth Innovation',
    'Policy Research Africa',
    'Human-Centered Design',
    'Sustainable Development Goals',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      {/* Browser extensions (e.g. password managers, translators) add attributes such as
          `inmaintabuse` to <body> before hydration. Attributes on this element are not
          rendered by the app, so suppress the resulting mismatch warning here only. */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
