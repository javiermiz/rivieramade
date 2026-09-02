/**
 * A page per town, which is the half of the local-search job that does not
 * need anybody's permission.
 *
 * A venue page needs the hotel: who takes the bags, what they charge to place
 * them, the access rule. A town page needs only the road, and we drive the
 * road already. So these publish now and the venue pages wait.
 *
 * `minutes` is a map estimate, not a measured drive, and the pages say "about"
 * because of it. Drive one, and set `measured: true` — the page drops the
 * hedge and states the number flat, which is worth more to a planner than any
 * amount of copy.
 */
import { venues, type Venue } from './venues';

export interface Town {
  slug: string;
  /** The town as a couple writes it. */
  name: string;
  /** Minutes from the studio in Puerto Morelos, one way, by road. */
  minutes: number;
  /** True once somebody has actually driven it and looked at the clock. */
  measured: boolean;
  /** Roughly how far, in km, for people who think in distance. */
  km: number;
  /** Signed km along the coast from the studio: negative is north of us. */
  coastKm: number;
  /** One true sentence about getting there with a car full of bags. */
  road: string;
  /** Local knowledge, once we have any. Shown only when it exists. */
  note: string | null;
}

export const towns: Town[] = [
  {
    slug: 'puerto-morelos',
    name: 'Puerto Morelos',
    minutes: 10,
    measured: false,
    km: 5,
    coastKm: 0,
    road: 'Our own town. We walk or drive a few minutes, which means a change of plan on the morning of a delivery is a small thing rather than a crisis.',
    note: null,
  },
  {
    slug: 'cancun',
    name: 'Cancún',
    minutes: 40,
    measured: false,
    km: 36,
    coastKm: -36,
    road: 'North on Highway 307, then into the hotel zone. The road is quick; the last stretch inside the zone is what varies, so we leave early rather than arrive tight.',
    note: null,
  },
  {
    slug: 'playa-mujeres',
    name: 'Playa Mujeres',
    minutes: 65,
    measured: false,
    km: 60,
    coastKm: -60,
    road: 'Past Cancún and out the northern side, which is the longest of our drives. Worth knowing when you are deciding how early the bags should be there.',
    note: null,
  },
  {
    slug: 'playa-del-carmen',
    name: 'Playa del Carmen',
    minutes: 35,
    measured: false,
    km: 32,
    coastKm: 32,
    road: 'South on 307, a straight run. Mayakoba sits just before the town, which makes it one of the easier deliveries on this coast.',
    note: null,
  },
  {
    slug: 'xcaret',
    name: 'Xcaret & Xpu-Há',
    minutes: 50,
    measured: false,
    km: 48,
    coastKm: 48,
    road: 'South past Playa del Carmen. The resorts here sit off the highway down their own access roads, so arrival is slower than the map suggests.',
    note: null,
  },
  {
    slug: 'akumal',
    name: 'Akumal',
    minutes: 65,
    measured: false,
    km: 65,
    coastKm: 65,
    road: 'An hour or so south on 307. Small bay, small properties, weddings to match.',
    note: null,
  },
  {
    slug: 'tulum',
    name: 'Tulum',
    minutes: 85,
    measured: false,
    km: 85,
    coastKm: 85,
    road: 'The far end of what we drive, and the one where the last few kilometres matter most: the beach road is single-file and slow, so bags for a Tulum wedding leave here early in the day.',
    note: null,
  },
];

export const getTown = (slug: string) => towns.find((t) => t.slug === slug);

/** The venues we have listed in a town, whatever state their own page is in. */
export const venuesInTown = (town: Town): Venue[] =>
  venues.filter((v) => v.town === town.name || town.name.includes(v.town));
