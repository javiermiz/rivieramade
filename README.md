# Riviera Made

Wedding welcome bags, made by hand in Puerto Morelos and delivered along the
Riviera Maya. This is the marketing site: one page, one product, one call to
action.

Astro, static output, no framework, no build-time data. Deploys as plain files.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Fill these in before going live

Everything that changes without touching the design lives in
[`src/config.ts`](src/config.ts):

- **`contact.email`** — currently `hola@rivieramade.com`, which is a placeholder.
  Every button on the page points at it.
- `contact.whatsapp` / `contact.instagram` — empty for now, unused until there is
  a second contact route.
- `pricing` — $31 / $26 / $23 per bag. Change here, the page follows.
- `deliversTo` — the delivery area, also printed into the page copy.

## The photographs

Every image in `src/assets/` is a **placeholder**. They are cropped at their
source's own size and never upscaled; `Shot` takes a `widths` prop for exactly
that reason.

| File | Where |
| --- | --- |
| `tote-beach.jpg` | the hero, and the hero of every town and venue page |
| `tote-linen.jpg` | beside the copy about the bag |
| `tote-inks.jpg`, `tote-inside.jpg`, `tote-print.jpg` | the three plates |
| `studio.jpg` | beside the pull quote — **see the warning below** |

The bags in them read *Olivia & Jackson, Cancún* and other names that are not
anyone's. They are mockups. Swap them for photographs of a real order before
the site is promoted anywhere — same filenames, nothing else changes.

### `studio.jpg` is not like the others, and must not ship

It is a generated image of two women, standing in for the two sisters who
actually run this. It sits under a sentence that says *"Two sisters, one room
in Puerto Morelos"*, so a visitor reads it as a photograph of them.

A generated product shot is a render, and nobody is misled by one. A generated
founder is a different thing: this site asks a couple in another country to
send a deposit to two people they have never met, and the faces are the reason
they believe there are two people. Invented faces put the whole page's
credibility on something that would collapse the moment anyone noticed.

It is here to build the layout against, and it is the one placeholder that
**cannot go live**. Replace it with a real photograph — the two of them at the
work table, faces visible, taken on a phone by a window — before the site is
shown to anybody. If neither wants to be photographed, hands at work plus their
first names is the fallback, and it is still better than a stranger's face.

**The shot still missing:** one bag with everything that comes in it visible —
the card, the labels and the tag sitting in the open tote. The page says so in
a sentence and no photograph backs it.

One rule that outlives the placeholders: the tote images are product shots and
belong where the bag is described. Nothing may present them as a wedding we
delivered — that section stays offline until there is a real delivery to
photograph.

## Pages

| Path | What it is |
| --- | --- |
| `/` | The one that sells. One product, one price, one email. |
| `/planners` | The trade page. Terms in full, and a free sample set for the studio. Linked quietly from the footer, not from the nav — a couple should never land on it. |
| `/venues/<slug>` | One page per venue, generated from `src/data/venues.ts`. |

A venue starts as `draft: true`, which keeps it `noindex` and out of the sitemap
and prints a banner on the page. Fill in the minutes, the drop-off, the placement
fee and the typical size, flip the flag, and it goes live. Acamaya is first;
Dreams, Secrets, Xcaret and Playa Mujeres are the order after that.

The venue page writes the venue's name into the email draft, so a couple asking
about Acamaya sends a message that already says Acamaya.

## Search

- Title, description, canonical, Open Graph and Twitter cards on every page,
  from `src/config.ts` and the layout.
- `public/og.jpg` at 1200×631 is the share image.
- One JSON-LD graph: `LocalBusiness` with the seven towns we deliver to and the
  price range, plus a `Product` with an `AggregateOffer` of $23–$31. Those are
  exactly the two questions every competitor leaves unanswered, which is why
  they are the two we hand over in machine-readable form.
- `@astrojs/sitemap` generates `sitemap-index.xml`; draft venues are filtered
  out in `astro.config.mjs`.

## Why the page is built this way

- **One product.** The welcome bag. No catalogue, no tiers with names.
- **The price is published.** Every competitor hides it behind an enquiry form;
  showing it filters people in one screen instead of one email thread.
- **The call to action is an email, and the email is already written.** The
  letter block near the bottom shows a draft with the blanks marked, and the
  button loads that same draft into the visitor's mail client
  (`mailto` with `subject` and `body`, built in `src/config.ts`). Nobody writes
  to a stranger from an empty page — this is the conversion mechanic, not a
  decoration.
- **No forms and no server.** Nothing to host, nothing to maintain, and a reply
  lands in a normal inbox.

## Design source

The canvas the page was designed on lives in [`design/`](design) as `.dc.html`
artboards plus `canvas.json`. The published canvases themselves are not
committed — they are 2 MB of editor payload each and are regenerated from those
sources.
