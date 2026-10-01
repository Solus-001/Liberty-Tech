export const site = {
  name: "Liberty Tech",
  short: "LT TECH",
  byline: "By Ntokzin & Sweets",
  region: "South Africa",
  tagline: "Freedom of tech — or just use Linux.",
  pitch:
    "Professional PC, laptop and mobile services. Fast, honest repairs for Windows, Linux and mobile devices — no jargon, no nonsense.",
  phones: [
    { display: "068 458 8896", href: "tel:+27684588896", wa: "27684588896" },
    { display: "072 629 9531", href: "tel:+27726299531", wa: "27726299531" },
  ],
  emails: ["maidenless.001@protonmail.com", "kea2tablet258@gmail.com"],
  whatsappPrefill:
    "Hi Liberty Tech, I need a repair quote. Device and issue: ",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const values = [
  {
    title: "Plain English",
    body: "We tell you what is wrong, what it costs, and what we will do. No scare quotes. No mystery fees.",
  },
  {
    title: "Windows, Linux, mobile",
    body: "Most shops pretend Linux does not exist. We live in it. Phones, laptops and desktops all sit on the same bench.",
  },
  {
    title: "Quoted before we touch it",
    body: "Diagnostics first. You approve the work. Then we fix it — same-week in most cases around Gauteng.",
  },
] as const;

export const services = [
  {
    id: "diagnostics",
    name: "Diagnostics",
    blurb: "Full hardware and software fault assessment.",
    from: "R250",
    range: "R250–390",
    icon: "scan",
  },
  {
    id: "malware",
    name: "Virus & malware removal",
    blurb: "Deep scan, clean and antivirus configuration.",
    from: "R350",
    range: "R350–650",
    icon: "shield",
  },
  {
    id: "recovery",
    name: "Data recovery",
    blurb: "Restore lost, deleted or corrupted files.",
    from: "R500",
    range: "R500–3500",
    icon: "harddrive",
  },
  {
    id: "imaging",
    name: "Disk imaging",
    blurb: "Full OS and drive image backup or restore.",
    from: "R350",
    range: "R350–500",
    icon: "disc",
  },
  {
    id: "tune",
    name: "Defragmentation & optimisation",
    blurb: "Speed tune-up, disk defrag and cleanup.",
    from: "R200",
    range: "R200–350",
    icon: "gauge",
  },
  {
    id: "password",
    name: "Local password reset",
    blurb: "Windows and Linux local account recovery.",
    from: "R200",
    range: "R200–350",
    icon: "key",
  },
  {
    id: "partition",
    name: "Drive partitioning",
    blurb: "Resize, split or merge disk partitions.",
    from: "R250",
    range: "R250–450",
    icon: "columns",
  },
  {
    id: "mobile",
    name: "Mobile phone reset",
    blurb: "Factory reset, FRP bypass and software flash.",
    from: "R150",
    range: "R150–450",
    icon: "phone",
  },
] as const;

export const tiers = [
  {
    id: "essential",
    name: "Essential",
    from: "R200",
    summary: "Slow, noisy, or overdue for a cleanup.",
    includes: [
      "Diagnostics",
      "Defragmentation & optimisation",
      "Local password reset",
    ],
    cta: "Book Essential",
    featured: false,
  },
  {
    id: "secure",
    name: "Secure",
    from: "R250",
    summary: "Infections, locked accounts, or a phone that will not start.",
    includes: [
      "Virus & malware removal",
      "Disk imaging backup",
      "Drive partitioning",
      "Mobile phone reset",
    ],
    cta: "Book Secure",
    featured: true,
  },
  {
    id: "rescue",
    name: "Rescue",
    from: "R500",
    summary: "Deleted files, a dead drive, or a machine that will not boot.",
    includes: [
      "Data recovery",
      "Full diagnostics included",
      "Disk imaging of recovered data",
      "Honest go / no-go after assessment",
    ],
    cta: "Book Rescue",
    featured: false,
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Send the problem",
    body: "WhatsApp a short note and a photo if you have one. Or drop the form. We reply in business hours.",
  },
  {
    n: "02",
    title: "We diagnose, then quote",
    body: "You get a price range before we open the chassis. No work starts without your yes.",
  },
  {
    n: "03",
    title: "Fix, test, hand back",
    body: "We repair, verify, and walk you through what changed — in English, not vendor-speak.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Linux laptop would not boot. They told me exactly what failed, quoted once, and had it back the same day. No lecture.",
    name: "Kgomotso P.",
    place: "Pretoria",
  },
  {
    quote:
      "Thought five years of photos were gone. Liberty Tech recovered the drive. Fair price, no scare tactics, WhatsApp the whole way.",
    name: "James N.",
    place: "Johannesburg",
  },
  {
    quote:
      "Phone locked after a family mix-up. Sorted in an afternoon. They explained FRP like I was a person, not a ticket.",
    name: "Ayesha R.",
    place: "Centurion",
  },
] as const;

export const devices = ["Laptop", "Desktop", "Phone", "Other"] as const;

export function waLink(number: string, text?: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text ?? site.whatsappPrefill)}`;
}
