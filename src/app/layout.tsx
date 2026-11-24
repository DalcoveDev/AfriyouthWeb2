import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

/* Brand guidelines: Poppins for titles and headings; Gilroy (self-hosted in
   styles/fonts.css) for body copy and general content. */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afriyouthlabs.org'),
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'AfriYouth Innovation Labs',
    title: 'AfriYouth Innovation Labs | Fueling Innovators for Sustainable Development',
    description:
      'An African research, innovation and policy lab turning community evidence into policy, enterprise and lasting systems change.',
  },
  twitter: {
    card: 'summary',
    title: 'AfriYouth Innovation Labs',
    description:
      'An African research, innovation and policy lab turning community evidence into policy, enterprise and lasting systems change.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
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
        <WhatsAppChat />
      </body>
    </html>
  );
}
