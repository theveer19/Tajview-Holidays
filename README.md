# Tajview Holidays — website source

A complete rebuild of tajviewholidays.com as a plain static site. No WordPress, no
plugins, no database. Real photographs, served as WebP in two sizes, with a set
of vector illustrations kept behind them as a fallback.

```
tajview-holidays/
├── index.html          Home
├── tours.html          All tours, with live filters
├── tour.html           Tour detail (reads ?tour=<slug>) — serves all 19 tours
├── about.html          About
├── contact.html        Contact and enquiry form
├── taj-mahal-tour-packages.html      ┐
├── same-day-tour-packages.html      │
├── golden-triangle-tour-packages.html  collection landing pages,
├── new-delhi-tour-packages.html     │  same URLs as the old site
├── jaipur-tour-packages.html        │
├── rajasthan-tour-packages.html     ┘
├── agra-tours.html                  ┐
├── delhi-tours.html                 │
├── jaipur-tours.html                │  city landing pages
├── jodhpur-tours.html               │
├── udaipur-tours.html               │
├── jaisalmer-tours.html             ┘
├── privacy.html        Privacy policy
├── 404.html            Not-found page with routes back in
├── sitemap.xml         24 URLs
├── robots.txt
├── assets/
│   ├── css/style.css   Whole design system
│   ├── js/
│   │   ├── data.js     ← all content lives here (tours, reviews, contact info)
│   │   └── main.js     Rendering, filters, nav, forms
│   └── img/
│       ├── photos/      22 photographs, WebP at 800w and 1600w
│       └── *.svg        12 vector scenes used as fallbacks
└── README.md
```

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
cd tajview-holidays
python3 -m http.server 8000     # then visit http://localhost:8000
```

## Deploy

**Hostinger (same host as now)** — in hPanel open File Manager, go to
`public_html`, and upload the contents of this folder (not the folder itself).
`index.html` must sit directly inside `public_html`. Nothing else is needed;
there is no PHP, so the WordPress install can be removed once you are happy.

**Netlify / Vercel / Cloudflare Pages** — drag the folder onto the dashboard, or
point it at a Git repo. No build command, no output directory.

Keep the old WordPress URLs working by adding redirects, e.g. on Netlify a
`_redirects` file:

```
/taj-mahal-tour-packages/      /tours.html?cat=taj-mahal      301
/golden-triangle-tour-packages/ /tours.html?cat=golden-triangle 301
/jaipur-tour-packages/         /tours.html?cat=jaipur         301
/about-us/                     /about.html                    301
/contact-us/                   /contact.html                  301
```

## Editing content

Almost everything is in `assets/js/data.js`.

**Change phone, email, WhatsApp:** the `SITE` object at the top. It updates the
header, footer, contact page and every WhatsApp button at once.

**Add a tour:** copy any object inside `TOURS` and change the fields. `slug` must
be unique — it becomes the URL, `tour.html?tour=your-slug`. The card appears in
the listing and the detail page builds itself from `itinerary`, `includes`,
`excludes`, `highlights` and `gallery`.

```js
{
  slug: "udaipur-lake-tour",
  title: "Udaipur lake and palace tour",
  cat: "rajasthan",              // used by the filters
  catLabel: "Rajasthan journeys",
  route: "Udaipur · Lake Pichola",
  days: 2, nights: 1,
  durationLabel: "2 days",
  price: 19500,
  img: IMG.temple,               // or a direct URL
  summary: "One line that appears on the card.",
  highlights: ["…"],
  itinerary: [{ day: "Day 1", text: "…" }],
  includes: ["…"],
  excludes: ["…"],
  gallery: ["temple", "india", "chittor"]   // keys from IMG
}
```

**Featured tours on the home page:** the `picks` array in
`assets/js/main.js` → `renderFeaturedTours()`.

**Reviews, partner logos, city tiles:** `REVIEWS`, `PARTNERS`, `CITIES` in
`data.js`.

## Images

`assets/img/photos/` holds 22 photographs, each exported twice — `-800.webp`
for cards and phones, `-1600.webp` for full-width banners. `main.js` builds a
`srcset` from the base path, so a phone downloads roughly a quarter of the bytes
a desktop does. All 44 files together come to 6.6 MB; the originals they were
made from were 79 MB.

In `data.js` the `IMG` entries are **base paths without a size or extension**:

```js
const IMG = {
  taj: "assets/img/photos/taj-pool",   // -800.webp and -1600.webp both exist
  ...
};
```

### Adding a photo

1. Export it twice, 800px and 1600px wide, as WebP, into `assets/img/photos/`,
   named `your-name-800.webp` and `your-name-1600.webp`.
2. Add `yourKey: "assets/img/photos/your-name"` to `IMG`.
3. Use `IMG.yourKey` as a tour's `img`, or `"yourKey"` inside a `gallery` array.

Any image tool will do the resize; the set here was produced with:

```bash
npx sharp-cli -i original.jpg -o assets/img/photos/your-name-800.webp resize 800
npx sharp-cli -i original.jpg -o assets/img/photos/your-name-1600.webp resize 1600
```

### The fallback illustrations

`assets/img/*.svg` are twelve vector scenes (Taj Mahal, Amber Fort, Hawa Mahal,
Jal Mahal, Mehrangarh, Jaisalmer dunes, Delhi monuments, a train, a jharokha
window). If a photograph ever fails to load, `main.js` swaps in an illustration
rather than showing a broken icon. They also stand in if you ever need a page
that has no photography yet. `assets/img/_source-illustrations.py` regenerates
the whole set — edit the palette there and rerun `python3
_source-illustrations.py`.

### Photo credits and rights

The destination photographs came from the old WordPress library. The ones with
names like `mahigkworld-chittorgarh-...` and `susanfleming-amber-fort-...` are
Pixabay stock, which is free for commercial use. Before launch, confirm the
rest are licensed — particularly anything that will sit on the home page.

The office photograph is a stock interior, not the Agra office. Replace it with
a real photo of the team or the office as soon as one exists; on a travel site
that one image does more for trust than any amount of copy.

## The enquiry form

Every form submits to WhatsApp with the fields prefilled, so an enquiry lands on
the phone with a copy kept in the chat. No server required.

To collect enquiries by email as well, point the form at a form service — add
`action="https://formspree.io/f/XXXX" method="POST"` to the `<form>` tag and
remove `data-enquiry`, or keep both by calling `fetch()` inside the submit
handler in `main.js` before the WhatsApp window opens.

## Design system

The palette is taken from the monument itself: Makrana marble for the page,
the red sandstone of the great gateway and the mosque as the main contrast, and
the three stones used in the pietra dura inlay — lapis, jade and amber — as
accents. Nothing in it was invented; you can stand at the Taj Mahal and point at
every colour.

| Token | Value | Where it comes from | Used for |
| --- | --- | --- | --- |
| `--marble` | `#FAF7F1` | Makrana marble | Page background |
| `--marble-lit` | `#FFFDF9` | Marble in sun | Cards and panels |
| `--sand` | `#F0E8DA` | Weathered marble | Alternating bands |
| `--sand-deep` | `#DCCDB2` | Marble shadow | Borders and rules |
| `--lapis-800` | `#8A3826` | Red sandstone gateway | Dark bands, footer, buttons |
| `--lapis-900` | `#5A2318` | Sandstone in shadow | Headlines, deepest band |
| `--carnelian` | `#1F3C72` | Lapis lazuli inlay | Eyebrows, booking buttons |
| `--peacock` | `#15706A` | Jade inlay | Inclusion ticks, secondary |
| `--marigold` | `#DFA23C` | Amber and yellow jasper inlay | Accents, arch outlines |
| `--ink` | `#241F1A` | — | Body text |

The token names still say `lapis` for the sandstone values because they are
referenced throughout the stylesheet; the values are what matter.

The page carries a faint marble vein, drawn as an inline SVG and tiled — no image
file, about 600 bytes, and it fixes to the viewport so it reads as stone rather
than wallpaper.

### Contrast

Every pairing was measured against WCAG AA. The weakest is the gold-on-sandstone
used in the arch badge at 5.22:1; the rest sit between 5.4 and 15.3. Body text on
marble is 15.27:1.

| Pair | Ratio |
| --- | --- |
| Body text on marble | 15.27 |
| Headline sandstone on marble | 11.63 |
| Eyebrow lapis on marble | 10.08 |
| Marble text on sandstone band | 10.74 |
| Caption grey on marble | 5.42 |
| Gold on deep sandstone | 5.55 |

Built to pass the basics: responsive to 360px, visible keyboard focus,
`prefers-reduced-motion` respected, semantic landmarks, and a print stylesheet.

## Before go-live

- [ ] Replace the placeholder statistics (9000+ guests, 40+ countries, 4.9 rating) with real numbers
- [ ] Confirm the prices in `TOURS` — they are reasonable estimates, not your rate card
- [ ] Replace the stock office photo with a real one of the Agra office or team
- [ ] Confirm licensing on any photo that is not Pixabay stock
- [ ] Add a favicon (`favicon.ico` in the root plus `<link rel="icon">`)
- [ ] Set up Google Search Console and submit a sitemap
- [ ] Add Google Analytics or Plausible if you want traffic data


## What came across from the old WordPress site

The old site had **64 pages. 35 of them were completely empty** — header and
footer only, no content at all. Among them: every "Golden Triangle Tour 2/3/4/5/6/7
Days" page, most of the Jaipur and Delhi tour pages, `/blog/`, `/car-rent/`,
`/varanasi/`, `/tour-packages/` and `/tour-by-city/`. Those were costing you:
Google indexes empty pages and reads them as a thin, low-quality site.

Of the 29 pages that did have content, 11 were real tour pages. All 11 are here,
with their itineraries, inclusions, exclusions and FAQs carried over close to
word for word:

| Old URL | Now |
| --- | --- |
| `/taj-mahal-day-tour-from-delhi-by-car/` | `tour.html?tour=taj-mahal-day-tour-from-delhi` |
| `/taj-mahal-sunrise-tour-from-delhi-by-car/` | `tour.html?tour=taj-mahal-sunrise-tour-from-delhi` |
| `/same-day-taj-mahal-tour-from-delhi-by-superfast-train/` | `tour.html?tour=taj-mahal-tour-by-gatimaan-express` |
| `/taj-mahal-private-luxury-car-tour-from-delhi/` | `tour.html?tour=taj-mahal-luxury-car-tour-from-delhi` |
| `/2-days-taj-mahal-overnight-tour-from-delhi/` | `tour.html?tour=2-days-taj-mahal-overnight-tour` |
| `/1-day-delhi-and-1-day-agra-tour-by-car/` | `tour.html?tour=delhi-and-agra-2-day-private-tour` |
| `/7-days-golden-triangle-tour-with-ranthambore/` | `tour.html?tour=7-days-golden-triangle-with-ranthambore` |
| `/8-days-golden-triangle-tour-with-udaipur/` | `tour.html?tour=8-days-golden-triangle-with-udaipur` |
| `/8-days-golden-triangle-tour-with-pushkar-jodhpur/` | `tour.html?tour=8-days-golden-triangle-with-pushkar-jodhpur` |
| `/10-days-golden-triangle-tour-with-jodhpur-udaipur/` | `tour.html?tour=10-days-golden-triangle-with-jodhpur-udaipur` |
| `/12-days-rajasthan-heritage-wildlife-tour/` | `tour.html?tour=12-days-rajasthan-heritage-wildlife-tour` |
| `/13-days-classic-rajasthan-cultural-tour/` | `tour.html?tour=13-days-classic-rajasthan-cultural-tour` |

The other **8 tours were written from scratch** to fill the gaps the empty pages
left — the 3, 4, 5 and 6 day Golden Triangle routes, the Delhi city tour, the
Jaipur tour, the Gatimaan train day and the Jaipur-to-Agra transfer day. Their
structure matches the real ones, but **the itineraries and prices are drafts.
Read them before launch and correct anything that does not match how you actually
run the tour.**

Every price in `data.js` is an estimate. None came from the old site, which
published no prices at all.

### Still to decide

- **Blog** — the old `/blog/` page was empty with one "Hello world!" post. There is
  no blog here. If you want one, it needs a decision first: static pages you edit
  by hand, or a headless CMS.
- **Car rental** and **Varanasi** — both existed as empty pages. If these are real
  services, they need content; if not, let them 404.
- **City pages** — `/agra-tours/`, `/delhi-tours/`, `/jaipur-tours/` and so on are
  handled by `tours.html?q=Agra`. That works, but a dedicated page per city with
  its own copy would rank better. Worth doing once the tour content is signed off.


## Second pass — what the first version missed

A page-by-page comparison against the live site turned up content that the first
build had collapsed into filters. It is all here now:

- **12 collection and city landing pages**, at the same URLs the old site used, so
  existing links and any Google ranking carry over. Each carries its own intro
  copy, its own FAQ set and the tours that belong to it. They are generated from
  `COLLECTION_PAGES` and `CITY_PAGES` in `data.js` — edit the copy there, not in
  the HTML.
- **"Included in every package"** block on every collection page, taken from the
  old site: private AC car or train tickets, hotel pickup and drop, monument
  tickets, ministry-approved guide, bottled water, free cancellation. Not
  included: tips and personal expenses. It lives in `PACKAGE_TERMS` so the
  promise stays identical across all six pages.
- **FAQ sections** on tour pages and collection pages.
- **"At a glance" facts table** on each tour page — duration, destinations,
  transport, accommodation, pickup, return.
- **About page facts** that were missing: founded 2000, three offices (Agra head
  office, Delhi and Jaipur branches), travellers from the USA, UK, Canada,
  Australia and Europe, a 30-minute typical reply time, and the full six-service
  list — including **train travel assistance** and **airport pickup and drop**,
  which the first version never mentioned at all.

### Two mistakes on the old site, not copied across

- Every city page (`/delhi-tours/`, `/jaipur-tours/`, `/jodhpur-tours/`,
  `/udaipur-tours/`, `/jaisalmer-tours/`) carried the **Agra FAQ**, word for word
  — "How many days are enough for Agra?" on the Jaisalmer page. Each city here has
  its own questions.
- The Jaisalmer page's "Welcome to" section was **Delhi's text**.
- `/rajasthan-tour-packages/` had FAQ answers attached to the wrong questions —
  "Can I book a private guide for Rajasthan sightseeing?" was answered with the
  cancellation policy.

Worth knowing if any of that copy gets reused elsewhere.


## Third pass — the gap that caused the redesign

The reason this rebuild was commissioned: tour packages were advertised on the
category pages with a "View details" button that led to an empty page. A check of
all six category pages found **36 card slots, and 19 of them pointed at pages
with no itinerary at all**:

| Category page | Advertised | Had an itinerary | Empty |
| --- | --- | --- | --- |
| Taj Mahal tour packages | 6 | 6 | 0 |
| Rajasthan tour packages | 6 | 6 | 0 |
| Same day tour packages | 6 | 4 | 2 |
| Golden Triangle tour packages | 6 | 0 | **6** |
| New Delhi tour packages | 6 | 0 | **6** |
| Jaipur tour packages | 6 | 0 | **6** |

Every Golden Triangle, Delhi and Jaipur package was a dead end. All 19 now have a
full page: overview, at-a-glance facts, day-by-day itinerary, inclusions,
exclusions and FAQs.

**32 tours in total.** The twelve carried over from the old site keep their
original wording. **The other twenty are drafts** — written to match the tour
names the old site advertised, in the same structure and voice, because there was
no source content to copy. Read them before launch, especially:

- the day-by-day timings, which were inferred from the route rather than your
  actual operations
- every price, all of which are estimates
- the Old Delhi food tour, where the specific shops should match the ones your
  guides actually use
- the elephant conservation centre tour, where the centre's current visiting
  rules should be confirmed before you publish the page


## Fourth pass — photos per tour, and ideas from pioneerholidays.org

### Photographs

37 photographs now, each at 800w and 1600w (9.5 MB in total). Every tour has an
image and a three-shot gallery chosen for what that tour actually visits — the
Agra Fort gate on the Agra tours, the Baby Taj on the ones that include it, the
Lotus Temple on the Delhi temple tour, Umaid Bhawan on Jodhpur, the carpet
workshop on the shopping tour.

### Added, adapted from the competitor's structure

- **Browse by trip length**: `1-2-days-tour-packages.html`, `3-5-…`, `6-10-…`,
  `11-15-…`. A second way in, alongside collection and city. They rank well because
  people search "3 day golden triangle tour", not just "golden triangle tour".
- **`travel-guide.html`** — visas and the e-Visa warning about lookalike sites,
  best season by month, money, dress codes at religious sites, and the practical
  habits (early starts, buffer time, photography rules).
- **`terms.html`** — booking, payment, cancellation both ways, insurance,
  liability, monument closure days.
- **Home page FAQ** — seven questions, including the direct ones about commission
  shops and deposits.
- **Assurance row** above the footer: since 2000, fully private, no commission
  shops, free cancellation, no deposit for an itinerary.

Their text was not copied. The structure and the topics are theirs; every word
here is original. Copying a competitor's copy would be both a legal problem and
an SEO one — Google discounts duplicate content.

### Their pricing, which is worth looking at

Pioneer Holidays publishes prices with a discount shown against a struck-through
original: 3-day Golden Triangle at **₹10,340** (from ₹12,925), 13-day Rajasthan at
**₹48,880** (from ₹61,100).

The draft prices in `data.js` are **two to three times higher** — ₹32,500 for the
3-day, ₹162,000 for the 13-day. One of two things is true: either your tours are
positioned well above theirs and the pages need to justify that, or the drafts are
simply wrong. Either way, replace them with your real rate card before launch.
This is the single most important thing left on the site.

The code supports a struck-through original price if you want one: add
`mrp: 12925` next to `price` on a tour. It is deliberately unset everywhere —
inventing a "was" price that was never charged is a dark pattern, and in several
of your markets it is also illegal.

### Still not built

- **Blog** — needs a decision first: hand-edited static pages, or a CMS.
- **Varanasi, South India, Amritsar, Ranthambore-only tours** — the competitor
  sells these; you do not have content for them. Say the word and I will draft them.
- **Car rental** — an empty page on the old site. Real service or not?
- **Clean URLs** — tours are at `tour.html?tour=slug`. `/tours/slug` reads better
  and ranks slightly better, but needs a rewrite rule on the server. Worth doing
  at deploy time on Hostinger with an `.htaccess`.
- **Online payment** — the competitor shows card and PayPal badges. Taking
  deposits online needs a payment gateway (Razorpay or PayU for Indian operators)
  and is a separate build.
- **Real reviews** — the five on the site came from the old one. Google and
  TripAdvisor review widgets would carry far more weight than quoted text.


## Fifth pass — everything on the outstanding list

### New destinations

Six tours, two collections and three city pages added:

- **Varanasi** — `varanasi-tour-packages.html`, `varanasi-tours.html`, a 2-day
  spiritual tour and an 8-day Golden Triangle with Varanasi
- **Amritsar** — `amritsar-tours.html` and an 8-day Golden Triangle with Amritsar
- **Ranthambore** — `ranthambore-tours.html` and a standalone 3-day safari tour
- **South India** — `south-india-tour-packages.html`, a 7-day Kerala backwaters
  tour and a 10-day temples-and-backwaters route

**38 tours in total.** These four destinations have no photographs in the library,
so they use vector illustrations drawn for them — the ghats at Varanasi, the
Golden Temple, a Kerala houseboat, a safari jeep below Ranthambore fort. Swap in
real photos by changing four lines in the `IMG` map.

### Blog

`blog.html` lists the articles; `blog-post.html?post=<slug>` renders any one of
them. Five articles are written and ready:

1. The best time to visit the Taj Mahal, hour by hour
2. How many days does the Golden Triangle actually need?
3. Six things that go wrong on India tours, and how to avoid them
4. What to pack for North India, by season
5. Agra beyond the Taj Mahal: five places most visitors skip

Add one by appending an object to `BLOG_POSTS` in `data.js`. The `body` is an
array of `["p", "text"]`, `["h2", "heading"]` or `["ul", ["item", "item"]]` pairs.
No build step, no CMS, no database.

These five were chosen because they answer the questions that come in by WhatsApp
and because they rank for searches people actually make. The scams article in
particular tends to earn links — it says things most operators will not.

### Car rental

`car-rent.html` with five vehicle classes, day rates and per-kilometre outstation
rates, driven by `FLEET` in `data.js`. **The rates are drafts** — replace them
with yours.

### Clean URLs and redirects

`.htaccess` is in the project root. Upload it to `public_html` alongside
`index.html` and it does five things:

- `/tours/taj-mahal-day-tour-from-delhi` works as a URL, as does `/about`
- **63 redirects** from the old WordPress URLs to the new pages, so no inbound
  link or search result breaks
- 404s go to `404.html`
- Compression and caching headers, which is most of the page-speed score
- Forces HTTPS and sets three security headers

If Hostinger's panel has an "Apache configuration" section, nothing extra is
needed — the file is read automatically.

### Payments

The contact page lists how guests can pay: bank transfer, UPI, cash on arrival,
card at the office, international SWIFT. Edit `PAYMENT` in `data.js`.

Taking card payments **online** is a separate build: it needs a payment gateway
account (Razorpay and PayU are the usual choices for Indian tour operators), a
server-side endpoint to create the order and verify the signature, and a KYC
process with the gateway that takes a few days. A static site cannot do it alone.
Worth doing once the site is live and taking enquiries — not before.

### Reviews

Two review buttons appear on the home page as soon as you fill in
`googleReviewUrl` and `tripadvisorUrl` in `SITE`. Until then they stay hidden.

Real review widgets from Google or Tripadvisor carry far more weight with
international travellers than quoted text, because they cannot be edited by you.
Both platforms offer free embed code, and Elfsight does a tidier version for a
small monthly fee. Add it to the reviews section once the profiles are live.
