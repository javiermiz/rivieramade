/**
 * One page per venue — the couple searches for the hotel by name long before
 * they search for a supplier, and this is the only page that answers them.
 *
 * `draft: true` keeps a venue off the sitemap and out of the index until its
 * facts are real. Fill a venue in, flip the flag, and it goes live.
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

export const venues: Venue[] = [
  {
    slug: 'acamaya',
    name: 'Acamaya',
    town: 'Puerto Morelos',
    minutes: null,
    dropOff: null,
    placementFee: null,
    typicalBags: null,
    note: null,
    draft: true,
  },
];

/** Next, in the order they are worth writing: Dreams, Secrets, Xcaret, Playa Mujeres. */
export const getVenue = (slug: string) => venues.find((v) => v.slug === slug);
