/**
 * One page per venue — the couple searches for the hotel by name long before
 * they search for a supplier, and this is the only page that answers them.
 *
 * `draft: true` keeps a venue off the sitemap and out of the index until its
 * facts are real. Fill a venue in, flip the flag, and it goes live.
 *
 * Every venue below is real and every fact below is blank. That is deliberate:
 * a drive time invented from a map is the kind of thing a planner checks once
 * and never trusts again, and the page prints `[X] min` rather than a guess.
 * The list is ordered the way the coast is driven, north to south, so filling
 * it in order matches the day a delivery actually takes.
 *
 * Naming a resort here claims nothing about it. The page says who we are and
 * how far away we are; it never suggests the hotel endorses or employs us.
 *
 * To fill one in, four things, none of which can be looked up from a desk:
 *   minutes      — drive it once, door to door, and write down the real number
 *   dropOff      — who takes the bags: front desk, bell desk, a named office
 *   placementFee — what the resort charges per bag to put them in the rooms
 *   note         — the access rule you only learn by being turned away once
 */
export interface Venue {
  slug: string;
  /** The venue as the couple writes it. */
  name: string;
  town: string;
  /** Minutes from the studio, by road. */
  minutes: number | null;
  /** Where the bags are handed over. */
  dropOff: string | null;
  /** What the resort charges per bag to place them in the rooms, if anything. */
  placementFee: string | null;
  /** Bags in a typical wedding here. */
  typicalBags: number | null;
  /** Anything about access we have learned the hard way. */
  note: string | null;
  draft: boolean;
}

/** Every venue starts as a name and a town and nothing else. */
const blank = {
  minutes: null,
  dropOff: null,
  placementFee: null,
  typicalBags: null,
  note: null,
  draft: true,
} satisfies Omit<Venue, 'slug' | 'name' | 'town'>;

export const venues: Venue[] = [
  // ── Playa Mujeres ─────────────────────────────────────────────
  { slug: 'excellence-playa-mujeres', name: 'Excellence Playa Mujeres', town: 'Playa Mujeres', ...blank },
  { slug: 'secrets-playa-mujeres', name: 'Secrets Playa Mujeres', town: 'Playa Mujeres', ...blank },
  { slug: 'dreams-playa-mujeres', name: 'Dreams Playa Mujeres', town: 'Playa Mujeres', ...blank },
  { slug: 'finest-playa-mujeres', name: 'Finest Playa Mujeres', town: 'Playa Mujeres', ...blank },
  { slug: 'atelier-playa-mujeres', name: 'Atelier Playa Mujeres', town: 'Playa Mujeres', ...blank },

  // ── Cancún ────────────────────────────────────────────────────
  { slug: 'nizuc', name: 'Nizuc Resort & Spa', town: 'Cancún', ...blank },
  { slug: 'le-blanc-cancun', name: 'Le Blanc Spa Resort Cancún', town: 'Cancún', ...blank },
  { slug: 'live-aqua-cancun', name: 'Live Aqua Beach Resort Cancún', town: 'Cancún', ...blank },
  { slug: 'hyatt-ziva-cancun', name: 'Hyatt Ziva Cancún', town: 'Cancún', ...blank },
  { slug: 'jw-marriott-cancun', name: 'JW Marriott Cancún Resort & Spa', town: 'Cancún', ...blank },

  // ── Puerto Morelos — the studio's own town ────────────────────
  { slug: 'acamaya', name: 'Acamaya', town: 'Puerto Morelos', ...blank },
  { slug: 'dreams-jade', name: 'Dreams Jade Resort & Spa', town: 'Puerto Morelos', ...blank },
  { slug: 'zoetry-paraiso-de-la-bonita', name: 'Zoëtry Paraiso de la Bonita', town: 'Puerto Morelos', ...blank },
  { slug: 'ocean-coral-turquesa', name: 'Ocean Coral & Turquesa', town: 'Puerto Morelos', ...blank },

  // ── Playa del Carmen, Mayakoba included ───────────────────────
  { slug: 'rosewood-mayakoba', name: 'Rosewood Mayakoba', town: 'Playa del Carmen', ...blank },
  { slug: 'banyan-tree-mayakoba', name: 'Banyan Tree Mayakoba', town: 'Playa del Carmen', ...blank },
  { slug: 'fairmont-mayakoba', name: 'Fairmont Mayakoba', town: 'Playa del Carmen', ...blank },
  { slug: 'andaz-mayakoba', name: 'Andaz Mayakoba', town: 'Playa del Carmen', ...blank },
  { slug: 'grand-hyatt-playa-del-carmen', name: 'Grand Hyatt Playa del Carmen', town: 'Playa del Carmen', ...blank },

  // ── Xcaret and Xpu-Há ─────────────────────────────────────────
  { slug: 'hotel-xcaret-mexico', name: 'Hotel Xcaret México', town: 'Xcaret', ...blank },
  { slug: 'hotel-xcaret-arte', name: 'Hotel Xcaret Arte', town: 'Xcaret', ...blank },
  { slug: 'hotel-esencia', name: 'Hotel Esencia', town: 'Xpu-Há', ...blank },

  // ── Akumal ────────────────────────────────────────────────────
  { slug: 'secrets-akumal', name: 'Secrets Akumal Riviera Maya', town: 'Akumal', ...blank },
  { slug: 'hotel-akumal-caribe', name: 'Hotel Akumal Caribe', town: 'Akumal', ...blank },

  // ── Tulum ─────────────────────────────────────────────────────
  { slug: 'dreams-tulum', name: 'Dreams Tulum Resort & Spa', town: 'Tulum', ...blank },
  { slug: 'bahia-principe-tulum', name: 'Bahia Principe Grand Tulum', town: 'Tulum', ...blank },
  { slug: 'nomade-tulum', name: 'Nômade Tulum', town: 'Tulum', ...blank },
  { slug: 'casa-malca', name: 'Casa Malca', town: 'Tulum', ...blank },
  { slug: 'papaya-playa-project', name: 'Papaya Playa Project', town: 'Tulum', ...blank },
];

export const getVenue = (slug: string) => venues.find((v) => v.slug === slug);
