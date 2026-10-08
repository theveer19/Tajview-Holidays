/* ==========================================================================
   Tajview Holidays — behaviour
   Depends on data.js (SITE, TOURS, COLLECTIONS, CITIES, REVIEWS, PARTNERS)
   ========================================================================== */

const money = n => SITE.currency + n.toLocaleString("en-IN");
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = str => String(str).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ------------------------------------------------- responsive images -- */
/* Every photo exists at 800w and 1600w. This builds the <img> so the browser
   picks the smaller file on a phone and the larger one on a wide screen. */
function photo(base, alt, sizes, opts) {
  opts = opts || {};
  if (/\.(svg|png|jpe?g|webp)$/i.test(base)) {
    return `<img src="${base}" alt="${esc(alt)}" decoding="async"` +
           (opts.eager ? ' fetchpriority="high">' : ' loading="lazy">');
  }
  const eager = opts.eager ? ' fetchpriority="high"' : ' loading="lazy"';
  return `<img src="${base}-800.webp" srcset="${base}-800.webp 800w, ${base}-1600.webp 1600w" ` +
         `sizes="${sizes}" alt="${esc(alt)}" decoding="async"${eager}>`;
}

/* ---------------------------------------------------- image fallbacks -- */
/* If a photo fails to load (moved file, offline host, slow CDN) the slot gets a
   house-pattern placeholder instead of a broken icon. */
document.addEventListener("error", e => {
  const img = e.target;
  if (img.tagName !== "IMG" || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "1";
  img.removeAttribute("srcset");
  img.src = "assets/img/taj-mahal.svg";
}, true);

/* ------------------------------------------------------------- header -- */
function initHeader() {
  const header = qs("#siteHeader");
  const nav = qs("#primaryNav");
  const toggle = qs("#navToggle");

  if (header) {
    const onScroll = () => header.classList.toggle("is-compact", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* One helper so hover, click and keyboard all leave the menu in the same state */
  const setMenu = (item, open) => {
    item.classList.toggle("is-open", open);
    const btn = qs(".sub-toggle", item);
    if (btn) btn.setAttribute("aria-expanded", String(open));
  };
  const closeAllMenus = except => {
    qsa(".has-sub").forEach(p => { if (p !== except) setMenu(p, false); });
  };

  /* Hover only where hovering means something: a real pointer on a wide screen.
     Touch devices report (hover: none) and keep the tap behaviour below. */
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
  let closeTimer;

  qsa(".has-sub").forEach(item => {
    item.addEventListener("mouseenter", () => {
      if (!canHover.matches) return;
      clearTimeout(closeTimer);
      closeAllMenus(item);
      setMenu(item, true);
    });

    /* A short delay on leaving, so a diagonal cursor path to the menu
       does not close it on the way. */
    item.addEventListener("mouseleave", () => {
      if (!canHover.matches) return;
      closeTimer = setTimeout(() => setMenu(item, false), 180);
    });

    /* Keyboard: tabbing into the menu opens it, tabbing out closes it. */
    item.addEventListener("focusin", () => { closeAllMenus(item); setMenu(item, true); });
    item.addEventListener("focusout", e => {
      if (!item.contains(e.relatedTarget)) setMenu(item, false);
    });
  });

  qsa(".sub-toggle").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const parent = btn.closest(".has-sub");
      const wasOpen = parent.classList.contains("is-open");
      closeAllMenus(parent);
      setMenu(parent, !wasOpen);
    });
  });

  /* Clicking a link inside a menu should close it before the page changes */
  qsa(".sub-menu a").forEach(a => {
    a.addEventListener("click", () => closeAllMenus());
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".has-sub")) closeAllMenus();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeAllMenus();
      if (nav && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  /* Mark the current page in the nav */
  const here = location.pathname.split("/").pop() || "index.html";
  qsa("#primaryNav a").forEach(a => {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });
}

/* --------------------------------------------------------- site chrome -- */
function initSiteDetails() {
  qsa("[data-site-phone]").forEach(el => { el.textContent = SITE.phone; el.href = "tel:" + SITE.phoneRaw; });
  qsa("[data-site-email]").forEach(el => { el.textContent = SITE.email; el.href = "mailto:" + SITE.email; });
  qsa("[data-wa]").forEach(el => { el.href = waLink(el.dataset.wa || "Hello Tajview Holidays, I would like to plan a private tour."); });
  qsa("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
  qsa("[data-years-running]").forEach(el => { el.textContent = new Date().getFullYear() - SITE.since; });
}

/* --------------------------------------------------------- tour cards -- */
function tourCard(tour) {
  const book = waLink(`Hello Tajview Holidays, I would like to book the ${tour.title}. Please share availability and the final quotation.`);
  return `
    <article class="tour-card">
      <div class="tour-card__media">
        ${photo(tour.img, tour.title, "(max-width: 700px) 100vw, 360px")}
        <span class="tour-card__days">${esc(tour.durationLabel)}</span>
        <span class="tour-card__route">${esc(tour.route)}</span>
      </div>
      <div class="tour-card__body">
        <h3><a href="tour.html?tour=${tour.slug}">${esc(tour.title)}</a></h3>
        <p>${esc(tour.summary)}</p>
        <div class="tour-card__meta">
          <div class="tour-card__price">
            <b>${money(tour.price)}</b>
            <span>per person, private tour</span>
          </div>
          <div class="tour-card__actions">
            <a class="btn btn--outline btn--sm" href="tour.html?tour=${tour.slug}">Details</a>
            <a class="btn btn--rose btn--sm" href="${book}" target="_blank" rel="noopener">Book</a>
          </div>
        </div>
      </div>
    </article>`;
}

function renderFeaturedTours() {
  const host = qs("#featuredTours");
  if (!host) return;
  const picks = ["taj-mahal-day-tour-from-delhi", "taj-mahal-sunrise-tour-from-delhi", "taj-mahal-tour-by-gatimaan-express",
                 "3-days-golden-triangle-private-tour", "taj-mahal-luxury-car-tour-from-delhi",
                 "13-days-classic-rajasthan-cultural-tour"];
  host.innerHTML = picks.map(s => tourCard(TOURS.find(t => t.slug === s))).join("");
}

function renderGoldenTriangle() {
  const host = qs("#gtTours");
  if (!host) return;
  host.innerHTML = TOURS.filter(t => t.cat === "golden-triangle").map(tourCard).join("");
}

/* -------------------------------------------------- home page sections -- */
function renderCollections() {
  const host = qs("#collections");
  if (!host) return;
  host.innerHTML = COLLECTIONS.map(c => `
    <a class="collection" href="${(COLLECTION_PAGES[c.cat] || {}).file || ("tours.html?cat=" + c.cat)}">
      ${photo(c.img, c.title, "(max-width: 700px) 50vw, 220px")}
      <figcaption>
        <b>${esc(c.title)}</b>
        <span>${esc(c.note)}</span>
      </figcaption>
    </a>`).join("");
}

function cityHref(name) {
  const key = Object.keys(CITY_PAGES).find(k => CITY_PAGES[k].name === name ||
                                               name.toLowerCase().includes(CITY_PAGES[k].name.toLowerCase()));
  return key ? CITY_PAGES[key].file : "tours.html?q=" + encodeURIComponent(name);
}

function renderCities() {
  const host = qs("#cities");
  if (!host) return;
  host.innerHTML = CITIES.map(c => `
    <a class="city" href="${cityHref(c.name)}">
      ${photo(c.img, "Tours in " + c.name, "(max-width: 700px) 50vw, 260px")}
      <span>${esc(c.name)}</span>
    </a>`).join("");
}

function renderReviews() {
  const rail = qs("#reviewRail");
  if (!rail) return;
  rail.innerHTML = REVIEWS.map(r => `
    <blockquote class="review">
      <div class="stars" aria-label="5 out of 5">★★★★★</div>
      <p>${esc(r.text)}</p>
      <footer><b>${esc(r.name)}</b><span>${esc(r.from)}</span></footer>
    </blockquote>`).join("");

  const step = () => rail.firstElementChild ? rail.firstElementChild.getBoundingClientRect().width + 20 : 320;
  const prev = qs("#railPrev"), next = qs("#railNext");
  if (prev) prev.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  if (next) next.addEventListener("click", () => rail.scrollBy({ left:  step(), behavior: "smooth" }));
}

function renderHomeFaq() {
  const host = qs("#homeFaq");
  if (!host) return;
  host.innerHTML = faqBlock(HOME_FAQS);
}

function renderPartners() {
  const host = qs("#partnerTrack");
  if (!host) return;
  const row = PARTNERS.map(p => `<li>${esc(p.name)}</li>`).join("");
  /* Duplicated so the marquee loops without a gap */
  host.innerHTML = `<ul>${row}${row}${row}</ul><ul aria-hidden="true">${row}${row}${row}</ul>`;
}

/* -------------------------------------------- golden triangle selector -- */
function initDurationTabs() {
  const tabs = qs("#durationTabs");
  const panel = qs("#durationPanel");
  if (!tabs || !panel) return;

  /* tabs stay readable: the short routes here, the longer ones in the grid below */
  const gt = TOURS.filter(t => t.cat === "golden-triangle" && t.days <= 7);

  const paint = tour => {
    if (!tour) {
      panel.innerHTML = `
        <h3>Build it around your own dates</h3>
        <p>Tell us how many days you have, the hotel style you like and what you would rather skip. We send back a day-by-day plan and a fixed quotation, usually within a few hours.</p>
        <a class="btn btn--gold" data-wa="Hello Tajview Holidays, I would like a custom Golden Triangle itinerary." href="#">Ask for a custom plan</a>`;
      initSiteDetails();
      return;
    }
    panel.innerHTML = `
      <h3>${esc(tour.title)}</h3>
      <p>${esc(tour.summary)}</p>
      <div class="itin-facts">
        <div><b>${tour.nights} nights</b><span>Handpicked hotels with breakfast</span></div>
        <div><b>Private car</b><span>Chauffeur for the whole route</span></div>
        <div><b>${esc(tour.route)}</b><span>Pickup and drop in Delhi</span></div>
      </div>
      <ol class="day-list">
        ${tour.itinerary.map(d => `<li><span class="day-no">${esc(d.time.replace(/^Day /, ""))}</span><span><b>${esc(d.title)}</b><br>${esc(d.text)}</span></li>`).join("")}
      </ol>
      <a class="btn btn--gold" href="tour.html?tour=${tour.slug}">See the full itinerary</a>`;
  };

  tabs.innerHTML = gt.map((t, i) =>
    `<button role="tab" aria-selected="${i === 0}" data-slug="${t.slug}">${esc(t.durationLabel)}</button>`
  ).join("") + `<button role="tab" aria-selected="false" data-slug="custom">Custom</button>`;

  tabs.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    qsa("button", tabs).forEach(b => b.setAttribute("aria-selected", String(b === btn)));
    paint(TOURS.find(t => t.slug === btn.dataset.slug));
  });

  paint(gt[0]);
}

/* ------------------------------------------------------------ counters -- */
function initCounters() {
  const nums = qsa("[data-count]");
  if (!nums.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const run = el => {
    const target = Number(el.dataset.count);
    if (reduce) { el.textContent = target + (el.dataset.suffix || ""); return; }
    const started = performance.now();
    const tick = now => {
      const p = Math.min((now - started) / 1100, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
    });
  }, { threshold: .4 });

  nums.forEach(n => io.observe(n));
}

/* ------------------------------------------------------- tours listing -- */
function initToursPage() {
  const grid = qs("#tourGrid");
  if (!grid) return;

  const catSel = qs("#filterCat");
  const durSel = qs("#filterDuration");
  const sortSel = qs("#filterSort");
  const search = qs("#filterSearch");
  const count = qs("#filterCount");

  const cats = [...new Set(TOURS.map(t => t.cat))];
  catSel.innerHTML = `<option value="">All collections</option>` +
    cats.map(c => `<option value="${c}">${esc(TOURS.find(t => t.cat === c).catLabel)}</option>`).join("");

  const params = new URLSearchParams(location.search);
  if (params.get("cat")) catSel.value = params.get("cat");
  if (params.get("q")) search.value = params.get("q");

  const apply = () => {
    const q = search.value.trim().toLowerCase();
    let list = TOURS.filter(t => {
      if (catSel.value && t.cat !== catSel.value) return false;
      if (durSel.value === "short" && t.days > 1) return false;
      if (durSel.value === "mid" && (t.days < 2 || t.days > 4)) return false;
      if (durSel.value === "long" && t.days < 5) return false;
      if (q && !(t.title + " " + t.route + " " + t.summary + " " + t.catLabel).toLowerCase().includes(q)) return false;
      return true;
    });

    if (sortSel.value === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortSel.value === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortSel.value === "days") list.sort((a, b) => a.days - b.days);

    count.textContent = list.length === 1 ? "1 tour" : list.length + " tours";
    grid.innerHTML = list.length
      ? list.map(tourCard).join("")
      : `<div class="empty-state"><p>No tour matches those filters yet. Clear one of them, or tell us what you had in mind and we will build it.</p>
         <a class="btn btn--gold" data-wa="Hello Tajview Holidays, I could not find the tour I wanted on the website. Can you build a custom itinerary?" href="#">Ask for a custom tour</a></div>`;
    initSiteDetails();
  };

  [catSel, durSel, sortSel].forEach(el => el.addEventListener("change", apply));
  search.addEventListener("input", apply);
  apply();
}


/* ------------------------------------------ collection and city pages -- */
function termsBlock() {
  return `
    <div class="terms">
      <div>
        <h3>Included in every package</h3>
        <ul class="tick-list">${PACKAGE_TERMS.included.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>Not included</h3>
        <ul class="tick-list tick-list--no">${PACKAGE_TERMS.excluded.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>
    </div>`;
}

function faqBlock(faqs) {
  return faqs.map(([q, a]) => `
    <details class="accordion">
      <summary>${esc(q)}</summary>
      <div class="acc-body acc-body--flush">${esc(a)}</div>
    </details>`).join("");
}

function initCollectionPage() {
  const key = document.body.dataset.collection;
  if (!key || !COLLECTION_PAGES[key]) return;
  const c = COLLECTION_PAGES[key];
  const tours = TOURS.filter(t => t.cat === key);

  qs("#pageLead").textContent = c.lead;
  qs("#pageIntro").textContent = c.intro;
  qs("#collectionNote").textContent = c.note;
  qs("#collectionTours").innerHTML = tours.map(tourCard).join("");
  qs("#collectionCount").textContent = tours.length === 1 ? "1 tour" : tours.length + " tours";
  qs("#collectionTerms").innerHTML = termsBlock();
  qs("#collectionFaq").innerHTML = faqBlock(c.faqs);
  initSiteDetails();
}

function initDurationPage() {
  const key = document.body.dataset.duration;
  if (!key || !DURATION_PAGES[key]) return;
  const d = DURATION_PAGES[key];
  const tours = TOURS.filter(t => t.days >= d.min && t.days <= d.max).sort((a, b) => a.days - b.days);

  qs("#pageLead").textContent = d.lead;
  qs("#pageIntro").textContent = d.intro;
  qs("#durationNote").textContent = d.note;
  qs("#durationTours").innerHTML = tours.map(tourCard).join("");
  qs("#durationCount").textContent = tours.length === 1 ? "1 tour" : tours.length + " tours";
  qs("#durationTerms").innerHTML = termsBlock();
  initSiteDetails();
}

function initCityPage() {
  const key = document.body.dataset.city;
  if (!key || !CITY_PAGES[key]) return;
  const c = CITY_PAGES[key];
  const tours = TOURS.filter(t =>
    c.match.some(m => (t.route + " " + t.title + " " + t.summary).toLowerCase().includes(m.toLowerCase())));

  qs("#pageLead").textContent = c.lead;
  qs("#pageIntro").textContent = c.intro;
  qs("#cityWelcome").innerHTML = c.welcome.map(para => `<p>${esc(para)}</p>`).join("");
  qs("#cityTours").innerHTML = tours.length
    ? tours.map(tourCard).join("")
    : `<div class="empty-state"><p>No set tour covers ${esc(c.name)} on its own yet — we build these to order.</p>
       <a class="btn btn--gold" href="contact.html">Ask for a ${esc(c.name)} itinerary</a></div>`;
  qs("#cityCount").textContent = tours.length === 1 ? "1 tour includes " + c.name : tours.length + " tours include " + c.name;
  qs("#cityFaq").innerHTML = faqBlock(c.faqs);
  const hero = qs("#cityHeroImg");
  if (hero && IMG[c.img]) {
    hero.src = /\.(svg|png|jpe?g|webp)$/i.test(IMG[c.img]) ? IMG[c.img] : IMG[c.img] + "-1600.webp";
  }
  initSiteDetails();
}

/* -------------------------------------------------------- tour detail -- */
function initTourDetail() {
  const root = qs("#tourDetail");
  if (!root) return;

  const slug = new URLSearchParams(location.search).get("tour");
  const tour = TOURS.find(t => t.slug === slug);

  if (!tour) {
    root.innerHTML = `<div class="empty-state"><h2>We could not find that tour</h2>
      <p>It may have been renamed. Browse the full collection instead.</p>
      <a class="btn btn--gold" href="tours.html">See all tours</a></div>`;
    return;
  }

  document.title = tour.title + " — Tajview Holidays";
  const hero = qs("#tourHero");
  if (hero) {
    const heroImg = qs("#tourHeroImg");
    const isFile = /\.(svg|png|jpe?g|webp)$/i.test(tour.img);
    heroImg.src = isFile ? tour.img : tour.img + "-1600.webp";
    if (!isFile) {
      heroImg.srcset = `${tour.img}-800.webp 800w, ${tour.img}-1600.webp 1600w`;
      heroImg.sizes = "100vw";
    }
    heroImg.alt = tour.title;
    qs("#tourHeroTitle").textContent = tour.title;
    qs("#tourHeroRoute").textContent = tour.route + " · " + tour.durationLabel;
    qs("#tourCrumb").textContent = tour.catLabel;
    qs("#tourCrumb").href = "tours.html?cat=" + tour.cat;
  }

  const book = waLink(`Hello Tajview Holidays, I would like to book the ${tour.title} (${tour.durationLabel}). Please share availability and the final quotation.`);

  root.innerHTML = `
    <div class="detail-layout">
      <div class="detail-body">
        <div class="chip-row">
          <span class="chip">${esc(tour.durationLabel)}</span>
          <span class="chip">${esc(tour.catLabel)}</span>
          <span class="chip">Private tour</span>
          <span class="chip">Licensed guide</span>
        </div>

        <p style="font-size:var(--fs-md)">${esc(tour.summary)}</p>

        <h2>At a glance</h2>
        <dl class="facts">
          ${(tour.facts || [
              ["Duration", tour.durationLabel],
              ["Route", tour.route],
              ["Tour type", "Private — your party only"],
              ["Guide", "Licensed, English speaking"]
            ]).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>

        <h2>What makes this one worth it</h2>
        <ul class="tick-list">
          ${tour.highlights.map(h => `<li>${esc(h)}</li>`).join("")}
        </ul>

        <h2>Your day by day</h2>
        <ol class="timeline">
          ${tour.itinerary.map(d => `
            <li class="timeline__step">
              <span class="timeline__time">${esc(d.time)}</span>
              <h3 class="timeline__title">${esc(d.title)}</h3>
              <p class="timeline__text">${esc(d.text)}</p>
            </li>`).join("")}
        </ol>

        <h2>What the price covers</h2>
        <ul class="tick-list">${tour.includes.map(i => `<li>${esc(i)}</li>`).join("")}</ul>

        <h2>What it does not cover</h2>
        <ul class="tick-list tick-list--no">${tour.excludes.map(i => `<li>${esc(i)}</li>`).join("")}</ul>

        ${tour.faqs ? `
          <h2>Questions people ask</h2>
          ${tour.faqs.map(([q, a]) => `
            <details class="accordion">
              <summary>${esc(q)}</summary>
              <div class="acc-body acc-body--flush">${esc(a)}</div>
            </details>`).join("")}` : ""}

        <h2>On the route</h2>
        <div class="gallery-grid">
          ${tour.gallery.map(k => photo(IMG[k], tour.title, "(max-width: 700px) 100vw, 300px")).join("")}
        </div>
      </div>

      <aside class="booking-card">
        <div class="price">${money(tour.price)}</div>
        <p class="price-note">per person, based on two travellers sharing</p>
        <ul>
          <li>Duration <span>${esc(tour.durationLabel)}</span></li>
          <li>Route <span>${esc(tour.route)}</span></li>
          <li>Group <span>Private, your party only</span></li>
          <li>Guide <span>Licensed, English speaking</span></li>
        </ul>
        <div class="booking-actions">
          <a class="btn btn--rose btn--block" href="${book}" target="_blank" rel="noopener">Book on WhatsApp</a>
          <a class="btn btn--outline btn--block" href="contact.html?tour=${tour.slug}">Request a quotation</a>
          <a class="btn btn--outline btn--block" data-site-phone href="#"></a>
        </div>
        <p class="form-note">Prices move with the season and your hotel choice. We confirm a fixed figure before you pay anything.</p>
      </aside>
    </div>`;

  initSiteDetails();
}


/* ---------------------------------------------------------------- blog -- */
function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB",
    { day: "numeric", month: "long", year: "numeric" });
}

function initBlogList() {
  const host = qs("#blogList");
  if (!host) return;
  host.innerHTML = BLOG_POSTS.map(post => `
    <article class="post-card">
      <a class="post-card__media" href="blog-post.html?post=${post.slug}">
        ${photo(IMG[post.img], post.title, "(max-width: 700px) 100vw, 380px")}
      </a>
      <div class="post-card__body">
        <p class="post-meta">${fmtDate(post.date)} · ${post.readMins} min read</p>
        <h3><a href="blog-post.html?post=${post.slug}">${esc(post.title)}</a></h3>
        <p>${esc(post.excerpt)}</p>
        <a class="link-more" href="blog-post.html?post=${post.slug}">Read it</a>
      </div>
    </article>`).join("");
}

function initBlogPost() {
  const root = qs("#blogPost");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("post");
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    root.innerHTML = `<div class="empty-state"><h2>We could not find that article</h2>
      <a class="btn btn--gold" href="blog.html">Back to the blog</a></div>`;
    return;
  }

  document.title = post.title + " — Tajview Holidays";
  qs("#postTitle").textContent = post.title;
  qs("#postMeta").textContent = fmtDate(post.date) + " · " + post.readMins + " min read";
  const hero = qs("#postHeroImg");
  if (hero) {
    const src = IMG[post.img];
    hero.src = /\.(svg|png|jpe?g|webp)$/i.test(src) ? src : src + "-1600.webp";
    hero.alt = post.title;
  }

  root.innerHTML = post.body.map(([tag, val]) => {
    if (tag === "ul") return `<ul class="tick-list">${val.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
    if (tag === "h2") return `<h2>${esc(val)}</h2>`;
    return `<p>${esc(val)}</p>`;
  }).join("");

  const others = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);
  qs("#postMore").innerHTML = others.map(p => `
    <article class="post-card">
      <a class="post-card__media" href="blog-post.html?post=${p.slug}">
        ${photo(IMG[p.img], p.title, "(max-width: 700px) 100vw, 300px")}
      </a>
      <div class="post-card__body">
        <p class="post-meta">${fmtDate(p.date)}</p>
        <h3><a href="blog-post.html?post=${p.slug}">${esc(p.title)}</a></h3>
      </div>
    </article>`).join("");
}

/* --------------------------------------------------------------- fleet -- */
function initFleet() {
  const host = qs("#fleetGrid");
  if (!host) return;
  host.innerHTML = FLEET.map(v => `
    <article class="fleet-card">
      <h3>${esc(v.name)}</h3>
      <p class="fleet-spec">${esc(v.seats)} · ${esc(v.bags)}</p>
      <p>${esc(v.best)}</p>
      <dl class="fleet-rates">
        <div><dt>Per day, local</dt><dd>${money(v.perDay)}</dd></div>
        <div><dt>Per km, outstation</dt><dd>${money(v.perKm)}</dd></div>
      </dl>
      <a class="btn btn--outline btn--sm btn--block" data-wa="Hello Tajview Holidays, I would like to hire a ${v.name}. Please share availability and rates." href="#" target="_blank" rel="noopener">Ask about this vehicle</a>
    </article>`).join("");
  initSiteDetails();
}

/* -------------------------------------------------------------- forms -- */
function initForms() {
  qsa("form[data-enquiry]").forEach(form => {
    /* Fill the tour dropdown, if the form has one */
    const tourSel = qs("[name=tour]", form);
    if (tourSel) {
      tourSel.innerHTML = `<option value="">Not sure yet — suggest something</option>` +
        TOURS.map(t => `<option value="${esc(t.title)}">${esc(t.title)}</option>`).join("");
      const pre = new URLSearchParams(location.search).get("tour");
      if (pre) {
        const match = TOURS.find(t => t.slug === pre);
        if (match) tourSel.value = match.title;
      }
    }

    form.addEventListener("submit", e => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form).entries());
      const lines = [
        "New tour enquiry from the website",
        "",
        "Name: " + (d.name || "-"),
        "Email: " + (d.email || "-"),
        "Phone: " + (d.phone || "-"),
        "Tour: " + (d.tour || "Open to suggestions"),
        "Travel date: " + (d.date || "-"),
        "Travellers: " + (d.adults || 0) + " adults, " + (d.children || 0) + " children",
        "",
        "Notes: " + (d.message || "-")
      ];
      const status = qs(".form-status", form);
      if (status) {
        status.textContent = "Opening WhatsApp with your details filled in. If nothing happens, write to " + SITE.email + ".";
        status.classList.add("is-visible");
      }
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      form.reset();
    });
  });
}


/* ============================================================== motion == */
/* One observer for the whole page. Elements rise into place once and are then
   released, so nothing keeps running as you scroll. */
function initReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const groups = [
    [".section-head", 0],
    [".tour-card", 60], [".collection", 55], [".city", 55],
    [".why", 60], [".post-card", 60], [".fleet-card", 60],
    [".about-media", 0], [".itin-media", 0], [".form-card", 0],
    [".terms", 0], [".facts", 0], [".assurance li", 45], [".trust li", 45]
  ];

  groups.forEach(([sel, stagger]) => {
    const seen = new Map();
    qsa(sel).forEach(el => {
      if (el.closest(".hero")) return;          /* the hero has its own entrance */
      el.setAttribute("data-reveal", "");
      if (stagger) {
        /* index within the element's own grid, so each row starts again at 0 */
        const parent = el.parentElement;
        const n = seen.get(parent) || 0;
        seen.set(parent, n + 1);
        el.style.setProperty("--i", Math.min(n, 5));
      }
    });
  });

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  qsa("[data-reveal]").forEach(el => io.observe(el));
}

/* The hero photograph drifts at a quarter of the scroll speed, and the words
   fade as they leave. Both stop as soon as the hero is off screen. */
function initHeroParallax() {
  const hero = qs(".hero");
  const bg = qs(".hero-bg");
  const copy = qs(".hero-copy");
  if (!hero || !bg) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const frame = () => {
    const y = window.scrollY;
    const h = hero.offsetHeight;
    if (y < h) {
      /* `translate` is its own property, so it does not fight the scale
         animation running on the same element. */
      bg.style.translate = "0 " + (y * 0.25).toFixed(1) + "px";
      if (copy) {
        copy.style.opacity = String(Math.max(0, 1 - (y / (h * 0.65))));
        copy.style.translate = "0 " + (y * 0.08).toFixed(1) + "px";
      }
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }, { passive: true });
  frame();
}

/* A hairline under the header showing how far through the page you are. */
function initScrollProgress() {
  const bar = qs("#scrollProgress");
  if (!bar) return;
  let ticking = false;
  const frame = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }, { passive: true });
  window.addEventListener("resize", frame, { passive: true });
  frame();
}

/* In-page links glide rather than jump, and land below the sticky header. */
function initSmoothAnchors() {
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const header = qs("#siteHeader");
      const offset = (header ? header.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  });
}

/* --------------------------------------------------------------- boot -- */
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initSiteDetails();
  renderCollections();
  renderFeaturedTours();
  renderGoldenTriangle();
  renderCities();
  renderReviews();
  renderPartners();
  renderHomeFaq();
  initDurationTabs();
  initCounters();
  initToursPage();
  initCollectionPage();
  initDurationPage();
  initCityPage();
  initTourDetail();
  initBlogList();
  initBlogPost();
  initFleet();
  initPayments();
  initReviewLinks();
  initForms();
  initScrollProgress();
  initHeroParallax();
  initSmoothAnchors();
  /* reveals last: every grid above has rendered by now */
  initReveals();
});
