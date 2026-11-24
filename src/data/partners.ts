/**
 * Institutional partner roster.
 * Illustrative entries for the partner ledger — replace with confirmed
 * organizations and their official names before launch.
 */
export interface PartnerOrganization {
  name: string;
  category: 'NGO' | 'Foundation' | 'University' | 'Enterprise' | 'Think tank';
  location: string;
}

export const PARTNER_ORGANIZATIONS: PartnerOrganization[] = [
  {
    name: 'Nyarugenge Youth Foundation',
    category: 'NGO',
    location: 'Kigali, Rwanda',
  },
  {
    name: 'Kigali Polytechnic University',
    category: 'University',
    location: 'Kigali, Rwanda',
  },
  {
    name: 'East Africa Skills Coalition',
    category: 'NGO',
    location: 'Nairobi, Kenya',
  },
  {
    name: 'Muhazi Community Trust',
    category: 'Foundation',
    location: 'Kayonza, Rwanda',
  },
  {
    name: 'Ubuntu Ventures',
    category: 'Enterprise',
    location: 'Kigali, Rwanda',
  },
  {
    name: 'Rwanda Policy Institute',
    category: 'Think tank',
    location: 'Kigali, Rwanda',
  },
  {
    name: 'AfriGreen AgriTech',
    category: 'Enterprise',
    location: 'Musanze, Rwanda',
  },
  {
    name: 'Kigali Design Collective',
    category: 'Enterprise',
    location: 'Kigali, Rwanda',
  },
  {
    name: 'Sahel Education Fund',
    category: 'Foundation',
    location: 'Dakar, Senegal',
  },
  {
    name: 'Great Lakes Health Alliance',
    category: 'NGO',
    location: 'Goma, DR Congo',
  },
];
