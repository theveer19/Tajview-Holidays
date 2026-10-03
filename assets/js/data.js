/* ==========================================================================
   Tajview Holidays — site content
   Everything editable lives here. Add a tour by copying one object in TOURS.
   ========================================================================== */

/* Photographs, served as WebP in two widths (800w for cards, 1600w for banners).
   Each entry is a BASE path — main.js appends "-800.webp" / "-1600.webp" and
   builds a srcset, so the browser downloads only the size it needs.

   The vector scenes in assets/img/ are kept as a fallback: if a photo ever
   fails to load, the illustration takes its place instead of a broken icon. */
const IMG = {
  taj:           "assets/img/photos/taj-pool",
  tajPool:       "assets/img/photos/taj-pool",
  tajSunrise:    "assets/img/photos/taj-sunrise",
  tajGarden:     "assets/img/photos/taj-garden",
  sikandra:      "assets/img/photos/sikandra",
  fatehpurSikri: "assets/img/photos/fatehpur-sikri",
  mehtabBagh:    "assets/img/photos/mehtab-bagh",
  indiaGate:     "assets/img/photos/india-gate",
  humayun:       "assets/img/photos/humayun-tomb",
  qutub:         "assets/img/photos/qutub-minar",
  redFort:       "assets/img/photos/red-fort",
  hawaMahal:     "assets/img/photos/hawa-mahal",
  amber:         "assets/img/photos/amber-fort",
  jalMahal:      "assets/img/photos/jal-mahal",
  mehrangarh:    "assets/img/photos/mehrangarh",
  blueCity:      "assets/img/photos/blue-city",
  udaipur:       "assets/img/photos/udaipur",
  jaisalmer:     "assets/img/photos/jaisalmer",
  haveli:        "assets/img/photos/haveli",
  chittorgarh:   "assets/img/photos/chittorgarh",
  marbleInlay:   "assets/img/photos/marble-inlay",
  mughalDetail:  "assets/img/photos/mughal-detail",
  office:        "assets/img/photos/office",

  agraFort:      "assets/img/photos/agra-fort-gate",
  agraFortPalace:"assets/img/photos/agra-fort-palace",
  jaliScreen:    "assets/img/photos/jali-screen",
  babyTaj:       "assets/img/photos/baby-taj",
  babyTajGarden: "assets/img/photos/baby-taj-garden",
  fatehpurRuins: "assets/img/photos/fatehpur-ruins",
  lotusTemple:   "assets/img/photos/lotus-temple",
  lotusNight:    "assets/img/photos/lotus-night",
  craftsShop:    "assets/img/photos/crafts-shop",
  umaidBhawan:   "assets/img/photos/umaid-bhawan",
  jaswantThada:  "assets/img/photos/jaswant-thada",
  udaipurLake:   "assets/img/photos/udaipur-lake",
  jaisalmerCity: "assets/img/photos/jaisalmer-city",
  hawaMahalClose:"assets/img/photos/hawa-mahal-close",
  privateCar:    "assets/img/photos/private-car",

  /* No photographs of these destinations yet, so they use the vector scenes.
     Drop real photos into assets/img/photos/ and change these four lines. */
  varanasi:      "assets/img/varanasi.svg",
  amritsar:      "assets/img/amritsar.svg",
  kerala:        "assets/img/kerala.svg",
  ranthambore:   "assets/img/ranthambore.svg"
};

const SITE = {
  name: "Tajview Holidays",
  tagline: "Premium private tours",
  phone: "+91 84395 55163",
  phoneRaw: "+918439555163",
  whatsapp: "918439555163",
  email: "tajviewholidays@gmail.com",
  city: "Agra, Uttar Pradesh, India",
  since: 2000,
  currency: "\u20B9",

  /* Paste your real profile URLs here and the review buttons appear on the
     home page. Leave a line empty and that button stays hidden. */
  googleReviewUrl: "",
  tripadvisorUrl: ""
};

/* How guests can pay. Edit freely — this drives the contact page. */
const PAYMENT = {
  methods: [
    ["Bank transfer", "NEFT, IMPS or RTGS to our Indian account. Details come with your invoice."],
    ["UPI", "For guests with an Indian bank account. Scan and pay, no fee."],
    ["Cash on arrival", "Indian rupees, paid to your guide or at the office. Most day tours are settled this way."],
    ["Card", "Visa and Mastercard accepted at the Agra office."],
    ["International transfer", "SWIFT transfer for guests paying from abroad. The bank's fee is charged by your bank, not by us."]
  ],
  note: "Day tours are usually paid in full on the day. Multi-day tours take a deposit at confirmation and the balance at or before the start. We tell you the split in writing before you pay anything, and we never ask for the full cost of a long tour up front."
};

/* Builds a prefilled WhatsApp link so every enquiry arrives with context. */
function waLink(message) {
  return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(message);
}

const PARTNERS = [
  { name: "Viator" },
  { name: "Tripadvisor" },
  { name: "GetYourGuide" },
  { name: "Expedia" },
  { name: "Lonely Planet" }
];

const COLLECTIONS = [
  { title: "Taj Mahal tours",    note: "Sunrise, day and overnight", img: IMG.taj,        cat: "taj-mahal" },
  { title: "Same day tours",     note: "Back to Delhi by night",     img: IMG.sikandra,   cat: "same-day" },
  { title: "Golden Triangle",    note: "Delhi, Agra and Jaipur",     img: IMG.amber,      cat: "golden-triangle" },
  { title: "New Delhi tours",    note: "Old city to New Delhi",      img: IMG.indiaGate,  cat: "delhi" },
  { title: "Jaipur tours",       note: "Forts, palaces, bazaars",    img: IMG.hawaMahal,  cat: "jaipur" },
  { title: "Rajasthan journeys", note: "Desert cities and havelis",  img: IMG.mehrangarh, cat: "rajasthan" }
];

const CITIES = [
  { name: "Agra",      img: IMG.tajGarden },
  { name: "New Delhi", img: IMG.humayun },
  { name: "Jaipur",    img: IMG.hawaMahal },
  { name: "Jodhpur",   img: IMG.blueCity },
  { name: "Udaipur",   img: IMG.udaipur },
  { name: "Jaisalmer", img: IMG.jaisalmer }
];

const HOME_FAQS = [
  ["Are your tours really private?", "Yes, every one. The car carries your party and nobody else, and the departure time is whatever you choose. We do not run shared coaches at all."],
  ["Do I pay a deposit to get an itinerary?", "No. You get a written day-by-day plan with named hotels and a fixed price before any money changes hands. If it is not right, we rework it."],
  ["Will the driver stop at shops for commission?", "No. That practice is why most people distrust Indian tour operators, and we do not take a cut from any shop. If you want to shop, say so and we take you somewhere good."],
  ["What is the best time of year to visit?", "October to March is the comfortable season. December and January bring morning fog around Delhi and Agra. April to June is hot, which makes sunrise starts essential rather than optional."],
  ["Is the Taj Mahal closed on any day?", "Yes, every Friday. We plan itineraries around it, and if your dates are fixed we will tell you before you book rather than after."],
  ["Can you handle dietary needs and mobility limits?", "Usually, with notice. Tell us at the enquiry stage — most things can be arranged in advance and very few can be fixed on the day."],
  ["What happens if a flight is delayed?", "Tell us and we reshape the day. The driver and guide are ours, not a subcontracted agency, so changing the plan is a phone call rather than a renegotiation."]
];

const REVIEWS = [
  { name: "Sarah Mitchell",  from: "United Kingdom", text: "A calm, well-run day in Agra. Our guide read the pace we wanted and never rushed us at the Taj Mahal." },
  { name: "Michael Thompson",from: "United States",  text: "The sunrise visit was the highlight of our India trip. Pickup was early, punctual and the car was spotless." },
  { name: "Laura Anderson",  from: "Australia",      text: "Taj Mahal, Agra Fort and Hawa Mahal in one smooth run. The driver knew exactly where to park and wait." },
  { name: "Jessica Morgan",  from: "Canada",         text: "Jaipur was the surprise of the trip. Hawa Mahal at opening time, almost no crowd, and a guide who kept it interesting." },
  { name: "Robert Hughes",   from: "Ireland",        text: "Quotation matched the final bill to the rupee. Comfortable car, friendly guide, nothing left to chase." }
];



/* ------------------------------------------------- browse by trip length -- */
const DURATION_PAGES = {
  "1-2": {
    file: "1-2-days-tour-packages.html", title: "1 to 2 days tour packages", min: 1, max: 2,
    lead: "Short tours — 1 to 2 days",
    intro: "Day tours and overnight trips from Delhi, Agra and Jaipur. Built for layovers, business trips with a spare day, and anyone adding India to a longer route.",
    note: "A single day is enough for the Taj Mahal and Agra Fort if you leave Delhi early. Two days lets you add a second city without rushing either."
  },
  "3-5": {
    file: "3-5-days-tour-packages.html", title: "3 to 5 days tour packages", min: 3, max: 5,
    lead: "Short breaks — 3 to 5 days",
    intro: "The Golden Triangle at its most popular lengths. Delhi, Agra and Jaipur with enough time for the monuments, the markets and a meal that is not eaten in the car.",
    note: "Three days covers the headline sights. Five is where the trip stops feeling like a checklist."
  },
  "6-10": {
    file: "6-10-days-tour-packages.html", title: "6 to 10 days tour packages", min: 6, max: 10,
    lead: "Full journeys — 6 to 10 days",
    intro: "The Golden Triangle with an extension — Ranthambore for tigers, Udaipur for lakes, Pushkar and Jodhpur for the desert edge. Two nights in most cities.",
    note: "Around a week is where India stops being a tour and starts being a trip. Each city gets a full day instead of a morning."
  },
  "11-15": {
    file: "11-15-days-tour-packages.html", title: "11 to 15 days tour packages", min: 11, max: 15,
    lead: "Grand tours — 11 to 15 days",
    intro: "The full Rajasthan circuit. Desert cities, tiger country, lake palaces and the Taj Mahal, with heritage hotels and a car that stays with you throughout.",
    note: "Twelve to thirteen days is what the complete circuit needs. Shorter versions work by dropping cities, not by driving faster."
  }
};

/* ---------------------------------------- package terms and landing pages -- */
/* Shown on every collection page, so the promise is identical everywhere. */
const PACKAGE_TERMS = {
  included: ["Private AC car, or train tickets where the tour uses one", "Hotel pickup and drop",
             "Monument tickets booked ahead", "Ministry-approved local guide", "Guided monument tour",
             "Bottled water", "Free cancellation up to 24 hours before travel"],
  excluded: ["Tips and gratuities", "Personal expenses"]
};

const COLLECTION_PAGES = {
  "taj-mahal": {
    file: "taj-mahal-tour-packages.html",
    title: "Taj Mahal tour packages",
    lead: "Taj Mahal private tour packages",
    intro: "Taj Mahal tours from Delhi, run by a team based in Agra. Same-day tours by car, Gatimaan Express train tours, sunrise visits, private guided days and overnight stays — one for every kind of schedule.",
    note: "A day tour from Delhi is the practical choice when time is short. The drive on the Yamuna Expressway takes three to four hours each way, which leaves enough of the day for the Taj Mahal and Agra Fort before the return.",
    faqs: [
      ["What is included in a Taj Mahal tour package?", "Private air-conditioned transport, an English-speaking guide, hotel pickup and the sightseeing itself. Monument tickets, meals and hotels depend on the package and are listed before you book."],
      ["Can I customize the itinerary?", "Yes. Travel dates, interests, pace, hotel location and any special requirements all shape the plan."],
      ["When is the best time to visit the Taj Mahal?", "October to March is cooler and more comfortable. Early morning visits are popular for thinner crowds and softer light."],
      ["Do you run same-day tours from Delhi?", "Yes, by private AC car and by Gatimaan Express train, both with pickup and return arranged."],
      ["How do I book?", "Send your date, number of guests and preferred tour. We confirm availability, inclusions and the total price before you pay anything."]
    ]
  },
  "same-day": {
    file: "same-day-tour-packages.html",
    title: "Same day tour packages",
    lead: "Same day private tour packages",
    intro: "For travellers who want to see more in less time. Taj Mahal tours from Delhi, Old and New Delhi sightseeing, and Jaipur day tours — private cars, local guides, flexible timings.",
    note: "Every tour here starts and finishes on the same day, so you keep your hotel room and your onward plans.",
    faqs: [
      ["Which same-day tours do you run from Delhi?", "The Taj Mahal day tour, the Taj Mahal sunrise tour, the Gatimaan Express train tour and the Jaipur day tour."],
      ["Can I see the Taj Mahal and be back in Delhi the same day?", "Yes. The day tour covers the Taj Mahal, Agra Fort and the other highlights, and returns to Delhi the same evening."],
      ["Are same-day tours private?", "Yes — a private AC car, a professional driver and a local guide. You are never added to a group."],
      ["Is a luxury car available?", "Yes. The Taj Mahal luxury car tour runs the same route with a premium vehicle and a 5-star lunch."],
      ["How long does a same-day tour take?", "Usually the full day, 12 to 14 hours door to door depending on the destination and traffic."]
    ]
  },
  "golden-triangle": {
    file: "golden-triangle-tour-packages.html",
    title: "Golden Triangle tour packages",
    lead: "Golden Triangle private tour packages",
    intro: "Delhi, Agra and Jaipur, from a three-day run to a ten-day route that adds Ranthambore, Pushkar, Jodhpur or Udaipur. Private car, licensed guides in each city, hotels chosen with you.",
    note: "Three days covers the headline sights. Five to seven is where the route stops feeling rushed — each city gets a full day rather than a morning.",
    faqs: [
      ["Which cities does the Golden Triangle cover?", "Delhi, Agra and Jaipur — Mughal monuments, the Taj Mahal and Rajasthan's royal architecture in one loop."],
      ["How many days are ideal?", "Five to seven days lets you see all three cities without spending the trip in the car."],
      ["Can the tour be private?", "Every Golden Triangle tour here is private: your own AC car, driver and local guides."],
      ["Is the Taj Mahal included?", "Yes, on every version of the route, along with Agra Fort."],
      ["Can I change the itinerary?", "Yes. Dates, number of days, hotel category and which attractions to keep or drop are all adjustable."],
      ["What is the best way to travel between the three cities?", "A private car. It gives you the transfers plus the freedom to stop at Fatehpur Sikri or Chand Baori on the way."]
    ]
  },
  "delhi": {
    file: "new-delhi-tour-packages.html",
    title: "New Delhi tour packages",
    lead: "Old and New Delhi private tour packages",
    intro: "Delhi's historic landmarks, markets and monuments with a private car, a personal guide and a flexible itinerary — from the Red Fort and Jama Masjid in the old city to India Gate and Rashtrapati Bhavan in the new.",
    note: "Old Delhi works best in the morning, before the lanes fill. New Delhi's monuments are better in the afternoon light.",
    faqs: [
      ["What is included in a New Delhi tour package?", "Private air-conditioned transport, an English-speaking guide, hotel pickup and the sightseeing. Monument tickets and meals depend on the package and are listed before you book."],
      ["Do you run full-day city tours?", "Yes, both full-day and half-day private tours by AC car, with hotel pickup and drop."],
      ["When is the best time to visit Delhi?", "October to March. Early-morning starts are better for the major monuments."],
      ["Can I customize the itinerary?", "Yes — around your dates, interests, pace and hotel location."]
    ]
  },
  "jaipur": {
    file: "jaipur-tour-packages.html",
    title: "Jaipur tour packages",
    lead: "Jaipur private tour packages",
    intro: "Jaipur's forts, palaces and bazaars — as a day tour from Delhi, an overnight stay, or part of a longer Rajasthan route. Private car, licensed guide, timings that avoid the coach crowds.",
    note: "Amber Fort at opening time and Hawa Mahal at first light are the two timings that change how Jaipur feels.",
    faqs: [
      ["Can I visit Jaipur from Delhi in one day?", "Yes. The day tour covers the main attractions and returns to Delhi the same evening."],
      ["How long is the drive from Delhi to Jaipur?", "Four to five hours each way, depending on traffic."],
      ["What will I see on a Jaipur day tour?", "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and Jal Mahal, depending on how the day is arranged."],
      ["Is the tour private?", "Yes — a private AC car, a professional driver and a local guide."],
      ["Can I cancel the day before?", "Yes, cancellation is free up to 24 hours before the tour."]
    ]
  },
  "varanasi": {
    file: "varanasi-tour-packages.html",
    title: "Varanasi tour packages",
    lead: "Varanasi private tour packages",
    intro: "The oldest living city in India, on the Ganga. Sunrise on the river, the evening aarti at Dashashwamedh, and Sarnath where the Buddha first taught — with a guide who can explain what you are watching.",
    note: "Varanasi works as a two-day stop or as an extension to the Golden Triangle. Either way the river at dawn is the reason to go.",
    faqs: [
      ["How do we get to Varanasi?", "Flights from Delhi take about ninety minutes. Overnight trains run too, and we book either."],
      ["Is the evening aarti worth it?", "Yes, and it needs planning. We take a boat so you watch from the water rather than a packed ghat."],
      ["Is photography allowed at the cremation ghats?", "No, and your guide will say so clearly. Manikarnika is a working cremation ground, not a sight."],
      ["How many days are enough?", "Two days: one for the river at dawn and the old city, one for Sarnath and the evening aarti."]
    ]
  },
  "south-india": {
    file: "south-india-tour-packages.html",
    title: "South India tour packages",
    lead: "South India private tour packages",
    intro: "A different India entirely — Dravidian temple towns, Kerala's backwaters, tea country in the hills and a coastline that changes what people expect from the country.",
    note: "South India is slower and greener than the north. It suits travellers on a second visit, and anyone who finds the Golden Triangle too busy.",
    faqs: [
      ["How is South India different from the north?", "Greener, slower, hotter and more humid. Different food, different architecture, different languages. Many people who have done the Golden Triangle come back for this."],
      ["When should we go?", "October to March. The monsoon arrives in June and the hills stay comfortable through most of the year."],
      ["Can we combine north and south?", "Yes, with a domestic flight in the middle. Allow at least two weeks for both to be worth doing."],
      ["Is a houseboat night worth it?", "For most guests, yes. A night on the backwaters is quiet in a way very little else in India is."]
    ]
  },
  "rajasthan": {
    file: "rajasthan-tour-packages.html",
    title: "Rajasthan tour packages",
    lead: "Rajasthan private tour packages",
    intro: "The desert kingdoms end to end — Jaipur, Jodhpur, Jaisalmer, Udaipur, Pushkar and Ranthambore — on private multi-day routes with heritage hotels and a car that stays with you throughout.",
    note: "Twelve to thirteen days is what the full circuit needs. Shorter routes work by dropping Bikaner and Jaisalmer rather than by rushing everything.",
    faqs: [
      ["Which places are worth including?", "Jaipur, Jodhpur, Jaisalmer, Udaipur, Pushkar and Ranthambore, depending on your interests and how long you have."],
      ["How many days do I need?", "Twelve to thirteen days covers the full circuit comfortably. Eight to ten days works if you drop the desert leg."],
      ["Is a private car and driver included?", "Yes, for the whole route — the same driver stays with you across all the cities."],
      ["Can Rajasthan be added to a Golden Triangle tour?", "Yes. The eight and ten day routes do exactly that, adding Jodhpur, Pushkar or Udaipur to Delhi, Agra and Jaipur."],
      ["When should I travel?", "October to March. Desert nights in December and January get genuinely cold, so pack for it."]
    ]
  }
};

const CITY_PAGES = {
  agra: {
    file: "agra-tours.html", name: "Agra", match: ["Agra"], img: "tajGarden",
    lead: "Tours in Agra",
    intro: "Agra tours covering the Taj Mahal, the Mughal forts and the quieter monuments most day trips skip — private guided tours, sightseeing by car and flexible day plans.",
    welcome: ["Agra is world-famous for one building, and the Taj Mahal deserves it. But the city also holds Agra Fort, Itimad-ud-Daulah, Mehtab Bagh and Akbar's tomb at Sikandra, all within half an hour of each other.",
              "A day is enough for the headlines. Two days lets you see the Taj at sunrise and sunset, and still have an afternoon for the marble inlay workshops."],
    faqs: [
      ["How many days are enough for Agra?", "One day covers the main monuments. Two days lets you take them at a relaxed pace and see the Taj at both sunrise and sunset."],
      ["Can I visit Agra from Delhi in one day?", "Yes, by private car or by train. Both are comfortable and get you back the same evening."],
      ["Which railway station should I use?", "Agra has several. Check your ticket for the arriving station — we arrange the transfer from whichever one it is."],
      ["Is the Taj Mahal closed any day?", "Yes, it is closed to visitors on Fridays. We plan around it."],
      ["What should I wear?", "Comfortable clothes and walking shoes. The monuments involve more walking than people expect."]
    ]
  },
  delhi: {
    file: "delhi-tours.html", name: "Delhi", match: ["Delhi"], img: "humayun",
    lead: "Tours in Delhi",
    intro: "Delhi tours across the historic old city and the monuments of New Delhi — private guided tours, sightseeing by car and day plans built around your schedule.",
    welcome: ["Delhi is really two cities. Old Delhi is the Red Fort, Jama Masjid and the lanes of Chandni Chowk, best seen on foot and by rickshaw. New Delhi is India Gate, Humayun's Tomb and Qutub Minar, spread out and better by car.",
              "Most visitors have one day. That is enough for both halves if the morning goes to the old city and the afternoon to the new."],
    faqs: [
      ["How many days do I need in Delhi?", "One full day covers both Old and New Delhi. Two days adds the museums, the temples and time in the markets."],
      ["Is the rickshaw ride through Chandni Chowk worth it?", "Yes. The lanes are too narrow and too busy for a car, and the spice market is the part people remember."],
      ["Which monuments close on certain days?", "Most are open daily, but the Red Fort closes on Mondays. We plan around it."],
      ["Can the tour start from the airport?", "Yes. Many travellers do this on a long layover — airport pickup, the city tour, and back in time for the next flight."]
    ]
  },
  jaipur: {
    file: "jaipur-tours.html", name: "Jaipur", match: ["Jaipur"], img: "hawaMahal",
    lead: "Tours in Jaipur",
    intro: "Jaipur tours through the forts, royal palaces and bazaars of the Pink City — private guided tours, sightseeing by car and flexible day plans.",
    welcome: ["Jaipur is the Pink City: Amber Fort on the ridge above Maota Lake, the City Palace still partly lived in, Hawa Mahal's honeycomb facade and Jantar Mantar's enormous stone instruments.",
              "The city rewards early starts. Amber Fort at opening and Hawa Mahal at first light are almost empty; by eleven both are full."],
    faqs: [
      ["How many days does Jaipur need?", "One day covers the main sights. Two lets you add Nahargarh at sunset, the craft workshops and the bazaars."],
      ["Is the elephant ride at Amber Fort available?", "Availability changes with the regulations. A jeep up to the fort is always available and many travellers prefer it."],
      ["What is worth buying in Jaipur?", "Gemstones, block-printed textiles and blue pottery. We can take you to workshops rather than commission shops."],
      ["Can I visit Jaipur from Delhi in a day?", "Yes, though it is a long day — four to five hours each way. An overnight stay is more comfortable."]
    ]
  },
  jodhpur: {
    file: "jodhpur-tours.html", name: "Jodhpur", match: ["Jodhpur"], img: "mehrangarh",
    lead: "Tours in Jodhpur",
    intro: "Jodhpur tours through Mehrangarh Fort, the royal palaces and the blue streets of the old city, with private guides and comfortable transport.",
    welcome: ["Jodhpur is the Blue City, and Mehrangarh Fort above it is among the best-preserved forts in India — still owned by the family that built it, with its museum and audio guide genuinely worth the time.",
              "Below the walls, Jaswant Thada, Umaid Bhawan Palace and the Clock Tower market fill out a full day."],
    faqs: [
      ["How long should I spend in Jodhpur?", "A full day covers Mehrangarh, Jaswant Thada and Umaid Bhawan. Two days adds Mandore Gardens and time in the old city."],
      ["Why are the houses blue?", "Several explanations compete — caste tradition, keeping interiors cool, repelling insects. Your guide will give you all of them."],
      ["Is Jodhpur usually combined with other cities?", "Yes. It sits naturally between Jaipur and Udaipur, and appears on the 8, 10, 12 and 13 day routes."]
    ]
  },
  udaipur: {
    file: "udaipur-tours.html", name: "Udaipur", match: ["Udaipur"], img: "udaipur",
    lead: "Tours in Udaipur",
    intro: "Udaipur tours around the lakes and palaces of Rajasthan's most relaxed city — City Palace, Lake Pichola, Jagdish Temple and the gardens, at a gentle pace.",
    welcome: ["Udaipur sits among lakes with the Aravalli Hills behind it, and feels slower than anywhere else in Rajasthan. The City Palace complex is enormous; Lake Pichola carries the Taj Lake Palace and Jag Mandir.",
              "A boat ride at sunset is the thing everyone remembers, and it is worth planning the day around the light."],
    faqs: [
      ["How many days does Udaipur need?", "A full day covers the City Palace, the temple and a boat ride. Two days lets the city be the rest it is good at."],
      ["Is the Lake Pichola boat ride included?", "It depends on the package. It can be added to any Udaipur itinerary on request."],
      ["Can I fly out of Udaipur?", "Yes, and most of our longer Rajasthan routes end that way rather than driving back to Delhi."]
    ]
  },
  varanasi: {
    file: "varanasi-tours.html", name: "Varanasi", match: ["Varanasi"], img: "varanasi",
    lead: "Tours in Varanasi",
    intro: "Varanasi tours along the ghats and through the old city — sunrise on the Ganga, the evening aarti, and Sarnath where Buddhism began.",
    welcome: ["Varanasi is the oldest continuously inhabited city in India and makes no effort to be comfortable. Pilgrims bathe at dawn, bodies burn at Manikarnika, and the lanes behind the ghats are too narrow for a car.",
              "A boat at first light is the thing to plan around. The city faces the river, so the only way to see it properly is from the water."],
    faqs: [["What time does the sunrise boat start?", "Around 5 to 5:30 am depending on the season. It is early, and it is the reason people come."],
           ["Is the evening aarti crowded?", "Very. We take a boat so you watch from the river rather than from inside the crush."],
           ["Can we photograph the cremation ghats?", "No. It is a working cremation ground and photography there is both forbidden and unkind. Your guide will tell you where the line is."],
           ["Is Sarnath worth half a day?", "Yes, especially the museum. It is a calm counterpoint after the intensity of the ghats."]]
  },
  amritsar: {
    file: "amritsar-tours.html", name: "Amritsar", match: ["Amritsar"], img: "amritsar",
    lead: "Tours in Amritsar",
    intro: "Amritsar tours around the Golden Temple, the Jallianwala Bagh memorial and the evening ceremony at the Wagah border.",
    welcome: ["The Golden Temple is open to everyone, serves a free meal to anyone who sits down, and feeds roughly a hundred thousand people a day from a kitchen run almost entirely by volunteers.",
              "Jallianwala Bagh is a five-minute walk away, and the contrast between the two is the point of a day here."],
    faqs: [["Can anyone enter the Golden Temple?", "Yes, regardless of faith. Heads must be covered, shoes left outside, and the pool walked around clockwise. Scarves are provided at the entrance."],
           ["Should we eat at the langar?", "If you are comfortable sitting on the floor with everyone else, yes. It is the most quietly impressive thing in the city."],
           ["Is the Wagah border ceremony worth it?", "It is loud, nationalistic and genuinely unusual. Go early — the stands fill well before it starts."],
           ["How long do we need?", "One full day covers the temple, Jallianwala Bagh and Wagah. Two days adds the Partition Museum."]]
  },
  ranthambore: {
    file: "ranthambore-tours.html", name: "Ranthambore", match: ["Ranthambore"], img: "ranthambore",
    lead: "Tours to Ranthambore",
    intro: "Ranthambore safaris in one of India's best-known tiger reserves, usually added to a Golden Triangle route between Agra and Jaipur.",
    welcome: ["Ranthambore National Park covers around 1,300 square kilometres of dry forest around a tenth-century fort, and holds one of the more visible tiger populations in India.",
              "Safaris run morning and afternoon in open Gypsies or larger Canters. Zones and timings are allotted by the Forest Department, not by us, so bookings are made as early as possible."],
    faqs: [["Will we see a tiger?", "Nobody can promise that. Two safaris give a reasonable chance; October to April is better than the monsoon months."],
           ["Gypsy or Canter?", "A Gypsy seats six and gets closer. A Canter seats twenty and costs less. We book Gypsies unless you ask otherwise."],
           ["Can we book a private Gypsy?", "Yes, at extra cost and subject to availability. Worth it for photographers."],
           ["When is the park closed?", "Usually the first of July to the end of September for the monsoon. Some zones stay open — we check before quoting."]]
  },
  jaisalmer: {
    file: "jaisalmer-tours.html", name: "Jaisalmer", match: ["Jaisalmer", "desert"], img: "jaisalmer",
    lead: "Tours in Jaisalmer",
    intro: "Jaisalmer tours through the golden city, its living fort and the Thar Desert — havelis, dunes, camel rides and a night under the desert sky.",
    welcome: ["Jaisalmer Fort is one of very few forts anywhere that people still live inside. Around it, the Patwon Ki Haveli and Salim Singh Haveli carry some of the finest stone carving in Rajasthan.",
              "The desert is the other half. An afternoon out at the Khuri dunes, a camel ride at sunset, folk music and dinner at a camp, and a night out where the sky is properly dark."],
    faqs: [
      ["Is a night at a desert camp worth it?", "For most people it is the night they remember from the whole trip. Tented accommodation, dinner, music and dancing out at the dunes."],
      ["Is the camel ride compulsory?", "No. It is included but nobody has to ride — the sunset and the dinner stand on their own."],
      ["When should I visit?", "October to March. Desert nights in December and January are cold, so bring layers."]
    ]
  }
};


/* --------------------------------------------------------------- fleet -- */
const FLEET = [
  { name: "Toyota Etios or Maruti Dzire", seats: "3 passengers", bags: "2 large bags",
    best: "Couples and solo travellers on city tours and day trips",
    perDay: 3200, perKm: 14, img: "privateCar" },
  { name: "Toyota Innova Crysta", seats: "5 passengers", bags: "4 large bags",
    best: "Families and small groups, and anything over four hours on the road",
    perDay: 4800, perKm: 20, img: "privateCar" },
  { name: "Toyota Fortuner", seats: "5 passengers", bags: "4 large bags",
    best: "Long Rajasthan routes where comfort matters more than cost",
    perDay: 9500, perKm: 38, img: "privateCar" },
  { name: "Tempo Traveller, 12 seater", seats: "12 passengers", bags: "12 bags",
    best: "Extended families and small tour groups travelling together",
    perDay: 7500, perKm: 28, img: "privateCar" },
  { name: "Mercedes E-Class or BMW 5 Series", seats: "3 passengers", bags: "2 large bags",
    best: "The luxury Taj Mahal day tour and airport transfers for business guests",
    perDay: 18000, perKm: 70, img: "privateCar" }
];

/* ---------------------------------------------------------------- blog -- */
const BLOG_POSTS = [
  {
    slug: "best-time-to-visit-taj-mahal",
    title: "The best time to visit the Taj Mahal, hour by hour",
    date: "2026-09-18", readMins: 6, img: "tajSunrise",
    excerpt: "Sunrise is the honest answer, but it depends on the month, the fog and whether you mind getting up at four.",
    body: [
      ["p", "The Taj Mahal opens thirty minutes before sunrise and closes thirty minutes before sunset. Within those hours the building changes more than most visitors expect, and when you arrive shapes the whole visit."],
      ["h2", "The first hour"],
      ["p", "Between opening and about 8 am the marble runs pink, then gold, then white. The crowd is a fraction of what it becomes, the light is soft enough to photograph without blown highlights, and the platform in front of the mausoleum is empty enough to stand still on."],
      ["p", "The cost is the alarm clock. From Delhi that means leaving at 2 am. From a hotel in Agra it means 5:30. Almost everyone who does it says it was worth it; almost nobody says it twice in one trip."],
      ["h2", "Mid-morning"],
      ["p", "From nine the coach groups arrive and the queue at the mausoleum entrance builds. The light goes hard and white. This is the worst time to come and, because it suits bus schedules, the time most people do."],
      ["h2", "Late afternoon"],
      ["p", "After four the crowd thins again and the marble warms. It is a good second visit if you are staying overnight — the building looks different enough from the morning to be worth the second ticket."],
      ["h2", "By month"],
      ["p", "October and November are the best combination of clear air and comfortable temperature. December and January bring fog that can hide the dome until ten or eleven, which catches out a lot of sunrise visitors. February and March are excellent. From April the heat makes anything after ten unpleasant, and by May the stone is too hot to walk on barefoot in the inner areas."],
      ["h2", "The one fixed rule"],
      ["p", "The Taj Mahal is closed every Friday for prayers. Plan around it, because no amount of planning gets you in."]
    ]
  },
  {
    slug: "golden-triangle-how-many-days",
    title: "How many days does the Golden Triangle actually need?",
    date: "2026-09-04", readMins: 7, img: "amber",
    excerpt: "Three days is sold hardest. Five is where the trip stops feeling like a transfer schedule with monuments attached.",
    body: [
      ["p", "Delhi, Agra and Jaipur sit roughly four hours apart by road. That geometry decides everything about how long the route needs."],
      ["h2", "Three days"],
      ["p", "Workable, and genuinely popular. Day one is Delhi and the drive to Agra. Day two is the Taj Mahal, Agra Fort and the drive to Jaipur. Day three is Jaipur and the drive back. You see all the headline sights and you spend about twelve hours in the car."],
      ["p", "Choose it if your time is fixed. Do not choose it if you dislike early mornings, because it only works with them."],
      ["h2", "Five days"],
      ["p", "This is the version we recommend most. Each city gets a full day rather than the gaps between drives. You can see the Taj at both sunrise and sunset, walk through Old Delhi properly, and have an afternoon in Jaipur with nothing booked."],
      ["h2", "Seven days"],
      ["p", "Two nights in every city. The extra time becomes free time rather than more monuments, which is exactly what most people want by day five of an India trip."],
      ["h2", "Longer"],
      ["p", "Beyond a week you are no longer doing the Golden Triangle; you are doing the Golden Triangle plus something. Ranthambore for tigers, Udaipur for lakes, Varanasi for the river, Amritsar for the Golden Temple. Each adds two to three days."],
      ["h2", "The mistake worth avoiding"],
      ["p", "Trying to fit the three cities into two days. It can be done and we will quote for it, but the day starts at 6 am, ends at 10 pm, and the thing people remember afterwards is the car."]
    ]
  },
  {
    slug: "india-tour-scams-to-avoid",
    title: "Six things that go wrong on India tours, and how to avoid them",
    date: "2026-08-21", readMins: 8, img: "craftsShop",
    excerpt: "Commission shops, fake e-Visa sites, the 'your hotel is closed' routine — most of it is avoidable if you know the shape of it.",
    body: [
      ["p", "India is not a dangerous place to travel. It is, in a few specific situations, a place where travellers get quietly relieved of money. Almost all of it follows a handful of patterns."],
      ["h2", "1. The commission shop"],
      ["p", "Your driver suggests a carpet showroom or a gem emporium. The visit lasts an hour, the prices are several times the market rate, and the driver takes a cut of whatever you spend. It is the single most common complaint about Indian tours."],
      ["p", "Ask any operator directly whether their drivers take shop commission. If the answer is vague, assume yes."],
      ["h2", "2. Fake e-Visa websites"],
      ["p", "Search for an Indian e-Visa and the first results are often lookalike sites charging three or four times the official fee for the same form. Apply only through the Government of India portal."],
      ["h2", "3. 'Your hotel is closed'"],
      ["p", "A driver or a helpful stranger tells you the hotel you booked has shut, flooded or burnt down, and offers an alternative where they earn a commission. Call the hotel yourself. It is open."],
      ["h2", "4. The unofficial guide"],
      ["p", "Men outside monuments offering guided tours are rarely licensed. A licensed guide carries a Ministry of Tourism badge with a photograph, and will show it without being asked."],
      ["h2", "5. The cheapest quotation"],
      ["p", "An unusually low tour price is not generosity. The money comes back through shop commissions, a worse hotel than the one named, or extras added later. Ask what is excluded, in writing."],
      ["h2", "6. Paying everything in advance"],
      ["p", "A deposit is normal. Paying the full cost of a two-week tour before you arrive is not. Reputable operators take a deposit and the balance at or near the start."],
      ["h2", "What a good operator looks like"],
      ["p", "A written itinerary with named hotels before any payment. A clear list of exclusions. A phone number that a person answers. And a straight answer about commissions."]
    ]
  },
  {
    slug: "what-to-pack-for-north-india",
    title: "What to pack for North India, by season",
    date: "2026-08-07", readMins: 5, img: "jaliScreen",
    excerpt: "Layers in winter, less than you think in summer, and one pair of shoes you can get on and off quickly.",
    body: [
      ["p", "North India is not one climate. December mornings in Jaisalmer are genuinely cold; May afternoons in Delhi are above 45°C. Pack for the month, not for the country."],
      ["h2", "October to March"],
      ["p", "Layers. Days are warm enough for short sleeves, mornings and evenings need a fleece or a jacket, and desert nights in December and January need more than people expect. A scarf does double duty — warmth in the morning, head covering at religious sites."],
      ["h2", "April to June"],
      ["p", "Loose cotton and long sleeves, which protect from the sun better than bare arms. A hat, sunglasses and more water than you think. Sightseeing shifts to early morning and late afternoon by necessity."],
      ["h2", "July to September"],
      ["p", "Quick-drying clothes and sandals you do not mind getting wet. An umbrella is more useful than a raincoat in the humidity."],
      ["h2", "All year"],
      ["ul", ["Shoes that slip on and off — temples, mosques and gurudwaras all require removing them",
              "Clothes covering shoulders and knees for religious sites",
              "A scarf for covering your head at Sikh and Muslim sites",
              "Hand sanitiser and any medication you rely on, in original packaging",
              "A power bank; long sightseeing days drain phones fast",
              "Copies of your passport and e-Visa, printed as well as on your phone"]],
      ["h2", "What to leave behind"],
      ["p", "Drones, which need permits almost nobody gets. A tripod, unless you have checked each monument's rules. And most of the clothes you packed — Indian laundry is same-day and costs very little."]
    ]
  },
  {
    slug: "agra-beyond-the-taj-mahal",
    title: "Agra beyond the Taj Mahal: five places most visitors skip",
    date: "2026-07-24", readMins: 6, img: "babyTaj",
    excerpt: "Most people give Agra four hours. The city rewards two days, and the quietest monuments are the best ones.",
    body: [
      ["p", "Agra is treated as a stop rather than a destination: in at nine, Taj Mahal, Agra Fort, out by three. The city holds a good deal more, and because almost nobody stays, the rest of it is empty."],
      ["h2", "Itimad-ud-Daulah, the Baby Taj"],
      ["p", "Built twenty years before the Taj Mahal and the first Mughal structure faced entirely in white marble. The inlay work is finer than anything on the Taj itself, and on most mornings there are perhaps a dozen people inside."],
      ["h2", "Mehtab Bagh"],
      ["p", "The garden directly across the river from the Taj Mahal, aligned exactly with it. Sunset here gives you the view in the warm light with the river in front of it, and no crowd."],
      ["h2", "Akbar's tomb at Sikandra"],
      ["p", "Ten minutes out of town, set in a deer park, and almost always quiet. The gateway is some of the best inlay stonework in North India."],
      ["h2", "The marble inlay workshops"],
      ["p", "Pietra dura is still practised in Agra by families descended from the craftsmen who worked on the Taj Mahal. Watching a flower take shape from cut semi-precious stone explains the monument better than any guidebook. Visit a workshop, not an emporium."],
      ["h2", "Fatehpur Sikri"],
      ["p", "Forty kilometres out: a complete Mughal capital, built by Akbar and abandoned within fifteen years for lack of water. Red sandstone, largely intact, and far emptier than it deserves to be."],
      ["h2", "Why it matters"],
      ["p", "A second day in Agra costs one hotel night and turns a monument visit into a city. Most of our guests who stay over say it was the best decision of the trip."]
    ]
  }
];

/* -------------------------------------------------------------- tours -- */
const TOURS = [
  {
    slug: "taj-mahal-day-tour-from-delhi",
    title: "Taj Mahal day tour from Delhi by car",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tours",
    route: "Delhi · Agra · Delhi",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 7900,
    img: IMG.tajGarden,
    summary: "Leave Delhi after dawn, spend the day with the Taj Mahal and Agra Fort, and sleep in your own hotel the same night.",
    highlights: [
      "Private AC car with chauffeur from your Delhi hotel or airport",
      "Licensed guide at the Taj Mahal and Agra Fort",
      "Monument tickets arranged before you arrive",
      "Lunch stop at a vetted restaurant in Agra"
    ],
    itinerary: [
      { day: "Morning", text: "Pickup from your Delhi hotel or airport between 6 and 7 am, then a 3.5-hour drive to Agra on the Yamuna Expressway with one tea break." },
      { day: "Midday", text: "Meet your guide at the Taj Mahal for a two-hour visit, followed by Agra Fort and the river view of the Taj from its terraces." },
      { day: "Afternoon", text: "Lunch at a quiet rooftop restaurant, with an optional stop at a marble inlay workshop run by descendants of the original craftsmen." },
      { day: "Evening", text: "Drive back to Delhi, arriving at your hotel between 8 and 9 pm." }
    ],
    includes: ["Private AC car and chauffeur", "English-speaking licensed guide", "Taj Mahal and Agra Fort entry tickets", "Bottled water and tolls", "All taxes"],
    excludes: ["Meals and beverages", "Camera and video fees", "Tips", "Anything not listed under inclusions"],
    gallery: ["tajGarden", "agraFort", "jaliScreen"]
  },
  {
    slug: "taj-mahal-sunrise-tour-from-delhi",
    title: "Taj Mahal sunrise tour from Delhi",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tours",
    route: "Delhi · Agra · Sunrise",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 9400,
    img: IMG.tajSunrise,
    summary: "A 2 am start from Delhi buys you the first light on the marble, the thinnest crowds of the day and the softest photographs.",
    highlights: [
      "At the east gate before it opens",
      "First hour inside, when the dome turns pink",
      "Agra Fort and Mehtab Bagh after breakfast",
      "Back in Delhi by early evening"
    ],
    itinerary: [
      { day: "02:00", text: "Pickup from your Delhi hotel and a quiet drive to Agra while the expressway is empty." },
      { day: "06:00", text: "Meet your guide at the east gate, enter with the first group and spend the opening hour inside the complex." },
      { day: "09:00", text: "Breakfast at a nearby hotel, then Agra Fort with your guide." },
      { day: "13:00", text: "Mehtab Bagh across the river for the garden view of the Taj, then the drive back to Delhi." }
    ],
    includes: ["Private AC car and chauffeur", "Licensed guide in Agra", "Sunrise-slot Taj Mahal ticket", "Agra Fort ticket", "Bottled water, tolls and taxes"],
    excludes: ["Breakfast and lunch", "Mehtab Bagh ticket", "Camera fees", "Tips"],
    gallery: ["tajSunrise", "mehtabBagh", "agraFortPalace"]
  },
  {
    slug: "taj-mahal-tour-by-gatimaan-express",
    title: "Taj Mahal tour by Gatimaan Express train",
    cat: "same-day",
    catLabel: "Same day tours",
    route: "Delhi · Train · Agra",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 11500,
    img: IMG.taj,
    summary: "India's fastest train covers Delhi to Agra in 100 minutes, so the whole monument day happens without a long road run.",
    highlights: [
      "Executive class on the Gatimaan Express both ways",
      "Breakfast and evening snack served on board",
      "Private car and guide waiting at Agra Cantt",
      "Taj Mahal, Agra Fort and Itimad-ud-Daulah"
    ],
    itinerary: [
      { day: "07:00", text: "Transfer to Hazrat Nizamuddin station and board the Gatimaan Express in executive class." },
      { day: "10:00", text: "Your car and guide meet you at Agra Cantt for the Taj Mahal." },
      { day: "13:30", text: "Lunch, then Agra Fort and the Baby Taj on the quieter side of the river." },
      { day: "17:30", text: "Return train to Delhi and a transfer to your hotel." }
    ],
    includes: ["Return Gatimaan Express tickets, executive class", "Station transfers in Delhi and Agra", "Private car in Agra with chauffeur", "Licensed guide", "All monument tickets"],
    excludes: ["Lunch", "Camera fees", "Tips", "Items of a personal nature"],
    gallery: ["taj", "agraFort", "babyTaj"]
  },
  {
    slug: "2-days-taj-mahal-overnight-tour",
    title: "2 days Taj Mahal overnight tour",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tours",
    route: "Agra · Overnight · Heritage",
    days: 2, nights: 1,
    durationLabel: "2 days",
    price: 18500,
    img: IMG.mehtabBagh,
    summary: "Agra at a human pace: sunset on day one, sunrise on day two, and a night in a hotel with the dome in view.",
    highlights: [
      "Hotel with a Taj Mahal view",
      "Sunset at Mehtab Bagh and sunrise at the east gate",
      "Fatehpur Sikri on the way out, if you want it",
      "A free evening for the bazaar and a petha tasting"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Agra, check in, visit Agra Fort with your guide and watch the sun go down over the river at Mehtab Bagh." },
      { day: "Day 2", text: "Sunrise at the Taj Mahal, breakfast at the hotel, then Itimad-ud-Daulah and departure, with an optional stop at Fatehpur Sikri." }
    ],
    includes: ["One night in a 4-star hotel with breakfast", "Private AC car and chauffeur", "Licensed guide for both days", "Taj Mahal and Agra Fort tickets", "All taxes"],
    excludes: ["Lunch and dinner", "Fatehpur Sikri tickets", "Camera fees", "Tips"],
    gallery: ["mehtabBagh", "tajSunrise", "agraFortPalace"]
  },
  {
    slug: "3-days-golden-triangle-private-tour",
    title: "3 days Golden Triangle private tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur",
    days: 3, nights: 2,
    durationLabel: "3 days",
    price: 32500,
    img: IMG.amber,
    summary: "The classic route at its briskest: Delhi's monuments, a sunrise Taj Mahal and Jaipur's forts in three well-planned days.",
    highlights: [
      "Sunrise visit to the Taj Mahal",
      "Amber Fort and City Palace in Jaipur",
      "Two nights in handpicked boutique hotels",
      "Pickup and drop at Delhi airport or your hotel"
    ],
    itinerary: [
      { day: "Day 1", text: "Delhi highlights — Qutub Minar, Humayun's Tomb and a rickshaw ride through Chandni Chowk — then the drive to Agra." },
      { day: "Day 2", text: "Sunrise at the Taj Mahal, Agra Fort after breakfast, and on to Jaipur with a stop at Fatehpur Sikri." },
      { day: "Day 3", text: "Amber Fort, City Palace, Jantar Mantar and the Hawa Mahal facade, then the return drive to Delhi." }
    ],
    includes: ["2 nights in deluxe boutique hotels with breakfast", "Private AC car and chauffeur for 3 days", "Licensed guides in each city", "All monument tickets", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Amber Fort jeep or elephant ride", "Camera fees", "Tips"],
    gallery: ["amber", "tajSunrise", "hawaMahal"]
  },
  {
    slug: "4-days-golden-triangle-classic-tour",
    title: "4 days Golden Triangle classic tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur",
    days: 4, nights: 3,
    durationLabel: "4 days",
    price: 41900,
    img: IMG.hawaMahalClose,
    summary: "The same three cities with the day trips put back in — Fatehpur Sikri, Chand Baori and a full day for Jaipur.",
    highlights: [
      "Full day in Old and New Delhi",
      "Fatehpur Sikri, the abandoned Mughal capital",
      "Chand Baori stepwell on the Agra to Jaipur road",
      "An unhurried day in Jaipur"
    ],
    itinerary: [
      { day: "Day 1", text: "Old Delhi — Jama Masjid, Chandni Chowk and Raj Ghat — then New Delhi's India Gate, Humayun's Tomb and Qutub Minar." },
      { day: "Day 2", text: "Drive to Agra, afternoon at Agra Fort and the Baby Taj, with sunset at Mehtab Bagh." },
      { day: "Day 3", text: "Sunrise at the Taj Mahal, then on to Jaipur via Fatehpur Sikri and the Chand Baori stepwell." },
      { day: "Day 4", text: "Amber Fort, City Palace, Jantar Mantar and the old city bazaars before the drive back to Delhi." }
    ],
    includes: ["3 nights in 4-star hotels with breakfast", "Private AC car and chauffeur", "Licensed guides in all three cities", "All monument tickets", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Elephant ride at Amber", "Tips"],
    gallery: ["hawaMahalClose", "fatehpurSikri", "agraFort"]
  },
  {
    slug: "5-days-golden-triangle-discovery-tour",
    title: "5 days Golden Triangle discovery tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur",
    days: 5, nights: 4,
    durationLabel: "5 days",
    price: 52400,
    img: IMG.indiaGate,
    summary: "Two nights in Jaipur, a slower Agra and room in the schedule for the markets, the food and an afternoon with nothing booked.",
    highlights: [
      "Two nights in Jaipur, including a free afternoon",
      "Street food walk in Old Delhi",
      "Block printing or blue pottery workshop visit",
      "Sunset at Nahargarh Fort over the pink city"
    ],
    itinerary: [
      { day: "Day 1", text: "Delhi arrival, Old Delhi walk and a street food tasting in Chandni Chowk." },
      { day: "Day 2", text: "New Delhi monuments in the morning, then the drive to Agra and sunset at Mehtab Bagh." },
      { day: "Day 3", text: "Sunrise Taj Mahal, Agra Fort, then the road to Jaipur with Fatehpur Sikri on the way." },
      { day: "Day 4", text: "Amber Fort, Panna Meena stepwell and City Palace, with sunset at Nahargarh Fort." },
      { day: "Day 5", text: "A free morning for shopping or a craft workshop, then the drive back to Delhi." }
    ],
    includes: ["4 nights in 4-star hotels with breakfast", "Private AC car and chauffeur", "Licensed guides in all cities", "All monument tickets", "Street food walk in Delhi", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner except where listed", "Camera fees", "Workshop purchases", "Tips"],
    gallery: ["indiaGate", "jalMahal", "tajGarden"]
  },
  {
    slug: "6-days-golden-triangle-heritage-tour",
    title: "6 days Golden Triangle heritage tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur",
    days: 6, nights: 5,
    durationLabel: "6 days",
    price: 64800,
    img: IMG.humayun,
    summary: "Heritage hotels, extra time at every monument and a guide in each city who works to your interests rather than a script.",
    highlights: [
      "Heritage and palace-style hotels throughout",
      "Both sunrise and sunset at the Taj Mahal",
      "Abhaneri, Fatehpur Sikri and Galta Ji",
      "An evening of Rajasthani music and dinner"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, evening at Humayun's Tomb and a quiet first night." },
      { day: "Day 2", text: "Full day across Old and New Delhi with your guide." },
      { day: "Day 3", text: "Drive to Agra, Agra Fort in the afternoon and sunset across the river." },
      { day: "Day 4", text: "Sunrise at the Taj Mahal, the Baby Taj, and an afternoon with the marble inlay workshops." },
      { day: "Day 5", text: "To Jaipur via Fatehpur Sikri and Abhaneri, with a Rajasthani dinner on arrival." },
      { day: "Day 6", text: "Amber Fort, City Palace and Galta Ji, then the return to Delhi." }
    ],
    includes: ["5 nights in heritage hotels with breakfast", "Private AC car and chauffeur", "Licensed guides in all cities", "All monument tickets", "One cultural dinner in Jaipur", "Tolls, parking and taxes"],
    excludes: ["Lunch and most dinners", "Camera fees", "Tips", "Personal expenses"],
    gallery: ["humayun", "amber", "babyTaj"]
  },
  {
    slug: "new-delhi-private-city-tour",
    title: "New Delhi private city tour",
    cat: "delhi",
    catLabel: "New Delhi tours",
    route: "Old Delhi · New Delhi",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 6500,
    img: IMG.qutub,
    summary: "Mughal Delhi in the morning, colonial and modern Delhi in the afternoon, with a rickshaw ride through Chandni Chowk in between.",
    highlights: [
      "Jama Masjid and a cycle rickshaw through Chandni Chowk",
      "Humayun's Tomb and Qutub Minar",
      "Drive past India Gate and the Rashtrapati Bhavan",
      "Gurudwara Bangla Sahib, including the community kitchen"
    ],
    itinerary: [
      { day: "Morning", text: "Jama Masjid, a rickshaw ride through the spice market, and Raj Ghat." },
      { day: "Afternoon", text: "Humayun's Tomb, Qutub Minar, and the drive along Rajpath past India Gate." },
      { day: "Evening", text: "Gurudwara Bangla Sahib at lamp-lighting, then drop at your hotel." }
    ],
    includes: ["Private AC car and chauffeur for the day", "Licensed Delhi guide", "Rickshaw ride in Chandni Chowk", "All monument tickets", "Bottled water and taxes"],
    excludes: ["Meals", "Camera fees", "Tips"],
    gallery: ["qutub", "redFort", "lotusTemple"]
  },
  {
    slug: "jaipur-luxury-private-tour",
    title: "Jaipur luxury private tour",
    cat: "jaipur",
    catLabel: "Jaipur tours",
    route: "Amber · City Palace",
    days: 2, nights: 1,
    durationLabel: "2 days",
    price: 21900,
    img: IMG.amber,
    summary: "Jaipur with the good timings: Amber Fort at opening, the stepwell before the coaches, and sunset from the hills above the city.",
    highlights: [
      "Amber Fort at opening time",
      "Panna Meena ka Kund and Jal Mahal",
      "City Palace, Jantar Mantar and Hawa Mahal",
      "Sunset at Nahargarh Fort"
    ],
    itinerary: [
      { day: "Day 1", text: "Amber Fort as the gates open, Panna Meena stepwell, Jal Mahal and an afternoon in the City Palace complex." },
      { day: "Day 2", text: "Hawa Mahal at first light, the old city bazaars, a craft workshop, and sunset at Nahargarh before departure." }
    ],
    includes: ["One night in a heritage hotel with breakfast", "Private AC car and chauffeur", "Licensed Jaipur guide", "All monument tickets", "Taxes and parking"],
    excludes: ["Lunch and dinner", "Elephant ride at Amber", "Shopping", "Tips"],
    gallery: ["amber", "hawaMahalClose", "jalMahal"]
  },
  {
    slug: "same-day-agra-tour-from-jaipur",
    title: "Same day Agra tour from Jaipur",
    cat: "same-day",
    catLabel: "Same day tours",
    route: "Jaipur · Agra",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 10800,
    img: IMG.fatehpurSikri,
    summary: "A one-way day: start in Jaipur, see Agra properly on the way, and finish in Delhi — useful if you are moving cities anyway.",
    highlights: [
      "Fatehpur Sikri and Chand Baori en route",
      "Taj Mahal and Agra Fort with a guide",
      "Drop in Agra or continue to Delhi at no extra cost",
      "Luggage stays in the car all day"
    ],
    itinerary: [
      { day: "Morning", text: "Leave Jaipur at 6 am, stopping at Chand Baori stepwell and Fatehpur Sikri." },
      { day: "Afternoon", text: "Taj Mahal and Agra Fort with your Agra guide." },
      { day: "Evening", text: "Drop at your Agra hotel, or continue to Delhi, arriving around 10 pm." }
    ],
    includes: ["Private AC car and chauffeur", "Licensed guide in Agra", "Taj Mahal and Agra Fort tickets", "Tolls, parking and taxes"],
    excludes: ["Meals", "Fatehpur Sikri tickets", "Camera fees", "Tips"],
    gallery: ["fatehpurSikri", "taj", "fatehpurRuins"]
  },
  {
    slug: "taj-mahal-luxury-car-tour-from-delhi",
    title: "Taj Mahal luxury car tour from Delhi",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tours",
    route: "Delhi · Agra · Delhi",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 16500,
    img: IMG.tajPool,
    summary: "The same-day Agra run in a chauffeur-driven luxury car, with a 5-star lunch and door-to-door pickup anywhere in Delhi NCR.",
    facts: [
      ["Duration", "Same day, about 12 to 14 hours"],
      ["Departure city", "Delhi NCR — Delhi, Noida, Ghaziabad, Gurugram, Faridabad"],
      ["Transport", "Private luxury AC car"],
      ["Tour type", "Private"],
      ["Language", "English, other languages on request"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Return", "Around 7:30 to 8:30 pm"]
    ],
    highlights: [
      "Private luxury car — BMW, Mercedes or Audi — with a professional chauffeur",
      "Licensed local guide at the Taj Mahal and Agra Fort",
      "Premium lunch at a 5-star hotel or fine-dining restaurant in Agra",
      "Itimad-ud-Daulah, the Baby Taj, for its marble inlay work",
      "Door-to-door pickup and drop anywhere in Delhi NCR"
    ],
    itinerary: [
      { day: "07:00", text: "Pickup from your Delhi or NCR address in a luxury car with a professional chauffeur, then the drive to Agra on the Yamuna Expressway." },
      { day: "10:00", text: "Arrive in Agra, meet your guide and tour the Taj Mahal — its history, architecture and the story behind it." },
      { day: "13:00", text: "Premium lunch at a selected 5-star hotel or fine-dining restaurant." },
      { day: "14:00", text: "Agra Fort with your private guide, through its Mughal halls and courtyards." },
      { day: "15:30", text: "Itimad-ud-Daulah, the Baby Taj, known for the finest marble inlay in Agra." },
      { day: "16:30", text: "The drive back to Delhi." },
      { day: "19:30", text: "Drop at your hotel, residence or airport." }
    ],
    includes: ["Private luxury AC car, Delhi to Agra and back", "Professional chauffeur", "Licensed local guide in Agra", "Hotel or airport pickup and drop in Delhi NCR", "Taj Mahal and Agra Fort entry tickets, if selected", "Bottled water during sightseeing", "All tolls, parking, fuel and driver allowances"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["Is this a private tour?", "Yes. A dedicated car, a professional chauffeur and a private local guide in Agra. You are never put with a group."],
      ["How long does the day take?", "Usually 12 to 14 hours door to door, depending on your pickup location, traffic and how long you want at each monument."],
      ["What car is provided?", "Air-conditioned private cars suitable for couples, families and small groups. Luxury vehicles can be arranged on request."],
      ["Can you pick up from the airport?", "Yes. Pickup and drop work from hotels, airports and homes across Delhi NCR."]
    ],
    gallery: ["tajPool", "babyTaj", "marbleInlay"]
  },
  {
    slug: "delhi-and-agra-2-day-private-tour",
    title: "Delhi and Agra 2 day private tour by car",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tours",
    route: "Delhi · Agra · Delhi",
    days: 2, nights: 1,
    durationLabel: "2 days",
    price: 24500,
    img: IMG.indiaGate,
    summary: "One day for Delhi, one for Agra, with a sunset at Mehtab Bagh in between and the Taj Mahal at sunrise the next morning.",
    facts: [
      ["Duration", "2 days, 1 night"],
      ["Destinations", "Delhi and Agra"],
      ["Departure city", "Delhi NCR"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Language", "English, other languages on request"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Return", "Day 2, evening"]
    ],
    highlights: [
      "A full day across Delhi's landmarks with a private guide",
      "Sunset over the Taj Mahal from Mehtab Bagh",
      "Sunrise at the Taj Mahal on day two, before the crowds",
      "Agra Fort with time to actually walk it",
      "One night in Agra, so neither city gets rushed"
    ],
    itinerary: [
      { day: "Day 1 · 08:00", text: "Pickup in Delhi, then India Gate, Rashtrapati Bhavan, Parliament House and the city's other landmarks with your guide." },
      { day: "Day 1 · 12:30", text: "Drive to Agra on the Yamuna Expressway, arriving mid-afternoon to check in." },
      { day: "Day 1 · 17:00", text: "Mehtab Bagh across the river for sunset on the Taj, then an evening free in Agra." },
      { day: "Day 2 · 06:00", text: "Sunrise at the Taj Mahal, when the marble turns and the complex is at its quietest." },
      { day: "Day 2 · 10:00", text: "Breakfast and checkout, then Agra Fort with your guide." },
      { day: "Day 2 · 13:30", text: "Lunch in Agra, then the drive back to Delhi, arriving around 5 pm." }
    ],
    includes: ["Private AC car for both days", "Professional chauffeur", "Licensed local guides in Delhi and Agra", "Hotel or airport pickup and drop in Delhi NCR", "Monument entry tickets, if selected", "Bottled water during sightseeing", "All tolls, parking, fuel and driver allowances"],
    excludes: ["Hotel in Agra unless added to your package", "Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["Is the hotel included?", "One night can be included depending on the package you choose, and you pick the hotel category."],
      ["Which Delhi monuments can we see?", "Red Fort, Jama Masjid, India Gate, Humayun's Tomb and Qutub Minar are all possible — how many depends on the time we have."],
      ["Can the tour end in Agra instead of Delhi?", "Yes. It is a private tour, so the drop can be wherever your onward travel needs it."],
      ["Can we start from Delhi airport?", "Yes, airport pickup works the same as hotel pickup."]
    ],
    gallery: ["indiaGate", "tajSunrise", "agraFort"]
  },
  {
    slug: "7-days-golden-triangle-with-ranthambore",
    title: "7 days Golden Triangle tour with Ranthambore",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Ranthambore · Jaipur",
    days: 7, nights: 6,
    durationLabel: "7 days",
    price: 86500,
    img: IMG.jaswantThada,
    summary: "The classic route with two tiger safaris folded in — Delhi, the Taj Mahal, Ranthambore National Park and Jaipur, in one private journey.",
    facts: [
      ["Duration", "7 days, 6 nights"],
      ["Destinations", "Delhi · Agra · Ranthambore · Jaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "6 nights hotel stay"],
      ["Tour type", "Private"],
      ["Safari", "Two Ranthambore wildlife safaris"],
      ["Pickup", "Hotel or airport in Delhi NCR"]
    ],
    highlights: [
      "Old and New Delhi — Red Fort, Jama Masjid, India Gate, Qutub Minar",
      "Taj Mahal at sunrise and Agra Fort with a licensed guide",
      "Two safaris in Ranthambore National Park, morning and afternoon",
      "Amber Fort, City Palace and Hawa Mahal in Jaipur",
      "Fatehpur Sikri on the drive out of Agra"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, meet our representative and transfer to your hotel. Evening at leisure." },
      { day: "Day 2", text: "New Delhi from 9 am — Humayun's Tomb, Qutub Minar, Lotus Temple, India Gate and a drive past Parliament House. After lunch, Old Delhi: Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside." },
      { day: "Day 3", text: "Checkout at 10 am and drive to Agra. Itimad-ud-Daulah, the Baby Taj, then Mehtab Bagh for sunset across the river." },
      { day: "Day 4", text: "Taj Mahal at sunrise. After breakfast and checkout, Agra Fort, then the drive to Ranthambore with a stop at Fatehpur Sikri." },
      { day: "Day 5", text: "Morning and afternoon safaris in Ranthambore National Park by shared Gypsy, looking for Bengal tigers, deer and wild boar." },
      { day: "Day 6", text: "Drive to Jaipur, about 150 km. On arrival, City Palace, Hawa Mahal, Jantar Mantar and Patrika Gate." },
      { day: "Day 7", text: "Amber Fort and Jal Mahal, time for gemstones, block print and blue pottery, then the drive back to Delhi by 7 or 8 pm." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "4 nights in Delhi, Agra and Jaipur with breakfast", "2 nights in Ranthambore with breakfast, lunch and dinner", "Two tiger safaris by shared Gypsy", "Rickshaw ride in Old Delhi", "Bottled water, tolls, parking and taxes"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["How do the safaris work?", "Two safaris in Ranthambore National Park by shared Gypsy. Timings and zones are allotted by the Forest Department, so they are confirmed close to the date."],
      ["Can we upgrade to a private Gypsy?", "Yes, for an extra cost and subject to availability. Ask when you book."],
      ["When is the best season?", "October to March is most comfortable for sightseeing. Warmer months can be better for spotting wildlife. The park usually closes during the monsoon."],
      ["How far is Agra to Ranthambore?", "Four to five hours by road, with Fatehpur Sikri on the way so the drive doubles as sightseeing."]
    ],
    gallery: ["jaswantThada", "amber", "tajGarden"]
  },
  {
    slug: "8-days-golden-triangle-with-udaipur",
    title: "8 days Golden Triangle tour with Udaipur",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur · Udaipur",
    days: 8, nights: 7,
    durationLabel: "8 days",
    price: 98000,
    img: IMG.udaipurLake,
    summary: "Delhi, Agra and Jaipur at a steady pace, then Udaipur's lakes and palaces to finish, with the flight home from there.",
    facts: [
      ["Duration", "8 days, 7 nights"],
      ["Destinations", "Delhi · Agra · Jaipur · Udaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "7 nights hotel stay"],
      ["Tour type", "Private"],
      ["Sightseeing", "Private guided"],
      ["Pickup", "Hotel or airport in Delhi NCR"]
    ],
    highlights: [
      "Old and New Delhi with a rickshaw ride through Chandni Chowk",
      "Taj Mahal at sunrise, Agra Fort and the Baby Taj",
      "Amber Fort, Hawa Mahal, City Palace and Jantar Mantar in Jaipur",
      "Boat ride on Lake Pichola past the Taj Lake Palace and Jag Mandir",
      "Udaipur to Delhi by flight, so no long drive back"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, private transfer to your hotel, check in and relax." },
      { day: "Day 2", text: "Pickup at 9 am for Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside. Then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { day: "Day 3", text: "Checkout at 10 am, drive to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, a photo stop at Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar and Patrika Gate." },
      { day: "Day 6", text: "A scenic six-hour drive to Udaipur through the Rajasthan countryside, then check in and relax." },
      { day: "Day 7", text: "Jagdish Temple and the City Palace, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { day: "Day 8", text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "7 nights hotel accommodation with breakfast and taxes", "Boat ride in Udaipur", "Udaipur to Delhi flight", "Rickshaw ride in Old Delhi", "Bottled water, tolls, parking and taxes"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["When is the best time to go?", "October to March, when the weather suits long days at forts and palaces and Udaipur's lakes are at their best."],
      ["Is the Lake Pichola boat ride included?", "It depends on the package you select. It can be added on request."],
      ["Can this work as a honeymoon trip?", "Yes, and it often does. Upgraded rooms, a private boat and a romantic dinner can all be arranged."],
      ["Can we change the itinerary?", "Yes. Hotel category, sightseeing time and extra stops are all adjustable before you confirm."]
    ],
    gallery: ["udaipurLake", "amber", "tajGarden"]
  },
  {
    slug: "8-days-golden-triangle-with-pushkar-jodhpur",
    title: "8 days Golden Triangle tour with Pushkar and Jodhpur",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur · Pushkar · Jodhpur",
    days: 8, nights: 7,
    durationLabel: "8 days",
    price: 96500,
    img: IMG.umaidBhawan,
    summary: "The classic three cities, then the temple town of Pushkar and the blue streets below Mehrangarh Fort in Jodhpur.",
    facts: [
      ["Duration", "8 days, 7 nights"],
      ["Destinations", "Delhi · Agra · Jaipur · Pushkar · Jodhpur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "7 nights hotel stay"],
      ["Tour type", "Private"],
      ["Sightseeing", "Private guided"],
      ["Return", "Jodhpur or Delhi, as selected"]
    ],
    highlights: [
      "Pushkar Lake and the Brahma Temple, one of very few in the world",
      "Mehrangarh Fort, among the best-kept forts in India",
      "Jaswant Thada and Umaid Bhawan Palace",
      "A walk through the blue streets below the fort",
      "Taj Mahal at sunrise and Fatehpur Sikri on the Agra to Jaipur road"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, transfer to your hotel, check in and relax." },
      { day: "Day 2", text: "Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { day: "Day 3", text: "Checkout at 10 am, drive to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, then Agra Fort, then on to Jaipur via Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar, time in the markets, then the drive to Pushkar." },
      { day: "Day 6", text: "Pushkar Lake and the Brahma Temple, time in the local streets, then on to Jodhpur." },
      { day: "Day 7", text: "Mehrangarh Fort, Jaswant Thada and Umaid Bhawan Palace, then the Clock Tower market and a walk through the Blue City." },
      { day: "Day 8", text: "Breakfast, checkout and transfer to Jodhpur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "7 nights hotel accommodation with breakfast and taxes", "Jodhpur to Delhi flight", "Rickshaw ride in Old Delhi", "Bottled water, tolls, parking and taxes"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["Why add Pushkar?", "It is a small temple town around a lake, and a complete change of pace after Jaipur. Half a day is enough to feel it."],
      ["Is the Jodhpur flight included?", "Yes, the Jodhpur to Delhi flight is part of the package as listed."],
      ["Can we end in Jodhpur instead?", "Yes. The tour can finish there if your onward travel starts from Jodhpur."]
    ],
    gallery: ["umaidBhawan", "blueCity", "amber"]
  },
  {
    slug: "10-days-golden-triangle-with-jodhpur-udaipur",
    title: "10 days Golden Triangle tour with Jodhpur and Udaipur",
    cat: "golden-triangle",
    catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur · Pushkar · Jodhpur · Udaipur",
    days: 10, nights: 9,
    durationLabel: "10 days",
    price: 124000,
    img: IMG.blueCity,
    summary: "Ten days from the Taj Mahal to Lake Pichola, through Pushkar, Mehrangarh and the Ranakpur temples, finishing with a flight out of Udaipur.",
    facts: [
      ["Duration", "10 days, 9 nights"],
      ["Destinations", "Delhi · Agra · Jaipur · Pushkar · Jodhpur · Udaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "9 nights hotel stay"],
      ["Tour type", "Private"],
      ["Sightseeing", "Private guided"],
      ["Return", "Udaipur or Delhi, as selected"]
    ],
    highlights: [
      "The full Golden Triangle without rushing any of it",
      "Pushkar Lake, the Brahma Temple and an optional camel ride",
      "Mehrangarh Fort, Mandore Gardens and the Blue City markets",
      "Ranakpur Jain Temple on the road to Udaipur",
      "Boat ride on Lake Pichola past Jag Mandir and the Taj Lake Palace"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, private transfer to your hotel, check in and rest." },
      { day: "Day 2", text: "Full day in Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { day: "Day 3", text: "Checkout at 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset on the Taj from Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar, the Monkey Temple if time allows, then the drive to Pushkar." },
      { day: "Day 6", text: "Pushkar Lake, the Brahma Temple and Man Mahal, time in the markets with an optional camel ride, then on to Jodhpur." },
      { day: "Day 7", text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore Gardens and the Clock Tower market." },
      { day: "Day 8", text: "Drive to Udaipur, stopping at the Ranakpur Jain Temple for its marble carving." },
      { day: "Day 9", text: "Jagdish Temple, City Palace, Fateh Sagar Lake, Saheliyon Ki Bari, a boat ride on Lake Pichola and Bagore Ki Haveli." },
      { day: "Day 10", text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "9 nights hotel accommodation with breakfast and taxes", "Udaipur to Delhi flight", "Rickshaw ride in Old Delhi", "Bottled water, tolls, parking and taxes"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["Is ten days too long for this route?", "It is the length at which the route stops feeling like a checklist. Each city gets a full day rather than a morning."],
      ["Is the Ranakpur stop worth it?", "It breaks a five-hour drive and the marble carving there is among the finest in Rajasthan."],
      ["Can we add Jaisalmer?", "Yes — that becomes the 13 day route, or we can extend this one by two days."]
    ],
    gallery: ["blueCity", "udaipurLake", "mehrangarh"]
  },
  {
    slug: "12-days-rajasthan-heritage-wildlife-tour",
    title: "12 days Rajasthan heritage and wildlife tour",
    cat: "rajasthan",
    catLabel: "Rajasthan journeys",
    route: "Delhi · Agra · Ranthambore · Jaipur · Jodhpur · Udaipur",
    days: 12, nights: 11,
    durationLabel: "12 days",
    price: 148000,
    img: IMG.umaidBhawan,
    summary: "Twelve days across Rajasthan with two tiger safaris in Ranthambore, three fort cities and the lakes at Udaipur.",
    facts: [
      ["Duration", "12 days, 11 nights"],
      ["Destinations", "Delhi · Agra · Ranthambore · Jaipur · Jodhpur · Udaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "11 nights hotel stay"],
      ["Tour type", "Private"],
      ["Wildlife", "Morning and afternoon safaris in Ranthambore"],
      ["Return", "Udaipur or Delhi, as selected"]
    ],
    highlights: [
      "Morning and afternoon tiger safaris in Ranthambore National Park",
      "Two full days in Jaipur rather than one",
      "Mehrangarh Fort, Jaswant Thada and Umaid Bhawan Palace",
      "Ranakpur Jain Temple between Jodhpur and Udaipur",
      "Boat ride on Lake Pichola at the end of the route"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, private transfer to your hotel, check in and unwind." },
      { day: "Day 2", text: "Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { day: "Day 3", text: "Checkout around 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset over the Taj from Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then the drive to Ranthambore." },
      { day: "Day 5", text: "Morning safari in Ranthambore National Park, breakfast and rest at the resort, then a second safari in the afternoon." },
      { day: "Day 6", text: "Drive to Jaipur, about four hours. City Palace and Jantar Mantar on arrival, with a photo stop at Hawa Mahal." },
      { day: "Day 7", text: "Amber Fort, a photo stop at Jal Mahal, the Monkey Temple and the Albert Hall Museum." },
      { day: "Day 8", text: "Six hours to Jodhpur. Check in and take the rest of the day at your own pace." },
      { day: "Day 9", text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore Gardens and the Clock Tower market." },
      { day: "Day 10", text: "Five hours to Udaipur with a stop at the Ranakpur Jain Temple." },
      { day: "Day 11", text: "City Palace and Jagdish Temple, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { day: "Day 12", text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "11 nights hotel accommodation with breakfast and taxes", "Morning and afternoon safari in Ranthambore", "Boat ride on Lake Pichola", "Rickshaw ride in Old Delhi", "Udaipur to Delhi flight", "Bottled water, tolls, parking and taxes"],
    excludes: ["Travel insurance", "Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["How many safaris are included?", "Two — one in the morning and one in the afternoon of the Ranthambore day. Zones are allotted by the Forest Department."],
      ["Is this suitable for families?", "Yes. The private vehicle and the flexible schedule make it workable with children, and the safaris tend to be the highlight for them."],
      ["Can the route be shortened?", "Yes. Dropping Ranthambore gives you the 10 day version; dropping Jodhpur gives eight."]
    ],
    gallery: ["umaidBhawan", "udaipurLake", "jaswantThada"]
  },
  {
    slug: "13-days-classic-rajasthan-cultural-tour",
    title: "13 days classic Rajasthan cultural tour",
    cat: "rajasthan",
    catLabel: "Rajasthan journeys",
    route: "Delhi · Agra · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur",
    days: 13, nights: 12,
    durationLabel: "13 days",
    price: 162000,
    img: IMG.jaisalmerCity,
    summary: "The full desert circuit — Bikaner, a night in a Jaisalmer desert camp, Mehrangarh and Udaipur — with the Taj Mahal at the start.",
    facts: [
      ["Duration", "13 days, 12 nights"],
      ["Destinations", "Delhi · Agra · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "12 nights, including one desert camp"],
      ["Tour type", "Private"],
      ["Desert safari", "Camel ride and a cultural evening"],
      ["Return", "Udaipur or Delhi, as selected"]
    ],
    highlights: [
      "Junagarh Fort, Lalgarh Palace and Karni Mata Temple in Bikaner",
      "Jaisalmer Fort and the Patwon Ki Haveli",
      "A night at a desert camp with a camel ride, folk music and dinner",
      "Mehrangarh Fort and the Blue City",
      "Ranakpur Jain Temple and a boat ride on Lake Pichola"
    ],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, private transfer to your hotel, check in and rest." },
      { day: "Day 2", text: "Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { day: "Day 3", text: "Checkout around 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, a photo stop at Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar and Patrika Gate." },
      { day: "Day 6", text: "Six hours to Bikaner through changing desert country. Check in and take the evening easy." },
      { day: "Day 7", text: "Junagarh Fort, Lalgarh Palace, Karni Mata Temple, Gajner Lake and Lakshmi Niwas Palace, then on to Jaisalmer by evening." },
      { day: "Day 8", text: "Jaisalmer Fort, Salim Singh Haveli and Patwon Ki Haveli. In the afternoon, out to the Khuri dunes for a camel ride, sunset, folk music and dinner at the desert camp." },
      { day: "Day 9", text: "Five hours to Jodhpur. Check in and spend the rest of the day at your own pace." },
      { day: "Day 10", text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, the Sardar Government Museum, Mandore Gardens and the Clock Tower market." },
      { day: "Day 11", text: "Checkout around 9 am for Udaipur, stopping at the Ranakpur Jain Temple." },
      { day: "Day 12", text: "Jagdish Temple and City Palace, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { day: "Day 13", text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "12 nights hotel accommodation with breakfast and taxes", "One night at a desert camp", "Jaisalmer desert safari and camel ride", "Folk music and cultural performance at the camp", "Boat ride on Lake Pichola", "Rickshaw ride in Old Delhi", "Udaipur to Delhi flight", "Bottled water, tolls, parking and taxes"],
    excludes: ["Travel insurance", "Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["What is the desert camp like?", "Tented accommodation out at the Khuri dunes, with dinner, folk music and dance. One night, and for most people it is the night they remember."],
      ["Is the camel ride optional?", "Yes. It is included but nobody has to get on a camel — the sunset and the dinner work on their own."],
      ["When should we travel?", "October to March. The desert nights get cold in December and January, so pack accordingly."]
    ],
    gallery: ["jaisalmerCity", "haveli", "udaipurLake"]
  },
  {
    slug: "2-days-golden-triangle-tour",
    title: "2 days Golden Triangle tour",
    cat: "golden-triangle", catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur", days: 2, nights: 1, durationLabel: "2 days", price: 24900,
    img: IMG.fatehpurSikri,
    summary: "The tightest version of the route: Agra on day one, Jaipur on day two, back in Delhi by night. Long days, but all three cities in a weekend.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Delhi · Agra · Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "1 night in Jaipur"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Day 2, late evening"]],
    highlights: ["Taj Mahal and Agra Fort on day one", "Fatehpur Sikri on the Agra to Jaipur road",
                 "Amber Fort and the Jaipur city palaces on day two", "One hotel night, so you unpack once"],
    itinerary: [
      { day: "Day 1 · 06:00", text: "Early pickup in Delhi and the drive to Agra. Taj Mahal with your guide, then Agra Fort." },
      { day: "Day 1 · 15:00", text: "On to Jaipur with a stop at Fatehpur Sikri, arriving in the evening to check in." },
      { day: "Day 2 · 08:00", text: "Amber Fort at opening, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar." },
      { day: "Day 2 · 16:00", text: "The drive back to Delhi, arriving around 10 pm." }
    ],
    includes: ["Private AC car and chauffeur for both days", "Licensed guides in Agra and Jaipur", "One night hotel with breakfast", "Monument tickets", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Is two days too rushed?", "It is the shortest the route works at. You see everything but spend about nine hours in the car across the two days. Three days is noticeably easier."],
           ["Can we start from the airport?", "Yes, and many people do this between flights."]],
    gallery: ["fatehpurSikri", "taj", "hawaMahalClose"]
  },
  {
    slug: "7-days-golden-triangle-tour",
    title: "7 days Golden Triangle tour",
    cat: "golden-triangle", catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur", days: 7, nights: 6, durationLabel: "7 days", price: 74500,
    img: IMG.amber,
    summary: "Three cities over a full week, with two nights in each and days that end before dark. The version for people who dislike being hurried.",
    facts: [["Duration", "7 days, 6 nights"], ["Destinations", "Delhi · Agra · Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "6 nights, two in each city"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Delhi"]],
    highlights: ["Two nights in every city, so nothing is a half-day", "Taj Mahal at both sunrise and sunset",
                 "A free afternoon in each city", "Fatehpur Sikri and Chand Baori on the road legs",
                 "Craft workshops in Agra and Jaipur rather than commission shops"],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, transfer to your hotel, evening at leisure." },
      { day: "Day 2", text: "Old Delhi in the morning — Jama Masjid, a rickshaw through Chandni Chowk, the spice market — then New Delhi's monuments in the afternoon." },
      { day: "Day 3", text: "Drive to Agra. Agra Fort in the afternoon, sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, Itimad-ud-Daulah after breakfast, and a free afternoon for the marble inlay workshops." },
      { day: "Day 5", text: "To Jaipur via Fatehpur Sikri and the Chand Baori stepwell." },
      { day: "Day 6", text: "Amber Fort at opening, Panna Meena stepwell, City Palace and Jantar Mantar, sunset at Nahargarh." },
      { day: "Day 7", text: "A free morning for the bazaars, then the drive back to Delhi." }
    ],
    includes: ["Private AC car and chauffeur for 7 days", "Licensed guides in all three cities", "6 nights hotel with breakfast", "All monument tickets", "Rickshaw ride in Old Delhi", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["How is this different from the 6 day tour?", "The extra day becomes free time rather than more sightseeing — an afternoon in each city with nothing booked."],
           ["Can we add Ranthambore?", "Yes, that becomes the 7 day tour with Ranthambore, which swaps the free time for two tiger safaris."]],
    gallery: ["amber", "tajSunrise", "jaliScreen"]
  },
  {
    slug: "half-day-delhi-city-tour",
    title: "Half day Delhi city tour",
    cat: "delhi", catLabel: "New Delhi tours",
    route: "Old or New Delhi", days: 1, nights: 0, durationLabel: "4 to 6 hours", price: 3800,
    img: IMG.qutub,
    summary: "Four to six hours covering one half of the city — the Mughal old town or the colonial and modern south. Built for layovers and spare afternoons.",
    facts: [["Duration", "4 to 6 hours"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Best for", "Layovers and half-free days"]],
    highlights: ["Choose Old Delhi or New Delhi, whichever suits the hours you have",
                 "Rickshaw ride through Chandni Chowk on the Old Delhi route",
                 "Qutub Minar and Humayun's Tomb on the New Delhi route",
                 "Airport pickup and drop, timed around your flight"],
    itinerary: [
      { day: "Option A · Old Delhi", text: "Jama Masjid, a cycle rickshaw through Chandni Chowk and the spice market, Raj Ghat, and the Red Fort from outside." },
      { day: "Option B · New Delhi", text: "Humayun's Tomb, Qutub Minar, India Gate and a drive along Rajpath past the Rashtrapati Bhavan." }
    ],
    includes: ["Private AC car for the duration", "Licensed Delhi guide", "Monument tickets", "Bottled water", "Parking and taxes"],
    excludes: ["Meals", "Camera fees", "Tips"],
    faqs: [["Does this work on a layover?", "Yes, this is what most people use it for. We need about six hours between flights to do it comfortably, including both airport runs."],
           ["Which half should we pick?", "Old Delhi if you want atmosphere and food; New Delhi if you want monuments and gardens."]],
    gallery: ["qutub", "humayun", "redFort"]
  },
  {
    slug: "evening-delhi-city-tour",
    title: "Evening Delhi city tour",
    cat: "delhi", catLabel: "New Delhi tours",
    route: "Old Delhi · Evening", days: 1, nights: 0, durationLabel: "4 hours", price: 3500,
    img: IMG.lotusNight,
    summary: "Four hours after the heat drops: the old city as it lights up, the Gurudwara at lamp-lighting, and dinner in the lanes if you want it.",
    facts: [["Duration", "About 4 hours"], ["Starts", "Around 4 pm"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel in Delhi NCR"]],
    highlights: ["Chandni Chowk when the lights come on", "Gurudwara Bangla Sahib at lamp-lighting, including the community kitchen",
                 "India Gate lit up after dark", "Optional street food stops along the way"],
    itinerary: [
      { day: "16:00", text: "Pickup from your hotel and into Old Delhi as the afternoon cools." },
      { day: "17:00", text: "Jama Masjid and a rickshaw ride through Chandni Chowk, with the shops at their busiest." },
      { day: "18:30", text: "Gurudwara Bangla Sahib for the evening lamp-lighting and a look at the langar kitchen." },
      { day: "19:30", text: "India Gate after dark, then drop at your hotel." }
    ],
    includes: ["Private AC car", "Licensed Delhi guide", "Rickshaw ride", "Bottled water", "Parking and taxes"],
    excludes: ["Food and drinks", "Camera fees", "Tips"],
    faqs: [["Is Old Delhi safe in the evening?", "Yes, and it is at its best then. You are with a guide and the driver stays on call throughout."],
           ["Can we eat on this tour?", "Yes. Tell us beforehand and the guide builds in stops at places they would eat themselves."]],
    gallery: ["lotusNight", "redFort", "indiaGate"]
  },
  {
    slug: "delhi-temples-and-spiritual-sites-tour",
    title: "Delhi temples and spiritual sites tour",
    cat: "delhi", catLabel: "New Delhi tours",
    route: "Delhi · Faiths", days: 1, nights: 0, durationLabel: "8 hours", price: 6200,
    img: IMG.lotusTemple,
    summary: "A full day across the faiths that built Delhi — Sikh, Hindu, Muslim, Baha'i and Jain — with a guide who can explain what is happening inside.",
    facts: [["Duration", "About 8 hours"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Dress code", "Covered shoulders and knees; heads covered at the Gurudwara"]],
    highlights: ["Gurudwara Bangla Sahib and its langar, which feeds thousands daily",
                 "Akshardham's carved stone complex", "The Lotus Temple, a Baha'i house of worship open to all",
                 "Jama Masjid, one of India's largest mosques", "Nizamuddin Dargah, where qawwali is sung on Thursday evenings"],
    itinerary: [
      { day: "09:00", text: "Gurudwara Bangla Sahib, including the kitchen where the community meal is cooked." },
      { day: "10:30", text: "Jama Masjid and the lanes around it." },
      { day: "12:30", text: "Lotus Temple, with time to sit inside." },
      { day: "14:30", text: "Akshardham and its carved sandstone complex." },
      { day: "16:30", text: "Nizamuddin Dargah, and on a Thursday the qawwali singing, then drop at your hotel." }
    ],
    includes: ["Private AC car for the day", "Licensed guide", "All entry tickets where charged", "Bottled water", "Parking and taxes"],
    excludes: ["Meals", "Camera fees", "Tips", "Akshardham electronics locker charges"],
    faqs: [["Do we need to cover our heads?", "At the Gurudwara and the Dargah, yes. Scarves are available at both, and we carry spares in the car."],
           ["Is Akshardham camera-friendly?", "No, phones and cameras are not allowed inside and must be left in lockers at the entrance."],
           ["Can non-Muslims enter the Dargah?", "Yes. Dress modestly, remove shoes and follow your guide's lead."]],
    gallery: ["lotusTemple", "humayun", "redFort"]
  },
  {
    slug: "old-delhi-food-tasting-tour",
    title: "Old Delhi food tasting tour with Chandni Chowk",
    cat: "delhi", catLabel: "New Delhi tours",
    route: "Chandni Chowk", days: 1, nights: 0, durationLabel: "4 hours", price: 4500,
    img: IMG.redFort,
    summary: "Four hours and roughly eight stops through the lanes of Chandni Chowk, eating at shops that have been doing one dish for a century.",
    facts: [["Duration", "About 4 hours"], ["Food", "8 to 10 tastings, enough for a meal"], ["Transport", "Private AC car plus walking and rickshaw"],
            ["Tour type", "Private"], ["Guide", "Local food guide"], ["Best time", "Late afternoon into the evening"]],
    highlights: ["Paranthe Wali Gali, where the shops fry stuffed paratha and little else",
                 "Jalebi and rabri at a corner that has been there since before Partition",
                 "Kebabs and korma near Jama Masjid", "Daulat ki chaat in winter, if the season is right",
                 "A rickshaw leg through the narrowest lanes"],
    itinerary: [
      { day: "Stop 1–3", text: "Into the lanes on foot — chaat, stuffed paratha and the sweet shops along the main bazaar." },
      { day: "Stop 4–6", text: "A rickshaw leg to the Jama Masjid end for kebabs, korma and bread from the tandoor." },
      { day: "Stop 7–8", text: "Jalebi, rabri and kulfi to finish, with masala chai and time to catch your breath." }
    ],
    includes: ["All food tastings on the route", "Local food guide", "Rickshaw ride", "Private AC car for pickup and drop", "Bottled water"],
    excludes: ["Alcohol", "Extra portions beyond the tasting route", "Tips"],
    faqs: [["Is vegetarian food covered?", "Easily. Most of Chandni Chowk's famous shops are vegetarian, so a veg-only route loses nothing."],
           ["Will the food upset our stomachs?", "We use shops with high turnover and cooked-to-order food, which is where the risk drops. Tell us about any sensitivities beforehand."],
           ["Should we eat before?", "No. Eight to ten tastings add up to a full meal."]],
    gallery: ["redFort", "craftsShop", "qutub"]
  },
  {
    slug: "delhi-2-days-city-tour",
    title: "2 days Old and New Delhi city tour",
    cat: "delhi", catLabel: "New Delhi tours",
    route: "Old Delhi · New Delhi", days: 2, nights: 1, durationLabel: "2 days", price: 14500,
    img: IMG.indiaGate,
    summary: "Forty-eight hours in Delhi done properly — the Mughal city one day, the colonial and modern city the next, with the markets and temples in between.",
    facts: [["Duration", "2 days, 1 night"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Accommodation", "Optional, your choice of category"]],
    highlights: ["A full day each for Old and New Delhi", "Rickshaw ride and spice market in Chandni Chowk",
                 "Humayun's Tomb, Qutub Minar and the Lotus Temple", "Gurudwara Bangla Sahib at lamp-lighting",
                 "Time in Dilli Haat or Khan Market for crafts"],
    itinerary: [
      { day: "Day 1", text: "Old Delhi — Jama Masjid, a rickshaw through Chandni Chowk, the spice market, Raj Ghat and the Red Fort. Evening at Gurudwara Bangla Sahib." },
      { day: "Day 2", text: "New Delhi — Humayun's Tomb, Qutub Minar, the Lotus Temple, India Gate and a drive along Rajpath, with an afternoon for crafts at Dilli Haat." }
    ],
    includes: ["Private AC car for both days", "Licensed Delhi guide", "All monument tickets", "Rickshaw ride in Old Delhi", "Bottled water, parking and taxes"],
    excludes: ["Hotel unless added to your package", "Meals", "Camera fees", "Tips"],
    faqs: [["Is two days enough for Delhi?", "For the main sights, comfortably. Delhi rewards longer, but two days covers both halves without rushing."],
           ["Can this start the day we land?", "Yes. If the flight is early we start the same day; if not we begin the next morning."]],
    gallery: ["indiaGate", "qutub", "lotusTemple"]
  },
  {
    slug: "jaipur-day-tour-from-delhi-by-car",
    title: "Jaipur day tour from Delhi by car",
    cat: "jaipur", catLabel: "Jaipur tours",
    route: "Delhi · Jaipur · Delhi", days: 1, nights: 0, durationLabel: "1 day", price: 11500,
    img: IMG.hawaMahal,
    summary: "A long but workable day: leave Delhi before dawn, see Amber Fort and the city palaces, and be back the same night.",
    facts: [["Duration", "Same day, about 14 hours"], ["Departure city", "Delhi NCR"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Licensed Jaipur guide"], ["Return", "Around 10 pm"]],
    highlights: ["Amber Fort before the coaches arrive", "Jal Mahal and the Hawa Mahal facade",
                 "City Palace and Jantar Mantar", "A stop for gemstones or block print if you want one"],
    itinerary: [
      { day: "05:00", text: "Pickup in Delhi and the drive to Jaipur, about five hours with a tea break." },
      { day: "10:00", text: "Amber Fort with your Jaipur guide, then a photo stop at Jal Mahal." },
      { day: "13:00", text: "Lunch, then City Palace, Jantar Mantar and the Hawa Mahal facade." },
      { day: "17:00", text: "The drive back to Delhi, arriving around 10 pm." }
    ],
    includes: ["Private AC car and chauffeur", "Licensed Jaipur guide", "All monument tickets", "Bottled water, tolls, parking and taxes"],
    excludes: ["Meals", "Elephant or jeep ride at Amber", "Camera fees", "Tips"],
    faqs: [["Is it worth doing Jaipur in a day?", "It works, but it is fourteen hours with ten in the car. An overnight stay costs a little more and changes the day completely."],
           ["What time do we need to leave?", "Five in the morning. Later than that and Amber Fort is crowded by the time you reach it."]],
    gallery: ["hawaMahal", "amber", "jalMahal"]
  },
  {
    slug: "jaipur-day-tour-by-superfast-train",
    title: "Jaipur day tour from Delhi by superfast train",
    cat: "jaipur", catLabel: "Jaipur tours",
    route: "Delhi · Train · Jaipur", days: 1, nights: 0, durationLabel: "1 day", price: 13500,
    img: IMG.jalMahal,
    summary: "The same Jaipur day without the long drive — a morning train out, a car and guide waiting at the station, and the evening train back.",
    facts: [["Duration", "Same day, about 15 hours"], ["Transport", "Shatabdi Express plus a private car in Jaipur"],
            ["Class", "AC chair car, meals served on board"], ["Tour type", "Private"],
            ["Guide", "Licensed Jaipur guide"], ["Return", "Around 11 pm"]],
    highlights: ["Train both ways, so nobody spends ten hours on the road", "Breakfast and dinner served on board",
                 "Private car and guide waiting at Jaipur Junction", "Amber Fort, City Palace and Hawa Mahal"],
    itinerary: [
      { day: "05:30", text: "Transfer to New Delhi railway station for the Shatabdi Express, with breakfast served on board." },
      { day: "10:30", text: "Arrive at Jaipur Junction, where your car and guide are waiting. Straight to Amber Fort." },
      { day: "13:30", text: "Lunch, then City Palace, Jantar Mantar and Hawa Mahal." },
      { day: "17:30", text: "Return train to Delhi with dinner on board, and a transfer to your hotel." }
    ],
    includes: ["Return train tickets, AC chair car", "Station transfers in Delhi and Jaipur", "Private car in Jaipur", "Licensed guide", "All monument tickets", "Taxes"],
    excludes: ["Lunch in Jaipur", "Camera fees", "Tips"],
    faqs: [["Is the train better than the car?", "For the day trip, usually yes. Four and a half hours of driving each way becomes about four and a half hours of train total, and you arrive rested."],
           ["What if the train is late?", "We build slack into the sightseeing. If a delay runs long, the guide reorders the day so the fort still happens."]],
    gallery: ["jalMahal", "amber", "hawaMahalClose"]
  },
  {
    slug: "jaipur-private-sightseeing-tour",
    title: "Jaipur private sightseeing with a professional guide",
    cat: "jaipur", catLabel: "Jaipur tours",
    route: "Jaipur city", days: 1, nights: 0, durationLabel: "1 day", price: 6500,
    img: IMG.hawaMahalClose,
    summary: "A full day in Jaipur for travellers already in the city — car, guide and the timings that keep you ahead of the crowds.",
    facts: [["Duration", "8 to 10 hours"], ["Starts", "Your Jaipur hotel"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Licensed Jaipur guide"], ["Best start", "8 am, for Amber Fort at opening"]],
    highlights: ["Amber Fort at opening time", "Panna Meena ka Kund, the stepwell most tours skip",
                 "City Palace and Jantar Mantar with a guide who can read the instruments",
                 "Sunset from Nahargarh Fort over the old city"],
    itinerary: [
      { day: "08:00", text: "Amber Fort as the gates open, then Panna Meena stepwell and a photo stop at Jal Mahal." },
      { day: "12:00", text: "Lunch, then City Palace and Jantar Mantar." },
      { day: "15:30", text: "Hawa Mahal and the old city bazaars, with a craft workshop if you want one." },
      { day: "18:00", text: "Sunset at Nahargarh Fort, then drop at your hotel." }
    ],
    includes: ["Private AC car for the day", "Licensed Jaipur guide", "All monument tickets", "Bottled water, parking and taxes"],
    excludes: ["Meals", "Elephant or jeep ride at Amber", "Shopping", "Tips"],
    faqs: [["We are already in Jaipur — does this still work?", "Yes, this tour is built for that. Pickup is from your Jaipur hotel, not Delhi."],
           ["Can we skip the shopping stops?", "Yes, and we skip them by default. They only happen if you ask."]],
    gallery: ["hawaMahalClose", "amber", "jalMahal"]
  },
  {
    slug: "jaipur-shopping-tour",
    title: "Private Jaipur shopping tour",
    cat: "jaipur", catLabel: "Jaipur tours",
    route: "Jaipur bazaars", days: 1, nights: 0, durationLabel: "Half day", price: 4200,
    img: IMG.craftsShop,
    summary: "Half a day through the bazaars and workshops with someone who knows which places make their own work and which just resell it.",
    facts: [["Duration", "4 to 5 hours"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Local guide, no commission arrangements"], ["Best time", "Late afternoon, when the bazaars fill"], ["Starts", "Your Jaipur hotel"]],
    highlights: ["Block printing workshops at Sanganer or Bagru", "Blue pottery studios in the old city",
                 "Johari Bazaar for gemstones, with advice on what to check",
                 "Bapu Bazaar for textiles, juttis and bangles", "No commission stops — we do not take a cut from any shop"],
    itinerary: [
      { day: "Part 1", text: "A block printing or blue pottery workshop, where the work is actually made rather than sold." },
      { day: "Part 2", text: "Johari Bazaar for gemstones and silver, with your guide explaining what to ask and what to avoid." },
      { day: "Part 3", text: "Bapu and Tripolia bazaars for textiles, juttis, bangles and whatever else catches you, then back to your hotel." }
    ],
    includes: ["Private AC car for the duration", "Local guide", "Bottled water", "Parking and taxes"],
    excludes: ["Anything you buy", "Shipping costs", "Meals", "Tips"],
    faqs: [["Do you take commission from the shops?", "No. That is the point of this tour. Your guide is paid by us, not by the shopkeepers, so the recommendations are honest."],
           ["Can you arrange shipping?", "Most established shops ship internationally and will handle it. Your guide checks the paperwork before you pay."],
           ["Are gemstones in Jaipur a good buy?", "They can be, and they can also be a trap. Buy from certified dealers, ask for the certificate in writing, and never buy a 'resale at home' story."]],
    gallery: ["craftsShop", "hawaMahal", "marbleInlay"]
  },
  {
    slug: "2-days-taj-mahal-and-jaipur-tour",
    title: "2 days Taj Mahal and Jaipur tour by car",
    cat: "jaipur", catLabel: "Jaipur tours",
    route: "Delhi · Agra · Jaipur", days: 2, nights: 1, durationLabel: "2 days", price: 26500,
    img: IMG.taj,
    summary: "Agra on day one, Jaipur on day two, one night in between — the two big destinations without the Delhi sightseeing day.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Agra and Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "1 night, Agra or Jaipur"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"]],
    highlights: ["Taj Mahal and Agra Fort with a licensed guide", "Fatehpur Sikri on the drive between the two cities",
                 "Amber Fort and the Jaipur city palaces", "Only one hotel change in two days"],
    itinerary: [
      { day: "Day 1", text: "Early pickup in Delhi, drive to Agra. Taj Mahal and Agra Fort with your guide, then on to Jaipur via Fatehpur Sikri. Overnight in Jaipur." },
      { day: "Day 2", text: "Amber Fort at opening, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal, then the drive back to Delhi." }
    ],
    includes: ["Private AC car for both days", "Licensed guides in Agra and Jaipur", "One night hotel with breakfast", "All monument tickets", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Why skip Delhi?", "Many travellers have already seen Delhi or are flying in and out of it. This route spends the time on Agra and Jaipur instead."],
           ["Which city should we stay in?", "Jaipur, usually. It makes day two start at the fort rather than in the car."]],
    gallery: ["taj", "amber", "fatehpurSikri"]
  },
  {
    slug: "taj-mahal-sunrise-with-elephant-conservation",
    title: "Taj Mahal sunrise tour with elephant conservation centre",
    cat: "same-day", catLabel: "Same day tours",
    route: "Delhi · Agra · Mathura", days: 1, nights: 0, durationLabel: "1 day", price: 12900,
    img: IMG.tajSunrise,
    summary: "Sunrise at the Taj Mahal, then an afternoon at the elephant conservation centre near Mathura, where rescued working elephants are rehabilitated.",
    facts: [["Duration", "Same day, about 15 hours"], ["Destinations", "Agra and the conservation centre near Mathura"],
            ["Transport", "Private AC car"], ["Tour type", "Private"], ["Guide", "Licensed guide in Agra"], ["Return", "Around 8 pm"]],
    highlights: ["First entry at the Taj Mahal, before the crowds reach the platform",
                 "Agra Fort after breakfast", "An afternoon with rescued elephants at a no-riding, no-performance sanctuary",
                 "Back in Delhi the same evening"],
    itinerary: [
      { day: "02:30", text: "Pickup in Delhi and the quiet drive to Agra." },
      { day: "06:00", text: "Sunrise at the Taj Mahal with your guide, in the first group through the gate." },
      { day: "09:00", text: "Breakfast, then Agra Fort." },
      { day: "12:30", text: "Drive towards Mathura to the elephant conservation centre, with time to walk the enclosures and hear each animal's history." },
      { day: "16:00", text: "The drive back to Delhi, arriving around 8 pm." }
    ],
    includes: ["Private AC car and chauffeur", "Licensed guide in Agra", "Taj Mahal and Agra Fort tickets", "Conservation centre entry and donation", "Bottled water, tolls and taxes"],
    excludes: ["Meals", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Can we ride the elephants?", "No, and that is deliberate. The centre rehabilitates elephants rescued from riding and begging work; riding and performances are not part of the visit."],
           ["Is the centre suitable for children?", "Yes. It is an observation visit with keepers explaining each animal's history, and children generally take to it."],
           ["How long is the day?", "About fifteen hours door to door, starting at 2:30 am. It is a long one — the sunrise is what makes it worth it."]],
    gallery: ["tajSunrise", "agraFort", "mehtabBagh"]
  },
  {
    slug: "8-days-golden-triangle-with-varanasi",
    title: "8 days Golden Triangle tour with Varanasi",
    cat: "golden-triangle", catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur · Varanasi", days: 8, nights: 7, durationLabel: "8 days", price: 104000,
    img: IMG.varanasi,
    summary: "The three Mughal cities, then a flight east to the Ganga — sunrise on the river, the evening aarti and Sarnath to finish.",
    facts: [["Duration", "8 days, 7 nights"], ["Destinations", "Delhi · Agra · Jaipur · Varanasi"],
            ["Transport", "Private AC car, plus a flight to Varanasi"], ["Accommodation", "7 nights with breakfast"],
            ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Ends", "Varanasi or Delhi"]],
    highlights: ["Taj Mahal at sunrise and Agra Fort", "Amber Fort and the Jaipur city palaces",
                 "Sunrise boat ride on the Ganga", "Evening Ganga aarti watched from the water",
                 "Sarnath, where the Buddha gave his first sermon"],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, transfer to your hotel, evening at leisure." },
      { day: "Day 2", text: "Old and New Delhi with your guide — Jama Masjid, Chandni Chowk by rickshaw, Humayun's Tomb and Qutub Minar." },
      { day: "Day 3", text: "Drive to Agra. Agra Fort in the afternoon and sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, then on to Jaipur stopping at Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal." },
      { day: "Day 6", text: "Fly to Varanasi. Evening Ganga aarti at Dashashwamedh Ghat, watched from a boat." },
      { day: "Day 7", text: "Sunrise boat ride along the ghats, a walk through the old city, then Sarnath in the afternoon." },
      { day: "Day 8", text: "Transfer to Varanasi airport for your onward flight." }
    ],
    includes: ["Private AC car in Delhi, Agra and Jaipur", "Jaipur to Varanasi flight", "Licensed guides in each city",
               "7 nights hotel with breakfast", "Two boat rides in Varanasi", "All monument tickets", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Why fly rather than drive to Varanasi?", "It is around 900 km from Jaipur. The flight takes two hours and gives you a day back."],
           ["Is the aarti suitable for children?", "Yes, and from a boat it is comfortable. On the ghat itself the crowd can be overwhelming."],
           ["Can we end in Varanasi?", "Yes. Many guests fly on to Kathmandu or Kolkata from there rather than returning to Delhi."]],
    gallery: ["varanasi", "tajSunrise", "amber"]
  },
  {
    slug: "varanasi-2-days-spiritual-tour",
    title: "2 days Varanasi spiritual tour",
    cat: "varanasi", catLabel: "Varanasi tours",
    route: "Varanasi · Sarnath", days: 2, nights: 1, durationLabel: "2 days", price: 16500,
    img: IMG.varanasi,
    summary: "Two days on the Ganga — a boat at first light, the old city on foot, the evening aarti from the water and Sarnath in between.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Varanasi and Sarnath"], ["Transport", "Private AC car plus boats"],
            ["Tour type", "Private"], ["Guide", "Licensed Varanasi guide"], ["Starts", "Varanasi airport or station"]],
    highlights: ["Sunrise boat ride past the bathing ghats", "A walk through the lanes behind the river",
                 "Evening Ganga aarti watched from a boat", "Sarnath, where Buddhism began, and its museum",
                 "Kashi Vishwanath temple corridor"],
    itinerary: [
      { day: "Day 1 · afternoon", text: "Arrival and check-in, then Sarnath — the Dhamek Stupa, the ruins and the archaeological museum." },
      { day: "Day 1 · evening", text: "To Dashashwamedh Ghat by boat for the Ganga aarti, watched from the water rather than the crowd." },
      { day: "Day 2 · 05:30", text: "A boat along the ghats at first light, as the city comes down to the river to bathe." },
      { day: "Day 2 · 09:00", text: "Breakfast, then a walk through the old lanes to the Kashi Vishwanath corridor and the silk weavers' quarter." }
    ],
    includes: ["Private AC car", "Licensed Varanasi guide", "Two private boat rides", "One night hotel with breakfast", "All entry tickets", "Taxes"],
    excludes: ["Flights or trains to Varanasi", "Meals other than breakfast", "Camera fees", "Tips"],
    faqs: [["How early is the sunrise boat?", "On the water by 5:30 am in summer, closer to 6 in winter. It is the best hour of the day here."],
           ["Is there a dress code?", "Modest clothing, and shoes come off at the temples. The lanes are uneven, so wear something you can walk in."],
           ["Can we photograph the cremation ghats?", "No. Your guide will be direct about this. Everywhere else is fine."]],
    gallery: ["varanasi", "lotusTemple", "jaliScreen"]
  },
  {
    slug: "8-days-golden-triangle-with-amritsar",
    title: "8 days Golden Triangle tour with Amritsar",
    cat: "golden-triangle", catLabel: "Golden Triangle",
    route: "Delhi · Agra · Jaipur · Amritsar", days: 8, nights: 7, durationLabel: "8 days", price: 99500,
    img: IMG.amritsar,
    summary: "The classic route plus two days in Amritsar — the Golden Temple at dawn, the langar kitchen, Jallianwala Bagh and the border ceremony at Wagah.",
    facts: [["Duration", "8 days, 7 nights"], ["Destinations", "Delhi · Agra · Jaipur · Amritsar"],
            ["Transport", "Private AC car, with a train or flight to Amritsar"], ["Accommodation", "7 nights with breakfast"],
            ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Ends", "Amritsar or Delhi"]],
    highlights: ["The Golden Temple at dawn, when the crowds are thinnest",
                 "The langar kitchen, which feeds around a hundred thousand people daily",
                 "Jallianwala Bagh and the Partition Museum", "The flag-lowering ceremony at the Wagah border",
                 "Taj Mahal at sunrise earlier in the route"],
    itinerary: [
      { day: "Day 1", text: "Arrive in Delhi, transfer to your hotel, evening at leisure." },
      { day: "Day 2", text: "Old and New Delhi with your guide." },
      { day: "Day 3", text: "Drive to Agra, Agra Fort and sunset at Mehtab Bagh." },
      { day: "Day 4", text: "Taj Mahal at sunrise, then on to Jaipur via Fatehpur Sikri." },
      { day: "Day 5", text: "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal." },
      { day: "Day 6", text: "Return to Delhi and take the afternoon train or an evening flight to Amritsar." },
      { day: "Day 7", text: "The Golden Temple at dawn, the langar kitchen, Jallianwala Bagh and the Partition Museum, then Wagah in the late afternoon." },
      { day: "Day 8", text: "A second early visit to the temple if you want one, then transfer to Amritsar airport." }
    ],
    includes: ["Private AC car throughout", "Delhi to Amritsar train or flight", "Licensed guides in each city",
               "7 nights hotel with breakfast", "All monument tickets", "Wagah border transfers", "Tolls, parking and taxes"],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Do we need to cover our heads at the Golden Temple?", "Yes, everyone does. Scarves are available at the entrance and we carry spares."],
           ["Is Wagah worth the trip?", "It is loud and theatrical and unlike anything else. Go early; the stands fill long before it begins."],
           ["Train or flight to Amritsar?", "The train takes about six hours and is comfortable. The flight takes an hour. We book whichever suits the day."]],
    gallery: ["amritsar", "tajSunrise", "redFort"]
  },
  {
    slug: "3-days-ranthambore-safari-tour",
    title: "3 days Ranthambore tiger safari tour",
    cat: "rajasthan", catLabel: "Rajasthan journeys",
    route: "Ranthambore National Park", days: 3, nights: 2, durationLabel: "3 days", price: 32500,
    img: IMG.ranthambore,
    summary: "Four safaris across two full days in Ranthambore, with a resort beside the park and the tenth-century fort inside it.",
    facts: [["Duration", "3 days, 2 nights"], ["Destination", "Ranthambore National Park"], ["Safaris", "Four, morning and afternoon"],
            ["Vehicle", "Shared Gypsy, private on request"], ["Accommodation", "2 nights with all meals"],
            ["Tour type", "Private"], ["Nearest station", "Sawai Madhopur"]],
    highlights: ["Four safaris, which is where the odds of a tiger sighting become reasonable",
                 "Ranthambore Fort inside the park, a thousand years old and open to visitors",
                 "Padam Talao and the Jogi Mahal lakeside", "Resort stay with breakfast, lunch and dinner included",
                 "Easily added between Agra and Jaipur"],
    itinerary: [
      { day: "Day 1", text: "Arrive at Sawai Madhopur, check in and relax. Afternoon safari into the park." },
      { day: "Day 2", text: "Morning safari at first light, breakfast and rest, then a second safari in the afternoon." },
      { day: "Day 3", text: "A final morning safari, breakfast, and departure — or on towards Jaipur if this sits inside a longer route." }
    ],
    includes: ["2 nights resort accommodation with all meals", "Four safaris by shared Gypsy", "Park entry and permits",
               "Private AC car transfers", "Bottled water", "Taxes"],
    excludes: ["Private Gypsy upgrade", "Camera fees charged by the park", "Tips", "Travel to and from Sawai Madhopur unless added"],
    faqs: [["How likely is a tiger sighting?", "With four safaris, reasonable — but it is a wild animal in 1,300 square kilometres and nobody can promise it."],
           ["Which months are best?", "October to April. Visibility improves through the dry months as animals come to the water."],
           ["Can children go on safari?", "Yes. The Gypsy is open and the drives are two to three hours, which most children manage well."]],
    gallery: ["ranthambore", "chittorgarh", "amber"]
  },
  {
    slug: "7-days-kerala-backwaters-tour",
    title: "7 days Kerala backwaters and hills tour",
    cat: "south-india", catLabel: "South India tours",
    route: "Kochi · Munnar · Thekkady · Alleppey", days: 7, nights: 6, durationLabel: "7 days", price: 78500,
    img: IMG.kerala,
    summary: "Kerala at its own pace — colonial Kochi, tea estates at Munnar, spice hills at Thekkady and a night on a houseboat in the backwaters.",
    facts: [["Duration", "7 days, 6 nights"], ["Destinations", "Kochi · Munnar · Thekkady · Alleppey"],
            ["Transport", "Private AC car"], ["Accommodation", "5 nights hotel, 1 night houseboat"],
            ["Tour type", "Private"], ["Starts and ends", "Kochi airport"], ["Best season", "October to March"]],
    highlights: ["Fort Kochi, its Chinese fishing nets and the Paradesi synagogue",
                 "Tea estates and the drive up to Munnar", "A spice plantation walk at Thekkady",
                 "A night on a private houseboat in the Alleppey backwaters",
                 "A Kathakali performance, with the make-up done in front of you"],
    itinerary: [
      { day: "Day 1", text: "Arrive at Kochi, transfer to Fort Kochi. Evening Kathakali performance." },
      { day: "Day 2", text: "Fort Kochi on foot — the Chinese fishing nets, St Francis Church, the synagogue and the spice markets." },
      { day: "Day 3", text: "Drive up to Munnar through the tea country, stopping at waterfalls along the way." },
      { day: "Day 4", text: "Munnar — a tea estate and museum, Eravikulam National Park and the viewpoints." },
      { day: "Day 5", text: "On to Thekkady for a spice plantation walk and a boat on Periyar Lake." },
      { day: "Day 6", text: "Down to Alleppey to board a private houseboat. An afternoon and night drifting through the backwaters, with meals cooked on board." },
      { day: "Day 7", text: "Disembark after breakfast and transfer to Kochi airport." }
    ],
    includes: ["Private AC car for the whole route", "5 nights hotel with breakfast", "1 night private houseboat with all meals",
               "Local guides in Kochi and Thekkady", "Kathakali tickets", "Periyar boat ride", "Tolls, parking and taxes"],
    excludes: ["Flights to and from Kochi", "Lunch and dinner outside the houseboat", "Camera fees", "Tips"],
    faqs: [["Is one night on a houseboat enough?", "For most people yes. The boats moor at dusk, so a second night adds a morning rather than a day."],
           ["Is Kerala good in the monsoon?", "It is green and dramatic and much cheaper, but outdoor plans get wet. June to September is the heaviest."],
           ["Can this follow a Golden Triangle tour?", "Yes, with a flight from Delhi to Kochi. Allow two weeks for both."]],
    gallery: ["kerala", "lotusTemple", "craftsShop"]
  },
  {
    slug: "10-days-south-india-temples-and-backwaters",
    title: "10 days South India temples and backwaters tour",
    cat: "south-india", catLabel: "South India tours",
    route: "Chennai · Mahabalipuram · Thanjavur · Madurai · Kerala", days: 10, nights: 9, durationLabel: "10 days", price: 118000,
    img: IMG.kerala,
    summary: "Dravidian temple towns down the Tamil coast, then across to Kerala for the hills and the backwaters — the south at full length.",
    facts: [["Duration", "10 days, 9 nights"], ["Destinations", "Chennai · Mahabalipuram · Thanjavur · Madurai · Periyar · Alleppey · Kochi"],
            ["Transport", "Private AC car"], ["Accommodation", "8 nights hotel, 1 night houseboat"],
            ["Tour type", "Private"], ["Starts", "Chennai"], ["Ends", "Kochi"]],
    highlights: ["The shore temples and rock carvings at Mahabalipuram",
                 "Brihadeeswarar Temple at Thanjavur, a thousand years old and still in use",
                 "Meenakshi Temple at Madurai and its painted gopurams",
                 "A night on a houseboat in the Alleppey backwaters", "Tea country and a spice plantation walk"],
    itinerary: [
      { day: "Day 1", text: "Arrive in Chennai, transfer to your hotel, evening at leisure." },
      { day: "Day 2", text: "Chennai — Kapaleeshwarar Temple, San Thome Basilica, the government museum and Marina Beach." },
      { day: "Day 3", text: "Down the coast to Mahabalipuram for the Shore Temple, Arjuna's Penance and the rock-cut rathas." },
      { day: "Day 4", text: "On to Thanjavur via Chidambaram, with the Brihadeeswarar Temple in the late afternoon light." },
      { day: "Day 5", text: "Thanjavur palace and the bronze gallery, then to Madurai." },
      { day: "Day 6", text: "Meenakshi Temple at Madurai, the Thirumalai Nayak Palace, and the night ceremony at the temple." },
      { day: "Day 7", text: "Cross into Kerala to Thekkady for a spice plantation walk and a Periyar boat ride." },
      { day: "Day 8", text: "Up to Munnar through the tea estates." },
      { day: "Day 9", text: "Down to Alleppey and onto a private houseboat for the night." },
      { day: "Day 10", text: "Disembark after breakfast, transfer to Kochi airport." }
    ],
    includes: ["Private AC car for the whole route", "8 nights hotel with breakfast", "1 night private houseboat with all meals",
               "Licensed guides at each temple town", "All monument and temple tickets where charged", "Periyar boat ride", "Tolls, parking and taxes"],
    excludes: ["Flights into Chennai and out of Kochi", "Lunch and dinner outside the houseboat", "Camera fees at temples", "Tips"],
    faqs: [["Are non-Hindus allowed inside the temples?", "At most, yes, including Meenakshi. A few inner sanctums are restricted — your guide knows which."],
           ["Is there a dress code?", "Covered shoulders and knees, and shoes left outside. Some temples ask men to remove shirts in the inner areas."],
           ["Is ten days too long?", "It is the length the route needs. The drives between temple towns are three to four hours and the temples deserve unhurried time."]],
    gallery: ["kerala", "lotusTemple", "craftsShop"]
  }
];

/* Golden Triangle durations shown in the home-page selector */
const GT_OPTIONS = ["3 days", "4 days", "5 days", "6 days", "Custom"];
