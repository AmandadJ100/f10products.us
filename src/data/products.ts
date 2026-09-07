// Products data — the single source for the Products hub + 3 category pages.
// FACTS ONLY. No authored efficacy, spectrum, dilution, or registration claims
// (REGULATORY_GUARDRAILS.md). Regulated overview copy renders as a visible
// placeholder until Amanda supplies it. Document links point at published,
// unaltered source documents; SDS is a factual safety document.

export type CategoryKey = 'eua' | 'disinfectants' | 'degreasers' | 'treatment';

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
  // EUA-pathway packshot (carries the EUA label). Rendered on /products/eua so the
  // EUA cards show the EUA-labelled pack, not the FDA-Index (treatment) pack.
  imageEua?: string;
  imageEuaAlt?: string;
  sizes: string[];
  // Individual pack-size shots for the product-page gallery (one thumbnail per
  // size, swaps the main image). Omit for single-size products.
  packs?: { size: string; image: string }[];
  sdsPending?: boolean; // SDS not yet supplied — render "SDS to follow"
  docs: ProductDoc[];
  overview: null; // structure-first: renders the placeholder; no authored claims
  // --- US label facts, supplied by Amanda (Product List + details.xlsx / EPA
  // labels), used verbatim. Only populated for the EPA disinfectants + the
  // (unregistered) degreaser. FDA Index/EUA products stay doc-only per
  // REGULATORY_GUARDRAILS.md — no authored description/claims. -----------------
  description?: string;          // "Description (as per label)", verbatim
  activeIngredients?: string[];  // verbatim from label
  epaReg?: string;               // EPA registration number, when confirmed
  epaRegPending?: boolean;       // number supplied but conflicting — show placeholder
  regNotRequired?: boolean;      // e.g. F919SC — not required to be registered
  directions?: string;           // US-label dilution / use directions, verbatim
  whereToUse?: string;           // "Where to use" (label), verbatim — EPA products + degreaser
  // Extra internal links shown in the product's Documents block (e.g. to the
  // Efficacy & Safety toxicity reports). Internal — same tab, not a download.
  links?: { label: string; href: string }[];
}

const SDS = '/documents/sds';
const DOC = '/documents';

export const products: Product[] = [
  // --- FDA EUA products (also FDA-Index-listed treatment products) -----------
  {
    slug: 'antiseptic-wound-spray-wi',
    name: 'F10® Antiseptic Wound Spray with Insecticide',
    categories: ['eua'],
    image: '/products/treatment/antiseptic-wound-spray-wi.webp',
    imageAlt: 'F10® Antiseptic Wound Spray with Insecticide range',
    imageEua: '/products/eua-wound-spray.webp',
    imageEuaAlt: 'F10® Antiseptic Wound Spray with Insecticide — FDA EUA No. 006672 pack',
    // Only the 16.9 fl oz is in production for now; the smaller size is authorised
    // but not yet produced (Amanda 2026-07-30).
    sizes: ['16.9 fl oz'],
    description: 'A broad spectrum topical antiseptic spot treatment with insecticide.',
    activeIngredients: [
      'Benzalkonium chloride — 0.405 g/100 ml',
      'Polyhexanide — 0.03 g/100 ml',
      'Cypermethrin — 0.25 g/100 g',
    ],
    docs: [
      { type: 'eua-fact', label: 'FDA EUA Fact Sheet (No. 006672)', href: `${DOC}/f10-wound-spray-eua-fact-sheet.pdf` },
      { type: 'eua-foi', label: 'EUA FOI Summary', href: `${DOC}/f10-wound-spray-eua-foi-sheet.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-wound-spray-wi.pdf` },
    ],
    overview: null,
  },
  {
    slug: 'antiseptic-barrier-ointment-wi',
    name: 'F10® Antiseptic Barrier Ointment with Insecticide',
    categories: ['eua'],
    image: '/products/treatment/antiseptic-barrier-ointment-wi.webp',
    imageAlt: 'F10® Antiseptic Barrier Ointment with Insecticide range',
    imageEua: '/products/eua-barrier-ointment.webp',
    imageEuaAlt: 'F10® Antiseptic Barrier Ointment with Insecticide — FDA EUA No. 006677 pack',
    // Only the 17.6 oz is in production for now; the smaller size is authorised
    // but not yet produced (Amanda 2026-07-30).
    sizes: ['17.6 oz'],
    description: 'A broad spectrum topical antiseptic ointment with insecticide.',
    activeIngredients: [
      'Benzalkonium chloride — 0.405 g/100 ml',
      'Polyhexanide — 0.03 g/100 ml',
      'Cypermethrin — 0.25 g/100 g',
    ],
    docs: [
      { type: 'eua-fact', label: 'FDA EUA Fact Sheet (No. 006677)', href: `${DOC}/f10-barrier-ointment-eua-fact-sheet.pdf` },
      { type: 'eua-foi', label: 'EUA FOI Summary', href: `${DOC}/f10-barrier-ointment-eua-foi-sheet.pdf` },
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
    imageAlt: 'F10SC Veterinary Disinfectant range',
    sizes: ['3.4 oz', '6.8 oz', '1.06 quart', '1.3 gal'],
    packs: [
      { size: '3.4 oz', image: '/products/disinfectants/sc-veterinary-disinfectant-100ml.webp' },
      { size: '6.8 oz', image: '/products/disinfectants/sc-veterinary-disinfectant-200ml.webp' },
      { size: '1.06 quart', image: '/products/disinfectants/sc-veterinary-disinfectant-1l.webp' },
      { size: '1.3 gal', image: '/products/disinfectants/sc-veterinary-disinfectant-5l.webp' },
    ],
    epaReg: '79755-6',
    description: 'Broad-spectrum disinfectant for cleaning and disinfection of all hard, non-porous surfaces, equipment, utensils and instruments in veterinary practices, kennels, stables, catteries, aviaries, etc.',
    activeIngredients: [
      'Alkyl (50% C14, 40% C12, 10% C16) dimethyl benzyl ammonium chloride — 5.4%',
      'Poly(hexamethylene biguanide) hydrochloride — 0.4%',
    ],
    directions: '1:250 (0.5 oz per gallon).',
    whereToUse: 'The product can be used on all surfaces and will not cause fumes, irritation, staining or corrosion. Ideal for over-spraying of work surfaces, examination tables, food & water containers, utensils, equipment, thermometers, litter trays, cages, stables, pens, enclosures, incubators and high touch areas. No rinsing required.',
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10sc-veterinary-disinfectant.pdf` }],
    links: [{ label: 'Toxicity test reports (F10SC)', href: '/resources/efficacy-safety#toxicity-f10sc' }],
    overview: null,
  },
  {
    slug: 'scxd-veterinary-disinfectant-cleanser',
    name: 'F10SCXD Veterinary Cleaner - Sanitizer',
    categories: ['disinfectants'],
    image: '/products/disinfectants/scxd-veterinary-cleanser.webp',
    imageAlt: 'F10SCXD Veterinary Cleaner - Sanitizer range',
    sizes: ['3.4 oz', '6.8 oz', '1.06 quart', '1.3 gal'],
    packs: [
      { size: '3.4 oz', image: '/products/disinfectants/scxd-veterinary-cleanser-100ml.webp' },
      { size: '6.8 oz', image: '/products/disinfectants/scxd-veterinary-cleanser-200ml.webp' },
      { size: '1.06 quart', image: '/products/disinfectants/scxd-veterinary-cleanser-1l.webp' },
      { size: '1.3 gal', image: '/products/disinfectants/scxd-veterinary-cleanser-5l.webp' },
    ],
    epaReg: '79755-8',
    description: 'For cleaning and sanitizing of all hard, non-porous surfaces, equipment, utensils and instruments in veterinary practices, kennels, stables, catteries, aviaries in the presence of 5% organic soil load.',
    activeIngredients: [
      'Alkyl (50% C14, 40% C12, 10% C16) dimethyl benzyl ammonium chloride — 5.4%',
      'Poly(hexamethylene biguanide) hydrochloride — 0.4%',
    ],
    directions: '1:200 (0.625 oz per gallon).',
    whereToUse: 'A safe & effective disinfectant with added detergent for cleaning and high level disinfection of lightly soiled areas in veterinary facilities. Capable of lowering the microbial load whilst cleaning and the ideal product to use as part of an effective two-stage cleaning and disinfection programme. The product is low-foaming and can be used on all surfaces. Ideal for cleaning and disinfection of floor surfaces, animal housing, basins, food & water containers, post-op instruments, litter trays, waste bins, milking equipment, cleaning equipment. Soaking and disinfection of bedding.',
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10scxd-veterinary-cleanser.pdf` }],
    overview: null,
  },
  {
    slug: 'ready-to-use',
    name: 'F10 Veterinary Disinfectant (Ready to Use)',
    categories: ['disinfectants'],
    image: '/products/disinfectants/ready-to-use.webp',
    imageAlt: 'F10 Veterinary Disinfectant Ready to Use',
    sizes: ['1.06 quart'],
    epaReg: '79755-5', // confirmed by Amanda 2026-07-30 (spreadsheet) over the filename's 79755-4
    description: 'For cleaning and disinfection of all hard, non-porous surfaces e.g. floors, walls, bathroom fixtures, equipment, utensils and instruments in veterinary practices, kennels, stables, catteries, aviaries and other animal housing facilities, made of stainless steel, vinyl, hard plastic, glass or chrome.',
    activeIngredients: [
      'Alkyl (50% C14, 40% C12, 10% C16) dimethyl benzyl ammonium chloride — 0.0216%',
      'Poly(hexamethylene biguanide) hydrochloride — 0.0016%',
    ],
    directions: 'Ready to use.',
    whereToUse: 'Disinfection of pre-cleaned surfaces and air spaces.',
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-f10-ready-to-use.pdf` }],
    overview: null,
  },
  {
    slug: 'odour-eliminator',
    name: 'F10 Odour Eliminator Disinfectant',
    categories: ['disinfectants'],
    image: '/products/disinfectants/odour-eliminator.webp',
    imageAlt: 'F10 Odour Eliminator Disinfectant',
    sizes: ['0.53 quart', '1.06 quart'],
    epaReg: '79755-5-97189', // confirmed by Amanda 2026-07-30 (spreadsheet)
    description: 'For elimination of odours and disinfection of hard, non-porous surfaces and air spaces, in veterinary practices, kennels, stables, catteries, aviaries and other animal housing facilities, made of stainless steel, vinyl, hard plastic, glass or chrome.',
    activeIngredients: [
      'Alkyl (50% C14, 40% C12, 10% C16) dimethyl benzyl ammonium chloride — 0.0216%',
      'Poly(hexamethylene biguanide) hydrochloride — 0.0016%',
    ],
    directions: 'Ready to use.',
    whereToUse: 'A ready to use pine fragranced solution for odour control as well as the high level disinfection of hard surfaces and air spaces. Can safely be used on furniture and upholstery and can be used to overspray cat litter.',
    sdsPending: true,
    docs: [],
    overview: null,
  },
  // --- Degreasers ------------------------------------------------------------
  {
    slug: 'f919sc-biofilm-remover',
    name: 'F919SC Biofilm Remover',
    categories: ['degreasers'],
    image: '/products/disinfectants/f919sc-biofilm-remover.webp',
    imageAlt: 'F919SC Biofilm Remover range',
    sizes: ['1.06 quart', '1.3 gal'],
    packs: [
      { size: '1.06 quart', image: '/products/disinfectants/f919sc-biofilm-remover-1l.webp' },
      { size: '1.3 gal', image: '/products/disinfectants/f919sc-biofilm-remover-5l.webp' },
    ],
    regNotRequired: true,
    description: 'An alkaline blend of surfactants plus sequesterants/detergents buffered for optimal activity — a biofilm remover and heavy-duty cleanser with an emulsifying action for removing heavy soiling, protein, fats and natural oil deposits and biofilm from hard surfaces.',
    directions: 'For lightly soiled surfaces: 40 ml in 10 litres of clean water. For biofilms, oils and light fat deposits: 100 ml in 10 litres of preferably warm to hot water. For resistant biofilms and heavy fat deposits: 200 ml in 10 litres of hot water.',
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
    imageAlt: 'F10® Antiseptic Solution Concentrate',
    sizes: ['6.7 fl oz', '33.81 fl oz'],
    packs: [
      { size: '6.7 fl oz', image: '/products/treatment/antiseptic-solution-concentrate-200ml.webp' },
      { size: '33.81 fl oz', image: '/products/treatment/antiseptic-solution-concentrate-1l.webp' },
    ],
    description: 'A broad spectrum topical antiseptic solution.',
    activeIngredients: ['Benzalkonium chloride and polyhexanide (topical solution)'],
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
    imageAlt: 'F10® Antiseptic Solution Ready to Use',
    sizes: ['33.81 fl oz'],
    description: 'A broad spectrum topical antiseptic solution.',
    activeIngredients: ['Benzalkonium chloride and polyhexanide (topical solution)'],
    docs: [{ type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-solution-rtu.pdf` }],
    overview: null,
  },
  {
    slug: 'antiseptic-barrier-ointment',
    name: 'F10® Antiseptic Barrier Ointment',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-barrier-ointment.webp',
    imageAlt: 'F10® Antiseptic Barrier Ointment',
    sizes: ['3.05 oz', '17.6 oz'],
    packs: [
      { size: '3.05 oz', image: '/products/treatment/antiseptic-barrier-ointment-100g.webp' },
      { size: '17.6 oz', image: '/products/treatment/antiseptic-barrier-ointment-500g.webp' },
    ],
    description: 'A broad spectrum topical antiseptic ointment.',
    activeIngredients: [
      'Benzalkonium chloride — 0.405 g/100 ml',
      'Polyhexanide — 0.03 g/100 ml',
    ],
    docs: [
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-009)', href: `${DOC}/f10-barrier-ointment-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-barrier-ointment.pdf` },
    ],
    overview: null,
  },

  // --- FDA Index (MUMS) insecticide variants -------------------------------
  // Separate products from the FDA EUA versions above: SAME product name, but a
  // DIFFERENT label and a DIFFERENT (narrower, minor-species) authorization
  // pathway. Kept totally separate per REGULATORY_GUARDRAILS.md — Index FOI
  // Summary only; never carry the EUA docs/species here.
  {
    slug: 'antiseptic-wound-spray-wi-index',
    name: 'F10® Antiseptic Wound Spray with Insecticide',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-wound-spray-wi.webp',
    imageAlt: 'F10® Antiseptic Wound Spray with Insecticide range',
    sizes: ['3.05 fl oz', '16.9 fl oz'],
    packs: [
      { size: '3.05 fl oz', image: '/products/treatment/antiseptic-wound-spray-wi-100ml.webp' },
      { size: '16.9 fl oz', image: '/products/treatment/antiseptic-wound-spray-wi-500ml.webp' },
    ],
    description: 'A broad spectrum topical antiseptic spot treatment with insecticide.',
    activeIngredients: [
      'Benzalkonium chloride — 0.405 g/100 ml',
      'Polyhexanide — 0.03 g/100 ml',
      'Cypermethrin — 0.25 g/100 g',
    ],
    docs: [
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-010)', href: `${DOC}/f10-wound-spray-wi-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-wound-spray-wi.pdf` },
    ],
    overview: null,
  },
  {
    slug: 'antiseptic-barrier-ointment-wi-index',
    name: 'F10® Antiseptic Barrier Ointment with Insecticide',
    categories: ['treatment'],
    image: '/products/treatment/antiseptic-barrier-ointment-wi.webp',
    imageAlt: 'F10® Antiseptic Barrier Ointment with Insecticide range',
    sizes: ['3.05 oz', '17.6 oz'],
    packs: [
      { size: '3.05 oz', image: '/products/treatment/antiseptic-barrier-ointment-wi-100g.webp' },
      { size: '17.6 oz', image: '/products/treatment/antiseptic-barrier-ointment-wi-500g.webp' },
    ],
    description: 'A broad spectrum topical antiseptic ointment with insecticide.',
    activeIngredients: [
      'Benzalkonium chloride — 0.405 g/100 ml',
      'Polyhexanide — 0.03 g/100 ml',
      'Cypermethrin — 0.25 g/100 g',
    ],
    docs: [
      { type: 'fda-index', label: 'FDA Index FOI Summary (MIF 900-011)', href: `${DOC}/f10-barrier-ointment-wi-fda-index-foi.pdf` },
      { type: 'sds', label: 'Safety Data Sheet (SDS)', href: `${SDS}/sds-antiseptic-barrier-ointment-wi.pdf` },
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

// Order: FDA EUA · Disinfectants · Treatment Products · Degreasers.
export const categories: Category[] = [
  {
    key: 'eua',
    label: 'FDA NWS EUA Products',
    slug: 'eua',
    href: '/products/eua',
    image: '/products/cat-eua.webp',
    imageAlt: 'F10® FDA NWS EUA product group — Wound Spray and Barrier Ointment with Insecticide',
    blurb: 'US Emergency Use Authorized for New World Screwworm. FDA documents published in full.',
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
    imageAlt: 'F10® antiseptic skin treatment range',
    blurb: 'Topical antiseptic range, including FDA Index (Minor Species) listed products.',
  },
  {
    key: 'degreasers',
    label: 'Degreasers',
    slug: 'degreasers',
    href: '/products/degreasers',
    image: '/products/disinfectants/f919sc-biofilm-remover.webp',
    imageAlt: 'F919SC Biofilm Remover range',
    blurb: 'Biofilm removal products for professional cleaning routines.',
  },
];

export const productsInCategory = (key: CategoryKey): Product[] =>
  products.filter((p) => p.categories.includes(key));

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getCategory = (key: CategoryKey): Category | undefined =>
  categories.find((c) => c.key === key);

// The category used for a product's breadcrumb / eyebrow = its first listed category.
export const primaryCategory = (p: Product): Category => getCategory(p.categories[0])!;

// Canonical individual-product page URL.
export const productHref = (p: Product): string => `/product/${p.slug}`;

// Other products sharing a category (for the "Related products" band).
export const relatedProducts = (p: Product, limit = 3): Product[] =>
  products
    .filter((q) => q.slug !== p.slug && q.categories.some((c) => p.categories.includes(c)))
    .slice(0, limit);
