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

  /* Free-licence photos from Unsplash (unsplash.com/license), Oct 2026 */
  varanasi:      "assets/img/photos/varanasi-ghats",
  gangaAarti:    "assets/img/photos/ganga-aarti",
  amritsar:      "assets/img/photos/golden-temple",
  kerala:        "assets/img/photos/kerala-houseboat",
  munnarTea:     "assets/img/photos/munnar-tea",
  kochiNets:     "assets/img/photos/kochi-fishing-nets",
  maduraiTemple: "assets/img/photos/madurai-temple",
  mysorePalace:  "assets/img/photos/mysore-palace",
  ranthambore:   "assets/img/photos/tiger-ranthambore",
  wildElephant:  "assets/img/photos/wild-elephant",
  mumbai:        "assets/img/photos/gateway-of-india",
  tigerGrass:    "assets/img/photos/tiger-dry-grass",
  tigerForest:   "assets/img/photos/tiger-forest",
  tigerPortrait: "assets/img/photos/tiger-portrait",
  jungleSafari:  "assets/img/photos/jungle-safari",
  leopard:       "assets/img/photos/leopard",
  corbettElephant: "assets/img/photos/corbett-elephant",
  khajuraho:     "assets/img/photos/khajuraho",
  premMandir:    "assets/img/photos/prem-mandir"
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
  { name: "Tripadvisor",   logo: "assets/img/partners/tripadvisor.webp" },
  { name: "GetYourGuide",  logo: "assets/img/partners/getyourguide.webp" },
  { name: "Viator",        logo: "assets/img/partners/viator.webp" },
  { name: "Expedia",       logo: "assets/img/partners/expedia.webp" },
  { name: "Lonely Planet", logo: "assets/img/partners/lonely-planet.webp" },
  { name: "TourRadar",     logo: "assets/img/partners/tourradar.webp" }
];

const COLLECTIONS = [
  { title: "Taj Mahal tour packages", note: "Sunrise, day and overnight", img: IMG.taj,        cat: "taj-mahal" },
  { title: "Same day tour packages", note: "Back to Delhi by night",     img: IMG.sikandra,   cat: "same-day" },
  { title: "Golden Triangle tour packages", note: "Delhi, Agra and Jaipur",     img: IMG.amber,      cat: "golden-triangle" },
  { title: "New Delhi tour packages", note: "Old city to New Delhi",      img: IMG.indiaGate,  cat: "delhi" },
  { title: "Jaipur tour packages", note: "Forts, palaces, bazaars",    img: IMG.hawaMahal,  cat: "jaipur" },
  { title: "Rajasthan tour packages", note: "Desert cities and havelis",  img: IMG.mehrangarh, cat: "rajasthan" },
  { title: "South India tour packages", note: "Temples, backwaters, tea hills", img: IMG.kerala, cat: "south-india" },
  { title: "Wildlife tour packages", note: "Tigers, leopards and jungle safaris", img: IMG.leopard, cat: "wildlife" }
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
  ["How much does a same day Agra tour from Delhi cost?", "Our private same day Agra tour by car starts from ₹7,900 per person, including the car, driver, a licensed guide, tolls and parking. The Gatimaan Express train tour starts from ₹11,500. Every quote is fixed before you pay."],
  ["Do you offer Agra local sightseeing if we are already in Agra?", "Yes. Our Agra local sightseeing tour picks you up from any Agra hotel or railway station and covers the Taj Mahal, Agra Fort, the Baby Taj and sunset at Mehtab Bagh with a licensed guide."],
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
    also: ["taj-mahal-tour-by-gatimaan-express", "taj-mahal-sunrise-with-elephant-conservation", "same-day-agra-tour-from-jaipur"],
    order: ["taj-mahal-day-tour-from-delhi", "taj-mahal-tour-by-gatimaan-express", "taj-mahal-sunrise-tour-from-delhi",
            "taj-mahal-sunrise-with-elephant-conservation", "taj-mahal-luxury-car-tour-from-delhi", "taj-mahal-sunrise-and-old-delhi-tour",
            "same-day-agra-tour-from-jaipur"],
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
    also: ["taj-mahal-day-tour-from-delhi", "taj-mahal-sunrise-tour-from-delhi", "taj-mahal-luxury-car-tour-from-delhi",
           "jaipur-day-tour-from-delhi-by-car", "taj-mahal-sunrise-and-old-delhi-tour",
           "agra-local-sightseeing-tour"],
    order: ["taj-mahal-day-tour-from-delhi", "taj-mahal-tour-by-gatimaan-express", "taj-mahal-sunrise-tour-from-delhi",
            "taj-mahal-sunrise-with-elephant-conservation", "jaipur-day-tour-from-delhi-by-car", "taj-mahal-luxury-car-tour-from-delhi",
            "taj-mahal-sunrise-and-old-delhi-tour", "same-day-agra-tour-from-jaipur", "agra-local-sightseeing-tour",
            "mathura-vrindavan-day-tour-from-agra"],
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
  },
  "wildlife": {
    file: "wildlife-tour-packages.html",
    title: "Wildlife tour packages",
    place: "wildlife",
    lead: "Wildlife tour packages in India",
    intro: "Jungle safaris in India's great tiger reserves — Ranthambore, Corbett, Bandhavgarh, Kanha and Pench — with naturalists, lodges beside the parks and the Taj Mahal never far away.",
    note: "Two or three safaris in each park is what gives you a real chance of a tiger. October to June is the season; the core zones close for the monsoon.",
    also: ["3-days-ranthambore-safari-tour", "7-days-golden-triangle-with-ranthambore", "12-days-rajasthan-heritage-wildlife-tour",
           "15-days-royal-rajasthan-wildlife-camel-safari", "6-days-south-india-wildlife-safari-from-bangalore", "14-days-kerala-karnataka-wildlife-tour"],
    faqs: [
      ["Which park is best for seeing tigers?", "Bandhavgarh and Ranthambore have the best sighting records, followed by Kanha, Pench and Corbett. Spending two or three safaris in a park matters more than which park you pick."],
      ["When is the safari season?", "October to June. Most core zones close from July to mid-October for the monsoon. March to May is hot but the best time for tigers, as animals come to the water."],
      ["Jeep or canter — which is better?", "A six-seat jeep (gypsy) is quieter and gets closer. Canters carry twenty people and are cheaper. All our tours use jeeps, and a private jeep can be booked for your group."],
      ["Do I need to book safaris in advance?", "Yes. Park permits are released online by the forest department, usually 90 to 120 days ahead, and popular zones sell out. We book them as soon as your dates are confirmed."],
      ["Are wildlife tours suitable for children?", "Yes, for most children over five. Each safari lasts three to four hours in an open vehicle, so bring layers for cold winter mornings."]
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
    slug: "taj-mahal-ticket-price-and-timings",
    title: "Taj Mahal ticket price and timings: the complete guide for 2026",
    date: "2026-10-14", readMins: 7, img: "taj",
    excerpt: "Entry fees for Indians, SAARC visitors and foreigners, the extra mausoleum ticket, opening hours, the Friday closure and what you can and cannot take inside.",
    keywords: "taj mahal ticket price, taj mahal timings, taj mahal entry fee for foreigners, taj mahal ticket online, taj mahal closed on friday",
    body: [
      ["p", "Most people plan a Taj Mahal visit around one question: how much does it cost to get in, and when is it open? The answers are simple, but there are a few details — the separate mausoleum ticket, the Friday closure, the cut-off time at the ticket window — that catch visitors out every day. This guide covers all of it, as we explain it to our own guests before every [Taj Mahal tour](taj-mahal-tour-packages.html)."],
      ["h2", "Taj Mahal ticket price"],
      ["p", "Entry fees are set by the Archaeological Survey of India (ASI). At the time of writing the published rates are:"],
      ["ul", [
        "Indian citizens: ₹50 for the Taj Mahal complex",
        "SAARC and BIMSTEC nationals: ₹540",
        "Foreign nationals and NRIs: ₹1,100",
        "Main mausoleum (the inner tomb chamber): an extra ₹200 for every visitor who wants to go inside",
        "Children under 15: free, whether Indian or foreign"
      ]],
      ["p", "The mausoleum ticket is the one people forget. Without it you can walk the gardens, the great gate and the platform, but you cannot enter the white marble tomb where Shah Jahan and Mumtaz Mahal lie. If you have come this far, buy it."],
      ["tip", "Fees are revised from time to time. On our tours we buy the tickets for you at the current rate, so the price you are quoted already covers them."],
      ["h2", "Taj Mahal opening hours"],
      ["p", "The Taj Mahal opens about thirty minutes before sunrise and closes about thirty minutes before sunset. In practice that means roughly 6 am to 6:30 pm in summer and 6:45 am to 5:30 pm in the depth of winter. Ticket windows open an hour before sunrise and stop selling 45 minutes before sunset — arrive later than that and you will not get in, even with daylight left."],
      ["p", "The single most important rule: the Taj Mahal is closed every Friday for afternoon prayers at the mosque inside the complex. Agra Fort, Fatehpur Sikri and the other monuments stay open on Fridays, so if your only day in Agra is a Friday, see those and save the Taj for another day — or see it from [Mehtab Bagh](journal/taj-mahal-night-viewing.html) across the river."],
      ["h2", "Buying tickets online"],
      ["p", "Tickets can be booked on the ASI's official online portal, and paying online usually lets you use a faster entry line. Ticket counters at the East and West gates also sell on the day. Avoid anyone outside the gates offering to sell you tickets or telling you the online system is down — that is the most common scam in Agra."],
      ["h2", "Which gate should you use?"],
      ["p", "There are three gates. The East Gate, near the five-star hotels on Fatehabad Road, is usually the calmest. The West Gate is closer to the old city and gets the coach groups. The South Gate is the smallest and is often used for exit. Electric golf carts run from the parking areas to the East and West gates, since petrol vehicles are not allowed near the monument."],
      ["h2", "What you can and cannot take inside"],
      ["ul", [
        "Allowed: mobile phones, cameras, a small bag, a water bottle, passport or ID",
        "Not allowed: food, tripods, drones, large bags, tobacco and lighters, and anything sharp",
        "Photography is fine in the gardens but not inside the tomb chamber",
        "There is a free locker at each gate if you arrive with something you cannot take in"
      ]],
      ["h2", "The best time to go"],
      ["p", "Sunrise is the best hour in almost every season — softer light, thinner crowds and cooler air. We wrote a whole piece on [the best time to visit the Taj Mahal](journal/best-time-to-visit-taj-mahal.html). If getting up at 3 am in Delhi sounds unreasonable, our [Taj Mahal sunrise tour](tours/taj-mahal-sunrise-tour-from-delhi.html) handles the driving, the tickets and the queue while you sleep in the car."],
      ["tours", ["taj-mahal-sunrise-tour-from-delhi", "taj-mahal-day-tour-from-delhi", "taj-mahal-tour-by-gatimaan-express"]],
      ["faq", [
        ["What is the Taj Mahal ticket price for foreigners?", "₹1,100 for the complex, plus ₹200 if you want to enter the main mausoleum — ₹1,300 in total. Children under 15 enter free."],
        ["What is the Taj Mahal ticket price for Indians?", "₹50 for the complex and ₹200 extra for the main mausoleum."],
        ["Is the Taj Mahal open on Friday?", "No. It is closed every Friday. Night viewing is also closed on Fridays."],
        ["What time does the Taj Mahal open?", "About 30 minutes before sunrise, and it closes about 30 minutes before sunset."],
        ["Do I need a guide inside the Taj Mahal?", "It is not compulsory, but a licensed guide turns a beautiful building into a story — and speeds you through the queues. All our Taj Mahal tours include one."]
      ]]
    ]
  },
  {
    slug: "same-day-agra-tour-from-delhi",
    title: "Same day Agra tour from Delhi: itinerary, cost and car vs train",
    date: "2026-10-10", readMins: 8, img: "tajGarden",
    excerpt: "Yes, you can see the Taj Mahal and Agra Fort and be back in Delhi for dinner. Here is how the day actually runs, what it costs and whether to go by car or by the Gatimaan Express.",
    keywords: "same day agra tour by car, same day agra tour from delhi, taj mahal day trip from delhi, agra day trip, delhi to agra one day tour",
    body: [
      ["p", "A same day Agra tour is the most popular trip we run. Delhi to Agra is about 230 km, and since the Yamuna Expressway opened the drive takes three to three and a half hours each way. That leaves five or six hours in Agra — enough for the Taj Mahal, Agra Fort and lunch without rushing, provided the day is planned properly."],
      ["h2", "A typical same day Agra itinerary"],
      ["ol", [
        "6:00–7:00 am — pickup from your hotel or the airport in Delhi, Noida or Gurgaon",
        "10:00 am — meet your guide in Agra and enter the Taj Mahal",
        "1:00 pm — lunch, at a five-star hotel buffet or a local restaurant",
        "2:00 pm — Agra Fort, the Mughal emperors' red sandstone palace-fortress",
        "3:30 pm — the Baby Taj (Itimad-ud-Daulah) or a marble inlay workshop, if time allows",
        "4:00 pm — start back on the expressway",
        "7:30 pm — drop-off at your Delhi hotel"
      ]],
      ["p", "If you can face an earlier start, the [Taj Mahal sunrise tour](tours/taj-mahal-sunrise-tour-from-delhi.html) leaves Delhi at 3 am and puts you at the gate as it opens. It is the better experience — fewer people, softer light — and you are back in Delhi by mid-afternoon."],
      ["h2", "By car or by train?"],
      ["h3", "Private car"],
      ["p", "A private car picks you up at your door and drops you back at it. You choose when to leave, when to stop and how long to linger. It suits families, people with luggage, anyone flying in or out that day, and groups of three or more, where a car costs less per head than train tickets. See our [same day Agra tour by car](tours/taj-mahal-day-tour-from-delhi.html)."],
      ["h3", "Gatimaan Express"],
      ["p", "The Gatimaan Express leaves Hazrat Nizamuddin at 8:10 am and reaches Agra Cantt in about 100 minutes. You skip the expressway, get breakfast on board, and a car and guide meet you at the station. It does not run on Fridays — which does not matter, since the Taj is closed then anyway. Read our full [Gatimaan Express guide](journal/gatimaan-express-delhi-to-agra.html) or book the [Taj Mahal tour by Gatimaan Express](tours/taj-mahal-tour-by-gatimaan-express.html)."],
      ["h2", "How much does a same day Agra tour cost?"],
      ["p", "The price depends on the car, the group size and what is included. As a guide, our private tours with car, driver, licensed guide and monument tickets start at:"],
      ["ul", [
        "Same day Agra tour by car: from ₹7,900 per person",
        "Taj Mahal sunrise tour: from ₹9,400 per person",
        "Taj Mahal tour by Gatimaan Express: from ₹11,500 per person",
        "Luxury car tour with a five-star lunch: from ₹16,500 per person"
      ]],
      ["p", "Every quote we send is fixed before you pay — tolls, parking, driver allowance and taxes included. Compare like with like: a cheap quote that leaves out monument tickets, the guide or tolls is not cheaper by the end of the day."],
      ["h2", "Five things that make the day go well"],
      ["ul", [
        "Never plan it for a Friday — the Taj Mahal is closed",
        "Carry your passport or ID; it is checked at the gate",
        "Wear comfortable shoes and clothes that cover shoulders and knees",
        "Keep the day bag small — large bags, food and tripods are not allowed inside",
        "Say no to anyone who approaches you at the parking area offering tickets or 'faster entry'"
      ]],
      ["tours", ["taj-mahal-day-tour-from-delhi", "taj-mahal-sunrise-tour-from-delhi", "taj-mahal-tour-by-gatimaan-express", "taj-mahal-luxury-car-tour-from-delhi"]],
      ["faq", [
        ["Can I visit Agra from Delhi in one day?", "Yes. With the Yamuna Expressway or the Gatimaan Express, a day trip comfortably covers the Taj Mahal and Agra Fort and gets you back to Delhi in the evening."],
        ["How long is the drive from Delhi to Agra?", "About three to three and a half hours each way on the Yamuna Expressway, depending on where in Delhi you start."],
        ["Is a same day tour too tiring?", "It is a long day — twelve to thirteen hours — but most of it is spent sitting in an air-conditioned car. If you can spare it, our [2 days Taj Mahal overnight tour](tours/2-days-taj-mahal-overnight-tour.html) is gentler."],
        ["Can the tour start from the airport?", "Yes. Many guests come straight off an overnight flight. Tell us the flight number and we will be waiting at arrivals."]
      ]]
    ]
  },
  {
    slug: "gatimaan-express-delhi-to-agra",
    title: "Gatimaan Express from Delhi to Agra: timings, booking and a day plan",
    date: "2026-10-06", readMins: 6, img: "agraFort",
    excerpt: "India's first semi-high-speed train gets you from Delhi to Agra in about 100 minutes. Timings, classes, the Friday rule and how to fit the Taj Mahal and Agra Fort into the day.",
    keywords: "gatimaan express timings, gatimaan express delhi to agra, taj mahal tour by train, delhi to agra train, gatiman express",
    body: [
      ["p", "The Gatimaan Express was India's first semi-high-speed train when it started running in 2016, and it is still the quickest way from Delhi to Agra. It turns a long road day into a short train ride, which is why our [Taj Mahal tour by Gatimaan Express](tours/taj-mahal-tour-by-gatimaan-express.html) is one of the most booked trips on this site."],
      ["h2", "Gatimaan Express timings"],
      ["ul", [
        "Delhi to Agra (train 12050): leaves Hazrat Nizamuddin at 8:10 am, reaches Agra Cantt at about 9:50 am",
        "Agra to Delhi (train 12049): leaves Agra Cantt at about 5:35 pm, reaches Hazrat Nizamuddin at 7:30 pm",
        "Runs six days a week — not on Fridays",
        "Journey time: roughly 1 hour 40 minutes each way"
      ]],
      ["tip", "Railway timetables change. We check the current timings on IRCTC when we book your tickets, and plan the day around them."],
      ["h2", "Which station in Delhi?"],
      ["p", "The train starts from Hazrat Nizamuddin, not New Delhi station. It is in south-east Delhi, about 30–45 minutes from Connaught Place in early-morning traffic and a little more from Gurgaon or the airport. On our tours a driver collects you around 7 am and walks you to your coach."],
      ["h2", "Classes and meals"],
      ["p", "There are two classes, both air-conditioned: Chair Car (CC) and Executive Class (EC). Executive has wider seats with more legroom. A meal or snack is served on board in both, so breakfast on the way out and a snack on the way back are taken care of."],
      ["h2", "How the day runs"],
      ["ol", [
        "7:00 am — hotel pickup and transfer to Hazrat Nizamuddin",
        "8:10 am — the Gatimaan Express leaves Delhi; breakfast on board",
        "9:50 am — your guide meets you at the coach in Agra Cantt",
        "10:00 am — the Taj Mahal, with time for photographs",
        "1:00 pm — lunch",
        "2:00 pm — Agra Fort, then the Baby Taj if time allows",
        "5:35 pm — the evening train back to Delhi",
        "7:30 pm — your driver meets you at Nizamuddin and drops you at your hotel"
      ]],
      ["h2", "Train or car — which is better?"],
      ["p", "The train is faster and more interesting, and you avoid six hours on the road. The car is more flexible — you can leave earlier for sunrise, stop at Mathura or Sikandra, and travel door to door. For couples and solo travellers the train is usually our recommendation; for families and groups of four or more, the [same day tour by car](journal/same-day-agra-tour-from-delhi.html) works out better value."],
      ["tours", ["taj-mahal-tour-by-gatimaan-express", "taj-mahal-day-tour-from-delhi"]],
      ["faq", [
        ["Does the Gatimaan Express run on Fridays?", "No. It runs six days a week and rests on Fridays — the same day the Taj Mahal is closed."],
        ["How long does the Gatimaan Express take from Delhi to Agra?", "About 100 minutes from Hazrat Nizamuddin to Agra Cantt."],
        ["How do I book Gatimaan Express tickets?", "Through IRCTC, Indian Railways' booking site, or let us book them as part of the tour so tickets, transfers and the guide are all lined up."],
        ["Is food included on the Gatimaan Express?", "Yes, a meal or snack is served on board in both classes."]
      ]]
    ]
  },
  {
    slug: "best-places-to-visit-in-agra",
    title: "12 best places to visit in Agra, from the Taj Mahal to the quiet tombs",
    date: "2026-10-02", readMins: 9, img: "babyTaj",
    excerpt: "Agra is more than one monument. Here is our local list — what each place is, how long to give it and how to fit it around the Taj Mahal.",
    keywords: "places to visit in agra, agra sightseeing, things to do in agra, agra tourist places, agra local sightseeing",
    body: [
      ["p", "Agra was the capital of the Mughal empire for most of the 16th and 17th centuries, and the city is full of what the emperors left behind. Most visitors see two places and leave. If you have a full day, or better two, this is the order we would put them in. Our [Agra tours](agra-tours.html) page lists every trip that covers the city."],
      ["h2", "1. The Taj Mahal"],
      ["p", "Built by Shah Jahan between 1631 and 1648 for his wife Mumtaz Mahal, and one of the most recognised buildings on earth. Give it at least two to three hours, and go at sunrise if you possibly can. Before you go, read our guide to [Taj Mahal ticket prices and timings](journal/taj-mahal-ticket-price-and-timings.html). Closed on Fridays."],
      ["h2", "2. Agra Fort"],
      ["p", "A UNESCO World Heritage Site in its own right: a mile and a half of red sandstone walls enclosing the palaces of Akbar, Jahangir and Shah Jahan. Look for the Musamman Burj, the octagonal tower where Shah Jahan spent his last years looking across the river at the Taj. Allow 90 minutes."],
      ["h2", "3. Itimad-ud-Daulah (the Baby Taj)"],
      ["p", "A small marble tomb on the far bank of the Yamuna, built by Empress Nur Jahan for her father. Its inlay work came before the Taj Mahal's and is just as fine. It is rarely crowded — one of our favourite hours in Agra."],
      ["h2", "4. Mehtab Bagh"],
      ["p", "The 'moonlight garden' directly across the river from the Taj Mahal. Come for sunset, when the marble turns gold and the crowds are on the other side. It is also the best place to see the Taj on a Friday."],
      ["h2", "5. Akbar's Tomb, Sikandra"],
      ["p", "On the Delhi road, ten kilometres from the centre. A vast gateway, a five-storey tomb mixing Hindu, Islamic and Christian motifs, and gardens full of blackbuck and peacocks. It is an easy stop on the way in from Delhi."],
      ["h2", "6. Fatehpur Sikri"],
      ["p", "Akbar's abandoned red sandstone capital, 40 km west of Agra. It deserves half a day; we wrote a separate guide on [visiting Fatehpur Sikri from Agra](journal/fatehpur-sikri-from-agra.html)."],
      ["h2", "7. Jama Masjid, Agra"],
      ["p", "Built in 1648 by Shah Jahan's daughter Jahanara, facing the Agra Fort across the old city. Step inside for the courtyard, then walk out into the bazaars around it."],
      ["h2", "8. Kinari Bazaar and the old city"],
      ["p", "Lanes of wedding trims, spices, shoes and sweets. Go with someone who knows the way and try the petha and dalmoth Agra is known for — more in our [Agra food guide](journal/what-to-eat-in-agra.html)."],
      ["h2", "9. Chini ka Rauza"],
      ["p", "A tomb covered in glazed Persian tiles, rare in India and mostly overlooked. Ten minutes from the Baby Taj."],
      ["h2", "10. Ram Bagh"],
      ["p", "Thought to be the oldest Mughal garden in India, laid out by Babur in the 1520s. Quiet, green and a glimpse of where the Mughal garden idea began."],
      ["h2", "11. A marble inlay workshop"],
      ["p", "The descendants of the craftsmen who decorated the Taj still practise pietra dura in Agra. Watching a piece being cut and set takes twenty minutes and explains a great deal about what you have just seen."],
      ["h2", "12. The elephant and bear rescue centres"],
      ["p", "Wildlife SOS runs an elephant conservation centre near Mathura and a sloth bear rescue facility near Agra, both open to visitors by booking. Our [Taj Mahal sunrise tour with elephant conservation](tours/taj-mahal-sunrise-with-elephant-conservation.html) pairs the Taj with an afternoon there."],
      ["h2", "How many days do you need in Agra?"],
      ["p", "One day covers the Taj Mahal, Agra Fort and one more stop. Two days lets you see the Taj at sunrise, add the Baby Taj and Mehtab Bagh, and give Fatehpur Sikri a proper morning. Our [2 days Taj Mahal overnight tour](tours/2-days-taj-mahal-overnight-tour.html) is built exactly that way."],
      ["tours", ["agra-local-sightseeing-tour", "2-days-taj-mahal-overnight-tour", "taj-mahal-sunrise-with-elephant-conservation"]],
      ["faq", [
        ["What are the top places to visit in Agra?", "The Taj Mahal, Agra Fort, Itimad-ud-Daulah (the Baby Taj), Mehtab Bagh, Akbar's Tomb at Sikandra and Fatehpur Sikri."],
        ["Can I see Agra in one day?", "Yes — the Taj Mahal, Agra Fort and one smaller monument fit comfortably into a day."],
        ["What is open in Agra on a Friday?", "Everything except the Taj Mahal: Agra Fort, Fatehpur Sikri, the Baby Taj, Sikandra and Mehtab Bagh are all open."]
      ]]
    ]
  },
  {
    slug: "taj-mahal-night-viewing",
    title: "Taj Mahal night viewing: full moon dates, tickets and rules",
    date: "2026-09-28", readMins: 5, img: "mehtabBagh",
    excerpt: "The Taj Mahal opens at night for five nights around each full moon. How the slots work, what tickets cost, and the best alternatives if you cannot get one.",
    keywords: "taj mahal night view, taj mahal full moon, taj mahal night viewing ticket, taj mahal moonlight",
    body: [
      ["p", "On five nights a month the Taj Mahal opens after dark: the night of the full moon and the two nights either side of it. Seeing the white marble under moonlight is something people travel a long way for — but it is tightly controlled, and the details matter."],
      ["h2", "How night viewing works"],
      ["ul", [
        "Five nights a month: full moon night, plus two nights before and two after",
        "Between 8:00 pm and midnight, in eight half-hour batches of up to 50 people",
        "You view the Taj from the Red Sandstone platform at the main gate — you do not go up to the mausoleum",
        "Report to Shilpgram, near the East Gate, half an hour before your slot for the security check",
        "Closed on Fridays and throughout the month of Ramzan"
      ]],
      ["h2", "Night viewing ticket price"],
      ["ul", [
        "Indian adults: ₹510",
        "Foreign adults: ₹750",
        "Children aged 3 to 15: ₹500"
      ]],
      ["p", "Tickets are sold online through the ASI's official portal and usually go a day or so before the date. Carry the same ID you booked with — it is checked."],
      ["h2", "Is it worth it?"],
      ["p", "Honestly, it depends on the sky. On a clear night the dome glows; on a hazy winter night you may see a pale outline at a distance. Because you stay at the gate, it is a view rather than a visit. Most of our guests who do it love it — but we always pair it with a daytime or sunrise visit, never instead of one."],
      ["h2", "Three alternatives"],
      ["ul", [
        "Sunset from Mehtab Bagh, across the river — golden light and almost nobody else",
        "A rooftop restaurant near the East Gate for a view of the dome after dark",
        "The [Taj Mahal sunrise tour](tours/taj-mahal-sunrise-tour-from-delhi.html) — the most beautiful hour of all, every day except Friday"
      ]],
      ["tours", ["2-days-taj-mahal-overnight-tour", "taj-mahal-sunrise-tour-from-delhi"]],
      ["faq", [
        ["Can you see the Taj Mahal at night?", "Yes, on five nights around each full moon, between 8 pm and midnight, except on Fridays and during Ramzan."],
        ["How much is the Taj Mahal night ticket?", "₹510 for Indian adults, ₹750 for foreign adults and ₹500 for children aged 3 to 15."],
        ["Can you go inside the mausoleum at night?", "No. Night viewing is from the platform near the main gate only."]
      ]]
    ]
  },
  {
    slug: "delhi-to-agra-by-car",
    title: "Delhi to Agra by car: distance, time, the Yamuna Expressway and stops",
    date: "2026-09-24", readMins: 6, img: "privateCar",
    excerpt: "How long the drive really takes, what the expressway is like, where to stop on the way and why a private car with a local driver beats self-drive.",
    keywords: "delhi to agra by car, delhi to agra distance, yamuna expressway, delhi to agra taxi, agra cab from delhi",
    body: [
      ["p", "Delhi to Agra is about 230 km by road. Most of it is the Yamuna Expressway, a six-lane, access-controlled highway that runs 165 km from Greater Noida to the edge of Agra. On a normal morning the whole drive takes three to three and a half hours."],
      ["h2", "The route"],
      ["ol", [
        "Central Delhi to the DND Flyway or Kalindi Kunj, then onto the Noida–Greater Noida Expressway",
        "Join the Yamuna Expressway at Pari Chowk, Greater Noida",
        "165 km of expressway past Jewar and Mathura",
        "Exit at Agra and into the city via the inner ring road — 20 to 30 minutes to the Taj Mahal's East Gate"
      ]],
      ["p", "From Gurgaon, the route goes via the Faridabad–Noida link or the KMP Expressway, adding thirty to forty minutes."],
      ["h2", "How long does it take?"],
      ["p", "Leaving central Delhi at 6 am, you are usually at the Taj Mahal before 10. Leave at 8 and city traffic can add an hour. Coming back, the evening rush into Delhi is the slowest part of the day. That is why our [same day tours](same-day-tour-packages.html) leave early."],
      ["h2", "Tolls, speed and safety"],
      ["ul", [
        "There are toll plazas on the expressway and the Noida approach — FASTag is mandatory on Indian highways",
        "Speed limits are enforced by cameras along the expressway",
        "Fog in December and January can slow early-morning drives sharply; a good driver knows when to wait",
        "Food courts and fuel stations sit at regular intervals along the expressway"
      ]],
      ["h2", "Worth stopping on the way"],
      ["ul", [
        "Mathura and Vrindavan, the birthplace and childhood home of Krishna — see our [Mathura Vrindavan guide](journal/mathura-vrindavan-from-agra.html)",
        "Akbar's Tomb at Sikandra, on the edge of Agra",
        "The Wildlife SOS elephant conservation centre near Mathura"
      ]],
      ["h2", "Self-drive or a car with driver?"],
      ["p", "We would always say a car with a driver. North Indian traffic is its own language, parking at the Taj is controlled and confusing for first-timers, and a driver who does this road every week knows where the fog sits and which dhaba is clean. Our [car rental with driver](car-rent.html) covers sedans, SUVs, Tempo Travellers and luxury cars, with tolls, parking and driver allowance included."],
      ["tours", ["taj-mahal-day-tour-from-delhi", "delhi-and-agra-2-day-private-tour"]],
      ["faq", [
        ["What is the distance from Delhi to Agra by road?", "About 230 km from central Delhi, most of it on the Yamuna Expressway."],
        ["How long does Delhi to Agra take by car?", "Three to three and a half hours in normal conditions, longer in rush hour or winter fog."],
        ["Is there a taxi from Delhi to Agra and back in one day?", "Yes. Our same day tours include the car, driver, tolls and parking, with a guide in Agra."]
      ]]
    ]
  },
  {
    slug: "fatehpur-sikri-from-agra",
    title: "Fatehpur Sikri from Agra: how to visit Akbar's abandoned city",
    date: "2026-09-20", readMins: 6, img: "fatehpurSikri",
    excerpt: "A whole Mughal capital in red sandstone, built and left within a generation. Distance from Agra, tickets, what to see and how to fit it into a day.",
    keywords: "fatehpur sikri, fatehpur sikri from agra, buland darwaza, fatehpur sikri ticket price, agra to fatehpur sikri distance",
    body: [
      ["p", "Fatehpur Sikri is 37 km west of Agra — about an hour by car. The emperor Akbar built it in the 1570s as his new capital, in thanks for the birth of a son foretold by the Sufi saint Salim Chishti. Within fifteen years the court had moved on. What remains is a complete royal city in red sandstone, now a UNESCO World Heritage Site and one of the best-preserved Mughal sites in India."],
      ["h2", "Two halves: the palace and the mosque"],
      ["p", "The site has two parts. The royal complex — the palaces, courts and audience halls — is ticketed. The Jama Masjid and the tomb of Salim Chishti, next door, are a living place of worship and free to enter."],
      ["h3", "In the royal complex"],
      ["ul", [
        "Diwan-i-Aam, the hall of public audience",
        "Diwan-i-Khas, with its single carved pillar where Akbar is said to have debated with scholars of every faith",
        "Panch Mahal, a five-storey open pavilion stepping up like a wedding cake",
        "Jodha Bai's palace, the largest of the residences, mixing Hindu and Islamic design",
        "The Anup Talao pool and the Pachisi court, laid out like a giant game board"
      ]],
      ["h3", "In the mosque complex"],
      ["ul", [
        "Buland Darwaza, the 54-metre victory gate — one of the tallest gateways in the world",
        "The white marble tomb of Salim Chishti, where visitors tie threads to the screens with a wish",
        "The Jama Masjid courtyard, one of the largest in India"
      ]],
      ["h2", "Fatehpur Sikri ticket price and timings"],
      ["p", "The ASI's published rate for the royal complex is ₹50 for Indians and ₹610 for foreign visitors, with children under 15 free. It is open from sunrise to sunset every day, including Fridays — which makes it a good Friday plan when the Taj Mahal is closed."],
      ["tip", "Unofficial 'guides' gather at the Buland Darwaza steps. If you are not with a licensed guide, a polite and firm no is enough."],
      ["h2", "How to fit it in"],
      ["p", "Most people see Fatehpur Sikri on the road between Agra and Jaipur — it sits right on the route, so it costs very little extra time. Our [Golden Triangle tours](golden-triangle-tour-packages.html) and the [same day Agra tour from Jaipur](tours/same-day-agra-tour-from-jaipur.html) stop here. From Agra itself, a half-day trip works well in the morning before the heat."],
      ["tours", ["3-days-golden-triangle-private-tour", "same-day-agra-tour-from-jaipur", "agra-local-sightseeing-tour"]],
      ["faq", [
        ["How far is Fatehpur Sikri from Agra?", "About 37 km — an hour by car."],
        ["How much time do I need at Fatehpur Sikri?", "Two hours covers both the royal complex and the mosque with a guide."],
        ["Is Fatehpur Sikri open on Friday?", "Yes. It is open every day from sunrise to sunset."]
      ]]
    ]
  },
  {
    slug: "mathura-vrindavan-from-agra",
    title: "Mathura and Vrindavan day trip from Agra: temples, timings and tips",
    date: "2026-09-16", readMins: 7, img: "premMandir",
    excerpt: "Krishna's birthplace and the town where he grew up, an hour from Agra. Which temples to see, when they open, and how to combine them with the Taj Mahal.",
    keywords: "mathura vrindavan tour, agra to mathura vrindavan, mathura vrindavan day trip, prem mandir, banke bihari temple, agra mathura vrindavan tour package",
    body: [
      ["p", "Mathura is about 55 km from Agra on the Delhi road, and Vrindavan is 12 km beyond it. Together they are the heart of Braj, the land of Krishna's childhood, and one of the most loved pilgrimage regions in India. A day trip from Agra — or a stop on the way from Delhi — fits both in comfortably."],
      ["h2", "In Mathura"],
      ["ul", [
        "Shri Krishna Janmabhoomi, built over the site held to be Krishna's birthplace",
        "Dwarkadhish Temple, in the old city, famous for its painted ceilings and swing festival",
        "Vishram Ghat on the Yamuna, where an evening aarti is held with lamps and bells"
      ]],
      ["h2", "In Vrindavan"],
      ["ul", [
        "Banke Bihari Temple, the most revered shrine in Vrindavan and usually packed with devotees",
        "Prem Mandir, a white marble temple that lights up in changing colours every evening",
        "ISKCON's Krishna Balaram Mandir, calm and welcoming to visitors from abroad",
        "Radha Raman and Nidhivan, among the oldest and most atmospheric sites in town"
      ]],
      ["h2", "Temple timings: plan around the midday break"],
      ["p", "Most Vrindavan temples close in the middle of the day — usually from about noon until 4 or 5 pm — and timings shift between summer and winter. Banke Bihari in particular keeps short opening windows. The best plan is to arrive by 9 am or after 4:30 pm, and to see Prem Mandir as the lights come on after dark."],
      ["tip", "Phones and cameras are not allowed inside some temples, including the Krishna Janmabhoomi complex. Leave them in the car with your driver."],
      ["h2", "Holi in Braj"],
      ["p", "Holi here is celebrated for a week or more, from the Lathmar Holi of Barsana and Nandgaon to the flower Holi at Banke Bihari. It is unforgettable and very crowded — book cars and hotels well ahead and ask us about the safest way to see it."],
      ["h2", "How to combine it with the Taj Mahal"],
      ["ul", [
        "From Agra: a full day — Mathura in the morning, Vrindavan in the afternoon, back by 9 pm after Prem Mandir",
        "From Delhi to Agra: stop in Vrindavan and Mathura on the way, reaching Agra in the evening",
        "With the elephants: the Wildlife SOS elephant centre is just outside Mathura — see our [sunrise tour with elephant conservation](tours/taj-mahal-sunrise-with-elephant-conservation.html)"
      ]],
      ["tours", ["mathura-vrindavan-day-tour-from-agra", "taj-mahal-sunrise-with-elephant-conservation"]],
      ["faq", [
        ["How far is Mathura from Agra?", "About 55 km, roughly an hour and a quarter by car. Vrindavan is another 12 km."],
        ["Can I do Agra, Mathura and Vrindavan in one day?", "From Delhi it is a very long day. We recommend Mathura and Vrindavan on the way to Agra, with an overnight stay and the Taj Mahal at sunrise the next morning."],
        ["What is the dress code for the temples?", "Modest clothing covering shoulders and knees. Shoes are left outside, so wear something easy to slip off."]
      ]]
    ]
  },
  {
    slug: "what-to-eat-in-agra",
    title: "What to eat in Agra: petha, bedai, dalmoth and Mughlai food",
    date: "2026-09-12", readMins: 5, img: "craftsShop",
    excerpt: "The sweets, breakfasts and Mughlai dishes Agra is known for, where locals eat them and how to eat street food safely on a short visit.",
    keywords: "agra food, famous food of agra, agra petha, bedai jalebi agra, street food agra, where to eat in agra",
    body: [
      ["p", "Agra's food is as Mughal as its monuments. The kitchens that fed the emperors left rich, slow-cooked dishes behind, and the old city has kept its own breakfasts and sweets for centuries. Here is what to look for."],
      ["h2", "Petha"],
      ["p", "Agra's most famous sweet: translucent pieces of ash gourd cooked in sugar syrup. The plain white one is the classic; kesar (saffron), paan and chocolate versions are everywhere now. Boxes of petha are the standard gift to take home, and the shops along the main roads near the Taj sell little else."],
      ["h2", "Bedai and jalebi"],
      ["p", "The old-city breakfast: bedai, a crisp fried bread stuffed with spiced lentils, served with a sharp potato curry, followed by hot jalebi straight from the oil. It is eaten standing up before 10 am, and it is the best rupee-for-flavour meal in Agra."],
      ["h2", "Dalmoth"],
      ["p", "A spiced, crunchy mix of fried lentils and nuts, Agra's savoury answer to petha. It keeps well and travels well."],
      ["h2", "Mughlai food"],
      ["p", "Korma, biryani, kebabs and breads cooked in tandoors — Agra does them in the old style. For a special evening, the five-star hotels near the Taj's East Gate serve excellent Mughlai menus, some with a view of the dome."],
      ["h2", "Eating street food safely"],
      ["ul", [
        "Choose stalls that are busy with locals and cook to order in front of you",
        "Eat food that is hot, fried or freshly cooked; skip cut fruit and salads on the street",
        "Drink sealed bottled water; our cars carry it for you all day",
        "Ask your guide — on our tours they will happily point you to the places they eat themselves"
      ]],
      ["tours", ["agra-local-sightseeing-tour", "2-days-taj-mahal-overnight-tour"]],
      ["faq", [
        ["What is Agra famous for in food?", "Petha (an ash gourd sweet), dalmoth, the bedai and jalebi breakfast, and Mughlai dishes like korma and kebabs."],
        ["Where can I buy petha in Agra?", "Sweet shops across the city and along the roads leading to the Taj Mahal sell petha in gift boxes."]
      ]]
    ]
  },
  {
    slug: "taj-mahal-guide-and-avoiding-touts",
    title: "Hiring a Taj Mahal guide in Agra, and how to avoid the touts",
    date: "2026-09-08", readMins: 6, img: "tajSunrise",
    excerpt: "How to tell a licensed guide from a tout, the five scams we see most often at the Taj Mahal, and what a good guide actually adds to your visit.",
    keywords: "taj mahal guide, agra tour guide, licensed guide agra, taj mahal scams, agra touts, government approved guide agra",
    body: [
      ["p", "A good guide turns the Taj Mahal from a beautiful building into a story — about a grieving emperor, twenty thousand craftsmen, a river that moved and an optical trick at the main gate. A bad one, or a fake one, can turn your day into a sequence of shops. Here is how to get the first and avoid the second."],
      ["h2", "How to recognise a licensed guide"],
      ["ul", [
        "Licensed guides carry a photo identity card issued by the Ministry of Tourism or the state tourism department, and will show it without being asked twice",
        "They meet you at an agreed place — not by approaching you in the car park",
        "They agree the fee and the duration before the visit starts",
        "They do not need to 'quickly show you a workshop' before the monument"
      ]],
      ["h2", "Five scams we see most often"],
      ["ol", [
        "'The online tickets are not working today' — they are; buy at the counter or online yourself",
        "'The Taj is closed this morning, but I can take you to a viewpoint' — it is only closed on Fridays",
        "Fake guides who walk with you uninvited and ask for money at the end",
        "Auto-rickshaws and 'helpers' who insist the parking is far and you need their ride",
        "Long detours to marble and carpet showrooms that pay commission on whatever you buy"
      ]],
      ["tip", "Nobody inside the Taj Mahal complex is allowed to sell you anything. If someone offers tickets, guides or shortcuts at the gate, walk on."],
      ["h2", "What a good guide adds"],
      ["ul", [
        "Faster, calmer entry: the right gate, the right queue, the right time",
        "The history — Shah Jahan, Mumtaz Mahal, the Mughal garden plan and the river front",
        "The details most people miss: the calligraphy that grows larger as it rises, the inlay up close, the deliberate asymmetry of Shah Jahan's tomb",
        "The best photo spots, and the patience to take the photo for you"
      ]],
      ["h2", "Why book through a local company"],
      ["p", "We have been running tours from Agra since 2000. Every guide we use is licensed and known to us personally, and every [Taj Mahal tour](taj-mahal-tour-packages.html) includes one, along with tickets, transport and a fixed price agreed in writing before you pay. If shopping is not on your list, it is not on ours."],
      ["tours", ["agra-local-sightseeing-tour", "taj-mahal-day-tour-from-delhi", "taj-mahal-sunrise-tour-from-delhi"]],
      ["faq", [
        ["Is a guide compulsory at the Taj Mahal?", "No, but a licensed guide makes the visit far richer and quicker."],
        ["How long does a guided Taj Mahal tour take?", "Two to three hours is the usual length, including time for photographs."],
        ["Will the guide take us shopping?", "Not on our tours unless you ask. Shopping stops are never added without your agreement."]
      ]]
    ]
  },
  {
    slug: "ranthambore-safari-guide",
    title: "Ranthambore safari guide: zones, jeep vs canter, season and booking",
    date: "2026-09-04", readMins: 7, img: "ranthambore",
    excerpt: "How Ranthambore's safari zones work, whether to book a jeep or a canter, the best months for tigers and how to fit the park between Agra and Jaipur.",
    keywords: "ranthambore safari, ranthambore safari booking, ranthambore zones, ranthambore tiger safari, ranthambore jeep safari",
    body: [
      ["p", "Ranthambore National Park in Rajasthan is one of the best places in the world to see a wild Bengal tiger. It is also an easy addition to a Golden Triangle trip: Sawai Madhopur, the town beside the park, is about five to six hours from Agra and three and a half from Jaipur."],
      ["h2", "How the safari zones work"],
      ["p", "The park is divided into numbered zones, and each safari vehicle is assigned to one. The central zones around the lakes and the old fort are the most famous for sightings; the outer zones are quieter and can be just as rewarding. You cannot choose to wander between zones once inside, so the zone allotted with your permit matters."],
      ["h2", "Jeep (gypsy) or canter?"],
      ["ul", [
        "Gypsy: an open six-seat jeep — quieter, more manoeuvrable and better for photography",
        "Canter: an open bus for about twenty people — cheaper and fine for a first look",
        "A private gypsy for your own group can be booked, subject to the forest department's daily quota"
      ]],
      ["h2", "Safari timings"],
      ["p", "There are two safaris a day, each lasting about three hours: one starting at first light and one in the afternoon. Exact times shift with the season. Two or three safaris give you a far better chance of a tiger than one."],
      ["h2", "The best time to visit"],
      ["p", "The park's core zones close for the monsoon, roughly July to September, and reopen in October. October to March is pleasant and green; April to June is very hot, but the best time for tiger sightings as the animals come to the water."],
      ["h2", "Booking safaris"],
      ["p", "Permits are released online by the Rajasthan forest department well in advance and the popular zones sell out, especially in winter and over Indian holidays. Send us your dates early and we book the permits along with your lodge and transfers."],
      ["tip", "Bring a warm layer for winter mornings — an open jeep at 7 am in January is cold — and a scarf for the dust."],
      ["tours", ["3-days-ranthambore-safari-tour", "7-days-golden-triangle-with-ranthambore", "8-days-north-india-wildlife-tour"]],
      ["faq", [
        ["How far is Ranthambore from Agra?", "About 5 to 6 hours by road. Many guests travel Agra – Ranthambore – Jaipur as part of a Golden Triangle tour."],
        ["Is a tiger sighting guaranteed?", "No — they are wild animals in a large park. Two to four safaris give you a good chance."],
        ["Which is better, a gypsy or a canter?", "A gypsy, if your budget allows. It is quieter, holds fewer people and can get into narrower tracks."]
      ]]
    ]
  },
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
    catLabel: "Taj Mahal tour packages",
    route: "Delhi · Agra · Delhi",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 7900,
    img: IMG.tajGarden,
    summary: "Leave Delhi after dawn, spend the day with the Taj Mahal and Agra Fort, and sleep in your own hotel the same night.",
    highlights: [
      "Private AC car and chauffeur from your Delhi hotel or the airport",
      "Up to three hours inside the Taj Mahal with a licensed guide",
      "Agra Fort, the Mughal emperors' red sandstone palace-fortress",
      "Lunch stop at a five-star hotel in Agra, if you want it",
      "Optional stop at Itimad-ud-Daulah, the Baby Taj",
      "Back at your Delhi address by about 7 pm"
    ],
    itinerary: [
      { time: "7:00 AM", title: "Pickup in Delhi and the expressway to Agra",
        text: "Your chauffeur collects you from your hotel, the airport or any address in Delhi, Noida or Gurgaon. About three hours to Agra on the Yamuna Expressway." },
      { time: "10:00 AM", title: "The Taj Mahal with your guide",
        text: "Meet your licensed guide at the gate and spend up to three hours inside — the story of Shah Jahan and Mumtaz Mahal, the inlay work up close, and time for photographs." },
      { time: "1:00 PM", title: "Lunch in Agra",
        text: "Lunch break at a five-star hotel buffet with Indian and continental food, or a simpler local restaurant if you prefer." },
      { time: "2:00 PM", title: "Agra Fort",
        text: "A guided walk through Agra Fort — the halls of public and private audience, the palaces of the zenana, and the terrace that looks down the river to the Taj." },
      { time: "3:00 PM", title: "The Baby Taj, if time allows",
        text: "Itimad-ud-Daulah, the small marble tomb known for its inlay and garden, often called the draft for the Taj Mahal. Optional." },
      { time: "4:00 PM", title: "Back to Delhi",
        text: "Back on the expressway, with drop-off at your hotel, the airport or any address in Delhi NCR at around 7 pm." }
    ],
    includes: [
      "Private AC car and chauffeur",
      "English-speaking licensed guide",
      "Taj Mahal and Agra Fort entry tickets",
      "Bottled water",
      "Tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Meals and beverages (five-star buffet lunch can be added)",
      "Baby Taj ticket",
      "Camera and video fees",
      "Tips"
    ],
    facts: [
      ["Duration", "About 12 hours"],
      ["Departure", "Delhi, Noida or Gurgaon"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Guide", "Licensed, English speaking"],
      ["Pickup", "7 am, hotel or airport"],
      ["Return", "Around 7 pm"]
    ],
    faqs: [
      ["Is this a private tour?", "Yes. The car, the driver and the guide are for your group only, and the pace is yours."],
      ["How long is the drive?", "About three hours each way on the Yamuna Expressway. The whole day runs to about twelve hours."],
      ["Can you pick us up from the airport?", "Yes. Many guests come straight off an overnight flight — tell us the flight number and we will be waiting."],
      ["Is the Taj Mahal open every day?", "Every day except Friday, when it is closed for prayers. We plan your date around that."],
      ["What should we wear?", "Comfortable walking shoes and clothes that cover shoulders and knees. Light cotton helps in the warmer months."]
    ],
    gallery: ["tajGarden", "agraFort", "jaliScreen"]
  },
  {
    slug: "taj-mahal-sunrise-tour-from-delhi",
    title: "Taj Mahal sunrise tour from Delhi",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tour packages",
    route: "Delhi · Agra · Sunrise",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 9400,
    img: IMG.tajSunrise,
    summary: "A 3 am start from Delhi puts you at the Taj Mahal for first light, the thinnest crowds and the softest photographs — and back in Delhi by mid-afternoon.",
    highlights: [
      "Inside the Taj Mahal at sunrise, before the crowds",
      "Up to three hours at the Taj with a licensed guide",
      "Breakfast at a five-star hotel in Agra",
      "Agra Fort, with the optional Baby Taj after",
      "Back in Delhi by about 3 pm"
    ],
    itinerary: [
      { time: "3:00 AM", title: "Pickup in Delhi",
        text: "Your driver collects you from your hotel in Delhi, Noida or Gurgaon and takes the empty expressway to Agra — about three hours." },
      { time: "6:00 AM", title: "The Taj Mahal at sunrise",
        text: "Meet your guide and go in with the first visitors of the day. Up to three hours for the history, the architecture and the best photo spots while the marble changes colour." },
      { time: "9:00 AM", title: "Breakfast at a five-star hotel",
        text: "Breakfast in Agra, with Indian and continental choices." },
      { time: "10:00 AM", title: "Agra Fort",
        text: "A guided tour of the 16th-century red sandstone fort — its palaces, its courtyards and its views of the Taj across the river." },
      { time: "11:00 AM", title: "The Baby Taj, if time allows",
        text: "An optional stop at Itimad-ud-Daulah for its marble inlay and symmetrical garden." },
      { time: "12:00 PM", title: "Back to Delhi",
        text: "The drive back to Delhi, with drop-off at your hotel or chosen address at around 3 pm." }
    ],
    includes: [
      "Private AC car and chauffeur",
      "Licensed guide in Agra",
      "Sunrise-slot Taj Mahal ticket",
      "Agra Fort ticket",
      "Bottled water, tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Breakfast and lunch (five-star breakfast can be added)",
      "Baby Taj ticket",
      "Camera fees",
      "Tips"
    ],
    facts: [
      ["Duration", "About 11 hours"],
      ["Departure", "Delhi, Noida or Gurgaon"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Pickup", "3 am, hotel or airport"],
      ["Return", "Around 3 pm"]
    ],
    faqs: [
      ["How early is the pickup?", "Between 2:30 and 3:30 am, depending on where you are staying. It is the only way to be at the gate for sunrise."],
      ["Is the Taj Mahal open for sunrise every day?", "Every day except Friday, when it is closed. We plan your date around that."],
      ["What should we bring?", "Passport or ID, comfortable shoes, sunglasses and a camera. Large bags, food and tripods are not allowed inside."],
      ["Is it wheelchair accessible?", "The Taj Mahal is largely accessible, with help needed in a few areas. Tell us in advance and we plan for it."]
    ],
    gallery: ["tajSunrise", "mehtabBagh", "agraFortPalace"]
  },
  {
    slug: "taj-mahal-tour-by-gatimaan-express",
    title: "Taj Mahal tour by Gatimaan Express train",
    cat: "same-day",
    catLabel: "Same day tour packages",
    route: "Delhi · Train · Agra",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 11500,
    img: IMG.taj,
    summary: "India's fastest train covers Delhi to Agra in 100 minutes, so the whole monument day happens without a long road run.",
    highlights: [
      "India's first semi-high-speed train, about 100 minutes each way",
      "Breakfast on the morning train and a snack on the way back",
      "Your guide waiting at the coach door in Agra",
      "Up to three hours at the Taj Mahal, then Agra Fort",
      "Optional Baby Taj before the evening train"
    ],
    itinerary: [
      { time: "7:00 AM", title: "Pickup and Hazrat Nizamuddin station",
        text: "Your driver collects you from your hotel and takes you to Hazrat Nizamuddin station, and helps you find your coach." },
      { time: "8:10 AM", title: "The Gatimaan Express to Agra",
        text: "The train leaves Delhi at 8:10 am. Breakfast is served on board." },
      { time: "9:50 AM", title: "Arrive at Agra Cantt",
        text: "Your licensed guide meets you at the coach and your private car is waiting outside." },
      { time: "10:00 AM", title: "The Taj Mahal",
        text: "Up to three hours at the Taj Mahal — its history, its architecture and time for photographs." },
      { time: "1:00 PM", title: "Lunch break",
        text: "Lunch at a five-star hotel buffet or a local restaurant, your choice." },
      { time: "2:00 PM", title: "Agra Fort",
        text: "About an hour in Agra Fort — the Diwan-i-Am, the Diwan-i-Khas, the Moti Masjid and the private Mughal chambers." },
      { time: "3:00 PM", title: "The Baby Taj, if time allows",
        text: "An optional visit to Itimad-ud-Daulah for its marble inlay." },
      { time: "5:30 PM", title: "Back to the station",
        text: "Your guide sees you onto the evening Gatimaan Express, with a snack served on board." },
      { time: "7:30 PM", title: "Arrive in Delhi",
        text: "Your driver meets you at the station and drops you at your hotel." }
    ],
    includes: ["Return Gatimaan Express tickets, executive class", "Station transfers in Delhi and Agra", "Private car in Agra with chauffeur", "Licensed guide", "All monument tickets"],
    excludes: ["Lunch", "Camera fees", "Tips", "Items of a personal nature"],
    facts: [
      ["Duration", "About 12 hours"],
      ["Train", "Gatimaan Express, about 100 minutes each way"],
      ["Class", "Executive or standard AC chair car"],
      ["Tour type", "Private"],
      ["Runs", "Saturday to Thursday"],
      ["Pickup", "7 am, hotel in Delhi NCR"]
    ],
    faqs: [
      ["What is the Gatimaan Express?", "India's first semi-high-speed train, running Delhi to Agra at up to 160 km/h since 2016."],
      ["Which Delhi station does it leave from?", "Hazrat Nizamuddin, at 8:10 am."],
      ["Does the tour run every day?", "No. The Taj Mahal and the train both rest on Fridays, so it runs Saturday to Thursday."],
      ["Which class do we travel in?", "Executive or standard chair car — both air-conditioned, with meals served on board."]
    ],
    gallery: ["taj", "agraFort", "babyTaj"]
  },
  {
    slug: "2-days-taj-mahal-overnight-tour",
    title: "2 days Taj Mahal overnight tour",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tour packages",
    route: "Delhi · Agra · Overnight",
    days: 2, nights: 1,
    durationLabel: "2 days",
    price: 18500,
    img: IMG.mehtabBagh,
    summary: "Agra at a human pace from Delhi: the Baby Taj and sunset at Mehtab Bagh on day one, the Taj Mahal at sunrise on day two, and home by evening.",
    highlights: [
      "Pickup from Delhi, Noida or Gurgaon and back again",
      "Sunset over the Taj from Mehtab Bagh",
      "The Taj Mahal at sunrise with your guide",
      "Itimad-ud-Daulah, the Baby Taj, and Agra Fort",
      "One night in Agra, so nothing is rushed"
    ],
    itinerary: [
      { time: "Day 1 · 8:00 AM", title: "Delhi to Agra",
        text: "Pickup from your Delhi hotel or the airport and about three hours to Agra on the Yamuna Expressway. Check in and rest." },
      { time: "Day 1 · Afternoon", title: "The Baby Taj and Mehtab Bagh",
        text: "Itimad-ud-Daulah, the quieter marble tomb known for its inlay, then Mehtab Bagh across the river to watch the sun go down behind the Taj." },
      { time: "Day 2 · Sunrise", title: "The Taj Mahal at first light",
        text: "Back at the Taj Mahal gate before sunrise with your guide, for the monument at its quietest." },
      { time: "Day 2 · Morning", title: "Agra Fort",
        text: "Breakfast and checkout, then Agra Fort — the Mughal palaces and the terraces that look out over the river to the Taj." },
      { time: "Day 2 · Afternoon", title: "Back to Delhi",
        text: "The drive back to Delhi, arriving late afternoon or early evening at your hotel, the airport or any address you choose." }
    ],
    includes: [
      "One night in a 4-star hotel with breakfast",
      "Private AC car and chauffeur from Delhi and back",
      "Licensed guide for both days",
      "Taj Mahal and Agra Fort tickets",
      "Bottled water, tolls, parking and taxes"
    ],
    excludes: [
      "Lunch and dinner",
      "Baby Taj and Mehtab Bagh tickets",
      "Camera fees",
      "Tips"
    ],
    facts: [
      ["Duration", "2 days, 1 night"],
      ["Destinations", "Agra"],
      ["Transport", "Private AC car"],
      ["Accommodation", "1 night in Agra"],
      ["Tour type", "Private"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Return", "Day 2, late afternoon"]
    ],
    faqs: [
      ["Which hotel categories are available?", "3-star, 4-star or 5-star, or no hotel if you have your own. The price changes with the category."],
      ["Is it private?", "Yes. One car, one driver and one guide for your group across both days."],
      ["Can we upgrade to a Taj-view room?", "Yes, subject to availability. Ask when you book and we will check the dates."]
    ],
    gallery: ["mehtabBagh", "tajSunrise", "agraFortPalace"]
  },
  {
    slug: "3-days-golden-triangle-private-tour",
    title: "3 days Golden Triangle private tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur",
    days: 3, nights: 2,
    durationLabel: "3 days",
    price: 32500,
    img: IMG.amber,
    summary: "The classic route at its briskest: Delhi's monuments, a sunrise Taj Mahal and Jaipur's forts in three well-planned days.",
    highlights: [
      "Old and New Delhi in one guided day",
      "The Taj Mahal at sunrise",
      "Agra Fort and Fatehpur Sikri on the road to Jaipur",
      "Amber Fort, Hawa Mahal, City Palace and Jantar Mantar",
      "Two nights in handpicked hotels, pickup and drop in Delhi"
    ],
    itinerary: [
      { time: "Day 1", title: "Delhi sightseeing, then on to Agra",
        text: "Pickup at 9 am from your hotel or the airport. Old Delhi first — Jama Masjid, a cycle-rickshaw through Chandni Chowk, a walk through the Khari Baoli spice market and a photo stop outside the Red Fort. Then New Delhi — Humayun's Tomb, India Gate, a drive past Parliament House and Rashtrapati Bhavan, Qutub Minar and the Lotus Temple. In the evening, about three hours on the expressway to Agra. Overnight in Agra." },
      { time: "Day 2", title: "Taj Mahal at sunrise, Agra Fort and the road to Jaipur",
        text: "The Taj Mahal at first light, then back to the hotel for breakfast and checkout. Agra Fort — its palaces, audience halls and views of the Taj — then west towards Jaipur with a stop at Fatehpur Sikri and the Buland Darwaza. About four hours in all. Overnight in Jaipur." },
      { time: "Day 3", title: "Jaipur, then back to Delhi",
        text: "Breakfast and checkout. Amber Fort on its hill above the Aravallis, a photo stop at Jal Mahal on Man Sagar Lake, the Hawa Mahal and its 953 windows, the City Palace and the Jantar Mantar observatory. Then about four hours back to Delhi, with drop-off around 8 pm." }
    ],
    includes: [
      "2 nights in deluxe boutique hotels with breakfast",
      "Private AC car and chauffeur for 3 days",
      "Licensed guides in each city",
      "All monument tickets",
      "Rickshaw ride in Old Delhi",
      "Bottled water, tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Lunch and dinner",
      "Amber Fort jeep or elephant ride",
      "Camera fees",
      "Tips"
    ],
    facts: [
      ["Duration", "3 days, 2 nights"],
      ["Destinations", "Delhi · Agra · Jaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "1 night Agra, 1 night Jaipur"],
      ["Tour type", "Private"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Return", "Day 3, around 8 pm"]
    ],
    faqs: [
      ["Is this a private tour?", "Yes. Your own car and driver for the whole trip, and a local guide in each city."],
      ["Which hotels do we stay in?", "3-star, 4-star or 5-star, whichever you choose — or no hotels if you have your own. The price changes with the category, not the route."],
      ["How far apart are the cities?", "Delhi to Agra is about 230 km (3 hours on the expressway), Agra to Jaipur about 240 km (4 to 5 hours), Jaipur to Delhi about 270 km (5 hours)."],
      ["When is the best time to go?", "October to March is the most comfortable. The route runs all year; summer days start earlier to beat the heat."],
      ["Can the itinerary be changed?", "Yes. Add a night, swap a stop or change the hotel category — tell us when you enquire."]
    ],
    gallery: ["amber", "tajSunrise", "hawaMahal"]
  },
  {
    slug: "4-days-golden-triangle-classic-tour",
    title: "4 days Golden Triangle classic tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur",
    days: 4, nights: 3,
    durationLabel: "4 days",
    price: 41900,
    img: IMG.hawaMahalClose,
    summary: "The three cities with a full day for Jaipur — Delhi on the way out, the Taj at sunrise, Fatehpur Sikri on the road, and the drive home timed to your flight.",
    highlights: [
      "Old and New Delhi with a rickshaw ride through Chandni Chowk",
      "The Taj Mahal at sunrise and Agra Fort",
      "Fatehpur Sikri, Akbar's red sandstone capital",
      "A full day in Jaipur, Amber Fort to Patrika Gate",
      "Drop at Delhi airport timed to your flight — or end in Jaipur"
    ],
    itinerary: [
      { time: "Day 1", title: "Old and New Delhi, then Agra",
        text: "Breakfast and checkout at 9 am. New Delhi in the morning — Qutub Minar, Humayun's Tomb, the Lotus Temple, India Gate and a drive past Parliament House. Lunch, then Old Delhi — Jama Masjid, a cycle-rickshaw through Chandni Chowk, a walk through the Khari Baoli spice market and a photo stop outside the Red Fort. About three hours to Agra. Overnight in Agra." },
      { time: "Day 2", title: "Taj Mahal at sunrise, Agra Fort and Fatehpur Sikri",
        text: "The Taj Mahal at sunrise, then breakfast and checkout. Agra Fort, once the emperors' residence, then on to Jaipur with a stop at Fatehpur Sikri, the city Akbar built and left. Overnight in Jaipur." },
      { time: "Day 3", title: "A full day in Jaipur",
        text: "Breakfast at 8 am or later. Amber Fort, a photo stop at Jal Mahal, the Hawa Mahal, the City Palace, the Jantar Mantar observatory and the painted arches of Patrika Gate. Overnight in Jaipur." },
      { time: "Day 4", title: "Back to Delhi",
        text: "Breakfast and checkout timed to your flight, then five to six hours back to Delhi with drop-off at the airport or your hotel. You can also finish in Jaipur — just tell us." }
    ],
    includes: [
      "3 nights in 4-star hotels with breakfast",
      "Private AC car and chauffeur",
      "Licensed guides in all three cities",
      "All monument tickets",
      "Rickshaw ride in Old Delhi",
      "Bottled water, tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Lunch and dinner",
      "Camera fees",
      "Elephant ride at Amber",
      "Tips"
    ],
    facts: [
      ["Duration", "4 days, 3 nights"],
      ["Destinations", "Delhi · Agra · Jaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "1 night Agra, 2 nights Jaipur"],
      ["Tour type", "Private"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Return", "Delhi airport or hotel, or end in Jaipur"]
    ],
    faqs: [
      ["Is this a private tour?", "Yes. Your own car and driver for the whole trip, and a local guide in each city."],
      ["Which hotels do we stay in?", "3-star, 4-star or 5-star, whichever you choose — or no hotels if you have your own. The price changes with the category, not the route."],
      ["How far apart are the cities?", "Delhi to Agra is about 230 km (3 hours on the expressway), Agra to Jaipur about 240 km (4 to 5 hours), Jaipur to Delhi about 270 km (5 hours)."],
      ["When is the best time to go?", "October to March is the most comfortable. The route runs all year; summer days start earlier to beat the heat."],
      ["Can the itinerary be changed?", "Yes. Add a night, swap a stop or change the hotel category — tell us when you enquire."],
      ["Is four days enough?", "For a first visit, yes. The first two days are full; the third gives Jaipur room to breathe."]
    ],
    gallery: ["hawaMahalClose", "fatehpurSikri", "agraFort"]
  },
  {
    slug: "5-days-golden-triangle-discovery-tour",
    title: "5 days Golden Triangle discovery tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur",
    days: 5, nights: 4,
    durationLabel: "5 days",
    price: 52400,
    img: IMG.indiaGate,
    summary: "An arrival day to land properly, then Delhi, the Taj at sunrise, Fatehpur Sikri and two nights in Jaipur — the three cities without the rush.",
    highlights: [
      "An easy first day to recover from the flight",
      "Old and New Delhi with a rickshaw ride through Chandni Chowk",
      "The Taj Mahal at sunrise, Agra Fort and Fatehpur Sikri",
      "Two nights and a full sightseeing day in Jaipur",
      "Drop at Delhi airport timed to your flight — or end in Jaipur"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Our representative meets you at the airport and takes you to your hotel. The evening is yours. Overnight in Delhi." },
      { time: "Day 2", title: "Old and New Delhi, then Agra",
        text: "Breakfast and checkout at 9 am. New Delhi — Qutub Minar, Humayun's Tomb, the Lotus Temple, India Gate and a drive past Parliament House. Lunch, then Old Delhi — Jama Masjid, a cycle-rickshaw through Chandni Chowk, a walk through the Khari Baoli spice market and a photo stop outside the Red Fort. About three hours to Agra. Overnight in Agra." },
      { time: "Day 3", title: "Taj Mahal at sunrise and the road to Jaipur",
        text: "The Taj Mahal at sunrise, then back for breakfast and checkout. Agra Fort, then about four hours to Jaipur with a stop at Fatehpur Sikri. Overnight in Jaipur." },
      { time: "Day 4", title: "Jaipur city tour",
        text: "Breakfast at 8 am or later. Amber Fort, a photo stop at Jal Mahal, the Hawa Mahal, the City Palace, the Jantar Mantar and Patrika Gate. Overnight in Jaipur." },
      { time: "Day 5", title: "Back to Delhi",
        text: "Breakfast and checkout timed to your flight, then the drive to Delhi and drop-off at the airport. Finishing in Jaipur instead is easy to arrange." }
    ],
    includes: [
      "4 nights in 4-star hotels with breakfast",
      "Airport pickup on arrival",
      "Private AC car and chauffeur",
      "Licensed guides in all cities",
      "All monument tickets",
      "Rickshaw ride in Old Delhi",
      "Bottled water, tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Lunch and dinner",
      "Camera fees",
      "Shopping",
      "Tips"
    ],
    facts: [
      ["Duration", "5 days, 4 nights"],
      ["Destinations", "Delhi · Agra · Jaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "1 night Delhi, 1 night Agra, 2 nights Jaipur"],
      ["Tour type", "Private"],
      ["Pickup", "Delhi airport"],
      ["Return", "Delhi airport, or end in Jaipur"]
    ],
    faqs: [
      ["Is this a private tour?", "Yes. Your own car and driver for the whole trip, and a local guide in each city."],
      ["Which hotels do we stay in?", "3-star, 4-star or 5-star, whichever you choose — or no hotels if you have your own. The price changes with the category, not the route."],
      ["How far apart are the cities?", "Delhi to Agra is about 230 km (3 hours on the expressway), Agra to Jaipur about 240 km (4 to 5 hours), Jaipur to Delhi about 270 km (5 hours)."],
      ["When is the best time to go?", "October to March is the most comfortable. The route runs all year; summer days start earlier to beat the heat."],
      ["Can the itinerary be changed?", "Yes. Add a night, swap a stop or change the hotel category — tell us when you enquire."]
    ],
    gallery: ["indiaGate", "jalMahal", "tajGarden"]
  },
  {
    slug: "6-days-golden-triangle-heritage-tour",
    title: "6 days Golden Triangle heritage tour",
    cat: "golden-triangle",
    catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur",
    days: 6, nights: 5,
    durationLabel: "6 days",
    price: 64800,
    img: IMG.humayun,
    summary: "Six days and heritage hotels: a full day for Delhi, sunset and sunrise at the Taj, Fatehpur Sikri on the way west and a whole day in Jaipur.",
    highlights: [
      "Heritage and palace-style hotels throughout",
      "A full guided day across Old and New Delhi",
      "Sunset at Mehtab Bagh and sunrise at the Taj Mahal",
      "The Baby Taj, Agra Fort and Fatehpur Sikri",
      "A full day in Jaipur ending at Patrika Gate"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Our representative meets you and takes you to your hotel. Time to rest. Overnight in Delhi." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "Pickup at 9 am. Old Delhi — Jama Masjid, a cycle-rickshaw through Chandni Chowk, a walk through the Khari Baoli spice market and a photo stop outside the Red Fort. Then New Delhi — Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple. Overnight in Delhi." },
      { time: "Day 3", title: "To Agra — the Baby Taj and Mehtab Bagh",
        text: "Breakfast and checkout at 10 am, about three hours to Agra. Itimad-ud-Daulah in the afternoon, then sunset at Mehtab Bagh with the Taj across the Yamuna. Overnight in Agra." },
      { time: "Day 4", title: "Sunrise Taj Mahal, Agra Fort and Fatehpur Sikri",
        text: "The Taj Mahal at sunrise, breakfast and checkout, then Agra Fort. On to Jaipur — about four hours — stopping at Fatehpur Sikri, the old Mughal capital. Overnight in Jaipur." },
      { time: "Day 5", title: "Jaipur city tour",
        text: "Amber Fort on its hill, a photo stop at Jal Mahal, the Hawa Mahal, the City Palace and the Jantar Mantar, with Patrika Gate in the late-afternoon light. Overnight in Jaipur." },
      { time: "Day 6", title: "Back to Delhi",
        text: "Checkout at 11 am and four to five hours back to Delhi, arriving around 3 to 4 pm at your hotel or the airport." }
    ],
    includes: [
      "5 nights in heritage hotels with breakfast",
      "Private AC car and chauffeur",
      "Licensed guides in all cities",
      "All monument tickets",
      "Rickshaw ride in Old Delhi",
      "Bottled water, tolls, parking, driver allowance and taxes"
    ],
    excludes: [
      "Lunch and dinner",
      "Camera fees",
      "Tips",
      "Personal expenses"
    ],
    facts: [
      ["Duration", "6 days, 5 nights"],
      ["Destinations", "Delhi · Agra · Jaipur"],
      ["Transport", "Private AC car"],
      ["Accommodation", "2 nights Delhi, 1 night Agra, 2 nights Jaipur"],
      ["Tour type", "Private"],
      ["Pickup", "Delhi airport"],
      ["Return", "Day 6, around 3 to 4 pm"]
    ],
    faqs: [
      ["Is this a private tour?", "Yes. Your own car and driver for the whole trip, and a local guide in each city."],
      ["Which hotels do we stay in?", "3-star, 4-star or 5-star, whichever you choose — or no hotels if you have your own. The price changes with the category, not the route."],
      ["How far apart are the cities?", "Delhi to Agra is about 230 km (3 hours on the expressway), Agra to Jaipur about 240 km (4 to 5 hours), Jaipur to Delhi about 270 km (5 hours)."],
      ["When is the best time to go?", "October to March is the most comfortable. The route runs all year; summer days start earlier to beat the heat."],
      ["Can the itinerary be changed?", "Yes. Add a night, swap a stop or change the hotel category — tell us when you enquire."]
    ],
    gallery: ["humayun", "amber", "babyTaj"]
  },
  {
    slug: "new-delhi-private-city-tour",
    title: "New Delhi private city tour",
    cat: "delhi",
    catLabel: "New Delhi tour packages",
    route: "Old Delhi · New Delhi",
    days: 1, nights: 0,
    durationLabel: "1 day",
    price: 6500,
    img: IMG.qutub,
    summary: "Mughal Delhi in the morning, colonial and modern Delhi in the afternoon, with a rickshaw ride through Chandni Chowk in between.",
    highlights: [
      "Jama Masjid and the view from its steps",
      "A cycle-rickshaw through Chandni Chowk and the spice market",
      "Humayun's Tomb, Qutub Minar and the Lotus Temple",
      "Photo stops at India Gate and Parliament House"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Pickup and into Old Delhi",
        text: "Your driver and guide collect you from your hotel or chosen address in Delhi, Noida or Gurgaon." },
      { time: "Morning", title: "Jama Masjid",
        text: "One of India's largest mosques, built under Shah Jahan between 1650 and 1656. A pause on the steps for the view over the old city." },
      { time: "Morning", title: "Chandni Chowk by rickshaw",
        text: "A cycle-rickshaw through the 17th-century lanes of Chandni Chowk." },
      { time: "Late morning", title: "Spice market and the Red Fort",
        text: "A walk through the Khari Baoli spice market and a look at the Red Fort walls from outside." },
      { time: "Midday", title: "Lunch break",
        text: "Lunch at a restaurant your guide recommends." },
      { time: "Afternoon", title: "Humayun's Tomb and Qutub Minar",
        text: "Humayun's Tomb, the UNESCO-listed garden tomb that inspired the Taj Mahal, then the 12th-century Qutub Minar, over 70 metres tall." },
      { time: "Late afternoon", title: "Lotus Temple, India Gate and Parliament",
        text: "The white marble Lotus Temple, then photo stops at India Gate and Parliament House before drop-off at your hotel." }
    ],
    includes: ["Private AC car and chauffeur for the day", "Licensed Delhi guide", "Rickshaw ride in Chandni Chowk", "All monument tickets", "Bottled water and taxes"],
    excludes: ["Meals", "Camera fees", "Tips"],
    facts: [
      ["Duration", "About 8 hours"],
      ["Starts", "9 am"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Guide", "Licensed, English speaking"],
      ["Pickup", "Hotel or airport in Delhi NCR"]
    ],
    faqs: [
      ["What time does it start and finish?", "Pickup at 9 am and about eight hours of sightseeing. The finish depends on traffic and how long you linger."],
      ["Are meals included?", "No, but your guide will suggest good places for lunch."],
      ["Is the rickshaw ride safe?", "Yes. It is a normal part of the route and your guide stays with you."],
      ["Is it suitable for families and older travellers?", "Yes. The pace is relaxed, walking is limited and stops can be dropped or added."]
    ],
    gallery: ["qutub", "redFort", "lotusTemple"]
  },
  {
    slug: "jaipur-luxury-private-tour",
    title: "Jaipur luxury private tour",
    cat: "jaipur",
    catLabel: "Jaipur tour packages",
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
      { time: "Day 1", title: "Amber Fort, the stepwell and the City Palace",
        text: "Amber Fort as the gates open, Panna Meena stepwell, Jal Mahal and an afternoon in the City Palace complex." },
      { time: "Day 2", title: "Hawa Mahal, the bazaars and sunset at Nahargarh",
        text: "Hawa Mahal at first light, the old city bazaars, a craft workshop, and sunset at Nahargarh before departure." }
    ],
    includes: ["One night in a heritage hotel with breakfast", "Private AC car and chauffeur", "Licensed Jaipur guide", "All monument tickets", "Taxes and parking"],
    excludes: ["Lunch and dinner", "Elephant ride at Amber", "Shopping", "Tips"],
    gallery: ["amber", "hawaMahalClose", "jalMahal"]
  },
  {
    slug: "same-day-agra-tour-from-jaipur",
    title: "Same day Agra tour from Jaipur",
    cat: "same-day",
    catLabel: "Same day tour packages",
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
      { time: "6:00 AM", title: "Leave Jaipur via Chand Baori and Fatehpur Sikri",
        text: "Leave Jaipur at 6 am, stopping at Chand Baori stepwell and Fatehpur Sikri." },
      { time: "1:00 PM", title: "Taj Mahal and Agra Fort",
        text: "Taj Mahal and Agra Fort with your Agra guide." },
      { time: "5:00 PM", title: "Drop in Agra, or continue to Delhi",
        text: "Drop at your Agra hotel, or continue to Delhi, arriving around 10 pm." }
    ],
    includes: ["Private AC car and chauffeur", "Licensed guide in Agra", "Taj Mahal and Agra Fort tickets", "Tolls, parking and taxes"],
    excludes: ["Meals", "Fatehpur Sikri tickets", "Camera fees", "Tips"],
    gallery: ["fatehpurSikri", "taj", "fatehpurRuins"]
  },
  {
    slug: "taj-mahal-luxury-car-tour-from-delhi",
    title: "Taj Mahal luxury car tour from Delhi",
    cat: "taj-mahal",
    catLabel: "Taj Mahal tour packages",
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
      { time: "7:00 AM", title: "Pickup in a chauffeured luxury car",
        text: "Pickup from your Delhi or NCR address in a luxury car with a professional chauffeur, then the drive to Agra on the Yamuna Expressway." },
      { time: "10:00 AM", title: "Taj Mahal with your guide",
        text: "Arrive in Agra, meet your guide and tour the Taj Mahal — its history, architecture and the story behind it." },
      { time: "1:00 PM", title: "Premium lunch in Agra",
        text: "Premium lunch at a selected 5-star hotel or fine-dining restaurant." },
      { time: "2:00 PM", title: "Agra Fort",
        text: "Agra Fort with your private guide, through its Mughal halls and courtyards." },
      { time: "3:30 PM", title: "Itimad-ud-Daulah, the Baby Taj",
        text: "Itimad-ud-Daulah, the Baby Taj, known for the finest marble inlay in Agra." },
      { time: "4:30 PM", title: "The drive back to Delhi",
        text: "The drive back to Delhi." },
      { time: "7:30 PM", title: "Private drop-off in Delhi",
        text: "Drop at your hotel, residence or airport." }
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
    catLabel: "Taj Mahal tour packages",
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
      { time: "Day 1 · 8:00 AM", title: "Delhi sightseeing with your guide",
        text: "Pickup in Delhi, then India Gate, Rashtrapati Bhavan, Parliament House and the city's other landmarks with your guide." },
      { time: "Day 1 · 12:30 PM", title: "The drive to Agra",
        text: "Drive to Agra on the Yamuna Expressway, arriving mid-afternoon to check in." },
      { time: "Day 1 · 5:00 PM", title: "Sunset on the Taj from Mehtab Bagh",
        text: "Mehtab Bagh across the river for sunset on the Taj, then an evening free in Agra." },
      { time: "Day 2 · 6:00 AM", title: "Sunrise at the Taj Mahal",
        text: "Sunrise at the Taj Mahal, when the marble turns and the complex is at its quietest." },
      { time: "Day 2 · 10:00 AM", title: "Breakfast, checkout and Agra Fort",
        text: "Breakfast and checkout, then Agra Fort with your guide." },
      { time: "Day 2 · 1:30 PM", title: "Lunch and the drive back to Delhi",
        text: "Lunch in Agra, then the drive back to Delhi, arriving around 5 pm." }
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
    catLabel: "Golden Triangle tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, meet our representative and transfer to your hotel. Evening at leisure." },
      { time: "Day 2", title: "Old and New Delhi with your guide",
        text: "New Delhi from 9 am — Humayun's Tomb, Qutub Minar, Lotus Temple, India Gate and a drive past Parliament House. After lunch, Old Delhi: Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout at 10 am and drive to Agra. Itimad-ud-Daulah, the Baby Taj, then Mehtab Bagh for sunset across the river." },
      { time: "Day 4", title: "Sunrise Taj Mahal, Agra Fort, on to Ranthambore",
        text: "Taj Mahal at sunrise. After breakfast and checkout, Agra Fort, then the drive to Ranthambore with a stop at Fatehpur Sikri." },
      { time: "Day 5", title: "Two tiger safaris in Ranthambore",
        text: "Morning and afternoon safaris in Ranthambore National Park by shared Gypsy, looking for Bengal tigers, deer and wild boar." },
      { time: "Day 6", title: "To Jaipur — City Palace and Hawa Mahal",
        text: "Drive to Jaipur, about 150 km. On arrival, City Palace, Hawa Mahal, Jantar Mantar and Patrika Gate." },
      { time: "Day 7", title: "Amber Fort, Jal Mahal and the return to Delhi",
        text: "Amber Fort and Jal Mahal, time for gemstones, block print and blue pottery, then the drive back to Delhi by 7 or 8 pm." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "4 nights in Delhi, Agra and Jaipur with breakfast", "2 nights in Ranthambore with breakfast, lunch and dinner", "Two tiger safaris by shared Gypsy", "Rickshaw ride in Old Delhi", "Bottled water, tolls, parking and taxes"],
    excludes: ["Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["How do the safaris work?", "Two safaris in Ranthambore National Park by shared Gypsy. Timings and zones are allotted by the Forest Department, so they are confirmed close to the date."],
      ["Can we upgrade to a private Gypsy?", "Yes, for an extra cost and subject to availability. Ask when you book."],
      ["When is the best season?", "October to March is most comfortable for sightseeing. Warmer months can be better for spotting wildlife. The park usually closes during the monsoon."],
      ["How far is Agra to Ranthambore?", "Four to five hours by road, with Fatehpur Sikri on the way so the drive doubles as sightseeing."]
    ],
    gallery: ["ranthambore", "amber", "tajGarden"]
  },
  {
    slug: "8-days-golden-triangle-with-udaipur",
    title: "8 days Golden Triangle tour with Udaipur",
    cat: "golden-triangle",
    catLabel: "Golden Triangle tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, private transfer to your hotel, check in and relax." },
      { time: "Day 2", title: "Old and New Delhi with your guide",
        text: "Pickup at 9 am for Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside. Then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout at 10 am, drive to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal and on to Jaipur",
        text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { time: "Day 5", title: "Jaipur forts, palaces and Patrika Gate",
        text: "Amber Fort, a photo stop at Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar and Patrika Gate." },
      { time: "Day 6", title: "The scenic drive to Udaipur",
        text: "A scenic six-hour drive to Udaipur through the Rajasthan countryside, then check in and relax." },
      { time: "Day 7", title: "Udaipur, the City Palace and Lake Pichola",
        text: "Jagdish Temple and the City Palace, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { time: "Day 8", title: "Departure from Udaipur",
        text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
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
    catLabel: "Golden Triangle tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, transfer to your hotel, check in and relax." },
      { time: "Day 2", title: "Old and New Delhi with your guide",
        text: "Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market and the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout at 10 am, drive to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal and on to Jaipur",
        text: "Taj Mahal at sunrise, then Agra Fort, then on to Jaipur via Fatehpur Sikri." },
      { time: "Day 5", title: "Jaipur, then the drive to Pushkar",
        text: "Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar, time in the markets, then the drive to Pushkar." },
      { time: "Day 6", title: "Pushkar Lake, then on to Jodhpur",
        text: "Pushkar Lake and the Brahma Temple, time in the local streets, then on to Jodhpur." },
      { time: "Day 7", title: "Mehrangarh Fort and the Blue City",
        text: "Mehrangarh Fort, Jaswant Thada and Umaid Bhawan Palace, then the Clock Tower market and a walk through the Blue City." },
      { time: "Day 8", title: "Departure from Jodhpur",
        text: "Breakfast, checkout and transfer to Jodhpur airport for your flight to Delhi or onward." }
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
    catLabel: "Golden Triangle tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, private transfer to your hotel, check in and rest." },
      { time: "Day 2", title: "A full day across Delhi",
        text: "Full day in Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout at 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset on the Taj from Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal and on to Jaipur",
        text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { time: "Day 5", title: "Jaipur, then the drive to Pushkar",
        text: "Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar, the Monkey Temple if time allows, then the drive to Pushkar." },
      { time: "Day 6", title: "Pushkar Lake, then on to Jodhpur",
        text: "Pushkar Lake, the Brahma Temple and Man Mahal, time in the markets with an optional camel ride, then on to Jodhpur." },
      { time: "Day 7", title: "Mehrangarh Fort and Mandore Gardens",
        text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore Gardens and the Clock Tower market." },
      { time: "Day 8", title: "Ranakpur Temple and on to Udaipur",
        text: "Drive to Udaipur, stopping at the Ranakpur Jain Temple for its marble carving." },
      { time: "Day 9", title: "Udaipur and a boat on Lake Pichola",
        text: "Jagdish Temple, City Palace, Fateh Sagar Lake, Saheliyon Ki Bari, a boat ride on Lake Pichola and Bagore Ki Haveli." },
      { time: "Day 10", title: "Departure from Udaipur",
        text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
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
    catLabel: "Rajasthan tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, private transfer to your hotel, check in and unwind." },
      { time: "Day 2", title: "A full day across Delhi",
        text: "Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout around 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset over the Taj from Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal, then on to Ranthambore",
        text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then the drive to Ranthambore." },
      { time: "Day 5", title: "Two tiger safaris in Ranthambore",
        text: "Morning safari in Ranthambore National Park, breakfast and rest at the resort, then a second safari in the afternoon." },
      { time: "Day 6", title: "To Jaipur — City Palace and Jantar Mantar",
        text: "Drive to Jaipur, about four hours. City Palace and Jantar Mantar on arrival, with a photo stop at Hawa Mahal." },
      { time: "Day 7", title: "Amber Fort and the Albert Hall Museum",
        text: "Amber Fort, a photo stop at Jal Mahal, the Monkey Temple and the Albert Hall Museum." },
      { time: "Day 8", title: "The drive to Jodhpur",
        text: "Six hours to Jodhpur. Check in and take the rest of the day at your own pace." },
      { time: "Day 9", title: "Mehrangarh Fort and the Blue City",
        text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore Gardens and the Clock Tower market." },
      { time: "Day 10", title: "Ranakpur Temple and on to Udaipur",
        text: "Five hours to Udaipur with a stop at the Ranakpur Jain Temple." },
      { time: "Day 11", title: "Udaipur and a boat on Lake Pichola",
        text: "City Palace and Jagdish Temple, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { time: "Day 12", title: "Departure from Udaipur",
        text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Airport and hotel pickup and drop", "Private AC car with professional driver", "Licensed live guides in each city", "11 nights hotel accommodation with breakfast and taxes", "Morning and afternoon safari in Ranthambore", "Boat ride on Lake Pichola", "Rickshaw ride in Old Delhi", "Udaipur to Delhi flight", "Bottled water, tolls, parking and taxes"],
    excludes: ["Travel insurance", "Personal expenses, shopping and extra beverages", "Tips for the guide and driver", "Optional activities not in the itinerary", "Camera and video fees at monuments", "Anything not listed under inclusions"],
    faqs: [
      ["How many safaris are included?", "Two — one in the morning and one in the afternoon of the Ranthambore day. Zones are allotted by the Forest Department."],
      ["Is this suitable for families?", "Yes. The private vehicle and the flexible schedule make it workable with children, and the safaris tend to be the highlight for them."],
      ["Can the route be shortened?", "Yes. Dropping Ranthambore gives you the 10 day version; dropping Jodhpur gives eight."]
    ],
    gallery: ["ranthambore", "udaipurLake", "jaswantThada"]
  },
  {
    slug: "13-days-classic-rajasthan-cultural-tour",
    title: "13 days classic Rajasthan cultural tour",
    cat: "rajasthan",
    catLabel: "Rajasthan tour packages",
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
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, private transfer to your hotel, check in and rest." },
      { time: "Day 2", title: "A full day across Delhi",
        text: "Delhi from 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk, the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, Parliament House, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra, the Baby Taj and Mehtab Bagh",
        text: "Checkout around 10 am, three hours to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal and on to Jaipur",
        text: "Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then on to Jaipur stopping at Fatehpur Sikri." },
      { time: "Day 5", title: "Jaipur forts, palaces and Patrika Gate",
        text: "Amber Fort, a photo stop at Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar and Patrika Gate." },
      { time: "Day 6", title: "The desert road to Bikaner",
        text: "Six hours to Bikaner through changing desert country. Check in and take the evening easy." },
      { time: "Day 7", title: "Junagarh Fort, then on to Jaisalmer",
        text: "Junagarh Fort, Lalgarh Palace, Karni Mata Temple, Gajner Lake and Lakshmi Niwas Palace, then on to Jaisalmer by evening." },
      { time: "Day 8", title: "Jaisalmer Fort and a night in the dunes",
        text: "Jaisalmer Fort, Salim Singh Haveli and Patwon Ki Haveli. In the afternoon, out to the Khuri dunes for a camel ride, sunset, folk music and dinner at the desert camp." },
      { time: "Day 9", title: "The drive to Jodhpur",
        text: "Five hours to Jodhpur. Check in and spend the rest of the day at your own pace." },
      { time: "Day 10", title: "Mehrangarh Fort and the Blue City",
        text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, the Sardar Government Museum, Mandore Gardens and the Clock Tower market." },
      { time: "Day 11", title: "Ranakpur Temple and on to Udaipur",
        text: "Checkout around 9 am for Udaipur, stopping at the Ranakpur Jain Temple." },
      { time: "Day 12", title: "Udaipur and a boat on Lake Pichola",
        text: "Jagdish Temple and City Palace, a boat ride on Lake Pichola, then Fateh Sagar Lake, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { time: "Day 13", title: "Departure from Udaipur",
        text: "Breakfast, checkout and transfer to Udaipur airport for your flight to Delhi or onward." }
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
    cat: "golden-triangle", catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur", days: 2, nights: 1, durationLabel: "2 days", price: 24900,
    img: IMG.fatehpurSikri,
    summary: "The tightest version of the route: Agra on day one, Jaipur on day two, back in Delhi by night. Long days, but all three cities in a weekend.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Delhi · Agra · Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "1 night in Jaipur"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Day 2, late evening"]],
    highlights: [
      "Taj Mahal and Agra Fort on day one",
      "One hotel night in Jaipur with breakfast",
      "Amber Fort, with an elephant ride to the gate if available",
      "City Palace, Jantar Mantar and Hawa Mahal on day two"
    ],
    itinerary: [
      { time: "Day 1 · 7:00 AM", title: "Delhi to Agra",
        text: "Pickup from your hotel, the airport or any address in Delhi NCR, and about three hours to Agra in a private AC car." },
      { time: "Day 1 · 10:00 AM", title: "Taj Mahal and Agra Fort",
        text: "Meet your guide in Agra for the Taj Mahal, then Agra Fort, the red sandstone fortress of the Mughals." },
      { time: "Day 1 · Afternoon", title: "On to Jaipur",
        text: "About four hours west to Jaipur. Check in. Overnight in Jaipur." },
      { time: "Day 2 · 9:00 AM", title: "Amber Fort and Jal Mahal",
        text: "Breakfast and checkout. Amber Fort — with an elephant ride up to the gate if one is available — then a photo stop at Jal Mahal, the water palace." },
      { time: "Day 2 · Midday", title: "City Palace, Jantar Mantar and Hawa Mahal",
        text: "The City Palace, the Jantar Mantar observatory and the Hawa Mahal." },
      { time: "Day 2 · Afternoon", title: "Back to Delhi",
        text: "The drive back to Delhi, arriving in the evening at your hotel or chosen address." }
    ],
    includes: ["Private AC car and chauffeur for both days", "Licensed guides in Agra and Jaipur", "One night hotel with breakfast", "Monument tickets", "Tolls, parking and taxes"],
    excludes: [
      "Lunch and dinner",
      "Elephant ride at Amber",
      "Camera fees",
      "Tips"
    ],
    faqs: [
      ["Is two days too rushed?", "It is the shortest the route works at. You see everything, but spend about ten hours in the car across the two days. Three days is noticeably easier."],
      ["Can we start from the airport?", "Yes, and many people do this between flights."],
      ["Is it private?", "Yes — your own vehicle and driver, with local guides in Agra and Jaipur."]
    ],
    gallery: ["fatehpurSikri", "taj", "hawaMahalClose"]
  },
  {
    slug: "7-days-golden-triangle-tour",
    title: "7 days Golden Triangle tour",
    cat: "golden-triangle", catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur", days: 7, nights: 6, durationLabel: "7 days", price: 74500,
    img: IMG.amber,
    summary: "Three cities over a full week, with two nights in each and days that end before dark. The version for people who dislike being hurried.",
    facts: [["Duration", "7 days, 6 nights"], ["Destinations", "Delhi · Agra · Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "6 nights, two in each city"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Delhi"]],
    highlights: ["Two nights in every city, so nothing is a half-day", "Taj Mahal at both sunrise and sunset",
                 "A free afternoon in each city", "Fatehpur Sikri and Chand Baori on the road legs",
                 "Craft workshops in Agra and Jaipur rather than commission shops"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Arrive in Delhi, transfer to your hotel, evening at leisure." },
      { time: "Day 2", title: "Old Delhi in the morning, New Delhi after lunch",
        text: "Old Delhi in the morning — Jama Masjid, a rickshaw through Chandni Chowk, the spice market — then New Delhi's monuments in the afternoon." },
      { time: "Day 3", title: "To Agra — Agra Fort and Mehtab Bagh",
        text: "Drive to Agra. Agra Fort in the afternoon, sunset at Mehtab Bagh." },
      { time: "Day 4", title: "Sunrise Taj Mahal and a free afternoon",
        text: "Taj Mahal at sunrise, Itimad-ud-Daulah after breakfast, and a free afternoon for the marble inlay workshops." },
      { time: "Day 5", title: "Fatehpur Sikri, Chand Baori and on to Jaipur",
        text: "To Jaipur via Fatehpur Sikri and the Chand Baori stepwell." },
      { time: "Day 6", title: "Amber Fort, the stepwell and Nahargarh at sunset",
        text: "Amber Fort at opening, Panna Meena stepwell, City Palace and Jantar Mantar, sunset at Nahargarh." },
      { time: "Day 7", title: "A free morning, then back to Delhi",
        text: "A free morning for the bazaars, then the drive back to Delhi." }
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
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Old or New Delhi", days: 1, nights: 0, durationLabel: "4 to 6 hours", price: 3800,
    img: IMG.qutub,
    summary: "Four to six hours covering one half of the city — the Mughal old town or the colonial and modern south. Built for layovers and spare afternoons.",
    facts: [["Duration", "4 to 6 hours"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Best for", "Layovers and half-free days"]],
    highlights: [
      "Choose Old Delhi (4 hours) or New Delhi (6 hours)",
      "Rickshaw ride through Chandni Chowk on the Old Delhi route",
      "Humayun's Tomb, Qutub Minar and the Lotus Temple on the New Delhi route",
      "Pickup between 9 and 11 am, or around your flight"
    ],
    itinerary: [
      { time: "9 – 11 AM", title: "Pickup",
        text: "Pickup from your hotel, the airport or any address in Delhi, Noida or Gurgaon, with your guide on board." },
      { time: "Option A · 4 hours", title: "Old Delhi — the Mughal city",
        text: "Jama Masjid, built in the 1650s and still a working mosque; a rickshaw through the lanes of Chandni Chowk; the Khari Baoli spice market; and the Red Fort, home of the Mughal emperors for nearly two centuries, from outside." },
      { time: "Option B · 6 hours", title: "New Delhi — monuments and gardens",
        text: "Humayun's Tomb from the 1560s; India Gate, the 42-metre memorial to more than 70,000 soldiers of the First World War; a drive past Parliament House; Qutub Minar, begun in 1193; and the Lotus Temple, completed in 1986." },
      { time: "End", title: "Drop-off",
        text: "Back to your hotel, the airport or wherever you need to be next." }
    ],
    includes: [
      "Private AC car for the duration",
      "Licensed Delhi guide",
      "Rickshaw ride on the Old Delhi route",
      "Monument tickets",
      "Bottled water",
      "Parking, driver allowance and taxes"
    ],
    excludes: ["Meals", "Camera fees", "Tips"],
    faqs: [
      ["Does this work on a layover?", "Yes, if you have time to clear immigration and get back for your flight. Tell us the flight times and we plan around them."],
      ["Which half should we pick?", "New Delhi in the morning while it is cooler; Old Delhi works best after 10 am, once the shops are open."],
      ["Is it private?", "Yes — your own car and your own guide."],
      ["What should we wear?", "Light clothes and walking shoes, and a scarf or shawl for Jama Masjid."]
    ],
    gallery: ["qutub", "humayun", "redFort"]
  },
  {
    slug: "evening-delhi-city-tour",
    title: "Evening Delhi city tour",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Old Delhi · Evening", days: 1, nights: 0, durationLabel: "4 hours", price: 3500,
    img: IMG.lotusNight,
    summary: "Four hours as the heat drops: Jama Masjid and Chandni Chowk at their busiest, the spice market, and India Gate lit up on the drive back.",
    facts: [
      ["Duration", "About 4 hours"],
      ["Starts", "3 to 4 pm"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Guide", "Licensed, English speaking"],
      ["Pickup", "Hotel or airport in Delhi NCR"]
    ],
    highlights: [
      "Jama Masjid and the skyline from its courtyard",
      "Chandni Chowk by rickshaw as the shops light up",
      "The Khari Baoli spice market",
      "Red Fort photo stop and India Gate lit up after dark"
    ],
    itinerary: [
      { time: "3 – 4 PM", title: "Pickup",
        text: "Pickup from your hotel, the airport or any address in Delhi NCR, and into Old Delhi." },
      { time: "Late afternoon", title: "Jama Masjid",
        text: "One of India's largest mosques, with views across the rooftops of the old city." },
      { time: "Early evening", title: "Chandni Chowk by rickshaw",
        text: "A rickshaw ride through the bazaars, the old shops and the evening crowds." },
      { time: "Evening", title: "The spice market and the Red Fort",
        text: "A walk through Khari Baoli, Asia's largest wholesale spice market, then a photo stop outside the Red Fort while your guide tells its story." },
      { time: "After dark", title: "India Gate and Parliament, lit up",
        text: "A drive past India Gate and Parliament House under the lights, then drop-off at your hotel." }
    ],
    includes: ["Private AC car", "Licensed Delhi guide", "Rickshaw ride", "Bottled water", "Parking and taxes"],
    excludes: ["Food and drinks", "Camera fees", "Tips"],
    faqs: [
      ["What time does it start?", "Pickup between 3 and 4 pm, depending on where you are staying."],
      ["Is Old Delhi safe in the evening?", "Yes. It is busy, and your guide stays with you throughout."],
      ["Is the rickshaw ride included?", "Yes."],
      ["Can we eat on this tour?", "Yes — tell your guide and they will stop at a stall or restaurant they trust. Food is paid separately."]
    ],
    gallery: ["lotusNight", "redFort", "indiaGate"]
  },
  {
    slug: "delhi-temples-and-spiritual-sites-tour",
    title: "Delhi spiritual sites and temple tour",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Akshardham · Lotus Temple · ISKCON · Bangla Sahib", days: 1, nights: 0, durationLabel: "10 hours", price: 6200,
    img: IMG.lotusTemple,
    summary: "One full day through the many faiths of Delhi — Akshardham, the Lotus Temple, ISKCON, Birla Mandir, Gurudwara Bangla Sahib and the Jama Masjid quarter.",
    facts: [["Duration", "About 10 hours, 8 am to 6 pm"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or any address in Delhi NCR"], ["Dress code", "Covered shoulders and knees; heads covered at the gurudwara"]],
    highlights: [
      "Akshardham's carved stone complex and gardens",
      "Quiet time inside the Lotus Temple",
      "ISKCON temple and the Krishna traditions behind it",
      "Birla Mandir, dedicated to Vishnu and Lakshmi",
      "Gurudwara Bangla Sahib and its community kitchen",
      "Old Delhi and the Jama Masjid at the end of the day"
    ],
    itinerary: [
      { time: "8:00 AM", title: "Pickup",
        text: "Your driver and guide collect you from your hotel or chosen address in Delhi." },
      { time: "8:30 AM", title: "Akshardham",
        text: "The vast carved temple complex, its gardens and exhibitions, with your guide on the traditions it celebrates. Phones and bags stay in the lockers." },
      { time: "10:30 AM", title: "Lotus Temple",
        text: "The Baha'i house of worship shaped like a lotus, open to people of every faith. Time to sit in silence in the prayer hall." },
      { time: "12:00 PM", title: "ISKCON Temple",
        text: "The Krishna temple at East of Kailash — the morning devotions, the art and the stories of Krishna." },
      { time: "1:00 PM", title: "Lunch break",
        text: "Lunch at a vegetarian restaurant your guide recommends, and a short rest." },
      { time: "2:00 PM", title: "Birla Mandir",
        text: "The Laxminarayan temple, built by the Birla family and dedicated to Vishnu and Lakshmi." },
      { time: "3:30 PM", title: "Gurudwara Bangla Sahib",
        text: "Delhi's best-known Sikh shrine — the sarovar, the prayers and the langar kitchen that feeds thousands every day." },
      { time: "5:00 PM", title: "Old Delhi and Jama Masjid",
        text: "A drive into Old Delhi and time around the Jama Masjid for photographs, depending on prayer times." },
      { time: "6:00 PM", title: "Drop-off",
        text: "Back to your hotel or chosen address." }
    ],
    includes: ["Private AC car and driver", "Licensed English-speaking guide", "Hotel pickup and drop", "Bottled water", "Parking, tolls and taxes"],
    excludes: ["Meals and drinks", "Donations at temples", "Camera fees where charged", "Tips"],
    faqs: [["Are there entry fees?", "The temples are free to enter. Akshardham's exhibitions and water show have their own tickets, if you want them."],
           ["What should we wear?", "Covered shoulders and knees. Heads are covered at the gurudwara — scarves are provided at the door."],
           ["Can we take phones into Akshardham?", "No. Phones, cameras and bags go into the free lockers at the gate. Your guide will help."],
           ["Is Akshardham open every day?", "It is closed on Mondays. On a Monday we swap in the Hanuman temple at Karol Bagh and Gurudwara Sis Ganj."]],
    gallery: ["lotusTemple", "lotusNight", "redFort"]
  },
  {
    slug: "private-delhi-shopping-tour",
    title: "Private Delhi shopping tour",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Connaught Place · Janpath · Chandni Chowk · Dilli Haat", days: 1, nights: 0, durationLabel: "8 hours", price: 4900,
    img: IMG.craftsShop,
    summary: "Delhi's best markets in one day with a car that carries the bags — Connaught Place, Janpath, Chandni Chowk and the craft stalls of Dilli Haat.",
    facts: [["Duration", "About 8 hours, 10 am to 6 pm"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Shopping assistance by your driver; a guide can be added"], ["Pickup", "Hotel, airport or any address in Delhi"], ["Shops", "Your choice — we take no commission"]],
    highlights: [
      "Connaught Place for brands, clothing and souvenirs",
      "Janpath for textiles, jewellery and Rajasthani crafts",
      "Chandni Chowk for spices, dry fruit, fabric and silver",
      "Dilli Haat — handlooms and crafts from every Indian state",
      "Free time at the end to go back for what you missed"
    ],
    itinerary: [
      { time: "10:00 AM", title: "Pickup",
        text: "Pickup from your hotel, the airport or any address in Delhi." },
      { time: "10:30 AM", title: "Connaught Place",
        text: "The colonnaded circle at the heart of New Delhi — brand stores, handicraft emporiums, clothing and souvenirs." },
      { time: "12:00 PM", title: "Janpath Market",
        text: "The street stalls for textiles, jewellery, traditional clothes, bags and Rajasthani crafts. Bargaining is expected." },
      { time: "1:00 PM", title: "Lunch break",
        text: "Lunch at a local restaurant and a breather." },
      { time: "2:00 PM", title: "Chandni Chowk",
        text: "The old bazaars of Shah Jahan's city — wedding wear, jewellery, spices, dry fruit and fabric, lane by lane." },
      { time: "3:30 PM", title: "Dilli Haat",
        text: "The open-air crafts market where artisans from every state sell handlooms, textiles and jewellery at fixed prices." },
      { time: "5:00 PM", title: "Free shopping time",
        text: "Go back to the market you liked best, or finish the list." },
      { time: "6:00 PM", title: "Drop-off",
        text: "Back to your hotel or chosen address, bags and all." }
    ],
    includes: ["Private AC car and driver for the day", "Hotel pickup and drop", "Shopping assistance and flexible stops", "Bottled water", "Parking and tolls"],
    excludes: ["Your shopping", "Meals and drinks", "Licensed guide, unless added", "Dilli Haat entry ticket", "Tips"],
    faqs: [["Will you take us to commission shops?", "No. You choose where to go and we take no cut from any shop."],
           ["Can we add a guide?", "Yes — a licensed guide can join for a small extra charge, useful in Chandni Chowk."],
           ["Do shops take cards?", "Connaught Place and Dilli Haat mostly do. Janpath and Chandni Chowk stalls prefer cash or UPI."]],
    gallery: ["craftsShop", "haveli", "indiaGate"]
  },
  {
    slug: "delhi-luxury-tour-2-days",
    title: "Delhi luxury tour – 2 days",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "New Delhi · Old Delhi", days: 2, nights: 1, durationLabel: "2 days", price: 32500,
    img: IMG.humayun,
    summary: "Delhi at its most comfortable — a premium chauffeured car, a night in a luxury hotel, fine dining, and both halves of the city at an easy pace.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "New Delhi · Old Delhi"], ["Transport", "Premium chauffeur-driven car"],
            ["Accommodation", "1 night in a luxury hotel"], ["Tour type", "Private"], ["Pickup", "Hotel, airport or railway station"]],
    highlights: [
      "A premium car and professional chauffeur for both days",
      "Qutub Minar and Humayun's Tomb with a licensed guide",
      "Lunch and dinner at premium restaurants",
      "India Gate, Rashtrapati Bhavan and a walk in Lodhi Garden",
      "Jama Masjid, Chandni Chowk, the Lotus Temple and Akshardham",
      "An evening of shopping for crafts, textiles and jewellery"
    ],
    itinerary: [
      { time: "Day 1 · 9:00 AM", title: "Pickup in a premium car",
        text: "Your chauffeur meets you at your hotel, the airport or the station." },
      { time: "Day 1 · 9:30 AM", title: "Qutub Minar",
        text: "An hour and a half at the UNESCO-listed tower and its carved courtyards." },
      { time: "Day 1 · 11:30 AM", title: "Humayun's Tomb",
        text: "The Mughal garden tomb that shaped the Taj Mahal, and its quiet lawns." },
      { time: "Day 1 · 1:15 PM", title: "Lunch",
        text: "Lunch at a premium restaurant, Indian or international." },
      { time: "Day 1 · 2:45 PM", title: "India Gate and Lutyens' Delhi",
        text: "A photo stop at India Gate and a drive past Rashtrapati Bhavan and Parliament House." },
      { time: "Day 1 · 4:30 PM", title: "Lodhi Garden",
        text: "An unhurried walk among the 15th-century tombs and gardens." },
      { time: "Day 1 · Evening", title: "Hotel and dinner",
        text: "Check in to your luxury hotel, then dinner at a premium restaurant." },
      { time: "Day 2 · 9:00 AM", title: "Jama Masjid and Old Delhi",
        text: "After breakfast, the great mosque of Shah Jahan and the lanes around it." },
      { time: "Day 2 · 10:30 AM", title: "Chandni Chowk",
        text: "The old bazaars for textiles, spices, jewellery and street food, with a rickshaw ride if you want one." },
      { time: "Day 2 · 12:30 PM", title: "Lunch",
        text: "Lunch at a restaurant known for classic North Indian cooking." },
      { time: "Day 2 · 2:00 PM", title: "Lotus Temple and Akshardham",
        text: "The Lotus Temple and its gardens, then Akshardham's carved stone halls." },
      { time: "Day 2 · 5:30 PM", title: "Shopping, then drop-off",
        text: "Time for crafts, textiles, jewellery and designer stores, then drop-off at your hotel, the airport or the station around 7 pm." }
    ],
    includes: ["Premium chauffeur-driven car for both days", "1 night in a luxury hotel with breakfast", "Licensed English-speaking guide",
               "Airport or station pickup and drop", "Fuel, tolls, parking and driver allowance"],
    excludes: ["Monument entry tickets", "Lunches and dinner", "Shopping and personal expenses", "Tips"],
    faqs: [["Which hotel do we stay in?", "A five-star or luxury heritage hotel of your choice — we send two or three options with the quotation."],
           ["Is Akshardham open every day?", "It is closed on Mondays. On a Monday we move it to day one or swap in another site."],
           ["Can it start from the airport?", "Yes. Day one can begin straight off your flight."]],
    gallery: ["humayun", "qutub", "redFort"]
  },
  {
    slug: "old-delhi-food-tasting-tour",
    title: "Old Delhi food tasting tour with Chandni Chowk",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Chandni Chowk", days: 1, nights: 0, durationLabel: "4 hours", price: 4500,
    img: IMG.redFort,
    summary: "Four hours and roughly eight stops through the lanes of Chandni Chowk, eating at shops that have been doing one dish for a century.",
    facts: [["Duration", "About 4 hours"], ["Food", "8 to 10 tastings, enough for a meal"], ["Transport", "Private AC car plus walking and rickshaw"],
            ["Tour type", "Private"], ["Guide", "Local food guide"], ["Best time", "Late afternoon into the evening"]],
    highlights: [
      "Chaat, stuffed parathas, sweets and savoury snacks at stalls your guide trusts",
      "A rickshaw through the narrowest lanes of Chandni Chowk",
      "Jama Masjid and the spice, dry fruit, silver and attar markets",
      "Red Fort and India Gate photo stops",
      "Vegetarian versions arranged on request"
    ],
    itinerary: [
      { time: "10 AM – 3 PM", title: "Pickup at a time that suits you",
        text: "Pickup from your hotel or chosen address in Delhi NCR, and into Old Delhi." },
      { time: "First hour", title: "Jama Masjid",
        text: "A short guided visit to the great mosque of Shah Jahan and its history." },
      { time: "By rickshaw", title: "Chandni Chowk",
        text: "A rickshaw ride through the bazaars and heritage lanes." },
      { time: "On foot", title: "The old markets",
        text: "Spice, dry fruit, silver jewellery, attar and fabric markets, with the Khari Baoli spice lanes at the centre." },
      { time: "Tasting stops", title: "Street food",
        text: "Chaat, stuffed parathas, Indian sweets and savoury snacks at stalls chosen for hygiene and popularity, with your guide on how each one is made." },
      { time: "To finish", title: "Red Fort, India Gate and Parliament",
        text: "A photo stop outside the Red Fort, India Gate, and a drive past Parliament House before drop-off." }
    ],
    includes: ["All food tastings on the route", "Local food guide", "Rickshaw ride", "Private AC car for pickup and drop", "Bottled water"],
    excludes: ["Alcohol", "Extra portions beyond the tasting route", "Tips"],
    faqs: [
      ["Is the food safe?", "Your guide chooses busy, well-run stalls that locals and visitors both use."],
      ["Is it suitable for vegetarians?", "Yes — most of Old Delhi's street food is vegetarian, and we can keep it that way."],
      ["Are monument tickets included?", "No entry tickets are needed for this route."],
      ["Is the rickshaw ride included?", "Yes."]
    ],
    gallery: ["redFort", "craftsShop", "qutub"]
  },
  {
    slug: "delhi-2-days-city-tour",
    title: "2 days Old and New Delhi city tour",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Old Delhi · New Delhi", days: 2, nights: 1, durationLabel: "2 days", price: 14500,
    img: IMG.indiaGate,
    summary: "Forty-eight hours in Delhi done properly — the Mughal city one day, the colonial and modern city the next, with the markets and temples in between.",
    facts: [["Duration", "2 days, 1 night"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Licensed, English speaking"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Accommodation", "Optional, your choice of category"]],
    highlights: [
      "A full day each for Old and New Delhi",
      "Rickshaw ride and spice market in Chandni Chowk",
      "Raj Ghat and Akshardham Temple",
      "Humayun's Tomb, Qutub Minar and the Lotus Temple",
      "Gurudwara Bangla Sahib"
    ],
    itinerary: [
      { time: "Day 1", title: "Old Delhi",
        text: "Jama Masjid, a rickshaw ride through Chandni Chowk, a walk through the spice market, the Red Fort, Raj Ghat — Mahatma Gandhi's memorial — and the carved halls and exhibitions of Akshardham Temple. Back to your hotel." },
      { time: "Day 2", title: "New Delhi",
        text: "After breakfast: Humayun's Tomb and Qutub Minar, both UNESCO sites; the Lotus Temple; Gurudwara Bangla Sahib; and photo stops at India Gate and Parliament House. Drop-off at your hotel or chosen address." }
    ],
    includes: ["Private AC car for both days", "Licensed Delhi guide", "All monument tickets", "Rickshaw ride in Old Delhi", "Bottled water, parking and taxes"],
    excludes: ["Hotel unless added to your package", "Meals", "Camera fees", "Tips"],
    faqs: [
      ["Is hotel accommodation included?", "Not by default. Add a hotel in the category you like and we include it in the quote."],
      ["Is it private?", "Yes — your own car and a professional local guide."],
      ["Are monument tickets included?", "Yes, including the camera fee at Jama Masjid."],
      ["Is it suitable for families?", "Yes. The car is private and the pace is easy to change."]
    ],
    gallery: ["indiaGate", "qutub", "lotusTemple"]
  },
  {
    slug: "jaipur-day-tour-from-delhi-by-car",
    title: "Jaipur day tour from Delhi by car",
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Delhi · Jaipur · Delhi", days: 1, nights: 0, durationLabel: "1 day", price: 11500,
    img: IMG.hawaMahal,
    summary: "A long but workable day: leave Delhi before dawn, see Amber Fort and the city palaces, and be back the same night.",
    facts: [
      ["Duration", "Same day, about 15 hours"],
      ["Departure city", "Delhi NCR"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Guide", "Licensed Jaipur guide"],
      ["Return", "Between 8 and 9 pm"]
    ],
    highlights: ["Amber Fort before the coaches arrive", "Jal Mahal and the Hawa Mahal facade",
                 "City Palace and Jantar Mantar", "A stop for gemstones or block print if you want one"],
    itinerary: [
      { time: "5:00 AM", title: "Pickup in Delhi",
        text: "Pickup from your hotel in Delhi, Noida or Gurgaon, then four to five hours to Jaipur." },
      { time: "10:00 AM", title: "Amber Fort",
        text: "Meet your Jaipur guide. Up to two hours in Amber Fort's courtyards and halls, with an elephant ride up to the gate if one is available." },
      { time: "12:00 PM", title: "Jal Mahal",
        text: "A photo stop at the water palace in Man Sagar Lake." },
      { time: "12:30 PM", title: "Lunch",
        text: "Lunch at a local restaurant — Indian, Rajasthani or continental." },
      { time: "1:30 PM", title: "City Palace",
        text: "The City Palace of Sawai Jai Singh II, with its courtyards, museums and royal collections." },
      { time: "2:30 PM", title: "Jantar Mantar",
        text: "The UNESCO-listed observatory and its giant stone sundial." },
      { time: "3:30 PM", title: "Hawa Mahal",
        text: "The pink sandstone honeycomb of the Palace of Winds." },
      { time: "4:00 PM", title: "Back to Delhi",
        text: "The drive back, with drop-off at your chosen address between 8 and 9 pm." }
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
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Delhi · Train · Jaipur", days: 1, nights: 0, durationLabel: "1 day", price: 13500,
    img: IMG.jalMahal,
    summary: "The same Jaipur day without the long drive — a morning train out, a car and guide waiting at the station, and the evening train back.",
    facts: [
      ["Duration", "Same day, about 17 hours"],
      ["Transport", "Fast train both ways plus a private car in Jaipur"],
      ["Class", "AC chair car, meals on board"],
      ["Tour type", "Private"],
      ["Guide", "Licensed Jaipur guide"],
      ["Return", "Around 10:30 pm"]
    ],
    highlights: ["Train both ways, so nobody spends ten hours on the road", "Breakfast and dinner served on board",
                 "Private car and guide waiting at Jaipur Junction", "Amber Fort, City Palace and Hawa Mahal"],
    itinerary: [
      { time: "5:00 AM", title: "Pickup and New Delhi station",
        text: "Pickup from your hotel and transfer to New Delhi railway station. We help you find your coach and seats." },
      { time: "6:00 AM", title: "Morning train to Jaipur",
        text: "The fast morning train to Jaipur, with breakfast on board." },
      { time: "10:40 AM", title: "Arrive in Jaipur — Amber Fort",
        text: "Your guide meets you at the coach. Straight to Amber Fort for up to two hours, with an elephant ride to the gate if one is available." },
      { time: "1:00 PM", title: "Jal Mahal",
        text: "A photo stop at the Lake Palace." },
      { time: "1:30 PM", title: "Lunch",
        text: "Lunch at a local restaurant — Indian, Rajasthani or continental." },
      { time: "2:30 PM", title: "City Palace",
        text: "The palace built by Maharaja Sawai Jai Singh II between 1729 and 1732 — its courtyards and museums." },
      { time: "3:30 PM", title: "Jantar Mantar",
        text: "The UNESCO-listed observatory and its great stone sundial." },
      { time: "4:30 PM", title: "Hawa Mahal",
        text: "The pink sandstone facade and its latticed windows." },
      { time: "5:00 PM", title: "Back to the station",
        text: "Your guide and driver take you to Jaipur station and see you to your seats." },
      { time: "5:30 PM", title: "Evening train to Delhi",
        text: "The return train, arriving in Delhi around 10:30 pm, where your driver is waiting to take you home." }
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
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Jaipur city", days: 1, nights: 0, durationLabel: "1 day", price: 6500,
    img: IMG.hawaMahalClose,
    summary: "A full day in Jaipur for travellers already in the city — car, guide and an order of stops that keeps you a step ahead of the crowds.",
    facts: [
      ["Duration", "About 8 hours"],
      ["Starts", "Your Jaipur hotel, 9 am"],
      ["Transport", "Private AC car"],
      ["Tour type", "Private"],
      ["Guide", "Licensed Jaipur guide"],
      ["Best for", "Travellers already in Jaipur"]
    ],
    highlights: [
      "Up to two hours in Amber Fort",
      "Jal Mahal photo stop on Man Sagar Lake",
      "City Palace and the 19 instruments of the Jantar Mantar",
      "Hawa Mahal and the painted arches of Patrika Gate"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Pickup",
        text: "Your driver and guide collect you from your Jaipur hotel." },
      { time: "9:30 AM", title: "Amber Fort",
        text: "Up to two hours in the hilltop fort's courtyards, halls and mirror work." },
      { time: "12:30 PM", title: "Jal Mahal",
        text: "A photo stop at the Lake Palace from the lakeside." },
      { time: "1:00 PM", title: "Lunch",
        text: "Lunch at a local restaurant — Indian, Rajasthani or continental." },
      { time: "2:00 PM", title: "City Palace",
        text: "The palace built by Maharaja Sawai Jai Singh II between 1729 and 1732, with its museums and courtyards." },
      { time: "3:30 PM", title: "Jantar Mantar",
        text: "The UNESCO-listed observatory — 19 instruments, including the world's largest stone sundial." },
      { time: "4:30 PM", title: "Hawa Mahal",
        text: "The Palace of Winds, built so the royal women could watch the street unseen." },
      { time: "5:00 PM", title: "Patrika Gate and drop-off",
        text: "A photo stop at the painted Patrika Gate, then back to your hotel." }
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
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Jaipur bazaars", days: 1, nights: 0, durationLabel: "Half day", price: 4200,
    img: IMG.craftsShop,
    summary: "Half a day through the bazaars and workshops with someone who knows which places make their own work and which just resell it.",
    facts: [["Duration", "4 to 5 hours"], ["Transport", "Private AC car"], ["Tour type", "Private"],
            ["Guide", "Local guide, no commission arrangements"], ["Best time", "Late afternoon, when the bazaars fill"], ["Starts", "Your Jaipur hotel"]],
    highlights: ["Block printing workshops at Sanganer or Bagru", "Blue pottery studios in the old city",
                 "Johari Bazaar for gemstones, with advice on what to check",
                 "Bapu Bazaar for textiles, juttis and bangles", "No commission stops — we do not take a cut from any shop"],
    itinerary: [
      { time: "Part 1", title: "A block printing or blue pottery workshop",
        text: "A block printing or blue pottery workshop, where the work is actually made rather than sold." },
      { time: "Part 2", title: "Johari Bazaar for gemstones and silver",
        text: "Johari Bazaar for gemstones and silver, with your guide explaining what to ask and what to avoid." },
      { time: "Part 3", title: "Bapu and Tripolia bazaars",
        text: "Bapu and Tripolia bazaars for textiles, juttis, bangles and whatever else catches you, then back to your hotel." }
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
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Delhi · Agra · Jaipur", days: 2, nights: 1, durationLabel: "2 days", price: 26500,
    img: IMG.taj,
    summary: "Agra on day one, Jaipur on day two, one night in between — the two big destinations without the Delhi sightseeing day.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Agra and Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "1 night, Agra or Jaipur"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"]],
    highlights: ["Taj Mahal and Agra Fort with a licensed guide", "Fatehpur Sikri on the drive between the two cities",
                 "Amber Fort and the Jaipur city palaces", "Only one hotel change in two days"],
    itinerary: [
      { time: "Day 1", title: "Agra, the Taj Mahal and on to Jaipur",
        text: "Early pickup in Delhi, drive to Agra. Taj Mahal and Agra Fort with your guide, then on to Jaipur via Fatehpur Sikri. Overnight in Jaipur." },
      { time: "Day 2", title: "Amber Fort, the Jaipur palaces and back to Delhi",
        text: "Amber Fort at opening, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal, then the drive back to Delhi." }
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
    cat: "same-day", catLabel: "Same day tour packages",
    route: "Delhi · Agra · Mathura", days: 1, nights: 0, durationLabel: "1 day", price: 12900,
    img: IMG.tajSunrise,
    summary: "Sunrise at the Taj Mahal, then an afternoon at the elephant conservation centre near Mathura, where rescued working elephants are rehabilitated.",
    facts: [["Duration", "Same day, about 15 hours"], ["Destinations", "Agra and the conservation centre near Mathura"],
            ["Transport", "Private AC car"], ["Tour type", "Private"], ["Guide", "Licensed guide in Agra"], ["Return", "Around 8 pm"]],
    highlights: ["First entry at the Taj Mahal, before the crowds reach the platform",
                 "Agra Fort after breakfast", "An afternoon with rescued elephants at a no-riding, no-performance sanctuary",
                 "Back in Delhi the same evening"],
    itinerary: [
      { time: "2:30 AM", title: "Pickup in Delhi",
        text: "Pickup in Delhi and the quiet drive to Agra." },
      { time: "6:00 AM", title: "Sunrise at the Taj Mahal",
        text: "Sunrise at the Taj Mahal with your guide, in the first group through the gate." },
      { time: "9:00 AM", title: "Breakfast, then Agra Fort",
        text: "Breakfast, then Agra Fort." },
      { time: "12:30 PM", title: "The elephant conservation centre",
        text: "Drive towards Mathura to the elephant conservation centre, with time to walk the enclosures and hear each animal's history." },
      { time: "4:00 PM", title: "The drive back to Delhi",
        text: "The drive back to Delhi, arriving around 8 pm." }
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
    cat: "golden-triangle", catLabel: "Golden Triangle tour packages",
    route: "Delhi · Jaipur · Agra · Varanasi", days: 8, nights: 7, durationLabel: "8 days", price: 104000,
    img: IMG.varanasi,
    summary: "Delhi, Jaipur and a full day in Agra, then the Vande Bharat east to the Ganga — the evening aarti, a sunrise boat and Sarnath — and a flight home.",
    facts: [
      ["Duration", "8 days, 7 nights"],
      ["Destinations", "Delhi · Jaipur · Agra · Varanasi"],
      ["Transport", "Private AC car, Vande Bharat train to Varanasi, flight back to Delhi"],
      ["Accommodation", "7 nights with breakfast"],
      ["Tour type", "Private"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Ends", "Delhi"]
    ],
    highlights: [
      "Old and New Delhi with a rickshaw ride",
      "Amber Fort and the Jaipur city palaces",
      "A full day in Agra — Taj Mahal at sunrise, Agra Fort, the Baby Taj and Mehtab Bagh",
      "Vande Bharat Express from Agra to Varanasi",
      "Ganga aarti at Dashashwamedh Ghat and a sunrise boat on the river",
      "Kashi Vishwanath, Sarnath and Banaras Hindu University"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Our representative meets you and takes you to your hotel. Evening at leisure. Overnight in Delhi." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "A full day with your guide — Jama Masjid, a rickshaw ride through Chandni Chowk and the spice market, a photo stop outside the Red Fort, then Humayun's Tomb, India Gate, a drive past Parliament House, Qutub Minar and the Lotus Temple. Overnight in Delhi." },
      { time: "Day 3", title: "Delhi to Jaipur",
        text: "Breakfast and about four hours to Jaipur. Check in and rest, then the City Palace and Patrika Gate in the evening. Overnight in Jaipur." },
      { time: "Day 4", title: "Jaipur, then on to Agra",
        text: "Amber Fort, a photo stop at Jal Mahal, the Hawa Mahal and the Jantar Mantar, then about four hours to Agra. Overnight in Agra." },
      { time: "Day 5", title: "A full day in Agra",
        text: "The Taj Mahal at sunrise, back for breakfast, then Agra Fort, Itimad-ud-Daulah — the Baby Taj — and sunset from Mehtab Bagh across the river. Overnight in Agra." },
      { time: "Day 6", title: "Vande Bharat to Varanasi, the evening aarti",
        text: "An early transfer to the station for the 6 am Vande Bharat Express, arriving in Varanasi around 1:30 pm. Check in, then the Ganga aarti on the river bank in the evening. Overnight in Varanasi." },
      { time: "Day 7", title: "Varanasi and Sarnath",
        text: "A boat along the ghats before sunrise, then Kashi Vishwanath Temple, Sarnath — where the Buddha first taught — the Durga temple, Banaras Hindu University and the old markets. Overnight in Varanasi." },
      { time: "Day 8", title: "Fly back to Delhi",
        text: "Breakfast and transfer to Varanasi airport for the flight to Delhi. Timings can move around your onward flight." }
    ],
    includes: [
      "Private AC car in Delhi, Jaipur, Agra and Varanasi",
      "Agra to Varanasi train, Vande Bharat chair car",
      "Varanasi to Delhi flight",
      "Licensed guides in each city",
      "7 nights hotel with breakfast",
      "Rickshaw ride in Old Delhi",
      "Boat ride in Varanasi",
      "All monument tickets",
      "Bottled water, tolls, parking and taxes"
    ],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [
      ["Is the Ganga aarti included?", "Yes, the evening ceremony at Dashashwamedh Ghat on the day you arrive."],
      ["What time is the boat ride?", "Early — on the water before sunrise, when the ghats come alive."],
      ["Is Sarnath included?", "Yes, on the Varanasi sightseeing day."],
      ["Can it be longer?", "Yes. An extra night in Agra or Varanasi is the usual way to stretch it to nine or ten days."]
    ],
    gallery: ["gangaAarti", "tajSunrise", "amber"]
  },
  {
    slug: "varanasi-2-days-spiritual-tour",
    title: "2 days Varanasi spiritual tour",
    cat: "varanasi", catLabel: "Varanasi tour packages",
    route: "Varanasi", days: 2, nights: 1, durationLabel: "2 days", price: 16500,
    img: IMG.gangaAarti,
    summary: "Two days on the Ganga — the great temples and the old lanes, the evening aarti, a boat at first light and the silk weavers of Banaras.",
    facts: [
      ["Duration", "2 days, 1 night"],
      ["Destinations", "Varanasi"],
      ["Transport", "Private AC car plus boats"],
      ["Tour type", "Private"],
      ["Guide", "Licensed Varanasi guide"],
      ["Starts", "Your Varanasi hotel, 9 am"]
    ],
    highlights: [
      "Kashi Vishwanath, Annapurna, Durga and Tulsi Manas temples",
      "Banaras Hindu University and the New Vishwanath temple",
      "Evening Ganga aarti at Dashashwamedh Ghat",
      "Sunrise boat past Dashashwamedh, Assi and Manikarnika ghats",
      "Sankat Mochan temple and a Banarasi silk weaving centre"
    ],
    itinerary: [
      { time: "Day 1 · 9:00 AM", title: "The temples of Varanasi",
        text: "Your driver and guide meet you at the hotel. Kashi Vishwanath, the Annapurna and Durga temples, Tulsi Manas temple, Banaras Hindu University with its New Vishwanath (Birla) temple, and the Bharat Mata temple, with time in the lanes and markets of the old city." },
      { time: "Day 1 · 5:30 PM", title: "Ganga aarti",
        text: "The evening aarti at Dashashwamedh Ghat, watched from the steps or from a boat on the river. Back to the hotel." },
      { time: "Day 2 · 5:30 AM", title: "Sunrise on the Ganga",
        text: "A boat past Dashashwamedh, Assi and Manikarnika ghats as the morning rituals begin. Back for breakfast." },
      { time: "Day 2 · 9:30 AM", title: "Sankat Mochan and the silk weavers",
        text: "The Sankat Mochan Hanuman temple, an optional visit to Ramnagar Fort, a Banarasi silk weaving centre and the handicraft markets." },
      { time: "Day 2 · 3:00 PM", title: "Drop-off",
        text: "Back to your hotel, or to the airport or station for your onward journey." }
    ],
    includes: ["Private AC car", "Licensed Varanasi guide", "Two private boat rides", "One night hotel with breakfast", "All entry tickets", "Taxes"],
    excludes: ["Flights or trains to Varanasi", "Meals other than breakfast", "Camera fees", "Tips"],
    faqs: [["How early is the sunrise boat?", "On the water by 5:30 am in summer, closer to 6 in winter. It is the best hour of the day here."],
           ["Is there a dress code?", "Modest clothing, and shoes come off at the temples. The lanes are uneven, so wear something you can walk in."],
           ["Can we photograph the cremation ghats?", "No. Your guide will be direct about this. Everywhere else is fine."]],
    gallery: ["varanasi", "gangaAarti", "craftsShop"]
  },
  {
    slug: "8-days-golden-triangle-with-amritsar",
    title: "8 days Golden Triangle tour with Amritsar",
    cat: "golden-triangle", catLabel: "Golden Triangle tour packages",
    route: "Delhi · Agra · Jaipur · Amritsar", days: 8, nights: 7, durationLabel: "8 days", price: 99500,
    img: IMG.amritsar,
    summary: "The classic route plus two days in Amritsar — a flight from Jaipur, the Wagah border ceremony that evening, then the Golden Temple and Jallianwala Bagh.",
    facts: [
      ["Duration", "8 days, 7 nights"],
      ["Destinations", "Delhi · Agra · Jaipur · Amritsar"],
      ["Transport", "Private AC car, flight Jaipur to Amritsar"],
      ["Accommodation", "7 nights with breakfast"],
      ["Tour type", "Private"],
      ["Pickup", "Hotel or airport in Delhi NCR"],
      ["Ends", "Amritsar airport"]
    ],
    highlights: [
      "Taj Mahal at sunrise, Agra Fort and Fatehpur Sikri",
      "Amber Fort and the Jaipur city palaces",
      "Flight from Jaipur straight to Amritsar",
      "The flag-lowering ceremony at the Wagah border",
      "The Golden Temple, Jallianwala Bagh and Durgiana Temple"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Our representative meets you and takes you to your hotel. Free evening. Overnight in Delhi." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "Pickup at 9 am — Jama Masjid, a rickshaw ride through Chandni Chowk and the spice market, a photo stop outside the Red Fort, then Humayun's Tomb, India Gate, a drive past Parliament House, Qutub Minar and the Lotus Temple. Overnight in Delhi." },
      { time: "Day 3", title: "To Agra — the Baby Taj and Mehtab Bagh",
        text: "Checkout at 10 am and about three hours to Agra. Itimad-ud-Daulah, then sunset at Mehtab Bagh. Overnight in Agra." },
      { time: "Day 4", title: "Sunrise Taj Mahal and the road to Jaipur",
        text: "The Taj Mahal at sunrise, breakfast and checkout, Agra Fort, then about four hours to Jaipur with a stop at Fatehpur Sikri. Overnight in Jaipur." },
      { time: "Day 5", title: "Jaipur city tour",
        text: "Amber Fort, a photo stop at Jal Mahal, the Hawa Mahal, the City Palace, the Jantar Mantar and Patrika Gate. Overnight in Jaipur." },
      { time: "Day 6", title: "Fly to Amritsar, Wagah in the evening",
        text: "Transfer to Jaipur airport for the flight to Amritsar. You are met and taken to your hotel, then out to the Wagah border for the evening retreat ceremony. Overnight in Amritsar." },
      { time: "Day 7", title: "The Golden Temple and old Amritsar",
        text: "The Golden Temple and its langar kitchen, Jallianwala Bagh, the Durgiana Temple and the Maharaja Ranjit Singh Museum, finishing around 3 pm. Overnight in Amritsar." },
      { time: "Day 8", title: "Departure from Amritsar",
        text: "Breakfast, checkout and drop-off at Amritsar airport in time for your flight." }
    ],
    includes: [
      "Private AC car throughout",
      "Jaipur to Amritsar flight",
      "Licensed guides in each city",
      "7 nights hotel with breakfast",
      "Rickshaw ride in Old Delhi",
      "All monument tickets",
      "Wagah border transfers",
      "Tolls, parking and taxes"
    ],
    excludes: ["Lunch and dinner", "Camera fees", "Tips", "Anything not listed under inclusions"],
    faqs: [["Do we need to cover our heads at the Golden Temple?", "Yes, everyone does. Scarves are available at the entrance and we carry spares."],
           ["Is Wagah worth the trip?", "It is loud and theatrical and unlike anything else. Go early; the stands fill long before it begins."],
           ["Train or flight to Amritsar?", "The train takes about six hours and is comfortable. The flight takes an hour. We book whichever suits the day."]],
    gallery: ["amritsar", "tajSunrise", "hawaMahal"]
  },
  {
    slug: "3-days-ranthambore-safari-tour",
    title: "3 days Ranthambore tiger safari tour",
    cat: "rajasthan", catLabel: "Rajasthan tour packages",
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
      { time: "Day 1", title: "Arrival and the first safari",
        text: "Arrive at Sawai Madhopur, check in and relax. Afternoon safari into the park." },
      { time: "Day 2", title: "Morning and afternoon safaris",
        text: "Morning safari at first light, breakfast and rest, then a second safari in the afternoon." },
      { time: "Day 3", title: "A final safari, then departure",
        text: "A final morning safari, breakfast, and departure — or on towards Jaipur if this sits inside a longer route." }
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
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Munnar · Thekkady · Alleppey", days: 7, nights: 6, durationLabel: "7 days", price: 78500,
    img: IMG.kerala,
    summary: "Kerala at its own pace — colonial Kochi, tea estates at Munnar, spice hills at Thekkady and a night on a houseboat in the backwaters.",
    facts: [
      ["Duration", "7 days, 6 nights"],
      ["Destinations", "Kochi · Munnar · Thekkady · Alleppey · Kumarakom"],
      ["Transport", "Private AC car"],
      ["Accommodation", "5 nights hotel, 1 night houseboat"],
      ["Tour type", "Private"],
      ["Starts and ends", "Kochi"],
      ["Best season", "October to March"]
    ],
    highlights: [
      "Fort Kochi, Jew Town and a Kerala cooking class with dinner",
      "Two nights in Munnar — Eravikulam, Top Station and the tea estates",
      "A boat on Periyar Lake and a Kathakali show in Thekkady",
      "A night on a private kettuvallam houseboat",
      "Kumarakom bird sanctuary and a sunset cruise on Vembanad Lake"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Kochi",
        text: "Arrival and transfer to your hotel. The Chinese fishing nets, St Francis Church, Mattancherry and the Dutch Palace, the Jewish synagogue, Jew Town and the spice market, then a cooking class with dinner. Overnight in Kochi." },
      { time: "Day 2", title: "Kochi to Munnar",
        text: "About 133 km and five hours into the hills. Check in, then the tea and coffee gardens and the shops for tea, coffee, cashews and chocolate. Overnight in Munnar." },
      { time: "Day 3", title: "Munnar",
        text: "The Tata Tea Museum, the views of Anamudi peak, Mattupetty Dam, Eravikulam National Park for the Nilgiri tahr, and Top Station. Overnight in Munnar." },
      { time: "Day 4", title: "Munnar to Thekkady",
        text: "About 94 km and four hours to Thekkady. A boat on Periyar Lake through the tiger reserve and a Kathakali performance in the evening; a spice plantation, trekking or bamboo rafting if you want more. Overnight in Thekkady." },
      { time: "Day 5", title: "Onto the houseboat at Alleppey",
        text: "About 140 km to Alleppey and aboard a traditional kettuvallam for an afternoon and night on the canals, with meals cooked on board." },
      { time: "Day 6", title: "Kumarakom",
        text: "Breakfast on board, then 45 minutes to Kumarakom on Vembanad Lake. The bird sanctuary and a sunset cruise. Overnight in Kumarakom." },
      { time: "Day 7", title: "Departure from Kochi",
        text: "Transfer to Kochi airport or railway station for your onward journey." }
    ],
    includes: [
      "Private AC car for the whole route",
      "5 nights hotel with breakfast",
      "1 night private houseboat with all meals",
      "Cooking class with dinner in Kochi",
      "Kathakali tickets",
      "Periyar boat ride",
      "Kumarakom sunset cruise",
      "Local guides in Kochi and Thekkady",
      "Tolls, parking and taxes"
    ],
    excludes: ["Flights to and from Kochi", "Lunch and dinner outside the houseboat", "Camera fees", "Tips"],
    faqs: [
      ["When is Eravikulam closed?", "Every year from 1 February to around the end of March, for the Nilgiri tahr calving season. We swap in other Munnar viewpoints then."],
      ["When is the bird sanctuary at its best?", "November to February, when the migrants are in."],
      ["Is the monsoon a bad time?", "June to September is green and quiet, with rain most afternoons. It works if you do not mind getting wet."]
    ],
    gallery: ["kochiNets", "munnarTea", "kerala"]
  },
  {
    slug: "10-days-south-india-temples-and-backwaters",
    title: "10 days South India temples and backwaters tour",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Chennai · Mahabalipuram · Thanjavur · Madurai · Kerala", days: 10, nights: 9, durationLabel: "10 days", price: 118000,
    img: IMG.maduraiTemple,
    summary: "Dravidian temple towns down the Tamil coast, then across to Kerala for the hills and the backwaters — the south at full length.",
    facts: [
      ["Duration", "10 days, 9 nights"],
      ["Destinations", "Chennai · Kanchipuram · Mahabalipuram · Thanjavur · Trichy · Madurai · Munnar · Periyar · Alleppey · Kochi"],
      ["Transport", "Private AC car"],
      ["Accommodation", "8 nights hotel, 1 night houseboat"],
      ["Tour type", "Private"],
      ["Starts", "Chennai"],
      ["Ends", "Kochi"]
    ],
    highlights: [
      "Kanchipuram's temples and the shore temples of Mahabalipuram",
      "Brihadeeswarar Temple at Thanjavur",
      "Srirangam and the Rock Fort at Trichy",
      "Meenakshi Temple at Madurai and its evening rituals",
      "Munnar's tea estates and a boat on Lake Periyar",
      "A houseboat night and a Kathakali show in Kochi"
    ],
    itinerary: [
      { time: "Day 1", title: "Chennai",
        text: "Met on arrival and taken to your hotel. A city tour — Government House, San Thome Basilica, the lighthouse and Marina Beach. Overnight in Chennai." },
      { time: "Day 2", title: "Kanchipuram and Mahabalipuram",
        text: "About four hours via Kanchipuram for the Ekambaranathar and Kailasanathar temples, then on to Mahabalipuram. Overnight in Mahabalipuram." },
      { time: "Day 3", title: "Mahabalipuram to Thanjavur",
        text: "The Mahishasura Mardini cave, the Shore Temple and Krishna Mandapam, then about six hours to Thanjavur for the Brihadeeswarar Temple. Overnight in Thanjavur." },
      { time: "Day 4", title: "Trichy and on to Madurai",
        text: "Via Trichy for the Rock Fort and the Srirangam temple, then on to Madurai for the Meenakshi Sundareswarar Temple. Overnight in Madurai." },
      { time: "Day 5", title: "Madurai",
        text: "The Thirumalai Nayak Palace and the Meenakshi Amman Temple, returning in the evening for the night rituals. Overnight in Madurai." },
      { time: "Day 6", title: "Madurai to Munnar",
        text: "About five hours up into the hills. The tea estates, the Tea Museum (closed Mondays) and a working tea factory. Overnight in Munnar." },
      { time: "Day 7", title: "Munnar to Periyar",
        text: "About four hours via the Idukki dam, then a boat cruise on Lake Periyar looking for elephants and deer. Overnight in Periyar." },
      { time: "Day 8", title: "Onto the houseboat",
        text: "About three hours to the backwaters and aboard a houseboat cruising from Kumarakom to Alleppey, with all meals on board." },
      { time: "Day 9", title: "Alleppey to Kochi",
        text: "An hour to Kochi. A live Kathakali performance in the evening. Overnight in Kochi." },
      { time: "Day 10", title: "Kochi and departure",
        text: "The Jewish synagogue, Jew Town (closed Saturdays) and the spice market, then the airport." }
    ],
    includes: [
      "Private AC car for the whole route",
      "8 nights hotel with breakfast",
      "1 night houseboat with all meals",
      "Licensed guides at each temple town",
      "All monument and temple tickets where charged",
      "Lake Periyar boat cruise",
      "Kathakali performance in Kochi",
      "Tolls, parking and taxes"
    ],
    excludes: ["Flights into Chennai and out of Kochi", "Lunch and dinner outside the houseboat", "Camera fees at temples", "Tips"],
    faqs: [["Are non-Hindus allowed inside the temples?", "At most, yes, including Meenakshi. A few inner sanctums are restricted — your guide knows which."],
           ["Is there a dress code?", "Covered shoulders and knees, and shoes left outside. Some temples ask men to remove shirts in the inner areas."],
           ["Is ten days too long?", "It is the length the route needs. The drives between temple towns are three to four hours and the temples deserve unhurried time."]],
    gallery: ["maduraiTemple", "munnarTea", "kerala"]
  },
  /* ---- Added: routes Tajview did not yet sell (short tours) ---- */
  {
    slug: "taj-mahal-sunrise-and-old-delhi-tour",
    title: "Taj Mahal sunrise and Old Delhi tour from Delhi",
    cat: "taj-mahal", catLabel: "Taj Mahal tour packages",
    route: "Delhi · Agra · Old Delhi", days: 1, nights: 0, durationLabel: "1 day", price: 10900,
    img: IMG.tajSunrise,
    summary: "Two cities in one long day: the Taj Mahal in the first light, Agra Fort after breakfast, and the lanes of Old Delhi on the way home.",
    facts: [["Duration", "About 16 hours"], ["Destinations", "Agra · Old Delhi"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi, Noida or Gurgaon"], ["Return", "Same evening, around 7 pm"]],
    highlights: ["Inside the Taj Mahal as the sun comes up", "Agra Fort with your guide after breakfast",
                 "A cycle-rickshaw through Chandni Chowk", "Jama Masjid and the spice market on the way back",
                 "One car and one driver for the whole day"],
    itinerary: [
      { time: "3:00 AM", title: "Early pickup in Delhi",
        text: "Your driver collects you from your hotel or the airport while the city is still asleep, and the expressway gets you to Agra in about three hours." },
      { time: "6:00 AM", title: "The Taj Mahal at sunrise",
        text: "Meet your guide at the gate and go in with the first visitors of the day, when the marble changes colour and the gardens are quiet." },
      { time: "9:00 AM", title: "Breakfast, then Agra Fort",
        text: "Breakfast at a restaurant or a five-star hotel in Agra, then a guided walk through Agra Fort and its river terraces facing the Taj." },
      { time: "12:00 PM", title: "Back towards Delhi",
        text: "Leave Agra around midday and drive back to Delhi on the expressway." },
      { time: "3:30 PM", title: "Old Delhi on the return",
        text: "Jama Masjid, a cycle-rickshaw through Chandni Chowk, the Khari Baoli spice market, and the Red Fort walls from outside." },
      { time: "7:00 PM", title: "Drop at your hotel or the airport",
        text: "Back at your Delhi hotel, or at the airport if you are flying out that night." }
    ],
    includes: ["Private AC car and driver for the day", "Licensed guide in Agra and Old Delhi", "Cycle-rickshaw ride in Chandni Chowk",
               "Bottled water", "Tolls, parking, driver allowance and taxes"],
    excludes: ["Monument tickets (can be added when you book)", "Breakfast and lunch (five-star breakfast can be added)", "Camera fees", "Tips"],
    faqs: [["How early is the pickup?", "Between 2:30 and 3:30 am, depending on where you are staying. It is the only way to reach the Taj Mahal for sunrise."],
           ["Is the Taj Mahal open every day?", "Every day except Friday. We plan the date around that."],
           ["Can we skip Old Delhi if we are tired?", "Yes. Tell your guide and the driver will take you straight back to the hotel."],
           ["What should we wear?", "Covered shoulders and knees. Jama Masjid lends robes at the door if needed, and comfortable shoes help in the lanes."]],
    gallery: ["tajSunrise", "agraFort", "redFort"]
  },
  {
    slug: "varanasi-day-tour",
    title: "Varanasi full day tour",
    cat: "varanasi", catLabel: "Varanasi tour packages",
    route: "Varanasi ghats · Temples · BHU", days: 1, nights: 0, durationLabel: "1 day", price: 5900,
    img: IMG.varanasi,
    summary: "One day on the Ganga from dawn to the evening aarti — two boat rides, the old temples, the university and time for the silk shops.",
    facts: [["Duration", "About 14 hours"], ["Destinations", "Varanasi"], ["Transport", "Private AC car plus boats"],
            ["Tour type", "Private"], ["Guide", "Licensed Varanasi guide"], ["Pickup", "Your hotel in Varanasi"]],
    highlights: ["Sunrise boat past Assi, Dashashwamedh, Harishchandra and Manikarnika ghats",
                 "Kashi Vishwanath, Annapurna, Durga and Tulsi Manas temples",
                 "Banaras Hindu University and the Birla (New Vishwanath) temple",
                 "Bharat Mata temple and its marble relief map of India",
                 "The evening Ganga aarti watched from a boat"],
    itinerary: [
      { time: "5:00 AM", title: "Pickup and down to the river",
        text: "Your guide meets you at the hotel and walks you down to the ghats before the sun is up." },
      { time: "5:30 AM", title: "Sunrise boat along the ghats",
        text: "A rowing boat from Assi to Manikarnika as pilgrims bathe and the morning prayers begin." },
      { time: "7:30 AM", title: "Breakfast at the hotel",
        text: "Back to the hotel for breakfast and an hour's rest." },
      { time: "9:30 AM", title: "The temples, BHU and the old city",
        text: "Kashi Vishwanath corridor, Annapurna, Durga and Tulsi Manas temples, the Banaras Hindu University campus and its Birla temple, Bharat Mata temple, then the lanes and markets of the old city." },
      { time: "1:30 PM", title: "Lunch and free time",
        text: "Lunch at a place your guide recommends, then free time for Banarasi silk, handicrafts or a rest." },
      { time: "5:30 PM", title: "The Ganga aarti from the water",
        text: "A boat from Dashashwamedh Ghat to watch the evening aarti from the river, away from the crush on the steps." },
      { time: "7:30 PM", title: "Back to your hotel",
        text: "Drop at your hotel after the ceremony." }
    ],
    includes: ["Private AC car and driver", "Licensed English-speaking guide", "Sunrise and evening boat rides", "Entry tickets where charged",
               "Bottled water", "Tolls, parking and taxes"],
    excludes: ["Hotel stay", "Meals", "Shopping", "Tips"],
    faqs: [["Can we photograph the cremation ghats?", "No. Manikarnika is seen from the boat, without cameras. Your guide will say when."],
           ["Are phones allowed inside Kashi Vishwanath?", "No. Phones, bags and cameras are left in lockers outside the temple. Your guide will help."],
           ["Is it a long day?", "It is, with a three-hour break in the middle. Anyone who wants to skip a part can do so."]],
    gallery: ["gangaAarti", "varanasi", "craftsShop"]
  },
  {
    slug: "3-days-varanasi-tour-from-delhi",
    title: "3 days Varanasi tour from Delhi by flight",
    cat: "varanasi", catLabel: "Varanasi tour packages",
    route: "Delhi · Varanasi · Delhi", days: 3, nights: 2, durationLabel: "3 days", price: 34500,
    img: IMG.gangaAarti,
    summary: "Fly from Delhi on the first morning, two nights on the Ganga with both aartis and a sunrise boat, and fly back in time for dinner.",
    facts: [["Duration", "3 days, 2 nights"], ["Destinations", "Varanasi"], ["Transport", "Domestic flights plus private AC car"],
            ["Accommodation", "2 nights in Varanasi"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Delhi hotel or airport"]],
    highlights: ["Return flights Delhi to Varanasi included", "Evening aarti at Dashashwamedh Ghat on the day you land",
                 "Sunrise boat along the ghats", "Kashi Vishwanath and the temples of the old city",
                 "A visit to a Banarasi silk weaving workshop"],
    itinerary: [
      { time: "Day 1", title: "Fly to Varanasi, the evening aarti",
        text: "Pickup from your Delhi hotel and transfer to the airport for the flight to Varanasi. Your driver meets you on arrival. Check in, then a boat on the Ganga ending at Dashashwamedh Ghat for the evening aarti." },
      { time: "Day 2", title: "Sunrise on the river and the old city",
        text: "A boat at dawn along the ghats, then breakfast. The rest of the day covers Kashi Vishwanath, Annapurna and Durga temples, Tulsi Manas temple, the BHU campus and its Birla temple, Bharat Mata temple, the old lanes and a silk weaving workshop." },
      { time: "Day 3", title: "Fly back to Delhi",
        text: "A free morning, then the transfer to Varanasi airport for the flight to Delhi. You are met on landing and dropped at your hotel, or at the international terminal if you are flying on." }
    ],
    includes: ["Return economy flights Delhi to Varanasi", "Airport transfers in Delhi and Varanasi", "Private AC car and driver in Varanasi",
               "Licensed guide in Varanasi", "Two boat rides", "2 nights hotel with breakfast and taxes", "Entry tickets where charged", "Bottled water, tolls and parking"],
    excludes: ["Lunch and dinner", "Excess baggage on flights", "Shopping", "Tips"],
    faqs: [["Can we add Sarnath?", "Yes, it fits into the morning of day 3 if your flight is after 2 pm."],
           ["Which hotel do we stay in?", "A riverside or city hotel of the category you choose. We send the name with the quotation."],
           ["Is it possible by train instead?", "Yes, on the Vande Bharat Express. It saves money but adds a day of travel."]],
    gallery: ["varanasi", "gangaAarti", "craftsShop"]
  },
  {
    slug: "2-days-jaipur-tour-from-delhi",
    title: "2 days Jaipur overnight tour from Delhi",
    cat: "jaipur", catLabel: "Jaipur tour packages",
    route: "Delhi · Jaipur · Delhi", days: 2, nights: 1, durationLabel: "2 days", price: 19500,
    img: IMG.hawaMahal,
    summary: "The Pink City without the rush of a day trip: the palaces on the first afternoon, Amber Fort the next morning, and home by evening.",
    facts: [["Duration", "2 days, 1 night"], ["Destinations", "Jaipur"], ["Transport", "Private AC car"],
            ["Accommodation", "1 night in Jaipur"], ["Tour type", "Private"], ["Pickup", "Hotel or airport in Delhi NCR"], ["Return", "Day 2, around 7 pm"]],
    highlights: ["City Palace and the Jantar Mantar observatory", "Hawa Mahal and Patrika Gate for photographs",
                 "Amber Fort in the morning, before the heat", "Jal Mahal and the Galta Ji monkey temple",
                 "One hotel night with breakfast"],
    itinerary: [
      { time: "Day 1 · 8:00 AM", title: "Delhi to Jaipur",
        text: "Pickup from your Delhi hotel or the airport and a four to five hour drive to Jaipur. Check in and rest." },
      { time: "Day 1 · 2:00 PM", title: "City Palace, Jantar Mantar and Hawa Mahal",
        text: "After lunch, the City Palace, the Jantar Mantar observatory, a photo stop at Hawa Mahal and the painted arches of Patrika Gate." },
      { time: "Day 2 · 8:00 AM", title: "Amber Fort, Jal Mahal and Galta Ji",
        text: "Breakfast and checkout, then Amber Fort, a stop at Jal Mahal and the Galta Ji temple in the hills, known for its monkeys." },
      { time: "Day 2 · 2:00 PM", title: "Back to Delhi",
        text: "Lunch, then the drive back to Delhi, arriving around 7 pm." }
    ],
    includes: ["Private AC car and driver for both days", "Licensed Jaipur guide", "1 night hotel with breakfast and taxes", "Monument tickets",
               "Bottled water, tolls, parking and driver allowance"],
    excludes: ["Lunch and dinner", "Elephant ride at Amber", "Camera fees", "Tips"],
    faqs: [["How long is the drive?", "Four to five hours each way, depending on Delhi traffic."],
           ["Can we start from the airport?", "Yes. Many guests do this straight off an overnight flight."],
           ["Can we add Nahargarh at sunset?", "Yes, on the first evening if the city tour finishes in time."]],
    gallery: ["hawaMahal", "amber", "jalMahal"]
  },
  /* ---- Added: Kerala and South India ---- */
  {
    slug: "5-days-kerala-tour",
    title: "5 days Kerala tour",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Munnar · Thekkady · Alleppey", days: 5, nights: 4, durationLabel: "5 days", price: 54500,
    img: IMG.kerala,
    summary: "Kerala's four classic stops in five days — the port at Kochi, the tea hills, the Periyar forest and a night on the backwaters.",
    facts: [["Duration", "5 days, 4 nights"], ["Destinations", "Kochi · Munnar · Thekkady · Alleppey"], ["Transport", "Private AC car"],
            ["Accommodation", "3 nights hotel, 1 night houseboat"], ["Tour type", "Private"], ["Starts", "Kochi airport"], ["Ends", "Kochi airport"]],
    highlights: ["Fort Kochi, the Chinese fishing nets and Mattancherry", "Tea Museum and Eravikulam National Park in Munnar",
                 "A Kalaripayattu martial arts show in Thekkady", "Boat safari on Periyar Lake and a spice garden walk",
                 "A night on a private houseboat with meals on board"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Kochi",
        text: "Airport pickup and check-in. Afternoon in Fort Kochi — the fishing nets, the old churches, Mattancherry Palace and the Jewish Synagogue — and an evening by the water." },
      { time: "Day 2", title: "Up to Munnar",
        text: "A drive into the hills past waterfalls and spice gardens, arriving in Munnar for the evening." },
      { time: "Day 3", title: "Munnar, then on to Thekkady",
        text: "Eravikulam National Park for the Nilgiri tahr, the Tea Museum, Mattupetty Dam and Echo Point, then down to Thekkady for a Kalaripayattu show." },
      { time: "Day 4", title: "Periyar Lake and the houseboat",
        text: "A morning boat on Periyar Lake, where elephants come down to drink, and a spice plantation walk. Then to Alleppey to board your houseboat for the night." },
      { time: "Day 5", title: "Back to Kochi",
        text: "Breakfast on board, then the drive to Kochi airport, with a market stop if your flight allows." }
    ],
    includes: ["Private AC car and driver throughout", "3 nights hotel with breakfast", "1 night private houseboat with all meals",
               "Guided sightseeing", "Periyar boat safari", "Spice plantation visit", "Kalaripayattu show", "Tolls, parking and taxes"],
    excludes: ["Flights to and from Kochi", "Lunch and dinner on land", "Eravikulam and museum tickets", "Tips"],
    faqs: [["Is five days enough for Kerala?", "For the four main stops, yes. Add a day if you want a slower Munnar."],
           ["When is the best time to go?", "October to March. Eravikulam closes for the tahr calving season around February and March."],
           ["Is the houseboat private?", "Yes, one boat for your group with its own crew and cook."]],
    gallery: ["kochiNets", "munnarTea", "kerala"]
  },
  {
    slug: "6-days-kerala-tour",
    title: "6 days Kerala tour with two nights in Munnar",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Munnar · Thekkady · Alleppey", days: 6, nights: 5, durationLabel: "6 days", price: 64500,
    img: IMG.munnarTea,
    summary: "The five-day Kerala route with a full day added in the tea hills, so Munnar is a stay rather than a stop.",
    facts: [["Duration", "6 days, 5 nights"], ["Destinations", "Kochi · Munnar · Thekkady · Alleppey"], ["Transport", "Private AC car"],
            ["Accommodation", "4 nights hotel, 1 night houseboat"], ["Tour type", "Private"], ["Starts", "Kochi airport"], ["Ends", "Kochi airport"]],
    highlights: ["Two nights in Munnar's tea country", "Eravikulam National Park and a short boat on Kundala Lake",
                 "Periyar Lake boat safari and a spice plantation", "Kalaripayattu martial arts show",
                 "A private houseboat night on the Alleppey backwaters"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Kochi",
        text: "Airport pickup and check-in. If you land early, Fort Kochi, Mattancherry Palace and the Jewish Synagogue, then a walk along the waterfront." },
      { time: "Day 2", title: "Kochi to Munnar",
        text: "Up into the hills through spice plantations and small towns, with stops at the waterfalls on the way." },
      { time: "Day 3", title: "A full day in Munnar",
        text: "The Tea Museum, Mattupetty Dam, Echo Point, Eravikulam National Park for the Nilgiri tahr, and a short boat ride on Kundala Lake." },
      { time: "Day 4", title: "Munnar to Thekkady",
        text: "Through tea country into the forest around Periyar. Kalaripayattu show in the evening." },
      { time: "Day 5", title: "Periyar Lake and onto the houseboat",
        text: "Morning boat safari on Periyar Lake and a spice plantation walk — cardamom, pepper, cinnamon — then to Alleppey to board your houseboat." },
      { time: "Day 6", title: "Back to Kochi airport",
        text: "Breakfast on board and the drive to Kochi airport." }
    ],
    includes: ["Private AC car and driver throughout", "4 nights hotel with breakfast", "1 night private houseboat with all meals",
               "Guided sightseeing", "Periyar boat safari", "Spice plantation visit", "Kalaripayattu show", "Tolls, parking and taxes"],
    excludes: ["Flights to and from Kochi", "Lunch and dinner on land", "Park and museum tickets", "Tips"],
    faqs: [["How is this different from the 5-day tour?", "The same route with one more night in Munnar, so the hill day is not squeezed into a travel day."],
           ["Can we add a beach at the end?", "Yes. Two nights at Kovalam or Marari fit after the houseboat."]],
    gallery: ["munnarTea", "wildElephant", "kerala"]
  },
  {
    slug: "6-days-south-india-wildlife-safari-from-bangalore",
    title: "6 days South India wildlife safari from Bangalore",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Bangalore · Mysore · Nagarhole · Bandipur · Ooty", days: 6, nights: 5, durationLabel: "6 days", price: 72500,
    img: IMG.wildElephant,
    summary: "Two of India's best elephant and tiger forests, Mysore's palaces on the way in and the Nilgiri hills at the end.",
    facts: [["Duration", "6 days, 5 nights"], ["Destinations", "Mysore · Nagarhole · Bandipur · Ooty"], ["Transport", "Private AC car plus safari vehicles"],
            ["Accommodation", "5 nights: Mysore 2, Bandipur 1, Ooty 2"], ["Tour type", "Private"], ["Starts", "Bangalore"], ["Ends", "Coimbatore"]],
    highlights: ["Srirangapatna, St. Philomena's Church and Brindavan Gardens", "A safari in Nagarhole National Park",
                 "A guided morning walk on the edge of Bandipur forest", "Mudumalai sanctuary on the drive up to Ooty",
                 "Ooty Lake, the Botanical Garden and Dodabetta Peak"],
    itinerary: [
      { time: "Day 1", title: "Bangalore to Mysore",
        text: "Pickup in Bangalore and about four hours to Mysore, stopping at Srirangapatna. St. Philomena's Church and Brindavan Gardens in the evening." },
      { time: "Day 2", title: "Safari in Nagarhole",
        text: "Three hours to Nagarhole for a safari by jeep or canter — elephants, gaur and spotted deer are common, tigers and leopards possible. Back to Mysore for the night." },
      { time: "Day 3", title: "Mysore to Bandipur",
        text: "A short drive to a lodge at the edge of Bandipur forest. Afternoon safari." },
      { time: "Day 4", title: "Bandipur to Ooty",
        text: "A guided morning walk at the forest edge, then up through Mudumalai sanctuary and the hairpin bends to Ooty." },
      { time: "Day 5", title: "A day in Ooty",
        text: "The Government Botanical Garden, the Rose Garden, Ooty Lake, the Deer Park and the view from Dodabetta Peak." },
      { time: "Day 6", title: "Down to Coimbatore",
        text: "About three hours down to Coimbatore for your onward flight or train." }
    ],
    includes: ["Private AC car and driver throughout", "5 nights hotel and lodge with breakfast", "Two safaris by jeep or canter",
               "Guided forest walk at Bandipur", "Licensed guide", "Tolls, parking and taxes"],
    excludes: ["Flights or trains to Bangalore and from Coimbatore", "Lunch and dinner", "Extra safaris", "Camera fees in the parks", "Tips"],
    faqs: [["Will we see a tiger?", "Possibly. Nagarhole and Bandipur have good numbers, but sightings are never guaranteed. Elephants are almost certain."],
           ["When should we go?", "October to May. The parks are greenest after the monsoon and the animals easiest to see in the dry months."],
           ["Is it suitable for children and older travellers?", "Yes. The drives are short and the safaris are seated."]],
    gallery: ["ranthambore", "mysorePalace", "wildElephant"]
  },
  {
    slug: "9-days-best-of-kerala-tour",
    title: "9 days best of Kerala with backwaters and beach",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Munnar · Thekkady · Kumarakom · Alleppey · Kovalam", days: 9, nights: 8, durationLabel: "9 days", price: 96500,
    img: IMG.kerala,
    summary: "All of Kerala top to bottom: the port, the hills, the forest, the lake, the houseboat and two easy nights on the beach at Kovalam.",
    facts: [["Duration", "9 days, 8 nights"], ["Destinations", "Kochi · Munnar · Thekkady · Kumarakom · Alleppey · Kovalam"],
            ["Transport", "Private AC car"], ["Accommodation", "7 nights hotel, 1 night houseboat"],
            ["Tour type", "Private"], ["Starts", "Kochi"], ["Ends", "Trivandrum airport"]],
    highlights: ["A Kathakali performance in Kochi", "Two nights in Munnar with Eravikulam and the tea estates",
                 "Periyar Lake boat ride and a spice garden", "Kumarakom bird sanctuary on Vembanad Lake",
                 "A houseboat night, then two nights at Kovalam beach"],
    itinerary: [
      { time: "Day 1", title: "Kochi",
        text: "Arrive and check in. Fort Kochi, Mattancherry Palace and the old synagogue, and a Kathakali performance in the evening." },
      { time: "Day 2", title: "Kochi to Munnar",
        text: "About four hours into the hills, through tea gardens for the last stretch." },
      { time: "Day 3", title: "Munnar",
        text: "Tea plantations and the Tea Museum, Eravikulam National Park for the Nilgiri tahr, and Mattupetty Dam." },
      { time: "Day 4", title: "Munnar to Thekkady",
        text: "Three hours to Thekkady. A spice plantation walk, a boat on Periyar Lake, and a Kalaripayattu show in the evening." },
      { time: "Day 5", title: "Thekkady to Kumarakom",
        text: "Down to Kumarakom on Vembanad Lake. The bird sanctuary in the late afternoon." },
      { time: "Day 6", title: "Onto the houseboat at Alleppey",
        text: "An hour to Alleppey and onto your private houseboat for a day and night on the backwaters, meals cooked on board." },
      { time: "Day 7", title: "Alleppey to Kovalam",
        text: "Breakfast on board, then south along the coast to Kovalam." },
      { time: "Day 8", title: "A free day at the beach",
        text: "Nothing planned. The beach, an Ayurveda massage at the hotel, or the local market — your choice." },
      { time: "Day 9", title: "Departure from Trivandrum",
        text: "Half an hour to Trivandrum airport. With a later flight, the Padmanabhaswamy temple area and the Napier Museum fit in first." }
    ],
    includes: ["Private AC car and driver throughout", "7 nights hotel with breakfast", "1 night private houseboat with all meals",
               "English-speaking guide for sightseeing", "Kathakali and Kalaripayattu shows", "Periyar boat ride", "Tolls, parking and taxes"],
    excludes: ["Flights", "Lunch and dinner on land", "Ayurveda treatments", "Park and museum tickets", "Tips"],
    faqs: [["Is it relaxed or busy?", "Relaxed. The longest drive is about five hours and the last two days are at the beach."],
           ["Can we spend longer in Munnar or Kovalam?", "Yes, nights can be added anywhere on the route."],
           ["What is the best time for wildlife in Periyar?", "The first boat of the morning, when animals come to the water."]],
    gallery: ["kochiNets", "munnarTea", "wildElephant"]
  },
  {
    slug: "10-days-luxury-kerala-heritage-hotels",
    title: "10 days luxury Kerala tour in heritage hotels",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Munnar · Thekkady · Kumarakom · Marari", days: 10, nights: 9, durationLabel: "10 days", price: 215000,
    img: IMG.kochiNets,
    summary: "Kerala at an unhurried pace in restored heritage properties — two nights at every stop, a lake resort, and a beach to finish.",
    facts: [["Duration", "10 days, 9 nights"], ["Destinations", "Kochi · Munnar · Thekkady · Kumarakom · Marari"], ["Transport", "Private AC car"],
            ["Accommodation", "9 nights in heritage and boutique hotels"], ["Tour type", "Private, luxury"], ["Starts", "Kochi"], ["Ends", "Kochi airport"],
            ["Hotels", "Brunton Boatyard, Lockhart Bungalow, Spice Village, Coconut Lagoon, Marari Beach class — confirmed at booking"]],
    highlights: ["Heritage hotels chosen for character, not size", "Kathakali in Kochi and a Fort Kochi cooking lunch",
                 "A tea estate walk and Eravikulam in Munnar", "Periyar Lake and a guided spice garden in Thekkady",
                 "A sunset backwater cruise at Kumarakom and two beach days at Marari"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Kochi",
        text: "Meet at the airport and transfer to a heritage hotel in Fort Kochi. Kathakali performance in the evening." },
      { time: "Day 2", title: "Kochi city, then up to Munnar",
        text: "The Dutch Palace, Santa Cruz Basilica, the synagogue and the fishing nets in the morning, then four hours up to a planter's bungalow in Munnar." },
      { time: "Day 3", title: "Munnar",
        text: "Eravikulam National Park beneath Anamudi peak, Mattupetty Dam, Echo Point, Kundala Lake and a walk through a working tea estate." },
      { time: "Day 4", title: "Munnar to Thekkady",
        text: "Three hours to Thekkady. A stop at an elephant camp on the way and a Kalaripayattu show in the evening." },
      { time: "Day 5", title: "Periyar and the spice gardens",
        text: "A boat on Periyar Lake inside the sanctuary and a guided walk through a spice plantation." },
      { time: "Day 6", title: "Thekkady to Kumarakom",
        text: "Down to a lakeside resort on Vembanad Lake. An optional village walk in the afternoon." },
      { time: "Day 7", title: "Kumarakom",
        text: "The bird sanctuary in the early morning and a sunset cruise on the backwaters." },
      { time: "Day 8", title: "Kumarakom to Marari",
        text: "An hour to a beach resort at Marari. Sunset on the sand." },
      { time: "Day 9", title: "A free day at Marari",
        text: "Beach, yoga, or Ayurveda at the resort — nothing scheduled." },
      { time: "Day 10", title: "Cooking lunch and departure",
        text: "Back to Fort Kochi for a home-style cooking demonstration and lunch, then the airport." }
    ],
    includes: ["Private AC car and driver throughout", "9 nights in heritage and boutique hotels with breakfast", "Guided sightseeing",
               "Kathakali and Kalaripayattu shows", "Periyar boat ride and spice garden tour", "Kumarakom sunset cruise",
               "Fort Kochi cooking demonstration with lunch", "Airport transfers, tolls and taxes"],
    excludes: ["International and domestic flights", "Ayurveda treatments and water sports", "Lunch and dinner except where stated", "Tips"],
    faqs: [["Are these exact hotels guaranteed?", "We book the named properties where available and tell you before you pay if any one needs to change."],
           ["Is it good for a honeymoon?", "It is the route most couples choose — hills, forest, lake and beach, with no early starts after day 3."],
           ["Do you include elephant rides?", "No. We visit an elephant camp but do not book rides."]],
    gallery: ["kerala", "munnarTea", "wildElephant"]
  },
  {
    slug: "13-days-south-india-temple-tour",
    title: "13 days South India temple tour",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Chennai · Tirupati · Madurai · Rameswaram · Kanyakumari · Trivandrum", days: 13, nights: 12, durationLabel: "13 days", price: 142000,
    img: IMG.maduraiTemple,
    summary: "The great temples of the south in order — Tirupati, Kanchipuram, Chidambaram, Thanjavur, Srirangam, Madurai, Rameswaram — down to the tip of India.",
    facts: [["Duration", "13 days, 12 nights"], ["Destinations", "Chennai · Tirupati · Kanchipuram · Mahabalipuram · Pondicherry · Kumbakonam · Trichy · Madurai · Rameswaram · Kanyakumari · Kovalam"],
            ["Transport", "Private AC car"], ["Accommodation", "12 nights hotel"], ["Tour type", "Private"], ["Starts", "Chennai"], ["Ends", "Trivandrum airport"]],
    highlights: ["Darshan at Tirumala (Tirupati Balaji), with help arranging tickets", "Brihadeeswara and Airavatesvara, two of the Great Living Chola Temples",
                 "The night ceremony at Meenakshi Amman Temple", "Ramanathaswamy Temple and the ruins of Dhanushkodi",
                 "Sunset at Kanyakumari and the Vivekananda Rock Memorial", "Padmanabhaswamy Temple in Trivandrum"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Chennai",
        text: "Airport pickup and check-in. An evening walk in the T Nagar market." },
      { time: "Day 2", title: "Chennai temples, then to Tirupati",
        text: "Fort St. George, Kapaleeshwarar and Parthasarathy temples, then about three and a half hours to Tirupati." },
      { time: "Day 3", title: "Tirumala and back to Chennai",
        text: "Darshan at the Venkateswara temple on Tirumala hill, Kapila Theertham and the Padmavati temple, then back to Chennai for sunset on Marina Beach." },
      { time: "Day 4", title: "Kanchipuram and Mahabalipuram",
        text: "The Ekambaranathar, Kamakshi Amman and Varadharaja Perumal temples at Kanchipuram, then the shore temples and rock carvings of Mahabalipuram." },
      { time: "Day 5", title: "Down the coast to Pondicherry",
        text: "Two hours along the East Coast Road. Sri Aurobindo Ashram, Auroville, the French Quarter and the promenade." },
      { time: "Day 6", title: "Chidambaram and Kumbakonam",
        text: "The Nataraja temple at Chidambaram, then Kumbakonam and the Oppiliappan temple." },
      { time: "Day 7", title: "Darasuram, Thanjavur and on to Trichy",
        text: "Adi Kumbeswarar, the Airavatesvara temple at Darasuram, the Brihadeeswara temple and the Maratha palace at Thanjavur, then Trichy for the night." },
      { time: "Day 8", title: "Srirangam, Rock Fort and Madurai",
        text: "Sri Ranganathaswamy at Srirangam, the Rock Fort temple and Jambukeswarar, then four hours to Madurai." },
      { time: "Day 9", title: "Madurai",
        text: "Meenakshi Amman Temple, the Thirumalai Nayak palace and the Gandhi Memorial Museum. An auto-rickshaw back to the temple at night for the closing ceremony." },
      { time: "Day 10", title: "Rameswaram and Dhanushkodi",
        text: "Over the Pamban bridge to Rameswaram for the Ramanathaswamy temple and Agni Theertham, then out to Dhanushkodi at the end of the land." },
      { time: "Day 11", title: "Tiruchendur and Kanyakumari",
        text: "A long day's drive with a stop at the Murugan temple in Tiruchendur, arriving at Kanyakumari for sunset." },
      { time: "Day 12", title: "Kanyakumari to Kovalam",
        text: "Kumari Amman temple, the meeting of three seas, the ferry to Vivekananda Rock and the Thiruvalluvar statue, then two hours to Kovalam for sunset on the beach." },
      { time: "Day 13", title: "Trivandrum and departure",
        text: "Padmanabhaswamy temple (Hindus only inside), the Napier Museum and the Sri Chitra Art Gallery, then the airport." }
    ],
    includes: ["Private AC car and driver throughout", "12 nights hotel with breakfast", "English-speaking guide at each temple town",
               "Help with darshan tickets at Tirupati and other major temples", "Vivekananda Rock ferry", "Night auto-rickshaw in Madurai", "Tolls, parking and taxes"],
    excludes: ["Flights to Chennai and from Trivandrum", "Lunch and dinner", "Special darshan and temple fees", "Camera fees", "Tips"],
    faqs: [["Can non-Hindus enter the temples?", "Most, yes. A few inner sanctums, including Padmanabhaswamy, are restricted to Hindus. Your guide will tell you before each visit."],
           ["How much walking is there?", "A lot, and barefoot inside temple grounds. Shoes you can slip off quickly make the day easier."],
           ["Is VIP darshan possible at Tirupati?", "Special-entry tickets are released online in limited numbers. We try for them as soon as you book, but cannot promise them."],
           ["Can we add the backwaters?", "Yes, an Alleppey houseboat night fits between Kanyakumari and Trivandrum."]],
    gallery: ["maduraiTemple", "kerala", "craftsShop"]
  },
  {
    slug: "14-days-kerala-karnataka-wildlife-tour",
    title: "14 days Kerala and Karnataka wildlife tour",
    cat: "south-india", catLabel: "South India tour packages",
    route: "Kochi · Periyar · Munnar · Ooty · Nagarhole · Coorg · Bandipur", days: 14, nights: 13, durationLabel: "14 days", price: 158000,
    img: IMG.wildElephant,
    summary: "A two-week loop through the forests of the Western Ghats — Periyar, Eravikulam, Nagarhole and Bandipur — with tea hills and Coorg in between.",
    facts: [["Duration", "14 days, 13 nights"], ["Destinations", "Kochi · Periyar · Munnar · Ooty · Nagarhole · Madikeri · Mysore · Bandipur"],
            ["Transport", "Private AC car plus safari jeeps"], ["Accommodation", "13 nights hotel and jungle lodge"],
            ["Tour type", "Private"], ["Starts", "Kochi"], ["Ends", "Kochi"]],
    highlights: ["Boat safari on Periyar Lake", "Eravikulam National Park and the Nilgiri tahr",
                 "Jeep safaris in Nagarhole and Bandipur", "Coorg's coffee hills, Abbey Falls and Raja's Seat",
                 "Mysore Palace and Chamundi Hill on the way"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Kochi", text: "Airport pickup and check-in." },
      { time: "Day 2", title: "Kochi, then to Periyar",
        text: "The synagogue, Dutch Palace, St. Francis Church and the fishing nets in the morning, then four hours to Periyar." },
      { time: "Day 3", title: "Periyar Wildlife Sanctuary",
        text: "A boat on Periyar Lake in the early morning and a guided nature walk." },
      { time: "Day 4", title: "Periyar to Munnar",
        text: "Three hours into the tea hills. The Tea Museum and a working tea factory." },
      { time: "Day 5", title: "Eravikulam National Park",
        text: "A morning in Eravikulam for the Nilgiri tahr and the high grasslands, the afternoon free." },
      { time: "Day 6", title: "Munnar to Ooty",
        text: "A long, scenic drive across the hills into the Nilgiris. Ooty Lake in the evening." },
      { time: "Day 7", title: "Ooty to Nagarhole",
        text: "Through Mudumalai to a jungle lodge at the edge of Nagarhole." },
      { time: "Day 8", title: "Nagarhole National Park",
        text: "A morning jeep safari, birdwatching from the lodge and a guided nature walk." },
      { time: "Day 9", title: "Nagarhole to Coorg",
        text: "Three hours to Madikeri. Raja's Seat, the fort, Omkareshwara temple and Abbey Falls." },
      { time: "Day 10", title: "A free day in Coorg",
        text: "Coffee estates, viewpoints and markets at your own pace." },
      { time: "Day 11", title: "Coorg to Bandipur via Mysore",
        text: "Mysore Palace and Chamundeshwari temple on the way to Bandipur." },
      { time: "Day 12", title: "Bandipur National Park",
        text: "A jeep safari in Bandipur, with time for birdwatching and a walk around the lodge." },
      { time: "Day 13", title: "Back to Kochi",
        text: "The longest day — about nine hours back to Kochi. An early start and a comfortable car." },
      { time: "Day 14", title: "Departure", text: "Transfer to Kochi airport." }
    ],
    includes: ["Private AC car and driver throughout", "13 nights hotel and jungle lodge with breakfast", "Periyar boat ride",
               "Jeep safaris in Nagarhole and Bandipur", "Forest entry permits", "English-speaking guide", "Tolls, parking and taxes"],
    excludes: ["Flights to and from Kochi", "Lunch and dinner except at jungle lodges", "Extra safaris", "Camera fees in the parks", "Tips"],
    faqs: [["Which animals are likely?", "Elephants, gaur, sambar, spotted deer and langurs on most days. Tigers and leopards are possible but never promised."],
           ["When is the best season?", "October to April. Eravikulam closes for a few weeks around February and March for the tahr calving season."],
           ["Can the last long drive be avoided?", "Yes — end in Bangalore instead of Kochi, which is three hours from Bandipur."]],
    gallery: ["ranthambore", "munnarTea", "mysorePalace"]
  },
  /* ---- Added: long Rajasthan journeys ---- */
  {
    slug: "14-days-rajasthan-tour-with-mumbai",
    title: "14 days Rajasthan tour with Mumbai",
    cat: "rajasthan", catLabel: "Rajasthan tour packages",
    route: "Delhi · Agra · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur · Mumbai", days: 14, nights: 13, durationLabel: "14 days", price: 178000,
    img: IMG.udaipurLake,
    summary: "The Golden Triangle, the whole desert circuit and the lakes of Udaipur — then a flight to Mumbai to finish by the Arabian Sea.",
    facts: [["Duration", "14 days, 13 nights"], ["Destinations", "Delhi · Agra · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur · Mumbai"],
            ["Transport", "Private AC car, one domestic flight"], ["Accommodation", "13 nights, including a desert camp evening"],
            ["Tour type", "Private"], ["Starts", "Delhi"], ["Ends", "Mumbai airport"]],
    highlights: ["Sunrise at the Taj Mahal", "Junagarh Fort and the camel breeding farm at Bikaner",
                 "Jaisalmer's fort and havelis, and sunset on the Sam dunes", "Mehrangarh, the Blue City and Ranakpur's Jain temple",
                 "A boat on Lake Pichola", "Mumbai's Gateway of India, Marine Drive and the CST station"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi", text: "Airport pickup and transfer to your hotel." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "Jama Masjid, a rickshaw through Chandni Chowk and the spice market, the Red Fort from outside, then Humayun's Tomb, India Gate, the Parliament area, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra",
        text: "Three hours to Agra. The Baby Taj in the afternoon and sunset at Mehtab Bagh across the river." },
      { time: "Day 4", title: "Taj Mahal at sunrise, then Jaipur",
        text: "The Taj Mahal at first light, Agra Fort after breakfast, then to Jaipur with a stop at Fatehpur Sikri." },
      { time: "Day 5", title: "Jaipur",
        text: "Amber Fort, Jal Mahal, Hawa Mahal, the City Palace, Jantar Mantar and the Galta Ji monkey temple." },
      { time: "Day 6", title: "Jaipur to Bikaner", text: "Five hours west into the desert. Evening free." },
      { time: "Day 7", title: "Bikaner, then Jaisalmer",
        text: "Junagarh Fort, Lalgarh Palace, Karni Mata temple, Gajner Lake and the national camel research farm, then on to Jaisalmer." },
      { time: "Day 8", title: "Jaisalmer and the Sam dunes",
        text: "The living fort, Patwon Ki Haveli and Nathmal Ki Haveli, then out to Sam for a camel ride, sunset, folk music and dinner at a desert camp." },
      { time: "Day 9", title: "Jaisalmer to Jodhpur", text: "Four hours to Jodhpur. Evening at the Clock Tower market." },
      { time: "Day 10", title: "Jodhpur, Ranakpur and Udaipur",
        text: "Mehrangarh Fort, Jaswant Thada and a look at Umaid Bhawan, then south to Udaipur stopping at the Ranakpur Jain temple." },
      { time: "Day 11", title: "Udaipur",
        text: "City Palace, Jagdish temple, a boat on Lake Pichola past the Lake Palace and Jag Mandir, Fateh Sagar, Saheliyon Ki Bari and the evening show at Bagore Ki Haveli." },
      { time: "Day 12", title: "Fly to Mumbai", text: "Transfer to Udaipur airport for the flight to Mumbai. Check in and rest." },
      { time: "Day 13", title: "Mumbai",
        text: "Gateway of India, Colaba Causeway, the CST station, Marine Drive, Haji Ali Dargah and Siddhivinayak temple." },
      { time: "Day 14", title: "Departure", text: "Transfer to Mumbai airport." }
    ],
    includes: ["Private AC car and driver in Rajasthan, Delhi and Agra", "Car and guide in Mumbai", "13 nights hotel with breakfast and taxes",
               "Licensed guides in each city", "Rickshaw ride in Old Delhi", "Camel ride and desert camp evening at Sam", "Boat ride on Lake Pichola",
               "Udaipur to Mumbai flight", "Bottled water, tolls, parking and driver allowance"],
    excludes: ["International flights", "Monument entry tickets", "Lunch and dinner except at the desert camp", "Camera fees", "Tips"],
    faqs: [["Can the tour run in reverse, from Mumbai?", "Yes. It works the same way starting with Mumbai and flying to Udaipur."],
           ["Which hotel categories are available?", "3-star, 4-star, 5-star or heritage. The price changes with the choice; the route does not."],
           ["Is the desert camp a night stay?", "In this version the camp is an evening with dinner and you sleep in Jaisalmer. A night in the camp can be added."]],
    gallery: ["jaisalmerCity", "mehrangarh", "mumbai"]
  },
  {
    slug: "15-days-royal-rajasthan-wildlife-camel-safari",
    title: "15 days royal Rajasthan wildlife and camel safari tour",
    cat: "rajasthan", catLabel: "Rajasthan tour packages",
    route: "Delhi · Agra · Ranthambore · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur", days: 15, nights: 14, durationLabel: "15 days", price: 189000,
    img: IMG.jaisalmer,
    summary: "Tigers to the Thar Desert: two safaris in Ranthambore, a night under canvas in the dunes, and every great fort between Agra and Udaipur.",
    facts: [["Duration", "15 days, 14 nights"], ["Destinations", "Delhi · Agra · Ranthambore · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur"],
            ["Transport", "Private AC car, safari gypsy, one domestic flight"], ["Accommodation", "14 nights, including one desert camp"],
            ["Tour type", "Private"], ["Starts", "Delhi"], ["Ends", "Udaipur airport"]],
    highlights: ["Morning and afternoon tiger safaris in Ranthambore", "Sunrise at the Taj Mahal",
                 "A camel ride and a night at a desert camp near Khuri", "Junagarh, Jaisalmer and Mehrangarh forts",
                 "Ranakpur Jain temple and a boat on Lake Pichola"],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi", text: "Airport pickup and transfer to your hotel." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "Jama Masjid, a rickshaw through Chandni Chowk, the spice market and the Red Fort walls, then Humayun's Tomb, India Gate, Qutub Minar and the Lotus Temple." },
      { time: "Day 3", title: "To Agra", text: "Three hours to Agra. The Baby Taj and sunset at Mehtab Bagh." },
      { time: "Day 4", title: "Taj Mahal at sunrise, then Ranthambore",
        text: "The Taj Mahal at sunrise and Agra Fort, then via Fatehpur Sikri to Ranthambore — about six hours." },
      { time: "Day 5", title: "Two safaris in Ranthambore",
        text: "A morning and an afternoon game drive in the national park, with the hours between at the lodge." },
      { time: "Day 6", title: "Ranthambore to Jaipur",
        text: "Four hours to Jaipur. The City Palace, Jantar Mantar and a photo stop at Hawa Mahal." },
      { time: "Day 7", title: "Jaipur",
        text: "Amber Fort, Jal Mahal, the Galta Ji monkey temple and the Albert Hall Museum." },
      { time: "Day 8", title: "Jaipur to Bikaner", text: "Five hours into the desert. Evening free." },
      { time: "Day 9", title: "Bikaner, then Jaisalmer",
        text: "Junagarh Fort, Lalgarh and Lakshmi Niwas palaces, Karni Mata temple and Gajner Lake, then on to Jaisalmer." },
      { time: "Day 10", title: "Jaisalmer and a night in the dunes",
        text: "Jaisalmer Fort, Salim Singh Ki Haveli and Patwon Ki Haveli, then out to Khuri for a camel ride, sunset, folk dance, dinner and a night at the camp." },
      { time: "Day 11", title: "To Jodhpur", text: "Five hours to Jodhpur. Evening at the Clock Tower market." },
      { time: "Day 12", title: "Jodhpur",
        text: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan, the Sardar Government Museum and Mandore Gardens." },
      { time: "Day 13", title: "Ranakpur and Udaipur", text: "South through the Aravallis, stopping at the Ranakpur Jain temple, to Udaipur." },
      { time: "Day 14", title: "Udaipur",
        text: "Jagdish temple, the City Palace, a boat on Lake Pichola, Fateh Sagar, Saheliyon Ki Bari and Bagore Ki Haveli." },
      { time: "Day 15", title: "Fly out of Udaipur", text: "Transfer to Udaipur airport for your flight to Delhi or onward." }
    ],
    includes: ["Private AC car and driver throughout", "14 nights hotel with breakfast and taxes, including one desert camp night with dinner",
               "Licensed guides in each city", "Two Ranthambore safaris in a shared gypsy", "Rickshaw ride in Old Delhi",
               "Camel ride at Khuri", "Boat ride on Lake Pichola", "Udaipur to Delhi flight", "Bottled water, tolls, parking and driver allowance"],
    excludes: ["International flights", "Monument and park entry tickets beyond the safaris", "Lunch and dinner except at the camp", "Camera fees", "Tips"],
    faqs: [["Can we have a private safari vehicle?", "Yes, a private gypsy can be booked for an extra charge, subject to the park's daily quota."],
           ["When does Ranthambore close?", "The core zones close from July to September for the monsoon. Book October to June."],
           ["Is it too much for 15 days?", "It is full but not rushed — the longest drives are six hours and every big city gets two nights."]],
    gallery: ["ranthambore", "jaisalmerCity", "udaipurLake"]
  }
  ,
  {
    slug: "8-days-north-india-wildlife-tour",
    title: "8 days North India wildlife tour",
    cat: "wildlife", catLabel: "Wildlife tour packages",
    route: "Delhi · Jaipur · Ranthambore · Bharatpur · Agra",
    days: 8, nights: 7, durationLabel: "8 days",
    price: 104000,
    img: IMG.tigerPortrait,
    summary: "Tigers in Ranthambore, migratory birds at Bharatpur and the Taj Mahal at the end — North India's best wildlife and its best-known sights in one private week.",
    facts: [["Duration", "8 days, 7 nights"], ["Start / end", "Delhi / Delhi"], ["Parks", "Ranthambore, Keoladeo (Bharatpur)"],
            ["Safaris", "Two jeep safaris in Ranthambore"], ["Transport", "Private AC car throughout"], ["Tour type", "Private"],
            ["Best season", "October to April"]],
    highlights: [
      "Morning and afternoon jungle safaris in Ranthambore, home of the Bengal tiger",
      "Keoladeo bird sanctuary at Bharatpur with a naturalist — over 350 species in winter",
      "Amber Fort, City Palace and Hawa Mahal in Jaipur",
      "Fatehpur Sikri, the Taj Mahal and Agra Fort",
      "Mathura and Vrindavan on the way back to Delhi"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi, city sightseeing",
        text: "Airport pickup and hotel check-in. Guided sightseeing of Raj Ghat, India Gate, the President's House, Humayun's Tomb, the Lotus Temple, Qutub Minar and Chhatarpur Temple." },
      { time: "Day 2", title: "Delhi to Jaipur",
        text: "About five hours to Jaipur. Check in, then an evening at Chokhi Dhani for Rajasthani folk music, dance and a village-style dinner." },
      { time: "Day 3", title: "Jaipur sightseeing",
        text: "Amber Fort on the hill, then the City Palace, Jantar Mantar, Birla Temple and a photo stop at Hawa Mahal." },
      { time: "Day 4", title: "Jaipur to Ranthambore",
        text: "About three and a half hours to Sawai Madhopur. Check in at a jungle resort beside the park and spend a quiet evening there." },
      { time: "Day 5", title: "Ranthambore safari day",
        text: "A morning and an afternoon jeep safari into the national park — Bengal tigers, leopards, sloth bears, sambar and a ruined thousand-year-old fort above the lakes." },
      { time: "Day 6", title: "Ranthambore to Bharatpur",
        text: "About four and a half hours to Bharatpur. In the afternoon, explore Keoladeo bird sanctuary with a naturalist by cycle-rickshaw — painted storks, sarus cranes and winter migrants." },
      { time: "Day 7", title: "Bharatpur to Agra via Fatehpur Sikri",
        text: "Early birding if you want it, then the deserted Mughal capital of Fatehpur Sikri on the way to Agra. Evening free." },
      { time: "Day 8", title: "Taj Mahal, Mathura, Vrindavan and Delhi",
        text: "The Taj Mahal and Agra Fort, a stop at Akbar's tomb at Sikandra, then Mathura and Vrindavan before the drive to Delhi and drop-off at your hotel or the airport." }
    ],
    includes: ["7 nights hotel with daily breakfast", "Private AC car and driver from Delhi and back",
               "Licensed English-speaking guides for sightseeing", "Two jeep safaris in Ranthambore with park permits",
               "Naturalist and rickshaw at Bharatpur", "Tolls, parking, fuel, driver allowance and taxes"],
    excludes: ["Flights", "Monument entry tickets", "Lunch and dinner", "Camera fees in the parks", "Tips and personal expenses"],
    faqs: [["Is a tiger sighting guaranteed?", "No one can promise it, but Ranthambore is one of the best parks in India for tigers, and two safaris give you real chances."],
           ["When is Bharatpur best?", "November to February, when the migratory birds are in. The resident birds are there year-round."],
           ["Can we add more safaris?", "Yes. An extra night in Ranthambore adds two more drives — tell us when you enquire."],
           ["Is it suitable for children?", "Yes. The safaris are three hours each and the drives between parks are four to five hours at most."]],
    gallery: ["ranthambore", "jungleSafari", "taj"]
  },
  {
    slug: "11-days-central-india-wildlife-tour",
    title: "11 days Central India wildlife tour",
    cat: "wildlife", catLabel: "Wildlife tour packages",
    route: "Delhi · Pench · Kanha · Bandhavgarh · Khajuraho · Agra",
    days: 11, nights: 10, durationLabel: "11 days",
    price: 168000,
    img: IMG.tigerGrass,
    summary: "Three of India's great tiger reserves — Pench, Kanha and Bandhavgarh — back to back, then the temples of Khajuraho and the Taj Mahal at sunrise.",
    facts: [["Duration", "11 days, 10 nights"], ["Start / end", "Delhi / Delhi"], ["Parks", "Pench, Kanha, Bandhavgarh"],
            ["Safaris", "Up to nine jeep safaris"], ["Transport", "Private AC car, flight to Nagpur, train to Agra"], ["Tour type", "Private"],
            ["Best season", "October to June; best tiger sightings March to May"]],
    highlights: [
      "Pench, Kanha and Bandhavgarh — the country that inspired The Jungle Book",
      "Bandhavgarh, with one of the highest densities of tigers in India",
      "Barasingha, the rare hard-ground swamp deer, in Kanha's meadows",
      "Leopards, sloth bears, wild dogs, gaur and over 250 bird species",
      "Khajuraho's UNESCO-listed temples and the Taj Mahal at sunrise"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Our representative meets you at the airport and drives you to your hotel. The rest of the day is yours." },
      { time: "Day 2", title: "Old and New Delhi",
        text: "A full day with your guide: Raj Ghat, Jama Masjid and the Red Fort in the old city, then Humayun's Tomb, Qutub Minar, India Gate and the government buildings of Lutyens' Delhi." },
      { time: "Day 3", title: "Fly to Nagpur, first safari in Pench",
        text: "Morning flight to Nagpur and about two hours by road to Pench Tiger Reserve. Check in and head out on your first evening jeep safari." },
      { time: "Day 4", title: "Pench safaris",
        text: "Morning and evening jeep safaris along the teak forests of the Pench river — tigers, leopards, wild dogs and rich birdlife." },
      { time: "Day 5", title: "Pench to Kanha",
        text: "A last morning safari in Pench, then about five hours to Kanha National Park. Evening at the lodge." },
      { time: "Day 6", title: "Kanha safaris",
        text: "Morning and evening safaris through Kanha's sal forests and open meadows, where the barasingha herds graze and tigers hunt." },
      { time: "Day 7", title: "Kanha to Bandhavgarh",
        text: "A final morning drive in Kanha, then about five hours to Bandhavgarh Tiger Reserve." },
      { time: "Day 8", title: "Bandhavgarh safaris",
        text: "Morning and evening jeep safaris in Bandhavgarh, below the old hill fort — the park best known for tiger sightings in Central India." },
      { time: "Day 9", title: "Bandhavgarh to Khajuraho",
        text: "About five hours to Khajuraho. The afternoon is free to rest after the early safari starts." },
      { time: "Day 10", title: "Khajuraho temples, train to Agra",
        text: "A guided morning at the Western and Eastern group of temples, famous for their carving. Drive to Jhansi and take the afternoon train to Agra." },
      { time: "Day 11", title: "Taj Mahal at sunrise, back to Delhi",
        text: "The Taj Mahal at first light and Agra Fort with your guide, then the expressway back to Delhi for your onward flight." }
    ],
    includes: ["10 nights in hotels and jungle lodges with daily breakfast", "Private AC car and driver for all transfers and road journeys",
               "Up to nine jeep safaris with park permits and a naturalist", "Licensed English-speaking guides for sightseeing",
               "Jhansi to Agra train tickets", "Tolls, parking, fuel, driver allowance and taxes"],
    excludes: ["Delhi to Nagpur flight (we book it at cost)", "Monument entry tickets", "Lunch and dinner", "Camera fees in the parks", "Tips"],
    faqs: [["When are the parks closed?", "The core zones close for the monsoon, from July to mid-October. March to May gives the best tiger sightings as animals gather at water."],
           ["How many safaris are included?", "Up to nine — evening on arrival in Pench, then morning and evening drives in each park."],
           ["Is the flight included?", "We book the Delhi to Nagpur flight at cost so you can choose the timing. Everything on the ground is included."],
           ["Can we add Satpura or Panna?", "Yes. Both fit into this route with an extra two nights."]],
    gallery: ["jungleSafari", "khajuraho", "tajSunrise"]
  },
  {
    slug: "11-days-golden-triangle-with-jim-corbett",
    title: "11 days Golden Triangle with Jim Corbett tour",
    cat: "wildlife", catLabel: "Wildlife tour packages",
    route: "Delhi · Jaipur · Agra · Jim Corbett",
    days: 11, nights: 10, durationLabel: "11 days",
    price: 138000,
    img: IMG.corbettElephant,
    summary: "Delhi, Jaipur and Agra at an easy pace, then four days in the foothills of the Himalaya at Jim Corbett — India's oldest national park, with tigers, wild elephants and river forests.",
    facts: [["Duration", "11 days, 10 nights"], ["Start / end", "Delhi / Delhi"], ["Park", "Jim Corbett National Park"],
            ["Safaris", "Two jeep safaris and an elephant safari"], ["Transport", "Private AC car throughout"], ["Tour type", "Private"],
            ["Best season", "November to June"]],
    highlights: [
      "The full Golden Triangle — Delhi, Jaipur and Agra — with a guide in each city",
      "Jim Corbett, India's first national park, in the Himalayan foothills",
      "Jeep and elephant safaris for tigers, wild elephants, deer and crocodiles",
      "Over 600 species of birds along the Ramganga river",
      "The Taj Mahal at sunrise and Fatehpur Sikri on the way"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi",
        text: "Airport pickup and transfer to your hotel. The evening is free." },
      { time: "Day 2", title: "Delhi sightseeing",
        text: "Chandni Chowk, the Red Fort and Jama Masjid in Old Delhi, then Qutub Minar, the Lotus Temple and Akshardham." },
      { time: "Day 3", title: "Delhi to Jaipur",
        text: "About five hours to Jaipur. Check in and spend the evening at leisure." },
      { time: "Day 4", title: "Jaipur sightseeing",
        text: "Up to Amber Fort, then the City Palace, Jantar Mantar, Hawa Mahal and Birla Temple." },
      { time: "Day 5", title: "Jaipur to Agra via Fatehpur Sikri",
        text: "On the way to Agra, the abandoned Mughal city of Fatehpur Sikri — Salim Chishti's tomb and the Panch Mahal." },
      { time: "Day 6", title: "Taj Mahal and Agra",
        text: "The Taj Mahal at sunrise, Agra Fort and the Baby Taj with your guide." },
      { time: "Day 7", title: "Agra to Jim Corbett",
        text: "A long drive north to the foothills — about seven hours. Check in at your wildlife resort and rest." },
      { time: "Day 8", title: "Jeep safaris in Corbett",
        text: "Morning and afternoon jeep safaris through sal forest and grassland — tigers, elephants, spotted deer and the gharial in the Ramganga river." },
      { time: "Day 9", title: "Elephant safari and the outdoors",
        text: "An elephant safari, then a free afternoon for river walks, Corbett Falls or the Garjia temple on its rock in the Kosi river." },
      { time: "Day 10", title: "Corbett to Delhi",
        text: "A morning nature walk with a naturalist, then about six hours back to Delhi." },
      { time: "Day 11", title: "Departure",
        text: "Breakfast and transfer to the airport or station for your onward journey." }
    ],
    includes: ["10 nights in hotels and a wildlife resort with daily breakfast", "Private AC car and driver throughout",
               "Licensed English-speaking guides in Delhi, Jaipur and Agra", "Two jeep safaris and one elephant safari with permits",
               "Naturalist for the nature walk", "Tolls, parking, fuel, driver allowance and taxes"],
    excludes: ["Flights", "Monument entry tickets", "Lunch and dinner", "Camera fees in the park", "Adventure activities in Corbett", "Tips"],
    faqs: [["Which zone of Corbett will we visit?", "Bijrani or Jhirna for day safaris, or Dhikala if you want to stay inside the park — Dhikala permits open 45 days ahead and go fast."],
           ["When is Corbett open?", "Dhikala and Bijrani close for the monsoon, roughly mid-June to mid-October. Jhirna stays open year-round."],
           ["Is the drive from Agra too long?", "It is the longest leg of the tour, about seven hours. We can break it with a night in Delhi if you prefer."],
           ["Can we skip Jaipur?", "Yes. A shorter seven-day version keeps Delhi, Agra and Corbett."]],
    gallery: ["tigerForest", "amber", "taj"]
  },
  {
    slug: "16-days-india-wildlife-tour",
    title: "16 days India wildlife tour, Corbett to Kanha",
    cat: "wildlife", catLabel: "Wildlife tour packages",
    route: "Delhi · Corbett · Ranthambore · Bharatpur · Agra · Khajuraho · Bandhavgarh · Kanha · Mumbai",
    days: 16, nights: 15, durationLabel: "16 days",
    price: 228000,
    img: IMG.tigerForest,
    summary: "The great wildlife journey of North and Central India — five national parks from the Himalayan foothills to the sal forests of Kanha, with the Taj Mahal and Khajuraho between them.",
    facts: [["Duration", "16 days, 15 nights"], ["Start / end", "Delhi / Mumbai"], ["Parks", "Corbett, Ranthambore, Bharatpur, Bandhavgarh, Kanha"],
            ["Safaris", "Jeep safaris in every tiger reserve"], ["Transport", "Private AC car, AC train, flight to Mumbai"], ["Tour type", "Private"],
            ["Best season", "November to May"]],
    highlights: [
      "Five parks: Corbett, Ranthambore, Bharatpur, Bandhavgarh and Kanha",
      "Bengal tigers, leopards, wild elephants, sloth bears and wild dogs",
      "Birding at Keoladeo, a UNESCO World Heritage wetland",
      "The Taj Mahal, Agra Fort and Akbar's tomb at Sikandra",
      "Khajuraho's Chandela temples on the way into Central India"
    ],
    itinerary: [
      { time: "Day 1", title: "Arrive in Delhi, city tour",
        text: "Airport pickup and check-in, then Old and New Delhi: Qutub Minar, Humayun's Tomb, the Red Fort, India Gate, Raj Ghat, Jama Masjid and Chandni Chowk." },
      { time: "Day 2", title: "Delhi to Corbett",
        text: "About six hours north to Corbett National Park. Evening at the resort." },
      { time: "Day 3", title: "Corbett safaris",
        text: "Jeep safaris through the Himalayan foothill forests — tigers, elephants and the birds of the Ramganga." },
      { time: "Day 4", title: "Another day in Corbett",
        text: "More time in the park for tigers, leopards, wild dogs, sloth bears and porcupines." },
      { time: "Day 5", title: "Corbett to Delhi",
        text: "Back to Delhi by road. Evening free." },
      { time: "Day 6", title: "Train to Ranthambore",
        text: "AC train from Delhi to Sawai Madhopur and a short drive to your lodge beside Ranthambore Tiger Reserve." },
      { time: "Day 7", title: "Ranthambore safaris",
        text: "A full day of game drives in Ranthambore, among lakes, ruins and the old fort." },
      { time: "Day 8", title: "Ranthambore to Bharatpur",
        text: "About four and a half hours to Bharatpur and an afternoon of birdwatching with a naturalist in Keoladeo National Park." },
      { time: "Day 9", title: "Bharatpur to Agra",
        text: "Early birding, then on to Agra for the Taj Mahal, Agra Fort and Sikandra." },
      { time: "Day 10", title: "Agra to Khajuraho",
        text: "A long drive south into Bundelkhand to Khajuraho. Evening free." },
      { time: "Day 11", title: "Khajuraho temples, on to Bandhavgarh",
        text: "The Western and Eastern temple groups in the morning, then about five hours to Bandhavgarh National Park." },
      { time: "Day 12", title: "Bandhavgarh safaris",
        text: "A full day of jeep safaris in one of the best parks in India for tiger sightings." },
      { time: "Day 13", title: "Bandhavgarh to Kanha",
        text: "About five hours to Kanha, the 1,945 square kilometre tiger reserve of the Maikal hills." },
      { time: "Day 14", title: "Kanha safaris",
        text: "Morning and evening drives through sal forest and meadows — tigers, barasingha, gaur and wild dogs." },
      { time: "Day 15", title: "Kanha to Nagpur, fly to Mumbai",
        text: "Drive to Nagpur and an evening flight to Mumbai. Transfer to your hotel." },
      { time: "Day 16", title: "Depart from Mumbai",
        text: "A free morning, then transfer to Mumbai airport for your flight home or back to Delhi." }
    ],
    includes: ["15 nights in hotels and jungle lodges with daily breakfast", "Private AC car and driver for all road journeys",
               "Jeep safaris in Corbett, Ranthambore, Bandhavgarh and Kanha with permits", "Naturalist at Bharatpur",
               "Delhi to Sawai Madhopur AC train tickets", "Licensed guides in Delhi, Agra and Khajuraho",
               "Tolls, parking, fuel, driver allowance and taxes"],
    excludes: ["Nagpur to Mumbai flight (booked at cost)", "International flights", "Monument entry tickets",
               "Lunch and dinner", "Camera fees in the parks", "Tips"],
    faqs: [["Is sixteen days too long?", "It is a big trip, but the parks are spaced so there is never more than one long drive in a row, and each reserve gets at least one full day."],
           ["Can it end in Delhi instead of Mumbai?", "Yes. We change the last flight from Nagpur to Delhi."],
           ["When should we go?", "November to May. Central Indian parks close from July to mid-October, Corbett from mid-June."],
           ["Can we shorten it?", "Yes — the North India half (Corbett, Ranthambore, Bharatpur, Agra) or the Central India half both work on their own."]],
    gallery: ["leopard", "corbettElephant", "khajuraho"]
  }
  ,
  {
    slug: "old-delhi-heritage-tour-by-rickshaw",
    title: "Old Delhi heritage tour by rickshaw and car",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Red Fort · Jama Masjid · Chandni Chowk · Raj Ghat",
    days: 1, nights: 0, durationLabel: "5 hours",
    price: 3900,
    img: IMG.redFort,
    summary: "Shah Jahan's walled city up close — the Red Fort, Jama Masjid, a cycle-rickshaw through the lanes of Chandni Chowk and the spice market, with a private car waiting at each end.",
    facts: [["Duration", "About 5 hours"], ["Start", "Your hotel in Delhi, Noida or Gurgaon"], ["Transport", "Private AC car and cycle-rickshaw"],
            ["Tour type", "Private"], ["Guide", "Licensed, English speaking"], ["Best time", "8:30 am start, before the lanes fill"]],
    highlights: [
      "Cycle-rickshaw ride through Chandni Chowk, Delhi's oldest market",
      "Jama Masjid, India's largest mosque, built by Shah Jahan",
      "The Red Fort, a UNESCO World Heritage Site",
      "Khari Baoli spice market and the lanes of Kinari Bazaar",
      "Raj Ghat, the memorial to Mahatma Gandhi"
    ],
    itinerary: [
      { time: "8:30 AM", title: "Pickup from your hotel",
        text: "Your driver and guide collect you from your hotel in an air-conditioned car." },
      { time: "9:15 AM", title: "Red Fort",
        text: "A guided walk through the Lahori Gate, the Diwan-i-Am and the Diwan-i-Khas of the Mughal emperors' palace-fortress." },
      { time: "10:30 AM", title: "Rickshaw through Chandni Chowk",
        text: "Swap the car for a cycle-rickshaw: Chandni Chowk, Kinari Bazaar's wedding stalls and the spice sacks of Khari Baoli." },
      { time: "11:30 AM", title: "Jama Masjid",
        text: "The great Friday mosque of Shah Jahan, with views over the old city from its courtyard." },
      { time: "12:30 PM", title: "Raj Ghat, then back to your hotel",
        text: "A quiet stop at Gandhi's memorial on the Yamuna, then the drive back to your hotel." }
    ],
    includes: ["Private AC car and driver", "Licensed English-speaking guide", "Cycle-rickshaw ride in Old Delhi",
               "Bottled water", "Parking, fuel and taxes"],
    excludes: ["Monument entry tickets", "Food and drinks", "Camera fees", "Tips"],
    faqs: [["Is the Red Fort open every day?", "It is closed on Mondays. On Mondays we swap it for Humayun's Tomb."],
           ["Is the rickshaw ride safe?", "Yes. The rickshaw pullers work with us regularly and your guide rides alongside you."],
           ["What should we wear to Jama Masjid?", "Covered shoulders and knees. Robes are provided at the gate if needed, and shoes are left at the entrance."]],
    gallery: ["redFort", "humayun", "craftsShop"]
  },
  {
    slug: "new-delhi-sunrise-city-tour",
    title: "New Delhi sunrise city tour by car",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "India Gate · Humayun's Tomb · Qutub Minar · Lodhi Garden",
    days: 1, nights: 0, durationLabel: "6 hours",
    price: 4500,
    img: IMG.humayun,
    summary: "Delhi before the traffic: India Gate in the first light, a quiet walk in Lodhi Garden, and Humayun's Tomb and Qutub Minar as the gates open — back at your hotel by lunch.",
    facts: [["Duration", "About 6 hours"], ["Start", "5:30 am from your hotel"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Licensed, English speaking"], ["Return", "Around noon"]],
    highlights: [
      "India Gate and Rajpath at sunrise, almost empty",
      "Morning walk in Lodhi Garden among the 15th-century tombs",
      "Humayun's Tomb, the Mughal garden tomb that inspired the Taj Mahal",
      "Qutub Minar, the 73-metre victory tower",
      "Breakfast stop and back at your hotel by midday"
    ],
    itinerary: [
      { time: "5:30 AM", title: "Pickup from your hotel", text: "An early start to beat Delhi's traffic and heat." },
      { time: "6:00 AM", title: "India Gate and Kartavya Path",
        text: "Sunrise at India Gate, with a drive past Rashtrapati Bhavan and the government buildings of Lutyens' Delhi." },
      { time: "7:00 AM", title: "Lodhi Garden", text: "A walk among the tombs of the Sayyid and Lodi sultans, with Delhi's morning walkers." },
      { time: "8:00 AM", title: "Breakfast and Humayun's Tomb",
        text: "A breakfast stop, then Humayun's Tomb as it opens — red sandstone, white marble and the first great Mughal garden." },
      { time: "10:00 AM", title: "Qutub Minar", text: "The tower, the iron pillar and the ruins of Delhi's first mosque." },
      { time: "12:00 PM", title: "Back to your hotel", text: "Drop-off at your hotel or anywhere in Delhi NCR." }
    ],
    includes: ["Private AC car and driver", "Licensed English-speaking guide", "Bottled water", "Parking, fuel and taxes"],
    excludes: ["Monument entry tickets", "Breakfast", "Camera fees", "Tips"],
    faqs: [["Why start so early?", "Delhi's roads are empty at dawn, the light is best for photographs, and you are done before the midday heat."],
           ["Can we add Old Delhi?", "Yes. Add the Red Fort and a rickshaw through Chandni Chowk and the tour becomes a full day."]],
    gallery: ["indiaGate", "humayun", "qutub"]
  },
  {
    slug: "new-delhi-luxury-car-tour",
    title: "New Delhi luxury car city tour",
    cat: "delhi", catLabel: "New Delhi tour packages",
    route: "Old and New Delhi · Full day",
    days: 1, nights: 0, durationLabel: "8 hours",
    price: 12500,
    img: IMG.lotusTemple,
    summary: "A full day of Old and New Delhi in a chauffeur-driven luxury car, with a senior guide, lunch at a five-star hotel and a pace set entirely by you.",
    facts: [["Duration", "About 8 hours"], ["Car", "Mercedes E-Class, BMW 5 Series or similar"], ["Tour type", "Private"],
            ["Guide", "Senior licensed guide"], ["Lunch", "Five-star hotel restaurant"], ["Pickup", "Hotel or airport in Delhi NCR"]],
    highlights: [
      "Chauffeur-driven Mercedes, BMW or similar for the whole day",
      "Red Fort, Jama Masjid and Chandni Chowk in Old Delhi",
      "Humayun's Tomb, Qutub Minar, the Lotus Temple and India Gate",
      "Lunch at a five-star hotel",
      "Senior guide and a flexible, unhurried schedule"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Pickup in your luxury car", text: "Your chauffeur and senior guide meet you at your hotel." },
      { time: "9:30 AM", title: "Old Delhi", text: "The Red Fort, Jama Masjid and a short rickshaw through Chandni Chowk if you would like it." },
      { time: "12:00 PM", title: "Raj Ghat and India Gate", text: "Gandhi's memorial, then a drive down Kartavya Path past the President's House." },
      { time: "1:00 PM", title: "Lunch at a five-star hotel", text: "An unhurried lunch at one of New Delhi's leading hotels." },
      { time: "2:30 PM", title: "Humayun's Tomb and the Lotus Temple", text: "The Mughal garden tomb, then the Bahá'í Lotus Temple." },
      { time: "4:00 PM", title: "Qutub Minar and back", text: "The Qutub complex, then back to your hotel by about 5:30 pm." }
    ],
    includes: ["Luxury car with chauffeur for 8 hours", "Senior licensed guide", "Lunch at a five-star hotel",
               "Monument entry tickets", "Bottled water, parking and taxes"],
    excludes: ["Camera fees", "Shopping", "Tips"],
    faqs: [["Which cars do you use?", "Mercedes E-Class, BMW 5 Series, Audi A6 or similar, depending on availability. Tell us if you have a preference."],
           ["Can the tour start from the airport?", "Yes. Many guests do this on a long layover — we meet you at arrivals."]],
    gallery: ["lotusTemple", "redFort", "indiaGate"]
  }
  ,
  {
    slug: "agra-local-sightseeing-tour",
    title: "Agra local sightseeing tour by car with guide",
    cat: "taj-mahal", catLabel: "Taj Mahal tour packages",
    route: "Taj Mahal · Agra Fort · Baby Taj · Mehtab Bagh",
    days: 1, nights: 0, durationLabel: "8 hours",
    price: 3500,
    img: IMG.agraFort,
    summary: "A full day of Agra sightseeing from your Agra hotel or the railway station: the Taj Mahal, Agra Fort, the Baby Taj and sunset at Mehtab Bagh, with a private car and a licensed local guide.",
    facts: [["Duration", "About 8 hours"], ["Start", "Your Agra hotel, Agra Cantt or Agra Fort station"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Licensed, English speaking"], ["Closed", "Taj Mahal closed on Fridays"]],
    highlights: [
      "The Taj Mahal with a licensed local guide",
      "Agra Fort and the Musamman Burj, where Shah Jahan spent his last years",
      "Itimad-ud-Daulah, the 'Baby Taj', with inlay that came before the Taj Mahal's",
      "Sunset over the Taj from Mehtab Bagh across the river",
      "Pickup from any Agra hotel or railway station"
    ],
    itinerary: [
      { time: "7:00 AM", title: "Pickup in Agra", text: "Your driver and guide collect you from your hotel or the railway station." },
      { time: "7:30 AM", title: "The Taj Mahal", text: "Up to three hours inside the Taj Mahal — the story, the inlay, the best photograph points." },
      { time: "10:30 AM", title: "Breakfast break", text: "A break at your hotel or a local café." },
      { time: "11:30 AM", title: "Agra Fort", text: "The palaces of Akbar, Jahangir and Shah Jahan, and the view of the Taj from the Musamman Burj." },
      { time: "1:30 PM", title: "Lunch and a marble inlay workshop", text: "Lunch, then an optional twenty minutes with the inlay craftsmen — there is no obligation to buy." },
      { time: "3:30 PM", title: "The Baby Taj", text: "Itimad-ud-Daulah, the quiet marble tomb on the far bank of the Yamuna." },
      { time: "5:00 PM", title: "Sunset at Mehtab Bagh", text: "The Taj Mahal from the moonlight garden across the river, then back to your hotel or station." }
    ],
    includes: ["Private AC car and driver for the day", "Licensed English-speaking guide", "Bottled water", "Parking, fuel and taxes"],
    excludes: ["Monument entry tickets", "Meals", "Camera fees", "Tips"],
    faqs: [["Is this tour for people already staying in Agra?", "Yes — it starts and ends in Agra. If you are coming from Delhi, see our same day Agra tour by car."],
           ["Can you pick us up from the railway station?", "Yes, from Agra Cantt, Agra Fort or Raja ki Mandi station. Send us your train number."],
           ["What if we are in Agra on a Friday?", "The Taj Mahal is closed, so we swap it for Fatehpur Sikri and Akbar's Tomb, and see the Taj from Mehtab Bagh."]],
    gallery: ["taj", "agraFortPalace", "babyTaj"]
  },
  {
    slug: "mathura-vrindavan-day-tour-from-agra",
    title: "Mathura Vrindavan day tour from Agra",
    cat: "same-day", catLabel: "Same day tour packages",
    route: "Agra · Mathura · Vrindavan · Agra",
    days: 1, nights: 0, durationLabel: "10 hours",
    price: 4200,
    img: IMG.premMandir,
    summary: "Krishna's birthplace and the temple town where he grew up, in one private day from Agra — Krishna Janmabhoomi, Dwarkadhish, Banke Bihari, ISKCON and Prem Mandir lit up after dark.",
    facts: [["Duration", "About 10 hours"], ["Start", "Your Agra hotel or railway station"], ["Transport", "Private AC car"],
            ["Tour type", "Private"], ["Guide", "Local guide in Mathura and Vrindavan"], ["Distance", "About 55 km to Mathura"]],
    highlights: [
      "Shri Krishna Janmabhoomi, the birthplace of Lord Krishna",
      "Dwarkadhish Temple and Vishram Ghat in old Mathura",
      "Banke Bihari Temple, the most revered shrine in Vrindavan",
      "ISKCON's Krishna Balaram Mandir",
      "Prem Mandir lit up in colour after dark"
    ],
    itinerary: [
      { time: "8:00 AM", title: "Leave Agra", text: "About an hour and a quarter to Mathura by the expressway." },
      { time: "9:30 AM", title: "Krishna Janmabhoomi and Dwarkadhish", text: "The birthplace temple, then Dwarkadhish Temple and Vishram Ghat in the old city." },
      { time: "12:00 PM", title: "Lunch", text: "A vegetarian lunch — Braj is a vegetarian region." },
      { time: "1:30 PM", title: "Vrindavan", text: "ISKCON's Krishna Balaram Mandir and a walk through the old lanes while the bigger temples rest." },
      { time: "4:30 PM", title: "Banke Bihari", text: "Banke Bihari as it reopens for the evening darshan." },
      { time: "6:30 PM", title: "Prem Mandir", text: "The white marble temple as the evening lights come on, then the drive back to Agra." }
    ],
    includes: ["Private AC car and driver", "Local guide in Mathura and Vrindavan", "Bottled water", "Tolls, parking, fuel and taxes"],
    excludes: ["Meals", "Temple donations", "Tips"],
    faqs: [["Can this tour start from Delhi?", "Yes. From Delhi we usually stop in Vrindavan and Mathura on the way and continue to Agra for the night."],
           ["Can we take phones into the temples?", "Not into all of them — the Krishna Janmabhoomi complex does not allow phones or cameras. Leave them in the car."],
           ["Can we add the elephant conservation centre?", "Yes. The Wildlife SOS elephant centre is just outside Mathura; it needs to be booked in advance."]],
    gallery: ["premMandir", "jaliScreen", "taj"]
  }
];

/* Golden Triangle durations shown in the home-page selector */
const GT_OPTIONS = ["3 days", "4 days", "5 days", "6 days", "Custom"];
