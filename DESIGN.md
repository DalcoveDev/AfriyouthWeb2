# AfriYouth Innovation Labs — Design System

## Direction: The Evidence Ledger

The site is composed like a working lab notebook crossed with an editorial journal, not
like a generic NGO template. It is deliberately quiet: white paper, ink type, one electric
blue, and photography that behaves like evidence plates rather than decoration. The single
recurring motif is the **Evidence-to-Impact continuum** — a measured line with ten stages,
drawn from the organisation's own method.

### Why this direction

- AfriYouth is a research, design and policy lab. Its distinctive idea is the *continuum*:
  evidence on one end, continental scale on the other. The design makes that idea visible
  instead of decorating every section with the same accent dash.
- Art and design organisations win attention with typography, pacing and a point of view,
  not with more cards. The brand's bold Poppins headings give editorial authority; Gilroy
  body copy keeps long-form reading light and legible.
- Minimal does not mean empty. It means every line, number and image has a job.

## Colour

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#FFFFFF` | Default surface |
| `--mist` | `#F3F3F6` | Secondary surface, form wells |
| `--ink` | `#0D0624` | Text and dark panels |
| `--ink-soft` | `#4D4866` | Secondary copy |
| `--ink-muted` | `#6D6880` | Metadata |
| `--blue` | `#0301FF` | The one functional accent: links, focus, active states |
| `--magenta` | `#C723DF` | Signal only: live node / section marker (never body text on light) |
| `--magenta-ink` | `#9E15B6` | Accessible magenta for small text |
| `--lavender` | `#C9C8FF` | Accent on dark surfaces |

Rules: no decorative gradients, no shadows, no tinted near-black. Dark surfaces use the brand
ink. The only sanctioned gradient is inside the official logo mark (steel pink → blue).
Magenta is a signal, not a paint pot.

## Typography

Brand guidelines govern type: **Poppins** for titles and **Gilroy** for body copy.

| Role | Family | Usage |
| --- | --- | --- |
| Display | **Poppins** (500–700) | H1, H2, hero statements, pull quotes |
| Interface | **Poppins** (400–600) | Navigation, labels, buttons, data |
| Body | **Gilroy** (300/800 shipped) | Paragraphs, leads, general content |

- Display line-height `1.02–1.06`, letter-spacing `-0.02em` to `-0.03em`.
- Body `1rem / 1.7`, max line length `62ch` for prose, `48ch` for leads.
- Metadata is sentence case at `0.78rem`, not tracked-out capitals.
- Numbers use tabular figures in the continuum.

## Layout

- 12-column grid, `1320px` maximum, fluid gutters.
- Section rhythm: `clamp(72px, 8vw, 128px)`.
- Preferred splits: `7/5` (opening), `5/7` (editorial), `8/4` (index + note).
- Alignment is left. Centring is reserved for one statement, not for whole pages.
- Corners are square. Controls are square. Only status dots are round.
- Hairlines (`1px`) replace cards, shadows and coloured panels wherever possible.

## Motion

- One idea per interaction: a link underline draws in, an image settles by 1.02× on hover.
- No section-by-section fade-up. No autoplay carousels.
- The home page uses gentle proximity scroll snapping: section openings settle beneath the sticky
  header, while sections taller than the viewport keep scrolling freely. It is never `mandatory`,
  so no content can be trapped, and it is disabled under `prefers-reduced-motion`.
- All motion collapses under `prefers-reduced-motion`.

## Components

- **Navbar** — sticky white bar, official four-line logo lockup, three mega menus, square CTA.
- **Page opening** — one consistent opener: Poppins H1, lead, full-width documentary plate.
  Alt text carries the description; no visible captions. No alternating hero styles.
- **Continuum** — 10 ticks between "Community evidence" and "Continental scale".
- **Arrow link** — text plus a diagonal arrow; the underline is the hover state.
- **Publication cover** — typographic monograph: colour field, series title, category.
- **Buttons** — one solid ink button, one outline button, one text/arrow link. No pills.

## Writing

- Name things by what a visitor controls: "Read our approach", "Partner with us",
  "Commission a study".
- Errors and empty states tell the visitor what happened and what to do next.
- No placeholder copy in production, no invented claims.
