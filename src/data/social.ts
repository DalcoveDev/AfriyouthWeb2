export type SocialIcon = 'linkedin' | 'instagram' | 'x' | 'youtube' | 'whatsapp';

export interface SocialLink {
  id: SocialIcon;
  label: string;
  href: string;
  /** Set to false once the real profile URL is confirmed. */
  verified?: boolean;
}

/**
 * Organisation profiles shown in the footer, homepage, About and Contact.
 * Replace the profile URLs below with the live accounts before launch.
 * The WhatsApp entry currently opens the direct desk chat; swap it for the
 * community invite link when that exists.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/afriyouth-innovation-labs',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/afriyouthlabs',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/afriyouthlabs',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@afriyouthlabs',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/250788123456',
  },
];
