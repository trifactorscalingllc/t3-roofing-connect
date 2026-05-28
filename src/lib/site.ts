export const SITE = {
  name: "T3 Roofing & Construction",
  shortName: "T3",
  owner: "Tony Elvetici",
  phoneDisplay: "(920) 600-1297",
  phoneHref: "tel:+19206001297",
  email: "ex.dynamite@hotmail.com",
  emailHref: "mailto:ex.dynamite@hotmail.com",
  address: {
    street: "2010 12th St",
    city: "Two Rivers",
    state: "WI",
    zip: "54241",
  },
  serviceArea: ["Two Rivers", "Manitowoc", "Mishicot", "Kewaunee", "Cleveland", "Newton"],
  tagline: "We pick up. We show up.",
  geo: { lat: 44.1539, lng: -87.5734 }, // Two Rivers, WI
  social: {
    facebook: "https://www.facebook.com/T3roofinginc/",
    yelp: "https://www.yelp.com/biz/t3-roofing-construction-two-rivers-2",
  },
} as const;

export const SERVICES = [
  {
    slug: "asphalt-shingles",
    title: "Asphalt Shingles",
    short: "Architectural shingles built to take Lake Michigan winters.",
    long: "Three-tab and architectural asphalt shingle installs. Manufacturer-approved underlayment, ice & water shield on every eave and valley. Built for Wisconsin's freeze-thaw cycles.",
  },
  {
    slug: "tear-offs",
    title: "Roof Tear-Offs",
    short: "Full tear-down to deck. No shingling over old failures.",
    long: "We strip the roof down to bare deck, inspect every sheet of plywood, replace what's rotted, and start clean. The right way, every time.",
  },
  {
    slug: "re-roofs",
    title: "Re-Roofs",
    short: "Complete roof replacement, end to end.",
    long: "From the dumpster on the driveway to the final cleanup with a magnet for stray nails — we manage the whole project so you don't have to.",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    short: "Leaks, storm damage, flashing — fixed fast.",
    long: "Active leak? Storm just rolled through? Call. We answer. We come look. We give you a straight answer about what it needs.",
  },
  {
    slug: "new-construction",
    title: "New Construction",
    short: "From foundation to ridge cap. Built right.",
    long: "Full new-build construction services across the Lakeshore. We work with homeowners, contractors and builders to deliver tight, well-built homes.",
  },
  {
    slug: "siding",
    title: "Siding",
    short: "Vinyl, LP, fiber cement — installed clean.",
    long: "New siding, re-siding, and storm-damage replacement. Tight seams, straight lines, proper flashing around every penetration.",
  },
  {
    slug: "flooring",
    title: "Flooring",
    short: "Hardwood, LVP, tile — interior work too.",
    long: "We don't only work outside. Subfloor, underlayment and finish flooring — installed level and tight.",
  },
  {
    slug: "insulation",
    title: "Insulation",
    short: "Attics, walls and rim joists. Lower bills.",
    long: "Blown-in and batt insulation to bring older Lakeshore homes up to code and cut heating bills through the long Wisconsin winter.",
  },
] as const;