/**
 * Everything that changes without touching the design lives here.
 * The three values at the top are the ones to fill in before going live.
 */

/**
 * Three ways to reach the studio and no more. The line exists because Google
 * asks a business for one and then checks that the site says the same number;
 * a profile and a page that disagree are two businesses as far as it can tell.
 *
 * `phone` is E.164 for machines — the schema, the tel: href — and `phoneShown`
 * is the same number spaced the way a person reads it aloud.
 */
export const contact = {
  email: 'rivieramadestore@gmail.com',
  instagram: 'rivieramade.store',
  phone: '+529991725577',
  phoneShown: '+52 999 172 5577',
};

export const instagramUrl = `https://instagram.com/${contact.instagram}`;

/**
 * The same line, on WhatsApp. A couple planning a wedding from another country
 * answers a message on their phone and postpones an email until they are at a
 * desk, so the draft is offered on both and kept shorter here — nobody types
 * five lines into a chat window.
 */
export const whatsappNumber = contact.phone.replace('+', '');

export function whatsappFor(count?: number) {
  const bags = count ? `${count}` : '[number]';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello — we're marrying at [venue] on [date] and would like about ${bags} welcome bags. Could you send us a drawing?`,
  )}`;
}

export const whatsapp = whatsappFor();

export const site = {
  name: 'Riviera Made',
  /* The host the server actually serves. Vercel 308s the bare domain to www,
     so www is what canonicals, the sitemap and every schema @id must say —
     a canonical pointing at a URL that redirects is a contradiction, and the
     one host Google is told about should be the one it lands on. */
  domain: 'www.rivieramade.com',
  town: 'Puerto Morelos, Quintana Roo',
  title: 'Wedding Welcome Bags · Cancún & Riviera Maya | Riviera Made',
  description:
    'Handmade wedding welcome bags for Cancún, Puerto Morelos, Playa del Carmen and Tulum. From $23 a bag delivered to your resort, twelve bags up, and nothing through customs. See a drawing of yours the same day.',
};

/**
 * The one place a schema.org `@id` is built from, so a node minted on a venue
 * page points at the same studio as the node minted on the home page.
 */
export const origin = `https://${site.domain}`;

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
