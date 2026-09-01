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

The two images on the page are **placeholders**, in `src/assets/`:

- `tote-beach.jpg` — the hero.
- `tote-print.jpg` — the close-up of the printing.

They are mockups, not our work: the bag reads *Olivia & Jackson, Cancún*. Swap
both for real photographs of a real order before the site is promoted anywhere —
same filenames and nothing else changes. Astro handles the sizes and formats.

A third placeholder sits in `design/placeholders/tote-evening.jpg` and is
deliberately **not** on the page: the bag in it says Charleston, South Carolina,
which contradicts the one thing this site promises.

One rule that outlives the placeholders: these are product shots and belong
where the bag is described. Nothing may present them as a wedding we delivered —
that section stays offline until there is a real delivery to photograph.

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
