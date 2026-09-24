export interface StandardBadge {
  id: string;
  title: string;
  subtitle: string;
  badgeCode: string;
  verifiedOrg: string;
}

export const SERVICE_STANDARDS: StandardBadge[] = [
  {
    id: 's1',
    title: 'Florida State Licensed Plumbing Contractor',
    subtitle: 'State Certified CFC Master Plumber Compliance',
    badgeCode: 'CFC-FL-LIC',
    verifiedOrg: 'Florida Department of Business & Professional Regulation'
  },
  {
    id: 's2',
    title: 'Ultrasonic & Acoustic Frequency Certified',
    subtitle: 'Advanced Sub-Slab Hydrophone Precision Standards',
    badgeCode: 'US-ACOUSTIC-II',
    verifiedOrg: 'National Leak Detection & Pipe Acoustic Institute'
  },
  {
    id: 's3',
    title: 'Level II Infrared Thermography Certified',
    subtitle: 'Non-Destructive Thermal Moisture Imaging Protocol',
    badgeCode: 'FLIR-IR-LVL2',
    verifiedOrg: 'Infraspection Institute Standards'
  },
  {
    id: 's4',
    title: '30-45 Min Emergency Response Standard',
    subtitle: 'Guaranteed 24/7 Mobile Dispatch Units in Lake County',
    badgeCode: '247-DISPATCH',
    verifiedOrg: 'Leesburg Rapid Municipal Response Fleet'
  },
  {
    id: 's5',
    title: 'Zero-Destruction Non-Invasive Guarantee',
    subtitle: 'Precision Electronic Pinpoint Before Any Cut or Dig',
    badgeCode: 'ZERO-DAMAGE-STD',
    verifiedOrg: 'Precision Subsurface Protection Council'
  },
  {
    id: 's6',
    title: 'Lake County Business Association Verified',
    subtitle: 'A+ Better Business & Local Chamber of Commerce',
    badgeCode: 'LAKE-CO-VERIFIED',
    verifiedOrg: 'Central Florida Regional Commerce Network'
  }
];
