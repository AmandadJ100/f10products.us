// Sitewide constants. Facts only — anything regulatory stays a placeholder
// until Amanda supplies it (see REGULATORY_GUARDRAILS.md).

export const SITE = {
  name: 'F10® Products US',
  domain: 'f10products.us',
  url: 'https://f10products.us',
  // Voice words (DESIGN.md): clinical, assured, international.
  tagline: 'Veterinary & biosecurity disinfectants — trusted by professionals worldwide.',
  company: 'Health and Hygiene (Pty) Ltd',
  brand: 'F10®', // registered trademark — always F10® in display copy (never the email/domain)
  phone: '1-800-517-4705',
  email: 'info@f10products.us',
} as const;

// Primary navigation. US-registered range only; labels are structural, not claims.
export const NAV = [
  { label: 'Products', href: '/products' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Resources', href: '/resources' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Regional sites — on the US site, "United States" IS the current site,
// so the dropdown lists the other regions (DESIGN.md header note).
// [CONFIRM: exact regional URLs before wiring live.]
export const REGIONS = [
  { label: 'United Kingdom', href: 'https://f10products.co.uk/' },
  { label: 'South Africa', href: 'https://f10products.co.za/' },
] as const;
