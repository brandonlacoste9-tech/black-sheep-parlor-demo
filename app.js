/* EN-only i18n for Black Sheep Parlor demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(832) 742-5205",
    "hero.kicker": "Houston, Texas · Vibrant color specialists · Mon–Fri 9 AM–6 PM",
    "hero.title": "Color that<br>turns heads.",
    "hero.sub": "Rated 4.8 out of 5 from 249 reviews: vibrant coloring, edgy cuts, balayage and ombres — bold hair done right in Houston.",
    "hero.cta1": "Call (832) 742-5205",
    "hero.cta2": "See services",
    "trust.t1t": "Vibrant color experts",
    "trust.t1d": "Pastel, vivid & everything bold",
    "trust.t2t": "Edgy cuts",
    "trust.t2d": "Precision cuts with personality",
    "trust.t3t": "Highly rated",
    "trust.t3d": "4.8 stars from 249 reviews",
    "stats.s1n": "4.8\u2605",
    "stats.s1l": "from 249 reviews",
    "stats.s2n": "Houston",
    "stats.s2l": "& the Heights area",
    "stats.s3n": "Mon–Fri",
    "stats.s3l": "9 AM–6 PM",
    "stats.s4n": "Bold looks",
    "stats.s4l": "color & cut specialists",
    "services.kicker": "What we do",
    "services.title": "Color &amp; cuts — bold by design",
    "services.s1t": "Vibrant hair coloring",
    "services.s1d": "Bold, vivid color that holds — applied by colorists who live for bright hair.",
    "services.s2t": "Pastel dyes",
    "services.s2d": "Soft pastels and fantasy shades, custom-mixed for your hair.",
    "services.s3t": "Bright ombres",
    "services.s3d": "Seamless ombre blends with serious dimension and shine.",
    "services.s4t": "Balayage",
    "services.s4d": "Subtle or bold balayage, hand-painted for natural-looking depth.",
    "services.s5t": "Edgy haircuts",
    "services.s5d": "Cuts with attitude — shaped to your face and your vibe.",
    "services.s6t": "Pixelization &amp; trends",
    "services.s6d": "Pixel color and the latest techniques, done by people who keep up.",
    "why.kicker": "Why choose us",
    "why.title": "Houston's bold-color specialists",
    "why.intro": "From pastel dreams to full vivid transformations, Black Sheep Parlor is where Houston goes for color with personality. You will leave looking like you — louder.",
    "why.l1t": "Bold-color expertise",
    "why.l1d": "Vivid, pastel and fantasy shades — mixed custom, applied with care.",
    "why.l2t": "Edgy, precise cuts",
    "why.l2d": "Haircuts that match the color: sharp, modern, full of personality.",
    "why.l3t": "Honest consultations",
    "why.l3d": "We talk through your idea first — what will work, and how to keep it bright.",
    "why.l4t": "Fun, welcoming vibe",
    "why.l4d": "A salon that feels like hanging out with friends who do great hair.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Fresh vivid color, every day",
    "gallery.c2": "Cuts with personality",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.8 out of 5 by Houston customers",
    "reviews.more": "See what clients say about us — 4.8 stars from 249 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do I need an appointment?",
    "faq.a1": "Call us at (832) 742-5205 to book — walk-ins are welcome when a chair is open.",
    "faq.q2": "Can you do vivid color on dark hair?",
    "faq.a2": "Yes — we will talk you through lifting, custom mixing and maintenance during a consult.",
    "faq.q3": "Do you do balayage and ombre?",
    "faq.a3": "Absolutely — hand-painted balayage and seamless bright ombres are house specialties.",
    "faq.q4": "How do I keep my color bright?",
    "faq.a4": "We will set you up with the right aftercare so your color stays vivid between visits.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Friday<br>9:00 AM – 6:00 PM<br><br>Saturday – Sunday<br>Closed",
    "contact.cta": "Call now",
    "footer.tag": "Hair salon · Houston, Texas"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
