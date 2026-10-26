#!/usr/bin/env node
/* ==========================================================================
   Tajview Holidays — SEO build
   --------------------------------------------------------------------------
   Run after editing assets/js/data.js:      node tools/build.js

   What it does
   1. Writes a search-friendly static page for every tour   -> tours/<slug>.html
      and for every journal article                         -> journal/<slug>.html
   2. Pre-renders the tour lists, FAQs and cards inside the main pages, so
      search engines see the content without running JavaScript.
   3. Rewrites the <head> of every page: keyword title, description, canonical,
      Open Graph / Twitter tags and schema.org JSON-LD (TravelAgency,
      BreadcrumbList, FAQPage, TouristTrip, BlogPosting, ItemList).
   4. Regenerates sitemap.xml.

   No npm packages needed — plain Node 16+.
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://tajviewholidays.com/";
const TODAY = new Date().toISOString().slice(0, 10);
const rd = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const wr = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };

/* ---------------------------------------------- load data.js + main.js -- */
const noop = () => {};
const fakeEl = { addEventListener: noop, setAttribute: noop, classList: { add: noop, remove: noop, toggle: noop } };
const sandbox = {
  console, Intl, URLSearchParams, Date, Math, JSON, encodeURIComponent,
  document: { addEventListener: noop, querySelector: () => null, querySelectorAll: () => [], body: { dataset: {} },
              documentElement: fakeEl, createElement: () => fakeEl, head: fakeEl, cookie: "" },
  localStorage: { getItem: () => null, setItem: noop },
  navigator: {}, location: { search: "", hostname: "", href: "" },
  matchMedia: () => ({ matches: false, addEventListener: noop }),
  addEventListener: noop, setTimeout: noop, IntersectionObserver: function () { return { observe: noop }; }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(rd("assets/js/data.js") + "\n" + rd("assets/js/main.js") + `
;globalThis.__ = { SITE, TOURS, IMG, BLOG_POSTS, COLLECTION_PAGES, DURATION_PAGES, CITY_PAGES, HOME_FAQS,
  tourCard, tourDetailHTML, tourHeroImg, catPage, collectionGroupsHTML, collectionTours, durationTours, cityTours,
  cityToursHTML, termsBlock, faqBlock, featuredToursHTML, gtToursHTML, collectionsHTML, citiesHTML, reviewsHTML,
  blogListHTML, postBodyHTML, morePostsHTML, fmtDate, tourUrl, postUrl, esc };`, sandbox, { filename: "site.js" });
const X = sandbox.__;
const { SITE, TOURS, IMG, BLOG_POSTS, COLLECTION_PAGES, DURATION_PAGES, CITY_PAGES, HOME_FAQS, esc } = X;

/* --------------------------------------------------------- html helpers -- */
const VOID = new Set(["img", "input", "meta", "link", "br", "hr", "source", "base"]);
function findEl(html, id) {
  const m = new RegExp(`<([a-zA-Z0-9]+)\\b[^>]*\\bid="${id}"[^>]*>`).exec(html);
  if (!m) return null;
  const tag = m[1].toLowerCase(), openEnd = m.index + m[0].length;
  if (VOID.has(tag)) return { start: m.index, openEnd, closeStart: openEnd, open: m[0] };
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
  re.lastIndex = openEnd;
  let depth = 1, t;
  while ((t = re.exec(html))) {
    if (t[0].endsWith("/>")) continue;
    depth += t[1] ? -1 : 1;
    if (depth === 0) return { start: m.index, openEnd, closeStart: t.index, open: m[0] };
  }
  throw new Error("Unbalanced element #" + id);
}
function setInner(html, id, inner) {
  const e = findEl(html, id);
  return e ? html.slice(0, e.openEnd) + inner + html.slice(e.closeStart) : html;
}
function setAttrs(html, id, attrs) {
  const e = findEl(html, id);
  if (!e) return html;
  let open = e.open;
  for (const [k, v] of Object.entries(attrs)) {
    const re = new RegExp(`\\s${k}="[^"]*"`);
    if (v === null) { open = open.replace(re, ""); continue; }
    const a = ` ${k}="${String(v).replace(/"/g, "&quot;")}"`;
    open = re.test(open) ? open.replace(re, a) : open.replace(/\s*\/?>$/, a + ">");
  }
  return html.slice(0, e.start) + open + html.slice(e.openEnd);
}
const plain = s => String(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").replace(/\s+/g, " ").trim();
const clip = (s, n) => { s = plain(s); return s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)).replace(/[,;:—–-]$/, "") + "…"; };
const abs = p => SITE_URL + p.replace(/^\.?\//, "");
const imgAbs = base => abs(/\.(svg|png|jpe?g|webp)$/i.test(base) ? base : base + "-1600.webp");
/* 1200x630 JPG for link previews (WhatsApp does not show WebP) — made by tools/make-og.py */
const ogImg = base => {
  const jpg = "assets/img/og/" + path.basename(base) + ".jpg";
  return fs.existsSync(path.join(ROOT, jpg)) ? abs(jpg) : imgAbs(base);
};
const SMALL = new Set(["a", "an", "and", "at", "by", "for", "from", "in", "of", "on", "or", "the", "to", "with", "vs"]);
const titleCase = s => s.split(" ").map((w, i) =>
  i && SMALL.has(w.toLowerCase()) ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
const inr = n => "₹" + Number(n).toLocaleString("en-IN");

/* ------------------------------------------------- keyword copy per page -- */
const PAGES = {
  "index.html": {
    title: "Agra Tour Packages & Taj Mahal Tours from Delhi | Tajview",
    desc: "Agra tour operator since 2000: same day Agra tours by car, Taj Mahal sunrise and Gatimaan tours, Golden Triangle and Rajasthan packages with licensed guides.",
    keys: "agra tour packages, taj mahal tour packages, same day agra tour by car, taj mahal tour from delhi, tour operator in agra, travel agency in agra, golden triangle tour packages"
  },
  "taj-mahal-tour-packages.html": {
    title: "Taj Mahal Tour Packages from Delhi – Same Day & Overnight",
    desc: "Private Taj Mahal tour packages from Delhi and Agra: same day tours by car, sunrise tours, the Gatimaan Express train tour, luxury car and overnight tours — guide, tickets and fixed prices included.",
    keys: "taj mahal tour packages, taj mahal tour from delhi, taj mahal day tour, taj mahal sunrise tour, taj mahal tour by train, agra tour package"
  },
  "same-day-tour-packages.html": {
    title: "Same Day Agra Tour by Car from Delhi | Taj Mahal Day Trip",
    desc: "Same day Agra tours from Delhi by private car or Gatimaan Express: the Taj Mahal, Agra Fort and lunch, back the same evening. Plus Jaipur, Mathura–Vrindavan and Agra local day tours.",
    keys: "same day agra tour by car, same day taj mahal tour, agra day trip from delhi, taj mahal one day tour, delhi to agra day tour"
  },
  "golden-triangle-tour-packages.html": {
    title: "Golden Triangle Tour Packages 2–10 Days | Delhi Agra Jaipur",
    desc: "Private Golden Triangle tours of Delhi, Agra and Jaipur from 2 to 10 days, with Ranthambore, Udaipur, Varanasi or Amritsar extensions, handpicked hotels, a private car and licensed guides.",
    keys: "golden triangle tour packages, golden triangle tour india, delhi agra jaipur tour, 3 days golden triangle tour, 5 days golden triangle tour"
  },
  "new-delhi-tour-packages.html": {
    title: "Delhi Tour Packages | Old & New Delhi Sightseeing Tours",
    desc: "Private Delhi sightseeing tours: Old Delhi by rickshaw, New Delhi monuments at sunrise, food, temple and shopping tours, luxury car tours and 2 day Delhi and Delhi–Agra packages.",
    keys: "delhi tour packages, delhi sightseeing tour, old delhi rickshaw tour, delhi city tour by car, new delhi tour"
  },
  "jaipur-tour-packages.html": {
    title: "Jaipur Tour Packages from Delhi | Jaipur Day Tour by Car",
    desc: "Jaipur tours from Delhi by car or superfast train: Amber Fort, City Palace and Hawa Mahal in a day, private sightseeing with a guide and 2 day packages.",
    keys: "jaipur tour packages, jaipur day tour from delhi, jaipur sightseeing tour, delhi to jaipur tour by car"
  },
  "rajasthan-tour-packages.html": {
    title: "Rajasthan Tour Packages | Private Rajasthan Tours by Car",
    desc: "Private Rajasthan tour packages from 3 to 15 days — Jaipur, Jodhpur, Jaisalmer, Udaipur, Pushkar and Ranthambore — with heritage hotels, one car and driver throughout and licensed guides.",
    keys: "rajasthan tour packages, rajasthan tour by car, rajasthan private tour, jaipur jodhpur udaipur tour"
  },
  "varanasi-tour-packages.html": {
    title: "Varanasi Tour Packages | Ganga Aarti & Kashi Tours",
    desc: "Private Varanasi tours: the evening Ganga aarti, a sunrise boat on the ghats, Kashi Vishwanath and Sarnath — as a day tour, or 2 and 3 day packages from Delhi.",
    keys: "varanasi tour packages, varanasi tour from delhi, ganga aarti tour, varanasi 2 days tour"
  },
  "south-india-tour-packages.html": {
    title: "Kerala & South India Tour Packages | Private Tours",
    desc: "Private Kerala and South India tours from 5 to 14 days: backwater houseboats, Munnar tea hills, the temple towns of Tamil Nadu, Mysore and wildlife safaris.",
    keys: "kerala tour packages, south india tour packages, kerala backwaters tour, south india temple tour"
  },
  "wildlife-tour-packages.html": {
    title: "Wildlife Tour Packages India | Ranthambore & Corbett Safari",
    desc: "Private wildlife tours in India: tiger safaris in Ranthambore, Jim Corbett, Bandhavgarh, Kanha and Pench, with naturalists, jungle lodges and the Taj Mahal on the way.",
    keys: "wildlife tour packages india, ranthambore safari tour, jim corbett tour package, tiger safari india, central india wildlife tour"
  },
  "agra-tours.html": {
    title: "Agra Tours | Agra Local Sightseeing, Taj Mahal Guide & Car",
    desc: "Agra tours by a local Agra tour operator: Agra local sightseeing by car with a licensed guide, Taj Mahal sunrise tours, Fatehpur Sikri, Mathura–Vrindavan and day trips from Delhi.",
    keys: "agra tours, agra local sightseeing, agra sightseeing tour, taj mahal guide agra, agra city tour, agra tour operator"
  },
  "tours.html": {
    title: "All Tour Packages | Taj Mahal, Golden Triangle, Rajasthan & More",
    desc: "Every private tour we run, in one place: Taj Mahal and same day Agra tours, Golden Triangle, Delhi, Jaipur, Rajasthan, Varanasi, Kerala and wildlife packages. Filter by length, price and region.",
    keys: "india tour packages, private tours india, taj mahal tours, golden triangle tours, rajasthan tours"
  },
  "car-rent.html": {
    title: "Car Rental in Agra & Delhi with Driver | Taxi for Taj Mahal",
    desc: "Car rental with driver in Agra and Delhi: sedans, SUVs, Tempo Travellers and luxury cars for Taj Mahal trips, Golden Triangle tours and airport transfers.",
    keys: "car rental agra, taxi service in agra, delhi to agra taxi, agra to delhi cab, tempo traveller agra, car hire with driver agra"
  },
  "contact.html": {
    title: "Contact Tajview Holidays | Tour Operator & Travel Agent in Agra",
    desc: "Contact Tajview Holidays, Agra, for private Taj Mahal, Golden Triangle and Rajasthan tours. WhatsApp +91 84395 55163 or email tajviewholidays@gmail.com.",
    keys: "travel agent in agra, tour operator agra contact, taj mahal tour booking, agra travel agency"
  },
  "about.html": {
    title: "About Tajview Holidays | Agra Tour Operator Since 2000",
    desc: "Tajview Holidays has run private tours from Agra since 2000: licensed guides, hotels we know, fixed written prices and 24/7 WhatsApp support.",
    keys: "tajview holidays, agra tour operator, travel agency agra, private tour company india"
  },
  "blog.html": {
    title: "Agra & Taj Mahal Travel Blog | Tickets, Itineraries & Tips",
    desc: "Agra travel guides: Taj Mahal ticket price and timings, same day Agra itineraries, Gatimaan Express, Fatehpur Sikri, Mathura–Vrindavan and Agra food.",
    keys: "agra travel blog, taj mahal guide, agra itinerary, taj mahal tips, golden triangle blog"
  },
  "travel-guide.html": {
    title: "India Travel Guide | Visas, Best Season, Money & Tips",
    desc: "Planning a trip to India: visas, the best season for the Taj Mahal and Rajasthan, money, dress, health and the habits that make a North India tour run smoothly.",
    keys: "india travel guide, taj mahal travel tips, best time to visit india, india travel tips"
  }
};

/* Search titles and keywords for the tours people search for most */
const TOUR_SEO = {
  "taj-mahal-day-tour-from-delhi": ["Same Day Agra Tour by Car from Delhi | Taj Mahal Day Tour",
    "same day agra tour by car, taj mahal day tour from delhi by car, taj mahal tour from delhi, agra day trip from delhi, delhi to agra tour by car"],
  "taj-mahal-sunrise-tour-from-delhi": ["Taj Mahal Sunrise Tour from Delhi by Car | Same Day",
    "taj mahal sunrise tour, taj mahal sunrise tour from delhi, sunrise taj mahal tour by car, same day taj mahal sunrise tour"],
  "taj-mahal-tour-by-gatimaan-express": ["Taj Mahal Tour by Gatimaan Express Train from Delhi",
    "taj mahal tour by gatimaan express, taj mahal tour by train, same day agra tour by train, gatimaan express agra tour"],
  "taj-mahal-luxury-car-tour-from-delhi": ["Taj Mahal Luxury Car Tour from Delhi | 5-Star Lunch",
    "taj mahal luxury tour, luxury car tour agra, private luxury taj mahal tour from delhi"],
  "2-days-taj-mahal-overnight-tour": ["2 Days Taj Mahal Overnight Tour from Delhi | Agra",
    "2 days taj mahal tour, taj mahal overnight tour, 2 days agra tour from delhi, agra overnight tour package"],
  "agra-local-sightseeing-tour": ["Agra Local Sightseeing Tour by Car with Guide | Full Day",
    "agra local sightseeing, agra sightseeing tour by car, agra city tour, agra full day tour, taj mahal tour from agra, agra tour guide"],
  "mathura-vrindavan-day-tour-from-agra": ["Mathura Vrindavan Tour from Agra | Private Day Trip",
    "mathura vrindavan tour from agra, agra mathura vrindavan tour package, mathura vrindavan day trip, prem mandir banke bihari tour"],
  "taj-mahal-sunrise-with-elephant-conservation": ["Taj Mahal Sunrise & Elephant Conservation Tour from Delhi",
    "taj mahal tour with elephant sanctuary, wildlife sos elephant tour, taj mahal sunrise elephant conservation tour"],
  "same-day-agra-tour-from-jaipur": ["Same Day Agra Tour from Jaipur | Taj Mahal & Fatehpur Sikri",
    "same day agra tour from jaipur, jaipur to agra day tour, jaipur agra delhi one way tour"],
  "delhi-and-agra-2-day-private-tour": ["Delhi and Agra 2 Day Tour by Car | 1 Day Delhi 1 Day Agra",
    "delhi agra 2 days tour, 1 day delhi 1 day agra tour, delhi and agra tour package"],
  "3-days-golden-triangle-private-tour": ["3 Days Golden Triangle Tour | Delhi Agra Jaipur by Car",
    "3 days golden triangle tour, golden triangle tour 3 days, delhi agra jaipur 3 days tour"],
  "3-days-ranthambore-safari-tour": ["3 Days Ranthambore Tiger Safari Tour | Jeep Safaris",
    "ranthambore safari tour, ranthambore tour package, ranthambore tiger safari"]
};

/* Shorter search titles for long article headlines */
const POST_SEO = {
  "taj-mahal-ticket-price-and-timings": "Taj Mahal Ticket Price 2026 & Timings: Complete Guide",
  "same-day-agra-tour-from-delhi": "Same Day Agra Tour from Delhi: Itinerary, Cost, Car vs Train",
  "gatimaan-express-delhi-to-agra": "Gatimaan Express Delhi to Agra: Timings & Day Trip Plan",
  "best-places-to-visit-in-agra": "12 Best Places to Visit in Agra (Local's List)",
  "taj-mahal-night-viewing": "Taj Mahal Night Viewing: Full Moon Dates, Tickets, Rules",
  "delhi-to-agra-by-car": "Delhi to Agra by Car: Distance, Time & Yamuna Expressway",
  "fatehpur-sikri-from-agra": "Fatehpur Sikri from Agra: Tickets, Timings & What to See",
  "mathura-vrindavan-from-agra": "Mathura Vrindavan Day Trip from Agra: Temples & Timings",
  "what-to-eat-in-agra": "What to Eat in Agra: Petha, Bedai, Dalmoth & Mughlai Food",
  "taj-mahal-guide-and-avoiding-touts": "Taj Mahal Guide in Agra: Hire a Licensed Guide, Avoid Touts",
  "ranthambore-safari-guide": "Ranthambore Safari Guide: Zones, Jeep vs Canter, Booking",
  "agra-beyond-the-taj-mahal": "Agra Beyond the Taj Mahal: 5 Places Most Visitors Skip"
};

/* ------------------------------------------------------------ JSON-LD -- */
const AGENCY_ID = SITE_URL + "#agency";
const agency = () => ({
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": AGENCY_ID,
  name: SITE.name,
  url: SITE_URL,
  logo: abs("assets/img/logo.png"),
  image: abs("assets/img/photos/taj-pool-1600.webp"),
  description: "Private Taj Mahal, Agra, Golden Triangle, Rajasthan and wildlife tours run from Agra since 2000.",
  telephone: SITE.phoneRaw,
  email: SITE.email,
  foundingDate: String(SITE.since),
  priceRange: "₹₹",
  address: { "@type": "PostalAddress", addressLocality: "Agra", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  areaServed: ["Agra", "Delhi", "Jaipur", "Rajasthan", "Uttar Pradesh", "India"],
  openingHoursSpecification: { "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  contactPoint: { "@type": "ContactPoint", telephone: SITE.phoneRaw, contactType: "customer service",
    availableLanguage: ["English", "Hindi"], areaServed: "IN" },
  knowsAbout: ["Taj Mahal tours", "Same day Agra tours", "Golden Triangle tours", "Rajasthan tours", "Wildlife safaris in India"]
});
const crumbs = list => ({
  "@type": "BreadcrumbList",
  itemListElement: list.map(([name, url], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(url) }))
});
const faqLd = faqs => faqs && faqs.length ? {
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: plain(q), acceptedAnswer: { "@type": "Answer", text: plain(a) } }))
} : null;
const itemList = (tours, name) => ({
  "@type": "ItemList", name,
  itemListElement: tours.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: abs(X.tourUrl(t.slug)), name: t.title }))
});

/* --------------------------------------------------------- <head> block -- */
function headBlock(o) {
  const graph = [agency(), ...(o.ld || [])].filter(Boolean);
  if (o.crumbs) graph.push(crumbs(o.crumbs));
  const image = o.image || ogImg("assets/img/photos/taj-pool");
  const isJpg = /\.jpg$/.test(image);
  return [
    "<!-- seo:start — generated by tools/build.js -->",
    `<title>${esc(o.title)}</title>`,
    `<meta name="description" content="${esc(clip(o.desc, 160))}">`,
    o.keys ? `<meta name="keywords" content="${esc(o.keys)}">` : "",
    `<meta name="robots" content="${o.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}">`,
    o.url ? `<link rel="canonical" href="${o.url}">` : "",
    `<link rel="icon" href="favicon.ico" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="assets/img/icons/favicon-32.png">`,
    `<link rel="apple-touch-icon" href="assets/img/icons/apple-touch-icon.png">`,
    `<link rel="manifest" href="site.webmanifest">`,
    `<meta name="theme-color" content="#332E8A">`,
    SITE.googleVerification ? `<meta name="google-site-verification" content="${esc(SITE.googleVerification)}">` : "",
    SITE.bingVerification ? `<meta name="msvalidate.01" content="${esc(SITE.bingVerification)}">` : "",
    SITE.ga4Id ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(SITE.ga4Id)}"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${esc(SITE.ga4Id)}");</script>` : "",
    `<meta name="geo.region" content="IN-UP">`,
    `<meta name="geo.placename" content="Agra">`,
    `<meta property="og:site_name" content="Tajview Holidays">`,
    `<meta property="og:locale" content="en_IN">`,
    `<meta property="og:type" content="${o.ogType || "website"}">`,
    `<meta property="og:title" content="${esc(o.ogTitle || o.title)}">`,
    `<meta property="og:description" content="${esc(o.desc)}">`,
    o.url ? `<meta property="og:url" content="${o.url}">` : "",
    `<meta property="og:image" content="${image}">`,
    isJpg ? `<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">` : "",
    `<meta property="og:image:alt" content="${esc(o.ogTitle || o.title)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(o.ogTitle || o.title)}">`,
    `<meta name="twitter:description" content="${esc(o.desc)}">`,
    `<meta name="twitter:image" content="${image}">`,
    o.article ? `<meta property="article:published_time" content="${o.article}">` : "",
    `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`,
    "<!-- seo:end -->"
  ].filter(Boolean).join("\n");
}

function applyHead(html, o) {
  html = html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->\n?/, "");
  html = html.replace(/<title>[\s\S]*?<\/title>\n?/, "")
    .replace(/<meta (name|property)="(description|keywords|robots|geo\.[a-z]+|og:[a-z:_]+|twitter:[a-z:_]+|article:[a-z_]+)"[^>]*>\n?/g, "")
    .replace(/<link rel="canonical"[^>]*>\n?/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, "")
    .replace(/<base [^>]*>\n?/g, "");
  const block = (o.base ? `<base href="${o.base}">\n` : "") + headBlock(o) + "\n";
  return html.replace(/(<meta name="viewport"[^>]*>\n?)/, "$1" + block);
}
const current = (html, re) => { const m = re.exec(html); return m ? m[1] : ""; };

/* ===================================================== 1. root pages ==== */
const rootPages = fs.readdirSync(ROOT).filter(f => f.endsWith(".html") && !/^google[0-9a-f]+\.html$/.test(f));
const sitemap = [];
const pageImg = key => IMG[key] ? ogImg(IMG[key]) : undefined;

for (const file of rootPages) {
  let html = rd(file);
  const body = current(html, /<body([^>]*)>/);
  const ds = k => current(body, new RegExp(`data-${k}="([^"]+)"`));
  const cfg = Object.assign({
    title: current(html, /<title>([\s\S]*?)<\/title>/).replace(/&amp;/g, "&"),
    desc: current(html, /<meta name="description" content="([^"]*)"/).replace(/&amp;/g, "&")
  }, PAGES[file] || {});
  const o = { title: cfg.title, desc: cfg.desc, keys: cfg.keys, url: abs(file === "index.html" ? "" : file),
              crumbs: [["Home", ""], [cfg.title.split(/ [|–—] /)[0], file]], ld: [] };
  let index = true;

  const col = ds("collection"), dur = ds("duration"), city = ds("city");
  if (col && COLLECTION_PAGES[col]) {
    const c = COLLECTION_PAGES[col], tours = X.collectionTours(col);
    html = setInner(html, "collectionShell", X.collectionGroupsHTML(col, c, tours));
    html = setInner(html, "collectionTerms", X.termsBlock());
    html = setInner(html, "collectionFaq", X.faqBlock(c.faqs));
    o.ld.push(itemList(tours, c.title), faqLd(c.faqs));
    o.crumbs = [["Home", ""], ["Tours", "tours.html"], [c.title, file]];
    o.image = ogImg(tours[0].img);
    if (!PAGES[file]) { o.title = `${titleCase(c.title)} | Private Tours | Tajview Holidays`; o.desc = clip(c.intro, 158); }
  } else if (dur && DURATION_PAGES[dur]) {
    const d = DURATION_PAGES[dur], tours = X.durationTours(dur);
    html = setInner(html, "durationNote", esc(d.note));
    html = setInner(html, "durationTours", tours.map(X.tourCard).join(""));
    html = setInner(html, "durationCount", tours.length === 1 ? "1 tour" : tours.length + " tours");
    html = setInner(html, "durationTerms", X.termsBlock());
    o.ld.push(itemList(tours, d.lead));
    o.crumbs = [["Home", ""], ["Tours", "tours.html"], [d.lead, file]];
    if (!PAGES[file]) {
      const span = (d.min === d.max ? d.min : d.min + " to " + d.max) + " days";
      o.title = `${titleCase(span)} Tour Packages from Delhi & Agra | Tajview`;
      o.desc = clip(d.intro, 158);
      o.keys = `${span} tour packages, ${span} india tour, ${span} tour from delhi`;
    }
  } else if (city && CITY_PAGES[city]) {
    const c = CITY_PAGES[city], tours = X.cityTours(city);
    html = setInner(html, "cityWelcome", c.welcome.map(p => `<p>${esc(p)}</p>`).join(""));
    html = setInner(html, "cityTours", X.cityToursHTML(city));
    html = setInner(html, "cityCount", tours.length === 1 ? "1 tour includes " + c.name : tours.length + " tours include " + c.name);
    html = setInner(html, "cityFaq", X.faqBlock(c.faqs));
    if (IMG[c.img]) html = setAttrs(html, "cityHeroImg", { src: IMG[c.img] + "-1600.webp", alt: "Tours in " + c.name, fetchpriority: "high" });
    o.ld.push(itemList(tours, "Tours in " + c.name), faqLd(c.faqs));
    o.crumbs = [["Home", ""], ["Tours", "tours.html"], [c.name + " tours", file]];
    o.image = pageImg(c.img);
    if (!PAGES[file]) {
      o.title = `${c.name} Tours | Private ${c.name} Sightseeing with Guide`;
      o.desc = clip(c.intro, 158);
      o.keys = `${c.name.toLowerCase()} tours, ${c.name.toLowerCase()} sightseeing, ${c.name.toLowerCase()} tour packages, ${c.name.toLowerCase()} tour from delhi`;
    }
  } else if (file === "index.html") {
    html = setInner(html, "featuredTours", X.featuredToursHTML());
    html = setInner(html, "gtTours", X.gtToursHTML());
    html = setInner(html, "collections", X.collectionsHTML());
    html = setInner(html, "cities", X.citiesHTML());
    html = setInner(html, "homeFaq", X.faqBlock(HOME_FAQS));
    html = setInner(html, "reviewRail", X.reviewsHTML());
    o.crumbs = null;
    o.ld.push({ "@type": "WebSite", "@id": SITE_URL + "#website", url: SITE_URL, name: SITE.name, publisher: { "@id": AGENCY_ID },
      potentialAction: { "@type": "SearchAction", target: SITE_URL + "tours.html?q={search_term_string}", "query-input": "required name=search_term_string" } },
      faqLd(HOME_FAQS));
  } else if (file === "tours.html") {
    html = setInner(html, "tourGrid", TOURS.map(X.tourCard).join(""));
    html = setInner(html, "filterCount", TOURS.length + " tours");
    o.ld.push(itemList(TOURS, "All tours"));
  } else if (file === "blog.html") {
    html = setInner(html, "blogList", X.blogListHTML());
    o.ld.push({ "@type": "Blog", name: "Tajview Holidays travel journal", url: abs("blog.html"), publisher: { "@id": AGENCY_ID },
      blogPost: BLOG_POSTS.map(p => ({ "@type": "BlogPosting", headline: p.title, url: abs(X.postUrl(p.slug)), datePublished: p.date })) });
  } else if (file === "tour.html" || file === "blog-post.html" || file === "404.html") {
    index = false;
    o.noindex = true; o.url = ""; o.crumbs = null;
  }

  html = applyHead(html, o);
  wr(file, html);
  if (index) sitemap.push({ loc: o.url, pri: file === "index.html" ? "1.0" : (col || city ? "0.9" : "0.7") });
}

/* ======================================================= 2. tour pages === */
const tourTpl = rd("tour.html");
fs.rmSync(path.join(ROOT, "tours"), { recursive: true, force: true });
for (const t of TOURS) {
  const url = X.tourUrl(t.slug);
  let html = tourTpl.replace(/<body([^>]*)>/, (m, a) => `<body${a.replace(/\sdata-tour="[^"]*"/, "")} data-tour="${t.slug}">`);
  const hero = X.tourHeroImg(t);
  html = setAttrs(html, "tourHeroImg", { src: hero.src, srcset: hero.srcset || null, sizes: hero.srcset ? "100vw" : null,
                                         alt: t.title, fetchpriority: "high" });
  html = setInner(html, "tourHeroTitle", esc(t.title));
  html = setInner(html, "tourHeroRoute", esc(t.route + " · " + t.durationLabel));
  html = setInner(html, "tourCrumb", esc(t.catLabel));
  html = setAttrs(html, "tourCrumb", { href: X.catPage(t.cat) });
  html = setInner(html, "tourDetail", X.tourDetailHTML(t));
  html = html.replace(/href="#/g, `href="${url}#`);

  const cat = COLLECTION_PAGES[t.cat];
  const tt = titleCase(t.title);
  const o = {
    base: "../",
    title: (TOUR_SEO[t.slug] || [])[0] ||
           (tt.length <= 36 ? `${tt} | Price & Itinerary | Tajview` : tt.length <= 42 ? `${tt} | Tajview Holidays`
            : tt.length <= 52 ? `${tt} | Tajview` : tt),
    ogTitle: tt,
    desc: clip(`${t.summary} ${t.durationLabel}, private, from ${inr(t.price)} per person.`, 160),
    keys: (TOUR_SEO[t.slug] || [])[1] || [...new Set([t.title.toLowerCase(), t.catLabel.toLowerCase(),
           ...t.route.toLowerCase().split(" · ").slice(0, 3).map(r => r.replace(/'s$/, "") + " tour")])].join(", "),
    url: abs(url),
    image: ogImg(t.img),
    crumbs: [["Home", ""], [t.catLabel, cat ? cat.file : "tours.html"], [t.title, url]],
    ld: [{
      "@type": "TouristTrip",
      name: t.title,
      description: plain(t.summary),
      url: abs(url),
      image: imgAbs(t.img),
      touristType: "Private tour",
      provider: { "@id": AGENCY_ID },
      itinerary: { "@type": "ItemList", numberOfItems: t.itinerary.length,
        itemListElement: t.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.time} — ${d.title}`, description: d.text })) },
      offers: { "@type": "Offer", price: String(t.price), priceCurrency: "INR", availability: "https://schema.org/InStock",
        url: abs(url), validFrom: TODAY, seller: { "@id": AGENCY_ID } }
    }, faqLd(t.faqs)]
  };
  wr(url, applyHead(html, o));
  sitemap.push({ loc: o.url, pri: "0.8" });
}

/* ==================================================== 3. journal pages === */
const postTpl = rd("blog-post.html");
fs.rmSync(path.join(ROOT, "journal"), { recursive: true, force: true });
for (const p of BLOG_POSTS) {
  const url = X.postUrl(p.slug);
  let html = postTpl.replace(/<body([^>]*)>/, (m, a) => `<body${a.replace(/\sdata-post="[^"]*"/, "")} data-post="${p.slug}">`);
  const img = IMG[p.img];
  html = setAttrs(html, "postHeroImg", { src: img + "-1600.webp", srcset: `${img}-800.webp 800w, ${img}-1600.webp 1600w`,
                                         sizes: "100vw", alt: p.title, fetchpriority: "high" });
  html = setInner(html, "postTitle", esc(p.title));
  html = setInner(html, "postMeta", esc(X.fmtDate(p.date) + " · " + p.readMins + " min read"));
  html = setInner(html, "blogPost", X.postBodyHTML(p));
  html = setInner(html, "postMore", X.morePostsHTML(p));
  html = html.replace(/href="#/g, `href="${url}#`);
  const faq = (p.body.find(b => b[0] === "faq") || [])[1];
  const o = {
    base: "../",
    title: POST_SEO[p.slug] || (p.title.length <= 50 ? `${p.title} | Tajview` : p.title),
    ogTitle: p.title,
    desc: clip(p.excerpt, 160),
    keys: p.keywords,
    url: abs(url),
    image: ogImg(img),
    ogType: "article",
    article: p.date,
    crumbs: [["Home", ""], ["Journal", "blog.html"], [p.title, url]],
    ld: [{
      "@type": "BlogPosting",
      headline: p.title,
      description: plain(p.excerpt),
      image: imgAbs(img),
      url: abs(url),
      mainEntityOfPage: abs(url),
      datePublished: p.date,
      dateModified: p.updated || p.date,
      inLanguage: "en-IN",
      author: { "@type": "Organization", name: SITE.name, url: SITE_URL },
      publisher: { "@id": AGENCY_ID },
      keywords: p.keywords || undefined
    }, faqLd(faq)]
  };
  wr(url, applyHead(html, o));
  sitemap.push({ loc: o.url, pri: "0.7" });
}

/* ========================================================= 4. sitemap ==== */
wr("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(s => `  <url>
    <loc>${s.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${s.pri}</priority>
  </url>`).join("\n")}
</urlset>
`);

console.log(`Built ${rootPages.length} pages, ${TOURS.length} tour pages, ${BLOG_POSTS.length} articles, ${sitemap.length} sitemap URLs.`);
