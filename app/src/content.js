export const hero = {
  eyebrow: "Egypt → Bay Area → AI, product, and systems",
  title: "A cleaner story. More motion. Less noise.",
  body:
    "I started teaching myself to code in Egypt at 12. Since then the path has moved through product taste, AI systems, data-heavy work, and a constant obsession with making complex things feel calm.",
  primaryAction: { label: "Follow the journey", href: "#journey" },
  secondaryAction: { label: "See hobbies", href: "#hobbies" },
  chips: ["Self-taught", "Started at 12", "AI + product", "Black & gold"],
  stats: [
    { value: "12+", label: "years since I started" },
    { value: "4", label: "life chapters" },
    { value: "4", label: "hobbies that keep me balanced" },
  ],
  timeline: [
    { label: "Egypt", value: "Start" },
    { label: "Bay Area", value: "Growth" },
    { label: "AI + data", value: "Depth" },
    { label: "Now", value: "Craft" },
  ],
};

export const journeyCards = [
  {
    step: "01",
    period: "Egypt · age 12",
    title: "The beginning was pure curiosity.",
    body: "Coding started early, self-taught, and driven by experimentation more than structure.",
    details: ["Self-taught", "Internet-native learning", "Built constantly"],
    visual: "origin",
  },
  {
    step: "02",
    period: "Bay Area",
    title: "Then the work got taste and direction.",
    body: "Being around stronger product thinking pushed me beyond code into interface quality, narrative, and trust.",
    details: ["Product taste", "Interaction design", "Startup energy"],
    visual: "route",
  },
  {
    step: "03",
    period: "AI · data · research",
    title: "The systems got deeper.",
    body: "My center of gravity moved toward intelligence, workflows, data-rich surfaces, and practical execution.",
    details: ["AI workflows", "Trading + research", "System design"],
    visual: "systems",
  },
  {
    step: "04",
    period: "Now",
    title: "Now the focus is sharper craft.",
    body: "The goal is fewer generic surfaces, stronger story, and products that feel deliberate at every layer.",
    details: ["Cinematic polish", "Technical rigor", "Clearer narrative"],
    visual: "signal",
  },
];

export const hobbiesCards = [
  {
    title: "Scuba diving",
    eyebrow: "Depth",
    body: "I like the calm, pressure, and focus of going below the surface.",
    visual: "scuba",
  },
  {
    title: "Guitar",
    eyebrow: "Rhythm",
    body: "I started playing sophomore year of high school. Tiny adjustments, better tone, and repetition still pull me in.",
    visual: "guitar",
  },
  {
    title: "DJing",
    eyebrow: "Energy",
    body: "I started DJing freshman year of college. I love transitions, pacing, and controlling the feeling of a room.",
    visual: "dj",
  },
  {
    title: "Snowboarding",
    eyebrow: "Motion",
    body: "I started snowboarding in 2025. It is balance, speed, and commitment in one clean line.",
    visual: "snow",
  },
  {
    title: "Photography",
    eyebrow: "Framing",
    body: "Light, composition, and knowing what deserves focus feels close to product design.",
    visual: "photo",
  },
];

export const metrics = [
  { value: 12, suffix: "+", label: "years since I started" },
  { value: 4, suffix: "", label: "life chapters" },
  { value: 4, suffix: "", label: "core hobbies" },
  { value: 1, suffix: "", label: "thread connecting everything" },
];
