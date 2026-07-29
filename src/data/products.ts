// Products data — the single source for the Products hub + 3 category pages.
// FACTS ONLY. No authored efficacy, spectrum, dilution, or registration claims
// (REGULATORY_GUARDRAILS.md). Regulated overview copy renders as a visible
// placeholder until Amanda supplies it. Document links point at published,
// unaltered source documents; SDS is a factual safety document.

export type CategoryKey = 'eua' | 'disinfectants' | 'treatment';

// Document types let each page show the links relevant to its pathway framing.
export type DocType = 'sds' | 'eua-fact' | 'eua-foi' | 'fda-index';
export interface ProductDoc {
  type: DocType;
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  categories: CategoryKey[];
  image: string;
  imageAlt: string;
  sizes: string[];
  sdsPending?: boolean; // SDS not yet supplied — render "SDS to follow"
  docs: ProductDoc[];
  overview: null; // structure-first: renders the placeholder; no authored claims
}

const SDS = '/documents/sds';
const DOC = '/documents';

export const products: Product[] = [
  // --- FDA EUA products (also FDA-Index-listed treatment products) -----------
  {
    slug: 'antiseptic-wound-spray-wi',
    name: 'F10® Antiseptic Wound Spray with Insecticide',
    categories: ['eua', 'treatment'],
    image: '/products/treatment/antiseptic-wound-spray-wi.webp',
    imageAlt: 'F10® Antiseptic Wound Spray with Insecticide range',
    sizes: ['100 ml', '500 ml'],
    docs: [
      { type: 'eua-fact', label: 'FDA EUA Fact Sheet (No. 006672)', href: `${DOC}/f10-wound-spray-eua-fact-sheet.pdf` },
      { type: 'eua-foi', label: 'EUA FOI Summary', href: `${DOC}/f10-wound-spray-eua-foi-sheet.pdf` },
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-010)', href: `${DOC}/f10-wound-spray-wi-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-wound-spray-wi.pdf` },
    ],
    overview: null,
  },
  {
    slug: 'antiseptic-barrier-ointment-wi',
    name: 'F10® Antiseptic Barrier Ointment with Insecticide',
    categories: ['eua', 'treatment'],
    image: '/products/treatment/antiseptic-barrier-ointment-wi.webp',
    imageAlt: 'F10® Antiseptic Barrier Ointment with Insecticide range',
    sizes: ['100 g', '500 g'],
    docs: [
      { type: 'eua-fact', label: 'FDA EUA Fact Sheet (No. 006677)', href: `${DOC}/f10-barrier-ointment-eua-fact-sheet.pdf` },
      { type: 'eua-foi', label: 'EUA FOI Summary', href: `${DOC}/f10-barrier-ointment-eua-foi-sheet.pdf` },
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-011)', href: `${DOC}/f10-barrier-ointment-wi-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-barrier-ointment-wi.pdf` },
    ],
    overview: null,
  },

  // --- Disinfectants ---------------------------------------------------------
  {
    slug: 'sc-veterinary-disinfectant',
    name: 'F10SC Veterinary Disinfectant',
    categories: ['disinfectants'],
    image: '/products/disinfectants/sc-veterinary-disinfectant.webp',
    imageAlt: 'F10SC Veterinary Disinfectant range — 100 ml to 5 L',
    sizes: ['100 ml', '200 ml', '1 L', '5 L'],
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10sc-veterinary-disinfectant.pdf` }],
    overview: null,
  },
  {
    slug: 'scxd-veterinary-disinfectant-cleanser',
    name: 'F10SCXD Veterinary Disinfectant Cleanser',
    categories: ['disinfectants'],
    image: '/products/disinfectants/scxd-veterinary-cleanser.webp',
    imageAlt: 'F10SCXD Veterinary Disinfectant Cleanser range — 100 ml to 5 L',
    sizes: ['100 ml', '200 ml', '1 L', '5 L'],
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10scxd-veterinary-cleanser.pdf` }],
    overview: null,
  },
  {
    slug: 'ready-to-use',
    name: 'F10 Ready to Use',
    categories: ['disinfectants'],
    image: '/products/disinfectants/ready-to-use.webp',
    imageAlt: 'F10 Ready to Use veterinary disinfectant — 1 L',
    sizes: ['1 L'],
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10-ready-to-use.pdf` }],
    overview: null,
  },
  {
    slug: 'cl-veterinary-disinfectant',
    name: 'F10CL Veterinary Disinfectant',
    categories: ['disinfectants'],
    image: '/products/disinfectants/cl-veterinary-disinfectant.webp',
    imageAlt: 'F10CL Veterinary Disinfectant range — 1 L and 5 L',
    sizes: ['1 L', '5 L'],
    sdsPending: true,
    docs: [],
    overview: null,
  },
  {
    slug: 'odour-eliminator',
    name: 'F10 Odour Eliminator',
    categories: ['disinfectants'],
    image: '/products/disinfectants/odour-eliminator.webp',
    imageAlt: 'F10 Odour Eliminator — 500 ml',
    sizes: ['500 ml'],
    sdsPending: true,
    docs: [],
    overview: null,
  },
  {
    slug: 'f919sc-biofilm-remover',
    name: 'F919SC Biofilm Remover',
    categories: ['disinfectants'],
    image: '/products/disinfectants/f919sc-biofilm-remover.webp',
    imageAlt: 'F919SC Biofilm Remover range — 1 L and 5 L',
    sizes: ['1 L', '5 L'],
    sdsPending: true,
    docs: [],
    overview: null,
  },

  // --- Treatment products (non-WI) ------------------------------------------
  {
    slug: 'antiseptic-solution-concentrate',
    name: 'F10® Antiseptic Solution Concentrate',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-solution-concentrate.webp',
    imageAlt: 'F10® Antiseptic Solution Concentrate — 200 ml and 1 L',
    sizes: ['200 ml', '1 L'],
    docs: [
      { type: 'fda-index', label: 'FDA Index FOI Summary — F10 brand Antiseptic Solution (MIF 900-007)', href: `${DOC}/f10-antiseptic-solution-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-solution-concentrate.pdf` },
    ],
    overview: null,
  },
  {
    slug: 'antiseptic-solution-ready-to-use',
    name: 'F10® Antiseptic Solution Ready to Use',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-solution-rtu.webp',
    imageAlt: 'F10® Antiseptic Solution Ready to Use — 1 L',
    sizes: ['1 L'],
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-solution-rtu.pdf` }],
    overview: null,
  },
  {
    slug: 'antiseptic-barrier-ointment',
    name: 'F10® Antiseptic Barrier Ointment',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-barrier-ointment.webp',
    imageAlt: 'F10® Antiseptic Barrier Ointment — 100 g and 500 g',
    sizes: ['100 g', '500 g'],
    docs: [
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-009)', href: `${DOC}/f10-barrier-ointment-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-barrier-ointment.pdf` },
    ],
    overview: null,
  },
];

// --- Categories -------------------------------------------------------------
export interface Category {
  key: CategoryKey;
  label: string;
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
  // Structural/organisational blurb only — NOT a claim.
  blurb: string;
}

// Order: FDA EUA · Disinfectants · Treatment (confirmed 2026-07-29).
export const categories: Category[] = [
  {
    key: 'eua',
    label: 'FDA EUA Products',
    slug: 'eua',
    href: '/products/eua',
    image: '/products/eua-wound-spray.webp',
    imageAlt: 'F10® FDA Emergency Use Authorized products',
    blurb: 'US Emergency Use Authorized for New World screwworm. FDA documents published in full.',
  },
  {
    key: 'disinfectants',
    label: 'Disinfectants',
    slug: 'disinfectants',
    href: '/products/disinfectants',
    image: '/products/cat-disinfectants.webp',
    imageAlt: 'F10® veterinary disinfectant range',
    blurb: 'Surface and environmental disinfection products for professional settings.',
  },
  {
    key: 'treatment',
    label: 'Treatment Products',
    slug: 'treatment',
    href: '/products/treatment',
    image: '/products/cat-treatment.webp',
    imageAlt: 'F10® antiseptic treatment range',
    blurb: 'Topical antiseptic range, including FDA Index (Minor Species) listed products.',
  },
];

export const productsInCategory = (key: CategoryKey): Product[] =>
  products.filter((p) => p.categories.includes(key));

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
