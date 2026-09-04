// Sitewide constants. Facts only — anything regulatory stays a placeholder
// until Amanda supplies it (see REGULATORY_GUARDRAILS.md).

export const SITE = {
  name: 'F10® Products US',
  domain: 'f10products.com',
  url: 'https://f10products.com',
  // Voice words (DESIGN.md): clinical, assured, international.
  tagline: 'Veterinary disinfectant, biosecurity and treatment products',
  company: 'Health and Hygiene (Pty) Ltd',
  brand: 'F10®', // registered trademark — always F10® in display copy (never the email/domain)
  phone: '1-800-517-4705',
  email: 'info@f10products.com',
} as const;

// Primary navigation. US-registered range only; labels are structural, not claims.
export const NAV = [
  { label: 'Products', href: '/products' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Resources', href: '/resources' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Contact form backend (Formspree — host-agnostic, chosen 2026-08-03).
// Paste the Formspree form ID here (the part after /f/ in your endpoint) and the
// contact form goes live, routing submissions to info@f10products.com.
// While empty, the Contact page shows a "form setup pending" note instead of a
// dead form. [CONFIRM: Formspree form ID]
export const CONTACT_FORM_ID = 'mqpzzqro';

// Formspree form ID for the Veterinary Adverse Drug Reaction report (FDA 1932a).
// Keep this SEPARATE from the general contact form. Submissions must reach the
// manufacturer's pharmacovigilance mailbox per the FDA EUA requirement.
// [CONFIRM: Formspree form ID + recipient. Mailbox is info@f10products.com
// (matches the FDA-authorized form and the .com domain decision, 2026-08-04).]
export const ADVERSE_FORM_ID = 'xrpzzlkz';

// Resources sub-navigation (dropdown under Resources, mirrors the Products pattern).
// Only Efficacy & Safety is live now; further sections (SITE_PLAN.md #7) slot in later.
export const RESOURCES_NAV = [
  { label: 'Efficacy & Safety', href: '/resources/efficacy-safety' },
] as const;

// Regional sites — on the US site, "United States" IS the current site,
// so the dropdown lists the other regions (DESIGN.md header note).
// [CONFIRM: exact regional URLs before wiring live.]
export const REGIONS = [
  { label: 'United Kingdom', href: 'https://f10products.co.uk/' },
  { label: 'South Africa', href: 'https://f10products.co.za/' },
] as const;
