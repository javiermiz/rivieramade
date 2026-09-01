/**
 * Everything that changes without touching the design lives here.
 * The three values at the top are the ones to fill in before going live.
 */

export const contact = {
  email: 'rivieramadestore@gmail.com',
  // TODO: international format, no + and no spaces, e.g. '5219981234567'
  whatsapp: '',
  instagram: '',
};

export const site = {
  name: 'Riviera Made',
  domain: 'rivieramade.com',
  town: 'Puerto Morelos, Quintana Roo',
  title: 'Wedding Welcome Bags · Cancún & Riviera Maya | Riviera Made',
  description:
    'Handmade wedding welcome bags for Cancún, Puerto Morelos, Playa del Carmen and Tulum. From $23 a bag delivered to your resort, no minimum and nothing through customs. See a drawing of yours the same day.',
};

/** Delivery area, in the order we drive it. */
export const deliversTo = [
  'Puerto Morelos',
  'Cancún',
  'Playa Mujeres',
  'Playa del Carmen',
  'Xcaret',
  'Akumal',
  'Tulum',
];

/**
 * USD per bag, delivered. Ascending, so the page reads the way a visitor
 * counts: from the smallest wedding up.
 */
export const pricing = [
  { from: 12, to: 24, label: '12–24 bags', price: 31 },
  { from: 25, to: 49, label: '25–49 bags', price: 26 },
  { from: 50, to: null, label: '50 or more', price: 23 },
];

/** The band a given count falls into. Shared by the page and the estimator. */
export function tierFor(bags: number) {
  return (
    [...pricing].reverse().find((t) => bags >= t.from) ?? pricing[0]
  );
}

/** Counts offered as one tap. Chosen to sit one in each band, plus a big one. */
export const quickCounts = [20, 30, 45, 60];

/**
 * The pre-written first email.
 *
 * This is the conversion mechanic of the whole page: nobody writes to a
 * stranger from a blank page, so we hand them the draft already written and
 * they only fill the blanks. The same text is shown on the page and loaded
 * into their mail client.
 */
export const draft = {
  subject: 'Welcome bags — our wedding',
  /** `count` is filled in when the visitor has already picked a number. */
  body(count?: number) {
    const bags = count ? `${count}` : '[number]';
    const askCapacity =
      count && count > 100
        ? '\n\nWe know that is a large order — could you confirm you have the week?'
        : '';
    return `Hello —

We're marrying at [venue] on [date] and would like about ${bags} welcome bags.
Our colours are [colours].${askCapacity}

Could you send us a drawing?

Thank you,
[names]`;
  },
};

export function mailtoFor(count?: number) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    draft.subject,
  )}&body=${encodeURIComponent(draft.body(count))}`;
}

export const mailto = mailtoFor();
