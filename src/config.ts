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
    'Handmade wedding welcome bags for weddings in Cancún, Puerto Morelos, Playa del Carmen and Tulum. No minimum, no customs, delivered to your resort three days before you marry.',
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

/** USD per bag, delivered. Highest quantity first is easier to read in code. */
export const pricing = [
  { from: 50, to: null, label: 'Fifty and above', price: 23 },
  { from: 25, to: 49, label: 'Twenty-five to forty-nine', price: 26 },
  { from: 12, to: 24, label: 'Twelve to twenty-four', price: 31 },
];

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
  body: `Hello —

We're marrying at [venue] on [date] and would like about [number] welcome bags.
Our colours are [colours].

Could you send us a drawing?

Thank you,
[names]`,
};

export const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  draft.subject,
)}&body=${encodeURIComponent(draft.body)}`;
